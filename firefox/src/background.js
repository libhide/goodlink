'use strict';

import { getBookUrl } from './gdreads-service.js';
import { developerKey } from './../../secrets.js';
import { MSG_BOOK_PAGE_NOTIFY, MSG_OPEN_GR, MSG_EXT_CLICKED } from './constants.js';
import Message from './models/message.js';

const openGRListener = async (request, sender, sendResponse) => {
  if (request.message === MSG_OPEN_GR) {
    const isbn = request.data;
    const bookUrl = await getBookUrl(developerKey, isbn);
    browser.tabs.create({ url: bookUrl });
  }
};

const bookPageNotificationListener = (request, sender, sendResponse) => {
  if (request.message === MSG_BOOK_PAGE_NOTIFY) {
    browser.browserAction.onClicked.addListener(tab => {
      const message = new Message(MSG_EXT_CLICKED);
      browser.tabs.sendMessage(tab.id, message);
    });

    browser.browserAction.setIcon({
      path: request.data,
      tabId: sender.tab.id
    });
  }
};

browser.runtime.onMessage.addListener(bookPageNotificationListener);
browser.runtime.onMessage.addListener(openGRListener);