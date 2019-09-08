'use strict';

const getBookId = async (developerKey, isbn) => {
  const params = {
    mode: 'cors'
  };

  const url = `https://www.goodreads.com/book/isbn_to_id?key=${developerKey}&isbn=${isbn}`;
  return fetch(url, params).then(response => response.json());
};

const getBookUrl = async (developerKey, isbn) => {
  const bookId = await getBookId(developerKey, isbn);
  console.log(bookId);
  return `https://www.goodreads.com/book/show/${bookId}`;
};

export { getBookUrl };
