//  Linking a javascript file
/* let js = 'amazing'
if ( js == 'amazing ') {alert ('Js is amazing ')}
console.log(2 + 5 * 3 -2)
*/


// Value and variable 

/*console.log('Jonas')
console.log(2)


let javascript = 'fun'

console.log(typeof javascript)

console.log(typeof(NaN))

let a = false;

console.log(a)

console.log(!a)

let year; 
console.log(year)
year = Date.now()
console.log(year) */


//  Let , const and var
/*
let name = 'Ayaz'
name = 'Rehan'

const firstName = 'Ayaz'
firstName = 'Rehan'// It shows error bcz the assignment to the constant operator

var lastName = 'Ahmed'
var lastName = 'Ayaz'
*/

/////////////////////////////////////////////////////////////
// Basic operator & Math operator

/*let now = 2024
const myAge = now - 2002
console.log(myAge, myAge ** 2, myAge * 2, myAge ^ 2)

now += 5;
now -=5;
now *= 5;
now /= 5;
now ++
now --
// now **
now +=5;

console.log(now)
age = now -2002;

if ( age >= 18 ) console.log("you're able to get the driving license")
 else console.log('it seem like you\'re younger so wait a little bit until you grow up') */


/*Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall. */


/*let weightMark  = 78;
let heightMark  = 1.69;

let weightJohn = 92;j
let heightJohn = 1.95;

console.log('Mark BMI ' , weightMark/(heightMark * heightMark))

console.log('John BMI = \n' , weightJohn/(heightJohn** 2))
console.log('John BMI in 2nd formula = \n', weightJohn/(heightJohn * heightJohn))
*/

/*
//  Truth and falsy values 
console.log('Boolean value of true ');
console.log(Boolean(true))
console.log('values of {} ');
console.log(Boolean({}))
console.log('Boolean value of \'Jonas\' ')
console.log(Boolean('Jonas'))
console.log('Boolean value of null : ')
console.log(Boolean(null))
console.log('Boolean value of NaN ')
console.log(Boolean(NaN))
console.log('Boolean value of undefined ')
console.log(Boolean(undefined))


// money and height 
const money = 100;
if ( money ) {
    console.log('You\'ll have money don\'t spend until you needo')
} else console.log('you need to find job as soon as possible ')


const height = 0
if ( height) {
    console.log('you\'ve good height else ')
} else console.log('you don\'t have height ')


*/



// const { resolve } = require('path')
/*const readline = require('readline')
const rl = readline.createInterface({input: process.stdin, output: process.stdout})const age = 17;
const prompt = (query) => new Promise((resolve ) => rl.question(query , resolve));

(async() => {
    try {
        const name = await prompt("what's your name ")
        // Can use name for 2nd question if needed 
        const lastName = await prompt(`Your firstName is ${name}, What's your last name `)
        // Can prompt lot of line 
        console.log(name , lastName)
        rl.close()
    } catch (e) {
        console.error('I don\'t know what happened but it\'s not working ', e)
    }
})()


//  when done reading close the path 
rl.on('close', () => process.exit(0))
*/

/*

const age = 17;

if (age > 18 ) {
    console.log("Your age is less than 18 so you're not able to get the driving license wait until you become 18 year old ")
} else {
    console.log("you're able to get the driving licence f")
}*/


/*Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"*/

/*
const JohnWeight = 89
const JohnHeight = 5

const MarkWeight = 99
const MarkHeight = 6


let JohnBmi = JohnWeight/(JohnHeight**2)

let MarkBmi = MarkWeight/(MarkHeight*MarkHeight)


if ( JohnBmi > MarkBmi ) console.log('John BMI is greater than Mark ')
else if ( MarkBmi > JohnBmi) console.log('Mark Bmi is greate than John ')
else console.log('I think both Mark and John have equal BMI ')
*/


///// 
// Type correction 
/*console.log(typeof String(343))

console.log('5' + '11' - 5)

console.log('23'/'2')

*/



/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/
/*
let dolphinAverageScore = (97+11+ 101)/3
let KoalasAverageScore = (109+ 91+ 123 )/3
console.log('Dolphin Average Score:  ' + dolphinAverageScore)
console.log('Koaslas Average Score: ' +KoalasAverageScore)

if ( dolphinAverageScore > KoalasAverageScore ){
    console.log('Dolphin Average score is greater than Koalas ')
    if (dolphinAverageScore >= 100 || KoalasAverageScore >=100 ) {
        console.log("Congratulation you win the trophy ")
    } else {
        console.log("No one win the trophy bcz the average score isn't greater than 100")
    }
}else {
    console.log('Koalas average score is greater than dolphin ')
    if (KoalasAverageScore >= 100) {
    console.log('Congratulation Kolas you win the trophy ')
    } else {
        console.log('Koaslas you win but the average score isn\'t greater than 100 so you don\'t win the trophy')
    }
}
*/

/*
const day = 'friday';

switch (day){
    case 'monday':
    console.log('today is Monday')
    break;
    case 'tuesday':
        console.log('Today is tuesday')
        break;
    case 'friday':
        console.log('Today is friday')
        break;
    default:
        console.log('Not a valid day')
        break;
}

switch (day) {
    case 'friday':
        console.log('friday')
        break;

    default:
        console.log('Not a valid day ')
        break;
}
*/
/*
const age = 77

age >=18 ? console.log('I like to drink wine') : console.log('I like to drink water')

console.log(`Serve guest with ${age >= 18? 'wine' : 'water'}`)
*/

/*
1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'
*/

/*
let bill = 4
let tip =  bill >= 15   ? bill * 15/100 : bill*bill 

let total = bill + tip

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}.`)
*/
