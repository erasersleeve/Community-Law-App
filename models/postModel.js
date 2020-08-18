const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postSchema = new Schema({
  //change to lat lon
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
  description: { type: String, required: true },
  experience: { type: Boolean, required: true},
  badgeNumber: { type:  String, required: false },
  date: { type: Date, default: Date.now },
  // file: {type: String, required: false}
});
const Post = mongoose.model("Post", postSchema);
module.exports = Post;