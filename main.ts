// Exercise 2
let personName: string = "Ali";
console.log("Hi " + personName + "! Nice to meet you.");

// Exercise 3
function toTitleCase(name: string): string {
    let titleCaseName: string = "";
    for (let i: number=0; i < name.length; i=i+1) {
        if (i == 0) {
            titleCaseName = titleCaseName + name[0].toUpperCase()
        }
        else {
            if (name[i-1] == " ") {
                titleCaseName = titleCaseName + name[i].toUpperCase()
            }
            else {
                titleCaseName = titleCaseName + name[i].toLowerCase()
            }
        }
    }
    return titleCaseName;
}

let person: string = "uSmAn FaIzYaB kHaN";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
// It converts personName to title case form
console.log(toTitleCase(person));

// Exercise 4
console.log('Albert Einstein once said, "Life is like riding a bicycle. To keep your balance, you must keep moving."');

// Exercise 5
let famous_person: string = "Albert Einstein";
let message: string =  "Life is like riding a bicycle. To keep your balance, you must keep moving.";
console.log(famous_person + ' once said, "' + message + '"');

// Exercise 6
let x: string = "\t\nUsman\n";
console.log(x);
// It removes the whitespace from personName from the beginning and the end
console.log(x.trim());

//Exercise 7,8
console.log(1+7);
console.log(12-4);
console.log(2*4);
console.log(32/4);

//Exercise 9
let favouriteNumber:number = 3
console.log("My favourite number is " + favouriteNumber)

// Exercise 11
let namesList: Array<string> = ["Sarosh","Taha","Zunain"];
console.log(namesList[0]);
console.log(namesList[1]);
console.log(namesList[2]);

// Exercise 11
let friends: Array<string> = ["Sarosh","Taha","Zunain"];
for (let name of friends) {
    console.log("Hi " + name + "! Nice to meet you.");
}

// Exercise 12
let favouritTransport: Array<string> = ["Honda Civic","Honda City","Toyota Corolla"];
console.log("I would like to own a " + favouritTransport[0]);
console.log("I like red colored " + favouritTransport[1]);
console.log("I like white colored " + favouritTransport[2]);

// Exercise 13
let guestsList: Array<string> = ["Umer", "Huzaifa", "Ali"];
for (let i=0; i < guestsList.length; i++) {
    console.log("Hi " + guestsList[i] + "! You are invited to dinner.");
}

// Exercise 14
let guests1: Array<string> = ["Umer", "Huzaifa", "Hassan"];
for (let i=0; i < guests1.length; i++) {
    console.log("Hi " + guests1[i] + "! You are invited to dinner.");
}

// Exercise 15
let guests2: Array<string> = ["Umer", "Huzaifa", "Ali"];
for (let i=0; i < guests2.length; i++) {
    console.log("Hi " + guests2[i] + "! You are invited to dinner.");
}
console.log("Sorry! " + guests2[2] + " can't make it to dinner.");
guests2[2] = "Hassan";
for (let i=0; i < guests2.length; i++) {
    console.log("Hi " + guests2[i] + "! You are invited to dinner.");
}

// Exercise 16
let guests3: Array<string> = ["Umer", "Huzaifa", "Ali"];
for (let i=0; i < guests3.length; i++) {
    console.log("Hi " + guests3[i] + "! You are invited to dinner.");
}
console.log("Sorry! " + guests3[2] + " can't make it to dinner.");
guests3[2] = "Hassan";
for (let i=0; i < guests3.length; i++) {
    console.log("Hi " + guests3[i] + "! You are invited to dinner.");
}
console.log("I have found a bigger dinner table.");
guests3.unshift("Zunain");
guests3.push("Taha");
guests3 = guests3.slice(0, guests3.length/2).concat(["Zohaib"]).concat(guests3.slice(guests3.length/2, guests3.length));
for (let i=0; i < guests3.length; i++) {
    console.log("Hi " + guests3[i] + "! You are invited to dinner.");
}

// Exercise 17
let guests: Array<string> = ["Umer", "Huzaifa", "Ali"];

for (let i=0; i < guests.length; i++) {
    console.log("Hi " + guests[i] + "! You are invited to dinner.");
}
console.log("Sorry! " + guests[2] + " can't make it to dinner.");

guests[2] = "Hassan";
for (let i=0; i < guests.length; i++) {
    console.log("Hi " + guests[i] + "! You are invited to dinner.");
}

console.log("I have found a bigger dinner table.");
guests.unshift("Zunain");
guests.push("Taha");
guests = guests.slice(0, guests.length/2).concat(["Zohaib"]).concat(guests.slice(guests.length/2, guests.length));

console.log("Sorry! I can only invite two people to dinner. My table is not available yet.");
for (let i=0; i < guests.length; i++) {
    console.log("Hi " + guests[i] + "! You are invited to dinner.");
}
while (guests.length > 2) {
    let name = guests.pop();
    console.log("Sorry " + name + "! You are not invited to dinner.");
}
for (let i=0; i < guests.length; i++) {
    console.log("Hi " + guests[i] + "! You are still invited to dinner.");
}
guests.splice(0, 2);
console.log(guests);

// Exercise 18
let places: Array<string> = ["Statue of Liberty", "Eiffel Tower", "Great Wall of China", "Machu Picchu", "Stonehenge"];
// original array
console.log(places);
// Print your array in alphabetical order without modifying the actual list.
console.log(places.slice().sort());
console.log(places);

// reverse alphabetical order
console.log(places.slice().sort().reverse());
console.log(places);

// reversing the original array
places.reverse();
console.log(places);

// rereversing the array
places.reverse();
console.log(places);

// sorting and mutating the original array
places.sort();
console.log(places);

places.reverse();
console.log(places);

// Exercise 19
let names: Array<string> = ["Sarosh","Taha","Zunain"];
for (let name of names) {
    console.log("Hi " + name + "! Nice to meet you.");
}
console.log("Total " + names.length + " guests are invited to dinner.");

// Exercise 20
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

let mountains: Array<string> = ["K2", "Everest", "Nanga Parbat"];
console.log(mountains);

// Exercise 21
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
let mountain: Object =  {
    name: "K2",
    height: 8611,
    country: "Pakistan"
}
console.log(mountain);

// Exercise 22
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
let countries: Array<string> = ["Pakistan", "China", "India"];
// console.log(countries[3]);
console.log(countries[2]);

// Exercise 23
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let country: string = "Pakistan";
console.log(country == "Pakistan");
console.log(country != "Iran");
console.log(country != "Nepal");
console.log(country != "pakistan");
console.log(country[0] == "P");

console.log(country == "China");
console.log(country == "India");
console.log(country != "Pakistan");
console.log(country == "pakistan");
console.log(country == "PAKISTAN");

// Exercise 24
console.log("Pakistan" == "Pakistan");
console.log("Pakistan" != "Pakistan");
console.log("PAKISTAN".toLowerCase() == "pakistan");
console.log("pakistan".toUpperCase() == "PAKISTAN");
console.log(5 < 10);
console.log(5 > 10);
console.log(5 <= 10);
console.log(6 >= 6);
console.log(5 == 5);
console.log(5 != 5);
console.log(2 in [1, 2, 3]);
console.log(5 in [1, 2, 3]);

// Exercise 25
let alien: string = "green";
if (alien == "green") {
    console.log("You just earned 5 points.");
}

alien = "red";
if (alien == "green") {
    console.log("You just earned 5 points.");
}

// Exercise 26
let alienColor: string = "green";
if (alienColor == "green") {
    console.log("You just earned 5 points.");
}
else {
    console.log("You just earned 10 points.");
}

alienColor = "red";
if (alienColor == "green") {
    console.log("You just earned 5 points.");
}
else {
    console.log("You just earned 10 points.");
}

// Exercise 27
let alienColour = "green";
if (alienColour == "green") {
    console.log("You just earned 5 points.");
}
else if (alienColour == "yellow") {
    console.log("You just earned 10 points.");
}
else {
    console.log("You just earned 15 points.");
}

alienColour = "yellow";
if (alienColour == "green") {
    console.log("You just earned 5 points.");
}
else if (alienColour == "yellow") {
    console.log("You just earned 10 points.");
}
else {
    console.log("You just earned 15 points.");
}

alienColour = "red";
if (alienColour == "green") {
    console.log("You just earned 5 points.");
}
else if (alienColour == "yellow") {
    console.log("You just earned 10 points.");
}
else {
    console.log("You just earned 15 points.");
}

// Exercise 28
let age: number = 20;
if (age < 2) {
    console.log("You are a baby.");
}
else if (age < 4) {
    console.log("You are a toddler.");
}
else if (age < 13) {
    console.log("You are a kid.");
}
else if (age < 20) {
    console.log("You are a teenager.");
}
else if (age < 65) {
    console.log("You are an adult.");
}
else {
    console.log("You are an elder.");
}

// Exercise 29
let favouriteFruits: Array<string> = ["apple", "banana", "mango"];
if ("apple" in favouriteFruits) {
    console.log("You really like apples.");
}
if ("banana" in favouriteFruits) {
    console.log("You really like bananas.");
}
if ("mango" in favouriteFruits) {
    console.log("You really like mangoes.");
}
if ("orange" in favouriteFruits) {
    console.log("You really like oranges.");
}
if ("grapes" in favouriteFruits) {
    console.log("You really like grapes.");
}

// Exercise 30
let usernames: Array<string> = ["admin", "Usman", "Ali", "Taha", "Zunain"];
for (let username of usernames) {
    if (username == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello " + username + ", thank you for logging in again.");
    }
}

// Exercise 31
usernames = [];
if (usernames.length == 0) {
    console.log("We need to find some users!");
}

// Exercise 32
let currentUsers: Array<string> = ["Usman", "Ali", "Taha", "Zunain"];
let newUsers: Array<string> = ["Usman", "ali", "taha", "Zunain", "Ahsan", "Bilal", "Hassan", "Kashif", "Noman"];
for (let newUser of newUsers) {
    let available: boolean = true;
    for (let currentUser in currentUsers) {
        if (newUser.toLowerCase == currentUser.toLowerCase) {
            available = false;
            console.log("You need to enter a new username.");
            break;
        }
    }
    if (available) {
        console.log("Username is available.");
    }
}

// Exercise 33
let numbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number of numbers) {
    if (number == 1) {
        console.log(number + "st");
    }
    else if (number == 2) {
        console.log(number + "nd");
    }
    else if (number == 3) {
        console.log(number + "rd");
    }
    else {
        console.log(number + "th");
    }
}

// Exercise 34
let pizzaType: Array<string> = ["Chicken Fajita", "Chicken Tikka", "Afghani Tikka"];
for (let pizza of pizzaType) {
    console.log(pizza);
}
for (let pizza of pizzaType) {
    console.log("I like " + pizza + " pizza.");
}
console.log("Pizza is my favourite food.")
console.log("Pizza originates from Italy.")
console.log("I really love pizza!");

// Exercise 35
let favouriteAnimals: Array<string> = ["Cat", "Dog", "Rabbit"];
for (let animal of favouriteAnimals) {
    console.log(animal);
}
for (let animal of favouriteAnimals) {
    console.log("I really love " + animal + "s.");
}
console.log("These animals are really cute.");
console.log("All of these animals are great pets.")

// Exercise 36
function make_shirt(size: string, text: string) {
    console.log("Your shirt size is " + size + " and the text on it is " + text + ".");
}
make_shirt("large", "Hello World!");

// Exercise 37
function make_shirt_(size: string = "large", text: string = "I love TypeScript") {
    console.log("Your shirt size is " + size + " and the text on it is " + text + ".");
}
make_shirt_();
make_shirt_("medium");
make_shirt_("small", "I love JavaScript");

// Exercise 38
function describe_city(city: string, country: string = "Pakistan") {
    console.log(city + " is in " + country + ".");
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("California", "USA");

// Exercise 39
function city_country(city: string, country: string) {
    console.log(`${city}, ${country}`);
}
city_country("Karachi", "Pakistan");
city_country("Lahore", "Pakistan");
city_country("California", "USA");

// Exercise 40
function make_album(artist_name: string, album_title: string, number_of_tracks?: number) {
    if (number_of_tracks) {
        return { artist_name, album_title, number_of_tracks };
    }
    else {
        return { artist_name, album_title };
    }
}
console.log(make_album("Atif Aslam", "Doorie", 12));
console.log(make_album("Ali Zafar", "Huqa Pani"));
console.log(make_album("Ali Azmat", "Social Circus", 10));

// Exercise 41
let magicians: Array<string> = ["Harry Houdini", "David Blaine", "David Copperfield"];
function show_magicians(magicians: Array<string>) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
show_magicians(magicians);

// Exercise 42
function make_great(magicians: Array<string>) {
    // it will modify the original array
    for (let i=0; i<magicians.length; i++) {
        magicians[i] = "The Great " + magicians[i];
    }
    return magicians;
}
make_great(magicians);
show_magicians(magicians);

// Exercise 43
let great_magicians: Array<string> = make_great(magicians.slice());
show_magicians(great_magicians);

// Exercise 44
function make_sandwitch(items: Array<string>) {
    console.log("You sandwitch has:");
    for (let item of items) {
        console.log(item);
    }
}
make_sandwitch(["bread", "cheese", "chicken", "mayo", "ketchup"]);
make_sandwitch(["bread", "cheese", "chicken", "mayo"]);
make_sandwitch(["bread", "cheese", "chicken"]);

