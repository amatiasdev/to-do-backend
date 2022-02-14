const asyncHandler = require("express-async-handler");
const crypto = require("crypto");

const Tasks = require("../models/tasksModel");

const getTasks = asyncHandler(async (areq, res) => {
  const tasks = await Tasks.find();
  res.status(200).json(tasks);
});

const addTask = asyncHandler(async (req, res) => {
  if (!req.body.title) {
    res.status(400);
    throw new Error(req);
  }

  const id = crypto.randomBytes(16).toString("hex");
  const task = await Tasks.create({
    id,
    title: req.body.title,
    status: req.body.status,
    type: req.body.type,
    description: req.body.description,
    parent: req.body.parent,
  });
  res.status(200).json(task);
});

const updateTask = asyncHandler(async (req, res) => {
  

    const task = await Tasks.findById(req.params.id);
    if (!task) {
        res.status(404);
        throw new Error("No task found");
    }
    const updateTask = await Tasks.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updateTask);
});

const deleteTask = asyncHandler(async (req, res) => {
  const task = await Tasks.findById(req.params.id);
    if (!task) {
        res.status(404);
        throw new Error("No task found");
    }
    task.remove();
    res.status(200).json({ id: req.params.id });
});

module.exports = {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
};
