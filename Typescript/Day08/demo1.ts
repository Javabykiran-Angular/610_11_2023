//Optional parameter function
function add1(a:number,b?:number){
    console.log("value of a "+a);//10
    console.log("value of b "+b);//undefined
    console.log("value of a+b "+(a+b!)) //NAN=> not a number
}

// add1(10);
// add1(10,8);

function add2(a?:number,b?:number){
    console.log("value of a "+a);//10
    console.log("value of b "+b);//undefined
    console.log("value of a+b "+(a!+b!)) //NAN=> not a number
}
// add2();

// default parameter function

function add3(a:number,b:number=10){
    console.log("value of a "+a);//10
    console.log("value of b "+b);//undefined
    console.log("value of a+b "+(a+b)) //NAN=> not a number
}

// add3(40)
// add3(40,20)


function add4(a:number=7,b:number){
    console.log("value of a "+a);//10
    console.log("value of b "+b);//undefined
    console.log("value of a+b "+(a+b)) //NAN=> not a number
}

// add4(40,9);

function add5(a:number=7,b?:number){
    console.log("value of a "+a);//7
    console.log("value of b "+b);//undefined
    console.log("value of a+b "+(a+b!)) //NAN=> not a number
}

// add5();

function add6(a:number=7,b?:number){
    console.log("value of a "+a);//10
    console.log("value of b "+b);//undefined
    console.log("value of a+b "+(a+b!)) //NAN=> not a number
}

// add6(8)

