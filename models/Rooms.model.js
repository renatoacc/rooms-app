const { Schema, model } = require("mongoose");

const roomSchema = new Schema({
  name: { type: String },
  description: { type: String },
  imageUrl: { type: String },
  owner: { type: Schema.Types.ObjectId, ref: "User" },
  reviews: [], // we will update this field a bit later when we create review model
});

const Rooms = model("Rooms", roomSchema);

module.exports = Rooms;
