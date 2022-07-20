// const { ObjectId } = require("mongodb");
// const db = require("../db/mongoose")
// const lessonModel = require('../model/lessonModel')

// module.exports.getAll = async function (req, res, next) {

    
//         try {
//             let lessons = await lessonModel.find()
//             res.send(lessons);
//         }
//         catch (err) {
//             next(err);
//         }
//     }


// // module.exports.getlessonCourses = async function (req, res, next) {
// //     const id = req.params.id
// //     try {
// //         let currentlesson = await lessonModel.findOne({ _id: ObjectId(id) }).populate({ path: 'orders', select: 'orderdate orderSum products' });
// //         res.send(currentlesson);
// //     }
// //     catch (err) {
// //         next(err);
// //     }
// // }

// // module.exports.getAll = async function (req, res, next) {

// //     if (req.query.lessonName && req.query.password) {
// //         const lessonName = req.query.lessonName
// //         const password = req.query.password

// //         try {
// //             let currentlesson = await lessonModel.findOne({ lessonName, password });
// //             if (!currentlesson)
// //                 throw 'lesson not exist'
// //             res.send(currentlesson);
// //         }
// //         catch (err) {
// //             next(err);
// //         }
// //     }
    
// module.exports.addLesson = async function (req, res, next) {
    
//             if (req.body) {
//                 try {
//                     const {name } = req.body;
//                     const data = new lessonModel({
//                         name
//                     })
        

//             const insertedLesson = await data.save();
//             res.send(insertedLesson);
//         }
//         catch (err) {
//             next(err);
//         }
//     }
// }

// module.exports.updateLesson = async function (req, res, next) {
//     if (req.body) {
//         const id = req.params.id
//         try {
//             const { name} = req.body;
//             const data = {
//                 name,
//             }
//             let updateLesson = await lessonModel.findByIdAndUpdate(id, data, {
//                 new: true
//             });
//             res.send(updateLesson);
//         }
//         catch (err) {
//             next(err);
//         }
//     }
// }
// module.exports.deleteLesson = async function (req, res, next) {

//     const id = req.params.id
//     try {

//         let deletedLesson = await lessonModel.findByIdAndRemove(ObjectId(id));
//         res.send(deletedLesson);
//     }
//     catch (err) {
//         next(err);
//     }

// }

