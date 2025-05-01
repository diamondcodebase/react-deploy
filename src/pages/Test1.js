"use client";
import GameGuide from "../components/GameGuide";

export default function Test1() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <h1 className="text-4xl font-bold mb-4">Test Page</h1>
                <p className="text-lg mb-8">This is a test page.</p>
                <GameGuide returnUrl="/test1" />
            </div>
            
        </div>
    );
}