// ============================= imports go here ============================== //
const inquirer = require('inquirer');
// ============================= imports go here ============================== //


inquirer
    .prompt([
        {
            type: 'input',
            name: 'manager-name',
            message: "Please input Manager's name."
        }
    ])
    .then(({ name }) => {
        this.manager = new Manager(name);
    })
;