
//Function Type 
// 1 Function without parameter & without return type
// 2 Function with parameter & without return type
// 3 Function without parameter & with return type
// 4 Function with parameter & with return type

// 1 Function without parameter & without return type

function add1(){
    console.log("u r in First Type of Function")
}



// add1();

// 2 Function with parameter & without return type

function add2(a:number,b:number){
    console.log("Addition is "+(a+b))
}

// add2(2,3);

// 3 Function without parameter & with return type

function add3():number{
    return (5+5);
}

let res=add3();
// console.log("Result "+res);

// 4 Function with parameter & with return type

function add4(a:number,b:number):number{
    return (a+b);
}

console.log(`
    Addition is ${add4(10,5)}
`)
