// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");
// Takes two numbers and adds them
function addition(a, b) {
    return a + b;
}
console.log(addition(4, 5));
// Functions can call other functions
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
}