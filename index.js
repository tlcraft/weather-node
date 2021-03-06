const request = require('request');

exports.handler = async (event, context) => {
  const apiKey = process.env.weatherAppKey;
  const zip = event.zipCode;
  const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&appid=${apiKey}`
  
  return new Promise((resolve, reject) => {
    request(url, function (err, response, body) {
      if(err) {
        console.error('error:', err);
        reject('Server Error.');
      } else {
        console.log('Success!');
        const weather = JSON.parse(body);
        resolve(weather);
      }
    });
  });
};