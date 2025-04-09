import CustomButton from "../components/CustomButton";

export default function BasicButtonPanel(){
    return (
        <div className='flex justify-center mb-4 flex-row items-center'>
            <CustomButton 
                btnLabel="Home" 
                hrefLink ="../"
            />
        </div>
    );
}