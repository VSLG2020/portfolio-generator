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

// const profileDataArgs = process.argv.slice(2);

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


// // Or arrows

// profileDataArr.forEach(profileItem => console.log(profileItem));

// const generatePage = () => 'Name: Jane, Github: janehub';

// console.log(generatePage());

// const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;

// console.log(generatePage('Jane', 'janehub'));


// const generatePage = (userName, githubName) => {
//     return `
//       Name: ${userName}
//       GitHub: ${githubName}
//     `;
//   };

// //   console.log(generatePage('Jane', 'janehub'));


// //   destructing assignment //

// const profileDataArgs = process.argv.slice(2, process.argv.length);

// // const name = profileDataArgs[0];
// // const github = profileDataArgs[1];
// const [name, github] = profileDataArgs;

// console.log(name, github);
// console.log(generatePage(name, github));

// // CREATING HTML//
// const profileDataArgs = process.argv.slice(2, process.argv.length);

// const [name, github] = profileDataArgs;



// const generatePage = (name, github) => {
//     return `
//     <!DOCTYPE html> 
//     <html lang="en"> 
//     <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <meta http-equiv="X-UA-Compatible" content="ie=edge">
//       <title>Portfolio Demo</title>
//     </head>
  
//     <body>
//       <h1>${name}</h1>
//       <h2><a href="https://github.com/${github}">Github</a></h2>
//     </body>
//     </html>
//     `;
//   };



// // console.log(name, github);
// // console.log(generatePage(name, github));

// const fs = require('fs');

// fs.writeFile('index.html', generatePage(name, github), err => {
//     if (err) throw err;
  
//     console.log('Portfolio complete! Check out index.html to see the output!');
//   });

// //   Review the three arguments in the fs.writeFile() function. 
// // The first argument is the file name that will be created, or the output file. 
// // The second argument is the data that's being written: the HTML string template. 
// // The third argument is the callback function that will handle any errors as well as the success message.

//NEW CLEANED UP CODE FROM STUDY GUIDE//

// const fs = require('fs');

// //added statment to link pages (interlope)
// const generatePage = require('./src/page-template.js');


// const profileDataArgs = process.argv.slice(2);

// console.log(profileDataArgs);

// const [name, github] = profileDataArgs;

// console.log(name, github);

// const pageHTML = generatePage(name, github);

// //generate page function was cut and moved to page-template.js//

// fs.writeFile('./index.html', generatePage(name, github), err => {
//   if (err) throw new Error(err);

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });


// USING INQUIRER IN PLACE OF PROCESS.ARGV//


//ADD THE INQUIRER 
const inquirer = require('inquirer');

// const fs = require('fs');
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });

//console.log(inquirer)

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));