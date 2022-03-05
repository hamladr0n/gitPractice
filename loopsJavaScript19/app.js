// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)

// FORMAT for loops
// for (
//     [initialExpression];
//     [conditionalExpression];
//     [incrementExpression]
// )



// for(let i = 1; i <=10; i++) {
//     console.log(i);
// }


// for(let num = 1; num <=10; num+= 1) {
//     console.log("im in the loop body!")
//     console.log(num);
// }

// ======       Loop Practic Exercise

// for(let i = 1; i <= 6; i ++) {
//     console.log("Da ba dee da ba daa");
// }

// Make a loop that prints even numbers from one to 20 times

// for(let i  =0 ; i <= 20; i += 2 ){
//     console.log(i);
// }


// //count down from 100

// for(let i = 100; i >=0; i -= 10){
//     console.log(i);
// }



// for (let i  = 10; i <= 1000; i *= 10) {
//     console.log(i);
// }


// coding Exersice 32: more loops for practice

// Write a loop that prints:
// 25
// 20
// 15
// 10
// 5
// 0

// for(let i = 25; i>=0; i-=5){
//     console.log(i);
// }

// LOOPS OVER ARRAYS Section 194 -------------------------------


// const animals = ['lions', 'tigers','bears '];

// for( let i = 0; i < animals.length; i++ ) {
//     console.log(i, animals[i]);
// }

// for (let i = 0; i < animals.length; i ++){
//     console.log(i, animals[i]);
// }


// for (let i = animals.length -1; i>=0; i--){
//     console.log(i, animals[i]);
// }

// //  -----Iterating Arrays Exercises ----- print out all people in uppercase

// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// // WRITE YOUR LOOP BELOW THIS LINE:
// for(let i = 0; i < people.length ; i++){
//     console.log(people[i].toUpperCase());
// }





//--------------- NESTED loops

// for(let i = 1; i<=10; i++){
//     console.log(`i is: ${i}`);  //remeber to use the ` instead of ' to make it literal (can read the speciaasl character in the string)
//     for(let j = 1; j< 4; j++){
//         console.log(`   j is: ${j}`);
//     }
// }

// const seatingChart = [
//     ['Kristen', 'Erik', 'Namita'],
//     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin '],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]

// for(let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     console.log(`ROW #${i + 1}`);
//     for(let j= 0; j < row.length; j++){
//         console.log(row[j])
//     }
// }


// -----Another Loop: The While Loop

// let count = 0;
// while(count< 10){
//     count++;                // REMEMBER to put count inside of while loop function isEven(num) 
//     console.log(count);
// }


// const SECRET = "BabyHippo";

// let guess = prompt("enter the secret code...");
// while (guess !== SECRET){
//     guess = prompt("enter the secret code...again")
// }
// console.log("Congrats you got the secret!!!")


// --------- 197. The Break Keyword 

// let input = prompt("hey, say something!")
// while(true){
//     input = prompt(input);
//     if(input === "stop copying me") {
//         break;
//     }
// }
// console.log("OKAY you win!")



// let input = prompt("hey, say something!")
// while(true){
//     input = prompt(input);
//     if(input.toLowerCase() === "stop copying me") break; // because is short can add break to line  
// }
// console.log("OKAY you win!")


for(let i = 0; i< 1000; i ++){
    console.log(i);
    if (i === 100) break;
}


