import { hide, show, append, setHTML, addClass, enabled, disabled } from './ui-helpers.js';
import { useCardTemplate, skeletonCard } from './components.js';
// ##################################################
// UI Renders
export function resetUI({ usersEl, errorEl }) {
    if (usersEl) {
        setHTML(usersEl, "");
        hide(usersEl);
    }
    if (errorEl) {
        setHTML(errorEl, "");
        hide(errorEl);
    }
}
export function showSkeleton({ loadingEl, buttonLoadNewUsersEl }, quantity) {
    if (loadingEl) {
        show(loadingEl, "grid");
        setHTML(loadingEl, skeletonCard().repeat(quantity));
    }
    if (buttonLoadNewUsersEl) {
        disabled(buttonLoadNewUsersEl);
    }
}
export function createUserCard(user) {
    var _a;
    const el = document.createElement("div");
    el.id = (_a = user === null || user === void 0 ? void 0 : user.login) === null || _a === void 0 ? void 0 : _a.uuid;
    addClass(el, "card");
    setHTML(el, useCardTemplate(user));
    return el;
}
export function renderUsers(data, { usersEl, loadingEl, buttonLoadNewUsersEl }) {
    var _a, _b;
    if (!((_a = data === null || data === void 0 ? void 0 : data.results) === null || _a === void 0 ? void 0 : _a.length)) {
        throw new Error("No users found.");
    }
    const fragment = document.createDocumentFragment();
    (_b = data === null || data === void 0 ? void 0 : data.results) === null || _b === void 0 ? void 0 : _b.map((user) => {
        fragment.appendChild(createUserCard(user));
    });
    if (usersEl) {
        append(usersEl, fragment);
        show(usersEl, "grid");
    }
    if (loadingEl) {
        hide(loadingEl);
    }
    if (buttonLoadNewUsersEl) {
        enabled(buttonLoadNewUsersEl);
    }
}
