const express = require("express");
const router = express.Router();
const controller = require("../controller/courseController")


router.get("/", controller.getAll)
router.get("/name", controller.getCourseByCategoryName)
router.post("/", controller.addCourse)
router.put("/:id", controller.updateCourse)
router.delete("/:id", controller.deleteCourse)

module.exports = router;