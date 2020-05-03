const ORIGINAL_FUNCTION = Symbol("Logiod Override Function");

/**
 * Intercept a function
 *
 * @param {Object} obj The object containing the method.
 * @param {String} name The name of the method
 * @param {Function} func A function to intercept
 */
export function intercept(obj: any, name: string, func: Function): void {
  const original = obj[name] || function() {};
  obj[name] = func(original);
  obj[name][ORIGINAL_FUNCTION] = original;
}

/**
 * Remove Intercept from a function.
 *
 * @param {Object} obj The object containing the function.
 * @param {String} name The name of the function
 */
export function unintercept(obj: any, name: string): void {
  if (obj[name] && obj[name][ORIGINAL_FUNCTION]) {
    const original = obj[name][ORIGINAL_FUNCTION];
    obj[name] = original;
  }
}
