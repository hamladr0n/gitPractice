
// Push  -add to end 
// Pop - remove from end 
// Shift - remove from start 
// Unshift - add to start 















// console.log("test for upload");
// 'LOL'.length
// 3
// let movieLine = ['tom','nancy']
// undefined
// movieLine[2]
// undefined
// movieLine.push('oliver')
// 3
// let cat = 'blue'
// undefined
// cat
// 'blue'
// cat.toUpperCase
// ƒ toUpperCase() { [native code] }
// cat
// 'blue'
// movieLine.push('eva')
// 4
// movieLine
// (4) ['tom', 'nancy', 'oliver', 'eva']
// movieLine.push('harry', 'corbin')
// 6
// movieLine
// (6) ['tom', 'nancy', 'oliver', 'eva', 'harry', 'corbin']
// movieLine.pop()
// 'corbin'
// movieLine
// (5) ['tom', 'nancy', 'oliver', 'eva', 'harry']
// let person = movieLine.pop
// undefined
// person
// ƒ pop() { [native code] }
// movieLine
// (5) ['tom', 'nancy', 'oliver', 'eva', 'harry']0: "tom"1: "nancy"2: "oliver"3: "eva"4: "harry"length: 5[[Prototype]]: Array(0)
// person
// ƒ pop() { [native code] }
// movieLine
// (5) ['tom', 'nancy', 'oliver', 'eva', 'harry']0: "tom"1: "nancy"2: "oliver"3: "eva"4: "harry"length: 5[[Prototype]]: Array(0)
// let person = movieLine.pop()
// undefined
// movieLine
// (4) ['tom', 'nancy', 'oliver', 'eva']
// person
// 'harry'
// movieLine
// (4) ['tom', 'nancy', 'oliver', 'eva']
// person
// 'harry'
// eva 
// VM2125:1 Uncaught ReferenceError: eva is not defined
//     at <anonymous>:1:1
// (anonymous) @ VM2125:1
// movieLine[4]
// undefined
// movieLine
// (4) ['tom', 'nancy', 'oliver', 'eva']
// movieLine[2]
// 'oliver'

// ====================================================================================================================

 let movieLine = ['tom', 'nancy', 'oliver', 'eva', 'harry', 'corbin']

let nextPatron = movieLine.shift()
undefined
nextPatron
'nancy'
movieLine.push('colt')
5
movieLine.shift
ƒ shift() { [native code] }
movieLine.shift()
'oliver'
movieLine
(4) ['eva', 'harry', 'corbin', 'colt']

movieLine.push('tom', 'nancy', 'oliver', 'eva', 'harry', 'corbin')
6
movieLine.unshift('VIP')
7
movieLine
(7) ['VIP', 'tom', 'nancy', 'oliver', 'eva', 'harry', 'corbin']
movieLine.shift()
'VIP'