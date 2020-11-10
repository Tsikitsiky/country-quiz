import React, { useRef, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Quizz from './pages/quizz';
import Result from './pages/result';
import questions from './questions';

function App() {
     const [questionIndex, setQuestionIndex] = useState(0);
    const [IsNext, setIsNext] = useState(false);
    const [IsResult, setIsResult] = useState(false);
    const [score, setScore] = useState(0);
    const [isAnswer, setIsAnswer] = useState(false);
    const [bgColor, setBgColor] = useState('none');
    const rightAnswer = useRef(null);
    const wrongAnswer = useRef(null);
    const styles = {
        backgroundColor: "green",
        color: "white"
    }

    function handleClick(e) {
        if(e.target.value === 'true') {
            setIsNext(true);
            rightAnswer.current.style.backgroundColor = "green";
            rightAnswer.current.style.color = "white";
            setIsAnswer(true)
        } else {
        // setIsResult(true);
        rightAnswer.current.style.backgroundColor = "green";
        rightAnswer.current.style.color = "white";
        wrongAnswer.current.style.backgroundColor = "red";
        wrongAnswer.current.style.color = "white";
        setIsNext(true);
        setIsAnswer(false);
       }
       
    }

    function randomNumber() {
        const random = Math.floor(Math.random() * questions.length);
        if(random !== questionIndex) {
             setQuestionIndex(random)
        } else {
            setQuestionIndex(prevQuest => prevQuest + 1)
        }
    }

    function nextQuestion() {
        if(isAnswer) {
            randomNumber();
            setIsNext(false)
            setScore(prevScore => prevScore + 1);
            rightAnswer.current.style.backgroundColor = "transparent";
            rightAnswer.current.style.color = "#6066D0";
            wrongAnswer.current.style.backgroundColor = "transparent";
            wrongAnswer.current.style.color = "#6066D0";
        } else {
            setIsResult(true);
        }
        
    }

    return(
        <>
            <h1>Country Quizz</h1>
                    {IsResult ? <Result 
                        score={score} 
                        setIsResult={setIsResult} 
                        setQuestionIndex={setQuestionIndex}
                        setScore={setScore} /> 
                    :<Quizz 
                        questionIndex={questionIndex} 
                        IsNext={IsNext} 
                        nextQuestion={nextQuestion}
                        handleClick={handleClick}
                        bgColor = {bgColor}
                        rightAnswer={rightAnswer}
                        wrongAnswer={wrongAnswer} /> }
        </>
    )
}

export default App