const mongoose = require("mongoose");

const activityUser = mongoose.Schema({
  activityMessage: { type: String, required: true },
  userId: { type: String, required: true },
});
module.exports = mongoose.model("activityUser", activityUser);
