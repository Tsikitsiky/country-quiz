import React from 'react';

function Result({score, setIsResult,setQuestionIndex, setScore}) {
    function handleClickBtn() {
        setIsResult(false);
        setScore(0);
        setQuestionIndex(0)
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