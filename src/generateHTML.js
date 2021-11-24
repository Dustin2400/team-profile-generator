const Engineer = require('../lib/Engineer');
const Enigneer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

function generateHTML(data) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./style.css">
        <title>My Team</title>
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <main>
            ${createCards(data)}
        </main>
    </body>
    </html>
    `


}

function createCards(data) {
    let cardHTML = ``;
    for (i=0; i<data.length; i++) {
        if (data[i].github) {
            const employee = new Engineer(data[i].name, data[i].id, data[i].email, data[i].github);
            const employeeHTML = generateCard(employee, 'Engineer');
            cardHTML += employeeHTML;
        } else if (data[i].school) {
            const employee = new Intern(data[i].name, data[i].id, data[i].email, data[i].school);
            const employeeHTML = generateCard(employee, 'Intern');
            cardHTML += employeeHTML;
        } else {
            const employee = new Manager(data[i].name, data[i].id, data[i].email, data[i].officeNum);
            const employeeHTML = generateCard(employee, 'Manager');
            cardHTML += employeeHTML;
        }
    }
    return cardHTML;
}

function generateCard(employee, type) {
    return `
        <div class='card'>
            <div class="cardHeader">
                <h2>${employee.getName()}</h2>
                <h3>${type}</h3>
            </div>
            <div>
                <p>ID: ${employee.getId()}</p>
                <a href="mailto:${employee.getEmail()}">Email: ${employee.getEmail()}</a>
                ${getSpecificHTML(employee, type)}
            </div>
        </div>
    `
}

function getSpecificHTML(employee, type) {
    if (type === 'Manager') {
        return `<p>Office number: ${employee.officeNum}</p>`
    } else if (type === 'Intern') {
        return `<p>School: ${employee.getSchool()}</p>`
    } else if (type === 'Engineer') {
        return `<a href="https://github.com/${employee.getGithub()}" target="_blank">GitHub: ${employee.getGithub()}</a>`
    }
}

module.exports = generateHTML;