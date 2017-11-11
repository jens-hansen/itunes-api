# iTunes-Helper

Simplifies usage of the iTunes Api.

## Installation


Node:
```bash
npm install itunes-helper
```
```javascript
const iTunesHelper = require('itunes-helper');
```

In Webbrowser:
```html
<script src="https://unpkg.com/itunes-helper/lib/itunes-api.min.js"></script>
```

## Usage

Search API:
```javascript
iTunesHelper.search({
    term: 'game of thrones',
    country: 'DE', 
    limit: 1,
})
  .then(res => console.log(res));
```

Lookup API:
```javascript
iTunesHelper.lookup({
      id: 1256129534,
      country: 'DE',
  })
  .then(res => console.log(res));
```


