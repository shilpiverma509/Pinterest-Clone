const mongoose = require("mongoose");

const { Schema } = mongoose;

const pinsSchema = new Schema({
  pinID: "string",
  link: "string", //url of the webpage where the PIN was created
  url: "string", //URL of the PIN on Pinetrest
  board: "string", //board that the pin is on
  createdAT: Date,
  image: "string", //default image of the PIN,
  _creator: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

const Pins = mongoose.model("Pins", pinsSchema);
module.exports = Pins;
