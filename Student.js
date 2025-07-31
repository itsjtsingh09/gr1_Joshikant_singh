const mongoose= require('mongoose');

const studentSchema= new mongoose.Schema({
  name:String,
 email:{
    type:String,
    unique:true},
    courses: 
  [{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Course'
  }]
});


module.exports= mongoose.model('Student',studentSchema);
