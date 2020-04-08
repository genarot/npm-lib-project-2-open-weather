const m = require('./dist/index');

const instance = new m.ApiService('<APIKEY>', 'en', 'm');

// Searching by Name
instance.searchByName('Chinandega')
    .then(result => {
        console.log('result', result)
    })
    .catch(_err => {
        console.log('error', _err)
    });


// Searching by GeoLocalization
// Chinandega, Nicaragua coordinates
instance.searchByGeoLocalization({lat: 12.6275729, lon: -87.1348292})
    .then(result => {
        console.log('result geo \n', result)
    })
    .catch(_err => {
        console.log('error', _err)
    });

// Searching by postal code
// Ezcazu Costa rica
instance.searchByZipCode('10201', 'cr')
    .then(result => {
        console.log('result geo \n', result)
    })
    .catch(_err => {
        console.log('error', _err)
    });
