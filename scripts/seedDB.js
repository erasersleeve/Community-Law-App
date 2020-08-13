const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/CrimeDb"
);

const postSeed = [
  {
    where: "The Dead Zone",
    what: "Police were called to investigate Krypton sightings",
    when:  new Date(Date.now())     
  },
  {
    where: "Menilmontant",
    what: "Police help wedding party carry on partying",
    when:  new Date(Date.now())     
  },
  {
    where: "Gatorade Plaza",
    what: "Police arrest 11 and 10 year old girls for selling lemonade without permit",
    when:  new Date(Date.now())     
  },
  {
    where: "April 18, 1930",
    what: "Today there were no reports",
    when:  new Date(Date.now())     
  },
  {
    where: "9 Lives",
    what: "Police respond to cat stuck in tree. Police called the firemen.",
    when:  new Date(Date.now())     
  },
];

db.Post
  .remove({})
  .then(() => db.Post.collection.insertMany(postSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
