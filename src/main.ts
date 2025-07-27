import { UIReferences } from './types.js';
import { USERS_QUANTITY } from './constants.js';
import { fetchUsers } from './api.js';
import { handleError } from './error-handler.js';
import { resetUI, showSkeleton, renderUsers } from './ui-renders.js';
import { sleep } from './utils.js';

// ##################################################
// Main Application - Function getUsers

document.addEventListener("DOMContentLoaded", getUsers);

async function getUsers(): Promise<void> {
  const uiRefs: UIReferences = {
    usersEl: document.getElementById("users"),
    loadingEl: document.getElementById("loading"),
    errorEl: document.getElementById("error"),
    buttonLoadNewUsersEl: document.getElementById("button__load-new-users") as HTMLButtonElement,
  };

  resetUI(uiRefs);
  showSkeleton(uiRefs, USERS_QUANTITY);

  try {
    await sleep(1500); // Just for simulating a long loading

    const data = await fetchUsers();

    renderUsers(data, uiRefs);
  } catch (error) {
    handleError(error as Error, uiRefs);
  }
}

// ##################################################
// Make getUsers available globally for the onclick handler

window.getUsers = getUsers;
