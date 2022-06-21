function dropdownMenu() {
    var x = document.getElementById("dropdownClick");
    if (x.className === "topnav") {
        x.className += " responsive"; // change topnav to responsive
    } else {
        x.className = "topnav";
    }
}

// var myAccountBalance = 300;
// var nikeSBShoes = 679.23;
// var coupon = 400;

// if (nikeSBShoes <= myAccountBalance) {
//     myAccountBalance -= nikeSBShoes;
//     console.log("We just bought some dope shoes!");
//     console.log("Left $: " + myAccountBalance);
// } else if (nikeSBShoes - coupon <= myAccountBalance) {
//     console.log("You're lucky! You have a coupon");
//     myAccountBalance -= nikeSBShoes - coupon;
//     console.log("Left $ " + myAccountBalance);
// } else {
//     console.log("Declain!");
//     console.log("Left $ " + myAccountBalance);
// }

// var students = ["Timmy", "Sara", "John"];

// var naughtyList = [];
// naughtyList.push(students[0]);

// var index = naughtyList.indexOf("Timmy");
// console.log(naughtyList);

// if (index > -1) {
//     naughtyList.splice(index, 1);
// }

// console.log(naughtyList);

// var total = 10;

// for (x = 0; x < total; x++) {
//     console.log(x);
// }  





// function area (length, width) {
//     return length * width;
// }

// var area1 = area (10, 5);
// console.log (area1);


// function piToCirclLength (lenght) {
//     var pi = 3.14;
//     return pi * lenght;
// }

// var diametrOfCircle = piToCirclLength (23);
// console.log (diametrOfCircle);



// var bankBalance = 900;

// function transaction (priceOfSale) {
//     if (priceOfSale <= bankBalance) {
//         bankBalance -= priceOfSale;
//         console.log ("Successful!");
//         console.log ("Now your balance is " + bankBalance + "$");
//     } else {
//         console.log ("You have no money!");
//         console.log ("Your balance is " + bankBalance + "$");
//         console.log ("But the price is " + priceOfSale + "$");
//     }
// }

// var printCustomerName = function(first, last) {
//     console.log ("First name: " + first + " Last name: " + last);
// };

// var applyForCreditCard = function(creditScore, soul) {
//     ///something
// };

// var bankOperation = [];
// bankOperation.push(transaction);
// bankOperation.push(printCustomerName);
// bankOperation.push(applyForCreditCard);



// // 1 способ создать объект 
// var student0 = {
//     firstName: "Jayne",
//     lastName: "Loo",
//     age: 8
// };
// console.log(student0.greeting());

// // 2 способ создать объект
// var student1 = new Object();
// student1.firstName = "John";
// student1.lastName = "Parker";
// student1.age = 7; 

// // 3 способ создать объект
// var student2 = {};
// student2.firstName = "Zak";
// student2.lastName = "Polson";
// student2.age = 9;

// var students = [];

// function Student(first, last, age) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.greeting = function() {
//         return "Hi, I'm " + this.firstName + " and I'm " + this.age + " years old.";
//     };
// }

// students.push(new Student("Jehny", "Pada", 8));
// students.push(new Student("Jack", "Robby", 12));
// students.push(new Student("Sunny", "Lee", 4));

// var student = students[0];

// // for in
// for (var key in student) {
//     console.log(student[key]);
// }


// var s1 = new Student("Jehny", "Pada", 8);
// console.log(s1);
// console.log(s1.greeting());

// students.push(student0);
// students.push(student1);
// students.push(student2);

// for (var x = 0; x < students.length; x++) {
//     var student = students[x];
//     console.log(student.greeting());
// } 

// console.log (student.firstName);
// console.log (student.lastName);



// //************  Bind  ****************//
// //Alex Brown's

// this.car = "Honda Civic with ugly spoiler";

// var marksGarage = {
//   car: "Aston Martin",
//   getCar: function() {
//     return this.car;
//   }
// }

// console.log(marksGarage.getCar());

// var storeGetCarForLater = marksGarage.getCar;

// //now work is over and Mark wants his car

// console.log(storeGetCarForLater()); //WTF

// var theRealGetCarFunction = marksGarage.getCar.bind(marksGarage);
// console.log(theRealGetCarFunction()); 
