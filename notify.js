var notify = (function () {
  
  var fallback = function (title,options) {
    window.alert(title + "\n\n" + options.body);
  };
  
  //detect browser support
  if ("serviceWorker" in navigator) {
    
    try {
      navigator.serviceWorker.register("sw.js").then(function () {
        
        //success, use service worker to send notification
        
        return function (title,options) {

          var note = function (title,options) {
            navigator.serviceWorker.ready.then(function(registration) {
              registration.showNotification(title,options);
            });
          }
      
          //permission granted
          if (Notification.permission === "granted") {
        
            //show notification
            note(title,options);
          }
          else {//permission not granted
        
            //requesting permission
            console.info("[INFO] Requesting notification permission");
            Notification.requestPermission(function (permission) {
              // If the user accepts, let's create a notification
              if (permission === "granted") {
                note(title,options);
              }
              else {
                console.error("[WARN] Notification permission denied");
                console.info("[INFO] Falling back to window.alert");
        
                //show notification via fallback
                fallback(title,options);
              }
            });
        
          }
      
        }
    
        
      }).catch(function (err) {
        
        //error occured
        console.error("[ERRR] " + err);
      });
    }
    catch (err) {
      
      //not supported, will fallback to other options without service workers
      supported = false;
      console.error("[ERRR] " + err);
    }
    

  }
  
  if ("Notification" in window) {
    return function (title,options) {
      
      var note = function (title,options) {
        var notification = new Notification(title,options);
      }
      
      //permission granted
      if (Notification.permission === "granted") {
        
        //show notification
        note(title,options);
      }
      else {//permission not granted
        
        //requesting permission
        console.info("[INFO] Requesting notification permission");
        Notification.requestPermission(function (permission) {
          // If the user accepts, let's create a notification
          if (permission === "granted") {
            note(title,options);
          }
          else {
            console.error("[WARN] Notification permission denied");
            console.info("[INFO] Falling back to window.alert");
        
            //show notification via fallback
            fallback(title,options);
          }
        });
        
      }
    }
  }
  
  if ("webkitNotifications" in window) {
    return function (title,options) {
      
      //permission not granted
      if (webkitNotifications.checkPermission() !== 0) {
        
        //requesting permission
        console.info("[INFO] Requesting notification permission");
        webkitNotifications.requestPermission();
        
      }
      
      //permission denied
      if (webkitNotifications.checkPermission() !== 0) {
      
        console.warn("[WARN] Notification permission denied");
        console.info("[INFO] Falling back to window.alert");
        
        //show notification via fallback
        fallback(title,options);
      }
      
      //show notification
      var note = new webkitNotifications.createNotification(options.icon,title,options.body);
      note.show();
      
    }
  }
  
  console.warn("[WARN] Notifications are not available");
  console.info("[INFO] Falling back to window.alert");
  
  return fallback;
  
})();


/*
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}


function midwayNotificationTest () {
  notify("hi","msg","data:image/png;base64,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")
}

function notify (title,message,icon) {
if ("Notification" in window) {
  if (Notification.permission === "granted") {

    navigator.serviceWorker.ready.then(function(registration) {
      registration.showNotification(title,{body:message,icon:icon});
    });
    //var note = new Notification(title,{body:message,icon:icon});
  }
  else {
    console.log("[INFO] Requesting notification permission");
    Notification.requestPermission(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        var note = new Notification(title,{body:message,icon:icon});
      }
      else {
        console.log("[ERRR] Notification permissions are denied")
      }
    });
  }
}
else if ("webkitNotifications" in window) {
    if (webkitNotifications.checkPermission() === 0) {
      var note = new webkitNotifications.createNotification(icon,title,message);
      note.show();
    }
    else {
      console.log("[INFO] Requesting notification permission");
      webkitNotifications.requestPermission();
    }
  }
  else {
    console.log("[ERRR] Notifications are not available");
  }
}*/