# Goodlink

A direct link to Goodreads from Amazon.



## Develop

1. Clone the repo
2. Run `npm i`
3. Create a `secrets.js` file in the project root with the following format

```js
const developerKey = "GOODREADS_DEV_KEY";

export { developerKey };
```

4. Run `npm run build:dev` to build dev versions of the extension or `npm run build:dist` to build minified, production ready versions.
