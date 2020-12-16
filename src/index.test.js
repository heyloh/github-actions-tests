const index = require('./index');

describe('SayMyName', () => {
  test('Should return a "Hello" for the name.', () => {
    const name = 'Lohana';
    const result = index.sayMyName(name);
    expect(result).toEqual(`Hello ${name}`);
  });
});