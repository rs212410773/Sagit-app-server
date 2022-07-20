const { ObjectId } = require('mongodb');
const mongoose = require(`mongoose`);


const categorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        min: 2,      
    }
},{timestamps:true})


module.exports = mongoose.model('category', categorySchema);
