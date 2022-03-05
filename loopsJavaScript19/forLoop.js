// const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer']

// for (let i = 0; i < subreddits.length; i++) {
//     console.log(`Visit reddit.com/r/${subreddits[i]}`)
// }

// for (let sub of subreddits) {
//     console.log(`Visit reddit.com/r/${sub}`)
// }



// const seatingChart = [
//     ['Kristen', 'Erik', 'Namita'],
//     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin '],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]

// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     console.log(`ROW #${i + 1}`);
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j])
//     }
// }

// for (let row of seatingChart) {
//     for (let student of row) {
//         console.log(student);
//     }
// }


// ---------for of litersals

// for (let char of "hello world"){
//     console.log(char);
// }

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //DON'T CHANGE THIS LINE PLEASE!

// WRITE YOUR LOOP BELOW THIS LINE:

// for (let squ of numbers){
//     console.log(`ANSWER: ${squ * numbers[squ]}`)
//     console.log(`squ= ${squ}`)
//     console.log(`squ= ${squ} * ${squ} = `)
//     console.log(`NUMBER: ${numbers[squ]}`)
// }

// for (let i of numbers){
//     console.log(`i = ${i}`)
//     console.log(`Numbers = ${numbers[i-1]}`) 
//     for( let j = numbers[i] * numbers[i])
//     console.log(`J = ${j}`) 
// }

// for (squ = 0; squ<=numbers.length -1; squ++ ){
//     console.log((numbers[squ] * numbers[squ]))
// }

for (let num of numbers) {
    num--
    if (num !== numbers.length){
        console.log(numbers[num] * numbers[num]);
    }
}

//Final answer ^^^^
