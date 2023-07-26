const mongoose=require('mongoose');

const AccSchema=new mongoose.Schema({
    longitude:{
        type:Number,
        required:true
    },
    latitude:{
        type:Number,
        required:true
    },
    date_time:{
        type:Date,
        required:true
    },
    cause:{
        type:String,
        required:true
    },
    area:{
        type:String,
        required:true
    }

})
const User=mongoose.model('accidentdata',AccSchema);
module.exports=User;
