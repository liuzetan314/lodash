/**
 * lodash 3.3.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * Checks if `n` is between `start` and up to but not including, `end`. If
 * `end` is not specified it defaults to `start` with `start` becoming `0`.
 *
 * @static
 * @memberOf _
 * @category Number
 * @param {number} n The number to check.
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @returns {boolean} Returns `true` if `n` is in the range, else `false`.
 * @example
 *
 * _.inRange(3, 2, 4);
 * // => true
 *
 * _.inRange(4, 8);
 * // => true
 *
 * _.inRange(4, 2);
 * // => false
 *
 * _.inRange(2, 2);
 * // => false
 *
 * _.inRange(1.2, 2);
 * // => true
 *
 * _.inRange(5.2, 4);
 * // => false
 */
function inRange(value, start, end) {
  start = +start || 0;
  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  } else {
    end = +end || 0;
  }
  return value >= start && value < end;
}

module.exports = inRange;