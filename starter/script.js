'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function (data, className = '') {
  console.log(data);
  const { langauage, ...others } = data?.languages;
  const mainLanguage = Object.values(others)[0];
  const { currencies, ...otherCur } = data?.currencies;
  const mainCurrency = Object.values(data?.currencies)[0].name;

  const html = `
  <article class="country ${className}">
          <img class="country__img" src="${data.flags.png}"/>
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} people</p>

            <p class="country__row"><span>🗣️</span>${mainLanguage}</p>
            <p class="country__row"><span>💰</span>${mainCurrency}</p>
          </div>
    </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

// const getCountryAndNeighbour = function (country) {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//   console.log(request.responseText);

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // Render country (1)
//     renderCountry(data);

//     // Get neighbor country (2)

//     const [neighbour] = data.borders;

//     // Guard Clause
//     if (!neighbour) return;

//     // AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const [data2] = JSON.parse(this.responseText);
//       //   Render country (2)
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };
// getCountryAndNeighbour('portugal');
// getCountryAndNeighbour('usa');
// getCountryAndNeighbour('germany');
// getCountryAndNeighbour('kenya');

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();
// console.log(request.responseText);

/*
const request = fetch(`https://restcountries.com/v3.1/name/portugal`);
// console.log(request);

const getJSON = function (url, errMes = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errMes} (${response.status})`);
    return response.json();
  });
};

const getCountryData = function (country) {
  // Get country one
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0], 'Home');
      const neighbour = data[0].borders[0];

      if (!neighbour) throw new Error('No neighbor found');
      // Country 2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(data => {
      renderCountry(data?.at(0), 'neighbour');
    })
    .catch(err => {
      console.log(`${err} 🔥🔥🔥`);
      renderError(`Something went wrong ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('germany');
});
*/

// Coding challenge

// const whereAmI = function (lat, lng) {
//   // fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//   fetch(
//     `https://geocode.xyz/${lat},${lng}?geoit=json&auth=825691167061114611946x42418`
//   )
//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with Geocoding ${res.status}`);
//       return res.json();
//     })

//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       fetch(`https://restcountries.com/v3.1/name/${data.country}`)
//         .then(res => {
//           console.log(res);
//           if (!res.ok) throw new Error(`Country not found (${res.status})`);
//           return res.json();
//         })
//         .then(data => renderCountry(data[0]));
//     })

//     .catch(err => console.log(`${err.message}`));
// };

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

// function getCountryName() {
//   fetch('https://restcountries.com/v3.1/name/tanzania')
//     .then(res => res.json())
//     .then(data => console.log(data));
// }
// getCountryName();

// console.log('Test start');
// setTimeout(() => console.log('0 second timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 10; i++) {}
//   console.log(res);
// });
// console.log('Test end');
/*
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening now🔮');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You won 💰');
    } else {
      reject(new Error('You lost your money 💩'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => console.log('I waited for 1 second'));

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).catch(x => console.error(x));
*/
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => {
    //     resolve(position);
    //   },
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// getPosition().then(position => console.log(position));
const whereAmI = function (lat, lng) {
  getPosition()
    .then(position => {
      const { latitude: lat, longitude: lng } = position.coords;
      return fetch(
        `https://geocode.xyz/${lat},${lng}?geoit=json&auth=825691167061114611946x42418`
      );
    })
    .then(res => {
      if (!res.ok) throw new Error(`Problem with Geocoding ${res.status}`);
      return res.json();
    })

    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      fetch(`https://restcountries.com/v3.1/name/${data.country}`)
        .then(res => {
          console.log(res);
          if (!res.ok) throw new Error(`Country not found (${res.status})`);
          return res.json();
        })
        .then(data => renderCountry(data[0]));
    })

    .catch(err => console.log(`${err.message}`));
};
btn.addEventListener('click', whereAmI);

// Coding challenge 2
