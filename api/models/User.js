const mongoose=require('mongoose')
const {Schema}=mongoose

const UserSchema=Schema({
    name:String,
    email:{type:String,unique:true},
    password:String
})

const UserModel=mongoose.model('User',UserSchema);

module.exports=UserModel;