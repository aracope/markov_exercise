const { MarkovMachine } = require("./markov");

describe("MarkovMachine makeChains method", function() {
  test("creates correct chains from text", function() {
    let mm = new MarkovMachine("the cat in the hat");
    expect(mm.chains).toEqual({
      "the": ["cat", "hat"],
      "cat": ["in"],
      "in": ["the"],
      "hat": [null]
    });
  });
});
