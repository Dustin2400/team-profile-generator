const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer('Steve', 2, 'Seveo@hotmail.com', 'Steveo');

    expect(engineer.name).toBe('Steve');
    expect(engineer.id).toBe(2);
    expect(engineer.email).toBe('Seveo@hotmail.com');
    expect(engineer.github).toBe('Steveo');
});

test('gets engineer github', () => {
    const engineer = new Engineer('Steve', 2, 'Seveo@hotmail.com', 'Steveo');

    expect(engineer.getGithub()).toBe('Steveo');
});

test('gets engineer role', () => {
    const engineer = new Engineer('Steve', 2, 'Seveo@hotmail.com', 'Steveo');

    expect(engineer.getRole()).toBe('Engineer');
});