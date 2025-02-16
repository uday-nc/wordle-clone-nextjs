export type GameState = {
    currentGuess: string[];
    guessesRemaining: number;
    rightGuessString: string;
    gamesPlayed: number;
    gamesWon: number;
};

export type LetterStatus = 'default' | 'correct' | 'present' | 'absent';