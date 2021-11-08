const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");
//gets the stored variable /methds from generateMarkdown due to module.export in its file 

//Create an array of questions for user input
const promptUser = () => {

    return inquirer.prompt([{
            type: 'input',
            name: 'title',
            message: "What is the title for this project?"
        },
        {
            type: 'input',
            name: 'description',
            message: "Provide a description explaining your project."
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What are the steps required to use your project?'
        },
        {
            type: "input",
            name: "contributions",
            message: "Are there any contribution guidelines that need to be followed?"
        },
        {
            type: "input",
            name: "test",
            message: "Are there any instructions in regards to testing?"
        },
        {
            type: "list",
            name: "license",
            message: 'Please select the licensing required for this application.',
            choices: [
                "Apache License 2.0",
                "GNU General Public License v3.0",
                "MIT License",
                "None Required"
            ]
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email."
        },
        {
            type: "input",
            name: "git",
            message: "Please provide your GitHub Profile username."
        },
    ])
};

const init = () => {
    promptUser()
        // .then((data) => fs.writeFile('README.md', generateMarkdown(data))) --does not work
        .then((answers) => fs.writeFileSync('README.md', generateMarkdown(answers)))
        .then(() => console.log("Nice job, you successfully wrote the README.md"))
        .catch((err) => console.error(err))
};



// Function call to initialize app
init();