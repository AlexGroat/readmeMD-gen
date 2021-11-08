// TODO: Create a function that returns a license badge based on which license is passed in If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license == 'None Required') {
        return '';

    } else if (license === "Apache License 2.0") {
        return `![license: Apache License 2.0](https://img.shields.io/badge/license-Apache%20License%202.0-green)`;

    } else if (license === "GNU General Public License v3.0") {
        return `![license: GNU General Public License v3.0](https://img.shields.io/badge/license-GNU%20General%20Public%20License%20v3.0-red)`

    } else if (license === "MIT License") {
        return `![license: MIT](https://img.shields.io/badge/license-MIT-blue)`

    } else if (license === "Mozilla Public License 2.0") {
        return `![license: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;

    } else if (license === "Boost Software License 1.0") {
        return `![license: Boost Software License 1.0](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`;

    } else if (license === "ISC License (ISC)") {
        return `![license: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`;
    }

}
renderLicenseBadge()


//Create a function that returns the license link
function renderLicenseLink(license) {
    if (license == 'None Required') {
        return '';

    } else if (license === "Apache License 2.0") {
        return `[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)`;

    } else if (license === "GNU General Public License v3.0") {
        return `[GNU General Public License v3.0](https://opensource.org/licenses/GPL-2.0)`;

    } else if (license === "MIT License") {
        return `[MIT License](https://opensource.org/licenses/MIT)`;

    } else if (license === "Mozilla Public License 2.0") {
        return `[Mozilla Public License 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;

    } else if (license === "Boost Software License 1.0") {
        return `[Boost Software License 1.0](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`;

    } else if (license === "ISC License (ISC)") {
        return `[ISC License (ISC)](https://img.shields.io/badge/License-ISC-blue.svg)`;

    }
}
renderLicenseLink()


//Create a function to generate markdown for README
function generateMarkdown(data) {

    return `# ${data.title}

${renderLicenseBadge(data.license)}

## Table of Contents 
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributions](#Contributions)
- [Tests](#Tests)
- [Questions](#Questions)
- [License](#License)
    
## Description
${data.description}
    
## Installation
${data.installation}
    
## Usage 
${data.usage}
        
## Contributions
${data.contributions}
    
## Tests
${data.test}
    
## Questions 
Questions can be directed to my Github (https://github.com/${data.git}) or feel free to email me at ${data.email} 

## License 
This application is covered under ${renderLicenseLink(data.license)} 
    
`

}


//module.export is an object we use to store variables or a method. 
module.exports = generateMarkdown;