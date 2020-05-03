"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getTag(thing) {
    return Object.prototype.toString.call(thing);
}
function isArray(thing) {
    return getTag(thing) === '[object Array]';
}
exports.isArray = isArray;
function isBoolean(thing) {
    return (typeof thing === 'boolean' ||
        (isObject(thing) && getTag(thing) === '[object Boolean]'));
}
exports.isBoolean = isBoolean;
function isError(thing) {
    if (!isObject(thing)) {
        return false;
    }
    const tag = getTag(thing);
    return (tag === '[object Error]' ||
        tag === '[object DOMException]' ||
        (isString(thing.name) && isString(thing.message)));
}
exports.isError = isError;
function isFunction(thing) {
    return !!(thing && typeof thing === 'function');
}
exports.isFunction = isFunction;
function isNumber(thing) {
    return (typeof thing === 'number' ||
        (isObject(thing) && getTag(thing) === '[object Number]'));
}
exports.isNumber = isNumber;
function isObject(thing) {
    return !!(thing && typeof thing === 'object');
}
exports.isObject = isObject;
function isString(thing) {
    return (typeof thing === 'string' ||
        (!isArray(thing) && isObject(thing) && getTag(thing) === '[object String]'));
}
exports.isString = isString;
