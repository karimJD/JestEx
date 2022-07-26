const { multiplication } = require("../operations");

test("multiplies 5 * 2 to equal 10", () => {
  expect(multiplication(5, 2)).toBe(10);
});

test("multiplies 5 * -2 to equal -10", () => {
  expect(multiplication(5, -2)).toBe(-10);
});

test("multiplies 5 * 0 to equal 0", () => {
  expect(multiplication(5, 0)).toBe(0);
});
