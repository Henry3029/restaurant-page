// src/menu.js
export function loadMenu() {
  const content = document.getElementById("content");
  content.innerHTML = ""; // clear previous content
  
  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu-content");

  const headline = document.createElement("h1");
  headline.textContent = "Our Menu";

const image = document.createElement("img");
image.src = "./src/images/sandwich.jpg";
image.alt = "A delicious sandwich 😄";
image.style.width = "300px";

  const list = document.createElement("ul");

  const items = ["Burger", "Pizza", "Pasta", "Salad"];
  items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });

  menuDiv.append(headline, image);
  menuDiv.appendChild(list);
  content.appendChild(menuDiv);
}