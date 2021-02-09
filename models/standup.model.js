const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const standupSchema = new Schema(
  {
    username: { type: String, required: true },
    description: { type: String, required: true },
    platform: { type: String, required: true },
    date: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const Standup = mongoose.model("Standup", standupSchema);

module.exports = Standup;
