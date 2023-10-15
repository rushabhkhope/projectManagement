// @swagger(project)
const express = require("express");
const { createTask, updateTask } = require("../controller/tasksControllers");
const router = express.Router();
router.post("/:projectId/tasks", createTask);
router.put("/:projectId/tasks/:taskId", updateTask);

module.exports = router;
