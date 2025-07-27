// ##################################################
// API Requests

import { UserResponse } from './types.js';
import { URL_GET_USERS } from './constants.js';

export async function fetchUsers(): Promise<UserResponse> {
    const response = await fetch(URL_GET_USERS);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
} 