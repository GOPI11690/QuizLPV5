const {default : mongoose}=require("mongoose");

const dbURL="mongodb+srv://admin:admin@cluster0.56flu.mongodb.net/mdb_QuizApp?retryWrites=true&w=majority&appName=Cluster0";
const connectDB= async ()=>{
    try{
        await mongoose.connect(dbURL);
        console.log("connected to Database ");
    }
    catch(e){
        console.log(e);
    }
};
const disconnectDB= async ()=>{
    try    {
        await mongoose.disconnect();
        console.log("Database disconnected sucessfully");
    }
    catch(err){
        console.log(err);
    }    
}
module.exports = {connectDB,disconnectDB};
