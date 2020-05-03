function getTag(thing: any): string {
  return Object.prototype.toString.call(thing);
}

export function isArray(thing: any): boolean {
  return getTag(thing) === '[object Array]';
}

export function isBoolean(thing: any): boolean {
  return (
    typeof thing === 'boolean' ||
    (isObject(thing) && getTag(thing) === '[object Boolean]')
  );
}

export function isError(thing: any): boolean {
  if (!isObject(thing)) {
    return false;
  }
  const tag = getTag(thing);
  return (
    tag === '[object Error]' ||
    tag === '[object DOMException]' ||
    (isString(thing.name) && isString(thing.message))
  );
}

export function isFunction(thing: any): boolean {
  return !!(thing && typeof thing === 'function');
}

export function isNumber(thing: any): boolean {
  return (
    typeof thing === 'number' ||
    (isObject(thing) && getTag(thing) === '[object Number]')
  );
}

export function isObject(thing: any): boolean {
  return !!(thing && typeof thing === 'object');
}

export function isString(thing: any): boolean {
  return (
    typeof thing === 'string' ||
    (!isArray(thing) && isObject(thing) && getTag(thing) === '[object String]')
  );
}
