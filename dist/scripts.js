"use strict";
// ##################################################
// Constants
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const USERS_QUANTITY = 12;
const URL_GET_USERS = `https://randomuser.me/api/?results=${USERS_QUANTITY}`;
// ##################################################
// API Requests
function fetchUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(URL_GET_USERS);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    });
}
function handleError(error, { errorEl, loadingEl, buttonLoadNewUsersEl }) {
    hide(loadingEl);
    show(errorEl);
    const message = (error === null || error === void 0 ? void 0 : error.message) || "Unexpected error occurred.";
    errorEl.textContent = `Oops! ${message}`;
    enabled(buttonLoadNewUsersEl);
}
// ##################################################
// UI Helpers
const hide = (element) => (element.style.display = "none");
const show = (element, display = "block") => (element.style.display = display);
const append = (wrapper, content) => wrapper.appendChild(content);
const setHTML = (wrapper, content) => (wrapper.innerHTML = content);
const addClass = (element, className) => element.classList.add(className);
const enabled = (element) => (element.disabled = false);
const disabled = (element) => (element.disabled = true);
// ##################################################
// UI Renders
function resetUI({ usersEl, errorEl }) {
    setHTML(usersEl, "");
    hide(usersEl);
    setHTML(errorEl, "");
    hide(errorEl);
}
function showSkeleton({ loadingEl, buttonLoadNewUsersEl }, quantity) {
    show(loadingEl, "grid");
    setHTML(loadingEl, skeletonCard().repeat(quantity));
    disabled(buttonLoadNewUsersEl);
}
function createUserCard(user) {
    var _a;
    const el = document.createElement("div");
    el.id = (_a = user === null || user === void 0 ? void 0 : user.login) === null || _a === void 0 ? void 0 : _a.uuid;
    addClass(el, "card");
    setHTML(el, useCardTemplate(user));
    return el;
}
function renderUsers(data, { usersEl, loadingEl, buttonLoadNewUsersEl }) {
    var _a, _b;
    if (!((_a = data === null || data === void 0 ? void 0 : data.results) === null || _a === void 0 ? void 0 : _a.length)) {
        throw new Error("No users found.");
    }
    const fragment = document.createDocumentFragment();
    (_b = data === null || data === void 0 ? void 0 : data.results) === null || _b === void 0 ? void 0 : _b.map((user) => {
        append(fragment, createUserCard(user));
    });
    append(usersEl, fragment);
    show(usersEl, "grid");
    hide(loadingEl);
    enabled(buttonLoadNewUsersEl);
}
// ##################################################
// Component button
function button(label, onClick, modifier, type = "button") {
    return `
    <button
      type="${type}"
      class="button button--${modifier}"
      onclick="${onClick}"
    >
      ${label}
    </button>
  `;
}
// ##################################################
// Component card
function useCardTemplate({ picture, name, email, login }) {
    const fullName = `${name.first} ${name.last}`;
    return `
      <img src="${picture.large}" alt="Profile picture of ${fullName}">
      <h2>${fullName}</h2>
      <p>${email}</p>
      ${button("Remove", `removeCard('${login.uuid}')`, "error")}
    `;
}
// ##################################################
// Component skeletonCard
function skeletonCard() {
    return `
    <div class="skeleton">
      <div class="skeleton__avatar"></div>
      <div class="skeleton__line skeleton__line--name"></div>
      <div class="skeleton__line skeleton__line--email"></div>
      <div class="skeleton__line skeleton__line--button"></div>
    </div>
  `;
}
// ##################################################
// Debbug Helper: Just for simulating a long loading
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
// ##################################################
// Function removeCard
function removeCard(param) {
    const el = document.getElementById(param);
    if (!el)
        return;
    el.style.transform = "scale(.2)";
    setTimeout(() => el.remove(), 200);
}
// ##################################################
// Function getUsers
document.addEventListener("DOMContentLoaded", getUsers);
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const uiRefs = {
            usersEl: document.getElementById("users"),
            loadingEl: document.getElementById("loading"),
            errorEl: document.getElementById("error"),
            buttonLoadNewUsersEl: document.getElementById("button__load-new-users"),
        };
        resetUI(uiRefs);
        showSkeleton(uiRefs, USERS_QUANTITY);
        try {
            yield sleep(1500); // Just for simulating a long loading
            const data = yield fetchUsers();
            renderUsers(data, uiRefs);
        }
        catch (error) {
            handleError(error, uiRefs);
        }
    });
}
