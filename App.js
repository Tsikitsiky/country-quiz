import React, { useState } from 'react';
import questions from './questions'

function App() {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [IsNext, setIsNext] = useState(false);
    const [IsResult, setIsResult] = useState(false);
    const [score, setScore] = useState(0);
    function handleClick(e) {
        if(e.target.value === 'true') {
            setIsNext(true);
        } else {
        setIsResult(true);
       }
    }

    function nextQuestion() {
        setQuestionIndex(questionIndex + 1);
        setIsNext(false)
        setScore(prevScore => prevScore + 1)
        console.log(score)
    }
    return(
        <div>
            <h1>Country Quizz</h1>
            <h3>{questions[questionIndex].question}</h3>
            <div>
                {questions[questionIndex].answers.map(answer =>
                    <button key={answer.country} value={answer.isTrue} onClick={handleClick}>{answer.country}</button>)}
            </div>
            {IsNext && <button onClick={nextQuestion}>Next</button>}
            {IsResult && <div>
                <h2>Result</h2>
                <p>Score: {score}</p>
                <button>Try again</button>
                </div>}
        </div>
    )
}

export default App