import React from 'react';

function Result({score, setIsResult,getRandomCountry, setScore, setIsNext}) {
    function handleClickBtn() {
        //reset everything to default
        setIsResult(false);
        setScore(0);
        getRandomCountry();
        setIsNext(false);
    }
    return(
        <div className="container result">
                <h2>Results</h2>
                <p>You got <b>{score}</b> correct answers</p>
                <button className="tryAgainBtn" onClick={handleClickBtn}>Try again</button>
                </div>
    )
}

export default Result