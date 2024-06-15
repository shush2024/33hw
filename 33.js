// ՆԿարագրել ֆունկցիա, որն իրական թվերի արգումենտում ստանում է իրսկսն թվերի զանգված և վեևադարձնում է
// ա)true եթե զանգվածը պարունակում է կրկնվող տարրեր, false եթե չի պարունակում

// function f(arr) {
//     for(let i = 0; i < arr.length;i++){
//         for(let k = i + 1; k < arr.length; k++){
//             if(arr[i] === arr[k]){
//                 return true
//             }
//         }
//     }
//     return false

// }
// console.log(f([1,2,3,4,4]));

// բ)հաշվել չկրկնվող տարրերի քանակը

// function f(arr) {
//     let uniqueCount = 0;
//     for(let i = 0; i < arr.length;i++){
//         let count = 0;
//         for(let k = 0; k < arr.length; k++){
//             if(arr[i] === arr[k]){
//                 count++;
//             }
           
               
//         }
//         if(count === 1){
//             uniqueCount++;
//         }
//     }
//     return uniqueCount;
   

// }
// console.log(f([1,2,3,4,5]));