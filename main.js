import "./style.css";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";

const buildWebApp = () => {
  Header();
  Main();
  Footer();
  getPhotos("space", "20");
};

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;

const getPhotos = async (keyword, photoNum, orderPage) => {
  const data = await fetch(
    `https://api.unsplash.com/search/photos?page=1&query=${keyword}&per_page=${photoNum}&order_by=${orderPage}&client_id=${CLIENT_ID}`
  );
  const results = await data.json();
  const photos = results.results;
  printPhotos(photos);
};

const printPhotos = (photos) => {
  const container = document.querySelector("#results");
  const message = document.querySelector("#message");

  if (photos.length === 0) {
    container.innerHTML = "";
    message.textContent = "There were no results for the search";
  } else {
    container.innerHTML = "";
    message.textContent = "I have found " + photos.length + " photos:";
    for (const photo of photos) {
      const li = document.createElement("li");
      li.innerHTML = `
      <img src="${photo.urls.regular}" alt="${photo.alt_description}" />
    `;
      container.appendChild(li);
    }
  }
};

buildWebApp();

document.querySelector("#searchBtn").addEventListener("click", () => {
  const value = document.querySelector("#searchInput").value;
  const photoNumValue = document.querySelector("#countInput").value;
  const orderPageValue = document.querySelector("#order").value;
  getPhotos(value, photoNumValue, orderPageValue);
  document.querySelector("#searchInput").value = "";
});
