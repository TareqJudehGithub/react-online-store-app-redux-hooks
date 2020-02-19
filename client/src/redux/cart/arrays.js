// find and findIndex
//find returns only the first element matching the find condition creteria,
//while find index returns the index number of that element.
const myArray = [1, 2, 3, 4, 5];
const findArray = myArray.find( num => num > 2);
console.log(findArray);

//reduce

const reduceArray = myArray.reduce((acc, num)=>
     
          acc + num, 0);


console.log(reduceArray);

//Caching (Memoization)
//memoization is a way to remember a solution to a solved problem,
//so we don't have to write code to recalculate it again.

function addto80(n) {
     console.log("long time")
     return n +80;
}

let cache = {};
function MemoizeAddTo80(n) {
     if (n in cache) {
          return cache[n];
     }
     else{
          console.log("long time");
          cache[n] = n + 80;
     }
     return cache[n];
}
console.log("1: "+ MemoizeAddTo80(5));
console.log("2: "+ MemoizeAddTo80(5));

let Caching = {}
function memoizations(value) {
     if (value in Caching){
          return Caching[value];
     }
     else {
          console.log("needs to be calculated!");
          Caching[value] = value + 100;
     }
     return Caching[value];
}
console.log("======================");
console.log(" ");
console.log(" ");
console.log(" ");
console.log("Caching: "+ memoizations(10));
console.log("Caching: "+ memoizations(10));