
//variable

var a1,a_2;
var a$b,ab;

//Data types
// number(int,long,short,double,float),string(""/''/``),boolean(true/false)
// any (number,string,boolean)
// void => it is neutral data type => it does not point anything => we can not store any data types value 
// misec null & undefined => we store as value or we can assign as data type => it can be used data type as well as value 

var a:number=10; // forward declaration & defination

//console.log("Value of a "+a);
/*
console.log('Value of a '+a);
console.log(`
        Value of a ${a}
`)
*/

var str!:string;
// console.log("Value of str is "+str)
str='Sumit';
// console.log("Value of Str is "+str);

var myany:any;
myany=2.5;
console.log('My any value is '+myany);

myany="Sumit raokhande";
console.log('My any value is '+myany);
myany=true;
console.log('My any value is '+myany);

var any1;

//type assertion
// it is convert one data type to another data type 
// it tells to the compiler which data type functionality we have to access 
// pre - requiest
// variable data type should be any/Object/Unknown

// it has 2 ways
// 1 angle bracket syntax => majority we use in typescript file 
// 2 as syntax => u can use ts file as well as view file (html file )

// 1 angle bracket syntax

var s1:any;

// var temp=(<string> s1);
// temp.

// 2 as syntax

var temp=(s1 as string);
// temp.


//Operators
// Airthamthic => +,-,*,/,%
// logical => &&,||
// bitwise => &,|,!,~,^,<<,>>
// conditional=> <,>,==(it checks only value ),===(strongily equality => it checks value as well as data type )
// relational => <=,>=,!=
// unary => ++,--,post/pre 
// ternary => condition?expression1:expression2
// assignment => =,+=,-=,%=,*=,/=

