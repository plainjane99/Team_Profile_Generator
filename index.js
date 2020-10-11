// ============================= imports go here ============================== //
const inquirer = require('inquirer'); // access the inquirer module //
const Manager = require('./lib/Manager.js');
// assign the html template export to the variable "generatePage"
const generatePage = require('./src/page-template.js');
// ============================= imports go here ============================== //


// function that starts the application
// prompts the user for manager data
const promptUser = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'fullname',
                message: "Please enter Manager's Full Name.",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter Manager's Full Name.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "Please enter Manager's ID#.",
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log("Please enter an ID#.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter Manager's email.",
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log("Please enter an email.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'phone',
                message: "Please enter Manager's phone number XXX-XXX-XXXX.",
                validate: phoneInput => {
                    if (phoneInput) {
                        return true;
                    } else {
                        console.log("Please enter a phone number.");
                        return false;
                    }
                }
            }
        ])
        .then(managerData => {
            const manager = new Manager(managerData.fullname, managerData.id, managerData.email, managerData.phone);
            console.log(manager);
            const pageHTML = generatePage(manager);
            console.log(pageHTML);
        })
    
    ;
};

// function that prompts the user for employee data
// each employee (manager, engineer, intern) gets pushed into the array
// when finished choosing employees, that's when we would call the function to write the page
// function receives team members as parameters 


// function that prompts for team member data
const promptTeam = teamData => {
    return teamData;
}

// function to start the application
// promptUser outputs an object
promptUser()
    // recursively call promptTeam for as many team members as the user wants to add
    // each team member will be pushed into a team member array in a data object
    // .then(promptTeam)
    // pass team member data into generatePage function and return html code
    // .then(teamData => {
    //     return generatePage(teamData);
    // })
    // pass html code to writeFile
    // .then(pageHTML => {
    //     return msWriteProfilerMark(pageHTML);
    // })

    // .catch(err => {
    //     console.log(err);
    // })
;