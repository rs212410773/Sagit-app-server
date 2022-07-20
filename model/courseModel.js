const mongoose = require(`mongoose`);
const user = require('./userModel');
const lesson = require('./lessonModel');


const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        min: 2,
    },
    categoryId: {
        type: String
    },
    userId: [{
        type: String

    }],
    lessonId: [{
        type: String
    }]

}, { timestamps: true })


module.exports = mongoose.model('course', courseSchema);