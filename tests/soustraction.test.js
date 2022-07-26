const { soustraction } = require("../operations");

test("soustracts 10 - 2 to equal 8", () => {
  expect(soustraction(10, 2)).toBe(8);
});

test("soustracts 10 - -2 to equal 12", () => {
  expect(soustraction(10, -2)).toBe(12);
});

test("soustracts 5 - 10 to equal -2", () => {
  expect(soustraction(5, 10)).toBe(-5);
});
