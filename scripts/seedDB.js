const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/crimedb"
);

const postSeed = [
    {
        what: "Joe Smith",
        where: "South Philadelphia",
        when: "August, 25 2020",
    },
    {
        what: "Jane Doe",
        where: "Northeast Philadelphia",
        when: "August, 25 2020",
    },
    {
        what: "Doe Smith",
        where: "Overbrook",
        when: "August, 25 2020",
    },
];

db.Post
.remove({}).then(() => db.User.collection.insertMany(postSeed))
.then(data => {
    console.log(data.result.n + " post submitted!");
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
})