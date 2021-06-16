import "./style.css";
import heroImg from "./images/restaurant.jpg";

/**
 * home module exports loadHome() function
 * which creates a div element adds appropriate
 * content and styles to that element and then appends it to the DOM
 */
export default function loadHome() {
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

function addStylings(elemID, className) {
  const elem = document.querySelector(elemID);
  elem.classList.add(className);
}
