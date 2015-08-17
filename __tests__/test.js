'use strict';

jest.autoMockOff();

let BestStringEver = require('../src/index.js');
let theString = new BestStringEver();

describe('theString', () => {
  it('is the number one best string', () => {
    expect(theString.bestStringEver).toBe("OMG this string is totes awesome! It's #1");
  });
});