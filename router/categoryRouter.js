const express = require("express");
const router = express.Router();
const controller = require("../controller/categoryController")


router.get("/", controller.getAll)
router.get("/:id", controller.getCategory)
router.post("/", controller.addCategory)
router.put("/:id", controller.updateCategory)
router.delete("/:id", controller.deleteCategory)


module.exports = router;