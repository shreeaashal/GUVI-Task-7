//Get all the countries with a population of less than 2 lakhs using Filter function
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all");
request.send();
request.onload = function() {
var result = JSON.parse(request.response);
console.log(result);
let total = result.length
var answer = result.filter((ele)=>ele.population<200000);
console.log(answer)
var final_ans= answer.map((ele)=>ele.region);
let a = final_ans.length
console.log(`The ${a} regions with less population amoung the given ${total} regions are as follows ${final_ans}`)
}