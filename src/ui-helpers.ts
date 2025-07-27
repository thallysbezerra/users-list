// ##################################################
// UI Helpers

export const hide = (element: HTMLElement) => (element.style.display = "none");
export const show = (element: HTMLElement, display: string = "block") => (element.style.display = display);
export const append = (wrapper: HTMLElement, content: HTMLElement | DocumentFragment) => wrapper.appendChild(content);
export const setHTML = (wrapper: HTMLElement, content: string) => (wrapper.innerHTML = content);
export const addClass = (element: HTMLElement, className: string) => element.classList.add(className);
export const enabled = (element: HTMLButtonElement) => (element.disabled = false);
export const disabled = (element: HTMLButtonElement) => (element.disabled = true); 