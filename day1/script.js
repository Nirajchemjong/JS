// const arry = [];

// let a = false;
// let b = false;

// let c = true;

// let d = true;

// console.log(a === b); //=== it gonna compare value and data types

// console.log(a == b); // == it's gonna compare only value

// console.log((a = b)); // = it's gonna assing value

// console.log(a && b); // and logical

// // true true = true
// // true false = false
// // false true = false
// // false false = false

// console.log(a || b); //or logical

// true true  = true
// false true = true
// true false = true
// false false = false

// console.log((c && d) || a || c);
// false || true;
// true;

// let a = "2",
//   b = 2;

// console.log(a !== b);

// console.log(sanda);

///Learning more about function to make class

function playerOne(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function () {
    console.log(name);
  };
  this.math = function (a, b) {
    return a * b;
  };
}

// const playerTwo = (name, point) => {
//   this.name = name;
//   this.point = point;
// };

function playerTwo(name, point) {
  this.name = name;
  this.point = point;
}

const playerOneIns = new playerOne("niraj", 10);
const player = new playerTwo("Shristi", 20);
playerOneIns.sayName();
console.log(playerOneIns.math(2, 3));
// console.log(
//   playerOneIns.check() === undefined
//     ? console.log("hello world it's undifined")
//     : console.log("you are doing great")
// );

// console.log(true || false);

// ===========more about object with loop =========

const newObj = {
  name: "niraj",
  lname: "chemjong",
  name: "niraj",
  niraj() {
    console.log("from niraj");
  },
};

// console.log(newObj?.key);

// let namee = niraj();

for (let key in newObj) {
  //   console.log(newObj[key]);
  //   if (newObj[key] == niraj) {
  //     console.log(niraj());
  //   }

  //   console.log(newObj[key]);

  if (typeof newObj[key] === "function" && key === "niraj") {
    console.log("index matched " + newObj[key]);
    break;
  } else {
    // console.log(newObj[key]);
  }
}

// const checkObj = {
//   fname: "niraj",
//   lname: "limbu",
//   phone: 23456,
// };

// for (let key in checkObj) {
//   console.log(key);
// }

const checkArr = [1, 2, 3, "niraj"];
