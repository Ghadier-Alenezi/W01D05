let num1 = 2;
let num2 = 1;
let num3 = 3;

//q3. the largest
if (num1 > num2) {
  console.log(`This number ${num1} is larger than the other `);
} else {
  console.log(`This number is ${num2} larger than the other `);
}

//q4. even or odd num
if (num1 % 2 == 0) {
  console.log(`${num1} is an even number`);
} else {
  console.log(`${num1} is an odd number`);
}

//q5. sort nums
if (num1 > num2 && num1 > num3) {
  if (num2 > num3) {
    console.log(num1 + ", ", +num2 + ", " + num3);
  } else {
    console.log(num1 + ", " + num3 + ", " + num2);
  }
} else if (num2 > num1 && num2 > num3) {
  if (num1 > num3) {
    console.log(num2 + " " + num1 + " " + num3);
  } else {
    console.log(num2 + " " + num3 + " " + num1);
  }
} else {
  if (num1 > num2) {
    console.log(num3 + " " + num1 + " " + num2);
  } else {
    console.log(num3 + " " + num2 + " " + num1);
  }
}

//q6. +num 
let amount;
if(amount <= 0){
    console.log("Please enter a positive number");
}else if(typeof(amount) != 'number'){
    console.log("Please enter a number");
}else{
    console.log(amount);
}

//q7. username & password
let userName= 'iiiiiiiii';
let password ='tttt';
if(userName.length > 6 && password.length >= 8){
    console.log("login successful");
}else{
    console.log("login failed.");
}

//q8. for loop 0 - 20
for (n = 0; n < 21; n++) {
  console.log(n);
}

//q9. while loop 0 - 20
x = -1;
while (x < 20) {
  x++;
  console.log(x);
}

//q10. for loop for even num
for (e = 1; e < 20; e++) {
  if (e % 2 == 0) {
    console.log(e);
  }
}

//q11. startArange & endRange
let startArange = 5;
let endArange = 8;
let numArange = "";
for (startArange; startArange <= endArange; startArange++) {
    console.log(starStair + ', ');
    numArange += startArange;
}


/* stars
let s = 6;
let xs = 6;

let starStair = "";

for (let i = 1; i < s; i++) {
  for (let g = 1; g < xs; g++) {
    if (i + g >= s) {
      starStair = starStair.concat("*");
    } else {
      starStair = starStair.concat(" ");
    }
  }
  starStair = starStair.concat("\n");
}

console.log(starStair);
*/