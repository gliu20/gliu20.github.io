---
title: Hiding the GRUB menu in Ubuntu 20.04
description: Removing the GRUB menu is a bit difficult in the latest version of Ubuntu, so here's a guide on how to fix that.
---

<!-- TODO add cover images

image: /assets/images/2021-04-23-multiplication-cover.png
image_caption: Photo created by me
image_alt: Image of mathematical symbols like subtraction, addition, multiplication, and equal signs

-->

If you're like me, most of the time I prefer to just work in Linux and only rarely use Windows in my dual-boot setup. So, I'd rather only see the GRUB menu if I'm holding down a key to switch into Windows and otherwise simply default to Ubuntu. The process to set that up is a little involved, though, so be warned!

But first off, a mandatory disclaimer.

> **Disclaimer** 
> 
> Follow these instructions at your own risk. Make sure to backup your data and/or GRUB configuration in case something goes wrong. Furthermore, editing your GRUB configuration has a risk in resulting in an unbootable system, so make sure to do your own research. 

# Hiding the menu in GRUB options
The process outlined here is mainly inspired by [Arch Linux's Guide to hiding GRUB unless shift key is pressed](https://wiki.archlinux.org/title/GRUB/Tips_and_tricks#Hide_GRUB_unless_the_Shift_key_is_held_down), but with some slight modifications.

First, we have to enable the hidden menu by adding the following options in `/etc/default/grub`

```bash
GRUB_FORCE_HIDDEN_MENU="true"
GRUB_GFXPAYLOAD_LINUX=keep
```

You might be wondering why we have to enable `GRUB_GFXPAYLOAD_LINUX=keep`. In fact, it's currently a known error where hwmatch (a module that has allowlists and denylists for certain hardware platforms) is omitted from 64-bit based linux distributions, so GRUB scripts relying on the module will show an error such as `error: can't find command hwmatch` [^1]. The fix recommended in the bug report is to enable `GRUB_GFXPAYLOAD_LINUX=keep` which causes the GRUB scripts to skip the logic requiring `hwmatch`, effectively hiding the error [^2].

# Creating the scripts to skip the GRUB menu unless shift key is held
Then we copy the [script](https://gist.githubusercontent.com/anonymous/8eb2019db2e278ba99be/raw/257f15100fd46aeeb8e33a7629b209d0a14b9975/gistfile1.sh) linked to in Arch Linux's guide to `/etc/grub.d/31_hold_shift`. However, we have to modify a couple lines for it to work on Ubuntu. If we don't, then you'll see an error like `/etc/grub.d/31_hold_shift: 10: source: not found` when running `update-grub`.

To fix the issue, we remove the following lines,
```bash
prefix="/usr"
exec_prefix="${prefix}"
datarootdir="${prefix}/share"

export TEXTDOMAIN=grub
export TEXTDOMAINDIR="${datarootdir}/locale"
source "${datarootdir}/grub/grub-mkconfig_lib"
```

replacing it with the below.
```bash
prefix="/usr"
exec_prefix="/usr"
datarootdir="/usr/share"
quick_boot="1"

export TEXTDOMAIN=grub
export TEXTDOMAINDIR="${datarootdir}/locale"

. "$pkgdatadir/grub-mkconfig_lib"
```
These lines were taken directly from the other grub scripts already in `/etc/grub.d/`. It seems like the `source` command in particular is not available when running `update-grub`.

An important thing to note is that this script uses keystatus, which might not be available as pointed out in the [Arch Linux wiki](https://wiki.archlinux.org/title/GRUB/Tips_and_tricks#Hide_GRUB_unless_the_Shift_key_is_held_down). If that is the case, you likely won't be able to enter the GRUB menu without removing all the modifications we've done so far. 

# Finalizing the GRUB script
Now that we finished editing the GRUB script, just make it executable and run update grub.

```bash
sudo chmod a+x /etc/grub.d/31_hold_shift
sudo update-grub
```
Now reboot, and all should be good to go!

[^1]: https://bugs.launchpad.net/ubuntu/+source/grub2-signed/+bug/1840560
[^2]: https://bugs.launchpad.net/ubuntu/+source/grub2-signed/+bug/1840560/comments/4
