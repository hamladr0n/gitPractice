// const dayOfWeek = prompt("choose a day of the week").toLowerCase();

// if (dayOfWeek === 'monday') {
//     console.log("UGHHH I HATE MONDAYS!")
// } else if (dayOfWeek === 'tuesday'){
//     console.log("YAY I LOVE Tuesday!")
// } else if (dayOfWeek === 'wednesday'){
//     console.log("YAY I LOVE Wednesday!")
// } else if (dayOfWeek === 'thursday'){
//     console.log("YAY I LOVE Thursday!")
// } else if (dayOfWeek === 'friday'){
//     console.log("YAY I LOVE Friday!")
// } else if (dayOfWeek === 'saturday'){
//     console.log("YAY I LOVE SATURDAYS!")
// } else if (dayOfWeek === 'sunday'){
//     console.log("YAY I LOVE SundayS!")
// } else {
//     console.log("meh")
// }

// 0-5 - FREE -5-10 
// CHILD $10
// 10 - 65 ADULT $20
// 65+ SENIOR $10

const age = 8;

if (age < 5){
    console.log("you are a baby. you get in free!")
} else if (age< 10){
    console.log("you are a child. you pay $10")
} else if (age < 65){
    console.log("you are an adult. you pay $20")
}


let random = Math.random();
if (random < 0.5) {
    console.log("your number is less than 0.5")
    console.log(random);
} else {
    console.log("your number is greater than 0.5");
}

console.log(random);

// Exercise Criteria for Nesting Demo
//Pass must be 6+ characters
//pass cannot include a space 

const password = prompt("please enter a new password");

if (password.length >= 6 ) {
    // console.log("Long enough password")       - dont need bc if it is long enough then moves to next funtion of checking for spaces
    if (password.indexOf(' ') === -1) {
        console.log("Good job! no space!")
    } else {
        console.log("Password cannot contain spaces!");
    }
} else {
    console.log("password too short! must be 6+ character");
}