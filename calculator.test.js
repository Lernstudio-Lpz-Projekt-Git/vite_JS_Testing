//const { add, sub, filterByTerm } = require("./calculator");
import { add, sub, filterByTerm } from "./calculator";

describe("Test Func add()", () => {
  test("Jest-Test: Add two numbers:", () => {
    expect(add(2, 8)).toBe(10);
  });

  test("Jest-Test: Check input a isNaN = undefined", () => {
    expect(add("hallo", 8)).toBeUndefined();
  });
});

describe("Test Func sub()", () => {
    test("Jest-Test: Sub two numbers:", () => {
      expect(sub(12, 8)).toBe(4);
    });
  
    test("Jest-Test: Check inputn a isNaN = undefined", () => {
      expect(sub('8h', 8)).toBeUndefined();
    });
  });

  describe("Filter function", () => {
    test("it should filter by a search term (link, url)", () => {
      const input = [
        { id: 1, url: "https://www.space.dev" },
        { id: 2, url: "https://www.base2.dev" },
        { id: 3, url: "https://www.link3.dev" }
      ];
  
      const output = [{ id: 3, url: "https://www.link3.dev" }];
      expect(filterByTerm(input, "link")).toEqual(output);

      const output2 = [{ id: 1, url: "https://www.space.dev" }];
      expect(filterByTerm(input, "space")).toEqual(output2); // New test
    });
  });
