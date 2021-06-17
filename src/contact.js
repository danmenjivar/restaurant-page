import "./style.css";

/**
 * contact module exports loadContact() function
 * which creates a div element adds appropriate
 * content and styles to that element and then appends it to the DOM
 */
export default function loadContact() {
  console.log("Contact load init");
  const parentContainer = document.querySelector("#content");
  const homeContainer = document.createElement("div");
  homeContainer.classList.add("home-img");
  const headline = document.createElement("h2");
  headline.textContent = "Family Owned";
  headline.classList.add("home-headline");
  homeContainer.appendChild(headline);
  const copy = document.createElement("h3");
  copy.textContent = "Est. 1998";
  copy.classList.add("home-text");
  homeContainer.appendChild(copy);
  parentContainer.appendChild(homeContainer);
}
