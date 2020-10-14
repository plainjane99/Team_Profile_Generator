// ============================= imports go here ============================== //
const { TestScheduler } = require('jest');

const Intern = require('../lib/Intern.js');
// ============================= imports go here ============================== //

test('creates an Intern object', () => {
    const intern = new Intern('Jane Hsu', 12345, "jane@gmail.com", "UofW");

    expect(intern.school).toEqual(expect.any(String));
});

test("gets name of intern's school", () => {
    const intern = new Intern('Jane Hsu', 12345, "jane@gmail.com", "UofW");

    expect(intern.getSchool()).toHaveProperty('school');
})

test("gets intern's role", () => {
    const intern = new Intern('Jane Hsu', 12345, "jane@gmail.com", "UofW");

    expect(intern.getRole()).toHaveProperty('role');
})