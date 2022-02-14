const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: [true, "Title is required"],
      unique: true,
    },
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    status: {
      type: Number,
    },
    type: {
      type: Number,
    },
    description: {
      type: String,
    },
    parent: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Tasks", taskSchema);
