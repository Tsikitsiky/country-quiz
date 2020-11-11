import React, { useEffect, useRef, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Quizz from './pages/quizz';
import Result from './pages/result';

function App() {
     const [countries, setCountries] = useState([]);
     const [randomCountry, setRandomCountry] = useState({});
     const [randomAnswerOption, setRandomAnswerOption] = useState([]);
    const [IsNext, setIsNext] = useState(false);
    const [IsResult, setIsResult] = useState(false);
    const [score, setScore] = useState(0);
    const [isAnswer, setIsAnswer] = useState(false);
    const rightAnswer = useRef(null);
    const wrongAnswer = useRef(null);
    const [IsStart, setIsStart] = useState(false);
    

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
        if(!countries.length) {
            return
        }
        const random = countries[Math.floor(Math.random() * countries.length)];
        const randomOpt1 = countries[Math.floor(Math.random() * countries.length)];
        const randomOpt2 = countries[Math.floor(Math.random() * countries.length)];
        const randomOpt3 = countries[Math.floor(Math.random() * countries.length)];
        const randomOptions = [random.name, randomOpt1.name, randomOpt2.name, randomOpt3.name];
        randomOptions.sort(() => { return 0.5 - Math.random() });
        
        setRandomCountry(random);
        setRandomAnswerOption(randomOptions)
    }

    //check whether the answer is right or wrong and change the background color
    function handleClick(e) {
        console.log(e.target.value)
        console.log(randomCountry.name)
        if(e.target.value === randomCountry.name) {
            setIsNext(true);
            e.target.style.backgroundColor = "#60BF88";
            e.target.style.color = "white";
            e.target.style.backgroundImage = "url('check-24px.svg')";
            // no-repeat 16px right';
            setIsAnswer(true)
        } else {
            e.target.style.backgroundColor = "#EA8282";
            e.target.style.color = "white";
            rightAnswer.current.style.backgroundColor = "#60BF88";
            rightAnswer.current.style.color = "white";
            setIsNext(true);
            setIsAnswer(false);
       }
    }

    function nextQuestion() {
        if(isAnswer) {
            //got to the next question
            getRandomCountry();
            setIsNext(false)
            setScore(prevScore => prevScore + 1);
            rightAnswer.current.style.backgroundColor = "transparent";
            rightAnswer.current.style.color = "#6066D0";
        } else {
            //display the result
            setIsResult(true);
        }
        
    }

    return(
        <>
            <h1>Country Quizz</h1>
            <button onClick={getRandomCountry} className="startBtn" >Start Game</button>
            {IsStart && <div>
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
                        wrongAnswer={wrongAnswer} /> }
                </div>}
                    
        </>
    )
}

export default App