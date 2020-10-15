const isBookPage = () => {
  const detailListItems = document.querySelectorAll('#detailBullets_feature_div ul li');
  const searchText = 'ISBN-10';
  let found;

  found = [...detailListItems].find(item => item.textContent.includes(searchText));

  return {
    isBookPage: found ? true : false,
    isbn: found ? found.innerText.split(':')[1].trim() : ''
  };
};

export { isBookPage };
