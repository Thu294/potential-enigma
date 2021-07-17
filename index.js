// TODO: Include packages needed for this application
const inquirer = require (`inquirer`);
const fs = require (`fs`);
const generateMarkdown = require (`./utils/generateMarkdown`);
const { title } = require("process");


// TODO: Create an array of questions for user input
//array ask question the user
const questions = [
    {
        type: `input`,
        name: `title`,
        message: `what is title of the project? (required)`,
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log(`you need to enter a title to continue!`);
                return false;
            }
        }
    },

//Description of project

{
    type: `input`,
    name: `description`,
    message: `Provide a description of the project (this is require)`,
    validate: descriptionInput => {
        if (descriptionInput) {
            return true;
        } else { 
            console.log(`you need to provide a project description!`);
            return false;

        }
    }
},

// Installation Instruction
{
    type: `input`,
    name: `installation`,
    message: ` How do you install your project/ (this is require)`,
    validate: installationInput => {
        if (installationInput) {
            return true;
        
        } else {
            console.log(`you need to provide installation info to continue`);
            return false;
        }
    }
},
// Usage Infotmation
{
    type: `input`,
    name: `usage`,
    message: `how do you use this project? (this is require)`,
    validate: usageInput => {
        if (usageInput) {
            return true;
        } else {
            console.log(`you need to provide information on how to use project!`);
            return false;
        }
    }
},

// Contribution Guidlines
{
    type: `input`,
    name: `contribution`,
    message: `how should people contribute to this project?(this is require)`,
    validate: contributionInput => {
        if (contributionInput) {
            return true;
        } else {
            console.log(`you need to provide information on how to contribute to the project!`);
            return false;
        }
    }
},


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
