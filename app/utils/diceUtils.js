import _ from 'lodash';

import { convertStepToDice } from './stepToDiceConverter';

export function rollDie(numSides) {
  return numSides ? Math.floor(Math.random() * numSides) + 1 : 0;
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

export function explodingDie(numSides, modifier = 0) {
  let currentRoll = rollDie(numSides);
  const allRolls = [];

  while (currentRoll === numSides) {
    allRolls.push(currentRoll + modifier);
    currentRoll = rollDie(numSides);
    if (allRolls.length >= 4) { // don't roll indefinitely in case there's a bug
      break;
    }
  }

  allRolls.push(currentRoll + modifier);

  return allRolls;
}

export function getDiceRollResult(dieSides, dieName, modifier = 0) {
  const rolls = explodingDie(parseInt(dieSides), modifier);
  const modifierString = modifier ? ( modifier > 0 ? '+' + modifier : modifier ) : '';
  return {
    name: `${dieName}` + `${modifierString}`,
    rolls,
    total: getSumOfRolls(rolls)
  };
}

export function rollStepDice(step, includeKarmaDie = false, karmaDieSides = 0) {
  const stepValue = Number(step);
  const dieSides = convertStepToDice(stepValue);
  const karmaRoll = includeKarmaDie ?
    getDiceRollResult(karmaDieSides, `karma (d${karmaDieSides})`) : null
  let rolls;
  switch(stepValue) {
    case 1: {
      const results = [getDiceRollResult(dieSides, `d${dieSides}`, -2)];
      if (karmaRoll) {
        results.push(karmaRoll);
      }
      return {
          dice: results,
          total: getSumOfAllRolls(results)
        };
    }
    case 2: {
      const results = [getDiceRollResult(dieSides, `d${dieSides}`, -1)];
      if (karmaRoll) {
        results.push(karmaRoll);
      }
      return {
          dice: results,
          total: getSumOfAllRolls(results)
        };
    }
    default: {
      const results = [];
      dieSides.forEach(die => {
        results.push(getDiceRollResult(die, `d${die}`));
      });
      if (karmaRoll) {
        results.push(karmaRoll);
      }
      return {
          dice: results,
          total: getSumOfAllRolls(results)
        };
    }
  }
}
