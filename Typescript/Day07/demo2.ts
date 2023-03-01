//Anonymous Function
// function does not have any name 

let temp1=function (){
    console.log("u r in first type of function ")
}

// temp1();


let temp2=function (a:number,b:number):number{
    return (a+b)
}

let res=temp2(7,3);
// console.log("Result is "+res);



// fat arrow function/Arrow function 
// Advanced version of anonymous

 let temp3=()=>{
    console.log("fat arrow function is called...")
 }

    // temp3();

let temp4=(a:number,b:number):number=>{
    return (a+b)
} 
    // temp4(7,10);

    console.log("Addition is "+temp4(7,10));








