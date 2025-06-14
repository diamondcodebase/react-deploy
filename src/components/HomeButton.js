import { Link } from "react-router-dom";
import home from "../static/img/home.png";

export default function HomeButton(){
    return (
        <div className="flex min-h-screen flex-col items-center justify-between py-40">       
            <div className="group rounded-lg border border-transparent px-5 py-4 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 hover:border-cyan-500 hover:bg-cyan-200/50">
                <Link className="flex flex-col items-center" to="/" >              
                    <img className="rounded-md opacity-0 object-cover ease-in-out duration-300 group-hover:-rotate-12 group-hover:scale-120 group-hover:opacity-40 w-24 sm:w-32 md:w-40 max-w-full h-auto px-2 py-1 sm:px-3 sm:py-2" 
                        src={ home } 
                        // width={120} 
                        // height={120} 
                        alt="Home"/>
                    <h2 className={`mb-3 text-2xl sm:text-3xl font-bold text-cyan-700 p-3`}> 
                        { "Home"}
                    </h2>
                </Link>
            </div>
        </div>
    );
}