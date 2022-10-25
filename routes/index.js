const router = require("express").Router()
const data = require("../db/db.json")
const {GetToken, verifikasi} = require("../helper/jwt")




router.post("/", (req, res) => {
    
    GetToken() 
    res.status(200).json({Message: "tokens successfully generated"})

})




router.get("/biodata", verifikasi, (req, res) => {
    res.json(data)
});




module.exports = router;

