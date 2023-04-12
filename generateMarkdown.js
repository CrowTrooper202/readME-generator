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
                link= '[License: MIT](https://opensource.org/licenses/MIT)';
                 break;
             case 'Apache':
                link= '[License: Apache](https://opensource.org/licenses/Apache-2.0)';
                 break;
             case 'Boost Software':
                link= '[License: Boost Software](https://www.boost.org/LICENSE_1_0.txt)';
                 break;
             case 'creative Commons Zero':
                link= '[License: CC0-1.0](http://creativecommons.org/publicdomain/zero/1.0/)';
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
- [Tests](#Tests)
- [Questions](#Questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.contribution}

## License

${renderLicenseLink(data.license)}

## Tests

${data.test}

## Questions

If you with to contact me please reach out to my GitHub at [${data.gitHub}](https://github.com/${data.gitHub.toLowerCase().split(' ').join('')}/) or my email ${data.email}

`;
}

module.exports = generateMarkdown;
