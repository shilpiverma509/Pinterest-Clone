const mongoose = require("mongoose");
const Pins = require("./pins");

const { Schema } = mongoose;

const boardsSchema = new Schema({
  title: "string",
  boardID: "string",
  name: "string",
  image: "string",
  url: "string",
  description: "string",
  createdAt: Date,
  privacy: Boolean,
  _creator: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }, //reference to the a particular user who created this board
  pins: [Pins.schema]
});

mongoose.model = ("Board", boardsSchema);

//GET/api/boards -->retur a list of surveys created by a current_user
//POST/api/surveys -> create a new survey
