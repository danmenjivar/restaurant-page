import "./style.css";
import loadHome from "./home.js";

function createNavElement(navBar, name) {
  const navElemLink = document.createElement("a");
  navElemLink.classList.add("nav-elem");
  navElemLink.dataset.nav = name;

  // Add event listeners for switching
  navElemLink.addEventListener("click", () => {
    switch (navElemLink.dataset.nav) {
      case "home":
        // TODO Add Loading/Unloading
        console.log("Go Home");
        break;
      case "menu":
        console.log("Go Menu");
        break;
      case "contact":
        console.log("Go Contact");
        break;
      default:
        break;
    }
  });

  const navElemLinkText = document.createTextNode(name);
  navElemLink.appendChild(navElemLinkText);
  navBar.appendChild(navElemLink);
}

const navBar = () => {
  const mainContainer = document.querySelector("#content");
  const navBar = document.createElement("nav");

  const logo = document.createElement("div");
  logo.textContent = "Aviato";
  logo.classList.add("logo");
  logo.classList.add("left");
  navBar.append(logo);

  const navElems = ["home", "menu", "contact"];
  navElems.forEach((elem) => {
    createNavElement(navBar, elem);
  });

  navBar.classList.add("navbar");
  mainContainer.appendChild(navBar);
};

navBar();
loadHome();
