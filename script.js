// Solving problems using array functions on the rest countries' data (https://restcountries.com/v3.1/all).
//             1.Get all the countries from the Asia continent /region using the Filter function
//             2.Get all the countries with a population of less than 2 lakhs using Filter function
//             3.Print the following details name, capital, flag using forEach function
//             4.Print the total population of countries using reduce function
//             5.Print the country which uses US Dollars as currency.


var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send()
request.onload = function(){
    var data = request.response
    var result = JSON.parse(data)
    
    
    // Problem 1: Get all the countries from the Asia continent/region using the Filter function
    const asianCountries = result.filter(country => country.region === 'Asia' || country.continents === 'Asia');
    const countries = asianCountries.filter((map) => console.log(map.name.common))
  

    // Problem 2: Get all the countries with a population of less than 2 lakhs using Filter function
    const lessThanTwoLakhs = result.filter(country => country.population < 200000);
    const TwoLakhs = lessThanTwoLakhs.filter((map) => console.log(map.name.common))
  

    // Problem 3: Print the following details name, capital, flag using forEach function
    result.forEach(country => console.log(`Name: ${country.name.common}, Capital: ${country.capital}, Flag: ${country.flags.svg}`));


    // // Problem 4: Print the total population of countries using reduce function
    const totalPopulation = result.reduce((acc, country) => acc + country.population, 0);
    console.log(`Total population: ${totalPopulation}`);


    // // Problem 5: Print the country which uses USD Dollars as currency.
    const countryUsingUSD = result.filter((country) => country.currencies = "USD");
    const USD = countryUsingUSD.filter((map) => console.log(map.name.common))
}

