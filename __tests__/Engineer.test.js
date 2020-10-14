// ============================= imports go here ============================== //
const { TestScheduler } = require('jest');

const Engineer = require('../lib/Engineer.js');
// ============================= imports go here ============================== //

test('creates an Engineer object', () => {
    const engineer = new Engineer('Jane Hsu', 12345, "jane@gmail.com", "plainjane99");

    expect(engineer.gitHub).toEqual(expect.any(String));
});

test("gets engineer's gitHub", () => {
    const engineer = new Engineer('Jane Hsu', 12345, "jane@gmail.com", "plainjane99");

    expect(engineer.getGitHub()).toHaveProperty('gitHub');
})

test("gets engineer's role", () => {
    const engineer = new Engineer('Jane Hsu', 12345, "jane@gmail.com", "plainjane99");

    expect(engineer.getRole()).toEqual(expect.any(String));
})