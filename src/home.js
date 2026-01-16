// src/home.js
export function loadHome() {
  const content = document.getElementById("content");
  content.innerHTML = ""; // clear previous content
  const homeDiv = document.createElement("div");
  homeDiv.classList.add("home-content");

  const headline = document.createElement("h1");
  headline.textContent = "Welcome to Big View Restaurant!";

const image = document.createElement("img");
image.src = "./src/images/burger.jpg";
image.alt = "A delicious burger";
image.style.width = "300px";

  const text = document.createElement("p");
  text.textContent = "Welcome to Big View Restaurant, where every meal is made with love and fresh ingredients. From our delicious local dishes to our mouth-watering international recipes, we serve food that brings comfort, joy, and unforgettable flavor to every table."

  homeDiv.append(headline, image);
  homeDiv.appendChild(text);
  content.appendChild(homeDiv);
}