// src/contact.js
export function loadContact() {
  const content = document.getElementById("content");
  content.innerHTML = ""; // clear previous content
  
  const contactDiv = document.createElement("div");
  contactDiv.classList.add("contact-content");

  const headline = document.createElement("h1");
  headline.textContent = "Contact Us";

  const address = document.createElement("p");
  address.textContent = "123 Food Street, Tasty City";

  const phone = document.createElement("p");
  phone.textContent = "Phone: 123-456-7890";

  contactDiv.appendChild(headline);
  contactDiv.appendChild(address);
  contactDiv.appendChild(phone);
  content.appendChild(contactDiv);
}