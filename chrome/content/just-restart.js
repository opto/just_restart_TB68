/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";

function jrExec(){

//borrowed from restart-application-1.2.1 
var boot=Components.classes['@mozilla.org/toolkit/app-startup;1'].getService(Components.interfaces.nsIAppStartup); 
boot.quit(Components.interfaces.nsIAppStartup.eForceQuit|Components.interfaces.nsIAppStartup.eRestart);  let {BrowserUtils} = ChromeUtils.import ("resource://gre/modules/BrowserUtils.jsm", {});
//  BrowserUtils.restartApplication();
}
