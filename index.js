// ============================= imports go here ============================== //
const inquirer = require('inquirer');
// ============================= imports go here ============================== //


inquirer
    .prompt([
        {
            type: 'input',
            name: 'manager-name',
            message: "Please input Manager's name."
        },
        {
            type: 'input',
            name: 'manager-id',
            message: "Please input Manager's ID#."
        },
        {
            type: 'input',
            name: 'manager-email',
            message: "Please input Manager's email."
        }
    ])
    // .then(({ name }) => {
    //     this.manager = new Manager(name);
    // })
;