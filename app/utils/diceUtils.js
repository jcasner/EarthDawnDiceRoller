import _ from 'lodash';

import { convertStepToDice } from './stepToDiceConverter';

export function rollDie(numSides) {
  return Math.floor(Math.random() * numSides) + 1;
}

export function getSumOfRolls(diceRolls) {
  if (diceRolls && Array.isArray(diceRolls)) {
    return _.sum(diceRolls);
  } else {
    return Math.max(diceRolls, 0);
  }
}

export function getSumOfAllRolls(manyRolls) {
  if (manyRolls && Array.isArray(manyRolls)) {
    return manyRolls.reduce((sum, current) => {
      return sum + current.total;
    }, 0);
  } else if (manyRolls && manyRolls.total) {
    return manyRolls.total;
  } else if (manyRolls && typeof manyRolls === 'number') {
    return manyRolls;
  }
  return 0;
}

export function explodingDie(numSides) {
  let currentRoll = rollDie(numSides);
  const allRolls = [];

  while (currentRoll === numSides) {
    allRolls.push(currentRoll);
    currentRoll = rollDie(numSides);
    if (allRolls.length >= 4) {
      break;
    }
  }

  allRolls.push(currentRoll);

  return allRolls;
}

export function rollStepDice(step) {
  const stepValue = Number(step);
  switch(stepValue) {
    case 1: {
      dieSides = convertStepToDice(stepValue);
      rolls = rollDie(dieSides[0]) -2;
      return {
          dice: [
            {
              name: `d${dieSides} - 2`,
              rolls: rolls,
              total: getSumOfRolls(rolls)
            },
          ],
          total: getSumOfRolls(rolls)
        };
    }
    case 2: {
      dieSides = convertStepToDice(stepValue);
      rolls = rollDie(dieSides[0]) -1;
      return {
          dice: [
            {
              name: `d${dieSides} - 1`,
              rolls: rolls,
              total: getSumOfRolls(rolls)
            },
          ],
          total: getSumOfRolls(rolls)
        };
    }
    default: {
      let results = [];
      dieSides = convertStepToDice(stepValue);
      dieSides.forEach(die => {
        rolls = explodingDie(die);
        results.push({
          name: `d${die}`,
          rolls: rolls,
          total: getSumOfRolls(rolls)
        })
      });
      return {
          dice: results,
          total: getSumOfAllRolls(results)
        };
    }
  }
}
