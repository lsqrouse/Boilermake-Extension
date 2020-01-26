 chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
      console.log('The color is green.');
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {urlContains: 'https://'},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
  });
  
  chrome.identity.getProfileUserInfo(function(info) { email = info.email; });

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    sendResponse( {email: email})
});