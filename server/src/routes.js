const express = require("express");
const routes = express();
const quizController=require('../src/quizController.js');

routes.get("/quiz/all",quizController.getQuiz);

routes.get("/quiz/:id",quizController.getSelectedQuiz);

routes.post("/quiz/add",quizController.addQuiz);

routes.delete("/quiz/delete/:id",quizController.deleteQuiz);

routes.patch("/quiz/update/:id",quizController.updateQuiz)




module.exports = routes;