var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var UserSchema=new mongoose.Schema({
  email:{
    type:String,
  required:[true,"email cannot be blank"],
},
name:{
  type:String,
required:[true,"name cannot be blank"],
},
kind:{type:Boolean,
required:[true,"kind cannot be blank"],

},
},{timestamps:true});
mongoose.model('User',UserSchema);
