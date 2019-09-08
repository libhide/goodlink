'use strict';

const isBookPage = isbnQuery => {
  return isbnQuery != undefined && isbnQuery.innerText.includes('ISBN');
};

const isbnQuery = document.querySelectorAll('.content li')[3];

if (isBookPage()) {
  console.log('book page');
} else {
  console.log('nooope');
}
