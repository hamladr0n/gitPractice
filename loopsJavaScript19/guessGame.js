let maximum = parseInt(prompt("Enter the maximum number!"));
while(!maximum) {
    maximum =parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;


let guess = parseInt(prompt("Enter your first guess!!"));
let attempts = 1;


while (parseInt(guess) !== targetNum){
    if (guess === 'q') break;
    attempts++;
    if(guess > targetNum) {
        guess = prompt("Too High! Enter a new guess:");
    } else {
        guess = prompt("Too Low! Enter a new guess:")
    }
}
console.log(`You got it! it was: ${targetNum}! It took you ${attempts} attempts`)