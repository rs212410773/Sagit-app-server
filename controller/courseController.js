const { ObjectId } = require("mongodb");
const { resetWatchers } = require("nodemon/lib/monitor/watch");
const db = require("../db/mongoose")
const courseModel = require('../model/courseModel')
const categoryModel = require('../model/cateoryModel')

module.exports.getAll = async function (req, res, next) {
    try {
        let courses = await courseModel.find()
        res.send(courses);
    }
    catch (err) {
        next(err);
    }
}
module.exports.getCourseByCategoryName = async function (req, res, next) {
   const name = req.params.name;
    try {
        let id=await categoryModel.findOne({categoryName:name});
        let courses = await courseModel.find({ categoryId:id});
        // .populate({ path: 'orders', select: 'orderdate orderSum products' });
        res.send(courses);
    }
    catch (err) {
        next(err);
    }
}

module.exports.addCourse = async function (req, res, next) {
    if (req.body) {
        try {
            const { name, categoryId, lessonId, userId } = req.body;
            const data = new courseModel({
                name,
                categoryId,
                lessonId,
                userId
            })

            let insertedCourse = await data.save();
            res.send(insertedCourse);
        }
        catch (err) {
            next(err);
        }
    }
}

module.exports.updateCourse = async function (req, res, next) {
    if (req.body) {
        const id = req.params.id
        try {
            const { name, categoryId, lessonId, userId } = req.body;
            const data = {
                name,
                categoryId,
                lessonId,
                userId
            }
            let updateCourse = await courseModel.findByIdAndUpdate(id, data, {
                new: true
            });
            res.send(updateCourse);
        }
        catch (err) {
            next(err);
        }
    }
}
module.exports.deleteCourse = async function (req, res, next) {

    const id = req.params.id
    try {

        let deletedCourse = await courseModel.findByIdAndRemove(ObjectId(id));
        res.send(deletedCourse);
    }
    catch (err) {
        next(err);
    }

}

