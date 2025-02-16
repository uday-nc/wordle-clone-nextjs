// src/components/Keyboard.tsx
'use client';

import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';
import styles from './Keyboard.module.css';

const KEYBOARD_ROWS = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['DEL', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'ENTER']
];

type KeyboardProps = {
    onKeyPress: (key: string) => void;
    letterStatuses: Record<string, string>;
};

export function Keyboard({ onKeyPress, letterStatuses }: KeyboardProps) {
    const { isDarkMode } = useDarkMode();

    const getKeyClass = (key: string): string => {
        if (key === 'ENTER' || key === 'DEL') {
            return isDarkMode ? 'bg-gray-600 text-white' : 'bg-gray-400 text-black';
        }

        const status = letterStatuses[key.toLowerCase()];
        switch (status) {
            case 'correct':
                return 'bg-green-500 text-white';
            case 'present':
                return 'bg-yellow-500 text-white';
            case 'absent':
                return 'bg-red-500 text-white';
            default:
                return isDarkMode ? 'bg-gray-600 text-white' : 'bg-gray-400 text-black';
        }
    };

    return (
        <div className={styles.keyboard}>
            {KEYBOARD_ROWS.map((row, rowIndex) => (
                <div key={rowIndex} className={styles.row}>
                    {row.map(key => (
                        <button
                            key={key}
                            data-key={key}
                            onClick={() => onKeyPress(key === 'DEL' ? 'Backspace' : key === 'ENTER' ? 'Enter' : key.toLowerCase())}
                            className={`${styles.button} ${getKeyClass(key)}`}
                        >
                            {key}
                        </button>
                    ))}
                </div>
            ))}
        </div>
    );
}