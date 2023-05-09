/**
 *
 * @param {any[]} arr array of values to check
 * @returns true if array is sorted highest to lowest, false otherwise
 */
const isSortedHiToLow = (arr) =>
  arr.every((val, index, arr) => !index || arr[index - 1] >= val);

/**
 *
 * @param {any[]} arr array of values to check
 * @returns true if array is sorted lowest to highest, false otherwise
 */
const isSortedLowToHi = (arr) =>
  arr.every((val, index, arr) => !index || arr[index - 1] <= val);

module.exports = {
  isSortedHiToLow,
  isSortedLowToHi,
};
