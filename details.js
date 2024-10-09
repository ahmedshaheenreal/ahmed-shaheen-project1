const url = window.location.href; // or any other URL string
const id = url.split("#").pop(); //get the id
const detailContainer = document.getElementById("item-details-section");
let item;
async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  item = data.find((e) => e.id == id);
  renderData();
}
fetchData("./data.json");

function renderData() {
  const details = `
  <div class="text">
    <p class="details-category">
      <strong>${item.category}</strong>
    </p>
    <h2>${item.topic}</h2>
    <p class="description">
      ${item.description}
    </p>
  </div>
  <div class="detail-card">
    <img src="./assets/Logos/${item.image}" alt="${item.topic} logo" />
    <div class="content">
      <div class="creator">
        <span>${item.topic} By</span><a href="#">${item.name}</a>
      </div>
      <div class="interest">
        <p>Interested in this topic?</p>
        <button>Add to favorites</button>
      </div>
      <p class="unlimited">Unlimited Credits</p>
    </div>
  </div>
  <div class="list_container">
    <h3>${item.topic} Sub Topics</h3>
    <ul class="list">
      ${item.subtopics
        .map(
          (e) => `
        <li class="list-item">
          <span>
            <ion-icon name="checkmark-circle-outline"></ion-icon>
          </span> 
          ${e}
        </li>
      `
        )
        .join("")}
    </ul>
  </div>
`;
  detailContainer.innerHTML = details;
}
