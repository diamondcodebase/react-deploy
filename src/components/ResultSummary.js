export default function ResultSummary({ score, round, visible }) {
    let endStatement = "Thanks for your participation.";
    let endStatement2 = "Keep on going!!";
    let scoreRatio = score / round;

    if(scoreRatio === 1){
        endStatement = "You are Excellent！";
    }
    else if(scoreRatio >= 0.8){
        endStatement = "Well done!";
    }
    else if(scoreRatio >= 0.6){
        endStatement = "Your performance is good.";
    }
    else if(scoreRatio >= 0.4){
        endStatement = "Really appreciate your effort!";
    }
    
    if(!visible){
        return (<></>);
    }
    else{

        return (
            <div className="flex flex-col items-center justify-between bg-green-300/80 border-indigo-900 border-2 rounded-md p-2">
                <div className='text-5xl font-bold p-1 m-1'>You have completed {round} rounds</div>
                <div className='text-5xl font-bold p-1 m-1'>Total Score is {score} </div>
                <div className='text-5xl text-blue-800 font-bold p-1 m-1'> { endStatement } </div>
                <div className='text-5xl text-blue-800 font-bold p-1 m-1'> { endStatement2 } </div>
            </div>
        );
    }

    

}