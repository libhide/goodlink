'use strict';

const GR_BASE_SHOW_URL = 'https://www.goodreads.com/book/show';
const GR_BASE_GET_ID_URL = 'https://www.goodreads.com/book/isbn_to_id';

const getBookId = async (developerKey, isbn) => {
  const params = {
    mode: 'cors'
  };

  const url = `${GR_BASE_GET_ID_URL}?key=${developerKey}&isbn=${isbn}`;
  return fetch(url, params).then(response => response.json());
};

const getBookUrl = async (developerKey, isbn) => {
  const bookId = await getBookId(developerKey, isbn);
  return `${GR_BASE_SHOW_URL}/${bookId}`;
};

const developerKey = 'CySWpMKIMy8hbEhfMicvQ';

const MSG_BOOK_PAGE_NOTIFY = 'bookpage';
const MSG_OPEN_GR = 'opengr';
const MSG_EXT_CLICKED = 'clicked';

class Message {
  constructor(message, data = '') {
    this.message = message;
    this.data = data;
  }

  static new(props) {
    return new this(props.name);
  }
}

const openGRListener = async (request, sender, sendResponse) => {
  if (request.message === MSG_OPEN_GR) {
    const isbn = request.data;
    const bookUrl = await getBookUrl(developerKey, isbn);
    // window.open(bookUrl, '_blank');
    chrome.tabs.create({ url: bookUrl, active: false });
  }
};

const bookPageNotificationListener = (request, sender, sendResponse) => {
  if (request.message === MSG_BOOK_PAGE_NOTIFY) {
    chrome.browserAction.onClicked.addListener(tab => {
      const message = new Message(MSG_EXT_CLICKED);
      chrome.tabs.sendMessage(tab.id, message);
    });

    chrome.browserAction.setIcon({
      path: request.data,
      tabId: sender.tab.id
    });
  }
};

chrome.runtime.onMessage.addListener(bookPageNotificationListener);
chrome.runtime.onMessage.addListener(openGRListener);
