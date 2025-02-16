// src/components/Controls.tsx
'use client';

import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

interface ControlsProps {
    onReset: () => void;
    gameOver: boolean;
    gameWon: boolean;
    rightGuessString?: string;
}

export function Controls({ 
    onReset, 
    gameOver, 
    gameWon, 
    rightGuessString 
}: ControlsProps) {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    const buttonClass = 'bg-gray-200 text-black hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 active:scale-95';

    const handleTouchStart = () => {
        // Handle touch start event
    };

    const handleTouchEnd = () => {
        // Handle touch end event
    };

    return (
        <div 
            className="flex justify-center gap-2" 
            onTouchStart={handleTouchStart} 
            onTouchEnd={handleTouchEnd}
        >
            <button 
                onClick={toggleDarkMode}
                className={`px-4 py-2 rounded text-sm font-medium ${buttonClass}`}
            >
                {isDarkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
            </button>
            <button
                onClick={onReset}
                className={`px-4 py-2 rounded text-sm font-medium ${buttonClass}`}
            >
                🔄 Try Again
            </button>
        </div>
    );
}