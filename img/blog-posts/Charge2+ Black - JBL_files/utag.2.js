//~~tv:7110.20140623
//~~tc: Adding location mapping support

window.GoogleAnalyticsObject = "";
if(window.GoogleAnalyticsObject==""){window.GoogleAnalyticsObject="ga"};
window[window.GoogleAnalyticsObject] = window[window.GoogleAnalyticsObject]||function(){(window[window.GoogleAnalyticsObject].q=window[window.GoogleAnalyticsObject].q||[]).push(arguments);};

//tealium universal tag - utag.sender.7110 ut4.0.201606031356, Copyright 2016 Tealium.com Inc. All Rights Reserved.

try {
  (function (id, loader) {
    var u = {};
    utag.o[loader].sender[id] = u;
    // Start Tealium loader
    // Please do not modify
    if (utag.ut === undefined) { utag.ut = {}; } if (utag.ut.loader === undefined) { u.loader = function (o) { var a, b, c, l; a = document; if (o.type === "iframe") { b = a.createElement("iframe"); b.setAttribute("height", "1"); b.setAttribute("width", "1"); b.setAttribute("style", "display:none"); b.setAttribute("src", o.src); } else if (o.type === "img") { utag.DB("Attach img: " + o.src); b = new Image(); b.src = o.src; return; } else { b = a.createElement("script"); b.language = "javascript"; b.type = "text/javascript"; b.async = 1; b.src = o.src; } if (o.id) { b.id = o.id; } if (typeof o.cb === "function") { b.hFlag = 0; b.onreadystatechange = function () { if ((this.readyState === 'complete' || this.readyState === 'loaded') && !b.hFlag) { b.hFlag = 1; o.cb(); } }; b.onload = function () { if (!b.hFlag) { b.hFlag = 1; o.cb(); } }; } l = o.loc || "head"; c = a.getElementsByTagName(l)[0]; if (c) { utag.DB("Attach to " + l + ": " + o.src); if (l === "script") { c.parentNode.insertBefore(b, c); } else { c.appendChild(b); } } }; } else { u.loader = utag.ut.loader; }
    // End Tealium loader
    u.ev={'view':1,'link':1};
    u.o=window[window.GoogleAnalyticsObject];
    u.created=false;
    // Perform operation for all trackers (params used differently for "set")
    u.all=function(e, o, v){
      for (var i=0;i<u.data.account.length;i++) {
        var t=(u.data.name[i]?u.data.name[i]+".":"");
        if(e=="set" || e=="require"){
          u.o(t+e,o,v)
        }else{
          u.o(t+e,o);
        }
      }
    }
    // TODO: Provide UI config option to call create before the Extensions run (if not using dynamic accounts)
      u.map={"event_action":"eventAction","event_category":"eventCategory","event_label":"eventLabel","outlet_store":"pageview-dimension20","event_noninteraction":"nonInteraction"};
  u.extend=[function(a,b){ try{ if(b['dom.url'].toString().indexOf('success')>-1||b['dom.url'].toString().indexOf('sucess')>-1||b['dom.url'].toString().indexOf('zahlung-erfolgreich')>-1){b['confirmation_type']='Success'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['dom.url'].toString().indexOf('pending')>-1){b['confirmation_type']='Pending'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['dom.url'].toString().indexOf('paymenterror')>-1){b['confirmation_type']='Error'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['dom.url'].toString().indexOf('fail')>-1){b['confirmation_type']='Fail'} } catch(e){ utag.DB(e) }  }];

    u.send = function (a, b) {
      if (u.ev[a] || u.ev.all !== undefined) {
        //##UTENABLEDEBUG##utag.DB("send:##UTID##");
        u.o=window[window.GoogleAnalyticsObject];
        b.ga_events=b.ga_events||[];
        u.addEvent=function(v){
          if(typeof v.eventCategory=="undefined" || typeof v.eventAction=="undefined"){
            utag.DB("GA event Category or Action is not set");
            return;
          }
          if(v.eventValue && isNaN(parseInt(v.eventValue))){
            utag.DB("GA event Value is not a number");
            v.eventValue = null;
          }else{
            v.eventValue = parseInt(v.eventValue) || null;
          }
          b.ga_events.push(v);
        }

        var c, d, e, f, g;

        u.data = {
          //##UTVARconfig_<id from config>##
          "qsp_delim" : "&",
          "kvp_delim" : "=",
          "base_url" : "",
          "a" : a,
          "cookieDomain" : "" || utag.loader.lh(),
          "name" : "BSTOCK,EMEA,GLOBAL,GLOBAL_BACKUP,LEGACY",
          "account" : "UA-62658916-7,UA-62658916-1,UA-44733059-3,UA-44733059-6,UA-17214702-1",
          "anonymizeIp" : ("false" === "true" ? true : false),
          "allowLinker" : true,
          "crossDomainTrack" : "",
          "enhancedLinkAttribution" : "true",
          "displayfeatures" : "true",
          "screenView" : "false",
          // E-Commerce Vars
          "order_id" : "",
          "order_total" : "",
          "order_shipping" : "",
          "order_tax" : "",
          "order_store" : "",
          "order_currency" : "",
          "product_id" : [],
          "product_name" : [],
          "product_category" : [],
          "product_quantity" : [],
          "product_unit_price" : []
        };

        for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};

        c = [];

        // Start Mapping
        for (d in utag.loader.GV(u.map)) {
          if (b[d] !== undefined && b[d] !== "") {
            e = u.map[d].split(",");
            for (f = 0; f < e.length; f++) {
              u.data[e[f]] = b[d];
            }
          }
        }
        // End Mapping

        u.data.order_id = u.data.order_id || b._corder;
        u.data.order_total = u.data.order_total || b._ctotal;
        u.data.order_shipping = u.data.order_shipping || b._cship;
        u.data.order_tax = u.data.order_tax || b._ctax;
        u.data.order_store = u.data.order_store || b._cstore;
        u.data.order_currency = u.data.order_currency || b._ccurrency;
        if (u.data.product_id.length === 0 && b._cprod !== undefined) { u.data.product_id = b._cprod.slice(0); }
        if (u.data.product_name.length === 0 && b._cprodname !== undefined) { u.data.product_name = b._cprodname.slice(0); }
        if (u.data.product_category.length === 0 && b._ccat !== undefined) { u.data.product_category = b._ccat.slice(0); }
        if (u.data.product_quantity.length === 0 && b._cquan !== undefined) { u.data.product_quantity = b._cquan.slice(0); }
        if (u.data.product_unit_price.length === 0 && b._cprice !== undefined) { u.data.product_unit_price = b._cprice.slice(0); }

        if (typeof u.data.account === "string") { u.data.account = u.data.account.replace(/\s/g,"").split(",") };
        if (typeof u.data.name === "string") { u.data.name = u.data.name.replace(/\s/g,"").split(",") };

        if (u.created === false) {
          u.created = true;
          for (f = 0; f < u.data.account.length; f++) {
            c = new Object();
            if (u.data.siteSpeedSampleRate) {c.siteSpeedSampleRate = parseInt(u.data.siteSpeedSampleRate)};
            c.cookieDomain = u.data.cookieDomain;
            if (u.data.cookieExpires || u.data.cookieExpires==="0") {c.cookieExpires = parseInt(u.data.cookieExpires)};
            if (u.data.legacyCookieDomain) {c.legacyCookieDomain = u.data.legacyCookieDomain};
            c.allowLinker = u.data.allowLinker;
            if (typeof u.data.name[f] !== "undefined" && u.data.name[f] !== "") {c.name = u.data.name[f]};
            u.o("create", u.data.account[f], c);
          }
        }

        if (u.data.allowLinker === true && u.data.crossDomainTrack !== undefined && typeof u.data.crossDomainTrack === "string") {
          u.all("require", "linker");
          u.data.crossDomainTrack = u.data.crossDomainTrack.split(",");
          u.all("linker:autoLink", u.data.crossDomainTrack);
        };

        if (u.data.anonymizeIp) {u.all("set", 'anonymizeIp', true)};
        if (u.data.uid) {u.all("set", "&uid", u.data.uid)};
        if (u.data.page) {u.all("set", "page", u.data.page)};
        if (u.data.title) {u.all("set", "title", u.data.title)};
        if (u.data.location) {u.all("set", "location", u.data.location)};
        if (u.data.nonInteraction) {u.all("set", "nonInteraction", true)};
        if (u.data.campaignName) {u.all("set", "campaignName", u.data.campaignName)};
        if (u.data.campaignSource) {u.all("set", "campaignSource", u.data.campaignSource)};
        if (u.data.campaignMedium) {u.all("set", "campaignMedium", u.data.campaignMedium)};
        if (u.data.campaignContent) {u.all("set", "campaignContent", u.data.campaignContent)};
        if (u.data.campaignKeyword) {u.all("set", "campaignKeyword", u.data.campaignKeyword)};
        if (u.data.displayfeatures === "true" || u.data.displayfeatures === true) { u.all("require", "displayfeatures"); }

        for (d in utag.loader.GV(u)) {
          if (d.indexOf("metric") == 0 || d.indexOf("dimension") == 0 || d.indexOf("contentGroup") == 0) {
            u.all("set", d, u.data[d]); 
          }
        }

        if (u.data.a === "view") {
          g = {};
          g.hitType = "pageview";
          // Enhanced Link Attribution
          if (u.data.enhancedLinkAttribution == "true") {
            u.all("require", "linkid", "linkid.js");
          }
          // Send page view request
          u.all("send", g);
          u.data.id = (u.data.id ? u.data.id : u.data.order_id);
          if (u.data.id && !(u.data.id instanceof Array)) {
            u.all("require", "ecommerce", "ecommerce.js");
            g = {};
            g.id = u.data.id;
            g.affiliation = (u.data.affiliation ? u.data.affiliation : u.data.order_store);
            g.revenue = (u.data.revenue ? u.data.revenue : u.data.order_total);
            g.shipping = (u.data.shipping ? u.data.shipping : u.data.order_shipping);
            g.tax = (u.data.tax ? u.data.tax : u.data.order_tax);
            g.currency = (u.data.currency ? u.data.currency : u.data.order_currency);
            u.all('ecommerce:addTransaction', g);
            
            for (f = 0; f < u.data.product_id.length; f++) {
              g = {};
              g.id = u.data.id;
              g.sku = u.data.product_id[f];
              g.name = (u.data.product_name[f] ? u.data.product_name[f] : u.data.product_id[f]);
              g.category = (u.data.product_category[f] ? u.data.product_category[f] : "");
              g.price = (u.data.product_unit_price[f] ? u.data.product_unit_price[f] : "1.00");
              g.quantity = (u.data.product_quantity[f] ? u.data.product_quantity[f] : "1");
              u.all('ecommerce:addItem', g);
            }
            u.all('ecommerce:send');
          }else if (u.data.id instanceof Array && u.data.id.length>0) {
            u.all("require", "ecommerce", "ecommerce.js");
            // an array of order ids will fire multiple transacations
            var lastindex = 0;
            for (f = 0; f < u.data.id.length; f++) {
    
              if (f === u.data.id.length-1 || (u.data.id[f] !== u.data.id[f+1])) {
                g = {};
                g.id = u.data.id[f];
                g.affiliation = (u.data.affiliation && typeof u.data.affiliation[f] !== "undefined" ? u.data.affiliation[f] : u.data.order_store);
                g.revenue = (u.data.revenue && typeof u.data.revenue[f] !== "undefined" ? u.data.revenue[f] : u.data.order_total);
                g.shipping = (u.data.shipping && typeof u.data.shipping[f] !== "undefined" ? u.data.shipping[f] : u.data.order_shipping);
                g.tax = (u.data.tax && typeof u.data.tax[f] !== "undefined" ? u.data.tax[f] : u.data.order_tax);
                g.currency = (u.data.currency ? u.data.currency : u.data.order_currency);
                u.all('ecommerce:addTransaction', g);
    
                for (e = lastindex; e < f + 1; e++) {
                  g = {};
                  g.id = u.data.id[f];
                  g.sku = u.data.product_id[e];
                  g.name = (u.data.product_name[e] ? u.data.product_name[e] : u.data.product_id[e]);
                  g.category = (u.data.product_category[e] ? u.data.product_category[e] : "");
                  g.price = (u.data.product_unit_price[e] ? u.data.product_unit_price[e] : "1.00");
                  g.quantity = (u.data.product_quantity[e] ? u.data.product_quantity[e] : "1");
                  u.all('ecommerce:addItem', g);
                  
                }
                lastindex = f + 1;
              }
            }
            u.all('ecommerce:send');
          }
        }
        
        if (u.data.eventCategory && u.data.eventAction) {
          g = {};
          g.hitType = "event";
          g.eventCategory = u.data.eventCategory;
          g.eventAction = u.data.eventAction;
          if (u.data.eventLabel) {g.eventLabel = u.data.eventLabel};
          if (typeof u.data.eventValue !== "undefined" && u.data.eventValue !== "") {g.eventValue = u.data.eventValue;}
          u.all("send", g);
          // clear variables after each event
          u.data.eventCategory = u.data.eventAction = u.data.eventLabel = u.data.eventValue = "";
        }

        for (e = 0; e < b.ga_events.length; e++) {
          g = {};
          g.hitType = "event";
          g.eventCategory = b.ga_events[e].eventCategory;
          g.eventAction = b.ga_events[e].eventAction;
          g.eventLabel = b.ga_events[e].eventLabel;
          g.eventValue = b.ga_events[e].eventValue;
          u.all("send", g);
        }

        if (u.data.socialNetwork && u.data.socialAction && u.data.socialTarget) {
          g = {};
          g.hitType = "social";
          g.socialNetwork = u.data.socialNetwork;
          g.socialAction = u.data.socialAction;
          g.socialTarget = u.data.socialTarget;
          u.all("send", g);
          u.data.socialNetwork = u.data.socialAction = u.data.socialTarget = "";
        }

        if (u.data.timingCategory && u.data.timingVar && u.data.timingValue) {
          g = {};
          g.hitType = "timing";
          g.timingCategory = u.data.timingCategory;
          g.timingVar = u.data.timingVar;
          g.timingValue = u.data.timingValue;
          g.timingLabel = u.data.timingLabel || "";
          u.all("send", g);
        }

        if (u.data.screenView === "true" || u.data.screenView === true) {
          g = {};
          g.hitType = "screenview";
          g.appName = u.data.appName || "";
          g.appId = u.data.appId || "";
          g.appVersion = u.data.appVersion || "";
          g.appInstallerId = u.data.appInstallerId || "";
          g.screenName = u.data.screenName || "";
          u.all("send", g);
        }

        // Map account ID to ga-disable to disable tracking for that account
        if (u.data["ga-disable"]) {window["ga-disable-" + u.data["ga-disable"]] = true};

        (function() {
          var id='tealium-tag-7110';
          if (document.getElementById(id)) {return;}
          u.o.l=1*new Date();
          var e = document.createElement('script'); e.async = true; 
          e.id = id;
          e.src = '//www.google-analytics.com/analytics.js';
          var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(e, s);
        })();

        //##UTENABLEDEBUG##utag.DB("send:##UTID##:COMPLETE");
      }
    };
    utag.o[loader].loader.LOAD(id);
  }('2', 'harman.jbl-contao'));
} catch (error) {
  utag.DB(error);
}
//end tealium universal tag
