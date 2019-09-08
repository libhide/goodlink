'use strict';

chrome.browserAction.onClicked.addListener(tab => {
  chrome.tabs.sendMessage(tab.id, { msg: 'doTheTing' });
});
