/*-----------------------------* Lecture Notes (Intro Duction To Java Script) *-------------------------------------------------------------------
 1.How to comment line ctrl+k / ctrl+k+c
 2.Java script start from start so , any variable when first assigned and the re assigned taked the net value.
 
 DOM  -> Doument Object Model -> How You use javascript to modify Website
Document -> we are interacting with is a HTML Document
Document Keyword -> Javascript Object is a -> DATATYPE OBJECT
Model -> Representation or Modulation 

Strings and Number are some of the datatypes in javascript.

// Google:
// innerText alternative mdn
 
-------------------------------------------------------------------------------------------------------------------------------------------------*/

//document.getElementById("count-el").innerText = 5

//Variables to sore data In
//let count = 0
//Log the count variable to console
//console.log(count) 

//----------* Ex.1
// 1. Create variable myAge , and set its value to your age
//let myAge = 25
//2. Log the myAge variable to console
// console.log(myAge)

//Using JS as calculator
//Add the count and give output as 10. So we can perform mathematical operations on the count.
// let count = 5+5 
// concole.log(count)

//Arithmetic operations
// let firstBatch =5
// let secondBatch =5

// let count = firstBatch + secondBatch
// console.log(count)

// ----------* Ex.2
// 1. Create two variables, myAge and humanDogRatio
// 2. Multiply the two together and store the result in myDogAge 
// 3. Log myDogAge to the console

// let myAge=25
// let humanDogRatio = 7
// let myDogAge= myAge* humanDogRatio
// console.log(myDogAge)

// ----------* Ex.3
// 1.Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// 2.Decrease it down to 25, and then finally increase it to 70
// 3.Console.log the value after each step

// let bonusPoints=50
// console.log(bonusPoints)

// bonusPoints=bonusPoints+50
// console.log(bonusPoints)

// bonusPoints=bonusPoints-75
// console.log(bonusPoints)

// bonusPoints=bonusPoints+45
// console.log(bonusPoints)

//initialize count as 0
//listen for clicks in increment
//increment the cpount variable when button is clicked
//change the count-el in the the HTML to reflec the new count

// function increment(){
	// console.log("The button was clicked")
// }


// ----------* Ex.4

// Create a function (you decide the name) that logs out the number 42 to the console
// Call/invoke the function

// function myLogger()
// {
	// console.log(42)
// }

// myLogger()


// ----------* Ex.5
// Create a function that logs out the sum of all the lap times

/*Global Variable can go from outside to inside of the function*/
// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function logLapTime(){
	/*totalTime local variable has limited scope can go from inside of the function to outside of the function*/
	// let totalTime = lap1 + lap2 + lap3
	// console.log(totalTime)
// }

// logLapTime()

// ----------* Ex.6
// let lapsCompleted = 0
// Create a function that increments the lapsCompleted variable with one
// Run it three times

// function totalLap(){
	// lapsCompleted=lapsCompleted+1
	//console.log(lapsCompleted)
// }

// totalLap()
// totalLap()
// totalLap()
// console.log(lapsCompleted)


// ----------* Ex.7
// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count
//document.getElementById("count-el").innerText = 5

// let countEl=document.getElementById("count-el") //pass as argument
// console.log(countEl)

// let count = 0

// function increment(){
	// console.log("clicked")
	// count = count + 1
	// countEl.innerText = count
	// console.log(count)
// }
// increment()

// ----------* Ex.8
// 1. Create a function, save(), which logs out the count when it's called

// function save(){
	// console.log(count)
	
// }
// save()


// // Using String Example
 //let userName = "per" // can also use 'per'
// console.log(userName)

// ----------* Ex.9
// Create a variable, message, that stores the string: "You have tree new notifications"

//let message ="You Have three new notifications"
// -->Create a variable, messageToUser, that contains the message we have logged
// messageToUser= message +","+userName + "!"
//console.log(messageToUser)

// ----------* Ex.10
// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "

// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console

//let name ="Neera"
//let greeting ="Hi, my name is "
// let myGreeting = greeting  +""+ name
// console.log(myGreeting)

// let points = 4 //Integer
// let bounusPoints = "10" // String

// let totalpoints = points + bounusPoints
// console.log(totalpoints) //Result -> 410

//Thus STRING always wins so 4 is converted to "4" and the result is concatenation of "4" and "10" i.e. 410

// console.log(4 + 5) ->9
// console.log("2" + "4") -> "24"
// console.log("5" + 1) -> "51"
// console.log(100 + "100") -> "100100"

// ----------* Ex.11
// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
	
	let countStr = count + " - "
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
	// saveEl.innerText += countStr  -> InnerText only human readable cannot read spaces.
	saveEl.textContent +=countStr
	console.log(saveEl)
    // NB: Make sure to not delete the existing content of the paragraph
    console.log(count)
	
    countEl.textContent=0
	count=0
}

/* Script tags
Variables
Number
string
console.log
funtions
The DOM
getElementById
innerText
textContent
*/