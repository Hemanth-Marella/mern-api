
const express=require("express")

const nodemon=require("nodemon")

const morgan=require("morgan")

const app1=express()


const PORT1=3000

app1.get("",(req,res)=>{
    res.send("mahendra singh dhoni")
})


app1.listen(PORT1,()=>{
    console.log(`server will be coming on ${PORT1}->http:\\localhost${PORT1}`)
})