const express = require("express");
const app = express();
const routes = require("./routes/index")


app.use(routes);


app.listen(3000, () => {
    console.info("Running at port http://localhost:3000");
})

