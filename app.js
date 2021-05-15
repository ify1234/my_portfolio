// $(document).ready(function(){
//   $('#nav-icon1').click(function(){
//     $(this).toggleClass('open');
//   });
// });


// for(let a = 1; a <= 100; a++){
//    let output = "";
//    if(a % 3 == 0) output += "fizz"
//    if(a % 5 == 0) output += "buzz"
//       console.log(output || a);
//    }
  











// This task is to give you a feel of basic JavaScript algorithms.

// 1. Write a function named "convertFahrToCelsius" that takes a single parameter and converts it to celsius.

// Note:

// - Round up your answers to 4 decimal places (hint: use the toFixed method)
// - 1F = (C - 32)/ 1.8 (e.g 0deg C = -17.7778 deg F)
// - if the parameter passed is not a number and cannot be converted to a valid number, return a string with the format below:
//     `${parameter} is not a valid number but a/an ${parameter's type}.`
// You can use the following cases as guides:

// - convertFahrToCelsius(0) should return `-17.7778`
// - convertFahrToCelsius("0") should return `-17.7778`
// - convertFahrToCelsius([1,2,3]) should return `[1,2,3] is not a valid number but a/an array.`
// - convertFahrToCelsius({temp: 0}) should return `{temp: 0} is not a valid number but a/an object.`
 

// 2. Write a function named "checkYuGiOh" that takes a number, n, as an argument, creates an array of numbers from 1 to n and replaces factors of 2, 3, and 5 with "yu", "gi" and "oh", logs the resulting array to the console then returns the resulting array.

// Note:

// - for strings that have multiple factors, use hyphens as separators
// e.g 10 === "yu-oh", 30 === "yu-gi-oh"
// - perform checks on your input and return `invalid parameter: ${parameter}` if an invalid parameter - i.e. a string that can't be converted to a number or another data type - is passed. 
// Use the following cases as guides:

// - checkYuGiOh(10) should return [1, "yu", "gi", "yu", "oh", "yu-gi", 7, "yu", "gi", "yu-oh"]
// - checkYuGiOh("5") should return [1, "yu", "gi", "yu", "oh"]
// - checkYuGiOh("fizzbuzz is meh") should return `invalid parameter: "fizzbuzz is meh"`
 for(let checkYuGiOh = 1; checkYuGiOh <= 50; checkYuGiOh++){
   let output = "";
   if(checkYuGiOh % 2 == 0) output += "yu"
   if (checkYuGiOh % 3 == 0) output += "gi"
   if (checkYuGiOh % 5 == 0) output += "oh"
   if (checkYuGiOh % 2 == 0 || checkYuGiOh % 3 == 0 || checkYuGiOh % 5 == 0) output += "yu-gi-oh"
    if(checkYuGiOh % 2 == 0 && checkYuGiOh % 3 == 0 ) output += "yu-gi"
      console.log(output || checkYuGiOh);
   }




































// let gradeScore = 91;
// if (gradeScore >= 80 ){
// console.log("excellent");
// if (gradeScore >= 90 ) {
//     console.log("you did great")
// }}
// else if (gradeScore >= 60) {
//     console.log("good")
// }
// else if (gradeScore >= 40) {
//     console.log("good")
// }
// else if (gradeScore >= 30) {
//     console.log("good")
// }
// else {
//     console.log("poor")
// }

// let sentence = ["word", "nkechi","apple",5];
// console.log(sentence[2])
// let letterHead = "Criteria";
//  let caseLevel  = letterHead.length
// console.log(caseLevel)
// console.log(sentence.push("melon"))
// console.log(sentence)
// console.log(sentence.unshift(("ada")))
// console.log(sentence)
// console.log(sentence.shift())
// console.log(sentence)
// let soulLevel = sentence.concat(letterHead)
// console.log(soulLevel)
// const lastLevel = soulLevel.pop();
// console.log(soulLevel)

/* "Excercise"
 --looping a triangle--
 write a loop that makes seven calls to the 
 console.log to output th following triangle:
 (while and do loops)
 #
 ##
 ###
 ####
 #####
 ######
 #######
 */
let numeroUno = 1
 while (numeroUno  <= 1000000){
  console.log(numeroUno);
   numeroUno  = numeroUno  * 10;
}
// for (let numAd = 1; numAd <=1000000; numAd + 10) {
//     console.log(numAd);
// }
// let yourName;
//  do{
//   yourName = prompt("who are you?");
//     } while (!yourName);
//        console.log(yourName);






// let levelHead = 7;
// let bee = 8;
// let cartel = levelHead >= bee;

// if(levelHead > bee){
//     console.log("hello world");
// }
// else if(cartel){ 
//     console.log("john")
// }
// else{
//     console.log("missed");
// }

// if (1+1 == 2) console.log("champion")

// let num = Number(prompt("pick a number"));

// if (num < 10){
//     alert("good");
// }else if (num < 100){
//     console.log("better");
// }else{
//     console.log("best");
// }



 /*write a program that uses console.log to print all the 
 numbers from 1 to 100 ,with two exceptions.
  For numbers divisible by 3, print "fizz"
 instead of the number, and for numbers divisible by 5 (and not 3),
 print"buzz" instead
 when you have that working, modify your program to print 
 "fizzbuzz" for numbers that are divisible by both 3 and 5
 ( and still "fizz" or "buzz" for numbers divisible by only one of those*/
 
//  for(let a = 1; a <= 100; a++){
//    let output = "";
//    if(a % 3 == 0) output += "fizz"
//    if(a % 5 == 0) output += "buzz"
//       console.log(output || a);
//    }
  

 
 /*write a program that creates a string that represents 
 an 8x8 grid , 
 using newline characters to seperate lines.
 at each position of the grid there is either a space or
  a "#" character. The characters should form a chessboard.
  when you have a program that generates this pattern,
   define a binding size of 8 and change the program 
so that it works for any size, 
  outputting a grid of the given width and height.*/
  let size = 8;

  let board = "";

  for (let y = 0; y <size; y++) {
     for (let x = 0; x<size; x++ ){
     if((x+y)% 2 == 0) {
        board += " ";
     } else {
        board += "#";
     }
   }
  board += "\n";
}
console.log(board);