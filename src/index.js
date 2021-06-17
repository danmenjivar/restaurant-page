import "./style.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

function createNavElement(navBar, name) {
  const navElemLink = document.createElement("a");
  navElemLink.classList.add("nav-elem");
  navElemLink.dataset.nav = name;

  // Add event listeners for switching
  navElemLink.addEventListener("click", () => {
    unloadPage();
    switch (navElemLink.dataset.nav) {
      case "home":
        loadHome();
        break;
      case "menu":
        loadMenu();
        break;
      case "contact":
        loadContact();
        break;
      default:
        console.error("ERROR: trying to load page that does not exist.");
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

const unloadPage = () => {
  let page = document.querySelector("#content");
  page.removeChild(page.lastChild);
};

navBar();
// loadHome();
loadMenu();
