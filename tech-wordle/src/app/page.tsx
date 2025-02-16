// src/app/page.tsx
'use client';

import React, { useEffect } from 'react';
import { GameBoard } from '../components/GameBoard';
import { Keyboard } from '../components/Keyboard';
import { Controls } from '../components/Controls';
import { Toast } from '../components/Toast';
import { useWordleGame } from '../hooks/useWordleGame';
import { useDarkMode } from '../hooks/useDarkMode';

export default function Home() {
    const {
        rightGuessString,
        guesses,
        statuses,
        letterStatuses,
        gameOver,
        gameWon,
        handleKeyPress,
        resetGame,
        toastMessage,
        showToast,
        setShowToast
    } = useWordleGame();

    const { isDarkMode } = useDarkMode();

    // Apply dark mode class to html element
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    return (
        <div className="w-full max-w-lg flex flex-col items-center gap-5">
            <h1 className="text-3xl font-bold text-black dark:text-white transition-colors">Tech Wordle</h1>
            
            <Controls 
                onReset={resetGame}
                gameOver={gameOver}
                gameWon={gameWon}
                rightGuessString={rightGuessString}
            />

            <div className="w-full flex flex-col items-center gap-5">
                <GameBoard 
                    guesses={guesses}
                    statuses={statuses}
                />
                
                <Keyboard
                    letterStatuses={letterStatuses}
                    onKeyPress={handleKeyPress}
                />
            </div>

            {showToast && (
                <Toast message={toastMessage} onClose={() => setShowToast(false)} />
            )}
        </div>
    );
}