import { expect, test } from "vitest";
import { isHaiku } from "./haiku.js";

test.each([
  "An old silent pond... A frog jumps into the pond - splash! Silence again.",
  "Over the wintry forest, winds howl in rage with no more leaves to blow.",
])('correctly identifies "%s" as a haiku', (text) => {
  expect(isHaiku(text)).toBe(true);
});
