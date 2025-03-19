const mongoose=require("mongoose");
const quizModel=require("./model/quizModel.js");
const {connectDB,disconnectDB}=require("./config/db.js");

/* Get All quiz Data - GET method */
const getQuiz=async (req, res) => { 
    try{
        await connectDB(); //connect to the database
        //get all quiz data
    const quiz=await quizModel.find({});
    console.log("Get all Quiz Data sucessfully ");
    res.status(200).json(quiz);
    }
    catch(err) {res.send(err);}
    disconnectDB(); //disconnect the database
};

/* Get Quiz data with id - GET method */
const getSelectedQuiz=async (req, res) => { 
    try{
        await connectDB();
        const uniqueId=req.params.id;
        //get quiz data
        const quiz=await quizModel.find({});
        //filter the quiz data
        const selectedQuiz=quiz.filter(quiz => quiz.id == uniqueId );
        res.status(200).json(selectedQuiz);
        console.log("Get one Quiz Data sucessfully ");
    }
    catch(err){res.send(err);}
    disconnectDB();
};

/* Create Quiz - POST method */
const addQuiz=async (req, res) => {
    try {
        await connectDB();
        //add new quiz data 
        const newQuizData=req.body;
        const quiz = new quizModel(newQuizData);
        //new quiz data saved to database
        await quiz.save();
        res.send("New Quiz Data added");
    }
    catch(err){res.send(err);}
    disconnectDB();
};

/* Delete Quiz data with id - Delete method */
const deleteQuiz = async (req, res) => {
    try{
        await connectDB();
        const filter={id:req.params.id};
        //delete the quiz data based on id
        await quizModel.deleteOne(filter);
        res.send({success: true, msg: 'Quiz deleted successfully'})
    }
    catch(err) {res.send(err);}
    disconnectDB();
};
/* Update the Quiz Data - Patch method */
const updateQuiz=async (req, res) => {   
    try{
        await connectDB();
        const filter={id:req.params.id};
        //get quiz update data
        const update=req.body;
        //update the quiz data based on id
        const selectQuiz=await quizModel.findOneAndUpdate(filter, update,{new:true,upsert:true});
        res.send({success: true, msg: 'Quiz data updated successfully'})
    }
    catch(err){res.send(err);} 
    disconnectDB();   
   
};


module.exports = {getQuiz,getSelectedQuiz,addQuiz,deleteQuiz,updateQuiz}