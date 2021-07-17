// TODO: Include packages needed for this application
const inquirer = require ("inquirer");
const fs = require ("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);


function promptUser() {


    return inquirer.prompt([
        {
            type: "input",
            name: "project_title",
            message: "what is your project titile?"
        },



        {
            type: "input",
            name: "description",
            message: "describe your project "
        },

        {
            
        }
    ])
}

// TODO: Create an array of questions for user input
//array ask question the user
// const questions = [
//     {
//         type: `input`,
//         name: `title`,
//         message: `what is title of the project? (required)`,
//         validate: titleInput => {
//             if (titleInput) {
//                 return true;
//             } else {
//                 console.log(`you need to enter a title to continue!`);
//                 return false;
//             }
//         }
//     },

//Description of project

// {
//     type: `input`,
//     name: `description`,
//     message: `Provide a description of the project (this is require)`,
//     validate: descriptionInput => {
//         if (descriptionInput) {
//             return true;
//         } else { 
//             console.log(`you need to provide a project description!`);
//             return false;

//         }
//     }
// },

// Installation Instruction
// {
//     type: `input`,
//     name: `installation`,
//     message: ` How do you install your project/ (this is require)`,
//     validate: installationInput => {
//         if (installationInput) {
//             return true;
        
//         } else {
//             console.log(`you need to provide installation info to continue`);
//             return false;
//         }
//     }
// },
// Usage Infotmation
// {
//     type: `input`,
//     name: `usage`,
//     message: `how do you use this project? (this is require)`,
//     validate: usageInput => {
//         if (usageInput) {
//             return true;
//         } else {
//             console.log(`you need to provide information on how to use project!`);
//             return false;
//         }
//     }
// },

// Contribution Guidlines
// {
//     type: `input`,
//     name: `contribution`,
//     message: `how should people contribute to this project?(this is require)`,
//     validate: contributionInput => {
//         if (contributionInput) {
//             return true;
//         } else {
//             console.log(`you need to provide information on how to contribute to the project!`);
//             return false;
//         }
//     }
// },

// Test Instructions
// {

//     type: `input `,
//     name: `testing`,
//     message: `How do you test this project? (this is require)`,
//     validate: testingInput => {
//         if (testingInput) {
//             return true;
//         } else {
//             console.log(`you need to describe how to test this project!`);
//             return false;
//         }
//     }
// },

//License Options 

// {

//     type: `checkbox`,
//     name: `licensing`,
//     message: `Choose a lincese for your project (this is require)`,
//     choise: [`Apache`, `ISC`, `MIT`, `Mozilla-Public`, `GNU-General-Public`, `Common-Develop`, `none`],
//     validate: licensingInput => {
//         if (licensingInput) {
//             return true;
//         } else {
//             console.log(`You must pick a license for the project!`);
//              return false;
//         }
//     }
// },

//Github Username 

// {

//     type: `input`,
//     name: `github`,
//     message: `Enter your GitHub Username (this is require)`,
//     validate: githubInput => {
//         if (githubInput) {
//             return true;
//         } else {
//             console.log(`Please enter your Github username!`);
//             return false;
//         }
//     }
// },

//Email address
//  {
//      type: `input`,
//      name: `email`,
//      message: `Would you like to include your email? (this is not require)`,
     
//  },
// ];
