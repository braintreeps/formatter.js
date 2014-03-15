/*
 * test/utils.js:
 *
 * (C) 2013 First Opinion
 * MIT LICENCE
 *
 */

// 3rd party
var should = require('chai').should(),
    assert = require('chai').assert;

// first party
var pattern = require('../src/pattern');


//
// pattern.js tests
//
describe('pattern.js', function () {

  // pattern.parse
  // Create an object holding all formatted characters
  // with corresponding positions
  describe('parse', function () {
    it('Should return an obj with pattern info', function () {
      var result = pattern.parse('({{9A*}}) {{9A*}}-{{AAAA}}');
      assert.deepEqual(result.chars, {
        '0': '(',
        '4': ')',
        '5': ' ',
        '9': '-'
      });
      assert.deepEqual(result.inpts, {
        '0': '9',
        '1': 'A',
        '2': '*',
        '3': '9',
        '4': 'A',
        '5': '*',
        '6': 'A',
        '7': 'A',
        '8': 'A',
        '9': 'A'
      });
      assert.equal(result.mLength, 14);
    });
  });

  xit('accepts a literal at the end of the pattern', function (){
    var result = pattern.parse('_{{9}}_');

    assert.deepEqual(result.chars, {
      '0': '_',
      '2': '_'
    });
    assert.deepEquals(result.inpts, {
      '0': '9'
    });
    assert.equal(result.mLength, 3);
  });
  xit('can delete a char at the end of the pattern');

});
