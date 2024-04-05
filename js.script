Exercise 1 

const people = ["Greg", "Mary", "Devon", "James"];

people.shift();

console.log(people);

people[people.indexOf("James")] = "Jason"

console.log (people);

people.push("Akshay");

console.log(people);

let x = people.indexOf("Mary");

console.log (x);

const people = ["Greg", "Mary", "Devon", "James", "Akshay"];

let x = people.slice(1,4);

console.log(x);

let x = people.indexOf("Foo");

console.log (x);

const last = people[people.length - 1];

console.log(last);

for (i=0; i < people.length; i++)

console.log (people[i]);

for (let i = 0; i < people.length; i++) {
  if (people[i] === "Devon") {
    break;
  }
  console.log(people[i]);
}


Exercise 2

const colors = ["blue", "green", "purple", "red", "yellow"];

for (let i = 0; i < colors.length; i++)

console.log ("My favorite color is " + colors[i]);

Exercise 4

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

console.log (building.numberOfFloors);

console.log (building.numberOfAptByFloor.firstFloor);
console.log (building.numberOfAptByFloor.thirdFloor);

console.log(building.nameOfTenants[1]);
console.log(building.numberOfRoomsAndRent.dan[0]);

let SumofSarah = building.numberOfRoomsAndRent.sarah[1];
let SumofDavid = building.numberOfRoomsAndRent.david[1];
let Sumofdan = building.numberOfRoomsAndRent.dan[1];

if (SumofSarah + SumofDavid >= Sumofdan)
{
console.log (Sumofdan + 200);
}

Exercise 5 

const family = {
    father: "John",
    mother: "Emily",
    children: ["Alice", "Bob"],
    pet: "Dog",
    city: "New York"
};

for (let key in family) {
console.log (key);
}

for (let key in family) {
console.log (family[key]);
}


Exercise 6

const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}

//Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”

for (let key in details) {
    console.log (key);
     console.log (details[key]);
}

//Exercise 7 google 

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// Extract the first letter from each name and push it to an array
const initials = names.map(name => name[0]);

// Sort the initials alphabetically
initials.sort();

// Concatenate the sorted initials into a single string
const societyName = initials.join('');

console.log(societyName); // Output: "ABJKPS"
