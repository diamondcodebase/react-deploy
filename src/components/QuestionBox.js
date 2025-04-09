export default function QuestionBox({question, visible, chosenPhrase, answered, showAnswer }) {

    const chosenPart = answered ? (
        <div className='row-auto text-4xl bg-yellow-200/50 border-indigo-900 border-2 rounded-md p-3 text-gray-700 justify-center'>
            {chosenPhrase}
            <span>{showAnswer}</span>
        </div>
    ) : (<></>);
    
    const boxContent = visible ? (
        <div className='questionBox bg-white/70 border-indigo-900 border-2 rounded-md p-3 flex flex-col items-center'>
            <h3 className='row-auto text-4xl text-indigo-900 mb-4'> {question} </h3>
            {chosenPart}
        </div>) : (<></>);

    return (        
        <div> {boxContent} </div>   
    );
}