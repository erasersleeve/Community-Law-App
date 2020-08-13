const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

// // BACKTEAM CREATED DATABASE SEEDS!!!!
// const UserSchema = new Schema({
//   name: {
//     type: String,
//     unique: true
//   },
//   email: {
//     type: String,
//     unique: true
//   },
//   password: {
//     type: String,
//     unique: true
//   },
//   posts: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: "Post"
//     }
//   ]
// });

const User = mongoose.model("User", UserSchema);

userSchema.methods = {
  checkPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password)
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10)
  }
}

//Define pre-hooks for the save method
userSchema.pre("save", function (next) {
  if (!this.password){
    console.log ("models/userModel.js ======NO PASSWORD PROVIDED=======")
    next()
  } else {
    console.log("models/userModels.js hashPassword in pre save");
    
    this.password = this.hashPassword(this.password)

    next()
  }
})

module.exports = User;