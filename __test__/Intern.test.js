const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
    const intern = new Intern('Jake', 4, 'Jake@fakemail.con', 'TAMU');

    expect(intern.school).toBe('TAMU');
});

test('gets intern school', () => {
    const intern = new Intern('Jake', 4, 'Jake@fakemail.con', 'TAMU');

    expect(intern.getSchool()).toBe('TAMU');
});

test('get intern role', () => {
    const intern = new Intern('Jake', 4, 'Jake@fakemail.con', 'TAMU');

    expect(intern.getRole()).toBe('Intern');
});