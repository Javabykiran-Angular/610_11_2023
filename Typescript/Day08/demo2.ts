//array basics
// array is dynamically growable & shrinkable
// no any fixed size array 
// array is homogenous as well as hetrogenous 

let a:number[]=[2,5,6,8];
let a1:string[]=[];
let a2:any[]=[2.5,'Sumit',true];
let a3=[2.5,45,8];

// for(let i=0;i<a.length;i++){
//     console.log("Value of a "+a[i]+" Index is "+i)
// }

// console.log(a);
// console.log(a.join('@'));
// console.log(a.join(' '));
// console.log(a.join());
// console.log(a2.join());

//foreach

a.forEach((myvalue,i1,kuchbhi)=>{
    console.log(myvalue+"  "+i1+"  "+kuchbhi)
});



