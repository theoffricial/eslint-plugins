/**
 * Given an array of words, returns an English-friendly concatenation, separated with commas, with
 * the `and` clause inserted before the last item.
 *
 * Example: ['foo', 'bar', 'baz' ] returns the string "foo, bar, and baz".
 */
function formatWordList(words: string[]): string {
  if (!words?.length) {
    return "";
  }

  if (words.length === 1) {
    return words[0];
  }

  return [words.slice(0, -1).join(", "), words.slice(-1)[0]].join(" and ");
}

export { formatWordList };
