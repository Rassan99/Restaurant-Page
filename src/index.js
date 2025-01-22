import { homeDiv } from "./home.js";
import { menuDiv } from "./menu.js";
import { aboutDiv } from "./about.js";
import "./styles.css";

const homeBttn = document.getElementById("home");
const menuBttn = document.getElementById("menu");
const aboutBttn = document.getElementById("about");
let contentDiv = document.getElementById("contentID");
contentDiv.appendChild(homeDiv);

homeBttn.addEventListener("click", function () {
  contentDiv.innerHTML = "";
  contentDiv.appendChild(homeDiv);
});

menuBttn.addEventListener("click", function () {
  contentDiv.innerHTML = "";
  contentDiv.appendChild(menuDiv);
});

aboutBttn.addEventListener("click", function () {
  contentDiv.innerHTML = "";
  contentDiv.appendChild(aboutDiv);
});
