import React, { useState } from 'react';
import './App.css'
// Quiz data
const quizData = [
  {
    question: "Who develop this quiz App?",
    options: ["Ariba", "Ariba Baig", "Areeba", "Areeba Baig"],
    correctAnswer: "Ariba Baig"
  },
  {
    question: "Which javascript framework used in this website?",
    options: ["Vue js", "React js", "Next js ", "Angular js"],
    correctAnswer: "React js"
  },
  {
    question: "Ariba Baig is a?",
    options: ["Smart girl", "Inteligent girl", "Clever girl", "All of these"],
    correctAnswer: "All of these"
  }
];

function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  
  const handleAnswerOptionClick = (selectedOption) => {
    if (selectedOption === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (

    <div className="quiz-app">
      {showScore ? (
        <div className="score-section">
           <h2>congratulations</h2><br/>
          You scored {score} out of {quizData.length}
          <br/>
          
          <h3>correct answers</h3>
          <div className="">
            <p>1.Ariba Baig</p>
            <p>2.React js</p>
            <p>3.All of these</p>
          </div>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{quizData.length}
            </div>
            <div className="question-text">{quizData[currentQuestion].question}</div>
          </div>
          <div className="answer-section">
           
            {quizData[currentQuestion].options.map((option) => (
              <button key={option} onClick={() => handleAnswerOptionClick(option)}>{option}</button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default QuizApp;
