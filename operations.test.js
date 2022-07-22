const { add, soustraction, multiplication } = require("./operations");

test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("soustracts 10 / 2 to equal 10", () => {
  expect(soustraction(10, 2)).toBe(5);
});

test("multiplies 5 * 2 to equal 10", () => {
  expect(multiplication(5, 2)).toBe(10);
});
