// src/utils/localStorage.ts
export const LocalStorage = {
    getItem: <T>(key: string, defaultValue: T): T => {
        if (typeof window === 'undefined') return defaultValue;
        
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch {
            return defaultValue;
        }
    },

    setItem: (key: string, value: any): void => {
        if (typeof window === 'undefined') return;
        
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error('Error saving to localStorage', error);
        }
    },

    removeItem: (key: string): void => {
        if (typeof window === 'undefined') return;
        
        localStorage.removeItem(key);
    }
};