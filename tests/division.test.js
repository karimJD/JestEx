const { division } = require("../operations");

test("divides 10 / 2 to equal 5", () => {
  expect(division(10, 2)).toBe(5);
});

test("divides -10 / 2 to equal -5", () => {
  expect(division(-10, 2)).toBe(-5);
});

test("divides 10 / 0 to equal undefined", () => {
  expect(division(10, 0)).toBe(Infinity);
});
