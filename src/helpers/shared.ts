/**
 * Helper to capitalize the first letter
 * @param string - The string to capitalize
 * @param locale - The current locale
 */
export function capitalizeFirstLetter(
  [first, ...rest]: string,
  locale: string = 'it'
): string {
  return `${first.toLocaleUpperCase(locale)}${rest.join('')}`;
}

/**
 * Helper to capitalize the first letter of each word in a sentence
 */
export function capitalizeWords(sentence: string): string {
  return sentence
    .toLowerCase()
    .split(' ')
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(' ');
}
