'use strict';

import { expect } from 'chai';
import  DiamondBuilder from '../src/Diamond';

describe("Diamond Kata", () => {
  var builder : DiamondBuilder;

  beforeEach(() => {
    builder = new DiamondBuilder();
  });

  it("Should it print A on the first Line when A is entered ", () => {
    var output = builder.getDiamond('A');
    expect(output[0]).to.be.eq('A');
  });

  it("Should print 3 lines when B is entered ", () => {
    var output = builder.getDiamond('B');
    expect(output.length).to.be.eq(3);
  });

  it("Should print letter A on first lines when B is entered ", () => {
    var output = builder.getDiamond('B');
    expect(output[0]).to.contain('A');
  });

  it("Should print letter 'B B' on second lines when B is entered ", () => {
    var output = builder.getDiamond('B');
    expect(output[1]).to.be.eq('B B');
  });

  it("Should print 5 lines when C is entered", () => {
    var output = builder.getDiamond('C');
    expect(output.length).to.be.eq(5);
  });

  it("Should pad A when B is entered", () => {
    var output = builder.getDiamond("B");
    expect(output[0]).to.be.eq(" A");
  });

  it("Should print ' B B' on line 4 when C is entered",() => {
    var output = builder.getDiamond("C");
    expect(output[3]).to.be.eq(" B B");
  });

  it("Should print 'C   C' on line 3 when C is entered",() => {
    var output = builder.getDiamond("C");
    expect(output[2]).to.be.eq("C   C");
  });

  it("Should print 'D     D' on line 3 when D is entered",() => {
    var output = builder.getDiamond("Z");
    expect(output[3]).to.be.eq("D     D");
  });
});
