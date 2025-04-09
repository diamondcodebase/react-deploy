
export default function ImageButton({btnLabel, imgSrc, onClickFn, visible}){
    if(visible){
        return (
            <button 
                className='text-4xl text-green-900 p-1.5'
                onClick={onClickFn}
            >
                <img
                    src={imgSrc}
                    alt={btnLabel}
                    width={120}
                    height={120}
                />
            </button>
        );
    }
    return (<></>);
}