const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  twitterID: "string"
});

mongoose.model("users", userSchema);
