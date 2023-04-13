// Included packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
//created a seperat page to generate the markdown document and switch loops
const generateMarkdown = require('./generateMarkdown.js')
// Created an array of questions for user input
const questions = [
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What do want as the name of the ReadMe?',
                name: 'fileName',
            },
            {
                type: 'input',
                message: 'What do want in the discription section?',
                name: 'discription',
            },
            {
                type: 'input',
                message: 'What do want in the installation section?',
                name: 'installation',
            },
            {
                type: 'input',
                message: 'What do want in the Useage section?',
                name: 'usage',
            },
            {
                type: 'input',
                message: 'What do want in the guide line section?',
                name: 'guideLine',
            },
            {
                type: 'input',
                message: 'What do want in the contribution section?',
                name: 'contribution',
            },
            {
                type: 'input',
                message: 'What do want in the test section?',
                name: 'test',
            },
            {
                type: 'input',
                message: 'What is you GitHub username?',
                name: 'gitHub',
            },
            {
                type: 'input',
                message: 'What is your email?',
                name: 'email',
            },
            {
                type: 'list',
                message: 'What license do you want to use?',
                name: 'license',
                choices: ['MIT', 'Apache', 'Boost Software', "creative Commons Zero", 'None']
            }
        ])
        .then((data) => {
    
            const name = `ReadME.md`
            fs.writeFile(name, generateMarkdown(data), (err) =>
                err ? console.log(err) : console.log('success!'))
        })

];

//removed unnessary functions 

