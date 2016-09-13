import expect from 'expect';
import {
  getSumOfAllRolls,
  getSumOfRolls,
  rollDie
} from '../app/utils/diceUtils';

describe('Roll a single die', () => {
  it('rolls a one-sided die', () => {
    expect(rollDie(1)).toEqual(1);
  });

  it('rolls a two-sided die', () => {
    expect(rollDie(2))
      .toBeA('number')
      .toBeLessThan(3)
      .toBeGreaterThan(0);
  });
});

describe('Get the sume of several dice rolls', () => {
  it('Sums an array of dice rolls', () => {
    expect(getSumOfRolls([1,2])).toEqual(3);
    expect(getSumOfRolls([1,2,3,4])).toEqual(10);
  });

  it('Returns the single dice roll', () => {
    expect(getSumOfRolls(1)).toEqual(1);
  });

  it('Returns 0 for a negative number', () => {
    expect(getSumOfRolls(-1)).toEqual(0);
  });

  it('Returns 0 for a null value', () => {
    expect(getSumOfRolls(null)).toEqual(0);
  });
});

describe('Get a total from the sums of several dice rolls', () => {
  it('Sums an array of dice roll results', () => {
    const results = [
      {
        total: 1
      },
      {
        total: 2
      }
    ]
    expect(getSumOfAllRolls(results)).toEqual(3);
  });

  it('Returns the value of an array with length 1 of dice roll results', () => {
    const results = [
      {
        total: 1
      }
    ]
    expect(getSumOfAllRolls(results)).toEqual(1);
  });

  it('Returns the value of a single result', () => {
    expect(getSumOfAllRolls({total: 1})).toEqual(1);
  });

  it('Returns the value of a number', () => {
    expect(getSumOfAllRolls(1)).toEqual(1);
  });

  it('Returns 0 when passed a string', () => {
    expect(getSumOfAllRolls('a')).toEqual(0);
  });

  it('Returns 0 when passed null', () => {
    expect(getSumOfAllRolls(null)).toEqual(0);
  });
});
