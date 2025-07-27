// ##################################################
// Extend Window interface for global functions

declare global {
    interface Window {
        getUsers: () => Promise<void>;
        removeCard: (param: string) => void;
    }
}

// ##################################################
// Types and Interfaces

interface User {
    login: {
        uuid: string;
    };
    picture: {
        large: string;
    };
    name: {
        first: string;
        last: string;
    };
    email: string;
}

interface UserResponse {
    results: User[];
}

interface UIReferences {
    usersEl: HTMLElement | null;
    loadingEl: HTMLElement | null;
    errorEl: HTMLElement | null;
    buttonLoadNewUsersEl: HTMLButtonElement | null;
}

export type { User, UserResponse, UIReferences }; 