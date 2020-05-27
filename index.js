const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')
const markdown = require('./utils/generateMarkdown')
const questions = [
{
    type: "input",
    name: "title",
    message:"What is the project title?"
}, {
    type: "input",
    name: "description",
    message: "What is a description of the project"
}, {
    type: "input",
    name: "installation",
    message: "What is in the installation"
}, {
    type: "input",
    name: "usage",
    message: "How is this project used"
},{
    type: "input",
    name: "license",
    message: "What is the license for the project"
},{
    type: "input",
    name: "contributing",
    message: "Who contributed to the project"
},{
    type: "input",
    name: "tests",
    message: "Tests done to this project"
}
];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

function init() {
    inquirer.prompt(questions).then(answers => {
        writeToFile('README.md', markdown({...answers}))
    })
}

init();
