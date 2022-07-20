// const { ObjectId } = require("mongodb");
// const { resetWatchers } = require("nodemon/lib/monitor/watch");
// const db = require("../db/mongoose")
// const categoryModel = require('../model/cateoryModel')
// module.exports.getAll = async function (req, res, next) {

//     // if (req.query.categoryName && req.query.password) {
//     //     const categoryName = req.query.categoryName
//     //     const password = req.query.password

//     //     try {
//     //         let currentcategory = await categoryModel.findOne({ categoryName, password });
//     //         if (!currentcategory)
//     //             throw 'category not exist'
//     //         res.send(currentcategory);
//     //     }
//     //     catch (err) {
//     //         next(err);
//     //     }
//     // }

//     // else {
//        try {
//             let categorys = await categoryModel.find()
//             res.send(categorys);
//         }
//         catch (err) {
//             next(err);
//         }
//     // }
// }