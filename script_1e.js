//Print the country that uses US dollars as currency.
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all");
request.send();
request.onload = function() {
var result = JSON.parse(request.response);
console.log(result);
var countriesWithUSD = [];

result.forEach(country => {
  if (country.currencies) { // Check if 'currencies' property exists
    country.currencies.forEach(currency => {
      if (currency.code === "USD") {
        countriesWithUSD.push(country.name);
      }
    });
  }
});

if (countriesWithUSD.length > 0) {
  console.log("Countries that use US dollars as currency:");
  countriesWithUSD.forEach(country => console.log(country));
} else {
  console.log("No countries use US dollars as currency.");
}
}
