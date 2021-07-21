const assert = require('assert');  
const is = require('is-thirteen');
const isThirteen = require('./index');

describe('Is it thirteen?', function() {

  it('It is thirteen', function() {
    assert.equal(true, is(isThirteen(13)).thirteen()); 
  });

  it('It is thirteen', function() {
    assert.equal(true, is(isThirteen(13)).roughly.thirteen()); 
  });
  
});


