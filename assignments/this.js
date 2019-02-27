
// // * in your own words. explain the four principle for the "this" keyword below.
// // *
// // * 1. window binding / window containing everything in JS
// // * 2. Implicit binding / binds objects
// // * 3. Explicit binding / binds functions
// // * 4. New keyword / used to create new objects
// // *
// // * write out a code example of each explanation above





// // Principle 1

// // code example for Window Binding

// // function window(par) {
   
// //     console.log(this)
// //     return `I love ${par}`;
// // }

// // console.log(window("coding"));


// console.log(this);










// // Principle 2

// // code example for Implicit Binding

// const dayton = {
//     name : "Dayton",
//     age : 20,
//     school : "Lambda School",
//     me : function (){
//         return `Im ${this.name} , I am ${this.age} years old and go to ${this.school}.`
//     }
// }

// console.log(dayton.me());







// // Principle 3

// // code example for New Binding

// function Vehicle(make) {
//     this.make = make;
//     this.car = function() {
//         console.log(`This vehicle is made by ${make}`)
//     }
// } 

// const ford = new Vehicle("Ford");

// console.log(ford)

// ford.car();





// // Principle 4

// // code example for Explicit Binding

// const binding = {
//     bind: "explicit"
// }



// function explicit() {
//     return `this is a ${this.bind} binding`;
// }


// console.log(explicit.apply(binding));