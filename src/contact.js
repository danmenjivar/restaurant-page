import "./style.css";

const updateContactInfo = (parentDiv) => {
  const address = "1631 E Capitol Expy, San Jose, CA 95121";
  const mThHours = [8, 8];
  const fSunHours = [8, 11];
  const phone = "(222)-888-5555";

  const addressDiv = document.createElement("div");
  addressDiv.innerHTML = `<span class="material-icons">place
  </span>${address}`;
  parentDiv.appendChild(addressDiv);

  const hoursDiv = document.createElement("div");
  hoursDiv.innerHTML = `<span class="material-icons">schedule
  </span>Mon-Thurs: ${mThHours[0]}am-${mThHours[1]}pm, Fri-Sun: ${fSunHours[0]}am-${fSunHours[1]}pm`;
  parentDiv.appendChild(hoursDiv);

  const phoneDiv = document.createElement("div");
  phoneDiv.innerHTML = `<span class="material-icons">phone</span>${phone}`;
  parentDiv.appendChild(phoneDiv);

  const map = document.createElement("div");
  map.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d85375.93354761209!2d-121.9360996977834!3d37.3235148590912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x72ad1dd786b14f33!2sThe%20Boiling%20Crab!5e0!3m2!1sen!2sus!4v1623951880304!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
  parentDiv.appendChild(map);
};

/**
 * contact module exports loadContact() function
 * which creates a div element adds appropriate
 * content and styles to that element and then appends it to the DOM
 */
export default function loadContact() {
  const parentContainer = document.querySelector("#content");
  const contactContainer = document.createElement("div");
  contactContainer.classList.add("background-color");

  const contactSubContainer = document.createElement("div");
  contactSubContainer.classList.add("foreground-contact");

  const contactTitle = document.createElement("h2");
  contactTitle.innerText = "Contact Us";
  contactTitle.classList.add("logo");
  contactSubContainer.appendChild(contactTitle);

  const contactInfoContainer = document.createElement("div");
  updateContactInfo(contactInfoContainer);

  contactInfoContainer.classList.add("contact-info");
  contactSubContainer.appendChild(contactInfoContainer);

  contactContainer.appendChild(contactSubContainer);
  parentContainer.appendChild(contactContainer);
}
