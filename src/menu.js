import "./style.css";
import FishChips from "./images/fish-and-chips.jpg";
import Salmon from "./images/grilled-salmon.jpg";
import Shrimp from "./images/shrimp.png";
import Octopus from "./images/octopus.jpg";
import Mussels from "./images/mussels.jpg";

/**
 * contact module exports loadMenu() function
 * which creates a div element adds appropriate
 * content and styles to that element and then appends it to the DOM
 */

let picCredits = [
  "<a href='https://www.freepik.com/photos/background'>Background photo created by dashu83 - www.freepik.com</a>",
  "",
];

let menu = [
  {
    item: "Fish & Chips",
    price: 4.99,
    pic: FishChips,
    blurb: "Made to order, freshly caught fish",
  },
  {
    item: "Grilled Salmon",
    price: 18.99,
    pic: Salmon,
    blurb: "The best in class, served from farm to table.",
  },
  {
    item: "Octopus",
    price: 16.99,
    pic: Octopus,
    blurb: "Available only in season.",
  },
  {
    item: "Shrimp Platter",
    price: 9.99,
    pic: Shrimp,
    blurb: "Can't go wrong with Bubba Shrimp.",
  },
  {
    item: "Mussels",
    price: 11.99,
    pic: Mussels,
    blurb: "Freshly caught, only available in season.",
  },
];

export default function loadMenu() {
  const parentContainer = document.querySelector("#content");
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("background-color");

  const menuSubContainer = document.createElement("div");
  menuSubContainer.classList.add("foreground-menu");

  const h1 = document.createElement("h1");
  h1.textContent = "Menu";
  h1.classList.add("logo");
  menuSubContainer.appendChild(h1);

  menu.forEach((dish) => {
    const dishContainer = document.createElement("div");
    dishContainer.classList.add("menu-item");

    const dishName = document.createElement("h3");
    dishName.textContent = dish.item;
    dishName.classList.add("menu-name");

    const dishPrice = document.createElement("p");
    dishPrice.textContent = `$${dish.price}`;
    dishPrice.classList.add("menu-price");

    if (dish.pic !== "TODO") {
      const dishPic = new Image();
      dishPic.src = dish.pic;
      dishPic.classList.add("menu-pic");
      dishContainer.appendChild(dishPic);
    }
    const dishBlurb = document.createElement("p");
    dishBlurb.textContent = dish.blurb;
    dishBlurb.classList.add("menu-blurb");

    dishContainer.appendChild(dishName);
    dishContainer.appendChild(dishPrice);
    dishContainer.appendChild(dishBlurb);

    menuSubContainer.appendChild(dishContainer);
  });

  menuContainer.appendChild(menuSubContainer);

  parentContainer.appendChild(menuContainer);
}
