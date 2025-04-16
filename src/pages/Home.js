import React from "react";
import { Link } from "react-router-dom";
import main_bg from "../static/img/mainpage_bg.png";
import contentText from "../data/contentText";
import leave from "../static/img/greenLeave1.png";
import pigeon from "../static/img/pigeon1.png";
import bauhinia from "../static/img/bauhinia1.png";
import mapleLeaf from "../static/img/maple1.png";

export default function Home() {
  return (
    <div>
      <header>
        <title>OX Challenge</title>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24" 
            style={{backgroundImage: "url(" + main_bg + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
      }}>
        <div className="mb-32 grid text-center lg:max-w-6xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <div className="group rounded-lg border border-transparent px-5 py-4 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 hover:border-green-500 hover:bg-green-200/50">
            <Link to="/about" >                 
              <img className="rounded-md opacity-0 object-cover ease-in-out duration-300 group-hover:rotate-12 group-hover:scale-125 group-hover:opacity-40 px-3 py-2" 
                    src={ leave } 
                    width={150} 
                    height={150} 
                    alt="Green Leave"/>
              <h2 className={`mb-3 text-3xl font-bold text-green-800`}> 
                { contentText.mainpage.about }
              </h2>
              <div className={`m-0 max-w-[30ch] text-lg font-medium opacity-50 text-green-900`}>
                { contentText.mainpage.aboutS }
              </div>
            </Link>
          </div>

          <div className="group rounded-lg border border-transparent px-5 py-4 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 hover:border-yellow-300 hover:bg-yellow-100/50 hover:dark:border-yellow-300 hover:dark:bg-yellow-100/50">
            <Link to="/biblequiz" >                 
              <img className="rounded-md opacity-0 object-cover ease-in-out duration-300 group-hover:rotate-12 group-hover:scale-125 group-hover:opacity-40 px-3 py-2" 
                    src={ pigeon } 
                    width={150} 
                    height={150} 
                    alt="Pigeon"/>
              <h2 className={`mb-3 text-3xl font-bold text-yellow-800`}> 
                { contentText.mainpage.bibleOX }
              </h2>
              <div className={`m-0 max-w-[30ch] text-lg font-medium opacity-50 text-yellow-900`}>
                { contentText.mainpage.bibleOXS }
              </div>
            </Link>
          </div>
          
          <div className="group rounded-lg border border-transparent px-5 py-4 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 hover:border-purple-300 hover:bg-purple-200/40 hover:dark:border-purple-300 hover:dark:bg-purple-200/40">
            <Link to="/hongkongquiz" >                 
              <img className="rounded-md opacity-0 object-cover ease-in-out duration-300 group-hover:rotate-12 group-hover:scale-125 group-hover:opacity-40 px-3 py-2" 
                    src={ bauhinia } 
                    width={150} 
                    height={150} 
                    alt="Bauhinia"/>
              <h2 className={`mb-3 text-3xl font-bold text-purple-800`}> 
                { contentText.mainpage.hongkongOX }
              </h2>
              <div className={`m-0 max-w-[30ch] text-lg font-medium opacity-50 text-purple-900`}>
                { contentText.mainpage.hongkongOXS }
              </div>
            </Link>
          </div>

          <div className="group rounded-lg border border-transparent px-5 py-4 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 hover:border-red-300 hover:bg-red-200/40 hover:dark:border-red-300 hover:dark:bg-red-200/40">
            <Link to="/canadaquiz" >                 
              <img className="rounded-md opacity-0 object-cover ease-in-out duration-300 group-hover:rotate-12 group-hover:scale-125 group-hover:opacity-40 px-3 py-2" 
                    src={ mapleLeaf } 
                    width={150} 
                    height={150} 
                    alt="Maple Leaf"/>
              <h2 className={`mb-3 text-3xl font-bold text-red-800`}> 
                { contentText.mainpage.canadaOX }
              </h2>
              <div className={`m-0 max-w-[30ch] text-lg font-medium opacity-50 text-red-900`}>
                { contentText.mainpage.canadaOXS }
              </div>
            </Link>
          </div>

        </div>
      </main>
      
    </div>
  );
}