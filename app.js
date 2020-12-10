// var message = 'Hello Node!';

// var sum = 5 + 3;

// console.log(message);
// console.log(sum);

// var commandLineArgs = process.argv;
// console.log(commandLineArgs);

// var profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

// const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

// const printProfileData = (profileDataArr) => {
//     console.log(profileDataArr);
//   };
  
//   printProfileData(profileDataArgs);


  //examples of arrows used instead of function
  // Using function expression syntax
// const addNums = function(numOne, numTwo) {
//     return numOne + numTwo;
//   };
  
//   // Using new arrow function syntax
//   const addNums = (numOne, numTwo) => {
//     return numOne + numTwo;
//   };


// Notice the lack of parentheses around the `profileDataArr` parameter?
// const printProfileData = profileDataArr => {
//   for (let i = 0; i < profileDataArr.length; i++) {
//     console.log(profileDataArr[i]);
//   }
// };


// const printProfileData = profileDataArr => {
//     // This...
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//       console.log(profileDataArr[i]);
//     }
  
//     console.log('================');
  
//     // Is the same as this...
//     profileDataArr.forEach((profileItem) => {
//       console.log(profileItem)
//     });
//   };


//Or arrows

// profileDataArr.forEach(profileItem => console.log(profileItem));