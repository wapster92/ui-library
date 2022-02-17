var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { getCurrentScope, onScopeDispose, ref, watch, unref, computed, defineComponent, openBlock, createElementBlock, createElementVNode, warn, getCurrentInstance, inject, isRef, onMounted, onBeforeUnmount, onBeforeMount, provide, mergeProps, renderSlot, shallowRef, nextTick, onUpdated, resolveComponent, withDirectives, normalizeClass, normalizeStyle, createCommentVNode, Fragment, createBlock, withCtx, resolveDynamicComponent, withModifiers, createVNode, toDisplayString, vShow, toRef, Transition, reactive, cloneVNode, Text, h, Comment, Teleport, createTextVNode, readonly, useSlots, resolveDirective, renderList } from "vue";
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeGlobal$1 = freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal$1 || freeSelf || Function("return this")();
var root$1 = root;
var Symbol$1 = root$1.Symbol;
var Symbol$2 = Symbol$1;
var objectProto$b = Object.prototype;
var hasOwnProperty$9 = objectProto$b.hasOwnProperty;
var nativeObjectToString$1 = objectProto$b.toString;
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty$9.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
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
var objectProto$a = Object.prototype;
var nativeObjectToString = objectProto$a.toString;
function objectToString(value) {
  return nativeObjectToString.call(value);
}
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var symbolTag$1 = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag$1;
}
function arrayMap(array, iteratee) {
  var index2 = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index2 < length) {
    result[index2] = iteratee(array[index2], index2, array);
  }
  return result;
}
var isArray$1 = Array.isArray;
var isArray$2 = isArray$1;
var INFINITY$1 = 1 / 0;
var symbolProto$1 = Symbol$2 ? Symbol$2.prototype : void 0, symbolToString = symbolProto$1 ? symbolProto$1.toString : void 0;
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray$2(value)) {
    return arrayMap(value, baseToString) + "";
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$1 ? "-0" : result;
}
var reWhitespace = /\s/;
function trimmedEndIndex(string) {
  var index2 = string.length;
  while (index2-- && reWhitespace.test(string.charAt(index2))) {
  }
  return index2;
}
var reTrimStart = /^\s+/;
function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
function isObject$1(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject$1(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject$1(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var asyncTag = "[object AsyncFunction]", funcTag$1 = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction$1(value) {
  if (!isObject$1(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var coreJsData = root$1["__core-js_shared__"];
var coreJsData$1 = coreJsData;
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData$1 && coreJsData$1.keys && coreJsData$1.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var funcProto$1 = Function.prototype;
var funcToString$1 = funcProto$1.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto = Function.prototype, objectProto$9 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$8 = objectProto$9.hasOwnProperty;
var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty$8).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative(value) {
  if (!isObject$1(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction$1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
function getValue(object, key) {
  return object == null ? void 0 : object[key];
}
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : void 0;
}
var WeakMap2 = getNative(root$1, "WeakMap");
var WeakMap$1 = WeakMap2;
var MAX_SAFE_INTEGER$1 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction$1(value);
}
var objectProto$8 = Object.prototype;
function isPrototype(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$8;
  return value === proto;
}
function baseTimes(n, iteratee) {
  var index2 = -1, result = Array(n);
  while (++index2 < n) {
    result[index2] = iteratee(index2);
  }
  return result;
}
var argsTag$2 = "[object Arguments]";
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag$2;
}
var objectProto$7 = Object.prototype;
var hasOwnProperty$7 = objectProto$7.hasOwnProperty;
var propertyIsEnumerable$1 = objectProto$7.propertyIsEnumerable;
var isArguments = baseIsArguments(function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty$7.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
};
var isArguments$1 = isArguments;
function stubFalse() {
  return false;
}
var freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
var Buffer2 = moduleExports$1 ? root$1.Buffer : void 0;
var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
var isBuffer = nativeIsBuffer || stubFalse;
var isBuffer$1 = isBuffer;
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", errorTag$1 = "[object Error]", funcTag = "[object Function]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", objectTag$2 = "[object Object]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", weakMapTag$1 = "[object WeakMap]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$2 = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag$1] = typedArrayTags[boolTag$1] = typedArrayTags[dataViewTag$2] = typedArrayTags[dateTag$1] = typedArrayTags[errorTag$1] = typedArrayTags[funcTag] = typedArrayTags[mapTag$2] = typedArrayTags[numberTag$1] = typedArrayTags[objectTag$2] = typedArrayTags[regexpTag$1] = typedArrayTags[setTag$2] = typedArrayTags[stringTag$1] = typedArrayTags[weakMapTag$1] = false;
function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var freeProcess = moduleExports && freeGlobal$1.process;
var nodeUtil = function() {
  try {
    var types = freeModule && freeModule.require && freeModule.require("util").types;
    if (types) {
      return types;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e) {
  }
}();
var nodeUtil$1 = nodeUtil;
var nodeIsTypedArray = nodeUtil$1 && nodeUtil$1.isTypedArray;
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
var isTypedArray$1 = isTypedArray;
var objectProto$6 = Object.prototype;
var hasOwnProperty$6 = objectProto$6.hasOwnProperty;
function arrayLikeKeys(value, inherited) {
  var isArr = isArray$2(value), isArg = !isArr && isArguments$1(value), isBuff = !isArr && !isArg && isBuffer$1(value), isType = !isArr && !isArg && !isBuff && isTypedArray$1(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$6.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var nativeKeys = overArg(Object.keys, Object);
var nativeKeys$1 = nativeKeys;
var objectProto$5 = Object.prototype;
var hasOwnProperty$5 = objectProto$5.hasOwnProperty;
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys$1(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$5.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey(value, object) {
  if (isArray$2(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var nativeCreate = getNative(Object, "create");
var nativeCreate$1 = nativeCreate;
function hashClear() {
  this.__data__ = nativeCreate$1 ? nativeCreate$1(null) : {};
  this.size = 0;
}
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
var objectProto$4 = Object.prototype;
var hasOwnProperty$4 = objectProto$4.hasOwnProperty;
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate$1) {
    var result = data[key];
    return result === HASH_UNDEFINED$2 ? void 0 : result;
  }
  return hasOwnProperty$4.call(data, key) ? data[key] : void 0;
}
var objectProto$3 = Object.prototype;
var hasOwnProperty$3 = objectProto$3.hasOwnProperty;
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate$1 ? data[key] !== void 0 : hasOwnProperty$3.call(data, key);
}
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate$1 && value === void 0 ? HASH_UNDEFINED$1 : value;
  return this;
}
function Hash(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key) {
  var data = this.__data__, index2 = assocIndexOf(data, key);
  if (index2 < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index2 == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index2, 1);
  }
  --this.size;
  return true;
}
function listCacheGet(key) {
  var data = this.__data__, index2 = assocIndexOf(data, key);
  return index2 < 0 ? void 0 : data[index2][1];
}
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
function listCacheSet(key, value) {
  var data = this.__data__, index2 = assocIndexOf(data, key);
  if (index2 < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index2][1] = value;
  }
  return this;
}
function ListCache(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
var Map$1 = getNative(root$1, "Map");
var Map$2 = Map$1;
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$2 || ListCache)(),
    "string": new Hash()
  };
}
function isKeyable(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
function mapCacheDelete(key) {
  var result = getMapData(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
function mapCacheSet(key, value) {
  var data = getMapData(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
function MapCache(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
var FUNC_ERROR_TEXT$1 = "Expected a function";
function memoize(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}
memoize.Cache = MapCache;
var MAX_MEMOIZE_SIZE = 500;
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
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  });
  return result;
});
var stringToPath$1 = stringToPath;
function toString(value) {
  return value == null ? "" : baseToString(value);
}
function castPath(value, object) {
  if (isArray$2(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath$1(toString(value));
}
var INFINITY = 1 / 0;
function toKey(value) {
  if (typeof value == "string" || isSymbol(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
function baseGet(object, path) {
  path = castPath(path, object);
  var index2 = 0, length = path.length;
  while (object != null && index2 < length) {
    object = object[toKey(path[index2++])];
  }
  return index2 && index2 == length ? object : void 0;
}
function get(object, path, defaultValue) {
  var result = object == null ? void 0 : baseGet(object, path);
  return result === void 0 ? defaultValue : result;
}
function arrayPush(array, values) {
  var index2 = -1, length = values.length, offset2 = array.length;
  while (++index2 < length) {
    array[offset2 + index2] = values[index2];
  }
  return array;
}
function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}
function stackDelete(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
function stackGet(key) {
  return this.__data__.get(key);
}
function stackHas(key) {
  return this.__data__.has(key);
}
var LARGE_ARRAY_SIZE = 200;
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map$2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
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
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}
Stack.prototype.clear = stackClear;
Stack.prototype["delete"] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
function arrayFilter(array, predicate) {
  var index2 = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index2 < length) {
    var value = array[index2];
    if (predicate(value, index2, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
function stubArray() {
  return [];
}
var objectProto$2 = Object.prototype;
var propertyIsEnumerable = objectProto$2.propertyIsEnumerable;
var nativeGetSymbols = Object.getOwnPropertySymbols;
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
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$2(object) ? result : arrayPush(result, symbolsFunc(object));
}
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols$1);
}
var DataView = getNative(root$1, "DataView");
var DataView$1 = DataView;
var Promise$1 = getNative(root$1, "Promise");
var Promise$2 = Promise$1;
var Set$1 = getNative(root$1, "Set");
var Set$2 = Set$1;
var mapTag$1 = "[object Map]", objectTag$1 = "[object Object]", promiseTag = "[object Promise]", setTag$1 = "[object Set]", weakMapTag = "[object WeakMap]";
var dataViewTag$1 = "[object DataView]";
var dataViewCtorString = toSource(DataView$1), mapCtorString = toSource(Map$2), promiseCtorString = toSource(Promise$2), setCtorString = toSource(Set$2), weakMapCtorString = toSource(WeakMap$1);
var getTag = baseGetTag;
if (DataView$1 && getTag(new DataView$1(new ArrayBuffer(1))) != dataViewTag$1 || Map$2 && getTag(new Map$2()) != mapTag$1 || Promise$2 && getTag(Promise$2.resolve()) != promiseTag || Set$2 && getTag(new Set$2()) != setTag$1 || WeakMap$1 && getTag(new WeakMap$1()) != weakMapTag) {
  getTag = function(value) {
    var result = baseGetTag(value), Ctor = result == objectTag$1 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag$1;
        case mapCtorString:
          return mapTag$1;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag$1;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}
var getTag$1 = getTag;
var Uint8Array2 = root$1.Uint8Array;
var Uint8Array$1 = Uint8Array2;
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
function setCacheHas(value) {
  return this.__data__.has(value);
}
function SetCache(values) {
  var index2 = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();
  while (++index2 < length) {
    this.add(values[index2]);
  }
}
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
function arraySome(array, predicate) {
  var index2 = -1, length = array == null ? 0 : array.length;
  while (++index2 < length) {
    if (predicate(array[index2], index2, array)) {
      return true;
    }
  }
  return false;
}
function cacheHas(cache, key) {
  return cache.has(key);
}
var COMPARE_PARTIAL_FLAG$3 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, arrLength = array.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index2 = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$1 ? new SetCache() : void 0;
  stack.set(array, other);
  stack.set(other, array);
  while (++index2 < arrLength) {
    var arrValue = array[index2], othValue = other[index2];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index2, other, array, stack) : customizer(arrValue, othValue, index2, array, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!arraySome(other, function(othValue2, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack["delete"](array);
  stack["delete"](other);
  return result;
}
function mapToArray(map) {
  var index2 = -1, result = Array(map.size);
  map.forEach(function(value, key) {
    result[++index2] = [key, value];
  });
  return result;
}
function setToArray(set) {
  var index2 = -1, result = Array(set.size);
  set.forEach(function(value) {
    result[++index2] = value;
  });
  return result;
}
var COMPARE_PARTIAL_FLAG$2 = 1, COMPARE_UNORDERED_FLAG = 2;
var boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", mapTag = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]";
var symbolProto = Symbol$2 ? Symbol$2.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array$1(object), new Uint8Array$1(other))) {
        return false;
      }
      return true;
    case boolTag:
    case dateTag:
    case numberTag:
      return eq(+object, +other);
    case errorTag:
      return object.name == other.name && object.message == other.message;
    case regexpTag:
    case stringTag:
      return object == other + "";
    case mapTag:
      var convert = mapToArray;
    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2;
      convert || (convert = setToArray);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object);
      return result;
    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}
var COMPARE_PARTIAL_FLAG$1 = 1;
var objectProto$1 = Object.prototype;
var hasOwnProperty$2 = objectProto$1.hasOwnProperty;
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index2 = objLength;
  while (index2--) {
    var key = objProps[index2];
    if (!(isPartial ? key in other : hasOwnProperty$2.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index2 < objLength) {
    key = objProps[index2];
    var objValue = object[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack["delete"](object);
  stack["delete"](other);
  return result;
}
var COMPARE_PARTIAL_FLAG = 1;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
var objectProto = Object.prototype;
var hasOwnProperty$1 = objectProto.hasOwnProperty;
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray$2(object), othIsArr = isArray$2(other), objTag = objIsArr ? arrayTag : getTag$1(object), othTag = othIsArr ? arrayTag : getTag$1(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer$1(object)) {
    if (!isBuffer$1(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray$1(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty$1.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty$1.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
var now = function() {
  return root$1.Date.now();
};
var now$1 = now;
var FUNC_ERROR_TEXT = "Expected a function";
var nativeMax = Math.max, nativeMin = Math.min;
function debounce$1(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject$1(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now$1();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now$1());
  }
  function debounced() {
    var time = now$1(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
function fromPairs(pairs) {
  var index2 = -1, length = pairs == null ? 0 : pairs.length, result = {};
  while (++index2 < length) {
    var pair = pairs[index2];
    result[pair[0]] = pair[1];
  }
  return result;
}
function isEqual(value, other) {
  return baseIsEqual(value, other);
}
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
const once = (el, event, fn2) => {
  const listener = function(...args) {
    if (fn2) {
      fn2.apply(this, args);
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
function tryOnScopeDispose(fn2) {
  if (getCurrentScope()) {
    onScopeDispose(fn2);
    return true;
  }
  return false;
}
const isClient = typeof window !== "undefined";
const isBoolean = (val) => typeof val === "boolean";
const isNumber = (val) => typeof val === "number";
const isString$1 = (val) => typeof val === "string";
const noop = () => {
};
function unrefElement(elRef) {
  var _a2;
  const plain = unref(elRef);
  return (_a2 = plain == null ? void 0 : plain.$el) != null ? _a2 : plain;
}
const defaultWindow = isClient ? window : void 0;
isClient ? window.document : void 0;
isClient ? window.navigator : void 0;
isClient ? window.location : void 0;
function useEventListener(...args) {
  let target;
  let event;
  let listener;
  let options;
  if (isString$1(args[0])) {
    [event, listener, options] = args;
    target = defaultWindow;
  } else {
    [target, event, listener, options] = args;
  }
  if (!target)
    return noop;
  let cleanup = noop;
  const stopWatch = watch(() => unref(target), (el) => {
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
  const { window: window2 = defaultWindow, ignore } = options;
  if (!window2)
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
    useEventListener(window2, "click", listener, { passive: true, capture: true }),
    useEventListener(window2, "pointerdown", (e) => {
      const el = unrefElement(target);
      shouldListen.value = !!el && !e.composedPath().includes(el);
    }, { passive: true })
  ];
  const stop = () => cleanup.forEach((fn2) => fn2());
  return stop;
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {};
_global[globalKey];
function useCssVar(prop, target, { window: window2 = defaultWindow } = {}) {
  const variable = ref("");
  const elRef = computed(() => {
    var _a2;
    return unrefElement(target) || ((_a2 = window2 == null ? void 0 : window2.document) == null ? void 0 : _a2.documentElement);
  });
  watch([elRef, () => unref(prop)], ([el, prop2]) => {
    if (el && window2)
      variable.value = window2.getComputedStyle(el).getPropertyValue(prop2);
  }, { immediate: true });
  watch(variable, (val) => {
    var _a2;
    if ((_a2 = elRef.value) == null ? void 0 : _a2.style)
      elRef.value.style.setProperty(unref(prop), val);
  });
  return variable;
}
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
  const _a2 = options, { window: window2 = defaultWindow } = _a2, observerOptions = __objRest$2(_a2, ["window"]);
  let observer;
  const isSupported = window2 && "ResizeObserver" in window2;
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const stopWatch = watch(() => unrefElement(target), (el) => {
    cleanup();
    if (isSupported && window2 && el) {
      observer = new window2.ResizeObserver(callback);
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
var __defProp$3 = Object.defineProperty;
var __getOwnPropSymbols$3 = Object.getOwnPropertySymbols;
var __hasOwnProp$3 = Object.prototype.hasOwnProperty;
var __propIsEnum$3 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3.call(b, prop))
      __defNormalProp$3(a, prop, b[prop]);
  if (__getOwnPropSymbols$3)
    for (var prop of __getOwnPropSymbols$3(b)) {
      if (__propIsEnum$3.call(b, prop))
        __defNormalProp$3(a, prop, b[prop]);
    }
  return a;
};
const initialRect = {
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  height: 0,
  width: 0
};
__spreadValues$3({
  text: ""
}, initialRect);
const NOOP = () => {
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const isArray = Array.isArray;
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isObject = (val) => val !== null && typeof val === "object";
const isUndefined = (val) => val === void 0;
const isEmpty = (val) => !val && val !== 0 || isArray(val) && val.length === 0 || isObject(val) && !Object.keys(val).length;
class ElementPlusError extends Error {
  constructor(m) {
    super(m);
    this.name = "ElementPlusError";
  }
}
function throwError(scope, m) {
  throw new ElementPlusError(`[${scope}] ${m}`);
}
const hasClass = (el, cls) => {
  if (!el || !cls)
    return false;
  if (cls.includes(" "))
    throw new Error("className should not contain space.");
  return el.classList.contains(cls);
};
var _export_sfc$1 = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$F = defineComponent({
  name: "ArrowDown"
});
const _hoisted_1$n = {
  class: "icon",
  width: "200",
  height: "200",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$k = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M831.872 340.864L512 652.672 192.128 340.864a30.592 30.592 0 00-42.752 0 29.12 29.12 0 000 41.6L489.664 714.24a32 32 0 0044.672 0l340.288-331.712a29.12 29.12 0 000-41.728 30.592 30.592 0 00-42.752 0z"
}, null, -1);
const _hoisted_3$h = [
  _hoisted_2$k
];
function _sfc_render$C(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$n, _hoisted_3$h);
}
var arrowDown = /* @__PURE__ */ _export_sfc$1(_sfc_main$F, [["render", _sfc_render$C]]);
const _sfc_main$E = defineComponent({
  name: "ArrowLeft"
});
const _hoisted_1$m = {
  class: "icon",
  width: "200",
  height: "200",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$j = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M609.408 149.376L277.76 489.6a32 32 0 000 44.672l331.648 340.352a29.12 29.12 0 0041.728 0 30.592 30.592 0 000-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 000-42.688 29.12 29.12 0 00-41.728 0z"
}, null, -1);
const _hoisted_3$g = [
  _hoisted_2$j
];
function _sfc_render$B(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$m, _hoisted_3$g);
}
var arrowLeft = /* @__PURE__ */ _export_sfc$1(_sfc_main$E, [["render", _sfc_render$B]]);
const _sfc_main$D = defineComponent({
  name: "ArrowRight"
});
const _hoisted_1$l = {
  class: "icon",
  width: "200",
  height: "200",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$i = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M340.864 149.312a30.592 30.592 0 000 42.752L652.736 512 340.864 831.872a30.592 30.592 0 000 42.752 29.12 29.12 0 0041.728 0L714.24 534.336a32 32 0 000-44.672L382.592 149.376a29.12 29.12 0 00-41.728 0z"
}, null, -1);
const _hoisted_3$f = [
  _hoisted_2$i
];
function _sfc_render$A(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$l, _hoisted_3$f);
}
var arrowRight = /* @__PURE__ */ _export_sfc$1(_sfc_main$D, [["render", _sfc_render$A]]);
const _sfc_main$C = defineComponent({
  name: "ArrowUp"
});
const _hoisted_1$k = {
  class: "icon",
  width: "200",
  height: "200",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$h = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M488.832 344.32l-339.84 356.672a32 32 0 000 44.16l.384.384a29.44 29.44 0 0042.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0042.688 0l.384-.384a32 32 0 000-44.16L535.168 344.32a32 32 0 00-46.336 0z"
}, null, -1);
const _hoisted_3$e = [
  _hoisted_2$h
];
function _sfc_render$z(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$k, _hoisted_3$e);
}
var arrowUp = /* @__PURE__ */ _export_sfc$1(_sfc_main$C, [["render", _sfc_render$z]]);
const _sfc_main$B = defineComponent({
  name: "Calendar"
});
const _hoisted_1$j = {
  class: "icon",
  width: "200",
  height: "200",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$g = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M128 384v512h768V192H768v32a32 32 0 11-64 0v-32H320v32a32 32 0 01-64 0v-32H128v128h768v64H128zm192-256h384V96a32 32 0 1164 0v32h160a32 32 0 0132 32v768a32 32 0 01-32 32H96a32 32 0 01-32-32V160a32 32 0 0132-32h160V96a32 32 0 0164 0v32zm-32 384h64a32 32 0 010 64h-64a32 32 0 010-64zm0 192h64a32 32 0 110 64h-64a32 32 0 110-64zm192-192h64a32 32 0 010 64h-64a32 32 0 010-64zm0 192h64a32 32 0 110 64h-64a32 32 0 110-64zm192-192h64a32 32 0 110 64h-64a32 32 0 110-64zm0 192h64a32 32 0 110 64h-64a32 32 0 110-64z"
}, null, -1);
const _hoisted_3$d = [
  _hoisted_2$g
];
function _sfc_render$y(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$j, _hoisted_3$d);
}
var calendar = /* @__PURE__ */ _export_sfc$1(_sfc_main$B, [["render", _sfc_render$y]]);
const _sfc_main$A = defineComponent({
  name: "CircleCheck"
});
const _hoisted_1$i = {
  class: "icon",
  width: "200",
  height: "200",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$f = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 100-768 384 384 0 000 768zm0 64a448 448 0 110-896 448 448 0 010 896z"
}, null, -1);
const _hoisted_3$c = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M745.344 361.344a32 32 0 0145.312 45.312l-288 288a32 32 0 01-45.312 0l-160-160a32 32 0 1145.312-45.312L480 626.752l265.344-265.408z"
}, null, -1);
const _hoisted_4$6 = [
  _hoisted_2$f,
  _hoisted_3$c
];
function _sfc_render$x(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$i, _hoisted_4$6);
}
var circleCheck = /* @__PURE__ */ _export_sfc$1(_sfc_main$A, [["render", _sfc_render$x]]);
const _sfc_main$z = defineComponent({
  name: "CircleClose"
});
const _hoisted_1$h = {
  class: "icon",
  width: "200",
  height: "200",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$e = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M466.752 512l-90.496-90.496a32 32 0 0145.248-45.248L512 466.752l90.496-90.496a32 32 0 1145.248 45.248L557.248 512l90.496 90.496a32 32 0 11-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 01-45.248-45.248L466.752 512z"
}, null, -1);
const _hoisted_3$b = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 100-768 384 384 0 000 768zm0 64a448 448 0 110-896 448 448 0 010 896z"
}, null, -1);
const _hoisted_4$5 = [
  _hoisted_2$e,
  _hoisted_3$b
];
function _sfc_render$w(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$h, _hoisted_4$5);
}
var circleClose = /* @__PURE__ */ _export_sfc$1(_sfc_main$z, [["render", _sfc_render$w]]);
const _sfc_main$y = defineComponent({
  name: "Clock"
});
const _hoisted_1$g = {
  class: "icon",
  width: "200",
  height: "200",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$d = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 100-768 384 384 0 000 768zm0 64a448 448 0 110-896 448 448 0 010 896z"
}, null, -1);
const _hoisted_3$a = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M480 256a32 32 0 0132 32v256a32 32 0 01-64 0V288a32 32 0 0132-32z"
}, null, -1);
const _hoisted_4$4 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M480 512h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32z"
}, null, -1);
const _hoisted_5$4 = [
  _hoisted_2$d,
  _hoisted_3$a,
  _hoisted_4$4
];
function _sfc_render$v(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$g, _hoisted_5$4);
}
var clock = /* @__PURE__ */ _export_sfc$1(_sfc_main$y, [["render", _sfc_render$v]]);
const _sfc_main$x = defineComponent({
  name: "DArrowLeft"
});
const _hoisted_1$f = {
  class: "icon",
  width: "200",
  height: "200",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$c = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M529.408 149.376a29.12 29.12 0 0141.728 0 30.592 30.592 0 010 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 01-.512 43.264 29.12 29.12 0 01-41.216-.512L197.76 534.272a32 32 0 010-44.672l331.648-340.224zm256 0a29.12 29.12 0 0141.728 0 30.592 30.592 0 010 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 01-.512 43.264 29.12 29.12 0 01-41.216-.512L453.76 534.272a32 32 0 010-44.672l331.648-340.224z"
}, null, -1);
const _hoisted_3$9 = [
  _hoisted_2$c
];
function _sfc_render$u(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$f, _hoisted_3$9);
}
var dArrowLeft = /* @__PURE__ */ _export_sfc$1(_sfc_main$x, [["render", _sfc_render$u]]);
const _sfc_main$w = defineComponent({
  name: "DArrowRight"
});
const _hoisted_1$e = {
  class: "icon",
  width: "200",
  height: "200",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$b = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M452.864 149.312a29.12 29.12 0 0141.728.064L826.24 489.664a32 32 0 010 44.672L494.592 874.624a29.12 29.12 0 01-41.728 0 30.592 30.592 0 010-42.752L764.736 512 452.864 192a30.592 30.592 0 010-42.688zm-256 0a29.12 29.12 0 0141.728.064L570.24 489.664a32 32 0 010 44.672L238.592 874.624a29.12 29.12 0 01-41.728 0 30.592 30.592 0 010-42.752L508.736 512 196.864 192a30.592 30.592 0 010-42.688z"
}, null, -1);
const _hoisted_3$8 = [
  _hoisted_2$b
];
function _sfc_render$t(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$e, _hoisted_3$8);
}
var dArrowRight = /* @__PURE__ */ _export_sfc$1(_sfc_main$w, [["render", _sfc_render$t]]);
const _sfc_main$v = defineComponent({
  name: "Loading"
});
const _hoisted_1$d = {
  class: "icon",
  width: "200",
  height: "200",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$a = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 64a32 32 0 0132 32v192a32 32 0 01-64 0V96a32 32 0 0132-32zm0 640a32 32 0 0132 32v192a32 32 0 11-64 0V736a32 32 0 0132-32zm448-192a32 32 0 01-32 32H736a32 32 0 110-64h192a32 32 0 0132 32zm-640 0a32 32 0 01-32 32H96a32 32 0 010-64h192a32 32 0 0132 32zM195.2 195.2a32 32 0 0145.248 0L376.32 331.008a32 32 0 01-45.248 45.248L195.2 240.448a32 32 0 010-45.248zm452.544 452.544a32 32 0 0145.248 0L828.8 783.552a32 32 0 01-45.248 45.248L647.744 692.992a32 32 0 010-45.248zM828.8 195.264a32 32 0 010 45.184L692.992 376.32a32 32 0 01-45.248-45.248l135.808-135.808a32 32 0 0145.248 0zm-452.544 452.48a32 32 0 010 45.248L240.448 828.8a32 32 0 01-45.248-45.248l135.808-135.808a32 32 0 0145.248 0z"
}, null, -1);
const _hoisted_3$7 = [
  _hoisted_2$a
];
function _sfc_render$s(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$d, _hoisted_3$7);
}
var loading = /* @__PURE__ */ _export_sfc$1(_sfc_main$v, [["render", _sfc_render$s]]);
const _sfc_main$u = defineComponent({
  name: "View"
});
const _hoisted_1$c = {
  class: "icon",
  width: "200",
  height: "200",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$9 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 110 448 224 224 0 010-448zm0 64a160.192 160.192 0 00-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"
}, null, -1);
const _hoisted_3$6 = [
  _hoisted_2$9
];
function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$c, _hoisted_3$6);
}
var view = /* @__PURE__ */ _export_sfc$1(_sfc_main$u, [["render", _sfc_render$r]]);
const wrapperKey = Symbol();
const propKey = "__elPropsReservedKey";
function buildProp(option, key) {
  if (!isObject(option) || !!option[propKey])
    return option;
  const { values, required, default: defaultValue, type, validator } = option;
  const _validator = values || validator ? (val) => {
    let valid = false;
    let allowedValues = [];
    if (values) {
      allowedValues = Array.from(values);
      if (hasOwn(option, "default")) {
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
    type: isObject(type) && Object.getOwnPropertySymbols(type).includes(wrapperKey) ? type[wrapperKey] : type,
    required: !!required,
    validator: _validator,
    [propKey]: true
  };
  if (hasOwn(option, "default"))
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
const withInstall = (main2, extra) => {
  main2.install = (app) => {
    for (const comp of [main2, ...Object.values(extra != null ? extra : {})]) {
      app.component(comp.name, comp);
    }
  };
  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      main2[key] = comp;
    }
  }
  return main2;
};
const withNoopInstall = (component) => {
  component.install = NOOP;
  return component;
};
function addUnit(value, defaultUnit = "px") {
  if (!value)
    return "";
  if (isString(value)) {
    return value;
  } else if (isNumber(value)) {
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
const componentSizes = ["default", "small", "large"];
const isValidComponentSize = (val) => ["", ...componentSizes].includes(val);
const isValidDatePickType = (val) => [...datePickTypes].includes(val);
const castArray = (arr) => {
  if (!arr && arr !== 0)
    return [];
  return Array.isArray(arr) ? arr : [arr];
};
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
    var _a2;
    return fromPairs(Object.entries((_a2 = instance.proxy) == null ? void 0 : _a2.$attrs).filter(([key]) => !allExcludeKeys.includes(key) && !(excludeListeners && LISTENER_PREFIX.test(key))));
  });
};
const elFormKey = Symbol("elForm");
const elFormItemKey = Symbol("elFormItem");
const buttonGroupContextKey = Symbol("buttonGroupContextKey");
const configProviderContextKey = Symbol();
const scrollbarContextKey = Symbol("scrollbarContextKey");
const useProp = (name) => {
  const vm = getCurrentInstance();
  return computed(() => {
    var _a2, _b2;
    return (_b2 = (_a2 = vm.proxy) == null ? void 0 : _a2.$props[name]) != null ? _b2 : void 0;
  });
};
const globalConfig = ref();
function useGlobalConfig(key, defaultValue = void 0) {
  const config = getCurrentInstance() ? inject(configProviderContextKey, globalConfig) : globalConfig;
  if (key) {
    return computed(() => {
      var _a2, _b2;
      return (_b2 = (_a2 = config.value) == null ? void 0 : _a2[key]) != null ? _b2 : defaultValue;
    });
  } else {
    return config;
  }
}
const useSizeProp = buildProp({
  type: String,
  values: componentSizes,
  required: false
});
const useSize = (fallback, ignore = {}) => {
  const emptyRef = ref(void 0);
  const size = ignore.prop ? emptyRef : useProp("size");
  const globalConfig2 = ignore.global ? emptyRef : useGlobalConfig("size");
  const form = ignore.form ? { size: void 0 } : inject(elFormKey, void 0);
  const formItem = ignore.formItem ? { size: void 0 } : inject(elFormItemKey, void 0);
  return computed(() => size.value || unref(fallback) || (formItem == null ? void 0 : formItem.size) || (form == null ? void 0 : form.size) || globalConfig2.value || "default");
};
const useDisabled = (fallback) => {
  const disabled = useProp("disabled");
  const form = inject(elFormKey, void 0);
  return computed(() => disabled.value || unref(fallback) || (form == null ? void 0 : form.disabled) || false);
};
const useFormItem = () => {
  const form = inject(elFormKey, void 0);
  const formItem = inject(elFormItemKey, void 0);
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
  var _a2;
  return `${(_a2 = option == null ? void 0 : option[key]) != null ? _a2 : `{${key}}`}`;
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
const createModelToggleComposable = (name) => {
  const useModelToggleProps2 = {
    [name]: buildProp({
      type: definePropType(Boolean),
      default: null
    }),
    [`onUpdate:${name}`]: buildProp({
      type: definePropType(Function)
    })
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
    const hide2 = () => {
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
      if (!isBoolean(val))
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
        hide2();
      } else {
        show();
      }
    };
    watch(() => props[name], onChange);
    if (shouldHideWhenRouteChanges && instance.appContext.config.globalProperties.$route !== void 0) {
      watch(() => __spreadValues({}, instance.proxy.$route), () => {
        if (shouldHideWhenRouteChanges.value && indicator.value) {
          hide2();
        }
      });
    }
    onMounted(() => {
      onChange(props[name]);
    });
    return {
      hide: hide2,
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
createModelToggleComposable("modelValue");
function useTimeout() {
  let timeoutHandle;
  const registerTimeout = (fn2, delay) => {
    cancelTimeout();
    timeoutHandle = window.setTimeout(fn2, delay);
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
const usePopperContainer = () => {
  onBeforeMount(() => {
    if (!isClient)
      return;
    if (!cachedContainer) {
      const container = document.createElement("div");
      container.id = POPPER_CONTAINER_ID;
      document.body.appendChild(container);
      cachedContainer = container;
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
  const globalConfig2 = useGlobalConfig("namespace");
  const namespace = computed(() => globalConfig2.value || defaultNamespace);
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
var _export_sfc = (sfc, props) => {
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
const __default__$1 = {
  name: "ElIcon",
  inheritAttrs: false
};
const _sfc_main$t = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__$1), {
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
}));
const ElIcon = withInstall(_sfc_main$t);
const nodeList = /* @__PURE__ */ new Map();
let startClick;
if (isClient) {
  on(document, "mousedown", (e) => startClick = e);
  on(document, "mouseup", (e) => {
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
  } else if (binding.arg instanceof HTMLElement) {
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
  const paddingSize = parseFloat(style.getPropertyValue("padding-bottom")) + parseFloat(style.getPropertyValue("padding-top"));
  const borderSize = parseFloat(style.getPropertyValue("border-bottom-width")) + parseFloat(style.getPropertyValue("border-top-width"));
  const contextStyle = CONTEXT_STYLE.map((name) => `${name}:${style.getPropertyValue(name)}`).join(";");
  return { contextStyle, paddingSize, borderSize, boxSizing };
}
function calcTextareaHeight(targetElement, minRows = 1, maxRows) {
  var _a2;
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
  if (isNumber(minRows)) {
    let minHeight = singleRowHeight * minRows;
    if (boxSizing === "border-box") {
      minHeight = minHeight + paddingSize + borderSize;
    }
    height = Math.max(minHeight, height);
    result.minHeight = `${minHeight}px`;
  }
  if (isNumber(maxRows)) {
    let maxHeight = singleRowHeight * maxRows;
    if (boxSizing === "border-box") {
      maxHeight = maxHeight + paddingSize + borderSize;
    }
    height = Math.min(maxHeight, height);
  }
  result.height = `${height}px`;
  (_a2 = hiddenTextarea.parentNode) == null ? void 0 : _a2.removeChild(hiddenTextarea);
  hiddenTextarea = void 0;
  return result;
}
const inputProps = buildProps({
  size: useSizeProp,
  disabled: Boolean,
  modelValue: {
    type: definePropType(void 0),
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
  [UPDATE_MODEL_EVENT]: (value) => isString(value),
  input: (value) => isString(value),
  change: (value) => isString(value),
  focus: (evt) => evt instanceof FocusEvent,
  blur: (evt) => evt instanceof FocusEvent,
  clear: () => true,
  mouseleave: (evt) => evt instanceof MouseEvent,
  mouseenter: (evt) => evt instanceof MouseEvent,
  keydown: (evt) => evt instanceof KeyboardEvent,
  compositionstart: (evt) => evt instanceof CompositionEvent,
  compositionupdate: (evt) => evt instanceof CompositionEvent,
  compositionend: (evt) => evt instanceof CompositionEvent
};
const PENDANT_MAP = {
  suffix: "append",
  prefix: "prepend"
};
const _sfc_main$s = defineComponent({
  name: "ElInput",
  components: { ElIcon, CircleClose: circleClose, IconView: view },
  inheritAttrs: false,
  props: inputProps,
  emits: inputEmits,
  setup(props, { slots, emit, attrs: rawAttrs }) {
    const instance = getCurrentInstance();
    const attrs = useAttrs();
    const { form, formItem } = useFormItem();
    const inputSize = useSize();
    const inputDisabled = useDisabled();
    const nsInput = useNamespace("input");
    const nsTextarea = useNamespace("textarea");
    const input = ref();
    const textarea = ref();
    const focused = ref(false);
    const hovering = ref(false);
    const isComposing = ref(false);
    const passwordVisible = ref(false);
    const _textareaCalcStyle = shallowRef(props.inputStyle);
    const inputOrTextarea = computed(() => input.value || textarea.value);
    const needStatusIcon = computed(() => {
      var _a2;
      return (_a2 = form == null ? void 0 : form.statusIcon) != null ? _a2 : false;
    });
    const validateState = computed(() => (formItem == null ? void 0 : formItem.validateState) || "");
    const validateIcon = computed(() => ValidateComponentsMap[validateState.value]);
    const containerStyle = computed(() => rawAttrs.style);
    const computedTextareaStyle = computed(() => [
      props.inputStyle,
      _textareaCalcStyle.value,
      { resize: props.resize }
    ]);
    const nativeInputValue = computed(() => props.modelValue === null || props.modelValue === void 0 ? "" : String(props.modelValue));
    const showClear = computed(() => props.clearable && !inputDisabled.value && !props.readonly && !!nativeInputValue.value && (focused.value || hovering.value));
    const showPwdVisible = computed(() => props.showPassword && !inputDisabled.value && !props.readonly && (!!nativeInputValue.value || focused.value));
    const isWordLimitVisible = computed(() => props.showWordLimit && !!attrs.value.maxlength && (props.type === "text" || props.type === "textarea") && !inputDisabled.value && !props.readonly && !props.showPassword);
    const textLength = computed(() => Array.from(nativeInputValue.value).length);
    const inputExceed = computed(() => !!isWordLimitVisible.value && textLength.value > Number(attrs.value.maxlength));
    const resizeTextarea = () => {
      const { type, autosize } = props;
      if (!isClient || type !== "textarea")
        return;
      if (autosize) {
        const minRows = isObject(autosize) ? autosize.minRows : void 0;
        const maxRows = isObject(autosize) ? autosize.maxRows : void 0;
        _textareaCalcStyle.value = __spreadValues({}, calcTextareaHeight(textarea.value, minRows, maxRows));
      } else {
        _textareaCalcStyle.value = {
          minHeight: calcTextareaHeight(textarea.value).minHeight
        };
      }
    };
    const setNativeInputValue = () => {
      const input2 = inputOrTextarea.value;
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
    const handleInput = (event) => {
      const { value } = event.target;
      if (isComposing.value)
        return;
      if (value === nativeInputValue.value)
        return;
      emit(UPDATE_MODEL_EVENT, value);
      emit("input", value);
      nextTick(setNativeInputValue);
    };
    const handleChange = (event) => {
      emit("change", event.target.value);
    };
    const focus = () => {
      nextTick(() => {
        var _a2;
        (_a2 = inputOrTextarea.value) == null ? void 0 : _a2.focus();
      });
    };
    const blur = () => {
      var _a2;
      (_a2 = inputOrTextarea.value) == null ? void 0 : _a2.blur();
    };
    const handleFocus = (event) => {
      focused.value = true;
      emit("focus", event);
    };
    const handleBlur = (event) => {
      var _a2;
      focused.value = false;
      emit("blur", event);
      if (props.validateEvent) {
        (_a2 = formItem == null ? void 0 : formItem.validate) == null ? void 0 : _a2.call(formItem, "blur");
      }
    };
    const select = () => {
      var _a2;
      (_a2 = inputOrTextarea.value) == null ? void 0 : _a2.select();
    };
    const handleCompositionStart = (event) => {
      emit("compositionstart", event);
      isComposing.value = true;
    };
    const handleCompositionUpdate = (event) => {
      var _a2;
      emit("compositionupdate", event);
      const text = (_a2 = event.target) == null ? void 0 : _a2.value;
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
    const clear = () => {
      emit(UPDATE_MODEL_EVENT, "");
      emit("change", "");
      emit("clear");
      emit("input", "");
    };
    const handlePasswordVisible = () => {
      passwordVisible.value = !passwordVisible.value;
      focus();
    };
    const suffixVisible = computed(() => !!slots.suffix || !!props.suffixIcon || showClear.value || props.showPassword || isWordLimitVisible.value || !!validateState.value && needStatusIcon.value);
    watch(() => props.modelValue, () => {
      var _a2;
      nextTick(resizeTextarea);
      if (props.validateEvent) {
        (_a2 = formItem == null ? void 0 : formItem.validate) == null ? void 0 : _a2.call(formItem, "change");
      }
    });
    watch(nativeInputValue, () => setNativeInputValue());
    watch(() => props.type, () => {
      nextTick(() => {
        setNativeInputValue();
        resizeTextarea();
        updateIconOffset();
      });
    });
    onMounted(() => {
      setNativeInputValue();
      updateIconOffset();
      nextTick(resizeTextarea);
    });
    onUpdated(() => {
      nextTick(updateIconOffset);
    });
    const onMouseLeave = (evt) => {
      hovering.value = false;
      emit("mouseleave", evt);
    };
    const onMouseEnter = (evt) => {
      hovering.value = true;
      emit("mouseenter", evt);
    };
    const handleKeydown = (evt) => {
      emit("keydown", evt);
    };
    return {
      input,
      textarea,
      attrs,
      inputSize,
      validateState,
      validateIcon,
      containerStyle,
      computedTextareaStyle,
      inputDisabled,
      showClear,
      showPwdVisible,
      isWordLimitVisible,
      textLength,
      hovering,
      inputExceed,
      passwordVisible,
      inputOrTextarea,
      suffixVisible,
      needStatusIcon,
      resizeTextarea,
      handleInput,
      handleChange,
      handleFocus,
      handleBlur,
      handleCompositionStart,
      handleCompositionUpdate,
      handleCompositionEnd,
      handlePasswordVisible,
      clear,
      select,
      focus,
      blur,
      onMouseLeave,
      onMouseEnter,
      handleKeydown,
      nsInput,
      nsTextarea
    };
  }
});
const _hoisted_1$b = ["type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder"];
const _hoisted_2$8 = ["tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder"];
function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_icon = resolveComponent("el-icon");
  const _component_circle_close = resolveComponent("circle-close");
  const _component_icon_view = resolveComponent("icon-view");
  return withDirectives((openBlock(), createElementBlock("div", {
    class: normalizeClass([
      _ctx.type === "textarea" ? _ctx.nsTextarea.b() : _ctx.nsInput.b(),
      _ctx.nsInput.m(_ctx.inputSize),
      _ctx.nsInput.is("disabled", _ctx.inputDisabled),
      _ctx.nsInput.is("exceed", _ctx.inputExceed),
      {
        [_ctx.nsInput.b("group")]: _ctx.$slots.prepend || _ctx.$slots.append,
        [_ctx.nsInput.bm("group", "append")]: _ctx.$slots.append,
        [_ctx.nsInput.bm("group", "prepend")]: _ctx.$slots.prepend,
        [_ctx.nsInput.m("prefix")]: _ctx.$slots.prefix || _ctx.prefixIcon,
        [_ctx.nsInput.m("suffix")]: _ctx.$slots.suffix || _ctx.suffixIcon || _ctx.clearable || _ctx.showPassword,
        [_ctx.nsInput.m("suffix--password-clear")]: _ctx.clearable && _ctx.showPassword
      },
      _ctx.$attrs.class
    ]),
    style: normalizeStyle(_ctx.containerStyle),
    onMouseenter: _cache[17] || (_cache[17] = (...args) => _ctx.onMouseEnter && _ctx.onMouseEnter(...args)),
    onMouseleave: _cache[18] || (_cache[18] = (...args) => _ctx.onMouseLeave && _ctx.onMouseLeave(...args))
  }, [
    createCommentVNode(" input "),
    _ctx.type !== "textarea" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
      createCommentVNode(" prepend slot "),
      _ctx.$slots.prepend ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(_ctx.nsInput.be("group", "prepend"))
      }, [
        renderSlot(_ctx.$slots, "prepend")
      ], 2)) : createCommentVNode("v-if", true),
      createElementVNode("input", mergeProps({
        ref: "input",
        class: _ctx.nsInput.e("inner")
      }, _ctx.attrs, {
        type: _ctx.showPassword ? _ctx.passwordVisible ? "text" : "password" : _ctx.type,
        disabled: _ctx.inputDisabled,
        readonly: _ctx.readonly,
        autocomplete: _ctx.autocomplete,
        tabindex: _ctx.tabindex,
        "aria-label": _ctx.label,
        placeholder: _ctx.placeholder,
        style: _ctx.inputStyle,
        onCompositionstart: _cache[0] || (_cache[0] = (...args) => _ctx.handleCompositionStart && _ctx.handleCompositionStart(...args)),
        onCompositionupdate: _cache[1] || (_cache[1] = (...args) => _ctx.handleCompositionUpdate && _ctx.handleCompositionUpdate(...args)),
        onCompositionend: _cache[2] || (_cache[2] = (...args) => _ctx.handleCompositionEnd && _ctx.handleCompositionEnd(...args)),
        onInput: _cache[3] || (_cache[3] = (...args) => _ctx.handleInput && _ctx.handleInput(...args)),
        onFocus: _cache[4] || (_cache[4] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args)),
        onBlur: _cache[5] || (_cache[5] = (...args) => _ctx.handleBlur && _ctx.handleBlur(...args)),
        onChange: _cache[6] || (_cache[6] = (...args) => _ctx.handleChange && _ctx.handleChange(...args)),
        onKeydown: _cache[7] || (_cache[7] = (...args) => _ctx.handleKeydown && _ctx.handleKeydown(...args))
      }), null, 16, _hoisted_1$b),
      createCommentVNode(" prefix slot "),
      _ctx.$slots.prefix || _ctx.prefixIcon ? (openBlock(), createElementBlock("span", {
        key: 1,
        class: normalizeClass(_ctx.nsInput.e("prefix"))
      }, [
        createElementVNode("span", {
          class: normalizeClass(_ctx.nsInput.e("prefix-inner"))
        }, [
          renderSlot(_ctx.$slots, "prefix"),
          _ctx.prefixIcon ? (openBlock(), createBlock(_component_el_icon, {
            key: 0,
            class: normalizeClass(_ctx.nsInput.e("icon"))
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(_ctx.prefixIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : createCommentVNode("v-if", true)
        ], 2)
      ], 2)) : createCommentVNode("v-if", true),
      createCommentVNode(" suffix slot "),
      _ctx.suffixVisible ? (openBlock(), createElementBlock("span", {
        key: 2,
        class: normalizeClass(_ctx.nsInput.e("suffix"))
      }, [
        createElementVNode("span", {
          class: normalizeClass(_ctx.nsInput.e("suffix-inner"))
        }, [
          !_ctx.showClear || !_ctx.showPwdVisible || !_ctx.isWordLimitVisible ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            renderSlot(_ctx.$slots, "suffix"),
            _ctx.suffixIcon ? (openBlock(), createBlock(_component_el_icon, {
              key: 0,
              class: normalizeClass(_ctx.nsInput.e("icon"))
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(_ctx.suffixIcon)))
              ]),
              _: 1
            }, 8, ["class"])) : createCommentVNode("v-if", true)
          ], 64)) : createCommentVNode("v-if", true),
          _ctx.showClear ? (openBlock(), createBlock(_component_el_icon, {
            key: 1,
            class: normalizeClass([_ctx.nsInput.e("icon"), _ctx.nsInput.e("clear")]),
            onMousedown: _cache[8] || (_cache[8] = withModifiers(() => {
            }, ["prevent"])),
            onClick: _ctx.clear
          }, {
            default: withCtx(() => [
              createVNode(_component_circle_close)
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true),
          _ctx.showPwdVisible ? (openBlock(), createBlock(_component_el_icon, {
            key: 2,
            class: normalizeClass([_ctx.nsInput.e("icon"), _ctx.nsInput.e("clear")]),
            onClick: _ctx.handlePasswordVisible
          }, {
            default: withCtx(() => [
              createVNode(_component_icon_view)
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true),
          _ctx.isWordLimitVisible ? (openBlock(), createElementBlock("span", {
            key: 3,
            class: normalizeClass(_ctx.nsInput.e("count"))
          }, [
            createElementVNode("span", {
              class: normalizeClass(_ctx.nsInput.e("count-inner"))
            }, toDisplayString(_ctx.textLength) + " / " + toDisplayString(_ctx.attrs.maxlength), 3)
          ], 2)) : createCommentVNode("v-if", true)
        ], 2),
        _ctx.validateState && _ctx.validateIcon && _ctx.needStatusIcon ? (openBlock(), createBlock(_component_el_icon, {
          key: 0,
          class: normalizeClass([_ctx.nsInput.e("icon"), _ctx.nsInput.e("validateIcon")])
        }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.validateIcon)))
          ]),
          _: 1
        }, 8, ["class"])) : createCommentVNode("v-if", true)
      ], 2)) : createCommentVNode("v-if", true),
      createCommentVNode(" append slot "),
      _ctx.$slots.append ? (openBlock(), createElementBlock("div", {
        key: 3,
        class: normalizeClass(_ctx.nsInput.be("group", "append"))
      }, [
        renderSlot(_ctx.$slots, "append")
      ], 2)) : createCommentVNode("v-if", true)
    ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
      createCommentVNode(" textarea "),
      createElementVNode("textarea", mergeProps({
        ref: "textarea",
        class: _ctx.nsTextarea.e("inner")
      }, _ctx.attrs, {
        tabindex: _ctx.tabindex,
        disabled: _ctx.inputDisabled,
        readonly: _ctx.readonly,
        autocomplete: _ctx.autocomplete,
        style: _ctx.computedTextareaStyle,
        "aria-label": _ctx.label,
        placeholder: _ctx.placeholder,
        onCompositionstart: _cache[9] || (_cache[9] = (...args) => _ctx.handleCompositionStart && _ctx.handleCompositionStart(...args)),
        onCompositionupdate: _cache[10] || (_cache[10] = (...args) => _ctx.handleCompositionUpdate && _ctx.handleCompositionUpdate(...args)),
        onCompositionend: _cache[11] || (_cache[11] = (...args) => _ctx.handleCompositionEnd && _ctx.handleCompositionEnd(...args)),
        onInput: _cache[12] || (_cache[12] = (...args) => _ctx.handleInput && _ctx.handleInput(...args)),
        onFocus: _cache[13] || (_cache[13] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args)),
        onBlur: _cache[14] || (_cache[14] = (...args) => _ctx.handleBlur && _ctx.handleBlur(...args)),
        onChange: _cache[15] || (_cache[15] = (...args) => _ctx.handleChange && _ctx.handleChange(...args)),
        onKeydown: _cache[16] || (_cache[16] = (...args) => _ctx.handleKeydown && _ctx.handleKeydown(...args))
      }), null, 16, _hoisted_2$8),
      _ctx.isWordLimitVisible ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass(_ctx.nsInput.e("count"))
      }, toDisplayString(_ctx.textLength) + " / " + toDisplayString(_ctx.attrs.maxlength), 3)) : createCommentVNode("v-if", true)
    ], 64))
  ], 38)), [
    [vShow, _ctx.type !== "hidden"]
  ]);
}
var Input = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", _sfc_render$q]]);
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
const COMPONENT_NAME = "Thumb";
const _sfc_main$r = defineComponent({
  name: COMPONENT_NAME,
  props: thumbProps,
  setup(props) {
    const scrollbar = inject(scrollbarContextKey);
    const ns = useNamespace("scrollbar");
    if (!scrollbar)
      throwError(COMPONENT_NAME, "can not inject scrollbar context");
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
      var _a2;
      e.stopPropagation();
      if (e.ctrlKey || [1, 2].includes(e.button))
        return;
      (_a2 = window.getSelection()) == null ? void 0 : _a2.removeAllRanges();
      startDrag(e);
      const el = e.currentTarget;
      if (!el)
        return;
      thumbState.value[bar.value.axis] = el[bar.value.offset] - (e[bar.value.client] - el.getBoundingClientRect()[bar.value.direction]);
    };
    const clickTrackHandler = (e) => {
      if (!thumb.value || !instance.value || !scrollbar.wrapElement)
        return;
      const offset2 = Math.abs(e.target.getBoundingClientRect()[bar.value.direction] - e[bar.value.client]);
      const thumbHalf = thumb.value[bar.value.offset] / 2;
      const thumbPositionPercentage = (offset2 - thumbHalf) * 100 * offsetRatio.value / instance.value[bar.value.offset];
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
      const offset2 = (instance.value.getBoundingClientRect()[bar.value.direction] - e[bar.value.client]) * -1;
      const thumbClickPosition = thumb.value[bar.value.offset] - prevPage;
      const thumbPositionPercentage = (offset2 - thumbClickPosition) * 100 * offsetRatio.value / instance.value[bar.value.offset];
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
function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
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
var Thumb = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$p]]);
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
const _sfc_main$q = defineComponent({
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
function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
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
var Bar = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$o]]);
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
    type: [String, Array],
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
  }) => isNumber(scrollTop) && isNumber(scrollLeft)
};
const _sfc_main$p = defineComponent({
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
      var _a2;
      if (wrap$.value) {
        (_a2 = barRef.value) == null ? void 0 : _a2.handleScroll(wrap$.value);
        emit("scroll", {
          scrollTop: wrap$.value.scrollTop,
          scrollLeft: wrap$.value.scrollLeft
        });
      }
    };
    const setScrollTop = (value) => {
      if (!isNumber(value)) {
        return;
      }
      wrap$.value.scrollTop = value;
    };
    const setScrollLeft = (value) => {
      if (!isNumber(value)) {
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
          var _a2;
          update();
          if (wrap$.value) {
            (_a2 = barRef.value) == null ? void 0 : _a2.handleScroll(wrap$.value);
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
      setScrollTop,
      setScrollLeft
    };
  }
});
function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
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
var Scrollbar = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$n]]);
const ElScrollbar = withInstall(Scrollbar);
const POPPER_INJECTION_KEY = Symbol("elPopper");
const POPPER_CONTENT_INJECTION_KEY = Symbol("elPopperContent");
const _sfc_main$o = defineComponent({
  name: "ElPopperProvider",
  inheritAttrs: false,
  setup() {
    const popperProvides = {
      triggerRef: ref(null),
      popperInstanceRef: ref(null),
      contentRef: ref(null)
    };
    provide(POPPER_INJECTION_KEY, popperProvides);
    return popperProvides;
  }
});
function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
  return renderSlot(_ctx.$slots, "default");
}
var Popper = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$m]]);
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles$1 = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect: effect$2,
  requires: ["computeStyles"]
};
function getBasePlacement(placement) {
  return placement.split("-")[0];
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
    var offsetWidth = element.offsetWidth;
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
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
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
    width,
    height
  };
}
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || getDocumentElement(element);
}
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1;
  var isIE = navigator.userAgent.indexOf("Trident") !== -1;
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}
function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min2, value, max2) {
  var v = within(min2, value, max2);
  return v > max2 ? max2 : v;
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
function expandToHashMap(value, keys2) {
  return keys2.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect$1(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
var arrow$1 = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect$1,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function getVariation(placement) {
  return placement.split("-")[1];
}
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref) {
  var x = _ref.x, y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles$1 = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};
var passive = {
  passive: true
};
function effect(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect,
  data: {}
};
var hash$1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash$1[matched];
  });
}
var hash = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash[matched];
  });
}
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element),
    y
  };
}
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}
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
  return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
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
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
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
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
    }
  }
  return offsets;
}
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
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
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
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
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
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
      if (_ret === "break")
        break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip$1 = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
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
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide$1 = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
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
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
}
var offset$1 = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets$1 = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
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
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min$1 = offset2 + overflow[mainSide];
    var max$1 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset2, tether ? max(max$1, tetherMax) : max$1);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
var preventOverflow$1 = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
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
}
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
    if (getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) {
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
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper2(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index2 = 0; index2 < state.orderedModifiers.length; index2++) {
          if (state.reset === true) {
            state.reset = false;
            index2 = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index2], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref3) {
        var name = _ref3.name, _ref3$options = _ref3.options, options2 = _ref3$options === void 0 ? {} : _ref3$options, effect2 = _ref3.effect;
        if (typeof effect2 === "function") {
          var cleanupFn = effect2({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /* @__PURE__ */ popperGenerator({
  defaultModifiers
});
const usePopperArrowProps = buildProps({
  arrowOffset: {
    type: Number,
    default: 5
  }
});
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
    values: ["fixed", "absolute"],
    default: "absolute"
  }
});
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
const usePopperContentProps = buildProps(__spreadProps(__spreadValues({}, usePopperCoreConfigProps), {
  style: { type: definePropType([String, Array, Object]) },
  className: { type: definePropType([String, Array, Object]) },
  effect: {
    type: String,
    default: "dark"
  },
  enterable: {
    type: Boolean,
    default: true
  },
  pure: {
    type: Boolean
  },
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
}));
const usePopperTriggerProps = buildProps({
  virtualRef: {
    type: definePropType(Object)
  },
  virtualTriggering: {
    type: Boolean
  }
});
const _sfc_main$n = defineComponent({
  name: "ElPopperArrow",
  props: usePopperArrowProps,
  setup(props) {
    const ns = useNamespace("popper");
    const arrowRef = ref(null);
    const popperContentInjection = inject(POPPER_CONTENT_INJECTION_KEY, void 0);
    watch(() => props.arrowOffset, (val) => {
      popperContentInjection.arrowOffset.value = val;
    });
    onMounted(() => {
      popperContentInjection.arrowRef.value = unref(arrowRef);
    });
    onBeforeUnmount(() => {
      popperContentInjection.arrowRef.value = null;
    });
    return {
      ns,
      arrowRef
    };
  }
});
function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", {
    ref: "arrowRef",
    class: normalizeClass(_ctx.ns.e("arrow")),
    "data-popper-arrow": ""
  }, null, 2);
}
var ElPopperArrow = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$l]]);
const NAME = "ElOnlyChild";
const OnlyChild = defineComponent({
  name: NAME,
  setup(_, { slots, attrs }) {
    var _a2;
    const forwardRefInjection = inject(FORWARD_REF_INJECTION_KEY, void 0);
    const forwardRefDirective = useForwardRefDirective((_a2 = forwardRefInjection.setForwardRef) != null ? _a2 : NOOP);
    return () => {
      var _a22;
      const defaultSlot = (_a22 = slots.default) == null ? void 0 : _a22.call(slots, attrs);
      if (!defaultSlot)
        return null;
      if (defaultSlot.length > 1) {
        return null;
      }
      const firstLegitNode = findFirstLegitChild(defaultSlot);
      if (!firstLegitNode) {
        return null;
      }
      return withDirectives(cloneVNode(firstLegitNode, attrs), [
        [forwardRefDirective]
      ]);
    };
  }
});
function findFirstLegitChild(node) {
  if (!node)
    return null;
  const children = node;
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (isObject(child)) {
      switch (child.type) {
        case Comment:
          continue;
        case Text:
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
  return h("span", { class: "el-only-child__content" }, [s]);
}
const buildPopperOptions = (props, arrowProps) => {
  const { placement, strategy, popperOptions } = props;
  const options = __spreadProps(__spreadValues({
    placement,
    strategy
  }, popperOptions), {
    modifiers: genModifiers(props)
  });
  attachArrow(options, arrowProps);
  deriveExtraModifiers(options, popperOptions == null ? void 0 : popperOptions.modifiers);
  return options;
};
const unwrapMeasurableEl = ($el) => {
  let el = null;
  if (!$el)
    return null;
  if ("getBoundingClientRect" in $el || $el instanceof HTMLElement) {
    el = $el;
  } else {
    el = $el.$el;
  }
  return el;
};
function genModifiers(options) {
  const { offset: offset2, gpuAcceleration, fallbackPlacements } = options;
  return [
    {
      name: "offset",
      options: {
        offset: [0, offset2 != null ? offset2 : 12]
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
const _sfc_main$m = defineComponent({
  name: "ElPopperTrigger",
  components: { ElOnlyChild: OnlyChild },
  inheritAttrs: false,
  props: __spreadProps(__spreadValues({}, usePopperTriggerProps), {
    onMouseenter: Function,
    onMouseleave: Function,
    onClick: Function,
    onKeydown: Function,
    onFocus: Function,
    onBlur: Function,
    onContextmenu: Function,
    id: String,
    open: Boolean
  }),
  setup(props) {
    const { triggerRef } = inject(POPPER_INJECTION_KEY, void 0);
    useForwardRef(triggerRef);
    watch(() => props.virtualRef, (val) => {
      if (val) {
        triggerRef.value = unwrapMeasurableEl(val);
      }
    }, {
      immediate: true
    });
    watch(() => triggerRef.value, (el, prevEl) => {
      if (el && el instanceof HTMLElement) {
        [
          "onMouseenter",
          "onMouseleave",
          "onClick",
          "onKeydown",
          "onFocus",
          "onBlur",
          "onContextmenu"
        ].forEach((eventName) => {
          const handler = props[eventName];
          if (handler) {
            el.addEventListener(eventName.slice(2).toLowerCase(), handler);
            prevEl == null ? void 0 : prevEl.removeEventListener(eventName.slice(2).toLowerCase(), handler);
          }
        });
      }
    }, {
      immediate: true
    });
    return {
      triggerRef
    };
  }
});
function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_only_child = resolveComponent("el-only-child");
  return !_ctx.virtualTriggering ? (openBlock(), createBlock(_component_el_only_child, mergeProps({ key: 0 }, _ctx.$attrs, {
    "aria-describedby": _ctx.open ? _ctx.id : void 0
  }), {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 16, ["aria-describedby"])) : createCommentVNode("v-if", true);
}
var ElPopperTrigger = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$k]]);
const _sfc_main$l = defineComponent({
  name: "ElPopperContent",
  props: usePopperContentProps,
  emits: ["mouseenter", "mouseleave"],
  setup(props) {
    const { triggerRef, popperInstanceRef, contentRef } = inject(POPPER_INJECTION_KEY, void 0);
    const { nextZIndex } = useZIndex();
    const ns = useNamespace("popper");
    const popperContentRef = ref(null);
    const arrowRef = ref(null);
    const arrowOffset = ref();
    provide(POPPER_CONTENT_INJECTION_KEY, {
      arrowRef,
      arrowOffset
    });
    const contentZIndex = ref(props.zIndex || nextZIndex());
    const contentStyle = computed(() => [{ zIndex: unref(contentZIndex) }, props.popperStyle]);
    const contentClass = computed(() => [
      ns.b(),
      ns.is("pure", props.pure),
      ns.is(props.effect),
      props.popperClass
    ]);
    const createPopperInstance = ({
      referenceEl,
      popperContentEl,
      arrowEl
    }) => {
      const options = buildPopperOptions(props, {
        arrowEl,
        arrowOffset: unref(arrowOffset)
      });
      return createPopper(referenceEl, popperContentEl, options);
    };
    const updatePopper = () => {
      var _a2;
      (_a2 = unref(popperInstanceRef)) == null ? void 0 : _a2.update();
      contentZIndex.value = props.zIndex || nextZIndex();
    };
    onMounted(() => {
      let updateHandle;
      watch(() => unwrapMeasurableEl(props.referenceEl) || unref(triggerRef), (val) => {
        var _a2;
        updateHandle == null ? void 0 : updateHandle();
        if (val) {
          (_a2 = popperInstanceRef.value) == null ? void 0 : _a2.destroy();
          const popperContentEl = unref(popperContentRef);
          contentRef.value = popperContentEl;
          const arrowEl = unref(arrowRef);
          const newInstance = createPopperInstance({
            referenceEl: val,
            popperContentEl: unref(popperContentRef),
            arrowEl
          });
          popperInstanceRef.value = newInstance;
          updateHandle = watch(() => val.getBoundingClientRect(), () => {
            updatePopper();
          }, {
            immediate: true
          });
        } else {
          popperInstanceRef.value = null;
        }
      }, {
        immediate: true
      });
      watch(() => buildPopperOptions(props, {
        arrowEl: unref(arrowRef),
        arrowOffset: unref(arrowOffset)
      }), (option) => {
        var _a2;
        return (_a2 = popperInstanceRef.value) == null ? void 0 : _a2.setOptions(option);
      });
    });
    return {
      ns,
      popperContentRef,
      popperInstanceRef,
      contentStyle,
      contentClass,
      updatePopper
    };
  }
});
function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    ref: "popperContentRef",
    style: normalizeStyle(_ctx.contentStyle),
    class: normalizeClass(_ctx.contentClass),
    role: "tooltip",
    onMouseenter: _cache[0] || (_cache[0] = (e) => _ctx.$emit("mouseenter", e)),
    onMouseleave: _cache[1] || (_cache[1] = (e) => _ctx.$emit("mouseleave", e))
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 38);
}
var ElPopperContent = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$j]]);
const ElPopper = withInstall(Popper);
const _sfc_main$k = defineComponent({
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
function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", mergeProps(_ctx.$attrs, { style: _ctx.computedStyle }), null, 16);
}
var ElVisuallyHidden = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$i]]);
const useTooltipContentProps = buildProps(__spreadProps(__spreadValues(__spreadValues({}, useDelayedToggleProps), usePopperContentProps), {
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
}));
const useTooltipTriggerProps = buildProps(__spreadProps(__spreadValues({}, usePopperTriggerProps), {
  disabled: Boolean,
  trigger: {
    type: definePropType([String, Array]),
    default: "hover"
  }
}));
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
const _sfc_main$j = defineComponent({
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
    const { controlled, id, open, trigger, onClose, onOpen, onShow, onHide } = inject(TOOLTIP_INJECTION_KEY, void 0);
    const persistentRef = computed(() => {
      return props.persistent;
    });
    const shouldRender = computed(() => {
      return unref(persistentRef) ? true : unref(open);
    });
    const shouldShow = computed(() => {
      return props.disabled ? false : unref(open);
    });
    const contentStyle = computed(() => {
      var _a2;
      return (_a2 = props.style) != null ? _a2 : {};
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
      var _a2, _b2;
      (_b2 = (_a2 = contentRef.value) == null ? void 0 : _a2.updatePopper) == null ? void 0 : _b2.call(_a2);
    };
    const onAfterShow = () => {
      onShow();
    };
    let stopHandle;
    watch(() => unref(open), (val) => {
      if (val) {
        stopHandle = onClickOutside(computed(() => {
          var _a2;
          return (_a2 = contentRef.value) == null ? void 0 : _a2.popperContentRef;
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
      shouldRender,
      shouldShow,
      open,
      onAfterShow,
      onBeforeEnter,
      onContentEnter,
      onContentLeave,
      onTransitionLeave
    };
  }
});
function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
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
      onAfterEnter: _ctx.onAfterShow
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
          "z-index": _ctx.zIndex,
          onMouseenter: _ctx.onContentEnter,
          onMouseleave: _ctx.onContentLeave
        }), {
          default: withCtx(() => [
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
          ]),
          _: 3
        }, 16, ["aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "z-index", "onMouseenter", "onMouseleave"])), [
          [vShow, _ctx.shouldShow]
        ]) : createCommentVNode("v-if", true)
      ]),
      _: 3
    }, 8, ["name", "onAfterLeave", "onBeforeEnter", "onAfterEnter"])
  ], 8, ["disabled", "to"]);
}
var ElTooltipContent = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$h]]);
const isTriggerType = (trigger, type) => {
  if (isArray(trigger)) {
    return trigger.includes(type);
  }
  return trigger === type;
};
const whenTrigger = (trigger, type, handler) => {
  return (e) => {
    isTriggerType(unref(trigger), type) && handler(e);
  };
};
const _sfc_main$i = defineComponent({
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
function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
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
var ElTooltipTrigger = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$g]]);
const { useModelToggleProps, useModelToggle, useModelToggleEmits } = createModelToggleComposable("visible");
const _sfc_main$h = defineComponent({
  name: "ElTooltip",
  components: {
    ElPopper,
    ElPopperArrow,
    ElTooltipContent,
    ElTooltipTrigger
  },
  props: __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, useModelToggleProps), useTooltipContentProps), useTooltipTriggerProps), usePopperArrowProps), useTooltipProps),
  emits: [...useModelToggleEmits, "show", "hide"],
  setup(props, { emit }) {
    usePopperContainer();
    const compatShowAfter = computed(() => {
      if (!isUndefined(props.openDelay))
        ;
      return props.openDelay || props.showAfter;
    });
    const compatShowArrow = computed(() => {
      if (!isUndefined(props.visibleArrow))
        ;
      return isBoolean(props.visibleArrow) ? props.visibleArrow : props.showArrow;
    });
    const id = useId();
    const popperRef = ref(null);
    const updatePopper = () => {
      var _a2;
      const popperComponent = unref(popperRef);
      if (popperComponent) {
        (_a2 = popperComponent.popperInstanceRef) == null ? void 0 : _a2.update();
      }
    };
    const open = ref(false);
    const { show, hide: hide2 } = useModelToggle({
      indicator: open
    });
    const { onOpen, onClose } = useDelayedToggle({
      showAfter: compatShowAfter,
      hideAfter: toRef(props, "hideAfter"),
      open: show,
      close: hide2
    });
    const controlled = computed(() => isBoolean(props.visible));
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
      updatePopper
    });
    return {
      compatShowAfter,
      compatShowArrow,
      popperRef,
      open,
      hide: hide2,
      updatePopper,
      onOpen,
      onClose
    };
  }
});
const _hoisted_1$a = ["innerHTML"];
const _hoisted_2$7 = { key: 1 };
function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
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
        "z-index": _ctx.zIndex
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "content", {}, () => [
            _ctx.rawContent ? (openBlock(), createElementBlock("span", {
              key: 0,
              innerHTML: _ctx.content
            }, null, 8, _hoisted_1$a)) : (openBlock(), createElementBlock("span", _hoisted_2$7, toDisplayString(_ctx.content), 1))
          ]),
          _ctx.compatShowArrow ? (openBlock(), createBlock(_component_el_popper_arrow, {
            key: 0,
            "arrow-offset": _ctx.arrowOffset
          }, null, 8, ["arrow-offset"])) : createCommentVNode("v-if", true)
        ]),
        _: 3
      }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "show-after", "strategy", "teleported", "transition", "z-index"])
    ]),
    _: 3
  }, 512);
}
var Tooltip = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$f]]);
const ElTooltip = withInstall(Tooltip);
function bound01(n, max2) {
  if (isOnePointZero(n)) {
    n = "100%";
  }
  var isPercent = isPercentage(n);
  n = max2 === 360 ? n : Math.min(max2, Math.max(0, parseFloat(n)));
  if (isPercent) {
    n = parseInt(String(n * max2), 10) / 100;
  }
  if (Math.abs(n - max2) < 1e-6) {
    return 1;
  }
  if (max2 === 360) {
    n = (n < 0 ? n % max2 + max2 : n % max2) / parseFloat(String(max2));
  } else {
    n = n % max2 / parseFloat(String(max2));
  }
  return n;
}
function clamp01(val) {
  return Math.min(1, Math.max(0, val));
}
function isOnePointZero(n) {
  return typeof n === "string" && n.indexOf(".") !== -1 && parseFloat(n) === 1;
}
function isPercentage(n) {
  return typeof n === "string" && n.indexOf("%") !== -1;
}
function boundAlpha(a) {
  a = parseFloat(a);
  if (isNaN(a) || a < 0 || a > 1) {
    a = 1;
  }
  return a;
}
function convertToPercentage(n) {
  if (n <= 1) {
    return Number(n) * 100 + "%";
  }
  return n;
}
function pad2(c) {
  return c.length === 1 ? "0" + c : String(c);
}
function rgbToRgb(r, g, b) {
  return {
    r: bound01(r, 255) * 255,
    g: bound01(g, 255) * 255,
    b: bound01(b, 255) * 255
  };
}
function rgbToHsl(r, g, b) {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b = bound01(b, 255);
  var max2 = Math.max(r, g, b);
  var min2 = Math.min(r, g, b);
  var h2 = 0;
  var s = 0;
  var l = (max2 + min2) / 2;
  if (max2 === min2) {
    s = 0;
    h2 = 0;
  } else {
    var d = max2 - min2;
    s = l > 0.5 ? d / (2 - max2 - min2) : d / (max2 + min2);
    switch (max2) {
      case r:
        h2 = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h2 = (b - r) / d + 2;
        break;
      case b:
        h2 = (r - g) / d + 4;
        break;
    }
    h2 /= 6;
  }
  return { h: h2, s, l };
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
function hslToRgb(h2, s, l) {
  var r;
  var g;
  var b;
  h2 = bound01(h2, 360);
  s = bound01(s, 100);
  l = bound01(l, 100);
  if (s === 0) {
    g = l;
    b = l;
    r = l;
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h2 + 1 / 3);
    g = hue2rgb(p, q, h2);
    b = hue2rgb(p, q, h2 - 1 / 3);
  }
  return { r: r * 255, g: g * 255, b: b * 255 };
}
function rgbToHsv(r, g, b) {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b = bound01(b, 255);
  var max2 = Math.max(r, g, b);
  var min2 = Math.min(r, g, b);
  var h2 = 0;
  var v = max2;
  var d = max2 - min2;
  var s = max2 === 0 ? 0 : d / max2;
  if (max2 === min2) {
    h2 = 0;
  } else {
    switch (max2) {
      case r:
        h2 = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h2 = (b - r) / d + 2;
        break;
      case b:
        h2 = (r - g) / d + 4;
        break;
    }
    h2 /= 6;
  }
  return { h: h2, s, v };
}
function hsvToRgb(h2, s, v) {
  h2 = bound01(h2, 360) * 6;
  s = bound01(s, 100);
  v = bound01(v, 100);
  var i = Math.floor(h2);
  var f = h2 - i;
  var p = v * (1 - s);
  var q = v * (1 - f * s);
  var t = v * (1 - (1 - f) * s);
  var mod = i % 6;
  var r = [v, q, p, p, t, v][mod];
  var g = [t, v, v, q, p, p][mod];
  var b = [p, p, t, v, v, q][mod];
  return { r: r * 255, g: g * 255, b: b * 255 };
}
function rgbToHex(r, g, b, allow3Char) {
  var hex = [
    pad2(Math.round(r).toString(16)),
    pad2(Math.round(g).toString(16)),
    pad2(Math.round(b).toString(16))
  ];
  if (allow3Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1))) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
  }
  return hex.join("");
}
function rgbaToHex(r, g, b, a, allow4Char) {
  var hex = [
    pad2(Math.round(r).toString(16)),
    pad2(Math.round(g).toString(16)),
    pad2(Math.round(b).toString(16)),
    pad2(convertDecimalToHex(a))
  ];
  if (allow4Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1)) && hex[3].startsWith(hex[3].charAt(1))) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
  }
  return hex.join("");
}
function convertDecimalToHex(d) {
  return Math.round(parseFloat(d) * 255).toString(16);
}
function convertHexToDecimal(h2) {
  return parseIntFromHex(h2) / 255;
}
function parseIntFromHex(val) {
  return parseInt(val, 16);
}
function numberInputToObject(color) {
  return {
    r: color >> 16,
    g: (color & 65280) >> 8,
    b: color & 255
  };
}
var names = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function inputToRGB(color) {
  var rgb = { r: 0, g: 0, b: 0 };
  var a = 1;
  var s = null;
  var v = null;
  var l = null;
  var ok = false;
  var format = false;
  if (typeof color === "string") {
    color = stringInputToObject(color);
  }
  if (typeof color === "object") {
    if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
      rgb = rgbToRgb(color.r, color.g, color.b);
      ok = true;
      format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
      s = convertToPercentage(color.s);
      v = convertToPercentage(color.v);
      rgb = hsvToRgb(color.h, s, v);
      ok = true;
      format = "hsv";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
      s = convertToPercentage(color.s);
      l = convertToPercentage(color.l);
      rgb = hslToRgb(color.h, s, l);
      ok = true;
      format = "hsl";
    }
    if (Object.prototype.hasOwnProperty.call(color, "a")) {
      a = color.a;
    }
  }
  a = boundAlpha(a);
  return {
    ok,
    format: color.format || format,
    r: Math.min(255, Math.max(rgb.r, 0)),
    g: Math.min(255, Math.max(rgb.g, 0)),
    b: Math.min(255, Math.max(rgb.b, 0)),
    a
  };
}
var CSS_INTEGER = "[-\\+]?\\d+%?";
var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
var matchers = {
  CSS_UNIT: new RegExp(CSS_UNIT),
  rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
  rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
  hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
  hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
  hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
  hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function stringInputToObject(color) {
  color = color.trim().toLowerCase();
  if (color.length === 0) {
    return false;
  }
  var named = false;
  if (names[color]) {
    color = names[color];
    named = true;
  } else if (color === "transparent") {
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  }
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
      format: named ? "name" : "hex8"
    };
  }
  match = matchers.hex6.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      format: named ? "name" : "hex"
    };
  }
  match = matchers.hex4.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      a: convertHexToDecimal(match[4] + match[4]),
      format: named ? "name" : "hex8"
    };
  }
  match = matchers.hex3.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      format: named ? "name" : "hex"
    };
  }
  return false;
}
function isValidCSSUnit(color) {
  return Boolean(matchers.CSS_UNIT.exec(String(color)));
}
var TinyColor = function() {
  function TinyColor2(color, opts) {
    if (color === void 0) {
      color = "";
    }
    if (opts === void 0) {
      opts = {};
    }
    var _a2;
    if (color instanceof TinyColor2) {
      return color;
    }
    if (typeof color === "number") {
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
    this.format = (_a2 = opts.format) !== null && _a2 !== void 0 ? _a2 : rgb.format;
    this.gradientType = opts.gradientType;
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
  TinyColor2.prototype.isDark = function() {
    return this.getBrightness() < 128;
  };
  TinyColor2.prototype.isLight = function() {
    return !this.isDark();
  };
  TinyColor2.prototype.getBrightness = function() {
    var rgb = this.toRgb();
    return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
  };
  TinyColor2.prototype.getLuminance = function() {
    var rgb = this.toRgb();
    var R;
    var G;
    var B;
    var RsRGB = rgb.r / 255;
    var GsRGB = rgb.g / 255;
    var BsRGB = rgb.b / 255;
    if (RsRGB <= 0.03928) {
      R = RsRGB / 12.92;
    } else {
      R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
    }
    if (GsRGB <= 0.03928) {
      G = GsRGB / 12.92;
    } else {
      G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
    }
    if (BsRGB <= 0.03928) {
      B = BsRGB / 12.92;
    } else {
      B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
    }
    return 0.2126 * R + 0.7152 * G + 0.0722 * B;
  };
  TinyColor2.prototype.getAlpha = function() {
    return this.a;
  };
  TinyColor2.prototype.setAlpha = function(alpha) {
    this.a = boundAlpha(alpha);
    this.roundA = Math.round(100 * this.a) / 100;
    return this;
  };
  TinyColor2.prototype.toHsv = function() {
    var hsv = rgbToHsv(this.r, this.g, this.b);
    return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this.a };
  };
  TinyColor2.prototype.toHsvString = function() {
    var hsv = rgbToHsv(this.r, this.g, this.b);
    var h2 = Math.round(hsv.h * 360);
    var s = Math.round(hsv.s * 100);
    var v = Math.round(hsv.v * 100);
    return this.a === 1 ? "hsv(" + h2 + ", " + s + "%, " + v + "%)" : "hsva(" + h2 + ", " + s + "%, " + v + "%, " + this.roundA + ")";
  };
  TinyColor2.prototype.toHsl = function() {
    var hsl = rgbToHsl(this.r, this.g, this.b);
    return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this.a };
  };
  TinyColor2.prototype.toHslString = function() {
    var hsl = rgbToHsl(this.r, this.g, this.b);
    var h2 = Math.round(hsl.h * 360);
    var s = Math.round(hsl.s * 100);
    var l = Math.round(hsl.l * 100);
    return this.a === 1 ? "hsl(" + h2 + ", " + s + "%, " + l + "%)" : "hsla(" + h2 + ", " + s + "%, " + l + "%, " + this.roundA + ")";
  };
  TinyColor2.prototype.toHex = function(allow3Char) {
    if (allow3Char === void 0) {
      allow3Char = false;
    }
    return rgbToHex(this.r, this.g, this.b, allow3Char);
  };
  TinyColor2.prototype.toHexString = function(allow3Char) {
    if (allow3Char === void 0) {
      allow3Char = false;
    }
    return "#" + this.toHex(allow3Char);
  };
  TinyColor2.prototype.toHex8 = function(allow4Char) {
    if (allow4Char === void 0) {
      allow4Char = false;
    }
    return rgbaToHex(this.r, this.g, this.b, this.a, allow4Char);
  };
  TinyColor2.prototype.toHex8String = function(allow4Char) {
    if (allow4Char === void 0) {
      allow4Char = false;
    }
    return "#" + this.toHex8(allow4Char);
  };
  TinyColor2.prototype.toRgb = function() {
    return {
      r: Math.round(this.r),
      g: Math.round(this.g),
      b: Math.round(this.b),
      a: this.a
    };
  };
  TinyColor2.prototype.toRgbString = function() {
    var r = Math.round(this.r);
    var g = Math.round(this.g);
    var b = Math.round(this.b);
    return this.a === 1 ? "rgb(" + r + ", " + g + ", " + b + ")" : "rgba(" + r + ", " + g + ", " + b + ", " + this.roundA + ")";
  };
  TinyColor2.prototype.toPercentageRgb = function() {
    var fmt = function(x) {
      return Math.round(bound01(x, 255) * 100) + "%";
    };
    return {
      r: fmt(this.r),
      g: fmt(this.g),
      b: fmt(this.b),
      a: this.a
    };
  };
  TinyColor2.prototype.toPercentageRgbString = function() {
    var rnd = function(x) {
      return Math.round(bound01(x, 255) * 100);
    };
    return this.a === 1 ? "rgb(" + rnd(this.r) + "%, " + rnd(this.g) + "%, " + rnd(this.b) + "%)" : "rgba(" + rnd(this.r) + "%, " + rnd(this.g) + "%, " + rnd(this.b) + "%, " + this.roundA + ")";
  };
  TinyColor2.prototype.toName = function() {
    if (this.a === 0) {
      return "transparent";
    }
    if (this.a < 1) {
      return false;
    }
    var hex = "#" + rgbToHex(this.r, this.g, this.b, false);
    for (var _i = 0, _a2 = Object.entries(names); _i < _a2.length; _i++) {
      var _b2 = _a2[_i], key = _b2[0], value = _b2[1];
      if (hex === value) {
        return key;
      }
    }
    return false;
  };
  TinyColor2.prototype.toString = function(format) {
    var formatSet = Boolean(format);
    format = format !== null && format !== void 0 ? format : this.format;
    var formattedString = false;
    var hasAlpha = this.a < 1 && this.a >= 0;
    var needsAlphaFormat = !formatSet && hasAlpha && (format.startsWith("hex") || format === "name");
    if (needsAlphaFormat) {
      if (format === "name" && this.a === 0) {
        return this.toName();
      }
      return this.toRgbString();
    }
    if (format === "rgb") {
      formattedString = this.toRgbString();
    }
    if (format === "prgb") {
      formattedString = this.toPercentageRgbString();
    }
    if (format === "hex" || format === "hex6") {
      formattedString = this.toHexString();
    }
    if (format === "hex3") {
      formattedString = this.toHexString(true);
    }
    if (format === "hex4") {
      formattedString = this.toHex8String(true);
    }
    if (format === "hex8") {
      formattedString = this.toHex8String();
    }
    if (format === "name") {
      formattedString = this.toName();
    }
    if (format === "hsl") {
      formattedString = this.toHslString();
    }
    if (format === "hsv") {
      formattedString = this.toHsvString();
    }
    return formattedString || this.toHexString();
  };
  TinyColor2.prototype.toNumber = function() {
    return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
  };
  TinyColor2.prototype.clone = function() {
    return new TinyColor2(this.toString());
  };
  TinyColor2.prototype.lighten = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.brighten = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var rgb = this.toRgb();
    rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
    rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
    rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
    return new TinyColor2(rgb);
  };
  TinyColor2.prototype.darken = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.tint = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    return this.mix("white", amount);
  };
  TinyColor2.prototype.shade = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    return this.mix("black", amount);
  };
  TinyColor2.prototype.desaturate = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.saturate = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.greyscale = function() {
    return this.desaturate(100);
  };
  TinyColor2.prototype.spin = function(amount) {
    var hsl = this.toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.mix = function(color, amount) {
    if (amount === void 0) {
      amount = 50;
    }
    var rgb1 = this.toRgb();
    var rgb2 = new TinyColor2(color).toRgb();
    var p = amount / 100;
    var rgba = {
      r: (rgb2.r - rgb1.r) * p + rgb1.r,
      g: (rgb2.g - rgb1.g) * p + rgb1.g,
      b: (rgb2.b - rgb1.b) * p + rgb1.b,
      a: (rgb2.a - rgb1.a) * p + rgb1.a
    };
    return new TinyColor2(rgba);
  };
  TinyColor2.prototype.analogous = function(results, slices) {
    if (results === void 0) {
      results = 6;
    }
    if (slices === void 0) {
      slices = 30;
    }
    var hsl = this.toHsl();
    var part = 360 / slices;
    var ret = [this];
    for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results; ) {
      hsl.h = (hsl.h + part) % 360;
      ret.push(new TinyColor2(hsl));
    }
    return ret;
  };
  TinyColor2.prototype.complement = function() {
    var hsl = this.toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.monochromatic = function(results) {
    if (results === void 0) {
      results = 6;
    }
    var hsv = this.toHsv();
    var h2 = hsv.h;
    var s = hsv.s;
    var v = hsv.v;
    var res = [];
    var modification = 1 / results;
    while (results--) {
      res.push(new TinyColor2({ h: h2, s, v }));
      v = (v + modification) % 1;
    }
    return res;
  };
  TinyColor2.prototype.splitcomplement = function() {
    var hsl = this.toHsl();
    var h2 = hsl.h;
    return [
      this,
      new TinyColor2({ h: (h2 + 72) % 360, s: hsl.s, l: hsl.l }),
      new TinyColor2({ h: (h2 + 216) % 360, s: hsl.s, l: hsl.l })
    ];
  };
  TinyColor2.prototype.onBackground = function(background) {
    var fg = this.toRgb();
    var bg = new TinyColor2(background).toRgb();
    return new TinyColor2({
      r: bg.r + (fg.r - bg.r) * fg.a,
      g: bg.g + (fg.g - bg.g) * fg.a,
      b: bg.b + (fg.b - bg.b) * fg.a
    });
  };
  TinyColor2.prototype.triad = function() {
    return this.polyad(3);
  };
  TinyColor2.prototype.tetrad = function() {
    return this.polyad(4);
  };
  TinyColor2.prototype.polyad = function(n) {
    var hsl = this.toHsl();
    var h2 = hsl.h;
    var result = [this];
    var increment = 360 / n;
    for (var i = 1; i < n; i++) {
      result.push(new TinyColor2({ h: (h2 + i * increment) % 360, s: hsl.s, l: hsl.l }));
    }
    return result;
  };
  TinyColor2.prototype.equals = function(color) {
    return this.toRgbString() === new TinyColor2(color).toRgbString();
  };
  return TinyColor2;
}();
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
  autoInsertSpace: {
    type: Boolean,
    default: void 0
  }
});
const buttonEmits = {
  click: (evt) => evt instanceof MouseEvent
};
const _hoisted_1$9 = ["disabled", "autofocus", "type"];
const __default__ = {
  name: "ElButton"
};
const _sfc_main$g = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__), {
  props: buttonProps,
  emits: buttonEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const slots = useSlots();
    const buttonGroupContext = inject(buttonGroupContextKey, void 0);
    const globalConfig2 = useGlobalConfig("button");
    const ns = useNamespace("button");
    const { form } = useFormItem();
    const _size = useSize(computed(() => buttonGroupContext == null ? void 0 : buttonGroupContext.size));
    const _disabled = useDisabled();
    const _ref = ref();
    const _type = computed(() => props.type || (buttonGroupContext == null ? void 0 : buttonGroupContext.type) || "");
    const autoInsertSpace = computed(() => {
      var _a2, _b2, _c;
      return (_c = (_b2 = props.autoInsertSpace) != null ? _b2 : (_a2 = globalConfig2.value) == null ? void 0 : _a2.autoInsertSpace) != null ? _c : false;
    });
    const shouldAddSpace = computed(() => {
      var _a2;
      const defaultSlot = (_a2 = slots.default) == null ? void 0 : _a2.call(slots);
      if (autoInsertSpace.value && (defaultSlot == null ? void 0 : defaultSlot.length) === 1) {
        const slot = defaultSlot[0];
        if ((slot == null ? void 0 : slot.type) === Text) {
          const text = slot.children;
          return /^\p{Unified_Ideograph}{2}$/u.test(text);
        }
      }
      return false;
    });
    const typeColor = computed(() => useCssVar(`--el-color-${props.type}`).value);
    const buttonStyle = computed(() => {
      let styles = {};
      const buttonColor = props.color || typeColor.value;
      if (buttonColor) {
        const color = new TinyColor(buttonColor);
        const shadeBgColor = color.shade(10).toString();
        if (props.plain) {
          styles = {
            "--el-button-bg-color": color.tint(90).toString(),
            "--el-button-text-color": buttonColor,
            "--el-button-hover-text-color": "var(--el-color-white)",
            "--el-button-hover-bg-color": buttonColor,
            "--el-button-hover-border-color": buttonColor,
            "--el-button-active-bg-color": shadeBgColor,
            "--el-button-active-text-color": "var(--el-color-white)",
            "--el-button-active-border-color": shadeBgColor
          };
        } else {
          const tintBgColor = color.tint(20).toString();
          styles = {
            "--el-button-bg-color": buttonColor,
            "--el-button-border-color": buttonColor,
            "--el-button-hover-bg-color": tintBgColor,
            "--el-button-hover-border-color": tintBgColor,
            "--el-button-active-bg-color": shadeBgColor,
            "--el-button-active-border-color": shadeBgColor
          };
        }
        if (_disabled.value) {
          const disabledButtonColor = color.tint(50).toString();
          styles["--el-button-disabled-bg-color"] = disabledButtonColor;
          styles["--el-button-disabled-border-color"] = disabledButtonColor;
        }
      }
      return styles;
    });
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
        ], 2112)) : _ctx.icon ? (openBlock(), createBlock(unref(ElIcon), { key: 1 }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon)))
          ]),
          _: 1
        })) : createCommentVNode("v-if", true),
        _ctx.$slots.default ? (openBlock(), createElementBlock("span", {
          key: 2,
          class: normalizeClass({ [unref(ns).em("text", "expand")]: unref(shouldAddSpace) })
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2)) : createCommentVNode("v-if", true)
      ], 14, _hoisted_1$9);
    };
  }
}));
const buttonGroupProps = {
  size: buttonProps.size,
  type: buttonProps.type
};
const _sfc_main$f = defineComponent({
  name: "ElButtonGroup",
  props: buttonGroupProps,
  setup(props) {
    provide(buttonGroupContextKey, reactive({
      size: toRef(props, "size"),
      type: toRef(props, "type")
    }));
    const ns = useNamespace("button");
    return {
      ns
    };
  }
});
function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(`${_ctx.ns.b("group")}`)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var ButtonGroup = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e]]);
const ElButton = withInstall(_sfc_main$g, {
  ButtonGroup
});
withNoopInstall(ButtonGroup);
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var dayjs_min = { exports: {} };
(function(module2, exports2) {
  !function(t, e) {
    module2.exports = e();
  }(commonjsGlobal, function() {
    var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", f = "month", h2 = "quarter", c = "year", d = "date", $ = "Invalid Date", l = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") }, m = function(t2, e2, n2) {
      var r2 = String(t2);
      return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
    }, g = { s: m, z: function(t2) {
      var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
      return (e2 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i2, 2, "0");
    }, m: function t2(e2, n2) {
      if (e2.date() < n2.date())
        return -t2(n2, e2);
      var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, f), s2 = n2 - i2 < 0, u2 = e2.clone().add(r2 + (s2 ? -1 : 1), f);
      return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
    }, a: function(t2) {
      return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
    }, p: function(t2) {
      return { M: f, y: c, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: h2 }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
    }, u: function(t2) {
      return t2 === void 0;
    } }, D = "en", v = {};
    v[D] = M;
    var p = function(t2) {
      return t2 instanceof _;
    }, S = function(t2, e2, n2) {
      var r2;
      if (!t2)
        return D;
      if (typeof t2 == "string")
        v[t2] && (r2 = t2), e2 && (v[t2] = e2, r2 = t2);
      else {
        var i2 = t2.name;
        v[i2] = t2, r2 = i2;
      }
      return !n2 && r2 && (D = r2), r2 || !n2 && D;
    }, w = function(t2, e2) {
      if (p(t2))
        return t2.clone();
      var n2 = typeof e2 == "object" ? e2 : {};
      return n2.date = t2, n2.args = arguments, new _(n2);
    }, O = g;
    O.l = S, O.i = p, O.w = function(t2, e2) {
      return w(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
    };
    var _ = function() {
      function M2(t2) {
        this.$L = S(t2.locale, null, true), this.parse(t2);
      }
      var m2 = M2.prototype;
      return m2.parse = function(t2) {
        this.$d = function(t3) {
          var e2 = t3.date, n2 = t3.utc;
          if (e2 === null)
            return new Date(NaN);
          if (O.u(e2))
            return new Date();
          if (e2 instanceof Date)
            return new Date(e2);
          if (typeof e2 == "string" && !/Z$/i.test(e2)) {
            var r2 = e2.match(l);
            if (r2) {
              var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
              return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
            }
          }
          return new Date(e2);
        }(t2), this.$x = t2.x || {}, this.init();
      }, m2.init = function() {
        var t2 = this.$d;
        this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
      }, m2.$utils = function() {
        return O;
      }, m2.isValid = function() {
        return !(this.$d.toString() === $);
      }, m2.isSame = function(t2, e2) {
        var n2 = w(t2);
        return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
      }, m2.isAfter = function(t2, e2) {
        return w(t2) < this.startOf(e2);
      }, m2.isBefore = function(t2, e2) {
        return this.endOf(e2) < w(t2);
      }, m2.$g = function(t2, e2, n2) {
        return O.u(t2) ? this[e2] : this.set(n2, t2);
      }, m2.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, m2.valueOf = function() {
        return this.$d.getTime();
      }, m2.startOf = function(t2, e2) {
        var n2 = this, r2 = !!O.u(e2) || e2, h3 = O.p(t2), $2 = function(t3, e3) {
          var i2 = O.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
          return r2 ? i2 : i2.endOf(a);
        }, l2 = function(t3, e3) {
          return O.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
        }, y2 = this.$W, M3 = this.$M, m3 = this.$D, g2 = "set" + (this.$u ? "UTC" : "");
        switch (h3) {
          case c:
            return r2 ? $2(1, 0) : $2(31, 11);
          case f:
            return r2 ? $2(1, M3) : $2(0, M3 + 1);
          case o:
            var D2 = this.$locale().weekStart || 0, v2 = (y2 < D2 ? y2 + 7 : y2) - D2;
            return $2(r2 ? m3 - v2 : m3 + (6 - v2), M3);
          case a:
          case d:
            return l2(g2 + "Hours", 0);
          case u:
            return l2(g2 + "Minutes", 1);
          case s:
            return l2(g2 + "Seconds", 2);
          case i:
            return l2(g2 + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, m2.endOf = function(t2) {
        return this.startOf(t2, false);
      }, m2.$set = function(t2, e2) {
        var n2, o2 = O.p(t2), h3 = "set" + (this.$u ? "UTC" : ""), $2 = (n2 = {}, n2[a] = h3 + "Date", n2[d] = h3 + "Date", n2[f] = h3 + "Month", n2[c] = h3 + "FullYear", n2[u] = h3 + "Hours", n2[s] = h3 + "Minutes", n2[i] = h3 + "Seconds", n2[r] = h3 + "Milliseconds", n2)[o2], l2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
        if (o2 === f || o2 === c) {
          var y2 = this.clone().set(d, 1);
          y2.$d[$2](l2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
        } else
          $2 && this.$d[$2](l2);
        return this.init(), this;
      }, m2.set = function(t2, e2) {
        return this.clone().$set(t2, e2);
      }, m2.get = function(t2) {
        return this[O.p(t2)]();
      }, m2.add = function(r2, h3) {
        var d2, $2 = this;
        r2 = Number(r2);
        var l2 = O.p(h3), y2 = function(t2) {
          var e2 = w($2);
          return O.w(e2.date(e2.date() + Math.round(t2 * r2)), $2);
        };
        if (l2 === f)
          return this.set(f, this.$M + r2);
        if (l2 === c)
          return this.set(c, this.$y + r2);
        if (l2 === a)
          return y2(1);
        if (l2 === o)
          return y2(7);
        var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[l2] || 1, m3 = this.$d.getTime() + r2 * M3;
        return O.w(m3, this);
      }, m2.subtract = function(t2, e2) {
        return this.add(-1 * t2, e2);
      }, m2.format = function(t2) {
        var e2 = this, n2 = this.$locale();
        if (!this.isValid())
          return n2.invalidDate || $;
        var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = O.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, f2 = n2.months, h3 = function(t3, n3, i3, s3) {
          return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].substr(0, s3);
        }, c2 = function(t3) {
          return O.s(s2 % 12 || 12, t3, "0");
        }, d2 = n2.meridiem || function(t3, e3, n3) {
          var r3 = t3 < 12 ? "AM" : "PM";
          return n3 ? r3.toLowerCase() : r3;
        }, l2 = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: a2 + 1, MM: O.s(a2 + 1, 2, "0"), MMM: h3(n2.monthsShort, a2, f2, 3), MMMM: h3(f2, a2), D: this.$D, DD: O.s(this.$D, 2, "0"), d: String(this.$W), dd: h3(n2.weekdaysMin, this.$W, o2, 2), ddd: h3(n2.weekdaysShort, this.$W, o2, 3), dddd: o2[this.$W], H: String(s2), HH: O.s(s2, 2, "0"), h: c2(1), hh: c2(2), a: d2(s2, u2, true), A: d2(s2, u2, false), m: String(u2), mm: O.s(u2, 2, "0"), s: String(this.$s), ss: O.s(this.$s, 2, "0"), SSS: O.s(this.$ms, 3, "0"), Z: i2 };
        return r2.replace(y, function(t3, e3) {
          return e3 || l2[t3] || i2.replace(":", "");
        });
      }, m2.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, m2.diff = function(r2, d2, $2) {
        var l2, y2 = O.p(d2), M3 = w(r2), m3 = (M3.utcOffset() - this.utcOffset()) * e, g2 = this - M3, D2 = O.m(this, M3);
        return D2 = (l2 = {}, l2[c] = D2 / 12, l2[f] = D2, l2[h2] = D2 / 3, l2[o] = (g2 - m3) / 6048e5, l2[a] = (g2 - m3) / 864e5, l2[u] = g2 / n, l2[s] = g2 / e, l2[i] = g2 / t, l2)[y2] || g2, $2 ? D2 : O.a(D2);
      }, m2.daysInMonth = function() {
        return this.endOf(f).$D;
      }, m2.$locale = function() {
        return v[this.$L];
      }, m2.locale = function(t2, e2) {
        if (!t2)
          return this.$L;
        var n2 = this.clone(), r2 = S(t2, e2, true);
        return r2 && (n2.$L = r2), n2;
      }, m2.clone = function() {
        return O.w(this.$d, this);
      }, m2.toDate = function() {
        return new Date(this.valueOf());
      }, m2.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, m2.toISOString = function() {
        return this.$d.toISOString();
      }, m2.toString = function() {
        return this.$d.toUTCString();
      }, M2;
    }(), b = _.prototype;
    return w.prototype = b, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", f], ["$y", c], ["$D", d]].forEach(function(t2) {
      b[t2[1]] = function(e2) {
        return this.$g(e2, t2[0], t2[1]);
      };
    }), w.extend = function(t2, e2) {
      return t2.$i || (t2(e2, _, w), t2.$i = true), w;
    }, w.locale = S, w.isDayjs = p, w.unix = function(t2) {
      return w(1e3 * t2);
    }, w.en = v[D], w.Ls = v, w.p = {}, w;
  });
})(dayjs_min);
var dayjs = dayjs_min.exports;
var localeData$1 = { exports: {} };
(function(module2, exports2) {
  !function(n, e) {
    module2.exports = e();
  }(commonjsGlobal, function() {
    return function(n, e, t) {
      var r = e.prototype, o = function(n2) {
        return n2 && (n2.indexOf ? n2 : n2.s);
      }, u = function(n2, e2, t2, r2, u2) {
        var i2 = n2.name ? n2 : n2.$locale(), a2 = o(i2[e2]), s2 = o(i2[t2]), f = a2 || s2.map(function(n3) {
          return n3.substr(0, r2);
        });
        if (!u2)
          return f;
        var d = i2.weekStart;
        return f.map(function(n3, e3) {
          return f[(e3 + (d || 0)) % 7];
        });
      }, i = function() {
        return t.Ls[t.locale()];
      }, a = function(n2, e2) {
        return n2.formats[e2] || function(n3) {
          return n3.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(n4, e3, t2) {
            return e3 || t2.slice(1);
          });
        }(n2.formats[e2.toUpperCase()]);
      }, s = function() {
        var n2 = this;
        return { months: function(e2) {
          return e2 ? e2.format("MMMM") : u(n2, "months");
        }, monthsShort: function(e2) {
          return e2 ? e2.format("MMM") : u(n2, "monthsShort", "months", 3);
        }, firstDayOfWeek: function() {
          return n2.$locale().weekStart || 0;
        }, weekdays: function(e2) {
          return e2 ? e2.format("dddd") : u(n2, "weekdays");
        }, weekdaysMin: function(e2) {
          return e2 ? e2.format("dd") : u(n2, "weekdaysMin", "weekdays", 2);
        }, weekdaysShort: function(e2) {
          return e2 ? e2.format("ddd") : u(n2, "weekdaysShort", "weekdays", 3);
        }, longDateFormat: function(e2) {
          return a(n2.$locale(), e2);
        }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal };
      };
      r.localeData = function() {
        return s.bind(this)();
      }, t.localeData = function() {
        var n2 = i();
        return { firstDayOfWeek: function() {
          return n2.weekStart || 0;
        }, weekdays: function() {
          return t.weekdays();
        }, weekdaysShort: function() {
          return t.weekdaysShort();
        }, weekdaysMin: function() {
          return t.weekdaysMin();
        }, months: function() {
          return t.months();
        }, monthsShort: function() {
          return t.monthsShort();
        }, longDateFormat: function(e2) {
          return a(n2, e2);
        }, meridiem: n2.meridiem, ordinal: n2.ordinal };
      }, t.months = function() {
        return u(i(), "months");
      }, t.monthsShort = function() {
        return u(i(), "monthsShort", "months", 3);
      }, t.weekdays = function(n2) {
        return u(i(), "weekdays", null, null, n2);
      }, t.weekdaysShort = function(n2) {
        return u(i(), "weekdaysShort", "weekdays", 3, n2);
      }, t.weekdaysMin = function(n2) {
        return u(i(), "weekdaysMin", "weekdays", 2, n2);
      };
    };
  });
})(localeData$1);
var localeData = localeData$1.exports;
var customParseFormat$1 = { exports: {} };
(function(module2, exports2) {
  !function(t, e) {
    module2.exports = e();
  }(commonjsGlobal, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, e = /(\[[^[]*\])|([-:/.()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, n = /\d\d/, r = /\d\d?/, i = /\d*[^\s\d-_:/()]+/, o = {}, s = function(t2) {
      return (t2 = +t2) + (t2 > 68 ? 1900 : 2e3);
    };
    var a = function(t2) {
      return function(e2) {
        this[t2] = +e2;
      };
    }, f = [/[+-]\d\d:?(\d\d)?|Z/, function(t2) {
      (this.zone || (this.zone = {})).offset = function(t3) {
        if (!t3)
          return 0;
        if (t3 === "Z")
          return 0;
        var e2 = t3.match(/([+-]|\d\d)/g), n2 = 60 * e2[1] + (+e2[2] || 0);
        return n2 === 0 ? 0 : e2[0] === "+" ? -n2 : n2;
      }(t2);
    }], u = function(t2) {
      var e2 = o[t2];
      return e2 && (e2.indexOf ? e2 : e2.s.concat(e2.f));
    }, h2 = function(t2, e2) {
      var n2, r2 = o.meridiem;
      if (r2) {
        for (var i2 = 1; i2 <= 24; i2 += 1)
          if (t2.indexOf(r2(i2, 0, e2)) > -1) {
            n2 = i2 > 12;
            break;
          }
      } else
        n2 = t2 === (e2 ? "pm" : "PM");
      return n2;
    }, d = { A: [i, function(t2) {
      this.afternoon = h2(t2, false);
    }], a: [i, function(t2) {
      this.afternoon = h2(t2, true);
    }], S: [/\d/, function(t2) {
      this.milliseconds = 100 * +t2;
    }], SS: [n, function(t2) {
      this.milliseconds = 10 * +t2;
    }], SSS: [/\d{3}/, function(t2) {
      this.milliseconds = +t2;
    }], s: [r, a("seconds")], ss: [r, a("seconds")], m: [r, a("minutes")], mm: [r, a("minutes")], H: [r, a("hours")], h: [r, a("hours")], HH: [r, a("hours")], hh: [r, a("hours")], D: [r, a("day")], DD: [n, a("day")], Do: [i, function(t2) {
      var e2 = o.ordinal, n2 = t2.match(/\d+/);
      if (this.day = n2[0], e2)
        for (var r2 = 1; r2 <= 31; r2 += 1)
          e2(r2).replace(/\[|\]/g, "") === t2 && (this.day = r2);
    }], M: [r, a("month")], MM: [n, a("month")], MMM: [i, function(t2) {
      var e2 = u("months"), n2 = (u("monthsShort") || e2.map(function(t3) {
        return t3.substr(0, 3);
      })).indexOf(t2) + 1;
      if (n2 < 1)
        throw new Error();
      this.month = n2 % 12 || n2;
    }], MMMM: [i, function(t2) {
      var e2 = u("months").indexOf(t2) + 1;
      if (e2 < 1)
        throw new Error();
      this.month = e2 % 12 || e2;
    }], Y: [/[+-]?\d+/, a("year")], YY: [n, function(t2) {
      this.year = s(t2);
    }], YYYY: [/\d{4}/, a("year")], Z: f, ZZ: f };
    function c(n2) {
      var r2, i2;
      r2 = n2, i2 = o && o.formats;
      for (var s2 = (n2 = r2.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(e2, n3, r3) {
        var o2 = r3 && r3.toUpperCase();
        return n3 || i2[r3] || t[r3] || i2[o2].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(t2, e3, n4) {
          return e3 || n4.slice(1);
        });
      })).match(e), a2 = s2.length, f2 = 0; f2 < a2; f2 += 1) {
        var u2 = s2[f2], h3 = d[u2], c2 = h3 && h3[0], l = h3 && h3[1];
        s2[f2] = l ? { regex: c2, parser: l } : u2.replace(/^\[|\]$/g, "");
      }
      return function(t2) {
        for (var e2 = {}, n3 = 0, r3 = 0; n3 < a2; n3 += 1) {
          var i3 = s2[n3];
          if (typeof i3 == "string")
            r3 += i3.length;
          else {
            var o2 = i3.regex, f3 = i3.parser, u3 = t2.substr(r3), h4 = o2.exec(u3)[0];
            f3.call(e2, h4), t2 = t2.replace(h4, "");
          }
        }
        return function(t3) {
          var e3 = t3.afternoon;
          if (e3 !== void 0) {
            var n4 = t3.hours;
            e3 ? n4 < 12 && (t3.hours += 12) : n4 === 12 && (t3.hours = 0), delete t3.afternoon;
          }
        }(e2), e2;
      };
    }
    return function(t2, e2, n2) {
      n2.p.customParseFormat = true, t2 && t2.parseTwoDigitYear && (s = t2.parseTwoDigitYear);
      var r2 = e2.prototype, i2 = r2.parse;
      r2.parse = function(t3) {
        var e3 = t3.date, r3 = t3.utc, s2 = t3.args;
        this.$u = r3;
        var a2 = s2[1];
        if (typeof a2 == "string") {
          var f2 = s2[2] === true, u2 = s2[3] === true, h3 = f2 || u2, d2 = s2[2];
          u2 && (d2 = s2[2]), o = this.$locale(), !f2 && d2 && (o = n2.Ls[d2]), this.$d = function(t4, e4, n3) {
            try {
              if (["x", "X"].indexOf(e4) > -1)
                return new Date((e4 === "X" ? 1e3 : 1) * t4);
              var r4 = c(e4)(t4), i3 = r4.year, o2 = r4.month, s3 = r4.day, a3 = r4.hours, f3 = r4.minutes, u3 = r4.seconds, h4 = r4.milliseconds, d3 = r4.zone, l2 = new Date(), m2 = s3 || (i3 || o2 ? 1 : l2.getDate()), M2 = i3 || l2.getFullYear(), Y = 0;
              i3 && !o2 || (Y = o2 > 0 ? o2 - 1 : l2.getMonth());
              var p = a3 || 0, v = f3 || 0, D = u3 || 0, g = h4 || 0;
              return d3 ? new Date(Date.UTC(M2, Y, m2, p, v, D, g + 60 * d3.offset * 1e3)) : n3 ? new Date(Date.UTC(M2, Y, m2, p, v, D, g)) : new Date(M2, Y, m2, p, v, D, g);
            } catch (t5) {
              return new Date("");
            }
          }(e3, a2, r3), this.init(), d2 && d2 !== true && (this.$L = this.locale(d2).$L), h3 && e3 != this.format(a2) && (this.$d = new Date("")), o = {};
        } else if (a2 instanceof Array)
          for (var l = a2.length, m = 1; m <= l; m += 1) {
            s2[1] = a2[m - 1];
            var M = n2.apply(this, s2);
            if (M.isValid()) {
              this.$d = M.$d, this.$L = M.$L, this.init();
              break;
            }
            m === l && (this.$d = new Date(""));
          }
        else
          i2.call(this, t3);
      };
    };
  });
})(customParseFormat$1);
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
  const aIsArray = a instanceof Array;
  const bIsArray = b instanceof Array;
  if (aIsArray && bIsArray) {
    if (a.length !== b.length) {
      return false;
    }
    return a.every((item, index2) => dateEquals(item, b[index2]));
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
const _sfc_main$e = defineComponent({
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
    const elForm = inject(elFormKey, {});
    const elFormItem = inject(elFormItemKey, {});
    const elPopperOptions = inject("ElPopperOptions", {});
    const refPopper = ref();
    const inputRef = ref();
    const pickerVisible = ref(false);
    const pickerActualVisible = ref(false);
    const valueOnOpen = ref(null);
    watch(pickerVisible, (val) => {
      var _a2;
      if (!val) {
        userInput.value = null;
        nextTick(() => {
          emitChange(props.modelValue);
        });
        ctx.emit("blur");
        blurInput();
        props.validateEvent && ((_a2 = elFormItem.validate) == null ? void 0 : _a2.call(elFormItem, "blur"));
      } else {
        valueOnOpen.value = props.modelValue;
      }
    });
    const emitChange = (val, isClear) => {
      var _a2;
      if (isClear || !valueEquals(val, valueOnOpen.value)) {
        ctx.emit("change", val);
        props.validateEvent && ((_a2 = elFormItem.validate) == null ? void 0 : _a2.call(elFormItem, "change"));
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
    const setSelectionRange = (start2, end2, pos) => {
      const _inputs = refInput.value;
      if (!_inputs.length)
        return;
      if (!pos || pos === "min") {
        _inputs[0].setSelectionRange(start2, end2);
        _inputs[0].focus();
      } else if (pos === "max") {
        _inputs[1].setSelectionRange(start2, end2);
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
    const onShow = () => {
      pickerActualVisible.value = true;
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
      var _a2;
      (_a2 = refPopper.value) == null ? void 0 : _a2.onClose();
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
      return props.type.indexOf("range") > -1;
    });
    const pickerSize = useSize();
    const popperPaneRef = computed(() => {
      var _a2, _b2;
      return (_b2 = (_a2 = refPopper.value) == null ? void 0 : _a2.popperRef) == null ? void 0 : _b2.contentRef;
    });
    const popperEl = computed(() => {
      var _a2, _b2;
      return (_b2 = (_a2 = unref(refPopper)) == null ? void 0 : _a2.popperRef) == null ? void 0 : _b2.contentRef;
    });
    const actualInputRef = computed(() => {
      var _a2;
      if (unref(isRangeInput)) {
        return unref(inputRef);
      }
      return (_a2 = unref(inputRef)) == null ? void 0 : _a2.$el;
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
            if (refInput.value.indexOf(document.activeElement) === -1) {
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
    const onPanelChange = (value, mode, view2) => {
      ctx.emit("panel-change", value, mode, view2);
    };
    provide("EP_PICKER_BASE", {
      props
    });
    return {
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
      onHide
    };
  }
});
const _hoisted_1$8 = ["id", "name", "placeholder", "value", "disabled", "readonly"];
const _hoisted_2$6 = { class: "el-range-separator" };
const _hoisted_3$5 = ["id", "name", "placeholder", "value", "disabled", "readonly"];
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
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
    transition: "el-zoom-in-top",
    "popper-class": `el-picker__popper ${_ctx.popperClass}`,
    "popper-options": _ctx.elPopperOptions,
    "fallback-placements": ["bottom", "top", "right", "left"],
    "gpu-acceleration": false,
    "stop-popper-mouse-event": false,
    "hide-after": 0,
    persistent: "",
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
        class: normalizeClass(["el-date-editor", ["el-date-editor--" + _ctx.type, _ctx.$attrs.class || void 0]]),
        style: normalizeStyle(_ctx.$attrs.style || void 0),
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
            class: "el-input__icon",
            onClick: _ctx.handleFocus
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(_ctx.triggerIcon)))
            ]),
            _: 1
          }, 8, ["onClick"])) : createCommentVNode("v-if", true)
        ]),
        suffix: withCtx(() => [
          _ctx.showClose && _ctx.clearIcon ? (openBlock(), createBlock(_component_el_icon, {
            key: 0,
            class: "el-input__icon clear-icon",
            onClick: _ctx.onClearIconClick
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(_ctx.clearIcon)))
            ]),
            _: 1
          }, 8, ["onClick"])) : createCommentVNode("v-if", true)
        ]),
        _: 1
      }, 8, ["id", "model-value", "name", "size", "disabled", "placeholder", "class", "style", "readonly", "onInput", "onFocus", "onKeydown", "onChange", "onMouseenter", "onMouseleave"])) : (openBlock(), createElementBlock("div", {
        key: 1,
        ref: "inputRef",
        class: normalizeClass(["el-date-editor el-range-editor el-input__inner", [
          "el-date-editor--" + _ctx.type,
          _ctx.pickerSize ? `el-range-editor--${_ctx.pickerSize}` : "",
          _ctx.pickerDisabled ? "is-disabled" : "",
          _ctx.pickerVisible ? "is-active" : "",
          _ctx.$attrs.class || void 0
        ]]),
        style: normalizeStyle(_ctx.$attrs.style || void 0),
        onClick: _cache[7] || (_cache[7] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args)),
        onMouseenter: _cache[8] || (_cache[8] = (...args) => _ctx.onMouseEnter && _ctx.onMouseEnter(...args)),
        onMouseleave: _cache[9] || (_cache[9] = (...args) => _ctx.onMouseLeave && _ctx.onMouseLeave(...args)),
        onKeydown: _cache[10] || (_cache[10] = (...args) => _ctx.handleKeydown && _ctx.handleKeydown(...args))
      }, [
        _ctx.triggerIcon ? (openBlock(), createBlock(_component_el_icon, {
          key: 0,
          class: "el-input__icon el-range__icon",
          onClick: _ctx.handleFocus
        }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.triggerIcon)))
          ]),
          _: 1
        }, 8, ["onClick"])) : createCommentVNode("v-if", true),
        createElementVNode("input", {
          id: _ctx.id && _ctx.id[0],
          autocomplete: "off",
          name: _ctx.name && _ctx.name[0],
          placeholder: _ctx.startPlaceholder,
          value: _ctx.displayValue && _ctx.displayValue[0],
          disabled: _ctx.pickerDisabled,
          readonly: !_ctx.editable || _ctx.readonly,
          class: "el-range-input",
          onInput: _cache[1] || (_cache[1] = (...args) => _ctx.handleStartInput && _ctx.handleStartInput(...args)),
          onChange: _cache[2] || (_cache[2] = (...args) => _ctx.handleStartChange && _ctx.handleStartChange(...args)),
          onFocus: _cache[3] || (_cache[3] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args))
        }, null, 40, _hoisted_1$8),
        renderSlot(_ctx.$slots, "range-separator", {}, () => [
          createElementVNode("span", _hoisted_2$6, toDisplayString(_ctx.rangeSeparator), 1)
        ]),
        createElementVNode("input", {
          id: _ctx.id && _ctx.id[1],
          autocomplete: "off",
          name: _ctx.name && _ctx.name[1],
          placeholder: _ctx.endPlaceholder,
          value: _ctx.displayValue && _ctx.displayValue[1],
          disabled: _ctx.pickerDisabled,
          readonly: !_ctx.editable || _ctx.readonly,
          class: "el-range-input",
          onFocus: _cache[4] || (_cache[4] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args)),
          onInput: _cache[5] || (_cache[5] = (...args) => _ctx.handleEndInput && _ctx.handleEndInput(...args)),
          onChange: _cache[6] || (_cache[6] = (...args) => _ctx.handleEndChange && _ctx.handleEndChange(...args))
        }, null, 40, _hoisted_3$5),
        _ctx.clearIcon ? (openBlock(), createBlock(_component_el_icon, {
          key: 1,
          class: normalizeClass(["el-input__icon el-range__close-icon", {
            "el-range__close-icon--hidden": !_ctx.showClose
          }]),
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
  }, 16, ["visible", "popper-class", "popper-options", "onShow", "onHide"]);
}
var CommonPicker = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d]]);
const makeList = (total, method, methodFunc) => {
  const arr = [];
  const disabledArr = method && methodFunc();
  for (let i = 0; i < total; i++) {
    arr[i] = disabledArr ? disabledArr.includes(i) : false;
  }
  return arr;
};
const makeAvailableArr = (list) => {
  return list.map((_, index2) => !_ ? index2 : _).filter((_) => _ !== true);
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
const _sfc_main$d = defineComponent({
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
    const adjustSpinner = (type, value) => {
      if (props.arrowControl)
        return;
      const el = listRefsMap[type];
      if (el && el.$el) {
        el.$el.querySelector(".el-scrollbar__wrap").scrollTop = Math.max(0, value * typeItemHeight(type));
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
      let now2 = timePartsMap.value[label].value;
      const total = currentScrollbar.value === "hours" ? 24 : 60;
      now2 = (now2 + step + total) % total;
      modifyDateField(label, now2);
      adjustSpinner(label, now2);
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
      const value = Math.min(Math.round((listRefsMap[type].$el.querySelector(".el-scrollbar__wrap").scrollTop - (scrollBarHeight(type) * 0.5 - 10) / typeItemHeight(type) + 3) / typeItemHeight(type)), type === "hours" ? 23 : 59);
      modifyDateField(type, value);
    };
    const scrollBarHeight = (type) => {
      return listRefsMap[type].$el.offsetHeight;
    };
    const bindScrollEvent = () => {
      const bindFuntion = (type) => {
        if (listRefsMap[type] && listRefsMap[type].$el) {
          listRefsMap[type].$el.querySelector(".el-scrollbar__wrap").onscroll = () => {
            handleScroll(type);
          };
        }
      };
      bindFuntion("hours");
      bindFuntion("minutes");
      bindFuntion("seconds");
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
const _hoisted_1$7 = ["onClick"];
const _hoisted_2$5 = ["onMouseenter"];
const _hoisted_3$4 = { class: "el-time-spinner__list" };
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  const _component_arrow_up = resolveComponent("arrow-up");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_arrow_down = resolveComponent("arrow-down");
  const _directive_repeat_click = resolveDirective("repeat-click");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["el-time-spinner", { "has-seconds": _ctx.showSeconds }])
  }, [
    !_ctx.arrowControl ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(_ctx.spinnerItems, (item) => {
      return openBlock(), createBlock(_component_el_scrollbar, {
        key: item,
        ref_for: true,
        ref: (scollbar) => _ctx.setRef(scollbar, item),
        class: "el-time-spinner__wrapper",
        "wrap-style": "max-height: inherit;",
        "view-class": "el-time-spinner__list",
        noresize: "",
        tag: "ul",
        onMouseenter: ($event) => _ctx.emitSelectRange(item),
        onMousemove: ($event) => _ctx.adjustCurrentSpinner(item)
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.listMap[item].value, (disabled, key) => {
            return openBlock(), createElementBlock("li", {
              key,
              class: normalizeClass(["el-time-spinner__item", { active: key === _ctx.timePartsMap[item].value, disabled }]),
              onClick: ($event) => _ctx.handleClick(item, { value: key, disabled })
            }, [
              item === "hours" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createTextVNode(toDisplayString(("0" + (_ctx.amPmMode ? key % 12 || 12 : key)).slice(-2)) + toDisplayString(_ctx.getAmPmFlag(key)), 1)
              ], 2112)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createTextVNode(toDisplayString(("0" + key).slice(-2)), 1)
              ], 2112))
            ], 10, _hoisted_1$7);
          }), 128))
        ]),
        _: 2
      }, 1032, ["onMouseenter", "onMousemove"]);
    }), 128)) : createCommentVNode("v-if", true),
    _ctx.arrowControl ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(_ctx.spinnerItems, (item) => {
      return openBlock(), createElementBlock("div", {
        key: item,
        class: "el-time-spinner__wrapper is-arrow",
        onMouseenter: ($event) => _ctx.emitSelectRange(item)
      }, [
        withDirectives((openBlock(), createBlock(_component_el_icon, { class: "el-time-spinner__arrow arrow-up" }, {
          default: withCtx(() => [
            createVNode(_component_arrow_up)
          ]),
          _: 1
        })), [
          [_directive_repeat_click, _ctx.onDecreaseClick]
        ]),
        withDirectives((openBlock(), createBlock(_component_el_icon, { class: "el-time-spinner__arrow arrow-down" }, {
          default: withCtx(() => [
            createVNode(_component_arrow_down)
          ]),
          _: 1
        })), [
          [_directive_repeat_click, _ctx.onIncreaseClick]
        ]),
        createElementVNode("ul", _hoisted_3$4, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.arrowListMap[item].value, (time, key) => {
            return openBlock(), createElementBlock("li", {
              key,
              class: normalizeClass(["el-time-spinner__item", {
                active: time === _ctx.timePartsMap[item].value,
                disabled: _ctx.listMap[item].value[time]
              }])
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
        ])
      ], 40, _hoisted_2$5);
    }), 128)) : createCommentVNode("v-if", true)
  ], 2);
}
var TimeSpinner = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c]]);
const _sfc_main$c = defineComponent({
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
    const { t, lang } = useLocale();
    const selectionRange = ref([0, 2]);
    const oldValue = useOldValue(props);
    const transitionName = computed(() => {
      return props.actualVisible === void 0 ? "el-zoom-in-top" : "";
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
    const setSelectionRange = (start2, end2) => {
      ctx.emit("select-range", start2, end2);
      selectionRange.value = [start2, end2];
    };
    const changeSelectionRange = (step) => {
      const list = [0, 3].concat(showSeconds.value ? [6] : []);
      const mapping = ["hours", "minutes"].concat(showSeconds.value ? ["seconds"] : []);
      const index2 = list.indexOf(selectionRange.value[0]);
      const next = (index2 + step + list.length) % list.length;
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
const _hoisted_1$6 = {
  key: 0,
  class: "el-time-panel"
};
const _hoisted_2$4 = { class: "el-time-panel__footer" };
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_time_spinner = resolveComponent("time-spinner");
  return openBlock(), createBlock(Transition, { name: _ctx.transitionName }, {
    default: withCtx(() => [
      _ctx.actualVisible || _ctx.visible ? (openBlock(), createElementBlock("div", _hoisted_1$6, [
        createElementVNode("div", {
          class: normalizeClass(["el-time-panel__content", { "has-seconds": _ctx.showSeconds }])
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
        createElementVNode("div", _hoisted_2$4, [
          createElementVNode("button", {
            type: "button",
            class: "el-time-panel__btn cancel",
            onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleCancel && _ctx.handleCancel(...args))
          }, toDisplayString(_ctx.t("el.datepicker.cancel")), 1),
          createElementVNode("button", {
            type: "button",
            class: "el-time-panel__btn confirm",
            onClick: _cache[1] || (_cache[1] = ($event) => _ctx.handleConfirm())
          }, toDisplayString(_ctx.t("el.datepicker.confirm")), 1)
        ])
      ])) : createCommentVNode("v-if", true)
    ]),
    _: 1
  }, 8, ["name"]);
}
var TimePickPanel = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b]]);
const rangeArr = (n) => Array.from(Array(n).keys());
const extractDateFormat = (format) => {
  return format.replace(/\W?m{1,2}|\W?ZZ/g, "").replace(/\W?h{1,2}|\W?s{1,3}|\W?a/gi, "").trim();
};
const extractTimeFormat = (format) => {
  return format.replace(/\W?D{1,2}|\W?Do|\W?d{1,4}|\W?M{1,4}|\W?Y{2,4}/g, "").trim();
};
const _sfc_main$b = defineComponent({
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
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("section", {
    class: normalizeClass([_ctx.ns.b(), _ctx.ns.is("vertical", _ctx.isVertical)])
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var Container = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a]]);
const _sfc_main$a = defineComponent({
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
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("aside", {
    class: normalizeClass(_ctx.ns.b()),
    style: normalizeStyle(_ctx.style)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 6);
}
var Aside = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9]]);
const _sfc_main$9 = defineComponent({
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
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("footer", {
    class: normalizeClass(_ctx.ns.b()),
    style: normalizeStyle(_ctx.style)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 6);
}
var Footer = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8]]);
const _sfc_main$8 = defineComponent({
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
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("header", {
    class: normalizeClass(_ctx.ns.b()),
    style: normalizeStyle(_ctx.style)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 6);
}
var Header = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7]]);
const _sfc_main$7 = defineComponent({
  name: "ElMain",
  setup() {
    const ns = useNamespace("main");
    return {
      ns
    };
  }
});
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("main", {
    class: normalizeClass(_ctx.ns.b())
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var Main = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6]]);
const ElContainer = withInstall(Container, {
  Aside,
  Footer,
  Header,
  Main
});
withNoopInstall(Aside);
const ElFooter = withNoopInstall(Footer);
const ElHeader = withNoopInstall(Header);
const ElMain = withNoopInstall(Main);
var advancedFormat$1 = { exports: {} };
(function(module2, exports2) {
  !function(e, t) {
    module2.exports = t();
  }(commonjsGlobal, function() {
    return function(e, t, r) {
      var n = t.prototype, s = n.format;
      r.en.ordinal = function(e2) {
        var t2 = ["th", "st", "nd", "rd"], r2 = e2 % 100;
        return "[" + e2 + (t2[(r2 - 20) % 10] || t2[r2] || t2[0]) + "]";
      }, n.format = function(e2) {
        var t2 = this, r2 = this.$locale();
        if (!this.isValid())
          return s.bind(this)(e2);
        var n2 = this.$utils(), a = (e2 || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(e3) {
          switch (e3) {
            case "Q":
              return Math.ceil((t2.$M + 1) / 3);
            case "Do":
              return r2.ordinal(t2.$D);
            case "gggg":
              return t2.weekYear();
            case "GGGG":
              return t2.isoWeekYear();
            case "wo":
              return r2.ordinal(t2.week(), "W");
            case "w":
            case "ww":
              return n2.s(t2.week(), e3 === "w" ? 1 : 2, "0");
            case "W":
            case "WW":
              return n2.s(t2.isoWeek(), e3 === "W" ? 1 : 2, "0");
            case "k":
            case "kk":
              return n2.s(String(t2.$H === 0 ? 24 : t2.$H), e3 === "k" ? 1 : 2, "0");
            case "X":
              return Math.floor(t2.$d.getTime() / 1e3);
            case "x":
              return t2.$d.getTime();
            case "z":
              return "[" + t2.offsetName() + "]";
            case "zzz":
              return "[" + t2.offsetName("long") + "]";
            default:
              return e3;
          }
        });
        return s.bind(this)(a);
      };
    };
  });
})(advancedFormat$1);
var advancedFormat = advancedFormat$1.exports;
var weekOfYear$1 = { exports: {} };
(function(module2, exports2) {
  !function(e, t) {
    module2.exports = t();
  }(commonjsGlobal, function() {
    var e = "week", t = "year";
    return function(i, n, r) {
      var f = n.prototype;
      f.week = function(i2) {
        if (i2 === void 0 && (i2 = null), i2 !== null)
          return this.add(7 * (i2 - this.week()), "day");
        var n2 = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var f2 = r(this).startOf(t).add(1, t).date(n2), s = r(this).endOf(e);
          if (f2.isBefore(s))
            return 1;
        }
        var a = r(this).startOf(t).date(n2).startOf(e).subtract(1, "millisecond"), o = this.diff(a, e, true);
        return o < 0 ? r(this).startOf("week").week() : Math.ceil(o);
      }, f.weeks = function(e2) {
        return e2 === void 0 && (e2 = null), this.week(e2);
      };
    };
  });
})(weekOfYear$1);
var weekOfYear = weekOfYear$1.exports;
var weekYear$1 = { exports: {} };
(function(module2, exports2) {
  !function(e, t) {
    module2.exports = t();
  }(commonjsGlobal, function() {
    return function(e, t) {
      t.prototype.weekYear = function() {
        var e2 = this.month(), t2 = this.week(), n = this.year();
        return t2 === 1 && e2 === 11 ? n + 1 : e2 === 0 && t2 >= 52 ? n - 1 : n;
      };
    };
  });
})(weekYear$1);
var weekYear = weekYear$1.exports;
var dayOfYear$1 = { exports: {} };
(function(module2, exports2) {
  !function(e, t) {
    module2.exports = t();
  }(commonjsGlobal, function() {
    return function(e, t, n) {
      t.prototype.dayOfYear = function(e2) {
        var t2 = Math.round((n(this).startOf("day") - n(this).startOf("year")) / 864e5) + 1;
        return e2 == null ? t2 : this.add(e2 - t2, "day");
      };
    };
  });
})(dayOfYear$1);
var dayOfYear = dayOfYear$1.exports;
var isSameOrAfter$1 = { exports: {} };
(function(module2, exports2) {
  !function(e, t) {
    module2.exports = t();
  }(commonjsGlobal, function() {
    return function(e, t) {
      t.prototype.isSameOrAfter = function(e2, t2) {
        return this.isSame(e2, t2) || this.isAfter(e2, t2);
      };
    };
  });
})(isSameOrAfter$1);
var isSameOrAfter = isSameOrAfter$1.exports;
var isSameOrBefore$1 = { exports: {} };
(function(module2, exports2) {
  !function(e, i) {
    module2.exports = i();
  }(commonjsGlobal, function() {
    return function(e, i) {
      i.prototype.isSameOrBefore = function(e2, i2) {
        return this.isSame(e2, i2) || this.isBefore(e2, i2);
      };
    };
  });
})(isSameOrBefore$1);
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
      return h("div", {
        class: "el-date-table-cell"
      }, [
        h("span", {
          class: "el-date-table-cell__text"
        }, [cell == null ? void 0 : cell.text])
      ]);
    };
  }
});
const _sfc_main$6 = defineComponent({
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
      var _a2;
      const startOfMonth = props.date.startOf("month");
      const startOfMonthDay = startOfMonth.day() || 7;
      const dateCountOfMonth = startOfMonth.daysInMonth();
      const dateCountOfLastMonth = startOfMonth.subtract(1, "month").daysInMonth();
      const offset2 = offsetDay.value;
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
          const index2 = i * 7 + j;
          const calTime = startDate.value.add(index2 - offset2, "day");
          cell.dayjs = calTime;
          cell.date = calTime.toDate();
          cell.timestamp = calTime.valueOf();
          cell.type = "normal";
          const calEndDate = props.rangeState.endDate || props.maxDate || props.rangeState.selecting && props.minDate;
          cell.inRange = props.minDate && calTime.isSameOrAfter(props.minDate, "day") && calEndDate && calTime.isSameOrBefore(calEndDate, "day") || props.minDate && calTime.isSameOrBefore(props.minDate, "day") && calEndDate && calTime.isSameOrAfter(calEndDate, "day");
          if ((_a2 = props.minDate) == null ? void 0 : _a2.isSameOrAfter(calEndDate)) {
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
            const numberOfDaysFromPreviousMonth = startOfMonthDay + offset2 < 0 ? 7 + startOfMonthDay + offset2 : startOfMonthDay + offset2;
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
          const start2 = props.showWeekNumber ? 1 : 0;
          const end2 = props.showWeekNumber ? 7 : 6;
          const isActive = isWeekActive(row[start2 + 1]);
          row[start2].inRange = isActive;
          row[start2].start = isActive;
          row[end2].inRange = isActive;
          row[end2].end = isActive;
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
      newDate = newDate.date(parseInt(cell.text, 10));
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
const _hoisted_1$5 = { key: 0 };
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
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
        _ctx.showWeekNumber ? (openBlock(), createElementBlock("th", _hoisted_1$5, toDisplayString(_ctx.t("el.datepicker.week")), 1)) : createCommentVNode("v-if", true),
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
var DateTable = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5]]);
const datesInMonth = (year, month, lang) => {
  const firstDay = dayjs().locale(lang).startOf("month").month(month).year(year);
  const numOfDays = firstDay.daysInMonth();
  return rangeArr(numOfDays).map((n) => firstDay.add(n, "day").toDate());
};
const _sfc_main$5 = defineComponent({
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
      var _a2;
      const rows2 = tableRows.value;
      const now2 = dayjs().locale(lang.value).startOf("month");
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
          const index2 = i * 4 + j;
          const calTime = props.date.startOf("year").month(index2);
          const calEndDate = props.rangeState.endDate || props.maxDate || props.rangeState.selecting && props.minDate;
          cell.inRange = props.minDate && calTime.isSameOrAfter(props.minDate, "month") && calEndDate && calTime.isSameOrBefore(calEndDate, "month") || props.minDate && calTime.isSameOrBefore(props.minDate, "month") && calEndDate && calTime.isSameOrAfter(calEndDate, "month");
          if ((_a2 = props.minDate) == null ? void 0 : _a2.isSameOrAfter(calEndDate)) {
            cell.start = calEndDate && calTime.isSame(calEndDate, "month");
            cell.end = props.minDate && calTime.isSame(props.minDate, "month");
          } else {
            cell.start = props.minDate && calTime.isSame(props.minDate, "month");
            cell.end = calEndDate && calTime.isSame(calEndDate, "month");
          }
          const isToday = now2.isSame(calTime);
          if (isToday) {
            cell.type = "today";
          }
          cell.text = index2;
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
const _hoisted_1$4 = { class: "cell" };
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
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
                createElementVNode("a", _hoisted_1$4, toDisplayString(_ctx.t("el.datepicker.months." + _ctx.months[cell.text])), 1)
              ])
            ], 2);
          }), 128))
        ]);
      }), 128))
    ])
  ], 32);
}
var MonthTable = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4]]);
const datesInYear = (year, lang) => {
  const firstDay = dayjs(String(year)).locale(lang).startOf("year");
  const lastDay = firstDay.endOf("year");
  const numOfDays = lastDay.dayOfYear();
  return rangeArr(numOfDays).map((n) => firstDay.add(n, "day").toDate());
};
const _sfc_main$4 = defineComponent({
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
const _hoisted_1$3 = { class: "cell" };
const _hoisted_2$3 = { class: "cell" };
const _hoisted_3$3 = { class: "cell" };
const _hoisted_4$3 = { class: "cell" };
const _hoisted_5$3 = { class: "cell" };
const _hoisted_6$3 = { class: "cell" };
const _hoisted_7$3 = { class: "cell" };
const _hoisted_8$3 = { class: "cell" };
const _hoisted_9$3 = { class: "cell" };
const _hoisted_10$3 = { class: "cell" };
const _hoisted_11$2 = /* @__PURE__ */ createElementVNode("td", null, null, -1);
const _hoisted_12$2 = /* @__PURE__ */ createElementVNode("td", null, null, -1);
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("table", {
    class: "el-year-table",
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleYearTableClick && _ctx.handleYearTableClick(...args))
  }, [
    createElementVNode("tbody", null, [
      createElementVNode("tr", null, [
        createElementVNode("td", {
          class: normalizeClass(["available", _ctx.getCellStyle(_ctx.startYear + 0)])
        }, [
          createElementVNode("a", _hoisted_1$3, toDisplayString(_ctx.startYear), 1)
        ], 2),
        createElementVNode("td", {
          class: normalizeClass(["available", _ctx.getCellStyle(_ctx.startYear + 1)])
        }, [
          createElementVNode("a", _hoisted_2$3, toDisplayString(_ctx.startYear + 1), 1)
        ], 2),
        createElementVNode("td", {
          class: normalizeClass(["available", _ctx.getCellStyle(_ctx.startYear + 2)])
        }, [
          createElementVNode("a", _hoisted_3$3, toDisplayString(_ctx.startYear + 2), 1)
        ], 2),
        createElementVNode("td", {
          class: normalizeClass(["available", _ctx.getCellStyle(_ctx.startYear + 3)])
        }, [
          createElementVNode("a", _hoisted_4$3, toDisplayString(_ctx.startYear + 3), 1)
        ], 2)
      ]),
      createElementVNode("tr", null, [
        createElementVNode("td", {
          class: normalizeClass(["available", _ctx.getCellStyle(_ctx.startYear + 4)])
        }, [
          createElementVNode("a", _hoisted_5$3, toDisplayString(_ctx.startYear + 4), 1)
        ], 2),
        createElementVNode("td", {
          class: normalizeClass(["available", _ctx.getCellStyle(_ctx.startYear + 5)])
        }, [
          createElementVNode("a", _hoisted_6$3, toDisplayString(_ctx.startYear + 5), 1)
        ], 2),
        createElementVNode("td", {
          class: normalizeClass(["available", _ctx.getCellStyle(_ctx.startYear + 6)])
        }, [
          createElementVNode("a", _hoisted_7$3, toDisplayString(_ctx.startYear + 6), 1)
        ], 2),
        createElementVNode("td", {
          class: normalizeClass(["available", _ctx.getCellStyle(_ctx.startYear + 7)])
        }, [
          createElementVNode("a", _hoisted_8$3, toDisplayString(_ctx.startYear + 7), 1)
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
var YearTable = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3]]);
const timeWithinRange = (_, __, ___) => true;
const _sfc_main$3 = defineComponent({
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
    const popper2 = inject(TOOLTIP_INJECTION_KEY);
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
      popper2 == null ? void 0 : popper2.updatePopper();
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
      const now2 = dayjs().locale(lang.value);
      const nowDate = now2.toDate();
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
const _hoisted_1$2 = { class: "el-picker-panel__body-wrapper" };
const _hoisted_2$2 = {
  key: 0,
  class: "el-picker-panel__sidebar"
};
const _hoisted_3$2 = ["onClick"];
const _hoisted_4$2 = { class: "el-picker-panel__body" };
const _hoisted_5$2 = {
  key: 0,
  class: "el-date-picker__time-header"
};
const _hoisted_6$2 = { class: "el-date-picker__editor-wrap" };
const _hoisted_7$2 = { class: "el-date-picker__editor-wrap" };
const _hoisted_8$2 = ["aria-label"];
const _hoisted_9$2 = ["aria-label"];
const _hoisted_10$2 = ["aria-label"];
const _hoisted_11$1 = ["aria-label"];
const _hoisted_12$1 = { class: "el-picker-panel__content" };
const _hoisted_13$1 = { class: "el-picker-panel__footer" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
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
    createElementVNode("div", _hoisted_1$2, [
      renderSlot(_ctx.$slots, "sidebar", { class: "el-picker-panel__sidebar" }),
      _ctx.hasShortcuts ? (openBlock(), createElementBlock("div", _hoisted_2$2, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.shortcuts, (shortcut, key) => {
          return openBlock(), createElementBlock("button", {
            key,
            type: "button",
            class: "el-picker-panel__shortcut",
            onClick: ($event) => _ctx.handleShortcutClick(shortcut)
          }, toDisplayString(shortcut.text), 9, _hoisted_3$2);
        }), 128))
      ])) : createCommentVNode("v-if", true),
      createElementVNode("div", _hoisted_4$2, [
        _ctx.showTime ? (openBlock(), createElementBlock("div", _hoisted_5$2, [
          createElementVNode("span", _hoisted_6$2, [
            createVNode(_component_el_input, {
              placeholder: _ctx.t("el.datepicker.selectDate"),
              "model-value": _ctx.visibleDate,
              size: "small",
              onInput: _cache[0] || (_cache[0] = (val) => _ctx.userInputDate = val),
              onChange: _ctx.handleVisibleDateChange
            }, null, 8, ["placeholder", "model-value", "onChange"])
          ]),
          withDirectives((openBlock(), createElementBlock("span", _hoisted_7$2, [
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
          ], 8, _hoisted_8$2),
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
            onPick: _ctx.handleDatePick
          }, null, 8, ["selection-mode", "date", "parsed-value", "disabled-date", "onPick"])) : createCommentVNode("v-if", true),
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
var DatePickPanel = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2]]);
const _sfc_main$2 = defineComponent({
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
    const formatEmit = (emitDayjs, index2) => {
      if (!emitDayjs)
        return;
      if (defaultTime) {
        const defaultTimeD = dayjs(defaultTime[index2] || defaultTime).locale(lang.value);
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
      let start2;
      if (Array.isArray(defaultValue.value)) {
        const left2 = dayjs(defaultValue.value[0]);
        let right2 = dayjs(defaultValue.value[1]);
        if (!props.unlinkPanels) {
          right2 = left2.add(1, "month");
        }
        return [left2, right2];
      } else if (defaultValue.value) {
        start2 = dayjs(defaultValue.value);
      } else {
        start2 = dayjs();
      }
      start2 = start2.locale(lang.value);
      return [start2, start2.add(1, "month")];
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
const _hoisted_1$1 = { class: "el-picker-panel__body-wrapper" };
const _hoisted_2$1 = {
  key: 0,
  class: "el-picker-panel__sidebar"
};
const _hoisted_3$1 = ["onClick"];
const _hoisted_4$1 = { class: "el-picker-panel__body" };
const _hoisted_5$1 = {
  key: 0,
  class: "el-date-range-picker__time-header"
};
const _hoisted_6$1 = { class: "el-date-range-picker__editors-wrap" };
const _hoisted_7$1 = { class: "el-date-range-picker__time-picker-wrap" };
const _hoisted_8$1 = { class: "el-date-range-picker__time-picker-wrap" };
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
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
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
    createElementVNode("div", _hoisted_1$1, [
      renderSlot(_ctx.$slots, "sidebar", { class: "el-picker-panel__sidebar" }),
      _ctx.hasShortcuts ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.shortcuts, (shortcut, key) => {
          return openBlock(), createElementBlock("button", {
            key,
            type: "button",
            class: "el-picker-panel__shortcut",
            onClick: ($event) => _ctx.handleShortcutClick(shortcut)
          }, toDisplayString(shortcut.text), 9, _hoisted_3$1);
        }), 128))
      ])) : createCommentVNode("v-if", true),
      createElementVNode("div", _hoisted_4$1, [
        _ctx.showTime ? (openBlock(), createElementBlock("div", _hoisted_5$1, [
          createElementVNode("span", _hoisted_6$1, [
            createElementVNode("span", _hoisted_7$1, [
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
            withDirectives((openBlock(), createElementBlock("span", _hoisted_8$1, [
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
var DateRangePickPanel = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1]]);
const _sfc_main$1 = defineComponent({
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
      let start2;
      if (Array.isArray(defaultValue.value)) {
        const left2 = dayjs(defaultValue.value[0]);
        let right2 = dayjs(defaultValue.value[1]);
        if (!props.unlinkPanels) {
          right2 = left2.add(1, "year");
        }
        return [left2, right2];
      } else if (defaultValue.value) {
        start2 = dayjs(defaultValue.value);
      } else {
        start2 = dayjs();
      }
      start2 = start2.locale(lang.value);
      return [start2, start2.add(1, "year")];
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
const _hoisted_1 = { class: "el-picker-panel__body-wrapper" };
const _hoisted_2 = {
  key: 0,
  class: "el-picker-panel__sidebar"
};
const _hoisted_3 = ["onClick"];
const _hoisted_4 = { class: "el-picker-panel__body" };
const _hoisted_5 = { class: "el-picker-panel__content el-date-range-picker__content is-left" };
const _hoisted_6 = { class: "el-date-range-picker__header" };
const _hoisted_7 = ["disabled"];
const _hoisted_8 = { class: "el-picker-panel__content el-date-range-picker__content is-right" };
const _hoisted_9 = { class: "el-date-range-picker__header" };
const _hoisted_10 = ["disabled"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
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
    createElementVNode("div", _hoisted_1, [
      renderSlot(_ctx.$slots, "sidebar", { class: "el-picker-panel__sidebar" }),
      _ctx.hasShortcuts ? (openBlock(), createElementBlock("div", _hoisted_2, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.shortcuts, (shortcut, key) => {
          return openBlock(), createElementBlock("button", {
            key,
            type: "button",
            class: "el-picker-panel__shortcut",
            onClick: ($event) => _ctx.handleShortcutClick(shortcut)
          }, toDisplayString(shortcut.text), 9, _hoisted_3);
        }), 128))
      ])) : createCommentVNode("v-if", true),
      createElementVNode("div", _hoisted_4, [
        createElementVNode("div", _hoisted_5, [
          createElementVNode("div", _hoisted_6, [
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
            ], 10, _hoisted_7)) : createCommentVNode("v-if", true),
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
        createElementVNode("div", _hoisted_8, [
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
var MonthRangePickPanel = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
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
  props: __spreadProps(__spreadValues({}, timePickerDefaultProps), {
    type: {
      type: String,
      default: "date"
    }
  }),
  emits: ["update:modelValue"],
  setup(props, ctx) {
    provide("ElPopperOptions", props.popperOptions);
    provide(ROOT_PICKER_INJECTION_KEY, {
      ctx
    });
    const commonPicker = ref(null);
    const refProps = __spreadProps(__spreadValues({}, props), {
      focus: (focusStartInput = true) => {
        var _a2;
        (_a2 = commonPicker.value) == null ? void 0 : _a2.focus(focusStartInput);
      }
    });
    ctx.expose(refProps);
    return () => {
      var _a2;
      const format = (_a2 = props.format) != null ? _a2 : DEFAULT_FORMATS_DATEPICKER[props.type] || DEFAULT_FORMATS_DATE;
      return h(CommonPicker, __spreadProps(__spreadValues({}, props), {
        format,
        type: props.type,
        ref: commonPicker,
        "onUpdate:modelValue": (value) => ctx.emit("update:modelValue", value)
      }), {
        default: (scopedProps) => h(getPanel(props.type), scopedProps),
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
var index$1 = "";
const _sfc_main = {
  setup(__props) {
    const time = ref("");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElContainer), null, {
        default: withCtx(() => [
          createVNode(unref(ElHeader)),
          createVNode(unref(ElMain), null, {
            default: withCtx(() => [
              createVNode(unref(ElDatePicker), {
                type: "datetime",
                modelValue: time.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => time.value = $event)
              }, null, 8, ["modelValue"]),
              createElementVNode("p", null, toDisplayString(time.value), 1)
            ]),
            _: 1
          }),
          createVNode(unref(ElFooter))
        ]),
        _: 1
      });
    };
  }
};
var index = "";
const UI = {
  install(Vue) {
    Vue.component("UApp", _sfc_main);
  }
};
export { UI as default };
