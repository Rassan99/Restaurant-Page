const familyImgeElement = document.createElement("img");
export const homeDiv = document.createElement("div");
const headerP = document.createElement("p");
const contactP = document.createElement("p");
const footer = document.createElement("footer");
import familyImg from "../asset/familyCooking.webp";

headerP.innerHTML =
  "Family owned Ramen shop where ur taste buds would be delighted";

contactP.innerHTML = "Contact us";
familyImgeElement.src = familyImg;
homeDiv.appendChild(familyImgeElement);
homeDiv.appendChild(headerP);
homeDiv.appendChild(contactP);
homeDiv.appendChild(footer);
homeDiv.classList.add("homeDiv");
familyImgeElement.classList.add("familyImg");
let form = document.createElement("form");

let inputName = document.createElement("input");
inputName.setAttribute("type", "text");
inputName.setAttribute("id", "fname");

let labelName = document.createElement("label");
labelName.setAttribute("for", "fname");
labelName.innerHTML = "Your name: ";

let inputEmail = document.createElement("input");
inputEmail.setAttribute("type", "text");
inputEmail.setAttribute("id", "email");

let labelEmail = document.createElement("label");
labelEmail.setAttribute("for", "email");
labelEmail.innerHTML = "Your Email: ";

let inputMess = document.createElement("input");
inputMess.setAttribute("type", "text");
inputMess.setAttribute("id", "message");

let labelMess = document.createElement("label");
labelMess.setAttribute("for", "message");
labelMess.innerHTML = "Your message: ";

let submitBttn = document.createElement("input");
submitBttn.setAttribute("type", "submit");

form.appendChild(labelName);
form.appendChild(inputName);

form.appendChild(labelEmail);
form.appendChild(inputEmail);

form.appendChild(labelMess);
form.appendChild(inputMess);

form.appendChild(submitBttn);

homeDiv.appendChild(form);
