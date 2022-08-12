/**
 * A Lambda function that replies to interaction with static string
 */

const { globalHandler } = require("../handler.js");

exports.data = {
  name: "ping",
  type: 1,
  description: "replies with pong!",
};

const action = async (body) => {
  // May do something here with body
  // Body contains Discord command details
  let response = {
    content: "pong!",
  };
  return response;
};

exports.handler = (event) => {
  globalHandler(event, action);
};
