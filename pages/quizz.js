import React, { useRef } from 'react';


function Quizz({
    randomCountry,
    randomAnswerOption, 
    IsNext, 
    nextQuestion, 
    handleClick, 
    rightAnswer, 
    wrongAnswer }) {
    
        //switch between two numbers to display flag question or capital question. if number ===0 flag, if 1 capital
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
                        value={randomAnswerOption[0]} 
                        onClick={handleClick}
                        ref={randomAnswerOption[0] === randomCountry.name ? rightAnswer : null}
                    >
                            {randomAnswerOption[0]}
                    </button>
                    <button 
                        value={randomAnswerOption[1]} 
                        onClick={handleClick}
                        ref={randomAnswerOption[1] === randomCountry.name ? rightAnswer : null}
                    >
                            {randomAnswerOption[1]}
                    </button>
                    <button 
                        value={randomAnswerOption[2]} 
                        onClick={handleClick}
                        ref={randomAnswerOption[2] === randomCountry.name ? rightAnswer : null}
                    >
                            {randomAnswerOption[2]}
                    </button>
                    <button 
                        value={randomAnswerOption[3]} 
                        onClick={handleClick}
                        ref={randomAnswerOption[3] === randomCountry.name ? rightAnswer : null}
                    >
                            {randomAnswerOption[3]}
                    </button>
                    
            </div>
            {IsNext && <button className="nextBtn" onClick={nextQuestion}>Next</button>}
        </div>
    )
}

export default Quizz