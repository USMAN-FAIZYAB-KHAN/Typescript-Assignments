// Exercise 2
var personName = "Ali";
console.log("Hi " + personName + "! Nice to meet you.");
// Exercise 3
function toTitleCase(name) {
    var titleCaseName = "";
    for (var i = 0; i < name.length; i = i + 1) {
        if (i == 0) {
            titleCaseName = titleCaseName + name[0].toUpperCase();
        }
        else {
            if (name[i - 1] == " ") {
                titleCaseName = titleCaseName + name[i].toUpperCase();
            }
            else {
                titleCaseName = titleCaseName + name[i].toLowerCase();
            }
        }
    }
    return titleCaseName;
}
var person = "uSmAn FaIzYaB kHaN";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
// It converts personName to title case form
console.log(toTitleCase(person));
// Exercise 4
console.log('Albert Einstein once said, "Life is like riding a bicycle. To keep your balance, you must keep moving."');
// Exercise 5
var famous_person = "Albert Einstein";
var message = "Life is like riding a bicycle. To keep your balance, you must keep moving.";
console.log(famous_person + ' once said, "' + message + '"');
// Exercise 6
var x = "\t\nUsman\n";
console.log(x);
// It removes the whitespace from personName from the beginning and the end
console.log(x.trim());
//Exercise 7,8
console.log(1 + 7);
console.log(12 - 4);
console.log(2 * 4);
console.log(32 / 4);
//Exercise 9
var favouriteNumber = 3;
console.log("My favourite number is " + favouriteNumber);
// Exercise 11
var namesList = ["Sarosh", "Taha", "Zunain"];
console.log(namesList[0]);
console.log(namesList[1]);
console.log(namesList[2]);
// Exercise 11
var friends = ["Sarosh", "Taha", "Zunain"];
for (var _i = 0, friends_1 = friends; _i < friends_1.length; _i++) {
    var name_1 = friends_1[_i];
    console.log("Hi " + name_1 + "! Nice to meet you.");
}
// Exercise 12
var favouritTransport = ["Honda Civic", "Honda City", "Toyota Corolla"];
console.log("I would like to own a " + favouritTransport[0]);
console.log("I like red colored " + favouritTransport[1]);
console.log("I like white colored " + favouritTransport[2]);
// Exercise 13
var guestsList = ["Umer", "Huzaifa", "Ali"];
for (var i = 0; i < guestsList.length; i++) {
    console.log("Hi " + guestsList[i] + "! You are invited to dinner.");
}
// Exercise 14
var guests1 = ["Umer", "Huzaifa", "Hassan"];
for (var i = 0; i < guests1.length; i++) {
    console.log("Hi " + guests1[i] + "! You are invited to dinner.");
}
// Exercise 15
var guests2 = ["Umer", "Huzaifa", "Ali"];
for (var i = 0; i < guests2.length; i++) {
    console.log("Hi " + guests2[i] + "! You are invited to dinner.");
}
console.log("Sorry! " + guests2[2] + " can't make it to dinner.");
guests2[2] = "Hassan";
for (var i = 0; i < guests2.length; i++) {
    console.log("Hi " + guests2[i] + "! You are invited to dinner.");
}
// Exercise 16
var guests3 = ["Umer", "Huzaifa", "Ali"];
for (var i = 0; i < guests3.length; i++) {
    console.log("Hi " + guests3[i] + "! You are invited to dinner.");
}
console.log("Sorry! " + guests3[2] + " can't make it to dinner.");
guests3[2] = "Hassan";
for (var i = 0; i < guests3.length; i++) {
    console.log("Hi " + guests3[i] + "! You are invited to dinner.");
}
console.log("I have found a bigger dinner table.");
guests3.unshift("Zunain");
guests3.push("Taha");
guests3 = guests3.slice(0, guests3.length / 2).concat(["Zohaib"]).concat(guests3.slice(guests3.length / 2, guests3.length));
for (var i = 0; i < guests3.length; i++) {
    console.log("Hi " + guests3[i] + "! You are invited to dinner.");
}
// Exercise 17
var guests = ["Umer", "Huzaifa", "Ali"];
for (var i = 0; i < guests.length; i++) {
    console.log("Hi " + guests[i] + "! You are invited to dinner.");
}
console.log("Sorry! " + guests[2] + " can't make it to dinner.");
guests[2] = "Hassan";
for (var i = 0; i < guests.length; i++) {
    console.log("Hi " + guests[i] + "! You are invited to dinner.");
}
console.log("I have found a bigger dinner table.");
guests.unshift("Zunain");
guests.push("Taha");
guests = guests.slice(0, guests.length / 2).concat(["Zohaib"]).concat(guests.slice(guests.length / 2, guests.length));
console.log("Sorry! I can only invite two people to dinner. My table is not available yet.");
for (var i = 0; i < guests.length; i++) {
    console.log("Hi " + guests[i] + "! You are invited to dinner.");
}
while (guests.length > 2) {
    var name_2 = guests.pop();
    console.log("Sorry " + name_2 + "! You are not invited to dinner.");
}
for (var i = 0; i < guests.length; i++) {
    console.log("Hi " + guests[i] + "! You are still invited to dinner.");
}
guests.splice(0, 2);
console.log(guests);
// Exercise 18
var places = ["Statue of Liberty", "Eiffel Tower", "Great Wall of China", "Machu Picchu", "Stonehenge"];
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
var names = ["Sarosh", "Taha", "Zunain"];
for (var _a = 0, names_1 = names; _a < names_1.length; _a++) {
    var name_3 = names_1[_a];
    console.log("Hi " + name_3 + "! Nice to meet you.");
}
console.log("Total " + names.length + " guests are invited to dinner.");
// Exercise 20
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var mountains = ["K2", "Everest", "Nanga Parbat"];
console.log(mountains);
// Exercise 21
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
var mountain = {
    name: "K2",
    height: 8611,
    country: "Pakistan"
};
console.log(mountain);
// Exercise 22
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
var countries = ["Pakistan", "China", "India"];
// console.log(countries[3]);
console.log(countries[2]);
// Exercise 23
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
var country = "Pakistan";
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
var alien = "green";
if (alien == "green") {
    console.log("You just earned 5 points.");
}
alien = "red";
if (alien == "green") {
    console.log("You just earned 5 points.");
}
// Exercise 26
var alienColor = "green";
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
var alienColour = "green";
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
var age = 20;
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
var favouriteFruits = ["apple", "banana", "mango"];
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
var usernames = ["admin", "Usman", "Ali", "Taha", "Zunain"];
for (var _b = 0, usernames_1 = usernames; _b < usernames_1.length; _b++) {
    var username = usernames_1[_b];
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
var currentUsers = ["Usman", "Ali", "Taha", "Zunain"];
var newUsers = ["Usman", "ali", "taha", "Zunain", "Ahsan", "Bilal", "Hassan", "Kashif", "Noman"];
for (var _c = 0, newUsers_1 = newUsers; _c < newUsers_1.length; _c++) {
    var newUser = newUsers_1[_c];
    var available = true;
    for (var currentUser in currentUsers) {
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
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _d = 0, numbers_1 = numbers; _d < numbers_1.length; _d++) {
    var number = numbers_1[_d];
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
var pizzaType = ["Chicken Fajita", "Chicken Tikka", "Afghani Tikka"];
for (var _e = 0, pizzaType_1 = pizzaType; _e < pizzaType_1.length; _e++) {
    var pizza = pizzaType_1[_e];
    console.log(pizza);
}
for (var _f = 0, pizzaType_2 = pizzaType; _f < pizzaType_2.length; _f++) {
    var pizza = pizzaType_2[_f];
    console.log("I like " + pizza + " pizza.");
}
console.log("Pizza is my favourite food.");
console.log("Pizza originates from Italy.");
console.log("I really love pizza!");
// Exercise 35
var favouriteAnimals = ["Cat", "Dog", "Rabbit"];
for (var _g = 0, favouriteAnimals_1 = favouriteAnimals; _g < favouriteAnimals_1.length; _g++) {
    var animal = favouriteAnimals_1[_g];
    console.log(animal);
}
for (var _h = 0, favouriteAnimals_2 = favouriteAnimals; _h < favouriteAnimals_2.length; _h++) {
    var animal = favouriteAnimals_2[_h];
    console.log("I really love " + animal + "s.");
}
console.log("These animals are really cute.");
console.log("All of these animals are great pets.");
// Exercise 36
function make_shirt(size, text) {
    console.log("Your shirt size is " + size + " and the text on it is " + text + ".");
}
make_shirt("large", "Hello World!");
// Exercise 37
function make_shirt_(size, text) {
    if (size === void 0) { size = "large"; }
    if (text === void 0) { text = "I love TypeScript"; }
    console.log("Your shirt size is " + size + " and the text on it is " + text + ".");
}
make_shirt_();
make_shirt_("medium");
make_shirt_("small", "I love JavaScript");
// Exercise 38
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log(city + " is in " + country + ".");
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("California", "USA");
// Exercise 39
function city_country(city, country) {
    console.log("".concat(city, ", ").concat(country));
}
city_country("Karachi", "Pakistan");
city_country("Lahore", "Pakistan");
city_country("California", "USA");
// Exercise 40
function make_album(artist_name, album_title, number_of_tracks) {
    if (number_of_tracks) {
        return { artist_name: artist_name, album_title: album_title, number_of_tracks: number_of_tracks };
    }
    else {
        return { artist_name: artist_name, album_title: album_title };
    }
}
console.log(make_album("Atif Aslam", "Doorie", 12));
console.log(make_album("Ali Zafar", "Huqa Pani"));
console.log(make_album("Ali Azmat", "Social Circus", 10));
// Exercise 41
var magicians = ["Harry Houdini", "David Blaine", "David Copperfield"];
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
show_magicians(magicians);
// Exercise 42
function make_great(magicians) {
    // it will modify the original array
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great " + magicians[i];
    }
    return magicians;
}
make_great(magicians);
show_magicians(magicians);
// Exercise 43
var great_magicians = make_great(magicians.slice());
show_magicians(great_magicians);
// Exercise 44
function make_sandwitch(items) {
    console.log("You sandwitch has:");
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        console.log(item);
    }
}
make_sandwitch(["bread", "cheese", "chicken", "mayo", "ketchup"]);
make_sandwitch(["bread", "cheese", "chicken", "mayo"]);
make_sandwitch(["bread", "cheese", "chicken"]);
