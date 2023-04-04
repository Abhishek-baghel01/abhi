require("dotenv").config({ path: "./.env" });
const express = require("express");
const session = require("express-session");
const app = express();
var cors = require('cors')
const PORT = process.env.PORT || 3000/;
const connectDatabase = require("./models/db");
const indexRouter  =  require('./routes/indexRoute')
const path = require('path')
 
app.use(cors());
connectDatabase();



// static files 
 app.use(express.static(path.join(__dirname, ".//ui/build")));

app.get('*', function(req,res){
    res.sendFile(path.join(__dirname, "./ui/build/index.html"))
});
 


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);
app.listen(PORT, () => console.log(`server running on port: ${PORT}`));
