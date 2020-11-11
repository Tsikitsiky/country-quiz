import React, { useRef } from 'react';


function Quizz({
    randomCountry,
    randomAnswerOption, 
    IsNext, 
    nextQuestion, 
    handleClick, 
    rightAnswer, 
    wrongAnswer }) {
    const number = Math.floor(Math.random() * 2);
    console.log(number)
    return(
        <div className="container">
            {number === 0 ? 
                <header>
                    <img src={randomCountry.flag}/>
                    <h3>Which country does this flag belong to?</h3>
                </header> 
                : <h3>{randomCountry.capital} is the the capital of </h3> }
            
            <div className="answers">
                    <button 
                        key={randomAnswerOption[0]} 
                        value={randomAnswerOption[0]} 
                        onClick={handleClick}
                    >
                            {randomAnswerOption[0]}
                    </button>
                    <button 
                        key={randomAnswerOption[1]} 
                        value={randomAnswerOption[1]} 
                        onClick={handleClick}
                    >
                            {randomAnswerOption[1]}
                    </button>
                    <button 
                        key={randomAnswerOption[2]} 
                        value={randomAnswerOption[2]} 
                        onClick={handleClick}
                    >
                            {randomAnswerOption[2]}
                    </button>
                    <button 
                        key={randomAnswerOption[3]} 
                        value={randomAnswerOption[3]} 
                        onClick={handleClick}
                    >
                            {randomAnswerOption[3]}
                    </button>
                    
            </div>
            {IsNext && <button className="nextBtn" onClick={nextQuestion}>Next</button>}
        </div>
    )
}

export default Quizz