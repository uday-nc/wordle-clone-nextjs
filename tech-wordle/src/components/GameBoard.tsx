// src/components/GameBoard.tsx
'use client';

import React from 'react';
import { LetterStatus } from '../types';  
import { useDarkMode } from '../hooks/useDarkMode';
import styles from './GameBoard.module.css';

interface GameBoardProps {
    guesses: string[];
    statuses: LetterStatus[][];
}

export function GameBoard({ guesses, statuses }: GameBoardProps) {
    const { isDarkMode } = useDarkMode();
    
    // Create a 6x5 grid
    const rows = Array(6).fill(null);
    const cols = Array(5).fill(null);

    return (
        <div className={styles.board}>
            {rows.map((_, rowIndex) => {
                const guess = guesses[rowIndex] || '';
                const rowStatus = statuses[rowIndex] || [];

                return (
                    <div key={rowIndex} className={styles.row}>
                        {cols.map((_, colIndex) => {
                            const letter = guess[colIndex] || '';
                            const status = rowStatus[colIndex];
                            
                            let cellClass = styles.cell;
                            if (letter) {
                                cellClass += ' ' + styles.filled;
                                if (status === 'correct') cellClass += ' ' + styles.correct;
                                else if (status === 'present') cellClass += ' ' + styles.present;
                                else if (status === 'absent') cellClass += ' ' + styles.absent;
                            }
                            
                            return (
                                <div
                                    key={colIndex}
                                    className={cellClass}
                                >
                                    {letter}
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}