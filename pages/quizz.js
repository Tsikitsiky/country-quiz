import React from 'react';
import questions from '../questions'

function Quizz({questionIndex, IsNext, nextQuestion, handleClick, bgColor }) {
    return(
        <div className="container">
            <h3>{questions[questionIndex].question}</h3>
            <div className="answers">
                {questions[questionIndex].answers.map(answer =>
                    <div key={answer.country}>
                    {answer.flag === '' && <img src={answer.flag}/>}
                    <button  
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