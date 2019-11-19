var { ExtensionCommon } = ChromeUtils.import("resource://gre/modules/ExtensionCommon.jsm");
var { Services } = ChromeUtils.import("resource://gre/modules/Services.jsm");

var myapi = class extends ExtensionCommon.ExtensionAPI {
  getAPI(context) {
    return {
      myapi: {
        async restart() {
//borrowed from restart-application-1.2.1 
var boot=Components.classes['@mozilla.org/toolkit/app-startup;1'].getService(Components.interfaces.nsIAppStartup); 
boot.quit(Components.interfaces.nsIAppStartup.eForceQuit|Components.interfaces.nsIAppStartup.eRestart);  let {BrowserUtils} = ChromeUtils.import ("resource://gre/modules/BrowserUtils.jsm", {});
 //        Services.wm.getMostRecentWindow("mail:3pane").alert("Hello " + "!");
 //                 let recentWindow = Services.wm.getMostRecentWindow("mail:3pane");
 //         if (recentWindow) {
//            recentWindow.MsgSearchMessages();
//          }
        },
      },
    };
  }
};
