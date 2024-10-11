const root = document.documentElement;
const darkModeBtn = document.getElementById("dark-mode-btn");
const favBtn = document.getElementById("fav-btn");
const favSection = document.getElementById("favorite-section");
const favResult = document.getElementById("favorites");

const favoriteClose = document.getElementById("favorite-close");
let dark = false;
let favClosed = true;
darkModeBtn.addEventListener("click", toggleDarkmode);

function toggleDarkmode(e) {
  console.log("clicked");
  dark = !dark;
  root.style.setProperty("--bg_default", dark ? "#1A1A1A" : "#fff");
  root.style.setProperty("--bg_body", dark ? "#282828" : "#F0F9FF");
  root.style.setProperty("--lines-color", dark ? " #000000" : "#DDDDDD");
  root.style.setProperty("--body-text", dark ? "#EDEDED" : "#333333");
}

favoriteClose.addEventListener("click", toggleFavsection);
favBtn.addEventListener("click", toggleFavsection);
function toggleFavsection() {
  if (favClosed) {
    favClosed = false;
    favSection.classList.remove("fav-collapse");
  } else {
    favClosed = true;
    favSection.classList.add("fav-collapse");
  }
  renderCards();
}

function createCard(card) {
  return `<div class="card fav-card">
          <img src="./assets/Logos/${card.image}" alt="" />
          <div class="text">
            <p class="title">
              <strong>${card.topic}</strong>
            </p>
            <div class="star-rating">
              <img src="./assets/icons/star.svg" alt="" />
              <img src="./assets/icons/star.svg" alt="" />
              <img src="./assets/icons/star.svg" alt="" />
              <img src="./assets/icons/star.svg" alt="" />
              <img src="./assets/icons/star.svg" alt="" />
            </div>
          </div>
        </div>`;
}

function renderCards() {
  const favCards = JSON.parse(localStorage.getItem("favorites")) || [];
  const result = favCards.reduce((acc, card) => acc + createCard(card), "");
  favResult.innerHTML = result;
}

renderCards();
