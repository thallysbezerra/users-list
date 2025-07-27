// ##################################################
// Debbug Helper: Just for simulating a long loading

export function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// ##################################################
// Function removeCard

export function removeCard(param: string): void {
    const el = document.getElementById(param);
    if (!el) return;

    el.style.transform = "scale(.2)";
    setTimeout(() => el.remove(), 200);
}

// Make removeCard available globally for the onclick handler
window.removeCard = removeCard; 