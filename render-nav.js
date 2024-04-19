import { radio } from "./radio.js";

export const renderNavigation = () => {
  const header = document.querySelector('header');

  radio.forEach((radioItem, i) => {
    header.innerHTML += `
    <a href="${radioItem.link}">${radioItem.name}
    </a>
    `;
  });
}
