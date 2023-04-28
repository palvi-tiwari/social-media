const mongoose = require("mongoose");

const oneToOneChatMessage = mongoose.Schema({
  userMessage: { type: String, required: true },
  sendTo: { type: String, required: true },
  sender: { type: String, required: true },
  reciver: { type: String, required: true },
});
module.exports = mongoose.model("oneToOneChatMessage", oneToOneChatMessage);
