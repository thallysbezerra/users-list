import { User, UserResponse, UIReferences } from './types.js';
import { hide, show, append, setHTML, addClass, enabled, disabled } from './ui-helpers.js';
import { useCardTemplate, skeletonCard } from './components.js';

// ##################################################
// UI Renders

export function resetUI({ usersEl, errorEl }: Pick<UIReferences, 'usersEl' | 'errorEl'>) {
    if (usersEl) {
        setHTML(usersEl, "");
        hide(usersEl);
    }
    if (errorEl) {
        setHTML(errorEl, "");
        hide(errorEl);
    }
}

export function showSkeleton({ loadingEl, buttonLoadNewUsersEl }: Pick<UIReferences, 'loadingEl' | 'buttonLoadNewUsersEl'>, quantity: number) {
    if (loadingEl) {
        show(loadingEl, "grid");
        setHTML(loadingEl, skeletonCard().repeat(quantity));
    }
    if (buttonLoadNewUsersEl) {
        disabled(buttonLoadNewUsersEl);
    }
}

export function createUserCard(user: User): HTMLElement {
    const el = document.createElement("div");
    el.id = user?.login?.uuid;
    addClass(el, "card");
    setHTML(el, useCardTemplate(user));
    return el;
}

export function renderUsers(data: UserResponse, { usersEl, loadingEl, buttonLoadNewUsersEl }: UIReferences) {
    if (!data?.results?.length) {
        throw new Error("No users found.");
    }

    const fragment = document.createDocumentFragment();

    data?.results?.map((user: User) => {
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