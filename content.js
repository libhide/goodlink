'use strict';

const isBookPage = () => {
  const isbnQuery = document.querySelectorAll('.content li')[3];
  return isbnQuery != undefined && isbnQuery.innerText.includes('ISBN');
};

const isbnQuery = document.querySelectorAll('.content li')[3];
const isbn = isbnQuery.innerText.split(':')[1].trim();

if (isBookPage()) {
  // notify background script
  console.log('book page');
} else {
  console.log('nooope');
}

chrome.runtime.onMessage.addListener(({ msg }, sender, sendResponse) => {
  if (msg === 'doTheTing') console.log(isbn);
});
