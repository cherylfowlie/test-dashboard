const router = require("express").Router();
let StandUp = require("../models/standup.model");

router.route("/").get((req, res) => {
  StandUp.find()
    .then((standup) => res.json(standup))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const platform = req.body.platform;
  const date = Date.parse(req.body.date);

  const newStandup = new StandUp({
    username,
    description,
    platform,
    date,
  });

  newStandup
    .save()
    .then(() => res.json("StandUp added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  StandUp.findById(req.params.id)
    .then((standup) => res.json(standup))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  StandUp.findByIdAndDelete(req.params.id)
    .then(() => res.json("StandUp deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  StandUp.findById(req.params.id)
    .then((standup) => {
      standup.username = req.body.username;
      standup.description = req.body.description;
      standup.platform = req.body.platform;
      standup.date = Date.parse(req.body.date);

      standup
        .save()
        .then(() => res.json("Stand Up updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
