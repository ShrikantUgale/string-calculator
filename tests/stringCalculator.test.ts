import { add } from "../src/stringCalculator";

describe("String Calculator", () => {
  test("returns 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  test("returns the number itself for a single number", () => {
    expect(add("1")).toBe(1);
  });

  test("returns the sum of two comma-separated numbers", () => {
    expect(add("1,5")).toBe(6);
  });

  test("returns the sum of multiple comma-separated numbers", () => {
    expect(add("1,2,3,4,5")).toBe(15);
  });

  test("returns the sum of numbers separated by newlines or commas", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test('handles custom delimiter ";"', () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  test('handles custom delimiter ";"', () => {
    expect(add("//;\n1;2")).toBe(3);
    expect(add("//:\n1:2")).toBe(3);
    expect(add("//>\n1>2")).toBe(3);
  });
});
