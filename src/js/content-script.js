(async () => {
  const src = chrome.extension.getURL('/src/js/content.js');
  const content = await import(src);
  content.main(/* chrome: no need to pass it */);
})();
