let num1 = 13;
let num2 = 8;
let num3 = 94;

// the largest
if (num1 > num2) {
  console.log(`This number ${num1} is larger than the other `);
} else {
  console.log(`This number is ${num2} larger than the other `);
}

// even or odd num
if (num1 % 2 == 0) {
  console.log(`${num1} is an even number`);
} else {
  console.log(`${num1} is an odd number`);
}

// q5


// for loop 0 - 20
for (n = 0; n < 21; n++) {
  console.log(n);
}

// while loop 0 - 20
x = -1;
while (x < 20){
  x++;
  console.log(x);
}

// for loop for even num
for(e = 1; e < 20; e++){
    if(e % 2 == 0){
        console.log(e);
    }
}

// startArange & endRange
let startArange = 5;
let endArange = 8;
let numArange = '';
for(startArange; startArange <= endArange; startArange++){
    if(startArange <= endArange){
        numArange += startArange
    }
}
console.log(numArange);

// stars
let s = '*';
for(t = 1; t<=5;t++){
    console.log(s);
}
