const router = require("express").Router();
const mongoose = require("mongoose");

// take the user and rooms models
const Rooms = require("../models/Rooms.model");
const User = require("../models/User.model");

// take middlewares for check login
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");

router.get("/allrooms", isLoggedIn, async (req, res, next) => {
  try {
    const allrooms = await Rooms.find();
    res.render("allrooms", { allrooms });
  } catch (err) {
    console.error(err);
  }
});

router.get("/rooms", isLoggedIn, (req, res, next) => {
  res.render("rooms");
});

router.post("/rooms", isLoggedIn, (req, res) => {
  try {
    const newRoom = new Rooms({
      name: req.body.name,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      owner: req.session.user,
      reviews: [],
    });
    newRoom.save();
    res.redirect("/allrooms");
  } catch (err) {
    console.error(err);
  }
  res.render("rooms");
});

module.exports = router;
