'use strict';

import { getBookUrl } from './../shared/gdreads-service.js';
import { developerKey } from './../../secrets.js';
import { MSG_BOOK_PAGE_NOTIFY, MSG_OPEN_GR, MSG_EXT_CLICKED } from './../shared/constants.js';
import Message from './../shared/models/message.js';

const openGRListener = async (request, sender, sendResponse) => {
  if (request.message === MSG_OPEN_GR) {
    const isbn = request.data;
    const bookUrl = await getBookUrl(developerKey, isbn);
    console.log(bookUrl);
    browser.tabs.create({ url: bookUrl });
  }
};

const handleExtensionClick = (tab) => {
  const message = new Message(MSG_EXT_CLICKED);
  browser.tabs.sendMessage(tab.id, message);
};

const bookPageNotificationListener = (request, sender, sendResponse) => {
  if (request.message === MSG_BOOK_PAGE_NOTIFY) {
    if (!browser.browserAction.onClicked.hasListener(handleExtensionClick)) {
      browser.browserAction.onClicked.addListener(handleExtensionClick);
    }

    browser.browserAction.setIcon({
      path: request.data,
      tabId: sender.tab.id
    });
  }
};

browser.runtime.onMessage.addListener(openGRListener);
browser.runtime.onMessage.addListener(bookPageNotificationListener);
