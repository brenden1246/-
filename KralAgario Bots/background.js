chrome.browserAction.onClicked.addListener(function() {
  window.open("http://kralagario.com/", "_new")
}), chrome.webRequest.onBeforeRequest.addListener(function() {
  return {
    cancel: !0
  }
}, {
  urls: ["*://kralagario.com/main_out.js*"]
}, ["blocking"]);