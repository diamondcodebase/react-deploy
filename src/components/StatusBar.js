export default function StatusBar({ score, round, visible }) {
    if(!visible){
        return (<></>);
    }
    return (
        <div className="flex flex-col items-center justify-between p-2">
            <div className='text-3xl font-bold p-1 m-1'>Round {round} </div>
            <div className='text-3xl font-bold p-1 m-1'>Your Score: {score} </div>
        </div>
    );
}