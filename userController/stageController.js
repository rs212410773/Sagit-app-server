// const { ObjectId } = require("mongodb");
// const { resetWatchers } = require("nodemon/lib/monitor/watch");
// const db = require("../db/mongoose")
// const stageModel = require('../model/stageModel');

// module.exports.getAll = async function (req, res, next) {

    
//        try {
//             let stages = await stageModel.find()
//             res.send(stages);
//         }
//         catch (err) {
//             next(err);
//         }
//     // }
// }
// module.exports.getStage = async function (req, res, next) {
//     const id = req.params.id
//     try {
//         let currentStage = await stageModel.findOne({ _id: ObjectId(id) })
//         // .populate({ path: 'orders', select: 'orderdate orderSum products' });
//         res.send(currentStage);
//     }
//     catch (err) {
//         next(err);
//     }
// }

// module.exports.addStage = async function (req, res, next) {
//     if (req.body) {
//         try {
//             const { stageName, password, firstName, lastName, email, birthDate } = req.body;
//             const data = new stageModel({
//                 stageName,
//                 password,
//                 firstName,
//                 lastName,
//                 email,
//                 birthDate
//             })

//             let insertedStage = await data.save();
//             res.send(insertedStage);
//         }
//         catch (err) {
//             next(err);
//         }
//     }
// }

// module.exports.updateStage = async function (req, res, next) {
//     if (req.body) {
//         const id = req.params.id
//         try {
//             const { name, password, email, address } = req.body;
//             const data = {
//                 name,
//                 email,
//                 password,
//                 address
//             }
//             let updateStage = await stageModel.findByIdAndUpdate(id, data, {
//                 new: true
//             });
//             res.send(updateStage);
//         }
//         catch (err) {
//             next(err);
//         }
//     }
// }
// module.exports.deleteStage = async function (req, res, next) {

//     const id = req.params.id
//     try {

//         let deletedStage = await stageModel.findByIdAndRemove(ObjectId(id));
//         res.send(deletedStage);
//     }
//     catch (err) {
//         next(err);
//     }

// }

