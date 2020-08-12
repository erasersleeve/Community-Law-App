const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  where: { type: String, required: true },
  what: { type: String, required: true },
  when: { type: Date, default: Date.now }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;