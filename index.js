// Kata1

// const arrayOfSheep = [true, true, true, false,
//     true, true, true, true,
//     true, false, true, false,
//     true, false, false, true,
//     true, true, true, true,
//     false, false, true, true
// ];

// let total;

// countSheeps(arrayOfSheep)

// function countSheeps(arrayOfSheep) {
//     arrayOfSheep = arrayOfSheep.map(function (sheepPlace) {
//         if (sheepPlace === true) {
//             sheepPlace = 1
//         } else {
//             sheepPlace = 0
//         }
//         return sheepPlace;
//     })
//     total = arrayOfSheep.reduce(function (sum, current) {
//         return sum + current;
//     }, 0);
//     return total;
//     // console.log(total);
//     // total == 17 ? return "There are 17 sheeps in total" : return "There aren't 17 sheeps in total"

// }
// console.log(total);

// kata 2
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 

// let numbers = [1, 2, 2]
// let total;
// squareSum(nambers)
// function squareSum(numbers) {
//     return numbers.reduce((sum,num) => sum + (num * num), 0);
// }
// console.log(total);

// kata 3
// let numbers = [1, 5.2, 4, 0, -1];

// console.log(sum(numbers));
// function sum(numbers) {
//     "use strict";
//     let total = numbers.reduce((sum, number) => sum + number, 0);
//     if (isNaN(total)) {
//         return 0
//     } else {
//         return `${total}`
//     }
// };

// kata 4

// let number = 5;
// console.log(makeNegative (number));
// function makeNegative (number) {
// if (0 + number< 0){
//     return -number
// }
// else if (0 + number> 0) {
//     return +number
// }
// else {
//     return 0
// }
// }

// kata 7

// const x = "Пожалуйста, посетите веб-сайт Microsoft! Microsoft — известная американская компания.";
// noSpace(x)
// function noSpace(x) {
// return x.replace(/\s/g, "")
// }

// kata 8
// let array = [];

// console.log(invert(array));

// function invert(array) {
    
//    return array ==[]? []: array = array.map((i) => -i)
// }

// kata 11
// "apple ban" --> ["apple 5", "ban 3"]

// let str = "apple ban";
// console.log(addLength(str));
// function addLength(str) {
//    return str.split(/\s+/).map((elem)=>`${elem} ${elem.length}`);

//     }

// 7kyu
// let word1 = `versed`;
// let word2 = `vers`;

// console.log(mispelled(word1, word2));

// function mispelled(word1, word2) {
//    if ((word1.length - word2.length == 0)||(Math.abs(word1.length - word2.length) ==1)){
//       let sum = Array.from(word1).concat(Array.from(word2)).sort().filter((element, index, array) => (array[index] !== array[index + 1]) && (array[index] !== array[index - 1]));
//       if (sum.length < 3) {
//          return true
//       } else {
//          return false
//       }}
//       else {
//          return false
//       }
// }

const arr = [];
const n = 10;
let nonInt = [];

// for (let i=1; i<=n; i++){
//     arr.push(i);
    
// }
// nonInt = arr.filter((i)=>((i%2!==0)&&(i%3!==0)&&(i%5!==0)));
// for (const i of nonInt) { console.log(i);
    
// }
// console.log(arr);
// console.log(nonInt);
// realNumbers(n)
// function realNumbers(n){
//     let S = []; 
// 	S[0] = 1; // 1 - не простое число
// 	// заполняем решето единицами
// 	for(k=2; k<=n; k++)
// 		S[k]=1;
	
// 	for(k=2; k*k<=n; k++){
// 		// если k - простое (не вычеркнуто)
// 		if(S[k]==1){ 
// 			// то вычеркнем кратные k
// 			for(l=k*k; l<=n; l+=k){
// 				S[l]=0;
// 				}
// 			}
// 		}
//         console.log(S); 
// 	return S.length;
// }
