const { add, soustraction, multiplication, division } = require("./operations");

test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("soustracts 10 - 2 to equal 8", () => {
  expect(soustraction(10, 2)).toBe(8);
});

test("multiplies 5 * 2 to equal 10", () => {
  expect(multiplication(5, 2)).toBe(10);
});

test("divides 10 / 2 to equal 5", () => {
  expect(division(10, 2)).toBe(5);
});
