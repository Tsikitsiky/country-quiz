import React, { useEffect, useRef, useState } from 'react';
import Quizz from './pages/quizz';
import Result from './pages/result';
import check from  './check-24px.svg';
import cancel from  './cancel-24px.svg';

function App() {
    const [countries, setCountries] = useState([]);
    const [randomCountry, setRandomCountry] = useState({});
    const [randomAnswerOption, setRandomAnswerOption] = useState([]);
    const [score, setScore] = useState(0);
    const [IsNext, setIsNext] = useState(false);
    const [IsResult, setIsResult] = useState(false);
    const [isAnswerShown, setIsAnswerShown] = useState(false);
    const [IsStart, setIsStart] = useState(false);
    const [number, setNumber] = useState(0);
    const rightAnswer = useRef(null);
    const title = useRef(null);
    
    
    async function fetchCountries() {
        const res = await fetch('https://restcountries.eu/rest/v2/all');
        const country = await res.json();
        setCountries(country);
    }

    useEffect(() => {
        fetchCountries();
    }, [score]);

    //get the country that we are going to use
    function getRandomCountry() {
        setIsStart(true);
        title.current.style.alignSelf = "start";
        if(!countries.length) {
            return
        }
        const random = countries[Math.floor(Math.random() * countries.length)];
        const answerOption1 = countries[Math.floor(Math.random() * countries.length)];
        const answerOption2 = countries[Math.floor(Math.random() * countries.length)];
        const answerOption3 = countries[Math.floor(Math.random() * countries.length)];
        const answerOptions = [random.name, answerOption1.name, answerOption2.name, answerOption3.name];
        answerOptions.sort(() => { return 0.5 - Math.random() });
        
        setRandomCountry(random);
        setRandomAnswerOption(answerOptions)
    }

    //check whether the answer is right or wrong and change the background color
    function handleClick(e) {
        //console.log(e.target.value + " - " + randomCountry.name )
        if(e.target.value === randomCountry.name) {
            setIsNext(true);
            e.target.style.backgroundColor = "#60BF88";
            e.target.style.color = "white";
            e.target.style.borderColor = "#60BF88";
            e.target.style.backgroundImage = `url(${check})`;
            e.target.style.backgroundRepeat = "no-repeat";
            e.target.style.backgroundSize = "20px 20px";
            e.target.style.backgroundPosition = "95% center";
            setIsAnswerShown(true)
        } else {
            e.target.style.backgroundColor = "#EA8282";
            e.target.style.color = "white";
            e.target.style.borderColor = "#EA8282";
            e.target.style.backgroundImage = `url(${cancel})`;
            e.target.style.backgroundRepeat = "no-repeat";
            e.target.style.backgroundSize = "20px 20px";
            e.target.style.backgroundPosition = "95% center";
            rightAnswer.current.style.backgroundColor = "#60BF88";
            rightAnswer.current.style.color = "white";
            rightAnswer.current.style.borderColor = "#60BF88";
            rightAnswer.current.style.backgroundImage = `url(${check})`;
            rightAnswer.current.style.backgroundRepeat = "no-repeat";
            rightAnswer.current.style.backgroundSize = "20px 20px";
            rightAnswer.current.style.backgroundPosition = "95% center";
            setIsNext(true);
            setIsAnswerShown(false);
       }
    }

    //after clicking the next btn check if we need to generate the next question or get the result if the answere was wrong
    function nextQuestion() {
        setNumber(Math.floor(Math.random() * 3))
        if(isAnswerShown) {
            //got to the next question
            getRandomCountry();
            setIsNext(false)
            setScore(prevScore => prevScore + 1);
            rightAnswer.current.style.backgroundColor = "transparent";
            rightAnswer.current.style.color = "#6066D0";
            rightAnswer.current.style.borderColor = "#6066D0";
        } else {
            //display the result
            setIsResult(true);
        }
        
    }

    return(
        <div className="app-container">
            <h1 ref={title}>Country Quiz</h1>
            
            {IsStart ? <div>
                {IsResult ? <Result 
                        score={score} 
                        setIsResult={setIsResult} 
                        randomCountry={randomCountry}
                        randomAnswerOption={randomAnswerOption}
                        getRandomCountry={getRandomCountry}
                        setScore={setScore}
                        setIsNext={setIsNext} /> 
                    :<Quizz 
                        randomCountry={randomCountry}
                        randomAnswerOption={randomAnswerOption}
                        IsNext={IsNext} 
                        nextQuestion={nextQuestion}
                        handleClick={handleClick}
                        rightAnswer={rightAnswer}
                        number={number}
                         /> }
                </div> 
                : 
                <button onClick={getRandomCountry} className="startBtn" >Start</button>}
        </div>
    )
}

export default App