$(document).ready(function(){
  $('#nav-icon1').click(function(){
    $(this).toggleClass('open');
  });
});




















































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
 
 for(let a = 1; a <= 100; a++){
   let output = "";
   if(a % 3 == 0) output += "fizz"
   if(a % 5 == 0) output += "buzz"
      console.log(output || a);
   }
  

 
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