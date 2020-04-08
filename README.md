# Openweathermap API library Instructions

## Use


### How to add
```js
const lib = require('module');
```
```typescript
import lib from 'module'
```

### How to use it

* Get the weather by City Name
```js
const instance = new lib.ApiService('ea3a2e3b4b38941604bc75f61d41ea48', 'en','m')

 instance.searchByName('Chinandega')
 .then(result=> {
     console.log('result',result)
 })
 .catch(_err => {
     console.log('error', _err)
 })

// You'll have a response like this
```
```json
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
