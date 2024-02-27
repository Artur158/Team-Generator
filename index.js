const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require('inquirer');

const path = require("path");
const fs = require("fs");

const Employee = require('./lib/Employee.js');

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const teamMembers = [];

function promptManager() {
    console.log('Please enter the team manager\'s information:');
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Manager\'s name:'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Manager\'s employee ID:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Manager\'s email address:'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Manager\'s office number:'
        }
    ]).then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        promptMenu();
    });
}

function promptEngineer() {
    console.log('Please enter the engineer\'s information:');
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Engineer\'s name:'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Engineer\'s employee ID:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Engineer\'s email address:'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Engineer\'s GitHub username:'
        }
    ]).then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        teamMembers.push(engineer);
        promptMenu();
    });
}

function promptIntern() {
    console.log('Please enter the intern\'s information:');
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Intern\'s name:'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Intern\'s employee ID:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Intern\'s email address:'
        },
        {
            type: 'input',
            name: 'school',
            message: 'Intern\'s school:'
        }
    ]).then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamMembers.push(intern);
        promptMenu();
    });
}

function promptMenu() {
    inquirer.prompt({
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: ['Add an engineer', 'Add an intern', 'Finish building the team']
    }).then(answer => {
        switch (answer.action) {
            case 'Add an engineer':
                promptEngineer();
                break;
            case 'Add an intern':
                promptIntern();
                break;
            case 'Finish building the team':
                generateHTML();
                break;
        }
    });
}

function generateHTML() {
    const html = render(teamMembers);
    fs.writeFile(outputPath, html, err => {
        if (err) {
            console.error('Error writing HTML file:', err);
        } else {
            console.log('Team HTML file generated successfully:', outputPath);
            // Prompt menu after HTML file is generated
            promptMenu();
            closeApp();
        }
    });
}

promptManager();
