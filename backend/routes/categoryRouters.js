// @swagger(project)
const express = require("express");
const {
  createCategory,
  updateCategory,
  deleteCategory,
  getAllCategories,
} = require("../controller/categories");
const router = express.Router();
router.post("/", createCategory);
router.put("/:categoryId", updateCategory);
router.delete("/:categoryId", deleteCategory);
router.get("/", getAllCategories);
module.exports = router;
