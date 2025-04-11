"use client";
import { useState, useEffect } from "react";
import React from "react";
import CountDownTimer from "../components/CountDownTimer";
import StatusBar from "../components/StatusBar";
import QuestionBox from "../components/QuestionBox";
import AnswerBox from "../components/AnswerBox";
import ImageButton from "../components/ImageButton";
import CustomButtonV from "../components/CustomButtonV";
import ResultSummary from "../components/ResultSummary";
import { BackendUrl, BackendPort, tLimit } from "../config/config";
import AdvancedButtonPanel from "../components/AdvancedButtonPanel";


export default function CanadaQuiz() {
    const noOfRound = 5;
    // using useEffect to generate initial question set
    const [questions, setQuestions] = useState([]);

    // generate and return an array of random pick questions
    // const generateRandomQuestions = () => {
    //     const n = questionsSet.length;
    //     const resultSet = new Set();
        
    //     while (resultSet.size < noOfRound){
    //         const index = Math.floor(Math.random() * n);
    //         resultSet.add(questionsSet[index]);
    //     }
    //     const resultArr = Array.from(resultSet);
    //     console.log(resultArr);
    //     return resultArr;
    // }

    // This option is using default questions stored in ReactJS
    // useEffect(() => {
    //     // var data = generateRandomQuestions()
    //     // setQuestions(data);
    //     setQuestions(generateRandomQuestions());
    // }, [generateRandomQuestions]);

    // This is method to get questionSet from backend and database
    useEffect(() => {
        fetch(BackendUrl + ":" + BackendPort + "/questionset/canada?len=5")
            .then((data) => data.json())
            .then((data) => {
                setQuestions(data);
            });
        },[]
    );

    const [isGameStarted, setGameStarted] = useState(false);
    const [isGameOver, setGameOver] = useState(false);

    const [timeLimit, setTimeLimit] = useState(tLimit);
    const [isTimesUp, setTimesUp] = useState(false);
    const [isTimerVisible, setTimerVisible] = useState(false);
    const [isTimerRunning, setTimerRunning] = useState(false);
    const [isQuestionVisible, setQuestionVisible] = useState(false);
    const [isAnswerVisible, setAnswerVisible] = useState(false);
    
    const [round, setRound] = useState(0);
    const [score, setScore] = useState(0);

    const [isAnswered, setAnswered] = useState(false);
    const [isConfirmed, setConfirmed] = useState(false);

    const [questionContent, setQuestionContent] = useState("");
    const [explanation, setExplanation] = useState("");
    const [userAnswer, setUserAnswer] = useState(false);
    const [modelAnswer, setModelAnswer] = useState(false);
    const [showAnswer, setShowAnswer] = useState("");
    
    const chosenPhrase = "You think this statement is "
    const answered = true;   

    const questionsSet = [
        {
            questionId : 1,
            question : "Canada became an independent country in 1867.",
            answer : false,
            explanation: "Canada became a self-governing dominion within the British Empire in 1867 through the British North America Act, but did not achieve full independence until 1982 with the patriation of the Constitution."
        },
        {
            questionId : 2,
            question : "Victoria Day was originally established to celebrate the birthday of Queen Victoria.",
            answer : true,
            explanation: "Victoria Day was originally established to celebrate the birthday of Queen Victoria since 1840s."
        },
        {
            questionId : 3,
            question : "Remembrance Day in Canada commemorates the end of World War II.",
            answer : false,
            explanation: "Remembrance Day, observed on November 11th, marks the date when World War I ended in 1918 with the signing of the Armistice."
        },
        {
            questionId : 4,
            question : "Canada is the world's third-largest country.",
            answer : false,
            explanation: "Canada is the world's second-largest country by total land area, after Russia."
        },
        {
            questionId : 5,
            question : "The Canadian Rockies are a mountain range located entirely within Canada.",
            answer : true,
            explanation: "The Canadian Rockies, a major mountain range in western Canada, are located entirely within the borders of Canada, stretching from the province of British Columbia to the province of Alberta."
        },
        {
            questionId : 6,
            question : "Sir Louis-Hippolyte La Fontaine was the first head of a responsible government in Canada.",
            answer : true,
            explanation: ""
        },
        {
            questionId : 7,
            question : "The two responsibilities of the federal government are citizenship and highways.",
            answer : false,
            explanation: "The two responsibilities of the federal government are national defence and foreign policy."
        },
        {
            questionId : 8,
            question : "Newfoundland was the last province to join Canada.",
            answer : true,
            explanation: ""
        },
        {
            questionId : 9,
            question : "Approximately 60,000 Canadians served in the First World War.",
            answer : false,
            explanation: "More than 600,000 Canadians served in the First World War."
        },
        {
            questionId : 10,
            question : "The five Great lakes in Canada are Erie, Hudson's Bay, Michigan, Ontario and Superior.",
            answer : false,
            explanation: "Erie, Huron, Michigan, Ontario and Superior."
        },
    ]

    function getShowAnswer(res){
        const answer = res ? ("Right") : ("Wrong");
        setShowAnswer(answer);
        setUserAnswer(res);
        setAnswered(true);
    }

    function startGame(){
        setGameStarted(true);
        setQuestionVisible(true);
        nextRound();
    }

    function confirmAnswer(){
        setTimerVisible(false);
        setTimerRunning(false);
        updateScore()
        setConfirmed(true);
        setAnswerVisible(true);
    }

    function timeUpfunction() {
        setTimesUp(true);
        confirmAnswer();
    }

    function updateScore(){
        //console.log(userAnswer, modelAnswer, questionContent);
        if(userAnswer === modelAnswer && isAnswered){
            setScore(score + 1);
         }
    }

    function resetRound(){
        // console.log(round);
        var question = questions[round];

        setModelAnswer(question.answer);
        setQuestionContent(question.questionText);
        setExplanation(question.answerDetail);           
        setAnswerVisible(false);
        setAnswered(false);
        setConfirmed(false);
        setUserAnswer(null);
        setShowAnswer("");
        setTimerRunning(true);
        setTimerVisible(true);     
    }

    function nextRound(){
        if(round >=noOfRound || isTimesUp){
            gameOver();
        }
        else{
            setRound(round + 1);
            resetRound();
        }       
    }

    function gameOver(){
        setGameOver(true);
        setQuestionVisible(false);
        setAnswerVisible(false);        
    }
    
    return (
        <body>
            <header></header>
            <main className="flex min-h-screen flex-col items-center justify-between p-12 bg-clip-border"
                style={{backgroundImage: `url(/canadaOX_BG.jpg)`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed"                              
            }}>
                <div className='text-5xl font-bold p-3 m-3'>Canada OX Challenge</div>
                <CountDownTimer 
                    secLimit = {timeLimit} 
                    visible = {isTimerVisible} 
                    running = {isTimerRunning} 
                    timeoutFn = {() => timeUpfunction() }
                />
                <StatusBar 
                    round = {round}
                    score = {score}
                    visible = {isGameStarted && !isGameOver}
                />
                <CustomButtonV 
                    btnLabel="Start Game"
                    visible = {!isGameStarted}
                    color = "Indigo"
                    onClickFn ={() => startGame() }
                />
                <QuestionBox 
                    question={questionContent} 
                    visible={isQuestionVisible} 
                    chosenPhrase={chosenPhrase} 
                    answered={answered} 
                    showAnswer={showAnswer}
                />
                <div className='flex justify-center mb-4 flex-row items-center'>
                    <ImageButton 
                        btnLabel="Right" 
                        imgSrc="/Right_Transparent_BG.png" 
                        onClickFn={() => getShowAnswer(true)} 
                        visible={isGameStarted && !isConfirmed}
                    />
                    <ImageButton
                        btnLabel="Wrong"
                        imgSrc="/Wrong_Transparent_BG.png"
                        onClickFn={() => getShowAnswer(false)}
                        visible={isGameStarted && !isConfirmed}
                    />
                </div>
                <AnswerBox
                    isAnswered = {isAnswered} 
                    userAnswer={userAnswer}
                    modelAnswer={modelAnswer}
                    explanation={explanation}
                    visible = {isAnswerVisible}
                />
                <CustomButtonV 
                    btnLabel="Confirm Answer"
                    visible = {isGameStarted && !isConfirmed && isAnswered}
                    color = "Indigo"
                    onClickFn ={() => confirmAnswer() }
                />
                <CustomButtonV 
                    btnLabel="Next Question"
                    visible = {isGameStarted && isConfirmed && !isGameOver}
                    color = "Indigo"
                    onClickFn ={() => nextRound() }
                />
                <ResultSummary 
                    score = {score}
                    round = {round}
                    visible = {isGameOver}
                />
                <AdvancedButtonPanel/> 
            </main>
        </body>
    );
}