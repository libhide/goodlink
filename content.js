'use strict';

const isBookPage = () => {
  const isbnQuery = document.querySelectorAll('.content li')[3];
  return isbnQuery != undefined && isbnQuery.innerText.includes('ISBN');
};

const isbnQuery = document.querySelectorAll('.content li')[3];
const isbn = isbnQuery.innerText.split(':')[1].trim();

if (isBookPage()) {
  // notify background script
  chrome.runtime.sendMessage({ newIconPath: 'icon-yay.png' });
} else {
  console.log('nooope');
}

chrome.runtime.sendMessage({
  msg: 'bookPage'
});

chrome.runtime.onMessage.addListener(({ msg }, sender, sendResponse) => {
  if (msg === 'doTheTing') console.log(isbn);
});
