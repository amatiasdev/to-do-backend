const express = require("express");
const { getTasks, addTask, updateTask, deleteTask } = require("../controllers/TasksController");
const router = express.Router();

router.route("/").get(getTasks).post(addTask);

router.route("/:id").put(updateTask).delete(deleteTask);


module.exports = router;