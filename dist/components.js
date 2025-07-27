// ##################################################
// Component button
export function button(label, onClick, modifier, type = "button") {
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
export function useCardTemplate({ picture, name, email, login }) {
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
export function skeletonCard() {
    return `
    <div class="skeleton">
      <div class="skeleton__avatar"></div>
      <div class="skeleton__line skeleton__line--name"></div>
      <div class="skeleton__line skeleton__line--email"></div>
      <div class="skeleton__line skeleton__line--button"></div>
    </div>
  `;
}
