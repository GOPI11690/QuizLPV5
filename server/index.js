const express=require("express");
const app= express();
const PORT=3030;
const routes=require('../server/src/routes.js');
var bodyParser=require("body-parser")
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json())

app.use("/",routes);

app.listen(PORT,()=>{
    console.log(`Welcome to Gobs Quiz - Server is Running at ${PORT}`);
});