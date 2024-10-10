const mongoose = require('mongoose');
const schema = mongoose.Schema({

    Id : Number,
    Company_Name : String,
    Package : String,
    Eligibility : String,
    Job_for : String,
    Company_Details : String
})

module.exports = mongoose.model('Job',schema,'Companies');