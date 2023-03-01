//Anonymous Function
// function does not have any name 
var temp1 = function () {
    console.log("u r in first type of function ");
};
// temp1();
var temp2 = function (a, b) {
    return (a + b);
};
var res = temp2(7, 3);
// console.log("Result is "+res);
// fat arrow function/Arrow function 
// Advanced version of anonymous
var temp3 = function () {
    console.log("fat arrow function is called...");
};
// temp3();
var temp4 = function (a, b) {
    return (a + b);
};
// temp4(7,10);
console.log("Addition is " + temp4(7, 10));
