"use client";
import { useState, useEffect } from 'react';

export default function CountDownTimer({ secLimit, visible, running, timeoutFn }) {
    const [timeLeft, setTimeLeft] = useState(secLimit);
    const [isRunning, setIsRunning] = useState(true);
    
    useEffect(() => {
        let interval;
        // if timer is still running, using setInterval to reduce a second
        if(running && isRunning) {
            interval = setInterval(() => {
                setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
            }, 1000);
        }

        // if time is up, set isRunning to false
        if (timeLeft === 0){
            timeoutFn();
            setIsRunning(false);
        }

        return () => clearInterval(interval);        
    }, [running, timeLeft]);

    if(!visible){
        return <></>
    }    
    
    return (
        <div className="countdown-timer">
            <div className="text-2xl sm:text-3xl">Time Remain</div>
            <div className="timer-display text-center text-3xl sm:text-4xl bg-white border-gray-500 border-4 rounded-md p-4 m-4">
                <span>{Math.floor(timeLeft / 60)}:</span>
                <span>{(timeLeft % 60).toString().padStart(2, '0')}</span>
            </div>
        </div>
    );
};