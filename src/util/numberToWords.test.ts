import { expect, test } from "vitest";
import { numberToWords } from "./numberToWords.js";

test.each([
  [2, "two"],
  [11, "eleven"],
  [300, "three hundred"],
  [912, "nine hundred and twelve"],
  [40, "forty"],
  [
    1234567890123456,
    "one two three four five six seven eight nine zero one two three four five six",
  ],
])("correctly translates %i", (num, translation) => {
  expect(numberToWords(num)).toBe(translation);
});

test.each([
  ["6", "six"],
  ["1234%", "one thousand two hundred and thirty four percent"],
])('correctly translates "%s"', (numString, translation) => {
  expect(numberToWords(numString)).toBe(translation);
});
