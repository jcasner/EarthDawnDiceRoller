import expect from 'expect';
import _ from 'lodash';

import {
  explodingDie,
  getDiceRollResult,
  getSumOfAllRolls,
  getSumOfRolls,
  rollDie,
  rollStepDice
} from '../app/utils/diceUtils';

describe('rollDie', () => {
  it('returns 1 for a `zero-sided` die', () => {
    expect(rollDie(0)).toEqual(1);
  });

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

describe('getSumOfRolls', () => {
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

describe('getSumOfAllRolls', () => {
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

describe('explodingDie', () => {
  it('Rolls more dice when getting the max value of the current die', () => {
    expect(explodingDie(1)).toEqual([1,1,1,1,1]);
  });

  it("Doesn't roll more dice when getting the max value of the current die", () => {
    expect(explodingDie(0)).toEqual([1]);
  });
});

describe('rollStepDice', () => {
  it('rolls a d0 for unknown steps', () => {
    const resultStep0 = rollStepDice(0);
    const resultStep21 = rollStepDice(21);
    expect(resultStep0.dice.length).toEqual(1);
    expect(resultStep0.dice[0].total).toBeA('number');
    expect(resultStep0.dice[0].name).toEqual('d0');
    expect(_.sum(resultStep0.dice[0].rolls)).toEqual(resultStep0.dice[0].total);
    expect(resultStep21.dice.length).toEqual(1);
    expect(resultStep21.dice[0].total).toBeA('number');
    expect(resultStep21.dice[0].name).toEqual('d0');
    expect(_.sum(resultStep21.dice[0].rolls)).toEqual(resultStep21.dice[0].total);
  });


  it('rolls a d4-2 for step 1', () => {
    const resultStep1 = rollStepDice(1);
    expect(resultStep1.dice.length).toEqual(1);
    expect(resultStep1.dice[0].total).toBeA('number');
    expect(resultStep1.dice[0].name).toEqual('d4-2');
    expect(_.sum(resultStep1.dice[0].rolls)).toEqual(resultStep1.dice[0].total);
  });

  it('rolls a d4-1 for step 2', () => {
    const resultStep2 = rollStepDice(2);
    expect(resultStep2.dice.length).toEqual(1);
    expect(resultStep2.dice[0].total).toBeA('number');
    expect(resultStep2.dice[0].name).toEqual('d4-1');
    expect(_.sum(resultStep2.dice[0].rolls)).toEqual(resultStep2.dice[0].total);
  });

  it('rolls 2d6 for step 8', () => {
    const resultStep8 = rollStepDice(8);
    expect(resultStep8.dice.length).toEqual(2);
    expect(resultStep8.dice[0].total).toBeA('number');
    expect(resultStep8.dice[0].total).toBeGreaterThan(0);
    expect(resultStep8.dice[0].name).toEqual('d6');
    expect(_.sum(resultStep8.dice[0].rolls)).toEqual(resultStep8.dice[0].total);
    expect(resultStep8.dice[1].total).toBeA('number');
    expect(resultStep8.dice[1].total).toBeGreaterThan(0);
    expect(resultStep8.dice[1].name).toEqual('d6');
    expect(_.sum(resultStep8.dice[1].rolls)).toEqual(resultStep8.dice[1].total);
  });

  it('rolls 2d6 for step 8 with karma', () => {
    const resultStep8 = rollStepDice(8, true, 1);
    expect(resultStep8.dice.length).toEqual(3);
    expect(resultStep8.dice[0].total).toBeA('number');
    expect(resultStep8.dice[0].total).toBeGreaterThan(0);
    expect(resultStep8.dice[0].name).toEqual('d6');
    expect(_.sum(resultStep8.dice[0].rolls)).toEqual(resultStep8.dice[0].total);
    expect(resultStep8.dice[1].total).toBeA('number');
    expect(resultStep8.dice[1].total).toBeGreaterThan(0);
    expect(resultStep8.dice[1].name).toEqual('d6');
    expect(_.sum(resultStep8.dice[1].rolls)).toEqual(resultStep8.dice[1].total);
    expect(resultStep8.dice[2].total).toBeA('number');
    expect(resultStep8.dice[2].total).toEqual(5);
    expect(resultStep8.dice[2].name).toEqual('karma (d1)');
    expect(resultStep8.dice[2].rolls.length).toEqual(5);
    expect(_.sum(resultStep8.dice[2].rolls)).toEqual(resultStep8.dice[2].total);
  });

  it('rolls a d20, d8, and d6 for step 8', () => {
    const resultStep20 = rollStepDice(20);
    expect(resultStep20.dice.length).toEqual(3);
    expect(resultStep20.dice[0].total).toBeA('number');
    expect(resultStep20.dice[0].name).toEqual('d20');
    expect(_.sum(resultStep20.dice[0].rolls)).toEqual(resultStep20.dice[0].total);
    expect(resultStep20.dice[1].total).toBeA('number');
    expect(resultStep20.dice[1].name).toEqual('d8');
    expect(_.sum(resultStep20.dice[1].rolls)).toEqual(resultStep20.dice[1].total);
    expect(resultStep20.dice[2].total).toBeA('number');
    expect(resultStep20.dice[2].name).toEqual('d6');
    expect(_.sum(resultStep20.dice[2].rolls)).toEqual(resultStep20.dice[2].total);
  });
});

describe('getDiceRollResult', () => {
  it('rolls an exploding die with no modifier', () => {
    const result = getDiceRollResult(1, 'd1');
    expect(result.name).toEqual('d1');
    expect(result.rolls).toEqual([1,1,1,1,1]);
    expect(result.total).toEqual(5);
  });

  it('rolls an exploding karma die', () => {
    const result = getDiceRollResult('1', 'karma (d1)');
    expect(result.name).toEqual('karma (d1)');
    expect(result.rolls).toEqual([1,1,1,1,1]);
    expect(result.total).toEqual(5);
  });

  it('rolls an exploding die with a 0 modifier', () => {
    const result = getDiceRollResult(1, 'd1', 0);
    expect(result.name).toEqual('d1');
    expect(result.rolls).toEqual([1,1,1,1,1]);
    expect(result.total).toEqual(5);
  });

  it('rolls an exploding die with a -1 modifier', () => {
    const result = getDiceRollResult(1, 'd1', -1);
    expect(result.name).toEqual('d1-1');
    expect(result.rolls).toEqual([0,0,0,0,0]);
    expect(result.total).toEqual(0);
  });

  it('rolls an exploding die with a 1 modifier', () => {
    const result = getDiceRollResult(1, 'd1', 1);
    expect(result.name).toEqual('d1+1');
    expect(result.rolls).toEqual([2,2,2,2,2]);
    expect(result.total).toEqual(10);
  });
})
