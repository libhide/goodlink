'use strict';

const isBookPage = () => {
  const detailListItems = document.querySelectorAll('.content li');
  const searchText = 'ISBN-10';
  let found;

  found = [...detailListItems].find(item => item.textContent.includes(searchText));

  return {
    isBookPage: found ? true : false,
    isbn: found ? found.innerText.split(':')[1].trim() : ''
  };
};

const bookPageCheck = isBookPage();

if (bookPageCheck.isBookPage) {
  chrome.runtime.sendMessage({ newIconPath: 'icon-yay.png' });
}

chrome.runtime.sendMessage({
  msg: 'bookPage'
});

chrome.runtime.onMessage.addListener(({ msg }, sender, sendResponse) => {
  if (msg === 'doTheTing') {
    chrome.runtime.sendMessage({ msg: 'openGR', isbn: bookPageCheck.isbn });
  }
});
