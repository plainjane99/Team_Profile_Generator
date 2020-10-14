// ============================= imports go here ============================== //
const { TestScheduler } = require('jest');

const Manager = require('../lib/Manager.js');
// ============================= imports go here ============================== //

test('creates a Manager object', () => {
    const manager = new Manager('Jane Hsu', 12345, "jane@gmail.com", "321-456-7890");

    expect(manager.officeNumber).toEqual(expect.any(String));
});

test("gets manager role", () => {
    const manager = new Manager('Jane Hsu', 12345, "jane@gmail.com", "321-456-7890");

    expect(manager.getRole()).toEqual(expect.any(String));
})