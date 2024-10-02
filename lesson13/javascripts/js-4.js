// cấu trúc điều khiển if 
// dạng 1; if đơn

/*
CÚ PHÁP
if(condition-expression) {
block statement;
}
*/

//ví dụ: cho số num; kiểm tra số num có là số dương ?

num = 10;
if (num > 0) {
    console.log(num, "là số dương ");
}

if (num > 0) {
    num = -100;
    console.log(num);
}

//dạng 2 ; if ... else
num =12;
//kiểm tra xem số num là số chẵn hay lẻ 
if(num % 2 == 0) {
    console.log(num,"là số chẵn");
} else {
    console.log(num,"là số lẻ");
}

// dạng 3: if bậc thang; if...else...if...
//kiểm tra num là số dương, âm hay 0
if(num > 0) {
    console.log(num,"là số dương");
} else if(num < 0){
    console.log(num,"là số âm");
} else {
    console.log(num,"là số không");
}

// dạng 4: nested if 
num1 = 12;
num2 = 15;
// nếu num1 là số chẵn; kiểm tra nếu num2 là số lẻ 
// tính: res = num1 + num2 

if(num1 % 2 == 0) {
    if(num2 % 2 == 1) {
        res = num1 + num2;
        console.log(res);
    }
} else {
    if(num2 % 2 == 1) {
        res = num1 - num2;
        console.log(res);
    }
}

// bài luyện tập 1: giải pt bậc 1: ax+b=0
a = 2;
b = 6; 
    if(a === 0) {
        if(b === 0) {
            console.log("Phương trình có nghiệm");
        } else {
            console.log("Phương trình vô nghiệm");
            
        }
    } else {
        res = -b/a ;
        console.log("Nghiệm x =",res);
        
    }

// bài luyện tập 2: giải pt bậc 2: ax^2+bx+c=0
