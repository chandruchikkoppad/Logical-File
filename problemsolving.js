 // SquareRoot---------------------------------------------------------------------------
// function sqt(num) {
//     let res = num ** 0.5;
//     document.write(`SquareRoot of square num=${num} is ${res}`);
// }
// sqt(Number(prompt("enter square number")))

// Celsius To Fahrenheit-----------------------------------------------------------------------
// function TempConversion(celsius) {
//     let fahrenheat = celsius * 1.8 + 32;
//     document.write(`Temprature Conversion
//                      ${celsius} Oc is equal to ${fahrenheat} Fahrenheat`);
// }
// TempConversion(Number(prompt("Enter temperature in Celsius to convert it into Fahrenheat")))

// ArmStrong Number----------------------------------------------------------------
// function Arm(num) {
//     let temp = num;
//     let sum = 0;
//     let power = 0;
//     while (num > 0) {
//         num = parseInt(num / 10);
//         power++;
//     }
//     num = temp;
//     while (num>0) {
//         let digit = (num % 10);
//          sum = sum + (digit ** power);
//         num = parseInt(num / 10);
//     }
//     num = temp;
//     console.log(sum);
//     if (sum == num) {
//         document.write(`${num} is a Armstrong number`);
//     } else {
//          document.write(`${num} is not a Armstrong number`);
//     }
// }
// Arm(Number(prompt("enter number here")))


/// Prime number from 1 to given number--------------------------------------------------
// function prime(num) {
//     for (let i = 1; i <= num; i++) {
//         let count = 0;
//         for (let j = 1; j <= i; j++) {
//             if (i % j == 0) {
//                 count++;
//             }
//         }
//         if (count == 2) {
//             console.log(i);
//         }
//     }
// }
// prime(5);


// function scRoot(num, input) {
//     let value = 1;
//     if (input === "SQRT") {
//         value = num ** (1 / 2);
//         console.log(value);
//     }
//     else if (input === "CBRT") {
//         value = num ** (1 / 3);
//         console.log(value);
//     }
//     else (console.log("please enter correct input"));
// }
// // scRoot(num=Number(prompt("enter number to check ")), input=prompt("type 'SQRT' to find square root,type 'CBRT' to find cube root"));




//  let res = 0;
// function rev(n) {
//     while (n > 0) {
//     let digit = (n % 10);
//     res = res * 10 + digit;
//     n = parseInt(n / 10)
//     }
//     console.log(res);
// }
// rev(121);
// rev(99869972);


// let n = '12345abc';
// let sp = n.slice(0, 5)
// console.log(typeof sp);
// let slp=sp.split("")
// console.log(slp);
// let slps=slp.map((v)=>parseInt(v))  ///[1,2,3,4,5]
// let ress = slps.reduce((acc, vl) =>  acc + vl )
// console.log(ress);


/// Prime Number-----------------------------------------------------------

// function prime(num)
// {
//     var count=0;
//     for(var i=1; i<=num; i++)
//     {
//         if(num%i==0)
//         {
//             count++;
//         }
//     }
//     if(count==2)
//     {
//         console.log(num+" is a prime");
//     }
//     else{
//         console.log(num+" is not a prime");
//     }
// }

// prime(10);
// prime(11);


// Palaendrome  ----------------------------------------------
// let str = "Krish";
//     let temp = str;
// let str2 = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         str2 = str2 + str[i];
// }
// if (str2 == temp) {
//     console.log(`${str} is palindrome`)
// } else {
//     console.log(`${str} is not palindrome`);
// }


// Fabbinocci
// function fab(n) {
//     let n1 = 0;
//     console.log(0);
//     let n2 = 1;
//     console.log(1);
//     let sum = 0;
//     while (n>sum) {
//         sum = n1 + n2;
//         console.log(sum);
//         n1 = n2;
//         n2 = sum;
//     }
// }
// fab(10);


///print the nums from 20 t0 12 for three-three times
// let num = 20;
// while (num >= 12) {
//     console.log(num);
//     console.log(num);
//      console.log(num);
//     num--;
// }

/// orr


// // Factorial of a numbers
// let fnum = 5;
// let res = 1;
// while (fnum > 0) {
//     funum
// }




///ArmStrong number
//     function arm(num) {
//         let temp = num;
//         let power = 0;
//         sum = 0;
//         while (num > 0) {
//             num = parseInt(num / 10);
//             power++
//         }
//         console.log(power);
//         num = temp;
//         while (num > 0) {
//             let digit = num % 10;
//             sum = sum + (digit ** power)
//             num = parseInt(num / 10);
//         }
//         if (sum == temp) {
//             console.log(`${sum} is a ArmStrong`);
//         } else {
//             console.log(`${sum} is  not a ArmStrong`);
//         }

//     }
// arm(153);
    

// /PREFECT Number

  // function Pnum(n) {
  //   let sum = 0;
  //   for (let i = 1; i <= n; i++) {
  //     if (n % i == 0) {
  //       sum = sum + i;
  //     }
  //     if (sum == n) {
  //       console.log(`${n} is Perfect number`);
  //     }
  //   }
  // }
  

  // Pnum(6);


///Check whether the given number is integer or not-----------------------------------------------------------------------------
// function int(n) {
//   let pInt = parseInt(n);
//   if (n == pInt) {
//     console.log("Num is INTEGER");
//   }
//   else {
//     console.log("Num is not INTEGER");
//   }
// }
// int(10.0),
//   int(10.1);

///Find the Sum of Prime Numbers range from 1 to 100;-------------------------------------------------------------------------------
// function prime(num)
// {
//   let sum = 0;
//   for(var i=2; i<=num; i++)
//   {
//     let count = 0;
//   for(var j=1; j<=i; j++)
//   {
//    if (i%j==0)
//     {
//       count++;
//     }
//   }
//     if(count==2)
//     {
//       sum=sum+i
//     }
//   }
//  console.log(sum);
// }
// prime(100);


/// Print the tables upto given Number----------------------------------------------------------------------------------
// function table(n){
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= 10; j++) {
//       console.log(
//         `${i} * ${j} = ${i * j},`
//         // ${i + 1} * ${j} = ${i * 2 * j},        ${
//         //   i + 2
//         // } * ${j} = ${i * 3 * j},`
//         // ${i + 3} * ${j} = ${(i * 4) * j},   ${i + 4} * ${j} = ${(i * 5) * j}
//       );
//     }
//   }
// }
// table(5);


// Check whether last two digits of two numbers are same or not---------------------------------------------------
// function last2(n1, n2) {
//   if ((n1 % 100) == (n2 % 100)) {
//     console.log(`Last two digits of two numbers are same`);
//   }
//   else {
//     console.log(`Last two digits of two numbers are  not same`);
//   }
// }
// last2(122, 222);
// last2(12322, 232);
// last2(132, 232);

///print whether given two strings are Anagram or not------------------------------------------------------------
// function Ana(str1, str2) {
//   let split1 = str1.toLowerCase().split("").sort().join("");
//   let split2 = str2.toLowerCase().split("").sort().join("");
// if (split1 == split2) {
//   console.log(`Given two strings are Anagrams`);
// } else {
//   console.log(`Given two strings are not Anagrams`);
// }
// }
// Ana("aRmy", "Mary");

///---------------------------------------------------------------------------------------------------------------------------------

///Removing of dublicate elements from an given array
let a = ["hello", 1, 11, 22, 33, 1, 26, 11];

// function Remove(n) {
//   let k = 0; let b = [];
//   for (let i = 0; i < a.length-1; i++) {
//     for (let j = i + 1; j < a.length; i++) {
//       if (a[i] == a[j]) {
//         a[j] = "r";
//       }
//     }
//   }
// }
// Remove(11);


// function repetingChar(str) {
//   var count = 0;
//   for (let i = 0; i < str.length; i++) {
//     for (let j = i + 1; j < str.length; j++) {
//       if ((str[i] == str[j]) && (str[i] != "x")) {
//         count++;
//         str[j] = "x";
//         console.log(`${str[i]}-is repeting ${count + 1} of time`);
//       }
//       count = 0;
//     }
//   }
// }
// repetingChar("constitution")


///***************************************************************************************************** */
// var asum = "10+10";
// console.log(asum);     /// 10+10
// console.log(typeof asum);  ///string
// console.log(asum.valueOf());  ///10+10
// console.log(eval(asum));  ///20

///**************************************************************************************************************
///TRACING of Outputs
// let num = "100";
// const str = "ssp";
// function x() {
//   let a = 20;
//   console.log(a);
//   console.log(num);
//   var b = "Hello"
//   var c = 50;
//   function y() {
//     console.log(a);
//     console.log(b);
//   }
//   y();
//   function z() {
//     console.log(b);
//     console.log(c);
//     console.log(str);
//   }
//   z();
// }
// x();
// console.log(str);

///----------------------------------------------------------------------------------------------------------------
// var nn =" mmmmm";

// function xx(val) {
//   console.log(this.val);
// }
// xx(2);


// let X = function (name, id){
//   this.name = name;
//   this.id = id;
// }
// let x1 = new X("cc", 123);
// console.log(x1);


///----------------------------------------------------------------
const student1 = {

    // data property
  firstName: 'Monica',
  job:'engg',
    
    // accessor property(getter)
    get getName() {
      return this.firstName+'\t'+this.job;
    }
};

// accessing data property
console.log(student1.firstName); // Monica

// accessing getter methods
console.log(student1.getName); // Monica

// trying to access as a method
///console.log(student.getName()); // error-not possible use paraenthises
///-----------------------------------------------
const student2 = {
    firstName: 'Monica',
    
    //accessor property(setter)
    set changeName(newName) {
      this.firstName = newName;
    }
};

console.log(student2.firstName); // Monica

// change(set) object property using a setter
student2.changeName = 'Sarah';

console.log(student2.firstName); // Sarah

