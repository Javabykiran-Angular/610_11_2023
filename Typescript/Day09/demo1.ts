//Rest parameter function
function display(...item:number[]){
    console.log(item);
}

// display(78,90,100,2,45);
// display(7);
// display();

function display1(str:string,...item:number[]){
    console.log(str);
    console.log(item);    
}

// display1(`Sumit`,40,56,10);

//Push & pop method
// it is array method
// to add data dynamically then we use push & pop method
// LIFO Principal=> Last in First Out

// let a:number[]=[];

// a.push(45);
// console.log(a);
// a.push(78,90,100);
// console.log(a);
// let res=a.pop();
// console.log(a)
// console.log("poped element is "+res);


//Splice method
// u can add/delete/replace data on a particular index using splice 

let a:number[]=[10,20,52,60,78];

// console.log(a);

// a.splice(4,0,100);
// console.log(a);
// a.splice(2,0,200,300,7);
// console.log(a)
// a.splice(0,1);
// console.log(a);
// a.splice(3,2);
// console.log(a);

// a.splice(4,1,500);
// console.log(a)
// a.splice(2,2,78)
// console.log(a);

//slice
// it copy a section of data from an array & return a new array

let strdata:string[]=["Core java",'Advanced java','Spring Boot','Hibernate','Angular 12'];

// console.log(strdata.length);
// console.log(strdata);
let temp=strdata.slice(1,4);
console.log(strdata);
console.log("Copied Array "+temp);
let temp1=strdata.slice();
console.log("Copied Array "+temp1);

