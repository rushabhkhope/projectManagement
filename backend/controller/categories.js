const Categories = required("../models/Category.js");

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    // Check if category with the same name already exists
    const existingCategory = await Category.findOne({ name });

    if (existingCategory) {
      return res.status(400).json({ message: "Category already exists." });
    }

    const newCategory = new Category({ name });
    await newCategory.save();

    res.status(201).json({
      message: "Category created successfully.",
      category: newCategory,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
};

const updateCategory = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const { name } = req.body;

    // Check if category with the given ID exists
    const category = await Category.findById(categoryId);

    if (!category) {
      return res.status(404).json({ message: "Category not found." });
    }

    // Update the category name
    category.name = name;
    await category.save();

    res.json({
      message: "Category updated successfully.",
      category,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;

    // Check if category with the given ID exists
    const category = await Category.findById(categoryId);

    if (!category) {
      return res.status(404).json({ message: "Category not found." });
    }

    await Category.findByIdAndDelete(categoryId);

    res.json({ message: "Category deleted successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
};

module.export = {
  createCategory,
  updateCategory,
  deleteCategory,
  getAllCategories,
};
