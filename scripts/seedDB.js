const mongoose = require("mongoose");
const db = require("../models");

<<<<<<< HEAD
// This file empties the Books collection and inserts the books below
=======

>>>>>>> 793b85b5143ef685b9f3017fef144952d82b0bdb

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/CrimeDb"
);


const userSeed = [
  {
    name: "Tim",
    email: "tim@tim.tim",
    password: "timtimtim",
    posts: [
      {
        where: "The Dead Zone",
        what: "Police were called to investigate Krypton sightings",
        when:  new Date(Date.now())     
      },
      {
        where: "Menilmontant",
        what: "Police help wedding party carry on partying",
        when:  new Date(Date.now())     
      }
    ]
  }, {
    name: "Chris",
    email: "chris@chris.chris",
    password: "chrischrischris",
    posts: [
      
        {
          where: "Gatorade Plaza",
          what: "Police arrest 11 and 10 year old girls for selling lemonade without permit",
          when:  new Date(Date.now())     
        },{
          where: "April 18, 1930",
          what: "Today there were no reports",
          when:  new Date(Date.now())     
        },{
          where: "9 Lives",
          what: "Police respond to cat stuck in tree. Police called the firemen.",
          when:  new Date(Date.now())     
        }
    
    ]
  }  
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
<<<<<<< HEAD
=======

>>>>>>> 793b85b5143ef685b9f3017fef144952d82b0bdb
