// ============================= imports go here ============================== //
const Employee = require('./Employee');
// ============================= imports go here ============================== //

// Engineer class uses Employee class as a blueprint
class Engineer extends Employee {

    constructor(name, id, email, gitHub) {

        // call to parent constructor here
        super(name, id, email);

        // Manager class also includes an office number
        this.gitHub = gitHub;

    }

    getGitHub() {
        return this.gitHub;
    }

    // this method overwrites default Employee role with Engineer role
    getRole(){
        return 'engineer';
    }
    
}

module.exports = Engineer;