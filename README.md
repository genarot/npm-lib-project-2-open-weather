# Openweathermap API library Instructions

## Installation

We must to follow the below instruction
```shell script
    npm install <package>
```

## Use

### How to import the library
```js
const lib = require('<package>');
```
```typescript
import lib from '<package>'
```

### How to use it

* Search current weather by City Name
```js
const instance = new lib.ApiService('ea3a2e3b4b38941604bc75f61d41ea48', 'en','m')

 instance.searchByName('Chinandega')
 .then(result=> {
     console.log('result',result)
 })
 .catch(_err => {
     console.log('error', _err)
 })
```
* Search current weather by GeoLocalization
```js
const instance = new lib.ApiService('ea3a2e3b4b38941604bc75f61d41ea48', 'en','m')

 instance.searchByName('Chinandega')
 .then(result=> {
     console.log('result',result)
 })
```

* Search current weather by Zip code
```js
const instance = new lib.ApiService('ea3a2e3b4b38941604bc75f61d41ea48', 'en','m')

 instance.searchByName('Chinandega')
 .then(result=> {
     console.log('result',result)
 })
```

All the methods will have a reponse like this
```javascript
{
  coord: { lon: -87.13, lat: 12.63 },
  weather: [
    {
      id: 803,
      main: "Clouds",
      description: "broken clouds",
      icon: "04d"
    }
  ],
  base: "stations",
  main: {
    temp: 33,
    feels_like: 34.31,
    temp_min: 33,
    temp_max: 33,
    pressure: 1013,
    humidity: 41
  },
  visibility: 10000,
  wind: { speed: 2.1, deg: 360 },
  clouds: { all: 54 },
  dt: 1586362361,
  sys: {
    type: 1,
    id: 7172,
    country: "NI",
    sunrise: 1586345989,
    sunset: 1586390409
  },
  timezone: -21600,
  id: 3620381,
  name: "Chinandega",
  cod: 200
}
```
