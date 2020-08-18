const Double = require('@mongoosejs/double');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  //change to lat lon
  lat: { type: Double, required: false },
  lng: { type: Double, requried: false },
  description: { type: String, required: false },
  experience: { type: Boolean, required: false},
  badgeNumber: { type: String, required: false },
  date: { type: Date, default: Date.now },
  // file: {type: String, required: false}
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
