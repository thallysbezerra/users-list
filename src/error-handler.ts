import { UIReferences } from './types.js';
import { hide, show, enabled } from './ui-helpers.js';

// ##################################################
// Error Handler

export function handleError(error: Error, { errorEl, loadingEl, buttonLoadNewUsersEl }: UIReferences) {
    if (loadingEl) hide(loadingEl);
    if (errorEl) show(errorEl);

    const message = error?.message || "Unexpected error occurred.";
    if (errorEl) errorEl.textContent = `Oops! ${message}`;

    if (buttonLoadNewUsersEl) enabled(buttonLoadNewUsersEl);
} 