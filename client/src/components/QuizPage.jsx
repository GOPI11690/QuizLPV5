
import { useState,useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";
import { useLocation } from "react-router-dom";
  
const QuizPage = () => {
  const {darkMode}=useContext(DarkModeContext);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
 
    let selection=0;
    let location=useLocation();
    let topic=location.hash;
    if(topic=='#html'){
      selection=0;
    }
    else if(topic=="#css"){
      selection = 1;
    }
    else{
      selection=2;
    }
    
    const { questions } = quiz[selection];
    const { question, choices, correctAnswer } = questions[activeQuestion];
  
    //checking answer is right or wrong
  
    const onAnswerSelected = (answer, index) => {
      setSelectedAnswerIndex(index);
      if (answer === correctAnswer) {
        setSelectedAnswer(true);
      } else {
        setSelectedAnswer(false);
      }
    };
  
    //function for next question when click next button
    const onClickNext = () => {
      setSelectedAnswerIndex(null);
      setResult((prev) =>
        selectedAnswer
          ? {
              ...prev,
              score: prev.score + 5,          // five marks for correct answer
              correctAnswers: prev.correctAnswers + 1,
            }
          : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
      );
      if (activeQuestion !== questions.length - 1) {
        setActiveQuestion((prev) => prev + 1);
      } else {
        setActiveQuestion(0);
        setShowResult(true);
      }
    };
      //question number with zero before actual number
    
  
  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);
    
  return (
    <div className={darkMode?'quizPage-Dark':'quizPage'}>
      <div className={darkMode?'quiz-container-Dark':'quiz-container'}>
        {!showResult ? (
          <div>
            <div>
              <span className="active-question-no">
                {addLeadingZero(activeQuestion + 1)}
              </span>
              <span className="total-question">
                /{addLeadingZero(questions.length)}
              </span>
            </div>
            <h2>{question}</h2>
            <ul>
              {choices.map((answer, index) => (         //showing choices/answers in mcq format
                <li
                  onClick={() => onAnswerSelected(answer, index)}
                  key={answer}
                  className={
                    selectedAnswerIndex === index ? "selected-answer" : null
                  }
                >
                  {answer}
                </li>
              ))}
            </ul>
            <div className="flex-right">        {/*For next button in quiz */}
              <button
                onClick={onClickNext}
                disabled={selectedAnswerIndex === null}
              >
                {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
              </button>
            </div>
          </div>
        ) : (
          <div className="result">          {/*result page*/}
            <h3>Result</h3>
            <p>
              Total Question: <span>{questions.length}</span>
            </p>
            <p>
              Total Score:<span> {result.score}</span>
            </p>
            <p>
              Correct Answers:<span> {result.correctAnswers}</span>
            </p>
            <p>
              Wrong Answers:<span> {result.wrongAnswers}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPage;

              // jsondata for quiz questions and answers
const quiz = [{
  topic: "HTML",
  level: "Beginner",
  totalQuestions: 4,
  perQuestionScore: 5,
  questions: [
    {
      question:
        "The correct sequence of HTML tags for starting a webpage is -",
      choices: ['Head, Title, HTML, body','HTML, Body, Title, Head','HTML, Title, Body, Head',
        'HTML, Head, Title, Body'],
      type: "MCQs",
      correctAnswer: "HTML, Head, Title, Body",
    },
    {
      question:
        "Which of the following tag is used for inserting the largest heading in HTML?",
      choices: ["<h3>","<h1>","<h5>","<h6>"],
      type: "MCQs",
      correctAnswer: "<h1>",
    },
    {
      question:
        " How to insert an image in HTML?",
      choices: [
        "<img href = 'jtp.png' />","<img url = 'jtp.png' />","<img link = 'jtp.png' />","<img src = 'jtp.png' />",
      ],
      type: "MCQs",
      correctAnswer: "<img src = 'jtp.png' />",
    },
    {
      question: " The <hr> tag in HTML is used for -",
      choices: ["new line","vertical ruler","new paragraph","horizontal ruler"],
      type: "MCQs",
      correctAnswer: "horizontal ruler",
    },
  ],
},{
  topic: "CSS",
  level: "Beginner",
  totalQuestions: 4,
  perQuestionScore: 5,
  questions: [
    {
      question:
        "Which of the following CSS selectors are used to specify a group of elements?",
      choices: ["tag","id","class","both class and tag"],
      type: "MCQs",
      correctAnswer: "class",
    },
    {
      question:
        "Which of the following CSS framework is used to create a responsive design?",
      choices: ["django","rails","larawell","bootstrap"],
      type: "MCQs",
      correctAnswer: "bootstrap",
    },
    {
      question:
        "Which of the following type of HTML tag is used to define an internal style sheet?",
      choices: [
        "<script>","<link>","<class>","<style>"],
      type: "MCQs",
      correctAnswer: "<style>",
    },
    {
      question: "Which of the following is not the property of the CSS box model?",
      choices: ["margin","color","width","height"],
      type: "MCQs",
      correctAnswer: "color",
    },
  ],
},{
  topic: "Javascript",
  level: "Beginner",
  totalQuestions: 4,
  perQuestionScore: 5,
  questions: [
    {
      question:
        "Which function is used to serialize an object into a JSON string in Javascript?",
      choices: ["stringify()", "parse()", "convert()", "None of the above"],
      type: "MCQs",
      correctAnswer: "stringify()",
    },
    {
      question:
        "Which of the following keywords is used to define a variable in Javascript?",
      choices: ["var", "let", "var and let", "None of the above"],
      type: "MCQs",
      correctAnswer: "var and let",
    },
    {
      question:
        "Which of the following methods can be used to display data in some form using Javascript?",
      choices: [
        "document.write()",
        "console.log()",
        "window.alert",
        "All of the above",
      ],
      type: "MCQs",
      correctAnswer: "All of the above",
    },
    {
      question: "How can a datatype be declared to be a constant type?",
      choices: ["const", "var", "let", "constant"],
      type: "MCQs",
      correctAnswer: "const",
    },
  ],
}];
