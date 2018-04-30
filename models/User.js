const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  twitterID: "string",
  first_name: "string",
  last_name: "string",
  image: "String",
  username: "string"
});

mongoose.model("users", userSchema);
