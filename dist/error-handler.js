import { hide, show, enabled } from './ui-helpers.js';
// ##################################################
// Error Handler
export function handleError(error, { errorEl, loadingEl, buttonLoadNewUsersEl }) {
    if (loadingEl)
        hide(loadingEl);
    if (errorEl)
        show(errorEl);
    const message = (error === null || error === void 0 ? void 0 : error.message) || "Unexpected error occurred.";
    if (errorEl)
        errorEl.textContent = `Oops! ${message}`;
    if (buttonLoadNewUsersEl)
        enabled(buttonLoadNewUsersEl);
}
