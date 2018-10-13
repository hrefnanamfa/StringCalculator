//calculator.test.js
const add = require("./calculator");

it("should return zero on an empty string", () => {
	expect(add("")).toBe(0);
});

it("should return number when only one number is in the string", () => {
	expect(add("5")).toBe(5);
});

it("should return sum of two given numbers", () => {
	expect(add("1,2")).toBe(3);
});

it("should return sum of multiple numbers", () => {
	expect(add("1,2,3,4")).toBe(10);
});

it("should sumarize numbers on , and \n", () => {
	expect(add("1,2,3\n4")).toBe(10);
});
