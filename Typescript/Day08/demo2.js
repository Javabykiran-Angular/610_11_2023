//array basics
// array is dynamically growable & shrinkable
// no any fixed size array 
// array is homogenous as well as hetrogenous 
var a = [2, 5, 6, 8];
var a1 = [];
var a2 = [2.5, 'Sumit', true];
var a3 = [2.5, 45, 8];
// for(let i=0;i<a.length;i++){
//     console.log("Value of a "+a[i]+" Index is "+i)
// }
// console.log(a);
// console.log(a.join('@'));
// console.log(a.join(' '));
// console.log(a.join());
// console.log(a2.join());
//foreach
a.forEach(function (myvalue, i1, kuchbhi) {
    console.log(myvalue + "  " + i1 + "  " + kuchbhi);
});
