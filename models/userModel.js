const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
mongoose.promise = Promise

const Schema = mongoose.Schema;


const UserSchema = new Schema({
  name: {
    type: String,
    // unique: true
  },
  username: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    unique: true
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post"
    }
  ]
});


const User = mongoose.model("User", UserSchema);

module.exports = User;