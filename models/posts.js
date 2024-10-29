const mongoose=require("mongoose")

let postsitem=new mongoose.Schema({
    name:{type:String,require:true},
    rollno:{type:String,require:true},
    mobileno:{type:String,require:true},
    date:{type:Date,default:Date.now},
    gender:{type:String,require:true}
}
)
let post=mongoose.model('users',postsitem);

module.exports=post;