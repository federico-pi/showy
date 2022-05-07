/**
 * Puts app to sleep for an amount of milliseconds
 */
export const sleep = (timeout: number) =>
  new Promise((resolve) => setTimeout(resolve, timeout));
