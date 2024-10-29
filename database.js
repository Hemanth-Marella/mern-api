const mongose=require("mongoose")

const mongourl="mongodb://localhost:27017/nodejsapi"

const connectdb = async()=>{
    

    try{
        await mongose.connect(mongourl,{});
        console.log("connected successfully")

    }catch(error){
        console.log(`error is raising ${error}`)
    }
}

module.exports={
    connectdb
}