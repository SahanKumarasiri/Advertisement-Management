const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Advertise = new Schema({
  adName: String,
  contactNo: String,
  email: String,
  title: String,
  description: String,
  priceRange: String,
});

const newAdvertise = mongoose.model("advertise", Advertise);
module.exports = newAdvertise;
