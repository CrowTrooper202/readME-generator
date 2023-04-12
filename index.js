// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
// TODO: Create an array of questions for user input
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
                name: 'installation',
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
            },
        ])

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const fileName = `${data.fileName.tolowercae().split(' ').join('')}.md`

    fs.writeFile(fileName, JSON.stringify(questions.data, null, '\t', (err) =>
        err ? console.log(err) : console.log('success!')))
}

// TODO: Create a function to initialize app
function init() {
    writeToFile()
 }

// Function call to initialize app
init();

// switch (questions.choices) {
//     case 'MIT':
//         // fs.appendFile('fileName.md', "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" );
//         break;
//     case 'Apache':
//         // fs.appendFile('fileName.md', '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)');
//         break;
//     case 'Boost Software':
//         // fs.appendFile('fileName.md', '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)');
//         break;
//     case 'creative Commons Zero':
//         // fs.appendFile('fileName.md', '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)');
//         break;
//     default:
//         break;
// }