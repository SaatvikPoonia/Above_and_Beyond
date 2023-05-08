const loginForm = document.getElementById('login-form');
const carDetails = document.getElementById('car-details');
const carNameInput = document.getElementById('car-name-input');
const passwordInput = document.getElementById('password-input');
const loginButton = document.getElementById('login-button');
const carNameElement = document.getElementById('car-name');
const speedElement = document.getElementById('speed');
const oilElement = document.getElementById('oil');
const photoElement = document.getElementById('car-photo');
const colorElement = document.getElementById('color');
const priceElement = document.getElementById('price');
const clickElement = document.getElementById('log');

// Login form submit event listener
loginForm.addEventListener('submit', event => {
  event.preventDefault();
  const carName = carNameInput.value;
  const password = passwordInput.value;

  // Fetch data from data.json file
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      // Check if car name and password match with data
      const car = data.find(car => car.name === carName && car.password === password);
      if (car) {
        // Display car details
        const queryString = `carName=${car.name}&speed=${car.speed}&oil=${car.oil}&photo=${car.photo}&color=${car.color}&price=${car.price}`;
        window.location.href = `car.html?${queryString}`;
      } else {
        // Show error message
        alert('Invalid car name or password');
      }
    })
    .catch(error => console.error(error));
});


