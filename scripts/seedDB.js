const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/CrimeDb"
);


const postSeed = [
  {
    name: "",
    email: "",
    password: "",
    posts: [
      {
        lat: "",
        lng: "",
        description: "",
        experience: Boolean,
        badgeNumber: "",
        file: "",
        date: new Date(Date.now())     
      },
    ]
  }  
];

db.Post
  .remove({})
  .then(() => db.Post.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
