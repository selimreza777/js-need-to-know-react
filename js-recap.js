
// // variable declear 
// // let and const 

// let name = "giyaz";
// name = "giyaz uddin";

// const countryName = "bd";
// // countryName="amirica"  eta error hobe 
// -----------------------------

// if else 

// && operation 

// const num = 40;
// if (num >= 20 && num<=30) {
//   console.log(`print:`, "YES");
// }
// else {
//   console.log(`Not a Print:`, "YES YES");
// }


// || (OR) মানে হলো দুইটার যেকোনো একটা শর্ত true হলেই পুরো condition true হবে।

// এখানে

// num >= 20 → 40 >= 20 → ✅ true

// num <= 30 → 40 <= 30 → ❌ false

// const num = 40;
// if (num >= 20 || num<=30) {
//   console.log(`print:`, "YES");
// }
// else {
//   console.log(`Not a Print:`, "YES YES");
// }
// --------------------------

// array 
//array method

const friends = ["aman", "ratul", "babel", "shakil", "monir", "pavel"];
// // friends.push("Monira khatun"); //push last e new element add kore
// // friends.pop() // pop last er element remove kore 
// // friends.unshift("Porinita"); // array er fast e new element add kore
// // friends.shift()  //shift fast elment remove kore 

// console.log(`is your fnd:`, friends.slice(3,5)); // slice(start,end) start index theke start kore and end index er age porjonto nibe

// ----------------------------
// loop 

// for loop 
// for (let index=0; index<friends.length;index++){
//   const element = array[index];
// }
// ---------------

// function 
// function division(a, b) {
//   console.log(...arguments);
//   const result = a / b;
//   console.log(`division result:`, result);
//   return result;  // function call করার পরে সেই value অন্য variable এ রাখতে পারো বা অন্য জায়গায় ব্যবহার করতে পারো। 
// }
// const functionValuReturn = division(250, 8);
// console.log(functionValuReturn);

// ----------------------------------
// object idea

const car = {
  name: 'R15',
  model: 2020,
  color: 'red',
  price: 120000,
  fnd: friends
}
console.log(car)





