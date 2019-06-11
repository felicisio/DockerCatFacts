var express = require('express')
var app = express()
var request = require('request');

app.get('/', function (req, res) {
  const url = "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1";
  request.get(url, (error, response, body) => {
    let json = JSON.parse(body);
    console.log(body);
    res.json(json.text);
  });
})

app.listen(8000, () => {
  console.log('Meow Meow Meow!')
})
