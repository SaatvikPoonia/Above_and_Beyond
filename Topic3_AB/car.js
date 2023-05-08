const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const carName = urlParams.get('carName');
const speed = urlParams.get('speed');
const oil = urlParams.get('oil');
const photo = urlParams.get('photo');
const color = urlParams.get('color');
const price = urlParams.get('price');

const carNameElement = document.getElementById('car-name');
const speedElement = document.getElementById('speed');
const oilElement = document.getElementById('oil');
const photoElement = document.getElementById('car-photo');
const colorElement = document.getElementById('color');
const priceElement = document.getElementById('price');
const clickElement = document.getElementById('log');

carNameElement.textContent = carName;
speedElement.textContent = speed;
oilElement.textContent = oil;
photoElement.src = photo;
colorElement.textContent = color;
priceElement.textContent = price;

clickElement.addEventListener("click", function() {
  window.location.href = "index.html";
});
