// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const { writeFile } = require('fs').promises;
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message:`What is the title of your README?`
    },
    { 
        type: 'input',
        name: 'description',
        message: `What is the description?`
    },
    { 
        type: 'input',
        name: 'installation',
        message: `What are the installation instructions?`
    },
    {
        type: 'input',
        name: 'usage',
        message: `What is the usage information?`
    },
    {
        type: 'list',
        name: 'license',
        message: `Please choose a license`,
        choices: [`Apache_License_2.0`, `GNU_GPLv3`, `MIT`, `ISC`, `GNU_GPLv2`]
    },
    { 
        type: 'input',
        name: 'contributing',
        message: `What is the contribution guidelines?`
    },
    { 
        type: 'input',
        name: 'tests',
        message: `What are the test instructions?`
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username if anybody has a question?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email if anybody has a question?'
    }                   
                
                ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    writeFile( fileName, generateMarkdown(data));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)

    .then((data) => writeToFile('generatedREADME.md', data))
    .then(() => console.log(`Successfully created README.md file!`))
    .catch((err) => console.log(err));
}

// Function call to initialize app
init();
