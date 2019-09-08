'use strict';

import { getBookUrl } from './gdreads-service.js';
import { developerKey } from './secrets.js';

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

chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  if (request.msg === 'openGR') {
    const isbn = request.isbn;
    const bookUrl = await getBookUrl(developerKey, isbn);
    window.open(bookUrl, '_blank');
  }
});
