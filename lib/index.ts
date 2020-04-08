const API_KEY = 'ea3a2e3b4b38941604bc75f61d41ea48'

// const url = 'https://api.openweathermap.org/data/2.5/weather?q=Leon&units=metric&lang=es&appid='+ API_KEY;
// To search weather info by city name
// const url = 'https://api.openweathermap.org/data/2.5/weather?q=Leon&units=metric&appid='+ API_KEY;
// To search weather info by Lat and Long, Nagarote
// const url = 'https://api.openweathermap.org/data/2.5/weather?lat=12.26&lon=-86.56&units=metric&appid='+ API_KEY;

// To search by zip
// Mountain view
// const url = 'https://api.openweathermap.org/data/2.5/weather?zip=94040,us&units=metric&appid='+ API_KEY;
// Nagarote
const url = 'https://api.openweathermap.org/data/2.5/weather?zip=22200&units=metric&appid='+ API_KEY;


// import axios from 'axios'
// import chalk from 'chalk';

// axios.get(url)
//     .then(result => {
//         console.log(result.data)
//     }).catch(_err => {
//         console.log('Error', chalk.red(_err.message))
// })
export * from './services'
