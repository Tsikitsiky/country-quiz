import React from 'react';

function Result({score, setIsResult,setQuestionIndex, setScore, setIsNext}) {
    function handleClickBtn() {
        setIsResult(false);
        setScore(0);
        setQuestionIndex(0);
        setIsNext(false);
    }
    return(
        <div className="container result">
                <h2>Result</h2>
                <p>You got {score} correct answers</p>
                <button className="tryAgainBtn" onClick={handleClickBtn}>Try again</button>
                </div>
    )
}

export default Result