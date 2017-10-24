# marmoCatalog

> Simple Vue app to showcase catalog of marmoset designs. Marmoset .mview files are stored in S3 and AWS Gateway with Lambda used as a API service.

## Config files

You would need to create config file `src\config.js` that should look like this

```javascript
export const API_URL = '';
export const LOGO = 'app logo link here';
export const PLACEHOLDER = 'placeholder for design thumbnail';
export const MARMOSET_URL = '//viewer.marmoset.co/main/marmoset.js';
export const MARMOSET_BACKET = 'link to marmoset .mview location';

// Dialog will show up if no marmoset ID supplied
export const DIALOG_BUTTON_TEXT = '';
export const DIALOG_TITLE = '';
export const DIALOG_BODY = '';

```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
