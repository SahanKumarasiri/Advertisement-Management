const router = require("express").Router();
const Advertise = require("../models/models");

router.route("/create").post(async (req, res) => {
  //route for creating database insertion
  const { adName, contactNo, email, title, description, priceRange } = req.body;

  const newAdvertise = new Advertise({
    adName,
    contactNo,
    email,
    title,
    description,
    priceRange,
  });

  await newAdvertise
    .save()
    .then(() => res.status(200).json({ success: true }))
    .catch((error) => res.status(500).json({ success: false, error: error })); // else save to the db
});

router.route("/").get(async (req, res) => {
  //route for fetching al the data
  await Advertise.find()
    .then((Advertise) => res.json(Advertise))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

router.route("/get/:id").get(async (req, res) => {
  //route for getting a relavant document using id
  const { id } = req.params;

  await Advertise.findById(id) //find by the document by id
    .then((todo) => res.json(todo))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

router.route("/delete/:id").delete(async (req, res) => {
  //route for deleting a relavant document using id
  const { id } = req.params;

  await Advertise.findByIdAndDelete(id) //find by the document by id and delete
    .then(() => res.json({ message: "Successfully Deleted" }))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

router.route("/update/:id").put(async (req, res) => {
  //route for updating a relavant document using id
  //backend route for updating relavant data and passing back
  const { id } = req.params;
  const { adName, contactNo, email, title, description, priceRange } = req.body;

  await Advertise.findByIdAndUpdate(id, {
    adName,
    contactNo,
    email,
    title,
    description,
    priceRange,
  }) //find the document by and update the relavant data
    .then(() => res.json({ success: true }))
    .catch((error) => res.json({ success: false, Error: error }));
});

module.exports = router;
