import React from "react";
import { Link } from "react-router-dom";
import leave from "../static/img/greenLeave1.png";
import main_bg from "../static/img/mainpage_bg.png";
import contentText from "../data/contentText";

export default function Home() {
  return (
    <body>
      <header>
        <title>OX Challenge</title>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24" 
            style={{backgroundImage: "url(" + main_bg + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
      }}>
        <div className="group rounded-lg border border-transparent px-8 py-6 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 hover:border-green-500 hover:bg-green-200/50">
          <Link to="/about" >                 
            <img className="rounded-md opacity-0 object-cover ease-in-out duration-300 group-hover:rotate-12 group-hover:scale-125 group-hover:opacity-40 px-5 py-4" src={ leave } alt="Green Leave"/>
            <h2 className={`mb-3 text-3xl font-bold text-green-800`}> 
              { contentText.mainpage.about }
            </h2>
            <div className={`m-0 max-w-[30ch] text-lg font-medium opacity-50 text-green-900`}>
              { contentText.mainpage.aboutS }
            </div>
          </Link>
        </div>
        
        <Link to="/biblequiz"> Bible OX </Link>
        <Link to="/canadaquiz"> Canada OX </Link>
        <Link to="/hongkongquiz"> Hong Kong OX </Link>


      </main>
      
    </body>
  );
}