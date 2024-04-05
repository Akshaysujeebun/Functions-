//exercise 1
function infoAboutMe() {
    const name = "Akshay"; 
    const age = 15; 
    const hobbies = ["driving "," hiking"]; 

    console.log("My name is " + name + ".");
    console.log("I am " + age + " years old.");
    console.log("My hobbies are : " + hobbies); }
    
infoAboutMe();

//exercise 1(2)

function infoAboutPerson(personName, personAge, personFavoriteColor) {
    console.log ("You name is " + personName + ", you are " + personAge + " years old, your favorite color is " + personFavoriteColor);
}

infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")


//Exercise 2
function calculateTip() {

    let bill = (prompt("How much is the bill?"));

    let tip;
    if (bill < 50) {
        tip = 0.2; 
    } else if (bill >= 50 && bill <= 200) {
        tip = 0.15; 
    } else {
        tip = 0.1; 
    }

    const Totaltip = bill * tip;
    const TotalBill = bill + Totaltip;

    console.log(Totaltip);
    console.log(TotalBill);
}

calculateTip();

//Excerise 3

function isDivisible(divisor) {
    let sum = 0; 

    for (let i = 0; i <= 500; i++) {
        if (i % divisor === 0) {
            console.log(i); 
            sum += i; 
        }
    }

    console.log(sum);
}

isDivisible(100);

//Exercise 4 - usage on internet

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

let shoppingList = ["banana", "orange", "apple"];

function myBill() {
    let totalPrice = 0; 

    for (const item of shoppingList) {
        
        if (item in stock && stock[item] > 0) {
            const itemPrice = prices[item]; 
            totalPrice += itemPrice; 
            stock[item]--; 
        } else {
            console.log(item + " is out of stock or not available."); 
        }
    }

    return totalPrice; 
}

console.log("Total price of the shopping list:", myBill());

//exercise 5

