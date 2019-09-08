'use strict';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.msg === 'bookPage') {
    chrome.browserAction.onClicked.addListener(tab => {
      chrome.tabs.sendMessage(tab.id, { msg: 'doTheTing' });
    });
  }

  chrome.browserAction.setIcon({
    path: request.newIconPath,
    tabId: sender.tab.id
  });
});
