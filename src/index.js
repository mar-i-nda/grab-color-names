var colorNames = require('./color-names.json'),
  uniqueRandomArray = require('unique-random-array'),
  getRandomItem = uniqueRandomArray(colorNames);

module.exports = {
  all: colorNames,
  random: function(number) {
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
