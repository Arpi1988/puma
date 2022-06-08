const card = document.createElement("div");
card.setAttribute("class", "card");

const img = document.createElemen("img");
img.setAttribute("class", "image");
img.setAttribute("src", "./assets/png_2.jpg ");
img.setAttribute("alt", "puma");
document.card.appendChild(img);

const text = document.createElement("p");
text.setAttribute("class", "colors");
text.setAttribute("span", "jv");
text.innerText = "5 colors";
document.card.appendChild(text);

document.body.appendChild(card);

const list = document.querySelector(".list");
console.log("children", list.children);