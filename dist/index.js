'use strict';

var _colorNames = require('./color-names.json');

var _colorNames2 = _interopRequireDefault(_colorNames);

var _uniqueRandomArray = require('unique-random-array');

var _uniqueRandomArray2 = _interopRequireDefault(_uniqueRandomArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getRandomItem = (0, _uniqueRandomArray2.default)(_colorNames2.default);

module.exports = {
  allColors: _colorNames2.default,
  randomColor: function randomColor(number) {
    if (number === 'undefined' || typeof number !== 'number') {
      return getRandomItem();
    } else {
      var randomItems = [];
      for (var i = 0; i < number; i++) {
        randomItems.push(getRandomItem());
      }
      return randomItems;
    }
  }
};
