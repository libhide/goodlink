const isBookPage = () => {
  const detailListItems = document.querySelectorAll('#detailBullets_feature_div ul li');
  const isbn13SearchText = 'ISBN-13';
  const isbn10SearchText = 'ISBN-10';
  
  let found;
  found = [...detailListItems].find(item => item.textContent.includes(isbn13SearchText));
  if (!found) {
    found = [...detailListItems].find(item => item.textContent.includes(isbn10SearchText));
  }

  return {
    isBookPage: found ? true : false,
    isbn: found ? found.innerText.split(':')[1].trim() : ''
  };
};

export { isBookPage };
