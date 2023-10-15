const Task = required("../models/Task.js");
const Project = required("../models/Project.js");
const Category = required("../models/Category.js");
const isValidCategory = async (category) => {
  try {
    const category = await Category.findById(category);
    return !!category; // Returns true if category exists, false otherwise
  } catch (error) {
    console.error(error);
    return false;
  }
};

const createTask = async (req, res) => {
  try {
    const projectId = req.params.projectId;
    const { title, description, category, assignedTo, storyPoints } = req.body;
    const userId = req.user.id;
    const isValid = await isValidCategory(category);
    if (!isValid) {
      return res.status(400).json({ message: "Invalid category" });
    }
    // Check if the user is a member of the project
    const project = await Project.findOne({
      _id: projectId,
      members: userId,
    });

    if (!project) {
      return res.status(403).json({ message: "Access denied" });
    }

    const newTask = new Task({
      title,
      description,
      category,
      assignedTo,
      storyPoints,
      projectId,
    });

    await newTask.save();

    res
      .status(201)
      .json({ message: "Task created successfully", task: newTask });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateTask = async (req, res) => {
  try {
    const projectId = req.params.projectId;
    const taskId = req.params.taskId;
    const updatedDetails = req.body;
    const userId = req.user.id;
    if (req.body.category) {
      const isValid = await isValidCategory(category);
      if (!isValid) {
        return res.status(400).json({ message: "Invalid category" });
      }
    }

    // Check if the user is a member of the project
    const project = await Project.findOne({
      _id: projectId,
      members: userId,
    });

    if (!project) {
      return res.status(403).json({ message: "Access denied" });
    }

    // Check if the task belongs to the project
    const task = await Task.findOne({ _id: taskId, projectId });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    // Update the task details
    Object.assign(task, updatedDetails);
    await task.save();

    res.json({ message: "Task updated successfully", task });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  createTask,
  updateTask,
};
