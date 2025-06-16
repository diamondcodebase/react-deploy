"use client";
import BasicButtonPanel from "../components/BasicButtonPanel";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, MoveIn, MoveOut, Sticky, ZoomIn } from "react-scroll-motion";
import React from "react";
import web_img from "../static/img/web.png";
import covid_img from "../static/img/covid.png";
import guide_img from "../static/img/guide.png";
import inspire_img from "../static/img/inspire.png";
import struggle_img from "../static/img/struggle.png";
import enjoy_img from "../static/img/enjoy.png";
import trueOrFalse_img from "../static/img/trueOrFalse.png";
import bauhinia_img from "../static/img/bauhinia.png";
import maple_img from "../static/img/mapleLeaf.png";

export default function About() {
    const FadeMoveOut = batch(Fade(), Sticky(), MoveOut(0,-500));
    const ZoomInScrollOut = batch(Sticky(), FadeIn(), ZoomIn(), MoveOut(0,-800))
    //const ZoomInScrollOut = batch(ZoomIn(), FadeIn(), Sticky(), MoveOut(0,-200));
    const MoveInOut = batch(MoveIn(-1000,0), Sticky(), Fade(), MoveOut(1000,0));
    const CastUp = batch(Fade(), Sticky(), MoveOut(0,-1000), FadeOut());
    
    return (
        <div>
            <section id='about_web'>
                <ScrollContainer>
                    <ScrollPage>
                        <Animator animation={FadeMoveOut}>
                            <div className='flex flex-col sm:flex-row items-center gap-2 sm:gap-4'>
                                <div className='flex-1 text-2xl sm:text-3xl font-bold p-3 m-3 text-center sm:text-left'>
                                    About This Web
                                </div>
                                <img src={ web_img } alt="About web"
                                    className="flex-shrink-0 w-32 sm:w-48 md:w-48 max-w-full h-auto px-1 py-1 sm:px-3 sm:py-2"/>
                            </div>
                        </Animator>
                    </ScrollPage>
                    <ScrollPage>
                        <Animator animation={FadeMoveOut}>
                            <div className='flex flex-col sm:flex-row items-center gap-2 sm:gap-4'>
                                <img src={ covid_img } alt="Covid"
                                    className="flex-0 w-40 sm:w-48 md:w-48 max-w-full h-auto px-1 py-1 sm:px-3 sm:py-2"/>
                                <div className='flex-1 text-2xl sm:text-3xl font-bold p-1 text-center sm:text-left'>
                                    The origin of this web came to me in 2021. <br />
                                    During that year, we were still facing the threat of COVID-19, which led to bans on large gatherings. <br />
                                    This really affected our daily lives, including my church activities.
                                </div>
                            </div>                       
                        </Animator>
                    </ScrollPage>
                    <ScrollPage>
                        <Animator animation={FadeMoveOut}>
                            <div className='flex flex-col sm:flex-row items-center gap-2 sm:gap-4'>
                                <div className='flex-0 text-2xl sm:text-3xl font-bold p-1 text-center sm:text-left'>
                                    At that time, my pastor was looking for interactive and creative ways to read the Bible with our church community.
                                </div>
                                <img src={ guide_img } alt="Guide"
                                    className="flex-1 w-40 sm:w-48 md:w-48 max-w-full h-auto px-1 py-1 sm:px-3 sm:py-2"/>
                            </div>
                        </Animator>
                    </ScrollPage>
                    <ScrollPage>
                        <Animator animation={ZoomInScrollOut}>
                            <div className='flex flex-col sm:flex-row items-center gap-2 sm:gap-4'>
                            <img src={ inspire_img } alt="Inspire"
                                    className="flex-0 w-40 sm:w-48 md:w-48 max-w-full h-auto px-1 py-1 sm:px-3 sm:py-2"/>
                                <div className='flex-1 text-2xl sm:text-3xl font-bold p-1 text-center sm:text-left'>
                                    Inspired by an online game featuring true or false mini-games, I suggested to my pastor that I could create a Bible verse true or false game for our church group.
                                </div>
                            </div>
                        </Animator>
                    </ScrollPage>
                    <ScrollPage>
                        <Animator animation={MoveInOut}>
                            <div className='flex flex-col sm:flex-row items-center gap-2 sm:gap-4'>
                                <div className='flex-0 text-2xl sm:text-3xl font-bold p-1 text-center sm:text-left'>
                                    The early stages of development were quite challenging since I did not have any prior experience in web development. <br />
                                    I learned about Google App Scripts through YouTube and tried to implement it using Google Drive and Google Sheets as a database.
                                </div>
                                <img src={ struggle_img } alt="Struggling"
                                    className="flex-1 w-40 sm:w-48 md:w-48 max-w-full h-auto px-1 py-1 sm:px-3 sm:py-2"/>
                            </div>                        
                        </Animator>
                    </ScrollPage>
                    <ScrollPage>
                        <Animator animation={FadeMoveOut}>
                            <div className='flex flex-col sm:flex-row items-center gap-3 sm:gap-3'>
                                <img src={ enjoy_img } alt="Enjoy"
                                    className="flex-0 w-40 sm:w-48 md:w-48 max-w-full h-auto px-1 py-1 sm:px-3 sm:py-2"/>
                                <div className='flex-1 text-2xl sm:text-3xl font-bold p-1 text-center sm:text-left'>
                                    Eventually, I was able to launch a series of Bible verse OX games, which my church group really enjoyed playing.
                                </div>
                                <img src={ trueOrFalse_img } alt="TrueFalse"
                                    className="flex-2 w-40 sm:w-48 md:w-48 max-w-full h-auto px-1 py-1 sm:px-3 sm:py-2"/>
                            </div>                        
                        </Animator>
                    </ScrollPage>
                    <ScrollPage>
                        <Animator animation={FadeMoveOut}>
                            <div className='flex flex-col sm:flex-row items-center gap-3 sm:gap-3'>
                                <img src={ bauhinia_img } alt="Bauhinia"
                                    className="flex-0 w-40 sm:w-48 md:w-48 max-w-full h-auto px-1 py-1 sm:px-3 sm:py-2"/>
                                <div className='flex-1 text-2xl sm:text-3xl font-bold p-1 text-center sm:text-left'>
                                    Based on the 
                                    <a className='text-3xl font-bold p-1 m-1 text-blue-600 text-decoration-line: underline' 
                                        href="https://sites.google.com/view/sobibleox/Home">
                                            original Bible OX game
                                    </a>
                                    . I have added two more features: a Hong Kong OX game and a Canada OX game. 
                                </div>
                                <img src={ maple_img } alt="Maple"
                                    className="flex-2 w-40 sm:w-48 md:w-48 max-w-full h-auto px-1 py-1 sm:px-3 sm:py-2"/>
                            </div>            
                            
                        </Animator>
                    </ScrollPage>
                    <ScrollPage>
                        <Animator animation={CastUp}>
                            <div className='text-4xl font-bold p-3 m-3'>
                                Enjoy!
                            </div>                
                        </Animator>
                    </ScrollPage>
                </ScrollContainer>               
            </section>
            <BasicButtonPanel />
            
        </div>        
    );
}

