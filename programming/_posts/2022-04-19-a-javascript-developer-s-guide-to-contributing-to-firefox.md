---
project: firefox
title: A Javascript developer's Guide to Contributing to Firefox
description: A quick tutorial to get started with contributing to the Javascript parts of Firefox
image: /assets/images/2022-04-19-firefox-js-guide-to-firefox.png
image_caption: Illustration by me
image_alt: Firefox
---

> **Note** While I've done my best to make sure the content here is correct, there may be slight inaccuracies. 

This is just going to be a quick tutorial to getting started with contributing to the Javascript parts of Firefox. I guess in a way, this would be *a what I wish I knew when I started [creating patches for Firefox](https://firefox-source-docs.mozilla.org/contributing/contribution_quickref.html#to-submit-a-patch)*, or *what I wished the [Firefox source docs](firefox-source-docs.mozilla.org/) covered*.

# Overview of files
Firefox's Javascript files are organized into js modules `.jsm` and regular js `.js` files. `.js` files are generally used for visible content and often associated with a `.xhtml` file. By contrast, `.jsm` files define a bunch of functions which can be used by other modules or `.js` files.

Javascript files of both types can be found in the `browser` folder and `toolkit`. There might be more js files elsewhere, but I haven't worked with them yet.

Some interesting places:
- `browser/actors` and `toolkit/actors` - `.jsm` files that define [actors](https://firefox-source-docs.mozilla.org/dom/ipc/jsactors.html). These are interesting since [the boundary between parent and child can have interesting security implications](https://blog.mozilla.org/attack-and-defense/2021/04/27/examining-javascript-inter-process-communication-in-firefox/).
- `browser/base/content` and `toolkit/components` -  These generally define user-facing components
- `toolkit/modules` - [Toolkit modules](https://firefox-source-docs.mozilla.org/toolkit/modules/toolkit_modules/index.html) are usable from Firefox for Desktop, Firefox for Android, Thunderbird, etc. 

From my understanding, I'm pretty sure `browser/` is for things specific to Firefox for Desktop, `mobile/` is for Firefox for Android, and `toolkit/` is for all platforms and Thunderbird, though I may be wrong.

# Anatomy of a module

```js
"use strict";

var EXPORTED_SYMBOLS = ["UrlUtils"];
```
`EXPORTED_SYMBOLS` exports the module. I've pretty much only seen this contain one symbol, which would be the module that the `.jsm` file defines.


## Importing modules
There are several ways to import files. 
```js
const { XPCOMUtils } = ChromeUtils.import(
  "resource://gre/modules/XPCOMUtils.jsm"
);
const { Services } = ChromeUtils.import("resource://gre/modules/Services.jsm");
```
This method using `ChromeUtils.import` imports modules immediately. Generally, we should only use this for modules that we know are always loaded such as `Services` and `XPCOMUtils`. 

If we want to defer loading of modules to when we actually need the modules, we can use:
```js
ChromeUtils.defineModuleGetter(
  this,
  "PluralForm",
  "resource://gre/modules/PluralForm.jsm"
);
```

If there are multiple modules to load, we can use:
```js
XPCOMUtils.defineLazyModuleGetters(this, {
  AppConstants: "resource://gre/modules/AppConstants.jsm",
  BrowserSearchTelemetry: "resource:///modules/BrowserSearchTelemetry.jsm",
  FormHistory: "resource://gre/modules/FormHistory.jsm",
  PlacesUtils: "resource://gre/modules/PlacesUtils.jsm",
});
```

## Defining the module
Not sure what I can add here other than looking at the structure of other `.jsm` files.

## Testing
Test files are generally found in a `test` or `tests` folder in the place where you found the js file or it might be in a parent folder. There are multiple types of tests available, but I will focus on browser tests and xpcshell tests. Browser tests simulate the entire browser and can simulate clicks and other user interaction. XPCShell tests are more limited and doesn't expose the full browser. XPCShell tests are preferred since it runs faster.

### How does the build system (mach) know which tests to run?
Tests are declared in `browser.ini` or `xpcshell.ini` files in their respective test folders. The files are pretty self-explanatory and to add a test you have to add an entry like `[browser_contextmenu_linkselect.js]`.

### More details
Firefox docs does a good job here so there isn't much to add other than reading:
- https://firefox-source-docs.mozilla.org/testing/mochitest-plain/index.html
- https://firefox-source-docs.mozilla.org/testing/xpcshell/index.html

### Test methods
You have access to these objects to help you test:
- [EventUtils](https://searchfox.org/mozilla-central/source/testing/mochitest/tests/SimpleTest/EventUtils.js) - Available in the global scope of the test. There are also methods in the other objects to get this object if not available.
- [BrowserTestUtils](https://searchfox.org/mozilla-central/source/testing/mochitest/BrowserTestUtils/BrowserTestUtils.jsm) - Available in the global scope of the test
- [ContentTaskUtils](https://searchfox.org/mozilla-central/source/testing/mochitest/BrowserTestUtils/ContentTaskUtils.jsm) - Available when run inside of a ?content? process. This has way less access than BrowserTestUtils.
- [SpecialPowers](https://searchfox.org/mozilla-central/source/testing/specialpowers/content/SpecialPowersChild.jsm) - For when you need to get data from a ?content? process to the more privileged ?browser?.
    - A useful function: 
    ```js
    const someValue = SpecialPowers.spawn(
        gBrowser.selectedBrowser,
        [arg1, arg2, arg3, etc],
        function(arg1, arg2, arg3, etc) {
            // do something
            return someValue;
        }
    );
    ```
    where the function is something we want to run on the test page. This allows us to do so from the test and also optionally access `someValue`. `someValue` should be something we are able to be clone, otherwise this would fail. 

    > Note that the function will be serialized and then run on the test page so it doesn't have access to anything outside of the arguments that we pass in and the test page (aka no access to BrowserTestUtils and SpecialPowers).

# Conclusion
That's all! Hope this was helpful!! I'm not really sure how to conclude this other than happy hacking! If you have questions, feel free to join [the Matrix (I have no clue why it's called the Matrix even though the app is running on element, but whatever, it sounds cool!!)](https://chat.mozilla.org). Rooms like #introduction, #general, #developers, #fx-desktop-dev will probably be helpful.