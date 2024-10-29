const {post} = require("../models/posts.js")

const getAll=async(req,res)=>{
    try{
        const posts=await post.find()
        res.status(200).send(posts) 
    }catch(error){
        res.status(400).send({message:error})
    }

}

module.exports={
    getAll
}