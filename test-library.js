const m = require('./dist/index')

const instance = new m.ApiService('ea3a2e3b4b38941604bc75f61d41ea48', 'en','m')

instance.searchByName('Chinandega')
.then(result=> {
    console.log('resultado',result)
})
.catch(_err => {
    console.log('error', _err)
})


// Searching by GeoLocalization
// Chinandega, Nicaragua
// instance.searchByGeoLocalization({lat: 12.6275729, lon:-87.1348292})
//     .then(result=> {
//         console.log('resultado geo \n',result)
//     })
//     .catch(_err => {
//         console.log('error', _err)
//     })

// Searching by postal code
// Ezcazu Costa rica
// instance.searchByZipCode('10201','cr')
//     .then(result=> {
//         console.log('resultado geo \n',result)
//     })
//     .catch(_err => {
//         console.log('error', _err)
//     })
