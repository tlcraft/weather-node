const request = require('request');

exports.handler = async (event, context) => {
  const apiKey = process.env.weatherAppKey;
  const zip = '59901';
  const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&appid=${apiKey}`
  
  return new Promise((resolve, reject) => {
    request(url, function (err, response, body) {
      if(err) {
        console.log('error:', err);
        reject('Server Error.');
      } else {
        const weather = JSON.parse(body);
        const message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        resolve(message);
      }
    });
  });
};