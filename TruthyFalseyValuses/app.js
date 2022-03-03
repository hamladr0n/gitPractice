// const userInput = prompt("Enter something");

// if (userInput) {
//     console.log("Truthy!");
// } else {
//     console.log("Falsy");
// }

// if (0) {
//     console.log("Truthy")
// } else {
//     console.log("Falsy");
// }

// if (undefined) {
//     console.log("Truthy")
// } else {
//     console.log("Falsy");
// }

// if (userInput) {
//     console.log("Truthy")
// } else {
//     console.log("Falsy");
// }


// ============LOGICAL AND  using && - both statements must true or both false

// const password = prompt("enter your password: ");
// if (password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log("VALID PASSWORD");
// } else {
//     console.log("INCORRECT FORMAT FOR PASSWORD")
// }

// ==========LOGICAL OR using  || 

// true || true
// >true
// true || false
// >true
// false || false
// >false

// const age = prompt("What is your age?");
// console.log(age)
// if (age >= 0 && age < 5 || age >= 65) {
//     console.log("FREE");
// } else if (age >= 5 && age < 10) {
//     console.log("$10");
// } else if (age >=10 && age < 65) {
//     console.log("$20");
// } else{
//     console.log("INVALID AGE")
// }


// =======   LOGICAL NOT using 
// !null         // true 
// ! ( 0 === 0)  // false 
// !(3 <= 4)     // false


// let firstName = prompt("enter your first name");
// if (!firstName){
//     firstName = prompt("try again!!");
// }

// console.log("before")
// const age = 45;

// if (!(age >= 0 && age < 5 || age >= 65)) {
//     console.log("YOU ARE NOT A BABY OR A SENIOR");
// }


// SWTICH STATEMENT =================================================

const day = 7;
switch(day){
    case 1:
        console.log("HELLO!")
        break;
    case 2:
        console.log("TUESDAY")
        break;
    case 3:
        console.log("WEDNESDAY")
        break;
    case 4:
        console.log("THURSDAY")
        break;
    case 5:
        console.log("FRIDAY")
        break;
    case 6:
    case 7:
            console.log("WEEKEND")
            break;
    default:
        console.log("I DONT KNOW THAT")
}



// if(day === 1){
//     console.log("MONDAY")
// }
// else if (day === 2){
//     console.log("TUESDAY")
// }
// else if (day === 3){
//     console.log("WEDNESDAY")
// }
// else if (day === 4){
//     console.log("THURSDAY")
// }
// else if (day === 5){
//     console.log("FRIDAY")
// }
// else if (day === 6){
//     console.log("SATURDAY")
// }else {
//     console.log("I DONT KNOW THAT")
// }
