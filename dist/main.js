var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { USERS_QUANTITY } from './constants.js';
import { fetchUsers } from './api.js';
import { handleError } from './error-handler.js';
import { resetUI, showSkeleton, renderUsers } from './ui-renders.js';
import { sleep } from './utils.js';
// ##################################################
// Main Application - Function getUsers
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
// ##################################################
// Make getUsers available globally for the onclick handler
window.getUsers = getUsers;
