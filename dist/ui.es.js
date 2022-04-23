import { getCurrentScope, onScopeDispose, ref, unref, watch, defineComponent, openBlock, createElementBlock, createElementVNode, warn, getCurrentInstance, computed, provide, inject, isRef, onMounted, onBeforeUnmount, onBeforeMount, mergeProps, renderSlot, useAttrs as useAttrs$1, useSlots, shallowRef, nextTick, onUpdated, toRef, withDirectives, normalizeClass, normalizeStyle, createCommentVNode, Fragment, createBlock, withCtx, resolveDynamicComponent, withModifiers, createVNode, toDisplayString, vShow, Transition, resolveComponent, reactive, cloneVNode, Text, Comment, Teleport, createTextVNode, readonly, resolveDirective, renderList, vModelCheckbox, toRefs, h as h$1, toHandlers, normalizeProps, guardReactiveProps, createSlots, onUnmounted, watchEffect, pushScopeId, popScopeId } from 'vue';
import { defineStore } from 'pinia';
import { DateTime } from 'luxon';

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

var freeGlobal$1 = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal$1 || freeSelf || Function('return this')();

var root$1 = root;

/** Built-in value references. */
var Symbol$1 = root$1.Symbol;

var Symbol$2 = Symbol$1;

/** Used for built-in method references. */
var objectProto$c = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$a = objectProto$c.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$c.toString;

/** Built-in value references. */
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty$a.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto$b = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto$b.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString$2(value) {
  return nativeObjectToString.call(value);
}

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString$2(value);
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/** `Object#toString` result references. */
var symbolTag$1 = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol$1(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag$1);
}

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray$5 = Array.isArray;

var isArray$6 = isArray$5;

/** Used as references for various `Number` constants. */
var INFINITY$1 = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto$1 = Symbol$2 ? Symbol$2.prototype : undefined,
    symbolToString = symbolProto$1 ? symbolProto$1.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray$6(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol$1(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
}

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject$2(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol$1(value)) {
    return NAN;
  }
  if (isObject$2(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject$2(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag$1 = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction$1(value) {
  if (!isObject$2(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/** Used to detect overreaching core-js shims. */
var coreJsData = root$1['__core-js_shared__'];

var coreJsData$1 = coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData$1 && coreJsData$1.keys && coreJsData$1.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/** Used for built-in method references. */
var funcProto$1 = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto$a = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$9 = objectProto$a.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty$9).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject$2(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction$1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/* Built-in method references that are verified to be native. */
var WeakMap$1 = getNative(root$1, 'WeakMap');

var WeakMap$2 = WeakMap$1;

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

var defineProperty$1 = defineProperty;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty$1) {
    defineProperty$1(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/** Used for built-in method references. */
var objectProto$9 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$8 = objectProto$9.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$8.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction$1(value);
}

/** Used for built-in method references. */
var objectProto$8 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$8;

  return value === proto;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/** `Object#toString` result references. */
var argsTag$2 = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag$2;
}

/** Used for built-in method references. */
var objectProto$7 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$7 = objectProto$7.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable$1 = objectProto$7.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty$7.call(value, 'callee') &&
    !propertyIsEnumerable$1.call(value, 'callee');
};

var isArguments$1 = isArguments;

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

/** Detect free variable `exports`. */
var freeExports$1 = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule$1 = freeExports$1 && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;

/** Built-in value references. */
var Buffer = moduleExports$1 ? root$1.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer$1 = nativeIsBuffer || stubFalse;

var isBuffer$2 = isBuffer$1;

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]',
    arrayTag$1 = '[object Array]',
    boolTag$1 = '[object Boolean]',
    dateTag$1 = '[object Date]',
    errorTag$1 = '[object Error]',
    funcTag = '[object Function]',
    mapTag$2 = '[object Map]',
    numberTag$1 = '[object Number]',
    objectTag$2 = '[object Object]',
    regexpTag$1 = '[object RegExp]',
    setTag$2 = '[object Set]',
    stringTag$1 = '[object String]',
    weakMapTag$1 = '[object WeakMap]';

var arrayBufferTag$1 = '[object ArrayBuffer]',
    dataViewTag$2 = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] =
typedArrayTags[arrayBufferTag$1] = typedArrayTags[boolTag$1] =
typedArrayTags[dataViewTag$2] = typedArrayTags[dateTag$1] =
typedArrayTags[errorTag$1] = typedArrayTags[funcTag] =
typedArrayTags[mapTag$2] = typedArrayTags[numberTag$1] =
typedArrayTags[objectTag$2] = typedArrayTags[regexpTag$1] =
typedArrayTags[setTag$2] = typedArrayTags[stringTag$1] =
typedArrayTags[weakMapTag$1] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal$1.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

var nodeUtil$1 = nodeUtil;

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil$1 && nodeUtil$1.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

var isTypedArray$1 = isTypedArray;

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$6 = objectProto$6.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray$6(value),
      isArg = !isArr && isArguments$1(value),
      isBuff = !isArr && !isArg && isBuffer$2(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray$1(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$6.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

var nativeKeys$1 = nativeKeys;

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$5.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys$1(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$5.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray$6(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol$1(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

var nativeCreate$1 = nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate$1 ? nativeCreate$1(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$4.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate$1) {
    var result = data[key];
    return result === HASH_UNDEFINED$2 ? undefined : result;
  }
  return hasOwnProperty$4.call(data, key) ? data[key] : undefined;
}

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$3.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate$1 ? (data[key] !== undefined) : hasOwnProperty$3.call(data, key);
}

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate$1 && value === undefined) ? HASH_UNDEFINED$1 : value;
  return this;
}

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/* Built-in method references that are verified to be native. */
var Map$1 = getNative(root$1, 'Map');

var Map$2 = Map$1;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map$2 || ListCache),
    'string': new Hash
  };
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/** Error message constants. */
var FUNC_ERROR_TEXT$1 = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

/** Used to match property names within property paths. */
var rePropName$1 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar$1 = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath$1 = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName$1, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar$1, '$1') : (number || match));
  });
  return result;
});

var stringToPath$2 = stringToPath$1;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray$6(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath$2(toString(value));
}

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol$1(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map$2 || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$2.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

var getSymbols$1 = getSymbols;

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$6(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols$1);
}

/* Built-in method references that are verified to be native. */
var DataView$1 = getNative(root$1, 'DataView');

var DataView$2 = DataView$1;

/* Built-in method references that are verified to be native. */
var Promise$1 = getNative(root$1, 'Promise');

var Promise$2 = Promise$1;

/* Built-in method references that are verified to be native. */
var Set$1 = getNative(root$1, 'Set');

var Set$2 = Set$1;

/** `Object#toString` result references. */
var mapTag$1 = '[object Map]',
    objectTag$1 = '[object Object]',
    promiseTag = '[object Promise]',
    setTag$1 = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag$1 = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView$2),
    mapCtorString = toSource(Map$2),
    promiseCtorString = toSource(Promise$2),
    setCtorString = toSource(Set$2),
    weakMapCtorString = toSource(WeakMap$2);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView$2 && getTag(new DataView$2(new ArrayBuffer(1))) != dataViewTag$1) ||
    (Map$2 && getTag(new Map$2) != mapTag$1) ||
    (Promise$2 && getTag(Promise$2.resolve()) != promiseTag) ||
    (Set$2 && getTag(new Set$2) != setTag$1) ||
    (WeakMap$2 && getTag(new WeakMap$2) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag$1 ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag$1;
        case mapCtorString: return mapTag$1;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag$1;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

var getTag$1 = getTag;

/** Built-in value references. */
var Uint8Array$1 = root$1.Uint8Array;

var Uint8Array$2 = Uint8Array$1;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$3 = 1,
    COMPARE_UNORDERED_FLAG$1 = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG$1) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$2 = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol$2 ? Symbol$2.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array$2(object), new Uint8Array$2(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$1 = 1;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$1.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$2.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray$6(object),
      othIsArr = isArray$6(other),
      objTag = objIsArr ? arrayTag : getTag$1(object),
      othTag = othIsArr ? arrayTag : getTag$1(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer$2(object)) {
    if (!isBuffer$2(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray$1(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty$1.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty$1.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root$1.Date.now();
};

var now$1 = now;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce$1(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject$2(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now$1();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now$1());
  }

  function debounced() {
    var time = now$1(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * The inverse of `_.toPairs`; this method returns an object composed
 * from key-value `pairs`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} pairs The key-value pairs.
 * @returns {Object} Returns the new object.
 * @example
 *
 * _.fromPairs([['a', 1], ['b', 2]]);
 * // => { 'a': 1, 'b': 2 }
 */
function fromPairs(pairs) {
  var index = -1,
      length = pairs == null ? 0 : pairs.length,
      result = {};

  while (++index < length) {
    var pair = pairs[index];
    result[pair[0]] = pair[1];
  }
  return result;
}

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isNil(null);
 * // => true
 *
 * _.isNil(void 0);
 * // => true
 *
 * _.isNil(NaN);
 * // => false
 */
function isNil(value) {
  return value == null;
}

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject$2(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      return object;
    }

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject$2(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `_.setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * _.set(object, ['x', '0', 'y', 'z'], 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */
function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}

const triggerEvent = function(elm, name, ...opts) {
  let eventName;
  if (name.includes("mouse") || name.includes("click")) {
    eventName = "MouseEvents";
  } else if (name.includes("key")) {
    eventName = "KeyboardEvent";
  } else {
    eventName = "HTMLEvents";
  }
  const evt = document.createEvent(eventName);
  evt.initEvent(name, ...opts);
  elm.dispatchEvent(evt);
  return elm;
};

const on = (element, event, handler, useCapture = false) => {
  if (element && event && handler) {
    element == null ? void 0 : element.addEventListener(event, handler, useCapture);
  }
};
const off = (element, event, handler, useCapture = false) => {
  if (element && event && handler) {
    element == null ? void 0 : element.removeEventListener(event, handler, useCapture);
  }
};
const once = (el, event, fn) => {
  const listener = function(...args) {
    if (fn) {
      fn.apply(this, args);
    }
    off(el, event, listener);
  };
  on(el, event, listener);
};
const composeEventHandlers = (theirsHandler, oursHandler, { checkForDefaultPrevented = true } = {}) => {
  const handleEvent = (event) => {
    const shouldPrevent = theirsHandler == null ? void 0 : theirsHandler(event);
    if (checkForDefaultPrevented === false || !shouldPrevent) {
      return oursHandler == null ? void 0 : oursHandler(event);
    }
  };
  return handleEvent;
};
const whenMouse = (handler) => {
  return (e) => e.pointerType === "mouse" ? handler(e) : void 0;
};

function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}

const isClient = typeof window !== "undefined";
const isBoolean$1 = (val) => typeof val === "boolean";
const isNumber$1 = (val) => typeof val === "number";
const isString$2 = (val) => typeof val === "string";
const noop = () => {
};

function useTimeoutFn(cb, interval, options = {}) {
  const {
    immediate = true
  } = options;
  const isPending = ref(false);
  let timer = null;
  function clear() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  function stop() {
    isPending.value = false;
    clear();
  }
  function start(...args) {
    clear();
    isPending.value = true;
    timer = setTimeout(() => {
      isPending.value = false;
      timer = null;
      cb(...args);
    }, unref(interval));
  }
  if (immediate) {
    isPending.value = true;
    if (isClient)
      start();
  }
  tryOnScopeDispose(stop);
  return {
    isPending,
    start,
    stop
  };
}

function unrefElement(elRef) {
  var _a;
  const plain = unref(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}

const defaultWindow = isClient ? window : void 0;

function useEventListener(...args) {
  let target;
  let event;
  let listener;
  let options;
  if (isString$2(args[0])) {
    [event, listener, options] = args;
    target = defaultWindow;
  } else {
    [target, event, listener, options] = args;
  }
  if (!target)
    return noop;
  let cleanup = noop;
  const stopWatch = watch(() => unrefElement(target), (el) => {
    cleanup();
    if (!el)
      return;
    el.addEventListener(event, listener, options);
    cleanup = () => {
      el.removeEventListener(event, listener, options);
      cleanup = noop;
    };
  }, { immediate: true, flush: "post" });
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}

function onClickOutside(target, handler, options = {}) {
  const { window = defaultWindow, ignore, capture = true } = options;
  if (!window)
    return;
  const shouldListen = ref(true);
  const listener = (event) => {
    const el = unrefElement(target);
    const composedPath = event.composedPath();
    if (!el || el === event.target || composedPath.includes(el) || !shouldListen.value)
      return;
    if (ignore && ignore.length > 0) {
      if (ignore.some((target2) => {
        const el2 = unrefElement(target2);
        return el2 && (event.target === el2 || composedPath.includes(el2));
      }))
        return;
    }
    handler(event);
  };
  const cleanup = [
    useEventListener(window, "click", listener, { passive: true, capture }),
    useEventListener(window, "pointerdown", (e) => {
      const el = unrefElement(target);
      shouldListen.value = !!el && !e.composedPath().includes(el);
    }, { passive: true })
  ];
  const stop = () => cleanup.forEach((fn) => fn());
  return stop;
}

const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {};
_global[globalKey];

var __getOwnPropSymbols$c = Object.getOwnPropertySymbols;
var __hasOwnProp$c = Object.prototype.hasOwnProperty;
var __propIsEnum$c = Object.prototype.propertyIsEnumerable;
var __objRest$2 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$c.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$c)
    for (var prop of __getOwnPropSymbols$c(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$c.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function useResizeObserver(target, callback, options = {}) {
  const _a = options, { window = defaultWindow } = _a, observerOptions = __objRest$2(_a, ["window"]);
  let observer;
  const isSupported = window && "ResizeObserver" in window;
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const stopWatch = watch(() => unrefElement(target), (el) => {
    cleanup();
    if (isSupported && window && el) {
      observer = new ResizeObserver(callback);
      observer.observe(el, observerOptions);
    }
  }, { immediate: true, flush: "post" });
  const stop = () => {
    cleanup();
    stopWatch();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop
  };
}

var _a, _b;
isClient && (window == null ? void 0 : window.navigator) && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.platform) && /iP(ad|hone|od)/.test((_b = window == null ? void 0 : window.navigator) == null ? void 0 : _b.platform);

const resizeHandler = function(entries) {
  for (const entry of entries) {
    const listeners = entry.target.__resizeListeners__ || [];
    if (listeners.length) {
      listeners.forEach((fn) => {
        fn();
      });
    }
  }
};
const addResizeListener = function(element, fn) {
  if (!isClient || !element)
    return;
  if (!element.__resizeListeners__) {
    element.__resizeListeners__ = [];
    element.__ro__ = new ResizeObserver(resizeHandler);
    element.__ro__.observe(element);
  }
  element.__resizeListeners__.push(fn);
};
const removeResizeListener = function(element, fn) {
  var _a;
  if (!element || !element.__resizeListeners__)
    return;
  element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
  if (!element.__resizeListeners__.length) {
    (_a = element.__ro__) == null ? void 0 : _a.disconnect();
  }
};

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 * IMPORTANT: all calls of this function must be prefixed with
 * \/\*#\_\_PURE\_\_\*\/
 * So that rollup can tree-shake them if necessary.
 */
const NOOP = () => { };
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn$2 = (val, key) => hasOwnProperty.call(val, key);
const isArray$4 = Array.isArray;
const isFunction = (val) => typeof val === 'function';
const isString$1 = (val) => typeof val === 'string';
const isObject$1 = (val) => val !== null && typeof val === 'object';
const objectToString$1 = Object.prototype.toString;
const toTypeString = (value) => objectToString$1.call(value);
const cacheStringFunction = (fn) => {
    const cache = Object.create(null);
    return ((str) => {
        const hit = cache[str];
        return hit || (cache[str] = fn(str));
    });
};
const camelizeRE = /-(\w)/g;
/**
 * @private
 */
const camelize = cacheStringFunction((str) => {
    return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''));
});

const isUndefined = (val) => val === void 0;
const isEmpty = (val) => !val && val !== 0 || isArray$4(val) && val.length === 0 || isObject$1(val) && !Object.keys(val).length;
const isElement$2 = (e) => {
  if (typeof Element === "undefined")
    return false;
  return e instanceof Element;
};

const keysOf = (arr) => Object.keys(arr);
const getProp = (obj, path, defaultValue) => {
  return {
    get value() {
      return get(obj, path, defaultValue);
    },
    set value(val) {
      set(obj, path, val);
    }
  };
};

const classNameToArray = (cls = "") => cls.split(" ").filter((item) => !!item.trim());
const hasClass = (el, cls) => {
  if (!el || !cls)
    return false;
  if (cls.includes(" "))
    throw new Error("className should not contain space.");
  return el.classList.contains(cls);
};
const addClass = (el, cls) => {
  if (!el || !cls.trim())
    return;
  el.classList.add(...classNameToArray(cls));
};
const removeClass = (el, cls) => {
  if (!el || !cls.trim())
    return;
  el.classList.remove(...classNameToArray(cls));
};
const getStyle = (element, styleName) => {
  var _a;
  if (!isClient || !element || !styleName)
    return "";
  camelize(styleName);
  try {
    const style = element.style[styleName];
    if (style)
      return style;
    const computed = (_a = document.defaultView) == null ? void 0 : _a.getComputedStyle(element, "");
    return computed ? computed[styleName] : "";
  } catch (e) {
    return element.style[styleName];
  }
};

var _export_sfc$3 = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main$1h = defineComponent({
  name: "ArrowDown"
});
const _hoisted_1$N = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$G = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
}, null, -1);
const _hoisted_3$w = [
  _hoisted_2$G
];
function _sfc_render$X(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$N, _hoisted_3$w);
}
var arrowDown = /* @__PURE__ */ _export_sfc$3(_sfc_main$1h, [["render", _sfc_render$X]]);

const _sfc_main$1g = defineComponent({
  name: "ArrowLeft"
});
const _hoisted_1$M = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$F = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
}, null, -1);
const _hoisted_3$v = [
  _hoisted_2$F
];
function _sfc_render$W(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$M, _hoisted_3$v);
}
var arrowLeft = /* @__PURE__ */ _export_sfc$3(_sfc_main$1g, [["render", _sfc_render$W]]);

const _sfc_main$1f = defineComponent({
  name: "ArrowRight"
});
const _hoisted_1$L = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$E = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
}, null, -1);
const _hoisted_3$u = [
  _hoisted_2$E
];
function _sfc_render$V(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$L, _hoisted_3$u);
}
var arrowRight = /* @__PURE__ */ _export_sfc$3(_sfc_main$1f, [["render", _sfc_render$V]]);

const _sfc_main$1e = defineComponent({
  name: "ArrowUp"
});
const _hoisted_1$K = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$D = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
}, null, -1);
const _hoisted_3$t = [
  _hoisted_2$D
];
function _sfc_render$U(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$K, _hoisted_3$t);
}
var arrowUp = /* @__PURE__ */ _export_sfc$3(_sfc_main$1e, [["render", _sfc_render$U]]);

const _sfc_main$1d = defineComponent({
  name: "Calendar"
});
const _hoisted_1$J = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$C = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M128 384v512h768V192H768v32a32 32 0 1 1-64 0v-32H320v32a32 32 0 0 1-64 0v-32H128v128h768v64H128zm192-256h384V96a32 32 0 1 1 64 0v32h160a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h160V96a32 32 0 0 1 64 0v32zm-32 384h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64z"
}, null, -1);
const _hoisted_3$s = [
  _hoisted_2$C
];
function _sfc_render$T(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$J, _hoisted_3$s);
}
var calendar = /* @__PURE__ */ _export_sfc$3(_sfc_main$1d, [["render", _sfc_render$T]]);

const _sfc_main$1c = defineComponent({
  name: "CircleCheck"
});
const _hoisted_1$I = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$B = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1);
const _hoisted_3$r = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
}, null, -1);
const _hoisted_4$a = [
  _hoisted_2$B,
  _hoisted_3$r
];
function _sfc_render$S(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$I, _hoisted_4$a);
}
var circleCheck = /* @__PURE__ */ _export_sfc$3(_sfc_main$1c, [["render", _sfc_render$S]]);

const _sfc_main$1b = defineComponent({
  name: "CircleClose"
});
const _hoisted_1$H = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$A = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
}, null, -1);
const _hoisted_3$q = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1);
const _hoisted_4$9 = [
  _hoisted_2$A,
  _hoisted_3$q
];
function _sfc_render$R(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$H, _hoisted_4$9);
}
var circleClose = /* @__PURE__ */ _export_sfc$3(_sfc_main$1b, [["render", _sfc_render$R]]);

const _sfc_main$1a = defineComponent({
  name: "Clock"
});
const _hoisted_1$G = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$z = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1);
const _hoisted_3$p = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M480 256a32 32 0 0 1 32 32v256a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"
}, null, -1);
const _hoisted_4$8 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M480 512h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32z"
}, null, -1);
const _hoisted_5$6 = [
  _hoisted_2$z,
  _hoisted_3$p,
  _hoisted_4$8
];
function _sfc_render$Q(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$G, _hoisted_5$6);
}
var clock = /* @__PURE__ */ _export_sfc$3(_sfc_main$1a, [["render", _sfc_render$Q]]);

const _sfc_main$19 = defineComponent({
  name: "Close"
});
const _hoisted_1$F = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$y = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
}, null, -1);
const _hoisted_3$o = [
  _hoisted_2$y
];
function _sfc_render$P(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$F, _hoisted_3$o);
}
var close = /* @__PURE__ */ _export_sfc$3(_sfc_main$19, [["render", _sfc_render$P]]);

const _sfc_main$18 = defineComponent({
  name: "DArrowLeft"
});
const _hoisted_1$E = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$x = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z"
}, null, -1);
const _hoisted_3$n = [
  _hoisted_2$x
];
function _sfc_render$O(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$E, _hoisted_3$n);
}
var dArrowLeft = /* @__PURE__ */ _export_sfc$3(_sfc_main$18, [["render", _sfc_render$O]]);

const _sfc_main$17 = defineComponent({
  name: "DArrowRight"
});
const _hoisted_1$D = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$w = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688zm-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z"
}, null, -1);
const _hoisted_3$m = [
  _hoisted_2$w
];
function _sfc_render$N(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$D, _hoisted_3$m);
}
var dArrowRight = /* @__PURE__ */ _export_sfc$3(_sfc_main$17, [["render", _sfc_render$N]]);

const _sfc_main$16 = defineComponent({
  name: "Hide"
});
const _hoisted_1$C = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$v = /* @__PURE__ */ createElementVNode("path", {
  d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$l = /* @__PURE__ */ createElementVNode("path", {
  d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z",
  fill: "currentColor"
}, null, -1);
const _hoisted_4$7 = [
  _hoisted_2$v,
  _hoisted_3$l
];
function _sfc_render$M(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$C, _hoisted_4$7);
}
var hide$2 = /* @__PURE__ */ _export_sfc$3(_sfc_main$16, [["render", _sfc_render$M]]);

const _sfc_main$15 = defineComponent({
  name: "Loading"
});
const _hoisted_1$B = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$u = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
}, null, -1);
const _hoisted_3$k = [
  _hoisted_2$u
];
function _sfc_render$L(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$B, _hoisted_3$k);
}
var loading = /* @__PURE__ */ _export_sfc$3(_sfc_main$15, [["render", _sfc_render$L]]);

const _sfc_main$14 = defineComponent({
  name: "More"
});
const _hoisted_1$A = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$t = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M176 416a112 112 0 1 0 0 224 112 112 0 0 0 0-224m0 64a48 48 0 1 1 0 96 48 48 0 0 1 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96z"
}, null, -1);
const _hoisted_3$j = [
  _hoisted_2$t
];
function _sfc_render$K(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$A, _hoisted_3$j);
}
var more = /* @__PURE__ */ _export_sfc$3(_sfc_main$14, [["render", _sfc_render$K]]);

const _sfc_main$13 = defineComponent({
  name: "View"
});
const _hoisted_1$z = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$s = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"
}, null, -1);
const _hoisted_3$i = [
  _hoisted_2$s
];
function _sfc_render$J(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$z, _hoisted_3$i);
}
var view = /* @__PURE__ */ _export_sfc$3(_sfc_main$13, [["render", _sfc_render$J]]);

const wrapperKey = Symbol();
const propKey = "__elPropsReservedKey";
function buildProp(option, key) {
  if (!isObject$1(option) || !!option[propKey])
    return option;
  const { values, required, default: defaultValue, type, validator } = option;
  const _validator = values || validator ? (val) => {
    let valid = false;
    let allowedValues = [];
    if (values) {
      allowedValues = Array.from(values);
      if (hasOwn$2(option, "default")) {
        allowedValues.push(defaultValue);
      }
      valid || (valid = allowedValues.includes(val));
    }
    if (validator)
      valid || (valid = validator(val));
    if (!valid && allowedValues.length > 0) {
      const allowValuesText = [...new Set(allowedValues)].map((value) => JSON.stringify(value)).join(", ");
      warn(`Invalid prop: validation failed${key ? ` for prop "${key}"` : ""}. Expected one of [${allowValuesText}], got value ${JSON.stringify(val)}.`);
    }
    return valid;
  } : void 0;
  const prop = {
    type: isObject$1(type) && Object.getOwnPropertySymbols(type).includes(wrapperKey) ? type[wrapperKey] : type,
    required: !!required,
    validator: _validator,
    [propKey]: true
  };
  if (hasOwn$2(option, "default"))
    prop.default = defaultValue;
  return prop;
}
const buildProps = (props) => fromPairs(Object.entries(props).map(([key, option]) => [
  key,
  buildProp(option, key)
]));
const definePropType = (val) => ({ [wrapperKey]: val });

const iconPropType = definePropType([
  String,
  Object,
  Function
]);
const ValidateComponentsMap = {
  validating: loading,
  success: circleCheck,
  error: circleClose
};

const withInstall = (main, extra) => {
  main.install = (app) => {
    for (const comp of [main, ...Object.values(extra != null ? extra : {})]) {
      app.component(comp.name, comp);
    }
  };
  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      main[key] = comp;
    }
  }
  return main;
};
const withNoopInstall = (component) => {
  component.install = NOOP;
  return component;
};

const composeRefs = (...refs) => {
  return (el) => {
    refs.forEach((ref) => {
      if (isFunction(ref)) {
        ref(el);
      } else {
        ref.value = el;
      }
    });
  };
};

class ElementPlusError extends Error {
  constructor(m) {
    super(m);
    this.name = "ElementPlusError";
  }
}
function throwError(scope, m) {
  throw new ElementPlusError(`[${scope}] ${m}`);
}
function debugWarn(scope, message) {
}

function addUnit(value, defaultUnit = "px") {
  if (!value)
    return "";
  if (isString$1(value)) {
    return value;
  } else if (isNumber$1(value)) {
    return `${value}${defaultUnit}`;
  }
}

const EVENT_CODE = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
};

const datePickTypes = [
  "year",
  "month",
  "date",
  "dates",
  "week",
  "datetime",
  "datetimerange",
  "daterange",
  "monthrange"
];

const UPDATE_MODEL_EVENT = "update:modelValue";

const componentSizes = ["", "default", "small", "large"];

const isValidComponentSize = (val) => ["", ...componentSizes].includes(val);
const isValidDatePickType = (val) => [...datePickTypes].includes(val);

const castArray = (arr) => {
  if (!arr && arr !== 0)
    return [];
  return Array.isArray(arr) ? arr : [arr];
};

const isFirefox = () => isClient && /firefox/i.test(window.navigator.userAgent);

const isKorean = (text) => /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(text);

const generateId = () => Math.floor(Math.random() * 1e4);

const mutable = (val) => val;

const DEFAULT_EXCLUDE_KEYS = ["class", "style"];
const LISTENER_PREFIX = /^on[A-Z]/;
const useAttrs = (params = {}) => {
  const { excludeListeners = false, excludeKeys = [] } = params;
  const allExcludeKeys = excludeKeys.concat(DEFAULT_EXCLUDE_KEYS);
  const instance = getCurrentInstance();
  if (!instance) {
    return computed(() => ({}));
  }
  return computed(() => {
    var _a;
    return fromPairs(Object.entries((_a = instance.proxy) == null ? void 0 : _a.$attrs).filter(([key]) => !allExcludeKeys.includes(key) && !(excludeListeners && LISTENER_PREFIX.test(key))));
  });
};

const buttonGroupContextKey = Symbol("buttonGroupContextKey");

const configProviderContextKey = Symbol();

const formContextKey = Symbol("formContextKey");
const formItemContextKey = Symbol("formItemContextKey");

const scrollbarContextKey = Symbol("scrollbarContextKey");

const POPPER_INJECTION_KEY = Symbol("popper");
const POPPER_CONTENT_INJECTION_KEY = Symbol("popperContent");

const useProp = (name) => {
  const vm = getCurrentInstance();
  return computed(() => {
    var _a, _b;
    return (_b = (_a = vm.proxy) == null ? void 0 : _a.$props[name]) != null ? _b : void 0;
  });
};

const globalConfig = ref();
function useGlobalConfig(key, defaultValue = void 0) {
  const config = getCurrentInstance() ? inject(configProviderContextKey, globalConfig) : globalConfig;
  if (key) {
    return computed(() => {
      var _a, _b;
      return (_b = (_a = config.value) == null ? void 0 : _a[key]) != null ? _b : defaultValue;
    });
  } else {
    return config;
  }
}
const provideGlobalConfig = (config, app, global = false) => {
  var _a;
  const inSetup = !!getCurrentInstance();
  const oldConfig = inSetup ? useGlobalConfig() : void 0;
  const provideFn = (_a = app == null ? void 0 : app.provide) != null ? _a : inSetup ? provide : void 0;
  if (!provideFn) {
    return;
  }
  const context = computed(() => {
    const cfg = unref(config);
    if (!(oldConfig == null ? void 0 : oldConfig.value))
      return cfg;
    return mergeConfig(oldConfig.value, cfg);
  });
  provideFn(configProviderContextKey, context);
  if (global || !globalConfig.value) {
    globalConfig.value = context.value;
  }
  return context;
};
const mergeConfig = (a, b) => {
  var _a;
  const keys = [.../* @__PURE__ */ new Set([...keysOf(a), ...keysOf(b)])];
  const obj = {};
  for (const key of keys) {
    obj[key] = (_a = b[key]) != null ? _a : a[key];
  }
  return obj;
};

const useSizeProp = buildProp({
  type: String,
  values: componentSizes,
  required: false
});
const useSize = (fallback, ignore = {}) => {
  const emptyRef = ref(void 0);
  const size = ignore.prop ? emptyRef : useProp("size");
  const globalConfig = ignore.global ? emptyRef : useGlobalConfig("size");
  const form = ignore.form ? { size: void 0 } : inject(formContextKey, void 0);
  const formItem = ignore.formItem ? { size: void 0 } : inject(formItemContextKey, void 0);
  return computed(() => size.value || unref(fallback) || (formItem == null ? void 0 : formItem.size) || (form == null ? void 0 : form.size) || globalConfig.value || "");
};
const useDisabled$1 = (fallback) => {
  const disabled = useProp("disabled");
  const form = inject(formContextKey, void 0);
  return computed(() => disabled.value || unref(fallback) || (form == null ? void 0 : form.disabled) || false);
};

const useDeprecated = ({ from, replacement, scope, version, ref, type = "API" }, condition) => {
  watch(() => unref(condition), (val) => {
  }, {
    immediate: true
  });
};

const useFormItem = () => {
  const form = inject(formContextKey, void 0);
  const formItem = inject(formItemContextKey, void 0);
  return {
    form,
    formItem
  };
};

var English = {
  name: "en",
  el: {
    colorpicker: {
      confirm: "OK",
      clear: "Clear"
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      week: "week",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat"
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec"
      }
    },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select"
    },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data"
    },
    pagination: {
      goto: "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
    },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input"
    },
    upload: {
      deleteTip: "press delete to remove",
      delete: "Delete",
      preview: "Preview",
      continue: "Continue"
    },
    table: {
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum"
    },
    tree: {
      emptyText: "No Data"
    },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    }
  }
};

const buildTranslator = (locale) => (path, option) => translate(path, option, unref(locale));
const translate = (path, option, locale) => get(locale, path, path).replace(/\{(\w+)\}/g, (_, key) => {
  var _a;
  return `${(_a = option == null ? void 0 : option[key]) != null ? _a : `{${key}}`}`;
});
const buildLocaleContext = (locale) => {
  const lang = computed(() => unref(locale).name);
  const localeRef = isRef(locale) ? locale : ref(locale);
  return {
    lang,
    locale: localeRef,
    t: buildTranslator(locale)
  };
};
const useLocale = () => {
  const locale = useGlobalConfig("locale");
  return buildLocaleContext(computed(() => locale.value || English));
};

const _prop = buildProp({
  type: definePropType(Boolean),
  default: null
});
const _event = buildProp({
  type: definePropType(Function)
});
const createModelToggleComposable = (name) => {
  const useModelToggleProps2 = {
    [name]: _prop,
    [`onUpdate:${name}`]: _event
  };
  const useModelToggleEmits2 = [`update:${name}`];
  const useModelToggle2 = ({
    indicator,
    shouldHideWhenRouteChanges,
    shouldProceed,
    onShow,
    onHide
  }) => {
    const instance = getCurrentInstance();
    const props = instance.props;
    const { emit } = instance;
    const updateEventKey = `update:${name}`;
    const hasUpdateHandler = computed(() => isFunction(props[`onUpdate:${name}`]));
    const isModelBindingAbsent = computed(() => props[name] === null);
    const doShow = () => {
      if (indicator.value === true) {
        return;
      }
      indicator.value = true;
      if (isFunction(onShow)) {
        onShow();
      }
    };
    const doHide = () => {
      if (indicator.value === false) {
        return;
      }
      indicator.value = false;
      if (isFunction(onHide)) {
        onHide();
      }
    };
    const show = () => {
      if (props.disabled === true || isFunction(shouldProceed) && !shouldProceed())
        return;
      const shouldEmit = hasUpdateHandler.value && isClient;
      if (shouldEmit) {
        emit(updateEventKey, true);
      }
      if (isModelBindingAbsent.value || !shouldEmit) {
        doShow();
      }
    };
    const hide = () => {
      if (props.disabled === true || !isClient)
        return;
      const shouldEmit = hasUpdateHandler.value && isClient;
      if (shouldEmit) {
        emit(updateEventKey, false);
      }
      if (isModelBindingAbsent.value || !shouldEmit) {
        doHide();
      }
    };
    const onChange = (val) => {
      if (!isBoolean$1(val))
        return;
      if (props.disabled && val) {
        if (hasUpdateHandler.value) {
          emit(updateEventKey, false);
        }
      } else if (indicator.value !== val) {
        if (val) {
          doShow();
        } else {
          doHide();
        }
      }
    };
    const toggle = () => {
      if (indicator.value) {
        hide();
      } else {
        show();
      }
    };
    watch(() => props[name], onChange);
    if (shouldHideWhenRouteChanges && instance.appContext.config.globalProperties.$route !== void 0) {
      watch(() => ({
        ...instance.proxy.$route
      }), () => {
        if (shouldHideWhenRouteChanges.value && indicator.value) {
          hide();
        }
      });
    }
    onMounted(() => {
      onChange(props[name]);
    });
    return {
      hide,
      show,
      toggle
    };
  };
  return {
    useModelToggle: useModelToggle2,
    useModelToggleProps: useModelToggleProps2,
    useModelToggleEmits: useModelToggleEmits2
  };
};

function useTimeout() {
  let timeoutHandle;
  const registerTimeout = (fn, delay) => {
    cancelTimeout();
    timeoutHandle = window.setTimeout(fn, delay);
  };
  const cancelTimeout = () => window.clearTimeout(timeoutHandle);
  tryOnScopeDispose(() => cancelTimeout());
  return {
    registerTimeout,
    cancelTimeout
  };
}

const defaultIdInjection = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
};
const ID_INJECTION_KEY = Symbol("elIdInjection");
const useId = (deterministicId) => {
  const idInjection = inject(ID_INJECTION_KEY, defaultIdInjection);
  const idRef = computed(() => unref(deterministicId) || `el-id-${idInjection.prefix}-${idInjection.current++}`);
  return idRef;
};

const useEscapeKeydown = (handler) => {
  const cachedHandler = (e) => {
    const event = e;
    if (event.key === EVENT_CODE.esc) {
      handler == null ? void 0 : handler(event);
    }
  };
  onMounted(() => {
    on(document, "keydown", cachedHandler);
  });
  onBeforeUnmount(() => {
    off(document, "keydown", cachedHandler);
  });
};

let cachedContainer;
const POPPER_CONTAINER_ID = `el-popper-container-${generateId()}`;
const POPPER_CONTAINER_SELECTOR = `#${POPPER_CONTAINER_ID}`;
const createContainer = () => {
  const container = document.createElement("div");
  container.id = POPPER_CONTAINER_ID;
  document.body.appendChild(container);
  return container;
};
const usePopperContainer = () => {
  onBeforeMount(() => {
    if (!isClient)
      return;
    if (!cachedContainer || !document.body.querySelector(POPPER_CONTAINER_SELECTOR)) {
      cachedContainer = createContainer();
    }
  });
};

const useDelayedToggleProps = buildProps({
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  }
});
const useDelayedToggle = ({
  showAfter,
  hideAfter,
  open,
  close
}) => {
  const { registerTimeout } = useTimeout();
  const onOpen = () => {
    registerTimeout(() => {
      open();
    }, unref(showAfter));
  };
  const onClose = () => {
    registerTimeout(() => {
      close();
    }, unref(hideAfter));
  };
  return {
    onOpen,
    onClose
  };
};

const FORWARD_REF_INJECTION_KEY = Symbol("elForwardRef");
const useForwardRef = (forwardRef) => {
  const setForwardRef = (el) => {
    forwardRef.value = el;
  };
  provide(FORWARD_REF_INJECTION_KEY, {
    setForwardRef
  });
};
const useForwardRefDirective = (setForwardRef) => {
  return {
    mounted(el) {
      setForwardRef(el);
    },
    updated(el) {
      setForwardRef(el);
    },
    unmounted() {
      setForwardRef(null);
    }
  };
};

const defaultNamespace = "el";
const statePrefix = "is-";
const _bem = (namespace, block, blockSuffix, element, modifier) => {
  let cls = `${namespace}-${block}`;
  if (blockSuffix) {
    cls += `-${blockSuffix}`;
  }
  if (element) {
    cls += `__${element}`;
  }
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
};
const useNamespace = (block) => {
  const globalConfig = useGlobalConfig("namespace");
  const namespace = computed(() => globalConfig.value || defaultNamespace);
  const b = (blockSuffix = "") => _bem(unref(namespace), block, blockSuffix, "", "");
  const e = (element) => element ? _bem(unref(namespace), block, "", element, "") : "";
  const m = (modifier) => modifier ? _bem(unref(namespace), block, "", "", modifier) : "";
  const be = (blockSuffix, element) => blockSuffix && element ? _bem(unref(namespace), block, blockSuffix, element, "") : "";
  const em = (element, modifier) => element && modifier ? _bem(unref(namespace), block, "", element, modifier) : "";
  const bm = (blockSuffix, modifier) => blockSuffix && modifier ? _bem(unref(namespace), block, blockSuffix, "", modifier) : "";
  const bem = (blockSuffix, element, modifier) => blockSuffix && element && modifier ? _bem(unref(namespace), block, blockSuffix, element, modifier) : "";
  const is = (name, ...args) => {
    const state = args.length >= 1 ? args[0] : true;
    return name && state ? `${statePrefix}${name}` : "";
  };
  return {
    namespace,
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is
  };
};

const zIndex = ref(0);
const useZIndex = () => {
  const initialZIndex = useGlobalConfig("zIndex", 2e3);
  const currentZIndex = computed(() => initialZIndex.value + zIndex.value);
  const nextZIndex = () => {
    zIndex.value++;
    return currentZIndex.value;
  };
  return {
    initialZIndex,
    currentZIndex,
    nextZIndex
  };
};

var _export_sfc$2 = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const iconProps = buildProps({
  size: {
    type: definePropType([Number, String])
  },
  color: {
    type: String
  }
});

const __default__$9 = {
  name: "ElIcon",
  inheritAttrs: false
};
const _sfc_main$12 = /* @__PURE__ */ defineComponent({
  ...__default__$9,
  props: iconProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("icon");
    const style = computed(() => {
      if (!props.size && !props.color)
        return {};
      return {
        fontSize: isUndefined(props.size) ? void 0 : addUnit(props.size),
        "--color": props.color
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("i", mergeProps({
        class: unref(ns).b(),
        style: unref(style)
      }, _ctx.$attrs), [
        renderSlot(_ctx.$slots, "default")
      ], 16);
    };
  }
});
var Icon = /* @__PURE__ */ _export_sfc$2(_sfc_main$12, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);

const ElIcon = withInstall(Icon);

let hiddenTextarea = void 0;
const HIDDEN_STYLE = `
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`;
const CONTEXT_STYLE = [
  "letter-spacing",
  "line-height",
  "padding-top",
  "padding-bottom",
  "font-family",
  "font-weight",
  "font-size",
  "text-rendering",
  "text-transform",
  "width",
  "text-indent",
  "padding-left",
  "padding-right",
  "border-width",
  "box-sizing"
];
function calculateNodeStyling(targetElement) {
  const style = window.getComputedStyle(targetElement);
  const boxSizing = style.getPropertyValue("box-sizing");
  const paddingSize = Number.parseFloat(style.getPropertyValue("padding-bottom")) + Number.parseFloat(style.getPropertyValue("padding-top"));
  const borderSize = Number.parseFloat(style.getPropertyValue("border-bottom-width")) + Number.parseFloat(style.getPropertyValue("border-top-width"));
  const contextStyle = CONTEXT_STYLE.map((name) => `${name}:${style.getPropertyValue(name)}`).join(";");
  return { contextStyle, paddingSize, borderSize, boxSizing };
}
function calcTextareaHeight(targetElement, minRows = 1, maxRows) {
  var _a;
  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement("textarea");
    document.body.appendChild(hiddenTextarea);
  }
  const { paddingSize, borderSize, boxSizing, contextStyle } = calculateNodeStyling(targetElement);
  hiddenTextarea.setAttribute("style", `${contextStyle};${HIDDEN_STYLE}`);
  hiddenTextarea.value = targetElement.value || targetElement.placeholder || "";
  let height = hiddenTextarea.scrollHeight;
  const result = {};
  if (boxSizing === "border-box") {
    height = height + borderSize;
  } else if (boxSizing === "content-box") {
    height = height - paddingSize;
  }
  hiddenTextarea.value = "";
  const singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
  if (isNumber$1(minRows)) {
    let minHeight = singleRowHeight * minRows;
    if (boxSizing === "border-box") {
      minHeight = minHeight + paddingSize + borderSize;
    }
    height = Math.max(minHeight, height);
    result.minHeight = `${minHeight}px`;
  }
  if (isNumber$1(maxRows)) {
    let maxHeight = singleRowHeight * maxRows;
    if (boxSizing === "border-box") {
      maxHeight = maxHeight + paddingSize + borderSize;
    }
    height = Math.min(maxHeight, height);
  }
  result.height = `${height}px`;
  (_a = hiddenTextarea.parentNode) == null ? void 0 : _a.removeChild(hiddenTextarea);
  hiddenTextarea = void 0;
  return result;
}

const inputProps = buildProps({
  size: useSizeProp,
  disabled: Boolean,
  modelValue: {
    type: definePropType([
      String,
      Number,
      Object
    ]),
    default: ""
  },
  type: {
    type: String,
    default: "text"
  },
  resize: {
    type: String,
    values: ["none", "both", "horizontal", "vertical"]
  },
  autosize: {
    type: definePropType([Boolean, Object]),
    default: false
  },
  autocomplete: {
    type: String,
    default: "off"
  },
  placeholder: {
    type: String
  },
  form: {
    type: String,
    default: ""
  },
  readonly: {
    type: Boolean,
    default: false
  },
  clearable: {
    type: Boolean,
    default: false
  },
  showPassword: {
    type: Boolean,
    default: false
  },
  showWordLimit: {
    type: Boolean,
    default: false
  },
  suffixIcon: {
    type: iconPropType,
    default: ""
  },
  prefixIcon: {
    type: iconPropType,
    default: ""
  },
  label: {
    type: String
  },
  tabindex: {
    type: [Number, String]
  },
  validateEvent: {
    type: Boolean,
    default: true
  },
  inputStyle: {
    type: definePropType([Object, Array, String]),
    default: () => mutable({})
  }
});
const inputEmits = {
  [UPDATE_MODEL_EVENT]: (value) => isString$1(value),
  input: (value) => isString$1(value),
  change: (value) => isString$1(value),
  focus: (evt) => evt instanceof FocusEvent,
  blur: (evt) => evt instanceof FocusEvent,
  clear: () => true,
  mouseleave: (evt) => evt instanceof MouseEvent,
  mouseenter: (evt) => evt instanceof MouseEvent,
  keydown: (evt) => evt instanceof Event,
  compositionstart: (evt) => evt instanceof CompositionEvent,
  compositionupdate: (evt) => evt instanceof CompositionEvent,
  compositionend: (evt) => evt instanceof CompositionEvent
};

const _hoisted_1$y = ["type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder"];
const _hoisted_2$r = ["tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder"];
const __default__$8 = {
  name: "ElInput",
  inheritAttrs: false
};
const _sfc_main$11 = /* @__PURE__ */ defineComponent({
  ...__default__$8,
  props: inputProps,
  emits: inputEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const PENDANT_MAP = {
      suffix: "append",
      prefix: "prepend"
    };
    const instance = getCurrentInstance();
    const rawAttrs = useAttrs$1();
    const slots = useSlots();
    const attrs = useAttrs();
    const { form, formItem } = useFormItem();
    const inputSize = useSize();
    const inputDisabled = useDisabled$1();
    const nsInput = useNamespace("input");
    const nsTextarea = useNamespace("textarea");
    const input = shallowRef();
    const textarea = shallowRef();
    const focused = ref(false);
    const hovering = ref(false);
    const isComposing = ref(false);
    const passwordVisible = ref(false);
    const textareaCalcStyle = shallowRef(props.inputStyle);
    const _ref = computed(() => input.value || textarea.value);
    const needStatusIcon = computed(() => {
      var _a;
      return (_a = form == null ? void 0 : form.statusIcon) != null ? _a : false;
    });
    const validateState = computed(() => (formItem == null ? void 0 : formItem.validateState) || "");
    const validateIcon = computed(() => ValidateComponentsMap[validateState.value]);
    const passwordIcon = computed(() => passwordVisible.value ? view : hide$2);
    const containerStyle = computed(() => [
      rawAttrs.style,
      props.inputStyle
    ]);
    const textareaStyle = computed(() => [
      props.inputStyle,
      textareaCalcStyle.value,
      { resize: props.resize }
    ]);
    const nativeInputValue = computed(() => isNil(props.modelValue) ? "" : String(props.modelValue));
    const showClear = computed(() => props.clearable && !inputDisabled.value && !props.readonly && !!nativeInputValue.value && (focused.value || hovering.value));
    const showPwdVisible = computed(() => props.showPassword && !inputDisabled.value && !props.readonly && (!!nativeInputValue.value || focused.value));
    const isWordLimitVisible = computed(() => props.showWordLimit && !!attrs.value.maxlength && (props.type === "text" || props.type === "textarea") && !inputDisabled.value && !props.readonly && !props.showPassword);
    const textLength = computed(() => Array.from(nativeInputValue.value).length);
    const inputExceed = computed(() => !!isWordLimitVisible.value && textLength.value > Number(attrs.value.maxlength));
    const suffixVisible = computed(() => !!slots.suffix || !!props.suffixIcon || showClear.value || props.showPassword || isWordLimitVisible.value || !!validateState.value && needStatusIcon.value);
    const resizeTextarea = () => {
      const { type, autosize } = props;
      if (!isClient || type !== "textarea")
        return;
      if (autosize) {
        const minRows = isObject$1(autosize) ? autosize.minRows : void 0;
        const maxRows = isObject$1(autosize) ? autosize.maxRows : void 0;
        textareaCalcStyle.value = {
          ...calcTextareaHeight(textarea.value, minRows, maxRows)
        };
      } else {
        textareaCalcStyle.value = {
          minHeight: calcTextareaHeight(textarea.value).minHeight
        };
      }
    };
    const setNativeInputValue = () => {
      const input2 = _ref.value;
      if (!input2 || input2.value === nativeInputValue.value)
        return;
      input2.value = nativeInputValue.value;
    };
    const calcIconOffset = (place) => {
      const { el } = instance.vnode;
      if (!el)
        return;
      const elList = Array.from(el.querySelectorAll(`.${nsInput.e(place)}`));
      const target = elList.find((item) => item.parentNode === el);
      if (!target)
        return;
      const pendant = PENDANT_MAP[place];
      if (slots[pendant]) {
        target.style.transform = `translateX(${place === "suffix" ? "-" : ""}${el.querySelector(`.${nsInput.be("group", pendant)}`).offsetWidth}px)`;
      } else {
        target.removeAttribute("style");
      }
    };
    const updateIconOffset = () => {
      calcIconOffset("prefix");
      calcIconOffset("suffix");
    };
    const handleInput = async (event) => {
      const { value } = event.target;
      if (isComposing.value)
        return;
      if (value === nativeInputValue.value)
        return;
      emit(UPDATE_MODEL_EVENT, value);
      emit("input", value);
      await nextTick();
      setNativeInputValue();
    };
    const handleChange = (event) => {
      emit("change", event.target.value);
    };
    const handleCompositionStart = (event) => {
      emit("compositionstart", event);
      isComposing.value = true;
    };
    const handleCompositionUpdate = (event) => {
      var _a;
      emit("compositionupdate", event);
      const text = (_a = event.target) == null ? void 0 : _a.value;
      const lastCharacter = text[text.length - 1] || "";
      isComposing.value = !isKorean(lastCharacter);
    };
    const handleCompositionEnd = (event) => {
      emit("compositionend", event);
      if (isComposing.value) {
        isComposing.value = false;
        handleInput(event);
      }
    };
    const handlePasswordVisible = () => {
      passwordVisible.value = !passwordVisible.value;
      focus();
    };
    const focus = async () => {
      var _a;
      await nextTick();
      (_a = _ref.value) == null ? void 0 : _a.focus();
    };
    const blur = () => {
      var _a;
      return (_a = _ref.value) == null ? void 0 : _a.blur();
    };
    const handleFocus = (event) => {
      focused.value = true;
      emit("focus", event);
    };
    const handleBlur = (event) => {
      var _a;
      focused.value = false;
      emit("blur", event);
      if (props.validateEvent) {
        (_a = formItem == null ? void 0 : formItem.validate) == null ? void 0 : _a.call(formItem, "blur").catch((err) => debugWarn());
      }
    };
    const handleMouseLeave = (evt) => {
      hovering.value = false;
      emit("mouseleave", evt);
    };
    const handleMouseEnter = (evt) => {
      hovering.value = true;
      emit("mouseenter", evt);
    };
    const handleKeydown = (evt) => {
      emit("keydown", evt);
    };
    const select = () => {
      var _a;
      (_a = _ref.value) == null ? void 0 : _a.select();
    };
    const clear = () => {
      emit(UPDATE_MODEL_EVENT, "");
      emit("change", "");
      emit("clear");
      emit("input", "");
    };
    watch(() => props.modelValue, () => {
      var _a;
      nextTick(() => resizeTextarea());
      if (props.validateEvent) {
        (_a = formItem == null ? void 0 : formItem.validate) == null ? void 0 : _a.call(formItem, "change").catch((err) => debugWarn());
      }
    });
    watch(nativeInputValue, () => setNativeInputValue());
    watch(() => props.type, async () => {
      await nextTick();
      setNativeInputValue();
      resizeTextarea();
      updateIconOffset();
    });
    onMounted(async () => {
      setNativeInputValue();
      updateIconOffset();
      await nextTick();
      resizeTextarea();
    });
    onUpdated(async () => {
      await nextTick();
      updateIconOffset();
    });
    expose({
      input,
      textarea,
      ref: _ref,
      textareaStyle,
      autosize: toRef(props, "autosize"),
      focus,
      blur,
      select,
      clear,
      resizeTextarea
    });
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", {
        class: normalizeClass([
          _ctx.type === "textarea" ? unref(nsTextarea).b() : unref(nsInput).b(),
          unref(nsInput).m(unref(inputSize)),
          unref(nsInput).is("disabled", unref(inputDisabled)),
          unref(nsInput).is("exceed", unref(inputExceed)),
          {
            [unref(nsInput).b("group")]: _ctx.$slots.prepend || _ctx.$slots.append,
            [unref(nsInput).bm("group", "append")]: _ctx.$slots.append,
            [unref(nsInput).bm("group", "prepend")]: _ctx.$slots.prepend,
            [unref(nsInput).m("prefix")]: _ctx.$slots.prefix || _ctx.prefixIcon,
            [unref(nsInput).m("suffix")]: _ctx.$slots.suffix || _ctx.suffixIcon || _ctx.clearable || _ctx.showPassword,
            [unref(nsInput).bm("suffix", "password-clear")]: unref(showClear) && unref(showPwdVisible)
          },
          _ctx.$attrs.class
        ]),
        style: normalizeStyle(unref(containerStyle)),
        onMouseenter: handleMouseEnter,
        onMouseleave: handleMouseLeave
      }, [
        createCommentVNode(" input "),
        _ctx.type !== "textarea" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createCommentVNode(" prepend slot "),
          _ctx.$slots.prepend ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref(nsInput).be("group", "prepend"))
          }, [
            renderSlot(_ctx.$slots, "prepend")
          ], 2)) : createCommentVNode("v-if", true),
          createElementVNode("div", {
            class: normalizeClass([unref(nsInput).e("wrapper"), unref(nsInput).is("focus", focused.value)])
          }, [
            createCommentVNode(" prefix slot "),
            _ctx.$slots.prefix || _ctx.prefixIcon ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: normalizeClass(unref(nsInput).e("prefix"))
            }, [
              createElementVNode("span", {
                class: normalizeClass(unref(nsInput).e("prefix-inner"))
              }, [
                renderSlot(_ctx.$slots, "prefix"),
                _ctx.prefixIcon ? (openBlock(), createBlock(unref(ElIcon), {
                  key: 0,
                  class: normalizeClass(unref(nsInput).e("icon"))
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(_ctx.prefixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : createCommentVNode("v-if", true)
              ], 2)
            ], 2)) : createCommentVNode("v-if", true),
            createElementVNode("input", mergeProps({
              ref_key: "input",
              ref: input,
              class: unref(nsInput).e("inner")
            }, unref(attrs), {
              type: _ctx.showPassword ? passwordVisible.value ? "text" : "password" : _ctx.type,
              disabled: unref(inputDisabled),
              readonly: _ctx.readonly,
              autocomplete: _ctx.autocomplete,
              tabindex: _ctx.tabindex,
              "aria-label": _ctx.label,
              placeholder: _ctx.placeholder,
              style: _ctx.inputStyle,
              onCompositionstart: handleCompositionStart,
              onCompositionupdate: handleCompositionUpdate,
              onCompositionend: handleCompositionEnd,
              onInput: handleInput,
              onFocus: handleFocus,
              onBlur: handleBlur,
              onChange: handleChange,
              onKeydown: handleKeydown
            }), null, 16, _hoisted_1$y),
            createCommentVNode(" suffix slot "),
            unref(suffixVisible) ? (openBlock(), createElementBlock("span", {
              key: 1,
              class: normalizeClass(unref(nsInput).e("suffix"))
            }, [
              createElementVNode("span", {
                class: normalizeClass(unref(nsInput).e("suffix-inner"))
              }, [
                !unref(showClear) || !unref(showPwdVisible) || !unref(isWordLimitVisible) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  renderSlot(_ctx.$slots, "suffix"),
                  _ctx.suffixIcon ? (openBlock(), createBlock(unref(ElIcon), {
                    key: 0,
                    class: normalizeClass(unref(nsInput).e("icon"))
                  }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(resolveDynamicComponent(_ctx.suffixIcon)))
                    ]),
                    _: 1
                  }, 8, ["class"])) : createCommentVNode("v-if", true)
                ], 64)) : createCommentVNode("v-if", true),
                unref(showClear) ? (openBlock(), createBlock(unref(ElIcon), {
                  key: 1,
                  class: normalizeClass([unref(nsInput).e("icon"), unref(nsInput).e("clear")]),
                  onMousedown: _cache[0] || (_cache[0] = withModifiers(() => {
                  }, ["prevent"])),
                  onClick: clear
                }, {
                  default: withCtx(() => [
                    createVNode(unref(circleClose))
                  ]),
                  _: 1
                }, 8, ["class"])) : createCommentVNode("v-if", true),
                unref(showPwdVisible) ? (openBlock(), createBlock(unref(ElIcon), {
                  key: 2,
                  class: normalizeClass([unref(nsInput).e("icon"), unref(nsInput).e("password")]),
                  onClick: handlePasswordVisible
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(unref(passwordIcon))))
                  ]),
                  _: 1
                }, 8, ["class"])) : createCommentVNode("v-if", true),
                unref(isWordLimitVisible) ? (openBlock(), createElementBlock("span", {
                  key: 3,
                  class: normalizeClass(unref(nsInput).e("count"))
                }, [
                  createElementVNode("span", {
                    class: normalizeClass(unref(nsInput).e("count-inner"))
                  }, toDisplayString(unref(textLength)) + " / " + toDisplayString(unref(attrs).maxlength), 3)
                ], 2)) : createCommentVNode("v-if", true)
              ], 2),
              unref(validateState) && unref(validateIcon) && unref(needStatusIcon) ? (openBlock(), createBlock(unref(ElIcon), {
                key: 0,
                class: normalizeClass([
                  unref(nsInput).e("icon"),
                  unref(nsInput).e("validateIcon"),
                  unref(nsInput).is("loading", unref(validateState) === "validating")
                ])
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(unref(validateIcon))))
                ]),
                _: 1
              }, 8, ["class"])) : createCommentVNode("v-if", true)
            ], 2)) : createCommentVNode("v-if", true)
          ], 2),
          createCommentVNode(" append slot "),
          _ctx.$slots.append ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(unref(nsInput).be("group", "append"))
          }, [
            renderSlot(_ctx.$slots, "append")
          ], 2)) : createCommentVNode("v-if", true)
        ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createCommentVNode(" textarea "),
          createElementVNode("textarea", mergeProps({
            ref_key: "textarea",
            ref: textarea,
            class: unref(nsTextarea).e("inner")
          }, unref(attrs), {
            tabindex: _ctx.tabindex,
            disabled: unref(inputDisabled),
            readonly: _ctx.readonly,
            autocomplete: _ctx.autocomplete,
            style: unref(textareaStyle),
            "aria-label": _ctx.label,
            placeholder: _ctx.placeholder,
            onCompositionstart: handleCompositionStart,
            onCompositionupdate: handleCompositionUpdate,
            onCompositionend: handleCompositionEnd,
            onInput: handleInput,
            onFocus: handleFocus,
            onBlur: handleBlur,
            onChange: handleChange,
            onKeydown: handleKeydown
          }), null, 16, _hoisted_2$r),
          unref(isWordLimitVisible) ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass(unref(nsInput).e("count"))
          }, toDisplayString(unref(textLength)) + " / " + toDisplayString(unref(attrs).maxlength), 3)) : createCommentVNode("v-if", true)
        ], 64))
      ], 38)), [
        [vShow, _ctx.type !== "hidden"]
      ]);
    };
  }
});
var Input = /* @__PURE__ */ _export_sfc$2(_sfc_main$11, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);

const ElInput = withInstall(Input);

const BAR_MAP = {
  vertical: {
    offset: "offsetHeight",
    scroll: "scrollTop",
    scrollSize: "scrollHeight",
    size: "height",
    key: "vertical",
    axis: "Y",
    client: "clientY",
    direction: "top"
  },
  horizontal: {
    offset: "offsetWidth",
    scroll: "scrollLeft",
    scrollSize: "scrollWidth",
    size: "width",
    key: "horizontal",
    axis: "X",
    client: "clientX",
    direction: "left"
  }
};
const renderThumbStyle = ({ move, size, bar }) => ({
  [bar.size]: size,
  transform: `translate${bar.axis}(${move}%)`
});

const thumbProps = buildProps({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: true
  },
  always: Boolean
});

const COMPONENT_NAME$4 = "Thumb";
const _sfc_main$10 = defineComponent({
  name: COMPONENT_NAME$4,
  props: thumbProps,
  setup(props) {
    const scrollbar = inject(scrollbarContextKey);
    const ns = useNamespace("scrollbar");
    if (!scrollbar)
      throwError(COMPONENT_NAME$4, "can not inject scrollbar context");
    const instance = ref();
    const thumb = ref();
    const thumbState = ref({});
    const visible = ref(false);
    let cursorDown = false;
    let cursorLeave = false;
    let originalOnSelectStart = isClient ? document.onselectstart : null;
    const bar = computed(() => BAR_MAP[props.vertical ? "vertical" : "horizontal"]);
    const thumbStyle = computed(() => renderThumbStyle({
      size: props.size,
      move: props.move,
      bar: bar.value
    }));
    const offsetRatio = computed(() => instance.value[bar.value.offset] ** 2 / scrollbar.wrapElement[bar.value.scrollSize] / props.ratio / thumb.value[bar.value.offset]);
    const clickThumbHandler = (e) => {
      var _a;
      e.stopPropagation();
      if (e.ctrlKey || [1, 2].includes(e.button))
        return;
      (_a = window.getSelection()) == null ? void 0 : _a.removeAllRanges();
      startDrag(e);
      const el = e.currentTarget;
      if (!el)
        return;
      thumbState.value[bar.value.axis] = el[bar.value.offset] - (e[bar.value.client] - el.getBoundingClientRect()[bar.value.direction]);
    };
    const clickTrackHandler = (e) => {
      if (!thumb.value || !instance.value || !scrollbar.wrapElement)
        return;
      const offset = Math.abs(e.target.getBoundingClientRect()[bar.value.direction] - e[bar.value.client]);
      const thumbHalf = thumb.value[bar.value.offset] / 2;
      const thumbPositionPercentage = (offset - thumbHalf) * 100 * offsetRatio.value / instance.value[bar.value.offset];
      scrollbar.wrapElement[bar.value.scroll] = thumbPositionPercentage * scrollbar.wrapElement[bar.value.scrollSize] / 100;
    };
    const startDrag = (e) => {
      e.stopImmediatePropagation();
      cursorDown = true;
      document.addEventListener("mousemove", mouseMoveDocumentHandler);
      document.addEventListener("mouseup", mouseUpDocumentHandler);
      originalOnSelectStart = document.onselectstart;
      document.onselectstart = () => false;
    };
    const mouseMoveDocumentHandler = (e) => {
      if (!instance.value || !thumb.value)
        return;
      if (cursorDown === false)
        return;
      const prevPage = thumbState.value[bar.value.axis];
      if (!prevPage)
        return;
      const offset = (instance.value.getBoundingClientRect()[bar.value.direction] - e[bar.value.client]) * -1;
      const thumbClickPosition = thumb.value[bar.value.offset] - prevPage;
      const thumbPositionPercentage = (offset - thumbClickPosition) * 100 * offsetRatio.value / instance.value[bar.value.offset];
      scrollbar.wrapElement[bar.value.scroll] = thumbPositionPercentage * scrollbar.wrapElement[bar.value.scrollSize] / 100;
    };
    const mouseUpDocumentHandler = () => {
      cursorDown = false;
      thumbState.value[bar.value.axis] = 0;
      document.removeEventListener("mousemove", mouseMoveDocumentHandler);
      document.removeEventListener("mouseup", mouseUpDocumentHandler);
      restoreOnselectstart();
      if (cursorLeave)
        visible.value = false;
    };
    const mouseMoveScrollbarHandler = () => {
      cursorLeave = false;
      visible.value = !!props.size;
    };
    const mouseLeaveScrollbarHandler = () => {
      cursorLeave = true;
      visible.value = cursorDown;
    };
    onBeforeUnmount(() => {
      restoreOnselectstart();
      document.removeEventListener("mouseup", mouseUpDocumentHandler);
    });
    const restoreOnselectstart = () => {
      if (document.onselectstart !== originalOnSelectStart)
        document.onselectstart = originalOnSelectStart;
    };
    useEventListener(toRef(scrollbar, "scrollbarElement"), "mousemove", mouseMoveScrollbarHandler);
    useEventListener(toRef(scrollbar, "scrollbarElement"), "mouseleave", mouseLeaveScrollbarHandler);
    return {
      ns,
      instance,
      thumb,
      bar,
      thumbStyle,
      visible,
      clickTrackHandler,
      clickThumbHandler
    };
  }
});
function _sfc_render$I(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, {
    name: _ctx.ns.b("fade")
  }, {
    default: withCtx(() => [
      withDirectives(createElementVNode("div", {
        ref: "instance",
        class: normalizeClass([_ctx.ns.e("bar"), _ctx.ns.is(_ctx.bar.key)]),
        onMousedown: _cache[1] || (_cache[1] = (...args) => _ctx.clickTrackHandler && _ctx.clickTrackHandler(...args))
      }, [
        createElementVNode("div", {
          ref: "thumb",
          class: normalizeClass(_ctx.ns.e("thumb")),
          style: normalizeStyle(_ctx.thumbStyle),
          onMousedown: _cache[0] || (_cache[0] = (...args) => _ctx.clickThumbHandler && _ctx.clickThumbHandler(...args))
        }, null, 38)
      ], 34), [
        [vShow, _ctx.always || _ctx.visible]
      ])
    ]),
    _: 1
  }, 8, ["name"]);
}
var Thumb = /* @__PURE__ */ _export_sfc$2(_sfc_main$10, [["render", _sfc_render$I], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);

const barProps = buildProps({
  always: {
    type: Boolean,
    default: true
  },
  width: {
    type: String,
    default: ""
  },
  height: {
    type: String,
    default: ""
  },
  ratioX: {
    type: Number,
    default: 1
  },
  ratioY: {
    type: Number,
    default: 1
  }
});

const _sfc_main$$ = defineComponent({
  components: {
    Thumb
  },
  props: barProps,
  setup(props) {
    const moveX = ref(0);
    const moveY = ref(0);
    const GAP = 4;
    const handleScroll = (wrap) => {
      if (wrap) {
        const offsetHeight = wrap.offsetHeight - GAP;
        const offsetWidth = wrap.offsetWidth - GAP;
        moveY.value = wrap.scrollTop * 100 / offsetHeight * props.ratioY;
        moveX.value = wrap.scrollLeft * 100 / offsetWidth * props.ratioX;
      }
    };
    return {
      handleScroll,
      moveX,
      moveY
    };
  }
});
function _sfc_render$H(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_thumb = resolveComponent("thumb");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_thumb, {
      move: _ctx.moveX,
      ratio: _ctx.ratioX,
      size: _ctx.width,
      always: _ctx.always
    }, null, 8, ["move", "ratio", "size", "always"]),
    createVNode(_component_thumb, {
      move: _ctx.moveY,
      ratio: _ctx.ratioY,
      size: _ctx.height,
      vertical: "",
      always: _ctx.always
    }, null, 8, ["move", "ratio", "size", "always"])
  ], 64);
}
var Bar = /* @__PURE__ */ _export_sfc$2(_sfc_main$$, [["render", _sfc_render$H], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);

const scrollbarProps = buildProps({
  height: {
    type: [String, Number],
    default: ""
  },
  maxHeight: {
    type: [String, Number],
    default: ""
  },
  native: {
    type: Boolean,
    default: false
  },
  wrapStyle: {
    type: definePropType([String, Object, Array]),
    default: ""
  },
  wrapClass: {
    type: [String, Array],
    default: ""
  },
  viewClass: {
    type: [String, Array],
    default: ""
  },
  viewStyle: {
    type: [String, Array, Object],
    default: ""
  },
  noresize: Boolean,
  tag: {
    type: String,
    default: "div"
  },
  always: {
    type: Boolean,
    default: false
  },
  minSize: {
    type: Number,
    default: 20
  }
});
const scrollbarEmits = {
  scroll: ({
    scrollTop,
    scrollLeft
  }) => isNumber$1(scrollTop) && isNumber$1(scrollLeft)
};

const _sfc_main$_ = defineComponent({
  name: "ElScrollbar",
  components: {
    Bar
  },
  props: scrollbarProps,
  emits: scrollbarEmits,
  setup(props, { emit }) {
    const ns = useNamespace("scrollbar");
    let stopResizeObserver = void 0;
    let stopResizeListener = void 0;
    const scrollbar$ = ref();
    const wrap$ = ref();
    const resize$ = ref();
    const sizeWidth = ref("0");
    const sizeHeight = ref("0");
    const barRef = ref();
    const moveX = ref(0);
    const moveY = ref(0);
    const ratioY = ref(1);
    const ratioX = ref(1);
    const GAP = 4;
    const style = computed(() => {
      const style2 = {};
      if (props.height)
        style2.height = addUnit(props.height);
      if (props.maxHeight)
        style2.maxHeight = addUnit(props.maxHeight);
      return [props.wrapStyle, style2];
    });
    const handleScroll = () => {
      var _a;
      if (wrap$.value) {
        (_a = barRef.value) == null ? void 0 : _a.handleScroll(wrap$.value);
        emit("scroll", {
          scrollTop: wrap$.value.scrollTop,
          scrollLeft: wrap$.value.scrollLeft
        });
      }
    };
    function scrollTo(arg1, arg2) {
      if (isObject$1(arg1)) {
        wrap$.value.scrollTo(arg1);
      } else if (isNumber$1(arg1) && isNumber$1(arg2)) {
        wrap$.value.scrollTo(arg1, arg2);
      }
    }
    const setScrollTop = (value) => {
      if (!isNumber$1(value)) {
        return;
      }
      wrap$.value.scrollTop = value;
    };
    const setScrollLeft = (value) => {
      if (!isNumber$1(value)) {
        return;
      }
      wrap$.value.scrollLeft = value;
    };
    const update = () => {
      if (!wrap$.value)
        return;
      const offsetHeight = wrap$.value.offsetHeight - GAP;
      const offsetWidth = wrap$.value.offsetWidth - GAP;
      const originalHeight = offsetHeight ** 2 / wrap$.value.scrollHeight;
      const originalWidth = offsetWidth ** 2 / wrap$.value.scrollWidth;
      const height = Math.max(originalHeight, props.minSize);
      const width = Math.max(originalWidth, props.minSize);
      ratioY.value = originalHeight / (offsetHeight - originalHeight) / (height / (offsetHeight - height));
      ratioX.value = originalWidth / (offsetWidth - originalWidth) / (width / (offsetWidth - width));
      sizeHeight.value = height + GAP < offsetHeight ? `${height}px` : "";
      sizeWidth.value = width + GAP < offsetWidth ? `${width}px` : "";
    };
    watch(() => props.noresize, (noresize) => {
      if (noresize) {
        stopResizeObserver == null ? void 0 : stopResizeObserver();
        stopResizeListener == null ? void 0 : stopResizeListener();
      } else {
        ({ stop: stopResizeObserver } = useResizeObserver(resize$, update));
        stopResizeListener = useEventListener("resize", update);
      }
    }, { immediate: true });
    watch(() => [props.maxHeight, props.height], () => {
      if (!props.native)
        nextTick(() => {
          var _a;
          update();
          if (wrap$.value) {
            (_a = barRef.value) == null ? void 0 : _a.handleScroll(wrap$.value);
          }
        });
    });
    provide(scrollbarContextKey, reactive({
      scrollbarElement: scrollbar$,
      wrapElement: wrap$
    }));
    onMounted(() => {
      if (!props.native)
        nextTick(() => update());
    });
    onUpdated(() => update());
    return {
      ns,
      scrollbar$,
      wrap$,
      resize$,
      barRef,
      moveX,
      moveY,
      ratioX,
      ratioY,
      sizeWidth,
      sizeHeight,
      style,
      update,
      handleScroll,
      scrollTo,
      setScrollTop,
      setScrollLeft
    };
  }
});
function _sfc_render$G(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_bar = resolveComponent("bar");
  return openBlock(), createElementBlock("div", {
    ref: "scrollbar$",
    class: normalizeClass(_ctx.ns.b())
  }, [
    createElementVNode("div", {
      ref: "wrap$",
      class: normalizeClass([
        _ctx.wrapClass,
        _ctx.ns.e("wrap"),
        { [_ctx.ns.em("wrap", "hidden-default")]: !_ctx.native }
      ]),
      style: normalizeStyle(_ctx.style),
      onScroll: _cache[0] || (_cache[0] = (...args) => _ctx.handleScroll && _ctx.handleScroll(...args))
    }, [
      (openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
        ref: "resize$",
        class: normalizeClass([_ctx.ns.e("view"), _ctx.viewClass]),
        style: normalizeStyle(_ctx.viewStyle)
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["class", "style"]))
    ], 38),
    !_ctx.native ? (openBlock(), createBlock(_component_bar, {
      key: 0,
      ref: "barRef",
      height: _ctx.sizeHeight,
      width: _ctx.sizeWidth,
      always: _ctx.always,
      "ratio-x": _ctx.ratioX,
      "ratio-y": _ctx.ratioY
    }, null, 8, ["height", "width", "always", "ratio-x", "ratio-y"])) : createCommentVNode("v-if", true)
  ], 2);
}
var Scrollbar = /* @__PURE__ */ _export_sfc$2(_sfc_main$_, [["render", _sfc_render$G], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);

const ElScrollbar = withInstall(Scrollbar);

const __default__$7 = {
  name: "ElPopperRoot",
  inheritAttrs: false
};
const _sfc_main$Z = /* @__PURE__ */ defineComponent({
  ...__default__$7,
  setup(__props, { expose }) {
    const triggerRef = ref();
    const popperInstanceRef = ref();
    const contentRef = ref();
    const referenceRef = ref();
    const popperProvides = {
      triggerRef,
      popperInstanceRef,
      contentRef,
      referenceRef
    };
    expose(popperProvides);
    provide(POPPER_INJECTION_KEY, popperProvides);
    return (_ctx, _cache) => {
      return renderSlot(_ctx.$slots, "default");
    };
  }
});
var Popper = /* @__PURE__ */ _export_sfc$2(_sfc_main$Z, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);

const usePopperArrowProps = buildProps({
  arrowOffset: {
    type: Number,
    default: 5
  }
});

const __default__$6 = {
  name: "ElPopperArrow",
  inheritAttrs: false
};
const _sfc_main$Y = /* @__PURE__ */ defineComponent({
  ...__default__$6,
  props: usePopperArrowProps,
  setup(__props, { expose }) {
    const props = __props;
    const ns = useNamespace("popper");
    const { arrowOffset, arrowRef } = inject(POPPER_CONTENT_INJECTION_KEY, void 0);
    watch(() => props.arrowOffset, (val) => {
      arrowOffset.value = val;
    });
    onBeforeUnmount(() => {
      arrowRef.value = void 0;
    });
    expose({
      arrowRef
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        ref_key: "arrowRef",
        ref: arrowRef,
        class: normalizeClass(unref(ns).e("arrow")),
        "data-popper-arrow": ""
      }, null, 2);
    };
  }
});
var ElPopperArrow = /* @__PURE__ */ _export_sfc$2(_sfc_main$Y, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);

const NAME = "ElOnlyChild";
const OnlyChild = defineComponent({
  name: NAME,
  setup(_, {
    slots,
    attrs
  }) {
    var _a;
    const forwardRefInjection = inject(FORWARD_REF_INJECTION_KEY);
    const forwardRefDirective = useForwardRefDirective((_a = forwardRefInjection == null ? void 0 : forwardRefInjection.setForwardRef) != null ? _a : NOOP);
    return () => {
      var _a2;
      const defaultSlot = (_a2 = slots.default) == null ? void 0 : _a2.call(slots, attrs);
      if (!defaultSlot)
        return null;
      if (defaultSlot.length > 1) {
        return null;
      }
      const firstLegitNode = findFirstLegitChild(defaultSlot);
      if (!firstLegitNode) {
        return null;
      }
      return withDirectives(cloneVNode(firstLegitNode, attrs), [[forwardRefDirective]]);
    };
  }
});
function findFirstLegitChild(node) {
  if (!node)
    return null;
  const children = node;
  for (const child of children) {
    if (isObject$1(child)) {
      switch (child.type) {
        case Comment:
          continue;
        case Text:
          return wrapTextContent(child);
        case "svg":
          return wrapTextContent(child);
        case Fragment:
          return findFirstLegitChild(child.children);
        default:
          return child;
      }
    }
    return wrapTextContent(child);
  }
  return null;
}
function wrapTextContent(s) {
  return createVNode("span", {
    "class": "el-only-child__content"
  }, [s]);
}

const usePopperTriggerProps = buildProps({
  virtualRef: {
    type: definePropType(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: Function,
  onMouseleave: Function,
  onClick: Function,
  onKeydown: Function,
  onFocus: Function,
  onBlur: Function,
  onContextmenu: Function,
  id: String,
  open: Boolean
});

const __default__$5 = {
  name: "ElPopperTrigger",
  inheritAttrs: false
};
const _sfc_main$X = /* @__PURE__ */ defineComponent({
  ...__default__$5,
  props: usePopperTriggerProps,
  setup(__props, { expose }) {
    const props = __props;
    const { triggerRef } = inject(POPPER_INJECTION_KEY, void 0);
    useForwardRef(triggerRef);
    onMounted(() => {
      watch(() => props.virtualRef, (virtualEl) => {
        if (virtualEl) {
          triggerRef.value = unrefElement(virtualEl);
        }
      }, {
        immediate: true
      });
      watch(() => triggerRef.value, (el, prevEl) => {
        if (isElement$2(el)) {
          [
            "onMouseenter",
            "onMouseleave",
            "onClick",
            "onKeydown",
            "onFocus",
            "onBlur",
            "onContextmenu"
          ].forEach((eventName) => {
            var _a;
            const handler = props[eventName];
            if (handler) {
              el.addEventListener(eventName.slice(2).toLowerCase(), handler);
              (_a = prevEl == null ? void 0 : prevEl.removeEventListener) == null ? void 0 : _a.call(prevEl, eventName.slice(2).toLowerCase(), handler);
            }
          });
        }
      }, {
        immediate: true
      });
    });
    expose({
      triggerRef
    });
    return (_ctx, _cache) => {
      return !_ctx.virtualTriggering ? (openBlock(), createBlock(unref(OnlyChild), mergeProps({ key: 0 }, _ctx.$attrs, {
        "aria-describedby": _ctx.open ? _ctx.id : void 0
      }), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16, ["aria-describedby"])) : createCommentVNode("v-if", true);
    };
  }
});
var ElPopperTrigger = /* @__PURE__ */ _export_sfc$2(_sfc_main$X, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]);

var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper$1 = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main$1 = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main$1, afterMain, beforeWrite, write, afterWrite];

function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

function isElement$1(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


var applyStyles$1 = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect$2,
  requires: ['computeStyles']
};

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

var max = Math.max;
var min = Math.min;
var round = Math.round;

function getBoundingClientRect(element, includeScale) {
  if (includeScale === void 0) {
    includeScale = false;
  }

  var rect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;

  if (isHTMLElement(element) && includeScale) {
    var offsetHeight = element.offsetHeight;
    var offsetWidth = element.offsetWidth; // Do not attempt to divide by 0, otherwise we get `Infinity` as scale
    // Fallback to 1 in case both values are `0`

    if (offsetWidth > 0) {
      scaleX = round(rect.width) / offsetWidth || 1;
    }

    if (offsetHeight > 0) {
      scaleY = round(rect.height) / offsetHeight || 1;
    }
  }

  return {
    width: rect.width / scaleX,
    height: rect.height / scaleY,
    top: rect.top / scaleY,
    right: rect.right / scaleX,
    bottom: rect.bottom / scaleY,
    left: rect.left / scaleX,
    x: rect.left / scaleX,
    y: rect.top / scaleY
  };
}

// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement$1(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}

function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle$1(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  var isIE = navigator.userAgent.indexOf('Trident') !== -1;

  if (isIE && isHTMLElement(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = getComputedStyle$1(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = getParentNode(element);

  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle$1(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min, value, max) {
  var v = within(min, value, max);
  return v > max ? max : v;
}

function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect$1(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (!contains(state.elements.popper, arrowElement)) {

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


var arrow$1 = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect$1,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};

function getVariation(placement) {
  return placement.split('-')[1];
}

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      variation = _ref2.variation,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets,
      isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x,
      x = _offsets$x === void 0 ? 0 : _offsets$x,
      _offsets$y = offsets.y,
      y = _offsets$y === void 0 ? 0 : _offsets$y;

  var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);

      if (getComputedStyle$1(offsetParent).position !== 'static' && position === 'absolute') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : // $FlowFixMe[prop-missing]
      offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : // $FlowFixMe[prop-missing]
      offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref4.x;
  y = _ref4.y;

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref5) {
  var state = _ref5.state,
      options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration,
    isFixed: state.options.strategy === 'fixed'
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var computeStyles$1 = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
};

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


var eventListeners = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
};

var hash$1 = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash$1[matched];
  });
}

var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}

// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle$1(body || html).direction === 'rtl') {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle$1(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}

function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isElement$1(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle$1(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement$1(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement$1(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;
    }
  }

  return offsets;
}

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper$1 : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper$1 ? reference : popper$1;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement$1(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === popper$1 ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper$1 && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


var flip$1 = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};

function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


var hide$1 = {
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
};

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var offset$1 = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
};

function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var popperOffsets$1 = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
};

function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis) {
    var _offsetModifierState$;

    var mainSide = mainAxis === 'y' ? top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min$1 = offset + overflow[mainSide];
    var max$1 = offset - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _offsetModifierState$2;

    var _mainSide = mainAxis === 'x' ? top : left;

    var _altSide = mainAxis === 'x' ? bottom : right;

    var _offset = popperOffsets[altAxis];

    var _len = altAxis === 'y' ? 'height' : 'width';

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;

    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;

    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;

    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;

    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);

    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var preventOverflow$1 = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
};

function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(setOptionsAction) {
        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: isElement$1(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });

        for (var index = 0; index < state.orderedModifiers.length; index++) {

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}

var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

const POSITIONING_STRATEGIES = ["fixed", "absolute"];
const usePopperCoreConfigProps = buildProps({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: definePropType(Array),
    default: () => []
  },
  gpuAcceleration: {
    type: Boolean,
    default: true
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: String,
    values: placements,
    default: "bottom"
  },
  popperOptions: {
    type: definePropType(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: POSITIONING_STRATEGIES,
    default: "absolute"
  }
});
const usePopperContentProps = buildProps({
  ...usePopperCoreConfigProps,
  style: { type: definePropType([String, Array, Object]) },
  className: { type: definePropType([String, Array, Object]) },
  effect: {
    type: String,
    default: "dark"
  },
  visible: Boolean,
  enterable: {
    type: Boolean,
    default: true
  },
  pure: Boolean,
  popperClass: {
    type: definePropType([String, Array, Object])
  },
  popperStyle: {
    type: definePropType([String, Array, Object])
  },
  referenceEl: {
    type: definePropType(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: true
  },
  zIndex: Number
});

const buildPopperOptions = (props, arrowProps) => {
  const { placement, strategy, popperOptions } = props;
  const options = {
    placement,
    strategy,
    ...popperOptions,
    modifiers: genModifiers(props)
  };
  attachArrow(options, arrowProps);
  deriveExtraModifiers(options, popperOptions == null ? void 0 : popperOptions.modifiers);
  return options;
};
const unwrapMeasurableEl = ($el) => {
  if (!isClient)
    return;
  return unrefElement($el);
};
function genModifiers(options) {
  const { offset, gpuAcceleration, fallbackPlacements } = options;
  return [
    {
      name: "offset",
      options: {
        offset: [0, offset != null ? offset : 12]
      }
    },
    {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    },
    {
      name: "flip",
      options: {
        padding: 5,
        fallbackPlacements: fallbackPlacements != null ? fallbackPlacements : []
      }
    },
    {
      name: "computeStyles",
      options: {
        gpuAcceleration,
        adaptive: gpuAcceleration
      }
    }
  ];
}
function attachArrow(options, { arrowEl, arrowOffset }) {
  options.modifiers.push({
    name: "arrow",
    options: {
      element: arrowEl,
      padding: arrowOffset != null ? arrowOffset : 5
    }
  });
}
function deriveExtraModifiers(options, modifiers) {
  if (modifiers) {
    options.modifiers = [...options.modifiers, ...modifiers != null ? modifiers : []];
  }
}

const __default__$4 = {
  name: "ElPopperContent"
};
const _sfc_main$W = /* @__PURE__ */ defineComponent({
  ...__default__$4,
  props: usePopperContentProps,
  emits: ["mouseenter", "mouseleave"],
  setup(__props, { expose }) {
    const props = __props;
    const { popperInstanceRef, contentRef, triggerRef } = inject(POPPER_INJECTION_KEY, void 0);
    const { nextZIndex } = useZIndex();
    const ns = useNamespace("popper");
    const popperContentRef = ref();
    const arrowRef = ref();
    const arrowOffset = ref();
    provide(POPPER_CONTENT_INJECTION_KEY, {
      arrowRef,
      arrowOffset
    });
    const contentZIndex = ref(props.zIndex || nextZIndex());
    const computedReference = computed(() => unwrapMeasurableEl(props.referenceEl) || unref(triggerRef));
    const contentStyle = computed(() => [{ zIndex: unref(contentZIndex) }, props.popperStyle]);
    const contentClass = computed(() => [
      ns.b(),
      ns.is("pure", props.pure),
      ns.is(props.effect),
      props.popperClass
    ]);
    const createPopperInstance = ({ referenceEl, popperContentEl, arrowEl }) => {
      const options = buildPopperOptions(props, {
        arrowEl,
        arrowOffset: unref(arrowOffset)
      });
      return createPopper(referenceEl, popperContentEl, options);
    };
    const updatePopper = (shouldUpdateZIndex = true) => {
      var _a;
      (_a = unref(popperInstanceRef)) == null ? void 0 : _a.update();
      shouldUpdateZIndex && (contentZIndex.value = props.zIndex || nextZIndex());
    };
    const togglePopperAlive = () => {
      var _a, _b;
      const monitorable = { name: "eventListeners", enabled: props.visible };
      (_b = (_a = unref(popperInstanceRef)) == null ? void 0 : _a.setOptions) == null ? void 0 : _b.call(_a, (options) => ({
        ...options,
        modifiers: [...options.modifiers || [], monitorable]
      }));
      updatePopper(false);
    };
    onMounted(() => {
      let updateHandle;
      watch(computedReference, (referenceEl) => {
        var _a;
        updateHandle == null ? void 0 : updateHandle();
        const popperInstance = unref(popperInstanceRef);
        (_a = popperInstance == null ? void 0 : popperInstance.destroy) == null ? void 0 : _a.call(popperInstance);
        if (referenceEl) {
          const popperContentEl = unref(popperContentRef);
          contentRef.value = popperContentEl;
          popperInstanceRef.value = createPopperInstance({
            referenceEl,
            popperContentEl,
            arrowEl: unref(arrowRef)
          });
          updateHandle = watch(() => referenceEl.getBoundingClientRect(), () => updatePopper(), {
            immediate: true
          });
        } else {
          popperInstanceRef.value = void 0;
        }
      }, {
        immediate: true
      });
      watch(() => props.visible, togglePopperAlive, { immediate: true });
      watch(() => buildPopperOptions(props, {
        arrowEl: unref(arrowRef),
        arrowOffset: unref(arrowOffset)
      }), (option) => {
        var _a;
        return (_a = popperInstanceRef.value) == null ? void 0 : _a.setOptions(option);
      });
    });
    expose({
      popperContentRef,
      popperInstanceRef,
      updatePopper,
      contentStyle
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "popperContentRef",
        ref: popperContentRef,
        style: normalizeStyle(unref(contentStyle)),
        class: normalizeClass(unref(contentClass)),
        role: "tooltip",
        onMouseenter: _cache[0] || (_cache[0] = (e) => _ctx.$emit("mouseenter", e)),
        onMouseleave: _cache[1] || (_cache[1] = (e) => _ctx.$emit("mouseleave", e))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 38);
    };
  }
});
var ElPopperContent = /* @__PURE__ */ _export_sfc$2(_sfc_main$W, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);

const Effect = {
  LIGHT: "light",
  DARK: "dark"
};
buildProps({
  autoClose: {
    type: Number,
    default: 0
  },
  cutoff: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

function useDeprecateAppendToBody(scope, from) {
  const vm = getCurrentInstance();
  const compatTeleported = computed(() => {
    return isBoolean$1(vm.props[from]) ? vm.props[from] : vm.props.teleported;
  });
  useDeprecated({
    scope,
    from,
    replacement: "teleported",
    version: "2.1.0",
    ref: "https://element-plus.org/en-US/component/tooltip.html#attributes"
  }, computed(() => isBoolean$1(vm.props[from])));
  return {
    compatTeleported
  };
}

const ElPopper = withInstall(Popper);

const _sfc_main$V = defineComponent({
  name: "ElVisuallyHidden",
  props: {
    style: {
      type: [String, Object, Array]
    }
  },
  setup(props) {
    return {
      computedStyle: computed(() => {
        return [
          props.style,
          {
            position: "absolute",
            border: 0,
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            wordWrap: "normal"
          }
        ];
      })
    };
  }
});
function _sfc_render$F(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", mergeProps(_ctx.$attrs, { style: _ctx.computedStyle }), [
    renderSlot(_ctx.$slots, "default")
  ], 16);
}
var ElVisuallyHidden = /* @__PURE__ */ _export_sfc$2(_sfc_main$V, [["render", _sfc_render$F], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/visual-hidden/src/visual-hidden.vue"]]);

const useTooltipContentProps = buildProps({
  ...useDelayedToggleProps,
  ...usePopperContentProps,
  appendTo: {
    type: definePropType([String, Object]),
    default: POPPER_CONTAINER_SELECTOR
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: {
    type: Boolean,
    default: false
  },
  persistent: Boolean,
  ariaLabel: String,
  visible: {
    type: definePropType(Boolean),
    default: null
  },
  transition: {
    type: String,
    default: "el-fade-in-linear"
  },
  teleported: {
    type: Boolean,
    default: true
  },
  disabled: {
    type: Boolean
  }
});
const useTooltipTriggerProps = buildProps({
  ...usePopperTriggerProps,
  disabled: Boolean,
  trigger: {
    type: definePropType([String, Array]),
    default: "hover"
  }
});
const useTooltipProps = buildProps({
  openDelay: {
    type: Number
  },
  visibleArrow: {
    type: Boolean,
    default: void 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  showArrow: {
    type: Boolean,
    default: true
  }
});

const TOOLTIP_INJECTION_KEY = Symbol("elTooltip");

const _sfc_main$U = defineComponent({
  name: "ElTooltipContent",
  components: {
    ElPopperContent,
    ElVisuallyHidden
  },
  inheritAttrs: false,
  props: useTooltipContentProps,
  setup(props) {
    const contentRef = ref(null);
    const intermediateOpen = ref(false);
    const entering = ref(false);
    const leaving = ref(false);
    const destroyed = ref(false);
    const {
      controlled,
      id,
      open,
      trigger,
      onClose,
      onOpen,
      onShow,
      onHide,
      onBeforeShow,
      onBeforeHide
    } = inject(TOOLTIP_INJECTION_KEY, void 0);
    const persistentRef = computed(() => {
      return props.persistent;
    });
    onBeforeUnmount(() => {
      destroyed.value = true;
    });
    const shouldRender = computed(() => {
      return unref(persistentRef) ? true : unref(open);
    });
    const shouldShow = computed(() => {
      return props.disabled ? false : unref(open);
    });
    const contentStyle = computed(() => {
      var _a;
      return (_a = props.style) != null ? _a : {};
    });
    const ariaHidden = computed(() => !unref(open));
    useEscapeKeydown(onClose);
    const onTransitionLeave = () => {
      onHide();
    };
    const stopWhenControlled = () => {
      if (unref(controlled))
        return true;
    };
    const onContentEnter = composeEventHandlers(stopWhenControlled, () => {
      if (props.enterable && unref(trigger) === "hover") {
        onOpen();
      }
    });
    const onContentLeave = composeEventHandlers(stopWhenControlled, () => {
      if (unref(trigger) === "hover") {
        onClose();
      }
    });
    const onBeforeEnter = () => {
      var _a, _b;
      (_b = (_a = contentRef.value) == null ? void 0 : _a.updatePopper) == null ? void 0 : _b.call(_a);
      onBeforeShow == null ? void 0 : onBeforeShow();
    };
    const onBeforeLeave = () => {
      onBeforeHide == null ? void 0 : onBeforeHide();
    };
    const onAfterShow = () => {
      onShow();
    };
    let stopHandle;
    watch(() => unref(open), (val) => {
      if (val) {
        stopHandle = onClickOutside(computed(() => {
          var _a;
          return (_a = contentRef.value) == null ? void 0 : _a.popperContentRef;
        }), () => {
          if (unref(controlled))
            return;
          const $trigger = unref(trigger);
          if ($trigger !== "hover") {
            onClose();
          }
        });
      } else {
        stopHandle == null ? void 0 : stopHandle();
      }
    }, {
      flush: "post"
    });
    return {
      ariaHidden,
      entering,
      leaving,
      id,
      intermediateOpen,
      contentStyle,
      contentRef,
      destroyed,
      shouldRender,
      shouldShow,
      open,
      onAfterShow,
      onBeforeEnter,
      onBeforeLeave,
      onContentEnter,
      onContentLeave,
      onTransitionLeave
    };
  }
});
function _sfc_render$E(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_visually_hidden = resolveComponent("el-visually-hidden");
  const _component_el_popper_content = resolveComponent("el-popper-content");
  return openBlock(), createBlock(Teleport, {
    disabled: !_ctx.teleported,
    to: _ctx.appendTo
  }, [
    createVNode(Transition, {
      name: _ctx.transition,
      onAfterLeave: _ctx.onTransitionLeave,
      onBeforeEnter: _ctx.onBeforeEnter,
      onAfterEnter: _ctx.onAfterShow,
      onBeforeLeave: _ctx.onBeforeLeave
    }, {
      default: withCtx(() => [
        _ctx.shouldRender ? withDirectives((openBlock(), createBlock(_component_el_popper_content, mergeProps({
          key: 0,
          ref: "contentRef"
        }, _ctx.$attrs, {
          "aria-hidden": _ctx.ariaHidden,
          "boundaries-padding": _ctx.boundariesPadding,
          "fallback-placements": _ctx.fallbackPlacements,
          "gpu-acceleration": _ctx.gpuAcceleration,
          offset: _ctx.offset,
          placement: _ctx.placement,
          "popper-options": _ctx.popperOptions,
          strategy: _ctx.strategy,
          effect: _ctx.effect,
          enterable: _ctx.enterable,
          pure: _ctx.pure,
          "popper-class": _ctx.popperClass,
          "popper-style": [_ctx.popperStyle, _ctx.contentStyle],
          "reference-el": _ctx.referenceEl,
          visible: _ctx.shouldShow,
          "z-index": _ctx.zIndex,
          onMouseenter: _ctx.onContentEnter,
          onMouseleave: _ctx.onContentLeave
        }), {
          default: withCtx(() => [
            createCommentVNode(" Workaround bug #6378 "),
            !_ctx.destroyed ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              renderSlot(_ctx.$slots, "default"),
              createVNode(_component_el_visually_hidden, {
                id: _ctx.id,
                role: "tooltip"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.ariaLabel), 1)
                ]),
                _: 1
              }, 8, ["id"])
            ], 64)) : createCommentVNode("v-if", true)
          ]),
          _: 3
        }, 16, ["aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "visible", "z-index", "onMouseenter", "onMouseleave"])), [
          [vShow, _ctx.shouldShow]
        ]) : createCommentVNode("v-if", true)
      ]),
      _: 3
    }, 8, ["name", "onAfterLeave", "onBeforeEnter", "onAfterEnter", "onBeforeLeave"])
  ], 8, ["disabled", "to"]);
}
var ElTooltipContent = /* @__PURE__ */ _export_sfc$2(_sfc_main$U, [["render", _sfc_render$E], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);

const isTriggerType = (trigger, type) => {
  if (isArray$4(trigger)) {
    return trigger.includes(type);
  }
  return trigger === type;
};
const whenTrigger = (trigger, type, handler) => {
  return (e) => {
    isTriggerType(unref(trigger), type) && handler(e);
  };
};

const _sfc_main$T = defineComponent({
  name: "ElTooltipTrigger",
  components: {
    ElPopperTrigger
  },
  props: useTooltipTriggerProps,
  setup(props) {
    const ns = useNamespace("tooltip");
    const { controlled, id, open, onOpen, onClose, onToggle } = inject(TOOLTIP_INJECTION_KEY, void 0);
    const triggerRef = ref(null);
    const stopWhenControlledOrDisabled = () => {
      if (unref(controlled) || props.disabled) {
        return true;
      }
    };
    const trigger = toRef(props, "trigger");
    const onMouseenter = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "hover", onOpen));
    const onMouseleave = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "hover", onClose));
    const onClick = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "click", (e) => {
      if (e.button === 0) {
        onToggle(e);
      }
    }));
    const onFocus = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "focus", onOpen));
    const onBlur = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "focus", onClose));
    const onContextMenu = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "contextmenu", (e) => {
      e.preventDefault();
      onToggle(e);
    }));
    const onKeydown = composeEventHandlers(stopWhenControlledOrDisabled, (e) => {
      const { code } = e;
      if (code === EVENT_CODE.enter || code === EVENT_CODE.space) {
        onToggle(e);
      }
    });
    return {
      onBlur,
      onContextMenu,
      onFocus,
      onMouseenter,
      onMouseleave,
      onClick,
      onKeydown,
      open,
      id,
      triggerRef,
      ns
    };
  }
});
function _sfc_render$D(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_popper_trigger = resolveComponent("el-popper-trigger");
  return openBlock(), createBlock(_component_el_popper_trigger, {
    id: _ctx.id,
    "virtual-ref": _ctx.virtualRef,
    open: _ctx.open,
    "virtual-triggering": _ctx.virtualTriggering,
    class: normalizeClass(_ctx.ns.e("trigger")),
    onBlur: _ctx.onBlur,
    onClick: _ctx.onClick,
    onContextmenu: _ctx.onContextMenu,
    onFocus: _ctx.onFocus,
    onMouseenter: _ctx.onMouseenter,
    onMouseleave: _ctx.onMouseleave,
    onKeydown: _ctx.onKeydown
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]);
}
var ElTooltipTrigger = /* @__PURE__ */ _export_sfc$2(_sfc_main$T, [["render", _sfc_render$D], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);

const { useModelToggleProps, useModelToggle, useModelToggleEmits } = createModelToggleComposable("visible");
const _sfc_main$S = defineComponent({
  name: "ElTooltip",
  components: {
    ElPopper,
    ElPopperArrow,
    ElTooltipContent,
    ElTooltipTrigger
  },
  props: {
    ...useModelToggleProps,
    ...useTooltipContentProps,
    ...useTooltipTriggerProps,
    ...usePopperArrowProps,
    ...useTooltipProps
  },
  emits: [...useModelToggleEmits, "before-show", "before-hide", "show", "hide"],
  setup(props, { emit }) {
    usePopperContainer();
    const compatShowAfter = computed(() => {
      if (!isUndefined(props.openDelay)) ;
      return props.openDelay || props.showAfter;
    });
    const compatShowArrow = computed(() => {
      if (!isUndefined(props.visibleArrow)) ;
      return isBoolean$1(props.visibleArrow) ? props.visibleArrow : props.showArrow;
    });
    const id = useId();
    const popperRef = ref(null);
    const updatePopper = () => {
      var _a;
      const popperComponent = unref(popperRef);
      if (popperComponent) {
        (_a = popperComponent.popperInstanceRef) == null ? void 0 : _a.update();
      }
    };
    const open = ref(false);
    const { show, hide } = useModelToggle({
      indicator: open
    });
    const { onOpen, onClose } = useDelayedToggle({
      showAfter: compatShowAfter,
      hideAfter: toRef(props, "hideAfter"),
      open: show,
      close: hide
    });
    const controlled = computed(() => isBoolean$1(props.visible));
    provide(TOOLTIP_INJECTION_KEY, {
      controlled,
      id,
      open: readonly(open),
      trigger: toRef(props, "trigger"),
      onOpen,
      onClose,
      onToggle: () => {
        if (unref(open)) {
          onClose();
        } else {
          onOpen();
        }
      },
      onShow: () => {
        emit("show");
      },
      onHide: () => {
        emit("hide");
      },
      onBeforeShow: () => {
        emit("before-show");
      },
      onBeforeHide: () => {
        emit("before-hide");
      },
      updatePopper
    });
    watch(() => props.disabled, (disabled) => {
      if (disabled && open.value) {
        open.value = false;
      }
    });
    return {
      compatShowAfter,
      compatShowArrow,
      popperRef,
      open,
      hide,
      updatePopper,
      onOpen,
      onClose
    };
  }
});
const _hoisted_1$x = ["innerHTML"];
const _hoisted_2$q = { key: 1 };
function _sfc_render$C(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tooltip_trigger = resolveComponent("el-tooltip-trigger");
  const _component_el_popper_arrow = resolveComponent("el-popper-arrow");
  const _component_el_tooltip_content = resolveComponent("el-tooltip-content");
  const _component_el_popper = resolveComponent("el-popper");
  return openBlock(), createBlock(_component_el_popper, { ref: "popperRef" }, {
    default: withCtx(() => [
      createVNode(_component_el_tooltip_trigger, {
        disabled: _ctx.disabled,
        trigger: _ctx.trigger,
        "virtual-ref": _ctx.virtualRef,
        "virtual-triggering": _ctx.virtualTriggering
      }, {
        default: withCtx(() => [
          _ctx.$slots.default ? renderSlot(_ctx.$slots, "default", { key: 0 }) : createCommentVNode("v-if", true)
        ]),
        _: 3
      }, 8, ["disabled", "trigger", "virtual-ref", "virtual-triggering"]),
      createVNode(_component_el_tooltip_content, {
        "aria-label": _ctx.ariaLabel,
        "boundaries-padding": _ctx.boundariesPadding,
        content: _ctx.content,
        disabled: _ctx.disabled,
        effect: _ctx.effect,
        enterable: _ctx.enterable,
        "fallback-placements": _ctx.fallbackPlacements,
        "hide-after": _ctx.hideAfter,
        "gpu-acceleration": _ctx.gpuAcceleration,
        offset: _ctx.offset,
        persistent: _ctx.persistent,
        "popper-class": _ctx.popperClass,
        "popper-style": _ctx.popperStyle,
        placement: _ctx.placement,
        "popper-options": _ctx.popperOptions,
        pure: _ctx.pure,
        "raw-content": _ctx.rawContent,
        "reference-el": _ctx.referenceEl,
        "show-after": _ctx.compatShowAfter,
        strategy: _ctx.strategy,
        teleported: _ctx.teleported,
        transition: _ctx.transition,
        "z-index": _ctx.zIndex,
        "append-to": _ctx.appendTo
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "content", {}, () => [
            _ctx.rawContent ? (openBlock(), createElementBlock("span", {
              key: 0,
              innerHTML: _ctx.content
            }, null, 8, _hoisted_1$x)) : (openBlock(), createElementBlock("span", _hoisted_2$q, toDisplayString(_ctx.content), 1))
          ]),
          _ctx.compatShowArrow ? (openBlock(), createBlock(_component_el_popper_arrow, {
            key: 0,
            "arrow-offset": _ctx.arrowOffset
          }, null, 8, ["arrow-offset"])) : createCommentVNode("v-if", true)
        ]),
        _: 3
      }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "show-after", "strategy", "teleported", "transition", "z-index", "append-to"])
    ]),
    _: 3
  }, 512);
}
var Tooltip = /* @__PURE__ */ _export_sfc$2(_sfc_main$S, [["render", _sfc_render$C], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);

const ElTooltip = withInstall(Tooltip);

const avatarProps = buildProps({
  size: {
    type: [Number, String],
    values: componentSizes,
    default: "",
    validator: (val) => typeof val === "number"
  },
  shape: {
    type: String,
    values: ["circle", "square"],
    default: "circle"
  },
  icon: {
    type: iconPropType
  },
  src: {
    type: String,
    default: ""
  },
  alt: String,
  srcSet: String,
  fit: {
    type: definePropType(String),
    default: "cover"
  }
});
const avatarEmits = {
  error: (evt) => evt instanceof Event
};

const _hoisted_1$w = ["src", "alt", "srcset"];
const __default__$3 = {
  name: "ElAvatar"
};
const _sfc_main$R = /* @__PURE__ */ defineComponent({
  ...__default__$3,
  props: avatarProps,
  emits: avatarEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns = useNamespace("avatar");
    const hasLoadError = ref(false);
    const avatarClass = computed(() => {
      const { size, icon, shape } = props;
      const classList = [ns.b()];
      if (isString$1(size))
        classList.push(ns.m(size));
      if (icon)
        classList.push(ns.m("icon"));
      if (shape)
        classList.push(ns.m(shape));
      return classList;
    });
    const sizeStyle = computed(() => {
      const { size } = props;
      return isNumber$1(size) ? {
        "--el-avatar-size": addUnit(size)
      } : void 0;
    });
    const fitStyle = computed(() => ({
      objectFit: props.fit
    }));
    watch(() => props.src, () => hasLoadError.value = false);
    function handleError(e) {
      hasLoadError.value = true;
      emit("error", e);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(unref(avatarClass)),
        style: normalizeStyle(unref(sizeStyle))
      }, [
        (_ctx.src || _ctx.srcSet) && !hasLoadError.value ? (openBlock(), createElementBlock("img", {
          key: 0,
          src: _ctx.src,
          alt: _ctx.alt,
          srcset: _ctx.srcSet,
          style: normalizeStyle(unref(fitStyle)),
          onError: handleError
        }, null, 44, _hoisted_1$w)) : _ctx.icon ? (openBlock(), createBlock(unref(ElIcon), { key: 1 }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon)))
          ]),
          _: 1
        })) : renderSlot(_ctx.$slots, "default", { key: 2 })
      ], 6);
    };
  }
});
var Avatar = /* @__PURE__ */ _export_sfc$2(_sfc_main$R, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/avatar/src/avatar.vue"]]);

const ElAvatar = withInstall(Avatar);

const buttonTypes = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
];
const buttonNativeTypes = ["button", "submit", "reset"];
const buttonProps = buildProps({
  size: useSizeProp,
  disabled: Boolean,
  type: {
    type: String,
    values: buttonTypes,
    default: ""
  },
  icon: {
    type: iconPropType,
    default: ""
  },
  nativeType: {
    type: String,
    values: buttonNativeTypes,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: iconPropType,
    default: () => loading
  },
  plain: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean,
  color: String,
  dark: Boolean,
  autoInsertSpace: {
    type: Boolean,
    default: void 0
  }
});
const buttonEmits = {
  click: (evt) => evt instanceof MouseEvent
};

/**
 * Take input from [0, n] and return it as [0, 1]
 * @hidden
 */
function bound01(n, max) {
    if (isOnePointZero(n)) {
        n = '100%';
    }
    var isPercent = isPercentage(n);
    n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));
    // Automatically convert percentage into number
    if (isPercent) {
        n = parseInt(String(n * max), 10) / 100;
    }
    // Handle floating point rounding errors
    if (Math.abs(n - max) < 0.000001) {
        return 1;
    }
    // Convert into [0, 1] range if it isn't already
    if (max === 360) {
        // If n is a hue given in degrees,
        // wrap around out-of-range values into [0, 360] range
        // then convert into [0, 1].
        n = (n < 0 ? (n % max) + max : n % max) / parseFloat(String(max));
    }
    else {
        // If n not a hue given in degrees
        // Convert into [0, 1] range if it isn't already.
        n = (n % max) / parseFloat(String(max));
    }
    return n;
}
/**
 * Force a number between 0 and 1
 * @hidden
 */
function clamp01(val) {
    return Math.min(1, Math.max(0, val));
}
/**
 * Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
 * <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
 * @hidden
 */
function isOnePointZero(n) {
    return typeof n === 'string' && n.indexOf('.') !== -1 && parseFloat(n) === 1;
}
/**
 * Check to see if string passed in is a percentage
 * @hidden
 */
function isPercentage(n) {
    return typeof n === 'string' && n.indexOf('%') !== -1;
}
/**
 * Return a valid alpha value [0,1] with all invalid values being set to 1
 * @hidden
 */
function boundAlpha(a) {
    a = parseFloat(a);
    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }
    return a;
}
/**
 * Replace a decimal with it's percentage value
 * @hidden
 */
function convertToPercentage(n) {
    if (n <= 1) {
        return "".concat(Number(n) * 100, "%");
    }
    return n;
}
/**
 * Force a hex value to have 2 characters
 * @hidden
 */
function pad2(c) {
    return c.length === 1 ? '0' + c : String(c);
}

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>
/**
 * Handle bounds / percentage checking to conform to CSS color spec
 * <http://www.w3.org/TR/css3-color/>
 * *Assumes:* r, g, b in [0, 255] or [0, 1]
 * *Returns:* { r, g, b } in [0, 255]
 */
function rgbToRgb(r, g, b) {
    return {
        r: bound01(r, 255) * 255,
        g: bound01(g, 255) * 255,
        b: bound01(b, 255) * 255,
    };
}
/**
 * Converts an RGB color value to HSL.
 * *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
 * *Returns:* { h, s, l } in [0,1]
 */
function rgbToHsl(r, g, b) {
    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    var s = 0;
    var l = (max + min) / 2;
    if (max === min) {
        s = 0;
        h = 0; // achromatic
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    return { h: h, s: s, l: l };
}
function hue2rgb(p, q, t) {
    if (t < 0) {
        t += 1;
    }
    if (t > 1) {
        t -= 1;
    }
    if (t < 1 / 6) {
        return p + (q - p) * (6 * t);
    }
    if (t < 1 / 2) {
        return q;
    }
    if (t < 2 / 3) {
        return p + (q - p) * (2 / 3 - t) * 6;
    }
    return p;
}
/**
 * Converts an HSL color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hslToRgb(h, s, l) {
    var r;
    var g;
    var b;
    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);
    if (s === 0) {
        // achromatic
        g = l;
        b = l;
        r = l;
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return { r: r * 255, g: g * 255, b: b * 255 };
}
/**
 * Converts an RGB color value to HSV
 *
 * *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
 * *Returns:* { h, s, v } in [0,1]
 */
function rgbToHsv(r, g, b) {
    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    var v = max;
    var d = max - min;
    var s = max === 0 ? 0 : d / max;
    if (max === min) {
        h = 0; // achromatic
    }
    else {
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}
/**
 * Converts an HSV color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hsvToRgb(h, s, v) {
    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);
    var i = Math.floor(h);
    var f = h - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);
    var mod = i % 6;
    var r = [v, q, p, p, t, v][mod];
    var g = [t, v, v, q, p, p][mod];
    var b = [p, p, t, v, v, q][mod];
    return { r: r * 255, g: g * 255, b: b * 255 };
}
/**
 * Converts an RGB color to hex
 *
 * Assumes r, g, and b are contained in the set [0, 255]
 * Returns a 3 or 6 character hex
 */
function rgbToHex(r, g, b, allow3Char) {
    var hex = [
        pad2(Math.round(r).toString(16)),
        pad2(Math.round(g).toString(16)),
        pad2(Math.round(b).toString(16)),
    ];
    // Return a 3 character hex if possible
    if (allow3Char &&
        hex[0].startsWith(hex[0].charAt(1)) &&
        hex[1].startsWith(hex[1].charAt(1)) &&
        hex[2].startsWith(hex[2].charAt(1))) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }
    return hex.join('');
}
/**
 * Converts an RGBA color plus alpha transparency to hex
 *
 * Assumes r, g, b are contained in the set [0, 255] and
 * a in [0, 1]. Returns a 4 or 8 character rgba hex
 */
// eslint-disable-next-line max-params
function rgbaToHex(r, g, b, a, allow4Char) {
    var hex = [
        pad2(Math.round(r).toString(16)),
        pad2(Math.round(g).toString(16)),
        pad2(Math.round(b).toString(16)),
        pad2(convertDecimalToHex(a)),
    ];
    // Return a 4 character hex if possible
    if (allow4Char &&
        hex[0].startsWith(hex[0].charAt(1)) &&
        hex[1].startsWith(hex[1].charAt(1)) &&
        hex[2].startsWith(hex[2].charAt(1)) &&
        hex[3].startsWith(hex[3].charAt(1))) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }
    return hex.join('');
}
/** Converts a decimal to a hex value */
function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
}
/** Converts a hex value to a decimal */
function convertHexToDecimal(h) {
    return parseIntFromHex(h) / 255;
}
/** Parse a base-16 hex value into a base-10 integer */
function parseIntFromHex(val) {
    return parseInt(val, 16);
}
function numberInputToObject(color) {
    return {
        r: color >> 16,
        g: (color & 0xff00) >> 8,
        b: color & 0xff,
    };
}

// https://github.com/bahamas10/css-color-names/blob/master/css-color-names.json
/**
 * @hidden
 */
var names = {
    aliceblue: '#f0f8ff',
    antiquewhite: '#faebd7',
    aqua: '#00ffff',
    aquamarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    black: '#000000',
    blanchedalmond: '#ffebcd',
    blue: '#0000ff',
    blueviolet: '#8a2be2',
    brown: '#a52a2a',
    burlywood: '#deb887',
    cadetblue: '#5f9ea0',
    chartreuse: '#7fff00',
    chocolate: '#d2691e',
    coral: '#ff7f50',
    cornflowerblue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cyan: '#00ffff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkgray: '#a9a9a9',
    darkgreen: '#006400',
    darkgrey: '#a9a9a9',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkseagreen: '#8fbc8f',
    darkslateblue: '#483d8b',
    darkslategray: '#2f4f4f',
    darkslategrey: '#2f4f4f',
    darkturquoise: '#00ced1',
    darkviolet: '#9400d3',
    deeppink: '#ff1493',
    deepskyblue: '#00bfff',
    dimgray: '#696969',
    dimgrey: '#696969',
    dodgerblue: '#1e90ff',
    firebrick: '#b22222',
    floralwhite: '#fffaf0',
    forestgreen: '#228b22',
    fuchsia: '#ff00ff',
    gainsboro: '#dcdcdc',
    ghostwhite: '#f8f8ff',
    goldenrod: '#daa520',
    gold: '#ffd700',
    gray: '#808080',
    green: '#008000',
    greenyellow: '#adff2f',
    grey: '#808080',
    honeydew: '#f0fff0',
    hotpink: '#ff69b4',
    indianred: '#cd5c5c',
    indigo: '#4b0082',
    ivory: '#fffff0',
    khaki: '#f0e68c',
    lavenderblush: '#fff0f5',
    lavender: '#e6e6fa',
    lawngreen: '#7cfc00',
    lemonchiffon: '#fffacd',
    lightblue: '#add8e6',
    lightcoral: '#f08080',
    lightcyan: '#e0ffff',
    lightgoldenrodyellow: '#fafad2',
    lightgray: '#d3d3d3',
    lightgreen: '#90ee90',
    lightgrey: '#d3d3d3',
    lightpink: '#ffb6c1',
    lightsalmon: '#ffa07a',
    lightseagreen: '#20b2aa',
    lightskyblue: '#87cefa',
    lightslategray: '#778899',
    lightslategrey: '#778899',
    lightsteelblue: '#b0c4de',
    lightyellow: '#ffffe0',
    lime: '#00ff00',
    limegreen: '#32cd32',
    linen: '#faf0e6',
    magenta: '#ff00ff',
    maroon: '#800000',
    mediumaquamarine: '#66cdaa',
    mediumblue: '#0000cd',
    mediumorchid: '#ba55d3',
    mediumpurple: '#9370db',
    mediumseagreen: '#3cb371',
    mediumslateblue: '#7b68ee',
    mediumspringgreen: '#00fa9a',
    mediumturquoise: '#48d1cc',
    mediumvioletred: '#c71585',
    midnightblue: '#191970',
    mintcream: '#f5fffa',
    mistyrose: '#ffe4e1',
    moccasin: '#ffe4b5',
    navajowhite: '#ffdead',
    navy: '#000080',
    oldlace: '#fdf5e6',
    olive: '#808000',
    olivedrab: '#6b8e23',
    orange: '#ffa500',
    orangered: '#ff4500',
    orchid: '#da70d6',
    palegoldenrod: '#eee8aa',
    palegreen: '#98fb98',
    paleturquoise: '#afeeee',
    palevioletred: '#db7093',
    papayawhip: '#ffefd5',
    peachpuff: '#ffdab9',
    peru: '#cd853f',
    pink: '#ffc0cb',
    plum: '#dda0dd',
    powderblue: '#b0e0e6',
    purple: '#800080',
    rebeccapurple: '#663399',
    red: '#ff0000',
    rosybrown: '#bc8f8f',
    royalblue: '#4169e1',
    saddlebrown: '#8b4513',
    salmon: '#fa8072',
    sandybrown: '#f4a460',
    seagreen: '#2e8b57',
    seashell: '#fff5ee',
    sienna: '#a0522d',
    silver: '#c0c0c0',
    skyblue: '#87ceeb',
    slateblue: '#6a5acd',
    slategray: '#708090',
    slategrey: '#708090',
    snow: '#fffafa',
    springgreen: '#00ff7f',
    steelblue: '#4682b4',
    tan: '#d2b48c',
    teal: '#008080',
    thistle: '#d8bfd8',
    tomato: '#ff6347',
    turquoise: '#40e0d0',
    violet: '#ee82ee',
    wheat: '#f5deb3',
    white: '#ffffff',
    whitesmoke: '#f5f5f5',
    yellow: '#ffff00',
    yellowgreen: '#9acd32',
};

/**
 * Given a string or object, convert that input to RGB
 *
 * Possible string inputs:
 * ```
 * "red"
 * "#f00" or "f00"
 * "#ff0000" or "ff0000"
 * "#ff000000" or "ff000000"
 * "rgb 255 0 0" or "rgb (255, 0, 0)"
 * "rgb 1.0 0 0" or "rgb (1, 0, 0)"
 * "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
 * "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
 * "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
 * "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
 * "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
 * ```
 */
function inputToRGB(color) {
    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;
    if (typeof color === 'string') {
        color = stringInputToObject(color);
    }
    if (typeof color === 'object') {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === '%' ? 'prgb' : 'rgb';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = convertToPercentage(color.s);
            v = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, s, v);
            ok = true;
            format = 'hsv';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = convertToPercentage(color.s);
            l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, s, l);
            ok = true;
            format = 'hsl';
        }
        if (Object.prototype.hasOwnProperty.call(color, 'a')) {
            a = color.a;
        }
    }
    a = boundAlpha(a);
    return {
        ok: ok,
        format: color.format || format,
        r: Math.min(255, Math.max(rgb.r, 0)),
        g: Math.min(255, Math.max(rgb.g, 0)),
        b: Math.min(255, Math.max(rgb.b, 0)),
        a: a,
    };
}
// <http://www.w3.org/TR/css3-values/#integers>
var CSS_INTEGER = '[-\\+]?\\d+%?';
// <http://www.w3.org/TR/css3-values/#number-value>
var CSS_NUMBER = '[-\\+]?\\d*\\.\\d+%?';
// Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")");
// Actual matching.
// Parentheses and commas are optional, but not required.
// Whitespace can take the place of commas or opening paren
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var matchers = {
    CSS_UNIT: new RegExp(CSS_UNIT),
    rgb: new RegExp('rgb' + PERMISSIVE_MATCH3),
    rgba: new RegExp('rgba' + PERMISSIVE_MATCH4),
    hsl: new RegExp('hsl' + PERMISSIVE_MATCH3),
    hsla: new RegExp('hsla' + PERMISSIVE_MATCH4),
    hsv: new RegExp('hsv' + PERMISSIVE_MATCH3),
    hsva: new RegExp('hsva' + PERMISSIVE_MATCH4),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
};
/**
 * Permissive string parsing.  Take in a number of formats, and output an object
 * based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
 */
function stringInputToObject(color) {
    color = color.trim().toLowerCase();
    if (color.length === 0) {
        return false;
    }
    var named = false;
    if (names[color]) {
        color = names[color];
        named = true;
    }
    else if (color === 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
    }
    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match = matchers.rgb.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    match = matchers.rgba.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    match = matchers.hsl.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    match = matchers.hsla.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    match = matchers.hsv.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    match = matchers.hsva.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    match = matchers.hex8.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            a: convertHexToDecimal(match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex6.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    match = matchers.hex4.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1] + match[1]),
            g: parseIntFromHex(match[2] + match[2]),
            b: parseIntFromHex(match[3] + match[3]),
            a: convertHexToDecimal(match[4] + match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex3.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1] + match[1]),
            g: parseIntFromHex(match[2] + match[2]),
            b: parseIntFromHex(match[3] + match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    return false;
}
/**
 * Check to see if it looks like a CSS unit
 * (see `matchers` above for definition).
 */
function isValidCSSUnit(color) {
    return Boolean(matchers.CSS_UNIT.exec(String(color)));
}

var TinyColor = /** @class */ (function () {
    function TinyColor(color, opts) {
        if (color === void 0) { color = ''; }
        if (opts === void 0) { opts = {}; }
        var _a;
        // If input is already a tinycolor, return itself
        if (color instanceof TinyColor) {
            // eslint-disable-next-line no-constructor-return
            return color;
        }
        if (typeof color === 'number') {
            color = numberInputToObject(color);
        }
        this.originalInput = color;
        var rgb = inputToRGB(color);
        this.originalInput = color;
        this.r = rgb.r;
        this.g = rgb.g;
        this.b = rgb.b;
        this.a = rgb.a;
        this.roundA = Math.round(100 * this.a) / 100;
        this.format = (_a = opts.format) !== null && _a !== void 0 ? _a : rgb.format;
        this.gradientType = opts.gradientType;
        // Don't let the range of [0,255] come back in [0,1].
        // Potentially lose a little bit of precision here, but will fix issues where
        // .5 gets interpreted as half of the total, instead of half of 1
        // If it was supposed to be 128, this was already taken care of by `inputToRgb`
        if (this.r < 1) {
            this.r = Math.round(this.r);
        }
        if (this.g < 1) {
            this.g = Math.round(this.g);
        }
        if (this.b < 1) {
            this.b = Math.round(this.b);
        }
        this.isValid = rgb.ok;
    }
    TinyColor.prototype.isDark = function () {
        return this.getBrightness() < 128;
    };
    TinyColor.prototype.isLight = function () {
        return !this.isDark();
    };
    /**
     * Returns the perceived brightness of the color, from 0-255.
     */
    TinyColor.prototype.getBrightness = function () {
        // http://www.w3.org/TR/AERT#color-contrast
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    };
    /**
     * Returns the perceived luminance of a color, from 0-1.
     */
    TinyColor.prototype.getLuminance = function () {
        // http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
        var rgb = this.toRgb();
        var R;
        var G;
        var B;
        var RsRGB = rgb.r / 255;
        var GsRGB = rgb.g / 255;
        var BsRGB = rgb.b / 255;
        if (RsRGB <= 0.03928) {
            R = RsRGB / 12.92;
        }
        else {
            // eslint-disable-next-line prefer-exponentiation-operator
            R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
        }
        if (GsRGB <= 0.03928) {
            G = GsRGB / 12.92;
        }
        else {
            // eslint-disable-next-line prefer-exponentiation-operator
            G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
        }
        if (BsRGB <= 0.03928) {
            B = BsRGB / 12.92;
        }
        else {
            // eslint-disable-next-line prefer-exponentiation-operator
            B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
        }
        return 0.2126 * R + 0.7152 * G + 0.0722 * B;
    };
    /**
     * Returns the alpha value of a color, from 0-1.
     */
    TinyColor.prototype.getAlpha = function () {
        return this.a;
    };
    /**
     * Sets the alpha value on the current color.
     *
     * @param alpha - The new alpha value. The accepted range is 0-1.
     */
    TinyColor.prototype.setAlpha = function (alpha) {
        this.a = boundAlpha(alpha);
        this.roundA = Math.round(100 * this.a) / 100;
        return this;
    };
    /**
     * Returns the object as a HSVA object.
     */
    TinyColor.prototype.toHsv = function () {
        var hsv = rgbToHsv(this.r, this.g, this.b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this.a };
    };
    /**
     * Returns the hsva values interpolated into a string with the following format:
     * "hsva(xxx, xxx, xxx, xx)".
     */
    TinyColor.prototype.toHsvString = function () {
        var hsv = rgbToHsv(this.r, this.g, this.b);
        var h = Math.round(hsv.h * 360);
        var s = Math.round(hsv.s * 100);
        var v = Math.round(hsv.v * 100);
        return this.a === 1 ? "hsv(".concat(h, ", ").concat(s, "%, ").concat(v, "%)") : "hsva(".concat(h, ", ").concat(s, "%, ").concat(v, "%, ").concat(this.roundA, ")");
    };
    /**
     * Returns the object as a HSLA object.
     */
    TinyColor.prototype.toHsl = function () {
        var hsl = rgbToHsl(this.r, this.g, this.b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this.a };
    };
    /**
     * Returns the hsla values interpolated into a string with the following format:
     * "hsla(xxx, xxx, xxx, xx)".
     */
    TinyColor.prototype.toHslString = function () {
        var hsl = rgbToHsl(this.r, this.g, this.b);
        var h = Math.round(hsl.h * 360);
        var s = Math.round(hsl.s * 100);
        var l = Math.round(hsl.l * 100);
        return this.a === 1 ? "hsl(".concat(h, ", ").concat(s, "%, ").concat(l, "%)") : "hsla(".concat(h, ", ").concat(s, "%, ").concat(l, "%, ").concat(this.roundA, ")");
    };
    /**
     * Returns the hex value of the color.
     * @param allow3Char will shorten hex value to 3 char if possible
     */
    TinyColor.prototype.toHex = function (allow3Char) {
        if (allow3Char === void 0) { allow3Char = false; }
        return rgbToHex(this.r, this.g, this.b, allow3Char);
    };
    /**
     * Returns the hex value of the color -with a # appened.
     * @param allow3Char will shorten hex value to 3 char if possible
     */
    TinyColor.prototype.toHexString = function (allow3Char) {
        if (allow3Char === void 0) { allow3Char = false; }
        return '#' + this.toHex(allow3Char);
    };
    /**
     * Returns the hex 8 value of the color.
     * @param allow4Char will shorten hex value to 4 char if possible
     */
    TinyColor.prototype.toHex8 = function (allow4Char) {
        if (allow4Char === void 0) { allow4Char = false; }
        return rgbaToHex(this.r, this.g, this.b, this.a, allow4Char);
    };
    /**
     * Returns the hex 8 value of the color -with a # appened.
     * @param allow4Char will shorten hex value to 4 char if possible
     */
    TinyColor.prototype.toHex8String = function (allow4Char) {
        if (allow4Char === void 0) { allow4Char = false; }
        return '#' + this.toHex8(allow4Char);
    };
    /**
     * Returns the object as a RGBA object.
     */
    TinyColor.prototype.toRgb = function () {
        return {
            r: Math.round(this.r),
            g: Math.round(this.g),
            b: Math.round(this.b),
            a: this.a,
        };
    };
    /**
     * Returns the RGBA values interpolated into a string with the following format:
     * "RGBA(xxx, xxx, xxx, xx)".
     */
    TinyColor.prototype.toRgbString = function () {
        var r = Math.round(this.r);
        var g = Math.round(this.g);
        var b = Math.round(this.b);
        return this.a === 1 ? "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")") : "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(this.roundA, ")");
    };
    /**
     * Returns the object as a RGBA object.
     */
    TinyColor.prototype.toPercentageRgb = function () {
        var fmt = function (x) { return "".concat(Math.round(bound01(x, 255) * 100), "%"); };
        return {
            r: fmt(this.r),
            g: fmt(this.g),
            b: fmt(this.b),
            a: this.a,
        };
    };
    /**
     * Returns the RGBA relative values interpolated into a string
     */
    TinyColor.prototype.toPercentageRgbString = function () {
        var rnd = function (x) { return Math.round(bound01(x, 255) * 100); };
        return this.a === 1
            ? "rgb(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%)")
            : "rgba(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%, ").concat(this.roundA, ")");
    };
    /**
     * The 'real' name of the color -if there is one.
     */
    TinyColor.prototype.toName = function () {
        if (this.a === 0) {
            return 'transparent';
        }
        if (this.a < 1) {
            return false;
        }
        var hex = '#' + rgbToHex(this.r, this.g, this.b, false);
        for (var _i = 0, _a = Object.entries(names); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (hex === value) {
                return key;
            }
        }
        return false;
    };
    TinyColor.prototype.toString = function (format) {
        var formatSet = Boolean(format);
        format = format !== null && format !== void 0 ? format : this.format;
        var formattedString = false;
        var hasAlpha = this.a < 1 && this.a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format.startsWith('hex') || format === 'name');
        if (needsAlphaFormat) {
            // Special case for "transparent", all other non-alpha formats
            // will return rgba when there is transparency.
            if (format === 'name' && this.a === 0) {
                return this.toName();
            }
            return this.toRgbString();
        }
        if (format === 'rgb') {
            formattedString = this.toRgbString();
        }
        if (format === 'prgb') {
            formattedString = this.toPercentageRgbString();
        }
        if (format === 'hex' || format === 'hex6') {
            formattedString = this.toHexString();
        }
        if (format === 'hex3') {
            formattedString = this.toHexString(true);
        }
        if (format === 'hex4') {
            formattedString = this.toHex8String(true);
        }
        if (format === 'hex8') {
            formattedString = this.toHex8String();
        }
        if (format === 'name') {
            formattedString = this.toName();
        }
        if (format === 'hsl') {
            formattedString = this.toHslString();
        }
        if (format === 'hsv') {
            formattedString = this.toHsvString();
        }
        return formattedString || this.toHexString();
    };
    TinyColor.prototype.toNumber = function () {
        return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    };
    TinyColor.prototype.clone = function () {
        return new TinyColor(this.toString());
    };
    /**
     * Lighten the color a given amount. Providing 100 will always return white.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.lighten = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.l += amount / 100;
        hsl.l = clamp01(hsl.l);
        return new TinyColor(hsl);
    };
    /**
     * Brighten the color a given amount, from 0 to 100.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.brighten = function (amount) {
        if (amount === void 0) { amount = 10; }
        var rgb = this.toRgb();
        rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
        rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
        rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
        return new TinyColor(rgb);
    };
    /**
     * Darken the color a given amount, from 0 to 100.
     * Providing 100 will always return black.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.darken = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.l -= amount / 100;
        hsl.l = clamp01(hsl.l);
        return new TinyColor(hsl);
    };
    /**
     * Mix the color with pure white, from 0 to 100.
     * Providing 0 will do nothing, providing 100 will always return white.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.tint = function (amount) {
        if (amount === void 0) { amount = 10; }
        return this.mix('white', amount);
    };
    /**
     * Mix the color with pure black, from 0 to 100.
     * Providing 0 will do nothing, providing 100 will always return black.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.shade = function (amount) {
        if (amount === void 0) { amount = 10; }
        return this.mix('black', amount);
    };
    /**
     * Desaturate the color a given amount, from 0 to 100.
     * Providing 100 will is the same as calling greyscale
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.desaturate = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.s -= amount / 100;
        hsl.s = clamp01(hsl.s);
        return new TinyColor(hsl);
    };
    /**
     * Saturate the color a given amount, from 0 to 100.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.saturate = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.s += amount / 100;
        hsl.s = clamp01(hsl.s);
        return new TinyColor(hsl);
    };
    /**
     * Completely desaturates a color into greyscale.
     * Same as calling `desaturate(100)`
     */
    TinyColor.prototype.greyscale = function () {
        return this.desaturate(100);
    };
    /**
     * Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
     * Values outside of this range will be wrapped into this range.
     */
    TinyColor.prototype.spin = function (amount) {
        var hsl = this.toHsl();
        var hue = (hsl.h + amount) % 360;
        hsl.h = hue < 0 ? 360 + hue : hue;
        return new TinyColor(hsl);
    };
    /**
     * Mix the current color a given amount with another color, from 0 to 100.
     * 0 means no mixing (return current color).
     */
    TinyColor.prototype.mix = function (color, amount) {
        if (amount === void 0) { amount = 50; }
        var rgb1 = this.toRgb();
        var rgb2 = new TinyColor(color).toRgb();
        var p = amount / 100;
        var rgba = {
            r: (rgb2.r - rgb1.r) * p + rgb1.r,
            g: (rgb2.g - rgb1.g) * p + rgb1.g,
            b: (rgb2.b - rgb1.b) * p + rgb1.b,
            a: (rgb2.a - rgb1.a) * p + rgb1.a,
        };
        return new TinyColor(rgba);
    };
    TinyColor.prototype.analogous = function (results, slices) {
        if (results === void 0) { results = 6; }
        if (slices === void 0) { slices = 30; }
        var hsl = this.toHsl();
        var part = 360 / slices;
        var ret = [this];
        for (hsl.h = (hsl.h - ((part * results) >> 1) + 720) % 360; --results;) {
            hsl.h = (hsl.h + part) % 360;
            ret.push(new TinyColor(hsl));
        }
        return ret;
    };
    /**
     * taken from https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js
     */
    TinyColor.prototype.complement = function () {
        var hsl = this.toHsl();
        hsl.h = (hsl.h + 180) % 360;
        return new TinyColor(hsl);
    };
    TinyColor.prototype.monochromatic = function (results) {
        if (results === void 0) { results = 6; }
        var hsv = this.toHsv();
        var h = hsv.h;
        var s = hsv.s;
        var v = hsv.v;
        var res = [];
        var modification = 1 / results;
        while (results--) {
            res.push(new TinyColor({ h: h, s: s, v: v }));
            v = (v + modification) % 1;
        }
        return res;
    };
    TinyColor.prototype.splitcomplement = function () {
        var hsl = this.toHsl();
        var h = hsl.h;
        return [
            this,
            new TinyColor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l }),
            new TinyColor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l }),
        ];
    };
    /**
     * Compute how the color would appear on a background
     */
    TinyColor.prototype.onBackground = function (background) {
        var fg = this.toRgb();
        var bg = new TinyColor(background).toRgb();
        return new TinyColor({
            r: bg.r + (fg.r - bg.r) * fg.a,
            g: bg.g + (fg.g - bg.g) * fg.a,
            b: bg.b + (fg.b - bg.b) * fg.a,
        });
    };
    /**
     * Alias for `polyad(3)`
     */
    TinyColor.prototype.triad = function () {
        return this.polyad(3);
    };
    /**
     * Alias for `polyad(4)`
     */
    TinyColor.prototype.tetrad = function () {
        return this.polyad(4);
    };
    /**
     * Get polyad colors, like (for 1, 2, 3, 4, 5, 6, 7, 8, etc...)
     * monad, dyad, triad, tetrad, pentad, hexad, heptad, octad, etc...
     */
    TinyColor.prototype.polyad = function (n) {
        var hsl = this.toHsl();
        var h = hsl.h;
        var result = [this];
        var increment = 360 / n;
        for (var i = 1; i < n; i++) {
            result.push(new TinyColor({ h: (h + i * increment) % 360, s: hsl.s, l: hsl.l }));
        }
        return result;
    };
    /**
     * compare color vs current color
     */
    TinyColor.prototype.equals = function (color) {
        return this.toRgbString() === new TinyColor(color).toRgbString();
    };
    return TinyColor;
}());

function darken(color, amount = 20) {
  return color.mix("#141414", amount).toString();
}
function useButtonCustomStyle(props) {
  const _disabled = useDisabled$1();
  return computed(() => {
    let styles = {};
    const buttonColor = props.color;
    if (buttonColor) {
      const color = new TinyColor(buttonColor);
      const activeBgColor = props.dark ? color.tint(20).toString() : darken(color, 20);
      if (props.plain) {
        styles = {
          "--el-button-bg-color": props.dark ? darken(color, 90) : color.tint(90).toString(),
          "--el-button-text-color": buttonColor,
          "--el-button-border-color": props.dark ? darken(color, 50) : color.tint(50).toString(),
          "--el-button-hover-text-color": "var(--el-color-white)",
          "--el-button-hover-bg-color": buttonColor,
          "--el-button-hover-border-color": buttonColor,
          "--el-button-active-bg-color": activeBgColor,
          "--el-button-active-text-color": "var(--el-color-white)",
          "--el-button-active-border-color": activeBgColor
        };
        if (_disabled.value) {
          styles["--el-button-disabled-bg-color"] = props.dark ? darken(color, 90) : color.tint(90).toString();
          styles["--el-button-disabled-text-color"] = props.dark ? darken(color, 50) : color.tint(50).toString();
          styles["--el-button-disabled-border-color"] = props.dark ? darken(color, 80) : color.tint(80).toString();
        }
      } else {
        const hoverBgColor = props.dark ? darken(color, 30) : color.tint(30).toString();
        const textColor = color.isDark() ? "var(--el-color-white)" : "var(--el-color-black)";
        styles = {
          "--el-button-bg-color": buttonColor,
          "--el-button-text-color": textColor,
          "--el-button-border-color": buttonColor,
          "--el-button-hover-bg-color": hoverBgColor,
          "--el-button-hover-text-color": textColor,
          "--el-button-hover-border-color": hoverBgColor,
          "--el-button-active-bg-color": activeBgColor,
          "--el-button-active-border-color": activeBgColor
        };
        if (_disabled.value) {
          const disabledButtonColor = props.dark ? darken(color, 50) : color.tint(50).toString();
          styles["--el-button-disabled-bg-color"] = disabledButtonColor;
          styles["--el-button-disabled-text-color"] = props.dark ? "rgba(255, 255, 255, 0.5)" : "var(--el-color-white)";
          styles["--el-button-disabled-border-color"] = disabledButtonColor;
        }
      }
    }
    return styles;
  });
}

const _hoisted_1$v = ["disabled", "autofocus", "type"];
const __default__$2 = {
  name: "ElButton"
};
const _sfc_main$Q = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  props: buttonProps,
  emits: buttonEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const slots = useSlots();
    const buttonGroupContext = inject(buttonGroupContextKey, void 0);
    const globalConfig = useGlobalConfig("button");
    const ns = useNamespace("button");
    const { form } = useFormItem();
    const _size = useSize(computed(() => buttonGroupContext == null ? void 0 : buttonGroupContext.size));
    const _disabled = useDisabled$1();
    const _ref = ref();
    const _type = computed(() => props.type || (buttonGroupContext == null ? void 0 : buttonGroupContext.type) || "");
    const autoInsertSpace = computed(() => {
      var _a, _b, _c;
      return (_c = (_b = props.autoInsertSpace) != null ? _b : (_a = globalConfig.value) == null ? void 0 : _a.autoInsertSpace) != null ? _c : false;
    });
    const shouldAddSpace = computed(() => {
      var _a;
      const defaultSlot = (_a = slots.default) == null ? void 0 : _a.call(slots);
      if (autoInsertSpace.value && (defaultSlot == null ? void 0 : defaultSlot.length) === 1) {
        const slot = defaultSlot[0];
        if ((slot == null ? void 0 : slot.type) === Text) {
          const text = slot.children;
          return /^\p{Unified_Ideograph}{2}$/u.test(text.trim());
        }
      }
      return false;
    });
    const buttonStyle = useButtonCustomStyle(props);
    const handleClick = (evt) => {
      if (props.nativeType === "reset") {
        form == null ? void 0 : form.resetFields();
      }
      emit("click", evt);
    };
    expose({
      ref: _ref,
      size: _size,
      type: _type,
      disabled: _disabled,
      shouldAddSpace
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        ref_key: "_ref",
        ref: _ref,
        class: normalizeClass([
          unref(ns).b(),
          unref(ns).m(unref(_type)),
          unref(ns).m(unref(_size)),
          unref(ns).is("disabled", unref(_disabled)),
          unref(ns).is("loading", _ctx.loading),
          unref(ns).is("plain", _ctx.plain),
          unref(ns).is("round", _ctx.round),
          unref(ns).is("circle", _ctx.circle)
        ]),
        disabled: unref(_disabled) || _ctx.loading,
        autofocus: _ctx.autofocus,
        type: _ctx.nativeType,
        style: normalizeStyle(unref(buttonStyle)),
        onClick: handleClick
      }, [
        _ctx.loading ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          _ctx.$slots.loading ? renderSlot(_ctx.$slots, "loading", { key: 0 }) : (openBlock(), createBlock(unref(ElIcon), {
            key: 1,
            class: normalizeClass(unref(ns).is("loading"))
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(_ctx.loadingIcon)))
            ]),
            _: 1
          }, 8, ["class"]))
        ], 2112)) : _ctx.icon || _ctx.$slots.icon ? (openBlock(), createBlock(unref(ElIcon), { key: 1 }, {
          default: withCtx(() => [
            _ctx.icon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon), { key: 0 })) : renderSlot(_ctx.$slots, "icon", { key: 1 })
          ]),
          _: 3
        })) : createCommentVNode("v-if", true),
        _ctx.$slots.default ? (openBlock(), createElementBlock("span", {
          key: 2,
          class: normalizeClass({ [unref(ns).em("text", "expand")]: unref(shouldAddSpace) })
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2)) : createCommentVNode("v-if", true)
      ], 14, _hoisted_1$v);
    };
  }
});
var Button = /* @__PURE__ */ _export_sfc$2(_sfc_main$Q, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);

const buttonGroupProps = {
  size: buttonProps.size,
  type: buttonProps.type
};

const __default__$1 = {
  name: "ElButtonGroup"
};
const _sfc_main$P = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: buttonGroupProps,
  setup(__props) {
    const props = __props;
    provide(buttonGroupContextKey, reactive({
      size: toRef(props, "size"),
      type: toRef(props, "type")
    }));
    const ns = useNamespace("button");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(`${unref(ns).b("group")}`)
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
var ButtonGroup = /* @__PURE__ */ _export_sfc$2(_sfc_main$P, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);

const ElButton = withInstall(Button, {
  ButtonGroup
});
withNoopInstall(ButtonGroup);

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getAugmentedNamespace(n) {
	if (n.__esModule) return n;
	var a = Object.defineProperty({}, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

var dayjs_min = {exports: {}};

(function (module, exports) {
!function(t,e){module.exports=e();}(commonjsGlobal,(function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return !r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return (e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return -t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return +(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return {M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",D={};D[v]=M;var p=function(t){return t instanceof _},S=function t(e,n,r){var i;if(!e)return v;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else {var a=e.name;D[a]=e,i=a;}return !r&&i&&(v=i),i||!r&&v},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t);}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init();},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds();},m.$utils=function(){return O},m.isValid=function(){return !(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var v=this.$locale().weekStart||0,D=(y<v?y+7:y)-v;return $(r?m-D:m+(6-D),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d;}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||$;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||l[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,v=O.m(this,M);return v=(l={},l[c]=v/12,l[f]=v,l[h]=v/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?v:O.a(v)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),T=_.prototype;return w.prototype=T,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){T[t[1]]=function(e){return this.$g(e,t[0],t[1])};})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=D[v],w.Ls=D,w.p={},w}));
}(dayjs_min));

var dayjs = dayjs_min.exports;

var localeData$1 = {exports: {}};

(function (module, exports) {
!function(n,e){module.exports=e();}(commonjsGlobal,(function(){return function(n,e,t){var r=e.prototype,o=function(n){return n&&(n.indexOf?n:n.s)},u=function(n,e,t,r,u){var i=n.name?n:n.$locale(),a=o(i[e]),s=o(i[t]),f=a||s.map((function(n){return n.slice(0,r)}));if(!u)return f;var d=i.weekStart;return f.map((function(n,e){return f[(e+(d||0))%7]}))},i=function(){return t.Ls[t.locale()]},a=function(n,e){return n.formats[e]||function(n){return n.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(n,e,t){return e||t.slice(1)}))}(n.formats[e.toUpperCase()])},s=function(){var n=this;return {months:function(e){return e?e.format("MMMM"):u(n,"months")},monthsShort:function(e){return e?e.format("MMM"):u(n,"monthsShort","months",3)},firstDayOfWeek:function(){return n.$locale().weekStart||0},weekdays:function(e){return e?e.format("dddd"):u(n,"weekdays")},weekdaysMin:function(e){return e?e.format("dd"):u(n,"weekdaysMin","weekdays",2)},weekdaysShort:function(e){return e?e.format("ddd"):u(n,"weekdaysShort","weekdays",3)},longDateFormat:function(e){return a(n.$locale(),e)},meridiem:this.$locale().meridiem,ordinal:this.$locale().ordinal}};r.localeData=function(){return s.bind(this)()},t.localeData=function(){var n=i();return {firstDayOfWeek:function(){return n.weekStart||0},weekdays:function(){return t.weekdays()},weekdaysShort:function(){return t.weekdaysShort()},weekdaysMin:function(){return t.weekdaysMin()},months:function(){return t.months()},monthsShort:function(){return t.monthsShort()},longDateFormat:function(e){return a(n,e)},meridiem:n.meridiem,ordinal:n.ordinal}},t.months=function(){return u(i(),"months")},t.monthsShort=function(){return u(i(),"monthsShort","months",3)},t.weekdays=function(n){return u(i(),"weekdays",null,null,n)},t.weekdaysShort=function(n){return u(i(),"weekdaysShort","weekdays",3,n)},t.weekdaysMin=function(n){return u(i(),"weekdaysMin","weekdays",2,n)};}}));
}(localeData$1));

var localeData = localeData$1.exports;

var customParseFormat$1 = {exports: {}};

(function (module, exports) {
!function(e,t){module.exports=t();}(commonjsGlobal,(function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-:/.()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^\s\d-_:/()]+/,o={},s=function(e){return (e=+e)+(e>68?1900:2e3)};var a=function(e){return function(t){this[e]=+t;}},f=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e);}],h=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[i,function(e){this.afternoon=u(e,!1);}],a:[i,function(e){this.afternoon=u(e,!0);}],S:[/\d/,function(e){this.milliseconds=100*+e;}],SS:[n,function(e){this.milliseconds=10*+e;}],SSS:[/\d{3}/,function(e){this.milliseconds=+e;}],s:[r,a("seconds")],ss:[r,a("seconds")],m:[r,a("minutes")],mm:[r,a("minutes")],H:[r,a("hours")],h:[r,a("hours")],HH:[r,a("hours")],hh:[r,a("hours")],D:[r,a("day")],DD:[n,a("day")],Do:[i,function(e){var t=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r);}],M:[r,a("month")],MM:[n,a("month")],MMM:[i,function(e){var t=h("months"),n=(h("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n;}],MMMM:[i,function(e){var t=h("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t;}],Y:[/[+-]?\d+/,a("year")],YY:[n,function(e){this.year=s(e);}],YYYY:[/\d{4}/,a("year")],Z:f,ZZ:f};function c(n){var r,i;r=n,i=o&&o.formats;for(var s=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var o=r&&r.toUpperCase();return n||i[r]||e[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),a=s.length,f=0;f<a;f+=1){var h=s[f],u=d[h],c=u&&u[0],l=u&&u[1];s[f]=l?{regex:c,parser:l}:h.replace(/^\[|\]$/g,"");}return function(e){for(var t={},n=0,r=0;n<a;n+=1){var i=s[n];if("string"==typeof i)r+=i.length;else {var o=i.regex,f=i.parser,h=e.slice(r),u=o.exec(h)[0];f.call(t,u),e=e.replace(u,"");}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon;}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(s=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,s=e.args;this.$u=r;var a=s[1];if("string"==typeof a){var f=!0===s[2],h=!0===s[3],u=f||h,d=s[2];h&&(d=s[2]),o=this.$locale(),!f&&d&&(o=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=c(t)(e),i=r.year,o=r.month,s=r.day,a=r.hours,f=r.minutes,h=r.seconds,u=r.milliseconds,d=r.zone,l=new Date,m=s||(i||o?1:l.getDate()),M=i||l.getFullYear(),Y=0;i&&!o||(Y=o>0?o-1:l.getMonth());var p=a||0,v=f||0,D=h||0,g=u||0;return d?new Date(Date.UTC(M,Y,m,p,v,D,g+60*d.offset*1e3)):n?new Date(Date.UTC(M,Y,m,p,v,D,g)):new Date(M,Y,m,p,v,D,g)}catch(e){return new Date("")}}(t,a,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(a)&&(this.$d=new Date("")),o={};}else if(a instanceof Array)for(var l=a.length,m=1;m<=l;m+=1){s[1]=a[m-1];var M=n.apply(this,s);if(M.isValid()){this.$d=M.$d,this.$L=M.$L,this.init();break}m===l&&(this.$d=new Date(""));}else i.call(this,e);};}}));
}(customParseFormat$1));

var customParseFormat = customParseFormat$1.exports;

const DEFAULT_FORMATS_TIME = "HH:mm:ss";
const DEFAULT_FORMATS_DATE = "YYYY-MM-DD";
const DEFAULT_FORMATS_DATEPICKER = {
  date: DEFAULT_FORMATS_DATE,
  week: "gggg[w]ww",
  year: "YYYY",
  month: "YYYY-MM",
  datetime: `${DEFAULT_FORMATS_DATE} ${DEFAULT_FORMATS_TIME}`,
  monthrange: "YYYY-MM",
  daterange: DEFAULT_FORMATS_DATE,
  datetimerange: `${DEFAULT_FORMATS_DATE} ${DEFAULT_FORMATS_TIME}`
};

const timePickerDefaultProps = {
  id: {
    type: [Array, String]
  },
  name: {
    type: [Array, String],
    default: ""
  },
  popperClass: {
    type: String,
    default: ""
  },
  format: {
    type: String
  },
  valueFormat: {
    type: String
  },
  type: {
    type: String,
    default: ""
  },
  clearable: {
    type: Boolean,
    default: true
  },
  clearIcon: {
    type: [String, Object],
    default: circleClose
  },
  editable: {
    type: Boolean,
    default: true
  },
  prefixIcon: {
    type: [String, Object],
    default: ""
  },
  size: {
    type: String,
    validator: isValidComponentSize
  },
  readonly: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String,
    default: ""
  },
  popperOptions: {
    type: Object,
    default: () => ({})
  },
  modelValue: {
    type: [Date, Array, String, Number],
    default: ""
  },
  rangeSeparator: {
    type: String,
    default: "-"
  },
  startPlaceholder: String,
  endPlaceholder: String,
  defaultValue: {
    type: [Date, Array]
  },
  defaultTime: {
    type: [Date, Array]
  },
  isRange: {
    type: Boolean,
    default: false
  },
  disabledHours: {
    type: Function
  },
  disabledMinutes: {
    type: Function
  },
  disabledSeconds: {
    type: Function
  },
  disabledDate: {
    type: Function
  },
  cellClassName: {
    type: Function
  },
  shortcuts: {
    type: Array,
    default: () => []
  },
  arrowControl: {
    type: Boolean,
    default: false
  },
  validateEvent: {
    type: Boolean,
    default: true
  },
  unlinkPanels: Boolean
};

const dateEquals = function(a, b) {
  const aIsDate = a instanceof Date;
  const bIsDate = b instanceof Date;
  if (aIsDate && bIsDate) {
    return a.getTime() === b.getTime();
  }
  if (!aIsDate && !bIsDate) {
    return a === b;
  }
  return false;
};
const valueEquals = function(a, b) {
  const aIsArray = Array.isArray(a);
  const bIsArray = Array.isArray(b);
  if (aIsArray && bIsArray) {
    if (a.length !== b.length) {
      return false;
    }
    return a.every((item, index) => dateEquals(item, b[index]));
  }
  if (!aIsArray && !bIsArray) {
    return dateEquals(a, b);
  }
  return false;
};
const parser = function(date, format, lang) {
  const day = isEmpty(format) || format === "x" ? dayjs(date).locale(lang) : dayjs(date, format).locale(lang);
  return day.isValid() ? day : void 0;
};
const formatter = function(date, format, lang) {
  if (isEmpty(format))
    return date;
  if (format === "x")
    return +date;
  return dayjs(date).locale(lang).format(format);
};
const _sfc_main$O = defineComponent({
  name: "Picker",
  components: {
    ElInput,
    ElTooltip,
    ElIcon
  },
  props: timePickerDefaultProps,
  emits: [
    "update:modelValue",
    "change",
    "focus",
    "blur",
    "calendar-change",
    "panel-change",
    "visible-change"
  ],
  setup(props, ctx) {
    const { lang } = useLocale();
    const nsDate = useNamespace("date");
    const nsInput = useNamespace("input");
    const nsRange = useNamespace("range");
    const elForm = inject(formContextKey, {});
    const elFormItem = inject(formItemContextKey, {});
    const elPopperOptions = inject("ElPopperOptions", {});
    const refPopper = ref();
    const inputRef = ref();
    const pickerVisible = ref(false);
    const pickerActualVisible = ref(false);
    const valueOnOpen = ref(null);
    watch(pickerVisible, (val) => {
      var _a;
      if (!val) {
        userInput.value = null;
        nextTick(() => {
          emitChange(props.modelValue);
        });
        ctx.emit("blur");
        blurInput();
        props.validateEvent && ((_a = elFormItem.validate) == null ? void 0 : _a.call(elFormItem, "blur").catch((err) => debugWarn()));
      } else {
        valueOnOpen.value = props.modelValue;
      }
    });
    const emitChange = (val, isClear) => {
      var _a;
      if (isClear || !valueEquals(val, valueOnOpen.value)) {
        ctx.emit("change", val);
        props.validateEvent && ((_a = elFormItem.validate) == null ? void 0 : _a.call(elFormItem, "change").catch((err) => debugWarn()));
      }
    };
    const emitInput = (val) => {
      if (!valueEquals(props.modelValue, val)) {
        let formatValue;
        if (Array.isArray(val)) {
          formatValue = val.map((_) => formatter(_, props.valueFormat, lang.value));
        } else if (val) {
          formatValue = formatter(val, props.valueFormat, lang.value);
        }
        ctx.emit("update:modelValue", val ? formatValue : val, lang.value);
      }
    };
    const refInput = computed(() => {
      if (inputRef.value) {
        const _r = isRangeInput.value ? inputRef.value : inputRef.value.$el;
        return Array.from(_r.querySelectorAll("input"));
      }
      return [];
    });
    const refStartInput = computed(() => {
      return refInput == null ? void 0 : refInput.value[0];
    });
    const refEndInput = computed(() => {
      return refInput == null ? void 0 : refInput.value[1];
    });
    const setSelectionRange = (start, end, pos) => {
      const _inputs = refInput.value;
      if (!_inputs.length)
        return;
      if (!pos || pos === "min") {
        _inputs[0].setSelectionRange(start, end);
        _inputs[0].focus();
      } else if (pos === "max") {
        _inputs[1].setSelectionRange(start, end);
        _inputs[1].focus();
      }
    };
    const onPick = (date = "", visible = false) => {
      pickerVisible.value = visible;
      let result;
      if (Array.isArray(date)) {
        result = date.map((_) => _.toDate());
      } else {
        result = date ? date.toDate() : date;
      }
      userInput.value = null;
      emitInput(result);
    };
    const onBeforeShow = () => {
      pickerActualVisible.value = true;
    };
    const onShow = () => {
      ctx.emit("visible-change", true);
    };
    const onHide = () => {
      pickerActualVisible.value = false;
      ctx.emit("visible-change", false);
    };
    const focus = (focusStartInput = true) => {
      let input = refStartInput.value;
      if (!focusStartInput && isRangeInput.value) {
        input = refEndInput.value;
      }
      if (input) {
        input.focus();
      }
    };
    const handleFocus = (e) => {
      if (props.readonly || pickerDisabled.value || pickerVisible.value)
        return;
      pickerVisible.value = true;
      ctx.emit("focus", e);
    };
    const handleBlur = () => {
      var _a;
      (_a = refPopper.value) == null ? void 0 : _a.onClose();
      blurInput();
    };
    const pickerDisabled = computed(() => {
      return props.disabled || elForm.disabled;
    });
    const parsedValue = computed(() => {
      let result;
      if (valueIsEmpty.value) {
        if (pickerOptions.value.getDefaultValue) {
          result = pickerOptions.value.getDefaultValue();
        }
      } else {
        if (Array.isArray(props.modelValue)) {
          result = props.modelValue.map((_) => parser(_, props.valueFormat, lang.value));
        } else {
          result = parser(props.modelValue, props.valueFormat, lang.value);
        }
      }
      if (pickerOptions.value.getRangeAvailableTime) {
        const availableResult = pickerOptions.value.getRangeAvailableTime(result);
        if (!isEqual(availableResult, result)) {
          result = availableResult;
          emitInput(Array.isArray(result) ? result.map((_) => _.toDate()) : result.toDate());
        }
      }
      if (Array.isArray(result) && result.some((_) => !_)) {
        result = [];
      }
      return result;
    });
    const displayValue = computed(() => {
      if (!pickerOptions.value.panelReady)
        return;
      const formattedValue = formatDayjsToString(parsedValue.value);
      if (Array.isArray(userInput.value)) {
        return [
          userInput.value[0] || formattedValue && formattedValue[0] || "",
          userInput.value[1] || formattedValue && formattedValue[1] || ""
        ];
      } else if (userInput.value !== null) {
        return userInput.value;
      }
      if (!isTimePicker.value && valueIsEmpty.value)
        return;
      if (!pickerVisible.value && valueIsEmpty.value)
        return;
      if (formattedValue) {
        return isDatesPicker.value ? formattedValue.join(", ") : formattedValue;
      }
      return "";
    });
    const isTimeLikePicker = computed(() => props.type.includes("time"));
    const isTimePicker = computed(() => props.type.startsWith("time"));
    const isDatesPicker = computed(() => props.type === "dates");
    const triggerIcon = computed(() => props.prefixIcon || (isTimeLikePicker.value ? clock : calendar));
    const showClose = ref(false);
    const onClearIconClick = (event) => {
      if (props.readonly || pickerDisabled.value)
        return;
      if (showClose.value) {
        event.stopPropagation();
        emitInput(null);
        emitChange(null, true);
        showClose.value = false;
        pickerVisible.value = false;
        pickerOptions.value.handleClear && pickerOptions.value.handleClear();
      }
    };
    const valueIsEmpty = computed(() => {
      return !props.modelValue || Array.isArray(props.modelValue) && !props.modelValue.length;
    });
    const onMouseEnter = () => {
      if (props.readonly || pickerDisabled.value)
        return;
      if (!valueIsEmpty.value && props.clearable) {
        showClose.value = true;
      }
    };
    const onMouseLeave = () => {
      showClose.value = false;
    };
    const isRangeInput = computed(() => {
      return props.type.includes("range");
    });
    const pickerSize = useSize();
    const popperPaneRef = computed(() => {
      var _a, _b;
      return (_b = (_a = refPopper.value) == null ? void 0 : _a.popperRef) == null ? void 0 : _b.contentRef;
    });
    const popperEl = computed(() => {
      var _a, _b;
      return (_b = (_a = unref(refPopper)) == null ? void 0 : _a.popperRef) == null ? void 0 : _b.contentRef;
    });
    const actualInputRef = computed(() => {
      var _a;
      if (unref(isRangeInput)) {
        return unref(inputRef);
      }
      return (_a = unref(inputRef)) == null ? void 0 : _a.$el;
    });
    onClickOutside(actualInputRef, (e) => {
      const unrefedPopperEl = unref(popperEl);
      const inputEl = unref(actualInputRef);
      if (unrefedPopperEl && (e.target === unrefedPopperEl || e.composedPath().includes(unrefedPopperEl)) || e.target === inputEl || e.composedPath().includes(inputEl))
        return;
      pickerVisible.value = false;
    });
    const userInput = ref(null);
    const handleChange = () => {
      if (userInput.value) {
        const value = parseUserInputToDayjs(displayValue.value);
        if (value) {
          if (isValidValue(value)) {
            emitInput(Array.isArray(value) ? value.map((_) => _.toDate()) : value.toDate());
            userInput.value = null;
          }
        }
      }
      if (userInput.value === "") {
        emitInput(null);
        emitChange(null);
        userInput.value = null;
      }
    };
    const blurInput = () => {
      refInput.value.forEach((input) => input.blur());
    };
    const parseUserInputToDayjs = (value) => {
      if (!value)
        return null;
      return pickerOptions.value.parseUserInput(value);
    };
    const formatDayjsToString = (value) => {
      if (!value)
        return null;
      return pickerOptions.value.formatToString(value);
    };
    const isValidValue = (value) => {
      return pickerOptions.value.isValidValue(value);
    };
    const handleKeydown = (event) => {
      const code = event.code;
      if (code === EVENT_CODE.esc) {
        pickerVisible.value = false;
        event.stopPropagation();
        return;
      }
      if (code === EVENT_CODE.tab) {
        if (!isRangeInput.value) {
          handleChange();
          pickerVisible.value = false;
          event.stopPropagation();
        } else {
          setTimeout(() => {
            if (!refInput.value.includes(document.activeElement)) {
              pickerVisible.value = false;
              blurInput();
            }
          }, 0);
        }
        return;
      }
      if (code === EVENT_CODE.enter || code === EVENT_CODE.numpadEnter) {
        if (userInput.value === null || userInput.value === "" || isValidValue(parseUserInputToDayjs(displayValue.value))) {
          handleChange();
          pickerVisible.value = false;
        }
        event.stopPropagation();
        return;
      }
      if (userInput.value) {
        event.stopPropagation();
        return;
      }
      if (pickerOptions.value.handleKeydown) {
        pickerOptions.value.handleKeydown(event);
      }
    };
    const onUserInput = (e) => {
      userInput.value = e;
    };
    const handleStartInput = (event) => {
      if (userInput.value) {
        userInput.value = [event.target.value, userInput.value[1]];
      } else {
        userInput.value = [event.target.value, null];
      }
    };
    const handleEndInput = (event) => {
      if (userInput.value) {
        userInput.value = [userInput.value[0], event.target.value];
      } else {
        userInput.value = [null, event.target.value];
      }
    };
    const handleStartChange = () => {
      const value = parseUserInputToDayjs(userInput.value && userInput.value[0]);
      if (value && value.isValid()) {
        userInput.value = [formatDayjsToString(value), displayValue.value[1]];
        const newValue = [value, parsedValue.value && parsedValue.value[1]];
        if (isValidValue(newValue)) {
          emitInput(newValue);
          userInput.value = null;
        }
      }
    };
    const handleEndChange = () => {
      const value = parseUserInputToDayjs(userInput.value && userInput.value[1]);
      if (value && value.isValid()) {
        userInput.value = [displayValue.value[0], formatDayjsToString(value)];
        const newValue = [parsedValue.value && parsedValue.value[0], value];
        if (isValidValue(newValue)) {
          emitInput(newValue);
          userInput.value = null;
        }
      }
    };
    const pickerOptions = ref({});
    const onSetPickerOption = (e) => {
      pickerOptions.value[e[0]] = e[1];
      pickerOptions.value.panelReady = true;
    };
    const onCalendarChange = (e) => {
      ctx.emit("calendar-change", e);
    };
    const onPanelChange = (value, mode, view) => {
      ctx.emit("panel-change", value, mode, view);
    };
    provide("EP_PICKER_BASE", {
      props
    });
    return {
      nsDate,
      nsInput,
      nsRange,
      elPopperOptions,
      isDatesPicker,
      handleEndChange,
      handleStartChange,
      handleStartInput,
      handleEndInput,
      onUserInput,
      handleChange,
      handleKeydown,
      popperPaneRef,
      onClickOutside,
      pickerSize,
      isRangeInput,
      onMouseLeave,
      onMouseEnter,
      onClearIconClick,
      showClose,
      triggerIcon,
      onPick,
      handleFocus,
      handleBlur,
      pickerVisible,
      pickerActualVisible,
      displayValue,
      parsedValue,
      setSelectionRange,
      refPopper,
      inputRef,
      pickerDisabled,
      onSetPickerOption,
      onCalendarChange,
      onPanelChange,
      focus,
      onShow,
      onBeforeShow,
      onHide
    };
  }
});
const _hoisted_1$u = ["id", "name", "placeholder", "value", "disabled", "readonly"];
const _hoisted_2$p = ["id", "name", "placeholder", "value", "disabled", "readonly"];
function _sfc_render$B(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_input = resolveComponent("el-input");
  const _component_el_tooltip = resolveComponent("el-tooltip");
  return openBlock(), createBlock(_component_el_tooltip, mergeProps({
    ref: "refPopper",
    visible: _ctx.pickerVisible,
    "onUpdate:visible": _cache[17] || (_cache[17] = ($event) => _ctx.pickerVisible = $event),
    effect: "light",
    pure: "",
    trigger: "click"
  }, _ctx.$attrs, {
    "append-to-body": "",
    transition: `${_ctx.nsDate.namespace.value}-zoom-in-top`,
    "popper-class": [`${_ctx.nsDate.namespace.value}-picker__popper`, _ctx.popperClass],
    "popper-options": _ctx.elPopperOptions,
    "fallback-placements": ["bottom", "top", "right", "left"],
    "gpu-acceleration": false,
    "stop-popper-mouse-event": false,
    "hide-after": 0,
    persistent: "",
    onBeforeShow: _ctx.onBeforeShow,
    onShow: _ctx.onShow,
    onHide: _ctx.onHide
  }), {
    default: withCtx(() => [
      !_ctx.isRangeInput ? (openBlock(), createBlock(_component_el_input, {
        key: 0,
        id: _ctx.id,
        ref: "inputRef",
        "model-value": _ctx.displayValue,
        name: _ctx.name,
        size: _ctx.pickerSize,
        disabled: _ctx.pickerDisabled,
        placeholder: _ctx.placeholder,
        class: normalizeClass([_ctx.nsDate.b("editor"), _ctx.nsDate.bm("editor", _ctx.type), _ctx.$attrs.class]),
        style: normalizeStyle(_ctx.$attrs.style),
        readonly: !_ctx.editable || _ctx.readonly || _ctx.isDatesPicker || _ctx.type === "week",
        onInput: _ctx.onUserInput,
        onFocus: _ctx.handleFocus,
        onKeydown: _ctx.handleKeydown,
        onChange: _ctx.handleChange,
        onMouseenter: _ctx.onMouseEnter,
        onMouseleave: _ctx.onMouseLeave,
        onClick: _cache[0] || (_cache[0] = withModifiers(() => {
        }, ["stop"]))
      }, {
        prefix: withCtx(() => [
          _ctx.triggerIcon ? (openBlock(), createBlock(_component_el_icon, {
            key: 0,
            class: normalizeClass(_ctx.nsInput.e("icon")),
            onClick: _ctx.handleFocus
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(_ctx.triggerIcon)))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
        ]),
        suffix: withCtx(() => [
          _ctx.showClose && _ctx.clearIcon ? (openBlock(), createBlock(_component_el_icon, {
            key: 0,
            class: normalizeClass(`${_ctx.nsInput.e("icon")} clear-icon`),
            onClick: _ctx.onClearIconClick
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(_ctx.clearIcon)))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
        ]),
        _: 1
      }, 8, ["id", "model-value", "name", "size", "disabled", "placeholder", "class", "style", "readonly", "onInput", "onFocus", "onKeydown", "onChange", "onMouseenter", "onMouseleave"])) : (openBlock(), createElementBlock("div", {
        key: 1,
        ref: "inputRef",
        class: normalizeClass([
          _ctx.nsDate.b("editor"),
          _ctx.nsDate.bm("editor", _ctx.type),
          _ctx.nsInput.e("inner"),
          _ctx.nsDate.is("disabled", _ctx.pickerDisabled),
          _ctx.nsDate.is("active", _ctx.pickerVisible),
          _ctx.nsRange.b("editor"),
          _ctx.pickerSize ? _ctx.nsRange.bm("editor", _ctx.pickerSize) : "",
          _ctx.$attrs.class
        ]),
        style: normalizeStyle(_ctx.$attrs.style),
        onClick: _cache[7] || (_cache[7] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args)),
        onMouseenter: _cache[8] || (_cache[8] = (...args) => _ctx.onMouseEnter && _ctx.onMouseEnter(...args)),
        onMouseleave: _cache[9] || (_cache[9] = (...args) => _ctx.onMouseLeave && _ctx.onMouseLeave(...args)),
        onKeydown: _cache[10] || (_cache[10] = (...args) => _ctx.handleKeydown && _ctx.handleKeydown(...args))
      }, [
        _ctx.triggerIcon ? (openBlock(), createBlock(_component_el_icon, {
          key: 0,
          class: normalizeClass([_ctx.nsInput.e("icon"), _ctx.nsRange.e("icon")]),
          onClick: _ctx.handleFocus
        }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.triggerIcon)))
          ]),
          _: 1
        }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true),
        createElementVNode("input", {
          id: _ctx.id && _ctx.id[0],
          autocomplete: "off",
          name: _ctx.name && _ctx.name[0],
          placeholder: _ctx.startPlaceholder,
          value: _ctx.displayValue && _ctx.displayValue[0],
          disabled: _ctx.pickerDisabled,
          readonly: !_ctx.editable || _ctx.readonly,
          class: normalizeClass(_ctx.nsRange.b("input")),
          onInput: _cache[1] || (_cache[1] = (...args) => _ctx.handleStartInput && _ctx.handleStartInput(...args)),
          onChange: _cache[2] || (_cache[2] = (...args) => _ctx.handleStartChange && _ctx.handleStartChange(...args)),
          onFocus: _cache[3] || (_cache[3] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args))
        }, null, 42, _hoisted_1$u),
        renderSlot(_ctx.$slots, "range-separator", {}, () => [
          createElementVNode("span", {
            class: normalizeClass(_ctx.nsRange.b("separator"))
          }, toDisplayString(_ctx.rangeSeparator), 3)
        ]),
        createElementVNode("input", {
          id: _ctx.id && _ctx.id[1],
          autocomplete: "off",
          name: _ctx.name && _ctx.name[1],
          placeholder: _ctx.endPlaceholder,
          value: _ctx.displayValue && _ctx.displayValue[1],
          disabled: _ctx.pickerDisabled,
          readonly: !_ctx.editable || _ctx.readonly,
          class: normalizeClass(_ctx.nsRange.b("input")),
          onFocus: _cache[4] || (_cache[4] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args)),
          onInput: _cache[5] || (_cache[5] = (...args) => _ctx.handleEndInput && _ctx.handleEndInput(...args)),
          onChange: _cache[6] || (_cache[6] = (...args) => _ctx.handleEndChange && _ctx.handleEndChange(...args))
        }, null, 42, _hoisted_2$p),
        _ctx.clearIcon ? (openBlock(), createBlock(_component_el_icon, {
          key: 1,
          class: normalizeClass([
            _ctx.nsInput.e("icon"),
            _ctx.nsRange.e("close-icon"),
            {
              [_ctx.nsRange.e("close-icon--hidden")]: !_ctx.showClose
            }
          ]),
          onClick: _ctx.onClearIconClick
        }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.clearIcon)))
          ]),
          _: 1
        }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
      ], 38))
    ]),
    content: withCtx(() => [
      renderSlot(_ctx.$slots, "default", {
        visible: _ctx.pickerVisible,
        actualVisible: _ctx.pickerActualVisible,
        parsedValue: _ctx.parsedValue,
        format: _ctx.format,
        unlinkPanels: _ctx.unlinkPanels,
        type: _ctx.type,
        defaultValue: _ctx.defaultValue,
        onPick: _cache[11] || (_cache[11] = (...args) => _ctx.onPick && _ctx.onPick(...args)),
        onSelectRange: _cache[12] || (_cache[12] = (...args) => _ctx.setSelectionRange && _ctx.setSelectionRange(...args)),
        onSetPickerOption: _cache[13] || (_cache[13] = (...args) => _ctx.onSetPickerOption && _ctx.onSetPickerOption(...args)),
        onCalendarChange: _cache[14] || (_cache[14] = (...args) => _ctx.onCalendarChange && _ctx.onCalendarChange(...args)),
        onPanelChange: _cache[15] || (_cache[15] = (...args) => _ctx.onPanelChange && _ctx.onPanelChange(...args)),
        onMousedown: _cache[16] || (_cache[16] = withModifiers(() => {
        }, ["stop"]))
      })
    ]),
    _: 3
  }, 16, ["visible", "transition", "popper-class", "popper-options", "onBeforeShow", "onShow", "onHide"]);
}
var CommonPicker = /* @__PURE__ */ _export_sfc$2(_sfc_main$O, [["render", _sfc_render$B], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/common/picker.vue"]]);

const nodeList = /* @__PURE__ */ new Map();
let startClick;
if (isClient) {
  document.addEventListener("mousedown", (e) => startClick = e);
  document.addEventListener("mouseup", (e) => {
    for (const handlers of nodeList.values()) {
      for (const { documentHandler } of handlers) {
        documentHandler(e, startClick);
      }
    }
  });
}
function createDocumentHandler(el, binding) {
  let excludes = [];
  if (Array.isArray(binding.arg)) {
    excludes = binding.arg;
  } else if (isElement$2(binding.arg)) {
    excludes.push(binding.arg);
  }
  return function(mouseup, mousedown) {
    const popperRef = binding.instance.popperRef;
    const mouseUpTarget = mouseup.target;
    const mouseDownTarget = mousedown == null ? void 0 : mousedown.target;
    const isBound = !binding || !binding.instance;
    const isTargetExists = !mouseUpTarget || !mouseDownTarget;
    const isContainedByEl = el.contains(mouseUpTarget) || el.contains(mouseDownTarget);
    const isSelf = el === mouseUpTarget;
    const isTargetExcluded = excludes.length && excludes.some((item) => item == null ? void 0 : item.contains(mouseUpTarget)) || excludes.length && excludes.includes(mouseDownTarget);
    const isContainedByPopper = popperRef && (popperRef.contains(mouseUpTarget) || popperRef.contains(mouseDownTarget));
    if (isBound || isTargetExists || isContainedByEl || isSelf || isTargetExcluded || isContainedByPopper) {
      return;
    }
    binding.value(mouseup, mousedown);
  };
}
const ClickOutside = {
  beforeMount(el, binding) {
    if (!nodeList.has(el)) {
      nodeList.set(el, []);
    }
    nodeList.get(el).push({
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value
    });
  },
  updated(el, binding) {
    if (!nodeList.has(el)) {
      nodeList.set(el, []);
    }
    const handlers = nodeList.get(el);
    const oldHandlerIndex = handlers.findIndex((item) => item.bindingFn === binding.oldValue);
    const newHandler = {
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value
    };
    if (oldHandlerIndex >= 0) {
      handlers.splice(oldHandlerIndex, 1, newHandler);
    } else {
      handlers.push(newHandler);
    }
  },
  unmounted(el) {
    nodeList.delete(el);
  }
};

var RepeatClick = {
  beforeMount(el, binding) {
    let interval = null;
    let startTime;
    const handler = () => binding.value && binding.value();
    const clear = () => {
      if (Date.now() - startTime < 100) {
        handler();
      }
      clearInterval(interval);
      interval = null;
    };
    on(el, "mousedown", (e) => {
      if (e.button !== 0)
        return;
      startTime = Date.now();
      once(document, "mouseup", clear);
      clearInterval(interval);
      interval = setInterval(handler, 100);
    });
  }
};

var D=!1,o,p,m,u,d,M,l,w,x,E,F,_,h,A,X;function a(){if(!D){D=!0;var e=navigator.userAgent,n=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e),i=/(Mac OS X)|(Windows)|(Linux)/.exec(e);if(_=/\b(iPhone|iP[ao]d)/.exec(e),h=/\b(iP[ao]d)/.exec(e),E=/Android/i.exec(e),A=/FBAN\/\w+;/i.exec(e),X=/Mobile/i.exec(e),F=!!/Win64/.exec(e),n){o=n[1]?parseFloat(n[1]):n[5]?parseFloat(n[5]):NaN,o&&document&&document.documentMode&&(o=document.documentMode);var r=/(?:Trident\/(\d+.\d+))/.exec(e);M=r?parseFloat(r[1])+4:o,p=n[2]?parseFloat(n[2]):NaN,m=n[3]?parseFloat(n[3]):NaN,u=n[4]?parseFloat(n[4]):NaN,u?(n=/(?:Chrome\/(\d+\.\d+))/.exec(e),d=n&&n[1]?parseFloat(n[1]):NaN):d=NaN;}else o=p=m=d=u=NaN;if(i){if(i[1]){var t=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);l=t?parseFloat(t[1].replace("_",".")):!0;}else l=!1;w=!!i[2],x=!!i[3];}else l=w=x=!1;}}var v={ie:function(){return a()||o},ieCompatibilityMode:function(){return a()||M>o},ie64:function(){return v.ie()&&F},firefox:function(){return a()||p},opera:function(){return a()||m},webkit:function(){return a()||u},safari:function(){return v.webkit()},chrome:function(){return a()||d},windows:function(){return a()||w},osx:function(){return a()||l},linux:function(){return a()||x},iphone:function(){return a()||_},mobile:function(){return a()||_||h||E||X},nativeApp:function(){return a()||A},android:function(){return a()||E},ipad:function(){return a()||h}},b=v;var s=!!(typeof window<"u"&&window.document&&window.document.createElement),Y={canUseDOM:s,canUseWorkers:typeof Worker<"u",canUseEventListeners:s&&!!(window.addEventListener||window.attachEvent),canUseViewport:s&&!!window.screen,isInWorker:!s},N=Y;var O;N.canUseDOM&&(O=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0);function L(e,n){if(!N.canUseDOM||n&&!("addEventListener"in document))return !1;var i="on"+e,r=i in document;if(!r){var t=document.createElement("div");t.setAttribute(i,"return;"),r=typeof t[i]=="function";}return !r&&O&&e==="wheel"&&(r=document.implementation.hasFeature("Events.wheel","3.0")),r}var I=L;var P=10,T=40,U=800;function S(e){var n=0,i=0,r=0,t=0;return "detail"in e&&(i=e.detail),"wheelDelta"in e&&(i=-e.wheelDelta/120),"wheelDeltaY"in e&&(i=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(n=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(n=i,i=0),r=n*P,t=i*P,"deltaY"in e&&(t=e.deltaY),"deltaX"in e&&(r=e.deltaX),(r||t)&&e.deltaMode&&(e.deltaMode==1?(r*=T,t*=T):(r*=U,t*=U)),r&&!n&&(n=r<1?-1:1),t&&!i&&(i=t<1?-1:1),{spinX:n,spinY:i,pixelX:r,pixelY:t}}S.getEventType=function(){return b.firefox()?"DOMMouseScroll":I("wheel")?"wheel":"mousewheel"};var W=S;/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */

const mousewheel = function(element, callback) {
  if (element && element.addEventListener) {
    const fn = function(event) {
      const normalized = W(event);
      callback && Reflect.apply(callback, this, [event, normalized]);
    };
    if (isFirefox()) {
      element.addEventListener("DOMMouseScroll", fn);
    } else {
      element.onmousewheel = fn;
    }
  }
};
const Mousewheel = {
  beforeMount(el, binding) {
    mousewheel(el, binding.value);
  }
};

const Resize = {
  beforeMount(el, binding) {
    el._handleResize = () => {
      var _a;
      el && ((_a = binding.value) == null ? void 0 : _a.call(binding, el));
    };
    addResizeListener(el, el._handleResize);
  },
  beforeUnmount(el) {
    removeResizeListener(el, el._handleResize);
  }
};

const makeList = (total, method, methodFunc) => {
  const arr = [];
  const disabledArr = method && methodFunc();
  for (let i = 0; i < total; i++) {
    arr[i] = disabledArr ? disabledArr.includes(i) : false;
  }
  return arr;
};
const makeAvailableArr = (list) => {
  return list.map((_, index) => !_ ? index : _).filter((_) => _ !== true);
};
const getTimeLists = (disabledHours, disabledMinutes, disabledSeconds) => {
  const getHoursList = (role, compare) => {
    return makeList(24, disabledHours, () => disabledHours(role, compare));
  };
  const getMinutesList = (hour, role, compare) => {
    return makeList(60, disabledMinutes, () => disabledMinutes(hour, role, compare));
  };
  const getSecondsList = (hour, minute, role, compare) => {
    return makeList(60, disabledSeconds, () => disabledSeconds(hour, minute, role, compare));
  };
  return {
    getHoursList,
    getMinutesList,
    getSecondsList
  };
};
const getAvailableArrs = (disabledHours, disabledMinutes, disabledSeconds) => {
  const { getHoursList, getMinutesList, getSecondsList } = getTimeLists(disabledHours, disabledMinutes, disabledSeconds);
  const getAvailableHours = (role, compare) => {
    return makeAvailableArr(getHoursList(role, compare));
  };
  const getAvailableMinutes = (hour, role, compare) => {
    return makeAvailableArr(getMinutesList(hour, role, compare));
  };
  const getAvailableSeconds = (hour, minute, role, compare) => {
    return makeAvailableArr(getSecondsList(hour, minute, role, compare));
  };
  return {
    getAvailableHours,
    getAvailableMinutes,
    getAvailableSeconds
  };
};
const useOldValue = (props) => {
  const oldValue = ref(props.parsedValue);
  watch(() => props.visible, (val) => {
    if (!val) {
      oldValue.value = props.parsedValue;
    }
  });
  return oldValue;
};

const _sfc_main$N = defineComponent({
  directives: {
    repeatClick: RepeatClick
  },
  components: {
    ElScrollbar,
    ElIcon,
    ArrowUp: arrowUp,
    ArrowDown: arrowDown
  },
  props: {
    role: {
      type: String,
      required: true
    },
    spinnerDate: {
      type: Object,
      required: true
    },
    showSeconds: {
      type: Boolean,
      default: true
    },
    arrowControl: Boolean,
    amPmMode: {
      type: String,
      default: ""
    },
    disabledHours: {
      type: Function
    },
    disabledMinutes: {
      type: Function
    },
    disabledSeconds: {
      type: Function
    }
  },
  emits: ["change", "select-range", "set-option"],
  setup(props, ctx) {
    const ns = useNamespace("time");
    let isScrolling = false;
    const debouncedResetScroll = debounce$1((type) => {
      isScrolling = false;
      adjustCurrentSpinner(type);
    }, 200);
    const currentScrollbar = ref(null);
    const listHoursRef = ref(null);
    const listMinutesRef = ref(null);
    const listSecondsRef = ref(null);
    const listRefsMap = {
      hours: listHoursRef,
      minutes: listMinutesRef,
      seconds: listSecondsRef
    };
    const spinnerItems = computed(() => {
      const arr = ["hours", "minutes", "seconds"];
      return props.showSeconds ? arr : arr.slice(0, 2);
    });
    const hours = computed(() => {
      return props.spinnerDate.hour();
    });
    const minutes = computed(() => {
      return props.spinnerDate.minute();
    });
    const seconds = computed(() => {
      return props.spinnerDate.second();
    });
    const timePartsMap = computed(() => ({
      hours,
      minutes,
      seconds
    }));
    const hoursList = computed(() => {
      return getHoursList(props.role);
    });
    const minutesList = computed(() => {
      return getMinutesList(hours.value, props.role);
    });
    const secondsList = computed(() => {
      return getSecondsList(hours.value, minutes.value, props.role);
    });
    const listMap = computed(() => ({
      hours: hoursList,
      minutes: minutesList,
      seconds: secondsList
    }));
    const arrowHourList = computed(() => {
      const hour = hours.value;
      return [
        hour > 0 ? hour - 1 : void 0,
        hour,
        hour < 23 ? hour + 1 : void 0
      ];
    });
    const arrowMinuteList = computed(() => {
      const minute = minutes.value;
      return [
        minute > 0 ? minute - 1 : void 0,
        minute,
        minute < 59 ? minute + 1 : void 0
      ];
    });
    const arrowSecondList = computed(() => {
      const second = seconds.value;
      return [
        second > 0 ? second - 1 : void 0,
        second,
        second < 59 ? second + 1 : void 0
      ];
    });
    const arrowListMap = computed(() => ({
      hours: arrowHourList,
      minutes: arrowMinuteList,
      seconds: arrowSecondList
    }));
    const getAmPmFlag = (hour) => {
      const shouldShowAmPm = !!props.amPmMode;
      if (!shouldShowAmPm)
        return "";
      const isCapital = props.amPmMode === "A";
      let content = hour < 12 ? " am" : " pm";
      if (isCapital)
        content = content.toUpperCase();
      return content;
    };
    const emitSelectRange = (type) => {
      if (type === "hours") {
        ctx.emit("select-range", 0, 2);
      } else if (type === "minutes") {
        ctx.emit("select-range", 3, 5);
      } else if (type === "seconds") {
        ctx.emit("select-range", 6, 8);
      }
      currentScrollbar.value = type;
    };
    const adjustCurrentSpinner = (type) => {
      adjustSpinner(type, timePartsMap.value[type].value);
    };
    const adjustSpinners = () => {
      adjustCurrentSpinner("hours");
      adjustCurrentSpinner("minutes");
      adjustCurrentSpinner("seconds");
    };
    const getScrollbarElement = (el) => el.querySelector(`.${ns.namespace.value}-scrollbar__wrap`);
    const adjustSpinner = (type, value) => {
      if (props.arrowControl)
        return;
      const el = listRefsMap[type];
      if (el && el.$el) {
        getScrollbarElement(el.$el).scrollTop = Math.max(0, value * typeItemHeight(type));
      }
    };
    const typeItemHeight = (type) => {
      const el = listRefsMap[type];
      return el.$el.querySelector("li").offsetHeight;
    };
    const onIncreaseClick = () => {
      scrollDown(1);
    };
    const onDecreaseClick = () => {
      scrollDown(-1);
    };
    const scrollDown = (step) => {
      if (!currentScrollbar.value) {
        emitSelectRange("hours");
      }
      const label = currentScrollbar.value;
      let now = timePartsMap.value[label].value;
      const total = currentScrollbar.value === "hours" ? 24 : 60;
      now = (now + step + total) % total;
      modifyDateField(label, now);
      adjustSpinner(label, now);
      nextTick(() => emitSelectRange(currentScrollbar.value));
    };
    const modifyDateField = (type, value) => {
      const list = listMap.value[type].value;
      const isDisabled = list[value];
      if (isDisabled)
        return;
      switch (type) {
        case "hours":
          ctx.emit("change", props.spinnerDate.hour(value).minute(minutes.value).second(seconds.value));
          break;
        case "minutes":
          ctx.emit("change", props.spinnerDate.hour(hours.value).minute(value).second(seconds.value));
          break;
        case "seconds":
          ctx.emit("change", props.spinnerDate.hour(hours.value).minute(minutes.value).second(value));
          break;
      }
    };
    const handleClick = (type, { value, disabled }) => {
      if (!disabled) {
        modifyDateField(type, value);
        emitSelectRange(type);
        adjustSpinner(type, value);
      }
    };
    const handleScroll = (type) => {
      isScrolling = true;
      debouncedResetScroll(type);
      const value = Math.min(Math.round((getScrollbarElement(listRefsMap[type].$el).scrollTop - (scrollBarHeight(type) * 0.5 - 10) / typeItemHeight(type) + 3) / typeItemHeight(type)), type === "hours" ? 23 : 59);
      modifyDateField(type, value);
    };
    const scrollBarHeight = (type) => {
      return listRefsMap[type].$el.offsetHeight;
    };
    const bindScrollEvent = () => {
      const bindFunction = (type) => {
        if (listRefsMap[type] && listRefsMap[type].$el) {
          getScrollbarElement(listRefsMap[type].$el).onscroll = () => {
            handleScroll(type);
          };
        }
      };
      bindFunction("hours");
      bindFunction("minutes");
      bindFunction("seconds");
    };
    onMounted(() => {
      nextTick(() => {
        !props.arrowControl && bindScrollEvent();
        adjustSpinners();
        if (props.role === "start")
          emitSelectRange("hours");
      });
    });
    const setRef = (scrollbar, type) => {
      listRefsMap[type] = scrollbar;
    };
    ctx.emit("set-option", [`${props.role}_scrollDown`, scrollDown]);
    ctx.emit("set-option", [`${props.role}_emitSelectRange`, emitSelectRange]);
    const { getHoursList, getMinutesList, getSecondsList } = getTimeLists(props.disabledHours, props.disabledMinutes, props.disabledSeconds);
    watch(() => props.spinnerDate, () => {
      if (isScrolling)
        return;
      adjustSpinners();
    });
    return {
      ns,
      setRef,
      spinnerItems,
      currentScrollbar,
      hours,
      minutes,
      seconds,
      hoursList,
      minutesList,
      arrowHourList,
      arrowMinuteList,
      arrowSecondList,
      getAmPmFlag,
      emitSelectRange,
      adjustCurrentSpinner,
      typeItemHeight,
      listHoursRef,
      listMinutesRef,
      listSecondsRef,
      onIncreaseClick,
      onDecreaseClick,
      handleClick,
      secondsList,
      timePartsMap,
      arrowListMap,
      listMap
    };
  }
});
const _hoisted_1$t = ["onClick"];
const _hoisted_2$o = ["onMouseenter"];
function _sfc_render$A(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  const _component_arrow_up = resolveComponent("arrow-up");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_arrow_down = resolveComponent("arrow-down");
  const _directive_repeat_click = resolveDirective("repeat-click");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([_ctx.ns.b("spinner"), { "has-seconds": _ctx.showSeconds }])
  }, [
    !_ctx.arrowControl ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(_ctx.spinnerItems, (item) => {
      return openBlock(), createBlock(_component_el_scrollbar, {
        key: item,
        ref_for: true,
        ref: (scollbar) => _ctx.setRef(scollbar, item),
        class: normalizeClass(_ctx.ns.be("spinner", "wrapper")),
        "wrap-style": "max-height: inherit;",
        "view-class": _ctx.ns.be("spinner", "list"),
        noresize: "",
        tag: "ul",
        onMouseenter: ($event) => _ctx.emitSelectRange(item),
        onMousemove: ($event) => _ctx.adjustCurrentSpinner(item)
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.listMap[item].value, (disabled, key) => {
            return openBlock(), createElementBlock("li", {
              key,
              class: normalizeClass([
                _ctx.ns.be("spinner", "item"),
                _ctx.ns.is("active", key === _ctx.timePartsMap[item].value),
                _ctx.ns.is("disabled", disabled)
              ]),
              onClick: ($event) => _ctx.handleClick(item, { value: key, disabled })
            }, [
              item === "hours" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createTextVNode(toDisplayString(("0" + (_ctx.amPmMode ? key % 12 || 12 : key)).slice(-2)) + toDisplayString(_ctx.getAmPmFlag(key)), 1)
              ], 2112)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createTextVNode(toDisplayString(("0" + key).slice(-2)), 1)
              ], 2112))
            ], 10, _hoisted_1$t);
          }), 128))
        ]),
        _: 2
      }, 1032, ["class", "view-class", "onMouseenter", "onMousemove"]);
    }), 128)) : createCommentVNode("v-if", true),
    _ctx.arrowControl ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(_ctx.spinnerItems, (item) => {
      return openBlock(), createElementBlock("div", {
        key: item,
        class: normalizeClass([_ctx.ns.be("spinner", "wrapper"), _ctx.ns.is("arrow")]),
        onMouseenter: ($event) => _ctx.emitSelectRange(item)
      }, [
        withDirectives((openBlock(), createBlock(_component_el_icon, {
          class: normalizeClass(["arrow-up", _ctx.ns.be("spinner", "arrow")])
        }, {
          default: withCtx(() => [
            createVNode(_component_arrow_up)
          ]),
          _: 1
        }, 8, ["class"])), [
          [_directive_repeat_click, _ctx.onDecreaseClick]
        ]),
        withDirectives((openBlock(), createBlock(_component_el_icon, {
          class: normalizeClass(["arrow-down", _ctx.ns.be("spinner", "arrow")])
        }, {
          default: withCtx(() => [
            createVNode(_component_arrow_down)
          ]),
          _: 1
        }, 8, ["class"])), [
          [_directive_repeat_click, _ctx.onIncreaseClick]
        ]),
        createElementVNode("ul", {
          class: normalizeClass(_ctx.ns.be("spinner", "list"))
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.arrowListMap[item].value, (time, key) => {
            return openBlock(), createElementBlock("li", {
              key,
              class: normalizeClass([
                _ctx.ns.be("spinner", "item"),
                _ctx.ns.is("active", time === _ctx.timePartsMap[item].value),
                _ctx.ns.is("disabled", _ctx.listMap[item].value[time])
              ])
            }, [
              typeof time === "number" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                item === "hours" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  createTextVNode(toDisplayString(("0" + (_ctx.amPmMode ? time % 12 || 12 : time)).slice(-2)) + toDisplayString(_ctx.getAmPmFlag(time)), 1)
                ], 2112)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createTextVNode(toDisplayString(("0" + time).slice(-2)), 1)
                ], 2112))
              ], 2112)) : createCommentVNode("v-if", true)
            ], 2);
          }), 128))
        ], 2)
      ], 42, _hoisted_2$o);
    }), 128)) : createCommentVNode("v-if", true)
  ], 2);
}
var TimeSpinner = /* @__PURE__ */ _export_sfc$2(_sfc_main$N, [["render", _sfc_render$A], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/time-picker-com/basic-time-spinner.vue"]]);

const _sfc_main$M = defineComponent({
  components: {
    TimeSpinner
  },
  props: {
    visible: Boolean,
    actualVisible: {
      type: Boolean,
      default: void 0
    },
    datetimeRole: {
      type: String
    },
    parsedValue: {
      type: [Object, String]
    },
    format: {
      type: String,
      default: ""
    }
  },
  emits: ["pick", "select-range", "set-picker-option"],
  setup(props, ctx) {
    const ns = useNamespace("time");
    const { t, lang } = useLocale();
    const selectionRange = ref([0, 2]);
    const oldValue = useOldValue(props);
    const transitionName = computed(() => {
      return isUndefined(props.actualVisible) ? `${ns.namespace.value}-zoom-in-top` : "";
    });
    const showSeconds = computed(() => {
      return props.format.includes("ss");
    });
    const amPmMode = computed(() => {
      if (props.format.includes("A"))
        return "A";
      if (props.format.includes("a"))
        return "a";
      return "";
    });
    const isValidValue = (_date) => {
      const parsedDate = dayjs(_date).locale(lang.value);
      const result = getRangeAvailableTime(parsedDate);
      return parsedDate.isSame(result);
    };
    const handleCancel = () => {
      ctx.emit("pick", oldValue.value, false);
    };
    const handleConfirm = (visible = false, first = false) => {
      if (first)
        return;
      ctx.emit("pick", props.parsedValue, visible);
    };
    const handleChange = (_date) => {
      if (!props.visible) {
        return;
      }
      const result = getRangeAvailableTime(_date).millisecond(0);
      ctx.emit("pick", result, true);
    };
    const setSelectionRange = (start, end) => {
      ctx.emit("select-range", start, end);
      selectionRange.value = [start, end];
    };
    const changeSelectionRange = (step) => {
      const list = [0, 3].concat(showSeconds.value ? [6] : []);
      const mapping = ["hours", "minutes"].concat(showSeconds.value ? ["seconds"] : []);
      const index = list.indexOf(selectionRange.value[0]);
      const next = (index + step + list.length) % list.length;
      timePickerOptions["start_emitSelectRange"](mapping[next]);
    };
    const handleKeydown = (event) => {
      const code = event.code;
      if (code === EVENT_CODE.left || code === EVENT_CODE.right) {
        const step = code === EVENT_CODE.left ? -1 : 1;
        changeSelectionRange(step);
        event.preventDefault();
        return;
      }
      if (code === EVENT_CODE.up || code === EVENT_CODE.down) {
        const step = code === EVENT_CODE.up ? -1 : 1;
        timePickerOptions["start_scrollDown"](step);
        event.preventDefault();
        return;
      }
    };
    const getRangeAvailableTime = (date) => {
      const availableMap = {
        hour: getAvailableHours,
        minute: getAvailableMinutes,
        second: getAvailableSeconds
      };
      let result = date;
      ["hour", "minute", "second"].forEach((_) => {
        if (availableMap[_]) {
          let availableArr;
          const method = availableMap[_];
          if (_ === "minute") {
            availableArr = method(result.hour(), props.datetimeRole);
          } else if (_ === "second") {
            availableArr = method(result.hour(), result.minute(), props.datetimeRole);
          } else {
            availableArr = method(props.datetimeRole);
          }
          if (availableArr && availableArr.length && !availableArr.includes(result[_]())) {
            result = result[_](availableArr[0]);
          }
        }
      });
      return result;
    };
    const parseUserInput = (value) => {
      if (!value)
        return null;
      return dayjs(value, props.format).locale(lang.value);
    };
    const formatToString = (value) => {
      if (!value)
        return null;
      return value.format(props.format);
    };
    const getDefaultValue = () => {
      return dayjs(defaultValue).locale(lang.value);
    };
    ctx.emit("set-picker-option", ["isValidValue", isValidValue]);
    ctx.emit("set-picker-option", ["formatToString", formatToString]);
    ctx.emit("set-picker-option", ["parseUserInput", parseUserInput]);
    ctx.emit("set-picker-option", ["handleKeydown", handleKeydown]);
    ctx.emit("set-picker-option", [
      "getRangeAvailableTime",
      getRangeAvailableTime
    ]);
    ctx.emit("set-picker-option", ["getDefaultValue", getDefaultValue]);
    const timePickerOptions = {};
    const onSetOption = (e) => {
      timePickerOptions[e[0]] = e[1];
    };
    const pickerBase = inject("EP_PICKER_BASE");
    const {
      arrowControl,
      disabledHours,
      disabledMinutes,
      disabledSeconds,
      defaultValue
    } = pickerBase.props;
    const { getAvailableHours, getAvailableMinutes, getAvailableSeconds } = getAvailableArrs(disabledHours, disabledMinutes, disabledSeconds);
    return {
      ns,
      transitionName,
      arrowControl,
      onSetOption,
      t,
      handleConfirm,
      handleChange,
      setSelectionRange,
      amPmMode,
      showSeconds,
      handleCancel,
      disabledHours,
      disabledMinutes,
      disabledSeconds
    };
  }
});
function _sfc_render$z(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_time_spinner = resolveComponent("time-spinner");
  return openBlock(), createBlock(Transition, { name: _ctx.transitionName }, {
    default: withCtx(() => [
      _ctx.actualVisible || _ctx.visible ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(_ctx.ns.b("panel"))
      }, [
        createElementVNode("div", {
          class: normalizeClass([_ctx.ns.be("panel", "content"), { "has-seconds": _ctx.showSeconds }])
        }, [
          createVNode(_component_time_spinner, {
            ref: "spinner",
            role: _ctx.datetimeRole || "start",
            "arrow-control": _ctx.arrowControl,
            "show-seconds": _ctx.showSeconds,
            "am-pm-mode": _ctx.amPmMode,
            "spinner-date": _ctx.parsedValue,
            "disabled-hours": _ctx.disabledHours,
            "disabled-minutes": _ctx.disabledMinutes,
            "disabled-seconds": _ctx.disabledSeconds,
            onChange: _ctx.handleChange,
            onSetOption: _ctx.onSetOption,
            onSelectRange: _ctx.setSelectionRange
          }, null, 8, ["role", "arrow-control", "show-seconds", "am-pm-mode", "spinner-date", "disabled-hours", "disabled-minutes", "disabled-seconds", "onChange", "onSetOption", "onSelectRange"])
        ], 2),
        createElementVNode("div", {
          class: normalizeClass(_ctx.ns.be("panel", "footer"))
        }, [
          createElementVNode("button", {
            type: "button",
            class: normalizeClass([_ctx.ns.be("panel", "btn"), "cancel"]),
            onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleCancel && _ctx.handleCancel(...args))
          }, toDisplayString(_ctx.t("el.datepicker.cancel")), 3),
          createElementVNode("button", {
            type: "button",
            class: normalizeClass([_ctx.ns.be("panel", "btn"), "confirm"]),
            onClick: _cache[1] || (_cache[1] = ($event) => _ctx.handleConfirm())
          }, toDisplayString(_ctx.t("el.datepicker.confirm")), 3)
        ], 2)
      ], 2)) : createCommentVNode("v-if", true)
    ]),
    _: 1
  }, 8, ["name"]);
}
var TimePickPanel = /* @__PURE__ */ _export_sfc$2(_sfc_main$M, [["render", _sfc_render$z], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/time-picker-com/panel-time-pick.vue"]]);

const rangeArr = (n) => Array.from(Array.from({ length: n }).keys());
const extractDateFormat = (format) => {
  return format.replace(/\W?m{1,2}|\W?ZZ/g, "").replace(/\W?h{1,2}|\W?s{1,3}|\W?a/gi, "").trim();
};
const extractTimeFormat = (format) => {
  return format.replace(/\W?D{1,2}|\W?Do|\W?d{1,4}|\W?M{1,4}|\W?Y{2,4}/g, "").trim();
};

const useCheckboxProps = {
  modelValue: {
    type: [Boolean, Number, String],
    default: () => void 0
  },
  label: {
    type: [String, Boolean, Number, Object]
  },
  indeterminate: Boolean,
  disabled: Boolean,
  checked: Boolean,
  name: {
    type: String,
    default: void 0
  },
  trueLabel: {
    type: [String, Number],
    default: void 0
  },
  falseLabel: {
    type: [String, Number],
    default: void 0
  },
  tabindex: [String, Number],
  size: String
};
const useCheckboxGroup = () => {
  const elForm = inject(formContextKey, {});
  const elFormItem = inject(formItemContextKey, {});
  const checkboxGroup = inject("CheckboxGroup", {});
  const isGroup = computed(() => checkboxGroup && (checkboxGroup == null ? void 0 : checkboxGroup.name) === "ElCheckboxGroup");
  const elFormItemSize = computed(() => {
    return elFormItem.size;
  });
  return {
    isGroup,
    checkboxGroup,
    elForm,
    elFormItemSize,
    elFormItem
  };
};
const useModel = (props) => {
  const selfModel = ref(false);
  const { emit } = getCurrentInstance();
  const { isGroup, checkboxGroup } = useCheckboxGroup();
  const isLimitExceeded = ref(false);
  const model = computed({
    get() {
      var _a, _b;
      return isGroup.value ? (_a = checkboxGroup.modelValue) == null ? void 0 : _a.value : (_b = props.modelValue) != null ? _b : selfModel.value;
    },
    set(val) {
      var _a;
      if (isGroup.value && Array.isArray(val)) {
        isLimitExceeded.value = checkboxGroup.max !== void 0 && val.length > checkboxGroup.max.value;
        isLimitExceeded.value === false && ((_a = checkboxGroup == null ? void 0 : checkboxGroup.changeEvent) == null ? void 0 : _a.call(checkboxGroup, val));
      } else {
        emit(UPDATE_MODEL_EVENT, val);
        selfModel.value = val;
      }
    }
  });
  return {
    model,
    isLimitExceeded
  };
};
const useCheckboxStatus = (props, { model }) => {
  const { isGroup, checkboxGroup } = useCheckboxGroup();
  const focus = ref(false);
  const size = useSize(checkboxGroup == null ? void 0 : checkboxGroup.checkboxGroupSize, { prop: true });
  const isChecked = computed(() => {
    const value = model.value;
    if (toTypeString(value) === "[object Boolean]") {
      return value;
    } else if (Array.isArray(value)) {
      return value.includes(props.label);
    } else if (value !== null && value !== void 0) {
      return value === props.trueLabel;
    } else {
      return !!value;
    }
  });
  const checkboxSize = useSize(computed(() => {
    var _a;
    return isGroup.value ? (_a = checkboxGroup == null ? void 0 : checkboxGroup.checkboxGroupSize) == null ? void 0 : _a.value : void 0;
  }));
  return {
    isChecked,
    focus,
    size,
    checkboxSize
  };
};
const useDisabled = (props, {
  model,
  isChecked
}) => {
  const { elForm, isGroup, checkboxGroup } = useCheckboxGroup();
  const isLimitDisabled = computed(() => {
    var _a, _b;
    const max = (_a = checkboxGroup.max) == null ? void 0 : _a.value;
    const min = (_b = checkboxGroup.min) == null ? void 0 : _b.value;
    return !!(max || min) && model.value.length >= max && !isChecked.value || model.value.length <= min && isChecked.value;
  });
  const isDisabled = computed(() => {
    var _a, _b;
    const disabled = props.disabled || elForm.disabled;
    return (_b = isGroup.value ? ((_a = checkboxGroup.disabled) == null ? void 0 : _a.value) || disabled || isLimitDisabled.value : props.disabled || elForm.disabled) != null ? _b : false;
  });
  return {
    isDisabled,
    isLimitDisabled
  };
};
const setStoreValue = (props, { model }) => {
  function addToStore() {
    if (Array.isArray(model.value) && !model.value.includes(props.label)) {
      model.value.push(props.label);
    } else {
      model.value = props.trueLabel || true;
    }
  }
  props.checked && addToStore();
};
const useEvent$1 = (props, { isLimitExceeded }) => {
  const { elFormItem } = useCheckboxGroup();
  const { emit } = getCurrentInstance();
  function handleChange(e) {
    var _a, _b;
    if (isLimitExceeded.value)
      return;
    const target = e.target;
    const value = target.checked ? (_a = props.trueLabel) != null ? _a : true : (_b = props.falseLabel) != null ? _b : false;
    emit("change", value, e);
  }
  watch(() => props.modelValue, () => {
    var _a;
    (_a = elFormItem.validate) == null ? void 0 : _a.call(elFormItem, "change").catch((err) => debugWarn());
  });
  return {
    handleChange
  };
};
const useCheckbox = (props) => {
  const { model, isLimitExceeded } = useModel(props);
  const { focus, size, isChecked, checkboxSize } = useCheckboxStatus(props, {
    model
  });
  const { isDisabled } = useDisabled(props, { model, isChecked });
  const { handleChange } = useEvent$1(props, { isLimitExceeded });
  setStoreValue(props, { model });
  return {
    isChecked,
    isDisabled,
    checkboxSize,
    model,
    handleChange,
    focus,
    size
  };
};

const _sfc_main$L = defineComponent({
  name: "ElCheckbox",
  props: {
    modelValue: {
      type: [Number, String, Boolean],
      default: () => void 0
    },
    label: {
      type: [String, Boolean, Number, Object]
    },
    indeterminate: Boolean,
    disabled: Boolean,
    checked: Boolean,
    name: {
      type: String,
      default: void 0
    },
    trueLabel: {
      type: [String, Number],
      default: void 0
    },
    falseLabel: {
      type: [String, Number],
      default: void 0
    },
    id: {
      type: String,
      default: void 0
    },
    controls: {
      type: String,
      default: void 0
    },
    border: Boolean,
    size: {
      type: String,
      validator: isValidComponentSize
    },
    tabindex: [String, Number]
  },
  emits: [UPDATE_MODEL_EVENT, "change"],
  setup(props) {
    const ns = useNamespace("checkbox");
    return {
      ns,
      ...useCheckbox(props)
    };
  }
});
const _hoisted_1$s = ["id", "aria-controls"];
const _hoisted_2$n = ["tabindex", "role", "aria-checked"];
const _hoisted_3$h = ["aria-hidden", "name", "tabindex", "disabled", "true-value", "false-value"];
const _hoisted_4$6 = ["aria-hidden", "disabled", "value", "name", "tabindex"];
function _sfc_render$y(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("label", {
    id: _ctx.id,
    class: normalizeClass([
      _ctx.ns.b(),
      _ctx.ns.m(_ctx.checkboxSize),
      _ctx.ns.is("disabled", _ctx.isDisabled),
      _ctx.ns.is("bordered", _ctx.border),
      _ctx.ns.is("checked", _ctx.isChecked)
    ]),
    "aria-controls": _ctx.indeterminate ? _ctx.controls : null
  }, [
    createElementVNode("span", {
      class: normalizeClass([
        _ctx.ns.e("input"),
        _ctx.ns.is("disabled", _ctx.isDisabled),
        _ctx.ns.is("checked", _ctx.isChecked),
        _ctx.ns.is("indeterminate", _ctx.indeterminate),
        _ctx.ns.is("focus", _ctx.focus)
      ]),
      tabindex: _ctx.indeterminate ? 0 : void 0,
      role: _ctx.indeterminate ? "checkbox" : void 0,
      "aria-checked": _ctx.indeterminate ? "mixed" : false
    }, [
      createElementVNode("span", {
        class: normalizeClass(_ctx.ns.e("inner"))
      }, null, 2),
      _ctx.trueLabel || _ctx.falseLabel ? withDirectives((openBlock(), createElementBlock("input", {
        key: 0,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.model = $event),
        class: normalizeClass(_ctx.ns.e("original")),
        type: "checkbox",
        "aria-hidden": _ctx.indeterminate ? "true" : "false",
        name: _ctx.name,
        tabindex: _ctx.tabindex,
        disabled: _ctx.isDisabled,
        "true-value": _ctx.trueLabel,
        "false-value": _ctx.falseLabel,
        onChange: _cache[1] || (_cache[1] = (...args) => _ctx.handleChange && _ctx.handleChange(...args)),
        onFocus: _cache[2] || (_cache[2] = ($event) => _ctx.focus = true),
        onBlur: _cache[3] || (_cache[3] = ($event) => _ctx.focus = false)
      }, null, 42, _hoisted_3$h)), [
        [vModelCheckbox, _ctx.model]
      ]) : withDirectives((openBlock(), createElementBlock("input", {
        key: 1,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.model = $event),
        class: normalizeClass(_ctx.ns.e("original")),
        type: "checkbox",
        "aria-hidden": _ctx.indeterminate ? "true" : "false",
        disabled: _ctx.isDisabled,
        value: _ctx.label,
        name: _ctx.name,
        tabindex: _ctx.tabindex,
        onChange: _cache[5] || (_cache[5] = (...args) => _ctx.handleChange && _ctx.handleChange(...args)),
        onFocus: _cache[6] || (_cache[6] = ($event) => _ctx.focus = true),
        onBlur: _cache[7] || (_cache[7] = ($event) => _ctx.focus = false)
      }, null, 42, _hoisted_4$6)), [
        [vModelCheckbox, _ctx.model]
      ])
    ], 10, _hoisted_2$n),
    _ctx.$slots.default || _ctx.label ? (openBlock(), createElementBlock("span", {
      key: 0,
      class: normalizeClass(_ctx.ns.e("label"))
    }, [
      renderSlot(_ctx.$slots, "default"),
      !_ctx.$slots.default ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createTextVNode(toDisplayString(_ctx.label), 1)
      ], 2112)) : createCommentVNode("v-if", true)
    ], 2)) : createCommentVNode("v-if", true)
  ], 10, _hoisted_1$s);
}
var Checkbox = /* @__PURE__ */ _export_sfc$2(_sfc_main$L, [["render", _sfc_render$y], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);

const _sfc_main$K = defineComponent({
  name: "ElCheckboxButton",
  props: useCheckboxProps,
  emits: [UPDATE_MODEL_EVENT, "change"],
  setup(props) {
    const { focus, isChecked, isDisabled, size, model, handleChange } = useCheckbox(props);
    const { checkboxGroup } = useCheckboxGroup();
    const ns = useNamespace("checkbox");
    const activeStyle = computed(() => {
      var _a, _b, _c, _d;
      const fillValue = (_b = (_a = checkboxGroup == null ? void 0 : checkboxGroup.fill) == null ? void 0 : _a.value) != null ? _b : "";
      return {
        backgroundColor: fillValue,
        borderColor: fillValue,
        color: (_d = (_c = checkboxGroup == null ? void 0 : checkboxGroup.textColor) == null ? void 0 : _c.value) != null ? _d : "",
        boxShadow: fillValue ? `-1px 0 0 0 ${fillValue}` : null
      };
    });
    return {
      focus,
      isChecked,
      isDisabled,
      model,
      handleChange,
      activeStyle,
      size,
      ns
    };
  }
});
const _hoisted_1$r = ["aria-checked", "aria-disabled"];
const _hoisted_2$m = ["name", "tabindex", "disabled", "true-value", "false-value"];
const _hoisted_3$g = ["name", "tabindex", "disabled", "value"];
function _sfc_render$x(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("label", {
    class: normalizeClass([
      _ctx.ns.b("button"),
      _ctx.ns.bm("button", _ctx.size),
      _ctx.ns.is("disabled", _ctx.isDisabled),
      _ctx.ns.is("checked", _ctx.isChecked),
      _ctx.ns.is("focus", _ctx.focus)
    ]),
    role: "checkbox",
    "aria-checked": _ctx.isChecked,
    "aria-disabled": _ctx.isDisabled
  }, [
    _ctx.trueLabel || _ctx.falseLabel ? withDirectives((openBlock(), createElementBlock("input", {
      key: 0,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.model = $event),
      class: normalizeClass(_ctx.ns.be("button", "original")),
      type: "checkbox",
      name: _ctx.name,
      tabindex: _ctx.tabindex,
      disabled: _ctx.isDisabled,
      "true-value": _ctx.trueLabel,
      "false-value": _ctx.falseLabel,
      onChange: _cache[1] || (_cache[1] = (...args) => _ctx.handleChange && _ctx.handleChange(...args)),
      onFocus: _cache[2] || (_cache[2] = ($event) => _ctx.focus = true),
      onBlur: _cache[3] || (_cache[3] = ($event) => _ctx.focus = false)
    }, null, 42, _hoisted_2$m)), [
      [vModelCheckbox, _ctx.model]
    ]) : withDirectives((openBlock(), createElementBlock("input", {
      key: 1,
      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.model = $event),
      class: normalizeClass(_ctx.ns.be("button", "original")),
      type: "checkbox",
      name: _ctx.name,
      tabindex: _ctx.tabindex,
      disabled: _ctx.isDisabled,
      value: _ctx.label,
      onChange: _cache[5] || (_cache[5] = (...args) => _ctx.handleChange && _ctx.handleChange(...args)),
      onFocus: _cache[6] || (_cache[6] = ($event) => _ctx.focus = true),
      onBlur: _cache[7] || (_cache[7] = ($event) => _ctx.focus = false)
    }, null, 42, _hoisted_3$g)), [
      [vModelCheckbox, _ctx.model]
    ]),
    _ctx.$slots.default || _ctx.label ? (openBlock(), createElementBlock("span", {
      key: 2,
      class: normalizeClass(_ctx.ns.be("button", "inner")),
      style: normalizeStyle(_ctx.isChecked ? _ctx.activeStyle : null)
    }, [
      renderSlot(_ctx.$slots, "default", {}, () => [
        createTextVNode(toDisplayString(_ctx.label), 1)
      ])
    ], 6)) : createCommentVNode("v-if", true)
  ], 10, _hoisted_1$r);
}
var CheckboxButton = /* @__PURE__ */ _export_sfc$2(_sfc_main$K, [["render", _sfc_render$x], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);

const _sfc_main$J = defineComponent({
  name: "ElCheckboxGroup",
  props: {
    modelValue: {
      type: Array,
      default: () => []
    },
    disabled: Boolean,
    min: {
      type: Number,
      default: void 0
    },
    max: {
      type: Number,
      default: void 0
    },
    size: {
      type: String,
      validator: isValidComponentSize
    },
    fill: {
      type: String,
      default: void 0
    },
    textColor: {
      type: String,
      default: void 0
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  emits: [UPDATE_MODEL_EVENT, "change"],
  setup(props, { emit, slots }) {
    const { elFormItem } = useCheckboxGroup();
    const checkboxGroupSize = useSize();
    const ns = useNamespace("checkbox");
    const changeEvent = (value) => {
      emit(UPDATE_MODEL_EVENT, value);
      nextTick(() => {
        emit("change", value);
      });
    };
    const modelValue = computed({
      get() {
        return props.modelValue;
      },
      set(val) {
        changeEvent(val);
      }
    });
    provide("CheckboxGroup", {
      name: "ElCheckboxGroup",
      modelValue,
      ...toRefs(props),
      checkboxGroupSize,
      changeEvent
    });
    watch(() => props.modelValue, () => {
      var _a;
      (_a = elFormItem.validate) == null ? void 0 : _a.call(elFormItem, "change").catch((err) => debugWarn());
    });
    return () => {
      return h$1(props.tag, {
        class: ns.b("group"),
        role: "group",
        "aria-label": "checkbox-group"
      }, [renderSlot(slots, "default")]);
    };
  }
});
var CheckboxGroup = /* @__PURE__ */ _export_sfc$2(_sfc_main$J, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);

const ElCheckbox = withInstall(Checkbox, {
  CheckboxButton,
  CheckboxGroup
});
withNoopInstall(CheckboxButton);
withNoopInstall(CheckboxGroup);

const tagProps = buildProps({
  closable: Boolean,
  type: {
    type: String,
    values: ["success", "info", "warning", "danger", ""],
    default: ""
  },
  hit: Boolean,
  disableTransitions: Boolean,
  color: {
    type: String,
    default: ""
  },
  size: {
    type: String,
    values: componentSizes,
    default: ""
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
});
const tagEmits = {
  close: (evt) => evt instanceof MouseEvent,
  click: (evt) => evt instanceof MouseEvent
};

const __default__ = {
  name: "ElTag"
};
const _sfc_main$I = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: tagProps,
  emits: tagEmits,
  setup(__props, { emit }) {
    const props = __props;
    const tagSize = useSize();
    const ns = useNamespace("tag");
    const classes = computed(() => {
      const { type, hit, effect, closable, round } = props;
      return [
        ns.b(),
        ns.is("closable", closable),
        ns.m(type),
        ns.m(tagSize.value),
        ns.m(effect),
        ns.is("hit", hit),
        ns.is("round", round)
      ];
    });
    const handleClose = (event) => {
      event.stopPropagation();
      emit("close", event);
    };
    const handleClick = (event) => {
      emit("click", event);
    };
    return (_ctx, _cache) => {
      return !_ctx.disableTransitions ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass(unref(classes)),
        style: normalizeStyle({ backgroundColor: _ctx.color }),
        onClick: handleClick
      }, [
        createElementVNode("span", {
          class: normalizeClass(unref(ns).e("content"))
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2),
        _ctx.closable ? (openBlock(), createBlock(unref(ElIcon), {
          key: 0,
          class: normalizeClass(unref(ns).e("close")),
          onClick: handleClose
        }, {
          default: withCtx(() => [
            createVNode(unref(close))
          ]),
          _: 1
        }, 8, ["class"])) : createCommentVNode("v-if", true)
      ], 6)) : (openBlock(), createBlock(Transition, {
        key: 1,
        name: `${unref(ns).namespace.value}-zoom-in-center`
      }, {
        default: withCtx(() => [
          createElementVNode("span", {
            class: normalizeClass(unref(classes)),
            style: normalizeStyle({ backgroundColor: _ctx.color }),
            onClick: handleClick
          }, [
            createElementVNode("span", {
              class: normalizeClass(unref(ns).e("content"))
            }, [
              renderSlot(_ctx.$slots, "default")
            ], 2),
            _ctx.closable ? (openBlock(), createBlock(unref(ElIcon), {
              key: 0,
              class: normalizeClass(unref(ns).e("close")),
              onClick: handleClose
            }, {
              default: withCtx(() => [
                createVNode(unref(close))
              ]),
              _: 1
            }, 8, ["class"])) : createCommentVNode("v-if", true)
          ], 6)
        ]),
        _: 3
      }, 8, ["name"]));
    };
  }
});
var Tag = /* @__PURE__ */ _export_sfc$2(_sfc_main$I, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);

const ElTag = withInstall(Tag);

const _sfc_main$H = defineComponent({
  name: "ElCollapseTransition",
  setup() {
    const ns = useNamespace("collapse-transition");
    return {
      ns,
      on: {
        beforeEnter(el) {
          if (!el.dataset)
            el.dataset = {};
          el.dataset.oldPaddingTop = el.style.paddingTop;
          el.dataset.oldPaddingBottom = el.style.paddingBottom;
          el.style.maxHeight = 0;
          el.style.paddingTop = 0;
          el.style.paddingBottom = 0;
        },
        enter(el) {
          el.dataset.oldOverflow = el.style.overflow;
          if (el.scrollHeight !== 0) {
            el.style.maxHeight = `${el.scrollHeight}px`;
            el.style.paddingTop = el.dataset.oldPaddingTop;
            el.style.paddingBottom = el.dataset.oldPaddingBottom;
          } else {
            el.style.maxHeight = 0;
            el.style.paddingTop = el.dataset.oldPaddingTop;
            el.style.paddingBottom = el.dataset.oldPaddingBottom;
          }
          el.style.overflow = "hidden";
        },
        afterEnter(el) {
          el.style.maxHeight = "";
          el.style.overflow = el.dataset.oldOverflow;
        },
        beforeLeave(el) {
          if (!el.dataset)
            el.dataset = {};
          el.dataset.oldPaddingTop = el.style.paddingTop;
          el.dataset.oldPaddingBottom = el.style.paddingBottom;
          el.dataset.oldOverflow = el.style.overflow;
          el.style.maxHeight = `${el.scrollHeight}px`;
          el.style.overflow = "hidden";
        },
        leave(el) {
          if (el.scrollHeight !== 0) {
            el.style.maxHeight = 0;
            el.style.paddingTop = 0;
            el.style.paddingBottom = 0;
          }
        },
        afterLeave(el) {
          el.style.maxHeight = "";
          el.style.overflow = el.dataset.oldOverflow;
          el.style.paddingTop = el.dataset.oldPaddingTop;
          el.style.paddingBottom = el.dataset.oldPaddingBottom;
        }
      }
    };
  }
});
function _sfc_render$w(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, mergeProps({
    name: _ctx.ns.b()
  }, toHandlers(_ctx.on)), {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 16, ["name"]);
}
var CollapseTransition = /* @__PURE__ */ _export_sfc$2(_sfc_main$H, [["render", _sfc_render$w], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/collapse-transition/src/collapse-transition.vue"]]);

CollapseTransition.install = (app) => {
  app.component(CollapseTransition.name, CollapseTransition);
};
const _CollapseTransition = CollapseTransition;

const messageConfig = {};
const configProviderProps = buildProps({
  a11y: {
    type: Boolean,
    default: true
  },
  locale: {
    type: definePropType(Object)
  },
  size: {
    type: String,
    values: componentSizes,
    default: ""
  },
  button: {
    type: definePropType(Object)
  },
  experimentalFeatures: {
    type: definePropType(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: true
  },
  message: {
    type: definePropType(Object)
  },
  zIndex: {
    type: Number
  },
  namespace: {
    type: String,
    default: "el"
  }
});
var ConfigProvider = defineComponent({
  name: "ElConfigProvider",
  props: configProviderProps,
  setup(props, { slots }) {
    watch(() => props.message, (val) => {
      Object.assign(messageConfig, val != null ? val : {});
    }, { immediate: true, deep: true });
    const config = provideGlobalConfig(props);
    return () => renderSlot(slots, "default", { config: config == null ? void 0 : config.value });
  }
});

const ElConfigProvider = withInstall(ConfigProvider);

const _sfc_main$G = defineComponent({
  name: "ElContainer",
  props: {
    direction: {
      type: String,
      default: ""
    }
  },
  setup(props, { slots }) {
    const ns = useNamespace("container");
    const isVertical = computed(() => {
      if (props.direction === "vertical") {
        return true;
      } else if (props.direction === "horizontal") {
        return false;
      }
      if (slots && slots.default) {
        const vNodes = slots.default();
        return vNodes.some((vNode) => {
          const tag = vNode.type.name;
          return tag === "ElHeader" || tag === "ElFooter";
        });
      } else {
        return false;
      }
    });
    return {
      isVertical,
      ns
    };
  }
});
function _sfc_render$v(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("section", {
    class: normalizeClass([_ctx.ns.b(), _ctx.ns.is("vertical", _ctx.isVertical)])
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var Container = /* @__PURE__ */ _export_sfc$2(_sfc_main$G, [["render", _sfc_render$v], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/container/src/container.vue"]]);

const _sfc_main$F = defineComponent({
  name: "ElAside",
  props: {
    width: {
      type: String,
      default: null
    }
  },
  setup(props) {
    const ns = useNamespace("aside");
    return {
      style: computed(() => {
        return props.width ? { "--el-aside-width": props.width } : {};
      }),
      ns
    };
  }
});
function _sfc_render$u(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("aside", {
    class: normalizeClass(_ctx.ns.b()),
    style: normalizeStyle(_ctx.style)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 6);
}
var Aside = /* @__PURE__ */ _export_sfc$2(_sfc_main$F, [["render", _sfc_render$u], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/container/src/aside.vue"]]);

const _sfc_main$E = defineComponent({
  name: "ElFooter",
  props: {
    height: {
      type: String,
      default: null
    }
  },
  setup(props) {
    const ns = useNamespace("footer");
    return {
      style: computed(() => props.height ? {
        "--el-footer-height": props.height
      } : {}),
      ns
    };
  }
});
function _sfc_render$t(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("footer", {
    class: normalizeClass(_ctx.ns.b()),
    style: normalizeStyle(_ctx.style)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 6);
}
var Footer = /* @__PURE__ */ _export_sfc$2(_sfc_main$E, [["render", _sfc_render$t], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/container/src/footer.vue"]]);

const _sfc_main$D = defineComponent({
  name: "ElHeader",
  props: {
    height: {
      type: String,
      default: null
    }
  },
  setup(props) {
    const ns = useNamespace("header");
    return {
      style: computed(() => props.height ? {
        "--el-header-height": props.height
      } : {}),
      ns
    };
  }
});
function _sfc_render$s(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("header", {
    class: normalizeClass(_ctx.ns.b()),
    style: normalizeStyle(_ctx.style)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 6);
}
var Header = /* @__PURE__ */ _export_sfc$2(_sfc_main$D, [["render", _sfc_render$s], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/container/src/header.vue"]]);

const _sfc_main$C = defineComponent({
  name: "ElMain",
  setup() {
    const ns = useNamespace("main");
    return {
      ns
    };
  }
});
function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("main", {
    class: normalizeClass(_ctx.ns.b())
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var Main = /* @__PURE__ */ _export_sfc$2(_sfc_main$C, [["render", _sfc_render$r], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/container/src/main.vue"]]);

const ElContainer = withInstall(Container, {
  Aside,
  Footer,
  Header,
  Main
});
const ElAside = withNoopInstall(Aside);
withNoopInstall(Footer);
const ElHeader = withNoopInstall(Header);
const ElMain = withNoopInstall(Main);

var advancedFormat$1 = {exports: {}};

(function (module, exports) {
!function(e,t){module.exports=t();}(commonjsGlobal,(function(){return function(e,t,r){var n=t.prototype,s=n.format;r.en.ordinal=function(e){var t=["th","st","nd","rd"],r=e%100;return "["+e+(t[(r-20)%10]||t[r]||t[0])+"]"},n.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return s.bind(this)(e);var n=this.$utils(),a=(e||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,(function(e){switch(e){case"Q":return Math.ceil((t.$M+1)/3);case"Do":return r.ordinal(t.$D);case"gggg":return t.weekYear();case"GGGG":return t.isoWeekYear();case"wo":return r.ordinal(t.week(),"W");case"w":case"ww":return n.s(t.week(),"w"===e?1:2,"0");case"W":case"WW":return n.s(t.isoWeek(),"W"===e?1:2,"0");case"k":case"kk":return n.s(String(0===t.$H?24:t.$H),"k"===e?1:2,"0");case"X":return Math.floor(t.$d.getTime()/1e3);case"x":return t.$d.getTime();case"z":return "["+t.offsetName()+"]";case"zzz":return "["+t.offsetName("long")+"]";default:return e}}));return s.bind(this)(a)};}}));
}(advancedFormat$1));

var advancedFormat = advancedFormat$1.exports;

var weekOfYear$1 = {exports: {}};

(function (module, exports) {
!function(e,t){module.exports=t();}(commonjsGlobal,(function(){var e="week",t="year";return function(i,n,r){var f=n.prototype;f.week=function(i){if(void 0===i&&(i=null),null!==i)return this.add(7*(i-this.week()),"day");var n=this.$locale().yearStart||1;if(11===this.month()&&this.date()>25){var f=r(this).startOf(t).add(1,t).date(n),s=r(this).endOf(e);if(f.isBefore(s))return 1}var a=r(this).startOf(t).date(n).startOf(e).subtract(1,"millisecond"),o=this.diff(a,e,!0);return o<0?r(this).startOf("week").week():Math.ceil(o)},f.weeks=function(e){return void 0===e&&(e=null),this.week(e)};}}));
}(weekOfYear$1));

var weekOfYear = weekOfYear$1.exports;

var weekYear$1 = {exports: {}};

(function (module, exports) {
!function(e,t){module.exports=t();}(commonjsGlobal,(function(){return function(e,t){t.prototype.weekYear=function(){var e=this.month(),t=this.week(),n=this.year();return 1===t&&11===e?n+1:0===e&&t>=52?n-1:n};}}));
}(weekYear$1));

var weekYear = weekYear$1.exports;

var dayOfYear$1 = {exports: {}};

(function (module, exports) {
!function(e,t){module.exports=t();}(commonjsGlobal,(function(){return function(e,t,n){t.prototype.dayOfYear=function(e){var t=Math.round((n(this).startOf("day")-n(this).startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"day")};}}));
}(dayOfYear$1));

var dayOfYear = dayOfYear$1.exports;

var isSameOrAfter$1 = {exports: {}};

(function (module, exports) {
!function(e,t){module.exports=t();}(commonjsGlobal,(function(){return function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)};}}));
}(isSameOrAfter$1));

var isSameOrAfter = isSameOrAfter$1.exports;

var isSameOrBefore$1 = {exports: {}};

(function (module, exports) {
!function(e,i){module.exports=i();}(commonjsGlobal,(function(){return function(e,i){i.prototype.isSameOrBefore=function(e,i){return this.isSame(e,i)||this.isBefore(e,i)};}}));
}(isSameOrBefore$1));

var isSameOrBefore = isSameOrBefore$1.exports;

const ROOT_PICKER_INJECTION_KEY = Symbol();

var ElDatePickerCell = defineComponent({
  name: "ElDatePickerCell",
  props: buildProps({
    cell: {
      type: definePropType(Object)
    }
  }),
  setup(props) {
    const picker = inject(ROOT_PICKER_INJECTION_KEY);
    return () => {
      const cell = props.cell;
      if (picker == null ? void 0 : picker.ctx.slots.default) {
        const list = picker.ctx.slots.default(cell).filter((item) => {
          return item.patchFlag !== -2 && item.type.toString() !== "Symbol(Comment)";
        });
        if (list.length) {
          return list;
        }
      }
      return h$1("div", {
        class: "el-date-table-cell"
      }, [
        h$1("span", {
          class: "el-date-table-cell__text"
        }, [cell == null ? void 0 : cell.text])
      ]);
    };
  }
});

const _sfc_main$B = defineComponent({
  components: {
    ElDatePickerCell
  },
  props: {
    date: {
      type: Object
    },
    minDate: {
      type: Object
    },
    maxDate: {
      type: Object
    },
    parsedValue: {
      type: [Object, Array]
    },
    selectionMode: {
      type: String,
      default: "day"
    },
    showWeekNumber: {
      type: Boolean,
      default: false
    },
    disabledDate: {
      type: Function
    },
    cellClassName: {
      type: Function
    },
    rangeState: {
      type: Object,
      default: () => ({
        endDate: null,
        selecting: false
      })
    }
  },
  emits: ["changerange", "pick", "select"],
  setup(props, ctx) {
    const { t, lang } = useLocale();
    const lastRow = ref(null);
    const lastColumn = ref(null);
    const tableRows = ref([[], [], [], [], [], []]);
    const firstDayOfWeek = props.date.$locale().weekStart || 7;
    const WEEKS_CONSTANT = props.date.locale("en").localeData().weekdaysShort().map((_) => _.toLowerCase());
    const offsetDay = computed(() => {
      return firstDayOfWeek > 3 ? 7 - firstDayOfWeek : -firstDayOfWeek;
    });
    const startDate = computed(() => {
      const startDayOfMonth = props.date.startOf("month");
      return startDayOfMonth.subtract(startDayOfMonth.day() || 7, "day");
    });
    const WEEKS = computed(() => {
      return WEEKS_CONSTANT.concat(WEEKS_CONSTANT).slice(firstDayOfWeek, firstDayOfWeek + 7);
    });
    const rows = computed(() => {
      var _a;
      const startOfMonth = props.date.startOf("month");
      const startOfMonthDay = startOfMonth.day() || 7;
      const dateCountOfMonth = startOfMonth.daysInMonth();
      const dateCountOfLastMonth = startOfMonth.subtract(1, "month").daysInMonth();
      const offset = offsetDay.value;
      const rows_ = tableRows.value;
      let count = 1;
      const selectedDate = props.selectionMode === "dates" ? castArray(props.parsedValue) : [];
      const calNow = dayjs().locale(lang.value).startOf("day");
      for (let i = 0; i < 6; i++) {
        const row = rows_[i];
        if (props.showWeekNumber) {
          if (!row[0]) {
            row[0] = {
              type: "week",
              text: startDate.value.add(i * 7 + 1, "day").week()
            };
          }
        }
        for (let j = 0; j < 7; j++) {
          let cell = row[props.showWeekNumber ? j + 1 : j];
          if (!cell) {
            cell = {
              row: i,
              column: j,
              type: "normal",
              inRange: false,
              start: false,
              end: false
            };
          }
          const index = i * 7 + j;
          const calTime = startDate.value.add(index - offset, "day");
          cell.dayjs = calTime;
          cell.date = calTime.toDate();
          cell.timestamp = calTime.valueOf();
          cell.type = "normal";
          const calEndDate = props.rangeState.endDate || props.maxDate || props.rangeState.selecting && props.minDate;
          cell.inRange = props.minDate && calTime.isSameOrAfter(props.minDate, "day") && calEndDate && calTime.isSameOrBefore(calEndDate, "day") || props.minDate && calTime.isSameOrBefore(props.minDate, "day") && calEndDate && calTime.isSameOrAfter(calEndDate, "day");
          if ((_a = props.minDate) == null ? void 0 : _a.isSameOrAfter(calEndDate)) {
            cell.start = calEndDate && calTime.isSame(calEndDate, "day");
            cell.end = props.minDate && calTime.isSame(props.minDate, "day");
          } else {
            cell.start = props.minDate && calTime.isSame(props.minDate, "day");
            cell.end = calEndDate && calTime.isSame(calEndDate, "day");
          }
          const isToday = calTime.isSame(calNow, "day");
          if (isToday) {
            cell.type = "today";
          }
          if (i >= 0 && i <= 1) {
            const numberOfDaysFromPreviousMonth = startOfMonthDay + offset < 0 ? 7 + startOfMonthDay + offset : startOfMonthDay + offset;
            if (j + i * 7 >= numberOfDaysFromPreviousMonth) {
              cell.text = count++;
            } else {
              cell.text = dateCountOfLastMonth - (numberOfDaysFromPreviousMonth - j % 7) + 1 + i * 7;
              cell.type = "prev-month";
            }
          } else {
            if (count <= dateCountOfMonth) {
              cell.text = count++;
            } else {
              cell.text = count++ - dateCountOfMonth;
              cell.type = "next-month";
            }
          }
          const cellDate = calTime.toDate();
          cell.selected = selectedDate.find((_) => _.valueOf() === calTime.valueOf());
          cell.isSelected = !!cell.selected;
          cell.isCurrent = isCurrent(cell);
          cell.disabled = props.disabledDate && props.disabledDate(cellDate);
          cell.customClass = props.cellClassName && props.cellClassName(cellDate);
          row[props.showWeekNumber ? j + 1 : j] = cell;
        }
        if (props.selectionMode === "week") {
          const start = props.showWeekNumber ? 1 : 0;
          const end = props.showWeekNumber ? 7 : 6;
          const isActive = isWeekActive(row[start + 1]);
          row[start].inRange = isActive;
          row[start].start = isActive;
          row[end].inRange = isActive;
          row[end].end = isActive;
        }
      }
      return rows_;
    });
    const isCurrent = (cell) => {
      return props.selectionMode === "day" && (cell.type === "normal" || cell.type === "today") && cellMatchesDate(cell, props.parsedValue);
    };
    const cellMatchesDate = (cell, date) => {
      if (!date)
        return false;
      return dayjs(date).locale(lang.value).isSame(props.date.date(Number(cell.text)), "day");
    };
    const getCellClasses = (cell) => {
      const classes = [];
      if ((cell.type === "normal" || cell.type === "today") && !cell.disabled) {
        classes.push("available");
        if (cell.type === "today") {
          classes.push("today");
        }
      } else {
        classes.push(cell.type);
      }
      if (isCurrent(cell)) {
        classes.push("current");
      }
      if (cell.inRange && (cell.type === "normal" || cell.type === "today" || props.selectionMode === "week")) {
        classes.push("in-range");
        if (cell.start) {
          classes.push("start-date");
        }
        if (cell.end) {
          classes.push("end-date");
        }
      }
      if (cell.disabled) {
        classes.push("disabled");
      }
      if (cell.selected) {
        classes.push("selected");
      }
      if (cell.customClass) {
        classes.push(cell.customClass);
      }
      return classes.join(" ");
    };
    const getDateOfCell = (row, column) => {
      const offsetFromStart = row * 7 + (column - (props.showWeekNumber ? 1 : 0)) - offsetDay.value;
      return startDate.value.add(offsetFromStart, "day");
    };
    const handleMouseMove = (event) => {
      if (!props.rangeState.selecting)
        return;
      let target = event.target;
      if (target.tagName === "SPAN") {
        target = target.parentNode.parentNode;
      }
      if (target.tagName === "DIV") {
        target = target.parentNode;
      }
      if (target.tagName !== "TD")
        return;
      const row = target.parentNode.rowIndex - 1;
      const column = target.cellIndex;
      if (rows.value[row][column].disabled)
        return;
      if (row !== lastRow.value || column !== lastColumn.value) {
        lastRow.value = row;
        lastColumn.value = column;
        ctx.emit("changerange", {
          selecting: true,
          endDate: getDateOfCell(row, column)
        });
      }
    };
    const handleClick = (event) => {
      let target = event.target;
      while (target) {
        if (target.tagName === "TD") {
          break;
        }
        target = target.parentNode;
      }
      if (!target || target.tagName !== "TD")
        return;
      const row = target.parentNode.rowIndex - 1;
      const column = target.cellIndex;
      const cell = rows.value[row][column];
      if (cell.disabled || cell.type === "week")
        return;
      const newDate = getDateOfCell(row, column);
      if (props.selectionMode === "range") {
        if (!props.rangeState.selecting) {
          ctx.emit("pick", { minDate: newDate, maxDate: null });
          ctx.emit("select", true);
        } else {
          if (newDate >= props.minDate) {
            ctx.emit("pick", { minDate: props.minDate, maxDate: newDate });
          } else {
            ctx.emit("pick", { minDate: newDate, maxDate: props.minDate });
          }
          ctx.emit("select", false);
        }
      } else if (props.selectionMode === "day") {
        ctx.emit("pick", newDate);
      } else if (props.selectionMode === "week") {
        const weekNumber = newDate.week();
        const value = `${newDate.year()}w${weekNumber}`;
        ctx.emit("pick", {
          year: newDate.year(),
          week: weekNumber,
          value,
          date: newDate.startOf("week")
        });
      } else if (props.selectionMode === "dates") {
        const newValue = cell.selected ? castArray(props.parsedValue).filter((_) => _.valueOf() !== newDate.valueOf()) : castArray(props.parsedValue).concat([newDate]);
        ctx.emit("pick", newValue);
      }
    };
    const isWeekActive = (cell) => {
      if (props.selectionMode !== "week")
        return false;
      let newDate = props.date.startOf("day");
      if (cell.type === "prev-month") {
        newDate = newDate.subtract(1, "month");
      }
      if (cell.type === "next-month") {
        newDate = newDate.add(1, "month");
      }
      newDate = newDate.date(Number.parseInt(cell.text, 10));
      if (props.parsedValue && !Array.isArray(props.parsedValue)) {
        const dayOffset = (props.parsedValue.day() - firstDayOfWeek + 7) % 7 - 1;
        const weekDate = props.parsedValue.subtract(dayOffset, "day");
        return weekDate.isSame(newDate, "day");
      }
      return false;
    };
    return {
      handleMouseMove,
      t,
      rows,
      isWeekActive,
      getCellClasses,
      WEEKS,
      handleClick
    };
  }
});
const _hoisted_1$q = { key: 0 };
function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_date_picker_cell = resolveComponent("el-date-picker-cell");
  return openBlock(), createElementBlock("table", {
    cellspacing: "0",
    cellpadding: "0",
    class: normalizeClass(["el-date-table", { "is-week-mode": _ctx.selectionMode === "week" }]),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args)),
    onMousemove: _cache[1] || (_cache[1] = (...args) => _ctx.handleMouseMove && _ctx.handleMouseMove(...args))
  }, [
    createElementVNode("tbody", null, [
      createElementVNode("tr", null, [
        _ctx.showWeekNumber ? (openBlock(), createElementBlock("th", _hoisted_1$q, toDisplayString(_ctx.t("el.datepicker.week")), 1)) : createCommentVNode("v-if", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.WEEKS, (week, key) => {
          return openBlock(), createElementBlock("th", { key }, toDisplayString(_ctx.t("el.datepicker.weeks." + week)), 1);
        }), 128))
      ]),
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.rows, (row, key) => {
        return openBlock(), createElementBlock("tr", {
          key,
          class: normalizeClass(["el-date-table__row", { current: _ctx.isWeekActive(row[1]) }])
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(row, (cell, key_) => {
            return openBlock(), createElementBlock("td", {
              key: key_,
              class: normalizeClass(_ctx.getCellClasses(cell))
            }, [
              createVNode(_component_el_date_picker_cell, { cell }, null, 8, ["cell"])
            ], 2);
          }), 128))
        ], 2);
      }), 128))
    ])
  ], 34);
}
var DateTable = /* @__PURE__ */ _export_sfc$2(_sfc_main$B, [["render", _sfc_render$q], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/basic-date-table.vue"]]);

const datesInMonth = (year, month, lang) => {
  const firstDay = dayjs().locale(lang).startOf("month").month(month).year(year);
  const numOfDays = firstDay.daysInMonth();
  return rangeArr(numOfDays).map((n) => firstDay.add(n, "day").toDate());
};
const _sfc_main$A = defineComponent({
  props: {
    disabledDate: {
      type: Function
    },
    selectionMode: {
      type: String,
      default: "month"
    },
    minDate: {
      type: Object
    },
    maxDate: {
      type: Object
    },
    date: {
      type: Object
    },
    parsedValue: {
      type: Object
    },
    rangeState: {
      type: Object,
      default: () => ({
        endDate: null,
        selecting: false
      })
    }
  },
  emits: ["changerange", "pick", "select"],
  setup(props, ctx) {
    const { t, lang } = useLocale();
    const months = ref(props.date.locale("en").localeData().monthsShort().map((_) => _.toLowerCase()));
    const tableRows = ref([[], [], []]);
    const lastRow = ref(null);
    const lastColumn = ref(null);
    const rows = computed(() => {
      var _a;
      const rows2 = tableRows.value;
      const now = dayjs().locale(lang.value).startOf("month");
      for (let i = 0; i < 3; i++) {
        const row = rows2[i];
        for (let j = 0; j < 4; j++) {
          let cell = row[j];
          if (!cell) {
            cell = {
              row: i,
              column: j,
              type: "normal",
              inRange: false,
              start: false,
              end: false
            };
          }
          cell.type = "normal";
          const index = i * 4 + j;
          const calTime = props.date.startOf("year").month(index);
          const calEndDate = props.rangeState.endDate || props.maxDate || props.rangeState.selecting && props.minDate;
          cell.inRange = props.minDate && calTime.isSameOrAfter(props.minDate, "month") && calEndDate && calTime.isSameOrBefore(calEndDate, "month") || props.minDate && calTime.isSameOrBefore(props.minDate, "month") && calEndDate && calTime.isSameOrAfter(calEndDate, "month");
          if ((_a = props.minDate) == null ? void 0 : _a.isSameOrAfter(calEndDate)) {
            cell.start = calEndDate && calTime.isSame(calEndDate, "month");
            cell.end = props.minDate && calTime.isSame(props.minDate, "month");
          } else {
            cell.start = props.minDate && calTime.isSame(props.minDate, "month");
            cell.end = calEndDate && calTime.isSame(calEndDate, "month");
          }
          const isToday = now.isSame(calTime);
          if (isToday) {
            cell.type = "today";
          }
          cell.text = index;
          const cellDate = calTime.toDate();
          cell.disabled = props.disabledDate && props.disabledDate(cellDate);
          row[j] = cell;
        }
      }
      return rows2;
    });
    const getCellStyle = (cell) => {
      const style = {};
      const year = props.date.year();
      const today = new Date();
      const month = cell.text;
      style.disabled = props.disabledDate ? datesInMonth(year, month, lang.value).every(props.disabledDate) : false;
      style.current = castArray(props.parsedValue).findIndex((date) => date.year() === year && date.month() === month) >= 0;
      style.today = today.getFullYear() === year && today.getMonth() === month;
      if (cell.inRange) {
        style["in-range"] = true;
        if (cell.start) {
          style["start-date"] = true;
        }
        if (cell.end) {
          style["end-date"] = true;
        }
      }
      return style;
    };
    const handleMouseMove = (event) => {
      if (!props.rangeState.selecting)
        return;
      let target = event.target;
      if (target.tagName === "A") {
        target = target.parentNode.parentNode;
      }
      if (target.tagName === "DIV") {
        target = target.parentNode;
      }
      if (target.tagName !== "TD")
        return;
      const row = target.parentNode.rowIndex;
      const column = target.cellIndex;
      if (rows.value[row][column].disabled)
        return;
      if (row !== lastRow.value || column !== lastColumn.value) {
        lastRow.value = row;
        lastColumn.value = column;
        ctx.emit("changerange", {
          selecting: true,
          endDate: props.date.startOf("year").month(row * 4 + column)
        });
      }
    };
    const handleMonthTableClick = (event) => {
      let target = event.target;
      if (target.tagName === "A") {
        target = target.parentNode.parentNode;
      }
      if (target.tagName === "DIV") {
        target = target.parentNode;
      }
      if (target.tagName !== "TD")
        return;
      if (hasClass(target, "disabled"))
        return;
      const column = target.cellIndex;
      const row = target.parentNode.rowIndex;
      const month = row * 4 + column;
      const newDate = props.date.startOf("year").month(month);
      if (props.selectionMode === "range") {
        if (!props.rangeState.selecting) {
          ctx.emit("pick", { minDate: newDate, maxDate: null });
          ctx.emit("select", true);
        } else {
          if (newDate >= props.minDate) {
            ctx.emit("pick", { minDate: props.minDate, maxDate: newDate });
          } else {
            ctx.emit("pick", { minDate: newDate, maxDate: props.minDate });
          }
          ctx.emit("select", false);
        }
      } else {
        ctx.emit("pick", month);
      }
    };
    return {
      handleMouseMove,
      handleMonthTableClick,
      rows,
      getCellStyle,
      t,
      months
    };
  }
});
const _hoisted_1$p = { class: "cell" };
function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("table", {
    class: "el-month-table",
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleMonthTableClick && _ctx.handleMonthTableClick(...args)),
    onMousemove: _cache[1] || (_cache[1] = (...args) => _ctx.handleMouseMove && _ctx.handleMouseMove(...args))
  }, [
    createElementVNode("tbody", null, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.rows, (row, key) => {
        return openBlock(), createElementBlock("tr", { key }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(row, (cell, key_) => {
            return openBlock(), createElementBlock("td", {
              key: key_,
              class: normalizeClass(_ctx.getCellStyle(cell))
            }, [
              createElementVNode("div", null, [
                createElementVNode("a", _hoisted_1$p, toDisplayString(_ctx.t("el.datepicker.months." + _ctx.months[cell.text])), 1)
              ])
            ], 2);
          }), 128))
        ]);
      }), 128))
    ])
  ], 32);
}
var MonthTable = /* @__PURE__ */ _export_sfc$2(_sfc_main$A, [["render", _sfc_render$p], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/basic-month-table.vue"]]);

const datesInYear = (year, lang) => {
  const firstDay = dayjs(String(year)).locale(lang).startOf("year");
  const lastDay = firstDay.endOf("year");
  const numOfDays = lastDay.dayOfYear();
  return rangeArr(numOfDays).map((n) => firstDay.add(n, "day").toDate());
};
const _sfc_main$z = defineComponent({
  props: {
    disabledDate: {
      type: Function
    },
    parsedValue: {
      type: Object
    },
    date: {
      type: Object
    }
  },
  emits: ["pick"],
  setup(props, ctx) {
    const { lang } = useLocale();
    const startYear = computed(() => {
      return Math.floor(props.date.year() / 10) * 10;
    });
    const getCellStyle = (year) => {
      const style = {};
      const today = dayjs().locale(lang.value);
      style.disabled = props.disabledDate ? datesInYear(year, lang.value).every(props.disabledDate) : false;
      style.current = castArray(props.parsedValue).findIndex((_) => _.year() === year) >= 0;
      style.today = today.year() === year;
      return style;
    };
    const handleYearTableClick = (event) => {
      const target = event.target;
      if (target.tagName === "A") {
        if (hasClass(target.parentNode, "disabled"))
          return;
        const year = target.textContent || target.innerText;
        ctx.emit("pick", Number(year));
      }
    };
    return {
      startYear,
      getCellStyle,
      handleYearTableClick
    };
  }
});
const _hoisted_1$o = { class: "cell" };
const _hoisted_2$l = { class: "cell" };
const _hoisted_3$f = { class: "cell" };
const _hoisted_4$5 = { class: "cell" };
const _hoisted_5$5 = { class: "cell" };
const _hoisted_6$5 = { class: "cell" };
const _hoisted_7$5 = { class: "cell" };
const _hoisted_8$5 = { class: "cell" };
const _hoisted_9$3 = { class: "cell" };
const _hoisted_10$3 = { class: "cell" };
const _hoisted_11$2 = /* @__PURE__ */ createElementVNode("td", null, null, -1);
const _hoisted_12$2 = /* @__PURE__ */ createElementVNode("td", null, null, -1);
function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("table", {
    class: "el-year-table",
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleYearTableClick && _ctx.handleYearTableClick(...args))
  }, [
    createElementVNode("tbody", null, [
      createElementVNode("tr", null, [
        createElementVNode("td", {
          class: normalizeClass(["available", _ctx.getCellStyle(_ctx.startYear + 0)])
        }, [
          createElementVNode("a", _hoisted_1$o, toDisplayString(_ctx.startYear), 1)
        ], 2),
        createElementVNode("td", {
          class: normalizeClass(["available", _ctx.getCellStyle(_ctx.startYear + 1)])
        }, [
          createElementVNode("a", _hoisted_2$l, toDisplayString(_ctx.startYear + 1), 1)
        ], 2),
        createElementVNode("td", {
          class: normalizeClass(["available", _ctx.getCellStyle(_ctx.startYear + 2)])
        }, [
          createElementVNode("a", _hoisted_3$f, toDisplayString(_ctx.startYear + 2), 1)
        ], 2),
        createElementVNode("td", {
          class: normalizeClass(["available", _ctx.getCellStyle(_ctx.startYear + 3)])
        }, [
          createElementVNode("a", _hoisted_4$5, toDisplayString(_ctx.startYear + 3), 1)
        ], 2)
      ]),
      createElementVNode("tr", null, [
        createElementVNode("td", {
          class: normalizeClass(["available", _ctx.getCellStyle(_ctx.startYear + 4)])
        }, [
          createElementVNode("a", _hoisted_5$5, toDisplayString(_ctx.startYear + 4), 1)
        ], 2),
        createElementVNode("td", {
          class: normalizeClass(["available", _ctx.getCellStyle(_ctx.startYear + 5)])
        }, [
          createElementVNode("a", _hoisted_6$5, toDisplayString(_ctx.startYear + 5), 1)
        ], 2),
        createElementVNode("td", {
          class: normalizeClass(["available", _ctx.getCellStyle(_ctx.startYear + 6)])
        }, [
          createElementVNode("a", _hoisted_7$5, toDisplayString(_ctx.startYear + 6), 1)
        ], 2),
        createElementVNode("td", {
          class: normalizeClass(["available", _ctx.getCellStyle(_ctx.startYear + 7)])
        }, [
          createElementVNode("a", _hoisted_8$5, toDisplayString(_ctx.startYear + 7), 1)
        ], 2)
      ]),
      createElementVNode("tr", null, [
        createElementVNode("td", {
          class: normalizeClass(["available", _ctx.getCellStyle(_ctx.startYear + 8)])
        }, [
          createElementVNode("a", _hoisted_9$3, toDisplayString(_ctx.startYear + 8), 1)
        ], 2),
        createElementVNode("td", {
          class: normalizeClass(["available", _ctx.getCellStyle(_ctx.startYear + 9)])
        }, [
          createElementVNode("a", _hoisted_10$3, toDisplayString(_ctx.startYear + 9), 1)
        ], 2),
        _hoisted_11$2,
        _hoisted_12$2
      ])
    ])
  ]);
}
var YearTable = /* @__PURE__ */ _export_sfc$2(_sfc_main$z, [["render", _sfc_render$o], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/basic-year-table.vue"]]);

const timeWithinRange = (_, __, ___) => true;
const _sfc_main$y = defineComponent({
  components: {
    DateTable,
    ElInput,
    ElButton,
    ElIcon,
    TimePickPanel,
    MonthTable,
    YearTable,
    DArrowLeft: dArrowLeft,
    ArrowLeft: arrowLeft,
    DArrowRight: dArrowRight,
    ArrowRight: arrowRight
  },
  directives: { clickoutside: ClickOutside },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    parsedValue: {
      type: [Object, Array]
    },
    format: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      required: true,
      validator: isValidDatePickType
    }
  },
  emits: ["pick", "set-picker-option", "panel-change"],
  setup(props, ctx) {
    const { t, lang } = useLocale();
    const pickerBase = inject("EP_PICKER_BASE");
    const popper = inject(TOOLTIP_INJECTION_KEY);
    const {
      shortcuts,
      disabledDate,
      cellClassName,
      defaultTime,
      arrowControl
    } = pickerBase.props;
    const defaultValue = toRef(pickerBase.props, "defaultValue");
    const innerDate = ref(dayjs().locale(lang.value));
    const defaultTimeD = computed(() => {
      return dayjs(defaultTime).locale(lang.value);
    });
    const month = computed(() => {
      return innerDate.value.month();
    });
    const year = computed(() => {
      return innerDate.value.year();
    });
    const selectableRange = ref([]);
    const userInputDate = ref(null);
    const userInputTime = ref(null);
    const checkDateWithinRange = (date) => {
      return selectableRange.value.length > 0 ? timeWithinRange(date, selectableRange.value, props.format || "HH:mm:ss") : true;
    };
    const formatEmit = (emitDayjs) => {
      if (defaultTime && !visibleTime.value) {
        return defaultTimeD.value.year(emitDayjs.year()).month(emitDayjs.month()).date(emitDayjs.date());
      }
      if (showTime.value)
        return emitDayjs.millisecond(0);
      return emitDayjs.startOf("day");
    };
    const emit = (value, ...args) => {
      if (!value) {
        ctx.emit("pick", value, ...args);
      } else if (Array.isArray(value)) {
        const dates = value.map(formatEmit);
        ctx.emit("pick", dates, ...args);
      } else {
        ctx.emit("pick", formatEmit(value), ...args);
      }
      userInputDate.value = null;
      userInputTime.value = null;
    };
    const handleDatePick = (value) => {
      if (selectionMode.value === "day") {
        let newDate = props.parsedValue ? props.parsedValue.year(value.year()).month(value.month()).date(value.date()) : value;
        if (!checkDateWithinRange(newDate)) {
          newDate = selectableRange.value[0][0].year(value.year()).month(value.month()).date(value.date());
        }
        innerDate.value = newDate;
        emit(newDate, showTime.value);
      } else if (selectionMode.value === "week") {
        emit(value.date);
      } else if (selectionMode.value === "dates") {
        emit(value, true);
      }
    };
    const prevMonth_ = () => {
      innerDate.value = innerDate.value.subtract(1, "month");
      handlePanelChange("month");
    };
    const nextMonth_ = () => {
      innerDate.value = innerDate.value.add(1, "month");
      handlePanelChange("month");
    };
    const prevYear_ = () => {
      if (currentView.value === "year") {
        innerDate.value = innerDate.value.subtract(10, "year");
      } else {
        innerDate.value = innerDate.value.subtract(1, "year");
      }
      handlePanelChange("year");
    };
    const nextYear_ = () => {
      if (currentView.value === "year") {
        innerDate.value = innerDate.value.add(10, "year");
      } else {
        innerDate.value = innerDate.value.add(1, "year");
      }
      handlePanelChange("year");
    };
    const currentView = ref("date");
    const yearLabel = computed(() => {
      const yearTranslation = t("el.datepicker.year");
      if (currentView.value === "year") {
        const startYear = Math.floor(year.value / 10) * 10;
        if (yearTranslation) {
          return `${startYear} ${yearTranslation} - ${startYear + 9} ${yearTranslation}`;
        }
        return `${startYear} - ${startYear + 9}`;
      }
      return `${year.value} ${yearTranslation}`;
    });
    const handleShortcutClick = (shortcut) => {
      const shortcutValue = typeof shortcut.value === "function" ? shortcut.value() : shortcut.value;
      if (shortcutValue) {
        emit(dayjs(shortcutValue).locale(lang.value));
        return;
      }
      if (shortcut.onClick) {
        shortcut.onClick(ctx);
      }
    };
    const selectionMode = computed(() => {
      if (["week", "month", "year", "dates"].includes(props.type)) {
        return props.type;
      }
      return "day";
    });
    watch(() => selectionMode.value, (val) => {
      if (["month", "year"].includes(val)) {
        currentView.value = val;
        return;
      }
      currentView.value = "date";
    }, { immediate: true });
    watch(() => currentView.value, () => {
      popper == null ? void 0 : popper.updatePopper();
    });
    const hasShortcuts = computed(() => !!shortcuts.length);
    const handleMonthPick = (month2) => {
      innerDate.value = innerDate.value.startOf("month").month(month2);
      if (selectionMode.value === "month") {
        emit(innerDate.value);
      } else {
        currentView.value = "date";
      }
      handlePanelChange("month");
    };
    const handleYearPick = (year2) => {
      if (selectionMode.value === "year") {
        innerDate.value = innerDate.value.startOf("year").year(year2);
        emit(innerDate.value);
      } else {
        innerDate.value = innerDate.value.year(year2);
        currentView.value = "month";
      }
      handlePanelChange("year");
    };
    const showMonthPicker = () => {
      currentView.value = "month";
    };
    const showYearPicker = () => {
      currentView.value = "year";
    };
    const showTime = computed(() => props.type === "datetime" || props.type === "datetimerange");
    const footerVisible = computed(() => {
      return showTime.value || selectionMode.value === "dates";
    });
    const onConfirm = () => {
      if (selectionMode.value === "dates") {
        emit(props.parsedValue);
      } else {
        let result = props.parsedValue;
        if (!result) {
          const defaultTimeD2 = dayjs(defaultTime).locale(lang.value);
          const defaultValueD = getDefaultValue();
          result = defaultTimeD2.year(defaultValueD.year()).month(defaultValueD.month()).date(defaultValueD.date());
        }
        innerDate.value = result;
        emit(result);
      }
    };
    const changeToNow = () => {
      const now = dayjs().locale(lang.value);
      const nowDate = now.toDate();
      if ((!disabledDate || !disabledDate(nowDate)) && checkDateWithinRange(nowDate)) {
        innerDate.value = dayjs().locale(lang.value);
        emit(innerDate.value);
      }
    };
    const timeFormat = computed(() => {
      return extractTimeFormat(props.format);
    });
    const dateFormat = computed(() => {
      return extractDateFormat(props.format);
    });
    const visibleTime = computed(() => {
      if (userInputTime.value)
        return userInputTime.value;
      if (!props.parsedValue && !defaultValue.value)
        return;
      return (props.parsedValue || innerDate.value).format(timeFormat.value);
    });
    const visibleDate = computed(() => {
      if (userInputDate.value)
        return userInputDate.value;
      if (!props.parsedValue && !defaultValue.value)
        return;
      return (props.parsedValue || innerDate.value).format(dateFormat.value);
    });
    const timePickerVisible = ref(false);
    const onTimePickerInputFocus = () => {
      timePickerVisible.value = true;
    };
    const handleTimePickClose = () => {
      timePickerVisible.value = false;
    };
    const handleTimePick = (value, visible, first) => {
      const newDate = props.parsedValue ? props.parsedValue.hour(value.hour()).minute(value.minute()).second(value.second()) : value;
      innerDate.value = newDate;
      emit(innerDate.value, true);
      if (!first) {
        timePickerVisible.value = visible;
      }
    };
    const handleVisibleTimeChange = (value) => {
      const newDate = dayjs(value, timeFormat.value).locale(lang.value);
      if (newDate.isValid() && checkDateWithinRange(newDate)) {
        innerDate.value = newDate.year(innerDate.value.year()).month(innerDate.value.month()).date(innerDate.value.date());
        userInputTime.value = null;
        timePickerVisible.value = false;
        emit(innerDate.value, true);
      }
    };
    const handleVisibleDateChange = (value) => {
      const newDate = dayjs(value, dateFormat.value).locale(lang.value);
      if (newDate.isValid()) {
        if (disabledDate && disabledDate(newDate.toDate())) {
          return;
        }
        innerDate.value = newDate.hour(innerDate.value.hour()).minute(innerDate.value.minute()).second(innerDate.value.second());
        userInputDate.value = null;
        emit(innerDate.value, true);
      }
    };
    const isValidValue = (date) => {
      return dayjs.isDayjs(date) && date.isValid() && (disabledDate ? !disabledDate(date.toDate()) : true);
    };
    const formatToString = (value) => {
      if (selectionMode.value === "dates") {
        return value.map((_) => _.format(props.format));
      }
      return value.format(props.format);
    };
    const parseUserInput = (value) => {
      return dayjs(value, props.format).locale(lang.value);
    };
    const getDefaultValue = () => {
      const parseDate = dayjs(defaultValue.value).locale(lang.value);
      if (!defaultValue.value) {
        const defaultTimeDValue = defaultTimeD.value;
        return dayjs().hour(defaultTimeDValue.hour()).minute(defaultTimeDValue.minute()).second(defaultTimeDValue.second()).locale(lang.value);
      }
      return parseDate;
    };
    const handleKeydown = (event) => {
      const { code, keyCode } = event;
      const list = [
        EVENT_CODE.up,
        EVENT_CODE.down,
        EVENT_CODE.left,
        EVENT_CODE.right
      ];
      if (props.visible && !timePickerVisible.value) {
        if (list.includes(code)) {
          handleKeyControl(keyCode);
          event.stopPropagation();
          event.preventDefault();
        }
        if (code === EVENT_CODE.enter && userInputDate.value === null && userInputTime.value === null) {
          emit(innerDate, false);
        }
      }
    };
    const handleKeyControl = (keyCode) => {
      const mapping = {
        year: {
          38: -4,
          40: 4,
          37: -1,
          39: 1,
          offset: (date, step) => date.setFullYear(date.getFullYear() + step)
        },
        month: {
          38: -4,
          40: 4,
          37: -1,
          39: 1,
          offset: (date, step) => date.setMonth(date.getMonth() + step)
        },
        week: {
          38: -1,
          40: 1,
          37: -1,
          39: 1,
          offset: (date, step) => date.setDate(date.getDate() + step * 7)
        },
        day: {
          38: -7,
          40: 7,
          37: -1,
          39: 1,
          offset: (date, step) => date.setDate(date.getDate() + step)
        }
      };
      const newDate = innerDate.value.toDate();
      while (Math.abs(innerDate.value.diff(newDate, "year", true)) < 1) {
        const map = mapping[selectionMode.value];
        map.offset(newDate, map[keyCode]);
        if (disabledDate && disabledDate(newDate)) {
          continue;
        }
        const result = dayjs(newDate).locale(lang.value);
        innerDate.value = result;
        ctx.emit("pick", result, true);
        break;
      }
    };
    const handlePanelChange = (mode) => {
      ctx.emit("panel-change", innerDate.value.toDate(), mode, currentView.value);
    };
    ctx.emit("set-picker-option", ["isValidValue", isValidValue]);
    ctx.emit("set-picker-option", ["formatToString", formatToString]);
    ctx.emit("set-picker-option", ["parseUserInput", parseUserInput]);
    ctx.emit("set-picker-option", ["handleKeydown", handleKeydown]);
    watch(() => defaultValue.value, (val) => {
      if (val) {
        innerDate.value = getDefaultValue();
      }
    }, { immediate: true });
    watch(() => props.parsedValue, (val) => {
      if (val) {
        if (selectionMode.value === "dates")
          return;
        if (Array.isArray(val))
          return;
        innerDate.value = val;
      } else {
        innerDate.value = getDefaultValue();
      }
    }, { immediate: true });
    return {
      handleTimePick,
      handleTimePickClose,
      onTimePickerInputFocus,
      timePickerVisible,
      visibleTime,
      visibleDate,
      showTime,
      changeToNow,
      onConfirm,
      footerVisible,
      handleYearPick,
      showMonthPicker,
      showYearPicker,
      handleMonthPick,
      hasShortcuts,
      shortcuts,
      arrowControl,
      disabledDate,
      cellClassName,
      selectionMode,
      handleShortcutClick,
      prevYear_,
      nextYear_,
      prevMonth_,
      nextMonth_,
      innerDate,
      t,
      yearLabel,
      currentView,
      month,
      handleDatePick,
      handleVisibleTimeChange,
      handleVisibleDateChange,
      timeFormat,
      userInputTime,
      userInputDate
    };
  }
});
const _hoisted_1$n = { class: "el-picker-panel__body-wrapper" };
const _hoisted_2$k = {
  key: 0,
  class: "el-picker-panel__sidebar"
};
const _hoisted_3$e = ["onClick"];
const _hoisted_4$4 = { class: "el-picker-panel__body" };
const _hoisted_5$4 = {
  key: 0,
  class: "el-date-picker__time-header"
};
const _hoisted_6$4 = { class: "el-date-picker__editor-wrap" };
const _hoisted_7$4 = { class: "el-date-picker__editor-wrap" };
const _hoisted_8$4 = ["aria-label"];
const _hoisted_9$2 = ["aria-label"];
const _hoisted_10$2 = ["aria-label"];
const _hoisted_11$1 = ["aria-label"];
const _hoisted_12$1 = { class: "el-picker-panel__content" };
const _hoisted_13$1 = { class: "el-picker-panel__footer" };
function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_input = resolveComponent("el-input");
  const _component_time_pick_panel = resolveComponent("time-pick-panel");
  const _component_d_arrow_left = resolveComponent("d-arrow-left");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_arrow_left = resolveComponent("arrow-left");
  const _component_d_arrow_right = resolveComponent("d-arrow-right");
  const _component_arrow_right = resolveComponent("arrow-right");
  const _component_date_table = resolveComponent("date-table");
  const _component_year_table = resolveComponent("year-table");
  const _component_month_table = resolveComponent("month-table");
  const _component_el_button = resolveComponent("el-button");
  const _directive_clickoutside = resolveDirective("clickoutside");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["el-picker-panel el-date-picker", [
      {
        "has-sidebar": _ctx.$slots.sidebar || _ctx.hasShortcuts,
        "has-time": _ctx.showTime
      }
    ]])
  }, [
    createElementVNode("div", _hoisted_1$n, [
      renderSlot(_ctx.$slots, "sidebar", { class: "el-picker-panel__sidebar" }),
      _ctx.hasShortcuts ? (openBlock(), createElementBlock("div", _hoisted_2$k, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.shortcuts, (shortcut, key) => {
          return openBlock(), createElementBlock("button", {
            key,
            type: "button",
            class: "el-picker-panel__shortcut",
            onClick: ($event) => _ctx.handleShortcutClick(shortcut)
          }, toDisplayString(shortcut.text), 9, _hoisted_3$e);
        }), 128))
      ])) : createCommentVNode("v-if", true),
      createElementVNode("div", _hoisted_4$4, [
        _ctx.showTime ? (openBlock(), createElementBlock("div", _hoisted_5$4, [
          createElementVNode("span", _hoisted_6$4, [
            createVNode(_component_el_input, {
              placeholder: _ctx.t("el.datepicker.selectDate"),
              "model-value": _ctx.visibleDate,
              size: "small",
              onInput: _cache[0] || (_cache[0] = (val) => _ctx.userInputDate = val),
              onChange: _ctx.handleVisibleDateChange
            }, null, 8, ["placeholder", "model-value", "onChange"])
          ]),
          withDirectives((openBlock(), createElementBlock("span", _hoisted_7$4, [
            createVNode(_component_el_input, {
              placeholder: _ctx.t("el.datepicker.selectTime"),
              "model-value": _ctx.visibleTime,
              size: "small",
              onFocus: _ctx.onTimePickerInputFocus,
              onInput: _cache[1] || (_cache[1] = (val) => _ctx.userInputTime = val),
              onChange: _ctx.handleVisibleTimeChange
            }, null, 8, ["placeholder", "model-value", "onFocus", "onChange"]),
            createVNode(_component_time_pick_panel, {
              visible: _ctx.timePickerVisible,
              format: _ctx.timeFormat,
              "time-arrow-control": _ctx.arrowControl,
              "parsed-value": _ctx.innerDate,
              onPick: _ctx.handleTimePick
            }, null, 8, ["visible", "format", "time-arrow-control", "parsed-value", "onPick"])
          ])), [
            [_directive_clickoutside, _ctx.handleTimePickClose]
          ])
        ])) : createCommentVNode("v-if", true),
        withDirectives(createElementVNode("div", {
          class: normalizeClass(["el-date-picker__header", {
            "el-date-picker__header--bordered": _ctx.currentView === "year" || _ctx.currentView === "month"
          }])
        }, [
          createElementVNode("button", {
            type: "button",
            "aria-label": _ctx.t(`el.datepicker.prevYear`),
            class: "el-picker-panel__icon-btn el-date-picker__prev-btn d-arrow-left",
            onClick: _cache[2] || (_cache[2] = (...args) => _ctx.prevYear_ && _ctx.prevYear_(...args))
          }, [
            createVNode(_component_el_icon, null, {
              default: withCtx(() => [
                createVNode(_component_d_arrow_left)
              ]),
              _: 1
            })
          ], 8, _hoisted_8$4),
          withDirectives(createElementVNode("button", {
            type: "button",
            "aria-label": _ctx.t(`el.datepicker.prevMonth`),
            class: "el-picker-panel__icon-btn el-date-picker__prev-btn arrow-left",
            onClick: _cache[3] || (_cache[3] = (...args) => _ctx.prevMonth_ && _ctx.prevMonth_(...args))
          }, [
            createVNode(_component_el_icon, null, {
              default: withCtx(() => [
                createVNode(_component_arrow_left)
              ]),
              _: 1
            })
          ], 8, _hoisted_9$2), [
            [vShow, _ctx.currentView === "date"]
          ]),
          createElementVNode("span", {
            role: "button",
            class: "el-date-picker__header-label",
            onClick: _cache[4] || (_cache[4] = (...args) => _ctx.showYearPicker && _ctx.showYearPicker(...args))
          }, toDisplayString(_ctx.yearLabel), 1),
          withDirectives(createElementVNode("span", {
            role: "button",
            class: normalizeClass(["el-date-picker__header-label", { active: _ctx.currentView === "month" }]),
            onClick: _cache[5] || (_cache[5] = (...args) => _ctx.showMonthPicker && _ctx.showMonthPicker(...args))
          }, toDisplayString(_ctx.t(`el.datepicker.month${_ctx.month + 1}`)), 3), [
            [vShow, _ctx.currentView === "date"]
          ]),
          createElementVNode("button", {
            type: "button",
            "aria-label": _ctx.t(`el.datepicker.nextYear`),
            class: "el-picker-panel__icon-btn el-date-picker__next-btn d-arrow-right",
            onClick: _cache[6] || (_cache[6] = (...args) => _ctx.nextYear_ && _ctx.nextYear_(...args))
          }, [
            createVNode(_component_el_icon, null, {
              default: withCtx(() => [
                createVNode(_component_d_arrow_right)
              ]),
              _: 1
            })
          ], 8, _hoisted_10$2),
          withDirectives(createElementVNode("button", {
            type: "button",
            "aria-label": _ctx.t(`el.datepicker.nextMonth`),
            class: "el-picker-panel__icon-btn el-date-picker__next-btn arrow-right",
            onClick: _cache[7] || (_cache[7] = (...args) => _ctx.nextMonth_ && _ctx.nextMonth_(...args))
          }, [
            createVNode(_component_el_icon, null, {
              default: withCtx(() => [
                createVNode(_component_arrow_right)
              ]),
              _: 1
            })
          ], 8, _hoisted_11$1), [
            [vShow, _ctx.currentView === "date"]
          ])
        ], 2), [
          [vShow, _ctx.currentView !== "time"]
        ]),
        createElementVNode("div", _hoisted_12$1, [
          _ctx.currentView === "date" ? (openBlock(), createBlock(_component_date_table, {
            key: 0,
            "selection-mode": _ctx.selectionMode,
            date: _ctx.innerDate,
            "parsed-value": _ctx.parsedValue,
            "disabled-date": _ctx.disabledDate,
            "cell-class-name": _ctx.cellClassName,
            onPick: _ctx.handleDatePick
          }, null, 8, ["selection-mode", "date", "parsed-value", "disabled-date", "cell-class-name", "onPick"])) : createCommentVNode("v-if", true),
          _ctx.currentView === "year" ? (openBlock(), createBlock(_component_year_table, {
            key: 1,
            date: _ctx.innerDate,
            "disabled-date": _ctx.disabledDate,
            "parsed-value": _ctx.parsedValue,
            onPick: _ctx.handleYearPick
          }, null, 8, ["date", "disabled-date", "parsed-value", "onPick"])) : createCommentVNode("v-if", true),
          _ctx.currentView === "month" ? (openBlock(), createBlock(_component_month_table, {
            key: 2,
            date: _ctx.innerDate,
            "parsed-value": _ctx.parsedValue,
            "disabled-date": _ctx.disabledDate,
            onPick: _ctx.handleMonthPick
          }, null, 8, ["date", "parsed-value", "disabled-date", "onPick"])) : createCommentVNode("v-if", true)
        ])
      ])
    ]),
    withDirectives(createElementVNode("div", _hoisted_13$1, [
      withDirectives(createVNode(_component_el_button, {
        size: "small",
        type: "text",
        class: "el-picker-panel__link-btn",
        onClick: _ctx.changeToNow
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.t("el.datepicker.now")), 1)
        ]),
        _: 1
      }, 8, ["onClick"]), [
        [vShow, _ctx.selectionMode !== "dates"]
      ]),
      createVNode(_component_el_button, {
        plain: "",
        size: "small",
        class: "el-picker-panel__link-btn",
        onClick: _ctx.onConfirm
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.t("el.datepicker.confirm")), 1)
        ]),
        _: 1
      }, 8, ["onClick"])
    ], 512), [
      [vShow, _ctx.footerVisible && _ctx.currentView === "date"]
    ])
  ], 2);
}
var DatePickPanel = /* @__PURE__ */ _export_sfc$2(_sfc_main$y, [["render", _sfc_render$n], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/panel-date-pick.vue"]]);

const _sfc_main$x = defineComponent({
  directives: { clickoutside: ClickOutside },
  components: {
    TimePickPanel,
    DateTable,
    ElInput,
    ElButton,
    ElIcon,
    DArrowLeft: dArrowLeft,
    ArrowLeft: arrowLeft,
    DArrowRight: dArrowRight,
    ArrowRight: arrowRight
  },
  props: {
    unlinkPanels: Boolean,
    parsedValue: {
      type: Array
    },
    type: {
      type: String,
      required: true,
      validator: isValidDatePickType
    }
  },
  emits: ["pick", "set-picker-option", "calendar-change", "panel-change"],
  setup(props, ctx) {
    const { t, lang } = useLocale();
    const leftDate = ref(dayjs().locale(lang.value));
    const rightDate = ref(dayjs().locale(lang.value).add(1, "month"));
    const minDate = ref(null);
    const maxDate = ref(null);
    const dateUserInput = ref({
      min: null,
      max: null
    });
    const timeUserInput = ref({
      min: null,
      max: null
    });
    const leftLabel = computed(() => {
      return `${leftDate.value.year()} ${t("el.datepicker.year")} ${t(`el.datepicker.month${leftDate.value.month() + 1}`)}`;
    });
    const rightLabel = computed(() => {
      return `${rightDate.value.year()} ${t("el.datepicker.year")} ${t(`el.datepicker.month${rightDate.value.month() + 1}`)}`;
    });
    const leftYear = computed(() => {
      return leftDate.value.year();
    });
    const leftMonth = computed(() => {
      return leftDate.value.month();
    });
    const rightYear = computed(() => {
      return rightDate.value.year();
    });
    const rightMonth = computed(() => {
      return rightDate.value.month();
    });
    const hasShortcuts = computed(() => !!shortcuts.length);
    const minVisibleDate = computed(() => {
      if (dateUserInput.value.min !== null)
        return dateUserInput.value.min;
      if (minDate.value)
        return minDate.value.format(dateFormat.value);
      return "";
    });
    const maxVisibleDate = computed(() => {
      if (dateUserInput.value.max !== null)
        return dateUserInput.value.max;
      if (maxDate.value || minDate.value)
        return (maxDate.value || minDate.value).format(dateFormat.value);
      return "";
    });
    const minVisibleTime = computed(() => {
      if (timeUserInput.value.min !== null)
        return timeUserInput.value.min;
      if (minDate.value)
        return minDate.value.format(timeFormat.value);
      return "";
    });
    const maxVisibleTime = computed(() => {
      if (timeUserInput.value.max !== null)
        return timeUserInput.value.max;
      if (maxDate.value || minDate.value)
        return (maxDate.value || minDate.value).format(timeFormat.value);
      return "";
    });
    const timeFormat = computed(() => {
      return extractTimeFormat(format);
    });
    const dateFormat = computed(() => {
      return extractDateFormat(format);
    });
    const leftPrevYear = () => {
      leftDate.value = leftDate.value.subtract(1, "year");
      if (!props.unlinkPanels) {
        rightDate.value = leftDate.value.add(1, "month");
      }
      handlePanelChange("year");
    };
    const leftPrevMonth = () => {
      leftDate.value = leftDate.value.subtract(1, "month");
      if (!props.unlinkPanels) {
        rightDate.value = leftDate.value.add(1, "month");
      }
      handlePanelChange("month");
    };
    const rightNextYear = () => {
      if (!props.unlinkPanels) {
        leftDate.value = leftDate.value.add(1, "year");
        rightDate.value = leftDate.value.add(1, "month");
      } else {
        rightDate.value = rightDate.value.add(1, "year");
      }
      handlePanelChange("year");
    };
    const rightNextMonth = () => {
      if (!props.unlinkPanels) {
        leftDate.value = leftDate.value.add(1, "month");
        rightDate.value = leftDate.value.add(1, "month");
      } else {
        rightDate.value = rightDate.value.add(1, "month");
      }
      handlePanelChange("month");
    };
    const leftNextYear = () => {
      leftDate.value = leftDate.value.add(1, "year");
      handlePanelChange("year");
    };
    const leftNextMonth = () => {
      leftDate.value = leftDate.value.add(1, "month");
      handlePanelChange("month");
    };
    const rightPrevYear = () => {
      rightDate.value = rightDate.value.subtract(1, "year");
      handlePanelChange("year");
    };
    const rightPrevMonth = () => {
      rightDate.value = rightDate.value.subtract(1, "month");
      handlePanelChange("month");
    };
    const handlePanelChange = (mode) => {
      ctx.emit("panel-change", [leftDate.value.toDate(), rightDate.value.toDate()], mode);
    };
    const enableMonthArrow = computed(() => {
      const nextMonth = (leftMonth.value + 1) % 12;
      const yearOffset = leftMonth.value + 1 >= 12 ? 1 : 0;
      return props.unlinkPanels && new Date(leftYear.value + yearOffset, nextMonth) < new Date(rightYear.value, rightMonth.value);
    });
    const enableYearArrow = computed(() => {
      return props.unlinkPanels && rightYear.value * 12 + rightMonth.value - (leftYear.value * 12 + leftMonth.value + 1) >= 12;
    });
    const isValidValue = (value) => {
      return Array.isArray(value) && value[0] && value[1] && value[0].valueOf() <= value[1].valueOf();
    };
    const rangeState = ref({
      endDate: null,
      selecting: false
    });
    const btnDisabled = computed(() => {
      return !(minDate.value && maxDate.value && !rangeState.value.selecting && isValidValue([minDate.value, maxDate.value]));
    });
    const handleChangeRange = (val) => {
      rangeState.value = val;
    };
    const onSelect = (selecting) => {
      rangeState.value.selecting = selecting;
      if (!selecting) {
        rangeState.value.endDate = null;
      }
    };
    const showTime = computed(() => props.type === "datetime" || props.type === "datetimerange");
    const handleConfirm = (visible = false) => {
      if (isValidValue([minDate.value, maxDate.value])) {
        ctx.emit("pick", [minDate.value, maxDate.value], visible);
      }
    };
    const formatEmit = (emitDayjs, index) => {
      if (!emitDayjs)
        return;
      if (defaultTime) {
        const defaultTimeD = dayjs(defaultTime[index] || defaultTime).locale(lang.value);
        return defaultTimeD.year(emitDayjs.year()).month(emitDayjs.month()).date(emitDayjs.date());
      }
      return emitDayjs;
    };
    const handleRangePick = (val, close = true) => {
      const min_ = val.minDate;
      const max_ = val.maxDate;
      const minDate_ = formatEmit(min_, 0);
      const maxDate_ = formatEmit(max_, 1);
      if (maxDate.value === maxDate_ && minDate.value === minDate_) {
        return;
      }
      ctx.emit("calendar-change", [min_.toDate(), max_ && max_.toDate()]);
      maxDate.value = maxDate_;
      minDate.value = minDate_;
      if (!close || showTime.value)
        return;
      handleConfirm();
    };
    const handleShortcutClick = (shortcut) => {
      const shortcutValues = typeof shortcut.value === "function" ? shortcut.value() : shortcut.value;
      if (shortcutValues) {
        ctx.emit("pick", [
          dayjs(shortcutValues[0]).locale(lang.value),
          dayjs(shortcutValues[1]).locale(lang.value)
        ]);
        return;
      }
      if (shortcut.onClick) {
        shortcut.onClick(ctx);
      }
    };
    const minTimePickerVisible = ref(false);
    const maxTimePickerVisible = ref(false);
    const handleMinTimeClose = () => {
      minTimePickerVisible.value = false;
    };
    const handleMaxTimeClose = () => {
      maxTimePickerVisible.value = false;
    };
    const handleDateInput = (value, type) => {
      dateUserInput.value[type] = value;
      const parsedValueD = dayjs(value, dateFormat.value).locale(lang.value);
      if (parsedValueD.isValid()) {
        if (disabledDate && disabledDate(parsedValueD.toDate())) {
          return;
        }
        if (type === "min") {
          leftDate.value = parsedValueD;
          minDate.value = (minDate.value || leftDate.value).year(parsedValueD.year()).month(parsedValueD.month()).date(parsedValueD.date());
          if (!props.unlinkPanels) {
            rightDate.value = parsedValueD.add(1, "month");
            maxDate.value = minDate.value.add(1, "month");
          }
        } else {
          rightDate.value = parsedValueD;
          maxDate.value = (maxDate.value || rightDate.value).year(parsedValueD.year()).month(parsedValueD.month()).date(parsedValueD.date());
          if (!props.unlinkPanels) {
            leftDate.value = parsedValueD.subtract(1, "month");
            minDate.value = maxDate.value.subtract(1, "month");
          }
        }
      }
    };
    const handleDateChange = (_, type) => {
      dateUserInput.value[type] = null;
    };
    const handleTimeInput = (value, type) => {
      timeUserInput.value[type] = value;
      const parsedValueD = dayjs(value, timeFormat.value).locale(lang.value);
      if (parsedValueD.isValid()) {
        if (type === "min") {
          minTimePickerVisible.value = true;
          minDate.value = (minDate.value || leftDate.value).hour(parsedValueD.hour()).minute(parsedValueD.minute()).second(parsedValueD.second());
          if (!maxDate.value || maxDate.value.isBefore(minDate.value)) {
            maxDate.value = minDate.value;
          }
        } else {
          maxTimePickerVisible.value = true;
          maxDate.value = (maxDate.value || rightDate.value).hour(parsedValueD.hour()).minute(parsedValueD.minute()).second(parsedValueD.second());
          rightDate.value = maxDate.value;
          if (maxDate.value && maxDate.value.isBefore(minDate.value)) {
            minDate.value = maxDate.value;
          }
        }
      }
    };
    const handleTimeChange = (value, type) => {
      timeUserInput.value[type] = null;
      if (type === "min") {
        leftDate.value = minDate.value;
        minTimePickerVisible.value = false;
      } else {
        rightDate.value = maxDate.value;
        maxTimePickerVisible.value = false;
      }
    };
    const handleMinTimePick = (value, visible, first) => {
      if (timeUserInput.value.min)
        return;
      if (value) {
        leftDate.value = value;
        minDate.value = (minDate.value || leftDate.value).hour(value.hour()).minute(value.minute()).second(value.second());
      }
      if (!first) {
        minTimePickerVisible.value = visible;
      }
      if (!maxDate.value || maxDate.value.isBefore(minDate.value)) {
        maxDate.value = minDate.value;
        rightDate.value = value;
      }
    };
    const handleMaxTimePick = (value, visible, first) => {
      if (timeUserInput.value.max)
        return;
      if (value) {
        rightDate.value = value;
        maxDate.value = (maxDate.value || rightDate.value).hour(value.hour()).minute(value.minute()).second(value.second());
      }
      if (!first) {
        maxTimePickerVisible.value = visible;
      }
      if (maxDate.value && maxDate.value.isBefore(minDate.value)) {
        minDate.value = maxDate.value;
      }
    };
    const handleClear = () => {
      leftDate.value = getDefaultValue()[0];
      rightDate.value = leftDate.value.add(1, "month");
      ctx.emit("pick", null);
    };
    const formatToString = (value) => {
      return Array.isArray(value) ? value.map((_) => _.format(format)) : value.format(format);
    };
    const parseUserInput = (value) => {
      return Array.isArray(value) ? value.map((_) => dayjs(_, format).locale(lang.value)) : dayjs(value, format).locale(lang.value);
    };
    const getDefaultValue = () => {
      let start;
      if (Array.isArray(defaultValue.value)) {
        const left = dayjs(defaultValue.value[0]);
        let right = dayjs(defaultValue.value[1]);
        if (!props.unlinkPanels) {
          right = left.add(1, "month");
        }
        return [left, right];
      } else if (defaultValue.value) {
        start = dayjs(defaultValue.value);
      } else {
        start = dayjs();
      }
      start = start.locale(lang.value);
      return [start, start.add(1, "month")];
    };
    ctx.emit("set-picker-option", ["isValidValue", isValidValue]);
    ctx.emit("set-picker-option", ["parseUserInput", parseUserInput]);
    ctx.emit("set-picker-option", ["formatToString", formatToString]);
    ctx.emit("set-picker-option", ["handleClear", handleClear]);
    const pickerBase = inject("EP_PICKER_BASE");
    const {
      shortcuts,
      disabledDate,
      cellClassName,
      format,
      defaultTime,
      arrowControl,
      clearable
    } = pickerBase.props;
    const defaultValue = toRef(pickerBase.props, "defaultValue");
    watch(() => defaultValue.value, (val) => {
      if (val) {
        const defaultArr = getDefaultValue();
        minDate.value = null;
        maxDate.value = null;
        leftDate.value = defaultArr[0];
        rightDate.value = defaultArr[1];
      }
    }, { immediate: true });
    watch(() => props.parsedValue, (newVal) => {
      if (newVal && newVal.length === 2) {
        minDate.value = newVal[0];
        maxDate.value = newVal[1];
        leftDate.value = minDate.value;
        if (props.unlinkPanels && maxDate.value) {
          const minDateYear = minDate.value.year();
          const minDateMonth = minDate.value.month();
          const maxDateYear = maxDate.value.year();
          const maxDateMonth = maxDate.value.month();
          rightDate.value = minDateYear === maxDateYear && minDateMonth === maxDateMonth ? maxDate.value.add(1, "month") : maxDate.value;
        } else {
          rightDate.value = leftDate.value.add(1, "month");
          if (maxDate.value) {
            rightDate.value = rightDate.value.hour(maxDate.value.hour()).minute(maxDate.value.minute()).second(maxDate.value.second());
          }
        }
      } else {
        const defaultArr = getDefaultValue();
        minDate.value = null;
        maxDate.value = null;
        leftDate.value = defaultArr[0];
        rightDate.value = defaultArr[1];
      }
    }, { immediate: true });
    return {
      shortcuts,
      disabledDate,
      cellClassName,
      minTimePickerVisible,
      maxTimePickerVisible,
      handleMinTimeClose,
      handleMaxTimeClose,
      handleShortcutClick,
      rangeState,
      minDate,
      maxDate,
      handleRangePick,
      onSelect,
      handleChangeRange,
      btnDisabled,
      enableYearArrow,
      enableMonthArrow,
      rightPrevMonth,
      rightPrevYear,
      rightNextMonth,
      rightNextYear,
      leftPrevMonth,
      leftPrevYear,
      leftNextMonth,
      leftNextYear,
      hasShortcuts,
      leftLabel,
      rightLabel,
      leftDate,
      rightDate,
      showTime,
      t,
      minVisibleDate,
      maxVisibleDate,
      minVisibleTime,
      maxVisibleTime,
      arrowControl,
      handleDateInput,
      handleDateChange,
      handleTimeInput,
      handleTimeChange,
      handleMinTimePick,
      handleMaxTimePick,
      handleClear,
      handleConfirm,
      timeFormat,
      clearable
    };
  }
});
const _hoisted_1$m = { class: "el-picker-panel__body-wrapper" };
const _hoisted_2$j = {
  key: 0,
  class: "el-picker-panel__sidebar"
};
const _hoisted_3$d = ["onClick"];
const _hoisted_4$3 = { class: "el-picker-panel__body" };
const _hoisted_5$3 = {
  key: 0,
  class: "el-date-range-picker__time-header"
};
const _hoisted_6$3 = { class: "el-date-range-picker__editors-wrap" };
const _hoisted_7$3 = { class: "el-date-range-picker__time-picker-wrap" };
const _hoisted_8$3 = { class: "el-date-range-picker__time-picker-wrap" };
const _hoisted_9$1 = { class: "el-date-range-picker__editors-wrap is-right" };
const _hoisted_10$1 = { class: "el-date-range-picker__time-picker-wrap" };
const _hoisted_11 = { class: "el-date-range-picker__time-picker-wrap" };
const _hoisted_12 = { class: "el-picker-panel__content el-date-range-picker__content is-left" };
const _hoisted_13 = { class: "el-date-range-picker__header" };
const _hoisted_14 = ["disabled"];
const _hoisted_15 = ["disabled"];
const _hoisted_16 = { class: "el-picker-panel__content el-date-range-picker__content is-right" };
const _hoisted_17 = { class: "el-date-range-picker__header" };
const _hoisted_18 = ["disabled"];
const _hoisted_19 = ["disabled"];
const _hoisted_20 = {
  key: 0,
  class: "el-picker-panel__footer"
};
function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_input = resolveComponent("el-input");
  const _component_time_pick_panel = resolveComponent("time-pick-panel");
  const _component_arrow_right = resolveComponent("arrow-right");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_d_arrow_left = resolveComponent("d-arrow-left");
  const _component_arrow_left = resolveComponent("arrow-left");
  const _component_d_arrow_right = resolveComponent("d-arrow-right");
  const _component_date_table = resolveComponent("date-table");
  const _component_el_button = resolveComponent("el-button");
  const _directive_clickoutside = resolveDirective("clickoutside");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["el-picker-panel el-date-range-picker", [
      {
        "has-sidebar": _ctx.$slots.sidebar || _ctx.hasShortcuts,
        "has-time": _ctx.showTime
      }
    ]])
  }, [
    createElementVNode("div", _hoisted_1$m, [
      renderSlot(_ctx.$slots, "sidebar", { class: "el-picker-panel__sidebar" }),
      _ctx.hasShortcuts ? (openBlock(), createElementBlock("div", _hoisted_2$j, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.shortcuts, (shortcut, key) => {
          return openBlock(), createElementBlock("button", {
            key,
            type: "button",
            class: "el-picker-panel__shortcut",
            onClick: ($event) => _ctx.handleShortcutClick(shortcut)
          }, toDisplayString(shortcut.text), 9, _hoisted_3$d);
        }), 128))
      ])) : createCommentVNode("v-if", true),
      createElementVNode("div", _hoisted_4$3, [
        _ctx.showTime ? (openBlock(), createElementBlock("div", _hoisted_5$3, [
          createElementVNode("span", _hoisted_6$3, [
            createElementVNode("span", _hoisted_7$3, [
              createVNode(_component_el_input, {
                size: "small",
                disabled: _ctx.rangeState.selecting,
                placeholder: _ctx.t("el.datepicker.startDate"),
                class: "el-date-range-picker__editor",
                "model-value": _ctx.minVisibleDate,
                onInput: _cache[0] || (_cache[0] = (val) => _ctx.handleDateInput(val, "min")),
                onChange: _cache[1] || (_cache[1] = (val) => _ctx.handleDateChange(val, "min"))
              }, null, 8, ["disabled", "placeholder", "model-value"])
            ]),
            withDirectives((openBlock(), createElementBlock("span", _hoisted_8$3, [
              createVNode(_component_el_input, {
                size: "small",
                class: "el-date-range-picker__editor",
                disabled: _ctx.rangeState.selecting,
                placeholder: _ctx.t("el.datepicker.startTime"),
                "model-value": _ctx.minVisibleTime,
                onFocus: _cache[2] || (_cache[2] = ($event) => _ctx.minTimePickerVisible = true),
                onInput: _cache[3] || (_cache[3] = (val) => _ctx.handleTimeInput(val, "min")),
                onChange: _cache[4] || (_cache[4] = (val) => _ctx.handleTimeChange(val, "min"))
              }, null, 8, ["disabled", "placeholder", "model-value"]),
              createVNode(_component_time_pick_panel, {
                visible: _ctx.minTimePickerVisible,
                format: _ctx.timeFormat,
                "datetime-role": "start",
                "time-arrow-control": _ctx.arrowControl,
                "parsed-value": _ctx.leftDate,
                onPick: _ctx.handleMinTimePick
              }, null, 8, ["visible", "format", "time-arrow-control", "parsed-value", "onPick"])
            ])), [
              [_directive_clickoutside, _ctx.handleMinTimeClose]
            ])
          ]),
          createElementVNode("span", null, [
            createVNode(_component_el_icon, null, {
              default: withCtx(() => [
                createVNode(_component_arrow_right)
              ]),
              _: 1
            })
          ]),
          createElementVNode("span", _hoisted_9$1, [
            createElementVNode("span", _hoisted_10$1, [
              createVNode(_component_el_input, {
                size: "small",
                class: "el-date-range-picker__editor",
                disabled: _ctx.rangeState.selecting,
                placeholder: _ctx.t("el.datepicker.endDate"),
                "model-value": _ctx.maxVisibleDate,
                readonly: !_ctx.minDate,
                onInput: _cache[5] || (_cache[5] = (val) => _ctx.handleDateInput(val, "max")),
                onChange: _cache[6] || (_cache[6] = (val) => _ctx.handleDateChange(val, "max"))
              }, null, 8, ["disabled", "placeholder", "model-value", "readonly"])
            ]),
            withDirectives((openBlock(), createElementBlock("span", _hoisted_11, [
              createVNode(_component_el_input, {
                size: "small",
                class: "el-date-range-picker__editor",
                disabled: _ctx.rangeState.selecting,
                placeholder: _ctx.t("el.datepicker.endTime"),
                "model-value": _ctx.maxVisibleTime,
                readonly: !_ctx.minDate,
                onFocus: _cache[7] || (_cache[7] = ($event) => _ctx.minDate && (_ctx.maxTimePickerVisible = true)),
                onInput: _cache[8] || (_cache[8] = (val) => _ctx.handleTimeInput(val, "max")),
                onChange: _cache[9] || (_cache[9] = (val) => _ctx.handleTimeChange(val, "max"))
              }, null, 8, ["disabled", "placeholder", "model-value", "readonly"]),
              createVNode(_component_time_pick_panel, {
                "datetime-role": "end",
                visible: _ctx.maxTimePickerVisible,
                format: _ctx.timeFormat,
                "time-arrow-control": _ctx.arrowControl,
                "parsed-value": _ctx.rightDate,
                onPick: _ctx.handleMaxTimePick
              }, null, 8, ["visible", "format", "time-arrow-control", "parsed-value", "onPick"])
            ])), [
              [_directive_clickoutside, _ctx.handleMaxTimeClose]
            ])
          ])
        ])) : createCommentVNode("v-if", true),
        createElementVNode("div", _hoisted_12, [
          createElementVNode("div", _hoisted_13, [
            createElementVNode("button", {
              type: "button",
              class: "el-picker-panel__icon-btn d-arrow-left",
              onClick: _cache[10] || (_cache[10] = (...args) => _ctx.leftPrevYear && _ctx.leftPrevYear(...args))
            }, [
              createVNode(_component_el_icon, null, {
                default: withCtx(() => [
                  createVNode(_component_d_arrow_left)
                ]),
                _: 1
              })
            ]),
            createElementVNode("button", {
              type: "button",
              class: "el-picker-panel__icon-btn arrow-left",
              onClick: _cache[11] || (_cache[11] = (...args) => _ctx.leftPrevMonth && _ctx.leftPrevMonth(...args))
            }, [
              createVNode(_component_el_icon, null, {
                default: withCtx(() => [
                  createVNode(_component_arrow_left)
                ]),
                _: 1
              })
            ]),
            _ctx.unlinkPanels ? (openBlock(), createElementBlock("button", {
              key: 0,
              type: "button",
              disabled: !_ctx.enableYearArrow,
              class: normalizeClass([{ "is-disabled": !_ctx.enableYearArrow }, "el-picker-panel__icon-btn d-arrow-right"]),
              onClick: _cache[12] || (_cache[12] = (...args) => _ctx.leftNextYear && _ctx.leftNextYear(...args))
            }, [
              createVNode(_component_el_icon, null, {
                default: withCtx(() => [
                  createVNode(_component_d_arrow_right)
                ]),
                _: 1
              })
            ], 10, _hoisted_14)) : createCommentVNode("v-if", true),
            _ctx.unlinkPanels ? (openBlock(), createElementBlock("button", {
              key: 1,
              type: "button",
              disabled: !_ctx.enableMonthArrow,
              class: normalizeClass([{ "is-disabled": !_ctx.enableMonthArrow }, "el-picker-panel__icon-btn arrow-right"]),
              onClick: _cache[13] || (_cache[13] = (...args) => _ctx.leftNextMonth && _ctx.leftNextMonth(...args))
            }, [
              createVNode(_component_el_icon, null, {
                default: withCtx(() => [
                  createVNode(_component_arrow_right)
                ]),
                _: 1
              })
            ], 10, _hoisted_15)) : createCommentVNode("v-if", true),
            createElementVNode("div", null, toDisplayString(_ctx.leftLabel), 1)
          ]),
          createVNode(_component_date_table, {
            "selection-mode": "range",
            date: _ctx.leftDate,
            "min-date": _ctx.minDate,
            "max-date": _ctx.maxDate,
            "range-state": _ctx.rangeState,
            "disabled-date": _ctx.disabledDate,
            "cell-class-name": _ctx.cellClassName,
            onChangerange: _ctx.handleChangeRange,
            onPick: _ctx.handleRangePick,
            onSelect: _ctx.onSelect
          }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "cell-class-name", "onChangerange", "onPick", "onSelect"])
        ]),
        createElementVNode("div", _hoisted_16, [
          createElementVNode("div", _hoisted_17, [
            _ctx.unlinkPanels ? (openBlock(), createElementBlock("button", {
              key: 0,
              type: "button",
              disabled: !_ctx.enableYearArrow,
              class: normalizeClass([{ "is-disabled": !_ctx.enableYearArrow }, "el-picker-panel__icon-btn d-arrow-left"]),
              onClick: _cache[14] || (_cache[14] = (...args) => _ctx.rightPrevYear && _ctx.rightPrevYear(...args))
            }, [
              createVNode(_component_el_icon, null, {
                default: withCtx(() => [
                  createVNode(_component_d_arrow_left)
                ]),
                _: 1
              })
            ], 10, _hoisted_18)) : createCommentVNode("v-if", true),
            _ctx.unlinkPanels ? (openBlock(), createElementBlock("button", {
              key: 1,
              type: "button",
              disabled: !_ctx.enableMonthArrow,
              class: normalizeClass([{ "is-disabled": !_ctx.enableMonthArrow }, "el-picker-panel__icon-btn arrow-left"]),
              onClick: _cache[15] || (_cache[15] = (...args) => _ctx.rightPrevMonth && _ctx.rightPrevMonth(...args))
            }, [
              createVNode(_component_el_icon, null, {
                default: withCtx(() => [
                  createVNode(_component_arrow_left)
                ]),
                _: 1
              })
            ], 10, _hoisted_19)) : createCommentVNode("v-if", true),
            createElementVNode("button", {
              type: "button",
              class: "el-picker-panel__icon-btn d-arrow-right",
              onClick: _cache[16] || (_cache[16] = (...args) => _ctx.rightNextYear && _ctx.rightNextYear(...args))
            }, [
              createVNode(_component_el_icon, null, {
                default: withCtx(() => [
                  createVNode(_component_d_arrow_right)
                ]),
                _: 1
              })
            ]),
            createElementVNode("button", {
              type: "button",
              class: "el-picker-panel__icon-btn arrow-right",
              onClick: _cache[17] || (_cache[17] = (...args) => _ctx.rightNextMonth && _ctx.rightNextMonth(...args))
            }, [
              createVNode(_component_el_icon, null, {
                default: withCtx(() => [
                  createVNode(_component_arrow_right)
                ]),
                _: 1
              })
            ]),
            createElementVNode("div", null, toDisplayString(_ctx.rightLabel), 1)
          ]),
          createVNode(_component_date_table, {
            "selection-mode": "range",
            date: _ctx.rightDate,
            "min-date": _ctx.minDate,
            "max-date": _ctx.maxDate,
            "range-state": _ctx.rangeState,
            "disabled-date": _ctx.disabledDate,
            "cell-class-name": _ctx.cellClassName,
            onChangerange: _ctx.handleChangeRange,
            onPick: _ctx.handleRangePick,
            onSelect: _ctx.onSelect
          }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "cell-class-name", "onChangerange", "onPick", "onSelect"])
        ])
      ])
    ]),
    _ctx.showTime ? (openBlock(), createElementBlock("div", _hoisted_20, [
      _ctx.clearable ? (openBlock(), createBlock(_component_el_button, {
        key: 0,
        size: "small",
        type: "text",
        class: "el-picker-panel__link-btn",
        onClick: _ctx.handleClear
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.t("el.datepicker.clear")), 1)
        ]),
        _: 1
      }, 8, ["onClick"])) : createCommentVNode("v-if", true),
      createVNode(_component_el_button, {
        plain: "",
        size: "small",
        class: "el-picker-panel__link-btn",
        disabled: _ctx.btnDisabled,
        onClick: _cache[18] || (_cache[18] = ($event) => _ctx.handleConfirm(false))
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.t("el.datepicker.confirm")), 1)
        ]),
        _: 1
      }, 8, ["disabled"])
    ])) : createCommentVNode("v-if", true)
  ], 2);
}
var DateRangePickPanel = /* @__PURE__ */ _export_sfc$2(_sfc_main$x, [["render", _sfc_render$m], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/panel-date-range.vue"]]);

const _sfc_main$w = defineComponent({
  components: { MonthTable, ElIcon, DArrowLeft: dArrowLeft, DArrowRight: dArrowRight },
  props: {
    unlinkPanels: Boolean,
    parsedValue: {
      type: Array
    }
  },
  emits: ["pick", "set-picker-option"],
  setup(props, ctx) {
    const { t, lang } = useLocale();
    const leftDate = ref(dayjs().locale(lang.value));
    const rightDate = ref(dayjs().locale(lang.value).add(1, "year"));
    const hasShortcuts = computed(() => !!shortcuts.length);
    const handleShortcutClick = (shortcut) => {
      const shortcutValues = typeof shortcut.value === "function" ? shortcut.value() : shortcut.value;
      if (shortcutValues) {
        ctx.emit("pick", [
          dayjs(shortcutValues[0]).locale(lang.value),
          dayjs(shortcutValues[1]).locale(lang.value)
        ]);
        return;
      }
      if (shortcut.onClick) {
        shortcut.onClick(ctx);
      }
    };
    const leftPrevYear = () => {
      leftDate.value = leftDate.value.subtract(1, "year");
      if (!props.unlinkPanels) {
        rightDate.value = rightDate.value.subtract(1, "year");
      }
    };
    const rightNextYear = () => {
      if (!props.unlinkPanels) {
        leftDate.value = leftDate.value.add(1, "year");
      }
      rightDate.value = rightDate.value.add(1, "year");
    };
    const leftNextYear = () => {
      leftDate.value = leftDate.value.add(1, "year");
    };
    const rightPrevYear = () => {
      rightDate.value = rightDate.value.subtract(1, "year");
    };
    const leftLabel = computed(() => {
      return `${leftDate.value.year()} ${t("el.datepicker.year")}`;
    });
    const rightLabel = computed(() => {
      return `${rightDate.value.year()} ${t("el.datepicker.year")}`;
    });
    const leftYear = computed(() => {
      return leftDate.value.year();
    });
    const rightYear = computed(() => {
      return rightDate.value.year() === leftDate.value.year() ? leftDate.value.year() + 1 : rightDate.value.year();
    });
    const enableYearArrow = computed(() => {
      return props.unlinkPanels && rightYear.value > leftYear.value + 1;
    });
    const minDate = ref(null);
    const maxDate = ref(null);
    const rangeState = ref({
      endDate: null,
      selecting: false
    });
    const handleChangeRange = (val) => {
      rangeState.value = val;
    };
    const handleRangePick = (val, close = true) => {
      const minDate_ = val.minDate;
      const maxDate_ = val.maxDate;
      if (maxDate.value === maxDate_ && minDate.value === minDate_) {
        return;
      }
      maxDate.value = maxDate_;
      minDate.value = minDate_;
      if (!close)
        return;
      handleConfirm();
    };
    const isValidValue = (value) => {
      return Array.isArray(value) && value && value[0] && value[1] && value[0].valueOf() <= value[1].valueOf();
    };
    const handleConfirm = (visible = false) => {
      if (isValidValue([minDate.value, maxDate.value])) {
        ctx.emit("pick", [minDate.value, maxDate.value], visible);
      }
    };
    const onSelect = (selecting) => {
      rangeState.value.selecting = selecting;
      if (!selecting) {
        rangeState.value.endDate = null;
      }
    };
    const formatToString = (value) => {
      return value.map((_) => _.format(format));
    };
    const getDefaultValue = () => {
      let start;
      if (Array.isArray(defaultValue.value)) {
        const left = dayjs(defaultValue.value[0]);
        let right = dayjs(defaultValue.value[1]);
        if (!props.unlinkPanels) {
          right = left.add(1, "year");
        }
        return [left, right];
      } else if (defaultValue.value) {
        start = dayjs(defaultValue.value);
      } else {
        start = dayjs();
      }
      start = start.locale(lang.value);
      return [start, start.add(1, "year")];
    };
    ctx.emit("set-picker-option", ["formatToString", formatToString]);
    const pickerBase = inject("EP_PICKER_BASE");
    const { shortcuts, disabledDate, format } = pickerBase.props;
    const defaultValue = toRef(pickerBase.props, "defaultValue");
    watch(() => defaultValue.value, (val) => {
      if (val) {
        const defaultArr = getDefaultValue();
        leftDate.value = defaultArr[0];
        rightDate.value = defaultArr[1];
      }
    }, { immediate: true });
    watch(() => props.parsedValue, (newVal) => {
      if (newVal && newVal.length === 2) {
        minDate.value = newVal[0];
        maxDate.value = newVal[1];
        leftDate.value = minDate.value;
        if (props.unlinkPanels && maxDate.value) {
          const minDateYear = minDate.value.year();
          const maxDateYear = maxDate.value.year();
          rightDate.value = minDateYear === maxDateYear ? maxDate.value.add(1, "year") : maxDate.value;
        } else {
          rightDate.value = leftDate.value.add(1, "year");
        }
      } else {
        const defaultArr = getDefaultValue();
        minDate.value = null;
        maxDate.value = null;
        leftDate.value = defaultArr[0];
        rightDate.value = defaultArr[1];
      }
    }, { immediate: true });
    return {
      shortcuts,
      disabledDate,
      onSelect,
      handleRangePick,
      rangeState,
      handleChangeRange,
      minDate,
      maxDate,
      enableYearArrow,
      leftLabel,
      rightLabel,
      leftNextYear,
      leftPrevYear,
      rightNextYear,
      rightPrevYear,
      t,
      leftDate,
      rightDate,
      hasShortcuts,
      handleShortcutClick
    };
  }
});
const _hoisted_1$l = { class: "el-picker-panel__body-wrapper" };
const _hoisted_2$i = {
  key: 0,
  class: "el-picker-panel__sidebar"
};
const _hoisted_3$c = ["onClick"];
const _hoisted_4$2 = { class: "el-picker-panel__body" };
const _hoisted_5$2 = { class: "el-picker-panel__content el-date-range-picker__content is-left" };
const _hoisted_6$2 = { class: "el-date-range-picker__header" };
const _hoisted_7$2 = ["disabled"];
const _hoisted_8$2 = { class: "el-picker-panel__content el-date-range-picker__content is-right" };
const _hoisted_9 = { class: "el-date-range-picker__header" };
const _hoisted_10 = ["disabled"];
function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_d_arrow_left = resolveComponent("d-arrow-left");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_d_arrow_right = resolveComponent("d-arrow-right");
  const _component_month_table = resolveComponent("month-table");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["el-picker-panel el-date-range-picker", [
      {
        "has-sidebar": _ctx.$slots.sidebar || _ctx.hasShortcuts
      }
    ]])
  }, [
    createElementVNode("div", _hoisted_1$l, [
      renderSlot(_ctx.$slots, "sidebar", { class: "el-picker-panel__sidebar" }),
      _ctx.hasShortcuts ? (openBlock(), createElementBlock("div", _hoisted_2$i, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.shortcuts, (shortcut, key) => {
          return openBlock(), createElementBlock("button", {
            key,
            type: "button",
            class: "el-picker-panel__shortcut",
            onClick: ($event) => _ctx.handleShortcutClick(shortcut)
          }, toDisplayString(shortcut.text), 9, _hoisted_3$c);
        }), 128))
      ])) : createCommentVNode("v-if", true),
      createElementVNode("div", _hoisted_4$2, [
        createElementVNode("div", _hoisted_5$2, [
          createElementVNode("div", _hoisted_6$2, [
            createElementVNode("button", {
              type: "button",
              class: "el-picker-panel__icon-btn d-arrow-left",
              onClick: _cache[0] || (_cache[0] = (...args) => _ctx.leftPrevYear && _ctx.leftPrevYear(...args))
            }, [
              createVNode(_component_el_icon, null, {
                default: withCtx(() => [
                  createVNode(_component_d_arrow_left)
                ]),
                _: 1
              })
            ]),
            _ctx.unlinkPanels ? (openBlock(), createElementBlock("button", {
              key: 0,
              type: "button",
              disabled: !_ctx.enableYearArrow,
              class: normalizeClass([{ "is-disabled": !_ctx.enableYearArrow }, "el-picker-panel__icon-btn d-arrow-right"]),
              onClick: _cache[1] || (_cache[1] = (...args) => _ctx.leftNextYear && _ctx.leftNextYear(...args))
            }, [
              createVNode(_component_el_icon, null, {
                default: withCtx(() => [
                  createVNode(_component_d_arrow_right)
                ]),
                _: 1
              })
            ], 10, _hoisted_7$2)) : createCommentVNode("v-if", true),
            createElementVNode("div", null, toDisplayString(_ctx.leftLabel), 1)
          ]),
          createVNode(_component_month_table, {
            "selection-mode": "range",
            date: _ctx.leftDate,
            "min-date": _ctx.minDate,
            "max-date": _ctx.maxDate,
            "range-state": _ctx.rangeState,
            "disabled-date": _ctx.disabledDate,
            onChangerange: _ctx.handleChangeRange,
            onPick: _ctx.handleRangePick,
            onSelect: _ctx.onSelect
          }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "onChangerange", "onPick", "onSelect"])
        ]),
        createElementVNode("div", _hoisted_8$2, [
          createElementVNode("div", _hoisted_9, [
            _ctx.unlinkPanels ? (openBlock(), createElementBlock("button", {
              key: 0,
              type: "button",
              disabled: !_ctx.enableYearArrow,
              class: normalizeClass([{ "is-disabled": !_ctx.enableYearArrow }, "el-picker-panel__icon-btn d-arrow-left"]),
              onClick: _cache[2] || (_cache[2] = (...args) => _ctx.rightPrevYear && _ctx.rightPrevYear(...args))
            }, [
              createVNode(_component_el_icon, null, {
                default: withCtx(() => [
                  createVNode(_component_d_arrow_left)
                ]),
                _: 1
              })
            ], 10, _hoisted_10)) : createCommentVNode("v-if", true),
            createElementVNode("button", {
              type: "button",
              class: "el-picker-panel__icon-btn d-arrow-right",
              onClick: _cache[3] || (_cache[3] = (...args) => _ctx.rightNextYear && _ctx.rightNextYear(...args))
            }, [
              createVNode(_component_el_icon, null, {
                default: withCtx(() => [
                  createVNode(_component_d_arrow_right)
                ]),
                _: 1
              })
            ]),
            createElementVNode("div", null, toDisplayString(_ctx.rightLabel), 1)
          ]),
          createVNode(_component_month_table, {
            "selection-mode": "range",
            date: _ctx.rightDate,
            "min-date": _ctx.minDate,
            "max-date": _ctx.maxDate,
            "range-state": _ctx.rangeState,
            "disabled-date": _ctx.disabledDate,
            onChangerange: _ctx.handleChangeRange,
            onPick: _ctx.handleRangePick,
            onSelect: _ctx.onSelect
          }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "onChangerange", "onPick", "onSelect"])
        ])
      ])
    ])
  ], 2);
}
var MonthRangePickPanel = /* @__PURE__ */ _export_sfc$2(_sfc_main$w, [["render", _sfc_render$l], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/panel-month-range.vue"]]);

dayjs.extend(localeData);
dayjs.extend(advancedFormat);
dayjs.extend(customParseFormat);
dayjs.extend(weekOfYear);
dayjs.extend(weekYear);
dayjs.extend(dayOfYear);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
const getPanel = function(type) {
  if (type === "daterange" || type === "datetimerange") {
    return DateRangePickPanel;
  } else if (type === "monthrange") {
    return MonthRangePickPanel;
  }
  return DatePickPanel;
};
var DatePicker = defineComponent({
  name: "ElDatePicker",
  install: null,
  props: {
    ...timePickerDefaultProps,
    type: {
      type: String,
      default: "date"
    }
  },
  emits: ["update:modelValue"],
  setup(props, ctx) {
    provide("ElPopperOptions", props.popperOptions);
    provide(ROOT_PICKER_INJECTION_KEY, {
      ctx
    });
    const commonPicker = ref(null);
    const refProps = {
      ...props,
      focus: (focusStartInput = true) => {
        var _a;
        (_a = commonPicker.value) == null ? void 0 : _a.focus(focusStartInput);
      }
    };
    ctx.expose(refProps);
    return () => {
      var _a;
      const format = (_a = props.format) != null ? _a : DEFAULT_FORMATS_DATEPICKER[props.type] || DEFAULT_FORMATS_DATE;
      return h$1(CommonPicker, {
        ...props,
        format,
        type: props.type,
        ref: commonPicker,
        "onUpdate:modelValue": (value) => ctx.emit("update:modelValue", value)
      }, {
        default: (scopedProps) => h$1(getPanel(props.type), scopedProps),
        "range-separator": () => renderSlot(ctx.slots, "range-separator")
      });
    };
  }
});

const _DatePicker = DatePicker;
_DatePicker.install = (app) => {
  app.component(_DatePicker.name, _DatePicker);
};
const ElDatePicker = _DatePicker;

const obtainAllFocusableElements = (element) => {
  const nodes = [];
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput)
        return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode())
    nodes.push(walker.currentNode);
  return nodes;
};
const getVisibleElement = (elements, container) => {
  for (const element of elements) {
    if (!isHidden(element, container))
      return element;
  }
};
const isHidden = (element, container) => {
  if (getComputedStyle(element).visibility === "hidden")
    return true;
  while (element) {
    if (container && element === container)
      return false;
    if (getComputedStyle(element).display === "none")
      return true;
    element = element.parentElement;
  }
  return false;
};
const getEdges = (container) => {
  const focusable = obtainAllFocusableElements(container);
  const first = getVisibleElement(focusable, container);
  const last = getVisibleElement(focusable.reverse(), container);
  return [first, last];
};
const isSelectable = (element) => {
  return element instanceof HTMLInputElement && "select" in element;
};
const tryFocus = (element, shouldSelect) => {
  if (element && element.focus) {
    const prevFocusedElement = document.activeElement;
    element.focus({ preventScroll: true });
    if (element !== prevFocusedElement && isSelectable(element) && shouldSelect) {
      element.select();
    }
  }
};
function removeFromStack(list, item) {
  const copy = [...list];
  const idx = list.indexOf(item);
  if (idx !== -1) {
    copy.splice(idx, 1);
  }
  return copy;
}
const createFocusableStack = () => {
  let stack = [];
  const push = (layer) => {
    const currentLayer = stack[0];
    if (currentLayer && layer !== currentLayer) {
      currentLayer.pause();
    }
    stack = removeFromStack(stack, layer);
    stack.unshift(layer);
  };
  const remove = (layer) => {
    var _a, _b;
    stack = removeFromStack(stack, layer);
    (_b = (_a = stack[0]) == null ? void 0 : _a.resume) == null ? void 0 : _b.call(_a);
  };
  return {
    push,
    remove
  };
};
const focusFirstDescendant = (elements, shouldSelect = false) => {
  const prevFocusedElement = document.activeElement;
  for (const element of elements) {
    tryFocus(element, shouldSelect);
    if (document.activeElement !== prevFocusedElement)
      return;
  }
};
const focusableStack = createFocusableStack();

const FOCUS_ON_MOUNT = "focus-trap.focus-on-mount";
const FOCUS_ON_UNMOUNT = "focus-trap.focus-on-unmount";
const FOCUS_ON_MOUNT_OPTS = {
  cancelable: true,
  bubbles: false
};
const ON_MOUNT_FOCUS_EVT = "mountOnFocus";
const ON_UNMOUNT_FOCUS_EVT = "unmountOnFocus";
const FOCUS_TRAP_INJECTION_KEY = Symbol("elFocusTrap");

const _sfc_main$v = defineComponent({
  name: "ElFocusTrap",
  inheritAttrs: false,
  props: {
    loop: Boolean,
    trapped: Boolean
  },
  emits: [ON_MOUNT_FOCUS_EVT, ON_UNMOUNT_FOCUS_EVT],
  setup(props, { emit }) {
    const focusTrapRef = ref();
    const forwardRef = ref(null);
    let lastFocusBeforeMounted;
    let lastFocusAfterMounted;
    const focusLayer = {
      paused: false,
      pause() {
        this.paused = true;
      },
      resume() {
        this.paused = false;
      }
    };
    const onKeydown = (e) => {
      if (!props.loop && !props.trapped)
        return;
      if (focusLayer.paused)
        return;
      const { key, altKey, ctrlKey, metaKey, currentTarget, shiftKey } = e;
      const { loop } = props;
      const isTabbing = key === EVENT_CODE.tab && !altKey && !ctrlKey && !metaKey;
      const currentFocusingEl = document.activeElement;
      if (isTabbing && currentFocusingEl) {
        const container = currentTarget;
        const [first, last] = getEdges(container);
        const isTabbable = first && last;
        if (!isTabbable) {
          if (currentFocusingEl === container)
            e.preventDefault();
        } else {
          if (!shiftKey && currentFocusingEl === last) {
            e.preventDefault();
            if (loop)
              tryFocus(first, true);
          } else if (shiftKey && currentFocusingEl === first) {
            e.preventDefault();
            if (loop)
              tryFocus(last, true);
          }
        }
      }
    };
    provide(FOCUS_TRAP_INJECTION_KEY, {
      focusTrapRef: forwardRef,
      onKeydown
    });
    const focusOnMount = (e) => {
      emit(ON_MOUNT_FOCUS_EVT, e);
    };
    const focusOnUnmount = (e) => emit(ON_UNMOUNT_FOCUS_EVT, e);
    const onFocusIn = (e) => {
      const trapContainer = unref(forwardRef);
      if (focusLayer.paused || !trapContainer)
        return;
      const target = e.target;
      if (target && trapContainer.contains(target)) {
        lastFocusAfterMounted = target;
      } else {
        tryFocus(lastFocusAfterMounted, true);
      }
    };
    const onFocusOut = (e) => {
      const trapContainer = unref(forwardRef);
      if (focusLayer.paused || !trapContainer)
        return;
      if (!trapContainer.contains(e.relatedTarget)) {
        tryFocus(lastFocusAfterMounted, true);
      }
    };
    const cleanupDocumentListeners = () => {
      document.removeEventListener("focusin", onFocusIn);
      document.removeEventListener("focusout", onFocusOut);
    };
    onMounted(() => {
      const trapContainer = unref(forwardRef);
      if (trapContainer) {
        focusableStack.push(focusLayer);
        const prevFocusedElement = document.activeElement;
        lastFocusBeforeMounted = prevFocusedElement;
        const isPrevFocusContained = trapContainer.contains(prevFocusedElement);
        if (!isPrevFocusContained) {
          const mountEvent = new Event(FOCUS_ON_MOUNT, FOCUS_ON_MOUNT_OPTS);
          trapContainer.addEventListener(FOCUS_ON_MOUNT, focusOnMount);
          trapContainer.dispatchEvent(mountEvent);
          if (!mountEvent.defaultPrevented) {
            nextTick(() => {
              focusFirstDescendant(obtainAllFocusableElements(trapContainer), true);
              if (document.activeElement === prevFocusedElement) {
                tryFocus(trapContainer);
              }
            });
          }
        }
      }
      watch(() => props.trapped, (trapped) => {
        if (trapped) {
          document.addEventListener("focusin", onFocusIn);
          document.addEventListener("focusout", onFocusOut);
        } else {
          cleanupDocumentListeners();
        }
      }, { immediate: true });
    });
    onBeforeUnmount(() => {
      cleanupDocumentListeners();
      const trapContainer = unref(forwardRef);
      if (trapContainer) {
        trapContainer.removeEventListener(FOCUS_ON_MOUNT, focusOnMount);
        const unmountEvent = new Event(FOCUS_ON_UNMOUNT, FOCUS_ON_MOUNT_OPTS);
        trapContainer.addEventListener(FOCUS_ON_UNMOUNT, focusOnUnmount);
        trapContainer.dispatchEvent(unmountEvent);
        if (!unmountEvent.defaultPrevented) {
          tryFocus(lastFocusBeforeMounted != null ? lastFocusBeforeMounted : document.body, true);
        }
        trapContainer.removeEventListener(FOCUS_ON_UNMOUNT, focusOnMount);
        focusableStack.remove(focusLayer);
      }
    });
    return {
      focusTrapRef,
      forwardRef,
      onKeydown
    };
  }
});
function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
  return renderSlot(_ctx.$slots, "default");
}
var ElFocusTrap = /* @__PURE__ */ _export_sfc$2(_sfc_main$v, [["render", _sfc_render$k], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);

const _sfc_main$u = defineComponent({
  inheritAttrs: false
});
function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
  return renderSlot(_ctx.$slots, "default");
}
var Collection = /* @__PURE__ */ _export_sfc$2(_sfc_main$u, [["render", _sfc_render$j], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);

const _sfc_main$t = defineComponent({
  name: "ElCollectionItem",
  inheritAttrs: false
});
function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
  return renderSlot(_ctx.$slots, "default");
}
var CollectionItem = /* @__PURE__ */ _export_sfc$2(_sfc_main$t, [["render", _sfc_render$i], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]);

const COLLECTION_ITEM_SIGN = `data-el-collection-item`;
const createCollectionWithScope = (name) => {
  const COLLECTION_NAME = `El${name}Collection`;
  const COLLECTION_ITEM_NAME = `${COLLECTION_NAME}Item`;
  const COLLECTION_INJECTION_KEY = Symbol(COLLECTION_NAME);
  const COLLECTION_ITEM_INJECTION_KEY = Symbol(COLLECTION_ITEM_NAME);
  const ElCollection = {
    ...Collection,
    name: COLLECTION_NAME,
    setup() {
      const collectionRef = ref(null);
      const itemMap = /* @__PURE__ */ new Map();
      const getItems = () => {
        const collectionEl = unref(collectionRef);
        if (!collectionEl)
          return [];
        const orderedNodes = Array.from(collectionEl.querySelectorAll(`[${COLLECTION_ITEM_SIGN}]`));
        const items = [...itemMap.values()];
        const orderedItems = items.sort((a, b) => orderedNodes.indexOf(a.ref) - orderedNodes.indexOf(b.ref));
        return orderedItems;
      };
      provide(COLLECTION_INJECTION_KEY, {
        itemMap,
        getItems,
        collectionRef
      });
    }
  };
  const ElCollectionItem = {
    ...CollectionItem,
    name: COLLECTION_ITEM_NAME,
    setup(_, { attrs }) {
      const collectionItemRef = ref(null);
      const collectionInjection = inject(COLLECTION_INJECTION_KEY, void 0);
      provide(COLLECTION_ITEM_INJECTION_KEY, {
        collectionItemRef
      });
      onMounted(() => {
        const collectionItemEl = unref(collectionItemRef);
        if (collectionItemEl) {
          collectionInjection.itemMap.set(collectionItemEl, {
            ref: collectionItemEl,
            ...attrs
          });
        }
      });
      onBeforeUnmount(() => {
        const collectionItemEl = unref(collectionItemRef);
        collectionInjection.itemMap.delete(collectionItemEl);
      });
    }
  };
  return {
    COLLECTION_INJECTION_KEY,
    COLLECTION_ITEM_INJECTION_KEY,
    ElCollection,
    ElCollectionItem
  };
};

const rovingFocusGroupProps = buildProps({
  style: { type: definePropType([String, Array, Object]) },
  currentTabId: {
    type: definePropType(String)
  },
  defaultCurrentTabId: String,
  loop: Boolean,
  dir: {
    type: String,
    values: ["ltr", "rtl"],
    default: "ltr"
  },
  orientation: {
    type: definePropType(String)
  },
  onBlur: Function,
  onFocus: Function,
  onMousedown: Function
});
const {
  ElCollection: ElCollection$1,
  ElCollectionItem: ElCollectionItem$1,
  COLLECTION_INJECTION_KEY: COLLECTION_INJECTION_KEY$1,
  COLLECTION_ITEM_INJECTION_KEY: COLLECTION_ITEM_INJECTION_KEY$1
} = createCollectionWithScope("RovingFocusGroup");

const ROVING_FOCUS_GROUP_INJECTION_KEY = Symbol("elRovingFocusGroup");
const ROVING_FOCUS_GROUP_ITEM_INJECTION_KEY = Symbol("elRovingFocusGroupItem");

const MAP_KEY_TO_FOCUS_INTENT = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
const getDirectionAwareKey = (key, dir) => {
  if (dir !== "rtl")
    return key;
  switch (key) {
    case EVENT_CODE.right:
      return EVENT_CODE.left;
    case EVENT_CODE.left:
      return EVENT_CODE.right;
    default:
      return key;
  }
};
const getFocusIntent = (event, orientation, dir) => {
  const key = getDirectionAwareKey(event.key, dir);
  if (orientation === "vertical" && [EVENT_CODE.left, EVENT_CODE.right].includes(key))
    return void 0;
  if (orientation === "horizontal" && [EVENT_CODE.up, EVENT_CODE.down].includes(key))
    return void 0;
  return MAP_KEY_TO_FOCUS_INTENT[key];
};
const reorderArray = (array, atIdx) => {
  return array.map((_, idx) => array[(idx + atIdx) % array.length]);
};
const focusFirst = (elements) => {
  const { activeElement: prevActive } = document;
  for (const element of elements) {
    if (element === prevActive)
      return;
    element.focus();
    if (prevActive !== document.activeElement)
      return;
  }
};

const CURRENT_TAB_ID_CHANGE_EVT = "currentTabIdChange";
const ENTRY_FOCUS_EVT = "rovingFocusGroup.entryFocus";
const EVT_OPTS = { bubbles: false, cancelable: true };
const _sfc_main$s = defineComponent({
  name: "ElRovingFocusGroupImpl",
  inheritAttrs: false,
  props: rovingFocusGroupProps,
  emits: [CURRENT_TAB_ID_CHANGE_EVT, "entryFocus"],
  setup(props, { emit }) {
    var _a;
    const currentTabbedId = ref((_a = props.currentTabId || props.defaultCurrentTabId) != null ? _a : null);
    const isBackingOut = ref(false);
    const isClickFocus = ref(false);
    const rovingFocusGroupRef = ref(null);
    const { getItems } = inject(COLLECTION_INJECTION_KEY$1, void 0);
    const rovingFocusGroupRootStyle = computed(() => {
      return [
        {
          outline: "none"
        },
        props.style
      ];
    });
    const onItemFocus = (tabbedId) => {
      emit(CURRENT_TAB_ID_CHANGE_EVT, tabbedId);
    };
    const onItemShiftTab = () => {
      isBackingOut.value = true;
    };
    const onMousedown = composeEventHandlers((e) => {
      var _a2;
      (_a2 = props.onMousedown) == null ? void 0 : _a2.call(props, e);
    }, () => {
      isClickFocus.value = true;
    });
    const onFocus = composeEventHandlers((e) => {
      var _a2;
      (_a2 = props.onFocus) == null ? void 0 : _a2.call(props, e);
    }, (e) => {
      const isKeyboardFocus = !unref(isClickFocus);
      const { target, currentTarget } = e;
      if (target === currentTarget && isKeyboardFocus && !unref(isBackingOut)) {
        const entryFocusEvt = new Event(ENTRY_FOCUS_EVT, EVT_OPTS);
        currentTarget == null ? void 0 : currentTarget.dispatchEvent(entryFocusEvt);
        if (!entryFocusEvt.defaultPrevented) {
          const items = getItems().filter((item) => item.focusable);
          const activeItem = items.find((item) => item.active);
          const currentItem = items.find((item) => item.id === unref(currentTabbedId));
          const candidates = [activeItem, currentItem, ...items].filter(Boolean);
          const candidateNodes = candidates.map((item) => item.ref);
          focusFirst(candidateNodes);
        }
      }
      isClickFocus.value = false;
    });
    const onBlur = composeEventHandlers((e) => {
      var _a2;
      (_a2 = props.onBlur) == null ? void 0 : _a2.call(props, e);
    }, () => {
      isBackingOut.value = false;
    });
    const handleEntryFocus = (...args) => {
      emit("entryFocus", ...args);
    };
    provide(ROVING_FOCUS_GROUP_INJECTION_KEY, {
      currentTabbedId: readonly(currentTabbedId),
      loop: toRef(props, "loop"),
      tabIndex: computed(() => {
        return unref(isBackingOut) ? -1 : 0;
      }),
      rovingFocusGroupRef,
      rovingFocusGroupRootStyle,
      orientation: toRef(props, "orientation"),
      dir: toRef(props, "dir"),
      onItemFocus,
      onItemShiftTab,
      onBlur,
      onFocus,
      onMousedown
    });
    watch(() => props.currentTabId, (val) => {
      currentTabbedId.value = val != null ? val : null;
    });
    onMounted(() => {
      const rovingFocusGroupEl = unref(rovingFocusGroupRef);
      on(rovingFocusGroupEl, ENTRY_FOCUS_EVT, handleEntryFocus);
    });
    onBeforeUnmount(() => {
      const rovingFocusGroupEl = unref(rovingFocusGroupRef);
      off(rovingFocusGroupEl, ENTRY_FOCUS_EVT, handleEntryFocus);
    });
  }
});
function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
  return renderSlot(_ctx.$slots, "default");
}
var ElRovingFocusGroupImpl = /* @__PURE__ */ _export_sfc$2(_sfc_main$s, [["render", _sfc_render$h], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group-impl.vue"]]);

const _sfc_main$r = defineComponent({
  name: "ElRovingFocusGroup",
  components: {
    ElFocusGroupCollection: ElCollection$1,
    ElRovingFocusGroupImpl
  }
});
function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_roving_focus_group_impl = resolveComponent("el-roving-focus-group-impl");
  const _component_el_focus_group_collection = resolveComponent("el-focus-group-collection");
  return openBlock(), createBlock(_component_el_focus_group_collection, null, {
    default: withCtx(() => [
      createVNode(_component_el_roving_focus_group_impl, normalizeProps(guardReactiveProps(_ctx.$attrs)), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16)
    ]),
    _: 3
  });
}
var ElRovingFocusGroup = /* @__PURE__ */ _export_sfc$2(_sfc_main$r, [["render", _sfc_render$g], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group.vue"]]);

const _sfc_main$q = defineComponent({
  components: {
    ElRovingFocusCollectionItem: ElCollectionItem$1
  },
  props: {
    focusable: {
      type: Boolean,
      default: true
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  emits: ["mousedown", "focus", "keydown"],
  setup(props, { emit }) {
    const { currentTabbedId, loop, onItemFocus, onItemShiftTab } = inject(ROVING_FOCUS_GROUP_INJECTION_KEY, void 0);
    const { getItems } = inject(COLLECTION_INJECTION_KEY$1, void 0);
    const id = useId();
    const rovingFocusGroupItemRef = ref(null);
    const handleMousedown = composeEventHandlers((e) => {
      emit("mousedown", e);
    }, (e) => {
      if (!props.focusable) {
        e.preventDefault();
      } else {
        onItemFocus(unref(id));
      }
    });
    const handleFocus = composeEventHandlers((e) => {
      emit("focus", e);
    }, () => {
      onItemFocus(unref(id));
    });
    const handleKeydown = composeEventHandlers((e) => {
      emit("keydown", e);
    }, (e) => {
      const { key, shiftKey, target, currentTarget } = e;
      if (key === EVENT_CODE.tab && shiftKey) {
        onItemShiftTab();
        return;
      }
      if (target !== currentTarget)
        return;
      const focusIntent = getFocusIntent(e);
      if (focusIntent) {
        e.preventDefault();
        const items = getItems().filter((item) => item.focusable);
        let elements = items.map((item) => item.ref);
        switch (focusIntent) {
          case "last": {
            elements.reverse();
            break;
          }
          case "prev":
          case "next": {
            if (focusIntent === "prev") {
              elements.reverse();
            }
            const currentIdx = elements.indexOf(currentTarget);
            elements = loop.value ? reorderArray(elements, currentIdx + 1) : elements.slice(currentIdx + 1);
            break;
          }
        }
        nextTick(() => {
          focusFirst(elements);
        });
      }
    });
    const isCurrentTab = computed(() => currentTabbedId.value === unref(id));
    provide(ROVING_FOCUS_GROUP_ITEM_INJECTION_KEY, {
      rovingFocusGroupItemRef,
      tabIndex: computed(() => unref(isCurrentTab) ? 0 : -1),
      handleMousedown,
      handleFocus,
      handleKeydown
    });
    return {
      id,
      handleKeydown,
      handleFocus,
      handleMousedown
    };
  }
});
function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_roving_focus_collection_item = resolveComponent("el-roving-focus-collection-item");
  return openBlock(), createBlock(_component_el_roving_focus_collection_item, {
    id: _ctx.id,
    focusable: _ctx.focusable,
    active: _ctx.active
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["id", "focusable", "active"]);
}
var ElRovingFocusItem = /* @__PURE__ */ _export_sfc$2(_sfc_main$q, [["render", _sfc_render$f], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-item.vue"]]);

const dropdownProps = buildProps({
  trigger: useTooltipTriggerProps.trigger,
  effect: {
    ...useTooltipContentProps.effect,
    default: "light"
  },
  type: {
    type: definePropType(String)
  },
  placement: {
    type: definePropType(String),
    default: "bottom"
  },
  popperOptions: {
    type: definePropType(Object),
    default: () => ({})
  },
  size: {
    type: String,
    default: ""
  },
  splitButton: Boolean,
  hideOnClick: {
    type: Boolean,
    default: true
  },
  loop: {
    type: Boolean
  },
  showTimeout: {
    type: Number,
    default: 150
  },
  hideTimeout: {
    type: Number,
    default: 150
  },
  tabindex: {
    type: definePropType([Number, String]),
    default: 0
  },
  maxHeight: {
    type: definePropType([Number, String]),
    default: ""
  },
  popperClass: {
    type: String,
    default: ""
  },
  disabled: {
    type: Boolean,
    default: false
  },
  buttonProps: {
    type: definePropType(Object)
  }
});
const dropdownItemProps = buildProps({
  command: {
    type: [Object, String, Number],
    default: () => ({})
  },
  disabled: Boolean,
  divided: Boolean,
  textValue: String,
  icon: {
    type: iconPropType
  }
});
const dropdownMenuProps = buildProps({
  onKeydown: { type: definePropType(Function) }
});
const FIRST_KEYS = [
  EVENT_CODE.down,
  EVENT_CODE.pageDown,
  EVENT_CODE.home
];
const LAST_KEYS = [EVENT_CODE.up, EVENT_CODE.pageUp, EVENT_CODE.end];
const FIRST_LAST_KEYS = [...FIRST_KEYS, ...LAST_KEYS];
const {
  ElCollection,
  ElCollectionItem,
  COLLECTION_INJECTION_KEY,
  COLLECTION_ITEM_INJECTION_KEY
} = createCollectionWithScope("Dropdown");

const DROPDOWN_INJECTION_KEY = Symbol("elDropdown");

const { ButtonGroup: ElButtonGroup } = ElButton;
const _sfc_main$p = defineComponent({
  name: "ElDropdown",
  components: {
    ElButton,
    ElFocusTrap,
    ElButtonGroup,
    ElScrollbar,
    ElDropdownCollection: ElCollection,
    ElTooltip,
    ElRovingFocusGroup,
    ElIcon,
    ArrowDown: arrowDown
  },
  props: dropdownProps,
  emits: ["visible-change", "click", "command"],
  setup(props, { emit }) {
    const _instance = getCurrentInstance();
    const ns = useNamespace("dropdown");
    const triggeringElementRef = ref();
    const referenceElementRef = ref();
    const popperRef = ref(null);
    const contentRef = ref(null);
    const scrollbar = ref(null);
    const currentTabId = ref(null);
    const isUsingKeyboard = ref(false);
    const wrapStyle = computed(() => ({
      maxHeight: addUnit(props.maxHeight)
    }));
    const dropdownTriggerKls = computed(() => [ns.m(dropdownSize.value)]);
    function handleClick() {
      handleClose();
    }
    function handleClose() {
      var _a;
      (_a = popperRef.value) == null ? void 0 : _a.onClose();
    }
    function handleOpen() {
      var _a;
      (_a = popperRef.value) == null ? void 0 : _a.onOpen();
    }
    const dropdownSize = useSize();
    function commandHandler(...args) {
      emit("command", ...args);
    }
    function onItemEnter() {
    }
    function onItemLeave() {
      const contentEl = unref(contentRef);
      contentEl == null ? void 0 : contentEl.focus();
      currentTabId.value = null;
    }
    function handleCurrentTabIdChange(id) {
      currentTabId.value = id;
    }
    function handleEntryFocus(e) {
      if (!isUsingKeyboard.value) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    }
    provide(DROPDOWN_INJECTION_KEY, {
      contentRef,
      isUsingKeyboard,
      onItemEnter,
      onItemLeave
    });
    provide("elDropdown", {
      instance: _instance,
      dropdownSize,
      handleClick,
      commandHandler,
      trigger: toRef(props, "trigger"),
      hideOnClick: toRef(props, "hideOnClick")
    });
    const onMountOnFocus = (e) => {
      var _a, _b;
      e.preventDefault();
      (_b = (_a = contentRef.value) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a, {
        preventScroll: true
      });
    };
    const handlerMainButtonClick = (event) => {
      emit("click", event);
    };
    return {
      ns,
      scrollbar,
      wrapStyle,
      dropdownTriggerKls,
      dropdownSize,
      currentTabId,
      handleCurrentTabIdChange,
      handlerMainButtonClick,
      handleEntryFocus,
      handleClose,
      handleOpen,
      onMountOnFocus,
      popperRef,
      triggeringElementRef,
      referenceElementRef
    };
  }
});
function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  const _component_el_dropdown_collection = resolveComponent("el-dropdown-collection");
  const _component_el_roving_focus_group = resolveComponent("el-roving-focus-group");
  const _component_el_focus_trap = resolveComponent("el-focus-trap");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  const _component_el_tooltip = resolveComponent("el-tooltip");
  const _component_el_button = resolveComponent("el-button");
  const _component_arrow_down = resolveComponent("arrow-down");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_button_group = resolveComponent("el-button-group");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([_ctx.ns.b(), _ctx.ns.is("disabled", _ctx.disabled)])
  }, [
    createVNode(_component_el_tooltip, {
      ref: "popperRef",
      effect: _ctx.effect,
      "fallback-placements": ["bottom", "top"],
      "popper-options": _ctx.popperOptions,
      "gpu-acceleration": false,
      "hide-after": _ctx.trigger === "hover" ? _ctx.hideTimeout : 0,
      "manual-mode": true,
      placement: _ctx.placement,
      "popper-class": [_ctx.ns.e("popper"), _ctx.popperClass],
      "reference-element": (_a = _ctx.referenceElementRef) == null ? void 0 : _a.$el,
      trigger: _ctx.trigger,
      "show-after": _ctx.trigger === "hover" ? _ctx.showTimeout : 0,
      "stop-popper-mouse-event": false,
      "virtual-ref": _ctx.triggeringElementRef,
      "virtual-triggering": _ctx.splitButton,
      disabled: _ctx.disabled,
      "append-to-body": "",
      pure: "",
      transition: `${_ctx.ns.namespace.value}-zoom-in-top`,
      persistent: "",
      onShow: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("visible-change", true)),
      onHide: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("visible-change", false))
    }, createSlots({
      content: withCtx(() => [
        createVNode(_component_el_scrollbar, {
          ref: "scrollbar",
          "wrap-style": _ctx.wrapStyle,
          tag: "div",
          "view-class": _ctx.ns.e("list")
        }, {
          default: withCtx(() => [
            createVNode(_component_el_focus_trap, {
              trapped: "",
              onMountOnFocus: _ctx.onMountOnFocus
            }, {
              default: withCtx(() => [
                createVNode(_component_el_roving_focus_group, {
                  loop: _ctx.loop,
                  "current-tab-id": _ctx.currentTabId,
                  orientation: "horizontal",
                  onCurrentTabIdChange: _ctx.handleCurrentTabIdChange,
                  onEntryFocus: _ctx.handleEntryFocus
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_dropdown_collection, null, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "dropdown")
                      ]),
                      _: 3
                    })
                  ]),
                  _: 3
                }, 8, ["loop", "current-tab-id", "onCurrentTabIdChange", "onEntryFocus"])
              ]),
              _: 3
            }, 8, ["onMountOnFocus"])
          ]),
          _: 3
        }, 8, ["wrap-style", "view-class"])
      ]),
      _: 2
    }, [
      !_ctx.splitButton ? {
        name: "default",
        fn: withCtx(() => [
          createElementVNode("div", {
            class: normalizeClass(_ctx.dropdownTriggerKls)
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 2)
        ])
      } : void 0
    ]), 1032, ["effect", "popper-options", "hide-after", "placement", "popper-class", "reference-element", "trigger", "show-after", "virtual-ref", "virtual-triggering", "disabled", "transition"]),
    _ctx.splitButton ? (openBlock(), createBlock(_component_el_button_group, { key: 0 }, {
      default: withCtx(() => [
        createVNode(_component_el_button, mergeProps({ ref: "referenceElementRef" }, _ctx.buttonProps, {
          size: _ctx.dropdownSize,
          type: _ctx.type,
          disabled: _ctx.disabled,
          onClick: _ctx.handlerMainButtonClick
        }), {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 16, ["size", "type", "disabled", "onClick"]),
        createVNode(_component_el_button, mergeProps({ ref: "triggeringElementRef" }, _ctx.buttonProps, {
          size: _ctx.dropdownSize,
          type: _ctx.type,
          class: _ctx.ns.e("caret-button"),
          disabled: _ctx.disabled
        }), {
          default: withCtx(() => [
            createVNode(_component_el_icon, {
              class: normalizeClass(_ctx.ns.e("icon"))
            }, {
              default: withCtx(() => [
                createVNode(_component_arrow_down)
              ]),
              _: 1
            }, 8, ["class"])
          ]),
          _: 1
        }, 16, ["size", "type", "class", "disabled"])
      ]),
      _: 3
    })) : createCommentVNode("v-if", true)
  ], 2);
}
var Dropdown = /* @__PURE__ */ _export_sfc$2(_sfc_main$p, [["render", _sfc_render$e], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown.vue"]]);

const _sfc_main$o = defineComponent({
  name: "DropdownItemImpl",
  components: {
    ElIcon
  },
  props: dropdownItemProps,
  emits: ["pointermove", "pointerleave", "click", "clickimpl"],
  setup(_, { emit }) {
    const ns = useNamespace("dropdown");
    const { collectionItemRef: dropdownCollectionItemRef } = inject(COLLECTION_ITEM_INJECTION_KEY, void 0);
    const { collectionItemRef: rovingFocusCollectionItemRef } = inject(COLLECTION_ITEM_INJECTION_KEY$1, void 0);
    const {
      rovingFocusGroupItemRef,
      tabIndex,
      handleFocus,
      handleKeydown: handleItemKeydown,
      handleMousedown
    } = inject(ROVING_FOCUS_GROUP_ITEM_INJECTION_KEY, void 0);
    const itemRef = composeRefs(dropdownCollectionItemRef, rovingFocusCollectionItemRef, rovingFocusGroupItemRef);
    const handleKeydown = composeEventHandlers((e) => {
      const { code } = e;
      if (code === EVENT_CODE.enter || code === EVENT_CODE.space) {
        e.preventDefault();
        e.stopImmediatePropagation();
        emit("clickimpl", e);
        return true;
      }
    }, handleItemKeydown);
    return {
      ns,
      itemRef,
      dataset: {
        [COLLECTION_ITEM_SIGN]: ""
      },
      tabIndex,
      handleFocus,
      handleKeydown,
      handleMousedown
    };
  }
});
const _hoisted_1$k = ["aria-disabled", "tabindex"];
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_icon = resolveComponent("el-icon");
  return openBlock(), createElementBlock(Fragment, null, [
    _ctx.divided ? (openBlock(), createElementBlock("li", mergeProps({
      key: 0,
      class: _ctx.ns.bem("menu", "item", "divided")
    }, _ctx.$attrs), null, 16)) : createCommentVNode("v-if", true),
    createElementVNode("li", mergeProps({ ref: _ctx.itemRef }, { ..._ctx.dataset, ..._ctx.$attrs }, {
      "aria-disabled": _ctx.disabled,
      class: [_ctx.ns.be("menu", "item"), _ctx.ns.is("disabled", _ctx.disabled)],
      tabindex: _ctx.tabIndex,
      role: "menuitem",
      onClick: _cache[0] || (_cache[0] = (e) => _ctx.$emit("clickimpl", e)),
      onFocus: _cache[1] || (_cache[1] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args)),
      onKeydown: _cache[2] || (_cache[2] = (...args) => _ctx.handleKeydown && _ctx.handleKeydown(...args)),
      onMousedown: _cache[3] || (_cache[3] = (...args) => _ctx.handleMousedown && _ctx.handleMousedown(...args)),
      onPointermove: _cache[4] || (_cache[4] = (e) => _ctx.$emit("pointermove", e)),
      onPointerleave: _cache[5] || (_cache[5] = (e) => _ctx.$emit("pointerleave", e))
    }), [
      _ctx.icon ? (openBlock(), createBlock(_component_el_icon, { key: 0 }, {
        default: withCtx(() => [
          (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon)))
        ]),
        _: 1
      })) : createCommentVNode("v-if", true),
      renderSlot(_ctx.$slots, "default")
    ], 16, _hoisted_1$k)
  ], 64);
}
var ElDropdownItemImpl = /* @__PURE__ */ _export_sfc$2(_sfc_main$o, [["render", _sfc_render$d], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item-impl.vue"]]);

const useDropdown = () => {
  const elDropdown = inject("elDropdown", {});
  const _elDropdownSize = computed(() => elDropdown == null ? void 0 : elDropdown.dropdownSize);
  return {
    elDropdown,
    _elDropdownSize
  };
};

const _sfc_main$n = defineComponent({
  name: "ElDropdownItem",
  components: {
    ElDropdownCollectionItem: ElCollectionItem,
    ElRovingFocusItem,
    ElDropdownItemImpl
  },
  inheritAttrs: false,
  props: dropdownItemProps,
  emits: ["pointermove", "pointerleave", "click"],
  setup(props, { emit, attrs }) {
    const { elDropdown } = useDropdown();
    const _instance = getCurrentInstance();
    const itemRef = ref(null);
    const textContent = computed(() => {
      var _a, _b;
      return (_b = (_a = unref(itemRef)) == null ? void 0 : _a.textContent) != null ? _b : "";
    });
    const { onItemEnter, onItemLeave } = inject(DROPDOWN_INJECTION_KEY, void 0);
    const handlePointerMove = composeEventHandlers((e) => {
      emit("pointermove", e);
      return e.defaultPrevented;
    }, whenMouse((e) => {
      var _a;
      if (props.disabled) {
        onItemLeave(e);
      } else {
        onItemEnter(e);
        if (!e.defaultPrevented) {
          (_a = e.currentTarget) == null ? void 0 : _a.focus();
        }
      }
    }));
    const handlePointerLeave = composeEventHandlers((e) => {
      emit("pointerleave", e);
      return e.defaultPrevented;
    }, whenMouse((e) => {
      onItemLeave(e);
    }));
    const handleClick = composeEventHandlers((e) => {
      emit("click", e);
      return e.defaultPrevented;
    }, (e) => {
      var _a, _b, _c;
      if (props.disabled) {
        e.stopImmediatePropagation();
        return;
      }
      if ((_a = elDropdown == null ? void 0 : elDropdown.hideOnClick) == null ? void 0 : _a.value) {
        (_b = elDropdown.handleClick) == null ? void 0 : _b.call(elDropdown);
      }
      (_c = elDropdown.commandHandler) == null ? void 0 : _c.call(elDropdown, props.command, _instance, e);
    });
    const propsAndAttrs = computed(() => {
      return { ...props, ...attrs };
    });
    return {
      handleClick,
      handlePointerMove,
      handlePointerLeave,
      textContent,
      propsAndAttrs
    };
  }
});
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  const _component_el_dropdown_item_impl = resolveComponent("el-dropdown-item-impl");
  const _component_el_roving_focus_item = resolveComponent("el-roving-focus-item");
  const _component_el_dropdown_collection_item = resolveComponent("el-dropdown-collection-item");
  return openBlock(), createBlock(_component_el_dropdown_collection_item, {
    disabled: _ctx.disabled,
    "text-value": (_a = _ctx.textValue) != null ? _a : _ctx.textContent
  }, {
    default: withCtx(() => [
      createVNode(_component_el_roving_focus_item, {
        focusable: !_ctx.disabled
      }, {
        default: withCtx(() => [
          createVNode(_component_el_dropdown_item_impl, mergeProps(_ctx.propsAndAttrs, {
            onPointerleave: _ctx.handlePointerLeave,
            onPointermove: _ctx.handlePointerMove,
            onClickimpl: _ctx.handleClick
          }), {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default")
            ]),
            _: 3
          }, 16, ["onPointerleave", "onPointermove", "onClickimpl"])
        ]),
        _: 3
      }, 8, ["focusable"])
    ]),
    _: 3
  }, 8, ["disabled", "text-value"]);
}
var DropdownItem = /* @__PURE__ */ _export_sfc$2(_sfc_main$n, [["render", _sfc_render$c], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item.vue"]]);

const _sfc_main$m = defineComponent({
  name: "ElDropdownMenu",
  props: dropdownMenuProps,
  setup(props) {
    const ns = useNamespace("dropdown");
    const { _elDropdownSize } = useDropdown();
    const size = _elDropdownSize.value;
    const { focusTrapRef, onKeydown } = inject(FOCUS_TRAP_INJECTION_KEY, void 0);
    const { contentRef } = inject(DROPDOWN_INJECTION_KEY, void 0);
    const { collectionRef: dropdownCollectionRef, getItems } = inject(COLLECTION_INJECTION_KEY, void 0);
    const {
      rovingFocusGroupRef,
      rovingFocusGroupRootStyle,
      tabIndex,
      onBlur,
      onFocus,
      onMousedown
    } = inject(ROVING_FOCUS_GROUP_INJECTION_KEY, void 0);
    const { collectionRef: rovingFocusGroupCollectionRef } = inject(COLLECTION_INJECTION_KEY$1, void 0);
    const dropdownKls = computed(() => {
      return [ns.b("menu"), ns.bm("menu", size == null ? void 0 : size.value)];
    });
    const dropdownListWrapperRef = composeRefs(contentRef, dropdownCollectionRef, focusTrapRef, rovingFocusGroupRef, rovingFocusGroupCollectionRef);
    const composedKeydown = composeEventHandlers((e) => {
      var _a;
      (_a = props.onKeydown) == null ? void 0 : _a.call(props, e);
    }, (e) => {
      const { currentTarget, code, target } = e;
      currentTarget.contains(target);
      if (EVENT_CODE.tab === code) {
        e.stopImmediatePropagation();
      }
      e.preventDefault();
      if (target !== unref(contentRef))
        return;
      if (!FIRST_LAST_KEYS.includes(code))
        return;
      const items = getItems().filter((item) => !item.disabled);
      const targets = items.map((item) => item.ref);
      if (LAST_KEYS.includes(code)) {
        targets.reverse();
      }
      focusFirst(targets);
    });
    const handleKeydown = (e) => {
      composedKeydown(e);
      onKeydown(e);
    };
    return {
      size,
      rovingFocusGroupRootStyle,
      tabIndex,
      dropdownKls,
      dropdownListWrapperRef,
      handleKeydown,
      onBlur,
      onFocus,
      onMousedown
    };
  }
});
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("ul", {
    ref: _ctx.dropdownListWrapperRef,
    class: normalizeClass(_ctx.dropdownKls),
    style: normalizeStyle(_ctx.rovingFocusGroupRootStyle),
    tabindex: -1,
    role: "menu",
    onBlur: _cache[0] || (_cache[0] = (...args) => _ctx.onBlur && _ctx.onBlur(...args)),
    onFocus: _cache[1] || (_cache[1] = (...args) => _ctx.onFocus && _ctx.onFocus(...args)),
    onKeydown: _cache[2] || (_cache[2] = (...args) => _ctx.handleKeydown && _ctx.handleKeydown(...args)),
    onMousedown: _cache[3] || (_cache[3] = (...args) => _ctx.onMousedown && _ctx.onMousedown(...args))
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 38);
}
var DropdownMenu = /* @__PURE__ */ _export_sfc$2(_sfc_main$m, [["render", _sfc_render$b], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-menu.vue"]]);

const ElDropdown = withInstall(Dropdown, {
  DropdownItem,
  DropdownMenu
});
const ElDropdownItem = withNoopInstall(DropdownItem);
const ElDropdownMenu = withNoopInstall(DropdownMenu);

class SubMenu$1 {
  constructor(parent, domNode) {
    this.parent = parent;
    this.domNode = domNode;
    this.subIndex = 0;
    this.subIndex = 0;
    this.init();
  }
  init() {
    this.subMenuItems = this.domNode.querySelectorAll("li");
    this.addListeners();
  }
  gotoSubIndex(idx) {
    if (idx === this.subMenuItems.length) {
      idx = 0;
    } else if (idx < 0) {
      idx = this.subMenuItems.length - 1;
    }
    this.subMenuItems[idx].focus();
    this.subIndex = idx;
  }
  addListeners() {
    const parentNode = this.parent.domNode;
    Array.prototype.forEach.call(this.subMenuItems, (el) => {
      el.addEventListener("keydown", (event) => {
        let prevDef = false;
        switch (event.code) {
          case EVENT_CODE.down: {
            this.gotoSubIndex(this.subIndex + 1);
            prevDef = true;
            break;
          }
          case EVENT_CODE.up: {
            this.gotoSubIndex(this.subIndex - 1);
            prevDef = true;
            break;
          }
          case EVENT_CODE.tab: {
            triggerEvent(parentNode, "mouseleave");
            break;
          }
          case EVENT_CODE.enter:
          case EVENT_CODE.space: {
            prevDef = true;
            event.currentTarget.click();
            break;
          }
        }
        if (prevDef) {
          event.preventDefault();
          event.stopPropagation();
        }
        return false;
      });
    });
  }
}

class MenuItem$1 {
  constructor(domNode, namespace) {
    this.domNode = domNode;
    this.submenu = null;
    this.submenu = null;
    this.init(namespace);
  }
  init(namespace) {
    this.domNode.setAttribute("tabindex", "0");
    const menuChild = this.domNode.querySelector(`.${namespace}-menu`);
    if (menuChild) {
      this.submenu = new SubMenu$1(this, menuChild);
    }
    this.addListeners();
  }
  addListeners() {
    this.domNode.addEventListener("keydown", (event) => {
      let prevDef = false;
      switch (event.code) {
        case EVENT_CODE.down: {
          triggerEvent(event.currentTarget, "mouseenter");
          this.submenu && this.submenu.gotoSubIndex(0);
          prevDef = true;
          break;
        }
        case EVENT_CODE.up: {
          triggerEvent(event.currentTarget, "mouseenter");
          this.submenu && this.submenu.gotoSubIndex(this.submenu.subMenuItems.length - 1);
          prevDef = true;
          break;
        }
        case EVENT_CODE.tab: {
          triggerEvent(event.currentTarget, "mouseleave");
          break;
        }
        case EVENT_CODE.enter:
        case EVENT_CODE.space: {
          prevDef = true;
          event.currentTarget.click();
          break;
        }
      }
      if (prevDef) {
        event.preventDefault();
      }
    });
  }
}

class Menu$1 {
  constructor(domNode, namespace) {
    this.domNode = domNode;
    this.init(namespace);
  }
  init(namespace) {
    const menuChildren = this.domNode.childNodes;
    Array.from(menuChildren).forEach((child) => {
      if (child.nodeType === 1) {
        new MenuItem$1(child, namespace);
      }
    });
  }
}

const _sfc_main$l = defineComponent({
  name: "ElMenuCollapseTransition",
  setup() {
    const ns = useNamespace("menu");
    const listeners = {
      onBeforeEnter: (el) => el.style.opacity = "0.2",
      onEnter(el, done) {
        addClass(el, `${ns.namespace.value}-opacity-transition`);
        el.style.opacity = "1";
        done();
      },
      onAfterEnter(el) {
        removeClass(el, `${ns.namespace.value}-opacity-transition`);
        el.style.opacity = "";
      },
      onBeforeLeave(el) {
        if (!el.dataset) {
          el.dataset = {};
        }
        if (hasClass(el, ns.m("collapse"))) {
          removeClass(el, ns.m("collapse"));
          el.dataset.oldOverflow = el.style.overflow;
          el.dataset.scrollWidth = el.clientWidth.toString();
          addClass(el, ns.m("collapse"));
        } else {
          addClass(el, ns.m("collapse"));
          el.dataset.oldOverflow = el.style.overflow;
          el.dataset.scrollWidth = el.clientWidth.toString();
          removeClass(el, ns.m("collapse"));
        }
        el.style.width = `${el.scrollWidth}px`;
        el.style.overflow = "hidden";
      },
      onLeave(el) {
        addClass(el, "horizontal-collapse-transition");
        el.style.width = `${el.dataset.scrollWidth}px`;
      }
    };
    return {
      listeners
    };
  }
});
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, mergeProps({ mode: "out-in" }, _ctx.listeners), {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 16);
}
var ElMenuCollapseTransition = /* @__PURE__ */ _export_sfc$2(_sfc_main$l, [["render", _sfc_render$a], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-collapse-transition.vue"]]);

function useMenu(instance, currentIndex) {
  const rootMenu = inject("rootMenu");
  if (!rootMenu)
    throwError("useMenu", "can not inject root menu");
  const indexPath = computed(() => {
    let parent = instance.parent;
    const path = [currentIndex.value];
    while (parent.type.name !== "ElMenu") {
      if (parent.props.index) {
        path.unshift(parent.props.index);
      }
      parent = parent.parent;
    }
    return path;
  });
  const parentMenu = computed(() => {
    let parent = instance.parent;
    while (parent && !["ElMenu", "ElSubMenu"].includes(parent.type.name)) {
      parent = parent.parent;
    }
    return parent;
  });
  const paddingStyle = computed(() => {
    let parent = instance.parent;
    if (rootMenu.props.mode !== "vertical")
      return {};
    let padding = 20;
    if (rootMenu.props.collapse) {
      padding = 20;
    } else {
      while (parent && parent.type.name !== "ElMenu") {
        if (parent.type.name === "ElSubMenu") {
          padding += 20;
        }
        parent = parent.parent;
      }
    }
    return { paddingLeft: `${padding}px` };
  });
  return {
    parentMenu,
    paddingStyle,
    indexPath
  };
}

function useMenuColor(props) {
  const menuBarColor = computed(() => {
    const color = props.backgroundColor;
    if (!color) {
      return "";
    } else {
      return new TinyColor(color).shade(20).toString();
    }
  });
  return menuBarColor;
}

const useMenuCssVar = (props) => {
  return computed(() => {
    return {
      "--el-menu-text-color": props.textColor || "",
      "--el-menu-hover-text-color": props.textColor || "",
      "--el-menu-bg-color": props.backgroundColor || "",
      "--el-menu-hover-bg-color": useMenuColor(props).value || "",
      "--el-menu-active-color": props.activeTextColor || ""
    };
  });
};

const subMenuProps = buildProps({
  index: {
    type: String,
    required: true
  },
  showTimeout: {
    type: Number,
    default: 300
  },
  hideTimeout: {
    type: Number,
    default: 300
  },
  popperClass: String,
  disabled: Boolean,
  popperAppendToBody: {
    type: Boolean,
    default: void 0
  },
  popperOffset: {
    type: Number,
    default: 6
  }
});
const COMPONENT_NAME$3 = "ElSubMenu";
var SubMenu = defineComponent({
  name: COMPONENT_NAME$3,
  props: subMenuProps,
  setup(props, { slots, expose }) {
    const instance = getCurrentInstance();
    const { paddingStyle, indexPath, parentMenu } = useMenu(instance, computed(() => props.index));
    const nsMenu = useNamespace("menu");
    const nsSubMenu = useNamespace("sub-menu");
    const rootMenu = inject("rootMenu");
    if (!rootMenu)
      throwError(COMPONENT_NAME$3, "can not inject root menu");
    const subMenu = inject(`subMenu:${parentMenu.value.uid}`);
    if (!subMenu)
      throwError(COMPONENT_NAME$3, "can not inject sub menu");
    const items = ref({});
    const subMenus = ref({});
    let timeout;
    const mouseInChild = ref(false);
    const verticalTitleRef = ref();
    const vPopper = ref(null);
    const currentPlacement = computed(() => mode.value === "horizontal" && isFirstLevel.value ? "bottom-start" : "right-start");
    const subMenuTitleIcon = computed(() => {
      return mode.value === "horizontal" && isFirstLevel.value || mode.value === "vertical" && !rootMenu.props.collapse ? arrowDown : arrowRight;
    });
    const isFirstLevel = computed(() => {
      let isFirstLevel2 = true;
      let parent = instance.parent;
      while (parent && parent.type.name !== "ElMenu") {
        if (["ElSubMenu", "ElMenuItemGroup"].includes(parent.type.name)) {
          isFirstLevel2 = false;
          break;
        } else {
          parent = parent.parent;
        }
      }
      return isFirstLevel2;
    });
    const appendToBody = computed(() => {
      return props.popperAppendToBody === void 0 ? isFirstLevel.value : Boolean(props.popperAppendToBody);
    });
    const menuTransitionName = computed(() => rootMenu.props.collapse ? `${nsMenu.namespace.value}-zoom-in-left` : `${nsMenu.namespace.value}-zoom-in-top`);
    const fallbackPlacements = computed(() => mode.value === "horizontal" && isFirstLevel.value ? [
      "bottom-start",
      "bottom-end",
      "top-start",
      "top-end",
      "right-start",
      "left-start"
    ] : [
      "right-start",
      "left-start",
      "bottom-start",
      "bottom-end",
      "top-start",
      "top-end"
    ]);
    const opened = computed(() => rootMenu.openedMenus.includes(props.index));
    const active = computed(() => {
      let isActive = false;
      Object.values(items.value).forEach((item2) => {
        if (item2.active) {
          isActive = true;
        }
      });
      Object.values(subMenus.value).forEach((subItem) => {
        if (subItem.active) {
          isActive = true;
        }
      });
      return isActive;
    });
    const backgroundColor = computed(() => rootMenu.props.backgroundColor || "");
    const activeTextColor = computed(() => rootMenu.props.activeTextColor || "");
    const textColor = computed(() => rootMenu.props.textColor || "");
    const mode = computed(() => rootMenu.props.mode);
    const item = reactive({
      index: props.index,
      indexPath,
      active
    });
    const titleStyle = computed(() => {
      if (mode.value !== "horizontal") {
        return {
          color: textColor.value
        };
      }
      return {
        borderBottomColor: active.value ? rootMenu.props.activeTextColor ? activeTextColor.value : "" : "transparent",
        color: active.value ? activeTextColor.value : textColor.value
      };
    });
    const doDestroy = () => {
      var _a, _b, _c;
      return (_c = (_b = (_a = vPopper.value) == null ? void 0 : _a.popperRef) == null ? void 0 : _b.popperInstanceRef) == null ? void 0 : _c.destroy();
    };
    const handleCollapseToggle = (value) => {
      if (!value) {
        doDestroy();
      }
    };
    const handleClick = () => {
      if (rootMenu.props.menuTrigger === "hover" && rootMenu.props.mode === "horizontal" || rootMenu.props.collapse && rootMenu.props.mode === "vertical" || props.disabled)
        return;
      rootMenu.handleSubMenuClick({
        index: props.index,
        indexPath: indexPath.value,
        active: active.value
      });
    };
    const handleMouseenter = (event, showTimeout = props.showTimeout) => {
      var _a;
      if (event.type === "focus" && !event.relatedTarget) {
        return;
      }
      if (rootMenu.props.menuTrigger === "click" && rootMenu.props.mode === "horizontal" || !rootMenu.props.collapse && rootMenu.props.mode === "vertical" || props.disabled) {
        return;
      }
      subMenu.mouseInChild.value = true;
      timeout == null ? void 0 : timeout();
      ({ stop: timeout } = useTimeoutFn(() => {
        rootMenu.openMenu(props.index, indexPath.value);
      }, showTimeout));
      if (appendToBody.value) {
        (_a = parentMenu.value.vnode.el) == null ? void 0 : _a.dispatchEvent(new MouseEvent("mouseenter"));
      }
    };
    const handleMouseleave = (deepDispatch = false) => {
      var _a, _b;
      if (rootMenu.props.menuTrigger === "click" && rootMenu.props.mode === "horizontal" || !rootMenu.props.collapse && rootMenu.props.mode === "vertical") {
        return;
      }
      timeout == null ? void 0 : timeout();
      subMenu.mouseInChild.value = false;
      ({ stop: timeout } = useTimeoutFn(() => !mouseInChild.value && rootMenu.closeMenu(props.index, indexPath.value), props.hideTimeout));
      if (appendToBody.value && deepDispatch) {
        if (((_a = instance.parent) == null ? void 0 : _a.type.name) === "ElSubMenu") {
          (_b = subMenu.handleMouseleave) == null ? void 0 : _b.call(subMenu, true);
        }
      }
    };
    watch(() => rootMenu.props.collapse, (value) => handleCollapseToggle(Boolean(value)));
    {
      const addSubMenu = (item2) => {
        subMenus.value[item2.index] = item2;
      };
      const removeSubMenu = (item2) => {
        delete subMenus.value[item2.index];
      };
      provide(`subMenu:${instance.uid}`, {
        addSubMenu,
        removeSubMenu,
        handleMouseleave,
        mouseInChild
      });
    }
    expose({
      opened
    });
    onMounted(() => {
      rootMenu.addSubMenu(item);
      subMenu.addSubMenu(item);
    });
    onBeforeUnmount(() => {
      subMenu.removeSubMenu(item);
      rootMenu.removeSubMenu(item);
    });
    return () => {
      var _a;
      const titleTag = [
        (_a = slots.title) == null ? void 0 : _a.call(slots),
        h$1(ElIcon, {
          class: nsSubMenu.e("icon-arrow")
        }, { default: () => h$1(subMenuTitleIcon.value) })
      ];
      const ulStyle = useMenuCssVar(rootMenu.props);
      const child = rootMenu.isMenuPopup ? h$1(ElTooltip, {
        ref: vPopper,
        visible: opened.value,
        effect: "light",
        pure: true,
        offset: props.popperOffset,
        showArrow: false,
        persistent: true,
        popperClass: props.popperClass,
        placement: currentPlacement.value,
        teleported: appendToBody.value,
        fallbackPlacements: fallbackPlacements.value,
        transition: menuTransitionName.value,
        gpuAcceleration: false
      }, {
        content: () => {
          var _a2;
          return h$1("div", {
            class: [nsMenu.m(mode.value), props.popperClass],
            onMouseenter: (evt) => handleMouseenter(evt, 100),
            onMouseleave: () => handleMouseleave(true),
            onFocus: (evt) => handleMouseenter(evt, 100)
          }, [
            h$1("ul", {
              class: [
                nsMenu.b(),
                nsMenu.m("popup"),
                nsMenu.m(`popup-${currentPlacement.value}`)
              ],
              style: ulStyle.value
            }, [(_a2 = slots.default) == null ? void 0 : _a2.call(slots)])
          ]);
        },
        default: () => h$1("div", {
          class: nsSubMenu.e("title"),
          style: [
            paddingStyle.value,
            titleStyle.value,
            { backgroundColor: backgroundColor.value }
          ],
          onClick: handleClick
        }, titleTag)
      }) : h$1(Fragment, {}, [
        h$1("div", {
          class: nsSubMenu.e("title"),
          style: [
            paddingStyle.value,
            titleStyle.value,
            { backgroundColor: backgroundColor.value }
          ],
          ref: verticalTitleRef,
          onClick: handleClick
        }, titleTag),
        h$1(_CollapseTransition, {}, {
          default: () => {
            var _a2;
            return withDirectives(h$1("ul", {
              role: "menu",
              class: [nsMenu.b(), nsMenu.m("inline")],
              style: ulStyle.value
            }, [(_a2 = slots.default) == null ? void 0 : _a2.call(slots)]), [[vShow, opened.value]]);
          }
        })
      ]);
      return h$1("li", {
        class: [
          nsSubMenu.b(),
          nsSubMenu.is("active", active.value),
          nsSubMenu.is("opened", opened.value),
          nsSubMenu.is("disabled", props.disabled)
        ],
        role: "menuitem",
        ariaHaspopup: true,
        ariaExpanded: opened.value,
        onMouseenter: handleMouseenter,
        onMouseleave: () => handleMouseleave(true),
        onFocus: handleMouseenter
      }, [child]);
    };
  }
});

const menuProps = buildProps({
  mode: {
    type: String,
    values: ["horizontal", "vertical"],
    default: "vertical"
  },
  defaultActive: {
    type: String,
    default: ""
  },
  defaultOpeneds: {
    type: definePropType(Array),
    default: () => mutable([])
  },
  uniqueOpened: Boolean,
  router: Boolean,
  menuTrigger: {
    type: String,
    values: ["hover", "click"],
    default: "hover"
  },
  collapse: Boolean,
  backgroundColor: String,
  textColor: String,
  activeTextColor: String,
  collapseTransition: {
    type: Boolean,
    default: true
  },
  ellipsis: {
    type: Boolean,
    default: true
  }
});
const checkIndexPath = (indexPath) => Array.isArray(indexPath) && indexPath.every((path) => isString$1(path));
const menuEmits = {
  close: (index, indexPath) => isString$1(index) && checkIndexPath(indexPath),
  open: (index, indexPath) => isString$1(index) && checkIndexPath(indexPath),
  select: (index, indexPath, item, routerResult) => isString$1(index) && checkIndexPath(indexPath) && isObject$1(item) && (routerResult === void 0 || routerResult instanceof Promise)
};
var Menu = defineComponent({
  name: "ElMenu",
  props: menuProps,
  emits: menuEmits,
  setup(props, { emit, slots, expose }) {
    const instance = getCurrentInstance();
    const router = instance.appContext.config.globalProperties.$router;
    const menu = ref();
    const nsMenu = useNamespace("menu");
    const nsSubMenu = useNamespace("sub-menu");
    const openedMenus = ref(props.defaultOpeneds && !props.collapse ? props.defaultOpeneds.slice(0) : []);
    const activeIndex = ref(props.defaultActive);
    const items = ref({});
    const subMenus = ref({});
    const isMenuPopup = computed(() => {
      return props.mode === "horizontal" || props.mode === "vertical" && props.collapse;
    });
    const initMenu = () => {
      const activeItem = activeIndex.value && items.value[activeIndex.value];
      if (!activeItem || props.mode === "horizontal" || props.collapse)
        return;
      const indexPath = activeItem.indexPath;
      indexPath.forEach((index) => {
        const subMenu = subMenus.value[index];
        subMenu && openMenu(index, subMenu.indexPath);
      });
    };
    const openMenu = (index, indexPath) => {
      if (openedMenus.value.includes(index))
        return;
      if (props.uniqueOpened) {
        openedMenus.value = openedMenus.value.filter((index2) => indexPath.includes(index2));
      }
      openedMenus.value.push(index);
      emit("open", index, indexPath);
    };
    const closeMenu = (index, indexPath) => {
      const i = openedMenus.value.indexOf(index);
      if (i !== -1) {
        openedMenus.value.splice(i, 1);
      }
      emit("close", index, indexPath);
    };
    const handleSubMenuClick = ({
      index,
      indexPath
    }) => {
      const isOpened = openedMenus.value.includes(index);
      if (isOpened) {
        closeMenu(index, indexPath);
      } else {
        openMenu(index, indexPath);
      }
    };
    const handleMenuItemClick = (menuItem) => {
      if (props.mode === "horizontal" || props.collapse) {
        openedMenus.value = [];
      }
      const { index, indexPath } = menuItem;
      if (index === void 0 || indexPath === void 0)
        return;
      if (props.router && router) {
        const route = menuItem.route || index;
        const routerResult = router.push(route).then((res) => {
          if (!res)
            activeIndex.value = index;
          return res;
        });
        emit("select", index, indexPath, { index, indexPath, route }, routerResult);
      } else {
        activeIndex.value = index;
        emit("select", index, indexPath, { index, indexPath });
      }
    };
    const updateActiveIndex = (val) => {
      const itemsInData = items.value;
      const item = itemsInData[val] || activeIndex.value && itemsInData[activeIndex.value] || itemsInData[props.defaultActive];
      if (item) {
        activeIndex.value = item.index;
        initMenu();
      } else {
        activeIndex.value = val;
      }
    };
    const handleResize = () => {
      nextTick(() => instance.proxy.$forceUpdate());
    };
    watch(() => props.defaultActive, (currentActive) => {
      if (!items.value[currentActive]) {
        activeIndex.value = "";
      }
      updateActiveIndex(currentActive);
    });
    watch(items.value, () => initMenu());
    watch(() => props.collapse, (value) => {
      if (value)
        openedMenus.value = [];
    });
    {
      const addSubMenu = (item) => {
        subMenus.value[item.index] = item;
      };
      const removeSubMenu = (item) => {
        delete subMenus.value[item.index];
      };
      const addMenuItem = (item) => {
        items.value[item.index] = item;
      };
      const removeMenuItem = (item) => {
        delete items.value[item.index];
      };
      provide("rootMenu", reactive({
        props,
        openedMenus,
        items,
        subMenus,
        activeIndex,
        isMenuPopup,
        addMenuItem,
        removeMenuItem,
        addSubMenu,
        removeSubMenu,
        openMenu,
        closeMenu,
        handleMenuItemClick,
        handleSubMenuClick
      }));
      provide(`subMenu:${instance.uid}`, {
        addSubMenu,
        removeSubMenu,
        mouseInChild: ref(false)
      });
    }
    onMounted(() => {
      initMenu();
      if (props.mode === "horizontal") {
        new Menu$1(instance.vnode.el, nsMenu.namespace.value);
      }
    });
    {
      const open = (index) => {
        const { indexPath } = subMenus.value[index];
        indexPath.forEach((i) => openMenu(i, indexPath));
      };
      expose({
        open,
        close: closeMenu,
        handleResize
      });
    }
    const flattedChildren = (children) => {
      const vnodes = Array.isArray(children) ? children : [children];
      const result = [];
      vnodes.forEach((child) => {
        if (Array.isArray(child.children)) {
          result.push(...flattedChildren(child.children));
        } else {
          result.push(child);
        }
      });
      return result;
    };
    const useVNodeResize = (vnode) => props.mode === "horizontal" ? withDirectives(vnode, [[Resize, handleResize]]) : vnode;
    return () => {
      var _a, _b, _c, _d;
      let slot = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) != null ? _b : [];
      const vShowMore = [];
      if (props.mode === "horizontal" && menu.value) {
        const items2 = Array.from((_d = (_c = menu.value) == null ? void 0 : _c.childNodes) != null ? _d : []).filter((item) => item.nodeName !== "#text" || item.nodeValue);
        const originalSlot = flattedChildren(slot);
        const moreItemWidth = 64;
        const paddingLeft = Number.parseInt(getComputedStyle(menu.value).paddingLeft, 10);
        const paddingRight = Number.parseInt(getComputedStyle(menu.value).paddingRight, 10);
        const menuWidth = menu.value.clientWidth - paddingLeft - paddingRight;
        let calcWidth = 0;
        let sliceIndex = 0;
        items2.forEach((item, index) => {
          calcWidth += item.offsetWidth || 0;
          if (calcWidth <= menuWidth - moreItemWidth) {
            sliceIndex = index + 1;
          }
        });
        const slotDefault = originalSlot.slice(0, sliceIndex);
        const slotMore = originalSlot.slice(sliceIndex);
        if ((slotMore == null ? void 0 : slotMore.length) && props.ellipsis) {
          slot = slotDefault;
          vShowMore.push(h$1(SubMenu, {
            index: "sub-menu-more",
            class: nsSubMenu.e("hide-arrow")
          }, {
            title: () => h$1(ElIcon, {
              class: nsSubMenu.e("icon-more")
            }, { default: () => h$1(more) }),
            default: () => slotMore
          }));
        }
      }
      const ulStyle = useMenuCssVar(props);
      const resizeMenu = (vNode) => props.ellipsis ? useVNodeResize(vNode) : vNode;
      const vMenu = resizeMenu(h$1("ul", {
        key: String(props.collapse),
        role: "menubar",
        ref: menu,
        style: ulStyle.value,
        class: {
          [nsMenu.b()]: true,
          [nsMenu.m("horizontal")]: props.mode === "horizontal",
          [nsMenu.m("collapse")]: props.collapse
        }
      }, [...slot, ...vShowMore]));
      if (props.collapseTransition && props.mode === "vertical") {
        return h$1(ElMenuCollapseTransition, () => vMenu);
      }
      return vMenu;
    };
  }
});

const menuItemProps = buildProps({
  index: {
    type: definePropType([String, null]),
    default: null
  },
  route: {
    type: definePropType([String, Object])
  },
  disabled: Boolean
});
const menuItemEmits = {
  click: (item) => isString$1(item.index) && Array.isArray(item.indexPath)
};

const COMPONENT_NAME$2 = "ElMenuItem";
const _sfc_main$k = defineComponent({
  name: COMPONENT_NAME$2,
  components: {
    ElTooltip
  },
  props: menuItemProps,
  emits: menuItemEmits,
  setup(props, { emit }) {
    const instance = getCurrentInstance();
    const rootMenu = inject("rootMenu");
    const nsMenu = useNamespace("menu");
    const nsMenuItem = useNamespace("menu-item");
    if (!rootMenu)
      throwError(COMPONENT_NAME$2, "can not inject root menu");
    const { parentMenu, paddingStyle, indexPath } = useMenu(instance, toRef(props, "index"));
    const subMenu = inject(`subMenu:${parentMenu.value.uid}`);
    if (!subMenu)
      throwError(COMPONENT_NAME$2, "can not inject sub menu");
    const active = computed(() => props.index === rootMenu.activeIndex);
    const item = reactive({
      index: props.index,
      indexPath,
      active
    });
    const handleClick = () => {
      if (!props.disabled) {
        rootMenu.handleMenuItemClick({
          index: props.index,
          indexPath: indexPath.value,
          route: props.route
        });
        emit("click", item);
      }
    };
    onMounted(() => {
      subMenu.addSubMenu(item);
      rootMenu.addMenuItem(item);
    });
    onBeforeUnmount(() => {
      subMenu.removeSubMenu(item);
      rootMenu.removeMenuItem(item);
    });
    return {
      Effect,
      parentMenu,
      rootMenu,
      paddingStyle,
      active,
      nsMenu,
      nsMenuItem,
      handleClick
    };
  }
});
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tooltip = resolveComponent("el-tooltip");
  return openBlock(), createElementBlock("li", {
    class: normalizeClass([
      _ctx.nsMenuItem.b(),
      _ctx.nsMenuItem.is("active", _ctx.active),
      _ctx.nsMenuItem.is("disabled", _ctx.disabled)
    ]),
    role: "menuitem",
    tabindex: "-1",
    style: normalizeStyle(_ctx.paddingStyle),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [
    _ctx.parentMenu.type.name === "ElMenu" && _ctx.rootMenu.props.collapse && _ctx.$slots.title ? (openBlock(), createBlock(_component_el_tooltip, {
      key: 0,
      effect: _ctx.Effect.DARK,
      placement: "right",
      "fallback-placements": ["left"],
      persistent: ""
    }, {
      content: withCtx(() => [
        renderSlot(_ctx.$slots, "title")
      ]),
      default: withCtx(() => [
        createElementVNode("div", {
          class: normalizeClass(_ctx.nsMenu.be("tooltip", "trigger"))
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 8, ["effect"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
      renderSlot(_ctx.$slots, "default"),
      renderSlot(_ctx.$slots, "title")
    ], 64))
  ], 6);
}
var MenuItem = /* @__PURE__ */ _export_sfc$2(_sfc_main$k, [["render", _sfc_render$9], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item.vue"]]);

const menuItemGroupProps = {
  title: String
};

const COMPONENT_NAME$1 = "ElMenuItemGroup";
const _sfc_main$j = defineComponent({
  name: COMPONENT_NAME$1,
  props: menuItemGroupProps,
  setup() {
    const instance = getCurrentInstance();
    const menu = inject("rootMenu");
    if (!menu)
      throwError(COMPONENT_NAME$1, "can not inject root menu");
    const ns = useNamespace("menu-item-group");
    const levelPadding = computed(() => {
      if (menu.props.collapse)
        return 20;
      let padding = 20;
      let parent = instance.parent;
      while (parent && parent.type.name !== "ElMenu") {
        if (parent.type.name === "ElSubMenu") {
          padding += 20;
        }
        parent = parent.parent;
      }
      return padding;
    });
    return {
      levelPadding,
      ns
    };
  }
});
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("li", {
    class: normalizeClass(_ctx.ns.b())
  }, [
    createElementVNode("div", {
      class: normalizeClass(_ctx.ns.e("title")),
      style: normalizeStyle({ paddingLeft: `${_ctx.levelPadding}px` })
    }, [
      !_ctx.$slots.title ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createTextVNode(toDisplayString(_ctx.title), 1)
      ], 2112)) : renderSlot(_ctx.$slots, "title", { key: 1 })
    ], 6),
    createElementVNode("ul", null, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 2);
}
var MenuItemGroup = /* @__PURE__ */ _export_sfc$2(_sfc_main$j, [["render", _sfc_render$8], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item-group.vue"]]);

const ElMenu = withInstall(Menu, {
  MenuItem,
  MenuItemGroup,
  SubMenu
});
const ElMenuItem = withNoopInstall(MenuItem);
const ElMenuItemGroup = withNoopInstall(MenuItemGroup);
const ElSubMenu = withNoopInstall(SubMenu);

const usePopoverProps = buildProps({
  trigger: useTooltipTriggerProps.trigger,
  placement: dropdownProps.placement,
  disabled: useTooltipTriggerProps.disabled,
  visible: useTooltipContentProps.visible,
  transition: useTooltipContentProps.transition,
  popperOptions: dropdownProps.popperOptions,
  tabindex: dropdownProps.tabindex,
  appendToBody: { type: Boolean, default: void 0 },
  content: useTooltipContentProps.content,
  popperStyle: useTooltipContentProps.popperStyle,
  popperClass: useTooltipContentProps.popperClass,
  enterable: {
    ...useTooltipContentProps.enterable,
    default: true
  },
  effect: {
    ...useTooltipContentProps.effect,
    default: "light"
  },
  teleported: useTooltipContentProps.teleported,
  title: String,
  width: {
    type: [String, Number],
    default: 150
  },
  offset: {
    type: Number,
    default: void 0
  },
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  autoClose: {
    type: Number,
    default: 0
  },
  showArrow: {
    type: Boolean,
    default: true
  },
  persistent: {
    type: Boolean,
    default: true
  }
});

const emits = [
  "update:visible",
  "before-enter",
  "before-leave",
  "after-enter",
  "after-leave"
];
const COMPONENT_NAME = "ElPopover";
const _sfc_main$i = defineComponent({
  name: COMPONENT_NAME,
  components: {
    ElTooltip
  },
  props: usePopoverProps,
  emits,
  setup(props, { emit }) {
    const ns = useNamespace("popover");
    const tooltipRef = ref(null);
    const popperRef = computed(() => {
      var _a;
      return (_a = unref(tooltipRef)) == null ? void 0 : _a.popperRef;
    });
    const width = computed(() => {
      if (isString$1(props.width)) {
        return props.width;
      }
      return `${props.width}px`;
    });
    const style = computed(() => {
      return [
        {
          width: width.value
        },
        props.popperStyle
      ];
    });
    const kls = computed(() => {
      return [ns.b(), props.popperClass, { [ns.m("plain")]: !!props.content }];
    });
    const gpuAcceleration = computed(() => {
      return props.transition === "el-fade-in-linear";
    });
    const { compatTeleported } = useDeprecateAppendToBody(COMPONENT_NAME, "appendToBody");
    const hide = () => {
      var _a;
      (_a = tooltipRef.value) == null ? void 0 : _a.hide();
    };
    const beforeEnter = () => {
      emit("before-enter");
    };
    const beforeLeave = () => {
      emit("before-leave");
    };
    const afterEnter = () => {
      emit("after-enter");
    };
    const afterLeave = () => {
      emit("update:visible", false);
      emit("after-leave");
    };
    return {
      compatTeleported,
      ns,
      kls,
      gpuAcceleration,
      style,
      tooltipRef,
      popperRef,
      hide,
      beforeEnter,
      beforeLeave,
      afterEnter,
      afterLeave
    };
  }
});
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tooltip = resolveComponent("el-tooltip");
  return openBlock(), createBlock(_component_el_tooltip, mergeProps({ ref: "tooltipRef" }, _ctx.$attrs, {
    trigger: _ctx.trigger,
    placement: _ctx.placement,
    disabled: _ctx.disabled,
    visible: _ctx.visible,
    transition: _ctx.transition,
    "popper-options": _ctx.popperOptions,
    tabindex: _ctx.tabindex,
    "append-to-body": _ctx.appendToBody,
    content: _ctx.content,
    offset: _ctx.offset,
    "show-after": _ctx.showAfter,
    "hide-after": _ctx.hideAfter,
    "auto-close": _ctx.autoClose,
    "show-arrow": _ctx.showArrow,
    "aria-label": _ctx.title,
    effect: _ctx.effect,
    enterable: _ctx.enterable,
    "popper-class": _ctx.kls,
    "popper-style": _ctx.style,
    teleported: _ctx.compatTeleported,
    persistent: _ctx.persistent,
    "gpu-acceleration": _ctx.gpuAcceleration,
    onBeforeShow: _ctx.beforeEnter,
    onBeforeHide: _ctx.beforeLeave,
    onShow: _ctx.afterEnter,
    onHide: _ctx.afterLeave
  }), {
    content: withCtx(() => [
      _ctx.title ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(_ctx.ns.e("title")),
        role: "title"
      }, toDisplayString(_ctx.title), 3)) : createCommentVNode("v-if", true),
      renderSlot(_ctx.$slots, "default", {}, () => [
        createTextVNode(toDisplayString(_ctx.content), 1)
      ])
    ]),
    default: withCtx(() => [
      _ctx.$slots.reference ? renderSlot(_ctx.$slots, "reference", { key: 0 }) : createCommentVNode("v-if", true)
    ]),
    _: 3
  }, 16, ["trigger", "placement", "disabled", "visible", "transition", "popper-options", "tabindex", "append-to-body", "content", "offset", "show-after", "hide-after", "auto-close", "show-arrow", "aria-label", "effect", "enterable", "popper-class", "popper-style", "teleported", "persistent", "gpu-acceleration", "onBeforeShow", "onBeforeHide", "onShow", "onHide"]);
}
var Popover = /* @__PURE__ */ _export_sfc$2(_sfc_main$i, [["render", _sfc_render$7], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/popover/src/index.vue"]]);

const attachEvents = (el, binding) => {
  const popperComponent = binding.arg || binding.value;
  const popover = popperComponent == null ? void 0 : popperComponent.popperRef;
  if (popover) {
    popover.triggerRef = el;
  }
};
var PopoverDirective = {
  mounted(el, binding) {
    attachEvents(el, binding);
  },
  updated(el, binding) {
    attachEvents(el, binding);
  }
};
const VPopover = "popover";

Popover.install = (app) => {
  app.component(Popover.name, Popover);
};
PopoverDirective.install = (app) => {
  app.directive(VPopover, PopoverDirective);
};
const _PopoverDirective = PopoverDirective;
Popover.directive = _PopoverDirective;
const _Popover = Popover;
const ElPopover = _Popover;

/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */

/**
 * Module variables.
 * @private
 */

var matchHtmlRegExp = /["'&<>]/;

/**
 * Module exports.
 * @public
 */

var escapeHtml_1 = escapeHtml;

/**
 * Escape special characters in the given string of html.
 *
 * @param  {string} string The string to escape for inserting into HTML
 * @return {string}
 * @public
 */

function escapeHtml(string) {
  var str = '' + string;
  var match = matchHtmlRegExp.exec(str);

  if (!match) {
    return str;
  }

  var escape;
  var html = '';
  var index = 0;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34: // "
        escape = '&quot;';
        break;
      case 38: // &
        escape = '&amp;';
        break;
      case 39: // '
        escape = '&#39;';
        break;
      case 60: // <
        escape = '&lt;';
        break;
      case 62: // >
        escape = '&gt;';
        break;
      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index
    ? html + str.substring(lastIndex, index)
    : html;
}

const getCell = function(event) {
  let cell = event.target;
  while (cell && cell.tagName.toUpperCase() !== "HTML") {
    if (cell.tagName.toUpperCase() === "TD") {
      return cell;
    }
    cell = cell.parentNode;
  }
  return null;
};
const isObject = function(obj) {
  return obj !== null && typeof obj === "object";
};
const orderBy = function(array, sortKey, reverse, sortMethod, sortBy) {
  if (!sortKey && !sortMethod && (!sortBy || Array.isArray(sortBy) && !sortBy.length)) {
    return array;
  }
  if (typeof reverse === "string") {
    reverse = reverse === "descending" ? -1 : 1;
  } else {
    reverse = reverse && reverse < 0 ? -1 : 1;
  }
  const getKey = sortMethod ? null : function(value, index) {
    if (sortBy) {
      if (!Array.isArray(sortBy)) {
        sortBy = [sortBy];
      }
      return sortBy.map((by) => {
        if (typeof by === "string") {
          return get(value, by);
        } else {
          return by(value, index, array);
        }
      });
    }
    if (sortKey !== "$key") {
      if (isObject(value) && "$value" in value)
        value = value.$value;
    }
    return [isObject(value) ? get(value, sortKey) : value];
  };
  const compare = function(a, b) {
    if (sortMethod) {
      return sortMethod(a.value, b.value);
    }
    for (let i = 0, len = a.key.length; i < len; i++) {
      if (a.key[i] < b.key[i]) {
        return -1;
      }
      if (a.key[i] > b.key[i]) {
        return 1;
      }
    }
    return 0;
  };
  return array.map((value, index) => {
    return {
      value,
      index,
      key: getKey ? getKey(value, index) : null
    };
  }).sort((a, b) => {
    let order = compare(a, b);
    if (!order) {
      order = a.index - b.index;
    }
    return order * +reverse;
  }).map((item) => item.value);
};
const getColumnById = function(table, columnId) {
  let column = null;
  table.columns.forEach((item) => {
    if (item.id === columnId) {
      column = item;
    }
  });
  return column;
};
const getColumnByKey = function(table, columnKey) {
  let column = null;
  for (let i = 0; i < table.columns.length; i++) {
    const item = table.columns[i];
    if (item.columnKey === columnKey) {
      column = item;
      break;
    }
  }
  return column;
};
const getColumnByCell = function(table, cell, namespace) {
  const matches = (cell.className || "").match(new RegExp(`${namespace}-table_[^\\s]+`, "gm"));
  if (matches) {
    return getColumnById(table, matches[0]);
  }
  return null;
};
const getRowIdentity = (row, rowKey) => {
  if (!row)
    throw new Error("Row is required when get row identity");
  if (typeof rowKey === "string") {
    if (!rowKey.includes(".")) {
      return `${row[rowKey]}`;
    }
    const key = rowKey.split(".");
    let current = row;
    for (const element of key) {
      current = current[element];
    }
    return `${current}`;
  } else if (typeof rowKey === "function") {
    return rowKey.call(null, row);
  }
};
const getKeysMap = function(array, rowKey) {
  const arrayMap = {};
  (array || []).forEach((row, index) => {
    arrayMap[getRowIdentity(row, rowKey)] = { row, index };
  });
  return arrayMap;
};
function mergeOptions(defaults, config) {
  const options = {};
  let key;
  for (key in defaults) {
    options[key] = defaults[key];
  }
  for (key in config) {
    if (hasOwn$2(config, key)) {
      const value = config[key];
      if (typeof value !== "undefined") {
        options[key] = value;
      }
    }
  }
  return options;
}
function parseWidth(width) {
  if (width === "")
    return width;
  if (width !== void 0) {
    width = Number.parseInt(width, 10);
    if (Number.isNaN(width)) {
      width = "";
    }
  }
  return width;
}
function parseMinWidth(minWidth) {
  if (minWidth === "")
    return minWidth;
  if (minWidth !== void 0) {
    minWidth = parseWidth(minWidth);
    if (Number.isNaN(minWidth)) {
      minWidth = 80;
    }
  }
  return minWidth;
}
function parseHeight(height) {
  if (typeof height === "number") {
    return height;
  }
  if (typeof height === "string") {
    if (/^\d+(?:px)?$/.test(height)) {
      return Number.parseInt(height, 10);
    } else {
      return height;
    }
  }
  return null;
}
function compose(...funcs) {
  if (funcs.length === 0) {
    return (arg) => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}
function toggleRowStatus(statusArr, row, newVal) {
  let changed = false;
  const index = statusArr.indexOf(row);
  const included = index !== -1;
  const addRow = () => {
    statusArr.push(row);
    changed = true;
  };
  const removeRow = () => {
    statusArr.splice(index, 1);
    changed = true;
  };
  if (typeof newVal === "boolean") {
    if (newVal && !included) {
      addRow();
    } else if (!newVal && included) {
      removeRow();
    }
  } else {
    if (included) {
      removeRow();
    } else {
      addRow();
    }
  }
  return changed;
}
function walkTreeNode(root, cb, childrenKey = "children", lazyKey = "hasChildren") {
  const isNil = (array) => !(Array.isArray(array) && array.length);
  function _walker(parent, children, level) {
    cb(parent, children, level);
    children.forEach((item) => {
      if (item[lazyKey]) {
        cb(item, null, level + 1);
        return;
      }
      const children2 = item[childrenKey];
      if (!isNil(children2)) {
        _walker(item, children2, level + 1);
      }
    });
  }
  root.forEach((item) => {
    if (item[lazyKey]) {
      cb(item, null, 0);
      return;
    }
    const children = item[childrenKey];
    if (!isNil(children)) {
      _walker(item, children, 0);
    }
  });
}
let removePopper;
function createTablePopper(trigger, popperContent, popperOptions, tooltipEffect) {
  const { nextZIndex } = useZIndex();
  function renderContent() {
    const isLight = tooltipEffect === "light";
    const content2 = document.createElement("div");
    content2.className = `el-popper ${isLight ? "is-light" : "is-dark"}`;
    popperContent = escapeHtml_1(popperContent);
    content2.innerHTML = popperContent;
    content2.style.zIndex = String(nextZIndex());
    document.body.appendChild(content2);
    return content2;
  }
  function renderArrow() {
    const arrow2 = document.createElement("div");
    arrow2.className = "el-popper__arrow";
    return arrow2;
  }
  function showPopper() {
    popperInstance && popperInstance.update();
  }
  removePopper = function removePopper2() {
    try {
      popperInstance && popperInstance.destroy();
      content && document.body.removeChild(content);
      off(trigger, "mouseenter", showPopper);
      off(trigger, "mouseleave", removePopper2);
    } catch (e) {
    }
  };
  let popperInstance = null;
  const content = renderContent();
  const arrow = renderArrow();
  content.appendChild(arrow);
  popperInstance = createPopper(trigger, content, {
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 8]
        }
      },
      {
        name: "arrow",
        options: {
          element: arrow,
          padding: 10
        }
      }
    ],
    ...popperOptions
  });
  on(trigger, "mouseenter", showPopper);
  on(trigger, "mouseleave", removePopper);
  return popperInstance;
}
const isFixedColumn = (index, fixed, store, realColumns) => {
  let start = 0;
  let after = index;
  if (realColumns) {
    if (realColumns[index].colSpan > 1) {
      return {};
    }
    for (let i = 0; i < index; i++) {
      start += realColumns[i].colSpan;
    }
    after = start + realColumns[index].colSpan - 1;
  } else {
    start = index;
  }
  let fixedLayout;
  const columns = store.states.columns;
  switch (fixed) {
    case "left":
      if (after < store.states.fixedLeafColumnsLength.value) {
        fixedLayout = "left";
      }
      break;
    case "right":
      if (start >= columns.value.length - store.states.rightFixedLeafColumnsLength.value) {
        fixedLayout = "right";
      }
      break;
    default:
      if (after < store.states.fixedLeafColumnsLength.value) {
        fixedLayout = "left";
      } else if (start >= columns.value.length - store.states.rightFixedLeafColumnsLength.value) {
        fixedLayout = "right";
      }
  }
  return fixedLayout ? {
    direction: fixedLayout,
    start,
    after
  } : {};
};
const getFixedColumnsClass = (namespace, index, fixed, store, realColumns) => {
  const classes = [];
  const { direction, start } = isFixedColumn(index, fixed, store, realColumns);
  if (direction) {
    const isLeft = direction === "left";
    classes.push(`${namespace}-fixed-column--${direction}`);
    if (isLeft && start === store.states.fixedLeafColumnsLength.value - 1) {
      classes.push("is-last-column");
    } else if (!isLeft && start === store.states.columns.value.length - store.states.rightFixedLeafColumnsLength.value) {
      classes.push("is-first-column");
    }
  }
  return classes;
};
function getOffset(offset, column) {
  return offset + (column.realWidth === null || Number.isNaN(column.realWidth) ? Number(column.width) : column.realWidth);
}
const getFixedColumnOffset = (index, fixed, store, realColumns) => {
  const { direction, start = 0 } = isFixedColumn(index, fixed, store, realColumns);
  if (!direction) {
    return;
  }
  const styles = {};
  const isLeft = direction === "left";
  const columns = store.states.columns.value;
  if (isLeft) {
    styles.left = columns.slice(0, index).reduce(getOffset, 0);
  } else {
    styles.right = columns.slice(start + 1).reverse().reduce(getOffset, 0);
  }
  return styles;
};
const ensurePosition = (style, key) => {
  if (!style)
    return;
  if (!Number.isNaN(style[key])) {
    style[key] = `${style[key]}px`;
  }
};

function useExpand(watcherData) {
  const instance = getCurrentInstance();
  const defaultExpandAll = ref(false);
  const expandRows = ref([]);
  const updateExpandRows = () => {
    const data = watcherData.data.value || [];
    const rowKey = watcherData.rowKey.value;
    if (defaultExpandAll.value) {
      expandRows.value = data.slice();
    } else if (rowKey) {
      const expandRowsMap = getKeysMap(expandRows.value, rowKey);
      expandRows.value = data.reduce((prev, row) => {
        const rowId = getRowIdentity(row, rowKey);
        const rowInfo = expandRowsMap[rowId];
        if (rowInfo) {
          prev.push(row);
        }
        return prev;
      }, []);
    } else {
      expandRows.value = [];
    }
  };
  const toggleRowExpansion = (row, expanded) => {
    const changed = toggleRowStatus(expandRows.value, row, expanded);
    if (changed) {
      instance.emit("expand-change", row, expandRows.value.slice());
    }
  };
  const setExpandRowKeys = (rowKeys) => {
    instance.store.assertRowKey();
    const data = watcherData.data.value || [];
    const rowKey = watcherData.rowKey.value;
    const keysMap = getKeysMap(data, rowKey);
    expandRows.value = rowKeys.reduce((prev, cur) => {
      const info = keysMap[cur];
      if (info) {
        prev.push(info.row);
      }
      return prev;
    }, []);
  };
  const isRowExpanded = (row) => {
    const rowKey = watcherData.rowKey.value;
    if (rowKey) {
      const expandMap = getKeysMap(expandRows.value, rowKey);
      return !!expandMap[getRowIdentity(row, rowKey)];
    }
    return expandRows.value.includes(row);
  };
  return {
    updateExpandRows,
    toggleRowExpansion,
    setExpandRowKeys,
    isRowExpanded,
    states: {
      expandRows,
      defaultExpandAll
    }
  };
}

function useCurrent(watcherData) {
  const instance = getCurrentInstance();
  const _currentRowKey = ref(null);
  const currentRow = ref(null);
  const setCurrentRowKey = (key) => {
    instance.store.assertRowKey();
    _currentRowKey.value = key;
    setCurrentRowByKey(key);
  };
  const restoreCurrentRowKey = () => {
    _currentRowKey.value = null;
  };
  const setCurrentRowByKey = (key) => {
    const { data, rowKey } = watcherData;
    let _currentRow = null;
    if (rowKey.value) {
      _currentRow = (unref(data) || []).find((item) => getRowIdentity(item, rowKey.value) === key);
    }
    currentRow.value = _currentRow;
    instance.emit("current-change", currentRow.value, null);
  };
  const updateCurrentRow = (_currentRow) => {
    const oldCurrentRow = currentRow.value;
    if (_currentRow && _currentRow !== oldCurrentRow) {
      currentRow.value = _currentRow;
      instance.emit("current-change", currentRow.value, oldCurrentRow);
      return;
    }
    if (!_currentRow && oldCurrentRow) {
      currentRow.value = null;
      instance.emit("current-change", null, oldCurrentRow);
    }
  };
  const updateCurrentRowData = () => {
    const rowKey = watcherData.rowKey.value;
    const data = watcherData.data.value || [];
    const oldCurrentRow = currentRow.value;
    if (!data.includes(oldCurrentRow) && oldCurrentRow) {
      if (rowKey) {
        const currentRowKey = getRowIdentity(oldCurrentRow, rowKey);
        setCurrentRowByKey(currentRowKey);
      } else {
        currentRow.value = null;
      }
      if (currentRow.value === null) {
        instance.emit("current-change", null, oldCurrentRow);
      }
    } else if (_currentRowKey.value) {
      setCurrentRowByKey(_currentRowKey.value);
      restoreCurrentRowKey();
    }
  };
  return {
    setCurrentRowKey,
    restoreCurrentRowKey,
    setCurrentRowByKey,
    updateCurrentRow,
    updateCurrentRowData,
    states: {
      _currentRowKey,
      currentRow
    }
  };
}

function useTree(watcherData) {
  const expandRowKeys = ref([]);
  const treeData = ref({});
  const indent = ref(16);
  const lazy = ref(false);
  const lazyTreeNodeMap = ref({});
  const lazyColumnIdentifier = ref("hasChildren");
  const childrenColumnName = ref("children");
  const instance = getCurrentInstance();
  const normalizedData = computed(() => {
    if (!watcherData.rowKey.value)
      return {};
    const data = watcherData.data.value || [];
    return normalize(data);
  });
  const normalizedLazyNode = computed(() => {
    const rowKey = watcherData.rowKey.value;
    const keys = Object.keys(lazyTreeNodeMap.value);
    const res = {};
    if (!keys.length)
      return res;
    keys.forEach((key) => {
      if (lazyTreeNodeMap.value[key].length) {
        const item = { children: [] };
        lazyTreeNodeMap.value[key].forEach((row) => {
          const currentRowKey = getRowIdentity(row, rowKey);
          item.children.push(currentRowKey);
          if (row[lazyColumnIdentifier.value] && !res[currentRowKey]) {
            res[currentRowKey] = { children: [] };
          }
        });
        res[key] = item;
      }
    });
    return res;
  });
  const normalize = (data) => {
    const rowKey = watcherData.rowKey.value;
    const res = {};
    walkTreeNode(data, (parent, children, level) => {
      const parentId = getRowIdentity(parent, rowKey);
      if (Array.isArray(children)) {
        res[parentId] = {
          children: children.map((row) => getRowIdentity(row, rowKey)),
          level
        };
      } else if (lazy.value) {
        res[parentId] = {
          children: [],
          lazy: true,
          level
        };
      }
    }, childrenColumnName.value, lazyColumnIdentifier.value);
    return res;
  };
  const updateTreeData = (ifChangeExpandRowKeys = false, ifExpandAll = ((_a) => (_a = instance.store) == null ? void 0 : _a.states.defaultExpandAll.value)()) => {
    var _a2;
    const nested = normalizedData.value;
    const normalizedLazyNode_ = normalizedLazyNode.value;
    const keys = Object.keys(nested);
    const newTreeData = {};
    if (keys.length) {
      const oldTreeData = unref(treeData);
      const rootLazyRowKeys = [];
      const getExpanded = (oldValue, key) => {
        if (ifChangeExpandRowKeys) {
          if (expandRowKeys.value) {
            return ifExpandAll || expandRowKeys.value.includes(key);
          } else {
            return !!(ifExpandAll || (oldValue == null ? void 0 : oldValue.expanded));
          }
        } else {
          const included = ifExpandAll || expandRowKeys.value && expandRowKeys.value.includes(key);
          return !!((oldValue == null ? void 0 : oldValue.expanded) || included);
        }
      };
      keys.forEach((key) => {
        const oldValue = oldTreeData[key];
        const newValue = { ...nested[key] };
        newValue.expanded = getExpanded(oldValue, key);
        if (newValue.lazy) {
          const { loaded = false, loading = false } = oldValue || {};
          newValue.loaded = !!loaded;
          newValue.loading = !!loading;
          rootLazyRowKeys.push(key);
        }
        newTreeData[key] = newValue;
      });
      const lazyKeys = Object.keys(normalizedLazyNode_);
      if (lazy.value && lazyKeys.length && rootLazyRowKeys.length) {
        lazyKeys.forEach((key) => {
          const oldValue = oldTreeData[key];
          const lazyNodeChildren = normalizedLazyNode_[key].children;
          if (rootLazyRowKeys.includes(key)) {
            if (newTreeData[key].children.length !== 0) {
              throw new Error("[ElTable]children must be an empty array.");
            }
            newTreeData[key].children = lazyNodeChildren;
          } else {
            const { loaded = false, loading = false } = oldValue || {};
            newTreeData[key] = {
              lazy: true,
              loaded: !!loaded,
              loading: !!loading,
              expanded: getExpanded(oldValue, key),
              children: lazyNodeChildren,
              level: ""
            };
          }
        });
      }
    }
    treeData.value = newTreeData;
    (_a2 = instance.store) == null ? void 0 : _a2.updateTableScrollY();
  };
  watch(() => expandRowKeys.value, () => {
    updateTreeData(true);
  });
  watch(() => normalizedData.value, () => {
    updateTreeData();
  });
  watch(() => normalizedLazyNode.value, () => {
    updateTreeData();
  });
  const updateTreeExpandKeys = (value) => {
    expandRowKeys.value = value;
    updateTreeData();
  };
  const toggleTreeExpansion = (row, expanded) => {
    instance.store.assertRowKey();
    const rowKey = watcherData.rowKey.value;
    const id = getRowIdentity(row, rowKey);
    const data = id && treeData.value[id];
    if (id && data && "expanded" in data) {
      const oldExpanded = data.expanded;
      expanded = typeof expanded === "undefined" ? !data.expanded : expanded;
      treeData.value[id].expanded = expanded;
      if (oldExpanded !== expanded) {
        instance.emit("expand-change", row, expanded);
      }
      instance.store.updateTableScrollY();
    }
  };
  const loadOrToggle = (row) => {
    instance.store.assertRowKey();
    const rowKey = watcherData.rowKey.value;
    const id = getRowIdentity(row, rowKey);
    const data = treeData.value[id];
    if (lazy.value && data && "loaded" in data && !data.loaded) {
      loadData(row, id, data);
    } else {
      toggleTreeExpansion(row, void 0);
    }
  };
  const loadData = (row, key, treeNode) => {
    const { load } = instance.props;
    if (load && !treeData.value[key].loaded) {
      treeData.value[key].loading = true;
      load(row, treeNode, (data) => {
        if (!Array.isArray(data)) {
          throw new TypeError("[ElTable] data must be an array");
        }
        treeData.value[key].loading = false;
        treeData.value[key].loaded = true;
        treeData.value[key].expanded = true;
        if (data.length) {
          lazyTreeNodeMap.value[key] = data;
        }
        instance.emit("expand-change", row, true);
      });
    }
  };
  return {
    loadData,
    loadOrToggle,
    toggleTreeExpansion,
    updateTreeExpandKeys,
    updateTreeData,
    normalize,
    states: {
      expandRowKeys,
      treeData,
      indent,
      lazy,
      lazyTreeNodeMap,
      lazyColumnIdentifier,
      childrenColumnName
    }
  };
}

const sortData = (data, states) => {
  const sortingColumn = states.sortingColumn;
  if (!sortingColumn || typeof sortingColumn.sortable === "string") {
    return data;
  }
  return orderBy(data, states.sortProp, states.sortOrder, sortingColumn.sortMethod, sortingColumn.sortBy);
};
const doFlattenColumns = (columns) => {
  const result = [];
  columns.forEach((column) => {
    if (column.children) {
      result.push.apply(result, doFlattenColumns(column.children));
    } else {
      result.push(column);
    }
  });
  return result;
};
function useWatcher$1() {
  var _a;
  const instance = getCurrentInstance();
  const { size: tableSize } = toRefs((_a = instance.proxy) == null ? void 0 : _a.$props);
  const rowKey = ref(null);
  const data = ref([]);
  const _data = ref([]);
  const isComplex = ref(false);
  const _columns = ref([]);
  const originColumns = ref([]);
  const columns = ref([]);
  const fixedColumns = ref([]);
  const rightFixedColumns = ref([]);
  const leafColumns = ref([]);
  const fixedLeafColumns = ref([]);
  const rightFixedLeafColumns = ref([]);
  const leafColumnsLength = ref(0);
  const fixedLeafColumnsLength = ref(0);
  const rightFixedLeafColumnsLength = ref(0);
  const isAllSelected = ref(false);
  const selection = ref([]);
  const reserveSelection = ref(false);
  const selectOnIndeterminate = ref(false);
  const selectable = ref(null);
  const filters = ref({});
  const filteredData = ref(null);
  const sortingColumn = ref(null);
  const sortProp = ref(null);
  const sortOrder = ref(null);
  const hoverRow = ref(null);
  watch(data, () => instance.state && scheduleLayout(false), {
    deep: true
  });
  const assertRowKey = () => {
    if (!rowKey.value)
      throw new Error("[ElTable] prop row-key is required");
  };
  const updateColumns = () => {
    fixedColumns.value = _columns.value.filter((column) => column.fixed === true || column.fixed === "left");
    rightFixedColumns.value = _columns.value.filter((column) => column.fixed === "right");
    if (fixedColumns.value.length > 0 && _columns.value[0] && _columns.value[0].type === "selection" && !_columns.value[0].fixed) {
      _columns.value[0].fixed = true;
      fixedColumns.value.unshift(_columns.value[0]);
    }
    const notFixedColumns = _columns.value.filter((column) => !column.fixed);
    originColumns.value = [].concat(fixedColumns.value).concat(notFixedColumns).concat(rightFixedColumns.value);
    const leafColumns2 = doFlattenColumns(notFixedColumns);
    const fixedLeafColumns2 = doFlattenColumns(fixedColumns.value);
    const rightFixedLeafColumns2 = doFlattenColumns(rightFixedColumns.value);
    leafColumnsLength.value = leafColumns2.length;
    fixedLeafColumnsLength.value = fixedLeafColumns2.length;
    rightFixedLeafColumnsLength.value = rightFixedLeafColumns2.length;
    columns.value = [].concat(fixedLeafColumns2).concat(leafColumns2).concat(rightFixedLeafColumns2);
    isComplex.value = fixedColumns.value.length > 0 || rightFixedColumns.value.length > 0;
  };
  const scheduleLayout = (needUpdateColumns, immediate = false) => {
    if (needUpdateColumns) {
      updateColumns();
    }
    if (immediate) {
      instance.state.doLayout();
    } else {
      instance.state.debouncedUpdateLayout();
    }
  };
  const isSelected = (row) => {
    return selection.value.includes(row);
  };
  const clearSelection = () => {
    isAllSelected.value = false;
    const oldSelection = selection.value;
    if (oldSelection.length) {
      selection.value = [];
      instance.emit("selection-change", []);
    }
  };
  const cleanSelection = () => {
    let deleted;
    if (rowKey.value) {
      deleted = [];
      const selectedMap = getKeysMap(selection.value, rowKey.value);
      const dataMap = getKeysMap(data.value, rowKey.value);
      for (const key in selectedMap) {
        if (hasOwn$2(selectedMap, key) && !dataMap[key]) {
          deleted.push(selectedMap[key].row);
        }
      }
    } else {
      deleted = selection.value.filter((item) => !data.value.includes(item));
    }
    if (deleted.length) {
      const newSelection = selection.value.filter((item) => !deleted.includes(item));
      selection.value = newSelection;
      instance.emit("selection-change", newSelection.slice());
    }
  };
  const getSelectionRows = () => {
    return (selection.value || []).slice();
  };
  const toggleRowSelection = (row, selected = void 0, emitChange = true) => {
    const changed = toggleRowStatus(selection.value, row, selected);
    if (changed) {
      const newSelection = (selection.value || []).slice();
      if (emitChange) {
        instance.emit("select", newSelection, row);
      }
      instance.emit("selection-change", newSelection);
    }
  };
  const _toggleAllSelection = () => {
    var _a2, _b;
    const value = selectOnIndeterminate.value ? !isAllSelected.value : !(isAllSelected.value || selection.value.length);
    isAllSelected.value = value;
    let selectionChanged = false;
    let childrenCount = 0;
    const rowKey2 = (_b = (_a2 = instance == null ? void 0 : instance.store) == null ? void 0 : _a2.states) == null ? void 0 : _b.rowKey.value;
    data.value.forEach((row, index) => {
      const rowIndex = index + childrenCount;
      if (selectable.value) {
        if (selectable.value.call(null, row, rowIndex) && toggleRowStatus(selection.value, row, value)) {
          selectionChanged = true;
        }
      } else {
        if (toggleRowStatus(selection.value, row, value)) {
          selectionChanged = true;
        }
      }
      childrenCount += getChildrenCount(getRowIdentity(row, rowKey2));
    });
    if (selectionChanged) {
      instance.emit("selection-change", selection.value ? selection.value.slice() : []);
    }
    instance.emit("select-all", selection.value);
  };
  const updateSelectionByRowKey = () => {
    const selectedMap = getKeysMap(selection.value, rowKey.value);
    data.value.forEach((row) => {
      const rowId = getRowIdentity(row, rowKey.value);
      const rowInfo = selectedMap[rowId];
      if (rowInfo) {
        selection.value[rowInfo.index] = row;
      }
    });
  };
  const updateAllSelected = () => {
    var _a2, _b, _c;
    if (((_a2 = data.value) == null ? void 0 : _a2.length) === 0) {
      isAllSelected.value = false;
      return;
    }
    let selectedMap;
    if (rowKey.value) {
      selectedMap = getKeysMap(selection.value, rowKey.value);
    }
    const isSelected2 = function(row) {
      if (selectedMap) {
        return !!selectedMap[getRowIdentity(row, rowKey.value)];
      } else {
        return selection.value.includes(row);
      }
    };
    let isAllSelected_ = true;
    let selectedCount = 0;
    let childrenCount = 0;
    for (let i = 0, j = (data.value || []).length; i < j; i++) {
      const keyProp = (_c = (_b = instance == null ? void 0 : instance.store) == null ? void 0 : _b.states) == null ? void 0 : _c.rowKey.value;
      const rowIndex = i + childrenCount;
      const item = data.value[i];
      const isRowSelectable = selectable.value && selectable.value.call(null, item, rowIndex);
      if (!isSelected2(item)) {
        if (!selectable.value || isRowSelectable) {
          isAllSelected_ = false;
          break;
        }
      } else {
        selectedCount++;
      }
      childrenCount += getChildrenCount(getRowIdentity(item, keyProp));
    }
    if (selectedCount === 0)
      isAllSelected_ = false;
    isAllSelected.value = isAllSelected_;
  };
  const getChildrenCount = (rowKey2) => {
    var _a2;
    if (!instance || !instance.store)
      return 0;
    const { treeData } = instance.store.states;
    let count = 0;
    const children = (_a2 = treeData.value[rowKey2]) == null ? void 0 : _a2.children;
    if (children) {
      count += children.length;
      children.forEach((childKey) => {
        count += getChildrenCount(childKey);
      });
    }
    return count;
  };
  const updateFilters = (columns2, values) => {
    if (!Array.isArray(columns2)) {
      columns2 = [columns2];
    }
    const filters_ = {};
    columns2.forEach((col) => {
      filters.value[col.id] = values;
      filters_[col.columnKey || col.id] = values;
    });
    return filters_;
  };
  const updateSort = (column, prop, order) => {
    if (sortingColumn.value && sortingColumn.value !== column) {
      sortingColumn.value.order = null;
    }
    sortingColumn.value = column;
    sortProp.value = prop;
    sortOrder.value = order;
  };
  const execFilter = () => {
    let sourceData = unref(_data);
    Object.keys(filters.value).forEach((columnId) => {
      const values = filters.value[columnId];
      if (!values || values.length === 0)
        return;
      const column = getColumnById({
        columns: columns.value
      }, columnId);
      if (column && column.filterMethod) {
        sourceData = sourceData.filter((row) => {
          return values.some((value) => column.filterMethod.call(null, value, row, column));
        });
      }
    });
    filteredData.value = sourceData;
  };
  const execSort = () => {
    data.value = sortData(filteredData.value, {
      sortingColumn: sortingColumn.value,
      sortProp: sortProp.value,
      sortOrder: sortOrder.value
    });
  };
  const execQuery = (ignore = void 0) => {
    if (!(ignore && ignore.filter)) {
      execFilter();
    }
    execSort();
  };
  const clearFilter = (columnKeys) => {
    const { tableHeaderRef } = instance.refs;
    if (!tableHeaderRef)
      return;
    const panels = Object.assign({}, tableHeaderRef.filterPanels);
    const keys = Object.keys(panels);
    if (!keys.length)
      return;
    if (typeof columnKeys === "string") {
      columnKeys = [columnKeys];
    }
    if (Array.isArray(columnKeys)) {
      const columns_ = columnKeys.map((key) => getColumnByKey({
        columns: columns.value
      }, key));
      keys.forEach((key) => {
        const column = columns_.find((col) => col.id === key);
        if (column) {
          column.filteredValue = [];
        }
      });
      instance.store.commit("filterChange", {
        column: columns_,
        values: [],
        silent: true,
        multi: true
      });
    } else {
      keys.forEach((key) => {
        const column = columns.value.find((col) => col.id === key);
        if (column) {
          column.filteredValue = [];
        }
      });
      filters.value = {};
      instance.store.commit("filterChange", {
        column: {},
        values: [],
        silent: true
      });
    }
  };
  const clearSort = () => {
    if (!sortingColumn.value)
      return;
    updateSort(null, null, null);
    instance.store.commit("changeSortCondition", {
      silent: true
    });
  };
  const {
    setExpandRowKeys,
    toggleRowExpansion,
    updateExpandRows,
    states: expandStates,
    isRowExpanded
  } = useExpand({
    data,
    rowKey
  });
  const {
    updateTreeExpandKeys,
    toggleTreeExpansion,
    updateTreeData,
    loadOrToggle,
    states: treeStates
  } = useTree({
    data,
    rowKey
  });
  const {
    updateCurrentRowData,
    updateCurrentRow,
    setCurrentRowKey,
    states: currentData
  } = useCurrent({
    data,
    rowKey
  });
  const setExpandRowKeysAdapter = (val) => {
    setExpandRowKeys(val);
    updateTreeExpandKeys(val);
  };
  const toggleRowExpansionAdapter = (row, expanded) => {
    const hasExpandColumn = columns.value.some(({ type }) => type === "expand");
    if (hasExpandColumn) {
      toggleRowExpansion(row, expanded);
    } else {
      toggleTreeExpansion(row, expanded);
    }
  };
  return {
    assertRowKey,
    updateColumns,
    scheduleLayout,
    isSelected,
    clearSelection,
    cleanSelection,
    getSelectionRows,
    toggleRowSelection,
    _toggleAllSelection,
    toggleAllSelection: null,
    updateSelectionByRowKey,
    updateAllSelected,
    updateFilters,
    updateCurrentRow,
    updateSort,
    execFilter,
    execSort,
    execQuery,
    clearFilter,
    clearSort,
    toggleRowExpansion,
    setExpandRowKeysAdapter,
    setCurrentRowKey,
    toggleRowExpansionAdapter,
    isRowExpanded,
    updateExpandRows,
    updateCurrentRowData,
    loadOrToggle,
    updateTreeData,
    states: {
      tableSize,
      rowKey,
      data,
      _data,
      isComplex,
      _columns,
      originColumns,
      columns,
      fixedColumns,
      rightFixedColumns,
      leafColumns,
      fixedLeafColumns,
      rightFixedLeafColumns,
      leafColumnsLength,
      fixedLeafColumnsLength,
      rightFixedLeafColumnsLength,
      isAllSelected,
      selection,
      reserveSelection,
      selectOnIndeterminate,
      selectable,
      filters,
      filteredData,
      sortingColumn,
      sortProp,
      sortOrder,
      hoverRow,
      ...expandStates,
      ...treeStates,
      ...currentData
    }
  };
}

function replaceColumn(array, column) {
  return array.map((item) => {
    var _a;
    if (item.id === column.id) {
      return column;
    } else if ((_a = item.children) == null ? void 0 : _a.length) {
      item.children = replaceColumn(item.children, column);
    }
    return item;
  });
}
function sortColumn(array) {
  array.forEach((item) => {
    var _a, _b;
    item.no = (_a = item.getColumnIndex) == null ? void 0 : _a.call(item);
    if ((_b = item.children) == null ? void 0 : _b.length) {
      sortColumn(item.children);
    }
  });
  array.sort((cur, pre) => cur.no - pre.no);
}
function useStore() {
  const instance = getCurrentInstance();
  const watcher = useWatcher$1();
  const ns = useNamespace("table");
  const mutations = {
    setData(states, data) {
      const dataInstanceChanged = unref(states._data) !== data;
      states.data.value = data;
      states._data.value = data;
      instance.store.execQuery();
      instance.store.updateCurrentRowData();
      instance.store.updateExpandRows();
      instance.store.updateTreeData(instance.store.states.defaultExpandAll.value);
      if (unref(states.reserveSelection)) {
        instance.store.assertRowKey();
        instance.store.updateSelectionByRowKey();
      } else {
        if (dataInstanceChanged) {
          instance.store.clearSelection();
        } else {
          instance.store.cleanSelection();
        }
      }
      instance.store.updateAllSelected();
      if (instance.$ready) {
        instance.store.scheduleLayout();
      }
    },
    insertColumn(states, column, parent) {
      const array = unref(states._columns);
      let newColumns = [];
      if (!parent) {
        array.push(column);
        newColumns = array;
      } else {
        if (parent && !parent.children) {
          parent.children = [];
        }
        parent.children.push(column);
        newColumns = replaceColumn(array, parent);
      }
      sortColumn(newColumns);
      states._columns.value = newColumns;
      if (column.type === "selection") {
        states.selectable.value = column.selectable;
        states.reserveSelection.value = column.reserveSelection;
      }
      if (instance.$ready) {
        instance.store.updateColumns();
        instance.store.scheduleLayout();
      }
    },
    removeColumn(states, column, parent) {
      const array = unref(states._columns) || [];
      if (parent) {
        parent.children.splice(parent.children.findIndex((item) => item.id === column.id), 1);
        if (parent.children.length === 0) {
          delete parent.children;
        }
        states._columns.value = replaceColumn(array, parent);
      } else {
        const index = array.indexOf(column);
        if (index > -1) {
          array.splice(index, 1);
          states._columns.value = array;
        }
      }
      if (instance.$ready) {
        instance.store.updateColumns();
        instance.store.scheduleLayout();
      }
    },
    sort(states, options) {
      const { prop, order, init } = options;
      if (prop) {
        const column = unref(states.columns).find((column2) => column2.property === prop);
        if (column) {
          column.order = order;
          instance.store.updateSort(column, prop, order);
          instance.store.commit("changeSortCondition", { init });
        }
      }
    },
    changeSortCondition(states, options) {
      const { sortingColumn: column, sortProp: prop, sortOrder: order } = states;
      if (unref(order) === null) {
        states.sortingColumn.value = null;
        states.sortProp.value = null;
      }
      const ingore = { filter: true };
      instance.store.execQuery(ingore);
      if (!options || !(options.silent || options.init)) {
        instance.emit("sort-change", {
          column: unref(column),
          prop: unref(prop),
          order: unref(order)
        });
      }
      instance.store.updateTableScrollY();
    },
    filterChange(_states, options) {
      const { column, values, silent } = options;
      const newFilters = instance.store.updateFilters(column, values);
      instance.store.execQuery();
      if (!silent) {
        instance.emit("filter-change", newFilters);
      }
      instance.store.updateTableScrollY();
    },
    toggleAllSelection() {
      instance.store.toggleAllSelection();
    },
    rowSelectedChanged(_states, row) {
      instance.store.toggleRowSelection(row);
      instance.store.updateAllSelected();
    },
    setHoverRow(states, row) {
      states.hoverRow.value = row;
    },
    setCurrentRow(_states, row) {
      instance.store.updateCurrentRow(row);
    }
  };
  const commit = function(name, ...args) {
    const mutations2 = instance.store.mutations;
    if (mutations2[name]) {
      mutations2[name].apply(instance, [instance.store.states].concat(args));
    } else {
      throw new Error(`Action not found: ${name}`);
    }
  };
  const updateTableScrollY = function() {
    nextTick(() => instance.layout.updateScrollY.apply(instance.layout));
  };
  return {
    ns,
    ...watcher,
    mutations,
    commit,
    updateTableScrollY
  };
}

const InitialStateMap = {
  rowKey: "rowKey",
  defaultExpandAll: "defaultExpandAll",
  selectOnIndeterminate: "selectOnIndeterminate",
  indent: "indent",
  lazy: "lazy",
  data: "data",
  ["treeProps.hasChildren"]: {
    key: "lazyColumnIdentifier",
    default: "hasChildren"
  },
  ["treeProps.children"]: {
    key: "childrenColumnName",
    default: "children"
  }
};
function createStore(table, props) {
  if (!table) {
    throw new Error("Table is required.");
  }
  const store = useStore();
  store.toggleAllSelection = debounce$1(store._toggleAllSelection, 10);
  Object.keys(InitialStateMap).forEach((key) => {
    handleValue(getArrKeysValue(props, key), key, store);
  });
  proxyTableProps(store, props);
  return store;
}
function proxyTableProps(store, props) {
  Object.keys(InitialStateMap).forEach((key) => {
    watch(() => getArrKeysValue(props, key), (value) => {
      handleValue(value, key, store);
    });
  });
}
function handleValue(value, propsKey, store) {
  let newVal = value;
  let storeKey = InitialStateMap[propsKey];
  if (typeof InitialStateMap[propsKey] === "object") {
    storeKey = storeKey.key;
    newVal = newVal || InitialStateMap[propsKey].default;
  }
  store.states[storeKey].value = newVal;
}
function getArrKeysValue(props, keys) {
  if (keys.includes(".")) {
    const keyList = keys.split(".");
    let value = props;
    keyList.forEach((key) => {
      value = value[key];
    });
    return value;
  } else {
    return props[keys];
  }
}

class TableLayout {
  constructor(options) {
    this.observers = [];
    this.table = null;
    this.store = null;
    this.columns = [];
    this.fit = true;
    this.showHeader = true;
    this.height = ref(null);
    this.scrollX = ref(false);
    this.scrollY = ref(false);
    this.bodyWidth = ref(null);
    this.fixedWidth = ref(null);
    this.rightFixedWidth = ref(null);
    this.tableHeight = ref(null);
    this.headerHeight = ref(44);
    this.appendHeight = ref(0);
    this.footerHeight = ref(44);
    this.viewportHeight = ref(null);
    this.bodyHeight = ref(null);
    this.bodyScrollHeight = ref(0);
    this.fixedBodyHeight = ref(null);
    this.gutterWidth = 0;
    for (const name in options) {
      if (hasOwn$2(options, name)) {
        if (isRef(this[name])) {
          this[name].value = options[name];
        } else {
          this[name] = options[name];
        }
      }
    }
    if (!this.table) {
      throw new Error("Table is required for Table Layout");
    }
    if (!this.store) {
      throw new Error("Store is required for Table Layout");
    }
  }
  updateScrollY() {
    const height = this.height.value;
    if (height === null)
      return false;
    const bodyWrapper = this.table.refs.bodyWrapper;
    if (this.table.vnode.el && bodyWrapper) {
      let scrollY = true;
      const prevScrollY = this.scrollY.value;
      if (this.bodyHeight.value === null) {
        scrollY = false;
      } else {
        scrollY = bodyWrapper.scrollHeight > this.bodyHeight.value;
      }
      this.scrollY.value = scrollY;
      return prevScrollY !== scrollY;
    }
    return false;
  }
  setHeight(value, prop = "height") {
    if (!isClient)
      return;
    const el = this.table.vnode.el;
    value = parseHeight(value);
    this.height.value = Number(value);
    if (!el && (value || value === 0))
      return nextTick(() => this.setHeight(value, prop));
    if (typeof value === "number") {
      el.style[prop] = `${value}px`;
      this.updateElsHeight();
    } else if (typeof value === "string") {
      el.style[prop] = value;
      this.updateElsHeight();
    }
  }
  setMaxHeight(value) {
    this.setHeight(value, "max-height");
  }
  getFlattenColumns() {
    const flattenColumns = [];
    const columns = this.table.store.states.columns.value;
    columns.forEach((column) => {
      if (column.isColumnGroup) {
        flattenColumns.push.apply(flattenColumns, column.columns);
      } else {
        flattenColumns.push(column);
      }
    });
    return flattenColumns;
  }
  updateElsHeight() {
    var _a, _b;
    if (!this.table.$ready)
      return nextTick(() => this.updateElsHeight());
    const {
      tableWrapper,
      headerWrapper,
      appendWrapper,
      footerWrapper,
      tableHeader,
      tableBody
    } = this.table.refs;
    if (tableWrapper && tableWrapper.style.display === "none") {
      return;
    }
    const { tableLayout } = this.table.props;
    this.appendHeight.value = appendWrapper ? appendWrapper.offsetHeight : 0;
    if (this.showHeader && !headerWrapper && tableLayout === "fixed") {
      return;
    }
    const headerTrElm = tableHeader ? tableHeader : null;
    const noneHeader = this.headerDisplayNone(headerTrElm);
    const headerWrapperOffsetHeight = (headerWrapper == null ? void 0 : headerWrapper.offsetHeight) || 0;
    const headerHeight = this.headerHeight.value = !this.showHeader ? 0 : headerWrapperOffsetHeight;
    if (this.showHeader && !noneHeader && headerWrapperOffsetHeight > 0 && (this.table.store.states.columns.value || []).length > 0 && headerHeight < 2) {
      return nextTick(() => this.updateElsHeight());
    }
    const tableHeight = this.tableHeight.value = (_b = (_a = this.table) == null ? void 0 : _a.vnode.el) == null ? void 0 : _b.clientHeight;
    const footerHeight = this.footerHeight.value = footerWrapper ? footerWrapper.offsetHeight : 0;
    if (this.height.value !== null) {
      if (this.bodyHeight.value === null) {
        requestAnimationFrame(() => this.updateElsHeight());
      }
      this.bodyHeight.value = tableHeight - headerHeight - footerHeight + (footerWrapper ? 1 : 0);
      this.bodyScrollHeight.value = tableBody == null ? void 0 : tableBody.scrollHeight;
    }
    this.fixedBodyHeight.value = this.scrollX.value ? this.bodyHeight.value - this.gutterWidth : this.bodyHeight.value;
    this.viewportHeight.value = this.scrollX.value ? tableHeight - this.gutterWidth : tableHeight;
    this.updateScrollY();
    this.notifyObservers("scrollable");
  }
  headerDisplayNone(elm) {
    if (!elm)
      return true;
    let headerChild = elm;
    while (headerChild.tagName !== "DIV") {
      if (getComputedStyle(headerChild).display === "none") {
        return true;
      }
      headerChild = headerChild.parentElement;
    }
    return false;
  }
  updateColumnsWidth() {
    if (!isClient)
      return;
    const fit = this.fit;
    const bodyWidth = this.table.vnode.el.clientWidth;
    let bodyMinWidth = 0;
    const flattenColumns = this.getFlattenColumns();
    const flexColumns = flattenColumns.filter((column) => typeof column.width !== "number");
    flattenColumns.forEach((column) => {
      if (typeof column.width === "number" && column.realWidth)
        column.realWidth = null;
    });
    if (flexColumns.length > 0 && fit) {
      flattenColumns.forEach((column) => {
        bodyMinWidth += Number(column.width || column.minWidth || 80);
      });
      if (bodyMinWidth <= bodyWidth) {
        this.scrollX.value = false;
        const totalFlexWidth = bodyWidth - bodyMinWidth;
        if (flexColumns.length === 1) {
          flexColumns[0].realWidth = Number(flexColumns[0].minWidth || 80) + totalFlexWidth;
        } else {
          const allColumnsWidth = flexColumns.reduce((prev, column) => prev + Number(column.minWidth || 80), 0);
          const flexWidthPerPixel = totalFlexWidth / allColumnsWidth;
          let noneFirstWidth = 0;
          flexColumns.forEach((column, index) => {
            if (index === 0)
              return;
            const flexWidth = Math.floor(Number(column.minWidth || 80) * flexWidthPerPixel);
            noneFirstWidth += flexWidth;
            column.realWidth = Number(column.minWidth || 80) + flexWidth;
          });
          flexColumns[0].realWidth = Number(flexColumns[0].minWidth || 80) + totalFlexWidth - noneFirstWidth;
        }
      } else {
        this.scrollX.value = true;
        flexColumns.forEach((column) => {
          column.realWidth = Number(column.minWidth);
        });
      }
      this.bodyWidth.value = Math.max(bodyMinWidth, bodyWidth);
      this.table.state.resizeState.value.width = this.bodyWidth.value;
    } else {
      flattenColumns.forEach((column) => {
        if (!column.width && !column.minWidth) {
          column.realWidth = 80;
        } else {
          column.realWidth = Number(column.width || column.minWidth);
        }
        bodyMinWidth += column.realWidth;
      });
      this.scrollX.value = bodyMinWidth > bodyWidth;
      this.bodyWidth.value = bodyMinWidth;
    }
    const fixedColumns = this.store.states.fixedColumns.value;
    if (fixedColumns.length > 0) {
      let fixedWidth = 0;
      fixedColumns.forEach((column) => {
        fixedWidth += Number(column.realWidth || column.width);
      });
      this.fixedWidth.value = fixedWidth;
    }
    const rightFixedColumns = this.store.states.rightFixedColumns.value;
    if (rightFixedColumns.length > 0) {
      let rightFixedWidth = 0;
      rightFixedColumns.forEach((column) => {
        rightFixedWidth += Number(column.realWidth || column.width);
      });
      this.rightFixedWidth.value = rightFixedWidth;
    }
    this.notifyObservers("columns");
  }
  addObserver(observer) {
    this.observers.push(observer);
  }
  removeObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }
  notifyObservers(event) {
    const observers = this.observers;
    observers.forEach((observer) => {
      var _a, _b;
      switch (event) {
        case "columns":
          (_a = observer.state) == null ? void 0 : _a.onColumnsChange(this);
          break;
        case "scrollable":
          (_b = observer.state) == null ? void 0 : _b.onScrollableChange(this);
          break;
        default:
          throw new Error(`Table Layout don't have event ${event}.`);
      }
    });
  }
}

const { CheckboxGroup: ElCheckboxGroup } = ElCheckbox;
const _sfc_main$h = defineComponent({
  name: "ElTableFilterPanel",
  components: {
    ElCheckbox,
    ElCheckboxGroup,
    ElScrollbar,
    ElTooltip,
    ElIcon,
    ArrowDown: arrowDown,
    ArrowUp: arrowUp
  },
  directives: { ClickOutside },
  props: {
    placement: {
      type: String,
      default: "bottom-start"
    },
    store: {
      type: Object
    },
    column: {
      type: Object
    },
    upDataColumn: {
      type: Function
    }
  },
  setup(props) {
    const instance = getCurrentInstance();
    const { t } = useLocale();
    const ns = useNamespace("table-filter");
    const parent = instance == null ? void 0 : instance.parent;
    if (!parent.filterPanels.value[props.column.id]) {
      parent.filterPanels.value[props.column.id] = instance;
    }
    const tooltipVisible = ref(false);
    const tooltip = ref(null);
    const filters = computed(() => {
      return props.column && props.column.filters;
    });
    const filterValue = computed({
      get: () => {
        var _a;
        return (((_a = props.column) == null ? void 0 : _a.filteredValue) || [])[0];
      },
      set: (value) => {
        if (filteredValue.value) {
          if (typeof value !== "undefined" && value !== null) {
            filteredValue.value.splice(0, 1, value);
          } else {
            filteredValue.value.splice(0, 1);
          }
        }
      }
    });
    const filteredValue = computed({
      get() {
        if (props.column) {
          return props.column.filteredValue || [];
        }
        return [];
      },
      set(value) {
        if (props.column) {
          props.upDataColumn("filteredValue", value);
        }
      }
    });
    const multiple = computed(() => {
      if (props.column) {
        return props.column.filterMultiple;
      }
      return true;
    });
    const isActive = (filter) => {
      return filter.value === filterValue.value;
    };
    const hidden = () => {
      tooltipVisible.value = false;
    };
    const showFilterPanel = (e) => {
      e.stopPropagation();
      tooltipVisible.value = !tooltipVisible.value;
    };
    const hideFilterPanel = () => {
      tooltipVisible.value = false;
    };
    const handleConfirm = () => {
      confirmFilter(filteredValue.value);
      hidden();
    };
    const handleReset = () => {
      filteredValue.value = [];
      confirmFilter(filteredValue.value);
      hidden();
    };
    const handleSelect = (_filterValue) => {
      filterValue.value = _filterValue;
      if (typeof _filterValue !== "undefined" && _filterValue !== null) {
        confirmFilter(filteredValue.value);
      } else {
        confirmFilter([]);
      }
      hidden();
    };
    const confirmFilter = (filteredValue2) => {
      props.store.commit("filterChange", {
        column: props.column,
        values: filteredValue2
      });
      props.store.updateAllSelected();
    };
    watch(tooltipVisible, (value) => {
      if (props.column) {
        props.upDataColumn("filterOpened", value);
      }
    }, {
      immediate: true
    });
    const popperPaneRef = computed(() => {
      var _a, _b;
      return (_b = (_a = tooltip.value) == null ? void 0 : _a.popperRef) == null ? void 0 : _b.contentRef;
    });
    return {
      tooltipVisible,
      multiple,
      filteredValue,
      filterValue,
      filters,
      handleConfirm,
      handleReset,
      handleSelect,
      isActive,
      t,
      ns,
      showFilterPanel,
      hideFilterPanel,
      popperPaneRef,
      tooltip
    };
  }
});
const _hoisted_1$j = { key: 0 };
const _hoisted_2$h = ["disabled"];
const _hoisted_3$b = ["label", "onClick"];
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_checkbox = resolveComponent("el-checkbox");
  const _component_el_checkbox_group = resolveComponent("el-checkbox-group");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  const _component_arrow_up = resolveComponent("arrow-up");
  const _component_arrow_down = resolveComponent("arrow-down");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_tooltip = resolveComponent("el-tooltip");
  const _directive_click_outside = resolveDirective("click-outside");
  return openBlock(), createBlock(_component_el_tooltip, {
    ref: "tooltip",
    visible: _ctx.tooltipVisible,
    "onUpdate:visible": _cache[5] || (_cache[5] = ($event) => _ctx.tooltipVisible = $event),
    offset: 0,
    placement: _ctx.placement,
    "show-arrow": false,
    "stop-popper-mouse-event": false,
    "append-to-body": "",
    effect: "light",
    pure: "",
    "popper-class": _ctx.ns.b(),
    persistent: ""
  }, {
    content: withCtx(() => [
      _ctx.multiple ? (openBlock(), createElementBlock("div", _hoisted_1$j, [
        createElementVNode("div", {
          class: normalizeClass(_ctx.ns.e("content"))
        }, [
          createVNode(_component_el_scrollbar, {
            "wrap-class": _ctx.ns.e("wrap")
          }, {
            default: withCtx(() => [
              createVNode(_component_el_checkbox_group, {
                modelValue: _ctx.filteredValue,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.filteredValue = $event),
                class: normalizeClass(_ctx.ns.e("checkbox-group"))
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.filters, (filter) => {
                    return openBlock(), createBlock(_component_el_checkbox, {
                      key: filter.value,
                      label: filter.value
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(filter.text), 1)
                      ]),
                      _: 2
                    }, 1032, ["label"]);
                  }), 128))
                ]),
                _: 1
              }, 8, ["modelValue", "class"])
            ]),
            _: 1
          }, 8, ["wrap-class"])
        ], 2),
        createElementVNode("div", {
          class: normalizeClass(_ctx.ns.e("bottom"))
        }, [
          createElementVNode("button", {
            class: normalizeClass({ [_ctx.ns.is("disabled")]: _ctx.filteredValue.length === 0 }),
            disabled: _ctx.filteredValue.length === 0,
            type: "button",
            onClick: _cache[1] || (_cache[1] = (...args) => _ctx.handleConfirm && _ctx.handleConfirm(...args))
          }, toDisplayString(_ctx.t("el.table.confirmFilter")), 11, _hoisted_2$h),
          createElementVNode("button", {
            type: "button",
            onClick: _cache[2] || (_cache[2] = (...args) => _ctx.handleReset && _ctx.handleReset(...args))
          }, toDisplayString(_ctx.t("el.table.resetFilter")), 1)
        ], 2)
      ])) : (openBlock(), createElementBlock("ul", {
        key: 1,
        class: normalizeClass(_ctx.ns.e("list"))
      }, [
        createElementVNode("li", {
          class: normalizeClass([
            _ctx.ns.e("list-item"),
            {
              [_ctx.ns.is("active")]: _ctx.filterValue === void 0 || _ctx.filterValue === null
            }
          ]),
          onClick: _cache[3] || (_cache[3] = ($event) => _ctx.handleSelect(null))
        }, toDisplayString(_ctx.t("el.table.clearFilter")), 3),
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.filters, (filter) => {
          return openBlock(), createElementBlock("li", {
            key: filter.value,
            class: normalizeClass([_ctx.ns.e("list-item"), _ctx.ns.is("active", _ctx.isActive(filter))]),
            label: filter.value,
            onClick: ($event) => _ctx.handleSelect(filter.value)
          }, toDisplayString(filter.text), 11, _hoisted_3$b);
        }), 128))
      ], 2))
    ]),
    default: withCtx(() => [
      withDirectives((openBlock(), createElementBlock("span", {
        class: normalizeClass([
          `${_ctx.ns.namespace.value}-table__column-filter-trigger`,
          `${_ctx.ns.namespace.value}-none-outline`
        ]),
        onClick: _cache[4] || (_cache[4] = (...args) => _ctx.showFilterPanel && _ctx.showFilterPanel(...args))
      }, [
        createVNode(_component_el_icon, null, {
          default: withCtx(() => [
            _ctx.column.filterOpened ? (openBlock(), createBlock(_component_arrow_up, { key: 0 })) : (openBlock(), createBlock(_component_arrow_down, { key: 1 }))
          ]),
          _: 1
        })
      ], 2)), [
        [_directive_click_outside, _ctx.hideFilterPanel, _ctx.popperPaneRef]
      ])
    ]),
    _: 1
  }, 8, ["visible", "placement", "popper-class"]);
}
var FilterPanel = /* @__PURE__ */ _export_sfc$2(_sfc_main$h, [["render", _sfc_render$6], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/table/src/filter-panel.vue"]]);

function useLayoutObserver(root) {
  const instance = getCurrentInstance();
  onBeforeMount(() => {
    tableLayout.value.addObserver(instance);
  });
  onMounted(() => {
    onColumnsChange(tableLayout.value);
    onScrollableChange(tableLayout.value);
  });
  onUpdated(() => {
    onColumnsChange(tableLayout.value);
    onScrollableChange(tableLayout.value);
  });
  onUnmounted(() => {
    tableLayout.value.removeObserver(instance);
  });
  const tableLayout = computed(() => {
    const layout = root.layout;
    if (!layout) {
      throw new Error("Can not find table layout.");
    }
    return layout;
  });
  const onColumnsChange = (layout) => {
    var _a;
    const cols = ((_a = root.vnode.el) == null ? void 0 : _a.querySelectorAll("colgroup > col")) || [];
    if (!cols.length)
      return;
    const flattenColumns = layout.getFlattenColumns();
    const columnsMap = {};
    flattenColumns.forEach((column) => {
      columnsMap[column.id] = column;
    });
    for (let i = 0, j = cols.length; i < j; i++) {
      const col = cols[i];
      const name = col.getAttribute("name");
      const column = columnsMap[name];
      if (column) {
        col.setAttribute("width", column.realWidth || column.width);
      }
    }
  };
  const onScrollableChange = (layout) => {
    var _a, _b;
    const cols = ((_a = root.vnode.el) == null ? void 0 : _a.querySelectorAll("colgroup > col[name=gutter]")) || [];
    for (let i = 0, j = cols.length; i < j; i++) {
      const col = cols[i];
      col.setAttribute("width", layout.scrollY.value ? layout.gutterWidth : "0");
    }
    const ths = ((_b = root.vnode.el) == null ? void 0 : _b.querySelectorAll("th.gutter")) || [];
    for (let i = 0, j = ths.length; i < j; i++) {
      const th = ths[i];
      th.style.width = layout.scrollY.value ? `${layout.gutterWidth}px` : "0";
      th.style.display = layout.scrollY.value ? "" : "none";
    }
  };
  return {
    tableLayout: tableLayout.value,
    onColumnsChange,
    onScrollableChange
  };
}

const TABLE_INJECTION_KEY = Symbol("ElTable");

function useEvent(props, emit) {
  const instance = getCurrentInstance();
  const parent = inject(TABLE_INJECTION_KEY);
  const handleFilterClick = (event) => {
    event.stopPropagation();
    return;
  };
  const handleHeaderClick = (event, column) => {
    if (!column.filters && column.sortable) {
      handleSortClick(event, column, false);
    } else if (column.filterable && !column.sortable) {
      handleFilterClick(event);
    }
    parent == null ? void 0 : parent.emit("header-click", column, event);
  };
  const handleHeaderContextMenu = (event, column) => {
    parent == null ? void 0 : parent.emit("header-contextmenu", column, event);
  };
  const draggingColumn = ref(null);
  const dragging = ref(false);
  const dragState = ref({});
  const handleMouseDown = (event, column) => {
    if (!isClient)
      return;
    if (column.children && column.children.length > 0)
      return;
    if (draggingColumn.value && props.border) {
      dragging.value = true;
      const table = parent;
      emit("set-drag-visible", true);
      const tableEl = table == null ? void 0 : table.vnode.el;
      const tableLeft = tableEl.getBoundingClientRect().left;
      const columnEl = instance.vnode.el.querySelector(`th.${column.id}`);
      const columnRect = columnEl.getBoundingClientRect();
      const minLeft = columnRect.left - tableLeft + 30;
      addClass(columnEl, "noclick");
      dragState.value = {
        startMouseLeft: event.clientX,
        startLeft: columnRect.right - tableLeft,
        startColumnLeft: columnRect.left - tableLeft,
        tableLeft
      };
      const resizeProxy = table == null ? void 0 : table.refs.resizeProxy;
      resizeProxy.style.left = `${dragState.value.startLeft}px`;
      document.onselectstart = function() {
        return false;
      };
      document.ondragstart = function() {
        return false;
      };
      const handleMouseMove2 = (event2) => {
        const deltaLeft = event2.clientX - dragState.value.startMouseLeft;
        const proxyLeft = dragState.value.startLeft + deltaLeft;
        resizeProxy.style.left = `${Math.max(minLeft, proxyLeft)}px`;
      };
      const handleMouseUp = () => {
        if (dragging.value) {
          const { startColumnLeft, startLeft } = dragState.value;
          const finalLeft = Number.parseInt(resizeProxy.style.left, 10);
          const columnWidth = finalLeft - startColumnLeft;
          column.width = column.realWidth = columnWidth;
          table == null ? void 0 : table.emit("header-dragend", column.width, startLeft - startColumnLeft, column, event);
          requestAnimationFrame(() => {
            props.store.scheduleLayout(false, true);
          });
          document.body.style.cursor = "";
          dragging.value = false;
          draggingColumn.value = null;
          dragState.value = {};
          emit("set-drag-visible", false);
        }
        document.removeEventListener("mousemove", handleMouseMove2);
        document.removeEventListener("mouseup", handleMouseUp);
        document.onselectstart = null;
        document.ondragstart = null;
        setTimeout(() => {
          removeClass(columnEl, "noclick");
        }, 0);
      };
      document.addEventListener("mousemove", handleMouseMove2);
      document.addEventListener("mouseup", handleMouseUp);
    }
  };
  const handleMouseMove = (event, column) => {
    if (column.children && column.children.length > 0)
      return;
    let target = event.target;
    while (target && target.tagName !== "TH") {
      target = target.parentNode;
    }
    if (!column || !column.resizable)
      return;
    if (!dragging.value && props.border) {
      const rect = target.getBoundingClientRect();
      const bodyStyle = document.body.style;
      if (rect.width > 12 && rect.right - event.pageX < 8) {
        bodyStyle.cursor = "col-resize";
        if (hasClass(target, "is-sortable")) {
          target.style.cursor = "col-resize";
        }
        draggingColumn.value = column;
      } else if (!dragging.value) {
        bodyStyle.cursor = "";
        if (hasClass(target, "is-sortable")) {
          target.style.cursor = "pointer";
        }
        draggingColumn.value = null;
      }
    }
  };
  const handleMouseOut = () => {
    if (!isClient)
      return;
    document.body.style.cursor = "";
  };
  const toggleOrder = ({ order, sortOrders }) => {
    if (order === "")
      return sortOrders[0];
    const index = sortOrders.indexOf(order || null);
    return sortOrders[index > sortOrders.length - 2 ? 0 : index + 1];
  };
  const handleSortClick = (event, column, givenOrder) => {
    event.stopPropagation();
    const order = column.order === givenOrder ? null : givenOrder || toggleOrder(column);
    let target = event.target;
    while (target && target.tagName !== "TH") {
      target = target.parentNode;
    }
    if (target && target.tagName === "TH") {
      if (hasClass(target, "noclick")) {
        removeClass(target, "noclick");
        return;
      }
    }
    if (!column.sortable)
      return;
    const states = props.store.states;
    let sortProp = states.sortProp.value;
    let sortOrder;
    const sortingColumn = states.sortingColumn.value;
    if (sortingColumn !== column || sortingColumn === column && sortingColumn.order === null) {
      if (sortingColumn) {
        sortingColumn.order = null;
      }
      states.sortingColumn.value = column;
      sortProp = column.property;
    }
    if (!order) {
      sortOrder = column.order = null;
    } else {
      sortOrder = column.order = order;
    }
    states.sortProp.value = sortProp;
    states.sortOrder.value = sortOrder;
    parent == null ? void 0 : parent.store.commit("changeSortCondition");
  };
  return {
    handleHeaderClick,
    handleHeaderContextMenu,
    handleMouseDown,
    handleMouseMove,
    handleMouseOut,
    handleSortClick,
    handleFilterClick
  };
}

function useStyle$2(props) {
  const parent = inject(TABLE_INJECTION_KEY);
  const ns = useNamespace("table");
  const getHeaderRowStyle = (rowIndex) => {
    const headerRowStyle = parent == null ? void 0 : parent.props.headerRowStyle;
    if (typeof headerRowStyle === "function") {
      return headerRowStyle.call(null, { rowIndex });
    }
    return headerRowStyle;
  };
  const getHeaderRowClass = (rowIndex) => {
    const classes = [];
    const headerRowClassName = parent == null ? void 0 : parent.props.headerRowClassName;
    if (typeof headerRowClassName === "string") {
      classes.push(headerRowClassName);
    } else if (typeof headerRowClassName === "function") {
      classes.push(headerRowClassName.call(null, { rowIndex }));
    }
    return classes.join(" ");
  };
  const getHeaderCellStyle = (rowIndex, columnIndex, row, column) => {
    var _a;
    let headerCellStyles = (_a = parent == null ? void 0 : parent.props.headerCellStyle) != null ? _a : {};
    if (typeof headerCellStyles === "function") {
      headerCellStyles = headerCellStyles.call(null, {
        rowIndex,
        columnIndex,
        row,
        column
      });
    }
    const fixedStyle = column.isSubColumn ? null : getFixedColumnOffset(columnIndex, column.fixed, props.store, row);
    ensurePosition(fixedStyle, "left");
    ensurePosition(fixedStyle, "right");
    return Object.assign({}, headerCellStyles, fixedStyle);
  };
  const getHeaderCellClass = (rowIndex, columnIndex, row, column) => {
    const fixedClasses = column.isSubColumn ? [] : getFixedColumnsClass(ns.b(), columnIndex, column.fixed, props.store, row);
    const classes = [
      column.id,
      column.order,
      column.headerAlign,
      column.className,
      column.labelClassName,
      ...fixedClasses
    ];
    if (!column.children) {
      classes.push("is-leaf");
    }
    if (column.sortable) {
      classes.push("is-sortable");
    }
    const headerCellClassName = parent == null ? void 0 : parent.props.headerCellClassName;
    if (typeof headerCellClassName === "string") {
      classes.push(headerCellClassName);
    } else if (typeof headerCellClassName === "function") {
      classes.push(headerCellClassName.call(null, {
        rowIndex,
        columnIndex,
        row,
        column
      }));
    }
    classes.push(ns.e("cell"));
    return classes.filter((className) => Boolean(className)).join(" ");
  };
  return {
    getHeaderRowStyle,
    getHeaderRowClass,
    getHeaderCellStyle,
    getHeaderCellClass
  };
}

const getAllColumns = (columns) => {
  const result = [];
  columns.forEach((column) => {
    if (column.children) {
      result.push(column);
      result.push.apply(result, getAllColumns(column.children));
    } else {
      result.push(column);
    }
  });
  return result;
};
const convertToRows = (originColumns) => {
  let maxLevel = 1;
  const traverse = (column, parent) => {
    if (parent) {
      column.level = parent.level + 1;
      if (maxLevel < column.level) {
        maxLevel = column.level;
      }
    }
    if (column.children) {
      let colSpan = 0;
      column.children.forEach((subColumn) => {
        traverse(subColumn, column);
        colSpan += subColumn.colSpan;
      });
      column.colSpan = colSpan;
    } else {
      column.colSpan = 1;
    }
  };
  originColumns.forEach((column) => {
    column.level = 1;
    traverse(column, void 0);
  });
  const rows = [];
  for (let i = 0; i < maxLevel; i++) {
    rows.push([]);
  }
  const allColumns = getAllColumns(originColumns);
  allColumns.forEach((column) => {
    if (!column.children) {
      column.rowSpan = maxLevel - column.level + 1;
    } else {
      column.rowSpan = 1;
      column.children.forEach((col) => col.isSubColumn = true);
    }
    rows[column.level - 1].push(column);
  });
  return rows;
};
function useUtils$1(props) {
  const parent = inject(TABLE_INJECTION_KEY);
  const columnRows = computed(() => {
    return convertToRows(props.store.states.originColumns.value);
  });
  const isGroup = computed(() => {
    const result = columnRows.value.length > 1;
    if (result && parent) {
      parent.state.isGroup.value = true;
    }
    return result;
  });
  const toggleAllSelection = (event) => {
    event.stopPropagation();
    parent == null ? void 0 : parent.store.commit("toggleAllSelection");
  };
  return {
    isGroup,
    toggleAllSelection,
    columnRows
  };
}

var TableHeader = defineComponent({
  name: "ElTableHeader",
  components: {
    ElCheckbox
  },
  props: {
    fixed: {
      type: String,
      default: ""
    },
    store: {
      required: true,
      type: Object
    },
    border: Boolean,
    defaultSort: {
      type: Object,
      default: () => {
        return {
          prop: "",
          order: ""
        };
      }
    }
  },
  setup(props, { emit }) {
    const instance = getCurrentInstance();
    const parent = inject(TABLE_INJECTION_KEY);
    const ns = useNamespace("table");
    const filterPanels = ref({});
    const { onColumnsChange, onScrollableChange } = useLayoutObserver(parent);
    onMounted(async () => {
      await nextTick();
      await nextTick();
      const { prop, order } = props.defaultSort;
      parent == null ? void 0 : parent.store.commit("sort", { prop, order, init: true });
    });
    const {
      handleHeaderClick,
      handleHeaderContextMenu,
      handleMouseDown,
      handleMouseMove,
      handleMouseOut,
      handleSortClick,
      handleFilterClick
    } = useEvent(props, emit);
    const {
      getHeaderRowStyle,
      getHeaderRowClass,
      getHeaderCellStyle,
      getHeaderCellClass
    } = useStyle$2(props);
    const { isGroup, toggleAllSelection, columnRows } = useUtils$1(props);
    instance.state = {
      onColumnsChange,
      onScrollableChange
    };
    instance.filterPanels = filterPanels;
    return {
      ns,
      filterPanels,
      onColumnsChange,
      onScrollableChange,
      columnRows,
      getHeaderRowClass,
      getHeaderRowStyle,
      getHeaderCellClass,
      getHeaderCellStyle,
      handleHeaderClick,
      handleHeaderContextMenu,
      handleMouseDown,
      handleMouseMove,
      handleMouseOut,
      handleSortClick,
      handleFilterClick,
      isGroup,
      toggleAllSelection
    };
  },
  render() {
    const {
      ns,
      isGroup,
      columnRows,
      getHeaderCellStyle,
      getHeaderCellClass,
      getHeaderRowClass,
      getHeaderRowStyle,
      handleHeaderClick,
      handleHeaderContextMenu,
      handleMouseDown,
      handleMouseMove,
      handleSortClick,
      handleMouseOut,
      store,
      $parent
    } = this;
    let rowSpan = 1;
    return h$1("thead", {
      class: { [ns.is("group")]: isGroup }
    }, columnRows.map((subColumns, rowIndex) => h$1("tr", {
      class: getHeaderRowClass(rowIndex),
      key: rowIndex,
      style: getHeaderRowStyle(rowIndex)
    }, subColumns.map((column, cellIndex) => {
      if (column.rowSpan > rowSpan) {
        rowSpan = column.rowSpan;
      }
      return h$1("th", {
        class: getHeaderCellClass(rowIndex, cellIndex, subColumns, column),
        colspan: column.colSpan,
        key: `${column.id}-thead`,
        rowspan: column.rowSpan,
        style: getHeaderCellStyle(rowIndex, cellIndex, subColumns, column),
        onClick: ($event) => handleHeaderClick($event, column),
        onContextmenu: ($event) => handleHeaderContextMenu($event, column),
        onMousedown: ($event) => handleMouseDown($event, column),
        onMousemove: ($event) => handleMouseMove($event, column),
        onMouseout: handleMouseOut
      }, [
        h$1("div", {
          class: [
            "cell",
            column.filteredValue && column.filteredValue.length > 0 ? "highlight" : "",
            column.labelClassName
          ]
        }, [
          column.renderHeader ? column.renderHeader({
            column,
            $index: cellIndex,
            store,
            _self: $parent
          }) : column.label,
          column.sortable && h$1("span", {
            onClick: ($event) => handleSortClick($event, column),
            class: "caret-wrapper"
          }, [
            h$1("i", {
              onClick: ($event) => handleSortClick($event, column, "ascending"),
              class: "sort-caret ascending"
            }),
            h$1("i", {
              onClick: ($event) => handleSortClick($event, column, "descending"),
              class: "sort-caret descending"
            })
          ]),
          column.filterable && h$1(FilterPanel, {
            store,
            placement: column.filterPlacement || "bottom-start",
            column,
            upDataColumn: (key, value) => {
              column[key] = value;
            }
          })
        ])
      ]);
    }))));
  }
});

function useEvents(props) {
  const parent = inject(TABLE_INJECTION_KEY);
  const tooltipContent = ref("");
  const tooltipTrigger = ref(h$1("div"));
  const handleEvent = (event, row, name) => {
    var _a;
    const table = parent;
    const cell = getCell(event);
    let column;
    const namespace = (_a = table == null ? void 0 : table.vnode.el) == null ? void 0 : _a.dataset.prefix;
    if (cell) {
      column = getColumnByCell({
        columns: props.store.states.columns.value
      }, cell, namespace);
      if (column) {
        table == null ? void 0 : table.emit(`cell-${name}`, row, column, cell, event);
      }
    }
    table == null ? void 0 : table.emit(`row-${name}`, row, column, event);
  };
  const handleDoubleClick = (event, row) => {
    handleEvent(event, row, "dblclick");
  };
  const handleClick = (event, row) => {
    props.store.commit("setCurrentRow", row);
    handleEvent(event, row, "click");
  };
  const handleContextMenu = (event, row) => {
    handleEvent(event, row, "contextmenu");
  };
  const handleMouseEnter = debounce$1((index) => {
    props.store.commit("setHoverRow", index);
  }, 30);
  const handleMouseLeave = debounce$1(() => {
    props.store.commit("setHoverRow", null);
  }, 30);
  const handleCellMouseEnter = (event, row) => {
    var _a;
    const table = parent;
    const cell = getCell(event);
    const namespace = (_a = table == null ? void 0 : table.vnode.el) == null ? void 0 : _a.dataset.prefix;
    if (cell) {
      const column = getColumnByCell({
        columns: props.store.states.columns.value
      }, cell, namespace);
      const hoverState = table.hoverState = { cell, column, row };
      table == null ? void 0 : table.emit("cell-mouse-enter", hoverState.row, hoverState.column, hoverState.cell, event);
    }
    const cellChild = event.target.querySelector(".cell");
    if (!(hasClass(cellChild, `${namespace}-tooltip`) && cellChild.childNodes.length)) {
      return;
    }
    const range = document.createRange();
    range.setStart(cellChild, 0);
    range.setEnd(cellChild, cellChild.childNodes.length);
    const rangeWidth = range.getBoundingClientRect().width;
    const padding = (Number.parseInt(getStyle(cellChild, "paddingLeft"), 10) || 0) + (Number.parseInt(getStyle(cellChild, "paddingRight"), 10) || 0);
    if (rangeWidth + padding > cellChild.offsetWidth || cellChild.scrollWidth > cellChild.offsetWidth) {
      createTablePopper(cell, cell.innerText || cell.textContent, {
        placement: "top",
        strategy: "fixed"
      }, row.tooltipEffect);
    }
  };
  const handleCellMouseLeave = (event) => {
    const cell = getCell(event);
    if (!cell)
      return;
    const oldHoverState = parent == null ? void 0 : parent.hoverState;
    parent == null ? void 0 : parent.emit("cell-mouse-leave", oldHoverState == null ? void 0 : oldHoverState.row, oldHoverState == null ? void 0 : oldHoverState.column, oldHoverState == null ? void 0 : oldHoverState.cell, event);
  };
  return {
    handleDoubleClick,
    handleClick,
    handleContextMenu,
    handleMouseEnter,
    handleMouseLeave,
    handleCellMouseEnter,
    handleCellMouseLeave,
    tooltipContent,
    tooltipTrigger
  };
}

function useStyles(props) {
  const parent = inject(TABLE_INJECTION_KEY);
  const ns = useNamespace("table");
  const getRowStyle = (row, rowIndex) => {
    const rowStyle = parent == null ? void 0 : parent.props.rowStyle;
    if (typeof rowStyle === "function") {
      return rowStyle.call(null, {
        row,
        rowIndex
      });
    }
    return rowStyle || null;
  };
  const getRowClass = (row, rowIndex) => {
    const classes = [ns.e("row")];
    if ((parent == null ? void 0 : parent.props.highlightCurrentRow) && row === props.store.states.currentRow.value) {
      classes.push("current-row");
    }
    if (props.stripe && rowIndex % 2 === 1) {
      classes.push(ns.em("row", "striped"));
    }
    const rowClassName = parent == null ? void 0 : parent.props.rowClassName;
    if (typeof rowClassName === "string") {
      classes.push(rowClassName);
    } else if (typeof rowClassName === "function") {
      classes.push(rowClassName.call(null, {
        row,
        rowIndex
      }));
    }
    return classes;
  };
  const getCellStyle = (rowIndex, columnIndex, row, column) => {
    const cellStyle = parent == null ? void 0 : parent.props.cellStyle;
    let cellStyles = cellStyle != null ? cellStyle : {};
    if (typeof cellStyle === "function") {
      cellStyles = cellStyle.call(null, {
        rowIndex,
        columnIndex,
        row,
        column
      });
    }
    const fixedStyle = column.isSubColumn ? null : getFixedColumnOffset(columnIndex, props == null ? void 0 : props.fixed, props.store);
    ensurePosition(fixedStyle, "left");
    ensurePosition(fixedStyle, "right");
    return Object.assign({}, cellStyles, fixedStyle);
  };
  const getCellClass = (rowIndex, columnIndex, row, column) => {
    const fixedClasses = column.isSubColumn ? [] : getFixedColumnsClass(ns.b(), columnIndex, props == null ? void 0 : props.fixed, props.store);
    const classes = [column.id, column.align, column.className, ...fixedClasses];
    const cellClassName = parent == null ? void 0 : parent.props.cellClassName;
    if (typeof cellClassName === "string") {
      classes.push(cellClassName);
    } else if (typeof cellClassName === "function") {
      classes.push(cellClassName.call(null, {
        rowIndex,
        columnIndex,
        row,
        column
      }));
    }
    classes.push(ns.e("cell"));
    return classes.filter((className) => Boolean(className)).join(" ");
  };
  const getSpan = (row, column, rowIndex, columnIndex) => {
    let rowspan = 1;
    let colspan = 1;
    const fn = parent == null ? void 0 : parent.props.spanMethod;
    if (typeof fn === "function") {
      const result = fn({
        row,
        column,
        rowIndex,
        columnIndex
      });
      if (Array.isArray(result)) {
        rowspan = result[0];
        colspan = result[1];
      } else if (typeof result === "object") {
        rowspan = result.rowspan;
        colspan = result.colspan;
      }
    }
    return { rowspan, colspan };
  };
  const getColspanRealWidth = (columns, colspan, index) => {
    if (colspan < 1) {
      return columns[index].realWidth;
    }
    const widthArr = columns.map(({ realWidth, width }) => realWidth || width).slice(index, index + colspan);
    return Number(widthArr.reduce((acc, width) => Number(acc) + Number(width), -1));
  };
  return {
    getRowStyle,
    getRowClass,
    getCellStyle,
    getCellClass,
    getSpan,
    getColspanRealWidth
  };
}

function useRender$1(props) {
  const parent = inject(TABLE_INJECTION_KEY);
  const {
    handleDoubleClick,
    handleClick,
    handleContextMenu,
    handleMouseEnter,
    handleMouseLeave,
    handleCellMouseEnter,
    handleCellMouseLeave,
    tooltipContent,
    tooltipTrigger
  } = useEvents(props);
  const {
    getRowStyle,
    getRowClass,
    getCellStyle,
    getCellClass,
    getSpan,
    getColspanRealWidth
  } = useStyles(props);
  const firstDefaultColumnIndex = computed(() => {
    return props.store.states.columns.value.findIndex(({ type }) => type === "default");
  });
  const getKeyOfRow = (row, index) => {
    const rowKey = parent.props.rowKey;
    if (rowKey) {
      return getRowIdentity(row, rowKey);
    }
    return index;
  };
  const rowRender = (row, $index, treeRowData, expanded = false) => {
    const { tooltipEffect, store } = props;
    const { indent, columns } = store.states;
    const rowClasses = getRowClass(row, $index);
    let display = true;
    if (treeRowData) {
      rowClasses.push(`el-table__row--level-${treeRowData.level}`);
      display = treeRowData.display;
    }
    const displayStyle = display ? null : {
      display: "none"
    };
    return h$1("tr", {
      style: [displayStyle, getRowStyle(row, $index)],
      class: rowClasses,
      key: getKeyOfRow(row, $index),
      onDblclick: ($event) => handleDoubleClick($event, row),
      onClick: ($event) => handleClick($event, row),
      onContextmenu: ($event) => handleContextMenu($event, row),
      onMouseenter: () => handleMouseEnter($index),
      onMouseleave: handleMouseLeave
    }, columns.value.map((column, cellIndex) => {
      const { rowspan, colspan } = getSpan(row, column, $index, cellIndex);
      if (!rowspan || !colspan) {
        return null;
      }
      const columnData = { ...column };
      columnData.realWidth = getColspanRealWidth(columns.value, colspan, cellIndex);
      const data = {
        store: props.store,
        _self: props.context || parent,
        column: columnData,
        row,
        $index,
        cellIndex,
        expanded
      };
      if (cellIndex === firstDefaultColumnIndex.value && treeRowData) {
        data.treeNode = {
          indent: treeRowData.level * indent.value,
          level: treeRowData.level
        };
        if (typeof treeRowData.expanded === "boolean") {
          data.treeNode.expanded = treeRowData.expanded;
          if ("loading" in treeRowData) {
            data.treeNode.loading = treeRowData.loading;
          }
          if ("noLazyChildren" in treeRowData) {
            data.treeNode.noLazyChildren = treeRowData.noLazyChildren;
          }
        }
      }
      const baseKey = `${$index},${cellIndex}`;
      const patchKey = columnData.columnKey || columnData.rawColumnKey || "";
      const tdChildren = cellChildren(cellIndex, column, data);
      return h$1("td", {
        style: getCellStyle($index, cellIndex, row, column),
        class: getCellClass($index, cellIndex, row, column),
        key: `${patchKey}${baseKey}`,
        rowspan,
        colspan,
        onMouseenter: ($event) => handleCellMouseEnter($event, { ...row, tooltipEffect }),
        onMouseleave: handleCellMouseLeave
      }, [tdChildren]);
    }));
  };
  const cellChildren = (cellIndex, column, data) => {
    return column.renderCell(data);
  };
  const wrappedRowRender = (row, $index) => {
    const store = props.store;
    const { isRowExpanded, assertRowKey } = store;
    const { treeData, lazyTreeNodeMap, childrenColumnName, rowKey } = store.states;
    const columns = store.states.columns.value;
    const hasExpandColumn = columns.some(({ type }) => type === "expand");
    if (hasExpandColumn) {
      const expanded = isRowExpanded(row);
      const tr = rowRender(row, $index, void 0, expanded);
      const renderExpanded = parent.renderExpanded;
      if (expanded) {
        if (!renderExpanded) {
          console.error("[Element Error]renderExpanded is required.");
          return tr;
        }
        return [
          [
            tr,
            h$1("tr", {
              key: `expanded-row__${tr.key}`
            }, [
              h$1("td", {
                colspan: columns.length,
                class: "el-table__cell el-table__expanded-cell"
              }, [renderExpanded({ row, $index, store, expanded })])
            ])
          ]
        ];
      } else {
        return [[tr]];
      }
    } else if (Object.keys(treeData.value).length) {
      assertRowKey();
      const key = getRowIdentity(row, rowKey.value);
      let cur = treeData.value[key];
      let treeRowData = null;
      if (cur) {
        treeRowData = {
          expanded: cur.expanded,
          level: cur.level,
          display: true
        };
        if (typeof cur.lazy === "boolean") {
          if (typeof cur.loaded === "boolean" && cur.loaded) {
            treeRowData.noLazyChildren = !(cur.children && cur.children.length);
          }
          treeRowData.loading = cur.loading;
        }
      }
      const tmp = [rowRender(row, $index, treeRowData)];
      if (cur) {
        let i = 0;
        const traverse = (children, parent2) => {
          if (!(children && children.length && parent2))
            return;
          children.forEach((node) => {
            const innerTreeRowData = {
              display: parent2.display && parent2.expanded,
              level: parent2.level + 1,
              expanded: false,
              noLazyChildren: false,
              loading: false
            };
            const childKey = getRowIdentity(node, rowKey.value);
            if (childKey === void 0 || childKey === null) {
              throw new Error("For nested data item, row-key is required.");
            }
            cur = { ...treeData.value[childKey] };
            if (cur) {
              innerTreeRowData.expanded = cur.expanded;
              cur.level = cur.level || innerTreeRowData.level;
              cur.display = !!(cur.expanded && innerTreeRowData.display);
              if (typeof cur.lazy === "boolean") {
                if (typeof cur.loaded === "boolean" && cur.loaded) {
                  innerTreeRowData.noLazyChildren = !(cur.children && cur.children.length);
                }
                innerTreeRowData.loading = cur.loading;
              }
            }
            i++;
            tmp.push(rowRender(node, $index + i, innerTreeRowData));
            if (cur) {
              const nodes2 = lazyTreeNodeMap.value[childKey] || node[childrenColumnName.value];
              traverse(nodes2, cur);
            }
          });
        };
        cur.display = true;
        const nodes = lazyTreeNodeMap.value[key] || row[childrenColumnName.value];
        traverse(nodes, cur);
      }
      return tmp;
    } else {
      return rowRender(row, $index, void 0);
    }
  };
  return {
    wrappedRowRender,
    tooltipContent,
    tooltipTrigger
  };
}

const defaultProps$2 = {
  store: {
    required: true,
    type: Object
  },
  stripe: Boolean,
  tooltipEffect: String,
  context: {
    default: () => ({}),
    type: Object
  },
  rowClassName: [String, Function],
  rowStyle: [Object, Function],
  fixed: {
    type: String,
    default: ""
  },
  highlight: Boolean
};

var TableBody = defineComponent({
  name: "ElTableBody",
  props: defaultProps$2,
  setup(props) {
    const instance = getCurrentInstance();
    const parent = inject(TABLE_INJECTION_KEY);
    const ns = useNamespace("table");
    const { wrappedRowRender, tooltipContent, tooltipTrigger } = useRender$1(props);
    const { onColumnsChange, onScrollableChange } = useLayoutObserver(parent);
    watch(props.store.states.hoverRow, (newVal, oldVal) => {
      if (!props.store.states.isComplex.value || !isClient)
        return;
      let raf = window.requestAnimationFrame;
      if (!raf) {
        raf = (fn) => window.setTimeout(fn, 16);
      }
      raf(() => {
        var _a;
        const rows = (_a = instance == null ? void 0 : instance.vnode.el) == null ? void 0 : _a.querySelectorAll(`.${ns.e("row")}`);
        const oldRow = rows[oldVal];
        const newRow = rows[newVal];
        if (oldRow) {
          removeClass(oldRow, "hover-row");
        }
        if (newRow) {
          addClass(newRow, "hover-row");
        }
      });
    });
    onUnmounted(() => {
      var _a;
      (_a = removePopper) == null ? void 0 : _a();
    });
    onUpdated(() => {
      var _a;
      (_a = removePopper) == null ? void 0 : _a();
    });
    return {
      ns,
      onColumnsChange,
      onScrollableChange,
      wrappedRowRender,
      tooltipContent,
      tooltipTrigger
    };
  },
  render() {
    const { wrappedRowRender, store } = this;
    const data = store.states.data.value || [];
    return h$1("tbody", {}, [
      data.reduce((acc, row) => {
        return acc.concat(wrappedRowRender(row, acc.length));
      }, [])
    ]);
  }
});

function hColgroup(props) {
  const isAuto = props.tableLayout === "auto";
  let columns = props.columns || [];
  if (isAuto) {
    if (columns.every((column) => column.width === void 0)) {
      columns = [];
    }
  }
  const getPropsData = (column) => {
    const propsData = {
      key: `${props.tableLayout}_${column.id}`,
      style: {},
      name: void 0
    };
    if (isAuto) {
      propsData.style = {
        width: `${column.width}px`
      };
    } else {
      propsData.name = column.id;
    }
    return propsData;
  };
  return h$1("colgroup", {}, columns.map((column) => h$1("col", getPropsData(column))));
}
hColgroup.props = ["columns", "tableLayout"];

function useMapState() {
  const table = inject(TABLE_INJECTION_KEY);
  const store = table == null ? void 0 : table.store;
  const leftFixedLeafCount = computed(() => {
    return store.states.fixedLeafColumnsLength.value;
  });
  const rightFixedLeafCount = computed(() => {
    return store.states.rightFixedColumns.value.length;
  });
  const columnsCount = computed(() => {
    return store.states.columns.value.length;
  });
  const leftFixedCount = computed(() => {
    return store.states.fixedColumns.value.length;
  });
  const rightFixedCount = computed(() => {
    return store.states.rightFixedColumns.value.length;
  });
  return {
    leftFixedLeafCount,
    rightFixedLeafCount,
    columnsCount,
    leftFixedCount,
    rightFixedCount,
    columns: store.states.columns
  };
}

function useStyle$1(props) {
  const { columns } = useMapState();
  const ns = useNamespace("table");
  const getCellClasses = (columns2, cellIndex) => {
    const column = columns2[cellIndex];
    const classes = [
      ns.e("cell"),
      column.id,
      column.align,
      column.labelClassName,
      ...getFixedColumnsClass(ns.b(), cellIndex, column.fixed, props.store)
    ];
    if (column.className) {
      classes.push(column.className);
    }
    if (!column.children) {
      classes.push(ns.is("leaf"));
    }
    return classes;
  };
  const getCellStyles = (column, cellIndex) => {
    const fixedStyle = getFixedColumnOffset(cellIndex, column.fixed, props.store);
    ensurePosition(fixedStyle, "left");
    ensurePosition(fixedStyle, "right");
    return fixedStyle;
  };
  return {
    getCellClasses,
    getCellStyles,
    columns
  };
}

var TableFooter = defineComponent({
  name: "ElTableFooter",
  props: {
    fixed: {
      type: String,
      default: ""
    },
    store: {
      required: true,
      type: Object
    },
    summaryMethod: Function,
    sumText: String,
    border: Boolean,
    defaultSort: {
      type: Object,
      default: () => {
        return {
          prop: "",
          order: ""
        };
      }
    }
  },
  setup(props) {
    const { getCellClasses, getCellStyles, columns } = useStyle$1(props);
    const ns = useNamespace("table");
    return {
      ns,
      getCellClasses,
      getCellStyles,
      columns
    };
  },
  render() {
    const {
      columns,
      getCellStyles,
      getCellClasses,
      summaryMethod,
      sumText,
      ns
    } = this;
    const data = this.store.states.data.value;
    let sums = [];
    if (summaryMethod) {
      sums = summaryMethod({
        columns,
        data
      });
    } else {
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = sumText;
          return;
        }
        const values = data.map((item) => Number(item[column.property]));
        const precisions = [];
        let notNumber = true;
        values.forEach((value) => {
          if (!Number.isNaN(+value)) {
            notNumber = false;
            const decimal = `${value}`.split(".")[1];
            precisions.push(decimal ? decimal.length : 0);
          }
        });
        const precision = Math.max.apply(null, precisions);
        if (!notNumber) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!Number.isNaN(+value)) {
              return Number.parseFloat((prev + curr).toFixed(Math.min(precision, 20)));
            } else {
              return prev;
            }
          }, 0);
        } else {
          sums[index] = "";
        }
      });
    }
    return h$1("table", {
      class: ns.e("footer"),
      cellspacing: "0",
      cellpadding: "0",
      border: "0"
    }, [
      hColgroup({
        columns
      }),
      h$1("tbody", [
        h$1("tr", {}, [
          ...columns.map((column, cellIndex) => h$1("td", {
            key: cellIndex,
            colspan: column.colSpan,
            rowspan: column.rowSpan,
            class: getCellClasses(columns, cellIndex),
            style: getCellStyles(column, cellIndex)
          }, [
            h$1("div", {
              class: ["cell", column.labelClassName]
            }, [sums[cellIndex]])
          ]))
        ])
      ])
    ]);
  }
});

function useUtils(store) {
  const setCurrentRow = (row) => {
    store.commit("setCurrentRow", row);
  };
  const getSelectionRows = () => {
    return store.getSelectionRows();
  };
  const toggleRowSelection = (row, selected) => {
    store.toggleRowSelection(row, selected, false);
    store.updateAllSelected();
  };
  const clearSelection = () => {
    store.clearSelection();
  };
  const clearFilter = (columnKeys) => {
    store.clearFilter(columnKeys);
  };
  const toggleAllSelection = () => {
    store.commit("toggleAllSelection");
  };
  const toggleRowExpansion = (row, expanded) => {
    store.toggleRowExpansionAdapter(row, expanded);
  };
  const clearSort = () => {
    store.clearSort();
  };
  const sort = (prop, order) => {
    store.commit("sort", { prop, order });
  };
  return {
    setCurrentRow,
    getSelectionRows,
    toggleRowSelection,
    clearSelection,
    clearFilter,
    toggleAllSelection,
    toggleRowExpansion,
    clearSort,
    sort
  };
}

function useStyle(props, layout, store, table) {
  const isHidden = ref(false);
  const renderExpanded = ref(null);
  const resizeProxyVisible = ref(false);
  const setDragVisible = (visible) => {
    resizeProxyVisible.value = visible;
  };
  const resizeState = ref({
    width: null,
    height: null
  });
  const isGroup = ref(false);
  const scrollbarViewStyle = {
    display: "inline-block",
    verticalAlign: "middle"
  };
  const tableWidth = ref();
  watchEffect(() => {
    layout.setHeight(props.height);
  });
  watchEffect(() => {
    layout.setMaxHeight(props.maxHeight);
  });
  watch(() => [props.currentRowKey, store.states.rowKey], ([currentRowKey, rowKey]) => {
    if (!unref(rowKey))
      return;
    store.setCurrentRowKey(`${currentRowKey}`);
  }, {
    immediate: true
  });
  watch(() => props.data, (data) => {
    table.store.commit("setData", data);
  }, {
    immediate: true,
    deep: true
  });
  watchEffect(() => {
    if (props.expandRowKeys) {
      store.setExpandRowKeysAdapter(props.expandRowKeys);
    }
  });
  const handleMouseLeave = () => {
    table.store.commit("setHoverRow", null);
    if (table.hoverState)
      table.hoverState = null;
  };
  const handleHeaderFooterMousewheel = (event, data) => {
    const { pixelX, pixelY } = data;
    if (Math.abs(pixelX) >= Math.abs(pixelY)) {
      table.refs.bodyWrapper.scrollLeft += data.pixelX / 5;
    }
  };
  const shouldUpdateHeight = computed(() => {
    return props.height || props.maxHeight || store.states.fixedColumns.value.length > 0 || store.states.rightFixedColumns.value.length > 0;
  });
  const tableBodyStyles = computed(() => {
    return {
      width: layout.bodyWidth.value ? `${layout.bodyWidth.value}px` : ""
    };
  });
  const doLayout = () => {
    if (shouldUpdateHeight.value) {
      layout.updateElsHeight();
    }
    layout.updateColumnsWidth();
    requestAnimationFrame(syncPostion);
  };
  onMounted(async () => {
    await nextTick();
    store.updateColumns();
    bindEvents();
    requestAnimationFrame(doLayout);
    resizeState.value = {
      width: tableWidth.value = table.vnode.el.offsetWidth,
      height: table.vnode.el.offsetHeight
    };
    store.states.columns.value.forEach((column) => {
      if (column.filteredValue && column.filteredValue.length) {
        table.store.commit("filterChange", {
          column,
          values: column.filteredValue,
          silent: true
        });
      }
    });
    table.$ready = true;
  });
  const setScrollClassByEl = (el, className) => {
    if (!el)
      return;
    const classList = Array.from(el.classList).filter((item) => !item.startsWith("is-scrolling-"));
    classList.push(layout.scrollX.value ? className : "is-scrolling-none");
    el.className = classList.join(" ");
  };
  const setScrollClass = (className) => {
    const { tableWrapper } = table.refs;
    setScrollClassByEl(tableWrapper, className);
  };
  const hasScrollClass = (className) => {
    const { tableWrapper } = table.refs;
    if (tableWrapper && tableWrapper.classList.contains(className)) {
      return true;
    }
    return false;
  };
  const syncPostion = function() {
    if (!table.refs.scrollBarRef)
      return;
    if (!layout.scrollX.value) {
      const scrollingNoneClass = "is-scrolling-none";
      if (!hasScrollClass(scrollingNoneClass)) {
        setScrollClass(scrollingNoneClass);
      }
      return;
    }
    const scrollContainer = table.refs.scrollBarRef.wrap$;
    if (!scrollContainer)
      return;
    const { scrollLeft, offsetWidth, scrollWidth } = scrollContainer;
    const { headerWrapper, footerWrapper } = table.refs;
    if (headerWrapper)
      headerWrapper.scrollLeft = scrollLeft;
    if (footerWrapper)
      footerWrapper.scrollLeft = scrollLeft;
    const maxScrollLeftPosition = scrollWidth - offsetWidth - 1;
    if (scrollLeft >= maxScrollLeftPosition) {
      setScrollClass("is-scrolling-right");
    } else if (scrollLeft === 0) {
      setScrollClass("is-scrolling-left");
    } else {
      setScrollClass("is-scrolling-middle");
    }
  };
  const bindEvents = () => {
    var _a;
    if (!table.refs.scrollBarRef)
      return;
    (_a = table.refs.scrollBarRef.wrap$) == null ? void 0 : _a.addEventListener("scroll", syncPostion, {
      passive: true
    });
    if (props.fit) {
      addResizeListener(table.vnode.el, resizeListener);
    } else {
      on(window, "resize", doLayout);
    }
  };
  onBeforeUnmount(() => {
    unbindEvents();
  });
  const unbindEvents = () => {
    var _a;
    (_a = table.refs.scrollBarRef.wrap$) == null ? void 0 : _a.removeEventListener("scroll", syncPostion, true);
    if (props.fit) {
      removeResizeListener(table.vnode.el, resizeListener);
    } else {
      off(window, "resize", doLayout);
    }
  };
  const resizeListener = () => {
    if (!table.$ready)
      return;
    let shouldUpdateLayout = false;
    const el = table.vnode.el;
    const { width: oldWidth, height: oldHeight } = resizeState.value;
    const width = tableWidth.value = el.offsetWidth;
    if (oldWidth !== width) {
      shouldUpdateLayout = true;
    }
    const height2 = el.offsetHeight;
    if ((props.height || shouldUpdateHeight.value) && oldHeight !== height2) {
      shouldUpdateLayout = true;
    }
    if (shouldUpdateLayout) {
      resizeState.value = {
        width,
        height: height2
      };
      doLayout();
    }
  };
  const tableSize = useSize();
  const bodyWidth = computed(() => {
    const { bodyWidth: bodyWidth_, scrollY, gutterWidth } = layout;
    return bodyWidth_.value ? `${bodyWidth_.value - (scrollY.value ? gutterWidth : 0)}px` : "";
  });
  const tableLayout = computed(() => {
    if (props.maxHeight)
      return "fixed";
    return props.tableLayout;
  });
  function calcMaxHeight(maxHeight, footerHeight, headerHeight) {
    const parsedMaxHeight = parseHeight(maxHeight);
    const tableHeaderHeight = props.showHeader ? headerHeight : 0;
    if (parsedMaxHeight === null)
      return;
    if (isString$1(parsedMaxHeight)) {
      return `calc(${parsedMaxHeight} - ${footerHeight}px - ${tableHeaderHeight}px)`;
    }
    return parsedMaxHeight - footerHeight - tableHeaderHeight;
  }
  const height = computed(() => {
    const headerHeight = layout.headerHeight.value || 0;
    const bodyHeight2 = layout.bodyHeight.value;
    const footerHeight = layout.footerHeight.value || 0;
    if (props.height) {
      return bodyHeight2 ? bodyHeight2 : void 0;
    } else if (props.maxHeight) {
      return calcMaxHeight(props.maxHeight, footerHeight, headerHeight);
    }
    return void 0;
  });
  const bodyHeight = computed(() => {
    const headerHeight = layout.headerHeight.value || 0;
    const bodyHeight2 = layout.bodyHeight.value;
    const footerHeight = layout.footerHeight.value || 0;
    if (props.height) {
      return {
        height: bodyHeight2 ? `${bodyHeight2}px` : ""
      };
    } else if (props.maxHeight) {
      const maxHeight = calcMaxHeight(props.maxHeight, footerHeight, headerHeight);
      if (maxHeight !== null) {
        return {
          "max-height": `${maxHeight}${isNumber$1(maxHeight) ? "px" : ""}`
        };
      }
    }
    return {};
  });
  const emptyBlockStyle = computed(() => {
    if (props.data && props.data.length)
      return null;
    let height2 = "100%";
    if (layout.appendHeight.value) {
      height2 = `calc(100% - ${layout.appendHeight.value}px)`;
    }
    return {
      width: tableWidth.value ? `${tableWidth.value}px` : "",
      height: height2
    };
  });
  const handleFixedMousewheel = (event, data) => {
    const bodyWrapper = table.refs.bodyWrapper;
    if (Math.abs(data.spinY) > 0) {
      const currentScrollTop = bodyWrapper.scrollTop;
      if (data.pixelY < 0 && currentScrollTop !== 0) {
        event.preventDefault();
      }
      if (data.pixelY > 0 && bodyWrapper.scrollHeight - bodyWrapper.clientHeight > currentScrollTop) {
        event.preventDefault();
      }
      bodyWrapper.scrollTop += Math.ceil(data.pixelY / 5);
    } else {
      bodyWrapper.scrollLeft += Math.ceil(data.pixelX / 5);
    }
  };
  const fixedHeight = computed(() => {
    if (props.maxHeight) {
      if (props.showSummary) {
        return {
          bottom: 0
        };
      }
      return {
        bottom: layout.scrollX.value && props.data.length ? `${layout.gutterWidth}px` : ""
      };
    } else {
      if (props.showSummary) {
        return {
          height: layout.tableHeight.value ? `${layout.tableHeight.value}px` : ""
        };
      }
      return {
        height: layout.viewportHeight.value ? `${layout.viewportHeight.value}px` : ""
      };
    }
  });
  const fixedBodyHeight = computed(() => {
    if (props.height) {
      return {
        height: layout.fixedBodyHeight.value ? `${layout.fixedBodyHeight.value}px` : ""
      };
    } else if (props.maxHeight) {
      let maxHeight = parseHeight(props.maxHeight);
      if (typeof maxHeight === "number") {
        maxHeight = layout.scrollX.value ? maxHeight - layout.gutterWidth : maxHeight;
        if (props.showHeader) {
          maxHeight -= layout.headerHeight.value;
        }
        maxHeight -= layout.footerHeight.value;
        return {
          "max-height": `${maxHeight}px`
        };
      }
    }
    return {};
  });
  return {
    isHidden,
    renderExpanded,
    setDragVisible,
    isGroup,
    handleMouseLeave,
    handleHeaderFooterMousewheel,
    tableSize,
    bodyHeight,
    height,
    emptyBlockStyle,
    handleFixedMousewheel,
    fixedHeight,
    fixedBodyHeight,
    resizeProxyVisible,
    bodyWidth,
    resizeState,
    doLayout,
    tableBodyStyles,
    tableLayout,
    scrollbarViewStyle
  };
}

var defaultProps$1 = {
  data: {
    type: Array,
    default: () => {
      return [];
    }
  },
  size: String,
  width: [String, Number],
  height: [String, Number],
  maxHeight: [String, Number],
  fit: {
    type: Boolean,
    default: true
  },
  stripe: Boolean,
  border: Boolean,
  rowKey: [String, Function],
  showHeader: {
    type: Boolean,
    default: true
  },
  showSummary: Boolean,
  sumText: String,
  summaryMethod: Function,
  rowClassName: [String, Function],
  rowStyle: [Object, Function],
  cellClassName: [String, Function],
  cellStyle: [Object, Function],
  headerRowClassName: [String, Function],
  headerRowStyle: [Object, Function],
  headerCellClassName: [String, Function],
  headerCellStyle: [Object, Function],
  highlightCurrentRow: Boolean,
  currentRowKey: [String, Number],
  emptyText: String,
  expandRowKeys: Array,
  defaultExpandAll: Boolean,
  defaultSort: Object,
  tooltipEffect: String,
  spanMethod: Function,
  selectOnIndeterminate: {
    type: Boolean,
    default: true
  },
  indent: {
    type: Number,
    default: 16
  },
  treeProps: {
    type: Object,
    default: () => {
      return {
        hasChildren: "hasChildren",
        children: "children"
      };
    }
  },
  lazy: Boolean,
  load: Function,
  style: {
    type: Object,
    default: () => ({})
  },
  className: {
    type: String,
    default: ""
  },
  tableLayout: {
    type: String,
    default: "fixed"
  },
  scrollbarAlwaysOn: {
    type: Boolean,
    default: false
  }
};

const useScrollbar = () => {
  const scrollBarRef = ref();
  const scrollTo = (options, yCoord) => {
    const scrollbar = scrollBarRef.value;
    if (scrollbar) {
      scrollbar.scrollTo(options, yCoord);
    }
  };
  const setScrollPosition = (position, offset) => {
    const scrollbar = scrollBarRef.value;
    if (scrollbar && isNumber$1(offset) && ["Top", "Left"].includes(position)) {
      scrollbar[`setScroll${position}`](offset);
    }
  };
  const setScrollTop = (top) => setScrollPosition("Top", top);
  const setScrollLeft = (left) => setScrollPosition("Left", left);
  return {
    scrollBarRef,
    scrollTo,
    setScrollTop,
    setScrollLeft
  };
};

let tableIdSeed = 1;
const _sfc_main$g = defineComponent({
  name: "ElTable",
  directives: {
    Mousewheel
  },
  components: {
    TableHeader,
    TableBody,
    TableFooter,
    ElScrollbar,
    hColgroup
  },
  props: defaultProps$1,
  emits: [
    "select",
    "select-all",
    "selection-change",
    "cell-mouse-enter",
    "cell-mouse-leave",
    "cell-contextmenu",
    "cell-click",
    "cell-dblclick",
    "row-click",
    "row-contextmenu",
    "row-dblclick",
    "header-click",
    "header-contextmenu",
    "sort-change",
    "filter-change",
    "current-change",
    "header-dragend",
    "expand-change"
  ],
  setup(props) {
    const { t } = useLocale();
    const ns = useNamespace("table");
    const table = getCurrentInstance();
    provide(TABLE_INJECTION_KEY, table);
    const store = createStore(table, props);
    table.store = store;
    const layout = new TableLayout({
      store: table.store,
      table,
      fit: props.fit,
      showHeader: props.showHeader
    });
    table.layout = layout;
    const isEmpty = computed(() => (store.states.data.value || []).length === 0);
    const {
      setCurrentRow,
      getSelectionRows,
      toggleRowSelection,
      clearSelection,
      clearFilter,
      toggleAllSelection,
      toggleRowExpansion,
      clearSort,
      sort
    } = useUtils(store);
    const {
      isHidden,
      renderExpanded,
      setDragVisible,
      isGroup,
      handleMouseLeave,
      handleHeaderFooterMousewheel,
      tableSize,
      bodyHeight,
      height,
      emptyBlockStyle,
      handleFixedMousewheel,
      fixedHeight,
      fixedBodyHeight,
      resizeProxyVisible,
      bodyWidth,
      resizeState,
      doLayout,
      tableBodyStyles,
      tableLayout,
      scrollbarViewStyle
    } = useStyle(props, layout, store, table);
    const { scrollBarRef, scrollTo, setScrollLeft, setScrollTop } = useScrollbar();
    const debouncedUpdateLayout = debounce$1(doLayout, 50);
    const tableId = `el-table_${tableIdSeed++}`;
    table.tableId = tableId;
    table.state = {
      isGroup,
      resizeState,
      doLayout,
      debouncedUpdateLayout
    };
    const computedSumText = computed(() => props.sumText || t("el.table.sumText"));
    const computedEmptyText = computed(() => {
      return props.emptyText || t("el.table.emptyText");
    });
    return {
      ns,
      layout,
      store,
      handleHeaderFooterMousewheel,
      handleMouseLeave,
      tableId,
      tableSize,
      isHidden,
      isEmpty,
      renderExpanded,
      resizeProxyVisible,
      resizeState,
      isGroup,
      bodyWidth,
      bodyHeight,
      height,
      tableBodyStyles,
      emptyBlockStyle,
      debouncedUpdateLayout,
      handleFixedMousewheel,
      fixedHeight,
      fixedBodyHeight,
      setCurrentRow,
      getSelectionRows,
      toggleRowSelection,
      clearSelection,
      clearFilter,
      toggleAllSelection,
      toggleRowExpansion,
      clearSort,
      doLayout,
      sort,
      t,
      setDragVisible,
      context: table,
      computedSumText,
      computedEmptyText,
      tableLayout,
      scrollbarViewStyle,
      scrollBarRef,
      scrollTo,
      setScrollLeft,
      setScrollTop
    };
  }
});
const _hoisted_1$i = ["data-prefix"];
const _hoisted_2$g = {
  ref: "hiddenColumns",
  class: "hidden-columns"
};
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_hColgroup = resolveComponent("hColgroup");
  const _component_table_header = resolveComponent("table-header");
  const _component_table_body = resolveComponent("table-body");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  const _component_table_footer = resolveComponent("table-footer");
  const _directive_mousewheel = resolveDirective("mousewheel");
  return openBlock(), createElementBlock("div", {
    ref: "tableWrapper",
    class: normalizeClass([
      {
        [_ctx.ns.m("fit")]: _ctx.fit,
        [_ctx.ns.m("striped")]: _ctx.stripe,
        [_ctx.ns.m("border")]: _ctx.border || _ctx.isGroup,
        [_ctx.ns.m("hidden")]: _ctx.isHidden,
        [_ctx.ns.m("group")]: _ctx.isGroup,
        [_ctx.ns.m("fluid-height")]: _ctx.maxHeight,
        [_ctx.ns.m("scrollable-x")]: _ctx.layout.scrollX.value,
        [_ctx.ns.m("scrollable-y")]: _ctx.layout.scrollY.value,
        [_ctx.ns.m("enable-row-hover")]: !_ctx.store.states.isComplex.value,
        [_ctx.ns.m("enable-row-transition")]: (_ctx.store.states.data.value || []).length !== 0 && (_ctx.store.states.data.value || []).length < 100,
        "has-footer": _ctx.showSummary
      },
      _ctx.ns.m(_ctx.tableSize),
      _ctx.className,
      _ctx.ns.b(),
      _ctx.ns.m(`layout-${_ctx.tableLayout}`)
    ]),
    style: normalizeStyle(_ctx.style),
    "data-prefix": _ctx.ns.namespace.value,
    onMouseleave: _cache[0] || (_cache[0] = ($event) => _ctx.handleMouseLeave())
  }, [
    createElementVNode("div", {
      class: normalizeClass(_ctx.ns.e("inner-wrapper"))
    }, [
      createElementVNode("div", _hoisted_2$g, [
        renderSlot(_ctx.$slots, "default")
      ], 512),
      _ctx.showHeader && _ctx.tableLayout === "fixed" ? withDirectives((openBlock(), createElementBlock("div", {
        key: 0,
        ref: "headerWrapper",
        class: normalizeClass(_ctx.ns.e("header-wrapper"))
      }, [
        createElementVNode("table", {
          ref: "tableHeader",
          class: normalizeClass(_ctx.ns.e("header")),
          style: normalizeStyle(_ctx.tableBodyStyles),
          border: "0",
          cellpadding: "0",
          cellspacing: "0"
        }, [
          createVNode(_component_hColgroup, {
            columns: _ctx.store.states.columns.value,
            "table-layout": _ctx.tableLayout
          }, null, 8, ["columns", "table-layout"]),
          createVNode(_component_table_header, {
            ref: "tableHeaderRef",
            border: _ctx.border,
            "default-sort": _ctx.defaultSort,
            store: _ctx.store,
            onSetDragVisible: _ctx.setDragVisible
          }, null, 8, ["border", "default-sort", "store", "onSetDragVisible"])
        ], 6)
      ], 2)), [
        [_directive_mousewheel, _ctx.handleHeaderFooterMousewheel]
      ]) : createCommentVNode("v-if", true),
      createElementVNode("div", {
        ref: "bodyWrapper",
        style: normalizeStyle(_ctx.bodyHeight),
        class: normalizeClass(_ctx.ns.e("body-wrapper"))
      }, [
        createVNode(_component_el_scrollbar, {
          ref: "scrollBarRef",
          height: _ctx.maxHeight ? void 0 : _ctx.height,
          "max-height": _ctx.maxHeight ? _ctx.height : void 0,
          "view-style": _ctx.scrollbarViewStyle,
          always: _ctx.scrollbarAlwaysOn
        }, {
          default: withCtx(() => [
            createElementVNode("table", {
              ref: "tableBody",
              class: normalizeClass(_ctx.ns.e("body")),
              cellspacing: "0",
              cellpadding: "0",
              border: "0",
              style: normalizeStyle({
                width: _ctx.bodyWidth,
                tableLayout: _ctx.tableLayout
              })
            }, [
              createVNode(_component_hColgroup, {
                columns: _ctx.store.states.columns.value,
                "table-layout": _ctx.tableLayout
              }, null, 8, ["columns", "table-layout"]),
              _ctx.showHeader && _ctx.tableLayout === "auto" ? (openBlock(), createBlock(_component_table_header, {
                key: 0,
                border: _ctx.border,
                "default-sort": _ctx.defaultSort,
                store: _ctx.store,
                onSetDragVisible: _ctx.setDragVisible
              }, null, 8, ["border", "default-sort", "store", "onSetDragVisible"])) : createCommentVNode("v-if", true),
              createVNode(_component_table_body, {
                context: _ctx.context,
                highlight: _ctx.highlightCurrentRow,
                "row-class-name": _ctx.rowClassName,
                "tooltip-effect": _ctx.tooltipEffect,
                "row-style": _ctx.rowStyle,
                store: _ctx.store,
                stripe: _ctx.stripe
              }, null, 8, ["context", "highlight", "row-class-name", "tooltip-effect", "row-style", "store", "stripe"])
            ], 6),
            _ctx.isEmpty ? (openBlock(), createElementBlock("div", {
              key: 0,
              ref: "emptyBlock",
              style: normalizeStyle(_ctx.emptyBlockStyle),
              class: normalizeClass(_ctx.ns.e("empty-block"))
            }, [
              createElementVNode("span", {
                class: normalizeClass(_ctx.ns.e("empty-text"))
              }, [
                renderSlot(_ctx.$slots, "empty", {}, () => [
                  createTextVNode(toDisplayString(_ctx.computedEmptyText), 1)
                ])
              ], 2)
            ], 6)) : createCommentVNode("v-if", true),
            _ctx.$slots.append ? (openBlock(), createElementBlock("div", {
              key: 1,
              ref: "appendWrapper",
              class: normalizeClass(_ctx.ns.e("append-wrapper"))
            }, [
              renderSlot(_ctx.$slots, "append")
            ], 2)) : createCommentVNode("v-if", true)
          ]),
          _: 3
        }, 8, ["height", "max-height", "view-style", "always"])
      ], 6),
      _ctx.border || _ctx.isGroup ? (openBlock(), createElementBlock("div", {
        key: 1,
        class: normalizeClass(_ctx.ns.e("border-left-patch"))
      }, null, 2)) : createCommentVNode("v-if", true)
    ], 2),
    _ctx.showSummary ? withDirectives((openBlock(), createElementBlock("div", {
      key: 0,
      ref: "footerWrapper",
      class: normalizeClass(_ctx.ns.e("footer-wrapper"))
    }, [
      createVNode(_component_table_footer, {
        border: _ctx.border,
        "default-sort": _ctx.defaultSort,
        store: _ctx.store,
        style: normalizeStyle(_ctx.tableBodyStyles),
        "sum-text": _ctx.computedSumText,
        "summary-method": _ctx.summaryMethod
      }, null, 8, ["border", "default-sort", "store", "style", "sum-text", "summary-method"])
    ], 2)), [
      [vShow, !_ctx.isEmpty],
      [_directive_mousewheel, _ctx.handleHeaderFooterMousewheel]
    ]) : createCommentVNode("v-if", true),
    withDirectives(createElementVNode("div", {
      ref: "resizeProxy",
      class: normalizeClass(_ctx.ns.e("column-resize-proxy"))
    }, null, 2), [
      [vShow, _ctx.resizeProxyVisible]
    ])
  ], 46, _hoisted_1$i);
}
var Table = /* @__PURE__ */ _export_sfc$2(_sfc_main$g, [["render", _sfc_render$5], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/table/src/table.vue"]]);

const defaultClassNames = {
  selection: "table-column--selection",
  expand: "table__expand-column"
};
const cellStarts = {
  default: {
    order: ""
  },
  selection: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ""
  },
  expand: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ""
  },
  index: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ""
  }
};
const getDefaultClassName = (type) => {
  return defaultClassNames[type] || "";
};
const cellForced = {
  selection: {
    renderHeader({ store }) {
      function isDisabled() {
        return store.states.data.value && store.states.data.value.length === 0;
      }
      return h$1(ElCheckbox, {
        disabled: isDisabled(),
        size: store.states.tableSize.value,
        indeterminate: store.states.selection.value.length > 0 && !store.states.isAllSelected.value,
        "onUpdate:modelValue": store.toggleAllSelection,
        modelValue: store.states.isAllSelected.value
      });
    },
    renderCell({
      row,
      column,
      store,
      $index
    }) {
      return h$1(ElCheckbox, {
        disabled: column.selectable ? !column.selectable.call(null, row, $index) : false,
        size: store.states.tableSize.value,
        onChange: () => {
          store.commit("rowSelectedChanged", row);
        },
        onClick: (event) => event.stopPropagation(),
        modelValue: store.isSelected(row)
      });
    },
    sortable: false,
    resizable: false
  },
  index: {
    renderHeader({ column }) {
      return column.label || "#";
    },
    renderCell({
      column,
      $index
    }) {
      let i = $index + 1;
      const index = column.index;
      if (typeof index === "number") {
        i = $index + index;
      } else if (typeof index === "function") {
        i = index($index);
      }
      return h$1("div", {}, [i]);
    },
    sortable: false
  },
  expand: {
    renderHeader({ column }) {
      return column.label || "";
    },
    renderCell({
      row,
      store,
      expanded
    }) {
      const { ns } = store;
      const classes = [ns.e("expand-icon")];
      if (expanded) {
        classes.push(ns.em("expand-icon", "expanded"));
      }
      const callback = function(e) {
        e.stopPropagation();
        store.toggleRowExpansion(row);
      };
      return h$1("div", {
        class: classes,
        onClick: callback
      }, {
        default: () => {
          return [
            h$1(ElIcon, null, {
              default: () => {
                return [h$1(arrowRight)];
              }
            })
          ];
        }
      });
    },
    sortable: false,
    resizable: false
  }
};
function defaultRenderCell({
  row,
  column,
  $index
}) {
  var _a;
  const property = column.property;
  const value = property && getProp(row, property).value;
  if (column && column.formatter) {
    return column.formatter(row, column, value, $index);
  }
  return ((_a = value == null ? void 0 : value.toString) == null ? void 0 : _a.call(value)) || "";
}
function treeCellPrefix({
  row,
  treeNode,
  store
}, createPlacehoder = false) {
  const { ns } = store;
  if (!treeNode) {
    if (createPlacehoder) {
      return [
        h$1("span", {
          class: ns.e("placeholder")
        })
      ];
    }
    return null;
  }
  const ele = [];
  const callback = function(e) {
    e.stopPropagation();
    store.loadOrToggle(row);
  };
  if (treeNode.indent) {
    ele.push(h$1("span", {
      class: ns.e("indent"),
      style: { "padding-left": `${treeNode.indent}px` }
    }));
  }
  if (typeof treeNode.expanded === "boolean" && !treeNode.noLazyChildren) {
    const expandClasses = [
      ns.e("expand-icon"),
      treeNode.expanded ? ns.em("expand-icon", "expanded") : ""
    ];
    let icon = arrowRight;
    if (treeNode.loading) {
      icon = loading;
    }
    ele.push(h$1("div", {
      class: expandClasses,
      onClick: callback
    }, {
      default: () => {
        return [
          h$1(ElIcon, { class: { [ns.is("loading")]: treeNode.loading } }, {
            default: () => [h$1(icon)]
          })
        ];
      }
    }));
  } else {
    ele.push(h$1("span", {
      class: ns.e("placeholder")
    }));
  }
  return ele;
}

function getAllAliases(props, aliases) {
  return props.reduce((prev, cur) => {
    prev[cur] = cur;
    return prev;
  }, aliases);
}
function useWatcher(owner, props_) {
  const instance = getCurrentInstance();
  const registerComplexWatchers = () => {
    const props = ["fixed"];
    const aliases = {
      realWidth: "width",
      realMinWidth: "minWidth"
    };
    const allAliases = getAllAliases(props, aliases);
    Object.keys(allAliases).forEach((key) => {
      const columnKey = aliases[key];
      if (hasOwn$2(props_, columnKey)) {
        watch(() => props_[columnKey], (newVal) => {
          let value = newVal;
          if (columnKey === "width" && key === "realWidth") {
            value = parseWidth(newVal);
          }
          if (columnKey === "minWidth" && key === "realMinWidth") {
            value = parseMinWidth(newVal);
          }
          instance.columnConfig.value[columnKey] = value;
          instance.columnConfig.value[key] = value;
          const updateColumns = columnKey === "fixed";
          owner.value.store.scheduleLayout(updateColumns);
        });
      }
    });
  };
  const registerNormalWatchers = () => {
    const props = [
      "label",
      "filters",
      "filterMultiple",
      "sortable",
      "index",
      "formatter",
      "className",
      "labelClassName",
      "showOverflowTooltip"
    ];
    const aliases = {
      property: "prop",
      align: "realAlign",
      headerAlign: "realHeaderAlign"
    };
    const allAliases = getAllAliases(props, aliases);
    Object.keys(allAliases).forEach((key) => {
      const columnKey = aliases[key];
      if (hasOwn$2(props_, columnKey)) {
        watch(() => props_[columnKey], (newVal) => {
          instance.columnConfig.value[key] = newVal;
        });
      }
    });
  };
  return {
    registerComplexWatchers,
    registerNormalWatchers
  };
}

function useRender(props, slots, owner) {
  const instance = getCurrentInstance();
  const columnId = ref("");
  const isSubColumn = ref(false);
  const realAlign = ref();
  const realHeaderAlign = ref();
  const ns = useNamespace("table");
  watchEffect(() => {
    realAlign.value = props.align ? `is-${props.align}` : null;
    realAlign.value;
  });
  watchEffect(() => {
    realHeaderAlign.value = props.headerAlign ? `is-${props.headerAlign}` : realAlign.value;
    realHeaderAlign.value;
  });
  const columnOrTableParent = computed(() => {
    let parent = instance.vnode.vParent || instance.parent;
    while (parent && !parent.tableId && !parent.columnId) {
      parent = parent.vnode.vParent || parent.parent;
    }
    return parent;
  });
  const hasTreeColumn = computed(() => {
    const { store } = instance.parent;
    if (!store)
      return false;
    const { treeData } = store.states;
    const treeDataValue = treeData.value;
    return treeDataValue && Object.keys(treeDataValue).length > 0;
  });
  const realWidth = ref(parseWidth(props.width));
  const realMinWidth = ref(parseMinWidth(props.minWidth));
  const setColumnWidth = (column) => {
    if (realWidth.value)
      column.width = realWidth.value;
    if (realMinWidth.value) {
      column.minWidth = realMinWidth.value;
    }
    if (!column.minWidth) {
      column.minWidth = 80;
    }
    column.realWidth = Number(column.width === void 0 ? column.minWidth : column.width);
    return column;
  };
  const setColumnForcedProps = (column) => {
    const type = column.type;
    const source = cellForced[type] || {};
    Object.keys(source).forEach((prop) => {
      const value = source[prop];
      if (prop !== "className" && value !== void 0) {
        column[prop] = value;
      }
    });
    const className = getDefaultClassName(type);
    if (className) {
      const forceClass = `${unref(ns.namespace)}-${className}`;
      column.className = column.className ? `${column.className} ${forceClass}` : forceClass;
    }
    return column;
  };
  const checkSubColumn = (children) => {
    if (Array.isArray(children)) {
      children.forEach((child) => check(child));
    } else {
      check(children);
    }
    function check(item) {
      var _a;
      if (((_a = item == null ? void 0 : item.type) == null ? void 0 : _a.name) === "ElTableColumn") {
        item.vParent = instance;
      }
    }
  };
  const setColumnRenders = (column) => {
    if (props.renderHeader) ; else if (column.type !== "selection") {
      column.renderHeader = (scope) => {
        instance.columnConfig.value["label"];
        const renderHeader = slots.header;
        return renderHeader ? renderHeader(scope) : column.label;
      };
    }
    let originRenderCell = column.renderCell;
    const hasTreeColumnValue = hasTreeColumn.value;
    if (column.type === "expand") {
      column.renderCell = (data) => h$1("div", {
        class: "cell"
      }, [originRenderCell(data)]);
      owner.value.renderExpanded = (data) => {
        return slots.default ? slots.default(data) : slots.default;
      };
    } else {
      originRenderCell = originRenderCell || defaultRenderCell;
      column.renderCell = (data) => {
        let children = null;
        if (slots.default) {
          const vnodes = slots.default(data);
          children = vnodes.some((v) => v.type !== Comment) ? vnodes : originRenderCell(data);
        } else {
          children = originRenderCell(data);
        }
        const shouldCreatePlaceholder = hasTreeColumnValue && data.cellIndex === 0;
        const prefix = treeCellPrefix(data, shouldCreatePlaceholder);
        const props2 = {
          class: "cell",
          style: {}
        };
        if (column.showOverflowTooltip) {
          props2.class = `${props2.class} ${unref(ns.namespace)}-tooltip`;
          props2.style = {
            width: `${(data.column.realWidth || Number(data.column.width)) - 1}px`
          };
        }
        checkSubColumn(children);
        return h$1("div", props2, [prefix, children]);
      };
    }
    return column;
  };
  const getPropsData = (...propsKey) => {
    return propsKey.reduce((prev, cur) => {
      if (Array.isArray(cur)) {
        cur.forEach((key) => {
          prev[key] = props[key];
        });
      }
      return prev;
    }, {});
  };
  const getColumnElIndex = (children, child) => {
    return Array.prototype.indexOf.call(children, child);
  };
  return {
    columnId,
    realAlign,
    isSubColumn,
    realHeaderAlign,
    columnOrTableParent,
    setColumnWidth,
    setColumnForcedProps,
    setColumnRenders,
    getPropsData,
    getColumnElIndex
  };
}

var defaultProps = {
  type: {
    type: String,
    default: "default"
  },
  label: String,
  className: String,
  labelClassName: String,
  property: String,
  prop: String,
  width: {
    type: [String, Number],
    default: ""
  },
  minWidth: {
    type: [String, Number],
    default: ""
  },
  renderHeader: Function,
  sortable: {
    type: [Boolean, String],
    default: false
  },
  sortMethod: Function,
  sortBy: [String, Function, Array],
  resizable: {
    type: Boolean,
    default: true
  },
  columnKey: String,
  align: String,
  headerAlign: String,
  showTooltipWhenOverflow: Boolean,
  showOverflowTooltip: Boolean,
  fixed: [Boolean, String],
  formatter: Function,
  selectable: Function,
  reserveSelection: Boolean,
  filterMethod: Function,
  filteredValue: Array,
  filters: Array,
  filterPlacement: String,
  filterMultiple: {
    type: Boolean,
    default: true
  },
  index: [Number, Function],
  sortOrders: {
    type: Array,
    default: () => {
      return ["ascending", "descending", null];
    },
    validator: (val) => {
      return val.every((order) => ["ascending", "descending", null].includes(order));
    }
  }
};

let columnIdSeed = 1;
var ElTableColumn$1 = defineComponent({
  name: "ElTableColumn",
  components: {
    ElCheckbox
  },
  props: defaultProps,
  setup(props, { slots }) {
    const instance = getCurrentInstance();
    const columnConfig = ref({});
    const owner = computed(() => {
      let parent2 = instance.parent;
      while (parent2 && !parent2.tableId) {
        parent2 = parent2.parent;
      }
      return parent2;
    });
    const { registerNormalWatchers, registerComplexWatchers } = useWatcher(owner, props);
    const {
      columnId,
      isSubColumn,
      realHeaderAlign,
      columnOrTableParent,
      setColumnWidth,
      setColumnForcedProps,
      setColumnRenders,
      getPropsData,
      getColumnElIndex,
      realAlign
    } = useRender(props, slots, owner);
    const parent = columnOrTableParent.value;
    columnId.value = `${parent.tableId || parent.columnId}_column_${columnIdSeed++}`;
    onBeforeMount(() => {
      isSubColumn.value = owner.value !== parent;
      const type = props.type || "default";
      const sortable = props.sortable === "" ? true : props.sortable;
      const defaults = {
        ...cellStarts[type],
        id: columnId.value,
        type,
        property: props.prop || props.property,
        align: realAlign,
        headerAlign: realHeaderAlign,
        showOverflowTooltip: props.showOverflowTooltip || props.showTooltipWhenOverflow,
        filterable: props.filters || props.filterMethod,
        filteredValue: [],
        filterPlacement: "",
        isColumnGroup: false,
        isSubColumn: false,
        filterOpened: false,
        sortable,
        index: props.index,
        rawColumnKey: instance.vnode.key
      };
      const basicProps = [
        "columnKey",
        "label",
        "className",
        "labelClassName",
        "type",
        "renderHeader",
        "formatter",
        "fixed",
        "resizable"
      ];
      const sortProps = ["sortMethod", "sortBy", "sortOrders"];
      const selectProps = ["selectable", "reserveSelection"];
      const filterProps = [
        "filterMethod",
        "filters",
        "filterMultiple",
        "filterOpened",
        "filteredValue",
        "filterPlacement"
      ];
      let column = getPropsData(basicProps, sortProps, selectProps, filterProps);
      column = mergeOptions(defaults, column);
      const chains = compose(setColumnRenders, setColumnWidth, setColumnForcedProps);
      column = chains(column);
      columnConfig.value = column;
      registerNormalWatchers();
      registerComplexWatchers();
    });
    onMounted(() => {
      var _a;
      const parent2 = columnOrTableParent.value;
      const children = isSubColumn.value ? parent2.vnode.el.children : (_a = parent2.refs.hiddenColumns) == null ? void 0 : _a.children;
      const getColumnIndex = () => getColumnElIndex(children || [], instance.vnode.el);
      columnConfig.value.getColumnIndex = getColumnIndex;
      const columnIndex = getColumnIndex();
      columnIndex > -1 && owner.value.store.commit("insertColumn", columnConfig.value, isSubColumn.value ? parent2.columnConfig.value : null);
    });
    onBeforeUnmount(() => {
      owner.value.store.commit("removeColumn", columnConfig.value, isSubColumn.value ? parent.columnConfig.value : null);
    });
    instance.columnId = columnId.value;
    instance.columnConfig = columnConfig;
    return;
  },
  render() {
    var _a, _b, _c;
    try {
      const renderDefault = (_b = (_a = this.$slots).default) == null ? void 0 : _b.call(_a, {
        row: {},
        column: {},
        $index: -1
      });
      const children = [];
      if (Array.isArray(renderDefault)) {
        for (const childNode of renderDefault) {
          if (((_c = childNode.type) == null ? void 0 : _c.name) === "ElTableColumn" || childNode.shapeFlag & 2) {
            children.push(childNode);
          } else if (childNode.type === Fragment && Array.isArray(childNode.children)) {
            childNode.children.forEach((vnode2) => {
              if ((vnode2 == null ? void 0 : vnode2.patchFlag) !== 1024 && !isString$1(vnode2 == null ? void 0 : vnode2.children)) {
                children.push(vnode2);
              }
            });
          }
        }
      }
      const vnode = h$1("div", children);
      return vnode;
    } catch (e) {
      return h$1("div", []);
    }
  }
});

const ElTable = withInstall(Table, {
  TableColumn: ElTableColumn$1
});
const ElTableColumn = withNoopInstall(ElTableColumn$1);

var base = '';

var container = '';

var aside = '';

var footer = '';

var header = '';

var main = '';

var configProvider = '';

const state = false;
const useMenuStore = defineStore("menu", {
  state: () => {
    return {
      isState: state
    };
  },
  actions: {
    changeState() {
      this.isState = !this.isState;
    }
  }
});

var button = '';

var icon = '';

var avatar = '';

var dropdown = '';

var popper = '';

var dropdownItem = '';

var dropdownMenu = '';

const _hoisted_1$h = {
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$f = /*#__PURE__*/createElementVNode("path", { d: "M13.833.5H2.167A1.66 1.66 0 0 0 .5 2.167V5.5h1.667V2.167h11.666v11.666H2.167V10.5H.5v3.333A1.666 1.666 0 0 0 2.167 15.5h11.666a1.666 1.666 0 0 0 1.667-1.667V2.167C15.5 1.242 14.75.5 13.833.5ZM6.4 10.983l1.183 1.184L11.75 8 7.583 3.833 6.4 5.008l2.158 2.159H.5v1.666h8.058L6.4 10.983Z" }, null, -1);
const _hoisted_3$a = [
  _hoisted_2$f
];

function render$3(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$h, _hoisted_3$a))
}
var Exit = { render: render$3 };

var UUserPanel_vue_vue_type_style_index_0_scoped_true_lang = '';

var UUserPanel_vue_vue_type_style_index_1_lang = '';

var _export_sfc$1 = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _withScopeId$1 = (n) => (pushScopeId("data-v-a639cfa2"), n = n(), popScopeId(), n);
const _hoisted_1$g = { class: "user-panel-wrapper" };
const _hoisted_2$e = { class: "avatar-wrapper" };
const _hoisted_3$9 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("img", { src: "https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" }, null, -1));
const _hoisted_4$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("span", { class: "user-panel-dropdown__name" }, "User Name", -1));
const _hoisted_5$1 = /* @__PURE__ */ createTextVNode("Action 1");
const _hoisted_6$1 = /* @__PURE__ */ createTextVNode("Action 2");
const _hoisted_7$1 = /* @__PURE__ */ createTextVNode("Action 3");
const _hoisted_8$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("span", null, "\u0412\u044B\u0445\u043E\u0434", -1));
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$g, [
        createVNode(unref(ElDropdown), {
          trigger: "click",
          "popper-class": "user-panel-dropdown"
        }, {
          dropdown: withCtx(() => [
            createVNode(unref(ElDropdownMenu), null, {
              default: withCtx(() => [
                _hoisted_4$1,
                createVNode(unref(ElDropdownItem), null, {
                  default: withCtx(() => [
                    _hoisted_5$1
                  ]),
                  _: 1
                }),
                createVNode(unref(ElDropdownItem), null, {
                  default: withCtx(() => [
                    _hoisted_6$1
                  ]),
                  _: 1
                }),
                createVNode(unref(ElDropdownItem), null, {
                  default: withCtx(() => [
                    _hoisted_7$1
                  ]),
                  _: 1
                }),
                createVNode(unref(ElDropdownItem), {
                  icon: unref(Exit),
                  divided: ""
                }, {
                  default: withCtx(() => [
                    _hoisted_8$1
                  ]),
                  _: 1
                }, 8, ["icon"])
              ]),
              _: 1
            })
          ]),
          default: withCtx(() => [
            createElementVNode("div", _hoisted_2$e, [
              createVNode(unref(ElAvatar), {
                class: "user-avatar",
                size: 32,
                src: "https://empty"
              }, {
                default: withCtx(() => [
                  _hoisted_3$9
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        })
      ]);
    };
  }
});
var UUserPanel = /* @__PURE__ */ _export_sfc$1(_sfc_main$f, [["__scopeId", "data-v-a639cfa2"]]);

var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main$e = defineComponent({
  name: "Expand"
});
const _hoisted_1$f = {
  class: "icon",
  width: "200",
  height: "200",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$d = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M128 192h768v128H128V192zm0 256h512v128H128V448zm0 256h768v128H128V704zm576-352l192 160-192 128V352z"
}, null, -1);
const _hoisted_3$8 = [
  _hoisted_2$d
];
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$f, _hoisted_3$8);
}
var expand = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$4]]);

const _sfc_main$d = defineComponent({
  name: "Fold"
});
const _hoisted_1$e = {
  class: "icon",
  width: "200",
  height: "200",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$c = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M896 192H128v128h768V192zm0 256H384v128h512V448zm0 256H128v128h768V704zM320 384L128 512l192 128V384z"
}, null, -1);
const _hoisted_3$7 = [
  _hoisted_2$c
];
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$e, _hoisted_3$7);
}
var fold = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$3]]);

const _sfc_main$c = defineComponent({
  name: "Plus"
});
const _hoisted_1$d = {
  class: "icon",
  width: "200",
  height: "200",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$b = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M480 480V128a32 32 0 0164 0v352h352a32 32 0 110 64H544v352a32 32 0 11-64 0V544H128a32 32 0 010-64h352z"
}, null, -1);
const _hoisted_3$6 = [
  _hoisted_2$b
];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$d, _hoisted_3$6);
}
var plus = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$2]]);

const _sfc_main$b = defineComponent({
  name: "Search"
});
const _hoisted_1$c = {
  class: "icon",
  width: "200",
  height: "200",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$a = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M795.904 750.72l124.992 124.928a32 32 0 01-45.248 45.248L750.656 795.904a416 416 0 1145.248-45.248zM480 832a352 352 0 100-704 352 352 0 000 704z"
}, null, -1);
const _hoisted_3$5 = [
  _hoisted_2$a
];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$c, _hoisted_3$5);
}
var search = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$1]]);

var UHeader_vue_vue_type_style_index_0_scoped_true_lang = '';

const _withScopeId = (n) => (pushScopeId("data-v-43a9b485"), n = n(), popScopeId(), n);
const _hoisted_1$b = { class: "header" };
const _hoisted_2$9 = { class: "button-wrapper" };
const _hoisted_3$4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", null, null, -1));
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const menuStore = useMenuStore();
    const changeMenuStatus = () => {
      menuStore.changeState();
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$b, [
        createElementVNode("div", _hoisted_2$9, [
          createVNode(unref(ElButton), {
            class: "btn",
            size: "small",
            type: "primary",
            onClick: changeMenuStatus
          }, {
            default: withCtx(() => [
              createVNode(unref(ElIcon), null, {
                default: withCtx(() => [
                  unref(menuStore).isState ? (openBlock(), createBlock(unref(fold), { key: 0 })) : (openBlock(), createBlock(unref(expand), { key: 1 }))
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _hoisted_3$4,
        createVNode(UUserPanel)
      ]);
    };
  }
});
var UHeader = /* @__PURE__ */ _export_sfc$1(_sfc_main$a, [["__scopeId", "data-v-43a9b485"]]);

var ru$1 = {};

(function (exports) {

Object.defineProperty(exports, '__esModule', { value: true });

var ru = {
  name: "ru",
  el: {
    colorpicker: {
      confirm: "OK",
      clear: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C"
    },
    datepicker: {
      now: "\u0421\u0435\u0439\u0447\u0430\u0441",
      today: "\u0421\u0435\u0433\u043E\u0434\u043D\u044F",
      cancel: "\u041E\u0442\u043C\u0435\u043D\u0430",
      clear: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C",
      confirm: "OK",
      selectDate: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0434\u0430\u0442\u0443",
      selectTime: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0440\u0435\u043C\u044F",
      startDate: "\u0414\u0430\u0442\u0430 \u043D\u0430\u0447\u0430\u043B\u0430",
      startTime: "\u0412\u0440\u0435\u043C\u044F \u043D\u0430\u0447\u0430\u043B\u0430",
      endDate: "\u0414\u0430\u0442\u0430 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F",
      endTime: "\u0412\u0440\u0435\u043C\u044F \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F",
      prevYear: "\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0439 \u0433\u043E\u0434",
      nextYear: "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0433\u043E\u0434",
      prevMonth: "\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0439 \u043C\u0435\u0441\u044F\u0446",
      nextMonth: "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u043C\u0435\u0441\u044F\u0446",
      year: "",
      month1: "\u042F\u043D\u0432\u0430\u0440\u044C",
      month2: "\u0424\u0435\u0432\u0440\u0430\u043B\u044C",
      month3: "\u041C\u0430\u0440\u0442",
      month4: "\u0410\u043F\u0440\u0435\u043B\u044C",
      month5: "\u041C\u0430\u0439",
      month6: "\u0418\u044E\u043D\u044C",
      month7: "\u0418\u044E\u043B\u044C",
      month8: "\u0410\u0432\u0433\u0443\u0441\u0442",
      month9: "\u0421\u0435\u043D\u0442\u044F\u0431\u0440\u044C",
      month10: "\u041E\u043A\u0442\u044F\u0431\u0440\u044C",
      month11: "\u041D\u043E\u044F\u0431\u0440\u044C",
      month12: "\u0414\u0435\u043A\u0430\u0431\u0440\u044C",
      week: "\u043D\u0435\u0434\u0435\u043B\u044F",
      weeks: {
        sun: "\u0412\u0441",
        mon: "\u041F\u043D",
        tue: "\u0412\u0442",
        wed: "\u0421\u0440",
        thu: "\u0427\u0442",
        fri: "\u041F\u0442",
        sat: "\u0421\u0431"
      },
      months: {
        jan: "\u042F\u043D\u0432",
        feb: "\u0424\u0435\u0432",
        mar: "\u041C\u0430\u0440",
        apr: "\u0410\u043F\u0440",
        may: "\u041C\u0430\u0439",
        jun: "\u0418\u044E\u043D",
        jul: "\u0418\u044E\u043B",
        aug: "\u0410\u0432\u0433",
        sep: "\u0421\u0435\u043D",
        oct: "\u041E\u043A\u0442",
        nov: "\u041D\u043E\u044F",
        dec: "\u0414\u0435\u043A"
      }
    },
    select: {
      loading: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430",
      noMatch: "\u0421\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E",
      noData: "\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445",
      placeholder: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C"
    },
    cascader: {
      noMatch: "\u0421\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E",
      loading: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430",
      placeholder: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C",
      noData: "\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445"
    },
    pagination: {
      goto: "\u041F\u0435\u0440\u0435\u0439\u0442\u0438",
      pagesize: " \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435",
      total: "\u0412\u0441\u0435\u0433\u043E {total}",
      pageClassifier: ""
    },
    messagebox: {
      title: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435",
      confirm: "OK",
      cancel: "\u041E\u0442\u043C\u0435\u043D\u0430",
      error: "\u041D\u0435\u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0439 \u0432\u0432\u043E\u0434 \u0434\u0430\u043D\u043D\u044B\u0445"
    },
    upload: {
      deleteTip: "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 [\u0423\u0434\u0430\u043B\u0438\u0442\u044C] \u0434\u043B\u044F \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F",
      delete: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
      preview: "\u041F\u0440\u0435\u0432\u044C\u044E",
      continue: "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C"
    },
    table: {
      emptyText: "\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445",
      confirmFilter: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C",
      resetFilter: "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C",
      clearFilter: "\u0412\u0441\u0435",
      sumText: "\u0421\u0443\u043C\u043C\u0430"
    },
    tree: {
      emptyText: "\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445"
    },
    transfer: {
      noMatch: "\u0421\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E",
      noData: "\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445",
      titles: ["\u0421\u043F\u0438\u0441\u043E\u043A 1", "\u0421\u043F\u0438\u0441\u043E\u043A 2"],
      filterPlaceholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043B\u044E\u0447\u0435\u0432\u043E\u0435 \u0441\u043B\u043E\u0432\u043E",
      noCheckedFormat: "{total} \u043F\u0443\u043D\u043A\u0442\u043E\u0432",
      hasCheckedFormat: "{checked}/{total} \u0432\u044B\u0431\u0440\u0430\u043D\u043E"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "OK",
      cancelButtonText: "\u041E\u0442\u043C\u0435\u043D\u0430"
    }
  }
};

exports["default"] = ru;

}(ru$1));

var ru = /*@__PURE__*/getDefaultExportFromCjs(ru$1);

var ULogo_vue_vue_type_style_index_0_scoped_true_lang = '';

const _sfc_main$9 = {};
const _hoisted_1$a = { class: "logo" };
const _hoisted_2$8 = {
  href: "/",
  class: "logo__link"
};

function _sfc_render(_ctx, _cache) {
  return (openBlock(), createElementBlock("div", _hoisted_1$a, [
    createElementVNode("a", _hoisted_2$8, [
      renderSlot(_ctx.$slots, "default")
    ])
  ]))
}
var ULogo = /*#__PURE__*/_export_sfc$1(_sfc_main$9, [['render',_sfc_render],['__scopeId',"data-v-1d00d9d0"]]);

var menu = '';

var tooltip = '';

var UMenu_vue_vue_type_style_index_0_scoped_true_lang = '';

const _hoisted_1$9 = { class: "menu" };
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  props: {
    menuItems: null
  },
  setup(__props) {
    const props = __props;
    const stateMenu = useMenuStore();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("nav", _hoisted_1$9, [
        createVNode(unref(ElMenu), {
          collapse: !unref(stateMenu).isState,
          class: "menu-component"
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(props.menuItems, (menuItem, i) => {
              return openBlock(), createElementBlock(Fragment, { key: i }, [
                menuItem.groupName ? (openBlock(), createBlock(unref(ElMenuItemGroup), { key: 0 }, {
                  title: withCtx(() => [
                    createElementVNode("span", null, toDisplayString(menuItem.groupName), 1)
                  ]),
                  default: withCtx(() => [
                    menuItem?.menuItems ? (openBlock(), createBlock(unref(ElSubMenu), {
                      key: 0,
                      index: `${i}`
                    }, {
                      title: withCtx(() => [
                        createVNode(unref(ElIcon), null, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(resolveDynamicComponent(menuItem.iconSvg)))
                          ]),
                          _: 2
                        }, 1024),
                        createElementVNode("span", null, toDisplayString(menuItem.name), 1)
                      ]),
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(menuItem.menuItems, (subItem, k) => {
                          return openBlock(), createBlock(unref(ElMenuItem), {
                            key: k,
                            index: `${i}-${k}`
                          }, {
                            title: withCtx(() => [
                              createElementVNode("span", null, toDisplayString(subItem.name), 1)
                            ]),
                            _: 2
                          }, 1032, ["index"]);
                        }), 128))
                      ]),
                      _: 2
                    }, 1032, ["index"])) : (openBlock(), createBlock(unref(ElMenuItem), {
                      key: 1,
                      index: `${i}`
                    }, {
                      title: withCtx(() => [
                        createElementVNode("span", null, toDisplayString(menuItem.name), 1)
                      ]),
                      default: withCtx(() => [
                        createVNode(unref(ElIcon), null, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(resolveDynamicComponent(menuItem.iconSvg)))
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1032, ["index"]))
                  ]),
                  _: 2
                }, 1024)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  menuItem?.menuItems ? (openBlock(), createBlock(unref(ElSubMenu), {
                    key: 0,
                    index: `${i}`
                  }, {
                    title: withCtx(() => [
                      createVNode(unref(ElIcon), null, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(resolveDynamicComponent(menuItem.iconSvg)))
                        ]),
                        _: 2
                      }, 1024),
                      createElementVNode("span", null, toDisplayString(menuItem.name), 1)
                    ]),
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(menuItem.menuItems, (subItem, k) => {
                        return openBlock(), createBlock(unref(ElMenuItem), {
                          key: k,
                          index: `${i}-${k}`
                        }, {
                          title: withCtx(() => [
                            createElementVNode("span", null, toDisplayString(subItem.name), 1)
                          ]),
                          _: 2
                        }, 1032, ["index"]);
                      }), 128))
                    ]),
                    _: 2
                  }, 1032, ["index"])) : (openBlock(), createBlock(unref(ElMenuItem), {
                    key: 1,
                    index: `${i}`
                  }, {
                    title: withCtx(() => [
                      createElementVNode("span", null, toDisplayString(menuItem.name), 1)
                    ]),
                    default: withCtx(() => [
                      createVNode(unref(ElIcon), null, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(resolveDynamicComponent(menuItem.iconSvg)))
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1032, ["index"]))
                ], 64))
              ], 64);
            }), 128))
          ]),
          _: 1
        }, 8, ["collapse"])
      ]);
    };
  }
});
var UMenu = /* @__PURE__ */ _export_sfc$1(_sfc_main$8, [["__scopeId", "data-v-fe27631a"]]);

var UMenuPanel_vue_vue_type_style_index_0_scoped_true_lang = '';

const _hoisted_1$8 = { class: "menu-wrapper" };
const _hoisted_2$7 = { class: "logo-in-menu" };
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$8, [
        createElementVNode("div", _hoisted_2$7, [
          createVNode(ULogo, null, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "logo", {}, void 0, true)
            ]),
            _: 3
          })
        ]),
        renderSlot(_ctx.$slots, "menu", {}, () => [
          createVNode(UMenu, normalizeProps(guardReactiveProps(_ctx.$attrs)), null, 16)
        ], true)
      ]);
    };
  }
});
var UMenuPanel = /* @__PURE__ */ _export_sfc$1(_sfc_main$7, [["__scopeId", "data-v-3a777ef7"]]);

var UApp_vue_vue_type_style_index_0_scoped_true_lang = '';

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const stateMenu = useMenuStore();
    const widthMenu = computed(() => stateMenu.isState ? "200px" : "64px");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(unref(ElConfigProvider), { locale: unref(ru) }, {
          default: withCtx(() => [
            createVNode(unref(ElContainer), { class: "u-app" }, {
              default: withCtx(() => [
                createVNode(unref(ElAside), {
                  class: "u-aside",
                  width: unref(widthMenu)
                }, {
                  default: withCtx(() => [
                    createVNode(UMenuPanel, normalizeProps(guardReactiveProps(_ctx.$attrs)), {
                      logo: withCtx(() => [
                        renderSlot(_ctx.$slots, "logo", {
                          menuOpen: unref(stateMenu).isState
                        }, void 0, true)
                      ]),
                      menu: withCtx(() => [
                        renderSlot(_ctx.$slots, "menu", {}, void 0, true)
                      ]),
                      _: 3
                    }, 16)
                  ]),
                  _: 3
                }, 8, ["width"]),
                createVNode(unref(ElContainer), null, {
                  default: withCtx(() => [
                    createVNode(unref(ElHeader), {
                      height: "42px",
                      class: "u-header"
                    }, {
                      default: withCtx(() => [
                        createVNode(UHeader, null, {
                          logo: withCtx(() => [
                            renderSlot(_ctx.$slots, "logo", {}, void 0, true)
                          ]),
                          _: 3
                        })
                      ]),
                      _: 3
                    }),
                    createVNode(unref(ElMain), { class: "u-main" }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "default", {}, void 0, true)
                      ]),
                      _: 3
                    })
                  ]),
                  _: 3
                })
              ]),
              _: 3
            })
          ]),
          _: 3
        }, 8, ["locale"])
      ]);
    };
  }
});
var UApp = /* @__PURE__ */ _export_sfc$1(_sfc_main$6, [["__scopeId", "data-v-02b75f45"]]);

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        renderSlot(_ctx.$slots, "default")
      ]);
    };
  }
});

var table = '';

var checkbox = '';

var tag = '';

var scrollbar = '';

var tableColumn = '';

const _hoisted_1$7 = { class: "listing" };

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const tableData = [
      {
        id: "12987122",
        name: "Tom",
        amount1: "234",
        amount2: "3.2",
        amount3: 10
      },
      {
        id: "12987123",
        name: "Tom",
        amount1: "165",
        amount2: "4.43",
        amount3: 12
      },
      {
        id: "12987124",
        name: "Tom",
        amount1: "324",
        amount2: "1.9",
        amount3: 9
      },
      {
        id: "12987125",
        name: "Tom",
        amount1: "621",
        amount2: "2.2",
        amount3: 17
      },
      {
        id: "12987126",
        name: "Tom",
        amount1: "539",
        amount2: "4.1",
        amount3: 15
      }
    ];
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$7, [
        createVNode(unref(ElTable), {
          data: tableData,
          border: "",
          style: { "width": "100%" }
        }, {
          default: withCtx(() => [
            createVNode(unref(ElTableColumn), {
              prop: "id",
              label: "ID",
              width: "180"
            }),
            createVNode(unref(ElTableColumn), {
              prop: "name",
              label: "Name"
            }),
            createVNode(unref(ElTableColumn), {
              prop: "amount1",
              sortable: "",
              label: "Amount 1"
            }),
            createVNode(unref(ElTableColumn), {
              prop: "amount2",
              sortable: "",
              label: "Amount 2"
            }),
            createVNode(unref(ElTableColumn), {
              prop: "amount3",
              sortable: "",
              label: "Amount 3"
            })
          ]),
          _: 1
        })
      ]);
    };
  }
});

var input = '';

const _hoisted_1$6 = {
  viewBox: "0 0 16 18",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$6 = /*#__PURE__*/createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M13 2.333h.834c.916 0 1.666.75 1.666 1.667v11.666c0 .917-.75 1.667-1.666 1.667H2.167c-.925 0-1.667-.75-1.667-1.666L.51 4a1.66 1.66 0 0 1 1.658-1.667H3V.667h1.667v1.666h6.667V.667H13v1.666ZM2.167 15.667h11.667V7.332H2.167v8.333Zm11.667-10H2.167V4h11.667v1.667Zm-1.667 4.166H8V14h4.167V9.833Z"
}, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$6
];

function render$2(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$6, _hoisted_3$3))
}
var Calendar = { render: render$2 };

const _hoisted_1$5 = {
  viewBox: "0 0 18 14",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$5 = /*#__PURE__*/createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M1.5.333h15c.459 0 .834.375.834.834v11.666a.836.836 0 0 1-.834.834h-15a.836.836 0 0 1-.833-.833V1.167c0-.459.375-.834.833-.834ZM2.334 12h3.333V2H2.334v10Zm8.333 0H7.334V2h3.333v10Zm1.667 0h3.333V2h-3.333v10Z"
}, null, -1);
const _hoisted_3$2 = [
  _hoisted_2$5
];

function render$1(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$5, _hoisted_3$2))
}
var Kanban = { render: render$1 };

const _hoisted_1$4 = {
  viewBox: "0 0 16 14",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$4 = /*#__PURE__*/createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M.292 2c0-.692.558-1.25 1.25-1.25s1.25.558 1.25 1.25-.558 1.25-1.25 1.25S.292 2.692.292 2Zm0 5c0-.692.558-1.25 1.25-1.25s1.25.558 1.25 1.25-.558 1.25-1.25 1.25S.292 7.692.292 7Zm1.25 3.75c-.692 0-1.25.567-1.25 1.25s.567 1.25 1.25 1.25A1.26 1.26 0 0 0 2.792 12c0-.683-.558-1.25-1.25-1.25Zm14.167 2.083H4.042v-1.666h11.667v1.666Zm-11.667-5h11.667V6.167H4.042v1.666Zm0-5V1.167h11.667v1.666H4.042Z"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$4
];

function render(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_3$1))
}
var List = { render: render };

/*!
  * vue-router v4.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */

const hasSymbol = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
const PolySymbol = (name) => 
// vr = vue router
hasSymbol
    ? Symbol(name)
    : ('_vr_') + name;
/**
 * Allows overriding the router instance returned by `useRouter` in tests. r
 * stands for router
 *
 * @internal
 */
const routerKey = /*#__PURE__*/ PolySymbol('r');
/**
 * Allows overriding the current route returned by `useRoute` in tests. rl
 * stands for route location
 *
 * @internal
 */
const routeLocationKey = /*#__PURE__*/ PolySymbol('rl');

var NavigationType;
(function (NavigationType) {
    NavigationType["pop"] = "pop";
    NavigationType["push"] = "push";
})(NavigationType || (NavigationType = {}));
var NavigationDirection;
(function (NavigationDirection) {
    NavigationDirection["back"] = "back";
    NavigationDirection["forward"] = "forward";
    NavigationDirection["unknown"] = "";
})(NavigationDirection || (NavigationDirection = {}));
/**
 * Enumeration with all possible types for navigation failures. Can be passed to
 * {@link isNavigationFailure} to check for specific failures.
 */
var NavigationFailureType;
(function (NavigationFailureType) {
    /**
     * An aborted navigation is a navigation that failed because a navigation
     * guard returned `false` or called `next(false)`
     */
    NavigationFailureType[NavigationFailureType["aborted"] = 4] = "aborted";
    /**
     * A cancelled navigation is a navigation that failed because a more recent
     * navigation finished started (not necessarily finished).
     */
    NavigationFailureType[NavigationFailureType["cancelled"] = 8] = "cancelled";
    /**
     * A duplicated navigation is a navigation that failed because it was
     * initiated while already being at the exact same location.
     */
    NavigationFailureType[NavigationFailureType["duplicated"] = 16] = "duplicated";
})(NavigationFailureType || (NavigationFailureType = {}));

/**
 * Returns the router instance. Equivalent to using `$router` inside
 * templates.
 */
function useRouter() {
    return inject(routerKey);
}
/**
 * Returns the current route location. Equivalent to using `$route` inside
 * templates.
 */
function useRoute() {
    return inject(routeLocationKey);
}

/* eslint complexity: [2, 18], max-statements: [2, 33] */
var shams = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};

var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = shams;

var hasSymbols$1 = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};

/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr$1 = Object.prototype.toString;
var funcType = '[object Function]';

var implementation$1 = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr$1.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};

var implementation = implementation$1;

var functionBind = Function.prototype.bind || implementation;

var bind$1 = functionBind;

var src = bind$1.call(Function.call, Object.prototype.hasOwnProperty);

var undefined$1;

var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError$1 = TypeError;

// eslint-disable-next-line consistent-return
var getEvalledConstructor = function (expressionSyntax) {
	try {
		return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
	} catch (e) {}
};

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () {
	throw new $TypeError$1();
};
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = hasSymbols$1();

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var needsEval = {};

var TypedArray = typeof Uint8Array === 'undefined' ? undefined$1 : getProto(Uint8Array);

var INTRINSICS = {
	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined$1 : AggregateError,
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined$1 : ArrayBuffer,
	'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined$1,
	'%AsyncFromSyncIteratorPrototype%': undefined$1,
	'%AsyncFunction%': needsEval,
	'%AsyncGenerator%': needsEval,
	'%AsyncGeneratorFunction%': needsEval,
	'%AsyncIteratorPrototype%': needsEval,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined$1 : Atomics,
	'%BigInt%': typeof BigInt === 'undefined' ? undefined$1 : BigInt,
	'%Boolean%': Boolean,
	'%DataView%': typeof DataView === 'undefined' ? undefined$1 : DataView,
	'%Date%': Date,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined$1 : Float32Array,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined$1 : Float64Array,
	'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined$1 : FinalizationRegistry,
	'%Function%': $Function,
	'%GeneratorFunction%': needsEval,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined$1 : Int8Array,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined$1 : Int16Array,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined$1 : Int32Array,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined$1,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined$1,
	'%Map%': typeof Map === 'undefined' ? undefined$1 : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined$1 : getProto(new Map()[Symbol.iterator]()),
	'%Math%': Math,
	'%Number%': Number,
	'%Object%': Object,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined$1 : Promise,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined$1 : Proxy,
	'%RangeError%': RangeError,
	'%ReferenceError%': ReferenceError,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined$1 : Reflect,
	'%RegExp%': RegExp,
	'%Set%': typeof Set === 'undefined' ? undefined$1 : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined$1 : getProto(new Set()[Symbol.iterator]()),
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined$1 : SharedArrayBuffer,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined$1,
	'%Symbol%': hasSymbols ? Symbol : undefined$1,
	'%SyntaxError%': $SyntaxError,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypeError%': $TypeError$1,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined$1 : Uint8Array,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined$1 : Uint8ClampedArray,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined$1 : Uint16Array,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined$1 : Uint32Array,
	'%URIError%': URIError,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined$1 : WeakMap,
	'%WeakRef%': typeof WeakRef === 'undefined' ? undefined$1 : WeakRef,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined$1 : WeakSet
};

var doEval = function doEval(name) {
	var value;
	if (name === '%AsyncFunction%') {
		value = getEvalledConstructor('async function () {}');
	} else if (name === '%GeneratorFunction%') {
		value = getEvalledConstructor('function* () {}');
	} else if (name === '%AsyncGeneratorFunction%') {
		value = getEvalledConstructor('async function* () {}');
	} else if (name === '%AsyncGenerator%') {
		var fn = doEval('%AsyncGeneratorFunction%');
		if (fn) {
			value = fn.prototype;
		}
	} else if (name === '%AsyncIteratorPrototype%') {
		var gen = doEval('%AsyncGenerator%');
		if (gen) {
			value = getProto(gen.prototype);
		}
	}

	INTRINSICS[name] = value;

	return value;
};

var LEGACY_ALIASES = {
	'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
	'%ArrayPrototype%': ['Array', 'prototype'],
	'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
	'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
	'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
	'%ArrayProto_values%': ['Array', 'prototype', 'values'],
	'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
	'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
	'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
	'%BooleanPrototype%': ['Boolean', 'prototype'],
	'%DataViewPrototype%': ['DataView', 'prototype'],
	'%DatePrototype%': ['Date', 'prototype'],
	'%ErrorPrototype%': ['Error', 'prototype'],
	'%EvalErrorPrototype%': ['EvalError', 'prototype'],
	'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
	'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
	'%FunctionPrototype%': ['Function', 'prototype'],
	'%Generator%': ['GeneratorFunction', 'prototype'],
	'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
	'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
	'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
	'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
	'%JSONParse%': ['JSON', 'parse'],
	'%JSONStringify%': ['JSON', 'stringify'],
	'%MapPrototype%': ['Map', 'prototype'],
	'%NumberPrototype%': ['Number', 'prototype'],
	'%ObjectPrototype%': ['Object', 'prototype'],
	'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
	'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
	'%PromisePrototype%': ['Promise', 'prototype'],
	'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
	'%Promise_all%': ['Promise', 'all'],
	'%Promise_reject%': ['Promise', 'reject'],
	'%Promise_resolve%': ['Promise', 'resolve'],
	'%RangeErrorPrototype%': ['RangeError', 'prototype'],
	'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
	'%RegExpPrototype%': ['RegExp', 'prototype'],
	'%SetPrototype%': ['Set', 'prototype'],
	'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
	'%StringPrototype%': ['String', 'prototype'],
	'%SymbolPrototype%': ['Symbol', 'prototype'],
	'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
	'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
	'%TypeErrorPrototype%': ['TypeError', 'prototype'],
	'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
	'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
	'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
	'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
	'%URIErrorPrototype%': ['URIError', 'prototype'],
	'%WeakMapPrototype%': ['WeakMap', 'prototype'],
	'%WeakSetPrototype%': ['WeakSet', 'prototype']
};

var bind = functionBind;
var hasOwn$1 = src;
var $concat$1 = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace$1 = bind.call(Function.call, String.prototype.replace);
var $strSlice = bind.call(Function.call, String.prototype.slice);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var first = $strSlice(string, 0, 1);
	var last = $strSlice(string, -1);
	if (first === '%' && last !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
	} else if (last === '%' && first !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
	}
	var result = [];
	$replace$1(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace$1(subString, reEscapeChar, '$1') : number || match;
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	var intrinsicName = name;
	var alias;
	if (hasOwn$1(LEGACY_ALIASES, intrinsicName)) {
		alias = LEGACY_ALIASES[intrinsicName];
		intrinsicName = '%' + alias[0] + '%';
	}

	if (hasOwn$1(INTRINSICS, intrinsicName)) {
		var value = INTRINSICS[intrinsicName];
		if (value === needsEval) {
			value = doEval(intrinsicName);
		}
		if (typeof value === 'undefined' && !allowMissing) {
			throw new $TypeError$1('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
		}

		return {
			alias: alias,
			name: intrinsicName,
			value: value
		};
	}

	throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};

var getIntrinsic = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new $TypeError$1('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new $TypeError$1('"allowMissing" argument must be a boolean');
	}

	var parts = stringToPath(name);
	var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

	var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
	var intrinsicRealName = intrinsic.name;
	var value = intrinsic.value;
	var skipFurtherCaching = false;

	var alias = intrinsic.alias;
	if (alias) {
		intrinsicBaseName = alias[0];
		$spliceApply(parts, $concat$1([0, 1], alias));
	}

	for (var i = 1, isOwn = true; i < parts.length; i += 1) {
		var part = parts[i];
		var first = $strSlice(part, 0, 1);
		var last = $strSlice(part, -1);
		if (
			(
				(first === '"' || first === "'" || first === '`')
				|| (last === '"' || last === "'" || last === '`')
			)
			&& first !== last
		) {
			throw new $SyntaxError('property names with quotes must have matching quotes');
		}
		if (part === 'constructor' || !isOwn) {
			skipFurtherCaching = true;
		}

		intrinsicBaseName += '.' + part;
		intrinsicRealName = '%' + intrinsicBaseName + '%';

		if (hasOwn$1(INTRINSICS, intrinsicRealName)) {
			value = INTRINSICS[intrinsicRealName];
		} else if (value != null) {
			if (!(part in value)) {
				if (!allowMissing) {
					throw new $TypeError$1('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				return void undefined$1;
			}
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, part);
				isOwn = !!desc;

				// By convention, when a data property is converted to an accessor
				// property to emulate a data property that does not suffer from
				// the override mistake, that accessor's getter is marked with
				// an `originalValue` property. Here, when we detect this, we
				// uphold the illusion by pretending to see that original data
				// property, i.e., returning the value rather than the getter
				// itself.
				if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
					value = desc.get;
				} else {
					value = value[part];
				}
			} else {
				isOwn = hasOwn$1(value, part);
				value = value[part];
			}

			if (isOwn && !skipFurtherCaching) {
				INTRINSICS[intrinsicRealName] = value;
			}
		}
	}
	return value;
};

var callBind$1 = {exports: {}};

(function (module) {

var bind = functionBind;
var GetIntrinsic = getIntrinsic;

var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
var $max = GetIntrinsic('%Math.max%');

if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = null;
	}
}

module.exports = function callBind(originalFunction) {
	var func = $reflectApply(bind, $call, arguments);
	if ($gOPD && $defineProperty) {
		var desc = $gOPD(func, 'length');
		if (desc.configurable) {
			// original length, plus the receiver, minus any additional arguments (after the receiver)
			$defineProperty(
				func,
				'length',
				{ value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
			);
		}
	}
	return func;
};

var applyBind = function applyBind() {
	return $reflectApply(bind, $apply, arguments);
};

if ($defineProperty) {
	$defineProperty(module.exports, 'apply', { value: applyBind });
} else {
	module.exports.apply = applyBind;
}
}(callBind$1));

var GetIntrinsic$1 = getIntrinsic;

var callBind = callBind$1.exports;

var $indexOf = callBind(GetIntrinsic$1('String.prototype.indexOf'));

var callBound$1 = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic$1(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
		return callBind(intrinsic);
	}
	return intrinsic;
};

var __viteBrowserExternal = {};

var __viteBrowserExternal$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  'default': __viteBrowserExternal
}, Symbol.toStringTag, { value: 'Module' }));

var require$$0 = /*@__PURE__*/getAugmentedNamespace(__viteBrowserExternal$1);

var hasMap = typeof Map === 'function' && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === 'function' && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var hasWeakRef = typeof WeakRef === 'function' && WeakRef.prototype;
var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var $match = String.prototype.match;
var $slice = String.prototype.slice;
var $replace = String.prototype.replace;
var $toUpperCase = String.prototype.toUpperCase;
var $toLowerCase = String.prototype.toLowerCase;
var $test = RegExp.prototype.test;
var $concat = Array.prototype.concat;
var $join = Array.prototype.join;
var $arrSlice = Array.prototype.slice;
var $floor = Math.floor;
var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;
var gOPS = Object.getOwnPropertySymbols;
var symToString = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? Symbol.prototype.toString : null;
var hasShammedSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'object';
// ie, `has-tostringtag/shams
var toStringTag = typeof Symbol === 'function' && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? 'object' : 'symbol')
    ? Symbol.toStringTag
    : null;
var isEnumerable = Object.prototype.propertyIsEnumerable;

var gPO = (typeof Reflect === 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) || (
    [].__proto__ === Array.prototype // eslint-disable-line no-proto
        ? function (O) {
            return O.__proto__; // eslint-disable-line no-proto
        }
        : null
);

function addNumericSeparator(num, str) {
    if (
        num === Infinity
        || num === -Infinity
        || num !== num
        || (num && num > -1000 && num < 1000)
        || $test.call(/e/, str)
    ) {
        return str;
    }
    var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof num === 'number') {
        var int = num < 0 ? -$floor(-num) : $floor(num); // trunc(num)
        if (int !== num) {
            var intStr = String(int);
            var dec = $slice.call(str, intStr.length + 1);
            return $replace.call(intStr, sepRegex, '$&_') + '.' + $replace.call($replace.call(dec, /([0-9]{3})/g, '$&_'), /_$/, '');
        }
    }
    return $replace.call(str, sepRegex, '$&_');
}

var inspectCustom = require$$0.custom;
var inspectSymbol = inspectCustom && isSymbol(inspectCustom) ? inspectCustom : null;

var objectInspect = function inspect_(obj, options, depth, seen) {
    var opts = options || {};

    if (has$3(opts, 'quoteStyle') && (opts.quoteStyle !== 'single' && opts.quoteStyle !== 'double')) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
    }
    if (
        has$3(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number'
            ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity
            : opts.maxStringLength !== null
        )
    ) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    }
    var customInspect = has$3(opts, 'customInspect') ? opts.customInspect : true;
    if (typeof customInspect !== 'boolean' && customInspect !== 'symbol') {
        throw new TypeError('option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`');
    }

    if (
        has$3(opts, 'indent')
        && opts.indent !== null
        && opts.indent !== '\t'
        && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)
    ) {
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    }
    if (has$3(opts, 'numericSeparator') && typeof opts.numericSeparator !== 'boolean') {
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    }
    var numericSeparator = opts.numericSeparator;

    if (typeof obj === 'undefined') {
        return 'undefined';
    }
    if (obj === null) {
        return 'null';
    }
    if (typeof obj === 'boolean') {
        return obj ? 'true' : 'false';
    }

    if (typeof obj === 'string') {
        return inspectString(obj, opts);
    }
    if (typeof obj === 'number') {
        if (obj === 0) {
            return Infinity / obj > 0 ? '0' : '-0';
        }
        var str = String(obj);
        return numericSeparator ? addNumericSeparator(obj, str) : str;
    }
    if (typeof obj === 'bigint') {
        var bigIntStr = String(obj) + 'n';
        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
    }

    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
    if (typeof depth === 'undefined') { depth = 0; }
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
        return isArray$3(obj) ? '[Array]' : '[Object]';
    }

    var indent = getIndent(opts, depth);

    if (typeof seen === 'undefined') {
        seen = [];
    } else if (indexOf(seen, obj) >= 0) {
        return '[Circular]';
    }

    function inspect(value, from, noIndent) {
        if (from) {
            seen = $arrSlice.call(seen);
            seen.push(from);
        }
        if (noIndent) {
            var newOpts = {
                depth: opts.depth
            };
            if (has$3(opts, 'quoteStyle')) {
                newOpts.quoteStyle = opts.quoteStyle;
            }
            return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
    }

    if (typeof obj === 'function') {
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']' + (keys.length > 0 ? ' { ' + $join.call(keys, ', ') + ' }' : '');
    }
    if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, '$1') : symToString.call(obj);
        return typeof obj === 'object' && !hasShammedSymbols ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
        var s = '<' + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
            s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
        }
        s += '>';
        if (obj.childNodes && obj.childNodes.length) { s += '...'; }
        s += '</' + $toLowerCase.call(String(obj.nodeName)) + '>';
        return s;
    }
    if (isArray$3(obj)) {
        if (obj.length === 0) { return '[]'; }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
            return '[' + indentedJoin(xs, indent) + ']';
        }
        return '[ ' + $join.call(xs, ', ') + ' ]';
    }
    if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if ('cause' in obj && !isEnumerable.call(obj, 'cause')) {
            return '{ [' + String(obj) + '] ' + $join.call($concat.call('[cause]: ' + inspect(obj.cause), parts), ', ') + ' }';
        }
        if (parts.length === 0) { return '[' + String(obj) + ']'; }
        return '{ [' + String(obj) + '] ' + $join.call(parts, ', ') + ' }';
    }
    if (typeof obj === 'object' && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === 'function') {
            return obj[inspectSymbol]();
        } else if (customInspect !== 'symbol' && typeof obj.inspect === 'function') {
            return obj.inspect();
        }
    }
    if (isMap(obj)) {
        var mapParts = [];
        mapForEach.call(obj, function (value, key) {
            mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));
        });
        return collectionOf('Map', mapSize.call(obj), mapParts, indent);
    }
    if (isSet(obj)) {
        var setParts = [];
        setForEach.call(obj, function (value) {
            setParts.push(inspect(value, obj));
        });
        return collectionOf('Set', setSize.call(obj), setParts, indent);
    }
    if (isWeakMap(obj)) {
        return weakCollectionOf('WeakMap');
    }
    if (isWeakSet(obj)) {
        return weakCollectionOf('WeakSet');
    }
    if (isWeakRef(obj)) {
        return weakCollectionOf('WeakRef');
    }
    if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
    }
    if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
    }
    if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
    }
    if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
    }
    if (!isDate(obj) && !isRegExp$1(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? '' : 'null prototype';
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? 'Object' : '';
        var constructorTag = isPlainObject || typeof obj.constructor !== 'function' ? '' : obj.constructor.name ? obj.constructor.name + ' ' : '';
        var tag = constructorTag + (stringTag || protoTag ? '[' + $join.call($concat.call([], stringTag || [], protoTag || []), ': ') + '] ' : '');
        if (ys.length === 0) { return tag + '{}'; }
        if (indent) {
            return tag + '{' + indentedJoin(ys, indent) + '}';
        }
        return tag + '{ ' + $join.call(ys, ', ') + ' }';
    }
    return String(obj);
};

function wrapQuotes(s, defaultStyle, opts) {
    var quoteChar = (opts.quoteStyle || defaultStyle) === 'double' ? '"' : "'";
    return quoteChar + s + quoteChar;
}

function quote(s) {
    return $replace.call(String(s), /"/g, '&quot;');
}

function isArray$3(obj) { return toStr(obj) === '[object Array]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isDate(obj) { return toStr(obj) === '[object Date]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isRegExp$1(obj) { return toStr(obj) === '[object RegExp]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isError(obj) { return toStr(obj) === '[object Error]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isString(obj) { return toStr(obj) === '[object String]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isNumber(obj) { return toStr(obj) === '[object Number]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isBoolean(obj) { return toStr(obj) === '[object Boolean]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }

// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives
function isSymbol(obj) {
    if (hasShammedSymbols) {
        return obj && typeof obj === 'object' && obj instanceof Symbol;
    }
    if (typeof obj === 'symbol') {
        return true;
    }
    if (!obj || typeof obj !== 'object' || !symToString) {
        return false;
    }
    try {
        symToString.call(obj);
        return true;
    } catch (e) {}
    return false;
}

function isBigInt(obj) {
    if (!obj || typeof obj !== 'object' || !bigIntValueOf) {
        return false;
    }
    try {
        bigIntValueOf.call(obj);
        return true;
    } catch (e) {}
    return false;
}

var hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };
function has$3(obj, key) {
    return hasOwn.call(obj, key);
}

function toStr(obj) {
    return objectToString.call(obj);
}

function nameOf(f) {
    if (f.name) { return f.name; }
    var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
    if (m) { return m[1]; }
    return null;
}

function indexOf(xs, x) {
    if (xs.indexOf) { return xs.indexOf(x); }
    for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) { return i; }
    }
    return -1;
}

function isMap(x) {
    if (!mapSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        mapSize.call(x);
        try {
            setSize.call(x);
        } catch (s) {
            return true;
        }
        return x instanceof Map; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakMapHas.call(x, weakMapHas);
        try {
            weakSetHas.call(x, weakSetHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakRef(x) {
    if (!weakRefDeref || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakRefDeref.call(x);
        return true;
    } catch (e) {}
    return false;
}

function isSet(x) {
    if (!setSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        setSize.call(x);
        try {
            mapSize.call(x);
        } catch (m) {
            return true;
        }
        return x instanceof Set; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakSetHas.call(x, weakSetHas);
        try {
            weakMapHas.call(x, weakMapHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isElement(x) {
    if (!x || typeof x !== 'object') { return false; }
    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
        return true;
    }
    return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
}

function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');
        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
    }
    // eslint-disable-next-line no-control-regex
    var s = $replace.call($replace.call(str, /(['\\])/g, '\\$1'), /[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, 'single', opts);
}

function lowbyte(c) {
    var n = c.charCodeAt(0);
    var x = {
        8: 'b',
        9: 't',
        10: 'n',
        12: 'f',
        13: 'r'
    }[n];
    if (x) { return '\\' + x; }
    return '\\x' + (n < 0x10 ? '0' : '') + $toUpperCase.call(n.toString(16));
}

function markBoxed(str) {
    return 'Object(' + str + ')';
}

function weakCollectionOf(type) {
    return type + ' { ? }';
}

function collectionOf(type, size, entries, indent) {
    var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ', ');
    return type + ' (' + size + ') {' + joinedEntries + '}';
}

function singleLineValues(xs) {
    for (var i = 0; i < xs.length; i++) {
        if (indexOf(xs[i], '\n') >= 0) {
            return false;
        }
    }
    return true;
}

function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === '\t') {
        baseIndent = '\t';
    } else if (typeof opts.indent === 'number' && opts.indent > 0) {
        baseIndent = $join.call(Array(opts.indent + 1), ' ');
    } else {
        return null;
    }
    return {
        base: baseIndent,
        prev: $join.call(Array(depth + 1), baseIndent)
    };
}

function indentedJoin(xs, indent) {
    if (xs.length === 0) { return ''; }
    var lineJoiner = '\n' + indent.prev + indent.base;
    return lineJoiner + $join.call(xs, ',' + lineJoiner) + '\n' + indent.prev;
}

function arrObjKeys(obj, inspect) {
    var isArr = isArray$3(obj);
    var xs = [];
    if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
            xs[i] = has$3(obj, i) ? inspect(obj[i], obj) : '';
        }
    }
    var syms = typeof gOPS === 'function' ? gOPS(obj) : [];
    var symMap;
    if (hasShammedSymbols) {
        symMap = {};
        for (var k = 0; k < syms.length; k++) {
            symMap['$' + syms[k]] = syms[k];
        }
    }

    for (var key in obj) { // eslint-disable-line no-restricted-syntax
        if (!has$3(obj, key)) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (isArr && String(Number(key)) === key && key < obj.length) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (hasShammedSymbols && symMap['$' + key] instanceof Symbol) {
            // this is to prevent shammed Symbols, which are stored as strings, from being included in the string key section
            continue; // eslint-disable-line no-restricted-syntax, no-continue
        } else if ($test.call(/[^\w$]/, key)) {
            xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
        } else {
            xs.push(key + ': ' + inspect(obj[key], obj));
        }
    }
    if (typeof gOPS === 'function') {
        for (var j = 0; j < syms.length; j++) {
            if (isEnumerable.call(obj, syms[j])) {
                xs.push('[' + inspect(syms[j]) + ']: ' + inspect(obj[syms[j]], obj));
            }
        }
    }
    return xs;
}

var GetIntrinsic = getIntrinsic;
var callBound = callBound$1;
var inspect = objectInspect;

var $TypeError = GetIntrinsic('%TypeError%');
var $WeakMap = GetIntrinsic('%WeakMap%', true);
var $Map = GetIntrinsic('%Map%', true);

var $weakMapGet = callBound('WeakMap.prototype.get', true);
var $weakMapSet = callBound('WeakMap.prototype.set', true);
var $weakMapHas = callBound('WeakMap.prototype.has', true);
var $mapGet = callBound('Map.prototype.get', true);
var $mapSet = callBound('Map.prototype.set', true);
var $mapHas = callBound('Map.prototype.has', true);

/*
 * This function traverses the list returning the node corresponding to the
 * given key.
 *
 * That node is also moved to the head of the list, so that if it's accessed
 * again we don't need to traverse the whole list. By doing so, all the recently
 * used nodes can be accessed relatively quickly.
 */
var listGetNode = function (list, key) { // eslint-disable-line consistent-return
	for (var prev = list, curr; (curr = prev.next) !== null; prev = curr) {
		if (curr.key === key) {
			prev.next = curr.next;
			curr.next = list.next;
			list.next = curr; // eslint-disable-line no-param-reassign
			return curr;
		}
	}
};

var listGet = function (objects, key) {
	var node = listGetNode(objects, key);
	return node && node.value;
};
var listSet = function (objects, key, value) {
	var node = listGetNode(objects, key);
	if (node) {
		node.value = value;
	} else {
		// Prepend the new node to the beginning of the list
		objects.next = { // eslint-disable-line no-param-reassign
			key: key,
			next: objects.next,
			value: value
		};
	}
};
var listHas = function (objects, key) {
	return !!listGetNode(objects, key);
};

var sideChannel = function getSideChannel() {
	var $wm;
	var $m;
	var $o;
	var channel = {
		assert: function (key) {
			if (!channel.has(key)) {
				throw new $TypeError('Side channel does not contain ' + inspect(key));
			}
		},
		get: function (key) { // eslint-disable-line consistent-return
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapGet($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapGet($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return listGet($o, key);
				}
			}
		},
		has: function (key) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapHas($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapHas($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return listHas($o, key);
				}
			}
			return false;
		},
		set: function (key, value) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if (!$wm) {
					$wm = new $WeakMap();
				}
				$weakMapSet($wm, key, value);
			} else if ($Map) {
				if (!$m) {
					$m = new $Map();
				}
				$mapSet($m, key, value);
			} else {
				if (!$o) {
					/*
					 * Initialize the linked list as an empty node, so that we don't have
					 * to special-case handling of the first node: we can always refer to
					 * it as (previous node).next, instead of something like (list).head
					 */
					$o = { key: {}, next: null };
				}
				listSet($o, key, value);
			}
		}
	};
	return channel;
};

var replace = String.prototype.replace;
var percentTwenties = /%20/g;

var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

var formats$3 = {
    'default': Format.RFC3986,
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return String(value);
        }
    },
    RFC1738: Format.RFC1738,
    RFC3986: Format.RFC3986
};

var formats$2 = formats$3;

var has$2 = Object.prototype.hasOwnProperty;
var isArray$2 = Array.isArray;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];

        if (isArray$2(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    /* eslint no-param-reassign: 0 */
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (isArray$2(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if ((options && (options.plainObjects || options.allowPrototypes)) || !has$2.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (!target || typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (isArray$2(target) && !isArray$2(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (isArray$2(target) && isArray$2(source)) {
        source.forEach(function (item, i) {
            if (has$2.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has$2.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};

var encode = function encode(str, defaultEncoder, charset, kind, format) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = str;
    if (typeof str === 'symbol') {
        string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
        string = String(str);
    }

    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
            || (format === formats$2.RFC1738 && (c === 0x28 || c === 0x29)) // ( )
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        /* eslint operator-linebreak: [2, "before"] */
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    compactQueue(queue);

    return value;
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
    return [].concat(a, b);
};

var maybeMap = function maybeMap(val, fn) {
    if (isArray$2(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
            mapped.push(fn(val[i]));
        }
        return mapped;
    }
    return fn(val);
};

var utils$2 = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    maybeMap: maybeMap,
    merge: merge
};

var getSideChannel = sideChannel;
var utils$1 = utils$2;
var formats$1 = formats$3;
var has$1 = Object.prototype.hasOwnProperty;

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) {
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};

var isArray$1 = Array.isArray;
var split = String.prototype.split;
var push = Array.prototype.push;
var pushToArray = function (arr, valueOrArray) {
    push.apply(arr, isArray$1(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;

var defaultFormat = formats$1['default'];
var defaults$1 = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils$1.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats$1.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === 'string'
        || typeof v === 'number'
        || typeof v === 'boolean'
        || typeof v === 'symbol'
        || typeof v === 'bigint';
};

var sentinel = {};

var stringify$1 = function stringify(
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    format,
    formatter,
    encodeValuesOnly,
    charset,
    sideChannel
) {
    var obj = object;

    var tmpSc = sideChannel;
    var step = 0;
    var findFlag = false;
    while ((tmpSc = tmpSc.get(sentinel)) !== void undefined && !findFlag) {
        // Where object last appeared in the ref tree
        var pos = tmpSc.get(object);
        step += 1;
        if (typeof pos !== 'undefined') {
            if (pos === step) {
                throw new RangeError('Cyclic object value');
            } else {
                findFlag = true; // Break while
            }
        }
        if (typeof tmpSc.get(sentinel) === 'undefined') {
            step = 0;
        }
    }

    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray$1(obj)) {
        obj = utils$1.maybeMap(obj, function (value) {
            if (value instanceof Date) {
                return serializeDate(value);
            }
            return value;
        });
    }

    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults$1.encoder, charset, 'key', format) : prefix;
        }

        obj = '';
    }

    if (isNonNullishPrimitive(obj) || utils$1.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults$1.encoder, charset, 'key', format);
            if (generateArrayPrefix === 'comma' && encodeValuesOnly) {
                var valuesArray = split.call(String(obj), ',');
                var valuesJoined = '';
                for (var i = 0; i < valuesArray.length; ++i) {
                    valuesJoined += (i === 0 ? '' : ',') + formatter(encoder(valuesArray[i], defaults$1.encoder, charset, 'value', format));
                }
                return [formatter(keyValue) + '=' + valuesJoined];
            }
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults$1.encoder, charset, 'value', format))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (generateArrayPrefix === 'comma' && isArray$1(obj)) {
        // we need to join elements in
        objKeys = [{ value: obj.length > 0 ? obj.join(',') || null : void undefined }];
    } else if (isArray$1(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var j = 0; j < objKeys.length; ++j) {
        var key = objKeys[j];
        var value = typeof key === 'object' && typeof key.value !== 'undefined' ? key.value : obj[key];

        if (skipNulls && value === null) {
            continue;
        }

        var keyPrefix = isArray$1(obj)
            ? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix
            : prefix + (allowDots ? '.' + key : '[' + key + ']');

        sideChannel.set(object, step);
        var valueSideChannel = getSideChannel();
        valueSideChannel.set(sentinel, sideChannel);
        pushToArray(values, stringify(
            value,
            keyPrefix,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encoder,
            filter,
            sort,
            allowDots,
            serializeDate,
            format,
            formatter,
            encodeValuesOnly,
            charset,
            valueSideChannel
        ));
    }

    return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults$1;
    }

    if (opts.encoder !== null && typeof opts.encoder !== 'undefined' && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var charset = opts.charset || defaults$1.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }

    var format = formats$1['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has$1.call(formats$1.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats$1.formatters[format];

    var filter = defaults$1.filter;
    if (typeof opts.filter === 'function' || isArray$1(opts.filter)) {
        filter = opts.filter;
    }

    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults$1.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults$1.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults$1.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults$1.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults$1.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults$1.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults$1.encodeValuesOnly,
        filter: filter,
        format: format,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults$1.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults$1.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults$1.strictNullHandling
    };
};

var stringify_1 = function (object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);

    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray$1(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if (opts && 'indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (options.sort) {
        objKeys.sort(options.sort);
    }

    var sideChannel = getSideChannel();
    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (options.skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify$1(
            obj[key],
            key,
            generateArrayPrefix,
            options.strictNullHandling,
            options.skipNulls,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.format,
            options.formatter,
            options.encodeValuesOnly,
            options.charset,
            sideChannel
        ));
    }

    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }

    return joined.length > 0 ? prefix + joined : '';
};

var utils = utils$2;

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    allowSparse: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};

var interpretNumericEntities = function (str) {
    return str.replace(/&#(\d+);/g, function ($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};

var parseArrayValue = function (val, options) {
    if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
        return val.split(',');
    }

    return val;
};

// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;

    var charset = options.charset;
    if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }

    for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, 'key');
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
            val = utils.maybeMap(
                parseArrayValue(part.slice(pos + 1), options),
                function (encodedVal) {
                    return options.decoder(encodedVal, defaults.decoder, charset, 'value');
                }
            );
        }

        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(val);
        }

        if (part.indexOf('[]=') > -1) {
            val = isArray(val) ? [val] : val;
        }

        if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]' && options.parseArrays) {
            obj = [].concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === '') {
                obj = { 0: leaf };
            } else if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else if (cleanRoot !== '__proto__') {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options, valuesParsed);
};

var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;

    return {
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        allowSparse: typeof opts.allowSparse === 'boolean' ? opts.allowSparse : defaults.allowSparse,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

var parse$1 = function (str, opts) {
    var options = normalizeParseOptions(opts);

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
        obj = utils.merge(obj, newObj, options);
    }

    if (options.allowSparse === true) {
        return obj;
    }

    return utils.compact(obj);
};

var stringify = stringify_1;
var parse = parse$1;
var formats = formats$3;

var lib = {
    formats: formats,
    parse: parse,
    stringify: stringify
};

const readQuery = (str) => {
  return lib.parse(str);
};
const stringifyQuery = (obj) => {
  obj.value = valueToString(obj.value);
  return lib.stringify(obj, { encode: true, arrayFormat: "repeat" });
};
const convertStrFilterToObj = (str) => {
  const [field, type, value] = str.split("||");
  return { field, type, value };
};
const getUrlFilters = (query, fieldDefault, typeDefault) => {
  const { filter } = readQuery(query);
  if (Array.isArray(filter)) {
    return;
  }
  if (typeof filter === "string") {
    const { field, type, value } = convertStrFilterToObj(filter);
    if (field === fieldDefault && type === typeDefault) {
      return { field, type, value };
    }
  }
  return null;
};
const addUrlFilter = (query, filterObj) => {
  if (query) {
    const { filter } = readQuery(query);
    console.log(readQuery(query));
    if (Array.isArray(filter)) {
      return "";
    }
    if (typeof filter === "string") {
      const { field } = convertStrFilterToObj(filter);
      if (field === filterObj.field) {
        return stringifyQuery({
          filter: [`${filterObj.field}||${filterObj.type}||${filterObj.value}`]
        });
      }
    }
    if (!filter) {
      return stringifyQuery({
        filter: [`${filterObj.field}||${filterObj.type}||${filterObj.value}`]
      });
    }
    return "";
  }
  return stringifyQuery({
    filter: [`${filterObj.field}||${filterObj.type}||${filterObj.value}`]
  });
};
const changeUrlFilter = (query, filterObj) => {
  if (query) {
    const { filter } = readQuery(query);
    if (Array.isArray(filter)) {
      return "";
    }
    if (typeof filter === "string") {
      const { field } = convertStrFilterToObj(filter);
      if (field === filterObj.field) {
        return stringifyQuery({
          filter: [`${filterObj.field}||${filterObj.type}||${filterObj.value}`]
        });
      }
    }
    return "";
  } else {
    return stringifyQuery({
      filter: [`${filterObj.field}||${filterObj.type}||${filterObj.value}`]
    });
  }
};
const removeUrlFilter = (query, filterField) => {
  const { filter } = readQuery(query);
  if (Array.isArray(filter)) {
    return;
  }
  if (typeof filter === "string") {
    const { field } = convertStrFilterToObj(filter);
    if (field === filterField) {
      return stringifyQuery({ filter: [] });
    }
  }
  return "";
};
const valueToString = (value) => {
  if (Array.isArray(value)) {
    return value.join(",");
  }
  return value;
};

var FiltersView_vue_vue_type_style_index_0_scoped_true_lang = '';

const _hoisted_1$3 = { class: "filters-view" };
const _hoisted_2$3 = {
  key: 0,
  class: "add-filter__text"
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const slots = useSlots();
    const router = useRouter();
    const route = useRoute();
    const [filterSlot] = slots.filters();
    console.log(filterSlot.children);
    const childrenInFilterSlot = filterSlot.children;
    const filteringSlots = (slots2) => {
      if (Array.isArray(slots2)) {
        return slots2.filter((slot) => slot?.props?.field && slot?.props?.label && slot?.props?.type);
      }
      return [];
    };
    const defaultFilters = () => {
      const currentSlots = filteringSlots(childrenInFilterSlot);
      if (Array.isArray(currentSlots) && currentSlots.length) {
        return currentSlots.map((filter) => {
          return {
            field: filter.props.field,
            label: filter.props.label,
            type: filter.props.type,
            value: filter.props.value ?? null
          };
        });
      }
      return [];
    };
    const filters = reactive([]);
    const filtersList = reactive(defaultFilters());
    const addFilter = (filterObj) => {
      console.log(filterObj);
      const query = addUrlFilter(route?.query?.filters, filterObj);
      if (query) {
        router.replace({ query: { filters: query } });
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        renderSlot(_ctx.$slots, "filters", {}, void 0, true),
        createVNode(unref(ElDropdown), { trigger: "click" }, {
          dropdown: withCtx(() => [
            createVNode(unref(ElDropdownMenu), null, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filtersList), (filter, i) => {
                  return openBlock(), createBlock(unref(ElDropdownItem), {
                    key: i,
                    onClick: ($event) => addFilter(filter)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(filter.label), 1)
                    ]),
                    _: 2
                  }, 1032, ["onClick"]);
                }), 128))
              ]),
              _: 1
            })
          ]),
          default: withCtx(() => [
            createElementVNode("div", {
              class: normalizeClass(["add-filter", { "add-filter--more": unref(filters).length }])
            }, [
              createVNode(unref(ElIcon), null, {
                default: withCtx(() => [
                  createVNode(unref(plus))
                ]),
                _: 1
              }),
              !unref(filters).length ? (openBlock(), createElementBlock("span", _hoisted_2$3, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440")) : createCommentVNode("", true)
            ], 2)
          ]),
          _: 1
        })
      ]);
    };
  }
});
var FiltersView = /* @__PURE__ */ _export_sfc$1(_sfc_main$3, [["__scopeId", "data-v-1b24b614"]]);

var DynamicListing_vue_vue_type_style_index_0_lang = '';

const _hoisted_1$2 = { class: "listings" };
const _hoisted_2$2 = { class: "listings__header" };
const _hoisted_3 = { class: "listings__views" };
const _hoisted_4 = { class: "views" };
const _hoisted_5 = { class: "views__item" };
const _hoisted_6 = { class: "views__item" };
const _hoisted_7 = { class: "views__item" };
const _hoisted_8 = { class: "listings__filters" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const input = ref("");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createElementVNode("div", _hoisted_2$2, [
          createElementVNode("div", _hoisted_3, [
            createElementVNode("ul", _hoisted_4, [
              createElementVNode("li", _hoisted_5, [
                createVNode(unref(ElIcon), { size: 20 }, {
                  default: withCtx(() => [
                    createVNode(unref(Calendar))
                  ]),
                  _: 1
                })
              ]),
              createElementVNode("li", _hoisted_6, [
                createVNode(unref(ElIcon), { size: 20 }, {
                  default: withCtx(() => [
                    createVNode(unref(Kanban))
                  ]),
                  _: 1
                })
              ]),
              createElementVNode("li", _hoisted_7, [
                createVNode(unref(ElIcon), { size: 20 }, {
                  default: withCtx(() => [
                    createVNode(unref(List))
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          createVNode(unref(ElInput), {
            modelValue: input.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => input.value = $event),
            class: "w-50 m-2",
            placeholder: "\u041F\u043E\u0438\u0441\u043A",
            "suffix-icon": unref(search)
          }, null, 8, ["modelValue", "suffix-icon"]),
          createElementVNode("div", _hoisted_8, [
            createVNode(FiltersView, null, {
              filters: withCtx(() => [
                renderSlot(_ctx.$slots, "filters")
              ]),
              _: 3
            })
          ])
        ]),
        renderSlot(_ctx.$slots, "listings")
      ]);
    };
  }
});

var popover = '';

var datePicker = '';

const _hoisted_1$1 = /* @__PURE__ */ createElementVNode("span", { class: "filters-view__label" }, "\u0414\u0430\u0442\u0430: ", -1);
const _hoisted_2$1 = { class: "filters-view__value" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    label: null,
    field: null,
    type: null,
    value: { default: null }
  },
  setup(__props) {
    const props = __props;
    const date = ref(null);
    const route = useRoute();
    const router = useRouter();
    const filterVisible = ref(false);
    const filterPopoverVisible = ref(false);
    onMounted(() => {
      if (route?.query?.filters) {
        getFilter(route.query["filters"]);
      }
    });
    watch(() => route?.query?.filters, (val) => {
      getFilter(val);
    });
    const dateString = computed(() => {
      if (Array.isArray(date.value) && date.value?.length) {
        const [first, last] = date.value;
        return `\u0441 ${DateTime.fromJSDate(first).toLocaleString(DateTime.DATE_MED)} \u043F\u043E ${DateTime.fromJSDate(last).toLocaleString(DateTime.DATE_MED)}`;
      }
      if (!Array.isArray(date.value) && date.value) {
        return DateTime.fromJSDate(date.value).toLocaleString(DateTime.DATE_MED);
      }
      return "\u0412\u044B\u0431\u0435\u0440\u0435\u0442\u0435 \u0434\u0430\u0442\u0443";
    });
    const getFilter = (query) => {
      if (query) {
        const filterObj = getUrlFilters(query, props.field, props.type);
        if (filterObj?.field === props.field) {
          filterVisible.value = true;
          if (filterObj?.value !== "null") {
            date.value = datesIsoStringToDate(filterObj.value);
          } else {
            filterPopoverVisible.value = true;
          }
        }
      } else {
        filterVisible.value = false;
      }
    };
    const changeFilter = (e) => {
      const filterObj = {
        field: props.field,
        type: props.type,
        value: datesToIsoStrings(e)
      };
      const query = changeUrlFilter(route.query?.filters, filterObj);
      router.replace({ query: { filters: query } });
    };
    const removeFilter = () => {
      const query = removeUrlFilter(route.query?.filters, props.field);
      router.replace({ query: { filters: query } });
    };
    const datesToIsoStrings = (value) => {
      if (Array.isArray(value)) {
        return value.map((val) => DateTime.fromJSDate(val).toISO());
      }
      return DateTime.fromJSDate(value).toISO();
    };
    const datesIsoStringToDate = (value) => {
      const values = value.split(",");
      if (values.length > 1) {
        return values.map((val) => DateTime.fromISO(val).toJSDate());
      }
      return DateTime.fromISO(value).toJSDate();
    };
    const closeFilter = () => {
      removeFilter();
      filterPopoverVisible.value = false;
    };
    const openFilterPopover = () => {
      filterPopoverVisible.value = true;
    };
    const closeFilterPopover = () => {
      if (filterPopoverVisible.value) {
        filterPopoverVisible.value = false;
      }
    };
    const datePickerVisibleChange = (e) => {
      if (!e) {
        filterPopoverVisible.value = false;
      }
    };
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", null, [
        createVNode(unref(ElPopover), {
          visible: filterPopoverVisible.value,
          "onUpdate:visible": _cache[1] || (_cache[1] = ($event) => filterPopoverVisible.value = $event),
          placement: "bottom",
          width: "auto",
          trigger: "click",
          onHide: closeFilterPopover
        }, {
          reference: withCtx(() => [
            createVNode(unref(ElTag), {
              class: "mx-1 filters-view__tag",
              size: "large",
              closable: "",
              onClick: openFilterPopover,
              onClose: closeFilter
            }, {
              default: withCtx(() => [
                _hoisted_1$1,
                createElementVNode("span", _hoisted_2$1, toDisplayString(unref(dateString)), 1)
              ]),
              _: 1
            })
          ]),
          default: withCtx(() => [
            createVNode(unref(ElDatePicker), {
              modelValue: date.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => date.value = $event),
              type: "daterange",
              onChange: changeFilter,
              onVisibleChange: datePickerVisibleChange
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }, 8, ["visible"])
      ], 512)), [
        [vShow, filterVisible.value]
      ]);
    };
  }
});

const _hoisted_1 = { class: "filters-view__label" };
const _hoisted_2 = { class: "filters-view__value" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    label: null,
    field: null,
    type: null,
    value: { type: Boolean, default: null },
    trueText: { default: "\u0414\u0430" },
    falseText: { default: "\u041D\u0435\u0442" }
  },
  setup(__props) {
    const props = __props;
    const dropdown = ref();
    const filterValue = ref(false);
    const route = useRoute();
    const router = useRouter();
    console.log(route);
    const filterVisible = ref(false);
    onMounted(() => {
      if (route?.query?.filters) {
        getFilter(route.query["filters"]);
      }
    });
    watch(() => route?.query?.filters, (val) => {
      getFilter(val);
    });
    const getFilter = (query) => {
      if (query) {
        const filterObj = getUrlFilters(query, props.field, props.type);
        if (filterObj?.field === props.field) {
          filterVisible.value = true;
          if (filterObj?.value !== "null") {
            filterValue.value = stringToBoolean(filterObj.value);
          } else {
            dropdown.value.handleOpen();
          }
        }
      } else {
        filterVisible.value = false;
      }
    };
    const stringToBoolean = (value) => {
      if (value === "true") {
        return true;
      }
      return false;
    };
    const changeFilter = (e) => {
      const filterObj = {
        field: props.field,
        type: props.type,
        value: e
      };
      const query = changeUrlFilter(route?.query?.filters, filterObj);
      router.replace({ query: { filters: query } });
    };
    const removeFilter = () => {
      const query = removeUrlFilter(route?.query?.filters, props.field);
      router.replace({ query: { filters: query } });
    };
    const closeFilter = () => {
      dropdown.value.handleClose();
      removeFilter();
    };
    const openFilterPopover = () => {
      dropdown.value.handleOpen();
    };
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", null, [
        createVNode(unref(ElDropdown), {
          ref_key: "dropdown",
          ref: dropdown,
          trigger: "click"
        }, {
          dropdown: withCtx(() => [
            createVNode(unref(ElDropdownMenu), null, {
              default: withCtx(() => [
                createVNode(unref(ElDropdownItem), {
                  onClick: _cache[0] || (_cache[0] = ($event) => changeFilter(true))
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(props.trueText), 1)
                  ]),
                  _: 1
                }),
                createVNode(unref(ElDropdownItem), {
                  onClick: _cache[1] || (_cache[1] = ($event) => changeFilter(false))
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(props.falseText), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          default: withCtx(() => [
            createVNode(unref(ElTag), {
              class: "mx-1 filters-view__tag",
              size: "large",
              closable: "",
              onClick: openFilterPopover,
              onClose: closeFilter
            }, {
              default: withCtx(() => [
                createElementVNode("span", _hoisted_1, toDisplayString(props.label) + ": ", 1),
                createElementVNode("span", _hoisted_2, toDisplayString(filterValue.value ? props.trueText : props.falseText), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 512)
      ], 512)), [
        [vShow, filterVisible.value]
      ]);
    };
  }
});

// import 'element-plus/theme-chalk/index.css';

const UI = {
  install(Vue) {
    Vue.component('UApp', UApp);
    Vue.component('TableListing', _sfc_main$4);
    Vue.component('DynamicListing', _sfc_main$2);
    Vue.component('DateFilter', _sfc_main$1);
    Vue.component('BooleanFilter', _sfc_main);
    Vue.component('ApiListings', _sfc_main$5);
  },
};

export { UI as default };
