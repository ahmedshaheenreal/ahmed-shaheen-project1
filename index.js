const resultContainer = document.getElementById("result");

// let data;
async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  renderData(data);
}

function renderData(items) {
  const allItems = items.reduce((acc, item) => acc + createCard(item), "");
  resultContainer.innerHTML = allItems;
}

function createCard(item) {
  const card = `
    <div class="card">
        <a href="/ahmed-shaheen-project1/details-demo.html#${item.id}"><img src="./assets/Logos/${item.image}" alt="" /></a>
            <div class="text">
                <p class="category">${item.category}</p>
                <p class="title"><strong>${item.topic}</strong></p>
                <div class="star-rating">
                    <img src="./assets/icons/star.svg" alt="" />
                    <img src="./assets/icons/star.svg" alt="" />
                    <img src="./assets/icons/star.svg" alt="" />
                    <img src="./assets/icons/star.svg" alt="" />
                    <img src="./assets/icons/star.svg" alt="" />
                </div>
                <p class="author">Author: <span>${item.name}</span></p>
            </div>
    </div>
    `;

  return card;
}
fetchData("./data.json");
function searchCards(e) {}
