const { ObjectId } = require("mongodb");
const { resetWatchers } = require("nodemon/lib/monitor/watch");
const db = require("../db/mongoose")
const userModel = require('../model/userModel')

module.exports.getAll = async function (req, res, next) {

    if (req.query.userName && req.query.password) {
        const userName = req.query.userName
        const password = req.query.password

        try {
            let currentUser = await userModel.findOne({ userName, password });
            if (!currentUser)
                throw 'user not exist'
            res.send(currentUser);
        }
        catch (err) {
            next(err);
        }
    }

    else {
        try {
            let users = await userModel.find()
            res.send(users);
        }
        catch (err) {
            next(err);
        }
    }
}
// module.exports.getUserCourses = async function (req, res, next) {
//     const id = req.params.id
//     try {
//         let currentUser = await userModel.findOne({ _id: ObjectId(id) }).populate({ path: 'orders', select: 'orderdate orderSum products' });
//         res.send(currentUser);
//     }
//     catch (err) {
//         next(err);
//     }
// }

module.exports.addUser = async function (req, res, next) {
    if (req.body) {
        try {
            const { userName, password, firstName, lastName, email, birthDate } = req.body;
            const data = new userModel({
                userName,
                password,
                firstName,
                lastName,
                email,
                birthDate
            })

            let insertedUser = await data.save();
            res.send(insertedUser);
        }
        catch (err) {
            next(err);
        }
    }
}

module.exports.updateUser = async function (req, res, next) {
    if (req.body) {
        const id = req.params.id
        try {
            const { name, password, email, address } = req.body;
            const data = {
                name,
                email,
                password,
                address
            }
            let updateUser = await userModel.findByIdAndUpdate(id, data, {
                new: true
            });
            res.send(updateUser);
        }
        catch (err) {
            next(err);
        }
    }
}
module.exports.deleteUser = async function (req, res, next) {

    const id = req.params.id
    try {

        let deletedUser = await userModel.findByIdAndRemove(ObjectId(id));
        res.send(deletedUser);
    }
    catch (err) {
        next(err);
    }

}

