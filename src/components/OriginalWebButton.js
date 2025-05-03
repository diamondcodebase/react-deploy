import { Link } from "react-router-dom";
import web_img from "../static/img/web.png";

export default function OriginalWebButton(){
    return (
        <div className="flex min-h-screen flex-col items-center justify-between py-40">       
            <div className="group rounded-lg border border-transparent px-5 py-4 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 hover:border-yellow-500 hover:bg-yellow-200/50">
                <Link className="flex flex-col items-center" to="https://sites.google.com/view/sobibleox/Home" >              
                    <img className="rounded-md opacity-0 object-cover ease-in-out duration-300 group-hover:-rotate-12 group-hover:scale-125 group-hover:opacity-40 px-3 py-2" 
                        src={ web_img } 
                        width={120} 
                        height={120} 
                        alt="Original"/>
                    <h2 className={`mb-3 text-3xl font-bold text-yellow-700 p-3`}> 
                        { "Original OX Website"}
                    </h2>
                </Link>
            </div>
        </div>
    );
}