import { useState, useCallback, useEffect } from 'react';
import { 
    selectRandomWord, 
    evaluateGuess, 
    isValidWord 
} from '../lib/game-logic';
import { LetterStatus } from '../types';
import { NUMBER_OF_GUESSES } from '../lib/constants';
import { useDarkMode } from './useDarkMode';

export function useWordleGame() {
    const { isDarkMode } = useDarkMode();
    
    const [rightGuessString, setRightGuessString] = useState('');
    const [guesses, setGuesses] = useState<string[]>(['']);
    const [statuses, setStatuses] = useState<LetterStatus[][]>([]);
    const [letterStatuses, setLetterStatuses] = useState<Record<string, string>>({});
    const [gameOver, setGameOver] = useState(false);
    const [gameWon, setGameWon] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [showToast, setShowToast] = useState(false);

    // Initialize game
    useEffect(() => {
        resetGame();
    }, []);

    const resetGame = useCallback(() => {
        const newWord = selectRandomWord();
        setRightGuessString(newWord);
        setGuesses(['']);
        setStatuses([]);
        setLetterStatuses({});
        setGameOver(false);
        setGameWon(false);
        setShowToast(false);
    }, []);

    const processGuess = useCallback(async (currentGuess: string) => {
        if (gameOver) return;

        if (await isValidWord(currentGuess)) {
            const newStatuses = evaluateGuess(currentGuess, rightGuessString);
            setStatuses(prev => [...prev, newStatuses]);

            // Update letter statuses
            const updatedLetterStatuses = { ...letterStatuses };
            for (let i = 0; i < currentGuess.length; i++) {
                const letter = currentGuess[i];
                updatedLetterStatuses[letter] = getPriorityStatus(
                    updatedLetterStatuses[letter],
                    newStatuses[i]
                );
            }
            setLetterStatuses(updatedLetterStatuses);

            // Check if game is won
            if (currentGuess === rightGuessString) {
                setGameWon(true);
                setGameOver(true);
                setToastMessage('Congratulations! You won! 🎉');
                setShowToast(true);
            } else if (guesses.length >= NUMBER_OF_GUESSES) {
                setGameOver(true);
                setToastMessage(`Game Over! The word was ${rightGuessString}`);
                setShowToast(true);
            }

            // Add a new empty guess for the next attempt if game isn't over
            if (guesses.length < NUMBER_OF_GUESSES && currentGuess !== rightGuessString) {
                setGuesses(prev => [...prev.slice(0, -1), currentGuess, '']);
            } else {
                setGuesses(prev => [...prev.slice(0, -1), currentGuess]);
            }
        } else {
            setToastMessage('Not a valid word');
            setShowToast(true);
        }
    }, [gameOver, rightGuessString, letterStatuses, guesses.length]);

    const handleKeyPress = useCallback((key: string) => {
        if (gameOver) return;

        const currentGuess = guesses[guesses.length - 1];

        if (key === 'Enter') {
            if (currentGuess.length !== 5) {
                setToastMessage('Word must be 5 letters');
                setShowToast(true);
                return;
            }
            processGuess(currentGuess);
        } else if (key === 'Del' || key === 'Backspace') {
            if (currentGuess.length > 0) {
                setGuesses(prev => [...prev.slice(0, -1), currentGuess.slice(0, -1)]);
            }
        } else if (/^[a-z]$/i.test(key) && currentGuess.length < 5) {
            setGuesses(prev => [...prev.slice(0, -1), currentGuess + key.toLowerCase()]);
        }
    }, [gameOver, guesses, processGuess]);

    // Add keyboard event listener
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            handleKeyPress(e.key);
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyPress]);

    return {
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
        setShowToast,
        isDarkMode
    };
}

function getPriorityStatus(existingStatus?: string, newStatus?: LetterStatus): string {
    if (!newStatus) return existingStatus || '';
    if (!existingStatus) return newStatus;

    const priority: Record<Exclude<LetterStatus, 'default'>, number> = {
        correct: 3,
        present: 2,
        absent: 1
    };

    const existingPriority = existingStatus === 'default' ? 0 : (priority[existingStatus as keyof typeof priority] || 0);
    const newPriority = newStatus === 'default' ? 0 : (priority[newStatus as keyof typeof priority] || 0);

    return newPriority > existingPriority ? newStatus : existingStatus;
}