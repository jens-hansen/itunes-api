# iTunes-Api

Simplifies usage of the iTunes Api.

## Usage

Search API:
```javascript
iTunesApi.search({
    term: 'game of thrones',
    country: 'DE', limit: 1
})
  .then(res => console.log(res.resultCount));
```

Lookup API:
```javascript
iTunesApi.lookup({
      id: 1256129534,
      country: 'DE',
  })
  .then(res => console.log(res));
```


