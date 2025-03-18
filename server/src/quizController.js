const mongoose=require("mongoose");
const quizModel=require("./model/quizModel.js");
const connectDB=require("./config/db.js");

/* Get All quiz Data - GET method */
const getQuiz=async (req, res) => { 
    try{
        connectDB();
    const quiz=await quizModel.find({});
    res.status(200).json(quiz);
    }
    catch(err) {
        res.send(err);
    }
    mongoose.connection.close();
};

/* Get Quiz data with id - GET method */
const getSelectedQuiz=async (req, res) => { 
    try{
        connectDB();
         
        const uniqueId=req.params.id;
        //get quiz data
        const quiz=await quizModel.find({});
        //filter the quiz data
        const selectedQuiz=quiz.filter(quiz => quiz.id == uniqueId );
        res.status(200).json(selectedQuiz);
    }catch(err){
        res.send(err);
    }
    mongoose.connection.close();
};

/* Create Quiz - POST method */
const addQuiz=async (req, res) => {
    try {
        connectDB();
        const newQuizData=req.body;
        const quiz = new quizModel(newQuizData);
        await quiz.save();
        res.send("New Quiz Data added");
    }
    catch(err){
        res.send(err);
    }
    mongoose.connection.close();
};

/* Delete Quiz data with id - Delete method */
const deleteQuiz = async (req, res) => {
    try{
        connectDB();
        const filter={id:req.params.id};
        await quizModel.deleteOne(filter);
        res.send({success: true, msg: 'Quiz deleted successfully'})
    }
    catch(err) {
        res.send(err);
    }
};

/* Update the Quiz Data - Patch method */
const updateQuiz=async (req, res) => {   
    try{
        connectDB();
        const filter={id:req.params.id};
        const update=req.body;
        const selectQuiz=await quizModel.findOneAndUpdate(filter, update,{new:true,upsert:true});
        res.send({success: true, msg: 'Quiz data updated successfully'})
    }
    catch(err){
        res.send(err);
    }    
    mongoose.connection.close();
};


module.exports = {getQuiz,getSelectedQuiz,addQuiz,deleteQuiz,updateQuiz}