import { radio } from "./radio.js";
import { renderNavigation } from "./render-nav.js";

document.querySelector('#text').innerHTML = `
<h1>${radio[1].name}</h1>
<h2>${radio[1].frequency}</h2>
<p>${radio[1].description}</p>
`;

renderNavigation();
