// @swagger(project)
const express = require("express");
const {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
} = require("../controller/projectController");
const router = express.Router();
router.post("/", createProject);
router.get("/getall", getAllProjects);
router.get("/:projectId", getProjectById);
router.put("/:projectId", updateProject);
router.delete("/:projectId", deleteProject);

module.exports = router;
