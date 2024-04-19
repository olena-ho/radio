import { radio } from "./radio.js";
import { renderNavigation } from "./render-nav.js";

document.querySelector('#text').innerHTML = `
<h1>${radio[2].name}</h1>
<h2>${radio[2].frequency}</h2>
<p>${radio[2].description}</p>
`;

renderNavigation();
