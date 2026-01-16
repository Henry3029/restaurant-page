import { loadHome } from './home.js';
import { loadMenu } from './menu.js';
import { loadContact } from './contact.js';

document.getElementById("home-tab").addEventListener("click", loadHome);
document.getElementById("menu-tab").addEventListener("click", loadMenu);
document.getElementById("contact-tab").addEventListener("click", loadContact);

loadHome(); // initial load

console.log("welcome to my webpage");
alert("welcome to my website");

console.log("JavaScript is connected!");
alert("JS is working!");