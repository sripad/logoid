"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ORIGINAL_FUNCTION = Symbol("Logiod Override Function");
/**
 * Intercept a function
 *
 * @param {Object} obj The object containing the method.
 * @param {String} name The name of the method
 * @param {Function} func A function to intercept
 */
function intercept(obj, name, func) {
    const original = obj[name] || function () { };
    obj[name] = func(original);
    obj[name][ORIGINAL_FUNCTION] = original;
}
exports.intercept = intercept;
/**
 * Remove Intercept from a function.
 *
 * @param {Object} obj The object containing the function.
 * @param {String} name The name of the function
 */
function unintercept(obj, name) {
    if (obj[name] && obj[name][ORIGINAL_FUNCTION]) {
        const original = obj[name][ORIGINAL_FUNCTION];
        obj[name] = original;
    }
}
exports.unintercept = unintercept;
