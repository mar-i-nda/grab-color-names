var expect = require('chai').expect,
  assert = require('chai').assert,
  colorNames = require('./index');

describe('colorNames', function() {
  describe('all', function() {

    it('should be an array', function() {
      assert(Array.isArray(colorNames.all));
    });

    it('should be an array of arrays containing two strings', function() {
      expect(colorNames.all).to.satisfy(function(array) {
        return (array).every(function(item) {
          return typeof item[0] === 'string' && typeof item[1] === 'string';
        });
      });
    });

    it('first array item should be a string with a valid hex color', function() {
      expect(colorNames.all).to.satisfy(function(array) {
        return (array).every(function(item) {
          return expect(item[0]).to.match(/(^[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i);
        });
      });
    });

  });

  describe('random()', function() {

    it('should return an array', function() {
      assert(Array.isArray(colorNames.random()));
    });

    it('should return an array containing two strings', function() {
      expect(colorNames.random()).to.satisfy(function(item) {
        return typeof item[0] === 'string' && typeof item[1] === 'string';
      });
    });

    it('first array item should be a string with a valid hex color', function() {
      expect(colorNames.random()).to.satisfy(function(item) {
        return expect(item[0]).to.match(/(^[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i);
      });
    });

  });

  describe('random(number)', function() {

    it('should return an array of random items taken from colorNames.all of specified length', function() {
      var arrayLength = 3,
        randomItems = colorNames.random(arrayLength);
      expect(randomItems).to.have.length(arrayLength);
      randomItems.forEach(function(item) {
        expect(colorNames.all).to.include(item);
      });
    });

  });
});
