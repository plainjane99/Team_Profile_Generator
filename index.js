// ============================= imports start here ============================== //
const inquirer = require('inquirer'); // access the inquirer module //
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
// assign the html template export to the variable "generatePage"
const generatePage = require('./src/page-template.js');
// ============================= imports end here ============================== //

// array of questions that are common to all employees
const questions = [
    {
        type: 'input',
        name: 'fullname',
        message: "Please enter employee's Full Name.",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter employee's Full Name.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Please enter employee's ID#.",
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
        message: "Please enter employee's email.",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter an email.");
                return false;
            }
        }
    },
];

// question specifically for manager
const phoneQuestion = 
{
    type: 'input',
    name: 'phone',
    message: "Please enter office phone number.",
    validate: phoneInput => {
        if (phoneInput) {
            return true;
        } else {
            console.log("Please enter a phone number.");
            return false;
        }
    }
};

// question specifically for engineer
const gitHubQuestion = 
{
    type: 'input',
    name: 'gitHub',
    message: "Please enter employee's GitHub name.",
    validate: gitHubInput => {
        if (gitHubInput) {
            return true;
        } else {
            console.log("Please enter a GitHub name.");
            return false;
        }
    }
};

// question specifically for intern
const schoolQuestion = 
{
    type: 'input',
    name: 'school',
    message: "Please enter intern's school.",
    validate: schoolInput => {
        if (schoolInput) {
            return true;
        } else {
            console.log("Please enter a school name.");
            return false;
        }
    }
};

const managerQuestions = [...questions, phoneQuestion];
const engineerQuestions = [...questions, gitHubQuestion];
const internQuestions = [...questions, schoolQuestion];

// function that starts the application
// prompts the user for manager data
const promptUser = () => {

    console.log("Welcome to Team Profile Generator! Please start by entering manager information.");

    return inquirer.prompt(managerQuestions)

        .then(managerData => {
            // constructs new instance of manager
            const teamManager = new Manager(managerData.fullname, managerData.id, managerData.email, managerData.phone);
            // adds the manager role to the object
            teamManager.role = teamManager.getRole();
            return teamManager;

        })
    
    ;
};

// function that prompts for engineer data
const promptEngineer = (teamData) => {

    // prompts for input then adds it to the teamData object
    return inquirer.prompt(engineerQuestions)
        .then(engineerData => {
            // constructs new instance of engineer
            const engineer = new Engineer(engineerData.fullname, engineerData.id, engineerData.email, engineerData.gitHub);
            // adds the engineer role to the object
            engineer.role = engineer.getRole();

            teamData.employees.push(engineer);
            return promptTeam(teamData);
        })
    ;
};

// function that prompts for intern data
const promptIntern = (teamData) => {

    // prompts for input then adds it to the teamData object
    return inquirer.prompt(internQuestions)
        .then(internData => {
            // constructs new instance of intern
            const intern = new Intern(internData.fullname, internData.id, internData.email, internData.school);
            // adds the intern role to the object
            intern.role = intern.getRole();

            teamData.employees.push(intern);
            return promptTeam(teamData);
        })
    ;
};

// function that prompts for team member data
const promptTeam = teamData => {
    // console.log(teamData);

    // add a new array to store employees at first creation
    if (!teamData.employees) {
        teamData.employees = [];
    }
    // console.log(teamData);

    return inquirer
        .prompt([
            {
                type: 'list',
                message: 'Which would you like to add?',
                name: 'employeeType',
                choices: ['Engineer', 'Intern', 'None']
            }
        ])
        .then(choiceData => {
            const { employeeType } = choiceData;

            if (employeeType === 'Engineer') {
                promptEngineer(teamData);
            } 
            else if (employeeType === 'Intern') {
                promptIntern(teamData);
            }
            else {
                console.log(choiceData);
                console.log(teamData);
                // return generatePage(teamData); // this seems to work but i don't know if it generated the page correctly
                console.log(generatePage(teamData));
            }
        })
    ;
};

// function to start the application
// promptUser outputs an object
promptUser()
    // recursively call promptTeam for as many team members as the user wants to add
    // each team member will be pushed into a team member array in a data object
    .then(promptTeam)
    // pass team member data into generatePage function and return html code
    // .then(teamData => {
    //     const printHMTL = generatePage(teamData);
    //     console.log(printHMTL);
    // })
    // pass html code to writeFile
    // .then(pageHTML => {
    //     return msWriteProfilerMark(pageHTML);
    // })

    // .catch(err => {
    //     console.log(err);
    // })
;