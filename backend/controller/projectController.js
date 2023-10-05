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

module.exports = {
  createProject,
  getAllProjects,
};
