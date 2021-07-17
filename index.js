// TODO: Include packages needed for this application
const inquirer = require (`inquirer`);
const fs = require (`fs`);
const generateMarkdown = require (`./utils/generateMarkdown`);
const { title } = require("process");


// TODO: Create an array of questions for user input
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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
