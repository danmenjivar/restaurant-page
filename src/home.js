import heroImg from "./restaurant.jpg";

/**
 * home module exports loadHome() function
 * which creates a div element adds appropriate
 * content and styles to that element and then appends it to the DOM
 */
export default function loadHome() {
  const mainContainer = document.querySelector("#content");
  const homeContainer = document.createElement("div");

  const homeImg = new Image();
  homeImg.src = heroImg;
  homeContainer.appendChild(homeImg);

  const headline = document.createElement("div");
  headline.textContent = "Aviato Restaurant & Grill";
  homeContainer.appendChild(headline);

  const copy = document.createTextNode("Best seafood in the valley.");
  homeContainer.appendChild(copy);

  mainContainer.appendChild(homeContainer);
}
