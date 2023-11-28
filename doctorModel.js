
const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    image:{
        type: String,
        unique: true,
    },
    name : {
        type: String,
        required : [true, 'A doctor must have a name'],
        unique : true,
        minlength : 10,
        maxlength : 25
    },
    info:{
        type: String,
        required: [true, 'A doctor should have information']
    },
    exp:{
        type:Number,
        default:2.0
    },
    category:{
        type:String,
        enum:['General Physician', 'Cardiologist', 'Surgeon', 'Dentist'],
        required:[true, 'A doctor must belong to a cateogory']
    },
    area:{
        type:String,
        required: [true, 'Doctor must be available in a city']
    }
})

const doctor = mongoose.model('Doctor',doctorSchema);
module.exports = doctor;