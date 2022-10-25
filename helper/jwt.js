const jwt = require("jsonwebtoken");
const SECRET = "RAHASIA"


const GetToken = () => {
    const data = {
        nama: "ahmad",
        alamat: "pendalian"
    }
    const token = jwt.sign(data, SECRET, (err, token) => {
        console.info(token);
    })

    return token
}


const verifikasi = (req, res, next) => {
    let header = req.headers["x-access-token"];

    if(header) {
        next()
    }else{
        return res.status(404).json({
            message: "Access Forbbiden"
        })
    }
}

module.exports = {
    GetToken,
    verifikasi
}