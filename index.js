const request = require('request');

exports.handler = async (event) => {
    const apiKey = process.env.weatherAppKey;
    const zip = '59901';
    const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apiKey}`
    let message = 'None';
    
    request(url, function (err, response, body) {
      if(err){
        console.log('error:', err);
      } else {
        const weather = JSON.parse(body);
        message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
      }
    });

    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda! ' + message),
    };

    return response;
};