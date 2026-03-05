/*
// Austronaut 2

function checkLifeSpan (hoursUsed);
const maxLifeSpan = [1000];
if hoursUsed < 1000
print(" suit in working condition ");
else if hoursUsed >= 800
print(" needs replacement soon ")
else if hoursUsed > 1000
print(" suit no longer safe to use ")
if (typeof hoursUsed != number) { return "please enter valid number" } 









/*
// Austronaut 1

function pickRandomActivity
const dailyActivities = [
	"Clean Solar Panel",
	"Video Chat with Houston",
	"Hydrate Space Food",
	"Take Earth Picture",
	"Learn Russian"

    let randomIndex = Math.random() * dailyActivities.length;
let randomActivity = Math.floor(randomIndex);

print("Todays activity is: " + pickRandomActivity());

// Output: "Todays activity is: Clean Solar Panel

] // you can add more if you'd like










/* let itemsToToss = ["Moldy Towel", 
    "Dead Kitchen Lamp", 
    "Busted Turntable", 
    "Withered Plant", 
    "Crooked Bookcase"];
function isItemToBeTossed(item)
{
    for(let i = 0; i < itemsToToss.length; i++)
    {
        let match = itemsToToss[i] === item;
        return match;
    }

}

print(isItemToBeTossed("Moldy Towel"));


/* function getRange(midiNote)
{
    if (midiNote >= 0 && midiNote < 32)
    {
        return "bass";
    } else if (midiNote >= 32 && midiNote < 64)
    {
        return "tenor";
    } else if (midiNote >= 64 && midiNote < 96){
        return "alto";

    } else if (midiNote >= 96 && midiNote < 127) {
        return "soprano";

    } else {
        return "weirdo";
    }
}

let input = prompt("Whats your range?");
let range = getRange(input);
print("The musician is: " + range);













/*
function getRange(midiNote)
{
   if (midiNote >= 0 && midiNote < 32)
   {
    print("you're a bass");
   } else if (midiNote >= 32 && midiNote < 64)
   {
    print("you're a tenor");
   } else if (midiNote >= 64 && midiNOte < 96)
   {
    print ("you're an alto");
   } else if (midiNote >= 64 && midiNOte < 96) {
    print ("you're a diva!");
   } else{
    print ("you're weired!")
   }
}
let input = getRange(prompt("whats your range?"))
let range = getRange(input);
    print("The musician is: " + range)


/*
let midiNote = prompt("whats ya note?")
let isValidNote = midiNote >= 0 && midiNote <= 127;

if(isValidNote)
{
    print("weee music!");
} else {
    print("drop out of berklee")
}
*/





/* function cakeDivision(numOfAttendee){
    let cakeInRadian = 6.28;
    if(numOfAttendee === 5)
    
    return cakeInRadian/numOfAttendee;
}

let mySlice = cakeDivision(4);
print(mySlice);




/*
function square (numberToSquare){
    let squaredNumber = numberToSquare * numberToSquare
    return squaredNumber;
}

let biggerNumber = square(4);
let evenBiggerNumber = square(biggerNumber)
let evenEvenBiggerNumber = square(evenBiggerNumber)
print(biggerNumber);
*/

/* function formatName(greeting){
    let nameToPrint = "Takuma"
    let formatted = greeting + nameToPrint;
    return;
}

let thingtoPrint = formatName("hola ")
 
/* function greetName(nameToPrint, activity)
    (nameToPrint, activity, isAwesome){
        print(nameToPrint + " did " + activity + "today.");
if(isAwesome) {
    print("Thats so fuckin awesome")
print("Nave did " + crime + " today.");
if (isConvicted) {
    print("enjoy jail")
} else {
    print("Justice will catch up to you someday");

}
}
   }
navesCrime("first degree manslaughter", false)


/* function greetName(greeting, nameToPrint){
    print(greeting + nameToPrint);
}

greetName ("Hola ", "Joyful") */

/* function greetName(){
    let greeting = "hewo";
    let nameToPrint = "David";
    print("greeting + nameToPrint")
}
greetName(); */