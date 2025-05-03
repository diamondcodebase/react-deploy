"use client";
import StatusBar from "../components/StatusBar";
import { useState, useEffect } from "react";
import React from "react";
import CountDownTimer from "../components/CountDownTimer";
import QuestionBox from "../components/QuestionBox";
import AnswerBox from "../components/AnswerBox";
import ImageButton from "../components/ImageButton";
import CustomButtonV from "../components/CustomButtonV";
import ResultSummary from "../components/ResultSummary";
import { BackendUrl, tLimit } from "../config/config";
import HomeButton from "../components/HomeButton";
import bg_img from "../static/img/bibleOX_bg.jpg";
import right_btn_img from "../static/img/Right_Transparent_BG.png";
import wrong_btn_img from "../static/img/Wrong_Transparent_BG.png";
import GameGuide from "../components/GameGuide";

export default function BibleQuiz() {
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

    // This option is using questions in response from GoLang backend endpoint
    useEffect(() => {
        const url = BackendUrl + "/questionset/bible?len=5";
        console.log(url);
        const fetchData = async () =>{
            try{
                const response = await fetch(url);
                const data = await response.json();
                setQuestions(data);
            } catch (error){
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    },[]);

    // Control visibility of GameGuide
    const [isGuideVisible, setIsGuideVisible] = useState(true);

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
            questionText : "The genealogy of Jesus Christ in the Gospel of Matthew begins with Adam.",
            answer : false,
            answerDetail: "The genealogy of Jesus Christ in Matthew begins with Abraham (Matthew 1:1)"
        },
        {
            questionId : 2,
            questionText : "Five women's names appear in the genealogy of Jesus in the Gospel of Matthew.",
            answer : true,
            answerDetail: "(Matthew 1:3,5,6,16)"
        },
        {
            questionId : 3,
            questionText : "Matthew 1:23 'The virgin will conceive and give birth to a son, and they will call him Immanuel” comes from the Old Testament Psalms.",
            answer : false,
            answerDetail: "It comes from Isaiah 7 in the Old Testament (Isaiah 7:14)"
        },
        {
            questionId : 4,
            questionText : "Matthew 3:3 'A voice of one calling in the wilderness, 'Prepare the way for the Lord, make straight paths for him.'' comes from Isaiah chapter 40.",
            answer : true,
            answerDetail: "(Matthew 3:3, Isaiah 40:3)"
        },
        {
            questionId : 5,
            questionText : "Jesus was born in Bethlehem, Judah.",
            answer : true,
            answerDetail: "(Matthew 2:1)"
        },
        {
            questionId : 6,
            questionText : "Joseph's family fled to Persia in the east to avoid King Herod's pursuit.",
            answer : false,
            answerDetail: "They were fleeing to the southwest to Egypt (Matthew 2:13)"
        },
        {
            questionId : 7,
            questionText : "After Joseph's family returned to the land of Israel, they settled in Nazareth.",
            answer : true,
            answerDetail: "(Matthew 2:23)"
        },
        {
            questionId: 8,
            questionText: "Jesus was baptized by John the Baptist on the Sea of ​​Galilee.",
            answer: false,
            answerDetail: "Jesus was baptized by John the Baptist in the Jordan River (Matthew 3:13)"
        },
        {
            questionId: 9,
            questionText: "John the Baptist used the metaphor of a rock to exhort the Israelites to repent.",
            answer: false,
            answerDetail: "John the Baptist used the metaphor of fruitfulness (Matthew 3:7-10)"
        },
        {
            questionId: 10,
            questionText: "John the Baptist warned the Israelites not to think that they would be saved because they had Abraham as their ancestor.",
            answer: true,
            answerDetail: "(Matthew 3:9-10)"
        },
        {
            questionId: 21,
            questionText: "When Jesus heard that John was in prison, he left Nazareth and went to the region of Zebulun and Naphtali.",
            answer: true,
            answerDetail: "(Matthew 4:13)"
        },
        {
            questionId: 24,
            questionText: "When Jesus first sent out his disciples, they only gathered in the area of ​​Israel for preaching.",
            answer: true,
            answerDetail: "(Matthew 10:5-6)"
        },
        {
            questionId: 27,
            questionText: "In the Sermon on the Mount in Matthew 5, Jesus said that whoever breaks one of the commandments will be called the greatest in the kingdom of heaven.",
            answer: false,
            answerDetail: "Jesus said whoever breaks one of the commandments will be called the least in the kingdom of heaven (Matthew 5:19)"
        },
        {
            questionId: 30,
            questionText: "John and James were casting their nets for fishing when Jesus called them.",
            answer: false,
            answerDetail: "They are mending the net on the boat (Matthew 4:21-22)"
        },
        {
            questionId: 46,
            questionText: "In Matthew 12, Jesus used soil as a metaphor to tell the difference between good and evil people.",
            answer: false,
            answerDetail: "Jesus used the parable of the fruit of a tree to distinguish between good and evil people (Matthew 12:33-36)"
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
        setIsGuideVisible(false);
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
        <div>
            <header></header>
            <main className="flex min-h-screen flex-col items-center justify-between p-12 bg-clip-border"
                style={{backgroundImage: "url(" + bg_img + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed"                              
            }}>
                {/* Game Guide in the top-right corner */}
                {isGuideVisible && (
                <div style={{ position: "absolute", top: "20px", right: "20px" }}>
                    <GameGuide returnUrl="/biblequiz" />
                </div>
                )}
                <div className='text-5xl font-bold p-3 m-3'>Bible OX Challenge</div>
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
                    onClickFn ={startGame}
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
                        imgSrc={ right_btn_img } 
                        onClickFn={() => getShowAnswer(true)} 
                        visible={isGameStarted && !isConfirmed}
                    />
                    <ImageButton
                        btnLabel="Wrong"
                        imgSrc={ wrong_btn_img } 
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
                <HomeButton/> 
            </main>
        </div>
    );
}