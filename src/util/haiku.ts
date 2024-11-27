import { syllable } from "syllable";

function sylls(term: string) {
  switch (term.replace(/[^a-z]/g, "")) {
    case "forest":
      return 2;
    default:
      return syllable(term);
  }
}

export function isHaiku(post: string) {
  const terms = post.replace(/['’]/g, "").split(/\b/g);
  const postSyllables = terms.map((term) => sylls(term)).filter((s) => s > 0);

  // Whole thing must be 17 syllables long, so we can exit early if it's not.
  if (postSyllables.reduce((acc, s) => acc + s) !== 17) return false;

  // Must be able to get correct syllable count for each line from full words.
  for (let line = 0; line < 3; line++) {
    const expected = line === 1 ? 7 : 5;
    let lineSyllableCount = 0;

    while (lineSyllableCount < expected) {
      const termSyllables = postSyllables.shift();
      // If we ran out of syllables before hitting the count for this line, it's not a haiku.
      if (!termSyllables) return false;
      lineSyllableCount += termSyllables;
    }

    // We stopped taking words when we *exceeded* the expected count, but we actually need to have hit it exactly.
    if (lineSyllableCount !== expected) return false;
  }

  return true;
}