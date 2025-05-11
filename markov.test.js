const { MarkovMachine } = require("./markov");

describe("MarkovMachine", function() {
  
  // Test: Check if chains are correctly created from text
  test("creates correct chains from text", function() {
    let mm = new MarkovMachine("the cat in the hat");
    expect(mm.chains).toEqual({
      "the": ["cat", "hat"],
      "cat": ["in"],
      "in": ["the"],
      "hat": [null]
    });
  });

  // Simple test: Make sure text is being generated correctly
  test("generates text", () => {
    let mm = new MarkovMachine("the cat in the hat");
    let result = mm.makeText(3);
    expect(result).toBeTruthy(); // Make sure we get some text back
    expect(result.split(" ").length).toBeGreaterThanOrEqual(3); // It should be at least 3 words
  });

  // Test edge case: Empty string should result in an empty chain
  test("handles empty string", () => {
    let mm = new MarkovMachine("");
    expect(mm.chains).toEqual({});
  });

});
