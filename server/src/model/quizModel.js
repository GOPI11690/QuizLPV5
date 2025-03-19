const mongoose = require("mongoose");

const choicesSchema = new mongoose.Schema({
  choices: { type: String, },
});
const questionSchema = new mongoose.Schema({
  question: { type: String,},
  choices: { choicesSchema },
  type: { type: String },
  correctAnswer: { type: String,  },
});
const quizSchema = new mongoose.Schema({
  id: { type: String, required: true },
  topic: { type: String, required: true, maxLength: 15 },
  level: { type: String, required: true, maxLength: 15 },
  totalQuestions: { type: Number, required: true, min: 4, max: 4 },
  perQuestionScore: { type: Number, default: 5 },
  questions: [questionSchema],
});

module.exports = mongoose.model("quizzes", quizSchema);
