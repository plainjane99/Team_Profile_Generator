// ============================= imports go here ============================== //
const inquirer = require('inquirer');
// ============================= imports go here ============================== //

// function to prompt the user for manager data
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'manager-name',
            message: "Please enter Manager's name.",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter Manager's name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'manager-id',
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
            name: 'manager-email',
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
            name: 'manager-phone',
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
    ]);
};

// function to start the application
promptUser();