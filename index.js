const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML.js')
const fs = require('fs');
const data = [];

const managerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of this project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your project manager's name");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is this employee id?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter the employee id!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is this employee's email?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter an email address!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNum',
            message: "What is the manager's office number?",
            validate: officeNumInput => {
                if (officeNumInput) {
                    return true;
                } else {
                    console.log('Please enter an office number!');
                    return false;
                }
            }
        }
    ]);
}

function addEmployees() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "What is this employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is this employee's name",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your project employee's name");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is this employee id?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter the employee id!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is this employee's email?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter an email address!')
                    return false;
                }
            }
        }
    ])
    .then(answers => {
        if (answers.role === 'Engineer') {
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'github',
                    message:"What is this engineer's github username?",
                    validate: githubInput => {
                        if(githubInput) {
                            return true;
                        } else {
                            console.log("Please enter the github username!");
                            return false;
                        }
                    }
                }
            ])
            .then (engineerData => {
                answers.github = engineerData.github;
                return answers;
            })
        }
        if (answers.role === 'Intern') {
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'school',
                    message:"What is this intern's school?",
                    validate: schoolInput => {
                        if(schoolInput) {
                            return true;
                        } else {
                            console.log("Please enter the school!");
                            return false;
                        }
                    }
                }
            ])
            .then (internData => {
                answers.school = internData.school;
                return answers;
            })
        }
    })
    .then(employeeData => {
        data.push(employeeData);
    })
    .then( () => {
        return inquirer.prompt([
            {
                type: 'confirm',
                name: 'addEmployeeConfirm',
                message: 'Would you like to add another employee?',
            }
        ])
        .then(answer => {
            if(!answer.addEmployeeConfirm) {
                return
            }
            return addEmployees()
            
        });
    });
}

managerPrompt()
    .then(answers => {
        data.push(answers);
        return addEmployees();
    })
    .then( () => {
        return generateHTML(data);
    })
    .then(generatedHTML => {
        fs.writeFile('./dist/index.html', generatedHTML, err => {
            if (err) {
                reject(err);
                return;
            }
            console.log("File created!")
        })
    })