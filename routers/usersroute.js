const express = require("express")
const postcontroller= require("../controllers/users.js")

const router = express.Router





router.get("",postcontroller.getAll)


module.exports={
    router
}