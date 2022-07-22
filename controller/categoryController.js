const { ObjectId } = require("mongodb");
const { resetWatchers } = require("nodemon/lib/monitor/watch");
const db = require("../db/mongoose")
const categoryModel = require('../model/cateoryModel')
module.exports.getAll = async function (req, res, next) {
       try {
            let categorys = await categoryModel.find()
            res.send(categorys);
        }
        catch (err) {
            next(err);
        }
}
module.exports.getCategory = async function (req, res, next) {
    const id = req.params.id
   try {
        let currentCategory = await categoryModel.findOne({ _id: ObjectId(id) })
        // .populate({ path: 'orders', select: 'orderdate orderSum products' });
        res.send(currentCategory);
    } 
    catch (err) {
        next(err);
    }
}

module.exports.addCategory = async function (req, res, next) {
    if (req.body) {
        try {
            // const categoryName={categoryName:categoryName}

            const {categoryName } = req.body;
            const data = new categoryModel({
                categoryName

            })

            let insertedCategory = await data.save();
            res.send(insertedCategory);
        }
        catch (err) {
            next(err);
        }
    }
}

module.exports.updateCategory = async function (req, res, next) {
    if (req.body) {
        const id = req.params.id
        try {
            const { categoryName} = req.body;
            const data = {
                categoryName
            }
            let updateCategory = await categoryModel.findByIdAndUpdate(id, data, {
                new: true
            });
            res.send(updateCategory);
        }
        catch (err) {
            next(err);
        }
    }
}
module.exports.deleteCategory = async function (req, res, next) {

    const id = req.params.id
    try {

        let deletedCategory = await categoryModel.findByIdAndRemove(ObjectId(id));
        res.send(deletedCategory);
    }
    catch (err) {
        next(err);
    }

}

