// Print the total population of countries using reduce function

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all");
request.send();
request.onload = function() {
    var result = JSON.parse(request.response);
    console.log(result);
    var totalPopulation = result.reduce((acc, country) => {
        if (country.population) {
          return acc + country.population;
        } else {
          return acc;
        }
      }, 0);
    
      console.log("Total population of all countries:", totalPopulation);
    }