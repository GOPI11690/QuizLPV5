const mongoose=require("mongoose");

const choicesSchema=new mongoose.Schema({
    choices:{type:String},
});

const questionSchema=new mongoose.Schema({
    question:{type:String},
    choices:{choicesSchema},
    type:{type:String},
    correctAnswer:{type:String}
});

const quizSchema=new mongoose.Schema({
    id:{type:String},
    topic:{type:String},
    level:{type:String},
    totalQuestions:{type:Number},
    perQuestionScore:{type:Number},
    questions:[questionSchema]

})




module.exports = mongoose.model("quizzes", quizSchema);
