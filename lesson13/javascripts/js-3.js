// // toán tử, toán hạng, biểu thức, câu lệnh, khối lệnh
// //1. toán tử số học: +, -, *, /, %
// var num1, num2;
// // gán gtri 
// num1 = 12;
// num2 = 25;

// // thực hiện các phép tính toán số học
// res = num1 + num2;
// console.log(num1,"+",num2,"=",res);
// res = num1 - num2;
// console.log(num1,"-",num2,"=",res);
// res = num1 * num2;
// console.log(num1,"*",num2,"=",res);
// res = num1 / num2;
// console.log(num1,"/",num2,"=",res);
// res = num1 % num2;
// console.log(num1,"%",num2,"=",res);


// //2. phép toán so sánh => trả về giá trị boolean (true/flase)
// // >; >=; <; <=; ==; ===; !=; !==
// var  num3 = 7; num4 = 70;
// // thực hiện giá trị
// res = num3 > num4;
// console.log(num3,">",num4, "=>",res);

// res = num3 >= num4;
// console.log(num3,">=",num4, "=>",res);

// res = num3 < num4;
// console.log(num3,"<",num4, "=>",res);

// res = num3 <= num4;
// console.log(num3,"<=",num4, "=>",res);

// res = num3 == num4;
// console.log(num3,"==",num4, "=>",res);

// res = num3 === num4;
// console.log(num3,"===",num4, "=>",res);

// res = num3 != num4;
// console.log(num3,"!=",num4, "=>",res);

// res = num3 !== num4;
// console.log(num3,"!==",num4, "=>",res);

// num1 = 12;
// num2 = "12";
// res = num1 == num2;
// console.log(num1,"==",num2, "=>",res);

// res = num1 === num2;
// console.log(num1,"===",num2, "=>",res);

//3. toán tử logic( and &&, or ||, not !)

num1 = 12;
num2 = 15;
res = (num1 >10) && (num2 < 10);
console.log("(num1 >10) && (num2 < 10)", res);

res = (num1 >10) && (num2 < 10);
console.log("(num1 >10) && (num2 < 10)", res);

res = !((num1 >10) && (num2 < 10));
console.log("!((num1 >10) && (num2 < 10))", res);

res = !(num1 >10) && (num2 < 10);
console.log("!((num1 >10) && (num2 < 10))", res);

res = (num1 >10) && !(num2 < 10);
console.log("!((num1 >10) && (num2 < 10))", res);

//4. Toán tử đặc biệt
res= (num1 >10)?"Giá trị lớn hơn":"nhỏ hơn";
console.log(res);
res= (num2 % 2 == 0)?"số chẵn":"số lẻ";
console.log(num2, "là",res);

//typeof
res = typeof(num1); // number
console.log("typeof(num1):", res);

num1 ="12345";
res = typeof(num1); // string
console.log("typeof(num1):", res);

