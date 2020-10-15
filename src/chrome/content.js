'use strict';

import { MSG_BOOK_PAGE_NOTIFY, MSG_OPEN_GR, MSG_EXT_CLICKED } from './../shared/constants.js';
import Message from './../shared/models/message.js';
import { isBookPage } from './../shared/goodlink-service';

const bookPageCheck = isBookPage();

if (bookPageCheck.isBookPage) {
  const coloredIcons = {
    '16': './../icons/colored.png',
    '48': './../icons/colored@3x.png',
    '128': './../icons/colored@8x.png'
  };
  const message = new Message(MSG_BOOK_PAGE_NOTIFY, coloredIcons);
  chrome.runtime.sendMessage(message);
}

const handleExtensionClick = (request, sender, sendResponse) => {
  if (request.message === MSG_EXT_CLICKED) {
    const message = new Message(MSG_OPEN_GR, bookPageCheck.isbn);
    chrome.runtime.sendMessage(message);
  }
};

chrome.runtime.onMessage.addListener(handleExtensionClick);
