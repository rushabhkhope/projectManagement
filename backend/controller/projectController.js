const Project = require("../models/Project");
const createProject = async (req, res) => {
  try {
    const { title, description, startDate, endDate, estimatedStoryPoints } =
      req.body;

    const creatorUserId = req.user.id;

    const newProject = new Project({
      title,
      description,
      startDate,
      endDate,
      estimatedStoryPoints,
      admins: [creatorUserId], // Creator is added as the default admin
      members: [creatorUserId], // Creator is also added as a member
    });

    await newProject.save();

    res
      .status(201)
      .json({ message: "Project created successfully", project: newProject });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getAllProjects = async (req, res) => {
  try {
    const userId = req.user.id;

    // Find projects where the user is either an admin or a member
    const projects = await Project.find({
      $or: [{ admins: userId }, { members: userId }],
    });

    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getProjectById = async (req, res) => {
  try {
    const projectId = req.params.projectId;
    const userId = req.user.id;

    // Check if the user is a member of the project
    const project = await Project.findOne({
      _id: projectId,
      members: userId,
    });

    if (!project) {
      return res.status(403).json({ message: "Access denied" });
    }

    res.json(project);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateProject = async (req, res) => {
  try {
    const projectId = req.params.projectId;
    const updatedDetails = req.body;
    const userId = req.user.id;

    // Check if the user is an admin of the project
    const project = await Project.findOne({
      _id: projectId,
      admins: userId,
    });

    if (!project) {
      return res.status(403).json({ message: "Access denied" });
    }

    // Update the project details
    Object.assign(project, updatedDetails);
    await project.save();

    res.json({ message: "Project updated successfully", project });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteProject = async (req, res) => {
  try {
    const projectId = req.params.projectId;
    const userId = req.user.id;

    // Check if the user is an admin of the project
    const project = await Project.findOne({
      _id: projectId,
      admins: userId,
    });

    if (!project) {
      return res.status(403).json({ message: "Access denied" });
    }

    // Delete the project
    await Project.findByIdAndDelete(projectId);

    res.json({ message: "Project deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
};
