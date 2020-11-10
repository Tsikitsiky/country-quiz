import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Quizz from './pages/quizz';
import Result from './pages/result';
import questions from './questions';

function App() {
     const [questionIndex, setQuestionIndex] = useState(0);
    const [IsNext, setIsNext] = useState(false);
    const [IsResult, setIsResult] = useState(false);
    const [score, setScore] = useState(0);
    const [bgColor, setBgColor] = useState('none');
    function handleClick(e) {
        if(e.target.value === 'true') {
            setIsNext(true);
            setBgColor('red');
        } else {
        setIsResult(true);
       }
       console.log(e.target.value)
    }

    function randomNumber() {
        const random = Math.floor(Math.random() * questions.length);
        if(random !== questionIndex) {
             setQuestionIndex(random)
        }
        console.log(random)
    }

    function nextQuestion() {
        randomNumber();
        setIsNext(false)
        setScore(prevScore => prevScore + 1)
        console.log(score)
    }
    console.log(IsResult)
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
                        bgColor = {bgColor} /> }
        </>
    )
}

export default App