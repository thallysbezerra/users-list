// ##################################################
// UI Helpers
export const hide = (element) => (element.style.display = "none");
export const show = (element, display = "block") => (element.style.display = display);
export const append = (wrapper, content) => wrapper.appendChild(content);
export const setHTML = (wrapper, content) => (wrapper.innerHTML = content);
export const addClass = (element, className) => element.classList.add(className);
export const enabled = (element) => (element.disabled = false);
export const disabled = (element) => (element.disabled = true);
