//Get all the countries from Asia continent /region using Filter function
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all");
request.send();
request.onload = function() {
var result = JSON.parse(request.response);
console.log(result);
var answer = result.filter((ele)=>ele.region ==="Asia");
console.log(answer) 
}