import Sum from './app'

describe('Testing Sum function', () => {

  // If the two parameters are numbers
  it('Should return the sum of two numbers', () => {
    const a = 5;
    const b = 10;
    expect(Sum(a,b)).toBe(a+b);
  })

  // If one of the parameters isn't a number
  it('Should return an error message', () => {
    const a = 'string';
    const b = 5;
    expect(Sum(a,b)).toContain('One of the parameters is not a number');
  })

  // If both parameters aren't numbers
  it('Should return an error message', () => {
    const a = 'string';
    const b = 'string';
    expect(Sum(a,b)).toContain(`Both parameters aren't numbers`);
  })
})