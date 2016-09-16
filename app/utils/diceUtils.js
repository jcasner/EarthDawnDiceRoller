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

export function addKarmaDie(dieRollObject, includeKarmaDie, karmaDieSides) {
  if (includeKarmaDie) {
    const karmaDieRoll = explodingDie(karmaDieSides);
    const total = getSumOfRolls(karmaDieRoll);
    dieRollObject.dice.push(
      {
        name: `karma(d${karmaDieSides})`,
        rolls: karmaDieRoll,
        total
      }
    )
    dieRollObject.total += total;
  }
  return dieRollObject;
}

export function rollStepDice(step, includeKarmaDie, karmaDieSides) {
  const stepValue = Number(step);
  let dieSides, rolls;
  switch(stepValue) {
    case 1: {
      dieSides = convertStepToDice(stepValue);
      rolls = [rollDie(dieSides[0]) - 2];
      return addKarmaDie({
          dice: [
            {
              name: `d${dieSides} - 2`,
              rolls: rolls,
              total: getSumOfRolls(rolls)
            },
          ],
          total: getSumOfRolls(rolls)
        }, includeKarmaDie, karmaDieSides);
    }
    case 2: {
      dieSides = convertStepToDice(stepValue);
      rolls = [rollDie(dieSides[0]) - 1];
      return addKarmaDie({
          dice: [
            {
              name: `d${dieSides} - 1`,
              rolls: rolls,
              total: getSumOfRolls(rolls)
            },
          ],
          total: getSumOfRolls(rolls)
        }, includeKarmaDie, karmaDieSides);
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
      return addKarmaDie({
          dice: results,
          total: getSumOfAllRolls(results)
        }, includeKarmaDie, karmaDieSides);
    }
  }
}
