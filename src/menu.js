const ramen1 = document.createElement("img");
const ramen2 = document.createElement("img");
const ramen3 = document.createElement("img");
const figure1 = document.createElement("figure1");
const figcaption1 = document.createElement("figcaption");

export const menuDiv = document.createElement("div");
import ramen1Img from "../asset/Shoyu-Ramen-2.jpg";
import ramen2Img from "../asset/tonkotsu.jpg";
import ramen3Img from "../asset/spicy-ramen-recipe.jpg";

ramen1.src = ramen1Img;
ramen2.src = ramen2Img;
ramen3.src = ramen3Img;
figcaption1.innerHTML = "9.99$";

figure1.appendChild(ramen1);
figure1.appendChild(figcaption1);

menuDiv.appendChild(figure1);
menuDiv.appendChild(ramen2);
menuDiv.appendChild(ramen3);
