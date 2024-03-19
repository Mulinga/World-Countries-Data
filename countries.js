const countries = [
    { name: "Afghanistan", capital: "Kabul", population: 38928346, gdp: "$64.08 Billion" },
    { name: "Albania", capital: "Tirana", population: 2877797, gdp: "$33.90 Billion"},
    { name: "Algeria", capital: "Algiers", population: 43851044, gdp: "$609 Billion" },
    { name: "Andorra", capital: "Andorra La Vella", population: 85600, gdp: "$3.3 Billion" },
    { name: "Angola", capital: "Luanda", population: 25789024, gdp: "$189 Billion" },
    { name: "Antigua and Barbuda", capital: "St. Johns", population: 93581, gdp: "$2.17 Billion" },
    { name: "Argentina", capital: "Buenos Aires", population: 43886748, gdp: "$879 Billion" },
    { name: "Armenia", capital: "Yerevan", population: 3051250, gdp: "$26.30 Billion" },
    { name: "Australia", capital: "Canberra", population: 22992654, gdp: "$1.19 Trillion" },
    { name: "Austria", capital: "Vienna", population: 8711770, gdp: "$417 Billion" },
    { name: "Azerbaijan", capital: "Baku", population: 9872765, gdp: "$166 Billion" },
    { name: "Afghanistan", capital: "Kabul", population: 38928346, gdp: "64.08 Billion" },
    { name: "Albania", capital: "Tirana", population: 2877797, gdp: "64.08 Billion" },
    { name: "Algeria", capital: "Algiers", population: 43851044, gdp: "64.08 Billion" },
    { name: "Zambia", capital: "Lusaka", population: 18383955, gdp: "64.08 Billion" },
    { name: "Zimbabwe", capital: "Harare", population: 14862924, gdp: "64.08 Billion" },
    { name: "Afghanistan", capital: "Kabul", population: 38928346, gdp: "64.08 Billion" },
    { name: "Albania", capital: "Tirana", population: 2877797, gdp: "64.08 Billion" },
    { name: "Algeria", capital: "Algiers", population: 43851044, gdp: "64.08 Billion" },
    { name: "Afghanistan", capital: "Kabul", population: 38928346, gdp: "64.08 Billion" },
    { name: "Albania", capital: "Tirana", population: 2877797, gdp: "64.08 Billion" }
];

const listCountries = document.getElementById('list-countries');
const countriesContainer = document.getElementById('countries-container');

listCountries.addEventListener('input', function(event) {
    const searchTerm = event.target.value.trim().toLowerCase();
    const filteredCountries = countries.filter(country => country.name.toLowerCase().startsWith(searchTerm));
    renderCountries(filteredCountries);
});

function renderCountries(countries) {
    countriesContainer.innerHTML = '';
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
            <img src="images/${country.name.toLowerCase()}.png" alt="${country.name} Flag">
            <h3>${country.name}</h3>
            <p><strong>Capital:</strong> ${country.capital}</p>
            <p><strong>Population:</strong> ${country.population}</p>
            <p><strong>GDP:</strong> ${country.gdp}</p>
        `;
        countriesContainer.appendChild(countryDiv);
    });
}