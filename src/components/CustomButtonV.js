
export default function CustomButtonV({btnLabel, onClickFn, color, visible}){
    if(!visible){
        return (<></>);
    }

    if(color === "Indigo"){
        return (
            <button className="text-3xl bg-indigo-900 border-indigo-500 border-4 rounded-md p-4 m-4" onClick={onClickFn}>
                <span className="text-indigo-200">{btnLabel}</span>
            </button>
        );
    }
    else{
        return (
            <button className="text-3xl bg-gray-900 border-gray-500 border-4 rounded-md p-4 m-4" onClick={onClickFn}>
                <span className="text-gray-200">{btnLabel}</span>
            </button>
        );
    }

}