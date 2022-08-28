"use strict"



// #Task1
// let a=["cup","plate","spoon","knife","fork"]
// let i=0
// while(i<a.length){
//     console.log(a[i]);
//     i++;
// }


// Task2
// const a=["xiyar","pomidor","sogan","yerkoku","sarimsaq","semeni"]
// for(let i of a){
//     if(i[0]=="s"){
//         console.log(i);
//     }
// }



// Task3
// let a=1
// let cem=0
// while(a<=100){
//     cem+=a;
//     a++
  
// }
// console.log(cem);


// Task4
// let a=["kitab","defter","qelem","karandas","jurnal","pozan","vereq"]
// for(let i of a){
//     if(i.length==5){
//         console.log(i[i.length-1]);
//     }
// }


// Task5
// let a=100000
// while(a>0){
//     if(a%9999==0){
//         console.log(a);

//         break
//     }
//     a-=1
// }



// Task6
let a="men her gun Javascript oyrenirem"
// let samit="qwrtypsdfghjklzxcvbnm"
let sait= ['a', 'o', 'u','i','e']

// for(let i of a){
//   for(let j of sait){
//     if(i!==j){
//         console.log(i);
//     }
//   }
 
//   }
let sentence = " ";


for (let i = 0; i < a.length; i++) {
    if (!sait.includes(a[i])) {
        sentence += a[i];
    }
}
console.log(sentence);












