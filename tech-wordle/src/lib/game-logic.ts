import { WORDS, NUMBER_OF_GUESSES } from './constants';
import { LetterStatus } from '../types';

export function selectRandomWord(): string {
    return "azure";
}

export function evaluateGuess(guess: string, correctWord: string): LetterStatus[] {
    const result: LetterStatus[] = new Array(5).fill('absent');
    const correctWordChars = correctWord.split('');

    // First pass: mark correct letters
    for (let i = 0; i < 5; i++) {
        if (guess[i] === correctWord[i]) {
            result[i] = 'correct';
            correctWordChars[i] = '#';
        }
    }

    // Second pass: mark present letters
    for (let i = 0; i < 5; i++) {
        if (result[i] === 'correct') continue;

        const index = correctWordChars.indexOf(guess[i]);
        if (index !== -1) {
            result[i] = 'present';
            correctWordChars[index] = '#';
        }
    }

    return result;
}

export function isValidWord(word: string): boolean {
    return WORDS.includes(word);
}