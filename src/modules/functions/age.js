require('dotenv').config();
const axios = require('axios').default;
const { globalHandler } = require('../handler.js');

exports.data = {
  name: 'age',
   type: 1,
  description: 'Guess age based on given name.',
  options: [
  {
    "name": "name",
    "description": "Name to guess age of.",
    "type": 3,
    "required": true
  }]
}

const action = async (body) => {

  var response = await axios
  .get('https://api.agify.io/?name=' + body.data.options[0].value)
  .then(function (request) {

    age = request.data.age
    return age
  })
  .catch(function (error) {

    console.log("ERROR: Age not retrieved.")
    console.log(error)
    return age
  })

  return response
}

exports.handler = (event) => {
  globalHandler(event, action)
}
