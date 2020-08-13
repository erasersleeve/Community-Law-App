const router = require("express").Router();
const postRoutes = require("./posts");

//Book Routes
router.use("/posts", postRoutes);
router.use("/users", userRoutes);

// For anything else, render the html page
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
  });

  
module.exports = router;
