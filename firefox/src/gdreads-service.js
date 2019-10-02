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

export { getBookUrl };
