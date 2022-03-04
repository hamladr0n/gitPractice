const fitBitData = {
    totalSteps  : 308727,
    totalMiles   : 211.7,
    avgValoriBurn  : 5755,
    workoutsThisWeek  : '5 of 7',
    avgGoodSleep  : '2.13'
};

// objects let you pair data pairs like usernames, upvotes, and text

typeof []

const fitBitData = {
    totalSteps  : 308727,
    totalMiles   : 211.7,
    avgValoriBurn  : 5755,
    workoutsThisWeek  : '5 of 7',
    avgGoodSleep  : '2.13'
};
undefined
fitBitData
{totalSteps: 308727, totalMiles: 211.7, avgValoriBurn: 5755, workoutsThisWeek: '5 of 7', avgGoodSleep: '2.13'}avgGoodSleep: "2.13"avgValoriBurn: 5755totalMiles: 211.7totalSteps: 308727workoutsThisWeek: "5 of 7"[[Prototype]]: Object
typeof []
'object'
const person = {firstName: 'Mick', lastName: 'Jagger' }
undefined
person
{firstName: 'Mick', lastName: 'Jagger'}


kitchenSink
{favNum: 9232423, isFunny: true, colors: 'orange'}colors: "orange"favNum: 9232423isFunny: true[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
const kitchenSink = {
    favNum: 9232423,
    isFunny:true,
    colors: ["red", "orange"]}
undefined
kitchenSink
{favNum: 9232423, isFunny: true, colors: Array(2)}


// ============= Accessing Data out of Opbjects


// const product = {
//     name: 'Gummy Bears',
//     inStock: true,
//     price: 1.99,
//     flavors:['grape', 'apple', 'cherry']
// }
// undefined
// product
// {name: 'Gummy Bears', inStock: true, price: 1.99, flavors: Array(3)}
// kitchenSink
// {favNum: 9232423, isFunny: true, colors: Array(2)}
// kitchenSink["colors"]
// (2) ['red', 'orange']
// person["lastName"]
// 'Jagger'
// person.firstName
// 'Mick'
// person.lastName
// 'Jagger'
// "sdass".lenn
// undefined
// "sdass".length
// 5

// let fullAddress1 = restaurant['address' + 'city' + 'state' + 'zipcode']

// let fullAddress = {restaurant.address, restaurant.state, restaurant.zipcode}


// let fullAddress1 = restaurant['address'] + ", " + restaurant['city'] + ", " + restaurant['state'] + ", " + restaurant['zipcode']



// //CORECT ANSER TO QUIZ
// let fullAddress = restaurant['address'] + ", " + restaurant['city'] + ", " + restaurant['state'] + restaurant['zipcode']




//        MODIFYING OBJECTS

const midterms = {danielle: 96, thomas: 78}

undefined
midterms.thomas = 20;
20
midterms.thomas
20
midterms.thomas = 'A"
VM6059:1 Uncaught SyntaxError: Invalid or unexpected token
midterms.thomas = 'A'
'A'
midterms.ezra = 'B+'
'B+'
midterms['antonio'] = 'A-'
'A-'
midterms
{danielle: 96, thomas: 'A', ezra: 'B+', antonio: 'A-'}


//            ARRAYS + objects

const comments = [ {
    username: 'Tammy', text :  'lolol', votes: 9},
    {username: 'FishBoi', text :  'glub glub', votes: 644339}
]