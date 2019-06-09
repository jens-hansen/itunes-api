# iTunes-Helper

[![Build Status](https://travis-ci.org/jens-hansen/itunes-api.svg?branch=master)](https://travis-ci.org/jens-hansen/itunes-api)

Simplifies usage of the iTunes Api.

## Installation

Node:

```bash
npm install itunes-helper
```

```javascript
const iTunesHelper = require('itunes-helper')
```

In Webbrowser:

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script src="https://unpkg.com/itunes-helper/lib/itunes-helper.min.js"></script>
```

## Usage

Search API:

```javascript
iTunesHelper
    .search({
        term: 'game of thrones',
        country: 'DE',
        limit: 1,
    })
    .then(res => console.log(res))
```

Lookup API:

```javascript
iTunesHelper
    .lookup({
        id: 1256129534,
        country: 'DE',
    })
    .then(res => console.log(res))
```
