/*console.log("Js Code Structure");
console.log("Hello world"); alert("Hello world");
console.log("Hello world")
alert("Hello world")*/

// Ini adalah komentar satu baris
/* Ini adalah komentar
multi
    baris */

// Javascript Variable
console.log("Js Variables");
var nama = "Arkatama";
console.log(nama);
let id = 123;
console.log(id);
const alamat = "Malang";
console.log(alamat);

// Javascript Data Type
console.log("Data Type: Number");
let n = 25;
console.log(n);
n = 30;
console.log(n);

//infinity
let inf = 100/0;
console.log(inf); console.log("atau");
console.log(Infinity);

//NaN
console.log("Arkatama + 1")
console.log("Multi Solusindo" + (2*5));
//console.log(Nan * 3);

console.log("Data Type: BigInt");
const bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt);

console.log("Data Type: String");
const nama1 = "Arkatama"; //petik ganda
console.log(bigInt);
const nama2 = 'Arkatama'; //petik tunggal
console.log(bigInt);
const nama3 = `Arkatama`; //backtick
console.log(bigInt);

console.log("Data Type: Boolean");
let isLoggedIn  = true;
console.log(isLoggedIn);
let isAdmin     = false;
console.log(isAdmin);

let isGreater   = 10 > 5;
console.log(isGreater);
let isLess      = 10 < 5;
console.log(isLess);

console.log("Data Type: Null");
let girlFriend  = null;
console.log("girlFriend");

console.log("Data Type: Undifined");
let name;
console.log('name');

console.log("Data Type: Symbol");
let employee    = Symbol('Joko');
console.log(employee);
console.log(employee.description);

console.log("Data Type: Object");
let employee1 = {
    name        : "Agfinita",
    age         : 20,
    job         : "Web Developer",
    isMarried   : false,
    hobies      : ["Sports", "Cooking"],
};
console.log(`Her name is ${employee1.name} and she is ${employee1.age} years old.`);

// Javascript Conversion
console.log("Type Conversion: String")
let value   = 10;
console.log(value);
console.log(typeof value);
value   = String(value);    // now value is a string "true"
alert(typeof value);        // string

console.log("Type Conversion: Numeric")
alert("6" / "2");           // 3, strings are converted to numbers

let str = "123";
alert(typeof str);          // string

let num = Number(str);      // becomes a number 123
alert(typeof num);          // number

console.log("Type Conversion: Boolean")
alert(Boolean(1));          // true
alert(Boolean(0));          // false

alert(Boolean("hello"));    // true
alert(Boolean(""));         // false

// Javascript Operator
console.log("Arithmetic Operator");
let a   = 10;
let b   = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

console.log("Assigment Operator");
let c   = 2;
console.log(c);

c + 5;
console.log(c);

console.log("Comprasion Operator");
let d   = 4;
let e   =5;

console.log(d = e);
console.log(d < e);
console.log(d > e);
console.log(d != e);

console.log("Logical Operator");
let f   = true;
let g   = false;

console.log( f && g);
console.log( f || g);
console.log( !g);

console.log("Bitwise Operator");
let h   = 00111100;
let i   = 00001101;

console.log( h & i);
console.log( h | i);
console.log( h ^ i);
console.log( ~i);

console.log("Ternary Operator");
let j   = 1;
let k   = 1;

console.log(j=k? "yes" : "no");

//PopUp
console.log("PopUp: Alert");
alert("Selamat datang di Arkatama");
alert("Sekarang tanggal: "+new Date());

console.log("PopUp: Prompt");
let response    = prompt("Apakah kamu mau nonton akhir pekan ini?")
alert("Jawabannya adalah " + response);

console.log("PopUp: Confirm");
let respons     = confirm("Mau dinner malam ini?");
alert("Jawabannya: "+ respons);

//Conditional
console.log("Conditional IF")
let respon  = prompt("1 + 1 =");
if (respon == 2) {
    alert("Correct!");
}

console.log("Conditional IF-ELSE")
let resp    = prompt("1 + 1=");
if (resp == 2) {
    alert("Correct!");
} else {
    alert("Wrong!");
}

console.log("Conditional ELSE IF")
let cetak   = prompt("1 + 1 =");
if (cetak  == 2) {
    alert("Correct!");
} else if (cetak < 2) {
    alert("Too low!");
} else {
    alert("Too high!");
}

console.log("Conditional Switch");
let color   = "red";
switch (color) {
    case "red":
        alert("I love red");
        break;
    case "blue":
        alert("I love blue");
        break;
    default:
        alert("I don't know what color it is!");
        break;
}

// Javascript Loop
console.log( "Loop: For");
for (let r = 0; r < 5; r++) {
    console.log(`Iterasi ke ${r}`);
}

console.log( "Loop: Do..While");
let w = 0;
do {
    console.log(`Iterasi ke ${w}`);
    w+=1;
} while (w < 5);

console.log( "Loop: While");
let v = 0;
while (v<5) {
    console.log(`Iterasi ke ${v}`);
    v++;
}

console.log( "Loop Control: Break");
for ( let l = 0; l < 5; l++) {
    if(l == 3) {
        break;
    }
    console.log(`Iterasi ke ${l}`);
}

console.log( "Loop Control: Continue");
for (let z = 0; z < 5; z++) {
    if(z == 3) {
        continue;
    }
    console.log(`Iterasi ke ${z}`);
}