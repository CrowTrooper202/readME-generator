// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let link ; 
    switch (license) {
            case 'MIT':
                link= "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
                 break;
             case 'Apache':
                link= '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
                 break;
             case 'Boost Software':
                link= '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
                 break;
             case 'creative Commons Zero':
                link= '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)';
                 break;
            default:
                link= 'no license selected'
                 break;
         }
         return link
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    let link ; 
    switch (license) {
            case 'MIT':
                link= "![License: MIT](https://opensource.org/licenses/MIT)";
                 break;
             case 'Apache':
                link= '![License](https://opensource.org/licenses/Apache-2.0)';
                 break;
             case 'Boost Software':
                link= '![License](https://www.boost.org/LICENSE_1_0.txt)';
                 break;
             case 'creative Commons Zero':
                link= '![License: CC0-1.0](http://creativecommons.org/publicdomain/zero/1.0/)';
                 break;
            default:
                link= 'no license selected'
                 break;
         }
         return link
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.fileName}${renderLicenseBadge(data.license)}

## Description

${data.discription}

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.contribution}

## License

${renderLicenseLink(data.license)}

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.

`;
}

module.exports = generateMarkdown;
