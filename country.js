document.addEventListener("DOMContentLoaded", function(){

    var searchBtn = document.getElementById("search-button");
    var countryInp = document.getElementById("country-inp");
    var result = document.getElementById("result");

    // Add aclick event to search button
    searchBtn.addEventListener("click",() =>{
        let countryName = countryInp.value;


        let url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
        
        //fetch function will fetch the data from the api

        fetch(url).then((response) => response.json())
        .then((data) =>{
            console.log(data);

            result.innerHTML = `
            <img src="${data[0].flags.svg}" class="flag-img" />

            <h2>${data[0].name.common}</h2>

            <div class="wrapper">
            <h4>Capital: </h4>
            <span>${data[0].capital}</span>
            </div>

            <div class="wrapper">
            <h4>Continent: </h4>
            <span>${data[0].continents}</span>
            </div>

            <div class="wrapper">
            <h4>Population: </h4>
            <span>${data[0].population}</span>
            </div>
            `
        })
        
    })
})