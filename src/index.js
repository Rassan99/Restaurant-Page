import { homeDiv } from "./home.js";
import { menuDiv } from "./menu.js";

const homeBttn = document.getElementById("home");
const menuBttn = document.getElementById("menu");
const aboutBttn = document.getElementById("about");
let contentDiv = document.getElementById("contentID");

homeBttn.addEventListener("click", function () {
  contentDiv.innerHTML = "";
  contentDiv.appendChild(homeDiv);
});

menuBttn.addEventListener("click", function () {
  contentDiv.innerHTML = "";
  contentDiv.appendChild(menuDiv);
});
