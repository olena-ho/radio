import { radio } from "./radio.js";
import { renderNavigation } from "./render-nav.js";

document.querySelector('#text').innerHTML = `
<h1>${radio[0].name}</h1>
<h2>${radio[0].frequency}</h2>
<p>${radio[0].description}</p>
`
renderNavigation();
