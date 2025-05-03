import HomeButton from "../components/HomeButton";
import OriginalWebButton from "./OriginalWebButton";
import DiamondButton from "./DiamondButton";

export default function BasicButtonPanel(){
    return (
        <div className='flex justify-center mb-4 flex-row items-center'>
            <HomeButton />
            <OriginalWebButton />
            <DiamondButton />
        </div>
    );
}