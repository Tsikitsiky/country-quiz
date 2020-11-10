import React, { useRef } from 'react';
import questions from '../questions'

function Quizz({
    questionIndex, 
    IsNext, 
    nextQuestion, 
    handleClick, 
    rightAnswer, 
    wrongAnswer }) {
    
    return(
        <div className="container">
            <h3>{questions[questionIndex].question}</h3>
            <div className="answers">
                {questions[questionIndex].answers.map(answer =>
                    <div key={answer.country}>
                    {answer.flag === '' && <img src={answer.flag}/>}
                    <button  
                        ref={answer.isTrue ? rightAnswer : wrongAnswer}
                        value={answer.isTrue} 
                        onClick={handleClick}
                        // style={{backgroundColor:bgColor}}
                    >
                            {answer.country}
                    </button>
                    </div>
                    )}
            </div>
            {IsNext && <button className="nextBtn" onClick={nextQuestion}>Next</button>}
        </div>
    )
}

export default Quizz