const SINGLE = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
const TEENS = [
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];
const TENS = [
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

export function numberToWords(n: number | string, includeAnd = true) {
  if (typeof n === "string") {
    const int = parseInt(n);
    if (n.endsWith("%")) return `${numberToWords(int)} percent`;
    return numberToWords(int);
  }

  if (n < 0) return `negative ${numberToWords(-n)}`;
  if (n === 0) return "zero";

  // If number is a trillion or greater, just sound out the numbers
  if (n >= 1_000_000_000_000) {
    return n
      .toString()
      .split("")
      .map((d) => SINGLE[parseInt(d)])
      .join(" ");
  }

  function convert(n: number) {
    if (n === 0) return "";
    if (n < 10) return `${SINGLE[n]}`;
    if (n < 20) return `${TEENS[n - 10]} `;
    if (n < 100) return `${TENS[(n - (n % 10)) / 10 - 2]} ${convert(n % 10)}`;
    if (n < 1000) {
      const rest = convert(n % 100);
      return `${SINGLE[Math.trunc(n / 100)]} hundred ${rest !== "" && includeAnd ? `and ${rest}` : rest}`;
    }
    if (n < 1_000_000)
      return `${convert(Math.trunc(n / 1000)).trim()} thousand ${convert(n % 1000)}`;
    if (n < 1_000_000_000)
      return `${convert(Math.trunc(n / 1000000)).trim()} million ${convert(n % 1000000)}`;
    return `${convert(Math.trunc(n / 1_000_000_000)).trim()} billion ${convert(n % 1000000000)}`;
  }

  return convert(n).trim();
}
