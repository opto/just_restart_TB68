function klickaktion() {
  browser.myapi.restart();
}
browser.browserAction.onClicked.addListener(klickaktion);
