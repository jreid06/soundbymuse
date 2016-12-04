//~~tv:20010.20140312
//~~tc: Tealium Custom Container

/*
  Tealium Custom Container Notes:
  - Add sending code between "Start Tag Sending Code" and "End Tag Sending Code".
  - Add JavaScript tag library code between "Start Tag Library Code" and "End Tag Library Code".
  - Add JavaScript code only, do not add HTML code in this file.
  - Remove any <script> and </script> tags from the code you place in this file.

  Loading external JavaScript files (Libloader):
  - If you need to load an additional external JavaScript file, un-comment the singe-line JavaScript comments ("//") within the following Libloader sections near the bottom of this file:
      - "Start Libloader Function Call"
      - "End Libloader Function Call"
      - "Start Libloader Callback Function"
      - "End Libloader Callback Function"
  - After un-commenting, insert the path to the external JavaScript file you want to load.
  - Finally, within the Libloader callback function, insert the JavaScript code that should run after the external JavaScript file has loaded.
*/

/* Start Tag Library Code */
/* End Tag Library Code */

/* Start Libloader Library Code */
/* Please Do Not Edit This Section */
if (typeof utag.ut == "undefined") {
  utag.ut = {};
}
utag.ut.libloader2 = function(o, a, b, c, l) {
  a = document;
  b = a.createElement('script');
  b.language = 'javascript';
  b.type = 'text/javascript';
  b.src = o.src;
  if (o.id) { b.id = o.id }
  if (typeof o.cb == 'function') {
    b.hFlag = 0;
    b.onreadystatechange = function() {
      if ((this.readyState == 'complete' || this.readyState == 'loaded') && !b.hFlag) {
        b.hFlag = 1; o.cb();
      }
    };
    b.onload = function() {
      if (!b.hFlag) {
        b.hFlag = 1;
        o.cb();
      }
    };
  }
  l = o.loc || 'head';
  c = a.getElementsByTagName(l)[0];
  if (c) {
    if (l == 'script') {
      c.parentNode.insertBefore(b, c);
    } else {
      c.appendChild(b);
    }
    utag.DB("Attach to " + l + ": " + o.src);
  }
};
/* End Libloader Library Code */

//tealium universal tag - utag.sender.custom_container ut4.0.201608241823, Copyright 2016 Tealium.com Inc. All Rights Reserved.
try {
  (function(id, loader) {
    var u = utag.o[loader].sender[id] = {};
    u.ev = {'view' : 1};
    u.initialized = false;
      u.map={};
  u.extend=[];

    u.send = function(a, b) {
      if (u.ev[a] || typeof u.ev.all != "undefined") {
        //##UTENABLEDEBUG##utag.DB("send:##UTID##");
        var c, d, e, f, i;
        u.data = {
          /* Initialize default tag parameter values here */
          /* Example: */
          /* "account_id" : "1234567" */
          /* A value mapped to "account_id" in TiQ will replace this default value. */
        };

        /* Start Tag-Scoped Extensions Code */
        /* Please Do Not Edit This Section */
        
        /* End Tag-Scoped Extensions Code */

        /* Start Mapping Code */
        for (d in utag.loader.GV(u.map)) {
          if (typeof b[d] != 'undefined') {
            e = u.map[d].split(',');
            for (f = 0; f < e.length; f++) {
              u.data[e[f]] = b[d];
            }
          }
        }
        /* End Mapping Code */

        /* Start Tag Sending Code */
	
	  var MTIProjectId='8738db37-ac1c-450c-820c-4d619cf8c1f3'; 
	(function() { 
	  var mtiTracking = document.createElement('script'); 
	  mtiTracking.type='text/javascript'; 
	  mtiTracking.async='true'; 
	  mtiTracking.src=('https:'==document.location.protocol?'https:':'http:')+'//fast.fonts.net/t/trackingCode.js'; 
	  (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild( mtiTracking ); 
	})(); 
	
        /* End Tag Sending Code */

        /* Start Libloader Callback Function */
        /* Un-comment the single-line JavaScript comments ("//") to use this Libloader callback function. */
        //u.myCallback = function() {
          //u.initialized = true;
          /* Start Libloader Callback Tag Sending Code */
            // Insert your post-Libloader tag sending code here.
          /* End Libloader Callback Tag Sending Code */
        //};
        /* End Libloader Callback Function */

        /* Start Libloader Function Call */
        /* Un-comment the single-line JavaScript comments ("//") to use Libloader. */
          //if (!u.initialized) {
            //utag.ut.libloader2({src: //PATH/TO/YOUR/JS/FILE.js", cb: u.myCallback});
          //} else {
            //u.myCallback();
          //}
        /* End Libloader Function Call */

        //##UTENABLEDEBUG##utag.DB("send:##UTID##:COMPLETE");
      }
    };
    utag.o[loader].loader.LOAD(id);
  })('34', 'harman.jbl-contao');
} catch (e) {
}
//end tealium universal tag

