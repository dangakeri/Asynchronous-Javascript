'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function (data, className = '') {
  const { langauage, ...others } = data.languages;
  const mainLanguage = Object.values(others)[0];
  const { currencies, ...otherCur } = data.currencies;
  const mainCurrency = Object.values(data.currencies)[0].name;
  console.log(mainCurrency.name);

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

const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  console.log(request.responseText);

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country (1)
    renderCountry(data);

    // Get neighbor country (2)

    const [neighbour] = data.borders;

    // Guard Clause
    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      //   Render country (2)
      renderCountry(data2, 'neighbour');
    });
  });
};
// getCountryAndNeighbour('portugal');
// getCountryAndNeighbour('usa');
// getCountryAndNeighbour('germany');
getCountryAndNeighbour('kenya');
