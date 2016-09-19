import { INVALID_STEP } from '../constants/ErrorText';

export function convertStepToDice(step) {
  switch(step) {
    case 1:
    case 2:
    case 3:
      return [4];
    case 4:
      return [6];
    case 5:
      return [8];
    case 6:
      return [10];
    case 7:
      return [12];
    case 8:
      return [6, 6];
    case 9:
      return [6, 8];
    case 10:
      return [8, 8];
    case 11:
      return [10, 8];
    case 12:
      return [10, 10];
    case 13:
      return [12, 10];
    case 14:
      return [12, 12];
    case 15:
      return [12, 6, 6];
    case 16:
      return [12, 8, 6];
    case 17:
      return [12, 8, 8];
    case 18:
      return [12, 10, 8];
    case 19:
      return [20, 6, 6];
    case 20:
      return [20, 8, 6];
    case 21:
      return [20, 10, 6];
    case 22:
      return [20, 10, 8];
    case 23:
      return [20, 10, 10];
    case 24:
      return [20, 12, 10];
    case 25:
      return [20, 10, 8, 4];
    case 26:
      return [20, 10, 8, 6];
    case 27:
      return [20, 10, 8, 8];
    case 28:
      return [20, 10, 10, 8];
    case 29:
      return [20, 12, 10, 8];
    case 30:
      return [20, 10, 8, 6, 6];
    case 31:
      return [20, 10, 8, 8, 6];
    case 32:
      return [20, 10, 10, 8, 6];
    case 33:
      return [20, 10, 10, 8, 8];
    case 34:
      return [20, 10, 10, 10, 8];
    case 35:
      return [20, 12, 10, 10, 8];
    case 36:
      return [20, 20, 10, 8, 4];
    case 37:
      return [20, 20, 10, 8, 6];
    case 38:
      return [20, 20, 10, 8, 8];
    case 39:
      return [20, 20, 10, 10, 8];
    case 40:
      return [20, 20, 12, 10, 8];
    default:
      return INVALID_STEP;
  }
}
