/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);

/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + chunkId + "." + ({}[chunkId]||chunkId) + ".build.js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Created by Administrator on 2016/9/19 0019.
	 */
	var Vue = __webpack_require__(1);

	__webpack_require__(3);

	var VueRouter = __webpack_require__(389);

	Vue.use(VueRouter);

	/*Vue.component('app', require('./src/zhuanji.vue'));
	 Vue.component('vform',require('./src/addBizhi.vue'));
	 Vue.component('grid-child',require('./src/bizhiGuanli.vue'));
	 Vue.component('grid-child2',require('./src/wenjianGuanli.vue'));

	 new Vue({
	 el:'body'
	 })*/

	var App = Vue.extend({});

	var router = new VueRouter({
	    history: false,
	    waitForData: true
	});

	// 定义路由规则
	// 每条路由规则应该映射到一个组件。这里的“组件”可以是一个使用 Vue.extend
	// 创建的组件构造函数，也可以是一个组件选项对象。
	// 稍后我们会讲解嵌套路由

	var delay_t = 0;

	router.map({
	    '/PCbizhi': {
	        component: __webpack_require__(390),
	        subRoutes: {
	            '/app': {
	                component: function component(resolve) {
	                    setTimeout(function () {
	                        __webpack_require__.e/* require */(1, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(407)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	                    }, delay_t);
	                }
	            },
	            '/v-f': {
	                component: function component(resolve) {
	                    setTimeout(function () {
	                        __webpack_require__.e/* require */(2, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(422)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	                    }, delay_t);
	                }
	            },
	            '/grid-child1': {
	                name: 'pcBZGL',
	                component: function component(resolve) {
	                    setTimeout(function () {
	                        __webpack_require__.e/* require */(3, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(426)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	                    }, delay_t);
	                }
	            },
	            '/grid-child2': {
	                component: function component(resolve) {
	                    setTimeout(function () {
	                        __webpack_require__.e/* require */(4, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(431)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	                    }, delay_t);
	                }
	            },
	            '/b-upload1': {
	                component: function component(resolve) {
	                    setTimeout(function () {
	                        __webpack_require__.e/* require */(5, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(436)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	                    }, delay_t);
	                }
	            }
	        }
	    },
	    '/MOBILEbizhi': {
	        component: __webpack_require__(397),
	        subRoutes: {
	            '/ZHUANJI': {
	                component: function component(resolve) {
	                    setTimeout(function () {
	                        __webpack_require__.e/* require */(6, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(439)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	                    }, delay_t);
	                }
	            },
	            '/editZJ': {
	                component: function component(resolve) {
	                    setTimeout(function () {
	                        __webpack_require__.e/* require */(7, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(442)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	                    }, delay_t);
	                }
	            },
	            '/bizhiGuanli': {
	                component: function component(resolve) {
	                    setTimeout(function () {
	                        __webpack_require__.e/* require */(8, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(445)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	                    }, delay_t);
	                }
	            },
	            '/wenjianGuanli': {
	                component: function component(resolve) {
	                    setTimeout(function () {
	                        __webpack_require__.e/* require */(9, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(450)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	                    }, delay_t);
	                }
	            },
	            '/b-upload1': {
	                component: function component(resolve) {
	                    setTimeout(function () {
	                        __webpack_require__.e/* require */(7/* duplicate */, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(442)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	                    }, delay_t);
	                }
	            },
	            '/b-upload2': {
	                component: function component(resolve) {
	                    setTimeout(function () {
	                        __webpack_require__.e/* require */(10, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(455)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	                    }, delay_t);
	                }
	            }
	        }
	    },
	    '/CommonSetting': {
	        component: __webpack_require__(402),
	        subRoutes: {
	            '/bizhiFenlei': {
	                component: function component(resolve) {
	                    setTimeout(function () {
	                        __webpack_require__.e/* require */(11, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(458)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	                    }, delay_t);
	                }
	            },
	            '/zileiGuanli': {
	                component: function component(resolve) {
	                    setTimeout(function () {
	                        __webpack_require__.e/* require */(12, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(461)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	                    }, delay_t);
	                }
	            },
	            '/bizhiFenbianlv': {
	                component: function component(resolve) {
	                    setTimeout(function () {
	                        __webpack_require__.e/* require */(13, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(464)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	                    }, delay_t);
	                }
	            },
	            '/addSize': {
	                component: function component(resolve) {
	                    setTimeout(function () {
	                        __webpack_require__.e/* require */(14, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(467)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	                    }, delay_t);
	                }
	            },
	            '/bizhiSex': {
	                component: function component(resolve) {
	                    setTimeout(function () {
	                        __webpack_require__.e/* require */(15, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(470)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	                    }, delay_t);
	                }
	            },
	            'addColor': {
	                component: function component(resolve) {
	                    setTimeout(function () {
	                        __webpack_require__.e/* require */(16, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(473)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	                    }, delay_t);
	                }
	            },
	            'PPTguanli': {
	                component: function component(resolve) {
	                    setTimeout(function () {
	                        __webpack_require__.e/* require */(17, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(476)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	                    }, delay_t);
	                }
	            },
	            'addPPT': {
	                component: function component(resolve) {
	                    setTimeout(function () {
	                        __webpack_require__.e/* require */(18, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(481)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	                    }, delay_t);
	                }
	            }
	        }
	    }

	});

	// 现在我们可以启动应用了！
	// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
	router.start(App, 'body');

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/*!
	 * Vue.js v1.0.26
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	'use strict';

	function set(obj, key, val) {
	  if (hasOwn(obj, key)) {
	    obj[key] = val;
	    return;
	  }
	  if (obj._isVue) {
	    set(obj._data, key, val);
	    return;
	  }
	  var ob = obj.__ob__;
	  if (!ob) {
	    obj[key] = val;
	    return;
	  }
	  ob.convert(key, val);
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._proxy(key);
	      vm._digest();
	    }
	  }
	  return val;
	}

	/**
	 * Delete a property and trigger change if necessary.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 */

	function del(obj, key) {
	  if (!hasOwn(obj, key)) {
	    return;
	  }
	  delete obj[key];
	  var ob = obj.__ob__;
	  if (!ob) {
	    if (obj._isVue) {
	      delete obj._data[key];
	      obj._digest();
	    }
	    return;
	  }
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._unproxy(key);
	      vm._digest();
	    }
	  }
	}

	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	 * Check whether the object has the property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @return {Boolean}
	 */

	function hasOwn(obj, key) {
	  return hasOwnProperty.call(obj, key);
	}

	/**
	 * Check if an expression is a literal value.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */

	var literalValueRE = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/;

	function isLiteral(exp) {
	  return literalValueRE.test(exp);
	}

	/**
	 * Check if a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */

	function isReserved(str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F;
	}

	/**
	 * Guard text output, make sure undefined outputs
	 * empty string
	 *
	 * @param {*} value
	 * @return {String}
	 */

	function _toString(value) {
	  return value == null ? '' : value.toString();
	}

	/**
	 * Check and convert possible numeric strings to numbers
	 * before setting back to data
	 *
	 * @param {*} value
	 * @return {*|Number}
	 */

	function toNumber(value) {
	  if (typeof value !== 'string') {
	    return value;
	  } else {
	    var parsed = Number(value);
	    return isNaN(parsed) ? value : parsed;
	  }
	}

	/**
	 * Convert string boolean literals into real booleans.
	 *
	 * @param {*} value
	 * @return {*|Boolean}
	 */

	function toBoolean(value) {
	  return value === 'true' ? true : value === 'false' ? false : value;
	}

	/**
	 * Strip quotes from a string
	 *
	 * @param {String} str
	 * @return {String | false}
	 */

	function stripQuotes(str) {
	  var a = str.charCodeAt(0);
	  var b = str.charCodeAt(str.length - 1);
	  return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
	}

	/**
	 * Camelize a hyphen-delmited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var camelizeRE = /-(\w)/g;

	function camelize(str) {
	  return str.replace(camelizeRE, toUpper);
	}

	function toUpper(_, c) {
	  return c ? c.toUpperCase() : '';
	}

	/**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var hyphenateRE = /([a-z\d])([A-Z])/g;

	function hyphenate(str) {
	  return str.replace(hyphenateRE, '$1-$2').toLowerCase();
	}

	/**
	 * Converts hyphen/underscore/slash delimitered names into
	 * camelized classNames.
	 *
	 * e.g. my-component => MyComponent
	 *      some_else    => SomeElse
	 *      some/comp    => SomeComp
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var classifyRE = /(?:^|[-_\/])(\w)/g;

	function classify(str) {
	  return str.replace(classifyRE, toUpper);
	}

	/**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */

	function bind(fn, ctx) {
	  return function (a) {
	    var l = arguments.length;
	    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
	  };
	}

	/**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */

	function toArray(list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret;
	}

	/**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */

	function extend(to, from) {
	  var keys = Object.keys(from);
	  var i = keys.length;
	  while (i--) {
	    to[keys[i]] = from[keys[i]];
	  }
	  return to;
	}

	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	function isObject(obj) {
	  return obj !== null && typeof obj === 'object';
	}

	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';

	function isPlainObject(obj) {
	  return toString.call(obj) === OBJECT_STRING;
	}

	/**
	 * Array type check.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	var isArray = Array.isArray;

	/**
	 * Define a property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */

	function def(obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}

	/**
	 * Debounce a function so it only gets called after the
	 * input stops arriving after the given wait period.
	 *
	 * @param {Function} func
	 * @param {Number} wait
	 * @return {Function} - the debounced function
	 */

	function _debounce(func, wait) {
	  var timeout, args, context, timestamp, result;
	  var later = function later() {
	    var last = Date.now() - timestamp;
	    if (last < wait && last >= 0) {
	      timeout = setTimeout(later, wait - last);
	    } else {
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    }
	  };
	  return function () {
	    context = this;
	    args = arguments;
	    timestamp = Date.now();
	    if (!timeout) {
	      timeout = setTimeout(later, wait);
	    }
	    return result;
	  };
	}

	/**
	 * Manual indexOf because it's slightly faster than
	 * native.
	 *
	 * @param {Array} arr
	 * @param {*} obj
	 */

	function indexOf(arr, obj) {
	  var i = arr.length;
	  while (i--) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	}

	/**
	 * Make a cancellable version of an async callback.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */

	function cancellable(fn) {
	  var cb = function cb() {
	    if (!cb.cancelled) {
	      return fn.apply(this, arguments);
	    }
	  };
	  cb.cancel = function () {
	    cb.cancelled = true;
	  };
	  return cb;
	}

	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 *
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 */

	function looseEqual(a, b) {
	  /* eslint-disable eqeqeq */
	  return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
	  /* eslint-enable eqeqeq */
	}

	var hasProto = ('__proto__' in {});

	// Browser environment sniffing
	var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';

	// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

	// UA sniffing for working around browser-specific quirks
	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIE = UA && UA.indexOf('trident') > 0;
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	var isAndroid = UA && UA.indexOf('android') > 0;
	var isIos = UA && /(iphone|ipad|ipod|ios)/i.test(UA);
	var iosVersionMatch = isIos && UA.match(/os ([\d_]+)/);
	var iosVersion = iosVersionMatch && iosVersionMatch[1].split('_');

	// detecting iOS UIWebView by indexedDB
	var hasMutationObserverBug = iosVersion && Number(iosVersion[0]) >= 9 && Number(iosVersion[1]) >= 3 && !window.indexedDB;

	var transitionProp = undefined;
	var transitionEndEvent = undefined;
	var animationProp = undefined;
	var animationEndEvent = undefined;

	// Transition property/event sniffing
	if (inBrowser && !isIE9) {
	  var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
	  var isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
	  transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
	  transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
	  animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
	  animationEndEvent = isWebkitAnim ? 'webkitAnimationEnd' : 'animationend';
	}

	/**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, so we leverage
	 * MutationObserver if it's available, and fallback to
	 * setTimeout(0).
	 *
	 * @param {Function} cb
	 * @param {Object} ctx
	 */

	var nextTick = (function () {
	  var callbacks = [];
	  var pending = false;
	  var timerFunc;
	  function nextTickHandler() {
	    pending = false;
	    var copies = callbacks.slice(0);
	    callbacks = [];
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]();
	    }
	  }

	  /* istanbul ignore if */
	  if (typeof MutationObserver !== 'undefined' && !hasMutationObserverBug) {
	    var counter = 1;
	    var observer = new MutationObserver(nextTickHandler);
	    var textNode = document.createTextNode(counter);
	    observer.observe(textNode, {
	      characterData: true
	    });
	    timerFunc = function () {
	      counter = (counter + 1) % 2;
	      textNode.data = counter;
	    };
	  } else {
	    // webpack attempts to inject a shim for setImmediate
	    // if it is used as a global, so we have to work around that to
	    // avoid bundling unnecessary code.
	    var context = inBrowser ? window : typeof global !== 'undefined' ? global : {};
	    timerFunc = context.setImmediate || setTimeout;
	  }
	  return function (cb, ctx) {
	    var func = ctx ? function () {
	      cb.call(ctx);
	    } : cb;
	    callbacks.push(func);
	    if (pending) return;
	    pending = true;
	    timerFunc(nextTickHandler, 0);
	  };
	})();

	var _Set = undefined;
	/* istanbul ignore if */
	if (typeof Set !== 'undefined' && Set.toString().match(/native code/)) {
	  // use native Set when available.
	  _Set = Set;
	} else {
	  // a non-standard Set polyfill that only works with primitive keys.
	  _Set = function () {
	    this.set = Object.create(null);
	  };
	  _Set.prototype.has = function (key) {
	    return this.set[key] !== undefined;
	  };
	  _Set.prototype.add = function (key) {
	    this.set[key] = 1;
	  };
	  _Set.prototype.clear = function () {
	    this.set = Object.create(null);
	  };
	}

	function Cache(limit) {
	  this.size = 0;
	  this.limit = limit;
	  this.head = this.tail = undefined;
	  this._keymap = Object.create(null);
	}

	var p = Cache.prototype;

	/**
	 * Put <value> into the cache associated with <key>.
	 * Returns the entry which was removed to make room for
	 * the new entry. Otherwise undefined is returned.
	 * (i.e. if there was enough room already).
	 *
	 * @param {String} key
	 * @param {*} value
	 * @return {Entry|undefined}
	 */

	p.put = function (key, value) {
	  var removed;

	  var entry = this.get(key, true);
	  if (!entry) {
	    if (this.size === this.limit) {
	      removed = this.shift();
	    }
	    entry = {
	      key: key
	    };
	    this._keymap[key] = entry;
	    if (this.tail) {
	      this.tail.newer = entry;
	      entry.older = this.tail;
	    } else {
	      this.head = entry;
	    }
	    this.tail = entry;
	    this.size++;
	  }
	  entry.value = value;

	  return removed;
	};

	/**
	 * Purge the least recently used (oldest) entry from the
	 * cache. Returns the removed entry or undefined if the
	 * cache was empty.
	 */

	p.shift = function () {
	  var entry = this.head;
	  if (entry) {
	    this.head = this.head.newer;
	    this.head.older = undefined;
	    entry.newer = entry.older = undefined;
	    this._keymap[entry.key] = undefined;
	    this.size--;
	  }
	  return entry;
	};

	/**
	 * Get and register recent use of <key>. Returns the value
	 * associated with <key> or undefined if not in cache.
	 *
	 * @param {String} key
	 * @param {Boolean} returnEntry
	 * @return {Entry|*}
	 */

	p.get = function (key, returnEntry) {
	  var entry = this._keymap[key];
	  if (entry === undefined) return;
	  if (entry === this.tail) {
	    return returnEntry ? entry : entry.value;
	  }
	  // HEAD--------------TAIL
	  //   <.older   .newer>
	  //  <--- add direction --
	  //   A  B  C  <D>  E
	  if (entry.newer) {
	    if (entry === this.head) {
	      this.head = entry.newer;
	    }
	    entry.newer.older = entry.older; // C <-- E.
	  }
	  if (entry.older) {
	    entry.older.newer = entry.newer; // C. --> E
	  }
	  entry.newer = undefined; // D --x
	  entry.older = this.tail; // D. --> E
	  if (this.tail) {
	    this.tail.newer = entry; // E. <-- D
	  }
	  this.tail = entry;
	  return returnEntry ? entry : entry.value;
	};

	var cache$1 = new Cache(1000);
	var filterTokenRE = /[^\s'"]+|'[^']*'|"[^"]*"/g;
	var reservedArgRE = /^in$|^-?\d+/;

	/**
	 * Parser state
	 */

	var str;
	var dir;
	var c;
	var prev;
	var i;
	var l;
	var lastFilterIndex;
	var inSingle;
	var inDouble;
	var curly;
	var square;
	var paren;
	/**
	 * Push a filter to the current directive object
	 */

	function pushFilter() {
	  var exp = str.slice(lastFilterIndex, i).trim();
	  var filter;
	  if (exp) {
	    filter = {};
	    var tokens = exp.match(filterTokenRE);
	    filter.name = tokens[0];
	    if (tokens.length > 1) {
	      filter.args = tokens.slice(1).map(processFilterArg);
	    }
	  }
	  if (filter) {
	    (dir.filters = dir.filters || []).push(filter);
	  }
	  lastFilterIndex = i + 1;
	}

	/**
	 * Check if an argument is dynamic and strip quotes.
	 *
	 * @param {String} arg
	 * @return {Object}
	 */

	function processFilterArg(arg) {
	  if (reservedArgRE.test(arg)) {
	    return {
	      value: toNumber(arg),
	      dynamic: false
	    };
	  } else {
	    var stripped = stripQuotes(arg);
	    var dynamic = stripped === arg;
	    return {
	      value: dynamic ? arg : stripped,
	      dynamic: dynamic
	    };
	  }
	}

	/**
	 * Parse a directive value and extract the expression
	 * and its filters into a descriptor.
	 *
	 * Example:
	 *
	 * "a + 1 | uppercase" will yield:
	 * {
	 *   expression: 'a + 1',
	 *   filters: [
	 *     { name: 'uppercase', args: null }
	 *   ]
	 * }
	 *
	 * @param {String} s
	 * @return {Object}
	 */

	function parseDirective(s) {
	  var hit = cache$1.get(s);
	  if (hit) {
	    return hit;
	  }

	  // reset parser state
	  str = s;
	  inSingle = inDouble = false;
	  curly = square = paren = 0;
	  lastFilterIndex = 0;
	  dir = {};

	  for (i = 0, l = str.length; i < l; i++) {
	    prev = c;
	    c = str.charCodeAt(i);
	    if (inSingle) {
	      // check single quote
	      if (c === 0x27 && prev !== 0x5C) inSingle = !inSingle;
	    } else if (inDouble) {
	      // check double quote
	      if (c === 0x22 && prev !== 0x5C) inDouble = !inDouble;
	    } else if (c === 0x7C && // pipe
	    str.charCodeAt(i + 1) !== 0x7C && str.charCodeAt(i - 1) !== 0x7C) {
	      if (dir.expression == null) {
	        // first filter, end of expression
	        lastFilterIndex = i + 1;
	        dir.expression = str.slice(0, i).trim();
	      } else {
	        // already has filter
	        pushFilter();
	      }
	    } else {
	      switch (c) {
	        case 0x22:
	          inDouble = true;break; // "
	        case 0x27:
	          inSingle = true;break; // '
	        case 0x28:
	          paren++;break; // (
	        case 0x29:
	          paren--;break; // )
	        case 0x5B:
	          square++;break; // [
	        case 0x5D:
	          square--;break; // ]
	        case 0x7B:
	          curly++;break; // {
	        case 0x7D:
	          curly--;break; // }
	      }
	    }
	  }

	  if (dir.expression == null) {
	    dir.expression = str.slice(0, i).trim();
	  } else if (lastFilterIndex !== 0) {
	    pushFilter();
	  }

	  cache$1.put(s, dir);
	  return dir;
	}

	var directive = Object.freeze({
	  parseDirective: parseDirective
	});

	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	var cache = undefined;
	var tagRE = undefined;
	var htmlRE = undefined;
	/**
	 * Escape a string so it can be used in a RegExp
	 * constructor.
	 *
	 * @param {String} str
	 */

	function escapeRegex(str) {
	  return str.replace(regexEscapeRE, '\\$&');
	}

	function compileRegex() {
	  var open = escapeRegex(config.delimiters[0]);
	  var close = escapeRegex(config.delimiters[1]);
	  var unsafeOpen = escapeRegex(config.unsafeDelimiters[0]);
	  var unsafeClose = escapeRegex(config.unsafeDelimiters[1]);
	  tagRE = new RegExp(unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '|' + open + '((?:.|\\n)+?)' + close, 'g');
	  htmlRE = new RegExp('^' + unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '$');
	  // reset cache
	  cache = new Cache(1000);
	}

	/**
	 * Parse a template text string into an array of tokens.
	 *
	 * @param {String} text
	 * @return {Array<Object> | null}
	 *               - {String} type
	 *               - {String} value
	 *               - {Boolean} [html]
	 *               - {Boolean} [oneTime]
	 */

	function parseText(text) {
	  if (!cache) {
	    compileRegex();
	  }
	  var hit = cache.get(text);
	  if (hit) {
	    return hit;
	  }
	  if (!tagRE.test(text)) {
	    return null;
	  }
	  var tokens = [];
	  var lastIndex = tagRE.lastIndex = 0;
	  var match, index, html, value, first, oneTime;
	  /* eslint-disable no-cond-assign */
	  while (match = tagRE.exec(text)) {
	    /* eslint-enable no-cond-assign */
	    index = match.index;
	    // push text token
	    if (index > lastIndex) {
	      tokens.push({
	        value: text.slice(lastIndex, index)
	      });
	    }
	    // tag token
	    html = htmlRE.test(match[0]);
	    value = html ? match[1] : match[2];
	    first = value.charCodeAt(0);
	    oneTime = first === 42; // *
	    value = oneTime ? value.slice(1) : value;
	    tokens.push({
	      tag: true,
	      value: value.trim(),
	      html: html,
	      oneTime: oneTime
	    });
	    lastIndex = index + match[0].length;
	  }
	  if (lastIndex < text.length) {
	    tokens.push({
	      value: text.slice(lastIndex)
	    });
	  }
	  cache.put(text, tokens);
	  return tokens;
	}

	/**
	 * Format a list of tokens into an expression.
	 * e.g. tokens parsed from 'a {{b}} c' can be serialized
	 * into one single expression as '"a " + b + " c"'.
	 *
	 * @param {Array} tokens
	 * @param {Vue} [vm]
	 * @return {String}
	 */

	function tokensToExp(tokens, vm) {
	  if (tokens.length > 1) {
	    return tokens.map(function (token) {
	      return formatToken(token, vm);
	    }).join('+');
	  } else {
	    return formatToken(tokens[0], vm, true);
	  }
	}

	/**
	 * Format a single token.
	 *
	 * @param {Object} token
	 * @param {Vue} [vm]
	 * @param {Boolean} [single]
	 * @return {String}
	 */

	function formatToken(token, vm, single) {
	  return token.tag ? token.oneTime && vm ? '"' + vm.$eval(token.value) + '"' : inlineFilters(token.value, single) : '"' + token.value + '"';
	}

	/**
	 * For an attribute with multiple interpolation tags,
	 * e.g. attr="some-{{thing | filter}}", in order to combine
	 * the whole thing into a single watchable expression, we
	 * have to inline those filters. This function does exactly
	 * that. This is a bit hacky but it avoids heavy changes
	 * to directive parser and watcher mechanism.
	 *
	 * @param {String} exp
	 * @param {Boolean} single
	 * @return {String}
	 */

	var filterRE = /[^|]\|[^|]/;
	function inlineFilters(exp, single) {
	  if (!filterRE.test(exp)) {
	    return single ? exp : '(' + exp + ')';
	  } else {
	    var dir = parseDirective(exp);
	    if (!dir.filters) {
	      return '(' + exp + ')';
	    } else {
	      return 'this._applyFilters(' + dir.expression + // value
	      ',null,' + // oldValue (null for read)
	      JSON.stringify(dir.filters) + // filter descriptors
	      ',false)'; // write?
	    }
	  }
	}

	var text = Object.freeze({
	  compileRegex: compileRegex,
	  parseText: parseText,
	  tokensToExp: tokensToExp
	});

	var delimiters = ['{{', '}}'];
	var unsafeDelimiters = ['{{{', '}}}'];

	var config = Object.defineProperties({

	  /**
	   * Whether to print debug messages.
	   * Also enables stack trace for warnings.
	   *
	   * @type {Boolean}
	   */

	  debug: false,

	  /**
	   * Whether to suppress warnings.
	   *
	   * @type {Boolean}
	   */

	  silent: false,

	  /**
	   * Whether to use async rendering.
	   */

	  async: true,

	  /**
	   * Whether to warn against errors caught when evaluating
	   * expressions.
	   */

	  warnExpressionErrors: true,

	  /**
	   * Whether to allow devtools inspection.
	   * Disabled by default in production builds.
	   */

	  devtools: process.env.NODE_ENV !== 'production',

	  /**
	   * Internal flag to indicate the delimiters have been
	   * changed.
	   *
	   * @type {Boolean}
	   */

	  _delimitersChanged: true,

	  /**
	   * List of asset types that a component can own.
	   *
	   * @type {Array}
	   */

	  _assetTypes: ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial'],

	  /**
	   * prop binding modes
	   */

	  _propBindingModes: {
	    ONE_WAY: 0,
	    TWO_WAY: 1,
	    ONE_TIME: 2
	  },

	  /**
	   * Max circular updates allowed in a batcher flush cycle.
	   */

	  _maxUpdateCount: 100

	}, {
	  delimiters: { /**
	                 * Interpolation delimiters. Changing these would trigger
	                 * the text parser to re-compile the regular expressions.
	                 *
	                 * @type {Array<String>}
	                 */

	    get: function get() {
	      return delimiters;
	    },
	    set: function set(val) {
	      delimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  },
	  unsafeDelimiters: {
	    get: function get() {
	      return unsafeDelimiters;
	    },
	    set: function set(val) {
	      unsafeDelimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  }
	});

	var warn = undefined;
	var formatComponentName = undefined;

	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var hasConsole = typeof console !== 'undefined';

	    warn = function (msg, vm) {
	      if (hasConsole && !config.silent) {
	        console.error('[Vue warn]: ' + msg + (vm ? formatComponentName(vm) : ''));
	      }
	    };

	    formatComponentName = function (vm) {
	      var name = vm._isVue ? vm.$options.name : vm.name;
	      return name ? ' (found in component: <' + hyphenate(name) + '>)' : '';
	    };
	  })();
	}

	/**
	 * Append with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function appendWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    target.appendChild(el);
	  }, vm, cb);
	}

	/**
	 * InsertBefore with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function beforeWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    before(el, target);
	  }, vm, cb);
	}

	/**
	 * Remove with transition.
	 *
	 * @param {Element} el
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function removeWithTransition(el, vm, cb) {
	  applyTransition(el, -1, function () {
	    remove(el);
	  }, vm, cb);
	}

	/**
	 * Apply transitions with an operation callback.
	 *
	 * @param {Element} el
	 * @param {Number} direction
	 *                  1: enter
	 *                 -1: leave
	 * @param {Function} op - the actual DOM operation
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function applyTransition(el, direction, op, vm, cb) {
	  var transition = el.__v_trans;
	  if (!transition ||
	  // skip if there are no js hooks and CSS transition is
	  // not supported
	  !transition.hooks && !transitionEndEvent ||
	  // skip transitions for initial compile
	  !vm._isCompiled ||
	  // if the vm is being manipulated by a parent directive
	  // during the parent's compilation phase, skip the
	  // animation.
	  vm.$parent && !vm.$parent._isCompiled) {
	    op();
	    if (cb) cb();
	    return;
	  }
	  var action = direction > 0 ? 'enter' : 'leave';
	  transition[action](op, cb);
	}

	var transition = Object.freeze({
	  appendWithTransition: appendWithTransition,
	  beforeWithTransition: beforeWithTransition,
	  removeWithTransition: removeWithTransition,
	  applyTransition: applyTransition
	});

	/**
	 * Query an element selector if it's not an element already.
	 *
	 * @param {String|Element} el
	 * @return {Element}
	 */

	function query(el) {
	  if (typeof el === 'string') {
	    var selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + selector);
	    }
	  }
	  return el;
	}

	/**
	 * Check if a node is in the document.
	 * Note: document.documentElement.contains should work here
	 * but always returns false for comment nodes in phantomjs,
	 * making unit tests difficult. This is fixed by doing the
	 * contains() check on the node's parentNode instead of
	 * the node itself.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function inDoc(node) {
	  if (!node) return false;
	  var doc = node.ownerDocument.documentElement;
	  var parent = node.parentNode;
	  return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
	}

	/**
	 * Get and remove an attribute from a node.
	 *
	 * @param {Node} node
	 * @param {String} _attr
	 */

	function getAttr(node, _attr) {
	  var val = node.getAttribute(_attr);
	  if (val !== null) {
	    node.removeAttribute(_attr);
	  }
	  return val;
	}

	/**
	 * Get an attribute with colon or v-bind: prefix.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {String|null}
	 */

	function getBindAttr(node, name) {
	  var val = getAttr(node, ':' + name);
	  if (val === null) {
	    val = getAttr(node, 'v-bind:' + name);
	  }
	  return val;
	}

	/**
	 * Check the presence of a bind attribute.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {Boolean}
	 */

	function hasBindAttr(node, name) {
	  return node.hasAttribute(name) || node.hasAttribute(':' + name) || node.hasAttribute('v-bind:' + name);
	}

	/**
	 * Insert el before target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function before(el, target) {
	  target.parentNode.insertBefore(el, target);
	}

	/**
	 * Insert el after target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function after(el, target) {
	  if (target.nextSibling) {
	    before(el, target.nextSibling);
	  } else {
	    target.parentNode.appendChild(el);
	  }
	}

	/**
	 * Remove el from DOM
	 *
	 * @param {Element} el
	 */

	function remove(el) {
	  el.parentNode.removeChild(el);
	}

	/**
	 * Prepend el to target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function prepend(el, target) {
	  if (target.firstChild) {
	    before(el, target.firstChild);
	  } else {
	    target.appendChild(el);
	  }
	}

	/**
	 * Replace target with el
	 *
	 * @param {Element} target
	 * @param {Element} el
	 */

	function replace(target, el) {
	  var parent = target.parentNode;
	  if (parent) {
	    parent.replaceChild(el, target);
	  }
	}

	/**
	 * Add event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 * @param {Boolean} [useCapture]
	 */

	function on(el, event, cb, useCapture) {
	  el.addEventListener(event, cb, useCapture);
	}

	/**
	 * Remove event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */

	function off(el, event, cb) {
	  el.removeEventListener(event, cb);
	}

	/**
	 * For IE9 compat: when both class and :class are present
	 * getAttribute('class') returns wrong value...
	 *
	 * @param {Element} el
	 * @return {String}
	 */

	function getClass(el) {
	  var classname = el.className;
	  if (typeof classname === 'object') {
	    classname = classname.baseVal || '';
	  }
	  return classname;
	}

	/**
	 * In IE9, setAttribute('class') will result in empty class
	 * if the element also has the :class attribute; However in
	 * PhantomJS, setting `className` does not work on SVG elements...
	 * So we have to do a conditional check here.
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	function setClass(el, cls) {
	  /* istanbul ignore if */
	  if (isIE9 && !/svg$/.test(el.namespaceURI)) {
	    el.className = cls;
	  } else {
	    el.setAttribute('class', cls);
	  }
	}

	/**
	 * Add class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	function addClass(el, cls) {
	  if (el.classList) {
	    el.classList.add(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      setClass(el, (cur + cls).trim());
	    }
	  }
	}

	/**
	 * Remove class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	function removeClass(el, cls) {
	  if (el.classList) {
	    el.classList.remove(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    setClass(el, cur.trim());
	  }
	  if (!el.className) {
	    el.removeAttribute('class');
	  }
	}

	/**
	 * Extract raw content inside an element into a temporary
	 * container div
	 *
	 * @param {Element} el
	 * @param {Boolean} asFragment
	 * @return {Element|DocumentFragment}
	 */

	function extractContent(el, asFragment) {
	  var child;
	  var rawContent;
	  /* istanbul ignore if */
	  if (isTemplate(el) && isFragment(el.content)) {
	    el = el.content;
	  }
	  if (el.hasChildNodes()) {
	    trimNode(el);
	    rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
	    /* eslint-disable no-cond-assign */
	    while (child = el.firstChild) {
	      /* eslint-enable no-cond-assign */
	      rawContent.appendChild(child);
	    }
	  }
	  return rawContent;
	}

	/**
	 * Trim possible empty head/tail text and comment
	 * nodes inside a parent.
	 *
	 * @param {Node} node
	 */

	function trimNode(node) {
	  var child;
	  /* eslint-disable no-sequences */
	  while ((child = node.firstChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  while ((child = node.lastChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  /* eslint-enable no-sequences */
	}

	function isTrimmable(node) {
	  return node && (node.nodeType === 3 && !node.data.trim() || node.nodeType === 8);
	}

	/**
	 * Check if an element is a template tag.
	 * Note if the template appears inside an SVG its tagName
	 * will be in lowercase.
	 *
	 * @param {Element} el
	 */

	function isTemplate(el) {
	  return el.tagName && el.tagName.toLowerCase() === 'template';
	}

	/**
	 * Create an "anchor" for performing dom insertion/removals.
	 * This is used in a number of scenarios:
	 * - fragment instance
	 * - v-html
	 * - v-if
	 * - v-for
	 * - component
	 *
	 * @param {String} content
	 * @param {Boolean} persist - IE trashes empty textNodes on
	 *                            cloneNode(true), so in certain
	 *                            cases the anchor needs to be
	 *                            non-empty to be persisted in
	 *                            templates.
	 * @return {Comment|Text}
	 */

	function createAnchor(content, persist) {
	  var anchor = config.debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
	  anchor.__v_anchor = true;
	  return anchor;
	}

	/**
	 * Find a component ref attribute that starts with $.
	 *
	 * @param {Element} node
	 * @return {String|undefined}
	 */

	var refRE = /^v-ref:/;

	function findRef(node) {
	  if (node.hasAttributes()) {
	    var attrs = node.attributes;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      var name = attrs[i].name;
	      if (refRE.test(name)) {
	        return camelize(name.replace(refRE, ''));
	      }
	    }
	  }
	}

	/**
	 * Map a function to a range of nodes .
	 *
	 * @param {Node} node
	 * @param {Node} end
	 * @param {Function} op
	 */

	function mapNodeRange(node, end, op) {
	  var next;
	  while (node !== end) {
	    next = node.nextSibling;
	    op(node);
	    node = next;
	  }
	  op(end);
	}

	/**
	 * Remove a range of nodes with transition, store
	 * the nodes in a fragment with correct ordering,
	 * and call callback when done.
	 *
	 * @param {Node} start
	 * @param {Node} end
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Function} cb
	 */

	function removeNodeRange(start, end, vm, frag, cb) {
	  var done = false;
	  var removed = 0;
	  var nodes = [];
	  mapNodeRange(start, end, function (node) {
	    if (node === end) done = true;
	    nodes.push(node);
	    removeWithTransition(node, vm, onRemoved);
	  });
	  function onRemoved() {
	    removed++;
	    if (done && removed >= nodes.length) {
	      for (var i = 0; i < nodes.length; i++) {
	        frag.appendChild(nodes[i]);
	      }
	      cb && cb();
	    }
	  }
	}

	/**
	 * Check if a node is a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function isFragment(node) {
	  return node && node.nodeType === 11;
	}

	/**
	 * Get outerHTML of elements, taking care
	 * of SVG elements in IE as well.
	 *
	 * @param {Element} el
	 * @return {String}
	 */

	function getOuterHTML(el) {
	  if (el.outerHTML) {
	    return el.outerHTML;
	  } else {
	    var container = document.createElement('div');
	    container.appendChild(el.cloneNode(true));
	    return container.innerHTML;
	  }
	}

	var commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i;
	var reservedTagRE = /^(slot|partial|component)$/i;

	var isUnknownElement = undefined;
	if (process.env.NODE_ENV !== 'production') {
	  isUnknownElement = function (el, tag) {
	    if (tag.indexOf('-') > -1) {
	      // http://stackoverflow.com/a/28210364/1070244
	      return el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
	    } else {
	      return (/HTMLUnknownElement/.test(el.toString()) &&
	        // Chrome returns unknown for several HTML5 elements.
	        // https://code.google.com/p/chromium/issues/detail?id=540526
	        // Firefox returns unknown for some "Interactive elements."
	        !/^(data|time|rtc|rb|details|dialog|summary)$/.test(tag)
	      );
	    }
	  };
	}

	/**
	 * Check if an element is a component, if yes return its
	 * component id.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */

	function checkComponentAttr(el, options) {
	  var tag = el.tagName.toLowerCase();
	  var hasAttrs = el.hasAttributes();
	  if (!commonTagRE.test(tag) && !reservedTagRE.test(tag)) {
	    if (resolveAsset(options, 'components', tag)) {
	      return { id: tag };
	    } else {
	      var is = hasAttrs && getIsBinding(el, options);
	      if (is) {
	        return is;
	      } else if (process.env.NODE_ENV !== 'production') {
	        var expectedTag = options._componentNameMap && options._componentNameMap[tag];
	        if (expectedTag) {
	          warn('Unknown custom element: <' + tag + '> - ' + 'did you mean <' + expectedTag + '>? ' + 'HTML is case-insensitive, remember to use kebab-case in templates.');
	        } else if (isUnknownElement(el, tag)) {
	          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.');
	        }
	      }
	    }
	  } else if (hasAttrs) {
	    return getIsBinding(el, options);
	  }
	}

	/**
	 * Get "is" binding from an element.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */

	function getIsBinding(el, options) {
	  // dynamic syntax
	  var exp = el.getAttribute('is');
	  if (exp != null) {
	    if (resolveAsset(options, 'components', exp)) {
	      el.removeAttribute('is');
	      return { id: exp };
	    }
	  } else {
	    exp = getBindAttr(el, 'is');
	    if (exp != null) {
	      return { id: exp, dynamic: true };
	    }
	  }
	}

	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 *
	 * All strategy functions follow the same signature:
	 *
	 * @param {*} parentVal
	 * @param {*} childVal
	 * @param {Vue} [vm]
	 */

	var strats = config.optionMergeStrategies = Object.create(null);

	/**
	 * Helper that recursively merges two data objects together.
	 */

	function mergeData(to, from) {
	  var key, toVal, fromVal;
	  for (key in from) {
	    toVal = to[key];
	    fromVal = from[key];
	    if (!hasOwn(to, key)) {
	      set(to, key, fromVal);
	    } else if (isObject(toVal) && isObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to;
	}

	/**
	 * Data
	 */

	strats.data = function (parentVal, childVal, vm) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal;
	    }
	    if (typeof childVal !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
	      return parentVal;
	    }
	    if (!parentVal) {
	      return childVal;
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn() {
	      return mergeData(childVal.call(this), parentVal.call(this));
	    };
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn() {
	      // instance merge
	      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
	      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData);
	      } else {
	        return defaultData;
	      }
	    };
	  }
	};

	/**
	 * El
	 */

	strats.el = function (parentVal, childVal, vm) {
	  if (!vm && childVal && typeof childVal !== 'function') {
	    process.env.NODE_ENV !== 'production' && warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
	    return;
	  }
	  var ret = childVal || parentVal;
	  // invoke the element factory if this is instance merge
	  return vm && typeof ret === 'function' ? ret.call(vm) : ret;
	};

	/**
	 * Hooks and param attributes are merged as arrays.
	 */

	strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = strats.activate = function (parentVal, childVal) {
	  return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
	};

	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */

	function mergeAssets(parentVal, childVal) {
	  var res = Object.create(parentVal || null);
	  return childVal ? extend(res, guardArrayAssets(childVal)) : res;
	}

	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});

	/**
	 * Events & Watchers.
	 *
	 * Events & watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */

	strats.watch = strats.events = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key in childVal) {
	    var parent = ret[key];
	    var child = childVal[key];
	    if (parent && !isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key] = parent ? parent.concat(child) : [child];
	  }
	  return ret;
	};

	/**
	 * Other object hashes.
	 */

	strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  extend(ret, childVal);
	  return ret;
	};

	/**
	 * Default strategy.
	 */

	var defaultStrat = function defaultStrat(parentVal, childVal) {
	  return childVal === undefined ? parentVal : childVal;
	};

	/**
	 * Make sure component options get converted to actual
	 * constructors.
	 *
	 * @param {Object} options
	 */

	function guardComponents(options) {
	  if (options.components) {
	    var components = options.components = guardArrayAssets(options.components);
	    var ids = Object.keys(components);
	    var def;
	    if (process.env.NODE_ENV !== 'production') {
	      var map = options._componentNameMap = {};
	    }
	    for (var i = 0, l = ids.length; i < l; i++) {
	      var key = ids[i];
	      if (commonTagRE.test(key) || reservedTagRE.test(key)) {
	        process.env.NODE_ENV !== 'production' && warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
	        continue;
	      }
	      // record a all lowercase <-> kebab-case mapping for
	      // possible custom element case error warning
	      if (process.env.NODE_ENV !== 'production') {
	        map[key.replace(/-/g, '').toLowerCase()] = hyphenate(key);
	      }
	      def = components[key];
	      if (isPlainObject(def)) {
	        components[key] = Vue.extend(def);
	      }
	    }
	  }
	}

	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 *
	 * @param {Object} options
	 */

	function guardProps(options) {
	  var props = options.props;
	  var i, val;
	  if (isArray(props)) {
	    options.props = {};
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        options.props[val] = null;
	      } else if (val.name) {
	        options.props[val.name] = val;
	      }
	    }
	  } else if (isPlainObject(props)) {
	    var keys = Object.keys(props);
	    i = keys.length;
	    while (i--) {
	      val = props[keys[i]];
	      if (typeof val === 'function') {
	        props[keys[i]] = { type: val };
	      }
	    }
	  }
	}

	/**
	 * Guard an Array-format assets option and converted it
	 * into the key-value Object format.
	 *
	 * @param {Object|Array} assets
	 * @return {Object}
	 */

	function guardArrayAssets(assets) {
	  if (isArray(assets)) {
	    var res = {};
	    var i = assets.length;
	    var asset;
	    while (i--) {
	      asset = assets[i];
	      var id = typeof asset === 'function' ? asset.options && asset.options.name || asset.id : asset.name || asset.id;
	      if (!id) {
	        process.env.NODE_ENV !== 'production' && warn('Array-syntax assets must provide a "name" or "id" field.');
	      } else {
	        res[id] = asset;
	      }
	    }
	    return res;
	  }
	  return assets;
	}

	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 *
	 * @param {Object} parent
	 * @param {Object} child
	 * @param {Vue} [vm] - if vm is present, indicates this is
	 *                     an instantiation merge.
	 */

	function mergeOptions(parent, child, vm) {
	  guardComponents(child);
	  guardProps(child);
	  if (process.env.NODE_ENV !== 'production') {
	    if (child.propsData && !vm) {
	      warn('propsData can only be used as an instantiation option.');
	    }
	  }
	  var options = {};
	  var key;
	  if (child['extends']) {
	    parent = typeof child['extends'] === 'function' ? mergeOptions(parent, child['extends'].options, vm) : mergeOptions(parent, child['extends'], vm);
	  }
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      var mixin = child.mixins[i];
	      var mixinOptions = mixin.prototype instanceof Vue ? mixin.options : mixin;
	      parent = mergeOptions(parent, mixinOptions, vm);
	    }
	  }
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField(key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options;
	}

	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 *
	 * @param {Object} options
	 * @param {String} type
	 * @param {String} id
	 * @param {Boolean} warnMissing
	 * @return {Object|Function}
	 */

	function resolveAsset(options, type, id, warnMissing) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return;
	  }
	  var assets = options[type];
	  var camelizedId;
	  var res = assets[id] ||
	  // camelCase ID
	  assets[camelizedId = camelize(id)] ||
	  // Pascal Case ID
	  assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];
	  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
	    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
	  }
	  return res;
	}

	var uid$1 = 0;

	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */
	function Dep() {
	  this.id = uid$1++;
	  this.subs = [];
	}

	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;

	/**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */

	Dep.prototype.addSub = function (sub) {
	  this.subs.push(sub);
	};

	/**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */

	Dep.prototype.removeSub = function (sub) {
	  this.subs.$remove(sub);
	};

	/**
	 * Add self as a dependency to the target watcher.
	 */

	Dep.prototype.depend = function () {
	  Dep.target.addDep(this);
	};

	/**
	 * Notify all subscribers of a new value.
	 */

	Dep.prototype.notify = function () {
	  // stablize the subscriber list first
	  var subs = toArray(this.subs);
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};

	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto)

	/**
	 * Intercept mutating methods and emit events
	 */

	;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def(arrayMethods, method, function mutator() {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break;
	      case 'unshift':
	        inserted = args;
	        break;
	      case 'splice':
	        inserted = args.slice(2);
	        break;
	    }
	    if (inserted) ob.observeArray(inserted);
	    // notify change
	    ob.dep.notify();
	    return result;
	  });
	});

	/**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */

	def(arrayProto, '$set', function $set(index, val) {
	  if (index >= this.length) {
	    this.length = Number(index) + 1;
	  }
	  return this.splice(index, 1, val)[0];
	});

	/**
	 * Convenience method to remove the element at given index or target element reference.
	 *
	 * @param {*} item
	 */

	def(arrayProto, '$remove', function $remove(item) {
	  /* istanbul ignore if */
	  if (!this.length) return;
	  var index = indexOf(this, item);
	  if (index > -1) {
	    return this.splice(index, 1);
	  }
	});

	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

	/**
	 * By default, when a reactive property is set, the new value is
	 * also converted to become reactive. However in certain cases, e.g.
	 * v-for scope alias and props, we don't want to force conversion
	 * because the value may be a nested value under a frozen data structure.
	 *
	 * So whenever we want to set a reactive property without forcing
	 * conversion on the new value, we wrap that call inside this function.
	 */

	var shouldConvert = true;

	function withoutConversion(fn) {
	  shouldConvert = false;
	  fn();
	  shouldConvert = true;
	}

	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */

	function Observer(value) {
	  this.value = value;
	  this.dep = new Dep();
	  def(value, '__ob__', this);
	  if (isArray(value)) {
	    var augment = hasProto ? protoAugment : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	}

	// Instance methods

	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 *
	 * @param {Object} obj
	 */

	Observer.prototype.walk = function (obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    this.convert(keys[i], obj[keys[i]]);
	  }
	};

	/**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */

	Observer.prototype.observeArray = function (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};

	/**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */

	Observer.prototype.convert = function (key, val) {
	  defineReactive(this.value, key, val);
	};

	/**
	 * Add an owner vm, so that when $set/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */

	Observer.prototype.addVm = function (vm) {
	  (this.vms || (this.vms = [])).push(vm);
	};

	/**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */

	Observer.prototype.removeVm = function (vm) {
	  this.vms.$remove(vm);
	};

	// helpers

	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} src
	 */

	function protoAugment(target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}

	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */

	function copyAugment(target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    def(target, key, src[key]);
	  }
	}

	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */

	function observe(value, vm) {
	  if (!value || typeof value !== 'object') {
	    return;
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if (shouldConvert && (isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
	    ob = new Observer(value);
	  }
	  if (ob && vm) {
	    ob.addVm(vm);
	  }
	  return ob;
	}

	/**
	 * Define a reactive property on an Object.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 */

	function defineReactive(obj, key, val) {
	  var dep = new Dep();

	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return;
	  }

	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;

	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter() {
	      var value = getter ? getter.call(obj) : val;
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (isArray(value)) {
	          for (var e, i = 0, l = value.length; i < l; i++) {
	            e = value[i];
	            e && e.__ob__ && e.__ob__.dep.depend();
	          }
	        }
	      }
	      return value;
	    },
	    set: function reactiveSetter(newVal) {
	      var value = getter ? getter.call(obj) : val;
	      if (newVal === value) {
	        return;
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
	}



	var util = Object.freeze({
		defineReactive: defineReactive,
		set: set,
		del: del,
		hasOwn: hasOwn,
		isLiteral: isLiteral,
		isReserved: isReserved,
		_toString: _toString,
		toNumber: toNumber,
		toBoolean: toBoolean,
		stripQuotes: stripQuotes,
		camelize: camelize,
		hyphenate: hyphenate,
		classify: classify,
		bind: bind,
		toArray: toArray,
		extend: extend,
		isObject: isObject,
		isPlainObject: isPlainObject,
		def: def,
		debounce: _debounce,
		indexOf: indexOf,
		cancellable: cancellable,
		looseEqual: looseEqual,
		isArray: isArray,
		hasProto: hasProto,
		inBrowser: inBrowser,
		devtools: devtools,
		isIE: isIE,
		isIE9: isIE9,
		isAndroid: isAndroid,
		isIos: isIos,
		iosVersionMatch: iosVersionMatch,
		iosVersion: iosVersion,
		hasMutationObserverBug: hasMutationObserverBug,
		get transitionProp () { return transitionProp; },
		get transitionEndEvent () { return transitionEndEvent; },
		get animationProp () { return animationProp; },
		get animationEndEvent () { return animationEndEvent; },
		nextTick: nextTick,
		get _Set () { return _Set; },
		query: query,
		inDoc: inDoc,
		getAttr: getAttr,
		getBindAttr: getBindAttr,
		hasBindAttr: hasBindAttr,
		before: before,
		after: after,
		remove: remove,
		prepend: prepend,
		replace: replace,
		on: on,
		off: off,
		setClass: setClass,
		addClass: addClass,
		removeClass: removeClass,
		extractContent: extractContent,
		trimNode: trimNode,
		isTemplate: isTemplate,
		createAnchor: createAnchor,
		findRef: findRef,
		mapNodeRange: mapNodeRange,
		removeNodeRange: removeNodeRange,
		isFragment: isFragment,
		getOuterHTML: getOuterHTML,
		mergeOptions: mergeOptions,
		resolveAsset: resolveAsset,
		checkComponentAttr: checkComponentAttr,
		commonTagRE: commonTagRE,
		reservedTagRE: reservedTagRE,
		get warn () { return warn; }
	});

	var uid = 0;

	function initMixin (Vue) {
	  /**
	   * The main init sequence. This is called for every
	   * instance, including ones that are created from extended
	   * constructors.
	   *
	   * @param {Object} options - this options object should be
	   *                           the result of merging class
	   *                           options and the options passed
	   *                           in to the constructor.
	   */

	  Vue.prototype._init = function (options) {
	    options = options || {};

	    this.$el = null;
	    this.$parent = options.parent;
	    this.$root = this.$parent ? this.$parent.$root : this;
	    this.$children = [];
	    this.$refs = {}; // child vm references
	    this.$els = {}; // element references
	    this._watchers = []; // all watchers as an array
	    this._directives = []; // all directives

	    // a uid
	    this._uid = uid++;

	    // a flag to avoid this being observed
	    this._isVue = true;

	    // events bookkeeping
	    this._events = {}; // registered callbacks
	    this._eventsCount = {}; // for $broadcast optimization

	    // fragment instance properties
	    this._isFragment = false;
	    this._fragment = // @type {DocumentFragment}
	    this._fragmentStart = // @type {Text|Comment}
	    this._fragmentEnd = null; // @type {Text|Comment}

	    // lifecycle state
	    this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = false;
	    this._unlinkFn = null;

	    // context:
	    // if this is a transcluded component, context
	    // will be the common parent vm of this instance
	    // and its host.
	    this._context = options._context || this.$parent;

	    // scope:
	    // if this is inside an inline v-for, the scope
	    // will be the intermediate scope created for this
	    // repeat fragment. this is used for linking props
	    // and container directives.
	    this._scope = options._scope;

	    // fragment:
	    // if this instance is compiled inside a Fragment, it
	    // needs to reigster itself as a child of that fragment
	    // for attach/detach to work properly.
	    this._frag = options._frag;
	    if (this._frag) {
	      this._frag.children.push(this);
	    }

	    // push self into parent / transclusion host
	    if (this.$parent) {
	      this.$parent.$children.push(this);
	    }

	    // merge options.
	    options = this.$options = mergeOptions(this.constructor.options, options, this);

	    // set ref
	    this._updateRef();

	    // initialize data as empty object.
	    // it will be filled up in _initData().
	    this._data = {};

	    // call init hook
	    this._callHook('init');

	    // initialize data observation and scope inheritance.
	    this._initState();

	    // setup event system and option events.
	    this._initEvents();

	    // call created hook
	    this._callHook('created');

	    // if `el` option is passed, start compilation.
	    if (options.el) {
	      this.$mount(options.el);
	    }
	  };
	}

	var pathCache = new Cache(1000);

	// actions
	var APPEND = 0;
	var PUSH = 1;
	var INC_SUB_PATH_DEPTH = 2;
	var PUSH_SUB_PATH = 3;

	// states
	var BEFORE_PATH = 0;
	var IN_PATH = 1;
	var BEFORE_IDENT = 2;
	var IN_IDENT = 3;
	var IN_SUB_PATH = 4;
	var IN_SINGLE_QUOTE = 5;
	var IN_DOUBLE_QUOTE = 6;
	var AFTER_PATH = 7;
	var ERROR = 8;

	var pathStateMachine = [];

	pathStateMachine[BEFORE_PATH] = {
	  'ws': [BEFORE_PATH],
	  'ident': [IN_IDENT, APPEND],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};

	pathStateMachine[IN_PATH] = {
	  'ws': [IN_PATH],
	  '.': [BEFORE_IDENT],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};

	pathStateMachine[BEFORE_IDENT] = {
	  'ws': [BEFORE_IDENT],
	  'ident': [IN_IDENT, APPEND]
	};

	pathStateMachine[IN_IDENT] = {
	  'ident': [IN_IDENT, APPEND],
	  '0': [IN_IDENT, APPEND],
	  'number': [IN_IDENT, APPEND],
	  'ws': [IN_PATH, PUSH],
	  '.': [BEFORE_IDENT, PUSH],
	  '[': [IN_SUB_PATH, PUSH],
	  'eof': [AFTER_PATH, PUSH]
	};

	pathStateMachine[IN_SUB_PATH] = {
	  "'": [IN_SINGLE_QUOTE, APPEND],
	  '"': [IN_DOUBLE_QUOTE, APPEND],
	  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
	  ']': [IN_PATH, PUSH_SUB_PATH],
	  'eof': ERROR,
	  'else': [IN_SUB_PATH, APPEND]
	};

	pathStateMachine[IN_SINGLE_QUOTE] = {
	  "'": [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_SINGLE_QUOTE, APPEND]
	};

	pathStateMachine[IN_DOUBLE_QUOTE] = {
	  '"': [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_DOUBLE_QUOTE, APPEND]
	};

	/**
	 * Determine the type of a character in a keypath.
	 *
	 * @param {Char} ch
	 * @return {String} type
	 */

	function getPathCharType(ch) {
	  if (ch === undefined) {
	    return 'eof';
	  }

	  var code = ch.charCodeAt(0);

	  switch (code) {
	    case 0x5B: // [
	    case 0x5D: // ]
	    case 0x2E: // .
	    case 0x22: // "
	    case 0x27: // '
	    case 0x30:
	      // 0
	      return ch;

	    case 0x5F: // _
	    case 0x24:
	      // $
	      return 'ident';

	    case 0x20: // Space
	    case 0x09: // Tab
	    case 0x0A: // Newline
	    case 0x0D: // Return
	    case 0xA0: // No-break space
	    case 0xFEFF: // Byte Order Mark
	    case 0x2028: // Line Separator
	    case 0x2029:
	      // Paragraph Separator
	      return 'ws';
	  }

	  // a-z, A-Z
	  if (code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A) {
	    return 'ident';
	  }

	  // 1-9
	  if (code >= 0x31 && code <= 0x39) {
	    return 'number';
	  }

	  return 'else';
	}

	/**
	 * Format a subPath, return its plain form if it is
	 * a literal string or number. Otherwise prepend the
	 * dynamic indicator (*).
	 *
	 * @param {String} path
	 * @return {String}
	 */

	function formatSubPath(path) {
	  var trimmed = path.trim();
	  // invalid leading 0
	  if (path.charAt(0) === '0' && isNaN(path)) {
	    return false;
	  }
	  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed;
	}

	/**
	 * Parse a string path into an array of segments
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */

	function parse(path) {
	  var keys = [];
	  var index = -1;
	  var mode = BEFORE_PATH;
	  var subPathDepth = 0;
	  var c, newChar, key, type, transition, action, typeMap;

	  var actions = [];

	  actions[PUSH] = function () {
	    if (key !== undefined) {
	      keys.push(key);
	      key = undefined;
	    }
	  };

	  actions[APPEND] = function () {
	    if (key === undefined) {
	      key = newChar;
	    } else {
	      key += newChar;
	    }
	  };

	  actions[INC_SUB_PATH_DEPTH] = function () {
	    actions[APPEND]();
	    subPathDepth++;
	  };

	  actions[PUSH_SUB_PATH] = function () {
	    if (subPathDepth > 0) {
	      subPathDepth--;
	      mode = IN_SUB_PATH;
	      actions[APPEND]();
	    } else {
	      subPathDepth = 0;
	      key = formatSubPath(key);
	      if (key === false) {
	        return false;
	      } else {
	        actions[PUSH]();
	      }
	    }
	  };

	  function maybeUnescapeQuote() {
	    var nextChar = path[index + 1];
	    if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
	      index++;
	      newChar = '\\' + nextChar;
	      actions[APPEND]();
	      return true;
	    }
	  }

	  while (mode != null) {
	    index++;
	    c = path[index];

	    if (c === '\\' && maybeUnescapeQuote()) {
	      continue;
	    }

	    type = getPathCharType(c);
	    typeMap = pathStateMachine[mode];
	    transition = typeMap[type] || typeMap['else'] || ERROR;

	    if (transition === ERROR) {
	      return; // parse error
	    }

	    mode = transition[0];
	    action = actions[transition[1]];
	    if (action) {
	      newChar = transition[2];
	      newChar = newChar === undefined ? c : newChar;
	      if (action() === false) {
	        return;
	      }
	    }

	    if (mode === AFTER_PATH) {
	      keys.raw = path;
	      return keys;
	    }
	  }
	}

	/**
	 * External parse that check for a cache hit first
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */

	function parsePath(path) {
	  var hit = pathCache.get(path);
	  if (!hit) {
	    hit = parse(path);
	    if (hit) {
	      pathCache.put(path, hit);
	    }
	  }
	  return hit;
	}

	/**
	 * Get from an object from a path string
	 *
	 * @param {Object} obj
	 * @param {String} path
	 */

	function getPath(obj, path) {
	  return parseExpression(path).get(obj);
	}

	/**
	 * Warn against setting non-existent root path on a vm.
	 */

	var warnNonExistent;
	if (process.env.NODE_ENV !== 'production') {
	  warnNonExistent = function (path, vm) {
	    warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.', vm);
	  };
	}

	/**
	 * Set on an object from a path
	 *
	 * @param {Object} obj
	 * @param {String | Array} path
	 * @param {*} val
	 */

	function setPath(obj, path, val) {
	  var original = obj;
	  if (typeof path === 'string') {
	    path = parse(path);
	  }
	  if (!path || !isObject(obj)) {
	    return false;
	  }
	  var last, key;
	  for (var i = 0, l = path.length; i < l; i++) {
	    last = obj;
	    key = path[i];
	    if (key.charAt(0) === '*') {
	      key = parseExpression(key.slice(1)).get.call(original, original);
	    }
	    if (i < l - 1) {
	      obj = obj[key];
	      if (!isObject(obj)) {
	        obj = {};
	        if (process.env.NODE_ENV !== 'production' && last._isVue) {
	          warnNonExistent(path, last);
	        }
	        set(last, key, obj);
	      }
	    } else {
	      if (isArray(obj)) {
	        obj.$set(key, val);
	      } else if (key in obj) {
	        obj[key] = val;
	      } else {
	        if (process.env.NODE_ENV !== 'production' && obj._isVue) {
	          warnNonExistent(path, obj);
	        }
	        set(obj, key, val);
	      }
	    }
	  }
	  return true;
	}

	var path = Object.freeze({
	  parsePath: parsePath,
	  getPath: getPath,
	  setPath: setPath
	});

	var expressionCache = new Cache(1000);

	var allowedKeywords = 'Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';
	var allowedKeywordsRE = new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)');

	// keywords that don't make sense inside expressions
	var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'protected,static,interface,private,public';
	var improperKeywordsRE = new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)');

	var wsRE = /\s/g;
	var newlineRE = /\n/g;
	var saveRE = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g;
	var restoreRE = /"(\d+)"/g;
	var pathTestRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
	var identRE = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g;
	var literalValueRE$1 = /^(?:true|false|null|undefined|Infinity|NaN)$/;

	function noop() {}

	/**
	 * Save / Rewrite / Restore
	 *
	 * When rewriting paths found in an expression, it is
	 * possible for the same letter sequences to be found in
	 * strings and Object literal property keys. Therefore we
	 * remove and store these parts in a temporary array, and
	 * restore them after the path rewrite.
	 */

	var saved = [];

	/**
	 * Save replacer
	 *
	 * The save regex can match two possible cases:
	 * 1. An opening object literal
	 * 2. A string
	 * If matched as a plain string, we need to escape its
	 * newlines, since the string needs to be preserved when
	 * generating the function body.
	 *
	 * @param {String} str
	 * @param {String} isString - str if matched as a string
	 * @return {String} - placeholder with index
	 */

	function save(str, isString) {
	  var i = saved.length;
	  saved[i] = isString ? str.replace(newlineRE, '\\n') : str;
	  return '"' + i + '"';
	}

	/**
	 * Path rewrite replacer
	 *
	 * @param {String} raw
	 * @return {String}
	 */

	function rewrite(raw) {
	  var c = raw.charAt(0);
	  var path = raw.slice(1);
	  if (allowedKeywordsRE.test(path)) {
	    return raw;
	  } else {
	    path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
	    return c + 'scope.' + path;
	  }
	}

	/**
	 * Restore replacer
	 *
	 * @param {String} str
	 * @param {String} i - matched save index
	 * @return {String}
	 */

	function restore(str, i) {
	  return saved[i];
	}

	/**
	 * Rewrite an expression, prefixing all path accessors with
	 * `scope.` and generate getter/setter functions.
	 *
	 * @param {String} exp
	 * @return {Function}
	 */

	function compileGetter(exp) {
	  if (improperKeywordsRE.test(exp)) {
	    process.env.NODE_ENV !== 'production' && warn('Avoid using reserved keywords in expression: ' + exp);
	  }
	  // reset state
	  saved.length = 0;
	  // save strings and object literal keys
	  var body = exp.replace(saveRE, save).replace(wsRE, '');
	  // rewrite all paths
	  // pad 1 space here because the regex matches 1 extra char
	  body = (' ' + body).replace(identRE, rewrite).replace(restoreRE, restore);
	  return makeGetterFn(body);
	}

	/**
	 * Build a getter function. Requires eval.
	 *
	 * We isolate the try/catch so it doesn't affect the
	 * optimization of the parse function when it is not called.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */

	function makeGetterFn(body) {
	  try {
	    /* eslint-disable no-new-func */
	    return new Function('scope', 'return ' + body + ';');
	    /* eslint-enable no-new-func */
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production') {
	      /* istanbul ignore if */
	      if (e.toString().match(/unsafe-eval|CSP/)) {
	        warn('It seems you are using the default build of Vue.js in an environment ' + 'with Content Security Policy that prohibits unsafe-eval. ' + 'Use the CSP-compliant build instead: ' + 'http://vuejs.org/guide/installation.html#CSP-compliant-build');
	      } else {
	        warn('Invalid expression. ' + 'Generated function body: ' + body);
	      }
	    }
	    return noop;
	  }
	}

	/**
	 * Compile a setter function for the expression.
	 *
	 * @param {String} exp
	 * @return {Function|undefined}
	 */

	function compileSetter(exp) {
	  var path = parsePath(exp);
	  if (path) {
	    return function (scope, val) {
	      setPath(scope, path, val);
	    };
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid setter expression: ' + exp);
	  }
	}

	/**
	 * Parse an expression into re-written getter/setters.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */

	function parseExpression(exp, needSet) {
	  exp = exp.trim();
	  // try cache
	  var hit = expressionCache.get(exp);
	  if (hit) {
	    if (needSet && !hit.set) {
	      hit.set = compileSetter(hit.exp);
	    }
	    return hit;
	  }
	  var res = { exp: exp };
	  res.get = isSimplePath(exp) && exp.indexOf('[') < 0
	  // optimized super simple getter
	  ? makeGetterFn('scope.' + exp)
	  // dynamic getter
	  : compileGetter(exp);
	  if (needSet) {
	    res.set = compileSetter(exp);
	  }
	  expressionCache.put(exp, res);
	  return res;
	}

	/**
	 * Check if an expression is a simple path.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */

	function isSimplePath(exp) {
	  return pathTestRE.test(exp) &&
	  // don't treat literal values as paths
	  !literalValueRE$1.test(exp) &&
	  // Math constants e.g. Math.PI, Math.E etc.
	  exp.slice(0, 5) !== 'Math.';
	}

	var expression = Object.freeze({
	  parseExpression: parseExpression,
	  isSimplePath: isSimplePath
	});

	// we have two separate queues: one for directive updates
	// and one for user watcher registered via $watch().
	// we want to guarantee directive updates to be called
	// before user watchers so that when user watchers are
	// triggered, the DOM would have already been in updated
	// state.

	var queue = [];
	var userQueue = [];
	var has = {};
	var circular = {};
	var waiting = false;

	/**
	 * Reset the batcher's state.
	 */

	function resetBatcherState() {
	  queue.length = 0;
	  userQueue.length = 0;
	  has = {};
	  circular = {};
	  waiting = false;
	}

	/**
	 * Flush both queues and run the watchers.
	 */

	function flushBatcherQueue() {
	  var _again = true;

	  _function: while (_again) {
	    _again = false;

	    runBatcherQueue(queue);
	    runBatcherQueue(userQueue);
	    // user watchers triggered more watchers,
	    // keep flushing until it depletes
	    if (queue.length) {
	      _again = true;
	      continue _function;
	    }
	    // dev tool hook
	    /* istanbul ignore if */
	    if (devtools && config.devtools) {
	      devtools.emit('flush');
	    }
	    resetBatcherState();
	  }
	}

	/**
	 * Run the watchers in a single queue.
	 *
	 * @param {Array} queue
	 */

	function runBatcherQueue(queue) {
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (var i = 0; i < queue.length; i++) {
	    var watcher = queue[i];
	    var id = watcher.id;
	    has[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > config._maxUpdateCount) {
	        warn('You may have an infinite update loop for watcher ' + 'with expression "' + watcher.expression + '"', watcher.vm);
	        break;
	      }
	    }
	  }
	  queue.length = 0;
	}

	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 *
	 * @param {Watcher} watcher
	 *   properties:
	 *   - {Number} id
	 *   - {Function} run
	 */

	function pushWatcher(watcher) {
	  var id = watcher.id;
	  if (has[id] == null) {
	    // push watcher into appropriate queue
	    var q = watcher.user ? userQueue : queue;
	    has[id] = q.length;
	    q.push(watcher);
	    // queue the flush
	    if (!waiting) {
	      waiting = true;
	      nextTick(flushBatcherQueue);
	    }
	  }
	}

	var uid$2 = 0;

	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String|Function} expOrFn
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} sync
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 *                 - {Function} [postProcess]
	 * @constructor
	 */
	function Watcher(vm, expOrFn, cb, options) {
	  // mix in options
	  if (options) {
	    extend(this, options);
	  }
	  var isFn = typeof expOrFn === 'function';
	  this.vm = vm;
	  vm._watchers.push(this);
	  this.expression = expOrFn;
	  this.cb = cb;
	  this.id = ++uid$2; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = new _Set();
	  this.newDepIds = new _Set();
	  this.prevError = null; // for async error stacks
	  // parse expression for getter/setter
	  if (isFn) {
	    this.getter = expOrFn;
	    this.setter = undefined;
	  } else {
	    var res = parseExpression(expOrFn, this.twoWay);
	    this.getter = res.get;
	    this.setter = res.set;
	  }
	  this.value = this.lazy ? undefined : this.get();
	  // state for avoiding false triggers for deep and Array
	  // watchers during vm._digest()
	  this.queued = this.shallow = false;
	}

	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */

	Watcher.prototype.get = function () {
	  this.beforeGet();
	  var scope = this.scope || this.vm;
	  var value;
	  try {
	    value = this.getter.call(scope, scope);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating expression ' + '"' + this.expression + '": ' + e.toString(), this.vm);
	    }
	  }
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  if (this.preProcess) {
	    value = this.preProcess(value);
	  }
	  if (this.filters) {
	    value = scope._applyFilters(value, null, this.filters, false);
	  }
	  if (this.postProcess) {
	    value = this.postProcess(value);
	  }
	  this.afterGet();
	  return value;
	};

	/**
	 * Set the corresponding value with the setter.
	 *
	 * @param {*} value
	 */

	Watcher.prototype.set = function (value) {
	  var scope = this.scope || this.vm;
	  if (this.filters) {
	    value = scope._applyFilters(value, this.value, this.filters, true);
	  }
	  try {
	    this.setter.call(scope, scope, value);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating setter ' + '"' + this.expression + '": ' + e.toString(), this.vm);
	    }
	  }
	  // two-way sync for v-for alias
	  var forContext = scope.$forContext;
	  if (forContext && forContext.alias === this.expression) {
	    if (forContext.filters) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.', this.vm);
	      return;
	    }
	    forContext._withLock(function () {
	      if (scope.$key) {
	        // original is an object
	        forContext.rawValue[scope.$key] = value;
	      } else {
	        forContext.rawValue.$set(scope.$index, value);
	      }
	    });
	  }
	};

	/**
	 * Prepare for dependency collection.
	 */

	Watcher.prototype.beforeGet = function () {
	  Dep.target = this;
	};

	/**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */

	Watcher.prototype.addDep = function (dep) {
	  var id = dep.id;
	  if (!this.newDepIds.has(id)) {
	    this.newDepIds.add(id);
	    this.newDeps.push(dep);
	    if (!this.depIds.has(id)) {
	      dep.addSub(this);
	    }
	  }
	};

	/**
	 * Clean up for dependency collection.
	 */

	Watcher.prototype.afterGet = function () {
	  Dep.target = null;
	  var i = this.deps.length;
	  while (i--) {
	    var dep = this.deps[i];
	    if (!this.newDepIds.has(dep.id)) {
	      dep.removeSub(this);
	    }
	  }
	  var tmp = this.depIds;
	  this.depIds = this.newDepIds;
	  this.newDepIds = tmp;
	  this.newDepIds.clear();
	  tmp = this.deps;
	  this.deps = this.newDeps;
	  this.newDeps = tmp;
	  this.newDeps.length = 0;
	};

	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 *
	 * @param {Boolean} shallow
	 */

	Watcher.prototype.update = function (shallow) {
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync || !config.async) {
	    this.run();
	  } else {
	    // if queued, only overwrite shallow with non-shallow,
	    // but not the other way around.
	    this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
	    this.queued = true;
	    // record before-push error stack in debug mode
	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production' && config.debug) {
	      this.prevError = new Error('[vue] async stack trace');
	    }
	    pushWatcher(this);
	  }
	};

	/**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */

	Watcher.prototype.run = function () {
	  if (this.active) {
	    var value = this.get();
	    if (value !== this.value ||
	    // Deep watchers and watchers on Object/Arrays should fire even
	    // when the value is the same, because the value may
	    // have mutated; but only do so if this is a
	    // non-shallow update (caused by a vm digest).
	    (isObject(value) || this.deep) && !this.shallow) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      // in debug + async mode, when a watcher callbacks
	      // throws, we also throw the saved before-push error
	      // so the full cross-tick stack trace is available.
	      var prevError = this.prevError;
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && config.debug && prevError) {
	        this.prevError = null;
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          nextTick(function () {
	            throw prevError;
	          }, 0);
	          throw e;
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	    this.queued = this.shallow = false;
	  }
	};

	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */

	Watcher.prototype.evaluate = function () {
	  // avoid overwriting another watcher that is being
	  // collected.
	  var current = Dep.target;
	  this.value = this.get();
	  this.dirty = false;
	  Dep.target = current;
	};

	/**
	 * Depend on all deps collected by this watcher.
	 */

	Watcher.prototype.depend = function () {
	  var i = this.deps.length;
	  while (i--) {
	    this.deps[i].depend();
	  }
	};

	/**
	 * Remove self from all dependencies' subcriber list.
	 */

	Watcher.prototype.teardown = function () {
	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed or is performing a v-for
	    // re-render (the watcher list is then filtered by v-for).
	    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
	      this.vm._watchers.$remove(this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this.deps[i].removeSub(this);
	    }
	    this.active = false;
	    this.vm = this.cb = this.value = null;
	  }
	};

	/**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {*} val
	 */

	var seenObjects = new _Set();
	function traverse(val, seen) {
	  var i = undefined,
	      keys = undefined;
	  if (!seen) {
	    seen = seenObjects;
	    seen.clear();
	  }
	  var isA = isArray(val);
	  var isO = isObject(val);
	  if ((isA || isO) && Object.isExtensible(val)) {
	    if (val.__ob__) {
	      var depId = val.__ob__.dep.id;
	      if (seen.has(depId)) {
	        return;
	      } else {
	        seen.add(depId);
	      }
	    }
	    if (isA) {
	      i = val.length;
	      while (i--) traverse(val[i], seen);
	    } else if (isO) {
	      keys = Object.keys(val);
	      i = keys.length;
	      while (i--) traverse(val[keys[i]], seen);
	    }
	  }
	}

	var text$1 = {

	  bind: function bind() {
	    this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
	  },

	  update: function update(value) {
	    this.el[this.attr] = _toString(value);
	  }
	};

	var templateCache = new Cache(1000);
	var idSelectorCache = new Cache(1000);

	var map = {
	  efault: [0, '', ''],
	  legend: [1, '<fieldset>', '</fieldset>'],
	  tr: [2, '<table><tbody>', '</tbody></table>'],
	  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
	};

	map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

	map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];

	map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];

	map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1, '<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', '</svg>'];

	/**
	 * Check if a node is a supported template node with a
	 * DocumentFragment content.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function isRealTemplate(node) {
	  return isTemplate(node) && isFragment(node.content);
	}

	var tagRE$1 = /<([\w:-]+)/;
	var entityRE = /&#?\w+?;/;
	var commentRE = /<!--/;

	/**
	 * Convert a string template to a DocumentFragment.
	 * Determines correct wrapping by tag types. Wrapping
	 * strategy found in jQuery & component/domify.
	 *
	 * @param {String} templateString
	 * @param {Boolean} raw
	 * @return {DocumentFragment}
	 */

	function stringToFragment(templateString, raw) {
	  // try a cache hit first
	  var cacheKey = raw ? templateString : templateString.trim();
	  var hit = templateCache.get(cacheKey);
	  if (hit) {
	    return hit;
	  }

	  var frag = document.createDocumentFragment();
	  var tagMatch = templateString.match(tagRE$1);
	  var entityMatch = entityRE.test(templateString);
	  var commentMatch = commentRE.test(templateString);

	  if (!tagMatch && !entityMatch && !commentMatch) {
	    // text only, return a single text node.
	    frag.appendChild(document.createTextNode(templateString));
	  } else {
	    var tag = tagMatch && tagMatch[1];
	    var wrap = map[tag] || map.efault;
	    var depth = wrap[0];
	    var prefix = wrap[1];
	    var suffix = wrap[2];
	    var node = document.createElement('div');

	    node.innerHTML = prefix + templateString + suffix;
	    while (depth--) {
	      node = node.lastChild;
	    }

	    var child;
	    /* eslint-disable no-cond-assign */
	    while (child = node.firstChild) {
	      /* eslint-enable no-cond-assign */
	      frag.appendChild(child);
	    }
	  }
	  if (!raw) {
	    trimNode(frag);
	  }
	  templateCache.put(cacheKey, frag);
	  return frag;
	}

	/**
	 * Convert a template node to a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {DocumentFragment}
	 */

	function nodeToFragment(node) {
	  // if its a template tag and the browser supports it,
	  // its content is already a document fragment. However, iOS Safari has
	  // bug when using directly cloned template content with touch
	  // events and can cause crashes when the nodes are removed from DOM, so we
	  // have to treat template elements as string templates. (#2805)
	  /* istanbul ignore if */
	  if (isRealTemplate(node)) {
	    return stringToFragment(node.innerHTML);
	  }
	  // script template
	  if (node.tagName === 'SCRIPT') {
	    return stringToFragment(node.textContent);
	  }
	  // normal node, clone it to avoid mutating the original
	  var clonedNode = cloneNode(node);
	  var frag = document.createDocumentFragment();
	  var child;
	  /* eslint-disable no-cond-assign */
	  while (child = clonedNode.firstChild) {
	    /* eslint-enable no-cond-assign */
	    frag.appendChild(child);
	  }
	  trimNode(frag);
	  return frag;
	}

	// Test for the presence of the Safari template cloning bug
	// https://bugs.webkit.org/showug.cgi?id=137755
	var hasBrokenTemplate = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var a = document.createElement('div');
	    a.innerHTML = '<template>1</template>';
	    return !a.cloneNode(true).firstChild.innerHTML;
	  } else {
	    return false;
	  }
	})();

	// Test for IE10/11 textarea placeholder clone bug
	var hasTextareaCloneBug = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var t = document.createElement('textarea');
	    t.placeholder = 't';
	    return t.cloneNode(true).value === 't';
	  } else {
	    return false;
	  }
	})();

	/**
	 * 1. Deal with Safari cloning nested <template> bug by
	 *    manually cloning all template instances.
	 * 2. Deal with IE10/11 textarea placeholder bug by setting
	 *    the correct value after cloning.
	 *
	 * @param {Element|DocumentFragment} node
	 * @return {Element|DocumentFragment}
	 */

	function cloneNode(node) {
	  /* istanbul ignore if */
	  if (!node.querySelectorAll) {
	    return node.cloneNode();
	  }
	  var res = node.cloneNode(true);
	  var i, original, cloned;
	  /* istanbul ignore if */
	  if (hasBrokenTemplate) {
	    var tempClone = res;
	    if (isRealTemplate(node)) {
	      node = node.content;
	      tempClone = res.content;
	    }
	    original = node.querySelectorAll('template');
	    if (original.length) {
	      cloned = tempClone.querySelectorAll('template');
	      i = cloned.length;
	      while (i--) {
	        cloned[i].parentNode.replaceChild(cloneNode(original[i]), cloned[i]);
	      }
	    }
	  }
	  /* istanbul ignore if */
	  if (hasTextareaCloneBug) {
	    if (node.tagName === 'TEXTAREA') {
	      res.value = node.value;
	    } else {
	      original = node.querySelectorAll('textarea');
	      if (original.length) {
	        cloned = res.querySelectorAll('textarea');
	        i = cloned.length;
	        while (i--) {
	          cloned[i].value = original[i].value;
	        }
	      }
	    }
	  }
	  return res;
	}

	/**
	 * Process the template option and normalizes it into a
	 * a DocumentFragment that can be used as a partial or a
	 * instance template.
	 *
	 * @param {*} template
	 *        Possible values include:
	 *        - DocumentFragment object
	 *        - Node object of type Template
	 *        - id selector: '#some-template-id'
	 *        - template string: '<div><span>{{msg}}</span></div>'
	 * @param {Boolean} shouldClone
	 * @param {Boolean} raw
	 *        inline HTML interpolation. Do not check for id
	 *        selector and keep whitespace in the string.
	 * @return {DocumentFragment|undefined}
	 */

	function parseTemplate(template, shouldClone, raw) {
	  var node, frag;

	  // if the template is already a document fragment,
	  // do nothing
	  if (isFragment(template)) {
	    trimNode(template);
	    return shouldClone ? cloneNode(template) : template;
	  }

	  if (typeof template === 'string') {
	    // id selector
	    if (!raw && template.charAt(0) === '#') {
	      // id selector can be cached too
	      frag = idSelectorCache.get(template);
	      if (!frag) {
	        node = document.getElementById(template.slice(1));
	        if (node) {
	          frag = nodeToFragment(node);
	          // save selector to cache
	          idSelectorCache.put(template, frag);
	        }
	      }
	    } else {
	      // normal string template
	      frag = stringToFragment(template, raw);
	    }
	  } else if (template.nodeType) {
	    // a direct node
	    frag = nodeToFragment(template);
	  }

	  return frag && shouldClone ? cloneNode(frag) : frag;
	}

	var template = Object.freeze({
	  cloneNode: cloneNode,
	  parseTemplate: parseTemplate
	});

	var html = {

	  bind: function bind() {
	    // a comment node means this is a binding for
	    // {{{ inline unescaped html }}}
	    if (this.el.nodeType === 8) {
	      // hold nodes
	      this.nodes = [];
	      // replace the placeholder with proper anchor
	      this.anchor = createAnchor('v-html');
	      replace(this.el, this.anchor);
	    }
	  },

	  update: function update(value) {
	    value = _toString(value);
	    if (this.nodes) {
	      this.swap(value);
	    } else {
	      this.el.innerHTML = value;
	    }
	  },

	  swap: function swap(value) {
	    // remove old nodes
	    var i = this.nodes.length;
	    while (i--) {
	      remove(this.nodes[i]);
	    }
	    // convert new value to a fragment
	    // do not attempt to retrieve from id selector
	    var frag = parseTemplate(value, true, true);
	    // save a reference to these nodes so we can remove later
	    this.nodes = toArray(frag.childNodes);
	    before(frag, this.anchor);
	  }
	};

	/**
	 * Abstraction for a partially-compiled fragment.
	 * Can optionally compile content with a child scope.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Vue} [host]
	 * @param {Object} [scope]
	 * @param {Fragment} [parentFrag]
	 */
	function Fragment(linker, vm, frag, host, scope, parentFrag) {
	  this.children = [];
	  this.childFrags = [];
	  this.vm = vm;
	  this.scope = scope;
	  this.inserted = false;
	  this.parentFrag = parentFrag;
	  if (parentFrag) {
	    parentFrag.childFrags.push(this);
	  }
	  this.unlink = linker(vm, frag, host, scope, this);
	  var single = this.single = frag.childNodes.length === 1 &&
	  // do not go single mode if the only node is an anchor
	  !frag.childNodes[0].__v_anchor;
	  if (single) {
	    this.node = frag.childNodes[0];
	    this.before = singleBefore;
	    this.remove = singleRemove;
	  } else {
	    this.node = createAnchor('fragment-start');
	    this.end = createAnchor('fragment-end');
	    this.frag = frag;
	    prepend(this.node, frag);
	    frag.appendChild(this.end);
	    this.before = multiBefore;
	    this.remove = multiRemove;
	  }
	  this.node.__v_frag = this;
	}

	/**
	 * Call attach/detach for all components contained within
	 * this fragment. Also do so recursively for all child
	 * fragments.
	 *
	 * @param {Function} hook
	 */

	Fragment.prototype.callHook = function (hook) {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    this.childFrags[i].callHook(hook);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    hook(this.children[i]);
	  }
	};

	/**
	 * Insert fragment before target, single node version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */

	function singleBefore(target, withTransition) {
	  this.inserted = true;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  method(this.node, target, this.vm);
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}

	/**
	 * Remove fragment, single node version
	 */

	function singleRemove() {
	  this.inserted = false;
	  var shouldCallRemove = inDoc(this.node);
	  var self = this;
	  this.beforeRemove();
	  removeWithTransition(this.node, this.vm, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}

	/**
	 * Insert fragment before target, multi-nodes version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */

	function multiBefore(target, withTransition) {
	  this.inserted = true;
	  var vm = this.vm;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  mapNodeRange(this.node, this.end, function (node) {
	    method(node, target, vm);
	  });
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}

	/**
	 * Remove fragment, multi-nodes version
	 */

	function multiRemove() {
	  this.inserted = false;
	  var self = this;
	  var shouldCallRemove = inDoc(this.node);
	  this.beforeRemove();
	  removeNodeRange(this.node, this.end, this.vm, this.frag, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}

	/**
	 * Prepare the fragment for removal.
	 */

	Fragment.prototype.beforeRemove = function () {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    // call the same method recursively on child
	    // fragments, depth-first
	    this.childFrags[i].beforeRemove(false);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    // Call destroy for all contained instances,
	    // with remove:false and defer:true.
	    // Defer is necessary because we need to
	    // keep the children to call detach hooks
	    // on them.
	    this.children[i].$destroy(false, true);
	  }
	  var dirs = this.unlink.dirs;
	  for (i = 0, l = dirs.length; i < l; i++) {
	    // disable the watchers on all the directives
	    // so that the rendered content stays the same
	    // during removal.
	    dirs[i]._watcher && dirs[i]._watcher.teardown();
	  }
	};

	/**
	 * Destroy the fragment.
	 */

	Fragment.prototype.destroy = function () {
	  if (this.parentFrag) {
	    this.parentFrag.childFrags.$remove(this);
	  }
	  this.node.__v_frag = null;
	  this.unlink();
	};

	/**
	 * Call attach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */

	function attach(child) {
	  if (!child._isAttached && inDoc(child.$el)) {
	    child._callHook('attached');
	  }
	}

	/**
	 * Call detach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */

	function detach(child) {
	  if (child._isAttached && !inDoc(child.$el)) {
	    child._callHook('detached');
	  }
	}

	var linkerCache = new Cache(5000);

	/**
	 * A factory that can be used to create instances of a
	 * fragment. Caches the compiled linker if possible.
	 *
	 * @param {Vue} vm
	 * @param {Element|String} el
	 */
	function FragmentFactory(vm, el) {
	  this.vm = vm;
	  var template;
	  var isString = typeof el === 'string';
	  if (isString || isTemplate(el) && !el.hasAttribute('v-if')) {
	    template = parseTemplate(el, true);
	  } else {
	    template = document.createDocumentFragment();
	    template.appendChild(el);
	  }
	  this.template = template;
	  // linker can be cached, but only for components
	  var linker;
	  var cid = vm.constructor.cid;
	  if (cid > 0) {
	    var cacheId = cid + (isString ? el : getOuterHTML(el));
	    linker = linkerCache.get(cacheId);
	    if (!linker) {
	      linker = compile(template, vm.$options, true);
	      linkerCache.put(cacheId, linker);
	    }
	  } else {
	    linker = compile(template, vm.$options, true);
	  }
	  this.linker = linker;
	}

	/**
	 * Create a fragment instance with given host and scope.
	 *
	 * @param {Vue} host
	 * @param {Object} scope
	 * @param {Fragment} parentFrag
	 */

	FragmentFactory.prototype.create = function (host, scope, parentFrag) {
	  var frag = cloneNode(this.template);
	  return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag);
	};

	var ON = 700;
	var MODEL = 800;
	var BIND = 850;
	var TRANSITION = 1100;
	var EL = 1500;
	var COMPONENT = 1500;
	var PARTIAL = 1750;
	var IF = 2100;
	var FOR = 2200;
	var SLOT = 2300;

	var uid$3 = 0;

	var vFor = {

	  priority: FOR,
	  terminal: true,

	  params: ['track-by', 'stagger', 'enter-stagger', 'leave-stagger'],

	  bind: function bind() {
	    // support "item in/of items" syntax
	    var inMatch = this.expression.match(/(.*) (?:in|of) (.*)/);
	    if (inMatch) {
	      var itMatch = inMatch[1].match(/\((.*),(.*)\)/);
	      if (itMatch) {
	        this.iterator = itMatch[1].trim();
	        this.alias = itMatch[2].trim();
	      } else {
	        this.alias = inMatch[1].trim();
	      }
	      this.expression = inMatch[2];
	    }

	    if (!this.alias) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid v-for expression "' + this.descriptor.raw + '": ' + 'alias is required.', this.vm);
	      return;
	    }

	    // uid as a cache identifier
	    this.id = '__v-for__' + ++uid$3;

	    // check if this is an option list,
	    // so that we know if we need to update the <select>'s
	    // v-model when the option list has changed.
	    // because v-model has a lower priority than v-for,
	    // the v-model is not bound here yet, so we have to
	    // retrive it in the actual updateModel() function.
	    var tag = this.el.tagName;
	    this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT';

	    // setup anchor nodes
	    this.start = createAnchor('v-for-start');
	    this.end = createAnchor('v-for-end');
	    replace(this.el, this.end);
	    before(this.start, this.end);

	    // cache
	    this.cache = Object.create(null);

	    // fragment factory
	    this.factory = new FragmentFactory(this.vm, this.el);
	  },

	  update: function update(data) {
	    this.diff(data);
	    this.updateRef();
	    this.updateModel();
	  },

	  /**
	   * Diff, based on new data and old data, determine the
	   * minimum amount of DOM manipulations needed to make the
	   * DOM reflect the new data Array.
	   *
	   * The algorithm diffs the new data Array by storing a
	   * hidden reference to an owner vm instance on previously
	   * seen data. This allows us to achieve O(n) which is
	   * better than a levenshtein distance based algorithm,
	   * which is O(m * n).
	   *
	   * @param {Array} data
	   */

	  diff: function diff(data) {
	    // check if the Array was converted from an Object
	    var item = data[0];
	    var convertedFromObject = this.fromObject = isObject(item) && hasOwn(item, '$key') && hasOwn(item, '$value');

	    var trackByKey = this.params.trackBy;
	    var oldFrags = this.frags;
	    var frags = this.frags = new Array(data.length);
	    var alias = this.alias;
	    var iterator = this.iterator;
	    var start = this.start;
	    var end = this.end;
	    var inDocument = inDoc(start);
	    var init = !oldFrags;
	    var i, l, frag, key, value, primitive;

	    // First pass, go through the new Array and fill up
	    // the new frags array. If a piece of data has a cached
	    // instance for it, we reuse it. Otherwise build a new
	    // instance.
	    for (i = 0, l = data.length; i < l; i++) {
	      item = data[i];
	      key = convertedFromObject ? item.$key : null;
	      value = convertedFromObject ? item.$value : item;
	      primitive = !isObject(value);
	      frag = !init && this.getCachedFrag(value, i, key);
	      if (frag) {
	        // reusable fragment
	        frag.reused = true;
	        // update $index
	        frag.scope.$index = i;
	        // update $key
	        if (key) {
	          frag.scope.$key = key;
	        }
	        // update iterator
	        if (iterator) {
	          frag.scope[iterator] = key !== null ? key : i;
	        }
	        // update data for track-by, object repeat &
	        // primitive values.
	        if (trackByKey || convertedFromObject || primitive) {
	          withoutConversion(function () {
	            frag.scope[alias] = value;
	          });
	        }
	      } else {
	        // new isntance
	        frag = this.create(value, alias, i, key);
	        frag.fresh = !init;
	      }
	      frags[i] = frag;
	      if (init) {
	        frag.before(end);
	      }
	    }

	    // we're done for the initial render.
	    if (init) {
	      return;
	    }

	    // Second pass, go through the old fragments and
	    // destroy those who are not reused (and remove them
	    // from cache)
	    var removalIndex = 0;
	    var totalRemoved = oldFrags.length - frags.length;
	    // when removing a large number of fragments, watcher removal
	    // turns out to be a perf bottleneck, so we batch the watcher
	    // removals into a single filter call!
	    this.vm._vForRemoving = true;
	    for (i = 0, l = oldFrags.length; i < l; i++) {
	      frag = oldFrags[i];
	      if (!frag.reused) {
	        this.deleteCachedFrag(frag);
	        this.remove(frag, removalIndex++, totalRemoved, inDocument);
	      }
	    }
	    this.vm._vForRemoving = false;
	    if (removalIndex) {
	      this.vm._watchers = this.vm._watchers.filter(function (w) {
	        return w.active;
	      });
	    }

	    // Final pass, move/insert new fragments into the
	    // right place.
	    var targetPrev, prevEl, currentPrev;
	    var insertionIndex = 0;
	    for (i = 0, l = frags.length; i < l; i++) {
	      frag = frags[i];
	      // this is the frag that we should be after
	      targetPrev = frags[i - 1];
	      prevEl = targetPrev ? targetPrev.staggerCb ? targetPrev.staggerAnchor : targetPrev.end || targetPrev.node : start;
	      if (frag.reused && !frag.staggerCb) {
	        currentPrev = findPrevFrag(frag, start, this.id);
	        if (currentPrev !== targetPrev && (!currentPrev ||
	        // optimization for moving a single item.
	        // thanks to suggestions by @livoras in #1807
	        findPrevFrag(currentPrev, start, this.id) !== targetPrev)) {
	          this.move(frag, prevEl);
	        }
	      } else {
	        // new instance, or still in stagger.
	        // insert with updated stagger index.
	        this.insert(frag, insertionIndex++, prevEl, inDocument);
	      }
	      frag.reused = frag.fresh = false;
	    }
	  },

	  /**
	   * Create a new fragment instance.
	   *
	   * @param {*} value
	   * @param {String} alias
	   * @param {Number} index
	   * @param {String} [key]
	   * @return {Fragment}
	   */

	  create: function create(value, alias, index, key) {
	    var host = this._host;
	    // create iteration scope
	    var parentScope = this._scope || this.vm;
	    var scope = Object.create(parentScope);
	    // ref holder for the scope
	    scope.$refs = Object.create(parentScope.$refs);
	    scope.$els = Object.create(parentScope.$els);
	    // make sure point $parent to parent scope
	    scope.$parent = parentScope;
	    // for two-way binding on alias
	    scope.$forContext = this;
	    // define scope properties
	    // important: define the scope alias without forced conversion
	    // so that frozen data structures remain non-reactive.
	    withoutConversion(function () {
	      defineReactive(scope, alias, value);
	    });
	    defineReactive(scope, '$index', index);
	    if (key) {
	      defineReactive(scope, '$key', key);
	    } else if (scope.$key) {
	      // avoid accidental fallback
	      def(scope, '$key', null);
	    }
	    if (this.iterator) {
	      defineReactive(scope, this.iterator, key !== null ? key : index);
	    }
	    var frag = this.factory.create(host, scope, this._frag);
	    frag.forId = this.id;
	    this.cacheFrag(value, frag, index, key);
	    return frag;
	  },

	  /**
	   * Update the v-ref on owner vm.
	   */

	  updateRef: function updateRef() {
	    var ref = this.descriptor.ref;
	    if (!ref) return;
	    var hash = (this._scope || this.vm).$refs;
	    var refs;
	    if (!this.fromObject) {
	      refs = this.frags.map(findVmFromFrag);
	    } else {
	      refs = {};
	      this.frags.forEach(function (frag) {
	        refs[frag.scope.$key] = findVmFromFrag(frag);
	      });
	    }
	    hash[ref] = refs;
	  },

	  /**
	   * For option lists, update the containing v-model on
	   * parent <select>.
	   */

	  updateModel: function updateModel() {
	    if (this.isOption) {
	      var parent = this.start.parentNode;
	      var model = parent && parent.__v_model;
	      if (model) {
	        model.forceUpdate();
	      }
	    }
	  },

	  /**
	   * Insert a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Node} prevEl
	   * @param {Boolean} inDocument
	   */

	  insert: function insert(frag, index, prevEl, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	    }
	    var staggerAmount = this.getStagger(frag, index, null, 'enter');
	    if (inDocument && staggerAmount) {
	      // create an anchor and insert it synchronously,
	      // so that we can resolve the correct order without
	      // worrying about some elements not inserted yet
	      var anchor = frag.staggerAnchor;
	      if (!anchor) {
	        anchor = frag.staggerAnchor = createAnchor('stagger-anchor');
	        anchor.__v_frag = frag;
	      }
	      after(anchor, prevEl);
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.before(anchor);
	        remove(anchor);
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      var target = prevEl.nextSibling;
	      /* istanbul ignore if */
	      if (!target) {
	        // reset end anchor position in case the position was messed up
	        // by an external drag-n-drop library.
	        after(this.end, prevEl);
	        target = this.end;
	      }
	      frag.before(target);
	    }
	  },

	  /**
	   * Remove a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {Boolean} inDocument
	   */

	  remove: function remove(frag, index, total, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	      // it's not possible for the same frag to be removed
	      // twice, so if we have a pending stagger callback,
	      // it means this frag is queued for enter but removed
	      // before its transition started. Since it is already
	      // destroyed, we can just leave it in detached state.
	      return;
	    }
	    var staggerAmount = this.getStagger(frag, index, total, 'leave');
	    if (inDocument && staggerAmount) {
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.remove();
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      frag.remove();
	    }
	  },

	  /**
	   * Move a fragment to a new position.
	   * Force no transition.
	   *
	   * @param {Fragment} frag
	   * @param {Node} prevEl
	   */

	  move: function move(frag, prevEl) {
	    // fix a common issue with Sortable:
	    // if prevEl doesn't have nextSibling, this means it's
	    // been dragged after the end anchor. Just re-position
	    // the end anchor to the end of the container.
	    /* istanbul ignore if */
	    if (!prevEl.nextSibling) {
	      this.end.parentNode.appendChild(this.end);
	    }
	    frag.before(prevEl.nextSibling, false);
	  },

	  /**
	   * Cache a fragment using track-by or the object key.
	   *
	   * @param {*} value
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {String} [key]
	   */

	  cacheFrag: function cacheFrag(value, frag, index, key) {
	    var trackByKey = this.params.trackBy;
	    var cache = this.cache;
	    var primitive = !isObject(value);
	    var id;
	    if (key || trackByKey || primitive) {
	      id = getTrackByKey(index, key, value, trackByKey);
	      if (!cache[id]) {
	        cache[id] = frag;
	      } else if (trackByKey !== '$index') {
	        process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	      }
	    } else {
	      id = this.id;
	      if (hasOwn(value, id)) {
	        if (value[id] === null) {
	          value[id] = frag;
	        } else {
	          process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	        }
	      } else if (Object.isExtensible(value)) {
	        def(value, id, frag);
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('Frozen v-for objects cannot be automatically tracked, make sure to ' + 'provide a track-by key.');
	      }
	    }
	    frag.raw = value;
	  },

	  /**
	   * Get a cached fragment from the value/index/key
	   *
	   * @param {*} value
	   * @param {Number} index
	   * @param {String} key
	   * @return {Fragment}
	   */

	  getCachedFrag: function getCachedFrag(value, index, key) {
	    var trackByKey = this.params.trackBy;
	    var primitive = !isObject(value);
	    var frag;
	    if (key || trackByKey || primitive) {
	      var id = getTrackByKey(index, key, value, trackByKey);
	      frag = this.cache[id];
	    } else {
	      frag = value[this.id];
	    }
	    if (frag && (frag.reused || frag.fresh)) {
	      process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	    }
	    return frag;
	  },

	  /**
	   * Delete a fragment from cache.
	   *
	   * @param {Fragment} frag
	   */

	  deleteCachedFrag: function deleteCachedFrag(frag) {
	    var value = frag.raw;
	    var trackByKey = this.params.trackBy;
	    var scope = frag.scope;
	    var index = scope.$index;
	    // fix #948: avoid accidentally fall through to
	    // a parent repeater which happens to have $key.
	    var key = hasOwn(scope, '$key') && scope.$key;
	    var primitive = !isObject(value);
	    if (trackByKey || key || primitive) {
	      var id = getTrackByKey(index, key, value, trackByKey);
	      this.cache[id] = null;
	    } else {
	      value[this.id] = null;
	      frag.raw = null;
	    }
	  },

	  /**
	   * Get the stagger amount for an insertion/removal.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {String} type
	   */

	  getStagger: function getStagger(frag, index, total, type) {
	    type = type + 'Stagger';
	    var trans = frag.node.__v_trans;
	    var hooks = trans && trans.hooks;
	    var hook = hooks && (hooks[type] || hooks.stagger);
	    return hook ? hook.call(frag, index, total) : index * parseInt(this.params[type] || this.params.stagger, 10);
	  },

	  /**
	   * Pre-process the value before piping it through the
	   * filters. This is passed to and called by the watcher.
	   */

	  _preProcess: function _preProcess(value) {
	    // regardless of type, store the un-filtered raw value.
	    this.rawValue = value;
	    return value;
	  },

	  /**
	   * Post-process the value after it has been piped through
	   * the filters. This is passed to and called by the watcher.
	   *
	   * It is necessary for this to be called during the
	   * watcher's dependency collection phase because we want
	   * the v-for to update when the source Object is mutated.
	   */

	  _postProcess: function _postProcess(value) {
	    if (isArray(value)) {
	      return value;
	    } else if (isPlainObject(value)) {
	      // convert plain object to array.
	      var keys = Object.keys(value);
	      var i = keys.length;
	      var res = new Array(i);
	      var key;
	      while (i--) {
	        key = keys[i];
	        res[i] = {
	          $key: key,
	          $value: value[key]
	        };
	      }
	      return res;
	    } else {
	      if (typeof value === 'number' && !isNaN(value)) {
	        value = range(value);
	      }
	      return value || [];
	    }
	  },

	  unbind: function unbind() {
	    if (this.descriptor.ref) {
	      (this._scope || this.vm).$refs[this.descriptor.ref] = null;
	    }
	    if (this.frags) {
	      var i = this.frags.length;
	      var frag;
	      while (i--) {
	        frag = this.frags[i];
	        this.deleteCachedFrag(frag);
	        frag.destroy();
	      }
	    }
	  }
	};

	/**
	 * Helper to find the previous element that is a fragment
	 * anchor. This is necessary because a destroyed frag's
	 * element could still be lingering in the DOM before its
	 * leaving transition finishes, but its inserted flag
	 * should have been set to false so we can skip them.
	 *
	 * If this is a block repeat, we want to make sure we only
	 * return frag that is bound to this v-for. (see #929)
	 *
	 * @param {Fragment} frag
	 * @param {Comment|Text} anchor
	 * @param {String} id
	 * @return {Fragment}
	 */

	function findPrevFrag(frag, anchor, id) {
	  var el = frag.node.previousSibling;
	  /* istanbul ignore if */
	  if (!el) return;
	  frag = el.__v_frag;
	  while ((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {
	    el = el.previousSibling;
	    /* istanbul ignore if */
	    if (!el) return;
	    frag = el.__v_frag;
	  }
	  return frag;
	}

	/**
	 * Find a vm from a fragment.
	 *
	 * @param {Fragment} frag
	 * @return {Vue|undefined}
	 */

	function findVmFromFrag(frag) {
	  var node = frag.node;
	  // handle multi-node frag
	  if (frag.end) {
	    while (!node.__vue__ && node !== frag.end && node.nextSibling) {
	      node = node.nextSibling;
	    }
	  }
	  return node.__vue__;
	}

	/**
	 * Create a range array from given number.
	 *
	 * @param {Number} n
	 * @return {Array}
	 */

	function range(n) {
	  var i = -1;
	  var ret = new Array(Math.floor(n));
	  while (++i < n) {
	    ret[i] = i;
	  }
	  return ret;
	}

	/**
	 * Get the track by key for an item.
	 *
	 * @param {Number} index
	 * @param {String} key
	 * @param {*} value
	 * @param {String} [trackByKey]
	 */

	function getTrackByKey(index, key, value, trackByKey) {
	  return trackByKey ? trackByKey === '$index' ? index : trackByKey.charAt(0).match(/\w/) ? getPath(value, trackByKey) : value[trackByKey] : key || value;
	}

	if (process.env.NODE_ENV !== 'production') {
	  vFor.warnDuplicate = function (value) {
	    warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.', this.vm);
	  };
	}

	var vIf = {

	  priority: IF,
	  terminal: true,

	  bind: function bind() {
	    var el = this.el;
	    if (!el.__vue__) {
	      // check else block
	      var next = el.nextElementSibling;
	      if (next && getAttr(next, 'v-else') !== null) {
	        remove(next);
	        this.elseEl = next;
	      }
	      // check main block
	      this.anchor = createAnchor('v-if');
	      replace(el, this.anchor);
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.', this.vm);
	      this.invalid = true;
	    }
	  },

	  update: function update(value) {
	    if (this.invalid) return;
	    if (value) {
	      if (!this.frag) {
	        this.insert();
	      }
	    } else {
	      this.remove();
	    }
	  },

	  insert: function insert() {
	    if (this.elseFrag) {
	      this.elseFrag.remove();
	      this.elseFrag = null;
	    }
	    // lazy init factory
	    if (!this.factory) {
	      this.factory = new FragmentFactory(this.vm, this.el);
	    }
	    this.frag = this.factory.create(this._host, this._scope, this._frag);
	    this.frag.before(this.anchor);
	  },

	  remove: function remove() {
	    if (this.frag) {
	      this.frag.remove();
	      this.frag = null;
	    }
	    if (this.elseEl && !this.elseFrag) {
	      if (!this.elseFactory) {
	        this.elseFactory = new FragmentFactory(this.elseEl._context || this.vm, this.elseEl);
	      }
	      this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag);
	      this.elseFrag.before(this.anchor);
	    }
	  },

	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	    if (this.elseFrag) {
	      this.elseFrag.destroy();
	    }
	  }
	};

	var show = {

	  bind: function bind() {
	    // check else block
	    var next = this.el.nextElementSibling;
	    if (next && getAttr(next, 'v-else') !== null) {
	      this.elseEl = next;
	    }
	  },

	  update: function update(value) {
	    this.apply(this.el, value);
	    if (this.elseEl) {
	      this.apply(this.elseEl, !value);
	    }
	  },

	  apply: function apply(el, value) {
	    if (inDoc(el)) {
	      applyTransition(el, value ? 1 : -1, toggle, this.vm);
	    } else {
	      toggle();
	    }
	    function toggle() {
	      el.style.display = value ? '' : 'none';
	    }
	  }
	};

	var text$2 = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	    var isRange = el.type === 'range';
	    var lazy = this.params.lazy;
	    var number = this.params.number;
	    var debounce = this.params.debounce;

	    // handle composition events.
	    //   http://blog.evanyou.me/2014/01/03/composition-event/
	    // skip this for Android because it handles composition
	    // events quite differently. Android doesn't trigger
	    // composition events for language input methods e.g.
	    // Chinese, but instead triggers them for spelling
	    // suggestions... (see Discussion/#162)
	    var composing = false;
	    if (!isAndroid && !isRange) {
	      this.on('compositionstart', function () {
	        composing = true;
	      });
	      this.on('compositionend', function () {
	        composing = false;
	        // in IE11 the "compositionend" event fires AFTER
	        // the "input" event, so the input handler is blocked
	        // at the end... have to call it here.
	        //
	        // #1327: in lazy mode this is unecessary.
	        if (!lazy) {
	          self.listener();
	        }
	      });
	    }

	    // prevent messing with the input when user is typing,
	    // and force update on blur.
	    this.focused = false;
	    if (!isRange && !lazy) {
	      this.on('focus', function () {
	        self.focused = true;
	      });
	      this.on('blur', function () {
	        self.focused = false;
	        // do not sync value after fragment removal (#2017)
	        if (!self._frag || self._frag.inserted) {
	          self.rawListener();
	        }
	      });
	    }

	    // Now attach the main listener
	    this.listener = this.rawListener = function () {
	      if (composing || !self._bound) {
	        return;
	      }
	      var val = number || isRange ? toNumber(el.value) : el.value;
	      self.set(val);
	      // force update on next tick to avoid lock & same value
	      // also only update when user is not typing
	      nextTick(function () {
	        if (self._bound && !self.focused) {
	          self.update(self._watcher.value);
	        }
	      });
	    };

	    // apply debounce
	    if (debounce) {
	      this.listener = _debounce(this.listener, debounce);
	    }

	    // Support jQuery events, since jQuery.trigger() doesn't
	    // trigger native events in some cases and some plugins
	    // rely on $.trigger()
	    //
	    // We want to make sure if a listener is attached using
	    // jQuery, it is also removed with jQuery, that's why
	    // we do the check for each directive instance and
	    // store that check result on itself. This also allows
	    // easier test coverage control by unsetting the global
	    // jQuery variable in tests.
	    this.hasjQuery = typeof jQuery === 'function';
	    if (this.hasjQuery) {
	      var method = jQuery.fn.on ? 'on' : 'bind';
	      jQuery(el)[method]('change', this.rawListener);
	      if (!lazy) {
	        jQuery(el)[method]('input', this.listener);
	      }
	    } else {
	      this.on('change', this.rawListener);
	      if (!lazy) {
	        this.on('input', this.listener);
	      }
	    }

	    // IE9 doesn't fire input event on backspace/del/cut
	    if (!lazy && isIE9) {
	      this.on('cut', function () {
	        nextTick(self.listener);
	      });
	      this.on('keyup', function (e) {
	        if (e.keyCode === 46 || e.keyCode === 8) {
	          self.listener();
	        }
	      });
	    }

	    // set initial value if present
	    if (el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    // #3029 only update when the value changes. This prevent
	    // browsers from overwriting values like selectionStart
	    value = _toString(value);
	    if (value !== this.el.value) this.el.value = value;
	  },

	  unbind: function unbind() {
	    var el = this.el;
	    if (this.hasjQuery) {
	      var method = jQuery.fn.off ? 'off' : 'unbind';
	      jQuery(el)[method]('change', this.listener);
	      jQuery(el)[method]('input', this.listener);
	    }
	  }
	};

	var radio = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;

	    this.getValue = function () {
	      // value overwrite via v-bind:value
	      if (el.hasOwnProperty('_value')) {
	        return el._value;
	      }
	      var val = el.value;
	      if (self.params.number) {
	        val = toNumber(val);
	      }
	      return val;
	    };

	    this.listener = function () {
	      self.set(self.getValue());
	    };
	    this.on('change', this.listener);

	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    this.el.checked = looseEqual(value, this.getValue());
	  }
	};

	var select = {

	  bind: function bind() {
	    var _this = this;

	    var self = this;
	    var el = this.el;

	    // method to force update DOM using latest value.
	    this.forceUpdate = function () {
	      if (self._watcher) {
	        self.update(self._watcher.get());
	      }
	    };

	    // check if this is a multiple select
	    var multiple = this.multiple = el.hasAttribute('multiple');

	    // attach listener
	    this.listener = function () {
	      var value = getValue(el, multiple);
	      value = self.params.number ? isArray(value) ? value.map(toNumber) : toNumber(value) : value;
	      self.set(value);
	    };
	    this.on('change', this.listener);

	    // if has initial value, set afterBind
	    var initValue = getValue(el, multiple, true);
	    if (multiple && initValue.length || !multiple && initValue !== null) {
	      this.afterBind = this.listener;
	    }

	    // All major browsers except Firefox resets
	    // selectedIndex with value -1 to 0 when the element
	    // is appended to a new parent, therefore we have to
	    // force a DOM update whenever that happens...
	    this.vm.$on('hook:attached', function () {
	      nextTick(_this.forceUpdate);
	    });
	    if (!inDoc(el)) {
	      nextTick(this.forceUpdate);
	    }
	  },

	  update: function update(value) {
	    var el = this.el;
	    el.selectedIndex = -1;
	    var multi = this.multiple && isArray(value);
	    var options = el.options;
	    var i = options.length;
	    var op, val;
	    while (i--) {
	      op = options[i];
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      /* eslint-disable eqeqeq */
	      op.selected = multi ? indexOf$1(value, val) > -1 : looseEqual(value, val);
	      /* eslint-enable eqeqeq */
	    }
	  },

	  unbind: function unbind() {
	    /* istanbul ignore next */
	    this.vm.$off('hook:attached', this.forceUpdate);
	  }
	};

	/**
	 * Get select value
	 *
	 * @param {SelectElement} el
	 * @param {Boolean} multi
	 * @param {Boolean} init
	 * @return {Array|*}
	 */

	function getValue(el, multi, init) {
	  var res = multi ? [] : null;
	  var op, val, selected;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    op = el.options[i];
	    selected = init ? op.hasAttribute('selected') : op.selected;
	    if (selected) {
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      if (multi) {
	        res.push(val);
	      } else {
	        return val;
	      }
	    }
	  }
	  return res;
	}

	/**
	 * Native Array.indexOf uses strict equal, but in this
	 * case we need to match string/numbers with custom equal.
	 *
	 * @param {Array} arr
	 * @param {*} val
	 */

	function indexOf$1(arr, val) {
	  var i = arr.length;
	  while (i--) {
	    if (looseEqual(arr[i], val)) {
	      return i;
	    }
	  }
	  return -1;
	}

	var checkbox = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;

	    this.getValue = function () {
	      return el.hasOwnProperty('_value') ? el._value : self.params.number ? toNumber(el.value) : el.value;
	    };

	    function getBooleanValue() {
	      var val = el.checked;
	      if (val && el.hasOwnProperty('_trueValue')) {
	        return el._trueValue;
	      }
	      if (!val && el.hasOwnProperty('_falseValue')) {
	        return el._falseValue;
	      }
	      return val;
	    }

	    this.listener = function () {
	      var model = self._watcher.value;
	      if (isArray(model)) {
	        var val = self.getValue();
	        if (el.checked) {
	          if (indexOf(model, val) < 0) {
	            model.push(val);
	          }
	        } else {
	          model.$remove(val);
	        }
	      } else {
	        self.set(getBooleanValue());
	      }
	    };

	    this.on('change', this.listener);
	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    var el = this.el;
	    if (isArray(value)) {
	      el.checked = indexOf(value, this.getValue()) > -1;
	    } else {
	      if (el.hasOwnProperty('_trueValue')) {
	        el.checked = looseEqual(value, el._trueValue);
	      } else {
	        el.checked = !!value;
	      }
	    }
	  }
	};

	var handlers = {
	  text: text$2,
	  radio: radio,
	  select: select,
	  checkbox: checkbox
	};

	var model = {

	  priority: MODEL,
	  twoWay: true,
	  handlers: handlers,
	  params: ['lazy', 'number', 'debounce'],

	  /**
	   * Possible elements:
	   *   <select>
	   *   <textarea>
	   *   <input type="*">
	   *     - text
	   *     - checkbox
	   *     - radio
	   *     - number
	   */

	  bind: function bind() {
	    // friendly warning...
	    this.checkFilters();
	    if (this.hasRead && !this.hasWrite) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using a read-only filter with ' + 'v-model="' + this.descriptor.raw + '". ' + 'You might want to use a two-way filter to ensure correct behavior.', this.vm);
	    }
	    var el = this.el;
	    var tag = el.tagName;
	    var handler;
	    if (tag === 'INPUT') {
	      handler = handlers[el.type] || handlers.text;
	    } else if (tag === 'SELECT') {
	      handler = handlers.select;
	    } else if (tag === 'TEXTAREA') {
	      handler = handlers.text;
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-model does not support element type: ' + tag, this.vm);
	      return;
	    }
	    el.__v_model = this;
	    handler.bind.call(this);
	    this.update = handler.update;
	    this._unbind = handler.unbind;
	  },

	  /**
	   * Check read/write filter stats.
	   */

	  checkFilters: function checkFilters() {
	    var filters = this.filters;
	    if (!filters) return;
	    var i = filters.length;
	    while (i--) {
	      var filter = resolveAsset(this.vm.$options, 'filters', filters[i].name);
	      if (typeof filter === 'function' || filter.read) {
	        this.hasRead = true;
	      }
	      if (filter.write) {
	        this.hasWrite = true;
	      }
	    }
	  },

	  unbind: function unbind() {
	    this.el.__v_model = null;
	    this._unbind && this._unbind();
	  }
	};

	// keyCode aliases
	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  space: 32,
	  'delete': [8, 46],
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40
	};

	function keyFilter(handler, keys) {
	  var codes = keys.map(function (key) {
	    var charCode = key.charCodeAt(0);
	    if (charCode > 47 && charCode < 58) {
	      return parseInt(key, 10);
	    }
	    if (key.length === 1) {
	      charCode = key.toUpperCase().charCodeAt(0);
	      if (charCode > 64 && charCode < 91) {
	        return charCode;
	      }
	    }
	    return keyCodes[key];
	  });
	  codes = [].concat.apply([], codes);
	  return function keyHandler(e) {
	    if (codes.indexOf(e.keyCode) > -1) {
	      return handler.call(this, e);
	    }
	  };
	}

	function stopFilter(handler) {
	  return function stopHandler(e) {
	    e.stopPropagation();
	    return handler.call(this, e);
	  };
	}

	function preventFilter(handler) {
	  return function preventHandler(e) {
	    e.preventDefault();
	    return handler.call(this, e);
	  };
	}

	function selfFilter(handler) {
	  return function selfHandler(e) {
	    if (e.target === e.currentTarget) {
	      return handler.call(this, e);
	    }
	  };
	}

	var on$1 = {

	  priority: ON,
	  acceptStatement: true,
	  keyCodes: keyCodes,

	  bind: function bind() {
	    // deal with iframes
	    if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
	      var self = this;
	      this.iframeBind = function () {
	        on(self.el.contentWindow, self.arg, self.handler, self.modifiers.capture);
	      };
	      this.on('load', this.iframeBind);
	    }
	  },

	  update: function update(handler) {
	    // stub a noop for v-on with no value,
	    // e.g. @mousedown.prevent
	    if (!this.descriptor.raw) {
	      handler = function () {};
	    }

	    if (typeof handler !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler, this.vm);
	      return;
	    }

	    // apply modifiers
	    if (this.modifiers.stop) {
	      handler = stopFilter(handler);
	    }
	    if (this.modifiers.prevent) {
	      handler = preventFilter(handler);
	    }
	    if (this.modifiers.self) {
	      handler = selfFilter(handler);
	    }
	    // key filter
	    var keys = Object.keys(this.modifiers).filter(function (key) {
	      return key !== 'stop' && key !== 'prevent' && key !== 'self' && key !== 'capture';
	    });
	    if (keys.length) {
	      handler = keyFilter(handler, keys);
	    }

	    this.reset();
	    this.handler = handler;

	    if (this.iframeBind) {
	      this.iframeBind();
	    } else {
	      on(this.el, this.arg, this.handler, this.modifiers.capture);
	    }
	  },

	  reset: function reset() {
	    var el = this.iframeBind ? this.el.contentWindow : this.el;
	    if (this.handler) {
	      off(el, this.arg, this.handler);
	    }
	  },

	  unbind: function unbind() {
	    this.reset();
	  }
	};

	var prefixes = ['-webkit-', '-moz-', '-ms-'];
	var camelPrefixes = ['Webkit', 'Moz', 'ms'];
	var importantRE = /!important;?$/;
	var propCache = Object.create(null);

	var testEl = null;

	var style = {

	  deep: true,

	  update: function update(value) {
	    if (typeof value === 'string') {
	      this.el.style.cssText = value;
	    } else if (isArray(value)) {
	      this.handleObject(value.reduce(extend, {}));
	    } else {
	      this.handleObject(value || {});
	    }
	  },

	  handleObject: function handleObject(value) {
	    // cache object styles so that only changed props
	    // are actually updated.
	    var cache = this.cache || (this.cache = {});
	    var name, val;
	    for (name in cache) {
	      if (!(name in value)) {
	        this.handleSingle(name, null);
	        delete cache[name];
	      }
	    }
	    for (name in value) {
	      val = value[name];
	      if (val !== cache[name]) {
	        cache[name] = val;
	        this.handleSingle(name, val);
	      }
	    }
	  },

	  handleSingle: function handleSingle(prop, value) {
	    prop = normalize(prop);
	    if (!prop) return; // unsupported prop
	    // cast possible numbers/booleans into strings
	    if (value != null) value += '';
	    if (value) {
	      var isImportant = importantRE.test(value) ? 'important' : '';
	      if (isImportant) {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          warn('It\'s probably a bad idea to use !important with inline rules. ' + 'This feature will be deprecated in a future version of Vue.');
	        }
	        value = value.replace(importantRE, '').trim();
	        this.el.style.setProperty(prop.kebab, value, isImportant);
	      } else {
	        this.el.style[prop.camel] = value;
	      }
	    } else {
	      this.el.style[prop.camel] = '';
	    }
	  }

	};

	/**
	 * Normalize a CSS property name.
	 * - cache result
	 * - auto prefix
	 * - camelCase -> dash-case
	 *
	 * @param {String} prop
	 * @return {String}
	 */

	function normalize(prop) {
	  if (propCache[prop]) {
	    return propCache[prop];
	  }
	  var res = prefix(prop);
	  propCache[prop] = propCache[res] = res;
	  return res;
	}

	/**
	 * Auto detect the appropriate prefix for a CSS property.
	 * https://gist.github.com/paulirish/523692
	 *
	 * @param {String} prop
	 * @return {String}
	 */

	function prefix(prop) {
	  prop = hyphenate(prop);
	  var camel = camelize(prop);
	  var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
	  if (!testEl) {
	    testEl = document.createElement('div');
	  }
	  var i = prefixes.length;
	  var prefixed;
	  if (camel !== 'filter' && camel in testEl.style) {
	    return {
	      kebab: prop,
	      camel: camel
	    };
	  }
	  while (i--) {
	    prefixed = camelPrefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return {
	        kebab: prefixes[i] + prop,
	        camel: prefixed
	      };
	    }
	  }
	}

	// xlink
	var xlinkNS = 'http://www.w3.org/1999/xlink';
	var xlinkRE = /^xlink:/;

	// check for attributes that prohibit interpolations
	var disallowedInterpAttrRE = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;
	// these attributes should also set their corresponding properties
	// because they only affect the initial state of the element
	var attrWithPropsRE = /^(?:value|checked|selected|muted)$/;
	// these attributes expect enumrated values of "true" or "false"
	// but are not boolean attributes
	var enumeratedAttrRE = /^(?:draggable|contenteditable|spellcheck)$/;

	// these attributes should set a hidden property for
	// binding v-model to object values
	var modelProps = {
	  value: '_value',
	  'true-value': '_trueValue',
	  'false-value': '_falseValue'
	};

	var bind$1 = {

	  priority: BIND,

	  bind: function bind() {
	    var attr = this.arg;
	    var tag = this.el.tagName;
	    // should be deep watch on object mode
	    if (!attr) {
	      this.deep = true;
	    }
	    // handle interpolation bindings
	    var descriptor = this.descriptor;
	    var tokens = descriptor.interp;
	    if (tokens) {
	      // handle interpolations with one-time tokens
	      if (descriptor.hasOneTime) {
	        this.expression = tokensToExp(tokens, this._scope || this.vm);
	      }

	      // only allow binding on native attributes
	      if (disallowedInterpAttrRE.test(attr) || attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT')) {
	        process.env.NODE_ENV !== 'production' && warn(attr + '="' + descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.', this.vm);
	        this.el.removeAttribute(attr);
	        this.invalid = true;
	      }

	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production') {
	        var raw = attr + '="' + descriptor.raw + '": ';
	        // warn src
	        if (attr === 'src') {
	          warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.', this.vm);
	        }

	        // warn style
	        if (attr === 'style') {
	          warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.', this.vm);
	        }
	      }
	    }
	  },

	  update: function update(value) {
	    if (this.invalid) {
	      return;
	    }
	    var attr = this.arg;
	    if (this.arg) {
	      this.handleSingle(attr, value);
	    } else {
	      this.handleObject(value || {});
	    }
	  },

	  // share object handler with v-bind:class
	  handleObject: style.handleObject,

	  handleSingle: function handleSingle(attr, value) {
	    var el = this.el;
	    var interp = this.descriptor.interp;
	    if (this.modifiers.camel) {
	      attr = camelize(attr);
	    }
	    if (!interp && attrWithPropsRE.test(attr) && attr in el) {
	      var attrValue = attr === 'value' ? value == null // IE9 will set input.value to "null" for null...
	      ? '' : value : value;

	      if (el[attr] !== attrValue) {
	        el[attr] = attrValue;
	      }
	    }
	    // set model props
	    var modelProp = modelProps[attr];
	    if (!interp && modelProp) {
	      el[modelProp] = value;
	      // update v-model if present
	      var model = el.__v_model;
	      if (model) {
	        model.listener();
	      }
	    }
	    // do not set value attribute for textarea
	    if (attr === 'value' && el.tagName === 'TEXTAREA') {
	      el.removeAttribute(attr);
	      return;
	    }
	    // update attribute
	    if (enumeratedAttrRE.test(attr)) {
	      el.setAttribute(attr, value ? 'true' : 'false');
	    } else if (value != null && value !== false) {
	      if (attr === 'class') {
	        // handle edge case #1960:
	        // class interpolation should not overwrite Vue transition class
	        if (el.__v_trans) {
	          value += ' ' + el.__v_trans.id + '-transition';
	        }
	        setClass(el, value);
	      } else if (xlinkRE.test(attr)) {
	        el.setAttributeNS(xlinkNS, attr, value === true ? '' : value);
	      } else {
	        el.setAttribute(attr, value === true ? '' : value);
	      }
	    } else {
	      el.removeAttribute(attr);
	    }
	  }
	};

	var el = {

	  priority: EL,

	  bind: function bind() {
	    /* istanbul ignore if */
	    if (!this.arg) {
	      return;
	    }
	    var id = this.id = camelize(this.arg);
	    var refs = (this._scope || this.vm).$els;
	    if (hasOwn(refs, id)) {
	      refs[id] = this.el;
	    } else {
	      defineReactive(refs, id, this.el);
	    }
	  },

	  unbind: function unbind() {
	    var refs = (this._scope || this.vm).$els;
	    if (refs[this.id] === this.el) {
	      refs[this.id] = null;
	    }
	  }
	};

	var ref = {
	  bind: function bind() {
	    process.env.NODE_ENV !== 'production' && warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.', this.vm);
	  }
	};

	var cloak = {
	  bind: function bind() {
	    var el = this.el;
	    this.vm.$once('pre-hook:compiled', function () {
	      el.removeAttribute('v-cloak');
	    });
	  }
	};

	// must export plain object
	var directives = {
	  text: text$1,
	  html: html,
	  'for': vFor,
	  'if': vIf,
	  show: show,
	  model: model,
	  on: on$1,
	  bind: bind$1,
	  el: el,
	  ref: ref,
	  cloak: cloak
	};

	var vClass = {

	  deep: true,

	  update: function update(value) {
	    if (!value) {
	      this.cleanup();
	    } else if (typeof value === 'string') {
	      this.setClass(value.trim().split(/\s+/));
	    } else {
	      this.setClass(normalize$1(value));
	    }
	  },

	  setClass: function setClass(value) {
	    this.cleanup(value);
	    for (var i = 0, l = value.length; i < l; i++) {
	      var val = value[i];
	      if (val) {
	        apply(this.el, val, addClass);
	      }
	    }
	    this.prevKeys = value;
	  },

	  cleanup: function cleanup(value) {
	    var prevKeys = this.prevKeys;
	    if (!prevKeys) return;
	    var i = prevKeys.length;
	    while (i--) {
	      var key = prevKeys[i];
	      if (!value || value.indexOf(key) < 0) {
	        apply(this.el, key, removeClass);
	      }
	    }
	  }
	};

	/**
	 * Normalize objects and arrays (potentially containing objects)
	 * into array of strings.
	 *
	 * @param {Object|Array<String|Object>} value
	 * @return {Array<String>}
	 */

	function normalize$1(value) {
	  var res = [];
	  if (isArray(value)) {
	    for (var i = 0, l = value.length; i < l; i++) {
	      var _key = value[i];
	      if (_key) {
	        if (typeof _key === 'string') {
	          res.push(_key);
	        } else {
	          for (var k in _key) {
	            if (_key[k]) res.push(k);
	          }
	        }
	      }
	    }
	  } else if (isObject(value)) {
	    for (var key in value) {
	      if (value[key]) res.push(key);
	    }
	  }
	  return res;
	}

	/**
	 * Add or remove a class/classes on an element
	 *
	 * @param {Element} el
	 * @param {String} key The class name. This may or may not
	 *                     contain a space character, in such a
	 *                     case we'll deal with multiple class
	 *                     names at once.
	 * @param {Function} fn
	 */

	function apply(el, key, fn) {
	  key = key.trim();
	  if (key.indexOf(' ') === -1) {
	    fn(el, key);
	    return;
	  }
	  // The key contains one or more space characters.
	  // Since a class name doesn't accept such characters, we
	  // treat it as multiple classes.
	  var keys = key.split(/\s+/);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    fn(el, keys[i]);
	  }
	}

	var component = {

	  priority: COMPONENT,

	  params: ['keep-alive', 'transition-mode', 'inline-template'],

	  /**
	   * Setup. Two possible usages:
	   *
	   * - static:
	   *   <comp> or <div v-component="comp">
	   *
	   * - dynamic:
	   *   <component :is="view">
	   */

	  bind: function bind() {
	    if (!this.el.__vue__) {
	      // keep-alive cache
	      this.keepAlive = this.params.keepAlive;
	      if (this.keepAlive) {
	        this.cache = {};
	      }
	      // check inline-template
	      if (this.params.inlineTemplate) {
	        // extract inline template as a DocumentFragment
	        this.inlineTemplate = extractContent(this.el, true);
	      }
	      // component resolution related state
	      this.pendingComponentCb = this.Component = null;
	      // transition related state
	      this.pendingRemovals = 0;
	      this.pendingRemovalCb = null;
	      // create a ref anchor
	      this.anchor = createAnchor('v-component');
	      replace(this.el, this.anchor);
	      // remove is attribute.
	      // this is removed during compilation, but because compilation is
	      // cached, when the component is used elsewhere this attribute
	      // will remain at link time.
	      this.el.removeAttribute('is');
	      this.el.removeAttribute(':is');
	      // remove ref, same as above
	      if (this.descriptor.ref) {
	        this.el.removeAttribute('v-ref:' + hyphenate(this.descriptor.ref));
	      }
	      // if static, build right now.
	      if (this.literal) {
	        this.setComponent(this.expression);
	      }
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);
	    }
	  },

	  /**
	   * Public update, called by the watcher in the dynamic
	   * literal scenario, e.g. <component :is="view">
	   */

	  update: function update(value) {
	    if (!this.literal) {
	      this.setComponent(value);
	    }
	  },

	  /**
	   * Switch dynamic components. May resolve the component
	   * asynchronously, and perform transition based on
	   * specified transition mode. Accepts a few additional
	   * arguments specifically for vue-router.
	   *
	   * The callback is called when the full transition is
	   * finished.
	   *
	   * @param {String} value
	   * @param {Function} [cb]
	   */

	  setComponent: function setComponent(value, cb) {
	    this.invalidatePending();
	    if (!value) {
	      // just remove current
	      this.unbuild(true);
	      this.remove(this.childVM, cb);
	      this.childVM = null;
	    } else {
	      var self = this;
	      this.resolveComponent(value, function () {
	        self.mountComponent(cb);
	      });
	    }
	  },

	  /**
	   * Resolve the component constructor to use when creating
	   * the child vm.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */

	  resolveComponent: function resolveComponent(value, cb) {
	    var self = this;
	    this.pendingComponentCb = cancellable(function (Component) {
	      self.ComponentName = Component.options.name || (typeof value === 'string' ? value : null);
	      self.Component = Component;
	      cb();
	    });
	    this.vm._resolveComponent(value, this.pendingComponentCb);
	  },

	  /**
	   * Create a new instance using the current constructor and
	   * replace the existing instance. This method doesn't care
	   * whether the new component and the old one are actually
	   * the same.
	   *
	   * @param {Function} [cb]
	   */

	  mountComponent: function mountComponent(cb) {
	    // actual mount
	    this.unbuild(true);
	    var self = this;
	    var activateHooks = this.Component.options.activate;
	    var cached = this.getCached();
	    var newComponent = this.build();
	    if (activateHooks && !cached) {
	      this.waitingFor = newComponent;
	      callActivateHooks(activateHooks, newComponent, function () {
	        if (self.waitingFor !== newComponent) {
	          return;
	        }
	        self.waitingFor = null;
	        self.transition(newComponent, cb);
	      });
	    } else {
	      // update ref for kept-alive component
	      if (cached) {
	        newComponent._updateRef();
	      }
	      this.transition(newComponent, cb);
	    }
	  },

	  /**
	   * When the component changes or unbinds before an async
	   * constructor is resolved, we need to invalidate its
	   * pending callback.
	   */

	  invalidatePending: function invalidatePending() {
	    if (this.pendingComponentCb) {
	      this.pendingComponentCb.cancel();
	      this.pendingComponentCb = null;
	    }
	  },

	  /**
	   * Instantiate/insert a new child vm.
	   * If keep alive and has cached instance, insert that
	   * instance; otherwise build a new one and cache it.
	   *
	   * @param {Object} [extraOptions]
	   * @return {Vue} - the created instance
	   */

	  build: function build(extraOptions) {
	    var cached = this.getCached();
	    if (cached) {
	      return cached;
	    }
	    if (this.Component) {
	      // default options
	      var options = {
	        name: this.ComponentName,
	        el: cloneNode(this.el),
	        template: this.inlineTemplate,
	        // make sure to add the child with correct parent
	        // if this is a transcluded component, its parent
	        // should be the transclusion host.
	        parent: this._host || this.vm,
	        // if no inline-template, then the compiled
	        // linker can be cached for better performance.
	        _linkerCachable: !this.inlineTemplate,
	        _ref: this.descriptor.ref,
	        _asComponent: true,
	        _isRouterView: this._isRouterView,
	        // if this is a transcluded component, context
	        // will be the common parent vm of this instance
	        // and its host.
	        _context: this.vm,
	        // if this is inside an inline v-for, the scope
	        // will be the intermediate scope created for this
	        // repeat fragment. this is used for linking props
	        // and container directives.
	        _scope: this._scope,
	        // pass in the owner fragment of this component.
	        // this is necessary so that the fragment can keep
	        // track of its contained components in order to
	        // call attach/detach hooks for them.
	        _frag: this._frag
	      };
	      // extra options
	      // in 1.0.0 this is used by vue-router only
	      /* istanbul ignore if */
	      if (extraOptions) {
	        extend(options, extraOptions);
	      }
	      var child = new this.Component(options);
	      if (this.keepAlive) {
	        this.cache[this.Component.cid] = child;
	      }
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && this.el.hasAttribute('transition') && child._isFragment) {
	        warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template, child);
	      }
	      return child;
	    }
	  },

	  /**
	   * Try to get a cached instance of the current component.
	   *
	   * @return {Vue|undefined}
	   */

	  getCached: function getCached() {
	    return this.keepAlive && this.cache[this.Component.cid];
	  },

	  /**
	   * Teardown the current child, but defers cleanup so
	   * that we can separate the destroy and removal steps.
	   *
	   * @param {Boolean} defer
	   */

	  unbuild: function unbuild(defer) {
	    if (this.waitingFor) {
	      if (!this.keepAlive) {
	        this.waitingFor.$destroy();
	      }
	      this.waitingFor = null;
	    }
	    var child = this.childVM;
	    if (!child || this.keepAlive) {
	      if (child) {
	        // remove ref
	        child._inactive = true;
	        child._updateRef(true);
	      }
	      return;
	    }
	    // the sole purpose of `deferCleanup` is so that we can
	    // "deactivate" the vm right now and perform DOM removal
	    // later.
	    child.$destroy(false, defer);
	  },

	  /**
	   * Remove current destroyed child and manually do
	   * the cleanup after removal.
	   *
	   * @param {Function} cb
	   */

	  remove: function remove(child, cb) {
	    var keepAlive = this.keepAlive;
	    if (child) {
	      // we may have a component switch when a previous
	      // component is still being transitioned out.
	      // we want to trigger only one lastest insertion cb
	      // when the existing transition finishes. (#1119)
	      this.pendingRemovals++;
	      this.pendingRemovalCb = cb;
	      var self = this;
	      child.$remove(function () {
	        self.pendingRemovals--;
	        if (!keepAlive) child._cleanup();
	        if (!self.pendingRemovals && self.pendingRemovalCb) {
	          self.pendingRemovalCb();
	          self.pendingRemovalCb = null;
	        }
	      });
	    } else if (cb) {
	      cb();
	    }
	  },

	  /**
	   * Actually swap the components, depending on the
	   * transition mode. Defaults to simultaneous.
	   *
	   * @param {Vue} target
	   * @param {Function} [cb]
	   */

	  transition: function transition(target, cb) {
	    var self = this;
	    var current = this.childVM;
	    // for devtool inspection
	    if (current) current._inactive = true;
	    target._inactive = false;
	    this.childVM = target;
	    switch (self.params.transitionMode) {
	      case 'in-out':
	        target.$before(self.anchor, function () {
	          self.remove(current, cb);
	        });
	        break;
	      case 'out-in':
	        self.remove(current, function () {
	          target.$before(self.anchor, cb);
	        });
	        break;
	      default:
	        self.remove(current);
	        target.$before(self.anchor, cb);
	    }
	  },

	  /**
	   * Unbind.
	   */

	  unbind: function unbind() {
	    this.invalidatePending();
	    // Do not defer cleanup when unbinding
	    this.unbuild();
	    // destroy all keep-alive cached instances
	    if (this.cache) {
	      for (var key in this.cache) {
	        this.cache[key].$destroy();
	      }
	      this.cache = null;
	    }
	  }
	};

	/**
	 * Call activate hooks in order (asynchronous)
	 *
	 * @param {Array} hooks
	 * @param {Vue} vm
	 * @param {Function} cb
	 */

	function callActivateHooks(hooks, vm, cb) {
	  var total = hooks.length;
	  var called = 0;
	  hooks[0].call(vm, next);
	  function next() {
	    if (++called >= total) {
	      cb();
	    } else {
	      hooks[called].call(vm, next);
	    }
	  }
	}

	var propBindingModes = config._propBindingModes;
	var empty = {};

	// regexes
	var identRE$1 = /^[$_a-zA-Z]+[\w$]*$/;
	var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;

	/**
	 * Compile props on a root element and return
	 * a props link function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Array} propOptions
	 * @param {Vue} vm
	 * @return {Function} propsLinkFn
	 */

	function compileProps(el, propOptions, vm) {
	  var props = [];
	  var names = Object.keys(propOptions);
	  var i = names.length;
	  var options, name, attr, value, path, parsed, prop;
	  while (i--) {
	    name = names[i];
	    options = propOptions[name] || empty;

	    if (process.env.NODE_ENV !== 'production' && name === '$data') {
	      warn('Do not use $data as prop.', vm);
	      continue;
	    }

	    // props could contain dashes, which will be
	    // interpreted as minus calculations by the parser
	    // so we need to camelize the path here
	    path = camelize(name);
	    if (!identRE$1.test(path)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.', vm);
	      continue;
	    }

	    prop = {
	      name: name,
	      path: path,
	      options: options,
	      mode: propBindingModes.ONE_WAY,
	      raw: null
	    };

	    attr = hyphenate(name);
	    // first check dynamic version
	    if ((value = getBindAttr(el, attr)) === null) {
	      if ((value = getBindAttr(el, attr + '.sync')) !== null) {
	        prop.mode = propBindingModes.TWO_WAY;
	      } else if ((value = getBindAttr(el, attr + '.once')) !== null) {
	        prop.mode = propBindingModes.ONE_TIME;
	      }
	    }
	    if (value !== null) {
	      // has dynamic binding!
	      prop.raw = value;
	      parsed = parseDirective(value);
	      value = parsed.expression;
	      prop.filters = parsed.filters;
	      // check binding type
	      if (isLiteral(value) && !parsed.filters) {
	        // for expressions containing literal numbers and
	        // booleans, there's no need to setup a prop binding,
	        // so we can optimize them as a one-time set.
	        prop.optimizedLiteral = true;
	      } else {
	        prop.dynamic = true;
	        // check non-settable path for two-way bindings
	        if (process.env.NODE_ENV !== 'production' && prop.mode === propBindingModes.TWO_WAY && !settablePathRE.test(value)) {
	          prop.mode = propBindingModes.ONE_WAY;
	          warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value, vm);
	        }
	      }
	      prop.parentPath = value;

	      // warn required two-way
	      if (process.env.NODE_ENV !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY) {
	        warn('Prop "' + name + '" expects a two-way binding type.', vm);
	      }
	    } else if ((value = getAttr(el, attr)) !== null) {
	      // has literal binding!
	      prop.raw = value;
	    } else if (process.env.NODE_ENV !== 'production') {
	      // check possible camelCase prop usage
	      var lowerCaseName = path.toLowerCase();
	      value = /[A-Z\-]/.test(name) && (el.getAttribute(lowerCaseName) || el.getAttribute(':' + lowerCaseName) || el.getAttribute('v-bind:' + lowerCaseName) || el.getAttribute(':' + lowerCaseName + '.once') || el.getAttribute('v-bind:' + lowerCaseName + '.once') || el.getAttribute(':' + lowerCaseName + '.sync') || el.getAttribute('v-bind:' + lowerCaseName + '.sync'));
	      if (value) {
	        warn('Possible usage error for prop `' + lowerCaseName + '` - ' + 'did you mean `' + attr + '`? HTML is case-insensitive, remember to use ' + 'kebab-case for props in templates.', vm);
	      } else if (options.required) {
	        // warn missing required
	        warn('Missing required prop: ' + name, vm);
	      }
	    }
	    // push prop
	    props.push(prop);
	  }
	  return makePropsLinkFn(props);
	}

	/**
	 * Build a function that applies props to a vm.
	 *
	 * @param {Array} props
	 * @return {Function} propsLinkFn
	 */

	function makePropsLinkFn(props) {
	  return function propsLinkFn(vm, scope) {
	    // store resolved props info
	    vm._props = {};
	    var inlineProps = vm.$options.propsData;
	    var i = props.length;
	    var prop, path, options, value, raw;
	    while (i--) {
	      prop = props[i];
	      raw = prop.raw;
	      path = prop.path;
	      options = prop.options;
	      vm._props[path] = prop;
	      if (inlineProps && hasOwn(inlineProps, path)) {
	        initProp(vm, prop, inlineProps[path]);
	      }if (raw === null) {
	        // initialize absent prop
	        initProp(vm, prop, undefined);
	      } else if (prop.dynamic) {
	        // dynamic prop
	        if (prop.mode === propBindingModes.ONE_TIME) {
	          // one time binding
	          value = (scope || vm._context || vm).$get(prop.parentPath);
	          initProp(vm, prop, value);
	        } else {
	          if (vm._context) {
	            // dynamic binding
	            vm._bindDir({
	              name: 'prop',
	              def: propDef,
	              prop: prop
	            }, null, null, scope); // el, host, scope
	          } else {
	              // root instance
	              initProp(vm, prop, vm.$get(prop.parentPath));
	            }
	        }
	      } else if (prop.optimizedLiteral) {
	        // optimized literal, cast it and just set once
	        var stripped = stripQuotes(raw);
	        value = stripped === raw ? toBoolean(toNumber(raw)) : stripped;
	        initProp(vm, prop, value);
	      } else {
	        // string literal, but we need to cater for
	        // Boolean props with no value, or with same
	        // literal value (e.g. disabled="disabled")
	        // see https://github.com/vuejs/vue-loader/issues/182
	        value = options.type === Boolean && (raw === '' || raw === hyphenate(prop.name)) ? true : raw;
	        initProp(vm, prop, value);
	      }
	    }
	  };
	}

	/**
	 * Process a prop with a rawValue, applying necessary coersions,
	 * default values & assertions and call the given callback with
	 * processed value.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} rawValue
	 * @param {Function} fn
	 */

	function processPropValue(vm, prop, rawValue, fn) {
	  var isSimple = prop.dynamic && isSimplePath(prop.parentPath);
	  var value = rawValue;
	  if (value === undefined) {
	    value = getPropDefaultValue(vm, prop);
	  }
	  value = coerceProp(prop, value, vm);
	  var coerced = value !== rawValue;
	  if (!assertProp(prop, value, vm)) {
	    value = undefined;
	  }
	  if (isSimple && !coerced) {
	    withoutConversion(function () {
	      fn(value);
	    });
	  } else {
	    fn(value);
	  }
	}

	/**
	 * Set a prop's initial value on a vm and its data object.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */

	function initProp(vm, prop, value) {
	  processPropValue(vm, prop, value, function (value) {
	    defineReactive(vm, prop.path, value);
	  });
	}

	/**
	 * Update a prop's value on a vm.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */

	function updateProp(vm, prop, value) {
	  processPropValue(vm, prop, value, function (value) {
	    vm[prop.path] = value;
	  });
	}

	/**
	 * Get the default value of a prop.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @return {*}
	 */

	function getPropDefaultValue(vm, prop) {
	  // no default, return undefined
	  var options = prop.options;
	  if (!hasOwn(options, 'default')) {
	    // absent boolean value defaults to false
	    return options.type === Boolean ? false : undefined;
	  }
	  var def = options['default'];
	  // warn against non-factory defaults for Object & Array
	  if (isObject(def)) {
	    process.env.NODE_ENV !== 'production' && warn('Invalid default value for prop "' + prop.name + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && options.type !== Function ? def.call(vm) : def;
	}

	/**
	 * Assert whether a prop is valid.
	 *
	 * @param {Object} prop
	 * @param {*} value
	 * @param {Vue} vm
	 */

	function assertProp(prop, value, vm) {
	  if (!prop.options.required && ( // non-required
	  prop.raw === null || // abscent
	  value == null) // null or undefined
	  ) {
	      return true;
	    }
	  var options = prop.options;
	  var type = options.type;
	  var valid = !type;
	  var expectedTypes = [];
	  if (type) {
	    if (!isArray(type)) {
	      type = [type];
	    }
	    for (var i = 0; i < type.length && !valid; i++) {
	      var assertedType = assertType(value, type[i]);
	      expectedTypes.push(assertedType.expectedType);
	      valid = assertedType.valid;
	    }
	  }
	  if (!valid) {
	    if (process.env.NODE_ENV !== 'production') {
	      warn('Invalid prop: type check failed for prop "' + prop.name + '".' + ' Expected ' + expectedTypes.map(formatType).join(', ') + ', got ' + formatValue(value) + '.', vm);
	    }
	    return false;
	  }
	  var validator = options.validator;
	  if (validator) {
	    if (!validator(value)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop: custom validator check failed for prop "' + prop.name + '".', vm);
	      return false;
	    }
	  }
	  return true;
	}

	/**
	 * Force parsing value with coerce option.
	 *
	 * @param {*} value
	 * @param {Object} options
	 * @return {*}
	 */

	function coerceProp(prop, value, vm) {
	  var coerce = prop.options.coerce;
	  if (!coerce) {
	    return value;
	  }
	  if (typeof coerce === 'function') {
	    return coerce(value);
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid coerce for prop "' + prop.name + '": expected function, got ' + typeof coerce + '.', vm);
	    return value;
	  }
	}

	/**
	 * Assert the type of a value
	 *
	 * @param {*} value
	 * @param {Function} type
	 * @return {Object}
	 */

	function assertType(value, type) {
	  var valid;
	  var expectedType;
	  if (type === String) {
	    expectedType = 'string';
	    valid = typeof value === expectedType;
	  } else if (type === Number) {
	    expectedType = 'number';
	    valid = typeof value === expectedType;
	  } else if (type === Boolean) {
	    expectedType = 'boolean';
	    valid = typeof value === expectedType;
	  } else if (type === Function) {
	    expectedType = 'function';
	    valid = typeof value === expectedType;
	  } else if (type === Object) {
	    expectedType = 'object';
	    valid = isPlainObject(value);
	  } else if (type === Array) {
	    expectedType = 'array';
	    valid = isArray(value);
	  } else {
	    valid = value instanceof type;
	  }
	  return {
	    valid: valid,
	    expectedType: expectedType
	  };
	}

	/**
	 * Format type for output
	 *
	 * @param {String} type
	 * @return {String}
	 */

	function formatType(type) {
	  return type ? type.charAt(0).toUpperCase() + type.slice(1) : 'custom type';
	}

	/**
	 * Format value
	 *
	 * @param {*} value
	 * @return {String}
	 */

	function formatValue(val) {
	  return Object.prototype.toString.call(val).slice(8, -1);
	}

	var bindingModes = config._propBindingModes;

	var propDef = {

	  bind: function bind() {
	    var child = this.vm;
	    var parent = child._context;
	    // passed in from compiler directly
	    var prop = this.descriptor.prop;
	    var childKey = prop.path;
	    var parentKey = prop.parentPath;
	    var twoWay = prop.mode === bindingModes.TWO_WAY;

	    var parentWatcher = this.parentWatcher = new Watcher(parent, parentKey, function (val) {
	      updateProp(child, prop, val);
	    }, {
	      twoWay: twoWay,
	      filters: prop.filters,
	      // important: props need to be observed on the
	      // v-for scope if present
	      scope: this._scope
	    });

	    // set the child initial value.
	    initProp(child, prop, parentWatcher.value);

	    // setup two-way binding
	    if (twoWay) {
	      // important: defer the child watcher creation until
	      // the created hook (after data observation)
	      var self = this;
	      child.$once('pre-hook:created', function () {
	        self.childWatcher = new Watcher(child, childKey, function (val) {
	          parentWatcher.set(val);
	        }, {
	          // ensure sync upward before parent sync down.
	          // this is necessary in cases e.g. the child
	          // mutates a prop array, then replaces it. (#1683)
	          sync: true
	        });
	      });
	    }
	  },

	  unbind: function unbind() {
	    this.parentWatcher.teardown();
	    if (this.childWatcher) {
	      this.childWatcher.teardown();
	    }
	  }
	};

	var queue$1 = [];
	var queued = false;

	/**
	 * Push a job into the queue.
	 *
	 * @param {Function} job
	 */

	function pushJob(job) {
	  queue$1.push(job);
	  if (!queued) {
	    queued = true;
	    nextTick(flush);
	  }
	}

	/**
	 * Flush the queue, and do one forced reflow before
	 * triggering transitions.
	 */

	function flush() {
	  // Force layout
	  var f = document.documentElement.offsetHeight;
	  for (var i = 0; i < queue$1.length; i++) {
	    queue$1[i]();
	  }
	  queue$1 = [];
	  queued = false;
	  // dummy return, so js linters don't complain about
	  // unused variable f
	  return f;
	}

	var TYPE_TRANSITION = 'transition';
	var TYPE_ANIMATION = 'animation';
	var transDurationProp = transitionProp + 'Duration';
	var animDurationProp = animationProp + 'Duration';

	/**
	 * If a just-entered element is applied the
	 * leave class while its enter transition hasn't started yet,
	 * and the transitioned property has the same value for both
	 * enter/leave, then the leave transition will be skipped and
	 * the transitionend event never fires. This function ensures
	 * its callback to be called after a transition has started
	 * by waiting for double raf.
	 *
	 * It falls back to setTimeout on devices that support CSS
	 * transitions but not raf (e.g. Android 4.2 browser) - since
	 * these environments are usually slow, we are giving it a
	 * relatively large timeout.
	 */

	var raf = inBrowser && window.requestAnimationFrame;
	var waitForTransitionStart = raf
	/* istanbul ignore next */
	? function (fn) {
	  raf(function () {
	    raf(fn);
	  });
	} : function (fn) {
	  setTimeout(fn, 50);
	};

	/**
	 * A Transition object that encapsulates the state and logic
	 * of the transition.
	 *
	 * @param {Element} el
	 * @param {String} id
	 * @param {Object} hooks
	 * @param {Vue} vm
	 */
	function Transition(el, id, hooks, vm) {
	  this.id = id;
	  this.el = el;
	  this.enterClass = hooks && hooks.enterClass || id + '-enter';
	  this.leaveClass = hooks && hooks.leaveClass || id + '-leave';
	  this.hooks = hooks;
	  this.vm = vm;
	  // async state
	  this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
	  this.justEntered = false;
	  this.entered = this.left = false;
	  this.typeCache = {};
	  // check css transition type
	  this.type = hooks && hooks.type;
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV !== 'production') {
	    if (this.type && this.type !== TYPE_TRANSITION && this.type !== TYPE_ANIMATION) {
	      warn('invalid CSS transition type for transition="' + this.id + '": ' + this.type, vm);
	    }
	  }
	  // bind
	  var self = this;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone'].forEach(function (m) {
	    self[m] = bind(self[m], self);
	  });
	}

	var p$1 = Transition.prototype;

	/**
	 * Start an entering transition.
	 *
	 * 1. enter transition triggered
	 * 2. call beforeEnter hook
	 * 3. add enter class
	 * 4. insert/show element
	 * 5. call enter hook (with possible explicit js callback)
	 * 6. reflow
	 * 7. based on transition type:
	 *    - transition:
	 *        remove class now, wait for transitionend,
	 *        then done if there's no explicit js callback.
	 *    - animation:
	 *        wait for animationend, remove class,
	 *        then done if there's no explicit js callback.
	 *    - no css transition:
	 *        done now if there's no explicit js callback.
	 * 8. wait for either done or js callback, then call
	 *    afterEnter hook.
	 *
	 * @param {Function} op - insert/show the element
	 * @param {Function} [cb]
	 */

	p$1.enter = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeEnter');
	  this.cb = cb;
	  addClass(this.el, this.enterClass);
	  op();
	  this.entered = false;
	  this.callHookWithCb('enter');
	  if (this.entered) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.enterCancelled;
	  pushJob(this.enterNextTick);
	};

	/**
	 * The "nextTick" phase of an entering transition, which is
	 * to be pushed into a queue and executed after a reflow so
	 * that removing the class can trigger a CSS transition.
	 */

	p$1.enterNextTick = function () {
	  var _this = this;

	  // prevent transition skipping
	  this.justEntered = true;
	  waitForTransitionStart(function () {
	    _this.justEntered = false;
	  });
	  var enterDone = this.enterDone;
	  var type = this.getCssTransitionType(this.enterClass);
	  if (!this.pendingJsCb) {
	    if (type === TYPE_TRANSITION) {
	      // trigger transition by removing enter class now
	      removeClass(this.el, this.enterClass);
	      this.setupCssCb(transitionEndEvent, enterDone);
	    } else if (type === TYPE_ANIMATION) {
	      this.setupCssCb(animationEndEvent, enterDone);
	    } else {
	      enterDone();
	    }
	  } else if (type === TYPE_TRANSITION) {
	    removeClass(this.el, this.enterClass);
	  }
	};

	/**
	 * The "cleanup" phase of an entering transition.
	 */

	p$1.enterDone = function () {
	  this.entered = true;
	  this.cancel = this.pendingJsCb = null;
	  removeClass(this.el, this.enterClass);
	  this.callHook('afterEnter');
	  if (this.cb) this.cb();
	};

	/**
	 * Start a leaving transition.
	 *
	 * 1. leave transition triggered.
	 * 2. call beforeLeave hook
	 * 3. add leave class (trigger css transition)
	 * 4. call leave hook (with possible explicit js callback)
	 * 5. reflow if no explicit js callback is provided
	 * 6. based on transition type:
	 *    - transition or animation:
	 *        wait for end event, remove class, then done if
	 *        there's no explicit js callback.
	 *    - no css transition:
	 *        done if there's no explicit js callback.
	 * 7. wait for either done or js callback, then call
	 *    afterLeave hook.
	 *
	 * @param {Function} op - remove/hide the element
	 * @param {Function} [cb]
	 */

	p$1.leave = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeLeave');
	  this.op = op;
	  this.cb = cb;
	  addClass(this.el, this.leaveClass);
	  this.left = false;
	  this.callHookWithCb('leave');
	  if (this.left) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.leaveCancelled;
	  // only need to handle leaveDone if
	  // 1. the transition is already done (synchronously called
	  //    by the user, which causes this.op set to null)
	  // 2. there's no explicit js callback
	  if (this.op && !this.pendingJsCb) {
	    // if a CSS transition leaves immediately after enter,
	    // the transitionend event never fires. therefore we
	    // detect such cases and end the leave immediately.
	    if (this.justEntered) {
	      this.leaveDone();
	    } else {
	      pushJob(this.leaveNextTick);
	    }
	  }
	};

	/**
	 * The "nextTick" phase of a leaving transition.
	 */

	p$1.leaveNextTick = function () {
	  var type = this.getCssTransitionType(this.leaveClass);
	  if (type) {
	    var event = type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
	    this.setupCssCb(event, this.leaveDone);
	  } else {
	    this.leaveDone();
	  }
	};

	/**
	 * The "cleanup" phase of a leaving transition.
	 */

	p$1.leaveDone = function () {
	  this.left = true;
	  this.cancel = this.pendingJsCb = null;
	  this.op();
	  removeClass(this.el, this.leaveClass);
	  this.callHook('afterLeave');
	  if (this.cb) this.cb();
	  this.op = null;
	};

	/**
	 * Cancel any pending callbacks from a previously running
	 * but not finished transition.
	 */

	p$1.cancelPending = function () {
	  this.op = this.cb = null;
	  var hasPending = false;
	  if (this.pendingCssCb) {
	    hasPending = true;
	    off(this.el, this.pendingCssEvent, this.pendingCssCb);
	    this.pendingCssEvent = this.pendingCssCb = null;
	  }
	  if (this.pendingJsCb) {
	    hasPending = true;
	    this.pendingJsCb.cancel();
	    this.pendingJsCb = null;
	  }
	  if (hasPending) {
	    removeClass(this.el, this.enterClass);
	    removeClass(this.el, this.leaveClass);
	  }
	  if (this.cancel) {
	    this.cancel.call(this.vm, this.el);
	    this.cancel = null;
	  }
	};

	/**
	 * Call a user-provided synchronous hook function.
	 *
	 * @param {String} type
	 */

	p$1.callHook = function (type) {
	  if (this.hooks && this.hooks[type]) {
	    this.hooks[type].call(this.vm, this.el);
	  }
	};

	/**
	 * Call a user-provided, potentially-async hook function.
	 * We check for the length of arguments to see if the hook
	 * expects a `done` callback. If true, the transition's end
	 * will be determined by when the user calls that callback;
	 * otherwise, the end is determined by the CSS transition or
	 * animation.
	 *
	 * @param {String} type
	 */

	p$1.callHookWithCb = function (type) {
	  var hook = this.hooks && this.hooks[type];
	  if (hook) {
	    if (hook.length > 1) {
	      this.pendingJsCb = cancellable(this[type + 'Done']);
	    }
	    hook.call(this.vm, this.el, this.pendingJsCb);
	  }
	};

	/**
	 * Get an element's transition type based on the
	 * calculated styles.
	 *
	 * @param {String} className
	 * @return {Number}
	 */

	p$1.getCssTransitionType = function (className) {
	  /* istanbul ignore if */
	  if (!transitionEndEvent ||
	  // skip CSS transitions if page is not visible -
	  // this solves the issue of transitionend events not
	  // firing until the page is visible again.
	  // pageVisibility API is supported in IE10+, same as
	  // CSS transitions.
	  document.hidden ||
	  // explicit js-only transition
	  this.hooks && this.hooks.css === false ||
	  // element is hidden
	  isHidden(this.el)) {
	    return;
	  }
	  var type = this.type || this.typeCache[className];
	  if (type) return type;
	  var inlineStyles = this.el.style;
	  var computedStyles = window.getComputedStyle(this.el);
	  var transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
	  if (transDuration && transDuration !== '0s') {
	    type = TYPE_TRANSITION;
	  } else {
	    var animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
	    if (animDuration && animDuration !== '0s') {
	      type = TYPE_ANIMATION;
	    }
	  }
	  if (type) {
	    this.typeCache[className] = type;
	  }
	  return type;
	};

	/**
	 * Setup a CSS transitionend/animationend callback.
	 *
	 * @param {String} event
	 * @param {Function} cb
	 */

	p$1.setupCssCb = function (event, cb) {
	  this.pendingCssEvent = event;
	  var self = this;
	  var el = this.el;
	  var onEnd = this.pendingCssCb = function (e) {
	    if (e.target === el) {
	      off(el, event, onEnd);
	      self.pendingCssEvent = self.pendingCssCb = null;
	      if (!self.pendingJsCb && cb) {
	        cb();
	      }
	    }
	  };
	  on(el, event, onEnd);
	};

	/**
	 * Check if an element is hidden - in that case we can just
	 * skip the transition alltogether.
	 *
	 * @param {Element} el
	 * @return {Boolean}
	 */

	function isHidden(el) {
	  if (/svg$/.test(el.namespaceURI)) {
	    // SVG elements do not have offset(Width|Height)
	    // so we need to check the client rect
	    var rect = el.getBoundingClientRect();
	    return !(rect.width || rect.height);
	  } else {
	    return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
	  }
	}

	var transition$1 = {

	  priority: TRANSITION,

	  update: function update(id, oldId) {
	    var el = this.el;
	    // resolve on owner vm
	    var hooks = resolveAsset(this.vm.$options, 'transitions', id);
	    id = id || 'v';
	    oldId = oldId || 'v';
	    el.__v_trans = new Transition(el, id, hooks, this.vm);
	    removeClass(el, oldId + '-transition');
	    addClass(el, id + '-transition');
	  }
	};

	var internalDirectives = {
	  style: style,
	  'class': vClass,
	  component: component,
	  prop: propDef,
	  transition: transition$1
	};

	// special binding prefixes
	var bindRE = /^v-bind:|^:/;
	var onRE = /^v-on:|^@/;
	var dirAttrRE = /^v-([^:]+)(?:$|:(.*)$)/;
	var modifierRE = /\.[^\.]+/g;
	var transitionRE = /^(v-bind:|:)?transition$/;

	// default directive priority
	var DEFAULT_PRIORITY = 1000;
	var DEFAULT_TERMINAL_PRIORITY = 2000;

	/**
	 * Compile a template and return a reusable composite link
	 * function, which recursively contains more link functions
	 * inside. This top level compile function would normally
	 * be called on instance root nodes, but can also be used
	 * for partial compilation if the partial argument is true.
	 *
	 * The returned composite link function, when called, will
	 * return an unlink function that tearsdown all directives
	 * created during the linking phase.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Object} options
	 * @param {Boolean} partial
	 * @return {Function}
	 */

	function compile(el, options, partial) {
	  // link function for the node itself.
	  var nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
	  // link function for the childNodes
	  var childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && !isScript(el) && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;

	  /**
	   * A composite linker function to be called on a already
	   * compiled piece of DOM, which instantiates all directive
	   * instances.
	   *
	   * @param {Vue} vm
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host] - host vm of transcluded content
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - link context fragment
	   * @return {Function|undefined}
	   */

	  return function compositeLinkFn(vm, el, host, scope, frag) {
	    // cache childNodes before linking parent, fix #657
	    var childNodes = toArray(el.childNodes);
	    // link
	    var dirs = linkAndCapture(function compositeLinkCapturer() {
	      if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag);
	      if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag);
	    }, vm);
	    return makeUnlinkFn(vm, dirs);
	  };
	}

	/**
	 * Apply a linker to a vm/element pair and capture the
	 * directives created during the process.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 */

	function linkAndCapture(linker, vm) {
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV === 'production') {
	    // reset directives before every capture in production
	    // mode, so that when unlinking we don't need to splice
	    // them out (which turns out to be a perf hit).
	    // they are kept in development mode because they are
	    // useful for Vue's own tests.
	    vm._directives = [];
	  }
	  var originalDirCount = vm._directives.length;
	  linker();
	  var dirs = vm._directives.slice(originalDirCount);
	  dirs.sort(directiveComparator);
	  for (var i = 0, l = dirs.length; i < l; i++) {
	    dirs[i]._bind();
	  }
	  return dirs;
	}

	/**
	 * Directive priority sort comparator
	 *
	 * @param {Object} a
	 * @param {Object} b
	 */

	function directiveComparator(a, b) {
	  a = a.descriptor.def.priority || DEFAULT_PRIORITY;
	  b = b.descriptor.def.priority || DEFAULT_PRIORITY;
	  return a > b ? -1 : a === b ? 0 : 1;
	}

	/**
	 * Linker functions return an unlink function that
	 * tearsdown all directives instances generated during
	 * the process.
	 *
	 * We create unlink functions with only the necessary
	 * information to avoid retaining additional closures.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Vue} [context]
	 * @param {Array} [contextDirs]
	 * @return {Function}
	 */

	function makeUnlinkFn(vm, dirs, context, contextDirs) {
	  function unlink(destroying) {
	    teardownDirs(vm, dirs, destroying);
	    if (context && contextDirs) {
	      teardownDirs(context, contextDirs);
	    }
	  }
	  // expose linked directives
	  unlink.dirs = dirs;
	  return unlink;
	}

	/**
	 * Teardown partial linked directives.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Boolean} destroying
	 */

	function teardownDirs(vm, dirs, destroying) {
	  var i = dirs.length;
	  while (i--) {
	    dirs[i]._teardown();
	    if (process.env.NODE_ENV !== 'production' && !destroying) {
	      vm._directives.$remove(dirs[i]);
	    }
	  }
	}

	/**
	 * Compile link props on an instance.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} props
	 * @param {Object} [scope]
	 * @return {Function}
	 */

	function compileAndLinkProps(vm, el, props, scope) {
	  var propsLinkFn = compileProps(el, props, vm);
	  var propDirs = linkAndCapture(function () {
	    propsLinkFn(vm, scope);
	  }, vm);
	  return makeUnlinkFn(vm, propDirs);
	}

	/**
	 * Compile the root element of an instance.
	 *
	 * 1. attrs on context container (context scope)
	 * 2. attrs on the component template root node, if
	 *    replace:true (child scope)
	 *
	 * If this is a fragment instance, we only need to compile 1.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @param {Object} contextOptions
	 * @return {Function}
	 */

	function compileRoot(el, options, contextOptions) {
	  var containerAttrs = options._containerAttrs;
	  var replacerAttrs = options._replacerAttrs;
	  var contextLinkFn, replacerLinkFn;

	  // only need to compile other attributes for
	  // non-fragment instances
	  if (el.nodeType !== 11) {
	    // for components, container and replacer need to be
	    // compiled separately and linked in different scopes.
	    if (options._asComponent) {
	      // 2. container attributes
	      if (containerAttrs && contextOptions) {
	        contextLinkFn = compileDirectives(containerAttrs, contextOptions);
	      }
	      if (replacerAttrs) {
	        // 3. replacer attributes
	        replacerLinkFn = compileDirectives(replacerAttrs, options);
	      }
	    } else {
	      // non-component, just compile as a normal element.
	      replacerLinkFn = compileDirectives(el.attributes, options);
	    }
	  } else if (process.env.NODE_ENV !== 'production' && containerAttrs) {
	    // warn container directives for fragment instances
	    var names = containerAttrs.filter(function (attr) {
	      // allow vue-loader/vueify scoped css attributes
	      return attr.name.indexOf('_v-') < 0 &&
	      // allow event listeners
	      !onRE.test(attr.name) &&
	      // allow slots
	      attr.name !== 'slot';
	    }).map(function (attr) {
	      return '"' + attr.name + '"';
	    });
	    if (names.length) {
	      var plural = names.length > 1;
	      warn('Attribute' + (plural ? 's ' : ' ') + names.join(', ') + (plural ? ' are' : ' is') + ' ignored on component ' + '<' + options.el.tagName.toLowerCase() + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment-Instance');
	    }
	  }

	  options._containerAttrs = options._replacerAttrs = null;
	  return function rootLinkFn(vm, el, scope) {
	    // link context scope dirs
	    var context = vm._context;
	    var contextDirs;
	    if (context && contextLinkFn) {
	      contextDirs = linkAndCapture(function () {
	        contextLinkFn(context, el, null, scope);
	      }, context);
	    }

	    // link self
	    var selfDirs = linkAndCapture(function () {
	      if (replacerLinkFn) replacerLinkFn(vm, el);
	    }, vm);

	    // return the unlink function that tearsdown context
	    // container directives.
	    return makeUnlinkFn(vm, selfDirs, context, contextDirs);
	  };
	}

	/**
	 * Compile a node and return a nodeLinkFn based on the
	 * node type.
	 *
	 * @param {Node} node
	 * @param {Object} options
	 * @return {Function|null}
	 */

	function compileNode(node, options) {
	  var type = node.nodeType;
	  if (type === 1 && !isScript(node)) {
	    return compileElement(node, options);
	  } else if (type === 3 && node.data.trim()) {
	    return compileTextNode(node, options);
	  } else {
	    return null;
	  }
	}

	/**
	 * Compile an element and return a nodeLinkFn.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|null}
	 */

	function compileElement(el, options) {
	  // preprocess textareas.
	  // textarea treats its text content as the initial value.
	  // just bind it as an attr directive for value.
	  if (el.tagName === 'TEXTAREA') {
	    var tokens = parseText(el.value);
	    if (tokens) {
	      el.setAttribute(':value', tokensToExp(tokens));
	      el.value = '';
	    }
	  }
	  var linkFn;
	  var hasAttrs = el.hasAttributes();
	  var attrs = hasAttrs && toArray(el.attributes);
	  // check terminal directives (for & if)
	  if (hasAttrs) {
	    linkFn = checkTerminalDirectives(el, attrs, options);
	  }
	  // check element directives
	  if (!linkFn) {
	    linkFn = checkElementDirectives(el, options);
	  }
	  // check component
	  if (!linkFn) {
	    linkFn = checkComponent(el, options);
	  }
	  // normal directives
	  if (!linkFn && hasAttrs) {
	    linkFn = compileDirectives(attrs, options);
	  }
	  return linkFn;
	}

	/**
	 * Compile a textNode and return a nodeLinkFn.
	 *
	 * @param {TextNode} node
	 * @param {Object} options
	 * @return {Function|null} textNodeLinkFn
	 */

	function compileTextNode(node, options) {
	  // skip marked text nodes
	  if (node._skip) {
	    return removeText;
	  }

	  var tokens = parseText(node.wholeText);
	  if (!tokens) {
	    return null;
	  }

	  // mark adjacent text nodes as skipped,
	  // because we are using node.wholeText to compile
	  // all adjacent text nodes together. This fixes
	  // issues in IE where sometimes it splits up a single
	  // text node into multiple ones.
	  var next = node.nextSibling;
	  while (next && next.nodeType === 3) {
	    next._skip = true;
	    next = next.nextSibling;
	  }

	  var frag = document.createDocumentFragment();
	  var el, token;
	  for (var i = 0, l = tokens.length; i < l; i++) {
	    token = tokens[i];
	    el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
	    frag.appendChild(el);
	  }
	  return makeTextNodeLinkFn(tokens, frag, options);
	}

	/**
	 * Linker for an skipped text node.
	 *
	 * @param {Vue} vm
	 * @param {Text} node
	 */

	function removeText(vm, node) {
	  remove(node);
	}

	/**
	 * Process a single text token.
	 *
	 * @param {Object} token
	 * @param {Object} options
	 * @return {Node}
	 */

	function processTextToken(token, options) {
	  var el;
	  if (token.oneTime) {
	    el = document.createTextNode(token.value);
	  } else {
	    if (token.html) {
	      el = document.createComment('v-html');
	      setTokenType('html');
	    } else {
	      // IE will clean up empty textNodes during
	      // frag.cloneNode(true), so we have to give it
	      // something here...
	      el = document.createTextNode(' ');
	      setTokenType('text');
	    }
	  }
	  function setTokenType(type) {
	    if (token.descriptor) return;
	    var parsed = parseDirective(token.value);
	    token.descriptor = {
	      name: type,
	      def: directives[type],
	      expression: parsed.expression,
	      filters: parsed.filters
	    };
	  }
	  return el;
	}

	/**
	 * Build a function that processes a textNode.
	 *
	 * @param {Array<Object>} tokens
	 * @param {DocumentFragment} frag
	 */

	function makeTextNodeLinkFn(tokens, frag) {
	  return function textNodeLinkFn(vm, el, host, scope) {
	    var fragClone = frag.cloneNode(true);
	    var childNodes = toArray(fragClone.childNodes);
	    var token, value, node;
	    for (var i = 0, l = tokens.length; i < l; i++) {
	      token = tokens[i];
	      value = token.value;
	      if (token.tag) {
	        node = childNodes[i];
	        if (token.oneTime) {
	          value = (scope || vm).$eval(value);
	          if (token.html) {
	            replace(node, parseTemplate(value, true));
	          } else {
	            node.data = _toString(value);
	          }
	        } else {
	          vm._bindDir(token.descriptor, node, host, scope);
	        }
	      }
	    }
	    replace(el, fragClone);
	  };
	}

	/**
	 * Compile a node list and return a childLinkFn.
	 *
	 * @param {NodeList} nodeList
	 * @param {Object} options
	 * @return {Function|undefined}
	 */

	function compileNodeList(nodeList, options) {
	  var linkFns = [];
	  var nodeLinkFn, childLinkFn, node;
	  for (var i = 0, l = nodeList.length; i < l; i++) {
	    node = nodeList[i];
	    nodeLinkFn = compileNode(node, options);
	    childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
	    linkFns.push(nodeLinkFn, childLinkFn);
	  }
	  return linkFns.length ? makeChildLinkFn(linkFns) : null;
	}

	/**
	 * Make a child link function for a node's childNodes.
	 *
	 * @param {Array<Function>} linkFns
	 * @return {Function} childLinkFn
	 */

	function makeChildLinkFn(linkFns) {
	  return function childLinkFn(vm, nodes, host, scope, frag) {
	    var node, nodeLinkFn, childrenLinkFn;
	    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
	      node = nodes[n];
	      nodeLinkFn = linkFns[i++];
	      childrenLinkFn = linkFns[i++];
	      // cache childNodes before linking parent, fix #657
	      var childNodes = toArray(node.childNodes);
	      if (nodeLinkFn) {
	        nodeLinkFn(vm, node, host, scope, frag);
	      }
	      if (childrenLinkFn) {
	        childrenLinkFn(vm, childNodes, host, scope, frag);
	      }
	    }
	  };
	}

	/**
	 * Check for element directives (custom elements that should
	 * be resovled as terminal directives).
	 *
	 * @param {Element} el
	 * @param {Object} options
	 */

	function checkElementDirectives(el, options) {
	  var tag = el.tagName.toLowerCase();
	  if (commonTagRE.test(tag)) {
	    return;
	  }
	  var def = resolveAsset(options, 'elementDirectives', tag);
	  if (def) {
	    return makeTerminalNodeLinkFn(el, tag, '', options, def);
	  }
	}

	/**
	 * Check if an element is a component. If yes, return
	 * a component link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|undefined}
	 */

	function checkComponent(el, options) {
	  var component = checkComponentAttr(el, options);
	  if (component) {
	    var ref = findRef(el);
	    var descriptor = {
	      name: 'component',
	      ref: ref,
	      expression: component.id,
	      def: internalDirectives.component,
	      modifiers: {
	        literal: !component.dynamic
	      }
	    };
	    var componentLinkFn = function componentLinkFn(vm, el, host, scope, frag) {
	      if (ref) {
	        defineReactive((scope || vm).$refs, ref, null);
	      }
	      vm._bindDir(descriptor, el, host, scope, frag);
	    };
	    componentLinkFn.terminal = true;
	    return componentLinkFn;
	  }
	}

	/**
	 * Check an element for terminal directives in fixed order.
	 * If it finds one, return a terminal link function.
	 *
	 * @param {Element} el
	 * @param {Array} attrs
	 * @param {Object} options
	 * @return {Function} terminalLinkFn
	 */

	function checkTerminalDirectives(el, attrs, options) {
	  // skip v-pre
	  if (getAttr(el, 'v-pre') !== null) {
	    return skip;
	  }
	  // skip v-else block, but only if following v-if
	  if (el.hasAttribute('v-else')) {
	    var prev = el.previousElementSibling;
	    if (prev && prev.hasAttribute('v-if')) {
	      return skip;
	    }
	  }

	  var attr, name, value, modifiers, matched, dirName, rawName, arg, def, termDef;
	  for (var i = 0, j = attrs.length; i < j; i++) {
	    attr = attrs[i];
	    name = attr.name.replace(modifierRE, '');
	    if (matched = name.match(dirAttrRE)) {
	      def = resolveAsset(options, 'directives', matched[1]);
	      if (def && def.terminal) {
	        if (!termDef || (def.priority || DEFAULT_TERMINAL_PRIORITY) > termDef.priority) {
	          termDef = def;
	          rawName = attr.name;
	          modifiers = parseModifiers(attr.name);
	          value = attr.value;
	          dirName = matched[1];
	          arg = matched[2];
	        }
	      }
	    }
	  }

	  if (termDef) {
	    return makeTerminalNodeLinkFn(el, dirName, value, options, termDef, rawName, arg, modifiers);
	  }
	}

	function skip() {}
	skip.terminal = true;

	/**
	 * Build a node link function for a terminal directive.
	 * A terminal link function terminates the current
	 * compilation recursion and handles compilation of the
	 * subtree in the directive.
	 *
	 * @param {Element} el
	 * @param {String} dirName
	 * @param {String} value
	 * @param {Object} options
	 * @param {Object} def
	 * @param {String} [rawName]
	 * @param {String} [arg]
	 * @param {Object} [modifiers]
	 * @return {Function} terminalLinkFn
	 */

	function makeTerminalNodeLinkFn(el, dirName, value, options, def, rawName, arg, modifiers) {
	  var parsed = parseDirective(value);
	  var descriptor = {
	    name: dirName,
	    arg: arg,
	    expression: parsed.expression,
	    filters: parsed.filters,
	    raw: value,
	    attr: rawName,
	    modifiers: modifiers,
	    def: def
	  };
	  // check ref for v-for and router-view
	  if (dirName === 'for' || dirName === 'router-view') {
	    descriptor.ref = findRef(el);
	  }
	  var fn = function terminalNodeLinkFn(vm, el, host, scope, frag) {
	    if (descriptor.ref) {
	      defineReactive((scope || vm).$refs, descriptor.ref, null);
	    }
	    vm._bindDir(descriptor, el, host, scope, frag);
	  };
	  fn.terminal = true;
	  return fn;
	}

	/**
	 * Compile the directives on an element and return a linker.
	 *
	 * @param {Array|NamedNodeMap} attrs
	 * @param {Object} options
	 * @return {Function}
	 */

	function compileDirectives(attrs, options) {
	  var i = attrs.length;
	  var dirs = [];
	  var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens, matched;
	  while (i--) {
	    attr = attrs[i];
	    name = rawName = attr.name;
	    value = rawValue = attr.value;
	    tokens = parseText(value);
	    // reset arg
	    arg = null;
	    // check modifiers
	    modifiers = parseModifiers(name);
	    name = name.replace(modifierRE, '');

	    // attribute interpolations
	    if (tokens) {
	      value = tokensToExp(tokens);
	      arg = name;
	      pushDir('bind', directives.bind, tokens);
	      // warn against mixing mustaches with v-bind
	      if (process.env.NODE_ENV !== 'production') {
	        if (name === 'class' && Array.prototype.some.call(attrs, function (attr) {
	          return attr.name === ':class' || attr.name === 'v-bind:class';
	        })) {
	          warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.', options);
	        }
	      }
	    } else

	      // special attribute: transition
	      if (transitionRE.test(name)) {
	        modifiers.literal = !bindRE.test(name);
	        pushDir('transition', internalDirectives.transition);
	      } else

	        // event handlers
	        if (onRE.test(name)) {
	          arg = name.replace(onRE, '');
	          pushDir('on', directives.on);
	        } else

	          // attribute bindings
	          if (bindRE.test(name)) {
	            dirName = name.replace(bindRE, '');
	            if (dirName === 'style' || dirName === 'class') {
	              pushDir(dirName, internalDirectives[dirName]);
	            } else {
	              arg = dirName;
	              pushDir('bind', directives.bind);
	            }
	          } else

	            // normal directives
	            if (matched = name.match(dirAttrRE)) {
	              dirName = matched[1];
	              arg = matched[2];

	              // skip v-else (when used with v-show)
	              if (dirName === 'else') {
	                continue;
	              }

	              dirDef = resolveAsset(options, 'directives', dirName, true);
	              if (dirDef) {
	                pushDir(dirName, dirDef);
	              }
	            }
	  }

	  /**
	   * Push a directive.
	   *
	   * @param {String} dirName
	   * @param {Object|Function} def
	   * @param {Array} [interpTokens]
	   */

	  function pushDir(dirName, def, interpTokens) {
	    var hasOneTimeToken = interpTokens && hasOneTime(interpTokens);
	    var parsed = !hasOneTimeToken && parseDirective(value);
	    dirs.push({
	      name: dirName,
	      attr: rawName,
	      raw: rawValue,
	      def: def,
	      arg: arg,
	      modifiers: modifiers,
	      // conversion from interpolation strings with one-time token
	      // to expression is differed until directive bind time so that we
	      // have access to the actual vm context for one-time bindings.
	      expression: parsed && parsed.expression,
	      filters: parsed && parsed.filters,
	      interp: interpTokens,
	      hasOneTime: hasOneTimeToken
	    });
	  }

	  if (dirs.length) {
	    return makeNodeLinkFn(dirs);
	  }
	}

	/**
	 * Parse modifiers from directive attribute name.
	 *
	 * @param {String} name
	 * @return {Object}
	 */

	function parseModifiers(name) {
	  var res = Object.create(null);
	  var match = name.match(modifierRE);
	  if (match) {
	    var i = match.length;
	    while (i--) {
	      res[match[i].slice(1)] = true;
	    }
	  }
	  return res;
	}

	/**
	 * Build a link function for all directives on a single node.
	 *
	 * @param {Array} directives
	 * @return {Function} directivesLinkFn
	 */

	function makeNodeLinkFn(directives) {
	  return function nodeLinkFn(vm, el, host, scope, frag) {
	    // reverse apply because it's sorted low to high
	    var i = directives.length;
	    while (i--) {
	      vm._bindDir(directives[i], el, host, scope, frag);
	    }
	  };
	}

	/**
	 * Check if an interpolation string contains one-time tokens.
	 *
	 * @param {Array} tokens
	 * @return {Boolean}
	 */

	function hasOneTime(tokens) {
	  var i = tokens.length;
	  while (i--) {
	    if (tokens[i].oneTime) return true;
	  }
	}

	function isScript(el) {
	  return el.tagName === 'SCRIPT' && (!el.hasAttribute('type') || el.getAttribute('type') === 'text/javascript');
	}

	var specialCharRE = /[^\w\-:\.]/;

	/**
	 * Process an element or a DocumentFragment based on a
	 * instance option object. This allows us to transclude
	 * a template node/fragment before the instance is created,
	 * so the processed fragment can then be cloned and reused
	 * in v-for.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */

	function transclude(el, options) {
	  // extract container attributes to pass them down
	  // to compiler, because they need to be compiled in
	  // parent scope. we are mutating the options object here
	  // assuming the same object will be used for compile
	  // right after this.
	  if (options) {
	    options._containerAttrs = extractAttrs(el);
	  }
	  // for template tags, what we want is its content as
	  // a documentFragment (for fragment instances)
	  if (isTemplate(el)) {
	    el = parseTemplate(el);
	  }
	  if (options) {
	    if (options._asComponent && !options.template) {
	      options.template = '<slot></slot>';
	    }
	    if (options.template) {
	      options._content = extractContent(el);
	      el = transcludeTemplate(el, options);
	    }
	  }
	  if (isFragment(el)) {
	    // anchors for fragment instance
	    // passing in `persist: true` to avoid them being
	    // discarded by IE during template cloning
	    prepend(createAnchor('v-start', true), el);
	    el.appendChild(createAnchor('v-end', true));
	  }
	  return el;
	}

	/**
	 * Process the template option.
	 * If the replace option is true this will swap the $el.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */

	function transcludeTemplate(el, options) {
	  var template = options.template;
	  var frag = parseTemplate(template, true);
	  if (frag) {
	    var replacer = frag.firstChild;
	    var tag = replacer.tagName && replacer.tagName.toLowerCase();
	    if (options.replace) {
	      /* istanbul ignore if */
	      if (el === document.body) {
	        process.env.NODE_ENV !== 'production' && warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');
	      }
	      // there are many cases where the instance must
	      // become a fragment instance: basically anything that
	      // can create more than 1 root nodes.
	      if (
	      // multi-children template
	      frag.childNodes.length > 1 ||
	      // non-element template
	      replacer.nodeType !== 1 ||
	      // single nested component
	      tag === 'component' || resolveAsset(options, 'components', tag) || hasBindAttr(replacer, 'is') ||
	      // element directive
	      resolveAsset(options, 'elementDirectives', tag) ||
	      // for block
	      replacer.hasAttribute('v-for') ||
	      // if block
	      replacer.hasAttribute('v-if')) {
	        return frag;
	      } else {
	        options._replacerAttrs = extractAttrs(replacer);
	        mergeAttrs(el, replacer);
	        return replacer;
	      }
	    } else {
	      el.appendChild(frag);
	      return el;
	    }
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid template option: ' + template);
	  }
	}

	/**
	 * Helper to extract a component container's attributes
	 * into a plain object array.
	 *
	 * @param {Element} el
	 * @return {Array}
	 */

	function extractAttrs(el) {
	  if (el.nodeType === 1 && el.hasAttributes()) {
	    return toArray(el.attributes);
	  }
	}

	/**
	 * Merge the attributes of two elements, and make sure
	 * the class names are merged properly.
	 *
	 * @param {Element} from
	 * @param {Element} to
	 */

	function mergeAttrs(from, to) {
	  var attrs = from.attributes;
	  var i = attrs.length;
	  var name, value;
	  while (i--) {
	    name = attrs[i].name;
	    value = attrs[i].value;
	    if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
	      to.setAttribute(name, value);
	    } else if (name === 'class' && !parseText(value) && (value = value.trim())) {
	      value.split(/\s+/).forEach(function (cls) {
	        addClass(to, cls);
	      });
	    }
	  }
	}

	/**
	 * Scan and determine slot content distribution.
	 * We do this during transclusion instead at compile time so that
	 * the distribution is decoupled from the compilation order of
	 * the slots.
	 *
	 * @param {Element|DocumentFragment} template
	 * @param {Element} content
	 * @param {Vue} vm
	 */

	function resolveSlots(vm, content) {
	  if (!content) {
	    return;
	  }
	  var contents = vm._slotContents = Object.create(null);
	  var el, name;
	  for (var i = 0, l = content.children.length; i < l; i++) {
	    el = content.children[i];
	    /* eslint-disable no-cond-assign */
	    if (name = el.getAttribute('slot')) {
	      (contents[name] || (contents[name] = [])).push(el);
	    }
	    /* eslint-enable no-cond-assign */
	    if (process.env.NODE_ENV !== 'production' && getBindAttr(el, 'slot')) {
	      warn('The "slot" attribute must be static.', vm.$parent);
	    }
	  }
	  for (name in contents) {
	    contents[name] = extractFragment(contents[name], content);
	  }
	  if (content.hasChildNodes()) {
	    var nodes = content.childNodes;
	    if (nodes.length === 1 && nodes[0].nodeType === 3 && !nodes[0].data.trim()) {
	      return;
	    }
	    contents['default'] = extractFragment(content.childNodes, content);
	  }
	}

	/**
	 * Extract qualified content nodes from a node list.
	 *
	 * @param {NodeList} nodes
	 * @return {DocumentFragment}
	 */

	function extractFragment(nodes, parent) {
	  var frag = document.createDocumentFragment();
	  nodes = toArray(nodes);
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    var node = nodes[i];
	    if (isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')) {
	      parent.removeChild(node);
	      node = parseTemplate(node, true);
	    }
	    frag.appendChild(node);
	  }
	  return frag;
	}



	var compiler = Object.freeze({
		compile: compile,
		compileAndLinkProps: compileAndLinkProps,
		compileRoot: compileRoot,
		transclude: transclude,
		resolveSlots: resolveSlots
	});

	function stateMixin (Vue) {
	  /**
	   * Accessor for `$data` property, since setting $data
	   * requires observing the new object and updating
	   * proxied properties.
	   */

	  Object.defineProperty(Vue.prototype, '$data', {
	    get: function get() {
	      return this._data;
	    },
	    set: function set(newData) {
	      if (newData !== this._data) {
	        this._setData(newData);
	      }
	    }
	  });

	  /**
	   * Setup the scope of an instance, which contains:
	   * - observed data
	   * - computed properties
	   * - user methods
	   * - meta properties
	   */

	  Vue.prototype._initState = function () {
	    this._initProps();
	    this._initMeta();
	    this._initMethods();
	    this._initData();
	    this._initComputed();
	  };

	  /**
	   * Initialize props.
	   */

	  Vue.prototype._initProps = function () {
	    var options = this.$options;
	    var el = options.el;
	    var props = options.props;
	    if (props && !el) {
	      process.env.NODE_ENV !== 'production' && warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.', this);
	    }
	    // make sure to convert string selectors into element now
	    el = options.el = query(el);
	    this._propsUnlinkFn = el && el.nodeType === 1 && props
	    // props must be linked in proper scope if inside v-for
	    ? compileAndLinkProps(this, el, props, this._scope) : null;
	  };

	  /**
	   * Initialize the data.
	   */

	  Vue.prototype._initData = function () {
	    var dataFn = this.$options.data;
	    var data = this._data = dataFn ? dataFn() : {};
	    if (!isPlainObject(data)) {
	      data = {};
	      process.env.NODE_ENV !== 'production' && warn('data functions should return an object.', this);
	    }
	    var props = this._props;
	    // proxy data on instance
	    var keys = Object.keys(data);
	    var i, key;
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      // there are two scenarios where we can proxy a data key:
	      // 1. it's not already defined as a prop
	      // 2. it's provided via a instantiation option AND there are no
	      //    template prop present
	      if (!props || !hasOwn(props, key)) {
	        this._proxy(key);
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('Data field "' + key + '" is already defined ' + 'as a prop. To provide default value for a prop, use the "default" ' + 'prop option; if you want to pass prop values to an instantiation ' + 'call, use the "propsData" option.', this);
	      }
	    }
	    // observe data
	    observe(data, this);
	  };

	  /**
	   * Swap the instance's $data. Called in $data's setter.
	   *
	   * @param {Object} newData
	   */

	  Vue.prototype._setData = function (newData) {
	    newData = newData || {};
	    var oldData = this._data;
	    this._data = newData;
	    var keys, key, i;
	    // unproxy keys not present in new data
	    keys = Object.keys(oldData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!(key in newData)) {
	        this._unproxy(key);
	      }
	    }
	    // proxy keys not already proxied,
	    // and trigger change for changed values
	    keys = Object.keys(newData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!hasOwn(this, key)) {
	        // new property
	        this._proxy(key);
	      }
	    }
	    oldData.__ob__.removeVm(this);
	    observe(newData, this);
	    this._digest();
	  };

	  /**
	   * Proxy a property, so that
	   * vm.prop === vm._data.prop
	   *
	   * @param {String} key
	   */

	  Vue.prototype._proxy = function (key) {
	    if (!isReserved(key)) {
	      // need to store ref to self here
	      // because these getter/setters might
	      // be called by child scopes via
	      // prototype inheritance.
	      var self = this;
	      Object.defineProperty(self, key, {
	        configurable: true,
	        enumerable: true,
	        get: function proxyGetter() {
	          return self._data[key];
	        },
	        set: function proxySetter(val) {
	          self._data[key] = val;
	        }
	      });
	    }
	  };

	  /**
	   * Unproxy a property.
	   *
	   * @param {String} key
	   */

	  Vue.prototype._unproxy = function (key) {
	    if (!isReserved(key)) {
	      delete this[key];
	    }
	  };

	  /**
	   * Force update on every watcher in scope.
	   */

	  Vue.prototype._digest = function () {
	    for (var i = 0, l = this._watchers.length; i < l; i++) {
	      this._watchers[i].update(true); // shallow updates
	    }
	  };

	  /**
	   * Setup computed properties. They are essentially
	   * special getter/setters
	   */

	  function noop() {}
	  Vue.prototype._initComputed = function () {
	    var computed = this.$options.computed;
	    if (computed) {
	      for (var key in computed) {
	        var userDef = computed[key];
	        var def = {
	          enumerable: true,
	          configurable: true
	        };
	        if (typeof userDef === 'function') {
	          def.get = makeComputedGetter(userDef, this);
	          def.set = noop;
	        } else {
	          def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, this) : bind(userDef.get, this) : noop;
	          def.set = userDef.set ? bind(userDef.set, this) : noop;
	        }
	        Object.defineProperty(this, key, def);
	      }
	    }
	  };

	  function makeComputedGetter(getter, owner) {
	    var watcher = new Watcher(owner, getter, null, {
	      lazy: true
	    });
	    return function computedGetter() {
	      if (watcher.dirty) {
	        watcher.evaluate();
	      }
	      if (Dep.target) {
	        watcher.depend();
	      }
	      return watcher.value;
	    };
	  }

	  /**
	   * Setup instance methods. Methods must be bound to the
	   * instance since they might be passed down as a prop to
	   * child components.
	   */

	  Vue.prototype._initMethods = function () {
	    var methods = this.$options.methods;
	    if (methods) {
	      for (var key in methods) {
	        this[key] = bind(methods[key], this);
	      }
	    }
	  };

	  /**
	   * Initialize meta information like $index, $key & $value.
	   */

	  Vue.prototype._initMeta = function () {
	    var metas = this.$options._meta;
	    if (metas) {
	      for (var key in metas) {
	        defineReactive(this, key, metas[key]);
	      }
	    }
	  };
	}

	var eventRE = /^v-on:|^@/;

	function eventsMixin (Vue) {
	  /**
	   * Setup the instance's option events & watchers.
	   * If the value is a string, we pull it from the
	   * instance's methods by name.
	   */

	  Vue.prototype._initEvents = function () {
	    var options = this.$options;
	    if (options._asComponent) {
	      registerComponentEvents(this, options.el);
	    }
	    registerCallbacks(this, '$on', options.events);
	    registerCallbacks(this, '$watch', options.watch);
	  };

	  /**
	   * Register v-on events on a child component
	   *
	   * @param {Vue} vm
	   * @param {Element} el
	   */

	  function registerComponentEvents(vm, el) {
	    var attrs = el.attributes;
	    var name, value, handler;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      name = attrs[i].name;
	      if (eventRE.test(name)) {
	        name = name.replace(eventRE, '');
	        // force the expression into a statement so that
	        // it always dynamically resolves the method to call (#2670)
	        // kinda ugly hack, but does the job.
	        value = attrs[i].value;
	        if (isSimplePath(value)) {
	          value += '.apply(this, $arguments)';
	        }
	        handler = (vm._scope || vm._context).$eval(value, true);
	        handler._fromParent = true;
	        vm.$on(name.replace(eventRE), handler);
	      }
	    }
	  }

	  /**
	   * Register callbacks for option events and watchers.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {Object} hash
	   */

	  function registerCallbacks(vm, action, hash) {
	    if (!hash) return;
	    var handlers, key, i, j;
	    for (key in hash) {
	      handlers = hash[key];
	      if (isArray(handlers)) {
	        for (i = 0, j = handlers.length; i < j; i++) {
	          register(vm, action, key, handlers[i]);
	        }
	      } else {
	        register(vm, action, key, handlers);
	      }
	    }
	  }

	  /**
	   * Helper to register an event/watch callback.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {String} key
	   * @param {Function|String|Object} handler
	   * @param {Object} [options]
	   */

	  function register(vm, action, key, handler, options) {
	    var type = typeof handler;
	    if (type === 'function') {
	      vm[action](key, handler, options);
	    } else if (type === 'string') {
	      var methods = vm.$options.methods;
	      var method = methods && methods[handler];
	      if (method) {
	        vm[action](key, method, options);
	      } else {
	        process.env.NODE_ENV !== 'production' && warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".', vm);
	      }
	    } else if (handler && type === 'object') {
	      register(vm, action, key, handler.handler, handler);
	    }
	  }

	  /**
	   * Setup recursive attached/detached calls
	   */

	  Vue.prototype._initDOMHooks = function () {
	    this.$on('hook:attached', onAttached);
	    this.$on('hook:detached', onDetached);
	  };

	  /**
	   * Callback to recursively call attached hook on children
	   */

	  function onAttached() {
	    if (!this._isAttached) {
	      this._isAttached = true;
	      this.$children.forEach(callAttach);
	    }
	  }

	  /**
	   * Iterator to call attached hook
	   *
	   * @param {Vue} child
	   */

	  function callAttach(child) {
	    if (!child._isAttached && inDoc(child.$el)) {
	      child._callHook('attached');
	    }
	  }

	  /**
	   * Callback to recursively call detached hook on children
	   */

	  function onDetached() {
	    if (this._isAttached) {
	      this._isAttached = false;
	      this.$children.forEach(callDetach);
	    }
	  }

	  /**
	   * Iterator to call detached hook
	   *
	   * @param {Vue} child
	   */

	  function callDetach(child) {
	    if (child._isAttached && !inDoc(child.$el)) {
	      child._callHook('detached');
	    }
	  }

	  /**
	   * Trigger all handlers for a hook
	   *
	   * @param {String} hook
	   */

	  Vue.prototype._callHook = function (hook) {
	    this.$emit('pre-hook:' + hook);
	    var handlers = this.$options[hook];
	    if (handlers) {
	      for (var i = 0, j = handlers.length; i < j; i++) {
	        handlers[i].call(this);
	      }
	    }
	    this.$emit('hook:' + hook);
	  };
	}

	function noop$1() {}

	/**
	 * A directive links a DOM element with a piece of data,
	 * which is the result of evaluating an expression.
	 * It registers a watcher with the expression and calls
	 * the DOM update function when a change is triggered.
	 *
	 * @param {Object} descriptor
	 *                 - {String} name
	 *                 - {Object} def
	 *                 - {String} expression
	 *                 - {Array<Object>} [filters]
	 *                 - {Object} [modifiers]
	 *                 - {Boolean} literal
	 *                 - {String} attr
	 *                 - {String} arg
	 *                 - {String} raw
	 *                 - {String} [ref]
	 *                 - {Array<Object>} [interp]
	 *                 - {Boolean} [hasOneTime]
	 * @param {Vue} vm
	 * @param {Node} el
	 * @param {Vue} [host] - transclusion host component
	 * @param {Object} [scope] - v-for scope
	 * @param {Fragment} [frag] - owner fragment
	 * @constructor
	 */
	function Directive(descriptor, vm, el, host, scope, frag) {
	  this.vm = vm;
	  this.el = el;
	  // copy descriptor properties
	  this.descriptor = descriptor;
	  this.name = descriptor.name;
	  this.expression = descriptor.expression;
	  this.arg = descriptor.arg;
	  this.modifiers = descriptor.modifiers;
	  this.filters = descriptor.filters;
	  this.literal = this.modifiers && this.modifiers.literal;
	  // private
	  this._locked = false;
	  this._bound = false;
	  this._listeners = null;
	  // link context
	  this._host = host;
	  this._scope = scope;
	  this._frag = frag;
	  // store directives on node in dev mode
	  if (process.env.NODE_ENV !== 'production' && this.el) {
	    this.el._vue_directives = this.el._vue_directives || [];
	    this.el._vue_directives.push(this);
	  }
	}

	/**
	 * Initialize the directive, mixin definition properties,
	 * setup the watcher, call definition bind() and update()
	 * if present.
	 */

	Directive.prototype._bind = function () {
	  var name = this.name;
	  var descriptor = this.descriptor;

	  // remove attribute
	  if ((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
	    var attr = descriptor.attr || 'v-' + name;
	    this.el.removeAttribute(attr);
	  }

	  // copy def properties
	  var def = descriptor.def;
	  if (typeof def === 'function') {
	    this.update = def;
	  } else {
	    extend(this, def);
	  }

	  // setup directive params
	  this._setupParams();

	  // initial bind
	  if (this.bind) {
	    this.bind();
	  }
	  this._bound = true;

	  if (this.literal) {
	    this.update && this.update(descriptor.raw);
	  } else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
	    // wrapped updater for context
	    var dir = this;
	    if (this.update) {
	      this._update = function (val, oldVal) {
	        if (!dir._locked) {
	          dir.update(val, oldVal);
	        }
	      };
	    } else {
	      this._update = noop$1;
	    }
	    var preProcess = this._preProcess ? bind(this._preProcess, this) : null;
	    var postProcess = this._postProcess ? bind(this._postProcess, this) : null;
	    var watcher = this._watcher = new Watcher(this.vm, this.expression, this._update, // callback
	    {
	      filters: this.filters,
	      twoWay: this.twoWay,
	      deep: this.deep,
	      preProcess: preProcess,
	      postProcess: postProcess,
	      scope: this._scope
	    });
	    // v-model with inital inline value need to sync back to
	    // model instead of update to DOM on init. They would
	    // set the afterBind hook to indicate that.
	    if (this.afterBind) {
	      this.afterBind();
	    } else if (this.update) {
	      this.update(watcher.value);
	    }
	  }
	};

	/**
	 * Setup all param attributes, e.g. track-by,
	 * transition-mode, etc...
	 */

	Directive.prototype._setupParams = function () {
	  if (!this.params) {
	    return;
	  }
	  var params = this.params;
	  // swap the params array with a fresh object.
	  this.params = Object.create(null);
	  var i = params.length;
	  var key, val, mappedKey;
	  while (i--) {
	    key = hyphenate(params[i]);
	    mappedKey = camelize(key);
	    val = getBindAttr(this.el, key);
	    if (val != null) {
	      // dynamic
	      this._setupParamWatcher(mappedKey, val);
	    } else {
	      // static
	      val = getAttr(this.el, key);
	      if (val != null) {
	        this.params[mappedKey] = val === '' ? true : val;
	      }
	    }
	  }
	};

	/**
	 * Setup a watcher for a dynamic param.
	 *
	 * @param {String} key
	 * @param {String} expression
	 */

	Directive.prototype._setupParamWatcher = function (key, expression) {
	  var self = this;
	  var called = false;
	  var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
	    self.params[key] = val;
	    // since we are in immediate mode,
	    // only call the param change callbacks if this is not the first update.
	    if (called) {
	      var cb = self.paramWatchers && self.paramWatchers[key];
	      if (cb) {
	        cb.call(self, val, oldVal);
	      }
	    } else {
	      called = true;
	    }
	  }, {
	    immediate: true,
	    user: false
	  });(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);
	};

	/**
	 * Check if the directive is a function caller
	 * and if the expression is a callable one. If both true,
	 * we wrap up the expression and use it as the event
	 * handler.
	 *
	 * e.g. on-click="a++"
	 *
	 * @return {Boolean}
	 */

	Directive.prototype._checkStatement = function () {
	  var expression = this.expression;
	  if (expression && this.acceptStatement && !isSimplePath(expression)) {
	    var fn = parseExpression(expression).get;
	    var scope = this._scope || this.vm;
	    var handler = function handler(e) {
	      scope.$event = e;
	      fn.call(scope, scope);
	      scope.$event = null;
	    };
	    if (this.filters) {
	      handler = scope._applyFilters(handler, null, this.filters);
	    }
	    this.update(handler);
	    return true;
	  }
	};

	/**
	 * Set the corresponding value with the setter.
	 * This should only be used in two-way directives
	 * e.g. v-model.
	 *
	 * @param {*} value
	 * @public
	 */

	Directive.prototype.set = function (value) {
	  /* istanbul ignore else */
	  if (this.twoWay) {
	    this._withLock(function () {
	      this._watcher.set(value);
	    });
	  } else if (process.env.NODE_ENV !== 'production') {
	    warn('Directive.set() can only be used inside twoWay' + 'directives.');
	  }
	};

	/**
	 * Execute a function while preventing that function from
	 * triggering updates on this directive instance.
	 *
	 * @param {Function} fn
	 */

	Directive.prototype._withLock = function (fn) {
	  var self = this;
	  self._locked = true;
	  fn.call(self);
	  nextTick(function () {
	    self._locked = false;
	  });
	};

	/**
	 * Convenience method that attaches a DOM event listener
	 * to the directive element and autometically tears it down
	 * during unbind.
	 *
	 * @param {String} event
	 * @param {Function} handler
	 * @param {Boolean} [useCapture]
	 */

	Directive.prototype.on = function (event, handler, useCapture) {
	  on(this.el, event, handler, useCapture);(this._listeners || (this._listeners = [])).push([event, handler]);
	};

	/**
	 * Teardown the watcher and call unbind.
	 */

	Directive.prototype._teardown = function () {
	  if (this._bound) {
	    this._bound = false;
	    if (this.unbind) {
	      this.unbind();
	    }
	    if (this._watcher) {
	      this._watcher.teardown();
	    }
	    var listeners = this._listeners;
	    var i;
	    if (listeners) {
	      i = listeners.length;
	      while (i--) {
	        off(this.el, listeners[i][0], listeners[i][1]);
	      }
	    }
	    var unwatchFns = this._paramUnwatchFns;
	    if (unwatchFns) {
	      i = unwatchFns.length;
	      while (i--) {
	        unwatchFns[i]();
	      }
	    }
	    if (process.env.NODE_ENV !== 'production' && this.el) {
	      this.el._vue_directives.$remove(this);
	    }
	    this.vm = this.el = this._watcher = this._listeners = null;
	  }
	};

	function lifecycleMixin (Vue) {
	  /**
	   * Update v-ref for component.
	   *
	   * @param {Boolean} remove
	   */

	  Vue.prototype._updateRef = function (remove) {
	    var ref = this.$options._ref;
	    if (ref) {
	      var refs = (this._scope || this._context).$refs;
	      if (remove) {
	        if (refs[ref] === this) {
	          refs[ref] = null;
	        }
	      } else {
	        refs[ref] = this;
	      }
	    }
	  };

	  /**
	   * Transclude, compile and link element.
	   *
	   * If a pre-compiled linker is available, that means the
	   * passed in element will be pre-transcluded and compiled
	   * as well - all we need to do is to call the linker.
	   *
	   * Otherwise we need to call transclude/compile/link here.
	   *
	   * @param {Element} el
	   */

	  Vue.prototype._compile = function (el) {
	    var options = this.$options;

	    // transclude and init element
	    // transclude can potentially replace original
	    // so we need to keep reference; this step also injects
	    // the template and caches the original attributes
	    // on the container node and replacer node.
	    var original = el;
	    el = transclude(el, options);
	    this._initElement(el);

	    // handle v-pre on root node (#2026)
	    if (el.nodeType === 1 && getAttr(el, 'v-pre') !== null) {
	      return;
	    }

	    // root is always compiled per-instance, because
	    // container attrs and props can be different every time.
	    var contextOptions = this._context && this._context.$options;
	    var rootLinker = compileRoot(el, options, contextOptions);

	    // resolve slot distribution
	    resolveSlots(this, options._content);

	    // compile and link the rest
	    var contentLinkFn;
	    var ctor = this.constructor;
	    // component compilation can be cached
	    // as long as it's not using inline-template
	    if (options._linkerCachable) {
	      contentLinkFn = ctor.linker;
	      if (!contentLinkFn) {
	        contentLinkFn = ctor.linker = compile(el, options);
	      }
	    }

	    // link phase
	    // make sure to link root with prop scope!
	    var rootUnlinkFn = rootLinker(this, el, this._scope);
	    var contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : compile(el, options)(this, el);

	    // register composite unlink function
	    // to be called during instance destruction
	    this._unlinkFn = function () {
	      rootUnlinkFn();
	      // passing destroying: true to avoid searching and
	      // splicing the directives
	      contentUnlinkFn(true);
	    };

	    // finally replace original
	    if (options.replace) {
	      replace(original, el);
	    }

	    this._isCompiled = true;
	    this._callHook('compiled');
	  };

	  /**
	   * Initialize instance element. Called in the public
	   * $mount() method.
	   *
	   * @param {Element} el
	   */

	  Vue.prototype._initElement = function (el) {
	    if (isFragment(el)) {
	      this._isFragment = true;
	      this.$el = this._fragmentStart = el.firstChild;
	      this._fragmentEnd = el.lastChild;
	      // set persisted text anchors to empty
	      if (this._fragmentStart.nodeType === 3) {
	        this._fragmentStart.data = this._fragmentEnd.data = '';
	      }
	      this._fragment = el;
	    } else {
	      this.$el = el;
	    }
	    this.$el.__vue__ = this;
	    this._callHook('beforeCompile');
	  };

	  /**
	   * Create and bind a directive to an element.
	   *
	   * @param {Object} descriptor - parsed directive descriptor
	   * @param {Node} node   - target node
	   * @param {Vue} [host] - transclusion host component
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - owner fragment
	   */

	  Vue.prototype._bindDir = function (descriptor, node, host, scope, frag) {
	    this._directives.push(new Directive(descriptor, this, node, host, scope, frag));
	  };

	  /**
	   * Teardown an instance, unobserves the data, unbind all the
	   * directives, turn off all the event listeners, etc.
	   *
	   * @param {Boolean} remove - whether to remove the DOM node.
	   * @param {Boolean} deferCleanup - if true, defer cleanup to
	   *                                 be called later
	   */

	  Vue.prototype._destroy = function (remove, deferCleanup) {
	    if (this._isBeingDestroyed) {
	      if (!deferCleanup) {
	        this._cleanup();
	      }
	      return;
	    }

	    var destroyReady;
	    var pendingRemoval;

	    var self = this;
	    // Cleanup should be called either synchronously or asynchronoysly as
	    // callback of this.$remove(), or if remove and deferCleanup are false.
	    // In any case it should be called after all other removing, unbinding and
	    // turning of is done
	    var cleanupIfPossible = function cleanupIfPossible() {
	      if (destroyReady && !pendingRemoval && !deferCleanup) {
	        self._cleanup();
	      }
	    };

	    // remove DOM element
	    if (remove && this.$el) {
	      pendingRemoval = true;
	      this.$remove(function () {
	        pendingRemoval = false;
	        cleanupIfPossible();
	      });
	    }

	    this._callHook('beforeDestroy');
	    this._isBeingDestroyed = true;
	    var i;
	    // remove self from parent. only necessary
	    // if parent is not being destroyed as well.
	    var parent = this.$parent;
	    if (parent && !parent._isBeingDestroyed) {
	      parent.$children.$remove(this);
	      // unregister ref (remove: true)
	      this._updateRef(true);
	    }
	    // destroy all children.
	    i = this.$children.length;
	    while (i--) {
	      this.$children[i].$destroy();
	    }
	    // teardown props
	    if (this._propsUnlinkFn) {
	      this._propsUnlinkFn();
	    }
	    // teardown all directives. this also tearsdown all
	    // directive-owned watchers.
	    if (this._unlinkFn) {
	      this._unlinkFn();
	    }
	    i = this._watchers.length;
	    while (i--) {
	      this._watchers[i].teardown();
	    }
	    // remove reference to self on $el
	    if (this.$el) {
	      this.$el.__vue__ = null;
	    }

	    destroyReady = true;
	    cleanupIfPossible();
	  };

	  /**
	   * Clean up to ensure garbage collection.
	   * This is called after the leave transition if there
	   * is any.
	   */

	  Vue.prototype._cleanup = function () {
	    if (this._isDestroyed) {
	      return;
	    }
	    // remove self from owner fragment
	    // do it in cleanup so that we can call $destroy with
	    // defer right when a fragment is about to be removed.
	    if (this._frag) {
	      this._frag.children.$remove(this);
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (this._data && this._data.__ob__) {
	      this._data.__ob__.removeVm(this);
	    }
	    // Clean up references to private properties and other
	    // instances. preserve reference to _data so that proxy
	    // accessors still work. The only potential side effect
	    // here is that mutating the instance after it's destroyed
	    // may affect the state of other components that are still
	    // observing the same object, but that seems to be a
	    // reasonable responsibility for the user rather than
	    // always throwing an error on them.
	    this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null;
	    // call the last hook...
	    this._isDestroyed = true;
	    this._callHook('destroyed');
	    // turn off all instance listeners.
	    this.$off();
	  };
	}

	function miscMixin (Vue) {
	  /**
	   * Apply a list of filter (descriptors) to a value.
	   * Using plain for loops here because this will be called in
	   * the getter of any watcher with filters so it is very
	   * performance sensitive.
	   *
	   * @param {*} value
	   * @param {*} [oldValue]
	   * @param {Array} filters
	   * @param {Boolean} write
	   * @return {*}
	   */

	  Vue.prototype._applyFilters = function (value, oldValue, filters, write) {
	    var filter, fn, args, arg, offset, i, l, j, k;
	    for (i = 0, l = filters.length; i < l; i++) {
	      filter = filters[write ? l - i - 1 : i];
	      fn = resolveAsset(this.$options, 'filters', filter.name, true);
	      if (!fn) continue;
	      fn = write ? fn.write : fn.read || fn;
	      if (typeof fn !== 'function') continue;
	      args = write ? [value, oldValue] : [value];
	      offset = write ? 2 : 1;
	      if (filter.args) {
	        for (j = 0, k = filter.args.length; j < k; j++) {
	          arg = filter.args[j];
	          args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
	        }
	      }
	      value = fn.apply(this, args);
	    }
	    return value;
	  };

	  /**
	   * Resolve a component, depending on whether the component
	   * is defined normally or using an async factory function.
	   * Resolves synchronously if already resolved, otherwise
	   * resolves asynchronously and caches the resolved
	   * constructor on the factory.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */

	  Vue.prototype._resolveComponent = function (value, cb) {
	    var factory;
	    if (typeof value === 'function') {
	      factory = value;
	    } else {
	      factory = resolveAsset(this.$options, 'components', value, true);
	    }
	    /* istanbul ignore if */
	    if (!factory) {
	      return;
	    }
	    // async component factory
	    if (!factory.options) {
	      if (factory.resolved) {
	        // cached
	        cb(factory.resolved);
	      } else if (factory.requested) {
	        // pool callbacks
	        factory.pendingCallbacks.push(cb);
	      } else {
	        factory.requested = true;
	        var cbs = factory.pendingCallbacks = [cb];
	        factory.call(this, function resolve(res) {
	          if (isPlainObject(res)) {
	            res = Vue.extend(res);
	          }
	          // cache resolved
	          factory.resolved = res;
	          // invoke callbacks
	          for (var i = 0, l = cbs.length; i < l; i++) {
	            cbs[i](res);
	          }
	        }, function reject(reason) {
	          process.env.NODE_ENV !== 'production' && warn('Failed to resolve async component' + (typeof value === 'string' ? ': ' + value : '') + '. ' + (reason ? '\nReason: ' + reason : ''));
	        });
	      }
	    } else {
	      // normal component
	      cb(factory);
	    }
	  };
	}

	var filterRE$1 = /[^|]\|[^|]/;

	function dataAPI (Vue) {
	  /**
	   * Get the value from an expression on this vm.
	   *
	   * @param {String} exp
	   * @param {Boolean} [asStatement]
	   * @return {*}
	   */

	  Vue.prototype.$get = function (exp, asStatement) {
	    var res = parseExpression(exp);
	    if (res) {
	      if (asStatement) {
	        var self = this;
	        return function statementHandler() {
	          self.$arguments = toArray(arguments);
	          var result = res.get.call(self, self);
	          self.$arguments = null;
	          return result;
	        };
	      } else {
	        try {
	          return res.get.call(this, this);
	        } catch (e) {}
	      }
	    }
	  };

	  /**
	   * Set the value from an expression on this vm.
	   * The expression must be a valid left-hand
	   * expression in an assignment.
	   *
	   * @param {String} exp
	   * @param {*} val
	   */

	  Vue.prototype.$set = function (exp, val) {
	    var res = parseExpression(exp, true);
	    if (res && res.set) {
	      res.set.call(this, this, val);
	    }
	  };

	  /**
	   * Delete a property on the VM
	   *
	   * @param {String} key
	   */

	  Vue.prototype.$delete = function (key) {
	    del(this._data, key);
	  };

	  /**
	   * Watch an expression, trigger callback when its
	   * value changes.
	   *
	   * @param {String|Function} expOrFn
	   * @param {Function} cb
	   * @param {Object} [options]
	   *                 - {Boolean} deep
	   *                 - {Boolean} immediate
	   * @return {Function} - unwatchFn
	   */

	  Vue.prototype.$watch = function (expOrFn, cb, options) {
	    var vm = this;
	    var parsed;
	    if (typeof expOrFn === 'string') {
	      parsed = parseDirective(expOrFn);
	      expOrFn = parsed.expression;
	    }
	    var watcher = new Watcher(vm, expOrFn, cb, {
	      deep: options && options.deep,
	      sync: options && options.sync,
	      filters: parsed && parsed.filters,
	      user: !options || options.user !== false
	    });
	    if (options && options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn() {
	      watcher.teardown();
	    };
	  };

	  /**
	   * Evaluate a text directive, including filters.
	   *
	   * @param {String} text
	   * @param {Boolean} [asStatement]
	   * @return {String}
	   */

	  Vue.prototype.$eval = function (text, asStatement) {
	    // check for filters.
	    if (filterRE$1.test(text)) {
	      var dir = parseDirective(text);
	      // the filter regex check might give false positive
	      // for pipes inside strings, so it's possible that
	      // we don't get any filters here
	      var val = this.$get(dir.expression, asStatement);
	      return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
	    } else {
	      // no filter
	      return this.$get(text, asStatement);
	    }
	  };

	  /**
	   * Interpolate a piece of template text.
	   *
	   * @param {String} text
	   * @return {String}
	   */

	  Vue.prototype.$interpolate = function (text) {
	    var tokens = parseText(text);
	    var vm = this;
	    if (tokens) {
	      if (tokens.length === 1) {
	        return vm.$eval(tokens[0].value) + '';
	      } else {
	        return tokens.map(function (token) {
	          return token.tag ? vm.$eval(token.value) : token.value;
	        }).join('');
	      }
	    } else {
	      return text;
	    }
	  };

	  /**
	   * Log instance data as a plain JS object
	   * so that it is easier to inspect in console.
	   * This method assumes console is available.
	   *
	   * @param {String} [path]
	   */

	  Vue.prototype.$log = function (path) {
	    var data = path ? getPath(this._data, path) : this._data;
	    if (data) {
	      data = clean(data);
	    }
	    // include computed fields
	    if (!path) {
	      var key;
	      for (key in this.$options.computed) {
	        data[key] = clean(this[key]);
	      }
	      if (this._props) {
	        for (key in this._props) {
	          data[key] = clean(this[key]);
	        }
	      }
	    }
	    console.log(data);
	  };

	  /**
	   * "clean" a getter/setter converted object into a plain
	   * object copy.
	   *
	   * @param {Object} - obj
	   * @return {Object}
	   */

	  function clean(obj) {
	    return JSON.parse(JSON.stringify(obj));
	  }
	}

	function domAPI (Vue) {
	  /**
	   * Convenience on-instance nextTick. The callback is
	   * auto-bound to the instance, and this avoids component
	   * modules having to rely on the global Vue.
	   *
	   * @param {Function} fn
	   */

	  Vue.prototype.$nextTick = function (fn) {
	    nextTick(fn, this);
	  };

	  /**
	   * Append instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$appendTo = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, append, appendWithTransition);
	  };

	  /**
	   * Prepend instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$prependTo = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.hasChildNodes()) {
	      this.$before(target.firstChild, cb, withTransition);
	    } else {
	      this.$appendTo(target, cb, withTransition);
	    }
	    return this;
	  };

	  /**
	   * Insert instance before target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$before = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, beforeWithCb, beforeWithTransition);
	  };

	  /**
	   * Insert instance after target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$after = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.nextSibling) {
	      this.$before(target.nextSibling, cb, withTransition);
	    } else {
	      this.$appendTo(target.parentNode, cb, withTransition);
	    }
	    return this;
	  };

	  /**
	   * Remove instance from DOM
	   *
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$remove = function (cb, withTransition) {
	    if (!this.$el.parentNode) {
	      return cb && cb();
	    }
	    var inDocument = this._isAttached && inDoc(this.$el);
	    // if we are not in document, no need to check
	    // for transitions
	    if (!inDocument) withTransition = false;
	    var self = this;
	    var realCb = function realCb() {
	      if (inDocument) self._callHook('detached');
	      if (cb) cb();
	    };
	    if (this._isFragment) {
	      removeNodeRange(this._fragmentStart, this._fragmentEnd, this, this._fragment, realCb);
	    } else {
	      var op = withTransition === false ? removeWithCb : removeWithTransition;
	      op(this.$el, this, realCb);
	    }
	    return this;
	  };

	  /**
	   * Shared DOM insertion function.
	   *
	   * @param {Vue} vm
	   * @param {Element} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition]
	   * @param {Function} op1 - op for non-transition insert
	   * @param {Function} op2 - op for transition insert
	   * @return vm
	   */

	  function insert(vm, target, cb, withTransition, op1, op2) {
	    target = query(target);
	    var targetIsDetached = !inDoc(target);
	    var op = withTransition === false || targetIsDetached ? op1 : op2;
	    var shouldCallHook = !targetIsDetached && !vm._isAttached && !inDoc(vm.$el);
	    if (vm._isFragment) {
	      mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
	        op(node, target, vm);
	      });
	      cb && cb();
	    } else {
	      op(vm.$el, target, vm, cb);
	    }
	    if (shouldCallHook) {
	      vm._callHook('attached');
	    }
	    return vm;
	  }

	  /**
	   * Check for selectors
	   *
	   * @param {String|Element} el
	   */

	  function query(el) {
	    return typeof el === 'string' ? document.querySelector(el) : el;
	  }

	  /**
	   * Append operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function append(el, target, vm, cb) {
	    target.appendChild(el);
	    if (cb) cb();
	  }

	  /**
	   * InsertBefore operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function beforeWithCb(el, target, vm, cb) {
	    before(el, target);
	    if (cb) cb();
	  }

	  /**
	   * Remove operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function removeWithCb(el, vm, cb) {
	    remove(el);
	    if (cb) cb();
	  }
	}

	function eventsAPI (Vue) {
	  /**
	   * Listen on the given `event` with `fn`.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$on = function (event, fn) {
	    (this._events[event] || (this._events[event] = [])).push(fn);
	    modifyListenerCount(this, event, 1);
	    return this;
	  };

	  /**
	   * Adds an `event` listener that will be invoked a single
	   * time then automatically removed.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$once = function (event, fn) {
	    var self = this;
	    function on() {
	      self.$off(event, on);
	      fn.apply(this, arguments);
	    }
	    on.fn = fn;
	    this.$on(event, on);
	    return this;
	  };

	  /**
	   * Remove the given callback for `event` or all
	   * registered callbacks.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$off = function (event, fn) {
	    var cbs;
	    // all
	    if (!arguments.length) {
	      if (this.$parent) {
	        for (event in this._events) {
	          cbs = this._events[event];
	          if (cbs) {
	            modifyListenerCount(this, event, -cbs.length);
	          }
	        }
	      }
	      this._events = {};
	      return this;
	    }
	    // specific event
	    cbs = this._events[event];
	    if (!cbs) {
	      return this;
	    }
	    if (arguments.length === 1) {
	      modifyListenerCount(this, event, -cbs.length);
	      this._events[event] = null;
	      return this;
	    }
	    // specific handler
	    var cb;
	    var i = cbs.length;
	    while (i--) {
	      cb = cbs[i];
	      if (cb === fn || cb.fn === fn) {
	        modifyListenerCount(this, event, -1);
	        cbs.splice(i, 1);
	        break;
	      }
	    }
	    return this;
	  };

	  /**
	   * Trigger an event on self.
	   *
	   * @param {String|Object} event
	   * @return {Boolean} shouldPropagate
	   */

	  Vue.prototype.$emit = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    var cbs = this._events[event];
	    var shouldPropagate = isSource || !cbs;
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      // this is a somewhat hacky solution to the question raised
	      // in #2102: for an inline component listener like <comp @test="doThis">,
	      // the propagation handling is somewhat broken. Therefore we
	      // need to treat these inline callbacks differently.
	      var hasParentCbs = isSource && cbs.some(function (cb) {
	        return cb._fromParent;
	      });
	      if (hasParentCbs) {
	        shouldPropagate = false;
	      }
	      var args = toArray(arguments, 1);
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        var cb = cbs[i];
	        var res = cb.apply(this, args);
	        if (res === true && (!hasParentCbs || cb._fromParent)) {
	          shouldPropagate = true;
	        }
	      }
	    }
	    return shouldPropagate;
	  };

	  /**
	   * Recursively broadcast an event to all children instances.
	   *
	   * @param {String|Object} event
	   * @param {...*} additional arguments
	   */

	  Vue.prototype.$broadcast = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    // if no child has registered for this event,
	    // then there's no need to broadcast.
	    if (!this._eventsCount[event]) return;
	    var children = this.$children;
	    var args = toArray(arguments);
	    if (isSource) {
	      // use object event to indicate non-source emit
	      // on children
	      args[0] = { name: event, source: this };
	    }
	    for (var i = 0, l = children.length; i < l; i++) {
	      var child = children[i];
	      var shouldPropagate = child.$emit.apply(child, args);
	      if (shouldPropagate) {
	        child.$broadcast.apply(child, args);
	      }
	    }
	    return this;
	  };

	  /**
	   * Recursively propagate an event up the parent chain.
	   *
	   * @param {String} event
	   * @param {...*} additional arguments
	   */

	  Vue.prototype.$dispatch = function (event) {
	    var shouldPropagate = this.$emit.apply(this, arguments);
	    if (!shouldPropagate) return;
	    var parent = this.$parent;
	    var args = toArray(arguments);
	    // use object event to indicate non-source emit
	    // on parents
	    args[0] = { name: event, source: this };
	    while (parent) {
	      shouldPropagate = parent.$emit.apply(parent, args);
	      parent = shouldPropagate ? parent.$parent : null;
	    }
	    return this;
	  };

	  /**
	   * Modify the listener counts on all parents.
	   * This bookkeeping allows $broadcast to return early when
	   * no child has listened to a certain event.
	   *
	   * @param {Vue} vm
	   * @param {String} event
	   * @param {Number} count
	   */

	  var hookRE = /^hook:/;
	  function modifyListenerCount(vm, event, count) {
	    var parent = vm.$parent;
	    // hooks do not get broadcasted so no need
	    // to do bookkeeping for them
	    if (!parent || !count || hookRE.test(event)) return;
	    while (parent) {
	      parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
	      parent = parent.$parent;
	    }
	  }
	}

	function lifecycleAPI (Vue) {
	  /**
	   * Set instance target element and kick off the compilation
	   * process. The passed in `el` can be a selector string, an
	   * existing Element, or a DocumentFragment (for block
	   * instances).
	   *
	   * @param {Element|DocumentFragment|string} el
	   * @public
	   */

	  Vue.prototype.$mount = function (el) {
	    if (this._isCompiled) {
	      process.env.NODE_ENV !== 'production' && warn('$mount() should be called only once.', this);
	      return;
	    }
	    el = query(el);
	    if (!el) {
	      el = document.createElement('div');
	    }
	    this._compile(el);
	    this._initDOMHooks();
	    if (inDoc(this.$el)) {
	      this._callHook('attached');
	      ready.call(this);
	    } else {
	      this.$once('hook:attached', ready);
	    }
	    return this;
	  };

	  /**
	   * Mark an instance as ready.
	   */

	  function ready() {
	    this._isAttached = true;
	    this._isReady = true;
	    this._callHook('ready');
	  }

	  /**
	   * Teardown the instance, simply delegate to the internal
	   * _destroy.
	   *
	   * @param {Boolean} remove
	   * @param {Boolean} deferCleanup
	   */

	  Vue.prototype.$destroy = function (remove, deferCleanup) {
	    this._destroy(remove, deferCleanup);
	  };

	  /**
	   * Partially compile a piece of DOM and return a
	   * decompile function.
	   *
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host]
	   * @param {Object} [scope]
	   * @param {Fragment} [frag]
	   * @return {Function}
	   */

	  Vue.prototype.$compile = function (el, host, scope, frag) {
	    return compile(el, this.$options, true)(this, el, host, scope, frag);
	  };
	}

	/**
	 * The exposed Vue constructor.
	 *
	 * API conventions:
	 * - public API methods/properties are prefixed with `$`
	 * - internal methods/properties are prefixed with `_`
	 * - non-prefixed properties are assumed to be proxied user
	 *   data.
	 *
	 * @constructor
	 * @param {Object} [options]
	 * @public
	 */

	function Vue(options) {
	  this._init(options);
	}

	// install internals
	initMixin(Vue);
	stateMixin(Vue);
	eventsMixin(Vue);
	lifecycleMixin(Vue);
	miscMixin(Vue);

	// install instance APIs
	dataAPI(Vue);
	domAPI(Vue);
	eventsAPI(Vue);
	lifecycleAPI(Vue);

	var slot = {

	  priority: SLOT,
	  params: ['name'],

	  bind: function bind() {
	    // this was resolved during component transclusion
	    var name = this.params.name || 'default';
	    var content = this.vm._slotContents && this.vm._slotContents[name];
	    if (!content || !content.hasChildNodes()) {
	      this.fallback();
	    } else {
	      this.compile(content.cloneNode(true), this.vm._context, this.vm);
	    }
	  },

	  compile: function compile(content, context, host) {
	    if (content && context) {
	      if (this.el.hasChildNodes() && content.childNodes.length === 1 && content.childNodes[0].nodeType === 1 && content.childNodes[0].hasAttribute('v-if')) {
	        // if the inserted slot has v-if
	        // inject fallback content as the v-else
	        var elseBlock = document.createElement('template');
	        elseBlock.setAttribute('v-else', '');
	        elseBlock.innerHTML = this.el.innerHTML;
	        // the else block should be compiled in child scope
	        elseBlock._context = this.vm;
	        content.appendChild(elseBlock);
	      }
	      var scope = host ? host._scope : this._scope;
	      this.unlink = context.$compile(content, host, scope, this._frag);
	    }
	    if (content) {
	      replace(this.el, content);
	    } else {
	      remove(this.el);
	    }
	  },

	  fallback: function fallback() {
	    this.compile(extractContent(this.el, true), this.vm);
	  },

	  unbind: function unbind() {
	    if (this.unlink) {
	      this.unlink();
	    }
	  }
	};

	var partial = {

	  priority: PARTIAL,

	  params: ['name'],

	  // watch changes to name for dynamic partials
	  paramWatchers: {
	    name: function name(value) {
	      vIf.remove.call(this);
	      if (value) {
	        this.insert(value);
	      }
	    }
	  },

	  bind: function bind() {
	    this.anchor = createAnchor('v-partial');
	    replace(this.el, this.anchor);
	    this.insert(this.params.name);
	  },

	  insert: function insert(id) {
	    var partial = resolveAsset(this.vm.$options, 'partials', id, true);
	    if (partial) {
	      this.factory = new FragmentFactory(this.vm, partial);
	      vIf.insert.call(this);
	    }
	  },

	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	  }
	};

	var elementDirectives = {
	  slot: slot,
	  partial: partial
	};

	var convertArray = vFor._postProcess;

	/**
	 * Limit filter for arrays
	 *
	 * @param {Number} n
	 * @param {Number} offset (Decimal expected)
	 */

	function limitBy(arr, n, offset) {
	  offset = offset ? parseInt(offset, 10) : 0;
	  n = toNumber(n);
	  return typeof n === 'number' ? arr.slice(offset, offset + n) : arr;
	}

	/**
	 * Filter filter for arrays
	 *
	 * @param {String} search
	 * @param {String} [delimiter]
	 * @param {String} ...dataKeys
	 */

	function filterBy(arr, search, delimiter) {
	  arr = convertArray(arr);
	  if (search == null) {
	    return arr;
	  }
	  if (typeof search === 'function') {
	    return arr.filter(search);
	  }
	  // cast to lowercase string
	  search = ('' + search).toLowerCase();
	  // allow optional `in` delimiter
	  // because why not
	  var n = delimiter === 'in' ? 3 : 2;
	  // extract and flatten keys
	  var keys = Array.prototype.concat.apply([], toArray(arguments, n));
	  var res = [];
	  var item, key, val, j;
	  for (var i = 0, l = arr.length; i < l; i++) {
	    item = arr[i];
	    val = item && item.$value || item;
	    j = keys.length;
	    if (j) {
	      while (j--) {
	        key = keys[j];
	        if (key === '$key' && contains(item.$key, search) || contains(getPath(val, key), search)) {
	          res.push(item);
	          break;
	        }
	      }
	    } else if (contains(item, search)) {
	      res.push(item);
	    }
	  }
	  return res;
	}

	/**
	 * Filter filter for arrays
	 *
	 * @param {String|Array<String>|Function} ...sortKeys
	 * @param {Number} [order]
	 */

	function orderBy(arr) {
	  var comparator = null;
	  var sortKeys = undefined;
	  arr = convertArray(arr);

	  // determine order (last argument)
	  var args = toArray(arguments, 1);
	  var order = args[args.length - 1];
	  if (typeof order === 'number') {
	    order = order < 0 ? -1 : 1;
	    args = args.length > 1 ? args.slice(0, -1) : args;
	  } else {
	    order = 1;
	  }

	  // determine sortKeys & comparator
	  var firstArg = args[0];
	  if (!firstArg) {
	    return arr;
	  } else if (typeof firstArg === 'function') {
	    // custom comparator
	    comparator = function (a, b) {
	      return firstArg(a, b) * order;
	    };
	  } else {
	    // string keys. flatten first
	    sortKeys = Array.prototype.concat.apply([], args);
	    comparator = function (a, b, i) {
	      i = i || 0;
	      return i >= sortKeys.length - 1 ? baseCompare(a, b, i) : baseCompare(a, b, i) || comparator(a, b, i + 1);
	    };
	  }

	  function baseCompare(a, b, sortKeyIndex) {
	    var sortKey = sortKeys[sortKeyIndex];
	    if (sortKey) {
	      if (sortKey !== '$key') {
	        if (isObject(a) && '$value' in a) a = a.$value;
	        if (isObject(b) && '$value' in b) b = b.$value;
	      }
	      a = isObject(a) ? getPath(a, sortKey) : a;
	      b = isObject(b) ? getPath(b, sortKey) : b;
	    }
	    return a === b ? 0 : a > b ? order : -order;
	  }

	  // sort on a copy to avoid mutating original array
	  return arr.slice().sort(comparator);
	}

	/**
	 * String contain helper
	 *
	 * @param {*} val
	 * @param {String} search
	 */

	function contains(val, search) {
	  var i;
	  if (isPlainObject(val)) {
	    var keys = Object.keys(val);
	    i = keys.length;
	    while (i--) {
	      if (contains(val[keys[i]], search)) {
	        return true;
	      }
	    }
	  } else if (isArray(val)) {
	    i = val.length;
	    while (i--) {
	      if (contains(val[i], search)) {
	        return true;
	      }
	    }
	  } else if (val != null) {
	    return val.toString().toLowerCase().indexOf(search) > -1;
	  }
	}

	var digitsRE = /(\d{3})(?=\d)/g;

	// asset collections must be a plain object.
	var filters = {

	  orderBy: orderBy,
	  filterBy: filterBy,
	  limitBy: limitBy,

	  /**
	   * Stringify value.
	   *
	   * @param {Number} indent
	   */

	  json: {
	    read: function read(value, indent) {
	      return typeof value === 'string' ? value : JSON.stringify(value, null, arguments.length > 1 ? indent : 2);
	    },
	    write: function write(value) {
	      try {
	        return JSON.parse(value);
	      } catch (e) {
	        return value;
	      }
	    }
	  },

	  /**
	   * 'abc' => 'Abc'
	   */

	  capitalize: function capitalize(value) {
	    if (!value && value !== 0) return '';
	    value = value.toString();
	    return value.charAt(0).toUpperCase() + value.slice(1);
	  },

	  /**
	   * 'abc' => 'ABC'
	   */

	  uppercase: function uppercase(value) {
	    return value || value === 0 ? value.toString().toUpperCase() : '';
	  },

	  /**
	   * 'AbC' => 'abc'
	   */

	  lowercase: function lowercase(value) {
	    return value || value === 0 ? value.toString().toLowerCase() : '';
	  },

	  /**
	   * 12345 => $12,345.00
	   *
	   * @param {String} sign
	   * @param {Number} decimals Decimal places
	   */

	  currency: function currency(value, _currency, decimals) {
	    value = parseFloat(value);
	    if (!isFinite(value) || !value && value !== 0) return '';
	    _currency = _currency != null ? _currency : '$';
	    decimals = decimals != null ? decimals : 2;
	    var stringified = Math.abs(value).toFixed(decimals);
	    var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
	    var i = _int.length % 3;
	    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
	    var _float = decimals ? stringified.slice(-1 - decimals) : '';
	    var sign = value < 0 ? '-' : '';
	    return sign + _currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
	  },

	  /**
	   * 'item' => 'items'
	   *
	   * @params
	   *  an array of strings corresponding to
	   *  the single, double, triple ... forms of the word to
	   *  be pluralized. When the number to be pluralized
	   *  exceeds the length of the args, it will use the last
	   *  entry in the array.
	   *
	   *  e.g. ['single', 'double', 'triple', 'multiple']
	   */

	  pluralize: function pluralize(value) {
	    var args = toArray(arguments, 1);
	    var length = args.length;
	    if (length > 1) {
	      var index = value % 10 - 1;
	      return index in args ? args[index] : args[length - 1];
	    } else {
	      return args[0] + (value === 1 ? '' : 's');
	    }
	  },

	  /**
	   * Debounce a handler function.
	   *
	   * @param {Function} handler
	   * @param {Number} delay = 300
	   * @return {Function}
	   */

	  debounce: function debounce(handler, delay) {
	    if (!handler) return;
	    if (!delay) {
	      delay = 300;
	    }
	    return _debounce(handler, delay);
	  }
	};

	function installGlobalAPI (Vue) {
	  /**
	   * Vue and every constructor that extends Vue has an
	   * associated options object, which can be accessed during
	   * compilation steps as `this.constructor.options`.
	   *
	   * These can be seen as the default options of every
	   * Vue instance.
	   */

	  Vue.options = {
	    directives: directives,
	    elementDirectives: elementDirectives,
	    filters: filters,
	    transitions: {},
	    components: {},
	    partials: {},
	    replace: true
	  };

	  /**
	   * Expose useful internals
	   */

	  Vue.util = util;
	  Vue.config = config;
	  Vue.set = set;
	  Vue['delete'] = del;
	  Vue.nextTick = nextTick;

	  /**
	   * The following are exposed for advanced usage / plugins
	   */

	  Vue.compiler = compiler;
	  Vue.FragmentFactory = FragmentFactory;
	  Vue.internalDirectives = internalDirectives;
	  Vue.parsers = {
	    path: path,
	    text: text,
	    template: template,
	    directive: directive,
	    expression: expression
	  };

	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */

	  Vue.cid = 0;
	  var cid = 1;

	  /**
	   * Class inheritance
	   *
	   * @param {Object} extendOptions
	   */

	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var isFirstExtend = Super.cid === 0;
	    if (isFirstExtend && extendOptions._Ctor) {
	      return extendOptions._Ctor;
	    }
	    var name = extendOptions.name || Super.options.name;
	    if (process.env.NODE_ENV !== 'production') {
	      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	        warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characaters and the hyphen.');
	        name = null;
	      }
	    }
	    var Sub = createClass(name || 'VueComponent');
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(Super.options, extendOptions);
	    Sub['super'] = Super;
	    // allow further extension
	    Sub.extend = Super.extend;
	    // create asset registers, so extended classes
	    // can have their private assets too.
	    config._assetTypes.forEach(function (type) {
	      Sub[type] = Super[type];
	    });
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub;
	    }
	    // cache constructor
	    if (isFirstExtend) {
	      extendOptions._Ctor = Sub;
	    }
	    return Sub;
	  };

	  /**
	   * A function that returns a sub-class constructor with the
	   * given name. This gives us much nicer output when
	   * logging instances in the console.
	   *
	   * @param {String} name
	   * @return {Function}
	   */

	  function createClass(name) {
	    /* eslint-disable no-new-func */
	    return new Function('return function ' + classify(name) + ' (options) { this._init(options) }')();
	    /* eslint-enable no-new-func */
	  }

	  /**
	   * Plugin system
	   *
	   * @param {Object} plugin
	   */

	  Vue.use = function (plugin) {
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return;
	    }
	    // additional parameters
	    var args = toArray(arguments, 1);
	    args.unshift(this);
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args);
	    } else {
	      plugin.apply(null, args);
	    }
	    plugin.installed = true;
	    return this;
	  };

	  /**
	   * Apply a global mixin by merging it into the default
	   * options.
	   */

	  Vue.mixin = function (mixin) {
	    Vue.options = mergeOptions(Vue.options, mixin);
	  };

	  /**
	   * Create asset registration methods with the following
	   * signature:
	   *
	   * @param {String} id
	   * @param {*} definition
	   */

	  config._assetTypes.forEach(function (type) {
	    Vue[type] = function (id, definition) {
	      if (!definition) {
	        return this.options[type + 's'][id];
	      } else {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          if (type === 'component' && (commonTagRE.test(id) || reservedTagRE.test(id))) {
	            warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
	          }
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          if (!definition.name) {
	            definition.name = id;
	          }
	          definition = Vue.extend(definition);
	        }
	        this.options[type + 's'][id] = definition;
	        return definition;
	      }
	    };
	  });

	  // expose internal transition API
	  extend(Vue.transition, transition);
	}

	installGlobalAPI(Vue);

	Vue.version = '1.0.26';

	// devtools global hook
	/* istanbul ignore next */
	setTimeout(function () {
	  if (config.devtools) {
	    if (devtools) {
	      devtools.emit('init', Vue);
	    } else if (process.env.NODE_ENV !== 'production' && inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)) {
	      console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
	    }
	  }
	}, 0);

	module.exports = Vue;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(2)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _arguments = arguments;
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.LoadingMask = exports.Schema = exports.Notification = exports.MessageBox = exports.Components = undefined;

	var _msgbox = __webpack_require__(4);

	Object.defineProperty(exports, 'MessageBox', {
	  enumerable: true,
	  get: function get() {
	    return _msgbox.default;
	  }
	});

	var _notification = __webpack_require__(98);

	Object.defineProperty(exports, 'Notification', {
	  enumerable: true,
	  get: function get() {
	    return _notification.default;
	  }
	});

	var _index = __webpack_require__(104);

	Object.defineProperty(exports, 'Schema', {
	  enumerable: true,
	  get: function get() {
	    return _index.default;
	  }
	});

	var _loadingMask = __webpack_require__(121);

	Object.defineProperty(exports, 'LoadingMask', {
	  enumerable: true,
	  get: function get() {
	    return _loadingMask.default;
	  }
	});

	var _keys = __webpack_require__(105);

	var _keys2 = _interopRequireDefault(_keys);

	var _alert = __webpack_require__(127);

	var _alert2 = _interopRequireDefault(_alert);

	var _panel = __webpack_require__(132);

	var _panel2 = _interopRequireDefault(_panel);

	var _dialog = __webpack_require__(140);

	var _dialog2 = _interopRequireDefault(_dialog);

	var _button = __webpack_require__(145);

	var _button2 = _interopRequireDefault(_button);

	var _buttonGroup = __webpack_require__(150);

	var _buttonGroup2 = _interopRequireDefault(_buttonGroup);

	var _progressBar = __webpack_require__(155);

	var _progressBar2 = _interopRequireDefault(_progressBar);

	var _slider = __webpack_require__(160);

	var _slider2 = _interopRequireDefault(_slider);

	var _sticky = __webpack_require__(165);

	var _sticky2 = _interopRequireDefault(_sticky);

	var _dropdown = __webpack_require__(170);

	var _dropdown2 = _interopRequireDefault(_dropdown);

	var _dropdownItem = __webpack_require__(176);

	var _dropdownItem2 = _interopRequireDefault(_dropdownItem);

	var _dropdownDivider = __webpack_require__(181);

	var _dropdownDivider2 = _interopRequireDefault(_dropdownDivider);

	var _vbox = __webpack_require__(186);

	var _vbox2 = _interopRequireDefault(_vbox);

	var _navMenu = __webpack_require__(191);

	var _navMenu2 = _interopRequireDefault(_navMenu);

	var _navMenuItem = __webpack_require__(196);

	var _navMenuItem2 = _interopRequireDefault(_navMenuItem);

	var _accordion = __webpack_require__(201);

	var _accordion2 = _interopRequireDefault(_accordion);

	var _accordionPanel = __webpack_require__(206);

	var _accordionPanel2 = _interopRequireDefault(_accordionPanel);

	var _tab = __webpack_require__(211);

	var _tab2 = _interopRequireDefault(_tab);

	var _tabs = __webpack_require__(216);

	var _tabs2 = _interopRequireDefault(_tabs);

	var _breadcrumb = __webpack_require__(221);

	var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

	var _breadcrumbItem = __webpack_require__(226);

	var _breadcrumbItem2 = _interopRequireDefault(_breadcrumbItem);

	var _grid = __webpack_require__(231);

	var _grid2 = _interopRequireDefault(_grid);

	var _gridColumn = __webpack_require__(247);

	var _gridColumn2 = _interopRequireDefault(_gridColumn);

	var _tree = __webpack_require__(250);

	var _tree2 = _interopRequireDefault(_tree);

	var _pagination = __webpack_require__(260);

	var _pagination2 = _interopRequireDefault(_pagination);

	var _index2 = __webpack_require__(265);

	var _index3 = _interopRequireDefault(_index2);

	var _util = __webpack_require__(5);

	var _index4 = __webpack_require__(377);

	var _index5 = _interopRequireDefault(_index4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(91);
	__webpack_require__(379);

	var Components = exports.Components = {
	  Alert: _alert2.default,
	  Panel: _panel2.default,
	  Dialog: _dialog2.default,
	  Button: _button2.default,
	  ButtonGroup: _buttonGroup2.default,
	  ProgressBar: _progressBar2.default,
	  Slider: _slider2.default,
	  Sticky: _sticky2.default,

	  DropdownButton: _dropdown2.default,
	  DropdownItem: _dropdownItem2.default,
	  DropdownDivider: _dropdownDivider2.default,

	  Vbox: _vbox2.default,

	  NavMenu: _navMenu2.default,
	  NavMenuItem: _navMenuItem2.default,

	  Accordion: _accordion2.default,
	  AccordionPanel: _accordionPanel2.default,

	  Tab: _tab2.default,
	  Tabs: _tabs2.default,

	  Breadcrumb: _breadcrumb2.default,
	  BreadcrumbItem: _breadcrumbItem2.default,

	  Grid: _grid2.default,
	  GridColumn: _gridColumn2.default,
	  Tree: _tree2.default,
	  Pagination: _pagination2.default
	};

	(0, _util.merge)(Components, _index3.default);

	var initComponents = function initComponents(Vue, prefix, components) {
	  if (_arguments.length < 3) {
	    // eslint-disable-line no-undef
	    components = prefix;
	    prefix = 'D';
	  } else {
	    if (!prefix) {
	      prefix = 'D';
	    }
	  }

	  if (!components) components = (0, _keys2.default)(Components);

	  if (components instanceof Array) {
	    for (var i = 0, j = components.length; i < j; i++) {
	      var key = components[i];
	      Vue.component(prefix + key, Components[key]);
	    }
	  }
	};

	var Vue = __webpack_require__(1);
	var i18n = __webpack_require__(381);

	Vue.use(i18n, {
	  lang: 'zh',
	  locales: _index5.default
	});

	initComponents(Vue);

	__webpack_require__(382);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	var _util = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CONFIRM_TEXT = '确定';
	var CANCEL_TEXT = '取消';

	var defaults = {
	  title: '',
	  message: '',
	  type: '',
	  showConfirmButton: true,
	  showCancelButton: false,
	  confirmButtonText: CONFIRM_TEXT,
	  cancelButtonText: CANCEL_TEXT,
	  confirmButtonClass: '',
	  cancelButtonClass: ''
	};

	var MessageBoxConstructor = _vue2.default.extend(__webpack_require__(75));

	var currentMsg, instance;
	var msgQueue = [];

	var initInstance = function initInstance() {
	  instance = new MessageBoxConstructor({
	    el: document.createElement('div')
	  });

	  instance.callback = function (action) {
	    var result;
	    if (currentMsg) {
	      var callback = currentMsg.callback;
	      if (typeof callback === 'function') {
	        result = callback(action);
	      }
	    }
	    if (result !== false) {
	      showNextMsg();
	    } else {
	      return false;
	    }
	  };
	};

	var showNextMsg = function showNextMsg() {
	  if (!instance) {
	    initInstance();
	  }

	  if (!instance.visible || instance.closeTimer) {
	    if (msgQueue.length > 0) {
	      currentMsg = msgQueue.shift();

	      var oldVisible = instance.visible;
	      instance.visible = false;

	      var options = currentMsg.options;
	      for (var prop in options) {
	        if (options.hasOwnProperty(prop)) {
	          instance[prop] = options[prop];
	        }
	      }

	      instance.visible = oldVisible;

	      instance.open();
	    }
	  }
	};

	var MessageBox = function MessageBox(options, callback) {
	  if (typeof options === 'string') {
	    options = {
	      title: options
	    };
	    if (arguments[1]) {
	      options.message = arguments[1];
	    }
	    if (arguments[2]) {
	      options.type = arguments[2];
	    }
	  } else if (options.callback && !callback) {
	    callback = options.callback;
	  }

	  msgQueue.push({
	    options: (0, _util.merge)({}, defaults, MessageBox.defaults || {}, options),
	    callback: callback
	  });

	  showNextMsg();
	};

	MessageBox.setDefaults = function (defaults) {
	  MessageBox.defaults = defaults;
	};

	MessageBox.close = function () {
	  instance.close();
	  msgQueue = [];
	  currentMsg = null;
	};

	exports.default = MessageBox;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.merge = merge;
	exports.formatDate = formatDate;
	exports.parseDate = parseDate;
	exports.debounce = debounce;
	exports.throttle = throttle;
	exports.getNestedPath = getNestedPath;
	exports.getPath = getPath;
	exports.setPath = setPath;
	exports.getScrollbarWidth = getScrollbarWidth;

	var _typeof2 = __webpack_require__(6);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var dateUtil = __webpack_require__(74);

	function merge(target) {
	  for (var i = 1, j = arguments.length; i < j; i++) {
	    var source = arguments[i];
	    for (var prop in source) {
	      if (source.hasOwnProperty(prop)) {
	        var value = source[prop];
	        if (value !== undefined) {
	          target[prop] = value;
	        }
	      }
	    }
	  }

	  return target;
	}

	function formatDate(date, format) {
	  if (!(date instanceof Date)) return '';
	  return dateUtil.format(date, format || 'YYYY-MM-DD');
	}

	function parseDate(string, format) {
	  return dateUtil.parse(string, format || 'YYYY-MM-DD');
	}

	function debounce(fn, delay) {
	  var timer;

	  return function () {
	    var context = this;
	    var args = arguments;
	    if (timer) {
	      clearTimeout(timer);
	      timer = null;
	    }
	    timer = setTimeout(function () {
	      fn.apply(context, args);
	      timer = null;
	    }, delay);
	  };
	}

	function throttle(fn, delay) {
	  var now, lastExec, timer, context, args;

	  var execute = function execute() {
	    fn.apply(context, args);
	    lastExec = now;
	  };

	  return function () {
	    context = this;
	    args = arguments;

	    now = Date.now();

	    if (timer) {
	      clearTimeout(timer);
	      timer = null;
	    }

	    if (!lastExec) {
	      execute();
	    } else {
	      var diff = delay - (now - lastExec);
	      if (diff < 0) {
	        execute();
	      } else {
	        timer = setTimeout(function () {
	          execute();
	        }, diff);
	      }
	    }
	  };
	}

	function getNestedPath(object, nestedProp) {
	  var propertyArr = nestedProp.split('.');
	  var property = propertyArr.pop();
	  return getPath(object, propertyArr.join('.')).fields[property];
	}

	function getPath(object, prop) {
	  prop = prop || '';
	  var paths = prop.split('.');
	  var current = object;
	  var result = null;
	  for (var i = 0, j = paths.length; i < j; i++) {
	    var path = paths[i];
	    if (!current) break;

	    if (i === j - 1) {
	      result = current[path];
	      break;
	    }
	    current = current[path];
	  }
	  return result;
	}

	function setPath(object, prop, value) {
	  if (prop === undefined || prop === null) return;

	  if ((typeof prop === 'undefined' ? 'undefined' : (0, _typeof3.default)(prop)) === 'object') {
	    var target = prop;
	    for (prop in target) {
	      if (target.hasOwnProperty(prop)) {
	        setPath(object, prop, target[prop]);
	      }
	    }
	  } else {
	    prop = prop || '';
	    var paths = prop.split('.');
	    var current = object;
	    for (var i = 0, j = paths.length; i < j; i++) {
	      var path = paths[i];
	      if (!current) break;
	      if (i === j - 1) {
	        current[path] = value;
	        break;
	      }
	      current = current[path];
	    }
	  }
	}

	var scrollbarWidth;

	function getScrollbarWidth() {
	  if (scrollbarWidth !== undefined) return scrollbarWidth;

	  var outer = document.createElement('div');
	  outer.style.visibility = 'hidden';
	  outer.style.width = '100px';
	  outer.style.position = 'absolute';
	  outer.style.top = '-9999px';
	  document.body.appendChild(outer);

	  var widthNoScroll = outer.offsetWidth;
	  outer.style.overflow = 'scroll';

	  var inner = document.createElement('div');
	  inner.style.width = '100%';
	  outer.appendChild(inner);

	  var widthWithScroll = inner.offsetWidth;
	  outer.parentNode.removeChild(outer);

	  return widthNoScroll - widthWithScroll;
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(7);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(58);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(8), __esModule: true };

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(9);
	__webpack_require__(53);
	module.exports = __webpack_require__(57).f('iterator');

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(10)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(13)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(11)
	  , defined   = __webpack_require__(12);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(14)
	  , $export        = __webpack_require__(15)
	  , redefine       = __webpack_require__(30)
	  , hide           = __webpack_require__(20)
	  , has            = __webpack_require__(31)
	  , Iterators      = __webpack_require__(32)
	  , $iterCreate    = __webpack_require__(33)
	  , setToStringTag = __webpack_require__(49)
	  , getPrototypeOf = __webpack_require__(51)
	  , ITERATOR       = __webpack_require__(50)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(16)
	  , core      = __webpack_require__(17)
	  , ctx       = __webpack_require__(18)
	  , hide      = __webpack_require__(20)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 16 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 17 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(19);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(21)
	  , createDesc = __webpack_require__(29);
	module.exports = __webpack_require__(25) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(22)
	  , IE8_DOM_DEFINE = __webpack_require__(24)
	  , toPrimitive    = __webpack_require__(28)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(25) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(23);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(25) && !__webpack_require__(26)(function(){
	  return Object.defineProperty(__webpack_require__(27)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(26)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(23)
	  , document = __webpack_require__(16).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(23);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(20);

/***/ },
/* 31 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(34)
	  , descriptor     = __webpack_require__(29)
	  , setToStringTag = __webpack_require__(49)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(20)(IteratorPrototype, __webpack_require__(50)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(22)
	  , dPs         = __webpack_require__(35)
	  , enumBugKeys = __webpack_require__(47)
	  , IE_PROTO    = __webpack_require__(44)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(27)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(48).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(21)
	  , anObject = __webpack_require__(22)
	  , getKeys  = __webpack_require__(36);

	module.exports = __webpack_require__(25) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(37)
	  , enumBugKeys = __webpack_require__(47);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(31)
	  , toIObject    = __webpack_require__(38)
	  , arrayIndexOf = __webpack_require__(41)(false)
	  , IE_PROTO     = __webpack_require__(44)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(39)
	  , defined = __webpack_require__(12);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(40);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(38)
	  , toLength  = __webpack_require__(42)
	  , toIndex   = __webpack_require__(43);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(11)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(11)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(45)('keys')
	  , uid    = __webpack_require__(46);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(16)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 46 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 47 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(16).document && document.documentElement;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(21).f
	  , has = __webpack_require__(31)
	  , TAG = __webpack_require__(50)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(45)('wks')
	  , uid        = __webpack_require__(46)
	  , Symbol     = __webpack_require__(16).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(31)
	  , toObject    = __webpack_require__(52)
	  , IE_PROTO    = __webpack_require__(44)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(12);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(54);
	var global        = __webpack_require__(16)
	  , hide          = __webpack_require__(20)
	  , Iterators     = __webpack_require__(32)
	  , TO_STRING_TAG = __webpack_require__(50)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(55)
	  , step             = __webpack_require__(56)
	  , Iterators        = __webpack_require__(32)
	  , toIObject        = __webpack_require__(38);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(13)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(50);

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(59), __esModule: true };

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(60);
	__webpack_require__(71);
	__webpack_require__(72);
	__webpack_require__(73);
	module.exports = __webpack_require__(17).Symbol;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(16)
	  , has            = __webpack_require__(31)
	  , DESCRIPTORS    = __webpack_require__(25)
	  , $export        = __webpack_require__(15)
	  , redefine       = __webpack_require__(30)
	  , META           = __webpack_require__(61).KEY
	  , $fails         = __webpack_require__(26)
	  , shared         = __webpack_require__(45)
	  , setToStringTag = __webpack_require__(49)
	  , uid            = __webpack_require__(46)
	  , wks            = __webpack_require__(50)
	  , wksExt         = __webpack_require__(57)
	  , wksDefine      = __webpack_require__(62)
	  , keyOf          = __webpack_require__(63)
	  , enumKeys       = __webpack_require__(64)
	  , isArray        = __webpack_require__(67)
	  , anObject       = __webpack_require__(22)
	  , toIObject      = __webpack_require__(38)
	  , toPrimitive    = __webpack_require__(28)
	  , createDesc     = __webpack_require__(29)
	  , _create        = __webpack_require__(34)
	  , gOPNExt        = __webpack_require__(68)
	  , $GOPD          = __webpack_require__(70)
	  , $DP            = __webpack_require__(21)
	  , $keys          = __webpack_require__(36)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(69).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(66).f  = $propertyIsEnumerable;
	  __webpack_require__(65).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(14)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(20)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(46)('meta')
	  , isObject = __webpack_require__(23)
	  , has      = __webpack_require__(31)
	  , setDesc  = __webpack_require__(21).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(26)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(16)
	  , core           = __webpack_require__(17)
	  , LIBRARY        = __webpack_require__(14)
	  , wksExt         = __webpack_require__(57)
	  , defineProperty = __webpack_require__(21).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(36)
	  , toIObject = __webpack_require__(38);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(36)
	  , gOPS    = __webpack_require__(65)
	  , pIE     = __webpack_require__(66);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 65 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 66 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(40);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(38)
	  , gOPN      = __webpack_require__(69).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(37)
	  , hiddenKeys = __webpack_require__(47).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(66)
	  , createDesc     = __webpack_require__(29)
	  , toIObject      = __webpack_require__(38)
	  , toPrimitive    = __webpack_require__(28)
	  , has            = __webpack_require__(31)
	  , IE8_DOM_DEFINE = __webpack_require__(24)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(25) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 71 */
/***/ function(module, exports) {

	

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(62)('asyncIterator');

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(62)('observable');

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;(function (main) {
	  'use strict';

	  /**
	   * Parse or format dates
	   * @class fecha
	   */
	  var fecha = {},
	    token = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,
	    dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	    monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	    amPm = ['am', 'pm'],
	    twoDigits = /\d\d?/, threeDigits = /\d{3}/, fourDigits = /\d{4}/,
	    word = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
	    noop = function () {},
	    dayNamesShort, monthNamesShort,
	    parseFlags = {
	      D: [twoDigits, function (d, v) {
	        d.day = v;
	      }],
	      M: [twoDigits, function (d, v) {
	        d.month = v - 1;
	      }],
	      YY: [twoDigits, function (d, v) {
	        var da = new Date(), cent = +('' + da.getFullYear()).substr(0, 2);
	        d.year = '' + (v > 68 ? cent - 1 : cent) + v;
	      }],
	      h: [twoDigits, function (d, v) {
	        d.hour = v;
	      }],
	      m: [twoDigits, function (d, v) {
	        d.minute = v;
	      }],
	      s: [twoDigits, function (d, v) {
	        d.second = v;
	      }],
	      YYYY: [fourDigits, function (d, v) {
	        d.year = v;
	      }],
	      S: [/\d/, function (d, v) {
	        d.millisecond = v * 100;
	      }],
	      SS: [/\d{2}/, function (d, v) {
	        d.millisecond = v * 10;
	      }],
	      SSS: [threeDigits, function (d, v) {
	        d.millisecond = v;
	      }],
	      d: [twoDigits, noop],
	      ddd: [word, noop],
	      MMM: [word, monthUpdate('monthNamesShort')],
	      MMMM: [word, monthUpdate('monthNames')],
	      a: [word, function (d, v) {
	        var val = v.toLowerCase();
	        if (val === amPm[0]) {
	          d.isPm = false;
	        } else if (val === amPm[1]) {
	          d.isPm = true;
	        }
	      }],
	      ZZ: [/[\+\-]\d\d:?\d\d/, function (d, v) {
	        var parts = (v + '').match(/([\+\-]|\d\d)/gi), minutes;

	        if (parts) {
	          minutes = +(parts[1] * 60) + parseInt(parts[2], 10);
	          d.timezoneOffset = parts[0] === '+' ? minutes : -minutes;
	        }

	      }]
	    };
	  parseFlags.dd = parseFlags.d;
	  parseFlags.dddd = parseFlags.ddd;
	  parseFlags.Do = parseFlags.DD = parseFlags.D;
	  parseFlags.mm = parseFlags.m;
	  parseFlags.hh = parseFlags.H = parseFlags.HH = parseFlags.h;
	  parseFlags.MM = parseFlags.M;
	  parseFlags.ss = parseFlags.s;
	  parseFlags.A = parseFlags.a;

	  monthNamesShort = shorten(monthNames, 3);
	  dayNamesShort = shorten(dayNames, 3);

	  function monthUpdate(arrName) {
	    return function (d, v) {
	      var index = fecha.i18n[arrName].indexOf(v.charAt(0).toUpperCase() + v.substr(1).toLowerCase());
	      if (~index) {
	        d.month = index;
	      }
	    }
	  }

	  function pad(val, len) {
	    val = String(val);
	    len = len || 2;
	    while (val.length < len) {
	      val = '0' + val;
	    }
	    return val;
	  }

	  function shorten(arr, sLen) {
	    var newArr = [];
	    for (var i = 0, len = arr.length; i < len; i++) {
	      newArr.push(arr[i].substr(0, sLen));
	    }
	    return newArr;
	  }

	  function DoFn(D) {
	    return D + ['th', 'st', 'nd', 'rd'][D % 10 > 3 ? 0 : (D - D % 10 !== 10) * D % 10];
	  }

	  fecha.i18n = {
	    dayNamesShort: dayNamesShort,
	    dayNames: dayNames,
	    monthNamesShort: monthNamesShort,
	    monthNames: monthNames,
	    amPm: amPm,
	    DoFn: DoFn
	  };

	  // Some common format strings
	  fecha.masks = {
	    'default': 'ddd MMM DD YYYY HH:mm:ss',
	    shortDate: 'M/D/YY',
	    mediumDate: 'MMM D, YYYY',
	    longDate: 'MMMM D, YYYY',
	    fullDate: 'dddd, MMMM D, YYYY',
	    shortTime: 'HH:mm',
	    mediumTime: 'HH:mm:ss',
	    longTime: 'HH:mm:ss.SSS'
	  };

	  /***
	   * Format a date
	   * @method format
	   * @param {Date|number} dateObj
	   * @param {string} mask Format of the date, i.e. 'mm-dd-yy' or 'shortDate'
	   */
	  fecha.format = function (dateObj, mask) {
	    if (typeof dateObj === 'number') {
	      dateObj = new Date(dateObj);
	    }

	    if (!dateObj || typeof dateObj !== 'object' && typeof dateObj.getDate !== 'function') {
	      throw new Error('Invalid Date in fecha.format');
	    }

	    mask = fecha.masks[mask] || mask || fecha.masks['default'];

	    var D = dateObj.getDate(),
	      d = dateObj.getDay(),
	      M = dateObj.getMonth(),
	      y = dateObj.getFullYear(),
	      H = dateObj.getHours(),
	      m = dateObj.getMinutes(),
	      s = dateObj.getSeconds(),
	      S = dateObj.getMilliseconds(),
	      o = dateObj.getTimezoneOffset(),
	      flags = {
	        D: D,
	        DD: pad(D),
	        Do: fecha.i18n.DoFn(D),
	        d: d,
	        dd: pad(d),
	        ddd: fecha.i18n.dayNamesShort[d],
	        dddd: fecha.i18n.dayNames[d],
	        M: M + 1,
	        MM: pad(M + 1),
	        MMM: fecha.i18n.monthNamesShort[M],
	        MMMM: fecha.i18n.monthNames[M],
	        YY: String(y).slice(2),
	        YYYY: y,
	        h: H % 12 || 12,
	        hh: pad(H % 12 || 12),
	        H: H,
	        HH: pad(H),
	        m: m,
	        mm: pad(m),
	        s: s,
	        ss: pad(s),
	        S: Math.round(S / 100),
	        SS: pad(Math.round(S / 10), 2),
	        SSS: pad(S, 3),
	        a: H < 12 ? fecha.i18n.amPm[0] : fecha.i18n.amPm[1],
	        A: H < 12 ? fecha.i18n.amPm[0].toUpperCase() : fecha.i18n.amPm[1].toUpperCase(),
	        ZZ: (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4)
	      };

	    return mask.replace(token, function ($0) {
	      return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
	    });
	  };

	  /**
	   * Parse a date string into an object, changes - into /
	   * @method parse
	   * @param {string} dateStr Date string
	   * @param {string} format Date parse format
	   * @returns {Date|boolean}
	   */
	  fecha.parse = function (dateStr, format) {
	    var isValid, dateInfo, today, date, info, index;

	    if (typeof format !== 'string') {
	      throw new Error('Invalid format in fecha.parse');
	    }

	    format = fecha.masks[format] || format;

	    // Avoid regular expression denial of service, fail early for really long strings
	    // https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS
	    if (dateStr.length > 1000) {
	      return false;
	    }

	    isValid = true;
	    dateInfo = {};
	    format.replace(token, function ($0) {
	      if (parseFlags[$0]) {
	        info = parseFlags[$0];
	        index = dateStr.search(info[0]);
	        if (!~index) {
	          isValid = false;
	        } else {
	          dateStr.replace(info[0], function (result) {
	            info[1](dateInfo, result);
	            dateStr = dateStr.substr(index + result.length);
	            return result;
	          });
	        }
	      }

	      return parseFlags[$0] ? '' : $0.slice(1, $0.length - 1);
	    });

	    if (!isValid) {
	      return false;
	    }

	    today = new Date();
	    if (dateInfo.isPm === true && dateInfo.hour != null && +dateInfo.hour !== 12) {
	      dateInfo.hour = +dateInfo.hour + 12;
	    } else if (dateInfo.isPm === false && +dateInfo.hour === 12) {
	      dateInfo.hour = 0;
	    }

	    if (dateInfo.timezoneOffset != null) {
	      dateInfo.minute = +(dateInfo.minute || 0) - +dateInfo.timezoneOffset;
	      date = new Date(Date.UTC(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1,
	        dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0));
	    } else {
	      date = new Date(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1,
	        dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0);
	    }
	    return date;
	  };

	  if (typeof module !== 'undefined' && module.exports) {
	    module.exports = fecha;
	  } else if (true) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return fecha;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else {
	    main.fecha = fecha;
	  }
	})(this);


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(76)
	__vue_script__ = __webpack_require__(80)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules\\vue-desktop\\lib\\service\\msgbox.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(97)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./msgbox.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 76 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 77 */,
/* 78 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vuePopup = __webpack_require__(81);

	var _vuePopup2 = _interopRequireDefault(_vuePopup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//   <div class="msgbox" v-show="visible" transition="pop-bounce">
	//     <div class="msgbox-header">
	//       <div class="msgbox-title">{{ title }}</div>
	//       <div class="msgbox-close d-icon d-icon-close" @click="handleAction('close')"></div>
	//     </div>
	//     <div class="msgbox-content">
	//       <div class="msgbox-status d-icon {{ type ? 'd-icon-' + type : '' }}"></div>
	//       <div class="msgbox-message">{{ message }}</div>
	//     </div>
	//     <div class="msgbox-btns">
	//       <button class="btn btn-primary btn-lg msgbox-confirm {{confirmButtonClass}}" v-show="showConfirmButton" @click="handleAction('confirm')">{{ confirmButtonText }}</button>
	//       <button class="btn btn-lg msgbox-cancel {{cancelButtonClass}}" v-show="showCancelButton" @click="handleAction('cancel')">{{ cancelButtonText }}</button>
	//     </div>
	//   </div>
	// </template>
	//
	// <style>
	//   .msgbox {
	//     position: fixed;
	//     background-color: #fff;
	//     width: 414px;
	//     min-height: 220px;
	//     border-radius: 3px;
	//   }
	//
	//   .msgbox-header{
	//     padding: 15px 20px 5px 10px;
	//     border-bottom: 1px dashed #e5e5e5;
	//   }
	//
	//   .msgbox-content {
	//     padding: 30px 20px 10px 20px;
	//     min-height: 60px;
	//   }
	//
	//   .msgbox-close {
	//     display: inline-block;
	//     position: absolute;
	//     top: 14px;
	//     right: 15px;
	//     width: 20px;
	//     height: 20px;
	//     cursor: pointer;
	//     line-height: 20px;
	//     text-align: center;
	//   }
	//
	//   .msgbox-title {
	//     padding-left: 10px;
	//     font-size: 16px;
	//     font-weight: bold;
	//     color: #333;
	//     margin-bottom: 8px;
	//   }
	//
	//   .msgbox-status {
	//     float: left;
	//     width: 36px;
	//     height: 36px;
	//     line-height: 36px;
	//     font-size: 36px !important;
	//   }
	//
	//   .msgbox-status.d-icon-success {
	//     color: #94c852;
	//   }
	//
	//   .msgbox-status.d-icon-warning {
	//     color: #ff9c00;
	//   }
	//
	//   .msgbox-status.d-icon-error {
	//     color: #ff4248;
	//   }
	//
	//   .msgbox-message {
	//     color: #333;
	//     font-size: 16px;
	//     line-height: 36px;
	//     margin-left: 36px;
	//     margin-right: 36px;
	//     text-align: center;
	//   }
	//
	//   .msgbox-btns {
	//     margin: 18px 0;
	//     text-align: center;
	//   }
	//
	//   .msgbox-confirm {
	//     min-width: 100px;
	//   }
	//
	//   .msgbox-cancel {
	//     min-width: 100px;
	//   }
	// </style>
	//
	// <script type="text/ecmascript-6">
	var CONFIRM_TEXT = '确定';
	var CANCEL_TEXT = '取消';

	__webpack_require__(89);
	__webpack_require__(91);

	exports.default = {
	  mixins: [_vuePopup2.default],

	  computed: {
	    popupOptions: function popupOptions() {
	      return {
	        target: 'center',
	        modal: true,
	        updatePositionOnResize: true,
	        openAnimation: 'pop',
	        closeDelay: 1,
	        closeOnPressEscape: true,
	        closeOnClickModal: true
	      };
	    }
	  },

	  methods: {
	    handleAction: function handleAction(action) {
	      var callback = this.callback;
	      this.close();
	      callback(action);
	    }
	  },

	  data: function data() {
	    return {
	      title: '',
	      message: '',
	      type: '',
	      showConfirmButton: true,
	      showCancelButton: false,
	      confirmButtonText: CONFIRM_TEXT,
	      cancelButtonText: CANCEL_TEXT,
	      confirmButtonClass: '',
	      confirmButtonDisabled: false,
	      cancelButtonClass: '',

	      callback: null
	    };
	  }
	};
	// </script>

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _util = __webpack_require__(82);

	var _popupManager = __webpack_require__(88);

	var _popupManager2 = _interopRequireDefault(_popupManager);

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var domUtil = __webpack_require__(83);

	var PLACEMENT_REVERSE = { top: 'bottom', bottom: 'top', left: 'right', right: 'left' };
	var ALIGNMENT_REVERSE = { start: 'end', end: 'start', center: 'center' };

	var idSeed = 1;

	var transitions = ['pop-bounce', 'pop-fade'];

	transitions.forEach(function (transition) {
	  _vue2.default.transition(transition, {
	    afterLeave: function afterLeave(el) {
	      var component = el.__vue__;

	      if (component) {
	        component.$afterClose && component.$afterClose();
	      }
	    }
	  });
	});

	exports.default = {
	  props: {
	    visible: {
	      type: Boolean,
	      twoWay: true,
	      default: false
	    }
	  },

	  data: function data() {
	    return {
	      closing: false,
	      $visible: false,
	      openTimer: null,
	      closeTimer: null,
	      popupId: null
	    };
	  },

	  watch: {
	    visible: function visible(val) {
	      if (val) {
	        this.open();
	      } else {
	        this.close();
	      }
	    }
	  },

	  computed: {
	    popupOptions: function popupOptions() {
	      return {};
	    },
	    popupProps: function popupProps() {
	      return (0, _util.merge)({}, _popupManager2.default.defaultOptions, this.popupOptions);
	    }
	  },

	  compiled: function compiled() {
	    this.$initPopup();
	    domUtil.addClass(this.$el, 'd-popup');
	  },
	  beforeDestroy: function beforeDestroy() {
	    var props = this.popupProps;

	    if (props.modal) {
	      _popupManager2.default.closeModal(this.popupId);
	    }
	  },

	  methods: {
	    getDOM: function getDOM() {
	      if (!this.$el) {
	        this.$mount();
	      }

	      return this.$el;
	    },
	    $initPopup: function $initPopup() {
	      this.popupId = 'popup-' + idSeed++;

	      _popupManager2.default.register(this.popupId, this);
	    },
	    $locate: function $locate(props) {
	      if (!props) {
	        props = this.popupProps;
	      }

	      var popup = this;
	      var dom = popup.getDOM();
	      var target = props.target;
	      var adjustTop = props.adjustTop || 0;
	      var adjustLeft = props.adjustLeft || 0;
	      var afterLocateArgs = {};

	      if (target && target.nodeType) {
	        var placement = props.placement;
	        var alignment = props.alignment || 'center';

	        var positionCache = {};

	        var tryLocate = function tryLocate(placement, alignment, adjustLeft, adjustTop) {
	          var key = placement + ',' + alignment;
	          var position = positionCache[key];

	          if (!position) {
	            position = (0, _util.positionElement)(dom, target, placement, alignment);
	            positionCache[key] = position;
	          }

	          dom.style.left = position.left + adjustLeft + 'px';
	          dom.style.top = position.top + adjustTop + 'px';
	        };

	        tryLocate(placement, alignment, adjustLeft, adjustTop);

	        var outside = (0, _util.isElementOutside)(dom);
	        var finalPlacement = placement;
	        var finalAlignment = alignment;

	        if (outside !== 'none') {
	          var needReversePlacement = false;
	          var needReverseAlignment = false;
	          var reverseAdjustLeft = false;
	          var reverseAdjustTop = false;

	          if (outside === 'left') {
	            if (placement === 'left' || placement === 'right') {
	              needReversePlacement = true;
	              reverseAdjustLeft = true;
	            } else {
	              needReverseAlignment = true;
	              reverseAdjustTop = true;
	            }
	          } else if (outside === 'top') {
	            if (placement === 'top' || placement === 'bottom') {
	              needReversePlacement = true;
	              reverseAdjustTop = true;
	            } else {
	              needReverseAlignment = true;
	              reverseAdjustLeft = true;
	            }
	          }

	          if (outside === 'both') {
	            needReversePlacement = true;
	            needReverseAlignment = true;
	            reverseAdjustTop = true;
	            reverseAdjustLeft = true;
	          }

	          if (needReversePlacement) {
	            var reversedPlacement = PLACEMENT_REVERSE[placement];
	            tryLocate(reversedPlacement, alignment, reverseAdjustLeft ? -adjustLeft : adjustLeft, reverseAdjustTop ? -adjustTop : adjustTop);
	            outside = (0, _util.isElementOutside)(dom);

	            if ((placement === 'left' || placement === 'right') && outside !== 'left') {
	              finalPlacement = reversedPlacement;
	            } else if ((placement === 'top' || placement === 'bottom') && outside !== 'top') {
	              finalPlacement = reversedPlacement;
	            }
	          }

	          if (needReverseAlignment && outside !== 'none') {
	            var reversedAlignment = ALIGNMENT_REVERSE[alignment];
	            tryLocate(finalPlacement, reversedAlignment, reverseAdjustLeft ? -adjustLeft : adjustLeft, reverseAdjustTop ? -adjustTop : adjustTop);
	            outside = (0, _util.isElementOutside)(dom);

	            if (outside !== 'none') {
	              tryLocate(finalPlacement, alignment, reverseAdjustLeft ? -adjustLeft : adjustLeft, reverseAdjustTop ? -adjustTop : adjustTop);
	            } else {
	              finalAlignment = reversedAlignment;
	            }
	          }
	        }

	        afterLocateArgs = {
	          placement: finalPlacement,
	          alignment: finalAlignment,
	          isOutside: outside !== 'none'
	        };
	      } else if (target instanceof Array && target.length === 2) {
	        dom.style.left = target[0] + adjustLeft + 'px';
	        dom.style.top = target[1] + adjustTop + 'px';
	      } else if (target && target.target) {
	        dom.style.left = target.pageX + adjustLeft + 'px';
	        dom.style.top = target.pageY + adjustTop + 'px';
	      } else if (target === 'center') {
	        domUtil.addClass(dom, 'd-popup-center');
	        //var selfWidth = dom.offsetWidth;
	        //var selfHeight = dom.offsetHeight;
	        //
	        //var windowWidth = window.innerWidth || document.documentElement.clientWidth;
	        //var windowHeight = window.innerHeight || document.documentElement.clientHeight;
	        //
	        //var scrollTop = Math.max(window.pageYOffset || 0, document.documentElement.scrollTop);
	        //
	        //if (domUtil.getStyle(dom, 'position') === 'fixed') {
	        //  scrollTop = 0;
	        //}
	        //
	        //dom.style.left = (windowWidth - selfWidth) / 2 + adjustLeft + 'px';
	        //dom.style.top = Math.max((windowHeight - selfHeight) / 2 + scrollTop + adjustTop, 0) + 'px';
	      }

	      popup.afterLocate && popup.afterLocate(afterLocateArgs);
	    },
	    $doOpen: function $doOpen(props) {
	      var popup = this;

	      this.visible = this.$visible = true;

	      var dom = popup.getDOM();

	      var attach = function attach() {
	        if (props.attachToBody) {
	          document.body.appendChild(dom);
	        } else {
	          var target = props.target;
	          if (target && target.nodeType && target.nodeName !== 'BODY') {
	            target.parentNode.appendChild(dom);
	          } else {
	            document.body.appendChild(dom);
	          }
	        }
	      };

	      var modal = props.modal;
	      if (modal) {
	        if (this.closing) {
	          _popupManager2.default.closeModal(this.popupId);
	          this.closing = false;
	        }
	        _popupManager2.default.openModal(this.popupId, _popupManager2.default.nextZIndex(), dom, props.modalClass);
	      }

	      if (!dom) {
	        dom = popup.getDOM();
	        attach();
	      } else if (!dom.parentNode || dom.parentNode.nodeType === 11) {
	        //detached element's parentNode is a DocumentFragment in IE8
	        attach();
	      }

	      dom.style.visibility = 'hidden';
	      dom.style.display = '';

	      if (domUtil.getStyle(dom, 'position') === 'static') {
	        domUtil.setStyle(dom, 'position', 'absolute');
	      }

	      popup.$locate(props);

	      var zIndex = props.zIndex;
	      if (modal) {
	        dom.style.zIndex = _popupManager2.default.nextZIndex();
	      } else if (zIndex) {
	        dom.style.zIndex = zIndex;
	      }

	      dom.style.visibility = '';

	      popup.onOpen && popup.onOpen();
	    },
	    $afterClose: function $afterClose() {
	      var dom = this.getDOM();

	      dom.style.display = 'none';
	      dom.style.left = dom.style.top = '';

	      var props = this.popupProps;

	      //if (props.modal) {
	      _popupManager2.default.closeModal(this.popupId);
	      //}

	      if (props.detachAfterHide) {
	        dom.parentNode && dom.parentNode.removeChild(dom);
	      }
	      this.closing = false;
	    },
	    $doClose: function $doClose() {
	      var popup = this;
	      this.visible = this.$visible = false;
	      this.closing = true;

	      popup.onClose && popup.onClose();

	      var dom = popup.getDOM();
	      var props = this.popupProps;

	      if (dom) {
	        var animation = props.animation;
	        if (animation === false) {
	          popup.$afterClose();
	        }
	      }
	    },
	    open: function open(options) {
	      var _this = this;

	      var props = (0, _util.merge)({}, this.popupProps, options);

	      var popup = this;

	      if (popup.willOpen && !popup.willOpen()) return;

	      if (this.closeTimer) {
	        clearTimeout(this.closeTimer);
	        this.closeTimer = null;
	      }

	      if (this.$visible) return;

	      clearTimeout(this.openTimer);

	      var openDelay = Number(props.openDelay);

	      if (openDelay > 0) {
	        this.openTimer = setTimeout(function () {
	          _this.openTimer = null;
	          _this.$doOpen(props);
	        }, openDelay);
	      } else {
	        this.$doOpen(props);
	      }
	    },
	    close: function close() {
	      var _this2 = this;

	      var popup = this;

	      if (popup.willClose && !popup.willClose()) return;

	      if (this.openTimer !== null) {
	        clearTimeout(this.openTimer);
	        this.openTimer = null;
	      }

	      if (!this.$visible) return;

	      clearTimeout(this.closeTimer);
	      var props = this.popupProps || {};
	      var closeDelay = props.closeDelay;

	      if (Number(closeDelay) > 0) {
	        this.closeTimer = setTimeout(function () {
	          _this2.closeTimer = null;
	          popup.$doClose();
	        }, closeDelay);
	      } else {
	        popup.$doClose();
	      }
	    }
	  }
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.merge = merge;
	var domUtil = __webpack_require__(83);
	var ieVersion = Number(document.documentMode);

	var getRect = function getRect(element) {
	  if (ieVersion < 9) {
	    var rect = element.getBoundingClientRect();

	    return {
	      width: element.offsetWidth,
	      height: element.offsetHeight,
	      left: rect.left,
	      right: rect.right,
	      top: rect.top,
	      bottom: rect.bottom
	    };
	  }
	  return element.getBoundingClientRect();
	};

	var positionElement = exports.positionElement = function positionElement(element, target, placement, alignment) {
	  if (!element || !target || !placement) {
	    return null;
	  }

	  alignment = alignment || 'center';
	  var targetRect = getRect(target);
	  var selfRect = getRect(element);
	  var position = {};

	  switch (placement) {
	    case 'left':
	      position.left = targetRect.left - selfRect.width;
	      break;
	    case 'right':
	      position.left = targetRect.right;
	      break;
	    case 'innerLeft':
	      position.left = targetRect.left;
	      break;
	    case 'innerRight':
	      position.left = targetRect.right - selfRect.width;
	      break;
	    case 'center':
	      position.left = (targetRect.right - selfRect.width) / 2;
	      break;
	    case 'top':
	      position.top = targetRect.top - selfRect.height;
	      break;
	    case 'bottom':
	      position.top = targetRect.bottom;
	      break;
	  }

	  if (placement === 'left' || placement === 'right' || placement === 'innerLeft' || placement === 'innerRight') {
	    switch (alignment) {
	      case 'start':
	        position.top = targetRect.top;
	        break;
	      case 'center':
	        position.top = (targetRect.top + targetRect.bottom) / 2 - selfRect.height / 2;
	        break;
	      case 'end':
	        position.top = targetRect.bottom - selfRect.height;
	        break;
	    }
	  } else {
	    switch (alignment) {
	      case 'start':
	        position.left = targetRect.left;
	        break;
	      case 'center':
	        position.left = (targetRect.left + targetRect.right) / 2 - selfRect.width / 2;
	        break;
	      case 'end':
	        position.left = targetRect.right - selfRect.width;
	        break;
	    }
	  }

	  var currentNode = element.parentNode;

	  while (currentNode && currentNode.nodeName !== 'HTML') {
	    if (domUtil.getStyle(currentNode, 'position') !== 'static') {
	      break;
	    }
	    currentNode = currentNode.parentNode;
	  }

	  if (currentNode) {
	    var parentRect = getRect(currentNode);

	    position.left = position.left - parentRect.left;
	    position.top = position.top - parentRect.top;
	  }

	  return position;
	};

	var isElementOutside = exports.isElementOutside = function isElementOutside(element) {
	  var rect = element.getBoundingClientRect();
	  var leftOutside = false;
	  var topOutside = false;

	  if (rect.top < 0 || rect.bottom > (window.innerHeight || document.documentElement.clientHeight)) {
	    topOutside = true;
	  }

	  if (rect.left < 0 || rect.right > (window.innerWidth || document.documentElement.clientWidth)) {
	    leftOutside = true;
	  }

	  if (leftOutside && topOutside) {
	    return 'both';
	  } else if (leftOutside) {
	    return 'left';
	  } else if (topOutside) {
	    return 'top';
	  }

	  return 'none';
	};

	function merge(target) {
	  for (var i = 1, j = arguments.length; i < j; i++) {
	    var source = arguments[i];
	    for (var prop in source) {
	      if (source.hasOwnProperty(prop)) {
	        var value = source[prop];
	        if (value !== undefined) {
	          target[prop] = value;
	        }
	      }
	    }
	  }

	  return target;
	}

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var clazz = __webpack_require__(84);
	var event = __webpack_require__(85);
	var style= __webpack_require__(86);
	var create = __webpack_require__(87);

	module.exports = {
	  on: event.on,
	  off: event.off,
	  once: event.once,
	  getStyle: style.getStyle,
	  setStyle: style.setStyle,
	  removeClass: clazz.removeClass,
	  addClass: clazz.addClass,
	  hasClass: clazz.hasClass,
	  create: create
	};

/***/ },
/* 84 */
/***/ function(module, exports) {

	var trim = function (string) {
	  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
	};

	var hasClass = function (el, cls) {
	  if (!el || !cls) return false;
	  if (cls.indexOf(' ') != -1) throw new Error('className should not contain space.');
	  if (el.classList) {
	    return el.classList.contains(cls);
	  } else {
	    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
	  }
	};

	var addClass = function (el, cls) {
	  if (!el) return;
	  var curClass = el.className;
	  var classes = (cls || '').split(' ');

	  for (var i = 0, j = classes.length; i < j; i++) {
	    var clsName = classes[i];
	    if (!clsName) continue;

	    if (el.classList) {
	      el.classList.add(clsName);
	    } else {
	      if (!hasClass(el, clsName)) {
	        curClass += ' ' + clsName;
	      }
	    }
	  }
	  if (!el.classList) {
	    el.className = curClass;
	  }
	};

	var removeClass = function (el, cls) {
	  if (!el || !cls) return;
	  var classes = cls.split(' ');
	  var curClass = ' ' + el.className + ' ';

	  for (var i = 0, j = classes.length; i < j; i++) {
	    var clsName = classes[i];
	    if (!clsName) continue;

	    if (el.classList) {
	      el.classList.remove(clsName);
	    } else {
	      if (hasClass(el, clsName)) {
	        curClass = curClass.replace(' ' + clsName + ' ', ' ');
	      }
	    }
	  }
	  if (!el.classList) {
	    el.className = trim(curClass);
	  }
	};

	module.exports = {
	  hasClass: hasClass,
	  addClass: addClass,
	  removeClass: removeClass
	};

/***/ },
/* 85 */
/***/ function(module, exports) {

	var bindEvent = (function() {
	  if(document.addEventListener) {
	    return function(element, event, handler) {
	      if (element && event && handler) {
	        element.addEventListener(event, handler, false);
	      }
	    };
	  } else {
	    return function(element, event, handler) {
	      if (element && event && handler) {
	        element.attachEvent('on' + event, handler);
	      }
	    };
	  }
	})();

	var unbindEvent = (function() {
	  if(document.removeEventListener) {
	    return function(element, event, handler) {
	      if (element && event) {
	        element.removeEventListener(event, handler, false);
	      }
	    };
	  } else {
	    return function(element, event, handler) {
	      if (element && event) {
	        element.detachEvent('on' + event, handler);
	      }
	    };
	  }
	})();

	var bindOnce = function(el, event, fn) {
	  var listener = function() {
	    if (fn) {
	      fn.apply(this, arguments);
	    }
	    unbindEvent(el, event, listener);
	  };
	  bindEvent(el, event, listener);
	};

	module.exports = {
	  on: bindEvent,
	  off: unbindEvent,
	  once: bindOnce
	};

/***/ },
/* 86 */
/***/ function(module, exports) {

	var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
	var MOZ_HACK_REGEXP = /^moz([A-Z])/;

	function camelCase(name) {
	  return name.
	    replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
	      return offset ? letter.toUpperCase() : letter;
	    }).
	    replace(MOZ_HACK_REGEXP, 'Moz$1');
	}

	var ieVersion = Number(document.documentMode);
	var getStyle = ieVersion < 9 ? function(element, styleName) {
	  if (!element || !styleName) return null;
	  styleName = camelCase(styleName);
	  if (styleName === 'float') {
	    styleName = 'styleFloat';
	  }
	  try {
	    switch (styleName) {
	      case 'opacity':
	        try {
	          return element.filters.item('alpha').opacity / 100;
	        }
	        catch (e) {
	          return 1.0;
	        }
	        break;
	      default:
	        return ( element.style[styleName] || element.currentStyle ? element.currentStyle[styleName] : null );
	    }
	  } catch(e) {
	    return element.style[styleName];
	  }
	} : function(element, styleName) {
	  if (!element || !styleName) return null;
	  styleName = camelCase(styleName);
	  if (styleName === 'float') {
	    styleName = 'cssFloat';
	  }
	  try {
	    var computed = document.defaultView.getComputedStyle(element, '');
	    return element.style[styleName] || computed ? computed[styleName] : null;
	  } catch(e) {
	    return element.style[styleName];
	  }
	};

	var setStyle = function(element, styleName, value) {
	  if (!element || !styleName) return;

	  if (typeof styleName === 'object') {
	    for (var prop in styleName) {
	      if (styleName.hasOwnProperty(prop)) {
	        setStyle(element, prop, styleName[prop]);
	      }
	    }
	  } else {
	    styleName = camelCase(styleName);
	    if (styleName === 'opacity' && ieVersion < 9) {
	      element.style.filter = isNaN(value) ? '' : 'alpha(opacity=' + value * 100 + ')';
	    } else {
	      element.style[styleName] = value;
	    }
	  }
	};

	module.exports = {
	  getStyle: getStyle,
	  setStyle: setStyle
	};

/***/ },
/* 87 */
/***/ function(module, exports) {

	//TODO decide the api.
	var create = function(config, refs) {
	  if (!config) return null;
	  var dom, childElement;

	  if (typeof config === 'string') return document.createTextNode(config);

	  if (config.tag) {
	    dom = document.createElement(config.tag);
	    for (var prop in config) {
	      if (config.hasOwnProperty(prop)) {
	        if (prop === 'content' || prop === 'tag') continue;
	        if (prop === 'key' && refs) {
	          var key = config[prop];
	          if (key) {
	            refs[key] = dom;
	          }
	          continue;
	        }
	        dom[prop] = config[prop];
	      }
	    }
	    var content = config.content;
	    if (content) {
	      if (typeof content === 'string') {
	        childElement = document.createTextNode(content);
	        dom.appendChild(childElement);
	      } else {
	        if (!(content instanceof Array)) {
	          content = [ content ];
	        }
	        for (var i = 0, j = content.length; i < j; i++) {
	          var child = content[i];
	          childElement = create(child, refs);
	          dom.appendChild(childElement);
	        }
	      }
	    }

	  }
	  return dom;
	};

	module.exports = create;

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var instances = {};
	var animations = {};

	var domUtil = __webpack_require__(83);

	var getModal = function getModal() {
	  var modalDom = PopupManager.modalDom;
	  if (!modalDom) {
	    modalDom = document.createElement('div');
	    PopupManager.modalDom = modalDom;

	    domUtil.on(modalDom, 'touchmove', function (event) {
	      event.preventDefault();
	      event.stopPropagation();
	    });

	    domUtil.on(modalDom, 'click', function () {
	      PopupManager.doOnModalClick && PopupManager.doOnModalClick();
	    });
	  }

	  return modalDom;
	};

	var PopupManager = {
	  zIndex: 1000,

	  defaultOptions: {
	    openDelay: 0,
	    closeDelay: 0,

	    placement: 'top',
	    alignment: 'center',

	    //TODO Remove
	    attachToBody: false,
	    detachAfterHide: false,

	    target: null,

	    adjustLeft: 0,
	    adjustTop: 0,

	    animation: true,

	    modal: false,
	    zIndex: null,

	    closeOnPressEscape: false,
	    closeOnClickModal: false,

	    updatePositionOnResize: true
	  },

	  getInstance: function getInstance(id) {
	    return instances[id];
	  },

	  register: function register(id, instance) {
	    if (id && instance) {
	      instances[id] = instance;
	    }
	  },

	  deregister: function deregister(id) {
	    if (id) {
	      instances[id] = null;
	      delete instances[id];
	    }
	  },

	  registerAnimation: function registerAnimation(name, config) {
	    animations[name] = config;
	  },

	  getAnimation: function getAnimation(name) {
	    return animations[name];
	  },

	  nextZIndex: function nextZIndex() {
	    return PopupManager.zIndex++;
	  },

	  modalStack: [],

	  doOnModalClick: function doOnModalClick() {
	    var topItem = PopupManager.modalStack[PopupManager.modalStack.length - 1];
	    if (!topItem) return;

	    var instance = PopupManager.getInstance(topItem.id);
	    if (instance && instance.popupProps && instance.popupProps.closeOnClickModal) {
	      instance.close();
	    }
	  },

	  openModal: function openModal(id, zIndex, dom, modalClass) {
	    if (!id || zIndex === undefined) return;

	    var modalDom = getModal();

	    domUtil.addClass(modalDom, 'd-modal modal-enter');
	    if (modalClass) {
	      domUtil.addClass(modalDom, modalClass);
	    }

	    setTimeout(function () {
	      domUtil.removeClass(modalDom, 'modal-enter');
	    }, 300);

	    //if (!modalDom.parentNode || modalDom.parentNode.nodeType === 11) {
	    if (dom && dom.parentNode && dom.parentNode.nodeType !== 11) {
	      dom.parentNode.appendChild(modalDom);
	    } else {
	      document.body.appendChild(modalDom);
	    }
	    //}

	    if (zIndex) {
	      modalDom.style.zIndex = zIndex;
	    }
	    modalDom.style.display = '';

	    this.modalStack.push({ id: id, zIndex: zIndex, modalClass: modalClass });
	  },

	  closeModal: function closeModal(id) {
	    var modalStack = this.modalStack;
	    var modalDom = getModal();

	    if (modalStack.length > 0) {
	      var topItem = modalStack[modalStack.length - 1];
	      if (topItem.id === id) {
	        domUtil.removeClass(modalDom, topItem.modalClass);
	        modalStack.pop();
	        if (modalStack.length > 0) {
	          modalDom.style.zIndex = modalStack[modalStack.length - 1].zIndex;
	        }
	      } else {
	        for (var i = modalStack.length - 1; i >= 0; i--) {
	          if (modalStack[i].id === id) {
	            modalStack.splice(i, 1);
	            break;
	          }
	        }
	      }
	    }

	    if (modalStack.length === 0) {
	      if (modalDom.parentNode) modalDom.parentNode.removeChild(modalDom);

	      modalDom.style.display = 'none';
	    }
	  }
	};

	domUtil.on(window, 'keydown', function (event) {
	  if (event.keyCode === 27) {
	    // ESC
	    if (PopupManager.modalStack.length > 0) {
	      var topItem = PopupManager.modalStack[PopupManager.modalStack.length - 1];
	      if (!topItem) return;
	      var instance = PopupManager.getInstance(topItem.id);
	      var options = instance.popupProps;
	      if (options.closeOnPressEscape) {
	        instance.close();
	      }
	    }
	  }
	});

	domUtil.on(window, 'resize', function () {
	  for (var id in instances) {
	    if (instances.hasOwnProperty(id)) {
	      var instance = PopupManager.getInstance(id);
	      var options = instance.popupProps;
	      if (instance.visible && options.updatePositionOnResize) {
	        instance.$locate();
	      }
	    }
	  }
	});

	exports.default = PopupManager;

/***/ },
/* 89 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 90 */,
/* 91 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"msgbox\" v-show=\"visible\" transition=\"pop-bounce\">\n  <div class=\"msgbox-header\">\n    <div class=\"msgbox-title\">{{ title }}</div>\n    <div class=\"msgbox-close d-icon d-icon-close\" @click=\"handleAction('close')\"></div>\n  </div>\n  <div class=\"msgbox-content\">\n    <div class=\"msgbox-status d-icon {{ type ? 'd-icon-' + type : '' }}\"></div>\n    <div class=\"msgbox-message\">{{ message }}</div>\n  </div>\n  <div class=\"msgbox-btns\">\n    <button class=\"btn btn-primary btn-lg msgbox-confirm {{confirmButtonClass}}\" v-show=\"showConfirmButton\" @click=\"handleAction('confirm')\">{{ confirmButtonText }}</button>\n    <button class=\"btn btn-lg msgbox-cancel {{cancelButtonClass}}\" v-show=\"showCancelButton\" @click=\"handleAction('cancel')\">{{ cancelButtonText }}</button>\n  </div>\n</div>\n";

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NotificationConstructor = _vue2.default.extend(__webpack_require__(99));

	var instance;
	var instances = [];
	var seed = 1;

	var Notification = function Notification(options) {
	  options = options || {};
	  var userOnClose = options.callback;
	  var id = 'notification_' + seed++;

	  options.callback = function () {
	    Notification.close(id, userOnClose);
	  };

	  instance = new NotificationConstructor({
	    data: options
	  });
	  instance.id = id;
	  instance.vm = instance.$mount();
	  instance.vm.$appendTo('body');
	  instance.dom = instance.vm.$el;

	  var topDist = 0;
	  for (var i = 0, len = instances.length; i < len; i++) {
	    topDist += instances[i].$el.offsetHeight + 10;
	  }
	  topDist += 10;
	  instance.top = topDist;
	  instances.push(instance);
	};

	Notification.close = function (id, userOnClose) {
	  for (var i = 0, len = instances.length; i < len; i++) {
	    if (id === instances[i].id) {
	      if (typeof userOnClose === 'function') {
	        userOnClose(instances[i]);
	      }
	      var index = i;
	      var removedHeight = instances[i].dom.offsetHeight;
	      instances.splice(i, 1);
	      break;
	    }
	  }

	  if (len > 1) {
	    for (i = index; i < len - 1; i++) {
	      instances[i].dom.style.top = parseInt(instances[i].dom.style.top, 10) - removedHeight - 10 + 'px';
	    }
	  }
	};

	exports.default = Notification;

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(100)
	__vue_script__ = __webpack_require__(102)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules\\vue-desktop\\lib\\service\\notification.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(103)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./notification.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 100 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 101 */,
/* 102 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="notification" transition="fade" :style="{ top: top ? top + 'px' : 'auto' }" @mouseenter="clearTimer()" @mouseleave="startTimer()">
	//     <div class="icon d-icon {{iconClass}}"></div>
	//     <div class="group">
	//       <span>{{title}}</span>
	//       <p>{{message}}</p>
	//       <div class="closeBtn d-icon d-icon-close" @click="handleClose()"></div>
	//     </div>
	//   </div>
	// </template>
	//
	// <style>
	//   .notification {
	//     display: inline-block;
	//     width: 320px;
	//     padding: 15px;
	//     box-sizing: border-box;
	//     border-radius: 4px;
	//     position: fixed;
	//     right: 25px;
	//     background-color: #fff;
	//     box-shadow: 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.2);
	//     transition: opacity 0.2s, top 0.2s;
	//     overflow: hidden;
	//     z-index: 100;
	//   }
	//
	//   .notification .group {
	//     float: left;
	//     display: inline-block;
	//     width: 230px;
	//     color: #666;
	//   }
	//
	//   .notification .icon {
	//     display: inline-block;
	//     box-sizing: border-box;
	//     height: 48px;
	//     line-height: 42px;
	//     text-align: center;
	//     width: 48px;
	//     font-size: 46px;
	//     float: left;
	//     margin-right: 10px;
	//   }
	//
	//   .notification .success {
	//     color: #87d068;
	//   }
	//
	//   .notification .error {
	//     color: #f60;
	//   }
	//
	//   .notification .info {
	//     color: #2db7f5;
	//   }
	//
	//   .notification .warning {
	//     color: #fac450;
	//   }
	//
	//   .notification span {
	//     font-size: 16px;
	//   }
	//
	//   .notification p {
	//     font-size: 14px;
	//     margin: 5px 0 0 0;
	//   }
	//
	//   .notification .closeBtn {
	//     position: absolute;
	//     top: 15px;
	//     right: 15px;
	//     cursor: pointer;
	//   }
	//
	//   .fade-leave {
	//     opacity: 0;
	//   }
	// </style>
	//
	// <script type="text/ecmascript-6">

	exports.default = {
	  data: function data() {
	    return {
	      title: '',
	      message: '',
	      duration: 5,
	      type: 'info',
	      callback: null,

	      closed: false,
	      top: null,
	      timer: null
	    };
	  },


	  watch: {
	    closed: function closed(newVal) {
	      if (newVal) {
	        this.$destroy(true);
	      }
	    }
	  },

	  computed: {
	    iconClass: function iconClass() {
	      switch (this.type) {
	        case 'success':
	          return 'd-icon-success success';
	        case 'warning':
	          return 'd-icon-warning warning';
	        case 'error':
	          return 'd-icon-error error';
	        default:
	          return 'd-icon-info info';
	      }
	    }
	  },

	  methods: {
	    handleClose: function handleClose() {
	      this.closed = true;
	      if (this.callback) {
	        this.callback();
	      }
	    },
	    clearTimer: function clearTimer() {
	      clearTimeout(this.timer);
	    },
	    startTimer: function startTimer() {
	      var self = this;
	      if (this.duration > 0) {
	        this.timer = setTimeout(function () {
	          if (!self.closed) {
	            self.handleClose();
	          }
	        }, this.duration * 1000);
	      }
	    }
	  },

	  ready: function ready() {
	    var self = this;
	    if (this.duration > 0) {
	      this.timer = setTimeout(function () {
	        if (!self.closed) {
	          self.handleClose();
	        }
	      }, this.duration * 1000);
	    }
	  }
	};
	// </script>

/***/ },
/* 103 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"notification\" transition=\"fade\" :style=\"{ top: top ? top + 'px' : 'auto' }\" @mouseenter=\"clearTimer()\" @mouseleave=\"startTimer()\">\n  <div class=\"icon d-icon {{iconClass}}\"></div>\n  <div class=\"group\">\n    <span>{{title}}</span>\n    <p>{{message}}</p>\n    <div class=\"closeBtn d-icon d-icon-close\" @click=\"handleClose()\"></div>\n  </div>\n</div>\n";

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _keys = __webpack_require__(105);

	var _keys2 = _interopRequireDefault(_keys);

	var _typeof2 = __webpack_require__(6);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _classCallCheck2 = __webpack_require__(109);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(110);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _create = __webpack_require__(114);

	var _create2 = _interopRequireDefault(_create);

	var _validators = __webpack_require__(117);

	var _validators2 = _interopRequireDefault(_validators);

	var _util = __webpack_require__(5);

	var _messages = __webpack_require__(119);

	var _messages2 = _interopRequireDefault(_messages);

	var _cache = __webpack_require__(120);

	var _cache2 = _interopRequireDefault(_cache);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var doValidate = function doValidate(object, property, descriptor, rule) {
	  var type = rule.type;
	  var validateFn = _validators2.default[type];
	  if (typeof validateFn === 'function') {
	    var messages = rule.messages || {};
	    var message = messages[rule.type] || rule.message || descriptor.message;

	    if (!message) {
	      message = _messages2.default[type];
	    }

	    var clonedRule = (0, _util.merge)({ message: message || '' }, rule);
	    var target = (0, _util.getPath)(object, property);

	    if (!validateFn.call(object, target, clonedRule, property, descriptor)) {
	      object.$hints[property] = clonedRule.message;

	      return false;
	    }
	  }
	  return true;
	};

	var initObject = function initObject(object, schema, addMethod) {
	  if (object.$hints) return;

	  Object.defineProperty(object, '$schema', {
	    configurable: true,
	    enumerable: false,
	    value: schema
	  });

	  Object.defineProperty(object, '$savedState', {
	    configurable: true,
	    enumerable: false,
	    writable: true,
	    value: null
	  });

	  Object.defineProperty(object, '$hints', {
	    configurable: true,
	    enumerable: false,
	    writable: true,
	    value: {}
	  });

	  if (addMethod) {
	    Object.defineProperty(object, 'validate', {
	      configurable: true,
	      enumerable: false,
	      value: function value() {
	        return this.$schema.validate(this);
	      }
	    });

	    Object.defineProperty(object, 'validateProperty', {
	      configurable: true,
	      enumerable: false,
	      value: function value(property) {
	        return this.$schema.validateProperty(this, property);
	      }
	    });

	    Object.defineProperty(object, '$on', {
	      configurable: true,
	      enumerable: false,
	      value: function value(name, fn) {
	        if (!name || typeof fn !== 'function') throw new Error('$on need name & fn.');

	        var listeners = this.$listeners;
	        if (!listeners) {
	          listeners = this.$listeners = {};
	        }

	        var array = listeners[name];
	        if (!array) {
	          array = listeners[name] = [];
	        }
	        array.push(fn);
	      }
	    });

	    Object.defineProperty(object, '$off', {
	      configurable: true,
	      enumerable: false,
	      value: function value(name, fn) {
	        if (!name) throw new Error('$off need name');
	        var listeners = this.$listeners || {};
	        var array = listeners[name];
	        if (!array) return;
	        if (typeof fn === 'function') {
	          for (var i = 0, j = array.length; i < j; i++) {
	            var item = array[i];
	            if (item === fn) {
	              array.splice(i, 1);
	              break;
	            }
	          }
	        } else {
	          array.splice(0, array.length - 1);
	        }
	      }
	    });

	    Object.defineProperty(object, '$emit', {
	      configurable: true,
	      enumerable: false,
	      value: function value(name, arg0, arg1, arg2, arg3) {
	        var listeners = this.$listeners || {};
	        var array = listeners[name];
	        if (!array) return;

	        for (var i = 0, j = array.length; i < j; i++) {
	          var fn = array[i];
	          fn.call(this, arg0, arg1, arg2, arg3);
	        }
	      }
	    });

	    Object.defineProperty(object, 'save', {
	      configurable: true,
	      enumerable: false,
	      value: function value() {
	        this.$schema.save(this);
	      }
	    });

	    Object.defineProperty(object, 'toObject', {
	      configurable: true,
	      enumerable: false,
	      value: function value(options) {
	        return this.$schema.toObject(this, options);
	      }
	    });

	    Object.defineProperty(object, 'reset', {
	      configurable: true,
	      enumerable: false,
	      value: function value() {
	        this.$schema.reset(this);
	      }
	    });

	    Object.defineProperty(object, 'assign', {
	      configurable: true,
	      enumerable: false,
	      value: function value() {
	        var _$schema;

	        for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) {
	          sources[_key] = arguments[_key];
	        }

	        (_$schema = this.$schema).assign.apply(_$schema, [this].concat(sources));
	      }
	    });
	  }
	};

	var reverseMapping = function reverseMapping(mapping) {
	  var result = (0, _create2.default)(null);

	  for (var key in mapping) {
	    if (mapping.hasOwnProperty(key)) {
	      var value = mapping[key];
	      result[value] = key;
	    }
	  }

	  return result;
	};

	var Schema = function () {
	  function Schema(name, options) {
	    (0, _classCallCheck3.default)(this, Schema);

	    if ((typeof name === 'undefined' ? 'undefined' : (0, _typeof3.default)(name)) === 'object') {
	      options = name;
	    } else {
	      _cache2.default[name] = this;
	    }

	    this.nestedSchema = {};

	    var props = this.props = {};
	    for (var option in options) {
	      if (options.hasOwnProperty(option)) {
	        var value = options[option];

	        if (value && value.type === 'object' && (0, _typeof3.default)(value.fields)) {
	          this.nestedSchema[option] = new Schema(value.fields);
	        }

	        props[option] = value;
	      }
	    }

	    this.$reversedMappings = {};
	  }

	  (0, _createClass3.default)(Schema, [{
	    key: 'newModel',
	    value: function newModel() {
	      var result = {};
	      var props = this.props;

	      for (var prop in props) {
	        if (props.hasOwnProperty(prop)) {
	          var value = props[prop];
	          var defaultValue = value.default;
	          if (typeof defaultValue === 'function') {
	            defaultValue = defaultValue();
	          }
	          result[prop] = defaultValue;
	        }
	      }

	      for (var nestedSchema in this.nestedSchema) {
	        if (this.nestedSchema.hasOwnProperty(nestedSchema)) {
	          result[nestedSchema] = this.nestedSchema[nestedSchema].newModel();
	        }
	      }

	      initObject(result, this, true);

	      return result;
	    }
	  }, {
	    key: 'getPropertyDescriptor',
	    value: function getPropertyDescriptor(property) {
	      return this.props[property] || {};
	    }
	  }, {
	    key: 'getPropertyLabel',
	    value: function getPropertyLabel(property) {
	      var target = void 0;
	      if (property.indexOf('.') > -1) {
	        target = (0, _util.getNestedPath)(this.props, property);
	      } else {
	        target = this.props[property];
	      }
	      return (target || {}).label || '';
	    }
	  }, {
	    key: 'getPropertyMapping',
	    value: function getPropertyMapping(property, object) {
	      var descriptor = this.props[property] || {};
	      var mapping = descriptor.mapping;
	      var result = mapping;

	      if (mapping instanceof Array) {
	        result = {};

	        for (var i = 0, j = mapping.length; i < j; i++) {
	          var config = mapping[i];
	          result[config.name || config.label] = config.value;
	        }
	      } else if (typeof mapping === 'function') {
	        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	          args[_key2 - 2] = arguments[_key2];
	        }

	        result = mapping.apply(undefined, [object].concat(args));
	      }

	      return result;
	    }
	  }, {
	    key: 'translateProperty',
	    value: function translateProperty(property, value) {
	      var mapping = this.getPropertyMapping(property);
	      var definedMapping = (this.props[property] || {}).mapping;

	      if (mapping) {
	        var reversedMapping = this.$reversedMappings[property];

	        if (typeof definedMapping !== 'function' && reversedMapping) {
	          return reversedMapping[value];
	        } else {
	          reversedMapping = this.$reversedMappings[property] = reverseMapping(mapping);
	        }

	        return reversedMapping[value];
	      }

	      return null;
	    }
	  }, {
	    key: 'getPropertyText',
	    value: function getPropertyText(object, property) {
	      var value = (0, _util.getPath)(object, property);
	      var descriptor = this.props[property];
	      if (descriptor) {
	        if (descriptor.type === 'date' || descriptor.type === 'datetime') {
	          return (0, _util.formatDate)(value, descriptor.format);
	        }
	      }

	      return value;
	    }
	  }, {
	    key: 'validate',
	    value: function validate(object, options, callback) {
	      if (!object) return console.warn('validate require an object.'); // eslint-disable-line no-console

	      initObject(object, this);

	      object.$hints = {};

	      if (typeof options === 'function') {
	        callback = options;
	        options = null;
	      }

	      options = options || {};

	      var props = void 0;
	      if (options.props) {
	        props = options.props;
	      } else {
	        props = (0, _keys2.default)(this.props);
	      }

	      var skips = options.skips;
	      if (skips) {
	        props = props.filter(function (item) {
	          return skips.indexOf(item) === -1;
	        });
	      }

	      var passed = true;

	      for (var i = 0, j = props.length; i < j; i++) {
	        var property = props[i];
	        if (!this.validateProperty(object, property)) {
	          passed = false;
	        }
	      }

	      if (typeof callback === 'function') {
	        var hasErrors = false;
	        var errors = {};
	        var hints = object.$hints;
	        for (var hint in hints) {
	          if (hints.hasOwnProperty(hint)) {
	            var value = hints[hint];
	            if (value) {
	              hasErrors = true;
	              errors[hint] = value;
	            }
	          }
	        }

	        callback(hasErrors ? errors : null);
	      }

	      return passed;
	    }
	  }, {
	    key: 'validateProperty',
	    value: function validateProperty(object, property) {
	      if (!object) return console.warn('validate require an object.'); // eslint-disable-line no-console

	      initObject(object, this);

	      var props = this.props;
	      var descriptor = void 0;
	      if (property.indexOf('.') > -1) {
	        descriptor = (0, _util.getNestedPath)(props, property);
	      } else {
	        descriptor = props[property];
	      }

	      if (!descriptor) {
	        console.warn('no property ' + property + ' found in object:', object); // eslint-disable-line no-console
	        return true;
	      }

	      var required = descriptor.required;
	      if (required) {
	        if (!doValidate(object, property, descriptor, { type: 'required' })) {
	          return false;
	        }
	      }

	      var pattern = descriptor.pattern;
	      if (pattern) {
	        if (!doValidate(object, property, descriptor, { type: 'pattern', pattern: pattern })) {
	          return false;
	        }
	      }

	      var min = descriptor.min;
	      var max = descriptor.max;
	      if (typeof min !== 'undefined' || typeof max !== 'undefined') {
	        if (!doValidate(object, property, descriptor, { type: 'range', min: min, max: max })) {
	          return false;
	        }
	      }

	      var minLength = descriptor.minLength;
	      var maxLength = descriptor.maxLength;
	      if (typeof minLength !== 'undefined' || typeof maxLength !== 'undefined') {
	        if (!doValidate(object, property, descriptor, { type: 'length', min: minLength, max: maxLength })) {
	          return false;
	        }
	      }

	      var enumArray = descriptor.enum;
	      if (typeof enumArray !== 'undefined') {
	        if (!doValidate(object, property, descriptor, { type: 'enum', enum: enumArray })) {
	          return false;
	        }
	      }

	      var whitespace = descriptor.whitespace;
	      if (typeof whitespace !== 'undefined') {
	        if (!doValidate(object, property, descriptor, { type: 'whitespace', whitespace: whitespace })) {
	          return false;
	        }
	      }

	      var rules = descriptor.rules;
	      if (rules instanceof Array) {
	        for (var i = 0, j = rules.length; i < j; i++) {
	          var rule = rules[i];
	          if (!doValidate(object, property, descriptor, rule)) {
	            return false;
	          }
	        }
	      } else if (rules) {
	        if (!doValidate(object, property, descriptor, rules)) return false;
	      }

	      if (typeof this.nestedSchema[property] !== 'undefined') {
	        var value = object[property];
	        var nestSchema = this.nestedSchema[property];

	        if (value) {
	          if (!nestSchema.validate(value)) return false;
	        }
	      }

	      object.$hints[property] = '';

	      return true;
	    }
	  }, {
	    key: 'save',
	    value: function save(object) {
	      if (!object) {
	        throw new Error('object is required when save an object\'s current state.');
	      }

	      var props = this.props;
	      var savedState = {};

	      for (var prop in props) {
	        if (props.hasOwnProperty(prop)) {
	          savedState[prop] = object[prop];
	        }
	      }

	      object.$savedState = savedState;
	    }
	  }, {
	    key: 'reset',
	    value: function reset(object) {
	      if (!object) {
	        throw new Error('object is required when reset an object\'s saved state.');
	      }
	      var savedState = object.$savedState;
	      var props = this.props;

	      for (var prop in props) {
	        if (props.hasOwnProperty(prop)) {
	          if (!savedState) {
	            var descriptor = props[prop];
	            var defaultValue = descriptor.default;
	            if (typeof defaultValue === 'function') {
	              defaultValue = defaultValue();
	            }
	            object[prop] = defaultValue;
	          } else {
	            object[prop] = savedState[prop];
	          }
	        }
	      }

	      if (object.$emit) {
	        object.$emit('reset');
	      }

	      object.$hints = {};
	    }
	  }, {
	    key: 'format',
	    value: function format(data) {
	      var _this = this;

	      if (!data) return;
	      if (!(data instanceof Array)) {
	        data = [data];
	      }
	      data.forEach(function (item) {
	        var props = _this.props;
	        for (var prop in props) {
	          if (props.hasOwnProperty(prop)) {
	            var descriptor = props[prop];
	            var value = item[prop];
	            if (!item.hasOwnProperty(prop)) {
	              item[prop] = undefined;
	            }
	            var type = descriptor.type;
	            if (type === 'date' || type === 'datetime') {
	              if (typeof value === 'string') {
	                item[prop] = new Date(value);
	              }
	            } else if (type === 'number' || type === 'float' || type === 'integer') {
	              if (typeof value === 'string') {
	                item[prop] = Number(value);
	              }
	            }
	          }
	        }
	      });

	      return data;
	    }
	  }, {
	    key: 'assign',
	    value: function assign(target) {
	      if (!target) {
	        return;
	      }

	      var props = this.props;

	      for (var _len3 = arguments.length, sources = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
	        sources[_key3 - 1] = arguments[_key3];
	      }

	      for (var i = 0, j = sources.length; i < j; i++) {
	        var source = sources[i];
	        for (var prop in props) {
	          if (props.hasOwnProperty(prop)) {
	            target[prop] = source[prop];
	          }
	        }
	      }
	    }
	  }, {
	    key: 'toObject',
	    value: function toObject(model, options) {
	      options = options || {};
	      var props = this.props;
	      var ignoreEmpty = !!options.ignoreEmpty;
	      var result = {};

	      for (var prop in props) {
	        if (props.hasOwnProperty(prop)) {
	          var value = model[prop];
	          if (ignoreEmpty) {
	            if (value !== null && value !== undefined && value !== '') {
	              result[prop] = value;
	            }
	          } else {
	            result[prop] = value;
	          }
	        }
	      }

	      return result;
	    }
	  }, {
	    key: '$resetValidate',
	    value: function $resetValidate(object) {
	      var hints = object.$hints;

	      for (var property in hints) {
	        if (hints.hasOwnProperty(property)) {
	          hints[property] = '';
	        }
	      }
	    }
	  }]);
	  return Schema;
	}();

	exports.default = Schema;

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(106), __esModule: true };

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(107);
	module.exports = __webpack_require__(17).Object.keys;

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(52)
	  , $keys    = __webpack_require__(36);

	__webpack_require__(108)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(15)
	  , core    = __webpack_require__(17)
	  , fails   = __webpack_require__(26);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 109 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(111);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(112), __esModule: true };

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(113);
	var $Object = __webpack_require__(17).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(15);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(25), 'Object', {defineProperty: __webpack_require__(21).f});

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(115), __esModule: true };

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(116);
	var $Object = __webpack_require__(17).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(15)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(34)});

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof2 = __webpack_require__(6);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _format = __webpack_require__(118);

	var _format2 = _interopRequireDefault(_format);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  required: function required(value, options, property, descriptor) {
	    var result = !(value === null || value === undefined || value === '');
	    options = options || {};
	    descriptor = descriptor || {};

	    if (!result) {
	      options.message = (0, _format2.default)(options.message, { label: descriptor.label || property });
	    }

	    return result;
	  },

	  length: function length(value, options, property, descriptor) {
	    options = options || {};
	    descriptor = descriptor || {};
	    var min = options.min;
	    var max = options.max;
	    var string = '';

	    if (value !== null && value !== undefined) {
	      string = '' + value;
	    }

	    var result = true;

	    if (typeof min === 'number') {
	      if (string.length < min) {
	        result = false;
	      }
	    }

	    if (typeof max === 'number') {
	      if (string.length > max) {
	        result = false;
	      }
	    }

	    if (!result) {
	      var params = { label: descriptor.label || property, min: min, max: max };
	      if ((0, _typeof3.default)(options.message) === 'object') {
	        if (typeof max === 'number' && typeof min === 'number') {
	          options.message = (0, _format2.default)(options.message.range, params);
	        } else if (typeof min === 'number') {
	          options.message = (0, _format2.default)(options.message.min, params);
	        } else {
	          options.message = (0, _format2.default)(options.message.max, params);
	        }
	      } else {
	        options.message = (0, _format2.default)(options.message, params);
	      }
	    }

	    return result;
	  },

	  range: function range(value, options, property, descriptor) {
	    options = options || {};
	    descriptor = descriptor || {};
	    var min = options.min;
	    var max = options.max;

	    var result = true;

	    if (value === null || value === undefined) return true;

	    value = parseFloat(value);
	    if (isNaN(value)) {
	      result = false;
	    } else {
	      if (typeof min === 'number') {
	        if (value < min) {
	          result = false;
	        }
	      }

	      if (typeof max === 'number') {
	        if (value > max) {
	          result = false;
	        }
	      }
	    }

	    if (!result) {
	      var params = { label: descriptor.label || property, min: min, max: max };
	      if ((0, _typeof3.default)(options.message) === 'object') {
	        if (typeof max === 'number' && typeof min === 'number') {
	          options.message = (0, _format2.default)(options.message.range, params);
	        } else if (typeof min === 'number') {
	          options.message = (0, _format2.default)(options.message.min, params);
	        } else {
	          options.message = (0, _format2.default)(options.message.max, params);
	        }
	      } else {
	        options.message = (0, _format2.default)(options.message, params);
	      }
	    }

	    return result;
	  },

	  enum: function _enum(value, options, property, descriptor) {
	    options = options || {};
	    descriptor = descriptor || {};
	    if (value === null || value === undefined) return true;
	    var validValues = options.enum;

	    if (!(validValues instanceof Array)) {
	      throw new Error('enum should be a array.');
	    }

	    var result = validValues.indexOf(value) !== -1;

	    if (!result) {
	      options.message = (0, _format2.default)(options.message, { label: descriptor.label || property, list: validValues.join(', ') });
	    }

	    return result;
	  },

	  whitespace: function whitespace(value, options, property, descriptor) {
	    options = options || {};
	    descriptor = descriptor || {};
	    var whitespace = !!options.whitespace;
	    var result = /^\s+$/.test(value);
	    result = whitespace ? result : !result;

	    if (!result) {
	      options.message = (0, _format2.default)(options.message, { label: descriptor.label || property });
	    }

	    return result;
	  },

	  pattern: function pattern(value, options, property, descriptor) {
	    options = options || {};
	    descriptor = descriptor || {};
	    var pattern = options.pattern;
	    if (!pattern) throw new Error('pattern is required!');

	    var result = pattern.test(value);
	    if (!result) {
	      options.message = (0, _format2.default)(options.message, { label: descriptor.label || property });
	    }

	    return result;
	  },

	  custom: function custom(value, options, property, descriptor) {
	    options = options || {};
	    descriptor = descriptor || {};
	    var validate = options.validate;

	    if (typeof validate === 'function') {
	      var result = !!validate.call(this, value);
	      if (!result) {
	        options.message = (0, _format2.default)(options.message, { label: descriptor.label || property });
	      }
	      return result;
	    } else {
	      throw new Error('validate must be a function.');
	    }
	  },

	  mobile: function mobile(value) {
	    return (/^1[3|4|5|7|8]\d{9}$/.test(value)
	    );
	  },

	  phone: function phone(value) {
	    return (/^1[34578]\d{9}$|^[2-9]\d{6,7}(-\d{1,4})?$|^6[1-9]{2,5}$/.test(value)
	    );
	  },

	  email: function email(value) {
	    return (/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/.test(value)
	    );
	  },

	  date: function date(value) {
	    return (/^\d{4}-\d{2}-\d{2}$/.test(value)
	    );
	  }
	};

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (string) {
	  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    args[_key - 1] = arguments[_key];
	  }

	  if (!string) return null;
	  if (arguments.length === 2 && (0, _typeof3.default)(arguments[1]) === 'object') {
	    args = arguments[1];
	  }

	  if (!args || !args.hasOwnProperty) {
	    args = {};
	  }

	  return string.replace(RE_ARGS, function replaceArg(match, i, index) {
	    var result;

	    if (string[index - 1] === '{' && string[index + match.length] === '}') {
	      return i;
	    } else {
	      result = args.hasOwnProperty(i) ? args[i] : null;
	      if (result === null || result === undefined) {
	        return '';
	      }

	      return result;
	    }
	  });
	};

	var _typeof2 = __webpack_require__(6);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var RE_ARGS = /\{([0-9a-zA-Z]+)\}/g;

/***/ },
/* 119 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  'default': '字段{label}校验失败',
	  required: '{label}为必填项',
	  pattern: '{label}的格式不正确',
	  whitespace: '{label}不能为空',
	  'enum': '{label}必须为以下值中的一个: {list}',
	  length: {
	    'min': '{label}至少有{min}个字符',
	    'max': '{label}最多有{max}个字符',
	    'range': '{label}的长度应该大于等于{min}并且小于等于{max}'
	  },
	  range: {
	    'min': '{label}应该大于{min}',
	    'max': '{label}应该小于{max}',
	    'range': '{label}应该介于{min}和{max}之间'
	  }
	};

/***/ },
/* 120 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {};

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var LoadingMask = _vue2.default.extend(__webpack_require__(122));

	var instance;
	var service = {
	  open: function open(text) {
	    if (!instance) {
	      instance = new LoadingMask({
	        el: document.createElement('div')
	      });
	    }
	    instance.text = text;
	    _vue2.default.nextTick(function () {
	      instance.open();
	    });
	  },
	  close: function close() {
	    if (instance) {
	      _vue2.default.nextTick(function () {
	        instance.close();
	      });
	    }
	  }
	};

	_vue2.default.directive('action', {
	  bind: function bind() {
	    var _this = this;

	    var el = this.el;
	    el.addEventListener('click', function () {
	      var result = _this.vm.$get(_this.expression);
	      if (result && result.then) {
	        service.open();
	        result.catch(function () {
	          return void 0;
	        }).then(function () {
	          service.close();
	        });
	      }
	    }, false);
	  }
	});

	exports.default = service;

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(123)
	__vue_script__ = __webpack_require__(125)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules\\vue-desktop\\lib\\service\\loading-mask.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(126)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./loading-mask.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 123 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 124 */,
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vuePopup = __webpack_require__(81);

	var _vuePopup2 = _interopRequireDefault(_vuePopup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(89); // <template>
	//   <div class="loading-mask">
	//     <div class="loading-mask-content" style="margin-top: -48px;">
	//       <div class="loading-mask-progress rotation">
	//         <div></div>
	//       </div>
	//       <div class="loading-mask-text">{{ text || 'Please wait...' }}</div>
	//     </div>
	//   </div>
	// </template>
	//
	// <style>
	//   .loading-mask {
	//     position: fixed;
	//     top: 0;
	//     left: 0;
	//     right: 0;
	//     bottom: 0;
	//     z-index: 9989;
	//     text-align: center
	//   }
	//
	//   .loading-mask-content {
	//     position: absolute;
	//     width: 100%;
	//     top: 50%;
	//     backface-visibility: hidden
	//   }
	//
	//   .loading-mask-text {
	//     position: relative;
	//     margin: 20px 0 0
	//   }
	//
	//   .loading-mask-progress.rotation > div {
	//     width: 60px;
	//     height: 60px;
	//     margin: auto;
	//     border-radius: 100%;
	//     border-width: 6px;
	//     border-style: solid;
	//     border-left-color: transparent !important;
	//     border-right-color: transparent !important;
	//     border-bottom-color: transparent !important;
	//     animation: loading-progress-rotation 1s infinite linear
	//   }
	//
	//   @keyframes loading-progress-rotation {
	//     0% {
	//       transform: rotate(0deg)
	//     }
	//     100% {
	//       transform: rotate(360deg)
	//     }
	//   }
	//
	//   .loading-mask-modal {
	//     background-color: #333;
	//     opacity: 0.1;
	//   }
	// </style>
	//
	// <script type="text/ecmascript-6">
	exports.default = {
	  mixins: [_vuePopup2.default],

	  computed: {
	    popupOptions: function popupOptions() {
	      return {
	        animation: false,
	        modal: true,
	        modalClass: 'loading-mask-modal',
	        closeDelay: 300,
	        updatePositionOnResize: true
	      };
	    }
	  },

	  props: {
	    text: {}
	  }
	};
	// </script>

/***/ },
/* 126 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"loading-mask\">\n  <div class=\"loading-mask-content\" style=\"margin-top: -48px;\">\n    <div class=\"loading-mask-progress rotation\">\n      <div></div>\n    </div>\n    <div class=\"loading-mask-text\">{{ text || 'Please wait...' }}</div>\n  </div>\n</div>\n";

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(128)
	__vue_script__ = __webpack_require__(130)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules\\vue-desktop\\lib\\basic\\alert.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(131)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./alert.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 128 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 129 */,
/* 130 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="alert {{type}}" transition="alert">
	//     <i class="icon d-icon {{iconClass}}"></i>
	//     <div class="alert-content">
	//       <span class="alert-title">{{title}}</span>
	//       <p><slot></slot></p>
	//       <div class="alert-closebtn" :class="{custom: closeText !== '', 'd-icon': closeText === '', 'd-icon-close': closeText === ''}" v-show="closable" @click="close()">{{closeText}}</div>
	//     </div>
	//   </div>
	// </template>
	//
	// <style>
	//   .alert {
	//     display: inline-block;
	//     width: 100%;
	//     padding: 10px 20px;
	//     box-sizing: border-box;
	//     border-style: solid;
	//     border-width: 1px;
	//     border-radius: 10px;
	//     position: relative;
	//     background-color: #fff;
	//     overflow: hidden;
	//     transition: opacity .2s;
	//     opacity: 1;
	//   }
	//
	//   .alert.destroyed {
	//     transition: none;
	//   }
	//
	//   .alert.success {
	//     background-color: #f3faf0;
	//     border-color: #d6e9c6;
	//   }
	//
	//   .alert.error {
	//     background-color: #fff0e6;
	//     border-color: #ebccd1;
	//   }
	//
	//   .alert.info {
	//     background-color: #eaf8fe;
	//     border-color: #bce8f1;
	//   }
	//
	//   .alert.warning {
	//     background-color: #fff9ee;
	//     border-color: #faebcc;
	//   }
	//
	//   .alert-content {
	//     float: left;
	//     display: inline-block;
	//   }
	//
	//   .alert .icon {
	//     display: inline-block;
	//     box-sizing: border-box;
	//     height: 42px;
	//     line-height: 42px;
	//     text-align: center;
	//     width: 42px;
	//     border-radius: 50%;
	//     font-size: 44px;
	//     float: left;
	//     margin-right: 10px;
	//   }
	//
	//   .alert .success {
	//     background-color: #f3faf0;
	//     color: #87d068;
	//   }
	//
	//   .alert .error {
	//     background-color: #fff0e6;
	//     color: #f60;
	//   }
	//
	//   .alert .info {
	//     background-color: #eaf8fe;
	//     color: #2db7f5;
	//   }
	//
	//   .alert .warning {
	//     background-color: #fff9ee;
	//     color: #fac450;
	//   }
	//
	//   .alert-title {
	//     font-size: 14px;
	//     color: #666;
	//   }
	//
	//   .alert-content > p {
	//     color: #999;
	//     font-size: 12px;
	//     margin: 5px 0 0 0;
	//   }
	//
	//   .alert-closebtn {
	//     font-size: 20px;
	//     position: absolute;
	//     transform: translateY(50%);
	//     bottom: 50%;
	//     right: 15px;
	//     cursor: pointer;
	//   }
	//
	//   .alert-closebtn.custom {
	//     color: #0089dc;
	//     font-size: 14px;
	//   }
	//
	//   .alert-leave {
	//     opacity: 0;
	//   }
	// </style>
	//
	// <script type="text/ecmascript-6">
	var TYPE_CLASSES_MAP = {
	  'success': 'd-icon-success success',
	  'warning': 'd-icon-warning warning',
	  'error': 'd-icon-error error'
	};

	exports.default = {
	  props: {
	    title: {
	      type: String,
	      default: function _default() {
	        return this.$t('alert.title');
	      }
	    },
	    type: {
	      type: String,
	      default: 'info'
	    },
	    closable: {
	      type: Boolean,
	      default: false
	    },
	    closeText: {
	      type: String,
	      default: ''
	    }
	  },

	  methods: {
	    close: function close() {
	      this.$emit('close');
	      this.$destroy(true);
	    }
	  },

	  beforeDestroy: function beforeDestroy() {
	    this.$el.className += ' destroyed';
	  },


	  computed: {
	    iconClass: function iconClass() {
	      return TYPE_CLASSES_MAP[this.type] || 'd-icon-info info';
	    }
	  }
	};
	// </script>

/***/ },
/* 131 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"alert {{type}}\" transition=\"alert\">\n  <i class=\"icon d-icon {{iconClass}}\"></i>\n  <div class=\"alert-content\">\n    <span class=\"alert-title\">{{title}}</span>\n    <p><slot></slot></p>\n    <div class=\"alert-closebtn\" :class=\"{custom: closeText !== '', 'd-icon': closeText === '', 'd-icon-close': closeText === ''}\" v-show=\"closable\" @click=\"close()\">{{closeText}}</div>\n  </div>\n</div>\n";

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(133)
	__vue_script__ = __webpack_require__(135)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules\\vue-desktop\\lib\\basic\\panel.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(139)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./panel.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 133 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 134 */,
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="d-panel" :class="{ noheader: !title, expanded: expanded }">
	//     <div class="d-panel-header" v-if="title">{{title}}<slot name="header"></slot></div>
	//     <div class="d-panel-content" transition="collapse" v-show="expanded">
	//       <slot></slot>
	//     </div>
	//   </div>
	// </template>
	//
	// <style>
	//   .d-panel {
	//     background-color: #ffffff;
	//     box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
	//   }
	//
	//   .d-panel-header {
	//     padding: 14px 15px 7px;
	//     font-size: 14px;
	//   }
	//
	//   .d-panel-content {
	//     box-sizing: border-box;
	//     padding: 15px 20px 20px 20px;
	//     display: none;
	//   }
	//
	//   .d-panel.noheader .d-panel-content {
	//     border-radius: 5px;
	//   }
	//
	//   .d-panel.expanded .d-panel-content {
	//     display: block;
	//   }
	// </style>
	//
	// <script type="text/ecmascript-6">
	exports.default = {
	  props: {
	    title: {},
	    expanded: {
	      type: Boolean,
	      default: true
	    }
	  },

	  transitions: {
	    collapse: __webpack_require__(136).default
	  }
	};
	// </script>

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	__webpack_require__(137);

	exports.default = {
	  beforeEnter: function beforeEnter(el) {
	    el.dataset.oldPaddingTop = el.style.paddingTop;
	    el.dataset.oldPaddingBottom = el.style.paddingBottom;
	    el.style.height = '0';
	    el.style.paddingTop = 0;
	    el.style.paddingBottom = 0;
	  },
	  enter: function enter(el) {
	    el.dataset.oldOverflow = el.style.overflow;

	    el.style.display = 'block';
	    if (el.scrollHeight !== 0) {
	      el.style.height = el.scrollHeight + 'px';
	      el.style.paddingTop = el.dataset.oldPaddingTop;
	      el.style.paddingBottom = el.dataset.oldPaddingBottom;
	    } else {
	      el.style.height = '';
	      el.style.paddingTop = el.dataset.oldPaddingTop;
	      el.style.paddingBottom = el.dataset.oldPaddingBottom;
	    }

	    el.style.overflow = 'hidden';
	  },
	  afterEnter: function afterEnter(el) {
	    el.style.display = '';
	    el.style.height = '';
	    el.style.overflow = el.dataset.oldOverflow;
	  },
	  beforeLeave: function beforeLeave(el) {
	    el.dataset.oldPaddingTop = el.style.paddingTop;
	    el.dataset.oldPaddingBottom = el.style.paddingBottom;
	    el.dataset.oldOverflow = el.style.overflow;

	    el.style.display = 'block';
	    if (el.scrollHeight !== 0) {
	      el.style.height = el.scrollHeight + 'px';
	    }
	    el.style.overflow = 'hidden';
	  },
	  leave: function leave(el) {
	    if (el.scrollHeight !== 0) {
	      setTimeout(function () {
	        el.style.height = 0;
	        el.style.paddingTop = 0;
	        el.style.paddingBottom = 0;
	      });
	    }
	  },
	  afterLeave: function afterLeave(el) {
	    el.style.display = el.style.height = '';
	    el.style.overflow = el.dataset.oldOverflow;
	    el.style.paddingTop = el.dataset.oldPaddingTop;
	    el.style.paddingBottom = el.dataset.oldPaddingBottom;
	  }
	};

/***/ },
/* 137 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 138 */,
/* 139 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"d-panel\" :class=\"{ noheader: !title, expanded: expanded }\">\n  <div class=\"d-panel-header\" v-if=\"title\">{{title}}<slot name=\"header\"></slot></div>\n  <div class=\"d-panel-content\" transition=\"collapse\" v-show=\"expanded\">\n    <slot></slot>\n  </div>\n</div>\n";

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(141)
	__vue_script__ = __webpack_require__(143)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules\\vue-desktop\\lib\\basic\\dialog.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(144)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./dialog.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 141 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 142 */,
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vuePopup = __webpack_require__(81);

	var _vuePopup2 = _interopRequireDefault(_vuePopup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(89); // <template>
	//   <div class="d-dialog" :style="{ width: width + 'px' }" v-show="visible" transition="pop-bounce">
	//     <div class="d-dialog-header">
	//       <span class="d-dialog-title">{{title}}</span>
	//       <div class="d-dialog-header-buttons">
	//         <i class="d-dialog-close d-icon d-icon-close" @click='close()'></i>
	//       </div>
	//     </div>
	//     <div class="d-dialog-body"><slot></slot></div>
	//     <slot name="dialog-footer" class="d-dialog-footer"></slot>
	//   </div>
	// </template>
	//
	// <script type="text/ecmascript-6">
	exports.default = {
	  mixins: [_vuePopup2.default],

	  props: {
	    title: {
	      type: String,
	      default: ''
	    },

	    width: {
	      default: 600
	    },

	    height: {}
	  },

	  computed: {
	    popupOptions: function popupOptions() {
	      return {
	        hideOnPressEscape: true,
	        modal: true,
	        target: 'center',
	        closeOnClickModal: true,
	        closeOnPressEscape: true,
	        updatePositionOnResize: true
	      };
	    }
	  },

	  methods: {
	    getDOM: function getDOM() {
	      return this.$el;
	    },
	    onOpen: function onOpen() {
	      this.$broadcast('onresize');
	    }
	  }
	};
	// </script>
	// <style>
	//   .d-dialog {
	//     position: fixed;
	//     background: #fff;
	//     border-radius: 4px;
	//     box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
	//   }
	//
	//   .d-dialog-header {
	//     border-bottom: 1px solid #e5e5e5;
	//     padding: 10px 8px;
	//   }
	//
	//   .d-dialog-close {
	//     cursor: pointer;
	//   }
	//
	//   .d-dialog-close:hover {
	//     color: #18a689;
	//   }
	//
	//   .d-dialog-title {
	//     font-weight: bold;
	//   }
	//
	//   .d-dialog-body {
	//     padding: 10px;
	//     overflow: auto;
	//   }
	//
	//   .d-dialog-header-buttons {
	//     float: right;
	//   }
	//
	//   div[slot="dialog-footer"] {
	//     border-top: 1px solid #e5e5e5;
	//     padding: 10px;
	//     text-align: right;
	//   }
	//
	//   div[slot="dialog-footer"] .btn {
	//     min-width: 40px;
	//   }
	// </style>

/***/ },
/* 144 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"d-dialog\" :style=\"{ width: width + 'px' }\" v-show=\"visible\" transition=\"pop-bounce\">\n  <div class=\"d-dialog-header\">\n    <span class=\"d-dialog-title\">{{title}}</span>\n    <div class=\"d-dialog-header-buttons\">\n      <i class=\"d-dialog-close d-icon d-icon-close\" @click='close()'></i>\n    </div>\n  </div>\n  <div class=\"d-dialog-body\"><slot></slot></div>\n  <slot name=\"dialog-footer\" class=\"d-dialog-footer\"></slot>\n</div>\n";

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(146)
	__vue_script__ = __webpack_require__(148)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules\\vue-desktop\\lib\\basic\\button.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(149)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./button.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 146 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 147 */,
/* 148 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <button class="btn {{btnClasses}}">
	//     <slot></slot>
	//   </button>
	// </template>
	//
	// <style>
	//   .btn {
	//     outline: none;
	//     display: inline-block;
	//     text-align: center;
	//     padding: 4px 12px;
	//     border-radius: 3px;
	//     border-style: solid;
	//     border-width: 1px;
	//     font-size: 12px;
	//     font-family: 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', SimSun, sans-serif;
	//     text-decoration: none;
	//     line-height: 1.5;
	//     vertical-align: middle;
	//     cursor: pointer;
	//     transition: background-color, border-color .3s;
	//     background-color: #fff;
	//     border-color: #e7eaec;
	//     color: #676a6c;
	//   }
	//
	//   .btn:hover {
	//     border-color: #d2d2d2;
	//   }
	//
	//   .btn:active {
	//     box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15) inset;
	//   }
	//
	//   .btn-primary {
	//     color: #fff;
	//     background-color: #1ab394;
	//     border-color: #1ab394;
	//   }
	//
	//   .btn.btn-primary:hover {
	//     background-color: #18a689;
	//     border-color: #18a689;
	//   }
	//
	//   .btn.btn-primary:active {
	//     box-shadow: 0 3px 5px rgba(0, 0, 0, .125) inset;
	//   }
	//
	//   .btn-success {
	//     color: #fff;
	//     background-color: #1c84c6;
	//     border-color: #1c84c6;
	//   }
	//
	//   .btn.btn-success:hover {
	//     background-color: #1a7bb9;
	//     border-color: #1a7bb9;
	//   }
	//
	//   .btn.btn-success:active {
	//     box-shadow: 0 3px 5px rgba(0, 0, 0, .125) inset;
	//   }
	//
	//   .btn-info {
	//     color: #fff;
	//     background-color: #23c6c8;
	//     border-color: #23c6c8;
	//   }
	//
	//   .btn.btn-info:hover {
	//     background-color: #21b9bb;
	//     border-color: #21b9bb;
	//   }
	//
	//   .btn.btn-info:active {
	//     box-shadow: 0 3px 5px rgba(0, 0, 0, .125) inset;
	//   }
	//
	//   .btn-warning {
	//     color: #fff;
	//     background-color: #f8ac59;
	//     border-color: #f8ac59;
	//   }
	//
	//   .btn.btn-warning:hover {
	//     background-color: #f7a54a;
	//     border-color: #f7a54a;
	//   }
	//
	//   .btn.btn-warning:active {
	//     box-shadow: 0 3px 5px rgba(0, 0, 0, .125) inset;
	//   }
	//
	//   .btn-danger {
	//     color: #fff;
	//     background-color: #ed5565;
	//     border-color: #ed5565;
	//   }
	//
	//   .btn.btn-danger:hover {
	//     background-color: #ec4758;
	//     border-color: #ec4758;
	//   }
	//
	//   .btn.btn-danger:active {
	//     box-shadow: 0 3px 5px rgba(0, 0, 0, .125) inset;
	//   }
	//
	//   .btn-lg {
	//     font-size: 14px;
	//     padding: 4px 15px;
	//   }
	//
	//   .btn-sm {
	//     padding: 2px 6px;
	//   }
	//
	//   .btn.disabled,
	//   .btn.disabled:hover {
	//     cursor: not-allowed;
	//     color: #ccc;
	//     background-color: #eee;
	//     border-color: #ccc;
	//   }
	//
	//   .btn .fa {
	//     color: #fff;
	//     margin-right: 2px;
	//   }
	// </style>
	//
	// <script type="text/ecmascript-6">
	exports.default = {
	  props: {
	    type: {
	      type: String,
	      default: ''
	    },
	    size: {
	      type: String,
	      default: ''
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    icon: {
	      type: String,
	      default: ''
	    },
	    value: {},
	    selected: {
	      type: Boolean,
	      default: false
	    }
	  },

	  computed: {
	    btnClasses: function btnClasses() {
	      var classes = [this.selected ? this.selectedClass : 'btn-default'];

	      if (this.type) {
	        classes.push('btn-' + this.type);
	      }

	      if (this.size === 'large') {
	        classes.push('btn-lg');
	      } else if (this.size === 'small') {
	        classes.push('btn-sm');
	      }

	      if (this.disabled) {
	        classes.push('disabled');
	      }

	      return classes.join(' ');
	    }
	  },

	  data: function data() {
	    return {
	      selectedClass: 'btn-primary'
	    };
	  },
	  ready: function ready() {
	    var _this = this;

	    if (this.icon !== '' && this.icon.indexOf('fa-') > -1) {
	      var span = document.createElement('span');
	      span.className = this.icon + ' fa';
	      if (this.size !== 'small') {
	        span.className += ' fa-lg';
	      }
	      this.$el.insertBefore(span, this.$el.childNodes[0]);
	    }
	    if (this.$parent.$isButtonGroup) {
	      if (!this.value) {
	        this.value = this.$el.textContent.trim();
	      }
	      this.$el.addEventListener('click', function () {
	        _this.$dispatch('onButtonClick', _this);
	      });
	    }
	  }
	};
	// </script>

/***/ },
/* 149 */
/***/ function(module, exports) {

	module.exports = "\n<button class=\"btn {{btnClasses}}\">\n  <slot></slot>\n</button>\n";

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(151)
	__vue_script__ = __webpack_require__(153)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules\\vue-desktop\\lib\\basic\\button-group.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(154)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./button-group.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 151 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 152 */,
/* 153 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="btn-group" :class="{'btn-group-lg': size === 'large', 'btn-group-sm': size === 'small'}">
	//     <slot></slot>
	//   </div>
	// </template>
	//
	// <style>
	//   .btn-group {
	//     display: inline-block;
	//     vertical-align: middle;
	//   }
	//
	//   .btn-group .btn {
	//     padding: 4px 8px;
	//     float: left;
	//     border-radius: 0;
	//     margin-left: -1px;
	//   }
	//
	//   .btn-group-lg .btn {
	//     font-size: 14px;
	//     padding: 4px 10px;
	//   }
	//
	//   .btn-group-sm .btn {
	//     padding: 2px 6px;
	//   }
	//
	//   .btn-group .btn:first-child {
	//     margin: 0;
	//     border-top-left-radius: 3px;
	//     border-bottom-left-radius: 3px;
	//   }
	//
	//   .btn-group .btn:last-child {
	//     border-top-right-radius: 3px;
	//     border-bottom-right-radius: 3px;
	//   }
	//
	//   .btn-group .btn-default:hover + .btn-default {
	//     border-left-color: #d2d2d2;
	//   }
	// </style>
	//
	// <script type="text/ecmascript-6">
	exports.default = {
	  props: {
	    size: {
	      type: String,
	      default: ''
	    },
	    selectionMode: {
	      type: String,
	      default: 'none'
	    }
	  },

	  data: function data() {
	    return {
	      selectedArr: []
	    };
	  },
	  created: function created() {
	    this.$isButtonGroup = true;
	  },


	  events: {
	    onButtonClick: function onButtonClick(button) {
	      if (this.selectionMode !== 'none') {
	        if (this.selectionMode === 'single') {
	          this.selectedArr = [];
	          var buttons = this.$el.querySelectorAll('button.btn');
	          for (var i = 0, len = buttons.length; i < len; i++) {
	            buttons[i].__vue__.selected = false;
	          }
	          if (button.selected) {
	            button.selected = false;
	          }
	        }
	        if (!button.selected) {
	          this.selectedArr.push(button.value);
	          button.selected = true;
	        } else {
	          this.selectedArr.splice(this.selectedArr.indexOf(button.value), 1);
	          button.selected = false;
	        }
	        this.$emit('select', this.selectedArr);
	      }
	    }
	  },

	  ready: function ready() {
	    if (this.selectionMode !== 'none') {
	      var buttons = this.$el.querySelectorAll('button.btn');
	      for (var i = 0, len = buttons.length; i < len; i++) {
	        var btn = buttons[i];
	        if (btn.__vue__.selected) {
	          this.selectedArr.push(btn.__vue__.value);
	        }
	      }
	      if (this.selectedArr.length === 0 && this.selectionMode === 'single') {
	        buttons[0].__vue__.selected = true;
	        this.selectedArr.push(buttons[0].__vue__.value);
	      }
	    }
	  }
	};
	// </script>

/***/ },
/* 154 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"btn-group\" :class=\"{'btn-group-lg': size === 'large', 'btn-group-sm': size === 'small'}\">\n  <slot></slot>\n</div>\n";

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(156)
	__vue_script__ = __webpack_require__(158)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules\\vue-desktop\\lib\\basic\\progress-bar.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(159)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./progress-bar.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 156 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 157 */,
/* 158 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="progress">
	//     <div class="bar {{barClasses}}" :style="{height: barHeight + 'px'}" v-el:bar>
	//       <div class="active-bar" :style="{height: barHeight + 'px', width: percent + '%'}"></div>
	//     </div>
	//     <span v-if="showPercent" :style="{height: barHeight + 'px', lineHeight: barHeight + 'px'}">{{percent}}%</span>
	//   </div>
	// </template>
	//
	// <style>
	//   .progress {
	//     display: table;
	//     width: 100%;
	//     padding: 10px;
	//     box-sizing: border-box;
	//     position: relative;
	//     overflow: hidden;
	//   }
	//
	//   .progress .bar {
	//     width: 100%;
	//     display: table-cell;
	//     vertical-align: middle;
	//     border-radius: 3px;
	//     background-color: #eee;
	//   }
	//
	//   .progress .bar .active-bar {
	//     border-radius: 3px;
	//   }
	//
	//   .progress .bar.success .active-bar {
	//     background-color: #87d068;
	//   }
	//
	//   .progress .bar.error .active-bar {
	//     background-color: #f60;
	//   }
	//
	//   .progress .bar.info .active-bar {
	//     background-color: #0089dc;
	//   }
	//
	//   .progress .bar.warning .active-bar {
	//     background-color: #ffdb35;
	//   }
	//
	//   .progress span {
	//     display: table-cell;
	//     width: 1%;
	//     min-width: 50px;
	//     text-align: center;
	//     vertical-align: middle;
	//     font-size: 14px;
	//   }
	// </style>
	//
	// <script type="text/ecmascript-6">
	exports.default = {
	  props: {
	    percent: {
	      type: Number,
	      default: 0
	    },
	    type: {
	      type: String,
	      default: 'info'
	    },
	    showPercent: {
	      type: Boolean,
	      default: true
	    },
	    barHeight: {
	      type: Number,
	      default: 15
	    }
	  },

	  computed: {
	    barClasses: function barClasses() {
	      return (this.showPercent ? 'show-info ' : '') + this.type;
	    }
	  },

	  compiled: function compiled() {
	    this.percent = Math.min(this.percent, 100);
	  }
	};
	// </script>

/***/ },
/* 159 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"progress\">\n  <div class=\"bar {{barClasses}}\" :style=\"{height: barHeight + 'px'}\" v-el:bar>\n    <div class=\"active-bar\" :style=\"{height: barHeight + 'px', width: percent + '%'}\"></div>\n  </div>\n  <span v-if=\"showPercent\" :style=\"{height: barHeight + 'px', lineHeight: barHeight + 'px'}\">{{percent}}%</span>\n</div>\n";

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(161)
	__vue_script__ = __webpack_require__(163)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules\\vue-desktop\\lib\\basic\\slider.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(164)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./slider.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 161 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 162 */,
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div>
	//     <div class="slider" :class="{'show-input': showInput}" @click="onSliderClick($event)" v-el:slider>
	//       <div class="slider-bar" :style="{width: currentPosition}"></div>
	//       <div class="slider-button" :style="{left: currentPosition}" v-el:button>
	//         <div class="pop-up" :class="{active: showTip}" v-el:pop-up>{{currentValue}}</div>
	//       </div>
	//     </div>
	//     <input type="text" v-if="showInput" :value="currentValue" @keyup="onInputChange()" v-el:input>
	//   </div>
	// </template>
	//
	// <style>
	//   .slider {
	//     width: 100%;
	//     height: 5px;
	//     margin: 20px 0;
	//     background-color: #ccc;
	//     border-radius: 3px;
	//     position: relative;
	//     cursor: pointer;
	//     vertical-align: middle;
	//   }
	//
	//   .slider.show-input {
	//     width: 88%;
	//     display: inline-block;
	//   }
	//
	//   .slider + input {
	//     border: solid 1px #ccc;
	//     box-sizing: border-box;
	//     width: 8%;
	//     vertical-align: middle;
	//     margin-left: 3%;
	//     text-align: center;
	//   }
	//
	//   .slider:hover .slider-button .pop-up {
	//     display: block;
	//   }
	//
	//   .slider .slider-bar {
	//     height: 5px;
	//     background-color: #4997dc;
	//     border-top-left-radius: 3px;
	//     border-bottom-left-radius: 3px;
	//     position: absolute;
	//   }
	//
	//   .slider .slider-button {
	//     height: 9px;
	//     width: 9px;
	//     border: solid 2px #4997dc;
	//     position: absolute;
	//     background-color: #fff;
	//     border-radius: 50%;
	//     top: -4px;
	//     transform: translateX(-50%);
	//     cursor: pointer;
	//   }
	//
	//   .slider .slider-button .pop-up {
	//     font-size: 12px;
	//     line-height: 1.7;
	//     text-align: center;
	//     padding: 0 5px;
	//     border-radius: 4px;
	//     background-color: #666;
	//     color: #fff;
	//     position: absolute;
	//     bottom: 15px;
	//     left: -7px;
	//     cursor: default;
	//     display: none;
	//   }
	//
	//   .slider .slider-button .pop-up.active {
	//      display: block;
	//   }
	// </style>
	//
	// <script type="text/ecmascript-6">
	var getStyle = __webpack_require__(83).getStyle;

	exports.default = {
	  props: {
	    min: {
	      type: Number,
	      default: 0
	    },
	    max: {
	      type: Number,
	      default: 100
	    },
	    step: {
	      type: Number,
	      default: 1
	    },
	    defaultValue: {
	      type: Number,
	      default: 0
	    },
	    showInput: {
	      type: Boolean,
	      default: false
	    }
	  },

	  data: function data() {
	    return {
	      showTip: false,
	      dragging: false,
	      newPos: null,
	      oldValue: this.defaultValue,
	      currentValue: this.defaultValue,
	      currentPosition: (this.defaultValue - this.min) / (this.max - this.min) * 100 + '%'
	    };
	  },


	  methods: {
	    setPosition: function setPosition(newPos) {
	      if (newPos >= 0 && newPos <= 100) {
	        var lengthPerStep = 100 / ((this.max - this.min) / this.step);
	        var steps = Math.round(newPos / lengthPerStep);
	        this.currentValue = steps * lengthPerStep * (this.max - this.min) * 0.01 + this.min;
	        this.currentPosition = (this.currentValue - this.min) / (this.max - this.min) * 100 + '%';
	        if (!this.dragging) {
	          if (this.currentValue !== this.oldValue) {
	            this.$emit('change', this.currentValue);
	            this.oldValue = this.currentValue;
	          }
	        }
	      }
	    },
	    onSliderClick: function onSliderClick(event) {
	      var currentX = event.clientX;
	      var sliderOffsetLeft;
	      getStyle(this.$el.parentNode, 'position') === 'static' ? sliderOffsetLeft = this.$els.slider.offsetLeft : sliderOffsetLeft = this.$el.parentNode.offsetLeft + this.$els.slider.offsetLeft;
	      var newPos = (currentX - sliderOffsetLeft) / this.$sliderWidth * 100;
	      this.setPosition(newPos);
	    },
	    onInputChange: function onInputChange() {
	      if (this.$els.input.value === '') {
	        return;
	      }
	      if (!isNaN(this.$els.input.value)) {
	        this.setPosition((this.$els.input.value - this.min) * 100 / (this.max - this.min));
	      }
	    }
	  },

	  computed: {
	    $sliderWidth: function $sliderWidth() {
	      return parseInt(getStyle(this.$els.slider, 'width'), 10);
	    }
	  },

	  compiled: function compiled() {
	    var startX = 0;
	    var currentX = 0;
	    var startPos = 0;
	    var self = this;

	    var onDragStart = function onDragStart(event) {
	      self.dragging = true;
	      self.showTip = true;
	      startX = event.clientX;
	      startPos = parseInt(self.currentPosition, 10);
	    };

	    var onDragging = function onDragging(event) {
	      if (self.dragging) {
	        currentX = event.clientX;
	        var diff = (currentX - startX) / self.$sliderWidth * 100;
	        self.newPos = startPos + diff;
	        self.setPosition(self.newPos);
	      }
	    };

	    var onDragEnd = function onDragEnd() {
	      if (self.dragging) {
	        self.dragging = false;
	        self.showTip = false;
	        self.setPosition(self.newPos);
	        window.removeEventListener('mousemove', onDragging);
	        window.removeEventListener('mouseup', onDragEnd);
	      }
	    };

	    this.$els.button.addEventListener('mousedown', function (event) {
	      onDragStart(event);
	      window.addEventListener('mousemove', onDragging);
	      window.addEventListener('mouseup', onDragEnd);
	    });
	  }
	};
	// </script>

/***/ },
/* 164 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n  <div class=\"slider\" :class=\"{'show-input': showInput}\" @click=\"onSliderClick($event)\" v-el:slider>\n    <div class=\"slider-bar\" :style=\"{width: currentPosition}\"></div>\n    <div class=\"slider-button\" :style=\"{left: currentPosition}\" v-el:button>\n      <div class=\"pop-up\" :class=\"{active: showTip}\" v-el:pop-up>{{currentValue}}</div>\n    </div>\n  </div>\n  <input type=\"text\" v-if=\"showInput\" :value=\"currentValue\" @keyup=\"onInputChange()\" v-el:input>\n</div>\n";

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(166)
	__vue_script__ = __webpack_require__(168)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules\\vue-desktop\\lib\\basic\\sticky.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(169)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./sticky.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 166 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 167 */,
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="btn btn-primary sticky" :class="{'sticky-fixed': fixed}" :style="{top: top + 'px'}"v-el:sticky>
	//     <slot></slot>
	//   </div>
	//   <div class="sticky-phantom" v-show="fixed" v-el:phantom></div>
	// </template>
	//
	// <style>
	//   .sticky {
	//     display: block;
	//     text-align: center;
	//     box-sizing: border-box;
	//   }
	//
	//   .sticky-phantom {
	//     box-sizing: border-box;
	//   }
	//
	//   .sticky.sticky-fixed {
	//     position: fixed;
	//   }
	// </style>
	//
	// <script type="text/ecmascript-6">
	var getStyle = __webpack_require__(83).getStyle;

	exports.default = {
	  props: {
	    top: {
	      type: Number,
	      default: 0
	    }
	  },

	  data: function data() {
	    return {
	      fixed: false
	    };
	  },
	  ready: function ready() {
	    var phantom = this.$els.phantom;
	    var sticky = this.$els.sticky;
	    phantom.style.width = getStyle(sticky, 'width');
	    phantom.style.height = getStyle(sticky, 'height');
	    phantom.style.padding = getStyle(sticky, 'padding');
	    phantom.style.margin = getStyle(sticky, 'margin');

	    var el = sticky.parentNode;
	    while (el && (getStyle(el, 'overflow') === 'visible' || getStyle(el, 'overflow') === 'hidden')) {
	      el = el.parentNode;
	    }
	    if (!el) {
	      return;
	    }
	    var self = this;
	    var originalWidth = phantom.style.width;
	    var fixedPointTop = Math.max(window.scrollY || 0, document.documentElement.scrollTop || 0) + sticky.getBoundingClientRect().top - this.top;
	    el.addEventListener('scroll', function () {
	      var scrollTop = Math.max(this.scrollY || 0, this.scrollTop || 0);
	      if (!self.fixed && sticky.getBoundingClientRect().top <= self.top) {
	        sticky.style.width = originalWidth;
	        self.fixed = true;
	      } else if (self.fixed && scrollTop < fixedPointTop) {
	        self.fixed = false;
	      }
	    });
	  }
	};
	// </script>

/***/ },
/* 169 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"btn btn-primary sticky\" :class=\"{'sticky-fixed': fixed}\" :style=\"{top: top + 'px'}\"v-el:sticky>\n  <slot></slot>\n</div>\n<div class=\"sticky-phantom\" v-show=\"fixed\" v-el:phantom></div>\n";

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(171)
	__vue_script__ = __webpack_require__(173)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules\\vue-desktop\\lib\\basic\\dropdown.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(175)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./dropdown.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 171 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 172 */,
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vuePopup = __webpack_require__(81);

	var _vuePopup2 = _interopRequireDefault(_vuePopup);

	var _dropdown = __webpack_require__(174);

	var _dropdown2 = _interopRequireDefault(_dropdown);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(89); // <template>
	//   <div class="dropdown btn btn-default" :class="{active: showItem}">
	//     {{title}}
	//     <span class="dropdown-icon d-icon d-icon-arrow-down" v-el:span></span>
	//     <dropdown-list :visible.sync="showItem" v-ref:list><slot></slot></dropdown-list>
	//   </div>
	// </template>
	//
	// <style>
	//   .dropdown {
	//     position: relative;
	//     box-sizing: border-box;
	//   }
	//
	//   .dropdown .dropdown-icon {
	//     margin-left: 10px;
	//     color: #676a6c;
	//   }
	//
	//   .dropdown .dropdown-icon:before {
	//     color: #676a6c;
	//     transition: .3s;
	//   }
	//
	//   .dropdown.active {
	//     background-color: #1c84c6;
	//     border-color: #1c84c6;
	//     color: #fff;
	//   }
	//
	//   .dropdown.active .dropdown-icon:before {
	//     color: #fff;
	//   }
	//
	//   .dropdown-list {
	//     margin: 0;
	//     padding: 0;
	//     position: absolute;
	//     list-style: none;
	//     display: block;
	//     width: max-content;
	//     border: solid 1px #ddd;
	//     border-radius: 3px;
	//     box-shadow: 0 0 2px #ddd;
	//     background-color: #fff;
	//   }
	// </style>
	//
	// <script type="text/ecmascript-6">
	exports.default = {
	  props: {
	    title: {
	      type: String,
	      default: ''
	    },
	    trigger: {
	      type: String,
	      default: 'click'
	    },
	    position: {
	      type: String,
	      default: 'bottom'
	    }
	  },

	  data: function data() {
	    return {
	      showItem: false
	    };
	  },


	  components: {
	    dropdownList: {
	      mixins: [_vuePopup2.default],
	      computed: {
	        popupOptions: function popupOptions() {
	          return {
	            placement: this.$parent.position,
	            alignment: 'start',
	            closeDelay: this.trigger !== 'click' ? 200 : null
	          };
	        }
	      },
	      watch: {
	        visible: function visible(newVal) {
	          if (newVal === true) {
	            _dropdown2.default.open(this);
	          } else {
	            _dropdown2.default.close(this);
	          }
	        }
	      },

	      methods: {
	        onDocumentClick: function onDocumentClick(event) {
	          if (event.target !== this.$parent.$el && event.target !== this.$parent.$els.span) {
	            this.visible = false;
	          }
	        }
	      },
	      inherit: true,
	      template: '<ul class="dropdown-list" v-show="visible" transition="pop-fade"><slot></slot></ul>'
	    }
	  },

	  methods: {
	    onMouseEnter: function onMouseEnter() {
	      this.$refs.list.open({ target: this.$el });
	    },
	    onMouseLeave: function onMouseLeave() {
	      this.$refs.list.close({ closeDelay: 1000 });
	    },
	    onClick: function onClick(event) {
	      if (event.target.className.indexOf('disabled') === -1 && event.target.tagName !== 'HR') {
	        if (this.$refs.list.visible) {
	          this.$refs.list.close();
	        } else {
	          this.$refs.list.open({ target: this.$el });
	        }
	      }
	    }
	  },

	  detached: function detached() {
	    _dropdown2.default.close(this);
	  },
	  destroyed: function destroyed() {
	    _dropdown2.default.close(this);
	  },
	  ready: function ready() {
	    if (this.trigger === 'click') {
	      this.$el.addEventListener('click', this.onClick);
	    } else {
	      this.$el.addEventListener('mouseenter', this.onMouseEnter);
	      this.$el.addEventListener('mouseleave', this.onMouseLeave);
	    }
	  }
	};
	// </script>

/***/ },
/* 174 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var dropdowns = [];

	document.addEventListener('click', function (event) {
	  dropdowns.forEach(function (dropdown) {
	    var target = event.target;
	    if (!dropdown || !dropdown.$el) return;
	    if (target === dropdown.$el || dropdown.$el.contains(target)) {
	      return;
	    }
	    dropdown.onDocumentClick && dropdown.onDocumentClick(event);
	  });
	});

	exports.default = {
	  open: function open(instance) {
	    if (instance) {
	      dropdowns.push(instance);
	    }
	  },
	  close: function close(instance) {
	    var index = dropdowns.indexOf(instance);
	    if (index !== -1) {
	      dropdowns.splice(instance, 1);
	    }
	  }
	};

/***/ },
/* 175 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"dropdown btn btn-default\" :class=\"{active: showItem}\">\n  {{title}}\n  <span class=\"dropdown-icon d-icon d-icon-arrow-down\" v-el:span></span>\n  <dropdown-list :visible.sync=\"showItem\" v-ref:list><slot></slot></dropdown-list>\n</div>\n";

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(177)
	__vue_script__ = __webpack_require__(179)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules\\vue-desktop\\lib\\basic\\dropdown-item.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(180)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./dropdown-item.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 177 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 178 */,
/* 179 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <li class="dropdown-item" :class="{'dropdown-item-disabled': disabled}" @click="select()">
	//     <slot></slot>
	//   </li>
	// </template>
	//
	// <style>
	//   .dropdown-item {
	//     cursor: pointer;
	//     display: block;
	//     height: 30px;
	//     line-height: 30px;
	//     padding: 0 20px;
	//     font-size: 13px;
	//     transition: .2s;
	//     color: #333;
	//   }
	//
	//   .dropdown-item:first-child {
	//     border-top-left-radius: 2px;
	//     border-top-right-radius: 2px;
	//   }
	//
	//   .dropdown-item:last-child {
	//     border-bottom-left-radius: 2px;
	//     border-bottom-right-radius: 2px;
	//   }
	//
	//   .dropdown-item:hover {
	//     background-color: #1c84c6;
	//     color: #fff;
	//   }
	//
	//   .dropdown-item.dropdown-item-disabled {
	//     cursor: default;
	//     color: #999;
	//     background-color: inherit;
	//   }
	// </style>
	//
	// <script type="text/ecmascript-6">
	exports.default = {
	  props: {
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    name: {
	      type: String
	    }
	  },
	  methods: {
	    select: function select() {
	      if (!this.disabled) {
	        this.$parent.$emit('select', this.name);
	        if (this.$parent.trigger !== 'click') {
	          this.$parent.$refs.list.close();
	        }
	      }
	    }
	  }
	};
	// </script>

/***/ },
/* 180 */
/***/ function(module, exports) {

	module.exports = "\n<li class=\"dropdown-item\" :class=\"{'dropdown-item-disabled': disabled}\" @click=\"select()\">\n  <slot></slot>\n</li>\n";

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(182)
	__vue_script__ = __webpack_require__(184)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules\\vue-desktop\\lib\\basic\\dropdown-divider.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(185)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./dropdown-divider.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 182 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 183 */,
/* 184 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <hr>
	// </template>
	//
	// <style>
	//   .dropdown hr {
	//     margin: 0;
	//     border: none;
	//     border-bottom: solid 1px #ddd;
	//     cursor: default;
	//     padding: 0;
	//   }
	// </style>
	//
	// <script type="text/ecmascript-6">
	exports.default = {};
	// </script>

/***/ },
/* 185 */
/***/ function(module, exports) {

	module.exports = "\n<hr>\n";

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(187)
	__vue_script__ = __webpack_require__(189)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules\\vue-desktop\\lib\\basic\\vbox.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(190)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./vbox.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 187 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 188 */,
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _util = __webpack_require__(5);

	// <template>
	//   <div class="d-vbox"><slot></slot></div>
	// </template>
	//
	// <style>
	//   .d-vbox {
	//     display: flex;
	//     flex-direction: column;
	//     box-sizing: border-box;
	//     width: 100%;
	//     overflow: hidden;
	//   }
	//
	//   .d-vbox > .d-box-cell {
	//     display: flex;
	//     width: 100%;
	//   }
	// </style>
	//
	// <script type="text/ecmascript-6">
	var domUtil = __webpack_require__(83);
	exports.default = {
	  data: function data() {
	    return {
	      $isBox: true,
	      $isTop: false,
	      $resizeListener: null
	    };
	  },


	  methods: {
	    handleResize: function handleResize() {
	      this.$broadcast('onresize');
	    }
	  },

	  destroyed: function destroyed() {
	    if (this.$resizeListener) {
	      domUtil.off(window, 'resize', this.$resizeListener);
	    }
	  },
	  ready: function ready() {
	    var parent = this.$parent;
	    var isTopBox = true;

	    while (parent) {
	      if (parent.$isBox) {
	        isTopBox = false;
	      }
	      parent = parent.$parent;
	    }

	    var children = this.$el.children;
	    for (var i = 0, j = children.length; i < j; i++) {
	      var child = children[i];
	      var flex = child.getAttribute('flex');
	      if (flex !== null) {
	        child.style.flex = Number(flex) || 1;
	      }
	    }

	    if (isTopBox) {
	      var box = this;
	      box.$resizeListener = (0, _util.throttle)(box.handleResize.bind(box), 100);

	      domUtil.on(window, 'resize', box.$resizeListener);

	      box.handleResize();
	    }
	  }
	};
	// </script>

/***/ },
/* 190 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"d-vbox\"><slot></slot></div>\n";

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(192)
	__vue_script__ = __webpack_require__(194)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules\\vue-desktop\\lib\\basic\\nav-menu.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(195)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./nav-menu.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 192 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 193 */,
/* 194 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <style>
	//   .d-navmenu {
	//     box-sizing: border-box;
	//   }
	// </style>
	//
	// <template>
	//   <div class="d-navmenu">
	//     <slot></slot>
	//   </div>
	// </template>
	//
	// <script type="text/ecmascript-6">
	exports.default = {
	  props: {
	    exclusive: {
	      type: Boolean,
	      default: true
	    }
	  },

	  methods: {
	    handleExclusive: function handleExclusive(item) {
	      if (this.exclusive) {
	        var children = this.$children;
	        children.forEach(function (child) {
	          if (child !== item) {
	            child.expanded = false;
	          }
	        });
	      }
	    }
	  }
	};
	// </script>

/***/ },
/* 195 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n<div class=\"d-navmenu\">\n  <slot></slot>\n</div>\n";

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(197)
	__vue_script__ = __webpack_require__(199)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules\\vue-desktop\\lib\\basic\\nav-menu-item.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(200)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./nav-menu-item.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 197 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 198 */,
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="d-navmenu-item" :class="{ expanded: hasChild && expanded, active: !hasChild && active, toplevel: topLevel }">
	//     <div class="d-navmenu-item-label" @click="handleHeaderClick"><a v-link="{ path: path, exact: exact }"><span v-if="icon" class="d-navmenu-item-icon {{icon}}"></span>{{text}}</a><span class="d-icon d-icon-arrow-right" v-if="hasChild"></span></div>
	//     <div class="d-navmenu-item-content" @click="$event.stopPropagation()" transition="collapse" v-show="expanded">
	//       <slot></slot>
	//     </div>
	//   </div>
	// </template>
	//
	// <style>
	//   .d-navmenu-item {
	//     box-sizing: border-box;
	//   }
	//
	//   .d-navmenu-item.toplevel.expanded {
	//     border-left: 4px solid #19aa8d;
	//   }
	//
	//   .d-navmenu-item.expanded {
	//     background-color: #f8f8f9;
	//   }
	//
	//   .d-navmenu-item.expanded > .d-navmenu-item-content {
	//     display: block;
	//   }
	//
	//   .d-navmenu-item.expanded > .d-navmenu-item-label .d-icon {
	//     transform: rotate(90deg);
	//   }
	//
	//   .d-navmenu-item-label {
	//     position: relative;
	//     color: #676a6c;
	//     cursor: pointer;
	//   }
	//
	//   .d-navmenu-item-icon {
	//     display: inline-block;
	//     width: 18px;
	//     margin-right: 2px;
	//     height: 20px;
	//     line-height: 20px;
	//     vertical-align: top;
	//   }
	//
	//   .d-navmenu-item-label > a {
	//     display: inline-block;
	//     text-decoration: none;
	//     padding: 8px 15px 8px 20px;
	//     line-height: 20px;
	//     width: 100%;
	//     box-sizing: border-box;
	//     color: #676a6c;
	//   }
	//
	//   .d-navmenu-item-label .d-icon {
	//     position: absolute;
	//     right: 15px;
	//     top: 9px;
	//     font-size: 12px;
	//     margin-top: 3px;
	//   }
	//
	//   .d-navmenu-item-label:hover {
	//     font-weight: 600;
	//     color: #5b5d5f;
	//   }
	//
	//   .d-navmenu-item-label:hover .d-icon {
	//     font-weight: normal;
	//   }
	//
	//   .d-navmenu-item.expanded .d-navmenu-item-label > a {
	//     padding-left: 16px;
	//   }
	//
	//   .d-navmenu-item-content {
	//     padding-left: 20px;
	//     display: none;
	//     overflow: hidden;
	//   }
	// </style>
	//
	// <script type="text/ecmascript-6">
	exports.default = {
	  props: {
	    path: {},
	    text: {},
	    icon: {},
	    exact: {
	      type: Boolean,
	      default: false
	    },
	    expanded: {
	      type: Boolean
	    },
	    exclusive: {
	      type: Boolean,
	      default: false
	    }
	  },

	  created: function created() {
	    this.$isNavMenu = true;
	  },


	  methods: {
	    handleHeaderClick: function handleHeaderClick() {
	      if (this.hasChild) {
	        this.expanded = !this.expanded;
	      }
	    },
	    handleExclusive: function handleExclusive(item) {
	      if (this.exclusive) {
	        var children = this.$children;
	        children.forEach(function (child) {
	          if (child !== item) {
	            child.expanded = false;
	          }
	        });
	      }
	    }
	  },

	  watch: {
	    expanded: function expanded(newVal) {
	      if (newVal) {
	        this.$parent.handleExclusive(this);
	      }
	    }
	  },

	  data: function data() {
	    return {
	      hasChild: false,
	      topLevel: false
	    };
	  },


	  transitions: {
	    collapse: __webpack_require__(136).default
	  },

	  ready: function ready() {
	    this.hasChild = this.$children.length > 0;
	    this.topLevel = !this.$parent.$isNavMenu;
	  }
	};
	// </script>

/***/ },
/* 200 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"d-navmenu-item\" :class=\"{ expanded: hasChild && expanded, active: !hasChild && active, toplevel: topLevel }\">\n  <div class=\"d-navmenu-item-label\" @click=\"handleHeaderClick\"><a v-link=\"{ path: path, exact: exact }\"><span v-if=\"icon\" class=\"d-navmenu-item-icon {{icon}}\"></span>{{text}}</a><span class=\"d-icon d-icon-arrow-right\" v-if=\"hasChild\"></span></div>\n  <div class=\"d-navmenu-item-content\" @click=\"$event.stopPropagation()\" transition=\"collapse\" v-show=\"expanded\">\n    <slot></slot>\n  </div>\n</div>\n";

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(202)
	__vue_script__ = __webpack_require__(204)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules\\vue-desktop\\lib\\nav\\accordion.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(205)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./accordion.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 202 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 203 */,
/* 204 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="accordion accordion-{{type}}">
	//     <slot></slot>
	//   </div>
	// </template>
	//
	// <style>
	//   .accordion {
	//     margin: 0;
	//   }
	// </style>
	//
	// <script type="text/ecmascript-6">
	exports.default = {
	  props: {
	    type: {
	      type: String,
	      default: 'default'
	    }
	  }
	};
	// </script>

/***/ },
/* 205 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"accordion accordion-{{type}}\">\n  <slot></slot>\n</div>\n";

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(207)
	__vue_script__ = __webpack_require__(209)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules\\vue-desktop\\lib\\nav\\accordion-panel.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(210)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./accordion-panel.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 207 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 208 */,
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _windDom = __webpack_require__(83);

	exports.default = {
	  props: {
	    title: {
	      type: String,
	      default: ''
	    },
	    active: {
	      type: Boolean,
	      default: false
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    }
	  },

	  methods: {
	    onHeaderClick: function onHeaderClick(event) {
	      var currentTarget = event.currentTarget;
	      if ((0, _windDom.hasClass)(currentTarget, 'disabled')) {
	        return;
	      }
	      var target = event.target;
	      if (target.tagName !== 'H3') {
	        return;
	      }
	      this.active = !this.active;
	    },
	    getCurrentStyle: function getCurrentStyle(obj, prop) {
	      if (obj.currentStyle) {
	        return obj.currentStyle[prop];
	      } else if (window.getComputedStyle) {
	        prop = prop.toLowerCase();
	        return document.defaultView.getComputedStyle(obj, null)[prop];
	      }
	      return null;
	    }
	  },

	  transitions: {
	    section: {
	      beforeEnter: function beforeEnter(el) {
	        el.style.height = '0';
	      },
	      enter: function enter(el) {
	        el.style.height = this.getCurrentStyle(this.$els.content, 'height');
	      },
	      beforeLeave: function beforeLeave(el) {
	        el.style.height = this.getCurrentStyle(this.$els.content, 'height');
	      },
	      leave: function leave(el) {
	        setTimeout(function () {
	          el.style.height = '0';
	        });
	      },
	      afterLeave: function afterLeave(el) {
	        this.$els.content.style.display = 'block';
	        el.style.height = '';
	      }
	    }
	  }
	};
	// </script>
	// <template>
	//   <div class="accordion-section" :class="{active: active, disabled: disabled}" @click="onHeaderClick($event)">
	//     <h3 class="accordion-header d-icon d-icon-arrow-right">{{title}}</h3>
	//     <div class="accordion-content-wrap" transition="section" v-show="active">
	//       <div class="accordion-content" v-el:content>
	//         <slot></slot>
	//       </div>
	//     </div>
	//   </div>
	// </template>
	//
	// <style>
	//   .accordion-section {
	//     margin-top: 5px;
	//   }
	//
	//   .accordion-section:first-child {
	//     margin-top: 0;
	//   }
	//
	//   .accordion-section .accordion-header {
	//     font-size: 14px;
	//     line-height: 20px;
	//     margin: 0;
	//     padding: 10px 8px;
	//     display: block;
	//     cursor: pointer;
	//     color: #666;
	//   }
	//
	//   .accordion-section .accordion-header:before {
	//     float: right;
	//     line-height: 20px;
	//     transform: rotateZ(0deg);
	//     transition: transform .3s;
	//   }
	//
	//   .accordion-section.active .accordion-header:before {
	//     transform: rotateZ(90deg);
	//   }
	//
	//   .accordion-section.active .accordion-content-wrap {
	//     height: auto;
	//   }
	//
	//   .accordion-section.disabled .accordion-header {
	//     cursor: not-allowed;
	//   }
	//
	//   .accordion-content-wrap {
	//     overflow: hidden;
	//   }
	//
	//   .accordion-content {
	//     padding: 8px 16px;
	//     margin: 0;
	//     box-sizing: border-box;
	//     line-height: 1.8;
	//     font-size: 14px;
	//     background-color: #fff;
	//     color: #676a6c;
	//   }
	//
	//   .accordion-default .accordion-section {
	//     border: solid 1px #d2d2d2;
	//     border-bottom-width: 0;
	//     border-radius: 3px;
	//   }
	//
	//   .accordion-default .accordion-header {
	//     border-radius: 3px;
	//     border-bottom: solid 1px #d2d2d2;
	//     background-color: #f5f5f5;
	//   }
	//
	//   .accordion-default .accordion-content-wrap {
	//     border-bottom-left-radius: 3px;
	//     border-bottom-right-radius: 3px;
	//   }
	//
	//   .accordion-default .accordion-section.active .accordion-header {
	//     border-bottom-left-radius: 0;
	//     border-bottom-right-radius: 0;
	//   }
	//
	//   .accordion-default .accordion-section.active {
	//     border-bottom-width: 1px;
	//   }
	//
	//   .accordion-transparent .accordion-header {
	//     background-color: transparent;
	//   }
	//
	//   .accordion-transparent .accordion-header:before {
	//   }
	//
	//   .accordion-transparent .accordion-content {
	//     background-color: transparent;
	//     padding: 0;
	//   }
	//
	//   .section-transition {
	//     transition: .3s;
	//   }
	//
	// </style>
	//
	// <script type="text/ecmascript-6">

/***/ },
/* 210 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"accordion-section\" :class=\"{active: active, disabled: disabled}\" @click=\"onHeaderClick($event)\">\n  <h3 class=\"accordion-header d-icon d-icon-arrow-right\">{{title}}</h3>\n  <div class=\"accordion-content-wrap\" transition=\"section\" v-show=\"active\">\n    <div class=\"accordion-content\" v-el:content>\n      <slot></slot>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(212)
	__vue_script__ = __webpack_require__(214)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules\\vue-desktop\\lib\\nav\\tab.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(215)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./tab.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 212 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 213 */,
/* 214 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="d-tabpane" :class="{ hidden: !visible }" v-show="visible" transition="tabpane-fade">
	//     <slot></slot>
	//   </div>
	// </template>
	//
	// <script type="text/ecmascript-6">
	exports.default = {
	  props: {
	    name: {
	      type: String
	    },

	    title: {
	      type: String
	    },

	    icon: {
	      type: String
	    },

	    disabled: {
	      type: Boolean,
	      default: false
	    },

	    closable: {
	      type: Boolean,
	      default: false
	    }
	  },

	  data: function data() {
	    return {
	      visible: false
	    };
	  },


	  computed: {
	    visible: function visible() {
	      return this.$parent.activeTab === this;
	    }
	  },

	  created: function created() {
	    this.$parent.tabs.push(this);
	  }
	};
	// </script>
	//
	// <style scoped>
	//   .tabpane-fade-transition {
	//     transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
	//     transform: none;
	//   }
	//
	//   .tabpane-fade-enter, .tabpane-fade-leave {
	//     opacity: 0;
	//   }
	//
	//   .tabpane-fade-enter {
	//     transform: translateX(20px);
	//   }
	//
	//   .tabpane-fade-leave {
	//     display: none !important;
	//   }
	//
	//   .d-tabpane {
	//     display: block;
	//     padding: 10px;
	//     background: #fff;
	//   }
	//
	//   .d-tabpane.hidden {
	//     position: absolute;
	//   }
	// </style>

/***/ },
/* 215 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"d-tabpane\" :class=\"{ hidden: !visible }\" v-show=\"visible\" transition=\"tabpane-fade\" _v-ca55b2ec=\"\">\n  <slot _v-ca55b2ec=\"\"></slot>\n</div>\n";

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(217)
	__vue_script__ = __webpack_require__(219)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules\\vue-desktop\\lib\\nav\\tabs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(220)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./tabs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 217 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 218 */,
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _util = __webpack_require__(5);

	// <template>
	//   <div class="d-tabs {{ placementClass }}">
	//     <div class="d-tabs-content" v-if="tabPlacement === 'bottom'">
	//       <slot></slot>
	//     </div>
	//     <div class="d-tabs-container" :class="{ 'd-tabs-container-shrinked': showNav }" v-el:tabs-container :style="{ 'margin': tabPlacement === 'bottom' ? '-1px 0 0' : '0 0 -1px' }">
	//       <d-button class="d-tab-button d-tab-prev d-icon d-icon-arrow-left" v-if="showNav" @click="scrollList('prev')" :disabled="prevDisabled"></d-button>
	//       <ul class="d-tabs-nav" v-el:tabs-list :style="{ 'transform': 'translateX(' + listOffset + 'px)' }">
	//         <li class="d-tab" v-for="tab in tabs" @click="handleTabClick($event, tab)" :class="{ active: activeTab === tab, disabled: tab.disabled }">
	//           <span v-if="tab.icon" class="d-tab-icon {{ tab.icon }}"></span>
	//           <span class="d-tab-label">{{ tab.title }}</span>
	//           <span v-if="tab.closable" class="d-tab-close d-icon d-icon-close" @click="close($event, tab)"></span>
	//         </li>
	//       </ul>
	//       <d-button class="d-tab-button d-tab-next d-icon d-icon-arrow-right" v-if="showNav" @click="scrollList('next')" :disabled="nextDisabled"></d-button>
	//     </div>
	//     <div class="d-tabs-content" v-if="tabPlacement !== 'bottom'">
	//       <slot></slot>
	//     </div>
	//   </div>
	// </template>
	//
	// <script type="text/ecmascript-6">
	var getStyle = __webpack_require__(83).getStyle;
	var domUtil = __webpack_require__(83);

	var Vue = __webpack_require__(1);

	exports.default = {
	  props: {
	    tabPlacement: {
	      defaultValue: 'top'
	    }
	  },

	  computed: {
	    placementClass: function placementClass() {
	      return {
	        top: '',
	        bottom: 'placement-bottom',
	        left: 'placement-left',
	        right: 'placement-right'
	      }[this.tabPlacement || 'top'];
	    }
	  },

	  watch: {
	    activeTab: function activeTab(newVal) {
	      var _this = this;

	      Vue.nextTick(function () {
	        _this.$broadcast('onresize');
	      });
	    },
	    tabs: function tabs() {
	      var _this2 = this;

	      this.$nextTick(function () {
	        _this2.showNav = parseInt(getStyle(_this2.$els.tabsContainer, 'width'), 10) < parseInt(getStyle(_this2.$els.tabsList, 'width'), 10);
	        if (!_this2.showNav) {
	          _this2.listOffset = 0;
	        } else {
	          _this2.listOffset = parseInt(getStyle(_this2.$els.tabsContainer, 'width'), 10) - parseInt(getStyle(_this2.$els.tabsList, 'width'), 10) - 50;
	          _this2.prevDisabled = false;
	          _this2.nextDisabled = true;
	        }
	      });
	    }
	  },

	  ready: function ready() {
	    this.$resizeListener = (0, _util.throttle)(this.handleResize, 100);
	    domUtil.on(window, 'resize', this.$resizeListener);

	    if (!this.activeTab) {
	      for (var i = 0, j = this.tabs.length; i < j; i++) {
	        var tab = this.tabs[i];
	        if (!tab.disabled) {
	          this.activeTab = tab;
	          break;
	        }
	      }
	    }
	  },


	  methods: {
	    handleResize: function handleResize() {
	      this.showNav = parseInt(getStyle(this.$els.tabsContainer, 'width'), 10) < parseInt(getStyle(this.$els.tabsList, 'width'), 10);
	      if (!this.showNav) {
	        this.listOffset = 0;
	      } else {
	        if (this.listOffset < parseInt(getStyle(this.$els.tabsContainer, 'width'), 10) - parseInt(getStyle(this.$els.tabsList, 'width'), 10) - 50) {
	          this.listOffset = parseInt(getStyle(this.$els.tabsContainer, 'width'), 10) - parseInt(getStyle(this.$els.tabsList, 'width'), 10) - 50;
	          this.nextDisabled = true;
	        } else {
	          this.nextDisabled = false;
	        }
	      }
	    },
	    scrollList: function scrollList(direction) {
	      if (direction === 'prev') {
	        if (this.listOffset > -150) {
	          this.listOffset = 0;
	          this.prevDisabled = true;
	        } else {
	          this.listOffset += 150;
	          this.nextDisabled = false;
	        }
	      } else {
	        if (this.listOffset - 150 < parseInt(getStyle(this.$els.tabsContainer, 'width'), 10) - parseInt(getStyle(this.$els.tabsList, 'width'), 10) - 50) {
	          this.listOffset = parseInt(getStyle(this.$els.tabsContainer, 'width'), 10) - parseInt(getStyle(this.$els.tabsList, 'width'), 10) - 50;
	          this.nextDisabled = true;
	        } else {
	          this.listOffset -= 150;
	          this.prevDisabled = false;
	        }
	      }
	    },
	    handleTabClick: function handleTabClick(event, tab) {
	      event.preventDefault();
	      if (tab.disabled) return;
	      this.activeTab = tab;
	    },
	    setActiveTab: function setActiveTab(index) {
	      var tabs = this.tabs;
	      var tab;
	      if (typeof index === 'number') {
	        tab = tabs[index];
	      } else if (typeof index === 'string') {
	        tabs.forEach(function (item) {
	          if (item.name === index) {
	            tab = index;
	          }
	        });
	      } else {
	        tabs.forEach(function (item) {
	          if (item === index) {
	            tab = index;
	          }
	        });
	      }

	      if (tab) {
	        this.activeTab = tab;
	      }
	    },
	    getActiveTab: function getActiveTab() {
	      return this.activeTab;
	    },
	    close: function close(event, tab) {
	      event.stopPropagation();

	      var tabs = this.tabs;
	      var index = tabs.indexOf(tab);
	      var i, newActiveTab, item;

	      for (i = index - 1; i >= 0; i--) {
	        item = tabs[i];
	        if (!item.disabled) {
	          newActiveTab = item;
	          break;
	        }
	      }

	      if (!newActiveTab) {
	        for (i = index + 1; i < tabs.length; i++) {
	          item = tabs[i];
	          if (!item.disabled) {
	            newActiveTab = item;
	            break;
	          }
	        }
	      }

	      if (newActiveTab) {
	        this.activeTab = newActiveTab;
	      }

	      tabs.splice(index, 1);
	      this.$children[index].$destroy(true);
	    }
	  },

	  data: function data() {
	    return {
	      tabs: [],
	      activeTab: null,
	      showNav: false,
	      listOffset: 0,
	      prevDisabled: false,
	      nextDisabled: false
	    };
	  }
	};
	// </script>
	//
	// <style>
	//   .d-tabs-container {
	//     width: 100%;
	//     overflow: hidden;
	//     position: relative;
	//     box-sizing: border-box;
	//   }
	//
	//   .d-tabs-container-shrinked {
	//     padding: 0 26px;
	//   }
	//
	//   .d-tab-button {
	//     position: absolute;
	//     top: 0;
	//     padding: 5px;
	//     z-index: 100;
	//   }
	//
	//   .d-tab-prev {
	//     left: 0;
	//   }
	//
	//   .d-tab-next {
	//     right: 0;
	//   }
	//
	//   .d-tabs-nav {
	//     list-style: none;
	//     padding: 0;
	//     margin: 0;
	//     width: max-content;
	//     display: inline-block;
	//     transition: .2s;
	//   }
	//
	//   .d-tabs-content {
	//     border: 1px solid #e7eaec;
	//     background: #fff;
	//   }
	//
	//   .d-tab {
	//     display: inline-block;
	//     background: none;
	//     border: none;
	//     color: #676a6c;
	//     padding: 8px 10px;
	//     border-bottom: 0;
	//     cursor: pointer;
	//     font-size: 14px;
	//     min-width: 100px;
	//     border-radius: 5px 5px 0 0;
	//   }
	//
	//   .placement-bottom .d-tab {
	//     border-radius:  0 0 5px 5px;
	//   }
	//
	//   .placement-bottom .d-tab.active {
	//     border-bottom-width: 1px;
	//     border-bottom-color: #e7eaec;
	//     /* TODO */
	//     margin-top: -1px;
	//   }
	//
	//   .d-tab:hover {
	//     color: #a7b1c2;
	//   }
	//
	//   .d-tab.active {
	//     border: 1px solid #e7eaec;
	//     border-bottom-color: transparent;
	//     background: #fff;
	//     color: #555555;
	//     text-decoration: none;
	//   }
	//
	//   .d-tab.disabled {
	//     cursor: not-allowed;
	//   }
	//
	//   .d-tab.disabled:hover {
	//     color: #666;
	//     background-color: transparent;
	//   }
	//
	//   .d-tab > a {
	//     text-decoration: none;
	//     color: #333;
	//   }
	//
	//   .d-tab-icon {
	//     display: inline-block;
	//     width: 16px;
	//   }
	//
	//   .d-tab-close {
	//     float: right;
	//     width: 16px;
	//     color: #676a6c;
	//     text-align: right;
	//   }
	//
	//   .d-tab:hover .d-tab-icon,
	//   .d-tab:hover .d-tab-close {
	//     color: #a7b1c2;
	//   }
	//
	//   .d-tab + .d-tab {
	//     margin: 0 0 0 1px;
	//   }
	// </style>

/***/ },
/* 220 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"d-tabs {{ placementClass }}\">\n  <div class=\"d-tabs-content\" v-if=\"tabPlacement === 'bottom'\">\n    <slot></slot>\n  </div>\n  <div class=\"d-tabs-container\" :class=\"{ 'd-tabs-container-shrinked': showNav }\" v-el:tabs-container :style=\"{ 'margin': tabPlacement === 'bottom' ? '-1px 0 0' : '0 0 -1px' }\">\n    <d-button class=\"d-tab-button d-tab-prev d-icon d-icon-arrow-left\" v-if=\"showNav\" @click=\"scrollList('prev')\" :disabled=\"prevDisabled\"></d-button>\n    <ul class=\"d-tabs-nav\" v-el:tabs-list :style=\"{ 'transform': 'translateX(' + listOffset + 'px)' }\">\n      <li class=\"d-tab\" v-for=\"tab in tabs\" @click=\"handleTabClick($event, tab)\" :class=\"{ active: activeTab === tab, disabled: tab.disabled }\">\n        <span v-if=\"tab.icon\" class=\"d-tab-icon {{ tab.icon }}\"></span>\n        <span class=\"d-tab-label\">{{ tab.title }}</span>\n        <span v-if=\"tab.closable\" class=\"d-tab-close d-icon d-icon-close\" @click=\"close($event, tab)\"></span>\n      </li>\n    </ul>\n    <d-button class=\"d-tab-button d-tab-next d-icon d-icon-arrow-right\" v-if=\"showNav\" @click=\"scrollList('next')\" :disabled=\"nextDisabled\"></d-button>\n  </div>\n  <div class=\"d-tabs-content\" v-if=\"tabPlacement !== 'bottom'\">\n    <slot></slot>\n  </div>\n</div>\n";

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(222)
	__vue_script__ = __webpack_require__(224)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules\\vue-desktop\\lib\\nav\\breadcrumb.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(225)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./breadcrumb.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 222 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 223 */,
/* 224 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <ul class="breadcrumb">
	//     <slot></slot>
	//   </ul>
	// </template>
	//
	// <style>
	//   .breadcrumb {
	//     list-style: none;
	//     padding: 0;
	//     margin: 0;
	//     font-size: 14px;
	//   }
	// </style>
	//
	// <script type="text/ecmascript-6">
	exports.default = {};
	// </script>

/***/ },
/* 225 */
/***/ function(module, exports) {

	module.exports = "\n<ul class=\"breadcrumb\">\n  <slot></slot>\n</ul>\n";

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(227)
	__vue_script__ = __webpack_require__(229)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules\\vue-desktop\\lib\\nav\\breadcrumb-item.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(230)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./breadcrumb-item.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 227 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 228 */,
/* 229 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <li class="breadcrumb-item">
	//     <a v-link="{ path: link }" class="breadcrumb-anchor" :class="{ 'breadcrumb-link': isLink }"><slot></slot></a>
	//     <span class="breadcrumb-slash">/</span>
	//   </li>
	// </template>
	//
	// <style>
	//   .breadcrumb-item {
	//     display: inline;
	//   }
	//
	//   .breadcrumb-item .breadcrumb-anchor {
	//     text-decoration: none;
	//     color: #666;
	//   }
	//
	//   .breadcrumb-item .breadcrumb-anchor.v-link-active {
	//     font-weight: 700;
	//     color: #666;
	//     cursor: default;
	//   }
	//
	//   .breadcrumb-item .breadcrumb-anchor.v-link-active:hover {
	//     color: #666;
	//   }
	//
	//   .breadcrumb-item .breadcrumb-link {
	//     color: #0089dc;
	//     transition: color .3s;
	//   }
	//
	//   .breadcrumb-item .breadcrumb-link:hover {
	//     color: #006fb7;
	//   }
	//
	//   .breadcrumb-item .breadcrumb-slash {
	//     margin: 0 5px;
	//   }
	//
	//   .breadcrumb-item:last-child .breadcrumb-slash {
	//     display: none;
	//   }
	// </style>
	//
	// <script type="text/ecmascript-6">
	exports.default = {
	  props: {
	    link: {
	      type: String,
	      default: null
	    }
	  },

	  data: function data() {
	    return {
	      isLink: false
	    };
	  },
	  ready: function ready() {
	    if (this.link) {
	      this.isLink = true;
	    }
	  }
	};
	// </script>

/***/ },
/* 230 */
/***/ function(module, exports) {

	module.exports = "\n<li class=\"breadcrumb-item\">\n  <a v-link=\"{ path: link }\" class=\"breadcrumb-anchor\" :class=\"{ 'breadcrumb-link': isLink }\"><slot></slot></a>\n  <span class=\"breadcrumb-slash\">/</span>\n</li>\n";

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(232)
	__vue_script__ = __webpack_require__(234)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules\\vue-desktop\\lib\\data\\grid.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(246)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./grid.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 232 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 233 */,
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _util = __webpack_require__(5);

	var _store = __webpack_require__(235);

	var _store2 = _interopRequireDefault(_store);

	var _windDom = __webpack_require__(83);

	var _vueDesktop = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <style>
	//   .d-grid {
	//     position: relative;
	//     overflow: hidden;
	//     box-sizing: border-box;
	//     width: 100%;
	//     max-width: 100%;
	//     background-color: #fff;
	//     border-collapse: collapse;
	//     border: 1px solid #e7eaec;
	//     font-size: 14px;
	//     border-radius: 3px;
	//   }
	//
	//   .hidden-columns {
	//     visibility: hidden;
	//     position: absolute;
	//     z-index: -1;
	//   }
	//
	//   .d-grid-fit {
	//     border-right: 0;
	//   }
	//
	//   .d-grid th,
	//   .d-grid td {
	//     height: 20px;
	//     max-width: 250px;
	//     min-width: 0;
	//     box-sizing: border-box;
	//     overflow: hidden;
	//     line-height: 28px;
	//     text-overflow: ellipsis;
	//     white-space: nowrap;
	//     vertical-align: middle;
	//     text-align: center;
	//   }
	//
	//   .d-grid td {
	//     border-bottom: 1px solid #e7eaec;
	//   }
	//
	//   .d-grid th {
	//     text-align: left;
	//     border-right: 1px solid #ddd;
	//     border-bottom: 1px solid #ddd;
	//   }
	//
	//   .d-grid th > div {
	//     display: inline-block;
	//     padding: 2px;
	//     box-sizing: border-box;
	//   }
	//
	//   .d-grid td > div {
	//     padding: 2px;
	//   }
	//
	//   .d-grid .grid-fixed-header-wrapper {
	//     position: absolute;
	//     left: 0;
	//     top: 0;
	//     z-index: 3;
	//   }
	//
	//   .d-grid .grid-fixed-body-wrapper {
	//     position: absolute;
	//     left: 0;
	//     top: 37px;
	//     overflow: hidden;
	//     z-index: 3;
	//   }
	//
	//   .d-grid .grid-fixed-body-wrapper tr {
	//     /*background: #fff;*/
	//   }
	//
	//   .d-grid .grid-header-wrapper,
	//   .d-grid .grid-body-wrapper {
	//     width: 100%;
	//   }
	//
	//   .d-grid .grid-header,
	//   .d-grid .grid-body {
	//     table-layout: fixed;
	//   }
	//
	//   .grid-header th {
	//     text-align: center;
	//   }
	//
	//   .d-grid .grid-header-wrapper {
	//     overflow: hidden;
	//   }
	//
	//   .d-grid .grid-body-wrapper {
	//     overflow: auto;
	//     position: relative;
	//   }
	//
	//   .d-grid td,
	//   .d-grid th {
	//     position: relative;
	//     border-right: 1px solid #e7eaec;
	//   }
	//
	//   /** TODO */
	//   .d-grid th.required > div:before {
	//     display: inline-block;
	//     content: "";
	//     width: 8px;
	//     height: 8px;
	//     border-radius: 50%;
	//     background: #ff4d51;
	//     margin-right: 5px;
	//     vertical-align: middle;
	//   }
	//
	//   .d-grid th > .cell {
	//     position: relative;
	//     word-wrap: normal;
	//     overflow: hidden;
	//     text-overflow: ellipsis;
	//     display: inline-block;
	//     line-height: 20px;
	//     vertical-align: middle;
	//     width: 100%;
	//   }
	//
	//   /** TODO */
	//   .d-grid .sort-caret {
	//     display: inline-block;
	//     width: 0;
	//     height: 0;
	//     margin-left: 0.3em;
	//     border: 0;
	//     content: "";
	//     position: absolute;
	//     z-index: 2;
	//     top: 50%;
	//     margin-top: -3px;
	//     right: 4px;
	//   }
	//
	//   .d-grid .ascending .sort-caret {
	//     vertical-align: baseline;
	//     border-top: none;
	//     border-right: 4px solid transparent;
	//     border-bottom: 4px solid #333;
	//     border-left: 4px solid transparent;
	//   }
	//
	//   .d-grid .descending .sort-caret {
	//     vertical-align: super;
	//     border-top: 4px solid #333;
	//     border-right: 4px solid transparent;
	//     border-bottom: none;
	//     border-left: 4px solid transparent;
	//   }
	//
	//   .d-grid th.gutter,
	//   .d-grid td.gutter {
	//     width: 15px;
	//     border-right-width: 0;
	//     border-bottom-width: 0;
	//     padding: 0;
	//   }
	//
	//   .d-grid td.gutter {
	//     width: 0;
	//   }
	//
	//   .d-grid-fit th.gutter,
	//   .d-grid-fit td.gutter {
	//     border-right-width: 1px;
	//   }
	//
	//   .d-grid td .cell {
	//     box-sizing: border-box;
	//     overflow: hidden;
	//     text-overflow: ellipsis;
	//     min-height: 28px;
	//   }
	//
	//   .d-grid tr {
	//     background-color: #fff;
	//   }
	//
	//   .grid-body tr:nth-child(2n) {
	//     background: #f9f9f9;
	//   }
	//
	//   .d-grid tr.current-row {
	//     background: #007fc1;
	//     color: #fff;
	//   }
	//
	//   .d-grid tr.hover,
	//   .d-grid tr:hover {
	//   }
	//
	//   .d-grid-column-resize-proxy {
	//     position: absolute;
	//     left: 200px;
	//     top: 0;
	//     bottom: 0;
	//     width: 0;
	//     border-left: 1px solid #aaa;
	//     z-index: 10;
	//   }
	// </style>
	//
	// <template>
	//   <div class="d-grid" :class="{ 'd-grid-fit': fit }" @mouseleave="handleMouseLeave($event)">
	//     <div class="hidden-columns" v-el:hidden-columns></table><slot></slot></div>
	//     <div class="grid-header-wrapper">
	//       <table class="grid-header" cellspacing="0" cellpadding="0" border="0" :style="{ width: bodyWidth ? bodyWidth + 'px' : '' }">
	//       </table>
	//     </div>
	//     <div class="grid-body-wrapper">
	//       <table class="grid-body" cellspacing="0" cellpadding="0" border="0" :style="{ width: bodyWidth ? bodyWidth - (showVertScrollbar ? gutterWidth : 0 ) + 'px' : '' }">
	//         <tbody></tbody>
	//       </table>
	//     </div>
	//     <div class="grid-fixed-header-wrapper" v-if="fixedColumnCount > 0">
	//       <table class="grid-header" cellspacing="0" cellpadding="0" border="0" :style="{ width: fixedBodyWidth ? fixedBodyWidth + 'px' : '' }">
	//       </table>
	//     </div>
	//     <div class="grid-fixed-body-wrapper" v-if="fixedColumnCount > 0" :style="{ top: headerHeight + 'px' }">
	//       <table class="grid-body" cellspacing="0" cellpadding="0" border="0" :style="{ width: fixedBodyWidth ? fixedBodyWidth + 'px' : '' }">
	//         <tbody></tbody>
	//       </table>
	//     </div>
	//     <div class="d-grid-column-resize-proxy" v-el:resize-proxy v-show="resizeProxyVisible"></div>
	//     <slot name="bottom"></slot>
	//   </div>
	// </template>
	//
	// <script type="text/ecmascript-6">
	var Vue = __webpack_require__(1);

	var gridIdSeed = 1;
	var GUTTER_WIDTH = void 0;

	var GridBody = __webpack_require__(236);
	var GridHeader = __webpack_require__(241);

	exports.default = {
	  props: {
	    data: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },

	    schema: {},

	    width: {
	      type: String
	    },

	    height: {
	      type: String
	    },

	    fit: {
	      type: Boolean,
	      default: true
	    },

	    fixedColumnCount: {
	      type: Number,
	      default: 0
	    },

	    selectionMode: {
	      type: String,
	      default: 'single'
	    },

	    selection: {},

	    allowNoSelection: {
	      type: Boolean,
	      default: false
	    },

	    gutterWidth: {
	      default: 0
	    }
	  },

	  events: {
	    onresize: function onresize() {
	      var grid = this;
	      Vue.nextTick(function () {
	        if (grid.$el.getAttribute('flex') !== null) {
	          grid.height = grid.$el.offsetHeight;
	        }
	        grid.$calcColumns();
	      });
	    }
	  },

	  methods: {
	    /************************************************************************/
	    /************************************************************************/

	    showAlert: function showAlert(id) {
	      (0, _vueDesktop.MessageBox)({
	        title: 'Alert',
	        message: '确认删除?',
	        showCancelButton: true,
	        type: 'warning'
	      }, function (action) {
	        if (action === 'confirm') {
	          setTimeout(function () {
	            (0, _vueDesktop.MessageBox)('已删除');
	          }, 500);
	        } else {
	          (0, _vueDesktop.MessageBox)('未删除');
	        }
	      });
	    },
	    operate: function operate(event, row) {
	      var target = event.target;
	      var type = target.innerHTML.trim();
	      var id = row.id;

	      switch (type) {
	        case '壁纸管理':
	          this.$route.router.go('/PCbizhi/grid-child1');
	          break;
	        case '编辑':
	          this.$route.router.go('/PCbizhi/v-f');
	          break;
	        case '管理文件':
	          this.$route.router.go('/PCbizhi/grid-child2');
	          break;
	        case '删除':
	          this.showAlert(id);
	          break;
	        default:
	          break;
	      }
	    },


	    /************************************************************************/
	    /************************************************************************/

	    handleMouseLeave: function handleMouseLeave(event) {
	      this.hoverRowIndex = null;
	      var hoverState = this.hoverState;
	      if (hoverState) {
	        this.hoverState = null;
	      }
	    },
	    handleDataChange: function handleDataChange(data) {
	      data = data || [];

	      if (this.selectionMode === 'single') {
	        var oldSelection = this.selected;
	        if (oldSelection === null) {
	          if (!this.allowNoSelection) {
	            this.selected = data[0];
	            if (this.selected !== oldSelection) {
	              this.$emit('selection-change', this.selected);
	            }
	          }
	        } else if (data.indexOf(oldSelection) === -1) {
	          if (!this.allowNoSelection) {
	            this.selected = data[0];
	          } else {
	            this.selected = null;
	          }
	          if (this.selected !== oldSelection) {
	            this.$emit('selection-change', this.selected);
	          }
	        }
	      }
	    },
	    toggleSelection: function toggleSelection(event, row) {
	      var target = event.target;
	      Vue.set(row, '$selected', target.checked);
	      if (this.selectionMode === 'multiple') {
	        this.$emit('selection-change', this.selection);
	      }
	    },
	    toggleAllSelection: function toggleAllSelection(event) {
	      var target = event.target;
	      var checked = target.checked;
	      this.data.forEach(function (item) {
	        Vue.set(item, '$selected', checked);
	      });
	      if (this.selectionMode === 'multiple') {
	        this.$emit('selection-change', this.selection);
	      }
	    },
	    $calcColumns: function $calcColumns() {
	      var _this = this;

	      var fit = this.fit;
	      var columns = this.columns;

	      var bodyWidth = this.$el.clientWidth;
	      var bodyMinWidth = 0;

	      var flattenColumns = [];
	      columns.forEach(function (column) {
	        if (column.isColumnGroup) {
	          flattenColumns.push.apply(flattenColumns, column.columns);
	        } else {
	          flattenColumns.push(column);
	        }
	      });

	      if (fit) {
	        (function () {
	          var flexColumns = [];
	          var definedWidthColumnsWidth = 0;
	          var definedMinWidthSum = 0;

	          flattenColumns.forEach(function (column) {
	            definedMinWidthSum += column.minWidth || 80;
	            bodyMinWidth += column.width || column.minWidth || 80;

	            if (typeof column.width === 'number') {
	              definedWidthColumnsWidth += column.width;
	            } else {
	              flexColumns.push(column);
	            }
	          });

	          if (bodyMinWidth < bodyWidth - _this.gutterWidth) {
	            (function () {
	              // do not have scroll bar.
	              var flexWidthTotal = bodyWidth - _this.gutterWidth - columns.length - bodyMinWidth;
	              var flexWidthPerColumn = Math.floor(flexWidthTotal / flexColumns.length);
	              var flexWidthFirstColumn = flexWidthTotal - flexWidthPerColumn * flexColumns.length + flexWidthPerColumn;

	              flexColumns.forEach(function (column, index) {
	                if (index === 0) {
	                  column.realWidth = (column.minWidth || 80) + flexWidthFirstColumn;
	                } else {
	                  column.realWidth = (column.minWidth || 80) + flexWidthPerColumn;
	                }
	              });
	            })();
	          } else {
	            // need horizontal scroll bar.
	            _this.showHoriScrollbar = true;
	            flexColumns.forEach(function (column) {
	              column.realWidth = column.minWidth;
	            });
	          }

	          _this.bodyWidth = Math.max(bodyMinWidth, bodyWidth);
	        })();
	      } else {
	        flattenColumns.forEach(function (column) {
	          if (!column.width && !column.minWidth) {
	            column.realWidth = 80;
	          }

	          bodyMinWidth += column.realWidth;
	        });
	        this.showHoriScrollbar = bodyMinWidth > bodyWidth;

	        this.bodyWidth = bodyMinWidth;
	      }

	      if (this.styleNode) {
	        var i, j;

	        (function () {
	          var styleSheet = _this.styleNode.sheet;

	          for (i = 0, j = styleSheet.cssRules.length; i < j; i++) {
	            styleSheet.deleteRule(0);
	          }

	          columns.forEach(function (column) {
	            if (column.isColumnGroup) {
	              var childColumns = column.columns;
	              var groupWidth = 0;
	              childColumns.forEach(function (childColumn) {
	                groupWidth += childColumn.realWidth;
	                styleSheet.insertRule('.' + childColumn.id + ', .' + childColumn.id + ' > div { width: ' + childColumn.realWidth + 'px; }', styleSheet.cssRules.length);
	              });

	              styleSheet.insertRule('.' + column.id + ', .' + column.id + ' > div { width: ' + groupWidth + 'px; }', styleSheet.cssRules.length);
	            } else {
	              styleSheet.insertRule('.' + column.id + ', .' + column.id + ' > div { width: ' + column.realWidth + 'px; }', styleSheet.cssRules.length);
	            }
	          });
	        })();
	      }

	      if (this.fixedColumnCount > 0) {
	        (function () {
	          var fixedBodyWidth = 0;
	          var fixedColumnCount = _this.fixedColumnCount;

	          columns.forEach(function (column, index) {
	            if (index < fixedColumnCount) {
	              fixedBodyWidth += column.realWidth;
	            }
	          });

	          _this.fixedBodyWidth = fixedBodyWidth;
	        })();
	      }

	      this.headerHeight = this.$el.querySelector('.grid-header-wrapper').offsetHeight;

	      if (this.$header) {
	        this.$header.updateColGroup();
	      }

	      if (this.$fixedHeader) {
	        this.$fixedHeader.updateColGroup();
	        this.$fixedHeader.$el.querySelector('tr').style.height = this.$header.$el.offsetHeight + 'px';
	      }
	    },
	    $calcHeight: function $calcHeight(height) {
	      if (typeof height === 'string') {
	        if (/^\d+$/.test(height)) {
	          height = Number(height);
	        }
	      }

	      if (!isNaN(height) && this.$el) {
	        var headerHeight = this.headerHeight = this.$el.querySelector('.grid-header-wrapper').offsetHeight;
	        var bodyHeight = height - headerHeight;
	        var gridWrapper = this.$el.querySelector('.grid-body-wrapper');
	        gridWrapper.style.height = bodyHeight + 'px';

	        this.$el.style.height = height + 'px';

	        var fixedBodyWrapper = this.$el.querySelector('.grid-fixed-body-wrapper');
	        if (fixedBodyWrapper) {
	          fixedBodyWrapper.style.height = (this.showHoriScrollbar ? gridWrapper.offsetHeight - this.gutterWidth : gridWrapper.offsetHeight) + 'px';
	        }
	      }
	    },
	    handleHeaderClick: function handleHeaderClick(column, event) {
	      var target = event.target;
	      while (target && target.tagName !== 'TH') {
	        target = target.parentNode;
	      }

	      if (target && target.tagName === 'TH') {
	        if ((0, _windDom.hasClass)(target, 'noclick')) {
	          (0, _windDom.removeClass)(target, 'noclick');
	          return;
	        }
	      }

	      if (!column.sortable) return;

	      if (this.sortingColumn !== column) {
	        if (this.sortingColumn) {
	          this.sortingColumn.direction = '';
	        }
	        this.sortingColumn = column;
	        this.sortingProperty = column.property;
	      }

	      if (!column.direction) {
	        column.direction = 'ascending';
	      } else if (column.direction === 'ascending') {
	        column.direction = 'descending';
	      } else {
	        column.direction = '';
	        this.sortingColumn = null;
	        this.sortingProperty = null;
	      }
	      this.sortingDirection = column.direction === 'descending' ? -1 : 1;

	      this.sortingCustom = column.sortable === 'custom';

	      // custom sorting event
	      this.sortingCustom && this.$emit('sort', column);
	    },
	    reRender: function reRender() {
	      console.log(this.columns);
	      if (this.$body) {
	        this.$body.$destroy();
	        this.$body = null;
	      }

	      if (this.$header) {
	        this.$header.$destroy();
	        this.$header = null;
	      }

	      if (this.$fixedBody) {
	        this.$fixedBody.$destroy();
	        this.$fixedBody = null;
	      }

	      if (this.$fixedHeader) {
	        this.$fixedHeader.$destroy();
	        this.$fixedHeader = null;
	      }
	      this.doRender();
	    },
	    updateScrollInfo: function updateScrollInfo() {
	      var _this2 = this;

	      Vue.nextTick(function () {
	        if (_this2.$el) {
	          var gridBodyWrapper = _this2.$el.querySelector('.grid-body-wrapper');
	          var gridBody = _this2.$el.querySelector('.grid-body-wrapper .grid-body');

	          _this2.showVertScrollbar = gridBody.offsetHeight > gridBodyWrapper.offsetHeight;
	        }
	      });
	    },
	    doRender: function doRender() {
	      var _this3 = this;

	      var bodyWrapper = this.$el.querySelector('.grid-body-wrapper');
	      var headerWrapper = this.$el.querySelector('.grid-header-wrapper');
	      var el = this.$el;
	      if (!this.$ready) {
	        bodyWrapper.addEventListener('scroll', function () {
	          headerWrapper.scrollLeft = this.scrollLeft;
	          var fixedBodyWrapper = el.querySelector('.grid-fixed-body-wrapper');
	          if (fixedBodyWrapper) {
	            fixedBodyWrapper.scrollTop = this.scrollTop;
	          }
	        });
	      }
	      this.$calcColumns();

	      if (!this.$ready && this.fit) {
	        this.windowResizeListener = (0, _util.throttle)(function () {
	          _this3.$calcColumns();
	        }, 200);
	        window.addEventListener('resize', this.windowResizeListener);
	      }
	      this.$renderHeader();
	      this.$renderBody();
	      this.$renderHeader(true);
	      this.$renderBody(true);

	      Vue.nextTick(function () {
	        if (_this3.height) {
	          _this3.$calcHeight(_this3.height);
	        }
	      });
	    },
	    $renderHeader: function $renderHeader(fixed) {
	      var columns = fixed ? this.fixedColumns : this.columns;
	      if (fixed && columns.length === 0) return;

	      var headerTable = this.$el.querySelector(fixed ? '.grid-fixed-header-wrapper .grid-header' : '.grid-header-wrapper .grid-header');

	      if (fixed) {
	        this.$fixedHeader = new Vue((0, _util.merge)({
	          parent: this,
	          el: headerTable,
	          replace: false,
	          columns: columns,
	          fixed: fixed
	        }, GridHeader));
	      } else {
	        this.$header = new Vue((0, _util.merge)({
	          parent: this,
	          el: headerTable,
	          replace: false,
	          columns: columns,
	          fixed: fixed
	        }, GridHeader));
	      }
	    },
	    $renderBody: function $renderBody(fixed) {

	      var columns = fixed ? this.fixedColumns : this.columns;

	      if (fixed && columns.length === 0) return;

	      var bodyTable = this.$el.querySelector(fixed ? '.grid-fixed-body-wrapper tbody' : '.grid-body tbody');

	      var body = new Vue((0, _util.merge)({
	        parent: this,
	        inherit: true,
	        el: bodyTable,
	        replace: false,
	        columns: columns,
	        fixed: fixed
	      }, GridBody));

	      if (fixed) {
	        this.$fixedBody = body;
	      } else {
	        this.$body = body;
	      }
	    }
	  },

	  created: function created() {
	    var _this4 = this;

	    this.gridId = 'grid_' + gridIdSeed + '_';

	    if (GUTTER_WIDTH === undefined) {
	      GUTTER_WIDTH = (0, _util.getScrollbarWidth)();
	    }
	    this.gutterWidth = GUTTER_WIDTH;

	    this.debouncedReRender = (0, _util.debounce)(function () {
	      Vue.nextTick(function () {
	        _this4.reRender();
	      });
	    }, 200);
	  },


	  computed: {
	    isAllSelected: function isAllSelected() {
	      var data = this.data || [];
	      if (data.length === 0) return false;
	      return data.filter(function (item) {
	        return item.$selected !== true;
	      }).length === 0;
	    },
	    selection: function selection() {
	      if (this.selectionMode === 'multiple') {
	        var data = this.data || [];
	        return data.filter(function (item) {
	          return item.$selected === true;
	        });
	      } else if (this.selectionMode === 'single') {
	        return this.selected;
	      } else {
	        return null;
	      }
	    },
	    fixedColumns: function fixedColumns() {
	      var columns = this.columns || [];
	      var fixedColumnCount = this.fixedColumnCount;
	      return columns.filter(function (item, index) {
	        return index < fixedColumnCount;
	      });
	    },
	    gridSchema: function gridSchema() {
	      var schema = this.schema;

	      if (typeof schema === 'string') {
	        schema = _store2.default.getSchema(schema);
	      }

	      return typeof schema === 'string' ? null : schema;
	    }
	  },

	  watch: {
	    fixedColumnCount: function fixedColumnCount() {
	      this.debouncedReRender();
	    },
	    height: function height(value) {
	      this.$calcHeight(value);
	    },
	    data: function data(newVal) {
	      this.handleDataChange(newVal);
	      this.updateScrollInfo();
	    }
	  },

	  beforeCompile: function beforeCompile() {
	    var styleNode = document.createElement('style');
	    styleNode.type = 'text/css';
	    styleNode.rel = 'stylesheet';
	    styleNode.title = 'Grid Column Style';
	    document.getElementsByTagName('head')[0].appendChild(styleNode);

	    this.styleNode = styleNode;
	  },
	  destroyed: function destroyed() {
	    if (this.styleNode) {
	      this.styleNode.parentNode.removeChild(this.styleNode);
	    }
	    if (this.windowResizeListener) {
	      window.removeEventListener('resize', this.windowResizeListener);
	    }
	  },
	  ready: function ready() {
	    this.doRender();

	    this.$ready = true;
	    if (this.data) {
	      this.handleDataChange(this.data);
	    }
	    this.updateScrollInfo();
	  },
	  data: function data() {
	    return {
	      showHoriScrollbar: false,
	      showVertScrollbar: false,
	      hoverRowIndex: null,
	      headerHeight: 35,
	      selected: null,
	      columns: [],
	      resizeProxyVisible: false,
	      bodyWidth: '',
	      fixedBodyWidth: '',
	      sortingColumn: null,
	      sortingProperty: null,
	      sortingDirection: 1,
	      sortingCustom: false
	    };
	  }
	};
	// </script>

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof2 = __webpack_require__(6);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _cache = __webpack_require__(120);

	var _cache2 = _interopRequireDefault(_cache);

	var _index = __webpack_require__(104);

	var _index2 = _interopRequireDefault(_index);

	var _validators = __webpack_require__(117);

	var _validators2 = _interopRequireDefault(_validators);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  getSchema: function getSchema(name) {
	    return _cache2.default[name];
	  },
	  defineSchema: function defineSchema(name, config) {
	    if (typeof name !== 'string') {
	      throw new Error('name is required when define a schema.');
	    }

	    if ((typeof config === 'undefined' ? 'undefined' : (0, _typeof3.default)(config)) !== 'object') {
	      throw new Error('config should be an object.');
	    }

	    var result = new _index2.default(config);

	    _cache2.default[name] = result;

	    return result;
	  },
	  removeSchema: function removeSchema(name) {
	    _cache2.default[name] = null;
	    delete _cache2.default[name];
	  },
	  defineValidator: function defineValidator(name, fn) {
	    if (typeof name !== 'string' || typeof fn !== 'function') return;

	    _validators2.default[name] = fn;
	  },
	  getValidator: function getValidator(name) {
	    if (typeof name !== 'string') return null;

	    return _validators2.default[name];
	  }
	};

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(237)
	__vue_script__ = __webpack_require__(239)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules\\vue-desktop\\lib\\data\\grid-body.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(240)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./grid-body.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 237 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 238 */,
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; // <template>
	//   <div></div>
	// </template>
	//
	// <style scoped>
	// </style>
	//
	// <script type="text/ecmascript-6">


	var _util = __webpack_require__(5);

	var isObject = function isObject(obj) {
	  return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
	};

	var getCell = function getCell(event) {
	  var cell = event.target;

	  while (cell && cell.tagName.toUpperCase() !== 'HTML') {
	    if (cell.tagName.toUpperCase() === 'TD') {
	      return cell;
	    }
	    cell = cell.parentNode;
	  }

	  return null;
	};

	var getColumnById = function getColumnById(grid, columnId) {
	  var column = null;
	  grid.columns.forEach(function (item) {
	    if (item.id === columnId) {
	      column = item;
	    }
	  });
	  return column;
	};

	var getColumnByCell = function getColumnByCell(grid, cell) {
	  var matches = (cell.className || '').match(/grid_[^\s]+/gm);
	  if (matches) {
	    return getColumnById(grid, matches[0]);
	  }
	  return null;
	};

	exports.default = {
	  props: {
	    columns: {},
	    fixed: {}
	  },

	  created: function created() {
	    var columns = this.$options.columns;
	    var rowTemplate = '';

	    columns.forEach(function (column) {
	      var columnTemplate = column.template || '';
	      if (column.isColumnGroup) {
	        var childColumns = column.columns;
	        childColumns.forEach(function (childColumn) {
	          columnTemplate = childColumn.template || '';
	          rowTemplate += '<td class="' + childColumn.id + '" @mouseenter="handleCellMouseEnter($event, row)" @mouseleave="handleCellMouseLeave($event)"><div class="cell">' + columnTemplate + '</div></td>';
	        });
	      } else {
	        rowTemplate += '<td class="' + column.id + '" @mouseenter="handleCellMouseEnter($event, row)" @mouseleave="handleCellMouseLeave($event)"><div class="cell">' + columnTemplate + '</div></td>';
	      }
	    });

	    if (!this.$options.fixed) {
	      rowTemplate += '<td class="gutter"></td>';
	    }

	    this.$options.template = '<tr v-for="row in $parent.data | orderBy $parent.sortingProperty $parent.sortingDirection" ' + '@click="handleClick($event, row)" @mouseenter="handleMouseEnter($index)" ' + ':class="{ \'current-row\': row === $parent.$parent.selected, hover: $parent.$parent.hoverRowIndex === $index }">' + rowTemplate + '</tr>';
	  },


	  filters: {
	    orderBy: function orderBy(array, sortKey, reverse) {
	      if (!sortKey || this.$parent.sortingCustom) {
	        return array;
	      }
	      var order = reverse && reverse < 0 ? -1 : 1;

	      // sort on a copy to avoid mutating original array
	      return array.slice().sort(function (a, b) {
	        if (sortKey !== '$key') {
	          if (isObject(a) && '$value' in a) a = a.$value;
	          if (isObject(b) && '$value' in b) b = b.$value;
	        }
	        a = isObject(a) ? (0, _util.getPath)(a, sortKey) : a;
	        b = isObject(b) ? (0, _util.getPath)(b, sortKey) : b;
	        return a === b ? 0 : a > b ? order : -order;
	      });
	    }
	  },

	  methods: {
	    handleCellMouseEnter: function handleCellMouseEnter(event, row) {
	      var grid = this.$parent;
	      var cell = getCell(event);

	      if (cell) {
	        var column = getColumnByCell(grid, cell);
	        var hoverState = grid.hoverState = { cell: cell, column: column, row: row };
	        grid.$emit('cell-mouse-enter', hoverState.row, hoverState.column, hoverState.cell, event);
	      }
	    },
	    handleCellMouseLeave: function handleCellMouseLeave(event) {
	      var grid = this.$parent;
	      var cell = getCell(event);

	      if (cell) {
	        var oldHoverState = grid.hoverState;
	        grid.$emit('cell-mouse-leave', oldHoverState.row, oldHoverState.column, oldHoverState.cell, event);
	      }
	    },
	    handleMouseEnter: function handleMouseEnter(index) {
	      var grid = this.$parent;
	      grid.hoverRowIndex = index;
	    },
	    handleClick: function handleClick(event, row) {
	      var grid = this.$parent;
	      var cell = getCell(event);

	      if (cell) {
	        var column = getColumnByCell(grid, cell);
	        if (column) {
	          grid.$emit('cell-click', row, column, cell, event);
	        }
	      }

	      if (grid.selectionMode === 'single') {
	        grid.selected = row;
	        grid.$emit('selection-change', row);
	      }

	      grid.$emit('row-click', row, event);
	    },
	    $getPropertyText: function $getPropertyText(row, property, columnId) {
	      var grid = this.$parent;

	      var column = getColumnById(grid, columnId);

	      if (column && column.formatter) {
	        return column.formatter(row, column);
	      }

	      var schema = grid.gridSchema;
	      if (schema) {
	        var mapping = schema.getPropertyMapping(property);
	        if (mapping) {
	          return schema.translateProperty(property, (0, _util.getPath)(row, property));
	        }
	        return schema.getPropertyText(row, property);
	      }

	      return (0, _util.getPath)(row, property);
	    }
	  }
	};
	// </script>

/***/ },
/* 240 */
/***/ function(module, exports) {

	module.exports = "\n<div _v-116a004e=\"\"></div>\n";

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(242)
	__vue_script__ = __webpack_require__(244)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules\\vue-desktop\\lib\\data\\grid-header.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(245)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./grid-header.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 242 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 243 */,
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _windDom = __webpack_require__(83);

	// <template>
	//   <div></div>
	// </template>
	//
	// <style scoped>
	// </style>
	//
	// <script type="text/ecmascript-6">
	var Vue = __webpack_require__(1);
	exports.default = {
	  props: {
	    columns: {},
	    fixed: {}
	  },

	  created: function created() {
	    var _this = this;

	    var columns = this.$options.columns.slice(0);
	    var columnsMap = {};
	    var hasColumnGroup = false;

	    columns.forEach(function (column) {
	      if (column.isColumnGroup) {
	        var childColumns = column.columns;
	        childColumns.forEach(function (childColumn) {
	          columnsMap[childColumn.id] = childColumn;
	        });

	        hasColumnGroup = true;
	      }
	      columnsMap[column.id] = column;
	    });

	    this.columnsMap = columnsMap;

	    var rowTemplate = '';
	    var colgroupsTemplate = '';

	    if (hasColumnGroup) {
	      (function () {
	        var rows = [columns, []];
	        columns.forEach(function (column) {
	          if (column.isColumnGroup) {
	            rows[1].push.apply(rows[1], column.columns);

	            colgroupsTemplate += '<colgroup name="' + column.id + '">';

	            column.columns.forEach(function (childColumn) {
	              colgroupsTemplate += '<col name="' + childColumn.id + '" width="' + childColumn.realWidth + '" />';
	            });

	            colgroupsTemplate += '</colgroup>';
	          } else {
	            colgroupsTemplate += '<colgroup name="' + column.id + '" width="' + column.realWidth + '"></colgroup>';
	          }
	        });

	        rows.forEach(function (columns, rowIndex) {
	          rowTemplate += '<tr>';

	          columns.forEach(function (column) {
	            var columnId = column.id;
	            var columnTemplate = column.headerTemplate || '{{ columnsMap[\'' + columnId + '\'].label }}';

	            if (column.isColumnGroup) {
	              var childColumns = column.columns;

	              rowTemplate += '<th class="' + columnId + ' d-grid-columngroup" colspan="' + childColumns.length + '"><div>{{ columnsMap[\'' + columnId + '\'].label }}</div></th>';
	            } else {
	              rowTemplate += '<th ' + (rowIndex === 0 ? 'rowspan="2"' : '') + ' @mousemove="handleMouseMove($event, columnsMap[\'' + columnId + '\'])" @mouseout="handleMouseOut"\n              @mousedown="handleMouseDown($event, columnsMap[\'' + columnId + '\'])" @click="$parent.handleHeaderClick(columnsMap[\'' + columnId + '\'], $event)"\n              class="' + columnId + ' {{ columnsMap[\'' + columnId + '\'].direction }}" ><div>' + columnTemplate + '</div><i class="sort-caret"></i></th>';
	            }
	          });

	          if (rowIndex === 0 && !_this.$options.fixed) {
	            rowTemplate += '<th class="gutter" rowspan="2" :style="{ width: (this.$parent.showVertScrollbar ? this.$parent.gutterWidth : 0) + \'px\' }">&nbsp;</th>';
	          }

	          rowTemplate += '</tr>';
	        });

	        _this.$options.template = colgroupsTemplate + '<thead>' + rowTemplate + '</thead>';
	      })();
	    } else {
	      columns.forEach(function (column) {
	        var columnId = column.id;
	        var columnTemplate = column.headerTemplate || '{{ columnsMap[\'' + columnId + '\'].label }}';

	        colgroupsTemplate += '<colgroup name="' + column.id + '" width="' + column.realWidth + '"></colgroup>';

	        rowTemplate += '<th @mousemove="handleMouseMove($event, columnsMap[\'' + columnId + '\'])" @mouseout="handleMouseOut"\n          @mousedown="handleMouseDown($event, columnsMap[\'' + columnId + '\'])" @click="$parent.handleHeaderClick(columnsMap[\'' + columnId + '\'], $event)"\n          class="' + columnId + ' {{ columnsMap[\'' + columnId + '\'].direction }}" ><div>' + columnTemplate + '</div><i class="sort-caret"></i></th>';
	      });

	      if (!this.$options.fixed) {
	        rowTemplate += '<th class="gutter" :style="{ width: (this.$parent.showVertScrollbar ? this.$parent.gutterWidth : 0) + \'px\' }">&nbsp;</th>';
	      }

	      this.$options.template = colgroupsTemplate + '<thead><tr>' + rowTemplate + '</tr></thead>';
	    }

	    this.columns = columns;
	    this.fixed = this.$options.fixed;
	  },


	  methods: {
	    updateColGroup: function updateColGroup() {
	      if (!this.$el) return;
	      var columnsMap = this.columnsMap;
	      var update = function update(groupEl) {
	        var name = groupEl.getAttribute('name');
	        var columnConfig = columnsMap[name];
	        if (columnConfig && !columnConfig.isColumnGroup) {
	          groupEl.setAttribute('width', columnsMap[name].realWidth);
	        }
	      };
	      var colGroups = [].slice.call(this.$el.querySelectorAll('colgroup'), 0);
	      var cols = [].slice.call(this.$el.querySelectorAll('col'), 0);

	      colGroups.forEach(update);
	      cols.forEach(update);
	    },
	    handleMouseDown: function handleMouseDown(event, column) {
	      var _this2 = this;

	      if (this.dragReadyColumn) {
	        (function () {
	          _this2.dragging = true;

	          _this2.$parent.resizeProxyVisible = true;

	          var gridEl = _this2.$parent.$el;
	          var gridLeft = gridEl.getBoundingClientRect().left;
	          var columnEl = _this2.$el.querySelector('th.' + column.id);
	          var columnRect = columnEl.getBoundingClientRect();
	          var minLeft = columnRect.left - gridLeft + 30;

	          (0, _windDom.addClass)(columnEl, 'noclick');

	          _this2.dragState = {
	            startMouseLeft: event.clientX,
	            startLeft: columnRect.right - gridLeft,
	            startColumnLeft: columnRect.left - gridLeft,
	            gridLeft: gridLeft
	          };

	          var resizeProxy = _this2.$parent.$els.resizeProxy;
	          resizeProxy.style.left = _this2.dragState.startLeft + 'px';

	          document.onselectstart = function () {
	            return false;
	          };
	          document.ondragstart = function () {
	            return false;
	          };

	          var mousemove = function mousemove(event) {
	            var deltaLeft = event.clientX - _this2.dragState.startMouseLeft;
	            var proxyLeft = _this2.dragState.startLeft + deltaLeft;

	            resizeProxy.style.left = Math.max(minLeft, proxyLeft) + 'px';
	          };

	          var mouseup = function mouseup() {
	            if (_this2.dragging) {
	              var finalLeft = parseInt(resizeProxy.style.left, 10);
	              var columnWidth = finalLeft - _this2.dragState.startColumnLeft;
	              column.width = column.realWidth = columnWidth;

	              Vue.nextTick(function () {
	                _this2.$parent.$calcColumns();
	              });

	              document.body.style.cursor = '';
	              _this2.dragging = false;
	              _this2.dragReadyColumn = null;
	              _this2.dragState = {};

	              _this2.$parent.resizeProxyVisible = false;
	            }

	            document.removeEventListener('mousemove', mousemove);
	            document.removeEventListener('mouseup', mouseup);
	            document.onselectstart = null;
	            document.ondragstart = null;

	            setTimeout(function () {
	              (0, _windDom.removeClass)(columnEl, 'noclick');
	            }, 0);
	          };

	          document.addEventListener('mousemove', mousemove);
	          document.addEventListener('mouseup', mouseup);
	        })();
	      }
	    },
	    handleMouseMove: function handleMouseMove(event, column) {
	      var target = event.target;
	      if (!column || !column.resizable) return;

	      if (!this.dragging) {
	        var rect = target.getBoundingClientRect();

	        if (rect.right - event.pageX < 8) {
	          document.body.style.cursor = 'e-resize';
	          this.dragReadyColumn = column;
	        } else if (!this.dragging) {
	          document.body.style.cursor = '';
	          this.dragReadyColumn = null;
	        }
	      }
	    },
	    handleMouseOut: function handleMouseOut() {
	      document.body.style.cursor = '';
	    }
	  },

	  data: function data() {
	    return {
	      dragReadyColumn: false,
	      dragging: false,
	      dragState: {},
	      columnsMap: null
	    };
	  }
	};
	// </script>

/***/ },
/* 245 */
/***/ function(module, exports) {

	module.exports = "\n<div _v-0e928f84=\"\"></div>\n";

/***/ },
/* 246 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"d-grid\" :class=\"{ 'd-grid-fit': fit }\" @mouseleave=\"handleMouseLeave($event)\">\n  <div class=\"hidden-columns\" v-el:hidden-columns></table><slot></slot></div>\n  <div class=\"grid-header-wrapper\">\n    <table class=\"grid-header\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" :style=\"{ width: bodyWidth ? bodyWidth + 'px' : '' }\">\n    </table>\n  </div>\n  <div class=\"grid-body-wrapper\">\n    <table class=\"grid-body\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" :style=\"{ width: bodyWidth ? bodyWidth - (showVertScrollbar ? gutterWidth : 0 ) + 'px' : '' }\">\n      <tbody></tbody>\n    </table>\n  </div>\n  <div class=\"grid-fixed-header-wrapper\" v-if=\"fixedColumnCount > 0\">\n    <table class=\"grid-header\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" :style=\"{ width: fixedBodyWidth ? fixedBodyWidth + 'px' : '' }\">\n    </table>\n  </div>\n  <div class=\"grid-fixed-body-wrapper\" v-if=\"fixedColumnCount > 0\" :style=\"{ top: headerHeight + 'px' }\">\n    <table class=\"grid-body\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" :style=\"{ width: fixedBodyWidth ? fixedBodyWidth + 'px' : '' }\">\n      <tbody></tbody>\n    </table>\n  </div>\n  <div class=\"d-grid-column-resize-proxy\" v-el:resize-proxy v-show=\"resizeProxyVisible\"></div>\n  <slot name=\"bottom\"></slot>\n</div>\n";

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(248)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules\\vue-desktop\\lib\\data\\grid-column.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(249)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./grid-column.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 248 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div><slot></slot></div>
	// </template>
	//
	// <script type="text/ecmascript-6">
	var columnIdSeed = 1;

	exports.default = {
	  props: {
	    type: {},
	    label: {},
	    property: {},
	    width: {},
	    minWidth: {},
	    htmlTemplate: {},
	    sortable: {
	      default: undefined
	    },
	    resizable: {
	      type: Boolean,
	      default: true
	    },
	    formatter: {
	      type: Function
	    }
	  },

	  data: function data() {
	    return {
	      template: null,
	      isChildColumn: false,
	      columns: []
	    };
	  },
	  created: function created() {
	    this.columnId = (this.$parent.gridId || this.$parent.columnId + '_') + 'column_' + columnIdSeed++;

	    var parent = this.$parent;
	    var grid = parent;

	    if (!parent.gridId) {
	      this.isChildColumn = true;
	      var current = parent;
	      while (current) {
	        if (current.gridId) {
	          grid = current;
	          break;
	        }
	        current = current.$parent;
	      }
	    }

	    var property = this.property;

	    if (this.sortable === undefined) {
	      this.sortable = !!property;
	    }

	    var label = this.label;
	    var schema = (grid || parent).gridSchema;

	    if (property && schema && !label) {
	      this.label = label = schema.getPropertyLabel(property);
	    }

	    var width = this.width;
	    if (width !== undefined) {
	      width = parseInt(width, 10);
	      if (isNaN(width)) {
	        width = null;
	      }
	    }

	    var minWidth = this.minWidth;
	    if (minWidth !== undefined) {
	      minWidth = parseInt(minWidth, 10);
	      if (isNaN(minWidth)) {
	        minWidth = 80;
	      }
	    } else {
	      minWidth = 80;
	    }

	    var columnId = this.columnId;
	    var type = this.type;

	    this.columnConfig = {
	      id: columnId,
	      label: label,
	      property: property,
	      minWidth: minWidth,
	      width: width,
	      realWidth: width || minWidth,
	      direction: '',
	      sortable: this.sortable,
	      resizable: this.resizable,
	      type: type,
	      formatter: this.formatter
	    };
	  },
	  beforeCompile: function beforeCompile() {
	    var options = this.$options;

	    /*      let parent = this.$parent;
	          let grid = parent;
	          let schema = (grid || parent).gridSchema;*/

	    var tagName = this.$options.el.tagName.toLowerCase();
	    var isColumnGroup = false;

	    if (options._content) {
	      var content = options._content.innerHTML;
	      if (content.indexOf('</' + tagName + '>') === -1) {
	        options._content = null;
	        this.template = content;
	      } else {
	        this.template = null;
	        isColumnGroup = true;
	      }
	    }

	    var htmlTemplate = this.htmlTemplate;
	    if (htmlTemplate) {
	      this.template = htmlTemplate;
	    }

	    var width = this.width;
	    var type = this.type;
	    var property = this.property;
	    var columnId = this.columnId;
	    var template = this.template;
	    var headerTemplate = void 0;
	    var columnConfig = this.columnConfig;

	    if (type === 'selection') {
	      headerTemplate = '<input type="checkbox" v-model="$parent.isAllSelected" :false-value="false" @click="$parent.toggleAllSelection($event)" />';
	      template = '<input type="checkbox" @change="$parent.$parent.toggleSelection($event, row)" v-model="row.$selected"/>';
	      if (!width) {
	        columnConfig.minWidth = columnConfig.width = columnConfig.realWidth = 30;
	        columnConfig.resizable = false;
	      }
	    } else if (type === 'index') {
	      headerTemplate = '';
	      template = '{{ $index + 1 }}';
	      if (!width) {
	        columnConfig.minWidth = columnConfig.width = columnConfig.realWidth = 30;
	        columnConfig.resizable = false;
	      }
	    } /*else if(type === 'operate'){
	      template = "<d-button @click='$parent.$parent.operate($event,row)'>壁纸管理</d-button>"
	              +"<d-button @click='$parent.$parent.operate($event,row)'>编辑</d-button>"
	              +"<d-button @click='$parent.$parent.operate($event,row)'>删除</d-button>"
	      }else if(type === 'operate2'){
	      template = "<d-button @click='$parent.$parent.operate($event,row)'>管理文件</d-button>"
	              +"<d-button @click='$parent.$parent.operate($event,row)'>删除</d-button>"
	      }else if(type === 'operate3'){
	      template = "<d-button @click='$parent.$parent.operate($event,row)'>预览</d-button>"
	              +"<d-button @click='$parent.$parent.operate($event,row)'>编辑</d-button>"
	              +"<d-button @click='$parent.$parent.operate($event,row)'>删除</d-button>"
	      }*/else if (type === "example") {
	        //        template=`<span style="display:inline-block;background:{{row.example}};width:10px;height:10px"></span>`
	      } else {
	        if ((!template || /^\s*$/.test(template)) && property) {
	          template = '{{ $getPropertyText(row, \'' + property + '\', \'' + columnId + '\') }}';
	        }
	      }

	    columnConfig.template = template;
	    if (headerTemplate !== undefined) {
	      columnConfig.headerTemplate = headerTemplate;
	    }
	    columnConfig.isColumnGroup = isColumnGroup;
	  },
	  detached: function detached() {
	    if (!this.$parent) return;
	    var columns = this.$parent.columns;
	    if (columns) {
	      var columnId = this.columnId;
	      for (var i = 0, j = columns.length; i < j; i++) {
	        var column = columns[i];

	        if (column.id === columnId) {
	          columns.splice(i, 1);
	          break;
	        }
	      }
	    }

	    if (this.isChildColumn) {
	      if (this.$parent.$parent.$ready) {
	        this.$parent.$parent.debouncedReRender();
	      }
	    } else {
	      if (this.$parent.$ready) {
	        this.$parent.debouncedReRender();
	      }
	    }
	  },


	  watch: {
	    label: function label(newVal) {
	      if (this.columnConfig) {
	        this.columnConfig.label = newVal;
	      }
	    },
	    property: function property(newVal) {
	      if (this.columnConfig) {
	        this.columnConfig.property = newVal;
	      }
	    }
	  },

	  ready: function ready() {
	    var parent = this.$parent;
	    var columnConfig = this.columnConfig;
	    var columnIndex = void 0;
	    if (!this.isChildColumn) {
	      columnIndex = [].indexOf.call(parent.$els.hiddenColumns.children, this.$el);
	    } else {
	      columnIndex = [].indexOf.call(parent.$el.children, this.$el);
	    }
	    parent.columns.splice(columnIndex, 0, columnConfig);

	    if (this.isChildColumn) {
	      parent.columnConfig.columns = parent.columns;

	      if (parent.$parent.$ready) {
	        parent.$parent.debouncedReRender();
	      }
	    } else {
	      if (parent.$ready) {
	        parent.debouncedReRender();
	      }
	    }
	  }
	};
	// </script>

/***/ },
/* 249 */
/***/ function(module, exports) {

	module.exports = "\n<div><slot></slot></div>\n";

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(251)
	__vue_script__ = __webpack_require__(253)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules\\vue-desktop\\lib\\data\\tree.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(259)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./tree.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 251 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 252 */,
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="tree">
	//     <tree-node v-for="child in data" :data="child"></tree-node>
	//   </div>
	// </template>
	//
	// <style scoped>
	//   .tree {
	//     overflow: auto;
	//     cursor: default;
	//   }
	// </style>
	//
	// <script type="text/ecmascript-6">
	exports.default = {
	  created: function created() {
	    this.$isTree = true;
	  },


	  components: {
	    TreeNode: __webpack_require__(254)
	  },

	  computed: {
	    children: {
	      set: function set(value) {
	        this.data = value;
	      },
	      get: function get() {
	        return this.data;
	      }
	    }
	  },

	  methods: {
	    getCheckedNodes: function getCheckedNodes(leafNodeOnly, exceptIndeterminate) {
	      var checkedNodes = [];
	      var acceptable = exceptIndeterminate ? [true] : [true, 'half'];
	      var walk = function walk(node) {
	        var children = node.$children;
	        children.forEach(function (child) {
	          if (leafNodeOnly) {
	            if (~acceptable.indexOf(child.isChecked) && !child.hasChild) {
	              checkedNodes.push(child.data);
	            }
	          } else {
	            if (~acceptable.indexOf(child.isChecked)) {
	              checkedNodes.push(child.data);
	            }
	          }

	          walk(child);
	        });
	      };

	      walk(this);

	      return checkedNodes;
	    }
	  },

	  ready: function ready() {
	    var _this = this;

	    if (this.levelConfig && this.levelConfig.lazy !== undefined) {
	      var loadFn = this.levelConfig.load;
	      if (!loadFn) return;
	      loadFn(this, function (callback) {
	        if (callback) {
	          callback.call(_this);
	        }
	      });
	    }
	  },


	  props: {
	    data: {
	      type: Array
	    },
	    levelConfig: {},
	    lazyRender: {
	      type: Boolean,
	      default: true
	    }
	  }
	};
	// </script>

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(255)
	__vue_script__ = __webpack_require__(257)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules\\vue-desktop\\lib\\data\\tree-node.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(258)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./tree-node.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 255 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 256 */,
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="tree-node" :class="{ expanded: childrenRendered && expanded }">
	//     <div class="tree-node-content">
	//       <span class="expand-icon" :class="{ leafnode: !hasChild, expanded: hasChild && expanded }" @click="handleExpandIconClick"></span>
	//       <input type="checkbox" v-model="isChecked" @change="handleCheckChange()" v-el:input />
	//       <span class="icon {{icon}}" v-if="icon"></span><span class="text">{{ label }}</span>
	//     </div>
	//     <div class="tree-node-children" v-if="!lazyRenderChildren || (lazyRenderChildren && childrenRendered)" v-show="expanded" transition="collapse">
	//       <d-tree-node v-for="child in children || childrenData" :data="child"></d-tree-node>
	//     </div>
	//   </div>
	// </template>
	//
	// <style>
	//   .tree-node {
	//     white-space: nowrap;
	//   }
	//
	//   .tree-node .expand-icon {
	//     display: inline-block;
	//     cursor: pointer;
	//     width: 0;
	//     height: 0;
	//     vertical-align: top;
	//     margin-top: 5px;
	//     margin-right: 3px;
	//     border: 5px solid transparent;
	//
	//     border-right-width: 0;
	//     border-left-color: #333;
	//     border-left-width: 7px;
	//   }
	//
	//   .tree-node .expand-icon:hover {
	//     border-left-color: #999;
	//   }
	//
	//   .tree-node .expand-icon.expanded {
	//     border: 5px solid transparent;
	//     border-bottom-width: 0;
	//     border-top-color: #333;
	//     border-top-width: 7px;
	//     margin-top: 7px;
	//     margin-right: 0;
	//   }
	//
	//   .tree-node .expand-icon.expanded:hover {
	//     border-top-color: #999;
	//   }
	//
	//   .tree-node .expand-icon.leafnode {
	//     border-color: transparent;
	//     cursor: default;
	//   }
	//
	//   .tree-node .text {
	//     font-size: 14px;
	//     vertical-align: middle;
	//   }
	//
	//   .tree-node .icon {
	//     display: inline-block;
	//     width: 18px;
	//     height: 18px;
	//     vertical-align: middle;
	//     margin-right: 2px;
	//   }
	//
	//   .tree-node .tree-node-content {
	//     padding: 2px;
	//     cursor: default;
	//   }
	//
	//   .tree-node .tree-node-content > input {
	//     vertical-align: top;
	//     margin-top: 5px;
	//   }
	//
	//   .tree-node.current > .tree-node-content {
	//     /*color: red;*/
	//   }
	//
	//   .tree-node > .tree-node-children {
	//     overflow: hidden;
	//     background-color: transparent;
	//     padding-left: 16px;
	//     display: none;
	//   }
	//
	//   .tree-node.expanded > .tree-node-children {
	//     display: block;
	//   }
	// </style>
	//
	// <script type="text/ecmascript-6">
	var Vue = __webpack_require__(1);

	exports.default = {
	  name: 'd-tree-node',

	  props: {
	    checked: {},
	    data: {
	      type: Object
	    }
	  },

	  computed: {
	    needLoadData: function needLoadData() {
	      return this.lazyload === true && !this.childrenLoaded && this.loadFn;
	    },
	    hasChild: function hasChild() {
	      var children = this.children || this.childrenData;
	      if (!this.lazyload || this.lazyload === true && this.childrenLoaded === true) {
	        return children && children.length > 0;
	      }
	      return true;
	    },
	    label: function label() {
	      var data = this.data;
	      if (!data) return '';
	      var levelConfig = this.levelConfig;
	      var labelProperty;
	      if (levelConfig) {
	        labelProperty = levelConfig.labelProperty;
	      }
	      if (!labelProperty) {
	        return data.label || data.name;
	      }
	      return data[labelProperty];
	    },


	    isChecked: {
	      get: function get() {
	        if (this.checked !== undefined) return this.checked;

	        var data = this.data;
	        if (!data) return false;
	        var levelConfig = this.levelConfig;
	        var checkedProperty;

	        if (levelConfig) {
	          checkedProperty = levelConfig.checkedProperty;

	          if (checkedProperty) {
	            this.checked = !!data[checkedProperty];
	          }
	        }

	        return this.checked;
	      },
	      set: function set(value) {
	        var data = this.data;
	        if (!data) return;
	        var levelConfig = this.levelConfig;
	        var checkedProperty;

	        if (levelConfig) {
	          checkedProperty = levelConfig.checkedProperty;

	          if (checkedProperty) {
	            this.checked = value;
	            data[checkedProperty] = value !== false;
	            return;
	          }
	        }

	        this.checked = value;
	      }
	    },

	    icon: function icon() {
	      var data = this.data;
	      if (!data) return '';
	      var levelConfig = this.levelConfig;
	      var iconProperty;
	      if (levelConfig) {
	        iconProperty = levelConfig.iconProperty;

	        if (!iconProperty) {
	          if (this.hasChild) {
	            return levelConfig.icon;
	          } else {
	            return levelConfig.leafIcon || levelConfig.icon;
	          }
	        }
	      }
	      return data[iconProperty];
	    },


	    children: {
	      get: function get() {
	        var data = this.data;
	        if (!data) return null;
	        var levelConfig = this.levelConfig;
	        var childrenProperty = 'children';
	        if (levelConfig) {
	          childrenProperty = levelConfig.childrenProperty || 'children';
	        }
	        if (data[childrenProperty] === undefined) {
	          data[childrenProperty] = null;
	        }
	        return data[childrenProperty];
	      },
	      set: function set(value) {
	        var data = this.data;
	        if (!data) return;
	        var levelConfig = this.levelConfig;
	        var childrenProperty = 'children';
	        if (levelConfig) {
	          childrenProperty = levelConfig.childrenProperty || 'children';
	        }
	        this.childrenData = data[childrenProperty] = value;
	      }
	    }
	  },

	  methods: {
	    handleExpandIconClick: function handleExpandIconClick() {
	      var _this = this;

	      // debugger;
	      // Only work on lazy load data.
	      if (this.needLoadData) {
	        this.loadIfNeeded(function () {
	          _this.expanded = true;
	          _this.childrenRendered = true;
	        });
	      } else {
	        if (!this.expanded) {
	          this.expanded = true;
	          this.childrenRendered = true;
	        } else {
	          this.expanded = false;
	          this.childrenRendered = true;
	        }
	      }
	    },
	    handleCheckChange: function handleCheckChange() {
	      var value = this.checked;

	      this.setChecked(value);

	      var children = this.$children;
	      for (var i = 0, j = children.length; i < j; i++) {
	        var child = children[i];
	        child.setChecked(value, true);
	      }
	    },
	    loadIfNeeded: function loadIfNeeded(callback) {
	      var _this2 = this;

	      if (this.lazyload === true && !this.childrenLoaded && this.loadFn) {
	        this.childrenLoaded = 'loading';

	        var loadFn = this.loadFn;

	        loadFn(this, function () {
	          _this2.childrenLoaded = true;
	          if (_this2.lazyRenderChildren) {
	            if (!_this2.childrenRendered) {
	              _this2.childrenRendered = true;
	            }
	            if (callback) {
	              callback.call(_this2);
	            }
	          }
	        });
	      } else {
	        if (this.lazyRenderChildren) {
	          if (!this.childrenRendered) {
	            this.childrenRendered = true;
	            if (callback) {
	              callback.call(this);
	            }
	          }
	        }
	      }
	    },
	    setChecked: function setChecked(value, deep) {
	      var _this3 = this;

	      // Only work on lazy load data.
	      this.loadIfNeeded(function () {
	        var children = _this3.$children || [];
	        Vue.nextTick(function () {
	          for (var i = 0, j = children.length; i < j; i++) {
	            var child = children[i];
	            child.setChecked(value !== false);
	          }
	        });
	      });

	      var input = this.$els.input;
	      if (value === 'half') {
	        input.indeterminate = true;
	        input.checked = false;
	      } else {
	        input.indeterminate = false;
	        input.checked = !!value;
	      }

	      this.isChecked = value;
	      var i, j;

	      if (deep) {
	        var children = this.$children;
	        for (i = 0, j = children.length; i < j; i++) {
	          var child = children[i];
	          child.setChecked(value !== false, deep);
	        }
	      }

	      var parent = this.$parent;

	      if (parent.level === undefined) return;

	      var siblings = parent.$children;

	      var all = true;
	      var none = true;

	      for (i = 0, j = siblings.length; i < j; i++) {
	        var sibling = siblings[i];
	        if (sibling.checked !== true) {
	          all = false;
	        }
	        if (sibling.checked !== false) {
	          none = false;
	        }
	      }

	      if (all) {
	        parent.setChecked(true);
	      } else if (!all && !none) {
	        parent.setChecked('half');
	      } else if (none) {
	        parent.setChecked(false);
	      }
	    }
	  },

	  created: function created() {
	    var parent = this.$parent;
	    if (parent.$isTree) {
	      this.level = 0;
	      this.$tree = parent;
	      this.levelConfig = parent.levelConfig;
	      if (this.levelConfig.recursive) {
	        this.levelConfig.children = this.levelConfig;
	      }
	    } else {
	      this.level = parent.level + 1;
	      this.$tree = parent.$tree;
	      if (parent.levelConfig) {
	        this.levelConfig = parent.levelConfig.children;
	        if (this.levelConfig && this.levelConfig.recursive) {
	          this.levelConfig.children = this.levelConfig;
	        }
	      }
	    }

	    var levelConfig = this.levelConfig;
	    if (levelConfig) {
	      var children = levelConfig.children;
	      if (children && children.lazy !== undefined) {
	        this.lazyload = true;
	        this.loadFn = children.load;
	      }
	    }

	    if (!this.$tree) {
	      console.warn('Can not find node\'s tree.');
	    } else {
	      this.lazyRenderChildren = this.$tree.lazyRender;
	      if (this.levelConfig && this.levelConfig.lazy === false) {
	        this.lazyRenderChildren = false;
	      }
	    }
	  },
	  ready: function ready() {
	    var _this4 = this;

	    if (this.levelConfig) {
	      var lazy = this.levelConfig.lazy;
	      if (lazy === false && this.loadFn) {
	        this.loadIfNeeded();
	      }
	    }

	    if (this.isChecked) {
	      Vue.nextTick(function () {
	        _this4.setChecked(true);
	      });
	    }
	  },
	  data: function data() {
	    return {
	      level: 0,
	      childrenData: [],
	      childrenLoaded: false,
	      expanded: false,
	      levelConfig: null,
	      $tree: null,
	      $item: null,
	      lazyRenderChildren: true,
	      childrenRendered: false
	    };
	  },


	  transitions: {
	    collapse: __webpack_require__(136).default
	  }
	};
	// </script>

/***/ },
/* 258 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"tree-node\" :class=\"{ expanded: childrenRendered && expanded }\">\n  <div class=\"tree-node-content\">\n    <span class=\"expand-icon\" :class=\"{ leafnode: !hasChild, expanded: hasChild && expanded }\" @click=\"handleExpandIconClick\"></span>\n    <input type=\"checkbox\" v-model=\"isChecked\" @change=\"handleCheckChange()\" v-el:input />\n    <span class=\"icon {{icon}}\" v-if=\"icon\"></span><span class=\"text\">{{ label }}</span>\n  </div>\n  <div class=\"tree-node-children\" v-if=\"!lazyRenderChildren || (lazyRenderChildren && childrenRendered)\" v-show=\"expanded\" transition=\"collapse\">\n    <d-tree-node v-for=\"child in children || childrenData\" :data=\"child\"></d-tree-node>\n  </div>\n</div>\n";

/***/ },
/* 259 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"tree\" _v-01b04384=\"\">\n  <tree-node v-for=\"child in data\" :data=\"child\" _v-01b04384=\"\"></tree-node>\n</div>\n";

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(261)
	__vue_script__ = __webpack_require__(263)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules\\vue-desktop\\lib\\data\\pagination.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(264)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./pagination.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 261 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 262 */,
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="d-pagination">
	//   </div>
	// </template>
	//
	// <style>
	//   .d-pagination {
	//     padding: 2px 5px;
	//     background: #fff;
	//   }
	//
	//   .d-pagination span,
	//   .d-pagination button {
	//     display: inline-block;
	//     font-size: 14px;
	//     min-width: 26px;
	//     height: 28px;
	//     line-height: 28px;
	//     vertical-align: top;
	//     box-sizing: border-box;
	//   }
	//
	//   .d-pagination button {
	//     border: none;
	//     padding: 0 6px;
	//     background: transparent;
	//   }
	//
	//   .d-pagination button:focus {
	//     outline: none;
	//   }
	//
	//   .d-pagination button.disabled {
	//     color: #bbb;
	//     cursor: default;
	//   }
	//
	//   .d-pagination span.d-icon,
	//   .d-pagination button.d-icon {
	//     text-align: center;
	//     cursor: pointer;
	//   }
	//
	//   .d-pagination .pager {
	//     border-radius: 3px;
	//     user-select: none;
	//     list-style: none;
	//     display: inline-block;
	//     vertical-align: top;
	//     font-size: 0;
	//     padding: 0;
	//   }
	//
	//   .d-pagination .pager li {
	//     border: 1px solid #dddddd;
	//     background: #fff;
	//     vertical-align: top;
	//     margin-left: -1px;
	//     display: inline-block;
	//     font-size: 14px;
	//     min-width: 26px;
	//     height: 28px;
	//     line-height: 28px;
	//     cursor: pointer;
	//     box-sizing: border-box;
	//     text-align: center;
	//   }
	//
	//   .d-pagination .pager li.number:hover {
	//     margin-left: -1px;
	//   }
	//
	//   .d-pagination .pager li.active {
	//     background-color: #f4f4f4;
	//     cursor: default;
	//   }
	//
	//   .d-pagination .pager li.ellipsis {
	//     cursor: default;
	//   }
	//
	//   .d-pagination select {
	//     min-height: 28px;
	//     height: 28px;
	//     width: 50px;
	//     background: transparent;
	//     border: 1px solid#ddd;
	//   }
	//
	//   .d-pagination-info {
	//   }
	//
	//   .d-pagination-rightwrapper {
	//     float: right;
	//   }
	//
	//   .d-pagination-editor {
	//     border: 1px solid #e5e6e7;
	//     border-radius: 2px;
	//     line-height: 18px;
	//     padding: 4px 2px;
	//     width: 30px;
	//     text-align: center;
	//     margin: 0 3px;
	//     box-sizing: border-box;
	//     transition: border 0.3s;
	//   }
	//
	//   .d-pagination-editor:focus {
	//     outline: none;
	//     border-color: #1ab394;
	//   }
	// </style>
	//
	// <script type="text/ecmascript-6">
	__webpack_require__(91);
	var Vue = __webpack_require__(1);

	var TEMPLATE_MAP = {
	  first: '<span is="first"></span>',
	  prev: '<span is="prev"></span>',
	  manual: '<span is="manual"></span>',
	  pager: '<span is="pager" :current-page.sync="currentPage" :page-count.sync="pageCount"></span>',
	  next: '<span is="next"></span>',
	  last: '<span is="last"></span>',
	  list: '<span is="list"></span>',
	  slot: '<slot></slot>',
	  info: '<span is="info"></span>'
	};

	exports.default = {
	  props: {
	    pageSize: {
	      type: Number,
	      default: 10
	    },

	    itemCount: {
	      type: Number,
	      default: 0
	    },

	    currentPage: {
	      type: Number,
	      default: 1
	    },

	    layout: {
	      default: 'first, prev, manual, next, last, slot, ->, info'
	    },

	    pageSizeList: {
	      type: Array,
	      default: function _default() {
	        return [10, 20, 30, 40, 50, 100];
	      }
	    }
	  },

	  components: {
	    Prev: {
	      template: '<button class="d-icon d-icon-arrow-left" :class="{ disabled: $parent.currentPage <= 1 }" @click="$parent.prev()"></button>'
	    },

	    Next: {
	      template: '<button class="d-icon d-icon-arrow-right" @click="$parent.next()" :class="{ disabled: $parent.currentPage === $parent.pageCount }"></button>'
	    },

	    First: {
	      template: '<button class="d-icon d-icon-first" :class="{ disabled: $parent.currentPage <= 1 }" @click="$parent.first()"></button>'
	    },

	    Last: {
	      template: '<button class="d-icon d-icon-last"  :class="{ disabled: $parent.currentPage === $parent.pageCount }" @click="$parent.last()"></button>'
	    },

	    List: {
	      template: '<select v-model="$parent.pageSize"><option v-for="item in $parent.pageSizeList" value="{{item}}">{{item}}</option></select>'
	    },

	    Manual: {
	      data: function data() {
	        return {
	          oldValue: null
	        };
	      },


	      methods: {
	        handleFocus: function handleFocus(event) {
	          this.oldValue = event.target.value;
	        },
	        handleChange: function handleChange(event) {
	          var target = event.target;
	          if (target.value !== this.oldValue && Number(target.value) === this.$parent.currentPage) {
	            this.$parent.$emit('current-change', this.$parent.currentPage);
	          }

	          this.oldValue = null;
	        }
	      },
	      template: '<span>第<input class="d-pagination-editor" number v-model="$parent.currentPage" @change="handleChange($event)" @focus="handleFocus($event)" style="width: 30px;" lazy />页, 共 {{$parent.pageCount}} 页</span>'
	    },

	    Info: {
	      template: '<span class="d-pagination-info">显示第 {{$parent.startRecordIndex}} - {{ $parent.endRecordIndex }} 条数据, 共 {{$parent.itemCount}} 条记录 </span>'
	    },

	    Pager: {
	      template: '<ul @click="onPagerClick($event)" class="pager">\n        <li :class="{ active: currentPage === 1 }" v-show="pageCount > 0" class="number">1</li>\n        <li class="ellipsis" v-show="showPrevMore">...</li>\n        <li v-for="pager in pagers" :class="{ active: $parent.currentPage === pager }" class="number">{{ pager }}</li>\n        <li class="ellipsis" v-show="showNextMore">...</li>\n        <li :class="{ active: currentPage === pageCount }" class="number" v-show="pageCount > 1">{{ pageCount }}</li>\n      </ul>',

	      props: {
	        currentPage: {
	          type: Number
	        },
	        pageCount: {
	          type: Number
	        }
	      },

	      methods: {
	        onPagerClick: function onPagerClick(event) {
	          var target = event.target;
	          if (target.tagName === 'UL') {
	            return;
	          }

	          var newPage = Number(event.target.textContent);
	          var pageCount = this.pageCount;
	          var currentPage = this.currentPage;

	          if (target.className === 'ellipsis') {
	            return;
	          }

	          if (!isNaN(newPage)) {
	            if (newPage < 1) {
	              newPage = 1;
	            }

	            if (newPage > pageCount) {
	              newPage = pageCount;
	            }
	          }

	          this.currentPage = newPage;

	          if (newPage !== currentPage) {
	            this.$parent.$emit('current-change', newPage);
	          }
	        }
	      },

	      computed: {
	        pagers: function pagers() {
	          var pagerCount = 5;

	          var currentPage = Number(this.currentPage);
	          var pageCount = Number(this.pageCount);

	          var showPrevMore = false;
	          var showNextMore = false;

	          if (pageCount > pagerCount) {
	            if (currentPage > pagerCount - 2) {
	              showPrevMore = true;
	            }

	            if (currentPage < pageCount - 2) {
	              showNextMore = true;
	            }
	          }

	          var array = [];
	          var i;

	          if (showPrevMore && !showNextMore) {
	            for (i = pageCount - 3; i < pageCount; i++) {
	              array.push(i);
	            }
	          } else if (!showPrevMore && showNextMore) {
	            for (i = 2; i < pagerCount; i++) {
	              array.push(i);
	            }
	          } else if (showPrevMore && showNextMore) {
	            for (i = currentPage - 1; i <= currentPage + 1; i++) {
	              array.push(i);
	            }
	          } else {
	            for (i = 2; i < pageCount; i++) {
	              array.push(i);
	            }
	          }

	          this.showPrevMore = showPrevMore;
	          this.showNextMore = showNextMore;

	          return array;
	        }
	      },

	      data: function data() {
	        return {
	          current: null,
	          showPrevMore: false,
	          showNextMore: false
	        };
	      }
	    }
	  },

	  methods: {
	    prev: function prev() {
	      var oldPage = this.currentPage;
	      var newVal = this.currentPage - 1;
	      this.currentPage = this.getValidCurrentPage(newVal);

	      if (this.currentPage !== oldPage) {
	        this.$emit('current-change', this.currentPage);
	      }
	    },
	    next: function next() {
	      var oldPage = this.currentPage;
	      var newVal = this.currentPage + 1;
	      this.currentPage = this.getValidCurrentPage(newVal);

	      if (this.currentPage !== oldPage) {
	        this.$emit('current-change', this.currentPage);
	      }
	    },
	    first: function first() {
	      var oldPage = this.currentPage;
	      var newVal = 1;
	      this.currentPage = this.getValidCurrentPage(newVal);

	      if (this.currentPage !== oldPage) {
	        this.$emit('current-change', this.currentPage);
	      }
	    },
	    last: function last() {
	      var oldPage = this.currentPage;
	      var newVal = this.pageCount;
	      this.currentPage = this.getValidCurrentPage(newVal);

	      if (this.currentPage !== oldPage) {
	        this.$emit('current-change', this.currentPage);
	      }
	    },
	    getValidCurrentPage: function getValidCurrentPage(value) {
	      value = parseInt(value, 10);

	      var resetValue;
	      if (value < 1) {
	        resetValue = this.pageCount > 0 ? 1 : 0;
	      } else if (value > this.pageCount) {
	        resetValue = this.pageCount;
	      }

	      if (resetValue === undefined && isNaN(value)) {
	        value = this.pageCount > 0 ? 1 : 0;
	      }

	      return resetValue === undefined ? value : resetValue;
	    }
	  },

	  created: function created() {
	    var template = '<div class="d-pagination">';
	    var layout = this.$options.layout || this.layout || '';

	    var components = layout.split(',').map(function (item) {
	      return item.trim();
	    });

	    var haveRightWrapper = false;

	    components.forEach(function (component) {
	      if (component === '->') {
	        haveRightWrapper = true;
	        template += '<div class="d-pagination-rightwrapper">';
	      } else {
	        template += TEMPLATE_MAP[component];
	      }
	    });

	    if (haveRightWrapper) {
	      template += '</div>';
	    }
	    template += '</div>';

	    this.$options.template = template;
	  },


	  computed: {
	    pageCount: function pageCount() {
	      return Math.ceil(this.itemCount / this.pageSize);
	    },
	    startRecordIndex: function startRecordIndex() {
	      var result = (this.currentPage - 1) * this.pageSize + 1;
	      return result > 0 ? result : 0;
	    },
	    endRecordIndex: function endRecordIndex() {
	      var result = this.currentPage * this.pageSize;
	      return result > this.itemCount ? this.itemCount : result;
	    }
	  },

	  watch: {
	    pageCount: function pageCount(newVal) {
	      if (newVal > 0 && this.currentPage === 0) {
	        this.currentPage = 1;
	      } else if (this.currentPage > newVal) {
	        this.currentPage = newVal;
	      }
	    },
	    currentPage: function currentPage(newVal, oldVal) {
	      var _this = this;

	      newVal = parseInt(newVal, 10);

	      if (isNaN(newVal)) {
	        newVal = oldVal || 1;
	      } else {
	        newVal = this.getValidCurrentPage(newVal);
	      }

	      if (newVal !== undefined) {
	        Vue.nextTick(function () {
	          _this.currentPage = newVal;
	        });
	      }
	    }
	  },

	  ready: function ready() {
	    // this.currentPage = this.getValidCurrentPage(this.currentPage);
	  }
	};
	// </script>

/***/ },
/* 264 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"d-pagination\">\n</div>\n";

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _form = __webpack_require__(266);

	var _form2 = _interopRequireDefault(_form);

	var _radio = __webpack_require__(271);

	var _radio2 = _interopRequireDefault(_radio);

	var _textEditor = __webpack_require__(274);

	var _textEditor2 = _interopRequireDefault(_textEditor);

	var _checkbox = __webpack_require__(291);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _tags = __webpack_require__(296);

	var _tags2 = _interopRequireDefault(_tags);

	var _radioGroup = __webpack_require__(301);

	var _radioGroup2 = _interopRequireDefault(_radioGroup);

	var _datePicker = __webpack_require__(278);

	var _datePicker2 = _interopRequireDefault(_datePicker);

	var _timePicker = __webpack_require__(283);

	var _timePicker2 = _interopRequireDefault(_timePicker);

	var _select = __webpack_require__(306);

	var _select2 = _interopRequireDefault(_select);

	var _selectOption = __webpack_require__(310);

	var _selectOption2 = _interopRequireDefault(_selectOption);

	var _field = __webpack_require__(316);

	var _field2 = _interopRequireDefault(_field);

	var _text = __webpack_require__(322);

	var _text2 = _interopRequireDefault(_text);

	var _label = __webpack_require__(327);

	var _label2 = _interopRequireDefault(_label);

	var _check = __webpack_require__(332);

	var _check2 = _interopRequireDefault(_check);

	var _select3 = __webpack_require__(337);

	var _select4 = _interopRequireDefault(_select3);

	var _radio3 = __webpack_require__(342);

	var _radio4 = _interopRequireDefault(_radio3);

	var _checkGroup = __webpack_require__(347);

	var _checkGroup2 = _interopRequireDefault(_checkGroup);

	var _upload = __webpack_require__(352);

	var _upload2 = _interopRequireDefault(_upload);

	var _upload22 = __webpack_require__(357);

	var _upload222 = _interopRequireDefault(_upload22);

	var _upload3 = __webpack_require__(362);

	var _upload32 = _interopRequireDefault(_upload3);

	var _uploadppt = __webpack_require__(367);

	var _uploadppt2 = _interopRequireDefault(_uploadppt);

	var _colorChs = __webpack_require__(372);

	var _colorChs2 = _interopRequireDefault(_colorChs)

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  Form: _form2.default,

	  DatePicker: _datePicker2.default,
	  TimePicker: _timePicker2.default,

	  Select: _select2.default,
	  Option: _selectOption2.default,
	  Tags: _tags2.default,
	  TextEditor: _textEditor2.default,
	  Checkbox: _checkbox2.default,
	  Radio: _radio2.default,
	  RadioGroup: _radioGroup2.default,

	  Field: _field2.default,
	  TextField: _text2.default,
	  LabelField: _label2.default,
	  CheckboxField: _check2.default,
	  SelectField: _select4.default,
	  RadiogroupField: _radio4.default,
	  CheckgroupField: _checkGroup2.default,

	  Upload: _upload2.default,
	  Upload2: _upload222.default,
	  Upload3:_upload32.default,
	  Uploadppt:_uploadppt2.default,

	  Colorchs:_colorChs2.default
	};

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(267)
	__vue_script__ = __webpack_require__(269)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules\\vue-desktop\\lib\\form\\form.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(270)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./form.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 267 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 268 */,
/* 269 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="d-form"><slot></slot></div>
	// </template>
	//
	// <style>
	//   .d-form::after {
	//     content: "";
	//     clear: both;
	//     display: block;
	//   }
	//
	//   .d-form > .d-field {
	//     float: left;
	//   }
	// </style>
	//
	// <script type="text/ecmascript-6">
	exports.default = {
	  created: function created() {
	    this.$isForm = true;
	  },


	  watch: {
	    model: function model() {
	      this.$broadcast('formModelChange');
	    }
	  },

	  props: {
	    cols: {
	      type: Number,
	      default: 1
	    },
	    schema: {},
	    model: {},
	    labelWidth: {},
	    labelSuffix: {},
	    editorWidth: {},
	    hideHint: {
	      type: Boolean,
	      default: false
	    },
	    ppturl: {}
	  },

	  computed: {
	    fieldClass: function fieldClass() {
	      var cols = this.cols;
	      if (cols >= 1 && cols <= 6) {
	        return 'd-cell-1-' + cols;
	      }
	      return '';
	    }
	  }
	};
	// </script>

/***/ },
/* 270 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"d-form\"><slot></slot></div>\n";

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(272)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules\\vue-desktop\\lib\\form\\radio.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(273)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./radio.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 272 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <input type="radio" v-el:editor :value.once="value" :id.once="id" :name.once="$parent.$radioName" @change="onChange($event, this)"/><label :for.once="id"><slot></slot></label>
	// </template>
	//
	// <script type="text/ecmascript-6">
	var seed = 1;

	exports.default = {
	  props: ['value'],

	  created: function created() {
	    this.id = 'd_radio_' + seed++;
	  },


	  methods: {
	    onChange: function onChange(event, self) {
	      var target = event.target;
	      if (target.checked && self.$parent.$setValue) {
	        self.$parent.$setValue(self.value);
	      }
	    }
	  }
	};
	// </script>

/***/ },
/* 273 */
/***/ function(module, exports) {

	module.exports = "\n<input type=\"radio\" v-el:editor :value.once=\"value\" :id.once=\"id\" :name.once=\"$parent.$radioName\" @change=\"onChange($event, this)\"/><label :for.once=\"id\"><slot></slot></label>\n";

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(275)
	__vue_script__ = __webpack_require__(277)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules\\vue-desktop\\lib\\form\\text-editor.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(290)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./text-editor.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 275 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 276 */,
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _util = __webpack_require__(5);

	var _dropdown = __webpack_require__(174);

	var _dropdown2 = _interopRequireDefault(_dropdown);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//   <span class="d-text-editor {{size}} {{ haveTrigger ? 'have-trigger' : '' }} {{ pickerVisible ? 'active' : '' }}">
	//     <editor></editor>
	//     <span @click="toggleDatePicker()" class="d-text-editor-trigger d-icon d-icon-date-trigger" v-if="haveTrigger"></span>
	//   </span>
	// </template>
	//
	// <style>
	//   .d-text-editor {
	//     position: relative;
	//     display: inline-block;
	//     box-sizing: border-box;
	//     height: 28px;
	//   }
	//
	//   .d-text-editor.have-trigger input {
	//     padding-right: 20px;
	//   }
	//
	//   .d-text-editor input,
	//   .d-text-editor textarea {
	//     width: 100%;
	//   }
	//
	//   .d-text-editor .d-text-editor-trigger {
	//     cursor: pointer;
	//     position: absolute;
	//     display: inline-block;
	//     width: 20px;
	//     right: 0;
	//     top: 0;
	//     bottom: 0;
	//     line-height: 28px;
	//   }
	//
	//   .d-text-editor input {
	//     border: 1px solid #e5e6e7;
	//     border-radius: 2px;
	//     line-height: 18px;
	//     padding: 4px 2px;
	//     width: 100%;
	//     box-sizing: border-box;
	//     transition: border 0.3s;
	//   }
	//
	//   .d-text-editor input::-webkit-input-placeholder {
	//     color: #bbb;
	//     font-size: 12px;
	//   }
	//
	//   .d-text-editor input::-moz-placeholder {
	//     color: #bbb;
	//     font-size: 12px;
	//   }
	//
	//   .d-text-editor input:-ms-input-placeholder {
	//     color: #bbb;
	//     font-size: 12px;
	//   }
	//
	//   .d-text-editor input::placeholder {
	//     color: #bbb;
	//     font-size: 12px;
	//   }
	//
	//   .d-text-editor textarea {
	//     border: 1px solid #e5e6e7;
	//     border-radius: 2px;
	//     box-sizing: border-box;
	//     width: 100%;
	//     height: 100%;
	//     resize: none;
	//     transition: border 0.3s;
	//   }
	//
	//   .d-text-editor input:focus,
	//   .d-text-editor textarea:focus,
	//   .d-text-editor.active input,
	//   .d-text-editor.active textarea {
	//     outline: none;
	//     border-color: #1ab394;
	//   }
	//
	//   .d-text-editor.lg input {
	//     padding: 6px 4px;
	//   }
	//
	//   .d-text-editor.sm input {
	//     padding: 1px 1px;
	//   }
	//
	//   .d-text-editor .datepicker{
	//     position: absolute;
	//     top: 30px;
	//     left: 0;
	//     z-index: 1;
	//   }
	// </style>
	//
	// <script type="text/ecmascript-6">
	__webpack_require__(91);
	var Vue = __webpack_require__(1);
	exports.default = {
	  props: {
	    type: {
	      type: String,
	      default: 'text'
	    },

	    format: {
	      type: String
	    },

	    size: {
	      type: String,
	      default: ''
	    },

	    readonly: {
	      type: Boolean,
	      default: false
	    },
	    ppturl: {
	      type: String,
	      default: ''
	    },

	    placeholder: {
	      type: String
	    },

	    value: {},

	    height: {},

	    lazy: {
	      type: Boolean,
	      default: false
	    }
	  },

	  watch: {
	    pickerVisible: function pickerVisible(newVal) {
	      if (newVal === true) {
	        _dropdown2.default.open(this);
	      } else {
	        _dropdown2.default.close(this);
	      }
	    }
	  },

	  computed: {
	    haveTrigger: function haveTrigger() {
	      return this.type === 'date' || this.type === 'datetime';
	    },


	    visualValue: {
	      get: function get() {
	        var value = this.value;
	        if (value instanceof Date) {
	          return (0, _util.formatDate)(value, this.format || (this.type === 'date' ? 'YYYY-MM-DD' : 'YYYY-MM-DD HH:mm'));
	        }
	        return value;
	      },
	      set: function set(value) {
	        if (this.type === 'date' && value && !(value instanceof Date)) {
	          return;
	        } else if (this.type === 'number') {
	          if (value === null || value === undefined || value === '') {
	            this.value = null;
	            return;
	          }

	          value = Number(value);
	          if (!isNaN(value)) {
	            this.value = value;
	          }

	          return;
	        }
	        this.value = value;
	      }
	    },

	    editorType: function editorType() {
	      return this.type === 'password' ? 'password' : 'text';
	    }
	  },

	  data: function data() {
	    return {
	      pickerVisible: false
	    };
	  },


	  components: {
	    editor: {
	      inherit: true,
	      template: '',
	      created: function created() {
	        var parent = this.$parent;
	        var type = parent.type;
	        var lazy = parent.lazy;
	        if (type === 'date' || type === 'number') {
	          this.$options.template = '<input @focus="$parent.handleFocus" @blur="$parent.handleBlur" lazy @change="$parent.handleChange($event)" type="' + parent.editorType + '" v-model="$parent.visualValue" placeholder="{{$parent.placeholder}}" readonly="{{$parent.readonly}}" :style="{ height: $parent.height ? $parent.height + \'px\' : \'\' }"/>';
	        } else if (type === 'ppturl') {
	          this.$options.template = '<input @focus="$parent.handleFocus" @blur="$parent.handleBlur" ' + (lazy ? 'lazy' : '') + ' type="' + parent.editorType + '" v-model="$parent.visualValue" placeholder="{{$parent.placeholder}}" :style="{ height: $parent.height ? $parent.height + \'px\' : \'\' }" readonly="{{$parent.readonly}}" :value="$parent.ppturl"/>';
	        } else if (type !== 'textarea') {
	          this.$options.template = '<input @focus="$parent.handleFocus" @blur="$parent.handleBlur" ' + (lazy ? 'lazy' : '') + ' type="' + parent.editorType + '" v-model="$parent.visualValue" placeholder="{{$parent.placeholder}}" :style="{ height: $parent.height ? $parent.height + \'px\' : \'\' }" readonly="{{$parent.readonly}}"/>';
	        } else {
	          this.$options.template = '<textarea @focus="$parent.handleFocus" @blur="$parent.handleBlur" ' + (lazy ? 'lazy' : '') + ' placeholder="{{$parent.placeholder}}" readonly="{{$parent.readonly}}" v-model="$parent.visualValue" :style="{ height: $parent.height ? $parent.height + \'px\' : \'\' }"></textarea>';
	        }
	      }
	    }
	  },

	  methods: {
	    handleChange: function handleChange(event) {
	      var value = event.target.value;
	      var type = this.type;
	      if (type === 'date' || type === 'datetime') {
	        if (value) {
	          var parsedValue = (0, _util.parseDate)(value, this.format || (type === 'date' ? 'YYYY-MM-DD' : 'YYYY-MM-DD HH:mm'));

	          if (parsedValue) {
	            this.value = parsedValue;
	          }
	        }
	        this.hideDatePicker();
	      } else if (type === 'number') {
	        if (value === undefined || value === null || value === '') {
	          this.value = null;
	          return;
	        }

	        value = Number(value);
	        if (!isNaN(value)) {
	          this.value = value;
	        }
	      }
	    },
	    handleFocus: function handleFocus() {
	      var type = this.type;
	      if (type === 'date') {
	        if (!this.pickerVisible) {
	          this.showDatePicker();
	        }
	      }
	      this.$emit('focus', this);
	    },
	    handleBlur: function handleBlur() {
	      this.$emit('blur', this);
	    },
	    onDocumentClick: function onDocumentClick() {
	      this.hideDatePicker();
	    },
	    toggleDatePicker: function toggleDatePicker() {
	      if (!this.pickerVisible) {
	        this.showDatePicker();
	      } else {
	        this.hideDatePicker();
	      }
	    },
	    hideDatePicker: function hideDatePicker() {
	      if (this.picker) {
	        this.picker.resetView && this.picker.resetView();
	        this.picker.$el.style.display = 'none';
	        this.pickerVisible = false;
	      }
	    },
	    showDatePicker: function showDatePicker() {
	      var DatePicker = __webpack_require__(278);

	      if (!this.picker) {
	        var pickerEl = document.createElement('div');
	        this.picker = new Vue((0, _util.merge)({ el: pickerEl, replace: true }, DatePicker));
	        this.picker.showTime = this.type === 'datetime';
	        this.picker.$appendTo(this.$el);

	        var self = this;

	        this.pickerVisible = true;

	        this.picker.$on('pick', function (arg) {
	          self.picker.$el.style.display = 'none';
	          self.visualValue = arg.date;
	          self.pickerVisible = false;
	        });
	      } else {
	        this.picker.$el.style.display = '';
	        this.pickerVisible = true;
	        if (this.value instanceof Date) {
	          this.picker.date = this.value;
	        }
	      }
	    }
	  }
	};
	// </script>

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(279)
	__vue_script__ = __webpack_require__(281)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules\\vue-desktop\\lib\\form\\date-picker.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(289)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./date-picker.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 279 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 280 */,
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <style>
	//   .datepicker {
	//     font-size: 12px;
	//     width: 280px;
	//     border: 1px solid #ddd;
	//     background: #fff;
	//     line-height: 20px;
	//   }
	//
	//   .datepicker .hidden {
	//     display: none;
	//   }
	//
	//   .datepicker-header {
	//     position: relative;
	//     padding: 5px;
	//   }
	//
	//   .datepicker-header > label {
	//     font-weight: 600;
	//     position: absolute;
	//     left: 40px;
	//     right: 40px;
	//     line-height: 22px;
	//     text-align: center;
	//     cursor: pointer;
	//   }
	//
	//   .datepicker-header > label:hover {
	//     background: #428bca;
	//     color: #fff;
	//   }
	//
	//   .datepicker-body {
	//     position: relative;
	//   }
	//
	//   .datepicker-prevbtn,
	//   .datepicker-nextbtn {
	//     border: 0;
	//     background: transparent;
	//     cursor: pointer;
	//   }
	//
	//   .datepicker-nextbtn {
	//     float: right;
	//   }
	//
	//   .datepicker table {
	//     table-layout: fixed;
	//     width: 100%;
	//   }
	//
	//   .datepicker th {
	//     border-bottom: 1px solid #eee;
	//     padding: 5px;
	//   }
	//
	//   .datepicker td.nextmonth,
	//   .datepicker td.prevmonth {
	//     color: #999;
	//   }
	//
	//   .datepicker td {
	//     text-align: center;
	//     padding: 6px 5px;
	//     cursor: pointer;
	//     color: #000;
	//   }
	//
	//   .datepicker td:hover,
	//   .datepicker td.current {
	//     background-color: #428bca;
	//     color: #fff;
	//   }
	//
	//   .datepicker.weekmode .datepicker-dayrow:hover,
	//   .datepicker.weekmode .datepicker-dayrow.current {
	//     background-color: #428bca;
	//   }
	//
	//   .datepicker.weekmode .datepicker-dayrow:hover td,
	//   .datepicker.weekmode .datepicker-dayrow.current td {
	//     color: #fff;
	//   }
	//
	//   .datepicker-footer {
	//     padding: 4px;
	//     text-align: right;
	//   }
	//
	//   .datepicker-todaybtn,
	//   .datepicker-clearbtn,
	//   .datepicker-confirmbtn {
	//     border: none;
	//     color: #0089dc;
	//     background: transparent;
	//     line-height: 24px;
	//     border-radius: 5px;
	//     cursor: pointer;
	//   }
	//
	//   .datepicker-yeartable td {
	//     text-align: center;
	//     padding: 15px;
	//     cursor: pointer;
	//   }
	//
	//   .datepicker-monthtable td {
	//     text-align: center;
	//     padding: 15px;
	//     cursor: pointer;
	//   }
	//
	//   .datepicker-time-wrap {
	//     text-align: center;
	//   }
	//
	//   .datepicker-timelabel {
	//     float: left;
	//     cursor: pointer;
	//     line-height: 30px;
	//     margin-left: 10px;
	//   }
	// </style>
	//
	// <template>
	//   <div class="datepicker" :class="{ weekmode: selectionMode === 'week' }">
	//     <div class="datepicker-header" v-show="currentView !== 'time'">
	//       <button @click="prev" class="datepicker-prevbtn d-icon d-icon-arrow-left"></button>
	//       <label @click="handleLabelClick">{{ label }}</label>
	//       <button @click="next" class="datepicker-nextbtn d-icon d-icon-arrow-right"></button>
	//     </div>
	//     <div class="datepicker-body">
	//       <div :class="{ hidden: currentView !== 'time' }" class="datepicker-time-wrap" v-if="showTime">
	//         <d-time-picker v-ref:time-picker @pick="handleTimePick" @close="currentView = 'date'"></d-time-picker>
	//       </div>
	//       <table :class="{ hidden: currentView !== 'date' }" @click="handleDateTableClick" cellspacing="0">
	//         <tbody>
	//           <tr>
	//             <th>{{ $t('datepicker.weeks.sun') }}</th>
	//             <th>{{ $t('datepicker.weeks.mon') }}</th>
	//             <th>{{ $t('datepicker.weeks.tue') }}</th>
	//             <th>{{ $t('datepicker.weeks.wed') }}</th>
	//             <th>{{ $t('datepicker.weeks.thu') }}</th>
	//             <th>{{ $t('datepicker.weeks.fri') }}</th>
	//             <th>{{ $t('datepicker.weeks.sat') }}</th>
	//           </tr>
	//           <tr v-for="row in 6" class="datepicker-dayrow" :class="{ current: isWeekActive(cells[row * 7 + 1]) }">
	//             <td v-for="column in 7" class="{{ cells[row * 7 + column].type }} {{ selectionMode === 'day' && cells[row * 7 + column].type === 'normal' && monthDate == cells[row * 7 + column].text ? 'current' : '' }}">{{ cells[row * 7 + column].text }}</td>
	//           </tr>
	//         </tbody>
	//       </table>
	//
	//       <table @click="handleYearTableClick" class="datepicker-yeartable" :class="{ hidden: currentView !== 'year' }">
	//         <tbody>
	//           <tr>
	//             <td @click="prevTenYear" class="d-icon d-icon-arrow-left"></td>
	//             <td :class="{ current: year === startYear }">{{startYear}}</td>
	//             <td :class="{ current: year === startYear }">{{startYear + 1}}</td>
	//           </tr>
	//           <tr>
	//             <td :class="{ current: year === startYear }">{{startYear + 2}}</td>
	//             <td :class="{ current: year === startYear }">{{startYear + 3}}</td>
	//             <td :class="{ current: year === startYear }">{{startYear + 4}}</td>
	//           </tr>
	//           <tr>
	//             <td :class="{ current: year === startYear }">{{startYear + 5}}</td>
	//             <td :class="{ current: year === startYear }">{{startYear + 6}}</td>
	//             <td :class="{ current: year === startYear }">{{startYear + 7}}</td>
	//           </tr>
	//           <tr>
	//             <td :class="{ current: year === startYear }">{{startYear + 8}}</td>
	//             <td :class="{ current: year === startYear }">{{startYear + 9}}</td>
	//             <td @click="nextTenYear" class="d-icon d-icon-arrow-right"></td>
	//           </tr>
	//         </tbody>
	//       </table>
	//
	//       <table @click="handleMonthTableClick" class="datepicker-monthtable" :class="{ hidden: currentView !== 'month' }">
	//         <tbody>
	//           <tr>
	//             <td :class="{ current: isMonthActive(0) }">{{ $t('datepicker.months.jan') }}</td>
	//             <td :class="{ current: isMonthActive(1) }">{{ $t('datepicker.months.feb') }}</td>
	//             <td :class="{ current: isMonthActive(2) }">{{ $t('datepicker.months.mar') }}</td>
	//           </tr>
	//           <tr>
	//             <td :class="{ current: isMonthActive(3) }">{{ $t('datepicker.months.apr') }}</td>
	//             <td :class="{ current: isMonthActive(4) }">{{ $t('datepicker.months.may') }}</td>
	//             <td :class="{ current: isMonthActive(5) }">{{ $t('datepicker.months.jun') }}</td>
	//           </tr>
	//           <tr>
	//             <td :class="{ current: isMonthActive(6) }">{{ $t('datepicker.months.jul') }}</td>
	//             <td :class="{ current: isMonthActive(7) }">{{ $t('datepicker.months.aug') }}</td>
	//             <td :class="{ current: isMonthActive(8) }">{{ $t('datepicker.months.sep') }}</td>
	//           </tr>
	//           <tr>
	//             <td :class="{ current: isMonthActive(9) }">{{ $t('datepicker.months.oct') }}</td>
	//             <td :class="{ current: isMonthActive(10) }">{{ $t('datepicker.months.nov') }}</td>
	//             <td :class="{ current: isMonthActive(11) }">{{ $t('datepicker.months.dec') }}</td>
	//           </tr>
	//         </tbody>
	//       </table>
	//     </div>
	//
	//     <div class="datepicker-footer" :class="{ hidden: currentView !== 'date' }">
	//       <span class="datepicker-timelabel" @click="currentView = 'time'" v-if="showTime">{{ timeText }}</span>
	//       <button class="datepicker-todaybtn" @click="changeToToday">{{ $t('datepicker.today') }}</button>
	//       <button class="datepicker-clearbtn" @click="clear">{{ $t('datepicker.clear') }}</button>
	//       <button class="datepicker-confirmbtn" @click="confirm">{{ $t('datepicker.confirm') }}</button>
	//     </div>
	//   </div>
	// </template>
	//
	// <script type="text/ecmascript-6">
	var getDayCountOfMonth = function getDayCountOfMonth(year, month) {
	  if (month === 3 || month === 5 || month === 8 || month === 10) {
	    return 30;
	  }

	  if (month === 1) {
	    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
	      return 29;
	    } else {
	      return 28;
	    }
	  }

	  return 31;
	};

	var getFirstDayOfMonth = function getFirstDayOfMonth(date) {
	  var temp = new Date(date.getTime());
	  temp.setDate(1);
	  return temp.getDay();
	};

	var getWeekNumber = function getWeekNumber(src) {
	  var date = new Date(src.getTime());
	  date.setHours(0, 0, 0, 0);
	  // Thursday in current week decides the year.
	  date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
	  // January 4 is always in week 1.
	  var week1 = new Date(date.getFullYear(), 0, 4);
	  // Adjust to Thursday in week 1 and count number of weeks from date to week1.
	  return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
	};

	// TODO add a common i18n
	var i18n = __webpack_require__(282).default;

	exports.default = {
	  props: {
	    currentView: {
	      default: 'date'
	    },

	    date: {
	      default: function _default() {
	        return new Date();
	      }
	    },

	    value: {},

	    showTime: {
	      type: Boolean
	    },

	    selectionMode: {
	      type: String,
	      default: 'day'
	    }
	  },

	  watch: {
	    currentView: function currentView(val) {
	      if (val === 'time') {
	        this.$refs.timePicker.hours = this.hours;
	        this.$refs.timePicker.minutes = this.minutes;
	      }
	    }
	  },

	  methods: {
	    $t: function $t(path) {
	      var array = path.split('.');
	      var current = i18n;
	      for (var i = 0, j = array.length; i < j; i++) {
	        var property = array[i];
	        var value = current[property];
	        if (i === j - 1) return value;
	        if (!value) return '';
	        current = value;
	      }
	      return '';
	    },
	    isMonthActive: function isMonthActive(month) {
	      var date = this.date;
	      if (this.selectionMode !== 'month') {
	        return month === date.getMonth();
	      } else {
	        return this.value === date.getFullYear() + '-' + month;
	      }
	    },
	    isWeekActive: function isWeekActive(cell) {
	      if (this.selectionMode !== 'week') return false;
	      var newDate = new Date(this.date.getTime());

	      var month = newDate.getMonth();
	      var year = newDate.getFullYear();

	      if (cell.type === 'prevmonth') {
	        newDate.setMonth(month === 0 ? 11 : month - 1);
	        newDate.setFullYear(month === 0 ? year - 1 : year);
	      }

	      if (cell.type === 'nextmonth') {
	        newDate.setMonth(month === 11 ? 0 : month + 1);
	        newDate.setFullYear(month === 11 ? year + 1 : year);
	      }

	      newDate.setDate(parseInt(cell.text, 10));

	      return year + 'w' + getWeekNumber(newDate) === this.value;
	    },
	    resetDate: function resetDate() {
	      this.date = new Date(this.date);
	    },
	    showMonthPicker: function showMonthPicker() {
	      this.currentView = 'month';
	    },
	    showYearPicker: function showYearPicker() {
	      this.currentView = 'year';
	    },
	    handleLabelClick: function handleLabelClick() {
	      if (this.currentView === 'date') {
	        this.showMonthPicker();
	      } else if (this.currentView === 'month') {
	        this.showYearPicker();
	      }
	    },
	    prevMonth: function prevMonth() {
	      var currentDate = this.date;
	      var year = currentDate.getFullYear();
	      var month = currentDate.getMonth();

	      var newYear = month === 0 ? year - 1 : year;
	      var newMonth = month === 0 ? 11 : month - 1;

	      var date = currentDate.getDate();
	      var newDayCount = getDayCountOfMonth(newYear, newMonth);
	      if (date > newDayCount) {
	        currentDate.setDate(newDayCount);
	      }

	      currentDate.setMonth(newMonth);
	      currentDate.setFullYear(newYear);
	      this.resetDate();
	    },
	    nextMonth: function nextMonth() {
	      var currentDate = this.date;
	      var year = currentDate.getFullYear();
	      var month = currentDate.getMonth();
	      var newYear = month === 11 ? year + 1 : year;
	      var newMonth = month === 11 ? 0 : month + 1;

	      var date = currentDate.getDate();
	      var newDayCount = getDayCountOfMonth(newYear, newMonth);
	      if (date > newDayCount) {
	        currentDate.setDate(newDayCount);
	      }

	      currentDate.setMonth(newMonth);
	      currentDate.setFullYear(newYear);
	      this.resetDate();
	    },
	    nextYear: function nextYear() {
	      var date = this.date;
	      date.setFullYear(date.getFullYear() + 1);
	      this.resetDate();
	    },
	    prevYear: function prevYear() {
	      var date = this.date;
	      date.setFullYear(date.getFullYear() - 1);
	      this.resetDate();
	    },
	    nextTenYear: function nextTenYear() {
	      var date = this.date;
	      date.setFullYear(date.getFullYear() + 10);
	      this.resetDate();
	    },
	    prevTenYear: function prevTenYear() {
	      var date = this.date;
	      date.setFullYear(date.getFullYear() - 10);
	      this.resetDate();
	    },
	    prev: function prev() {
	      var currentView = this.currentView;
	      if (currentView === 'date') {
	        this.prevMonth();
	      } else {
	        this.prevYear();
	      }
	    },
	    next: function next() {
	      var currentView = this.currentView;
	      if (currentView === 'date') {
	        this.nextMonth();
	      } else {
	        this.nextYear();
	      }
	    },
	    handleTimePick: function handleTimePick(picker) {
	      this.hours = picker.hours;
	      this.minutes = picker.minutes;

	      this.currentView = 'date';
	      this.resetDate();
	    },
	    handleMonthTableClick: function handleMonthTableClick(event) {
	      var target = event.target;
	      if (target.tagName !== 'TD') return;
	      var column = target.cellIndex;
	      var row = target.parentNode.rowIndex;
	      var month = row * 3 + column;

	      var selectionMode = this.selectionMode;
	      if (selectionMode !== 'month') {
	        this.date.setMonth(month);
	        this.currentView = 'date';
	        this.resetDate();
	      } else {
	        this.date.setMonth(month);
	        this.resetDate();
	        this.value = this.date.getFullYear() + '-' + month;
	        this.$emit('pick', { year: this.date.getFullYear(), month: month });
	      }
	    },
	    handleDateTableClick: function handleDateTableClick(event) {
	      var target = event.target;
	      if (target.tagName !== 'TD') return;

	      var selectionMode = this.selectionMode;

	      if (selectionMode === 'week') {
	        target = target.parentNode.cells[1];
	      }

	      var year = this.date.getFullYear();
	      var month = this.date.getMonth();
	      var text = target.textContent || target.innerText;
	      var className = target.className;

	      if (className.indexOf('prev') !== -1) {
	        if (month === 0) {
	          year = year - 1;
	          month = 11;
	        } else {
	          month = month - 1;
	        }
	        this.date.setFullYear(year);
	        this.date.setMonth(month);
	      } else if (className.indexOf('next') !== -1) {
	        if (month === 11) {
	          year = year + 1;
	          month = 0;
	        } else {
	          month = month + 1;
	        }
	        this.date.setFullYear(year);
	        this.date.setMonth(month);
	      }

	      if (selectionMode === 'day') {
	        this.date.setDate(parseInt(text, 10));
	        this.resetDate();
	        this.$emit('pick', { date: this.date });
	      } else if (selectionMode === 'week') {
	        this.date.setDate(parseInt(text, 10));
	        this.resetDate();

	        var weekNumber = getWeekNumber(this.date);
	        this.value = this.date.getFullYear() + 'w' + weekNumber;
	        this.$emit('pick', { year: this.date.getFullYear(), week: weekNumber });
	      }
	    },
	    handleYearTableClick: function handleYearTableClick(event) {
	      var target = event.target;
	      if (target.tagName === 'TD') {
	        var column = target.cellIndex;
	        var row = target.parentNode.rowIndex;
	        var index = row * 3 + column;

	        if (index === 0 || index === 11) return;

	        var textYear = target.textContent || target.innerText;
	        this.date.setFullYear(parseInt(textYear, 10));
	        this.currentView = 'month';

	        this.resetDate();
	      }
	    },
	    changeToToday: function changeToToday() {
	      this.date.setTime(+new Date());
	      this.resetDate();
	    },
	    confirm: function confirm() {
	      this.$emit('pick', { date: this.date });
	    },
	    clear: function clear() {
	      this.$emit('pick', { date: null });
	    }
	  },

	  components: {
	    DTimePicker: __webpack_require__(283)
	  },

	  compiled: function compiled() {
	    if (this.selectionMode === 'month') {
	      this.currentView = 'month';
	    }
	  },


	  computed: {
	    cells: function cells() {
	      var date = this.date;
	      var day = getFirstDayOfMonth(date);
	      var maxDay = getDayCountOfMonth(date.getFullYear(), date.getMonth());
	      var lastMonthDay = getDayCountOfMonth(date.getFullYear(), date.getMonth() === 0 ? 11 : date.getMonth() - 1);

	      day = day === 0 ? 7 : day;

	      var cells = [];
	      var count = 1;
	      var firstDayPosition;

	      for (var i = 0; i < 6; i++) {
	        for (var j = 0; j < 7; j++) {
	          var cell = { row: i, column: j, type: 'normal' };
	          if (i === 0) {
	            if (j >= day) {
	              cell.text = count++;
	              if (count === 2) {
	                firstDayPosition = i * 7 + j;
	              }
	            } else {
	              cell.text = lastMonthDay - (day - j % 7) + 1;
	              cell.type = 'prevmonth';
	            }
	          } else {
	            if (count <= maxDay) {
	              cell.text = count++;
	              if (count === 2) {
	                firstDayPosition = i * 7 + j;
	              }
	            } else {
	              cell.text = count++ - maxDay;
	              cell.type = 'nextmonth';
	            }
	          }
	          cells.push(cell);
	        }
	      }

	      cells.firstDayPosition = firstDayPosition;

	      return cells;
	    },
	    monthDate: function monthDate() {
	      return this.date.getDate();
	    },
	    startYear: function startYear() {
	      return Math.floor(this.date.getFullYear() / 10) * 10;
	    },
	    resetView: function resetView() {
	      if (this.selectionMode !== 'month') {
	        this.currentView = 'date';
	      } else {
	        this.currentView = 'month';
	      }
	    },


	    hours: {
	      get: function get() {
	        return this.date.getHours();
	      },
	      set: function set(hours) {
	        this.date.setHours(hours);
	      }
	    },

	    minutes: {
	      get: function get() {
	        return this.date.getMinutes();
	      },
	      set: function set(minutes) {
	        this.date.setMinutes(minutes);
	      }
	    },

	    timeText: function timeText() {
	      var hours = this.hours;
	      var minutes = this.minutes;
	      return (hours < 10 ? '0' + hours : hours) + ':' + (minutes < 10 ? '0' + minutes : minutes);
	    },
	    label: function label() {
	      var date = this.date;
	      var currentView = this.currentView;
	      var year = date.getFullYear();
	      var month = date.getMonth() + 1;

	      if (currentView === 'date') {
	        return year + ' / ' + month;
	      }

	      return year;
	    }
	  }
	};
	// </script>

/***/ },
/* 282 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  validator: {
	    default: '字段{label}校验失败',
	    required: '{label}为必填项',
	    pattern: '{label}的格式不正确',
	    whitespace: '{label}不能为空',
	    enum: '{label}必须为以下值中的一个: {list}',
	    length: {
	      min: '{label}至少有{min}个字符',
	      max: '{label}最多有{max}个字符',
	      range: '{label}的长度应该大于等于{min}并且小鱼等于{max}'
	    },
	    range: {
	      min: '{label}应该大于{min}',
	      max: '{label}应该小于{max}',
	      range: '{label}应该介于{min}和{max}之间'
	    }
	  },
	  datepicker: {
	    today: '今天',
	    clear: '清空',
	    confirm: '确定',
	    weeks: {
	      sun: '日',
	      mon: '一',
	      tue: '二',
	      wed: '三',
	      thu: '四',
	      fri: '五',
	      sat: '六'
	    },
	    months: {
	      jan: '一月',
	      feb: '二月',
	      mar: '三月',
	      apr: '四月',
	      may: '五月',
	      jun: '六月',
	      jul: '七月',
	      aug: '八月',
	      sep: '九月',
	      oct: '十月',
	      nov: '十一月',
	      dec: '十二月'
	    }
	  },
	  alert: {
	    title: '提示'
	  }
	};

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(284)
	__vue_script__ = __webpack_require__(286)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules\\vue-desktop\\lib\\form\\time-picker.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(288)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./time-picker.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 284 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 285 */,
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _draggable = __webpack_require__(287);

	var _draggable2 = _interopRequireDefault(_draggable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//   <div class="timepicker">
	//     <div class="timepicker-header">
	//       <div class="timepicker-header-close d-icon d-icon-close-circle" @click="handleClose"></div>
	//       <div class="timepicker-header-confirm d-icon d-icon-confirm-circle" @click="handleConfirm"></div>
	//       <div @click="view = 'hours'" class="timepicker-header-label" :class="{ active: view === 'hours' }">{{formattedHours}}</div>
	//       <div class="timepicker-header-separator">:</div>
	//       <div @click="view = 'minutes'" class="timepicker-header-label" :class="{ active: view === 'minutes' }">{{formattedMinutes}}</div>
	//     </div>
	//     <div class="hours-wrap" v-el:hours-wrap @click="handleHoursClick($event)" v-show="view === 'hours'">
	//       <div class="timepicker-indicator" :class="{ inner: dragging ? dragInside : (hours > 12 || hours < 1) }" :style="{ transform: 'rotateZ(' + (hours * 30) + 'deg)' }">
	//         <div></div>
	//       </div>
	//       <div class="hour-labels">
	//         <div class="timepicker-label">12</div>
	//         <div class="timepicker-label">1</div>
	//         <div class="timepicker-label">2</div>
	//         <div class="timepicker-label">3</div>
	//         <div class="timepicker-label">4</div>
	//         <div class="timepicker-label">5</div>
	//         <div class="timepicker-label">6</div>
	//         <div class="timepicker-label">7</div>
	//         <div class="timepicker-label">8</div>
	//         <div class="timepicker-label">9</div>
	//         <div class="timepicker-label">10</div>
	//         <div class="timepicker-label">11</div>
	//       </div>
	//       <div class="hour-labels inner">
	//         <div class="timepicker-label">0</div>
	//         <div class="timepicker-label">13</div>
	//         <div class="timepicker-label">14</div>
	//         <div class="timepicker-label">15</div>
	//         <div class="timepicker-label">16</div>
	//         <div class="timepicker-label">17</div>
	//         <div class="timepicker-label">18</div>
	//         <div class="timepicker-label">19</div>
	//         <div class="timepicker-label">20</div>
	//         <div class="timepicker-label">21</div>
	//         <div class="timepicker-label">22</div>
	//         <div class="timepicker-label">23</div>
	//       </div>
	//     </div>
	//
	//     <div class="minutes-wrap" v-el:minutes-wrap @click="handleMinutesClick($event)" v-show="view === 'minutes'">
	//       <div class="timepicker-indicator" :class="{ small: minutes % 5 !== 0 }" :style="{ transform: 'rotateZ(' + (minutes * 6) + 'deg)' }">
	//         <div></div>
	//       </div>
	//       <div class="minute-labels">
	//         <div class="timepicker-label">0</div>
	//         <div class="timepicker-label">5</div>
	//         <div class="timepicker-label">10</div>
	//         <div class="timepicker-label">15</div>
	//         <div class="timepicker-label">20</div>
	//         <div class="timepicker-label">25</div>
	//         <div class="timepicker-label">30</div>
	//         <div class="timepicker-label">35</div>
	//         <div class="timepicker-label">40</div>
	//         <div class="timepicker-label">45</div>
	//         <div class="timepicker-label">50</div>
	//         <div class="timepicker-label">55</div>
	//       </div>
	//     </div>
	//   </div>
	// </template>
	//
	// <style>
	//   .timepicker {
	//     padding: 15px 10px 10px 10px;
	//     width: 260px;
	//
	//     user-select: none;
	//
	//     background-color: #fff;
	//   }
	//
	//   .timepicker-header {
	//     text-align: center;
	//     color: #333;
	//     margin-top: -10px;
	//   }
	//
	//   .timepicker-header-label {
	//     cursor: pointer;
	//
	//     display: inline-block;
	//     line-height: 30px;
	//     height: 30px;
	//     font-size: 20px;
	//   }
	//
	//   .timepicker-header-label.active {
	//     color: #00bcd4;
	//   }
	//
	//   .timepicker-header-confirm, .timepicker-header-close {
	//     float: right;
	//     font-size: 24px;
	//     line-height: 20px;
	//     width: 20px;
	//     height: 20px;
	//     margin-top: 4px;
	//     cursor: pointer;
	//   }
	//
	//   .timepicker-header > div {
	//     display: inline-block;
	//   }
	//
	//   .timepicker-header-close {
	//     float: left;
	//   }
	//
	//   .hours-wrap, .minutes-wrap {
	//     position: relative;
	//     width: 260px;
	//     height: 260px;
	//     background: #fff;
	//   }
	//
	//   .timepicker-label {
	//     position: absolute;
	//     font-size: 14px;
	//     width: 20px;
	//     height: 20px;
	//     line-height: 20px;
	//     text-align: center;
	//     transform: translate(-50%, -50%);
	//   }
	//
	//   .timepicker-header-separator {
	//     font-size: 20px;
	//     vertical-align: text-bottom;
	//   }
	//
	//   .timepicker-indicator {
	//     position: absolute;
	//     height: 110px;
	//     width: 2px;
	//     left: 50%;
	//     bottom: 50%;
	//     transform-origin: 50% bottom 0px;
	//     pointer-events: none;
	//     background: #00bcd4;
	//   }
	//
	//   .timepicker-indicator > * {
	//     position: absolute;
	//     background: #ffffff;
	//     border: 4px solid #00bcd4;
	//     width: 20px;
	//     height: 20px;
	//     transform: translate(-50%, -50%);
	//     border-radius: 100%;
	//   }
	//
	//   .hours-wrap .timepicker-indicator.inner {
	//     height: 78px;
	//   }
	//
	//   .timepicker-indicator.small > * {
	//     width: 8px;
	//     height: 8px;
	//   }
	// </style>
	//
	// <script type="text/ecmascript-6">
	var RADIUS = 130;
	var getPosition = function getPosition(degree, radius) {
	  var x = RADIUS + radius * Math.cos(degree / 180 * Math.PI);
	  var y = RADIUS + radius * Math.sin(degree / 180 * Math.PI);

	  return {
	    left: Math.round(x),
	    top: Math.round(y)
	  };
	};

	var getMousePosition = function getMousePosition(event, element) {
	  var rect = element.getBoundingClientRect();

	  return {
	    left: event.clientX - rect.left,
	    top: event.clientY - rect.top
	  };
	};

	var getAngle = function getAngle(point) {
	  var radius = RADIUS;
	  var angle = Math.atan2(point.top - radius, point.left - radius) / Math.PI * 180;

	  if (angle < 0) angle += 360;

	  return (angle + 90) % 360;
	};

	var getEventAngle = function getEventAngle(event, el, degreeUnit) {
	  var position = getMousePosition(event, el);
	  var angle = Math.round(getAngle(position));
	  degreeUnit = degreeUnit || 30;

	  return Math.round(angle / degreeUnit) * degreeUnit % 360;
	};

	var getEventRadius = function getEventRadius(event, el) {
	  var position = getMousePosition(event, el);

	  return Math.sqrt((position.left - RADIUS) * (position.left - RADIUS) + (position.top - RADIUS) * (position.top - RADIUS));
	};

	exports.default = {
	  props: {
	    hours: {
	      type: Number,
	      default: 12
	    },

	    minutes: {
	      type: Number,
	      default: 0
	    }
	  },

	  computed: {
	    formattedHours: function formattedHours() {
	      return this.hours < 10 ? '0' + this.hours : this.hours;
	    },
	    formattedMinutes: function formattedMinutes() {
	      return this.minutes < 10 ? '0' + this.minutes : this.minutes;
	    }
	  },

	  ready: function ready() {
	    var _this = this;

	    this.initLabels('.hour-labels .timepicker-label', 110);
	    this.initLabels('.hour-labels.inner .timepicker-label', 80);
	    this.initLabels('.minute-labels .timepicker-label', 110);

	    (0, _draggable2.default)(this.$els.hoursWrap, {
	      drag: function drag(event) {
	        _this.dragging = true;
	        _this.setHours(event);
	      },
	      end: function end(event) {
	        _this.dragging = false;
	        _this.dragInside = false;
	        setTimeout(function () {
	          _this.view = 'minutes';
	        });
	      }
	    });

	    (0, _draggable2.default)(this.$els.minutesWrap, {
	      drag: function drag(event) {
	        _this.setMinutes(event);
	      }
	    });
	  },
	  data: function data() {
	    return {
	      dragging: false,
	      dragInside: false,
	      view: 'hours'
	    };
	  },


	  methods: {
	    initLabels: function initLabels(selector, radius) {
	      var innerHourLabels = this.$el.querySelectorAll(selector);

	      [].forEach.call(innerHourLabels, function (element, index) {
	        var degree = 30 * (index - 3);

	        var position = getPosition(degree, radius);
	        element.style.left = position.left + 'px';
	        element.style.top = position.top + 'px';
	      });
	    },

	    setMinutes: function setMinutes(event) {
	      var el = this.$els.minutesWrap;
	      var angle = getEventAngle(event, el, 6);

	      this.minutes = Math.round(angle / 6);
	    },
	    setHours: function setHours(event) {
	      var el = this.$els.hoursWrap;
	      var angle = getEventAngle(event, el, 30);
	      var radius = getEventRadius(event, el);

	      var hours = radius < 100 ? Math.round(angle / 30) + 12 : Math.round(angle / 30);
	      if (hours === 12 || hours === 0) {
	        hours = radius < 100 ? 0 : 12;
	      }
	      this.hours = hours;

	      if (this.dragging) {
	        this.dragInside = radius < 100;
	      }
	    },
	    handleHoursClick: function handleHoursClick(event) {
	      var _this2 = this;

	      this.setHours(event);
	      setTimeout(function () {
	        _this2.view = 'minutes';
	      }, 100);
	    },
	    handleMinutesClick: function handleMinutesClick(event) {
	      this.setMinutes(event);
	    },
	    handleConfirm: function handleConfirm() {
	      this.$emit('pick', this);
	    },
	    handleClose: function handleClose() {
	      this.$emit('close', this);
	    }
	  }
	};
	// </script>

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (element, options) {
	  var moveFn = function moveFn(event) {
	    if (isIE8) {
	      fixEvent(event);
	    }
	    if (options.drag) {
	      options.drag(event);
	    }
	  };
	  var upFn = function upFn(event) {
	    if (isIE8) {
	      fixEvent(event);
	    }
	    (0, _windDom.off)(document, 'mousemove', moveFn);
	    (0, _windDom.off)(document, 'mouseup', upFn);
	    document.onselectstart = null;
	    document.ondragstart = null;

	    isDragging = false;

	    if (options.end) {
	      options.end(event);
	    }
	  };
	  (0, _windDom.on)(element, 'mousedown', function (event) {
	    if (isIE8) {
	      fixEvent(event);
	    }
	    if (isDragging) return;
	    document.onselectstart = function () {
	      return false;
	    };
	    document.ondragstart = function () {
	      return false;
	    };

	    (0, _windDom.on)(document, 'mousemove', moveFn);
	    (0, _windDom.on)(document, 'mouseup', upFn);
	    isDragging = true;

	    if (options.start) {
	      options.start(event);
	    }
	  });
	};

	var _windDom = __webpack_require__(83);

	var isDragging = false;

	var isIE8 = Number(document.documentMode) < 9;

	var fixEvent = function fixEvent(event) {
	  var scrollTop = Math.max(window.scrollY || 0, document.documentElement.scrollTop || 0);
	  var scrollLeft = Math.max(window.scrollX || 0, document.documentElement.scrollLeft || 0);

	  event.target = event.srcElement;
	  event.pageX = scrollLeft + event.clientX;
	  event.pageY = scrollTop + event.clientY;
	};

/***/ },
/* 288 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"timepicker\">\n  <div class=\"timepicker-header\">\n    <div class=\"timepicker-header-close d-icon d-icon-close-circle\" @click=\"handleClose\"></div>\n    <div class=\"timepicker-header-confirm d-icon d-icon-confirm-circle\" @click=\"handleConfirm\"></div>\n    <div @click=\"view = 'hours'\" class=\"timepicker-header-label\" :class=\"{ active: view === 'hours' }\">{{formattedHours}}</div>\n    <div class=\"timepicker-header-separator\">:</div>\n    <div @click=\"view = 'minutes'\" class=\"timepicker-header-label\" :class=\"{ active: view === 'minutes' }\">{{formattedMinutes}}</div>\n  </div>\n  <div class=\"hours-wrap\" v-el:hours-wrap @click=\"handleHoursClick($event)\" v-show=\"view === 'hours'\">\n    <div class=\"timepicker-indicator\" :class=\"{ inner: dragging ? dragInside : (hours > 12 || hours < 1) }\" :style=\"{ transform: 'rotateZ(' + (hours * 30) + 'deg)' }\">\n      <div></div>\n    </div>\n    <div class=\"hour-labels\">\n      <div class=\"timepicker-label\">12</div>\n      <div class=\"timepicker-label\">1</div>\n      <div class=\"timepicker-label\">2</div>\n      <div class=\"timepicker-label\">3</div>\n      <div class=\"timepicker-label\">4</div>\n      <div class=\"timepicker-label\">5</div>\n      <div class=\"timepicker-label\">6</div>\n      <div class=\"timepicker-label\">7</div>\n      <div class=\"timepicker-label\">8</div>\n      <div class=\"timepicker-label\">9</div>\n      <div class=\"timepicker-label\">10</div>\n      <div class=\"timepicker-label\">11</div>\n    </div>\n    <div class=\"hour-labels inner\">\n      <div class=\"timepicker-label\">0</div>\n      <div class=\"timepicker-label\">13</div>\n      <div class=\"timepicker-label\">14</div>\n      <div class=\"timepicker-label\">15</div>\n      <div class=\"timepicker-label\">16</div>\n      <div class=\"timepicker-label\">17</div>\n      <div class=\"timepicker-label\">18</div>\n      <div class=\"timepicker-label\">19</div>\n      <div class=\"timepicker-label\">20</div>\n      <div class=\"timepicker-label\">21</div>\n      <div class=\"timepicker-label\">22</div>\n      <div class=\"timepicker-label\">23</div>\n    </div>\n  </div>\n\n  <div class=\"minutes-wrap\" v-el:minutes-wrap @click=\"handleMinutesClick($event)\" v-show=\"view === 'minutes'\">\n    <div class=\"timepicker-indicator\" :class=\"{ small: minutes % 5 !== 0 }\" :style=\"{ transform: 'rotateZ(' + (minutes * 6) + 'deg)' }\">\n      <div></div>\n    </div>\n    <div class=\"minute-labels\">\n      <div class=\"timepicker-label\">0</div>\n      <div class=\"timepicker-label\">5</div>\n      <div class=\"timepicker-label\">10</div>\n      <div class=\"timepicker-label\">15</div>\n      <div class=\"timepicker-label\">20</div>\n      <div class=\"timepicker-label\">25</div>\n      <div class=\"timepicker-label\">30</div>\n      <div class=\"timepicker-label\">35</div>\n      <div class=\"timepicker-label\">40</div>\n      <div class=\"timepicker-label\">45</div>\n      <div class=\"timepicker-label\">50</div>\n      <div class=\"timepicker-label\">55</div>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 289 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"datepicker\" :class=\"{ weekmode: selectionMode === 'week' }\">\n  <div class=\"datepicker-header\" v-show=\"currentView !== 'time'\">\n    <button @click=\"prev\" class=\"datepicker-prevbtn d-icon d-icon-arrow-left\"></button>\n    <label @click=\"handleLabelClick\">{{ label }}</label>\n    <button @click=\"next\" class=\"datepicker-nextbtn d-icon d-icon-arrow-right\"></button>\n  </div>\n  <div class=\"datepicker-body\">\n    <div :class=\"{ hidden: currentView !== 'time' }\" class=\"datepicker-time-wrap\" v-if=\"showTime\">\n      <d-time-picker v-ref:time-picker @pick=\"handleTimePick\" @close=\"currentView = 'date'\"></d-time-picker>\n    </div>\n    <table :class=\"{ hidden: currentView !== 'date' }\" @click=\"handleDateTableClick\" cellspacing=\"0\">\n      <tbody>\n        <tr>\n          <th>{{ $t('datepicker.weeks.sun') }}</th>\n          <th>{{ $t('datepicker.weeks.mon') }}</th>\n          <th>{{ $t('datepicker.weeks.tue') }}</th>\n          <th>{{ $t('datepicker.weeks.wed') }}</th>\n          <th>{{ $t('datepicker.weeks.thu') }}</th>\n          <th>{{ $t('datepicker.weeks.fri') }}</th>\n          <th>{{ $t('datepicker.weeks.sat') }}</th>\n        </tr>\n        <tr v-for=\"row in 6\" class=\"datepicker-dayrow\" :class=\"{ current: isWeekActive(cells[row * 7 + 1]) }\">\n          <td v-for=\"column in 7\" class=\"{{ cells[row * 7 + column].type }} {{ selectionMode === 'day' && cells[row * 7 + column].type === 'normal' && monthDate == cells[row * 7 + column].text ? 'current' : '' }}\">{{ cells[row * 7 + column].text }}</td>\n        </tr>\n      </tbody>\n    </table>\n\n    <table @click=\"handleYearTableClick\" class=\"datepicker-yeartable\" :class=\"{ hidden: currentView !== 'year' }\">\n      <tbody>\n        <tr>\n          <td @click=\"prevTenYear\" class=\"d-icon d-icon-arrow-left\"></td>\n          <td :class=\"{ current: year === startYear }\">{{startYear}}</td>\n          <td :class=\"{ current: year === startYear }\">{{startYear + 1}}</td>\n        </tr>\n        <tr>\n          <td :class=\"{ current: year === startYear }\">{{startYear + 2}}</td>\n          <td :class=\"{ current: year === startYear }\">{{startYear + 3}}</td>\n          <td :class=\"{ current: year === startYear }\">{{startYear + 4}}</td>\n        </tr>\n        <tr>\n          <td :class=\"{ current: year === startYear }\">{{startYear + 5}}</td>\n          <td :class=\"{ current: year === startYear }\">{{startYear + 6}}</td>\n          <td :class=\"{ current: year === startYear }\">{{startYear + 7}}</td>\n        </tr>\n        <tr>\n          <td :class=\"{ current: year === startYear }\">{{startYear + 8}}</td>\n          <td :class=\"{ current: year === startYear }\">{{startYear + 9}}</td>\n          <td @click=\"nextTenYear\" class=\"d-icon d-icon-arrow-right\"></td>\n        </tr>\n      </tbody>\n    </table>\n\n    <table @click=\"handleMonthTableClick\" class=\"datepicker-monthtable\" :class=\"{ hidden: currentView !== 'month' }\">\n      <tbody>\n        <tr>\n          <td :class=\"{ current: isMonthActive(0) }\">{{ $t('datepicker.months.jan') }}</td>\n          <td :class=\"{ current: isMonthActive(1) }\">{{ $t('datepicker.months.feb') }}</td>\n          <td :class=\"{ current: isMonthActive(2) }\">{{ $t('datepicker.months.mar') }}</td>\n        </tr>\n        <tr>\n          <td :class=\"{ current: isMonthActive(3) }\">{{ $t('datepicker.months.apr') }}</td>\n          <td :class=\"{ current: isMonthActive(4) }\">{{ $t('datepicker.months.may') }}</td>\n          <td :class=\"{ current: isMonthActive(5) }\">{{ $t('datepicker.months.jun') }}</td>\n        </tr>\n        <tr>\n          <td :class=\"{ current: isMonthActive(6) }\">{{ $t('datepicker.months.jul') }}</td>\n          <td :class=\"{ current: isMonthActive(7) }\">{{ $t('datepicker.months.aug') }}</td>\n          <td :class=\"{ current: isMonthActive(8) }\">{{ $t('datepicker.months.sep') }}</td>\n        </tr>\n        <tr>\n          <td :class=\"{ current: isMonthActive(9) }\">{{ $t('datepicker.months.oct') }}</td>\n          <td :class=\"{ current: isMonthActive(10) }\">{{ $t('datepicker.months.nov') }}</td>\n          <td :class=\"{ current: isMonthActive(11) }\">{{ $t('datepicker.months.dec') }}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n  <div class=\"datepicker-footer\" :class=\"{ hidden: currentView !== 'date' }\">\n    <span class=\"datepicker-timelabel\" @click=\"currentView = 'time'\" v-if=\"showTime\">{{ timeText }}</span>\n    <button class=\"datepicker-todaybtn\" @click=\"changeToToday\">{{ $t('datepicker.today') }}</button>\n    <button class=\"datepicker-clearbtn\" @click=\"clear\">{{ $t('datepicker.clear') }}</button>\n    <button class=\"datepicker-confirmbtn\" @click=\"confirm\">{{ $t('datepicker.confirm') }}</button>\n  </div>\n</div>\n";

/***/ },
/* 290 */
/***/ function(module, exports) {

	module.exports = "\n<span class=\"d-text-editor {{size}} {{ haveTrigger ? 'have-trigger' : '' }} {{ pickerVisible ? 'active' : '' }}\">\n  <editor></editor>\n  <span @click=\"toggleDatePicker()\" class=\"d-text-editor-trigger d-icon d-icon-date-trigger\" v-if=\"haveTrigger\"></span>\n</span>\n";

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(292)
	__vue_script__ = __webpack_require__(294)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules\\vue-desktop\\lib\\form\\checkbox.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(295)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./checkbox.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 292 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 293 */,
/* 294 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <input v-el:editor class="d-checkbox" @change="onChange" :id.once="id" type="checkbox" v-model="value" :true-value="trueValue" :false-value="falseValue"/><label :for.once="id" class="d-checkbox-label">{{ label }}</label>
	// </template>
	//
	// <style>
	//   .d-checkbox {
	//     line-height: 24px;
	//     height: 24px;
	//   }
	//
	//   .d-checkbox-label {
	//     display: inline-block;
	//     height: 28px;
	//     vertical-align: top;
	//     font-size: 14px;
	//   }
	// </style>
	//
	// <script type="text/ecmascript-6">
	var seed = 1;

	exports.default = {
	  props: {
	    label: {},
	    trueValue: {
	      default: true
	    },
	    falseValue: {
	      default: false
	    },
	    value: {}
	  },

	  methods: {
	    onChange: function onChange() {
	      this.$emit('change', this, this.$els.editor.checked);
	    }
	  },

	  created: function created() {
	    this.id = 'd_checkbox_' + seed++;
	  }
	};
	// </script>

/***/ },
/* 295 */
/***/ function(module, exports) {

	module.exports = "\n<input v-el:editor class=\"d-checkbox\" @change=\"onChange\" :id.once=\"id\" type=\"checkbox\" v-model=\"value\" :true-value=\"trueValue\" :false-value=\"falseValue\"/><label :for.once=\"id\" class=\"d-checkbox-label\">{{ label }}</label>\n";

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(297)
	__vue_script__ = __webpack_require__(299)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules\\vue-desktop\\lib\\form\\tags.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(300)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./tags.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 297 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 298 */,
/* 299 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="d-tags">
	//     <span class="d-tags-input" @click="activateInput" :class="{ 'active': showItem }">
	//       <span class="d-tags-placeholder" v-if="chosenTags.length === 0 && inputValue.length === 0">{{ placeholder }}</span>
	//
	//       <ul class="d-tags-chosen" v-el:chosen>
	//         <li v-for="chosenTag in chosenTags" :class="{ 'highlight': $index === chosenTags.length - 1  && deleteInput}">
	//           <span>{{ chosenTag }}</span>
	//           <div class="d-tags-delete d-icon d-icon-close" @click="handleDelete($event, chosenTag)"></div>
	//         </li>
	//         <li>
	//           <input type="text" v-el:input @keydown.8="keyDelete" @keydown.enter="keyEnter" @keydown.up="keyUp($event)" @keydown.down="keyDown($event)" @keydown="handleKeydown($event)" v-model="inputValue">
	//         </li>
	//       </ul>
	//     </span>
	//
	//     <ul v-if="showItem" class="d-tags-list" transition="list">
	//       <li class="not-found" v-if="filteredTags.length === 0">未找到该项</li>
	//       <li v-for="tag in filteredTags" @click="handleSelect(tag)" @mouseenter="handleMouseEnter(tag)" :class="{ 'active': activeTag === tag }">{{ tag }}</li>
	//     </ul>
	//   </div>
	// </template>
	//
	// <style>
	//   .d-tags {
	//     width: 100%;
	//     position: relative;
	//   }
	//
	//   .d-tags-input {
	//     display: block;
	//     width: 100%;
	//     box-sizing: border-box;
	//     border-radius: 5px;
	//     border: solid 1px #e5e6e7;
	//     padding: 0 10px 5px;
	//     background-color: #fff;
	//     cursor: text;
	//     position: relative;
	//     transition: .2s;
	//   }
	//
	//   .d-tags-input.active {
	//     border-color: #1ab394;
	//   }
	//
	//   .d-tags-placeholder {
	//     display: inline-block;
	//     color: #aaa;
	//     font-size: 14px;
	//     margin-top: 5px;
	//     height: 18px;
	//     line-height: 18px;
	//     position: absolute;
	//   }
	//
	//   .d-tags-chosen {
	//     list-style: none;
	//     padding: 0;
	//     margin: 0;
	//     box-sizing: border-box;
	//     width: 100%;
	//     float: left;
	//   }
	//
	//   .d-tags-chosen li.highlight {
	//     border: solid 1px #1ab394;
	//     color: #1ab394;
	//     background-color: #fff;
	//   }
	//
	//   .d-tags-chosen li.highlight span {
	//     display: inline-block;
	//     margin-top: -1px;
	//   }
	//
	//   .d-tags-input:after,
	//   .d-tags-chosen:after {
	//     content: '';
	//     height: 0;
	//     display: block;
	//     clear: both;
	//   }
	//
	//   .d-tags-chosen li {
	//     float: left;
	//     display: inline-block;
	//     background-color: #f3f3f3;
	//     color: #666;
	//     font-size: 14px;
	//     padding: 0 8px;
	//     margin-right: 5px;
	//     margin-top: 5px;
	//     border-radius: 3px;
	//     box-sizing: border-box;
	//     border: solid 1px #f3f3f3;
	//     height: 18px;
	//   }
	//
	//   .d-tags-chosen li:last-child {
	//     background-color: #fff;
	//     padding: 0;
	//     border: none;
	//   }
	//
	//   .d-tags-chosen li input {
	//     height: 18px;
	//     line-height: 18px;
	//     padding: 0;
	//     outline: none;
	//     border: none;
	//     -webkit-appearance: none;
	//     font-size: 14px;
	//     max-width: 150px;
	//     width: 50px;
	//   }
	//
	//   .d-tags-chosen li .d-tags-delete {
	//     display: inline-block;
	//     cursor: pointer;
	//     vertical-align: middle;
	//     font-size: 12px;
	//   }
	//
	//   .d-tags-chosen li .d-tags-delete:before {
	//     height: 14px;
	//     line-height: 14px;
	//   }
	//
	//   .d-tags-list {
	//     list-style: none;
	//     padding: 0;
	//     box-sizing: border-box;
	//     border: solid 1px #ccc;
	//     box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
	//     position: absolute;
	//     left: 0;
	//     width: 100%;
	//     max-height: 200px;
	//     overflow-y: auto;
	//   }
	//
	//   .d-tags-list li {
	//     display: block;
	//     font-size: 14px;
	//     height: 25px;
	//     line-height: 25px;
	//     padding: 0 20px;
	//     background-color: #fff;
	//     color: #666;
	//   }
	//
	//   .d-tags-list li.active {
	//     background-color: #428bca;
	//     color: #fff;
	//   }
	//
	//   .list-transition {
	//     transition: .2s;
	//   }
	//
	//   .list-enter,
	//   .list-leave {
	//     opacity: 0;
	//   }
	//
	// </style>
	//
	// <script type="text/ecmascript-6">
	exports.default = {
	  props: {
	    placeholder: {
	      type: String,
	      default: ''
	    },

	    value: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    }
	  },

	  data: function data() {
	    return {
	      showItem: false,
	      chosenTags: [],
	      filteredTags: [],
	      deleteInput: false,
	      inputValue: '',
	      activeTag: null
	    };
	  },


	  watch: {
	    chosenTags: function chosenTags(newVal) {
	      var _this = this;

	      this.$emit('select', newVal);
	      this.$els.input.style.display = 'none';
	      setTimeout(function () {
	        _this.inputValue = '';
	        _this.$els.input.style.display = 'inline-block';
	        _this.$els.input.focus();
	      }, 200);
	    },
	    inputValue: function inputValue(newVal) {
	      var _this2 = this;

	      if (newVal.length > 0) {
	        this.showItem = true;
	      }
	      this.filteredTags = this.value.filter(function (tag) {
	        return _this2.showTag(tag);
	      });
	      this.activeTag = this.filteredTags[0];
	    },
	    showItem: function showItem(newVal) {
	      if (newVal) {
	        document.addEventListener('click', this.windowClick, true);
	      } else {
	        document.removeEventListener('click', this.windowClick, true);
	      }
	    }
	  },

	  methods: {
	    windowClick: function windowClick(event) {
	      if (event.target !== this.$el && event.target !== this.$els.input && event.target !== this.$els.chosen) {
	        this.showItem = false;
	      }
	    },
	    showTag: function showTag(tag) {
	      return tag.indexOf(this.inputValue) !== -1;
	    },
	    activateInput: function activateInput() {
	      this.showItem = !this.showItem;
	      this.activeTag = this.filteredTags[0];
	      this.$els.input.focus();
	    },
	    handleSelect: function handleSelect(tag) {
	      var index = this.chosenTags.indexOf(tag);
	      if (index === -1) {
	        this.chosenTags.push(tag);
	      } else {
	        this.chosenTags.splice(index, 1);
	      }
	      this.showItem = false;
	      this.deleteInput = false;
	    },
	    handleMouseEnter: function handleMouseEnter(tag) {
	      this.activeTag = tag;
	    },
	    handleDelete: function handleDelete(event, tag) {
	      event.stopPropagation();
	      var index = this.chosenTags.indexOf(tag);
	      if (index !== -1) {
	        this.chosenTags.splice(index, 1);
	      }
	    },
	    handleKeydown: function handleKeydown(event) {
	      if (event.which !== 8) {
	        this.deleteInput = false;
	      }
	      this.$els.input.style.width = this.$els.input.value.length * 8 + 50 + 'px';
	    },
	    isChosen: function isChosen(tag) {
	      return this.chosenTags.indexOf(tag) !== -1;
	    },
	    keyDelete: function keyDelete() {
	      if (this.chosenTags.length > 0) {
	        if (this.$els.input.value === '') {
	          if (this.deleteInput) {
	            this.chosenTags.pop();
	          }
	          this.deleteInput = !this.deleteInput;
	        } else {
	          this.deleteInput = false;
	        }
	      }
	    },
	    keyEnter: function keyEnter() {
	      if (this.filteredTags.length === 0) {
	        this.inputValue = '';
	      } else if (this.showItem) {
	        var index = this.chosenTags.indexOf(this.activeTag);
	        if (index === -1) {
	          this.chosenTags.push(this.activeTag);
	        } else {
	          this.chosenTags.splice(index, 1);
	        }
	        this.showItem = false;
	      } else {
	        this.showItem = true;
	      }
	    },
	    keyUp: function keyUp(event) {
	      event.preventDefault();
	      if (this.filteredTags.length > 1) {
	        var index = this.filteredTags.indexOf(this.activeTag);
	        if (index === 0) {
	          this.activeTag = this.filteredTags[this.filteredTags.length - 1];
	        } else {
	          index--;
	          this.activeTag = this.filteredTags[index];
	        }
	      }
	    },
	    keyDown: function keyDown(event) {
	      event.preventDefault();
	      if (this.filteredTags.length > 1) {
	        var index = this.filteredTags.indexOf(this.activeTag);
	        if (index === this.filteredTags.length - 1) {
	          this.activeTag = this.filteredTags[0];
	        } else {
	          index++;
	          this.activeTag = this.filteredTags[index];
	        }
	      }
	    }
	  },

	  ready: function ready() {
	    this.filteredTags = this.value;
	    this.activeTag = this.filteredTags[0];
	  }
	};
	// </script>

/***/ },
/* 300 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"d-tags\">\n  <span class=\"d-tags-input\" @click=\"activateInput\" :class=\"{ 'active': showItem }\">\n    <span class=\"d-tags-placeholder\" v-if=\"chosenTags.length === 0 && inputValue.length === 0\">{{ placeholder }}</span>\n    \n    <ul class=\"d-tags-chosen\" v-el:chosen>\n      <li v-for=\"chosenTag in chosenTags\" :class=\"{ 'highlight': $index === chosenTags.length - 1  && deleteInput}\">\n        <span>{{ chosenTag }}</span>\n        <div class=\"d-tags-delete d-icon d-icon-close\" @click=\"handleDelete($event, chosenTag)\"></div>\n      </li>\n      <li>\n        <input type=\"text\" v-el:input @keydown.8=\"keyDelete\" @keydown.enter=\"keyEnter\" @keydown.up=\"keyUp($event)\" @keydown.down=\"keyDown($event)\" @keydown=\"handleKeydown($event)\" v-model=\"inputValue\">\n      </li>\n    </ul>\n  </span>\n\n  <ul v-if=\"showItem\" class=\"d-tags-list\" transition=\"list\">\n    <li class=\"not-found\" v-if=\"filteredTags.length === 0\">未找到该项</li>\n    <li v-for=\"tag in filteredTags\" @click=\"handleSelect(tag)\" @mouseenter=\"handleMouseEnter(tag)\" :class=\"{ 'active': activeTag === tag }\">{{ tag }}</li>\n  </ul>\n</div>\n";

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(302)
	__vue_script__ = __webpack_require__(304)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules\\vue-desktop\\lib\\form\\radio-group.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(305)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./radio-group.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 302 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 303 */,
/* 304 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <style>
	//   .d-radio-group input[type="radio"] {
	//     display: inline-block;
	//   }
	//
	//   .d-radio-group label {
	//     font-size: 14px;
	//     vertical-align: text-bottom;
	//   }
	// </style>
	//
	// <template>
	//   <div class="d-radio-group"><slot></slot></div>
	// </template>
	//
	// <script type="text/ecmascript-6">
	var idSeed = 1;
	var prefix = 'radio-group-';

	var syncValue = function syncValue(group, value) {
	  var children = group.$children;

	  children.forEach(function (child) {
	    if (child.value !== undefined && child.value == value) {
	      // eslint-disable-line eqeqeq
	      if (child.$els.editor) {
	        child.$els.editor.checked = true;
	      }
	    }
	  });
	};

	exports.default = {
	  props: ['value'],

	  watch: {
	    value: function value(val) {
	      syncValue(this, val);
	    }
	  },

	  methods: {
	    $setValue: function $setValue(value) {
	      this.value = value;
	    }
	  },

	  created: function created() {
	    this.$radioName = prefix + idSeed++;
	  },
	  ready: function ready() {
	    var value = this.value;
	    if (typeof value !== 'undefined') {
	      syncValue(this, value);
	    }
	  }
	};
	// </script>

/***/ },
/* 305 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"d-radio-group\"><slot></slot></div>\n";

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(307)
	__vue_script__ = __webpack_require__(309)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules\\vue-desktop\\lib\\form\\select.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(315)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./select.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 307 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 308 */,
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="d-select">
	//     <slot></slot>
	//     <d-option v-for="item in mapping" :value="item.value || item.label" :show-checkbox="multiSelect">{{item.label}}</d-option>
	//   </div>
	// </template>
	//
	// <style>
	//   .d-select {
	//     border: 1px solid #ccc;
	//     min-width: 140px;
	//     overflow: auto;
	//     box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
	//   }
	// </style>
	//
	// <script type="text/ecmascript-6">
	exports.default = {
	  components: {
	    DOption: __webpack_require__(310)
	  },

	  props: {
	    value: {},
	    multiSelect: {
	      type: Boolean,
	      default: false
	    },
	    mapping: {
	      default: function _default() {
	        return [];
	      }
	    }
	  }
	};
	// </script>

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(311)
	__vue_script__ = __webpack_require__(313)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules\\vue-desktop\\lib\\form\\select-option.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(314)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./select-option.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 311 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 312 */,
/* 313 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="d-select-option" :class="{ selected: !showCheckbox && value === $parent.value }" @click="handleClick">
	//     <input type="checkbox" v-if="showCheckbox" v-model="selected" />
	//     <slot></slot>
	//   </div>
	// </template>
	//
	// <style>
	//   .d-select-option {
	//     padding: 5px;
	//     font-size: 14px;
	//     cursor: pointer;
	//     min-height: 20px;
	//     line-height: 20px;
	//   }
	//
	//   .d-select-option:hover,
	//   .d-select-option.selected {
	//     background-color: #428bca;
	//     color: #fff;
	//   }
	// </style>
	//
	// <script type="text/ecmascript-6">
	exports.default = {
	  props: {
	    value: {},
	    showCheckbox: {
	      type: Boolean,
	      default: false
	    },
	    selected: {
	      type: Boolean
	    }
	  },

	  ready: function ready() {
	    if (this.$parent.multiSelect) {
	      this.showCheckbox = true;
	      var parentValue = this.$parent.value;
	      if (parentValue instanceof Array) {
	        this.selected = parentValue.indexOf(this.value) !== -1;
	      }
	    }
	  },


	  methods: {
	    handleClick: function handleClick() {
	      if (this.showCheckbox) {
	        this.selected = !this.selected;
	        this.$parent.$emit('selection-change');
	      } else {
	        this.$parent.value = this.value;
	        this.$parent.$emit('select', this.value);
	      }
	    }
	  }
	};
	// </script>

/***/ },
/* 314 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"d-select-option\" :class=\"{ selected: !showCheckbox && value === $parent.value }\" @click=\"handleClick\">\n  <input type=\"checkbox\" v-if=\"showCheckbox\" v-model=\"selected\" />\n  <slot></slot>\n</div>\n";

/***/ },
/* 315 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"d-select\">\n  <slot></slot>\n  <d-option v-for=\"item in mapping\" :value=\"item.value || item.label\" :show-checkbox=\"multiSelect\">{{item.label}}</d-option>\n</div>\n";

/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(317)
	__vue_script__ = __webpack_require__(319)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules\\vue-desktop\\lib\\form\\fields\\field.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(321)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./field.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 317 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 318 */,
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _util = __webpack_require__(5);

	var _fieldCommon = __webpack_require__(320);

	var _fieldCommon2 = _interopRequireDefault(_fieldCommon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//   <div class='d-field' :class="{ 'validate-error': hintType === 'error', required: isRequired, 'd-field-hashint': !hideHint }">
	//     <label :style="{ width: labelWidth != null ? labelWidth + 'px' : '' }" v-show="!hideLabel">{{ labelText }}</label>
	//     <div class="d-field-content" :style="{ marginLeft: labelWidth != null ? labelWidth + 'px' : '' }"><slot></slot><div class="d-field-hint" v-if="!hideHint"><i class='d-icon' :class="{ 'd-icon-error': hintType === 'error', 'd-icon-warning': hintType === 'warning' }"></i>{{ hintMessage || '' }}</div></div>
	//   </div>
	// </template>
	//
	// <style>
	//   .d-field {
	//     position: relative;
	//     width: 300px;
	//   }
	//
	//   .d-field-hashint {
	//     min-height: 44px;
	//   }
	//
	//   .d-field.required > label::before {
	//     content: '*';
	//     color: #ed5565;
	//     margin-right: 2px;
	//   }
	//
	//   .d-field::after {
	//     content: "";
	//     display: table;
	//     clear: both;
	//   }
	//
	//   .d-field > label {
	//     float: left;
	//     white-space: nowrap;
	//     box-sizing: border-box;
	//     overflow: hidden;
	//     text-overflow: ellipsis;
	//     width: 120px;
	//     height: 28px;
	//     padding-right: 10px;
	//     font-size: 14px;
	//     line-height: 28px;
	//     text-align: right;
	//     color: #666;
	//   }
	//
	//   .d-field-content {
	//     vertical-align: top;
	//     font-size: 14px;
	//     padding-left: 4px;
	//     padding-right: 24px;
	//     box-sizing: border-box;
	//     border-radius: 2px;
	//     line-height: 28px;
	//   }
	//
	//   .d-field.validate-error .d-field-hint {
	//     color: #ed5565;
	//   }
	//
	//   .d-field-hint {
	//     font-size: 12px;
	//     line-height: 16px;
	//     height: 16px;
	//   }
	//
	//   .d-field-hint .d-icon {
	//     vertical-align: top;
	//   }
	//
	//   .d-field-hint .d-icon-error {
	//     font-size: 14px;
	//     line-height: 14px;
	//     color: #ed5565;
	//   }
	//
	//   .d-field-hint .d-icon-error:before {
	//     margin-right: 3px;
	//     vertical-align: middle;
	//   }
	//
	//   .d-field-hint .d-icon-warning:before {
	//     line-height: 14px;
	//     font-size: 14px;
	//     color: #65c04b;
	//     margin-right: 3px;
	//     vertical-align: middle;
	//   }
	// </style>
	//
	// <script type="text/ecmascript-6">
	exports.default = {
	  props: _fieldCommon2.default.props,

	  created: _fieldCommon2.default.onCreated,

	  compiled: _fieldCommon2.default.onCompiled,

	  destroyed: _fieldCommon2.default.onDestroyed,

	  computed: (0, _util.merge)({}, _fieldCommon2.default.computed)
	};
	// </script>

/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _store = __webpack_require__(235);

	var _store2 = _interopRequireDefault(_store);

	var _util = __webpack_require__(5);

	var _windDom = __webpack_require__(83);

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  props: {
	    form: {},
	    model: {
	      default: function _default() {
	        return {};
	      }
	    },
	    property: {},
	    schema: {},
	    label: {
	      type: String
	    },
	    labelWidth: {
	      default: 120
	    },
	    labelSuffix: {},
	    editorWidth: {},
	    required: {
	      type: Boolean,
	      default: null
	    },
	    hideLabel: {
	      type: Boolean,
	      default: false
	    },
	    hideHint: {
	      type: Boolean,
	      default: false
	    },
	    hintType: {
	      type: String,
	      default: ''
	    },
	    hintMessage: {
	      type: String
	    },
	    parentProperty: {},
	    mapping: {},
	    editorFocused: {
	      type: Boolean,
	      defaultValue: true
	    }
	  },

	  methods: {
	    fetchMapping: function fetchMapping() {
	      var _this = this;

	      var schema = this.fieldSchema;
	      var emptyRecord = this.emptyRecord;
	      if (schema) {
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }

	        var result = schema.getPropertyMapping.apply(schema, [this.property, this.model].concat(args));
	        if (result.then) {
	          result.then(function (value) {
	            _this.selectValue = null;
	            _this.mapping = value;
	            if (emptyRecord) {
	              _this.mapping[''] = null;
	            }
	          });
	        } else {
	          this.mapping = result;
	          if (emptyRecord) {
	            this.mapping[''] = null;
	          }
	        }
	      }
	    },
	    validate: function validate() {
	      var model = this.model;
	      var schema = this.fieldSchema;

	      if (schema) {
	        schema.validateProperty(model, this.property);

	        this.hintMessage = model.$hints[this.property];
	        this.hintType = this.hintMessage ? 'error' : '';
	      }
	    }
	  },

	  events: {
	    formModelChange: function formModelChange() {
	      var form = this.form;
	      if (form && form.model) {
	        if (this.model !== form.model) {
	          this.model = form.model;
	        }
	      }
	    }
	  },

	  computed: {
	    realEditorWidth: function realEditorWidth() {
	      var editorWidth = this.editorWidth;
	      if (editorWidth !== undefined && /^\d+$/.test('' + editorWidth)) {
	        return editorWidth + 'px';
	      }
	      return editorWidth;
	    },
	    labelText: function labelText() {
	      var label = this.label;
	      var labelSuffix = this.labelSuffix;
	      return (label || '') + (labelSuffix || '');
	    },
	    isRequired: function isRequired() {
	      if (typeof this.required !== 'undefined' && this.required !== null) {
	        return this.required;
	      }

	      var property = this.property;
	      var schema = this.fieldSchema;

	      if (schema && property) {
	        return !!schema.getPropertyDescriptor(property).required;
	      }

	      return false;
	    },
	    fieldSchema: function fieldSchema() {
	      var schema = this.schema;
	      if (!schema && this.form && this.form.schema) {
	        schema = this.form.schema;
	      }

	      if (typeof schema === 'string') {
	        schema = this.schema = _store2.default.getSchema(schema);
	      }

	      return schema;
	    }
	  },

	  onCreated: function onCreated() {
	    if (this.$parent.$isForm) {
	      this.form = this.$parent;
	      if (this.form && this.form.model) {
	        this.model = this.form.model;
	      }
	    }
	  },
	  onDestroyed: function onDestroyed() {
	    if (this.model && this.model.$off && this.modelListener) {
	      this.model.$off('reset', this.modelListener);
	    }
	  },
	  onCompiled: function onCompiled() {
	    var _this2 = this;

	    var form = this.form;

	    if (form) {
	      var className = this.$el.className;
	      if (className.indexOf('d-cell-') === -1) {
	        var fieldClass = form.fieldClass;
	        (0, _windDom.addClass)(this.$el, fieldClass);
	      }

	      if (!this._props.labelWidth.raw && form.labelWidth) {
	        this.labelWidth = form.labelWidth;
	      }

	      if (!this._props.labelSuffix.raw && form.labelSuffix) {
	        this.labelSuffix = form.labelSuffix;
	      }

	      if (!this._props.hideHint.raw && form.hideHint) {
	        this.hideHint = form.hideHint;
	      }

	      if (!this._props.editorWidth.raw && form.editorWidth) {
	        this.editorWidth = form.editorWidth;
	      }
	    }

	    if (this.model && this.model.$on) {
	      this.modelListener = function () {
	        _vue2.default.nextTick(function () {
	          _this2.hintType = '';
	          _this2.hintMessage = '';
	        });
	      };
	      this.model.$on('reset', this.modelListener);
	    }

	    if (this.property) {
	      this.$watch('model.' + this.property, function () {
	        if (this.editorFocused) {
	          this.validate();
	        }
	      });

	      var property = this.property;
	      if (!property) return;

	      var schema = this.fieldSchema;
	      if (!schema) return;

	      if (!this.label) {
	        this.label = schema.getPropertyLabel(property);
	      }

	      var mapping = schema.getPropertyMapping(property, this.model);
	      if (!mapping) return;

	      var emptyRecord = this.emptyRecord;
	      if (mapping.then) {
	        mapping.then(function (value) {
	          if (emptyRecord) {
	            _this2.mapping = (0, _util.merge)({ '': null }, value);
	          } else {
	            _this2.mapping = value;
	          }
	        });
	      } else {
	        if (emptyRecord) {
	          this.mapping = (0, _util.merge)({ '': null }, mapping);
	        } else {
	          this.mapping = mapping;
	        }
	      }
	    }

	    if (this.parentProperty) {
	      this.$watch('model.' + this.parentProperty, function () {
	        _this2.fetchMapping();
	      });
	    }
	  }
	};

/***/ },
/* 321 */
/***/ function(module, exports) {

	module.exports = "\n<div class='d-field' :class=\"{ 'validate-error': hintType === 'error', required: isRequired, 'd-field-hashint': !hideHint }\">\n  <label :style=\"{ width: labelWidth != null ? labelWidth + 'px' : '' }\" v-show=\"!hideLabel\">{{ labelText }}</label>\n  <div class=\"d-field-content\" :style=\"{ marginLeft: labelWidth != null ? labelWidth + 'px' : '' }\"><slot></slot><div class=\"d-field-hint\" v-if=\"!hideHint\"><i class='d-icon' :class=\"{ 'd-icon-error': hintType === 'error', 'd-icon-warning': hintType === 'warning' }\"></i>{{ hintMessage || '' }}</div></div>\n</div>\n";

/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(323)
	__vue_script__ = __webpack_require__(325)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules\\vue-desktop\\lib\\form\\fields\\text.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(326)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./text.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 323 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 324 */,
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _util = __webpack_require__(5);

	var _fieldCommon = __webpack_require__(320);

	var _fieldCommon2 = _interopRequireDefault(_fieldCommon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//   <div class='d-field d-textfield' :class="{ 'validate-error': hintType === 'error', required: isRequired, 'd-field-hashint': !hideHint }">
	//     <label :style="{ width: labelWidth != null ? labelWidth + 'px' : '' }" v-show="!hideLabel">{{ labelText }}</label>
	//     <div class="d-field-content" :style="{ marginLeft: labelWidth != null ? labelWidth + 'px' : '' }">
	//       <editor></editor>
	//       <slot></slot>
	//       <div class="d-field-hint" v-if="!hideHint">
	//         <i class='d-icon' :class="{ 'd-icon-error': hintType === 'error', 'd-icon-warning': hintType === 'warning' }"></i>{{ hintMessage || '' }}
	//       </div>
	//     </div>
	//   </div>
	// </template>
	//
	// <style>
	//   .d-textfield {
	//   }
	//
	//   .d-text-field.validate-error input {
	//     border-color: #ed5565;
	//   }
	//
	//   .d-textfield .d-text-editor {
	//     width: 100%;
	//   }
	// </style>
	//
	// <script type="text/ecmascript-6">
	var TYPES_MAP = {
	  date: 'date',
	  datetime: 'datetime',
	  integer: 'number',
	  float: 'number',
	  number: 'number'
	};

	exports.default = {
	  props: (0, _util.merge)({
	    type: {
	      type: String
	    },

	    editorHeight: {
	      type: Number
	    },

	    ppturl: {
	      type: String
	    },

	    placeholder: {},

	    lazy: {
	      type: Boolean,
	      default: false
	    }
	  }, _fieldCommon2.default.props),

	  events: _fieldCommon2.default.events,

	  components: {
	    editor: {
	      inherit: true,
	      template: '',
	      components: {
	        DTextEditor: __webpack_require__(274)
	      },
	      created: function created() {
	        this.$options.template = '<d-text-editor :style="{ width: $parent.realEditorWidth ? $parent.realEditorWidth : \'\' }" @focus="$parent.handleFocus" type="' + this.$parent.editorType + '" :value.sync="' + ('$parent.model.' + this.$parent.property) + '" :ppturl="$parent.ppturl" :height="$parent.editorHeight" :placeholder="$parent.placeholder || \'\'"/>';
	      }
	    }
	  },

	  computed: (0, _util.merge)({
	    editorType: function editorType() {
	      if (this.type) {
	        return this.type;
	      }

	      if (this.property) {
	        var fieldSchema = this.fieldSchema;
	        if (fieldSchema) {
	          var descriptor = fieldSchema.getPropertyDescriptor(this.property);
	          if (descriptor) {
	            if (TYPES_MAP[descriptor.type]) {
	              return TYPES_MAP[descriptor.type];
	            }
	          }
	        }
	      }

	      return 'text';
	    }
	  }, _fieldCommon2.default.computed),

	  created: _fieldCommon2.default.onCreated,

	  destroyed: _fieldCommon2.default.onDestroyed,

	  beforeCompile: function beforeCompile() {
	    this.editorFocused = false;
	  },


	  compiled: _fieldCommon2.default.onCompiled,

	  methods: (0, _util.merge)({
	    handleFocus: function handleFocus() {
	      this.editorFocused = true;
	    },
	    handleBlur: function handleBlur() {
	      this.editorFocused = false;
	    }
	  }, _fieldCommon2.default.methods)
	};
	// </script>

/***/ },
/* 326 */
/***/ function(module, exports) {

	module.exports = "\n<div class='d-field d-textfield' :class=\"{ 'validate-error': hintType === 'error', required: isRequired, 'd-field-hashint': !hideHint }\">\n  <label :style=\"{ width: labelWidth != null ? labelWidth + 'px' : '' }\" v-show=\"!hideLabel\">{{ labelText }}</label>\n  <div class=\"d-field-content\" :style=\"{ marginLeft: labelWidth != null ? labelWidth + 'px' : '' }\">\n    <editor></editor>\n    <slot></slot>\n    <div class=\"d-field-hint\" v-if=\"!hideHint\">\n      <i class='d-icon' :class=\"{ 'd-icon-error': hintType === 'error', 'd-icon-warning': hintType === 'warning' }\"></i>{{ hintMessage || '' }}\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(328)
	__vue_script__ = __webpack_require__(330)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules\\vue-desktop\\lib\\form\\fields\\label.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(331)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./label.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 328 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 329 */,
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _util = __webpack_require__(5);

	var _fieldCommon = __webpack_require__(320);

	var _fieldCommon2 = _interopRequireDefault(_fieldCommon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//   <div class='d-field d-labelfield' :class="{ 'validate-error': hintType === 'error', required: isRequired, 'd-field-hashint': !hideHint }">
	//     <label :style="{ width: labelWidth != null ? labelWidth + 'px' : '' }" v-show="!hideLabel">{{ labelText }}</label>
	//     <div class="d-field-content" :style="{ marginLeft: labelWidth != null ? labelWidth + 'px' : '' }">
	//       <div class="d-labelfield-content">
	//         {{ textValue }}
	//       </div>
	//       <div class="d-field-hint" v-if="!hideHint">
	//         <i class='d-icon' :class="{ 'd-icon-error': hintType === 'error', 'd-icon-warning': hintType === 'warning' }"></i>{{ hintMessage || '' }}
	//       </div>
	//     </div>
	//   </div>
	// </template>
	//
	// <style>
	//   .d-labelfield {
	//   }
	//
	//   .d-labelfield-content {
	//     font-size: 14px;
	//     padding-left: 4px;
	//     padding-right: 24px;
	//     box-sizing: border-box;
	//     border-radius: 2px;
	//     line-height: 28px;
	//     height: 28px;
	//   }
	// </style>
	//
	// <script type="text/ecmascript-6">
	exports.default = {
	  props: _fieldCommon2.default.props,

	  computed: (0, _util.merge)({
	    textValue: function textValue() {
	      var mapping = this.mapping;
	      if (mapping) {
	        var reversedMap = {};

	        for (var label in mapping) {
	          if (mapping.hasOwnProperty(label)) {
	            var value = mapping[label];
	            reversedMap[value] = label;
	          }
	        }

	        var currentValue = (0, _util.getPath)(this.model, this.property);
	        if (mapping && currentValue !== null && currentValue !== undefined) {
	          return reversedMap[currentValue];
	        }
	      }

	      return (0, _util.getPath)(this.model, this.property);
	    }
	  }, _fieldCommon2.default.computed),

	  events: _fieldCommon2.default.events,

	  created: _fieldCommon2.default.onCreated,

	  destroyed: _fieldCommon2.default.onDestroyed,

	  compiled: _fieldCommon2.default.onCompiled,

	  methods: _fieldCommon2.default.methods
	};
	// </script>

/***/ },
/* 331 */
/***/ function(module, exports) {

	module.exports = "\n<div class='d-field d-labelfield' :class=\"{ 'validate-error': hintType === 'error', required: isRequired, 'd-field-hashint': !hideHint }\">\n  <label :style=\"{ width: labelWidth != null ? labelWidth + 'px' : '' }\" v-show=\"!hideLabel\">{{ labelText }}</label>\n  <div class=\"d-field-content\" :style=\"{ marginLeft: labelWidth != null ? labelWidth + 'px' : '' }\">\n    <div class=\"d-labelfield-content\">\n      {{ textValue }}\n    </div>\n    <div class=\"d-field-hint\" v-if=\"!hideHint\">\n      <i class='d-icon' :class=\"{ 'd-icon-error': hintType === 'error', 'd-icon-warning': hintType === 'warning' }\"></i>{{ hintMessage || '' }}\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(333)
	__vue_script__ = __webpack_require__(335)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules\\vue-desktop\\lib\\form\\fields\\check.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(336)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./check.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 333 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 334 */,
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _util = __webpack_require__(5);

	var _fieldCommon = __webpack_require__(320);

	var _fieldCommon2 = _interopRequireDefault(_fieldCommon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//   <div class='d-field d-checkboxfield' :class="{ 'validate-error': hintType === 'error', required: isRequired, 'd-field-hashint': !hideHint }">
	//     <label :style="{ width: labelWidth != null ? labelWidth + 'px' : '' }" v-show="!hideLabel">{{ labelText }}</label>
	//     <div class="d-field-content" :style="{ marginLeft: labelWidth != null ? labelWidth + 'px' : '' }">
	//       <editor></editor>
	//       <div class="d-field-hint" v-if="!hideHint">
	//         <i class='d-icon' :class="{ 'd-icon-error': hintType === 'error', 'd-icon-warning': hintType === 'warning' }"></i>{{ hintMessage || '' }}
	//       </div>
	//     </div>
	//   </div>
	// </template>
	//
	// <style>
	//   .d-checkboxfield {
	//   }
	//
	//   .d-checkboxfield input[type="checkbox"] {
	//     line-height: 24px;
	//     height: 24px;
	//   }
	// </style>
	//
	// <script type="text/ecmascript-6">
	exports.default = {
	  props: (0, _util.merge)({
	    trueValue: {
	      default: true
	    },
	    falseValue: {
	      default: false
	    }
	  }, _fieldCommon2.default.props),

	  components: {
	    editor: {
	      inherit: true,
	      template: '',
	      created: function created() {
	        this.$options.template = '<input type="checkbox" v-model="' + ('$parent.model.' + this.$parent.property) + '" :true-value.once="$parent.trueValue" :false-value.once="$parent.falseValue"/>';
	      }
	    }
	  },

	  computed: (0, _util.merge)({}, _fieldCommon2.default.computed),

	  created: _fieldCommon2.default.onCreated,

	  beforeCompile: function beforeCompile() {
	    if (this.property) {
	      var schema = this.fieldSchema;
	      if (schema) {
	        var descriptor = schema.getPropertyDescriptor(this.property);
	        if (!descriptor) return;

	        if (descriptor.trueValue !== undefined) {
	          this.trueValue = descriptor.trueValue;
	        }

	        if (descriptor.falseValue !== undefined) {
	          this.falseValue = descriptor.falseValue;
	        }
	      }
	    }
	  },


	  events: _fieldCommon2.default.events,

	  compiled: _fieldCommon2.default.onCompiled,

	  destroyed: _fieldCommon2.default.onDestroyed,

	  methods: (0, _util.merge)({}, _fieldCommon2.default.methods)
	};
	// </script>

/***/ },
/* 336 */
/***/ function(module, exports) {

	module.exports = "\n<div class='d-field d-checkboxfield' :class=\"{ 'validate-error': hintType === 'error', required: isRequired, 'd-field-hashint': !hideHint }\">\n  <label :style=\"{ width: labelWidth != null ? labelWidth + 'px' : '' }\" v-show=\"!hideLabel\">{{ labelText }}</label>\n  <div class=\"d-field-content\" :style=\"{ marginLeft: labelWidth != null ? labelWidth + 'px' : '' }\">\n    <editor></editor>\n    <div class=\"d-field-hint\" v-if=\"!hideHint\">\n      <i class='d-icon' :class=\"{ 'd-icon-error': hintType === 'error', 'd-icon-warning': hintType === 'warning' }\"></i>{{ hintMessage || '' }}\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(338)
	__vue_script__ = __webpack_require__(340)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules\\vue-desktop\\lib\\form\\fields\\select.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(341)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./select.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 338 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 339 */,
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _util = __webpack_require__(5);

	var _fieldCommon = __webpack_require__(320);

	var _fieldCommon2 = _interopRequireDefault(_fieldCommon);

	var _dropdown = __webpack_require__(174);

	var _dropdown2 = _interopRequireDefault(_dropdown);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var FUNCTION_KEYS = [13, 16, 17, 18, 19, 20, 27, 33, 34, 35, 36, 37, 38, 39, 40]; // <template>
	//   <div class='d-field d-selectfield' :class="{ 'validate-error': hintType === 'error', required: isRequired, 'd-field-hashint': !hideHint }">
	//     <label :style="{ width: labelWidth != null ? labelWidth + 'px' : '' }" v-show="!hideLabel">{{ labelText }}</label>
	//     <div class="d-field-content" :style="{ marginLeft: labelWidth != null ? labelWidth + 'px' : '' }">
	//       <div @click="toggleSelect($event)" class="d-selectfield-box" :class="{ active: selectVisible }" :style="{ width: realEditorWidth ? realEditorWidth : '' }">
	//         <input class="d-selectfield-box-text" :placeholder="placeh" @keydown="handleKeydown" @input="handleInput" v-model="searchText" /><span class="d-selectfield-trigger d-icon d-icon-arrow-down"></span>
	//         <d-select v-ref:select v-if="selectActive" v-show="selectVisible" :multi-select="multiSelect" :value.sync="selectValue" @select="selectVisible = false" @selection-change="handleSelectionChange" @click="$event.stopPropagation()">
	//           <d-option v-for="(key, val) in mapping" :value="val" :show-checkbox="multiSelect">{{ key }}</d-option>
	//         </d-select>
	//       </div>
	//       <div class="d-field-hint" v-if="!hideHint">
	//         <i class='d-icon' :class="{ 'd-icon-error': hintType === 'error', 'd-icon-warning': hintType === 'warning' }"></i>{{hintMessage || '' }}
	//       </div>
	//     </div>
	//   </div>
	// </template>
	//
	// <style>
	//   .d-selectfield {
	//   }
	//
	//   .d-selectfield .d-select {
	//     position: absolute;
	//     top: 32px;
	//     max-height: 200px;
	//     z-index: 1;
	//     background: #fff;
	//     width: 100%;
	//     left: 0;
	//     box-sizing: border-box;
	//   }
	//
	//   .d-selectfield-box {
	//     position: relative;
	//     cursor: pointer;
	//     font-size: 14px;
	//     padding-left: 4px;
	//     border: 1px solid #e5e6e7;
	//     background-color: #fff;
	//     width: 100%;
	//     padding-right: 24px;
	//     box-sizing: border-box;
	//     border-radius: 2px;
	//     line-height: 28px;
	//     height: 28px;
	//     transition: border 0.3s;
	//   }
	//
	//   .d-selectfield-box.active {
	//     border-color: #1ab394;
	//   }
	//
	//   .d-selectfield-box .d-selectfield-trigger {
	//     position: absolute;
	//     top: 0;
	//     right: 0;
	//     margin-right: 4px;
	//   }
	//
	//   .d-selectfield-box-text {
	//     display: inline-block;
	//     overflow: hidden;
	//     width: 100%;
	//     line-height: 24px;
	//     vertical-align: top;
	//     border: none;
	//     outline: none;
	//   }
	// </style>
	//
	// <script type="text/ecmascript-6">
	exports.default = {
	  props: (0, _util.merge)({
	    multiSelect: {
	      type: Boolean,
	      default: false
	    },

	    emptyRecord: {
	      type: Boolean,
	      default: false
	    },
	    placeh: {
	      type: String
	    },
	    editable: {
	      type: Boolean,
	      default: false
	    }
	  }, _fieldCommon2.default.props),

	  data: function data() {
	    return {
	      searchModel: '',
	      selectActive: false,
	      selectVisible: false
	    };
	  },


	  computed: (0, _util.merge)({
	    textValue: function textValue() {
	      var mapping = this.mapping;
	      var selectValue = this.selectValue;

	      var reversedMap = {};

	      for (var label in mapping) {
	        if (mapping.hasOwnProperty(label)) {
	          var value = mapping[label];
	          reversedMap[value] = label;
	        }
	      }

	      if (selectValue instanceof Array) {
	        return selectValue.map(function (item) {
	          return reversedMap[item];
	        }).join(',');
	      }

	      if (mapping && selectValue !== null && selectValue !== undefined) {
	        return reversedMap[selectValue];
	      }
	    },


	    searchText: {
	      get: function get() {
	        if (!this.selectVisible) {
	          return this.textValue;
	        }
	        return this.searchModel;
	      },
	      set: function set(newValue) {
	        this.searchModel = newValue;
	      }
	    },

	    selectValue: {
	      get: function get() {
	        if (this.model && this.property) {
	          return (0, _util.getPath)(this.model, this.property);
	        }
	      },
	      set: function set(newValue) {
	        if (this.model && this.property) {
	          (0, _util.setPath)(this.model, this.property, newValue);
	        }
	      }
	    }
	  }, _fieldCommon2.default.computed),

	  components: {
	    DSelect: __webpack_require__(306),
	    DOption: __webpack_require__(310)
	  },

	  events: _fieldCommon2.default.events,

	  created: _fieldCommon2.default.onCreated,

	  destroyed: _fieldCommon2.default.onDestroyed,

	  compiled: _fieldCommon2.default.onCompiled,

	  watch: {
	    selectVisible: function selectVisible(newVal) {
	      if (newVal === true) {
	        _dropdown2.default.open(this);
	      } else {
	        _dropdown2.default.close(this);
	      }
	    }
	  },

	  methods: (0, _util.merge)({
	    onDocumentClick: function onDocumentClick() {
	      this.selectVisible = false;
	    },
	    handleKeydown: function handleKeydown(event) {
	      var keyCode = event.keyCode;
	      if (!this.editable && FUNCTION_KEYS.indexOf(keyCode) === -1) {
	        event.preventDefault();
	      }

	      if (keyCode === 27) {
	        this.selectVisible = false;
	      }
	    },
	    handleInput: function handleInput() {
	      this.fetchMapping(this.searchModel);
	    },
	    handleSelectionChange: function handleSelectionChange() {
	      var children = this.$refs.select.$children;
	      var value = [];

	      children.forEach(function (child) {
	        if (child.selected) {
	          value.push(child.value);
	        }
	      });
	      this.selectValue = value;
	    },
	    toggleSelect: function toggleSelect() {
	      this.selectActive = true;
	      this.selectVisible = !this.selectVisible;
	    },
	    showSelect: function showSelect() {
	      this.selectActive = true;
	      this.selectVisible = true;
	    },
	    hideSelect: function hideSelect() {
	      this.selectVisible = false;
	    }
	  }, _fieldCommon2.default.methods)
	};
	// </script>

/***/ },
/* 341 */
/***/ function(module, exports) {

	module.exports = "\n<div class='d-field d-selectfield' :class=\"{ 'validate-error': hintType === 'error', required: isRequired, 'd-field-hashint': !hideHint }\">\n  <label :style=\"{ width: labelWidth != null ? labelWidth + 'px' : '' }\" v-show=\"!hideLabel\">{{ labelText }}</label>\n  <div class=\"d-field-content\" :style=\"{ marginLeft: labelWidth != null ? labelWidth + 'px' : '' }\">\n    <div @click=\"toggleSelect($event)\" class=\"d-selectfield-box\" :class=\"{ active: selectVisible }\" :style=\"{ width: realEditorWidth ? realEditorWidth : '' }\">\n      <input class=\"d-selectfield-box-text\" :placeholder=\"placeh\" @keydown=\"handleKeydown\" @input=\"handleInput\" v-model=\"searchText\" /><span class=\"d-selectfield-trigger d-icon d-icon-arrow-down\"></span>\n      <d-select v-ref:select v-if=\"selectActive\" v-show=\"selectVisible\" :multi-select=\"multiSelect\" :value.sync=\"selectValue\" @select=\"selectVisible = false\" @selection-change=\"handleSelectionChange\" @click=\"$event.stopPropagation()\">\n        <d-option v-for=\"(key, val) in mapping\" :value=\"val\" :show-checkbox=\"multiSelect\">{{ key }}</d-option>\n      </d-select>\n    </div>\n    <div class=\"d-field-hint\" v-if=\"!hideHint\">\n      <i class='d-icon' :class=\"{ 'd-icon-error': hintType === 'error', 'd-icon-warning': hintType === 'warning' }\"></i>{{hintMessage || '' }}\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(343)
	__vue_script__ = __webpack_require__(345)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules\\vue-desktop\\lib\\form\\fields\\radio.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(346)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./radio.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 343 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 344 */,
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _util = __webpack_require__(5);

	var _fieldCommon = __webpack_require__(320);

	var _fieldCommon2 = _interopRequireDefault(_fieldCommon);

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  props: (0, _util.merge)({}, _fieldCommon2.default.props),

	  computed: (0, _util.merge)({
	    $radioName: function $radioName() {
	      return this.$refs.group.$radioName;
	    },
	    $setValue: function $setValue() {
	      return this.$refs.group.$setValue;
	    },

	    editorValue: {
	      get: function get() {
	        if (this.model && this.property) {
	          return (0, _util.getPath)(this.model, this.property);
	        }
	      },
	      set: function set(newValue) {
	        if (this.model && this.property) {
	          (0, _util.setPath)(this.model, this.property, newValue);
	        }
	      }
	    }
	  }, _fieldCommon2.default.computed),

	  components: {
	    DRadioGroup: __webpack_require__(301),
	    DRadio: __webpack_require__(271)
	  },

	  watch: {
	    mapping: function mapping() {
	      var _this = this;

	      var oldValue = this.$refs.group.value;
	      this.$refs.group.value = null;
	      _vue2.default.nextTick(function () {
	        _this.$refs.group.value = oldValue;
	      });
	    }
	  },

	  events: _fieldCommon2.default.events,

	  created: _fieldCommon2.default.onCreated,

	  destroyed: _fieldCommon2.default.onDestroyed,

	  compiled: _fieldCommon2.default.onCompiled,

	  methods: (0, _util.merge)({}, _fieldCommon2.default.methods)
	};
	// </script>
	// <template>
	//   <div class='d-field d-radiogroupfield' :class="{ 'validate-error': hintType === 'error', required: isRequired, 'd-field-hashint': !hideHint }">
	//     <label :style="{ width: labelWidth != null ? labelWidth + 'px' : '' }" v-show="!hideLabel">{{ labelText }}</label>
	//     <div class="d-field-content" :style="{ marginLeft: labelWidth != null ? labelWidth + 'px' : '' }">
	//       <d-radio-group :value.sync="editorValue" v-ref:group><d-radio v-for="(key, val) in mapping" :value="val">{{key}}</d-radio><slot></slot></d-radio-group>
	//       <div class="d-field-hint" v-if="!hideHint">
	//         <i class='d-icon' :class="{ 'd-icon-error': hintType === 'error', 'd-icon-warning': hintType === 'warning' }"></i>{{ hintMessage || '' }}
	//       </div>
	//     </div>
	//   </div>
	// </template>
	//
	// <style>
	//   .d-radiogroupfield {
	//   }
	//
	//   .d-radiogroupfield .d-radio-group {
	//     line-height: 30px;
	//   }
	//
	//   .d-radiogroupfield .d-radio-group input {
	//     height: 24px;
	//   }
	// </style>
	//
	// <script type="text/ecmascript-6">

/***/ },
/* 346 */
/***/ function(module, exports) {

	module.exports = "\n<div class='d-field d-radiogroupfield' :class=\"{ 'validate-error': hintType === 'error', required: isRequired, 'd-field-hashint': !hideHint }\">\n  <label :style=\"{ width: labelWidth != null ? labelWidth + 'px' : '' }\" v-show=\"!hideLabel\">{{ labelText }}</label>\n  <div class=\"d-field-content\" :style=\"{ marginLeft: labelWidth != null ? labelWidth + 'px' : '' }\">\n    <d-radio-group :value.sync=\"editorValue\" v-ref:group><d-radio v-for=\"(key, val) in mapping\" :value=\"val\">{{key}}</d-radio><slot></slot></d-radio-group>\n    <div class=\"d-field-hint\" v-if=\"!hideHint\">\n      <i class='d-icon' :class=\"{ 'd-icon-error': hintType === 'error', 'd-icon-warning': hintType === 'warning' }\"></i>{{ hintMessage || '' }}\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(348)
	__vue_script__ = __webpack_require__(350)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules\\vue-desktop\\lib\\form\\fields\\check-group.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(351)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./check-group.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 348 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 349 */,
/* 350 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _util = __webpack_require__(5);

	var _fieldCommon = __webpack_require__(320);

	var _fieldCommon2 = _interopRequireDefault(_fieldCommon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//   <div class='d-field d-checkgroupfield' :class="{ 'validate-error': hintType === 'error', required: isRequired, 'd-field-hashint': !hideHint }">
	//     <label :style="{ width: labelWidth != null ? labelWidth + 'px' : '' }" v-show="!hideLabel">{{ labelText }}</label>
	//     <div class="d-field-content" :style="{ marginLeft: labelWidth != null ? labelWidth + 'px' : '' }">
	//       <span class="{{ checkboxClass }}" v-for="(key, val) in mapping">
	//         <d-checkbox :value="selectedValue && selectedValue.indexOf(val) !== -1 ? val : false"
	//           :true-value="val" :label="key" @change="handleValueChange"></d-checkbox>
	//       </span>
	//       <div class="d-field-hint" v-if="!hideHint">
	//         <i class='d-icon' :class="{ 'd-icon-error': hintType === 'error', 'd-icon-warning': hintType === 'warning' }"></i>{{ hintMessage || '' }}
	//       </div>
	//     </div>
	//   </div>
	// </template>
	//
	// <style>
	//   .d-checkgroupfield {
	//   }
	// </style>
	//
	// <script type="text/ecmascript-6">
	exports.default = {
	  props: (0, _util.merge)({
	    cols: {
	      type: Number
	    }
	  }, _fieldCommon2.default.props),

	  computed: (0, _util.merge)({
	    selectedValue: {
	      get: function get() {
	        if (this.model && this.property) {
	          return (0, _util.getPath)(this.model, this.property);
	        }
	        return [];
	      },
	      set: function set(newValue) {
	        if (this.model && this.property) {
	          (0, _util.setPath)(this.model, this.property, newValue);
	        }
	      }
	    },

	    checkboxClass: function checkboxClass() {
	      var cols = this.cols;
	      if (cols >= 1 && cols <= 6) {
	        return 'd-cell-1-' + cols;
	      }
	      return '';
	    }
	  }, _fieldCommon2.default.computed),

	  components: {
	    DCheckbox: __webpack_require__(291)
	  },

	  events: _fieldCommon2.default.events,

	  created: _fieldCommon2.default.onCreated,

	  destroyed: _fieldCommon2.default.onDestroyed,

	  compiled: _fieldCommon2.default.onCompiled,

	  methods: (0, _util.merge)({
	    handleValueChange: function handleValueChange(checkbox, checked) {
	      var trueValue = checkbox.trueValue;
	      var selectedValue = this.selectedValue;
	      if (!selectedValue) {
	        selectedValue = this.selectedValue = [];
	      }
	      if (checked) {
	        if (selectedValue.indexOf(trueValue) === -1) {
	          selectedValue.push(trueValue);
	        }
	      } else {
	        selectedValue.splice(selectedValue.indexOf(trueValue), 1);
	      }
	    }
	  }, _fieldCommon2.default.methods)
	};
	// </script>

/***/ },
/* 351 */
/***/ function(module, exports) {

	module.exports = "\n<div class='d-field d-checkgroupfield' :class=\"{ 'validate-error': hintType === 'error', required: isRequired, 'd-field-hashint': !hideHint }\">\n  <label :style=\"{ width: labelWidth != null ? labelWidth + 'px' : '' }\" v-show=\"!hideLabel\">{{ labelText }}</label>\n  <div class=\"d-field-content\" :style=\"{ marginLeft: labelWidth != null ? labelWidth + 'px' : '' }\">\n    <span class=\"{{ checkboxClass }}\" v-for=\"(key, val) in mapping\">\n      <d-checkbox :value=\"selectedValue && selectedValue.indexOf(val) !== -1 ? val : false\"\n        :true-value=\"val\" :label=\"key\" @change=\"handleValueChange\"></d-checkbox>\n    </span>\n    <div class=\"d-field-hint\" v-if=\"!hideHint\">\n      <i class='d-icon' :class=\"{ 'd-icon-error': hintType === 'error', 'd-icon-warning': hintType === 'warning' }\"></i>{{ hintMessage || '' }}\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 352 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(353)
	__vue_script__ = __webpack_require__(355)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules\\vue-desktop\\lib\\form\\upload.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(356)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./upload.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 353 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 354 */,
/* 355 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="upload">
	//     <!-- 上传文件 -->
	//     <ul class="upload-files" v-on:dragenter.stop.prevent v-on:dragover.stop.prevent v-on:drop.stop.prevent="onFileDrop">
	//       <li v-if="files.length === 0" class="upload-files-tip">Drop Picture here</li>
	//       <li class="upload-file" v-for="file in files" title="file.name">
	//         <img class="upload-file-pic" v-bind:src="file.imgUrl" alt="">
	//         <span class="upload-file-name">{{file.name}}</span>
	//       </li>
	//     </ul>
	//     <form class="upload-operate" enctype="multipart/form-data">
	//       <button class="btn btn-default btn-file"><input type="file" name="picture[]" @change="onChange($event)" multiple><span class="d-icon-plus">+</span>添加图片</button>
	//       <button class="btn btn-primary" @click="upload()" :disabled="uploading">{{uploading ? '正在上传...' : '上传'}}</button>
	//     </form>
	//     <!-- 上传结果 -->
	//     <div class="upload-result">
	//       <h3 class="upload-result-title">上传结果<span>（历史上传记录最多保存 <em>{{maxRecords}}</em> 条）</span></h3>
	//       <table>
	//         <thead>
	//           <tr>
	//             <th width="40px">#</th>
	//             <th width="70px">图片</th>
	//             <th width="100px">文件名</th>
	//             <th width="80px">大小</th>
	//             <th>链接</th>
	//             <th width="120px">操作</th>
	//           </tr>
	//         </thead>
	//         <tbody>
	//           <tr v-for="item in result">
	//             <td>{{$index}}</td>
	//             <td><img class="upload-result-pic" v-bind:src="item.url"></td>
	//             <td>{{item.name}}</td>
	//             <td>{{item.size | size}}</td>
	//             <td class="upload-result-link"><a href="{{item.url}}" target="_blank">{{item.url}}</a></td>
	//             <td><button class="btn btn-primary" @click="copyUrl(item.url)">复制</button><button class="btn btn-default" @click="deleteRecord($index)">删除</button></td>
	//           </tr>
	//         </tbody>
	//       </table>
	//       <input class="upload-result-clipboard" v-el:clipboard type="text" v-model="copyText" contenteditable>
	//     </div>
	//   </div>
	// </template>
	//
	// <style>
	// .upload {
	//   margin: 30px auto;
	//   border-color: #e5e5e5 #eee #eee;
	//   width: 940px;
	//   padding: 20px;
	// }
	// .upload h2 {
	//   color: #333;
	//   margin-bottom: 20px;
	// }
	// .upload li {
	//   list-style: none;
	// }
	// .upload .btn {
	//   padding: 5px 12px;
	//   font-size: 13px;
	//   line-height: 1.5;
	//   border-radius: 3px;
	// }
	// .upload .btn-default {
	//   border: 1px solid rgba(0,0,0,0.15);
	// }
	// .upload .btn:disabled {
	//   background-color: #ADB2B5;
	//   border-color: #898D90;
	//   color: #eee;
	//   cursor: default;
	// }
	// .upload .btn .d-icon-plus {
	//   font-weight: bold;
	//   font-size: 16px;
	//   line-height: 1;
	//   margin-right: 5px;
	// }
	// .upload-operate button {
	//   margin-right: 5px;
	//   width: 95px;
	// }
	// .upload-operate .btn-file {
	//   position: relative;
	//   overflow: hidden;
	// }
	// .upload-operate .btn-file input {
	//   position: absolute;
	//   cursor: pointer;
	//   top: 0;
	//   left: 0;
	//   opacity: 0;
	//   font-size: 100px;
	// }
	//
	// /* 上传文件列表 */
	// .upload-files {
	//   overflow: hidden;
	//   margin-bottom: 20px;
	//   border: 2px dashed #8E8383;
	//   padding: 20px 0 0 20px;
	// }
	// .upload-files-tip {
	//   font-size: 40px;
	//   color: rgb(101, 107, 121);
	//   line-height: 120px;
	//   text-indent: 50px;
	// }
	// .upload-file {
	//   float: left;
	//   margin: 0 20px 20px 0;
	//   text-align: center;
	//   overflow: hidden;
	//   text-overflow: ellipsis;
	//   white-space: nowrap;
	//   width: 110px;
	//   height: 110px;
	//   box-shadow: 0 1px 2px rgba(0,0,0,0.075);
	//   padding: 4px;
	//   border: 1px solid #ccc;
	//   border-radius: 4px;
	// }
	// .upload-file-pic {
	//   width: 100%;
	//   height: 100%;
	//   display: block;
	// }
	// .upload-file-name {
	//   font-size: 13px;
	//   width: 100%;
	// }
	//
	// /* 上传结果列表 */
	// .upload-result {
	//   margin-top: 40px;
	//   color: rgb(101, 107, 121);
	//   border-radius: 3px;
	// }
	// .upload-result-title {
	//   text-align: left;
	//   line-height: 1.5;
	//   font-size: 18px;
	// }
	// .upload-result-title span {
	//   font-size: 12px;
	//   color: #666;
	// }
	// .upload-result-title span em {
	//   color: #FF1C1C;
	//   font-style: normal;
	// }
	// .upload-result table {
	//   border-collapse: collapse;
	//   table-layout: fixed;
	//   width: 100%;
	// }
	// .upload-result th,
	// .upload-result td {
	//   text-align: center;
	//   border-bottom: 1px solid rgba(216, 210, 210, 0.35);
	//   padding: 8px;
	//   line-height: 1.5;
	//   overflow: hidden;
	//   text-overflow: ellipsis;
	//   white-space: nowrap;
	// }
	// .upload-result thead th {
	//   font-weight: 600;
	//   text-transform: uppercase;
	// }
	// .upload-result tbody tr:nth-of-type(odd) {
	//   background-color: #fff;
	// }
	// .upload-result button + button {
	//   margin-left: 5px;
	// }
	// .upload-result-pic {
	//   width: 100%;
	// }
	// .upload-result-link {
	//   white-space: normal;
	//   text-overflow: initial;
	// }
	// .upload-result-link a {
	//   color: #254563;
	// }
	// .upload-result-link a:hover {
	//   color: #55aff0;
	//   text-decoration: underline;
	// }
	// .upload-result-clipboard {
	//   opacity: 0;
	// }
	//
	// </style>
	//
	// <script type="text/ecmascript-6">
	exports.default = {
	  data: function data() {
	    return {
	      maxRecords: 20,
	      uploading: false,
	      files: [],
	      result: JSON.parse(localStorage.getItem('uploadPicture[]')) || [],
	      url: ''
	    };
	  },

	  methods: {
	    upload: function upload() {
	      var _this = this;

	      if (this.uploading) return;
	      this.uploading = true;

	      var formData = new FormData();

	      this.files.forEach(function (file) {
	        formData.append('picture[]', file);
	      });

	      this.$http.post(this.url, formData, function (data) {
	        var result = _this.result;

	        _this.uploading = false;

	        data.forEach(function (item, index) {
	          var file = this.files[index];

	          item = item || 'Upload Fail';

	          result.unshift({
	            url: item.replace(/(.)(..)(.{29}(.+))/, 'http://fuss.test.ele.me/$1/$2/$3.$4'),
	            name: file.name,
	            size: file.size
	          });
	        });
	      }, function (e) {
	        _this.uploading = false;
	        alert('系统异常！');
	      });
	    },
	    deleteRecord: function deleteRecord(index) {
	      this.result.splice(index, 1);
	    },
	    copyUrl: function copyUrl(url) {
	      this.copyText = url;
	      this.$els.clipboard.select();
	      document.execCommand('copy', true);
	    },
	    parseFiles: function parseFiles(rawFiles) {
	      var i = 0;
	      var len = rawFiles.length;


	      for (; i < len; i++) {
	        rawFiles[i].imgUrl = URL.createObjectURL(rawFiles[i]);
	      }

	      return Array.prototype.slice.call(rawFiles, 0);
	    },
	    onFileDrop: function onFileDrop(e) {
	      this.files = this.parseFiles(e.dataTransfer.files);
	    },
	    onChange: function onChange(e) {
	      this.files = this.parseFiles(e.srcElement.files);
	    }
	  },
	  watch: {
	    'result': function result(newValue, oldVal) {
	      var maxRecords = this.maxRecords;

	      if (newValue.length >= maxRecords) {
	        this.result = newValue.slice(0, maxRecords);
	      }
	      localStorage.setItem('uploadPicture[]', JSON.stringify(newValue));
	    }
	  }
	};
	// </script>

/***/ },
/* 356 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"upload\">\n  <!-- 上传文件 -->\n  <ul class=\"upload-files\" v-on:dragenter.stop.prevent v-on:dragover.stop.prevent v-on:drop.stop.prevent=\"onFileDrop\">\n    <li v-if=\"files.length === 0\" class=\"upload-files-tip\">Drop Picture here</li>\n    <li class=\"upload-file\" v-for=\"file in files\" title=\"file.name\">\n      <img class=\"upload-file-pic\" v-bind:src=\"file.imgUrl\" alt=\"\">\n      <span class=\"upload-file-name\">{{file.name}}</span>\n    </li>\n  </ul>\n  <form class=\"upload-operate\" enctype=\"multipart/form-data\">\n    <button class=\"btn btn-default btn-file\"><input type=\"file\" name=\"picture[]\" @change=\"onChange($event)\" multiple><span class=\"d-icon-plus\">+</span>添加图片</button>\n    <button class=\"btn btn-primary\" @click=\"upload()\" :disabled=\"uploading\">{{uploading ? '正在上传...' : '上传'}}</button>\n  </form>\n  <!-- 上传结果 -->\n  <div class=\"upload-result\">\n    <h3 class=\"upload-result-title\">上传结果<span>（历史上传记录最多保存 <em>{{maxRecords}}</em> 条）</span></h3>\n    <table>\n      <thead>\n        <tr>\n          <th width=\"40px\">#</th>\n          <th width=\"70px\">图片</th>\n          <th width=\"100px\">文件名</th>\n          <th width=\"80px\">大小</th>\n          <th>链接</th>\n          <th width=\"120px\">操作</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr v-for=\"item in result\">\n          <td>{{$index}}</td>\n          <td><img class=\"upload-result-pic\" v-bind:src=\"item.url\"></td>\n          <td>{{item.name}}</td>\n          <td>{{item.size | size}}</td>\n          <td class=\"upload-result-link\"><a href=\"{{item.url}}\" target=\"_blank\">{{item.url}}</a></td>\n          <td><button class=\"btn btn-primary\" @click=\"copyUrl(item.url)\">复制</button><button class=\"btn btn-default\" @click=\"deleteRecord($index)\">删除</button></td>\n        </tr>\n      </tbody>\n    </table>\n    <input class=\"upload-result-clipboard\" v-el:clipboard type=\"text\" v-model=\"copyText\" contenteditable>\n  </div>\n</div>\n";

/***/ },
/* 357 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(358)
	__vue_script__ = __webpack_require__(360)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules\\vue-desktop\\lib\\form\\upload2.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(361)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./upload2.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 358 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 359 */,
/* 360 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div class="upload2">
	//         <!-- 上传文件 -->
	//
	//
	//         <form class="upload-operate" enctype="multipart/form-data">
	//             <button class="btn btn-default btn-file"><input type="file" name="picture[]" @change="onChange($event)" multiple><span class="d-icon-plus">+</span>添加图片
	//             </button>
	//         </form>
	//         <div>
	//             <div :style="pic1Style">
	//                 <img :src="files[0].imgUrl">
	//             </div>
	//             <div :style="pic2Style">
	//                 <img :src="files[0].imgUrl" >
	//             </div>
	//         </div>
	//         <!-- 上传结果 -->
	//
	//     </div>
	// </template>
	//
	// <style>
	//
	//
	//
	//     .upload2 {
	//         /*margin: 30px auto;*/
	//         border-color: #e5e5e5 #eee #eee;
	//         width: 940px;
	//         /*padding: 20px;*/
	//     }
	//
	//     .upload .btn {
	//         padding: 5px 12px;
	//         font-size: 13px;
	//         line-height: 1.5;
	//         border-radius: 3px;
	//     }
	//
	//     .upload .btn-default {
	//         border: 1px solid rgba(0, 0, 0, 0.15);
	//     }
	//
	//     .upload .btn:disabled {
	//         background-color: #ADB2B5;
	//         border-color: #898D90;
	//         color: #eee;
	//         cursor: default;
	//     }
	//
	//     .upload .btn .d-icon-plus {
	//         font-weight: bold;
	//         font-size: 16px;
	//         line-height: 1;
	//         margin-right: 5px;
	//     }
	//
	//     .upload-operate button {
	//         margin-right: 5px;
	//         width: 95px;
	//     }
	//
	//     .upload-operate .btn-file {
	//         position: relative;
	//         overflow: hidden;
	//     }
	//
	//     .upload-operate .btn-file input {
	//         position: absolute;
	//         cursor: pointer;
	//         top: 0;
	//         left: 0;
	//         opacity: 0;
	//         font-size: 100px;
	//     }
	//
	//     /* 上传文件列表 */
	//
	//     /* 上传结果列表 */
	//
	//
	// </style>
	//
	// <script type="text/ecmascript-6">
	var pic1style = {
	    marginTop: '10px',
	    display: 'inline-block',
	    width: '200px',
	    height: '100px',
	    border: '1px solid #000'
	};

	var pic2style = {
	    marginTop: '10px',
	    display: 'inline-block',
	    width: '173px',
	    height: '104px',
	    border: '1px solid #000'
	};

	exports.default = {
	    props: {
	        client: {
	            type: String
	        }
	    },
	    data: function data() {
	        return {
	            maxRecords: 20,
	            uploading: false,
	            files: [{ imgUrl: '' }],
	            result: JSON.parse(localStorage.getItem('uploadPicture[]')) || [],
	            url: '',
	            pic1Style: this.getStyle().pic1,
	            pic2Style: this.getStyle().pic2
	        };
	    },

	    methods: {
	        upload: function upload() {
	            var _this = this;

	            if (this.uploading) return;
	            this.uploading = true;

	            var formData = new FormData();

	            this.files.forEach(function (file) {
	                formData.append('picture[]', file);
	            });

	            this.$http.post(this.url, formData, function (data) {
	                var result = _this.result;

	                _this.uploading = false;

	                data.forEach(function (item, index) {
	                    var file = this.files[index];

	                    item = item || 'Upload Fail';

	                    result.unshift({
	                        url: item.replace(/(.)(..)(.{29}(.+))/, 'http://fuss.test.ele.me/$1/$2/$3.$4'),
	                        name: file.name,
	                        size: file.size
	                    });
	                });
	            }, function (e) {
	                _this.uploading = false;
	                alert('系统异常！');
	            });
	        },
	        deleteRecord: function deleteRecord(index) {
	            this.result.splice(index, 1);
	        },
	        copyUrl: function copyUrl(url) {
	            this.copyText = url;
	            this.$els.clipboard.select();
	            document.execCommand('copy', true);
	        },
	        parseFiles: function parseFiles(rawFiles) {
	            var i = 0;
	            var len = rawFiles.length;


	            for (; i < len; i++) {
	                rawFiles[i].imgUrl = URL.createObjectURL(rawFiles[i]);
	            }

	            return Array.prototype.slice.call(rawFiles, 0);
	        },
	        onFileDrop: function onFileDrop(e) {
	            this.files = this.parseFiles(e.dataTransfer.files);
	        },
	        onChange: function onChange(e) {
	            this.files = this.parseFiles(e.srcElement.files);
	        },
	        getStyle: function getStyle() {
	            console.log(this.client);
	            if (this.client == 'mobile') {
	                pic1style.width = '200px';
	                pic1style.height = '356px';

	                pic2style.width = "58px";
	                pic2style.height = "104px";
	            }
	            if (this.client == 'iPad') {
	                pic1style.width = '200px';
	                pic1style.height = '150px';

	                pic2style.width = "139px";
	                pic2style.height = "104px";
	            }
	            return { pic1: pic1style, pic2: pic2style };
	        }
	    },
	    watch: {
	        'result': function result(newValue, oldVal) {
	            var maxRecords = this.maxRecords;

	            if (newValue.length >= maxRecords) {
	                this.result = newValue.slice(0, maxRecords);
	            }
	            localStorage.setItem('uploadPicture[]', JSON.stringify(newValue));
	        }
	    }
	};
	// </script>
	//

/***/ },
/* 361 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"upload2\">\n    <!-- 上传文件 -->\n\n\n    <form class=\"upload-operate\" enctype=\"multipart/form-data\">\n        <button class=\"btn btn-default btn-file\"><input type=\"file\" name=\"picture[]\" @change=\"onChange($event)\" multiple><span class=\"d-icon-plus\">+</span>添加图片\n        </button>\n    </form>\n    <div>\n        <div :style=\"pic1Style\">\n            <img :src=\"files[0].imgUrl\">\n        </div>\n        <div :style=\"pic2Style\">\n            <img :src=\"files[0].imgUrl\" >\n        </div>\n    </div>\n    <!-- 上传结果 -->\n\n</div>\n";

/***/ },
/* 362 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(363)
	__vue_script__ = __webpack_require__(365)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules\\vue-desktop\\lib\\form\\upload3.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(366)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./upload3.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 363 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 364 */,
/* 365 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div class="upload2">
	//         <!-- 上传文件 -->
	//
	//
	//         <form class="upload-operate" enctype="multipart/form-data">
	//             <button class="btn btn-default btn-file"><input type="file" name="picture[]" @change="onChange($event)" multiple><span class="d-icon-plus">+</span>添加图片</button>
	//         </form>
	//
	//         <div :style="exampleStyle" >
	//             <img :src="files[0].imgUrl" style="width:100%;height:100%">
	//         </div>
	//         <!-- 上传结果 -->
	//
	//     </div>
	// </template>
	//
	// <style>
	//
	//
	//
	//     .upload2 {
	//         /*margin: 30px auto;*/
	//         border-color: #e5e5e5 #eee #eee;
	//         width: 940px;
	//         /*padding: 20px;*/
	//     }
	//     .upload .btn {
	//         padding: 5px 12px;
	//         font-size: 13px;
	//         line-height: 1.5;
	//         border-radius: 3px;
	//     }
	//     .upload .btn-default {
	//         border: 1px solid rgba(0,0,0,0.15);
	//     }
	//     .upload .btn:disabled {
	//         background-color: #ADB2B5;
	//         border-color: #898D90;
	//         color: #eee;
	//         cursor: default;
	//     }
	//     .upload .btn .d-icon-plus {
	//         font-weight: bold;
	//         font-size: 16px;
	//         line-height: 1;
	//         margin-right: 5px;
	//     }
	//     .upload-operate button {
	//         margin-right: 5px;
	//         width: 95px;
	//     }
	//     .upload-operate .btn-file {
	//         position: relative;
	//         overflow: hidden;
	//     }
	//     .upload-operate .btn-file input {
	//         position: absolute;
	//         cursor: pointer;
	//         top: 0;
	//         left: 0;
	//         opacity: 0;
	//         font-size: 100px;
	//     }
	//
	//     /* 上传文件列表 */
	//
	//
	//     /* 上传结果列表 */
	//
	//
	// </style>
	//
	// <script type="text/ecmascript-6">
	var exampleStyle = {
	    marginTop: '10px',
	    display: 'inline-block',
	    width: '400px',
	    height: '240px',
	    border: '1px solid #000'
	};

	exports.default = {

	    props: {
	        client: {
	            type: String
	        }
	    },

	    data: function data() {
	        return {
	            maxRecords: 20,
	            uploading: false,
	            files: [{ imgUrl: '' }],
	            result: JSON.parse(localStorage.getItem('uploadPicture[]')) || [],
	            url: '',
	            exampleStyle: this.getStyle()
	        };
	    },

	    methods: {
	        upload: function upload() {
	            var _this = this;

	            if (this.uploading) return;
	            this.uploading = true;

	            var formData = new FormData();

	            this.files.forEach(function (file) {
	                formData.append('picture[]', file);
	            });

	            this.$http.post(this.url, formData, function (data) {
	                var result = _this.result;

	                _this.uploading = false;

	                data.forEach(function (item, index) {
	                    var file = this.files[index];

	                    item = item || 'Upload Fail';

	                    result.unshift({
	                        url: item.replace(/(.)(..)(.{29}(.+))/, 'http://fuss.test.ele.me/$1/$2/$3.$4'),
	                        name: file.name,
	                        size: file.size
	                    });
	                });
	            }, function (e) {
	                _this.uploading = false;
	                alert('系统异常！');
	            });
	        },
	        deleteRecord: function deleteRecord(index) {
	            this.result.splice(index, 1);
	        },
	        copyUrl: function copyUrl(url) {
	            this.copyText = url;
	            this.$els.clipboard.select();
	            document.execCommand('copy', true);
	        },
	        parseFiles: function parseFiles(rawFiles) {
	            var i = 0;
	            var len = rawFiles.length;


	            for (; i < len; i++) {
	                rawFiles[i].imgUrl = URL.createObjectURL(rawFiles[i]);
	            }

	            return Array.prototype.slice.call(rawFiles, 0);
	        },
	        onFileDrop: function onFileDrop(e) {
	            this.files = this.parseFiles(e.dataTransfer.files);
	        },
	        onChange: function onChange(e) {
	            this.files = this.parseFiles(e.srcElement.files);
	        },
	        getStyle: function getStyle() {
	            if (this.client == 'mobile') {
	                exampleStyle.width = '200px';
	                exampleStyle.height = '240px';
	            }
	            if (this.client == 'iPad') {
	                exampleStyle.width = '200px';
	                exampleStyle.height = '356px';
	            }
	            return exampleStyle;
	        }
	    },
	    watch: {
	        'result': function result(newValue, oldVal) {
	            var maxRecords = this.maxRecords;

	            if (newValue.length >= maxRecords) {
	                this.result = newValue.slice(0, maxRecords);
	            }
	            localStorage.setItem('uploadPicture[]', JSON.stringify(newValue));
	        }
	    }
	};
	// </script>

/***/ },
/* 366 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"upload2\">\n    <!-- 上传文件 -->\n\n\n    <form class=\"upload-operate\" enctype=\"multipart/form-data\">\n        <button class=\"btn btn-default btn-file\"><input type=\"file\" name=\"picture[]\" @change=\"onChange($event)\" multiple><span class=\"d-icon-plus\">+</span>添加图片</button>\n    </form>\n\n    <div :style=\"exampleStyle\" >\n        <img :src=\"files[0].imgUrl\" style=\"width:100%;height:100%\">\n    </div>\n    <!-- 上传结果 -->\n\n</div>\n";

/***/ },
/* 367 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(368)
	__vue_script__ = __webpack_require__(370)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules\\vue-desktop\\lib\\form\\uploadppt.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(371)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./uploadppt.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 368 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 369 */,
/* 370 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//
	//     <form class="upload-operate" enctype="multipart/form-data">
	//         <button class="btn btn-default btn-file"><input type="file" name="ppt[]" @change="onChange($event)" multiple><span class="d-icon-plus">+</span>选择文件</button>
	//         <br>
	//         <br>
	//         <strong>注意:</strong>
	//         <br>
	//         <br>
	//         <p>首页幻灯片最小尺寸:1000X500</p>
	//         <p>电脑二级首页幻灯片最小尺寸:1000X500</p>
	//         <p>手机二级首页幻灯片最小尺寸:1000X500</p>
	//         <p>Ipad二级首页幻灯片最小尺寸:1000X500</p>
	//         <p></p>
	//         <p></p>
	//         <p></p>
	//     </form>
	//
	//
	//
	// </template>
	//
	// <style>
	//
	//
	//     .btn {
	//         padding: 5px 12px;
	//         font-size: 13px;
	//         line-height: 1.5;
	//         border-radius: 3px;
	//     }
	//
	//     .btn-default {
	//         border: 1px solid rgba(0, 0, 0, 0.15);
	//     }
	//
	//     .upload-operate{
	//         line-height: 10px;
	//     }
	//
	//     .upload-operate p {
	//         font-size: 12px;
	//         color:#888
	//     }
	//
	//     .btn:disabled {
	//         background-color: #ADB2B5;
	//         border-color: #898D90;
	//         color: #eee;
	//         cursor: default;
	//     }
	//
	//     .btn .d-icon-plus {
	//         font-weight: bold;
	//         font-size: 16px;
	//         line-height: 1;
	//         margin-right: 5px;
	//     }
	//
	//     .upload-operate button {
	//         margin-right: 5px;
	//         width: 95px;
	//     }
	//
	//     .upload-operate .btn-file {
	//         position: relative;
	//         overflow: hidden;
	//     }
	//
	//     .upload-operate .btn-file input {
	//         position: absolute;
	//         cursor: pointer;
	//         top: 0;
	//         left: 0;
	//         opacity: 0;
	//         font-size: 100px;
	//     }
	//
	//     /* 上传文件列表 */
	//
	//     /* 上传结果列表 */
	//
	//
	// </style>
	//
	// <script type="text/ecmascript-6">
	exports.default = {
	    data: function data() {
	        return {
	            maxRecords: 20,
	            uploading: false,
	            files: [{ pptUrl: '' }],
	            result: JSON.parse(localStorage.getItem('ppt[]')) || [],
	            url: ''
	        };
	    },

	    methods: {
	        /*            upload() {
	         if (this.uploading) return;
	         this.uploading = true;
	          var formData = new FormData();
	          this.files.forEach(function(file) {
	         formData.append('ppt[]', file);
	         });
	          this.$http.post(this.url, formData, (data) => {
	         var result = this.result;
	          this.uploading = false;
	          data.forEach(function(item, index) {
	         var file = this.files[index];
	          item = item || 'Upload Fail';
	          result.unshift({
	         url: item.replace(/(.)(..)(.{29}(.+))/, 'http://fuss.test.ele.me/$1/$2/$3.$4'),
	         name: file.name,
	         size: file.size
	         });
	         });
	         }, (e) => {
	         this.uploading = false;
	         alert('系统异常！');
	         });
	         },*/
	        deleteRecord: function deleteRecord(index) {
	            this.result.splice(index, 1);
	        },
	        copyUrl: function copyUrl(url) {
	            this.copyText = url;
	            this.$els.clipboard.select();
	            document.execCommand('copy', true);
	        },
	        parseFiles: function parseFiles(rawFiles) {
	            var i = 0;
	            var len = rawFiles.length;


	            for (; i < len; i++) {
	                rawFiles[i].pptUrl = URL.createObjectURL(rawFiles[i]);
	            }

	            return Array.prototype.slice.call(rawFiles, 0);
	        },
	        onFileDrop: function onFileDrop(e) {
	            this.files = this.parseFiles(e.dataTransfer.files);
	        },
	        onChange: function onChange(e) {
	            this.files = this.parseFiles(e.srcElement.files);
	            this.$parent.$parent.$parent.ppturl = e.target.value;
	        }
	    },
	    watch: {
	        'result': function result(newValue, oldVal) {
	            var maxRecords = this.maxRecords;

	            if (newValue.length >= maxRecords) {
	                this.result = newValue.slice(0, maxRecords);
	            }
	            localStorage.setItem('ppt[]', JSON.stringify(newValue));
	        }
	    }
	};
	// </script>
	//

/***/ },
/* 371 */
/***/ function(module, exports) {

	module.exports = "\n\n<form class=\"upload-operate\" enctype=\"multipart/form-data\">\n    <button class=\"btn btn-default btn-file\"><input type=\"file\" name=\"ppt[]\" @change=\"onChange($event)\" multiple><span class=\"d-icon-plus\">+</span>选择文件</button>\n    <br>\n    <br>\n    <strong>注意:</strong>\n    <br>\n    <br>\n    <p>首页幻灯片最小尺寸:1000X500</p>\n    <p>电脑二级首页幻灯片最小尺寸:1000X500</p>\n    <p>手机二级首页幻灯片最小尺寸:1000X500</p>\n    <p>Ipad二级首页幻灯片最小尺寸:1000X500</p>\n    <p></p>\n    <p></p>\n    <p></p>\n</form>\n\n\n\n";

/***/ },
/* 372 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(373)
	__vue_script__ = __webpack_require__(375)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules\\vue-desktop\\lib\\form\\chooseColor.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(376)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./chooseColor.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 373 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 374 */,
/* 375 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div :style="exampleStyle"></div>
	//     <div class="color-choose">
	//         <div v-for="items in colorArrs" class="color-cell-tr">
	//             <div v-for="item in items" class="color-cell-td" :style="item" @click="con($event)"></div>
	//         </div>
	//     </div>
	//
	//
	//
	// </template>
	//
	// <style>
	//
	//     .color-choose {
	//         margin-top:10px;
	//         width:235px;
	//         height:159px;
	//     }
	//
	//     .color-cell-tr {
	//         float: left;
	//         width:78px;
	//         height:79px;
	//     }
	//
	//     .color-cell-td {
	//         float: left;
	//         width:12px;
	//         height:12px;
	//         cursor: pointer;
	//         border-bottom: 1px solid #FFF;
	//         border-right:1px solid #FFF;
	//     }
	//     .color-cell-tr:nth-child(3n){
	//         width:79px;
	//     }
	//     .color-cell-tr:nth-child(4n).color-cell-td:nth-child(7n){
	//         border-left:1px solid #FFF;
	//
	//     }
	//
	// </style>
	//
	//
	// <script>
	var colorArrs = [];
	for (var i = 0; i < 6; i++) {
	    colorArrs[i] = [];
	    for (var j = 0; j < 6; j++) {
	        for (var k = 0; k < 6; k++) {
	            colorArrs[i].push({ backgroundColor: 'rgb(' + i * 51 + ',' + j * 51 + ',' + k * 51 + ')' });
	        }
	    }
	}

	exports.default = {
	    data: function data() {
	        return {
	            colorArrs: colorArrs,
	            exampleStyle: {
	                marginTop: '5px',
	                width: "24px",
	                height: "24px",
	                border: "1px solid #FFF",
	                backgroundColor: "#FFF"
	            }
	        };
	    },

	    methods: {
	        con: function con(e) {
	            var target = e.target;
	            var color = target.style.backgroundColor;

	            return this.exampleColor(color);
	        },
	        exampleColor: function exampleColor(color) {
	            this.exampleStyle.backgroundColor = color;
	        }
	    }
	};

	// </script>

/***/ },
/* 376 */
/***/ function(module, exports) {

	module.exports = "\n<div :style=\"exampleStyle\"></div>\n<div class=\"color-choose\">\n    <div v-for=\"items in colorArrs\" class=\"color-cell-tr\">\n        <div v-for=\"item in items\" class=\"color-cell-td\" :style=\"item\" @click=\"con($event)\"></div>\n    </div>\n</div>\n\n\n\n";

/***/ },
/* 377 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _en = __webpack_require__(378);

	var _en2 = _interopRequireDefault(_en);

	var _zh = __webpack_require__(282);

	var _zh2 = _interopRequireDefault(_zh);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  en: _en2.default,
	  zh: _zh2.default
	};

/***/ },
/* 378 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  validator: {
	    required: 'Field {label} is required.',
	    pattern: 'Field {label}\'s format is not correct.',
	    length: 'Field {label}\'s length is not correct.'
	  },
	  datepicker: {
	    today: 'Today',
	    clear: 'Clear',
	    confirm: 'OK',
	    weeks: {
	      sun: 'Sun',
	      mon: 'Mon',
	      tue: 'Tue',
	      wed: 'Wed',
	      thu: 'Thu',
	      fri: 'Fri',
	      sat: 'Sat'
	    },
	    months: {
	      jan: 'January',
	      feb: 'February',
	      mar: 'March',
	      apr: 'April',
	      may: 'May',
	      jun: 'June',
	      jul: 'July',
	      aug: 'August',
	      sep: 'September',
	      oct: 'October',
	      nov: 'November',
	      dec: 'December'
	    }
	  },
	  alert: {
	    title: 'Tip'
	  }
	};

/***/ },
/* 379 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 380 */,
/* 381 */
/***/ function(module, exports) {

	/*!
	 * vue-i18n v2.4.1
	 * (c) 2016 kazuya kawaguchi
	 * Released under the MIT License.
	 */
	'use strict';

	var babelHelpers = {};

	babelHelpers.typeof = function (obj) {
	  return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
	};

	babelHelpers;
	/**
	 *  String format template
	 *  - Inspired:  
	 *    https://github.com/Matt-Esch/string-template/index.js
	 */

	var RE_NARGS = /(%|)\{([0-9a-zA-Z]+)\}/g;

	/**
	 * template
	 *  
	 * @param {String} string
	 * @param {Array} ...args
	 * @return {String}
	 */

	function format (string) {
	  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    args[_key - 1] = arguments[_key];
	  }

	  if (args.length === 1 && babelHelpers.typeof(args[0]) === 'object') {
	    args = args[0];
	  }

	  if (!args || !args.hasOwnProperty) {
	    args = {};
	  }

	  return string.replace(RE_NARGS, function (match, prefix, i, index) {
	    var result = undefined;

	    if (string[index - 1] === '{' && string[index + match.length] === '}') {
	      return i;
	    } else {
	      result = args.hasOwnProperty(i) ? args[i] : null;
	      if (result === null || result === undefined) {
	        return '';
	      }

	      return result;
	    }
	  });
	}

	/**
	 * Version compare
	 * - Inspired:
	 *   https://github.com/omichelsen/compare-versions
	 */

	var PATCH_PATTERN = /-([\w-.]+)/;

	function split(v) {
	  var temp = v.split('.');
	  var arr = temp.splice(0, 2);
	  arr.push(temp.join('.'));
	  return arr;
	}

	/**
	 * compare
	 *
	 * @param {String} v1
	 * @param {String} v2
	 * @return {Number}
	 */

	function compare (v1, v2) {
	  var s1 = split(v1);
	  var s2 = split(v2);

	  for (var i = 0; i < 3; i++) {
	    var n1 = parseInt(s1[i] || 0, 10);
	    var n2 = parseInt(s2[i] || 0, 10);

	    if (n1 > n2) {
	      return 1;
	    }
	    if (n2 > n1) {
	      return -1;
	    }
	  }

	  if ((s1[2] + s2[2] + '').indexOf('-') > -1) {
	    var p1 = (PATCH_PATTERN.exec(s1[2]) || [''])[0];
	    var p2 = (PATCH_PATTERN.exec(s2[2]) || [''])[0];

	    if (p1 === '') {
	      return 1;
	    }
	    if (p2 === '') {
	      return -1;
	    }
	    if (p1 > p2) {
	      return 1;
	    }
	    if (p2 > p1) {
	      return -1;
	    }
	  }

	  return 0;
	}

	/**
	 * extend
	 * 
	 * @param {Vue} Vue
	 * @param {Object} locales
	 * @return {Vue}
	 */

	function extend (Vue, locales) {
	  var getPath = Vue.version && compare('1.0.8', Vue.version) === -1 ? Vue.parsers.path.getPath : Vue.parsers.path.get;
	  var util = Vue.util;

	  function getVal(key, lang, args) {
	    var value = key;
	    try {
	      var val = getPath(locales[lang], key) || locales[lang][key];
	      value = (args ? format(val, args) : val) || key;
	    } catch (e) {
	      value = key;
	    }
	    return value;
	  }

	  /**
	   * Vue.t
	   *
	   * @param {String} key
	   * @param {Array} ...args
	   * @return {String}
	   */

	  Vue.t = function (key) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    if (!key) {
	      return '';
	    }

	    var language = Vue.config.lang;
	    if (args.length === 1) {
	      if (util.isObject(args[0]) || util.isArray(args[0])) {
	        args = args[0];
	      } else if (typeof args[0] === 'string') {
	        language = args[0];
	      }
	    } else if (args.length === 2) {
	      if (typeof args[0] === 'string') {
	        language = args[0];
	      }
	      if (util.isObject(args[1]) || util.isArray(args[1])) {
	        args = args[1];
	      }
	    }

	    return getVal(key, language, args);
	  };

	  /**
	   * $t
	   *
	   * @param {String} key
	   * @param {Array} ...args
	   * @return {String}
	   */

	  Vue.prototype.$t = function (key) {
	    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	      args[_key2 - 1] = arguments[_key2];
	    }

	    return Vue.t.apply(Vue, [key].concat(args));
	  };

	  return Vue;
	}

	/**
	 * plugin
	 *
	 * @param {Object} Vue
	 * @param {Object} opts
	 */

	function plugin(Vue) {
	  var opts = arguments.length <= 1 || arguments[1] === undefined ? { lang: 'en', locales: {} } : arguments[1];

	  defineConfig(Vue.config, opts.lang);
	  extend(Vue, opts.locales);
	}

	/**
	 * defineConfig
	 *
	 * This function define `lang` property to `Vue.config`.
	 *
	 * @param {Object} config
	 * @param {String} lang
	 * @private
	 */

	function defineConfig(config, lang) {
	  Object.defineProperty(config, 'lang', {
	    get: function get() {
	      return lang;
	    },
	    set: function set(val) {
	      lang = val;
	    }
	  });
	}

	plugin.version = '2.4.1';

	module.exports = plugin;

/***/ },
/* 382 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Tooltip = _vue2.default.extend(__webpack_require__(383));

	_vue2.default.directive('tooltip', {
	  params: ['tooltip-content', 'tooltip-placement', 'tooltip-trigger', 'tooltip-delay'],
	  paramWatchers: {
	    tooltipContent: function tooltipContent(val) {
	      if (this.instance) {
	        this.instance.content = val;
	      }
	    }
	  },
	  bind: function bind() {
	    var el = this.el;
	    var placement = this.params.tooltipPlacement;
	    var content = this.params.tooltipContent;
	    var trigger = this.params.tooltipTrigger || 'mouseenter';
	    var delay = parseInt(this.params.tooltipDelay, 10);

	    if (trigger === 'mouseenter' && isNaN(delay)) {
	      delay = 300;
	    }

	    if (!placement) placement = 'bottom';

	    this.instance = new Tooltip({
	      el: document.createElement('div')
	    });

	    this.instance.placement = placement;
	    this.instance.content = content;
	    this.instance.trigger = trigger;
	    this.instance.target = el;
	    this.instance.openDelay = delay;
	    this.instance.bindTarget();
	  }
	});

/***/ },
/* 383 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(384)
	__vue_script__ = __webpack_require__(386)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules\\vue-desktop\\lib\\service\\tooltip.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(388)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./tooltip.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 384 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 385 */,
/* 386 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vuePopup = __webpack_require__(81);

	var _vuePopup2 = _interopRequireDefault(_vuePopup);

	var _popover = __webpack_require__(387);

	var _popover2 = _interopRequireDefault(_popover);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(89); // <style>
	//   .tooltip {
	//     position: absolute;
	//     left: -9999px;
	//     top: -9999px;
	//     z-index: 100;
	//     opacity: .8;
	//   }
	//
	//   .tooltip.fade {
	//     opacity: 0;
	//     transition: opacity 0.15s linear;
	//   }
	//
	//   .tooltip.fade.in {
	//     opacity: 1;
	//   }
	//
	//   .tooltip.tooltip-placeright {
	//     padding-left: 6px;
	//   }
	//
	//   .tooltip.tooltip-placeright .tooltip-arrow {
	//     left: 0;
	//     top: 50%;
	//     margin-top: -6px;
	//     border-top: 6px solid transparent;
	//     border-bottom: 6px solid transparent;
	//     border-right: 6px solid #333;
	//   }
	//
	//   .tooltip.tooltip-placeleft {
	//     padding-right: 6px;
	//   }
	//
	//   .tooltip.tooltip-placeleft .tooltip-arrow {
	//     right: 0;
	//     top: 50%;
	//     margin-top: -6px;
	//     border-top: 6px solid transparent;
	//     border-bottom: 6px solid transparent;
	//     border-left: 6px solid #333;
	//   }
	//
	//   .tooltip.tooltip-placetop {
	//     padding-bottom: 6px;
	//   }
	//
	//   .tooltip.tooltip-placetop .tooltip-arrow {
	//     bottom: 0;
	//     left: 50%;
	//     margin-left: -6px;
	//     border-left: 6px solid transparent;
	//     border-right: 6px solid transparent;
	//     border-top: 6px solid #333;
	//   }
	//
	//   .tooltip.tooltip-placebottom {
	//     padding-top: 6px;
	//   }
	//
	//   .tooltip.tooltip-placebottom .tooltip-arrow {
	//     top: 0;
	//     left: 50%;
	//     margin-left: -6px;
	//     border-left: 6px solid transparent;
	//     border-right: 6px solid transparent;
	//     border-bottom: 6px solid #333;
	//   }
	//
	//   .tooltip-content {
	//     font-size: 14px;
	//     color: white;
	//     padding: 5px 10px;
	//     background: #333;
	//     border-radius: 3px;
	//   }
	//
	//   .tooltip-arrow {
	//     position: absolute;
	//   }
	//
	//   .tooltip-fade-enter {
	//     animation: tooltip-fade-in 0.2s ease-in;
	//   }
	//
	//   .tooltip-fade-leave {
	//     animation: tooltip-fade-out 0.2s ease-out;
	//   }
	//
	//   @keyframes tooltip-fade-in {
	//     0% {
	//       opacity: 0;
	//     }
	//     100% {
	//       opacity: 0.8;
	//     }
	//   }
	//
	//   @keyframes tooltip-fade-out {
	//     0% {
	//       opacity: 0.8;
	//     }
	//     100% {
	//       opacity: 0;
	//     }
	//   }
	// </style>
	//
	// <template>
	//   <div class="tooltip {{ 'tooltip-place' + (finalPlacement || placement) }}" v-show="visible" transition="tooltip-fade">
	//     <div class="tooltip-arrow"></div>
	//     <div class="tooltip-content">
	//       {{ content }}
	//     </div>
	//   </div>
	// </template>
	//
	// <script type="text/ecmascript-6">
	exports.default = {
	  mixins: [_vuePopup2.default, _popover2.default],

	  props: {
	    title: {
	      type: String
	    },
	    content: {
	      type: String
	    },
	    placement: {
	      type: String,
	      default: 'bottom'
	    },
	    finalPlacement: {}
	  },

	  methods: {
	    afterLocate: function afterLocate(args) {
	      this.finalPlacement = args.placement;
	    }
	  },

	  transitions: {
	    tooltipFade: {
	      afterLeave: function afterLeave(el) {
	        var component = el.__vue__;
	        if (component) {
	          component.$afterClose && component.$afterClose();
	        }
	      }
	    }
	  },

	  computed: {
	    popupOptions: function popupOptions() {
	      return {
	        openDelay: 100,
	        placement: 'bottom'
	      };
	    }
	  },

	  data: function data() {
	    return {};
	  }
	};
	// </script>

/***/ },
/* 387 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var bindEvent = __webpack_require__(83).on;
	var unbindEvent = __webpack_require__(83).off;

	exports.default = {
	  props: {
	    target: {},
	    trigger: {
	      type: String,
	      default: 'mouseenter'
	    }
	  },

	  beforeDestroy: function beforeDestroy() {
	    this.unbindTarget();
	  },


	  methods: {
	    bindTarget: function bindTarget() {
	      var _this = this;

	      var popover = this;
	      var target = this.target;
	      if (!target) return;

	      var trigger = this.trigger;

	      if (trigger === 'click') {
	        var toggle = function toggle() {
	          if (popover.visible) {
	            popover.close();
	          } else {
	            popover.open({
	              target: target,
	              placement: _this.placement
	            });
	          }
	        };
	        popover.toggleListener = toggle;

	        bindEvent(target, 'click', toggle);
	      } else {
	        var open = function open() {
	          popover.open({
	            target: target,
	            placement: _this.placement
	          });
	        };
	        var close = function close() {
	          popover.close();
	        };
	        popover.openListener = open;
	        popover.closeListener = close;

	        if (trigger === 'mouseenter') {
	          bindEvent(target, 'mouseenter', open);
	          bindEvent(target, 'mouseleave', close);
	        } else if (trigger === 'focus') {
	          bindEvent(target, 'focus', open);
	          bindEvent(target, 'blur', close);
	        }
	      }
	    },
	    unbindTarget: function unbindTarget() {
	      var popover = this;
	      var target = popover.get('target');
	      if (!target) return;

	      var trigger = popover.get('trigger');

	      if (trigger === 'click') {
	        var toggle = popover.toggleListener;
	        if (toggle) {
	          bindEvent(target, 'click', toggle);
	        }
	      } else {
	        var open = popover.openListener;
	        var close = popover.closeListener;
	        if (!open) return;

	        if (trigger === 'mouseenter') {
	          unbindEvent(target, 'mouseenter', open);
	          unbindEvent(target, 'mouseleave', close);
	        } else if (trigger === 'focus') {
	          unbindEvent(target, 'focus', open);
	          unbindEvent(target, 'blur', close);
	        }
	      }
	    }
	  }
	};

/***/ },
/* 388 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"tooltip {{ 'tooltip-place' + (finalPlacement || placement) }}\" v-show=\"visible\" transition=\"tooltip-fade\">\n  <div class=\"tooltip-arrow\"></div>\n  <div class=\"tooltip-content\">\n    {{ content }}\n  </div>\n</div>\n";

/***/ },
/* 389 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * vue-router v0.7.13
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  global.VueRouter = factory();
	}(this, function () { 'use strict';

	  var babelHelpers = {};

	  babelHelpers.classCallCheck = function (instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  };
	  function Target(path, matcher, delegate) {
	    this.path = path;
	    this.matcher = matcher;
	    this.delegate = delegate;
	  }

	  Target.prototype = {
	    to: function to(target, callback) {
	      var delegate = this.delegate;

	      if (delegate && delegate.willAddRoute) {
	        target = delegate.willAddRoute(this.matcher.target, target);
	      }

	      this.matcher.add(this.path, target);

	      if (callback) {
	        if (callback.length === 0) {
	          throw new Error("You must have an argument in the function passed to `to`");
	        }
	        this.matcher.addChild(this.path, target, callback, this.delegate);
	      }
	      return this;
	    }
	  };

	  function Matcher(target) {
	    this.routes = {};
	    this.children = {};
	    this.target = target;
	  }

	  Matcher.prototype = {
	    add: function add(path, handler) {
	      this.routes[path] = handler;
	    },

	    addChild: function addChild(path, target, callback, delegate) {
	      var matcher = new Matcher(target);
	      this.children[path] = matcher;

	      var match = generateMatch(path, matcher, delegate);

	      if (delegate && delegate.contextEntered) {
	        delegate.contextEntered(target, match);
	      }

	      callback(match);
	    }
	  };

	  function generateMatch(startingPath, matcher, delegate) {
	    return function (path, nestedCallback) {
	      var fullPath = startingPath + path;

	      if (nestedCallback) {
	        nestedCallback(generateMatch(fullPath, matcher, delegate));
	      } else {
	        return new Target(startingPath + path, matcher, delegate);
	      }
	    };
	  }

	  function addRoute(routeArray, path, handler) {
	    var len = 0;
	    for (var i = 0, l = routeArray.length; i < l; i++) {
	      len += routeArray[i].path.length;
	    }

	    path = path.substr(len);
	    var route = { path: path, handler: handler };
	    routeArray.push(route);
	  }

	  function eachRoute(baseRoute, matcher, callback, binding) {
	    var routes = matcher.routes;

	    for (var path in routes) {
	      if (routes.hasOwnProperty(path)) {
	        var routeArray = baseRoute.slice();
	        addRoute(routeArray, path, routes[path]);

	        if (matcher.children[path]) {
	          eachRoute(routeArray, matcher.children[path], callback, binding);
	        } else {
	          callback.call(binding, routeArray);
	        }
	      }
	    }
	  }

	  function map (callback, addRouteCallback) {
	    var matcher = new Matcher();

	    callback(generateMatch("", matcher, this.delegate));

	    eachRoute([], matcher, function (route) {
	      if (addRouteCallback) {
	        addRouteCallback(this, route);
	      } else {
	        this.add(route);
	      }
	    }, this);
	  }

	  var specials = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];

	  var escapeRegex = new RegExp('(\\' + specials.join('|\\') + ')', 'g');

	  var noWarning = false;
	  function warn(msg) {
	    if (!noWarning && typeof console !== 'undefined') {
	      console.error('[vue-router] ' + msg);
	    }
	  }

	  function tryDecode(uri, asComponent) {
	    try {
	      return asComponent ? decodeURIComponent(uri) : decodeURI(uri);
	    } catch (e) {
	      warn('malformed URI' + (asComponent ? ' component: ' : ': ') + uri);
	    }
	  }

	  function isArray(test) {
	    return Object.prototype.toString.call(test) === "[object Array]";
	  }

	  // A Segment represents a segment in the original route description.
	  // Each Segment type provides an `eachChar` and `regex` method.
	  //
	  // The `eachChar` method invokes the callback with one or more character
	  // specifications. A character specification consumes one or more input
	  // characters.
	  //
	  // The `regex` method returns a regex fragment for the segment. If the
	  // segment is a dynamic of star segment, the regex fragment also includes
	  // a capture.
	  //
	  // A character specification contains:
	  //
	  // * `validChars`: a String with a list of all valid characters, or
	  // * `invalidChars`: a String with a list of all invalid characters
	  // * `repeat`: true if the character specification can repeat

	  function StaticSegment(string) {
	    this.string = string;
	  }
	  StaticSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      var string = this.string,
	          ch;

	      for (var i = 0, l = string.length; i < l; i++) {
	        ch = string.charAt(i);
	        callback({ validChars: ch });
	      }
	    },

	    regex: function regex() {
	      return this.string.replace(escapeRegex, '\\$1');
	    },

	    generate: function generate() {
	      return this.string;
	    }
	  };

	  function DynamicSegment(name) {
	    this.name = name;
	  }
	  DynamicSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "/", repeat: true });
	    },

	    regex: function regex() {
	      return "([^/]+)";
	    },

	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };

	  function StarSegment(name) {
	    this.name = name;
	  }
	  StarSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "", repeat: true });
	    },

	    regex: function regex() {
	      return "(.+)";
	    },

	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };

	  function EpsilonSegment() {}
	  EpsilonSegment.prototype = {
	    eachChar: function eachChar() {},
	    regex: function regex() {
	      return "";
	    },
	    generate: function generate() {
	      return "";
	    }
	  };

	  function parse(route, names, specificity) {
	    // normalize route as not starting with a "/". Recognition will
	    // also normalize.
	    if (route.charAt(0) === "/") {
	      route = route.substr(1);
	    }

	    var segments = route.split("/"),
	        results = [];

	    // A routes has specificity determined by the order that its different segments
	    // appear in. This system mirrors how the magnitude of numbers written as strings
	    // works.
	    // Consider a number written as: "abc". An example would be "200". Any other number written
	    // "xyz" will be smaller than "abc" so long as `a > z`. For instance, "199" is smaller
	    // then "200", even though "y" and "z" (which are both 9) are larger than "0" (the value
	    // of (`b` and `c`). This is because the leading symbol, "2", is larger than the other
	    // leading symbol, "1".
	    // The rule is that symbols to the left carry more weight than symbols to the right
	    // when a number is written out as a string. In the above strings, the leading digit
	    // represents how many 100's are in the number, and it carries more weight than the middle
	    // number which represents how many 10's are in the number.
	    // This system of number magnitude works well for route specificity, too. A route written as
	    // `a/b/c` will be more specific than `x/y/z` as long as `a` is more specific than
	    // `x`, irrespective of the other parts.
	    // Because of this similarity, we assign each type of segment a number value written as a
	    // string. We can find the specificity of compound routes by concatenating these strings
	    // together, from left to right. After we have looped through all of the segments,
	    // we convert the string to a number.
	    specificity.val = '';

	    for (var i = 0, l = segments.length; i < l; i++) {
	      var segment = segments[i],
	          match;

	      if (match = segment.match(/^:([^\/]+)$/)) {
	        results.push(new DynamicSegment(match[1]));
	        names.push(match[1]);
	        specificity.val += '3';
	      } else if (match = segment.match(/^\*([^\/]+)$/)) {
	        results.push(new StarSegment(match[1]));
	        specificity.val += '2';
	        names.push(match[1]);
	      } else if (segment === "") {
	        results.push(new EpsilonSegment());
	        specificity.val += '1';
	      } else {
	        results.push(new StaticSegment(segment));
	        specificity.val += '4';
	      }
	    }

	    specificity.val = +specificity.val;

	    return results;
	  }

	  // A State has a character specification and (`charSpec`) and a list of possible
	  // subsequent states (`nextStates`).
	  //
	  // If a State is an accepting state, it will also have several additional
	  // properties:
	  //
	  // * `regex`: A regular expression that is used to extract parameters from paths
	  //   that reached this accepting state.
	  // * `handlers`: Information on how to convert the list of captures into calls
	  //   to registered handlers with the specified parameters
	  // * `types`: How many static, dynamic or star segments in this route. Used to
	  //   decide which route to use if multiple registered routes match a path.
	  //
	  // Currently, State is implemented naively by looping over `nextStates` and
	  // comparing a character specification against a character. A more efficient
	  // implementation would use a hash of keys pointing at one or more next states.

	  function State(charSpec) {
	    this.charSpec = charSpec;
	    this.nextStates = [];
	  }

	  State.prototype = {
	    get: function get(charSpec) {
	      var nextStates = this.nextStates;

	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        var child = nextStates[i];

	        var isEqual = child.charSpec.validChars === charSpec.validChars;
	        isEqual = isEqual && child.charSpec.invalidChars === charSpec.invalidChars;

	        if (isEqual) {
	          return child;
	        }
	      }
	    },

	    put: function put(charSpec) {
	      var state;

	      // If the character specification already exists in a child of the current
	      // state, just return that state.
	      if (state = this.get(charSpec)) {
	        return state;
	      }

	      // Make a new state for the character spec
	      state = new State(charSpec);

	      // Insert the new state as a child of the current state
	      this.nextStates.push(state);

	      // If this character specification repeats, insert the new state as a child
	      // of itself. Note that this will not trigger an infinite loop because each
	      // transition during recognition consumes a character.
	      if (charSpec.repeat) {
	        state.nextStates.push(state);
	      }

	      // Return the new state
	      return state;
	    },

	    // Find a list of child states matching the next character
	    match: function match(ch) {
	      // DEBUG "Processing `" + ch + "`:"
	      var nextStates = this.nextStates,
	          child,
	          charSpec,
	          chars;

	      // DEBUG "  " + debugState(this)
	      var returned = [];

	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        child = nextStates[i];

	        charSpec = child.charSpec;

	        if (typeof (chars = charSpec.validChars) !== 'undefined') {
	          if (chars.indexOf(ch) !== -1) {
	            returned.push(child);
	          }
	        } else if (typeof (chars = charSpec.invalidChars) !== 'undefined') {
	          if (chars.indexOf(ch) === -1) {
	            returned.push(child);
	          }
	        }
	      }

	      return returned;
	    }

	    /** IF DEBUG
	    , debug: function() {
	      var charSpec = this.charSpec,
	          debug = "[",
	          chars = charSpec.validChars || charSpec.invalidChars;
	       if (charSpec.invalidChars) { debug += "^"; }
	      debug += chars;
	      debug += "]";
	       if (charSpec.repeat) { debug += "+"; }
	       return debug;
	    }
	    END IF **/
	  };

	  /** IF DEBUG
	  function debug(log) {
	    console.log(log);
	  }

	  function debugState(state) {
	    return state.nextStates.map(function(n) {
	      if (n.nextStates.length === 0) { return "( " + n.debug() + " [accepting] )"; }
	      return "( " + n.debug() + " <then> " + n.nextStates.map(function(s) { return s.debug() }).join(" or ") + " )";
	    }).join(", ")
	  }
	  END IF **/

	  // Sort the routes by specificity
	  function sortSolutions(states) {
	    return states.sort(function (a, b) {
	      return b.specificity.val - a.specificity.val;
	    });
	  }

	  function recognizeChar(states, ch) {
	    var nextStates = [];

	    for (var i = 0, l = states.length; i < l; i++) {
	      var state = states[i];

	      nextStates = nextStates.concat(state.match(ch));
	    }

	    return nextStates;
	  }

	  var oCreate = Object.create || function (proto) {
	    function F() {}
	    F.prototype = proto;
	    return new F();
	  };

	  function RecognizeResults(queryParams) {
	    this.queryParams = queryParams || {};
	  }
	  RecognizeResults.prototype = oCreate({
	    splice: Array.prototype.splice,
	    slice: Array.prototype.slice,
	    push: Array.prototype.push,
	    length: 0,
	    queryParams: null
	  });

	  function findHandler(state, path, queryParams) {
	    var handlers = state.handlers,
	        regex = state.regex;
	    var captures = path.match(regex),
	        currentCapture = 1;
	    var result = new RecognizeResults(queryParams);

	    for (var i = 0, l = handlers.length; i < l; i++) {
	      var handler = handlers[i],
	          names = handler.names,
	          params = {};

	      for (var j = 0, m = names.length; j < m; j++) {
	        params[names[j]] = captures[currentCapture++];
	      }

	      result.push({ handler: handler.handler, params: params, isDynamic: !!names.length });
	    }

	    return result;
	  }

	  function addSegment(currentState, segment) {
	    segment.eachChar(function (ch) {
	      var state;

	      currentState = currentState.put(ch);
	    });

	    return currentState;
	  }

	  function decodeQueryParamPart(part) {
	    // http://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1
	    part = part.replace(/\+/gm, '%20');
	    return tryDecode(part, true);
	  }

	  // The main interface

	  var RouteRecognizer = function RouteRecognizer() {
	    this.rootState = new State();
	    this.names = {};
	  };

	  RouteRecognizer.prototype = {
	    add: function add(routes, options) {
	      var currentState = this.rootState,
	          regex = "^",
	          specificity = {},
	          handlers = [],
	          allSegments = [],
	          name;

	      var isEmpty = true;

	      for (var i = 0, l = routes.length; i < l; i++) {
	        var route = routes[i],
	            names = [];

	        var segments = parse(route.path, names, specificity);

	        allSegments = allSegments.concat(segments);

	        for (var j = 0, m = segments.length; j < m; j++) {
	          var segment = segments[j];

	          if (segment instanceof EpsilonSegment) {
	            continue;
	          }

	          isEmpty = false;

	          // Add a "/" for the new segment
	          currentState = currentState.put({ validChars: "/" });
	          regex += "/";

	          // Add a representation of the segment to the NFA and regex
	          currentState = addSegment(currentState, segment);
	          regex += segment.regex();
	        }

	        var handler = { handler: route.handler, names: names };
	        handlers.push(handler);
	      }

	      if (isEmpty) {
	        currentState = currentState.put({ validChars: "/" });
	        regex += "/";
	      }

	      currentState.handlers = handlers;
	      currentState.regex = new RegExp(regex + "$");
	      currentState.specificity = specificity;

	      if (name = options && options.as) {
	        this.names[name] = {
	          segments: allSegments,
	          handlers: handlers
	        };
	      }
	    },

	    handlersFor: function handlersFor(name) {
	      var route = this.names[name],
	          result = [];
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }

	      for (var i = 0, l = route.handlers.length; i < l; i++) {
	        result.push(route.handlers[i]);
	      }

	      return result;
	    },

	    hasRoute: function hasRoute(name) {
	      return !!this.names[name];
	    },

	    generate: function generate(name, params) {
	      var route = this.names[name],
	          output = "";
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }

	      var segments = route.segments;

	      for (var i = 0, l = segments.length; i < l; i++) {
	        var segment = segments[i];

	        if (segment instanceof EpsilonSegment) {
	          continue;
	        }

	        output += "/";
	        output += segment.generate(params);
	      }

	      if (output.charAt(0) !== '/') {
	        output = '/' + output;
	      }

	      if (params && params.queryParams) {
	        output += this.generateQueryString(params.queryParams);
	      }

	      return output;
	    },

	    generateQueryString: function generateQueryString(params) {
	      var pairs = [];
	      var keys = [];
	      for (var key in params) {
	        if (params.hasOwnProperty(key)) {
	          keys.push(key);
	        }
	      }
	      keys.sort();
	      for (var i = 0, len = keys.length; i < len; i++) {
	        key = keys[i];
	        var value = params[key];
	        if (value == null) {
	          continue;
	        }
	        var pair = encodeURIComponent(key);
	        if (isArray(value)) {
	          for (var j = 0, l = value.length; j < l; j++) {
	            var arrayPair = key + '[]' + '=' + encodeURIComponent(value[j]);
	            pairs.push(arrayPair);
	          }
	        } else {
	          pair += "=" + encodeURIComponent(value);
	          pairs.push(pair);
	        }
	      }

	      if (pairs.length === 0) {
	        return '';
	      }

	      return "?" + pairs.join("&");
	    },

	    parseQueryString: function parseQueryString(queryString) {
	      var pairs = queryString.split("&"),
	          queryParams = {};
	      for (var i = 0; i < pairs.length; i++) {
	        var pair = pairs[i].split('='),
	            key = decodeQueryParamPart(pair[0]),
	            keyLength = key.length,
	            isArray = false,
	            value;
	        if (pair.length === 1) {
	          value = 'true';
	        } else {
	          //Handle arrays
	          if (keyLength > 2 && key.slice(keyLength - 2) === '[]') {
	            isArray = true;
	            key = key.slice(0, keyLength - 2);
	            if (!queryParams[key]) {
	              queryParams[key] = [];
	            }
	          }
	          value = pair[1] ? decodeQueryParamPart(pair[1]) : '';
	        }
	        if (isArray) {
	          queryParams[key].push(value);
	        } else {
	          queryParams[key] = value;
	        }
	      }
	      return queryParams;
	    },

	    recognize: function recognize(path, silent) {
	      noWarning = silent;
	      var states = [this.rootState],
	          pathLen,
	          i,
	          l,
	          queryStart,
	          queryParams = {},
	          isSlashDropped = false;

	      queryStart = path.indexOf('?');
	      if (queryStart !== -1) {
	        var queryString = path.substr(queryStart + 1, path.length);
	        path = path.substr(0, queryStart);
	        if (queryString) {
	          queryParams = this.parseQueryString(queryString);
	        }
	      }

	      path = tryDecode(path);
	      if (!path) return;

	      // DEBUG GROUP path

	      if (path.charAt(0) !== "/") {
	        path = "/" + path;
	      }

	      pathLen = path.length;
	      if (pathLen > 1 && path.charAt(pathLen - 1) === "/") {
	        path = path.substr(0, pathLen - 1);
	        isSlashDropped = true;
	      }

	      for (i = 0, l = path.length; i < l; i++) {
	        states = recognizeChar(states, path.charAt(i));
	        if (!states.length) {
	          break;
	        }
	      }

	      // END DEBUG GROUP

	      var solutions = [];
	      for (i = 0, l = states.length; i < l; i++) {
	        if (states[i].handlers) {
	          solutions.push(states[i]);
	        }
	      }

	      states = sortSolutions(solutions);

	      var state = solutions[0];

	      if (state && state.handlers) {
	        // if a trailing slash was dropped and a star segment is the last segment
	        // specified, put the trailing slash back
	        if (isSlashDropped && state.regex.source.slice(-5) === "(.+)$") {
	          path = path + "/";
	        }
	        return findHandler(state, path, queryParams);
	      }
	    }
	  };

	  RouteRecognizer.prototype.map = map;

	  var genQuery = RouteRecognizer.prototype.generateQueryString;

	  // export default for holding the Vue reference
	  var exports$1 = {};
	  /**
	   * Warn stuff.
	   *
	   * @param {String} msg
	   */

	  function warn$1(msg) {
	    /* istanbul ignore next */
	    if (typeof console !== 'undefined') {
	      console.error('[vue-router] ' + msg);
	    }
	  }

	  /**
	   * Resolve a relative path.
	   *
	   * @param {String} base
	   * @param {String} relative
	   * @param {Boolean} append
	   * @return {String}
	   */

	  function resolvePath(base, relative, append) {
	    var query = base.match(/(\?.*)$/);
	    if (query) {
	      query = query[1];
	      base = base.slice(0, -query.length);
	    }
	    // a query!
	    if (relative.charAt(0) === '?') {
	      return base + relative;
	    }
	    var stack = base.split('/');
	    // remove trailing segment if:
	    // - not appending
	    // - appending to trailing slash (last segment is empty)
	    if (!append || !stack[stack.length - 1]) {
	      stack.pop();
	    }
	    // resolve relative path
	    var segments = relative.replace(/^\//, '').split('/');
	    for (var i = 0; i < segments.length; i++) {
	      var segment = segments[i];
	      if (segment === '.') {
	        continue;
	      } else if (segment === '..') {
	        stack.pop();
	      } else {
	        stack.push(segment);
	      }
	    }
	    // ensure leading slash
	    if (stack[0] !== '') {
	      stack.unshift('');
	    }
	    return stack.join('/');
	  }

	  /**
	   * Forgiving check for a promise
	   *
	   * @param {Object} p
	   * @return {Boolean}
	   */

	  function isPromise(p) {
	    return p && typeof p.then === 'function';
	  }

	  /**
	   * Retrive a route config field from a component instance
	   * OR a component contructor.
	   *
	   * @param {Function|Vue} component
	   * @param {String} name
	   * @return {*}
	   */

	  function getRouteConfig(component, name) {
	    var options = component && (component.$options || component.options);
	    return options && options.route && options.route[name];
	  }

	  /**
	   * Resolve an async component factory. Have to do a dirty
	   * mock here because of Vue core's internal API depends on
	   * an ID check.
	   *
	   * @param {Object} handler
	   * @param {Function} cb
	   */

	  var resolver = undefined;

	  function resolveAsyncComponent(handler, cb) {
	    if (!resolver) {
	      resolver = {
	        resolve: exports$1.Vue.prototype._resolveComponent,
	        $options: {
	          components: {
	            _: handler.component
	          }
	        }
	      };
	    } else {
	      resolver.$options.components._ = handler.component;
	    }
	    resolver.resolve('_', function (Component) {
	      handler.component = Component;
	      cb(Component);
	    });
	  }

	  /**
	   * Map the dynamic segments in a path to params.
	   *
	   * @param {String} path
	   * @param {Object} params
	   * @param {Object} query
	   */

	  function mapParams(path, params, query) {
	    if (params === undefined) params = {};

	    path = path.replace(/:([^\/]+)/g, function (_, key) {
	      var val = params[key];
	      /* istanbul ignore if */
	      if (!val) {
	        warn$1('param "' + key + '" not found when generating ' + 'path for "' + path + '" with params ' + JSON.stringify(params));
	      }
	      return val || '';
	    });
	    if (query) {
	      path += genQuery(query);
	    }
	    return path;
	  }

	  var hashRE = /#.*$/;

	  var HTML5History = (function () {
	    function HTML5History(_ref) {
	      var root = _ref.root;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HTML5History);

	      if (root && root !== '/') {
	        // make sure there's the starting slash
	        if (root.charAt(0) !== '/') {
	          root = '/' + root;
	        }
	        // remove trailing slash
	        this.root = root.replace(/\/$/, '');
	        this.rootRE = new RegExp('^\\' + this.root);
	      } else {
	        this.root = null;
	      }
	      this.onChange = onChange;
	      // check base tag
	      var baseEl = document.querySelector('base');
	      this.base = baseEl && baseEl.getAttribute('href');
	    }

	    HTML5History.prototype.start = function start() {
	      var _this = this;

	      this.listener = function (e) {
	        var url = location.pathname + location.search;
	        if (_this.root) {
	          url = url.replace(_this.rootRE, '');
	        }
	        _this.onChange(url, e && e.state, location.hash);
	      };
	      window.addEventListener('popstate', this.listener);
	      this.listener();
	    };

	    HTML5History.prototype.stop = function stop() {
	      window.removeEventListener('popstate', this.listener);
	    };

	    HTML5History.prototype.go = function go(path, replace, append) {
	      var url = this.formatPath(path, append);
	      if (replace) {
	        history.replaceState({}, '', url);
	      } else {
	        // record scroll position by replacing current state
	        history.replaceState({
	          pos: {
	            x: window.pageXOffset,
	            y: window.pageYOffset
	          }
	        }, '', location.href);
	        // then push new state
	        history.pushState({}, '', url);
	      }
	      var hashMatch = path.match(hashRE);
	      var hash = hashMatch && hashMatch[0];
	      path = url
	      // strip hash so it doesn't mess up params
	      .replace(hashRE, '')
	      // remove root before matching
	      .replace(this.rootRE, '');
	      this.onChange(path, null, hash);
	    };

	    HTML5History.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/'
	      // absolute path
	      ? this.root ? this.root + '/' + path.replace(/^\//, '') : path : resolvePath(this.base || location.pathname, path, append);
	    };

	    return HTML5History;
	  })();

	  var HashHistory = (function () {
	    function HashHistory(_ref) {
	      var hashbang = _ref.hashbang;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HashHistory);

	      this.hashbang = hashbang;
	      this.onChange = onChange;
	    }

	    HashHistory.prototype.start = function start() {
	      var self = this;
	      this.listener = function () {
	        var path = location.hash;
	        var raw = path.replace(/^#!?/, '');
	        // always
	        if (raw.charAt(0) !== '/') {
	          raw = '/' + raw;
	        }
	        var formattedPath = self.formatPath(raw);
	        if (formattedPath !== path) {
	          location.replace(formattedPath);
	          return;
	        }
	        // determine query
	        // note it's possible to have queries in both the actual URL
	        // and the hash fragment itself.
	        var query = location.search && path.indexOf('?') > -1 ? '&' + location.search.slice(1) : location.search;
	        self.onChange(path.replace(/^#!?/, '') + query);
	      };
	      window.addEventListener('hashchange', this.listener);
	      this.listener();
	    };

	    HashHistory.prototype.stop = function stop() {
	      window.removeEventListener('hashchange', this.listener);
	    };

	    HashHistory.prototype.go = function go(path, replace, append) {
	      path = this.formatPath(path, append);
	      if (replace) {
	        location.replace(path);
	      } else {
	        location.hash = path;
	      }
	    };

	    HashHistory.prototype.formatPath = function formatPath(path, append) {
	      var isAbsoloute = path.charAt(0) === '/';
	      var prefix = '#' + (this.hashbang ? '!' : '');
	      return isAbsoloute ? prefix + path : prefix + resolvePath(location.hash.replace(/^#!?/, ''), path, append);
	    };

	    return HashHistory;
	  })();

	  var AbstractHistory = (function () {
	    function AbstractHistory(_ref) {
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, AbstractHistory);

	      this.onChange = onChange;
	      this.currentPath = '/';
	    }

	    AbstractHistory.prototype.start = function start() {
	      this.onChange('/');
	    };

	    AbstractHistory.prototype.stop = function stop() {
	      // noop
	    };

	    AbstractHistory.prototype.go = function go(path, replace, append) {
	      path = this.currentPath = this.formatPath(path, append);
	      this.onChange(path);
	    };

	    AbstractHistory.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/' ? path : resolvePath(this.currentPath, path, append);
	    };

	    return AbstractHistory;
	  })();

	  /**
	   * Determine the reusability of an existing router view.
	   *
	   * @param {Directive} view
	   * @param {Object} handler
	   * @param {Transition} transition
	   */

	  function canReuse(view, handler, transition) {
	    var component = view.childVM;
	    if (!component || !handler) {
	      return false;
	    }
	    // important: check view.Component here because it may
	    // have been changed in activate hook
	    if (view.Component !== handler.component) {
	      return false;
	    }
	    var canReuseFn = getRouteConfig(component, 'canReuse');
	    return typeof canReuseFn === 'boolean' ? canReuseFn : canReuseFn ? canReuseFn.call(component, {
	      to: transition.to,
	      from: transition.from
	    }) : true; // defaults to true
	  }

	  /**
	   * Check if a component can deactivate.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */

	  function canDeactivate(view, transition, next) {
	    var fromComponent = view.childVM;
	    var hook = getRouteConfig(fromComponent, 'canDeactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHook(hook, fromComponent, next, {
	        expectBoolean: true
	      });
	    }
	  }

	  /**
	   * Check if a component can activate.
	   *
	   * @param {Object} handler
	   * @param {Transition} transition
	   * @param {Function} next
	   */

	  function canActivate(handler, transition, next) {
	    resolveAsyncComponent(handler, function (Component) {
	      // have to check due to async-ness
	      if (transition.aborted) {
	        return;
	      }
	      // determine if this component can be activated
	      var hook = getRouteConfig(Component, 'canActivate');
	      if (!hook) {
	        next();
	      } else {
	        transition.callHook(hook, null, next, {
	          expectBoolean: true
	        });
	      }
	    });
	  }

	  /**
	   * Call deactivate hooks for existing router-views.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */

	  function deactivate(view, transition, next) {
	    var component = view.childVM;
	    var hook = getRouteConfig(component, 'deactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHooks(hook, component, next);
	    }
	  }

	  /**
	   * Activate / switch component for a router-view.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Number} depth
	   * @param {Function} [cb]
	   */

	  function activate(view, transition, depth, cb, reuse) {
	    var handler = transition.activateQueue[depth];
	    if (!handler) {
	      saveChildView(view);
	      if (view._bound) {
	        view.setComponent(null);
	      }
	      cb && cb();
	      return;
	    }

	    var Component = view.Component = handler.component;
	    var activateHook = getRouteConfig(Component, 'activate');
	    var dataHook = getRouteConfig(Component, 'data');
	    var waitForData = getRouteConfig(Component, 'waitForData');

	    view.depth = depth;
	    view.activated = false;

	    var component = undefined;
	    var loading = !!(dataHook && !waitForData);

	    // "reuse" is a flag passed down when the parent view is
	    // either reused via keep-alive or as a child of a kept-alive view.
	    // of course we can only reuse if the current kept-alive instance
	    // is of the correct type.
	    reuse = reuse && view.childVM && view.childVM.constructor === Component;

	    if (reuse) {
	      // just reuse
	      component = view.childVM;
	      component.$loadingRouteData = loading;
	    } else {
	      saveChildView(view);

	      // unbuild current component. this step also destroys
	      // and removes all nested child views.
	      view.unbuild(true);

	      // build the new component. this will also create the
	      // direct child view of the current one. it will register
	      // itself as view.childView.
	      component = view.build({
	        _meta: {
	          $loadingRouteData: loading
	        },
	        created: function created() {
	          this._routerView = view;
	        }
	      });

	      // handle keep-alive.
	      // when a kept-alive child vm is restored, we need to
	      // add its cached child views into the router's view list,
	      // and also properly update current view's child view.
	      if (view.keepAlive) {
	        component.$loadingRouteData = loading;
	        var cachedChildView = component._keepAliveRouterView;
	        if (cachedChildView) {
	          view.childView = cachedChildView;
	          component._keepAliveRouterView = null;
	        }
	      }
	    }

	    // cleanup the component in case the transition is aborted
	    // before the component is ever inserted.
	    var cleanup = function cleanup() {
	      component.$destroy();
	    };

	    // actually insert the component and trigger transition
	    var insert = function insert() {
	      if (reuse) {
	        cb && cb();
	        return;
	      }
	      var router = transition.router;
	      if (router._rendered || router._transitionOnLoad) {
	        view.transition(component);
	      } else {
	        // no transition on first render, manual transition
	        /* istanbul ignore if */
	        if (view.setCurrent) {
	          // 0.12 compat
	          view.setCurrent(component);
	        } else {
	          // 1.0
	          view.childVM = component;
	        }
	        component.$before(view.anchor, null, false);
	      }
	      cb && cb();
	    };

	    var afterData = function afterData() {
	      // activate the child view
	      if (view.childView) {
	        activate(view.childView, transition, depth + 1, null, reuse || view.keepAlive);
	      }
	      insert();
	    };

	    // called after activation hook is resolved
	    var afterActivate = function afterActivate() {
	      view.activated = true;
	      if (dataHook && waitForData) {
	        // wait until data loaded to insert
	        loadData(component, transition, dataHook, afterData, cleanup);
	      } else {
	        // load data and insert at the same time
	        if (dataHook) {
	          loadData(component, transition, dataHook);
	        }
	        afterData();
	      }
	    };

	    if (activateHook) {
	      transition.callHooks(activateHook, component, afterActivate, {
	        cleanup: cleanup,
	        postActivate: true
	      });
	    } else {
	      afterActivate();
	    }
	  }

	  /**
	   * Reuse a view, just reload data if necessary.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   */

	  function reuse(view, transition) {
	    var component = view.childVM;
	    var dataHook = getRouteConfig(component, 'data');
	    if (dataHook) {
	      loadData(component, transition, dataHook);
	    }
	  }

	  /**
	   * Asynchronously load and apply data to component.
	   *
	   * @param {Vue} component
	   * @param {Transition} transition
	   * @param {Function} hook
	   * @param {Function} cb
	   * @param {Function} cleanup
	   */

	  function loadData(component, transition, hook, cb, cleanup) {
	    component.$loadingRouteData = true;
	    transition.callHooks(hook, component, function () {
	      component.$loadingRouteData = false;
	      component.$emit('route-data-loaded', component);
	      cb && cb();
	    }, {
	      cleanup: cleanup,
	      postActivate: true,
	      processData: function processData(data) {
	        // handle promise sugar syntax
	        var promises = [];
	        if (isPlainObject(data)) {
	          Object.keys(data).forEach(function (key) {
	            var val = data[key];
	            if (isPromise(val)) {
	              promises.push(val.then(function (resolvedVal) {
	                component.$set(key, resolvedVal);
	              }));
	            } else {
	              component.$set(key, val);
	            }
	          });
	        }
	        if (promises.length) {
	          return promises[0].constructor.all(promises);
	        }
	      }
	    });
	  }

	  /**
	   * Save the child view for a kept-alive view so that
	   * we can restore it when it is switched back to.
	   *
	   * @param {Directive} view
	   */

	  function saveChildView(view) {
	    if (view.keepAlive && view.childVM && view.childView) {
	      view.childVM._keepAliveRouterView = view.childView;
	    }
	    view.childView = null;
	  }

	  /**
	   * Check plain object.
	   *
	   * @param {*} val
	   */

	  function isPlainObject(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }

	  /**
	   * A RouteTransition object manages the pipeline of a
	   * router-view switching process. This is also the object
	   * passed into user route hooks.
	   *
	   * @param {Router} router
	   * @param {Route} to
	   * @param {Route} from
	   */

	  var RouteTransition = (function () {
	    function RouteTransition(router, to, from) {
	      babelHelpers.classCallCheck(this, RouteTransition);

	      this.router = router;
	      this.to = to;
	      this.from = from;
	      this.next = null;
	      this.aborted = false;
	      this.done = false;
	    }

	    /**
	     * Abort current transition and return to previous location.
	     */

	    RouteTransition.prototype.abort = function abort() {
	      if (!this.aborted) {
	        this.aborted = true;
	        // if the root path throws an error during validation
	        // on initial load, it gets caught in an infinite loop.
	        var abortingOnLoad = !this.from.path && this.to.path === '/';
	        if (!abortingOnLoad) {
	          this.router.replace(this.from.path || '/');
	        }
	      }
	    };

	    /**
	     * Abort current transition and redirect to a new location.
	     *
	     * @param {String} path
	     */

	    RouteTransition.prototype.redirect = function redirect(path) {
	      if (!this.aborted) {
	        this.aborted = true;
	        if (typeof path === 'string') {
	          path = mapParams(path, this.to.params, this.to.query);
	        } else {
	          path.params = path.params || this.to.params;
	          path.query = path.query || this.to.query;
	        }
	        this.router.replace(path);
	      }
	    };

	    /**
	     * A router view transition's pipeline can be described as
	     * follows, assuming we are transitioning from an existing
	     * <router-view> chain [Component A, Component B] to a new
	     * chain [Component A, Component C]:
	     *
	     *  A    A
	     *  | => |
	     *  B    C
	     *
	     * 1. Reusablity phase:
	     *   -> canReuse(A, A)
	     *   -> canReuse(B, C)
	     *   -> determine new queues:
	     *      - deactivation: [B]
	     *      - activation: [C]
	     *
	     * 2. Validation phase:
	     *   -> canDeactivate(B)
	     *   -> canActivate(C)
	     *
	     * 3. Activation phase:
	     *   -> deactivate(B)
	     *   -> activate(C)
	     *
	     * Each of these steps can be asynchronous, and any
	     * step can potentially abort the transition.
	     *
	     * @param {Function} cb
	     */

	    RouteTransition.prototype.start = function start(cb) {
	      var transition = this;

	      // determine the queue of views to deactivate
	      var deactivateQueue = [];
	      var view = this.router._rootView;
	      while (view) {
	        deactivateQueue.unshift(view);
	        view = view.childView;
	      }
	      var reverseDeactivateQueue = deactivateQueue.slice().reverse();

	      // determine the queue of route handlers to activate
	      var activateQueue = this.activateQueue = toArray(this.to.matched).map(function (match) {
	        return match.handler;
	      });

	      // 1. Reusability phase
	      var i = undefined,
	          reuseQueue = undefined;
	      for (i = 0; i < reverseDeactivateQueue.length; i++) {
	        if (!canReuse(reverseDeactivateQueue[i], activateQueue[i], transition)) {
	          break;
	        }
	      }
	      if (i > 0) {
	        reuseQueue = reverseDeactivateQueue.slice(0, i);
	        deactivateQueue = reverseDeactivateQueue.slice(i).reverse();
	        activateQueue = activateQueue.slice(i);
	      }

	      // 2. Validation phase
	      transition.runQueue(deactivateQueue, canDeactivate, function () {
	        transition.runQueue(activateQueue, canActivate, function () {
	          transition.runQueue(deactivateQueue, deactivate, function () {
	            // 3. Activation phase

	            // Update router current route
	            transition.router._onTransitionValidated(transition);

	            // trigger reuse for all reused views
	            reuseQueue && reuseQueue.forEach(function (view) {
	              return reuse(view, transition);
	            });

	            // the root of the chain that needs to be replaced
	            // is the top-most non-reusable view.
	            if (deactivateQueue.length) {
	              var _view = deactivateQueue[deactivateQueue.length - 1];
	              var depth = reuseQueue ? reuseQueue.length : 0;
	              activate(_view, transition, depth, cb);
	            } else {
	              cb();
	            }
	          });
	        });
	      });
	    };

	    /**
	     * Asynchronously and sequentially apply a function to a
	     * queue.
	     *
	     * @param {Array} queue
	     * @param {Function} fn
	     * @param {Function} cb
	     */

	    RouteTransition.prototype.runQueue = function runQueue(queue, fn, cb) {
	      var transition = this;
	      step(0);
	      function step(index) {
	        if (index >= queue.length) {
	          cb();
	        } else {
	          fn(queue[index], transition, function () {
	            step(index + 1);
	          });
	        }
	      }
	    };

	    /**
	     * Call a user provided route transition hook and handle
	     * the response (e.g. if the user returns a promise).
	     *
	     * If the user neither expects an argument nor returns a
	     * promise, the hook is assumed to be synchronous.
	     *
	     * @param {Function} hook
	     * @param {*} [context]
	     * @param {Function} [cb]
	     * @param {Object} [options]
	     *                 - {Boolean} expectBoolean
	     *                 - {Boolean} postActive
	     *                 - {Function} processData
	     *                 - {Function} cleanup
	     */

	    RouteTransition.prototype.callHook = function callHook(hook, context, cb) {
	      var _ref = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	      var _ref$expectBoolean = _ref.expectBoolean;
	      var expectBoolean = _ref$expectBoolean === undefined ? false : _ref$expectBoolean;
	      var _ref$postActivate = _ref.postActivate;
	      var postActivate = _ref$postActivate === undefined ? false : _ref$postActivate;
	      var processData = _ref.processData;
	      var cleanup = _ref.cleanup;

	      var transition = this;
	      var nextCalled = false;

	      // abort the transition
	      var abort = function abort() {
	        cleanup && cleanup();
	        transition.abort();
	      };

	      // handle errors
	      var onError = function onError(err) {
	        postActivate ? next() : abort();
	        if (err && !transition.router._suppress) {
	          warn$1('Uncaught error during transition: ');
	          throw err instanceof Error ? err : new Error(err);
	        }
	      };

	      // since promise swallows errors, we have to
	      // throw it in the next tick...
	      var onPromiseError = function onPromiseError(err) {
	        try {
	          onError(err);
	        } catch (e) {
	          setTimeout(function () {
	            throw e;
	          }, 0);
	        }
	      };

	      // advance the transition to the next step
	      var next = function next() {
	        if (nextCalled) {
	          warn$1('transition.next() should be called only once.');
	          return;
	        }
	        nextCalled = true;
	        if (transition.aborted) {
	          cleanup && cleanup();
	          return;
	        }
	        cb && cb();
	      };

	      var nextWithBoolean = function nextWithBoolean(res) {
	        if (typeof res === 'boolean') {
	          res ? next() : abort();
	        } else if (isPromise(res)) {
	          res.then(function (ok) {
	            ok ? next() : abort();
	          }, onPromiseError);
	        } else if (!hook.length) {
	          next();
	        }
	      };

	      var nextWithData = function nextWithData(data) {
	        var res = undefined;
	        try {
	          res = processData(data);
	        } catch (err) {
	          return onError(err);
	        }
	        if (isPromise(res)) {
	          res.then(next, onPromiseError);
	        } else {
	          next();
	        }
	      };

	      // expose a clone of the transition object, so that each
	      // hook gets a clean copy and prevent the user from
	      // messing with the internals.
	      var exposed = {
	        to: transition.to,
	        from: transition.from,
	        abort: abort,
	        next: processData ? nextWithData : next,
	        redirect: function redirect() {
	          transition.redirect.apply(transition, arguments);
	        }
	      };

	      // actually call the hook
	      var res = undefined;
	      try {
	        res = hook.call(context, exposed);
	      } catch (err) {
	        return onError(err);
	      }

	      if (expectBoolean) {
	        // boolean hooks
	        nextWithBoolean(res);
	      } else if (isPromise(res)) {
	        // promise
	        if (processData) {
	          res.then(nextWithData, onPromiseError);
	        } else {
	          res.then(next, onPromiseError);
	        }
	      } else if (processData && isPlainOjbect(res)) {
	        // data promise sugar
	        nextWithData(res);
	      } else if (!hook.length) {
	        next();
	      }
	    };

	    /**
	     * Call a single hook or an array of async hooks in series.
	     *
	     * @param {Array} hooks
	     * @param {*} context
	     * @param {Function} cb
	     * @param {Object} [options]
	     */

	    RouteTransition.prototype.callHooks = function callHooks(hooks, context, cb, options) {
	      var _this = this;

	      if (Array.isArray(hooks)) {
	        this.runQueue(hooks, function (hook, _, next) {
	          if (!_this.aborted) {
	            _this.callHook(hook, context, next, options);
	          }
	        }, cb);
	      } else {
	        this.callHook(hooks, context, cb, options);
	      }
	    };

	    return RouteTransition;
	  })();

	  function isPlainOjbect(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }

	  function toArray(val) {
	    return val ? Array.prototype.slice.call(val) : [];
	  }

	  var internalKeysRE = /^(component|subRoutes|fullPath)$/;

	  /**
	   * Route Context Object
	   *
	   * @param {String} path
	   * @param {Router} router
	   */

	  var Route = function Route(path, router) {
	    var _this = this;

	    babelHelpers.classCallCheck(this, Route);

	    var matched = router._recognizer.recognize(path);
	    if (matched) {
	      // copy all custom fields from route configs
	      [].forEach.call(matched, function (match) {
	        for (var key in match.handler) {
	          if (!internalKeysRE.test(key)) {
	            _this[key] = match.handler[key];
	          }
	        }
	      });
	      // set query and params
	      this.query = matched.queryParams;
	      this.params = [].reduce.call(matched, function (prev, cur) {
	        if (cur.params) {
	          for (var key in cur.params) {
	            prev[key] = cur.params[key];
	          }
	        }
	        return prev;
	      }, {});
	    }
	    // expose path and router
	    this.path = path;
	    // for internal use
	    this.matched = matched || router._notFoundHandler;
	    // internal reference to router
	    Object.defineProperty(this, 'router', {
	      enumerable: false,
	      value: router
	    });
	    // Important: freeze self to prevent observation
	    Object.freeze(this);
	  };

	  function applyOverride (Vue) {
	    var _Vue$util = Vue.util;
	    var extend = _Vue$util.extend;
	    var isArray = _Vue$util.isArray;
	    var defineReactive = _Vue$util.defineReactive;

	    // override Vue's init and destroy process to keep track of router instances
	    var init = Vue.prototype._init;
	    Vue.prototype._init = function (options) {
	      options = options || {};
	      var root = options._parent || options.parent || this;
	      var router = root.$router;
	      var route = root.$route;
	      if (router) {
	        // expose router
	        this.$router = router;
	        router._children.push(this);
	        /* istanbul ignore if */
	        if (this._defineMeta) {
	          // 0.12
	          this._defineMeta('$route', route);
	        } else {
	          // 1.0
	          defineReactive(this, '$route', route);
	        }
	      }
	      init.call(this, options);
	    };

	    var destroy = Vue.prototype._destroy;
	    Vue.prototype._destroy = function () {
	      if (!this._isBeingDestroyed && this.$router) {
	        this.$router._children.$remove(this);
	      }
	      destroy.apply(this, arguments);
	    };

	    // 1.0 only: enable route mixins
	    var strats = Vue.config.optionMergeStrategies;
	    var hooksToMergeRE = /^(data|activate|deactivate)$/;

	    if (strats) {
	      strats.route = function (parentVal, childVal) {
	        if (!childVal) return parentVal;
	        if (!parentVal) return childVal;
	        var ret = {};
	        extend(ret, parentVal);
	        for (var key in childVal) {
	          var a = ret[key];
	          var b = childVal[key];
	          // for data, activate and deactivate, we need to merge them into
	          // arrays similar to lifecycle hooks.
	          if (a && hooksToMergeRE.test(key)) {
	            ret[key] = (isArray(a) ? a : [a]).concat(b);
	          } else {
	            ret[key] = b;
	          }
	        }
	        return ret;
	      };
	    }
	  }

	  function View (Vue) {

	    var _ = Vue.util;
	    var componentDef =
	    // 0.12
	    Vue.directive('_component') ||
	    // 1.0
	    Vue.internalDirectives.component;
	    // <router-view> extends the internal component directive
	    var viewDef = _.extend({}, componentDef);

	    // with some overrides
	    _.extend(viewDef, {

	      _isRouterView: true,

	      bind: function bind() {
	        var route = this.vm.$route;
	        /* istanbul ignore if */
	        if (!route) {
	          warn$1('<router-view> can only be used inside a ' + 'router-enabled app.');
	          return;
	        }
	        // force dynamic directive so v-component doesn't
	        // attempt to build right now
	        this._isDynamicLiteral = true;
	        // finally, init by delegating to v-component
	        componentDef.bind.call(this);

	        // locate the parent view
	        var parentView = undefined;
	        var parent = this.vm;
	        while (parent) {
	          if (parent._routerView) {
	            parentView = parent._routerView;
	            break;
	          }
	          parent = parent.$parent;
	        }
	        if (parentView) {
	          // register self as a child of the parent view,
	          // instead of activating now. This is so that the
	          // child's activate hook is called after the
	          // parent's has resolved.
	          this.parentView = parentView;
	          parentView.childView = this;
	        } else {
	          // this is the root view!
	          var router = route.router;
	          router._rootView = this;
	        }

	        // handle late-rendered view
	        // two possibilities:
	        // 1. root view rendered after transition has been
	        //    validated;
	        // 2. child view rendered after parent view has been
	        //    activated.
	        var transition = route.router._currentTransition;
	        if (!parentView && transition.done || parentView && parentView.activated) {
	          var depth = parentView ? parentView.depth + 1 : 0;
	          activate(this, transition, depth);
	        }
	      },

	      unbind: function unbind() {
	        if (this.parentView) {
	          this.parentView.childView = null;
	        }
	        componentDef.unbind.call(this);
	      }
	    });

	    Vue.elementDirective('router-view', viewDef);
	  }

	  var trailingSlashRE = /\/$/;
	  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	  var queryStringRE = /\?.*$/;

	  // install v-link, which provides navigation support for
	  // HTML5 history mode
	  function Link (Vue) {
	    var _Vue$util = Vue.util;
	    var _bind = _Vue$util.bind;
	    var isObject = _Vue$util.isObject;
	    var addClass = _Vue$util.addClass;
	    var removeClass = _Vue$util.removeClass;

	    var onPriority = Vue.directive('on').priority;
	    var LINK_UPDATE = '__vue-router-link-update__';

	    var activeId = 0;

	    Vue.directive('link-active', {
	      priority: 9999,
	      bind: function bind() {
	        var _this = this;

	        var id = String(activeId++);
	        // collect v-links contained within this element.
	        // we need do this here before the parent-child relationship
	        // gets messed up by terminal directives (if, for, components)
	        var childLinks = this.el.querySelectorAll('[v-link]');
	        for (var i = 0, l = childLinks.length; i < l; i++) {
	          var link = childLinks[i];
	          var existingId = link.getAttribute(LINK_UPDATE);
	          var value = existingId ? existingId + ',' + id : id;
	          // leave a mark on the link element which can be persisted
	          // through fragment clones.
	          link.setAttribute(LINK_UPDATE, value);
	        }
	        this.vm.$on(LINK_UPDATE, this.cb = function (link, path) {
	          if (link.activeIds.indexOf(id) > -1) {
	            link.updateClasses(path, _this.el);
	          }
	        });
	      },
	      unbind: function unbind() {
	        this.vm.$off(LINK_UPDATE, this.cb);
	      }
	    });

	    Vue.directive('link', {
	      priority: onPriority - 2,

	      bind: function bind() {
	        var vm = this.vm;
	        /* istanbul ignore if */
	        if (!vm.$route) {
	          warn$1('v-link can only be used inside a router-enabled app.');
	          return;
	        }
	        this.router = vm.$route.router;
	        // update things when the route changes
	        this.unwatch = vm.$watch('$route', _bind(this.onRouteUpdate, this));
	        // check v-link-active ids
	        var activeIds = this.el.getAttribute(LINK_UPDATE);
	        if (activeIds) {
	          this.el.removeAttribute(LINK_UPDATE);
	          this.activeIds = activeIds.split(',');
	        }
	        // no need to handle click if link expects to be opened
	        // in a new window/tab.
	        /* istanbul ignore if */
	        if (this.el.tagName === 'A' && this.el.getAttribute('target') === '_blank') {
	          return;
	        }
	        // handle click
	        this.handler = _bind(this.onClick, this);
	        this.el.addEventListener('click', this.handler);
	      },

	      update: function update(target) {
	        this.target = target;
	        if (isObject(target)) {
	          this.append = target.append;
	          this.exact = target.exact;
	          this.prevActiveClass = this.activeClass;
	          this.activeClass = target.activeClass;
	        }
	        this.onRouteUpdate(this.vm.$route);
	      },

	      onClick: function onClick(e) {
	        // don't redirect with control keys
	        /* istanbul ignore if */
	        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
	        // don't redirect when preventDefault called
	        /* istanbul ignore if */
	        if (e.defaultPrevented) return;
	        // don't redirect on right click
	        /* istanbul ignore if */
	        if (e.button !== 0) return;

	        var target = this.target;
	        if (target) {
	          // v-link with expression, just go
	          e.preventDefault();
	          this.router.go(target);
	        } else {
	          // no expression, delegate for an <a> inside
	          var el = e.target;
	          while (el.tagName !== 'A' && el !== this.el) {
	            el = el.parentNode;
	          }
	          if (el.tagName === 'A' && sameOrigin(el)) {
	            e.preventDefault();
	            var path = el.pathname;
	            if (this.router.history.root) {
	              path = path.replace(this.router.history.rootRE, '');
	            }
	            this.router.go({
	              path: path,
	              replace: target && target.replace,
	              append: target && target.append
	            });
	          }
	        }
	      },

	      onRouteUpdate: function onRouteUpdate(route) {
	        // router.stringifyPath is dependent on current route
	        // and needs to be called again whenver route changes.
	        var newPath = this.router.stringifyPath(this.target);
	        if (this.path !== newPath) {
	          this.path = newPath;
	          this.updateActiveMatch();
	          this.updateHref();
	        }
	        if (this.activeIds) {
	          this.vm.$emit(LINK_UPDATE, this, route.path);
	        } else {
	          this.updateClasses(route.path, this.el);
	        }
	      },

	      updateActiveMatch: function updateActiveMatch() {
	        this.activeRE = this.path && !this.exact ? new RegExp('^' + this.path.replace(/\/$/, '').replace(queryStringRE, '').replace(regexEscapeRE, '\\$&') + '(\\/|$)') : null;
	      },

	      updateHref: function updateHref() {
	        if (this.el.tagName !== 'A') {
	          return;
	        }
	        var path = this.path;
	        var router = this.router;
	        var isAbsolute = path.charAt(0) === '/';
	        // do not format non-hash relative paths
	        var href = path && (router.mode === 'hash' || isAbsolute) ? router.history.formatPath(path, this.append) : path;
	        if (href) {
	          this.el.href = href;
	        } else {
	          this.el.removeAttribute('href');
	        }
	      },

	      updateClasses: function updateClasses(path, el) {
	        var activeClass = this.activeClass || this.router._linkActiveClass;
	        // clear old class
	        if (this.prevActiveClass && this.prevActiveClass !== activeClass) {
	          toggleClasses(el, this.prevActiveClass, removeClass);
	        }
	        // remove query string before matching
	        var dest = this.path.replace(queryStringRE, '');
	        path = path.replace(queryStringRE, '');
	        // add new class
	        if (this.exact) {
	          if (dest === path ||
	          // also allow additional trailing slash
	          dest.charAt(dest.length - 1) !== '/' && dest === path.replace(trailingSlashRE, '')) {
	            toggleClasses(el, activeClass, addClass);
	          } else {
	            toggleClasses(el, activeClass, removeClass);
	          }
	        } else {
	          if (this.activeRE && this.activeRE.test(path)) {
	            toggleClasses(el, activeClass, addClass);
	          } else {
	            toggleClasses(el, activeClass, removeClass);
	          }
	        }
	      },

	      unbind: function unbind() {
	        this.el.removeEventListener('click', this.handler);
	        this.unwatch && this.unwatch();
	      }
	    });

	    function sameOrigin(link) {
	      return link.protocol === location.protocol && link.hostname === location.hostname && link.port === location.port;
	    }

	    // this function is copied from v-bind:class implementation until
	    // we properly expose it...
	    function toggleClasses(el, key, fn) {
	      key = key.trim();
	      if (key.indexOf(' ') === -1) {
	        fn(el, key);
	        return;
	      }
	      var keys = key.split(/\s+/);
	      for (var i = 0, l = keys.length; i < l; i++) {
	        fn(el, keys[i]);
	      }
	    }
	  }

	  var historyBackends = {
	    abstract: AbstractHistory,
	    hash: HashHistory,
	    html5: HTML5History
	  };

	  // late bind during install
	  var Vue = undefined;

	  /**
	   * Router constructor
	   *
	   * @param {Object} [options]
	   */

	  var Router = (function () {
	    function Router() {
	      var _this = this;

	      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	      var _ref$hashbang = _ref.hashbang;
	      var hashbang = _ref$hashbang === undefined ? true : _ref$hashbang;
	      var _ref$abstract = _ref.abstract;
	      var abstract = _ref$abstract === undefined ? false : _ref$abstract;
	      var _ref$history = _ref.history;
	      var history = _ref$history === undefined ? false : _ref$history;
	      var _ref$saveScrollPosition = _ref.saveScrollPosition;
	      var saveScrollPosition = _ref$saveScrollPosition === undefined ? false : _ref$saveScrollPosition;
	      var _ref$transitionOnLoad = _ref.transitionOnLoad;
	      var transitionOnLoad = _ref$transitionOnLoad === undefined ? false : _ref$transitionOnLoad;
	      var _ref$suppressTransitionError = _ref.suppressTransitionError;
	      var suppressTransitionError = _ref$suppressTransitionError === undefined ? false : _ref$suppressTransitionError;
	      var _ref$root = _ref.root;
	      var root = _ref$root === undefined ? null : _ref$root;
	      var _ref$linkActiveClass = _ref.linkActiveClass;
	      var linkActiveClass = _ref$linkActiveClass === undefined ? 'v-link-active' : _ref$linkActiveClass;
	      babelHelpers.classCallCheck(this, Router);

	      /* istanbul ignore if */
	      if (!Router.installed) {
	        throw new Error('Please install the Router with Vue.use() before ' + 'creating an instance.');
	      }

	      // Vue instances
	      this.app = null;
	      this._children = [];

	      // route recognizer
	      this._recognizer = new RouteRecognizer();
	      this._guardRecognizer = new RouteRecognizer();

	      // state
	      this._started = false;
	      this._startCb = null;
	      this._currentRoute = {};
	      this._currentTransition = null;
	      this._previousTransition = null;
	      this._notFoundHandler = null;
	      this._notFoundRedirect = null;
	      this._beforeEachHooks = [];
	      this._afterEachHooks = [];

	      // trigger transition on initial render?
	      this._rendered = false;
	      this._transitionOnLoad = transitionOnLoad;

	      // history mode
	      this._root = root;
	      this._abstract = abstract;
	      this._hashbang = hashbang;

	      // check if HTML5 history is available
	      var hasPushState = typeof window !== 'undefined' && window.history && window.history.pushState;
	      this._history = history && hasPushState;
	      this._historyFallback = history && !hasPushState;

	      // create history object
	      var inBrowser = Vue.util.inBrowser;
	      this.mode = !inBrowser || this._abstract ? 'abstract' : this._history ? 'html5' : 'hash';

	      var History = historyBackends[this.mode];
	      this.history = new History({
	        root: root,
	        hashbang: this._hashbang,
	        onChange: function onChange(path, state, anchor) {
	          _this._match(path, state, anchor);
	        }
	      });

	      // other options
	      this._saveScrollPosition = saveScrollPosition;
	      this._linkActiveClass = linkActiveClass;
	      this._suppress = suppressTransitionError;
	    }

	    /**
	     * Allow directly passing components to a route
	     * definition.
	     *
	     * @param {String} path
	     * @param {Object} handler
	     */

	    // API ===================================================

	    /**
	    * Register a map of top-level paths.
	    *
	    * @param {Object} map
	    */

	    Router.prototype.map = function map(_map) {
	      for (var route in _map) {
	        this.on(route, _map[route]);
	      }
	      return this;
	    };

	    /**
	     * Register a single root-level path
	     *
	     * @param {String} rootPath
	     * @param {Object} handler
	     *                 - {String} component
	     *                 - {Object} [subRoutes]
	     *                 - {Boolean} [forceRefresh]
	     *                 - {Function} [before]
	     *                 - {Function} [after]
	     */

	    Router.prototype.on = function on(rootPath, handler) {
	      if (rootPath === '*') {
	        this._notFound(handler);
	      } else {
	        this._addRoute(rootPath, handler, []);
	      }
	      return this;
	    };

	    /**
	     * Set redirects.
	     *
	     * @param {Object} map
	     */

	    Router.prototype.redirect = function redirect(map) {
	      for (var path in map) {
	        this._addRedirect(path, map[path]);
	      }
	      return this;
	    };

	    /**
	     * Set aliases.
	     *
	     * @param {Object} map
	     */

	    Router.prototype.alias = function alias(map) {
	      for (var path in map) {
	        this._addAlias(path, map[path]);
	      }
	      return this;
	    };

	    /**
	     * Set global before hook.
	     *
	     * @param {Function} fn
	     */

	    Router.prototype.beforeEach = function beforeEach(fn) {
	      this._beforeEachHooks.push(fn);
	      return this;
	    };

	    /**
	     * Set global after hook.
	     *
	     * @param {Function} fn
	     */

	    Router.prototype.afterEach = function afterEach(fn) {
	      this._afterEachHooks.push(fn);
	      return this;
	    };

	    /**
	     * Navigate to a given path.
	     * The path can be an object describing a named path in
	     * the format of { name: '...', params: {}, query: {}}
	     * The path is assumed to be already decoded, and will
	     * be resolved against root (if provided)
	     *
	     * @param {String|Object} path
	     * @param {Boolean} [replace]
	     */

	    Router.prototype.go = function go(path) {
	      var replace = false;
	      var append = false;
	      if (Vue.util.isObject(path)) {
	        replace = path.replace;
	        append = path.append;
	      }
	      path = this.stringifyPath(path);
	      if (path) {
	        this.history.go(path, replace, append);
	      }
	    };

	    /**
	     * Short hand for replacing current path
	     *
	     * @param {String} path
	     */

	    Router.prototype.replace = function replace(path) {
	      if (typeof path === 'string') {
	        path = { path: path };
	      }
	      path.replace = true;
	      this.go(path);
	    };

	    /**
	     * Start the router.
	     *
	     * @param {VueConstructor} App
	     * @param {String|Element} container
	     * @param {Function} [cb]
	     */

	    Router.prototype.start = function start(App, container, cb) {
	      /* istanbul ignore if */
	      if (this._started) {
	        warn$1('already started.');
	        return;
	      }
	      this._started = true;
	      this._startCb = cb;
	      if (!this.app) {
	        /* istanbul ignore if */
	        if (!App || !container) {
	          throw new Error('Must start vue-router with a component and a ' + 'root container.');
	        }
	        /* istanbul ignore if */
	        if (App instanceof Vue) {
	          throw new Error('Must start vue-router with a component, not a ' + 'Vue instance.');
	        }
	        this._appContainer = container;
	        var Ctor = this._appConstructor = typeof App === 'function' ? App : Vue.extend(App);
	        // give it a name for better debugging
	        Ctor.options.name = Ctor.options.name || 'RouterApp';
	      }

	      // handle history fallback in browsers that do not
	      // support HTML5 history API
	      if (this._historyFallback) {
	        var _location = window.location;
	        var _history = new HTML5History({ root: this._root });
	        var path = _history.root ? _location.pathname.replace(_history.rootRE, '') : _location.pathname;
	        if (path && path !== '/') {
	          _location.assign((_history.root || '') + '/' + this.history.formatPath(path) + _location.search);
	          return;
	        }
	      }

	      this.history.start();
	    };

	    /**
	     * Stop listening to route changes.
	     */

	    Router.prototype.stop = function stop() {
	      this.history.stop();
	      this._started = false;
	    };

	    /**
	     * Normalize named route object / string paths into
	     * a string.
	     *
	     * @param {Object|String|Number} path
	     * @return {String}
	     */

	    Router.prototype.stringifyPath = function stringifyPath(path) {
	      var generatedPath = '';
	      if (path && typeof path === 'object') {
	        if (path.name) {
	          var extend = Vue.util.extend;
	          var currentParams = this._currentTransition && this._currentTransition.to.params;
	          var targetParams = path.params || {};
	          var params = currentParams ? extend(extend({}, currentParams), targetParams) : targetParams;
	          generatedPath = encodeURI(this._recognizer.generate(path.name, params));
	        } else if (path.path) {
	          generatedPath = encodeURI(path.path);
	        }
	        if (path.query) {
	          // note: the generated query string is pre-URL-encoded by the recognizer
	          var query = this._recognizer.generateQueryString(path.query);
	          if (generatedPath.indexOf('?') > -1) {
	            generatedPath += '&' + query.slice(1);
	          } else {
	            generatedPath += query;
	          }
	        }
	      } else {
	        generatedPath = encodeURI(path ? path + '' : '');
	      }
	      return generatedPath;
	    };

	    // Internal methods ======================================

	    /**
	    * Add a route containing a list of segments to the internal
	    * route recognizer. Will be called recursively to add all
	    * possible sub-routes.
	    *
	    * @param {String} path
	    * @param {Object} handler
	    * @param {Array} segments
	    */

	    Router.prototype._addRoute = function _addRoute(path, handler, segments) {
	      guardComponent(path, handler);
	      handler.path = path;
	      handler.fullPath = (segments.reduce(function (path, segment) {
	        return path + segment.path;
	      }, '') + path).replace('//', '/');
	      segments.push({
	        path: path,
	        handler: handler
	      });
	      this._recognizer.add(segments, {
	        as: handler.name
	      });
	      // add sub routes
	      if (handler.subRoutes) {
	        for (var subPath in handler.subRoutes) {
	          // recursively walk all sub routes
	          this._addRoute(subPath, handler.subRoutes[subPath],
	          // pass a copy in recursion to avoid mutating
	          // across branches
	          segments.slice());
	        }
	      }
	    };

	    /**
	     * Set the notFound route handler.
	     *
	     * @param {Object} handler
	     */

	    Router.prototype._notFound = function _notFound(handler) {
	      guardComponent('*', handler);
	      this._notFoundHandler = [{ handler: handler }];
	    };

	    /**
	     * Add a redirect record.
	     *
	     * @param {String} path
	     * @param {String} redirectPath
	     */

	    Router.prototype._addRedirect = function _addRedirect(path, redirectPath) {
	      if (path === '*') {
	        this._notFoundRedirect = redirectPath;
	      } else {
	        this._addGuard(path, redirectPath, this.replace);
	      }
	    };

	    /**
	     * Add an alias record.
	     *
	     * @param {String} path
	     * @param {String} aliasPath
	     */

	    Router.prototype._addAlias = function _addAlias(path, aliasPath) {
	      this._addGuard(path, aliasPath, this._match);
	    };

	    /**
	     * Add a path guard.
	     *
	     * @param {String} path
	     * @param {String} mappedPath
	     * @param {Function} handler
	     */

	    Router.prototype._addGuard = function _addGuard(path, mappedPath, _handler) {
	      var _this2 = this;

	      this._guardRecognizer.add([{
	        path: path,
	        handler: function handler(match, query) {
	          var realPath = mapParams(mappedPath, match.params, query);
	          _handler.call(_this2, realPath);
	        }
	      }]);
	    };

	    /**
	     * Check if a path matches any redirect records.
	     *
	     * @param {String} path
	     * @return {Boolean} - if true, will skip normal match.
	     */

	    Router.prototype._checkGuard = function _checkGuard(path) {
	      var matched = this._guardRecognizer.recognize(path, true);
	      if (matched) {
	        matched[0].handler(matched[0], matched.queryParams);
	        return true;
	      } else if (this._notFoundRedirect) {
	        matched = this._recognizer.recognize(path);
	        if (!matched) {
	          this.replace(this._notFoundRedirect);
	          return true;
	        }
	      }
	    };

	    /**
	     * Match a URL path and set the route context on vm,
	     * triggering view updates.
	     *
	     * @param {String} path
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */

	    Router.prototype._match = function _match(path, state, anchor) {
	      var _this3 = this;

	      if (this._checkGuard(path)) {
	        return;
	      }

	      var currentRoute = this._currentRoute;
	      var currentTransition = this._currentTransition;

	      if (currentTransition) {
	        if (currentTransition.to.path === path) {
	          // do nothing if we have an active transition going to the same path
	          return;
	        } else if (currentRoute.path === path) {
	          // We are going to the same path, but we also have an ongoing but
	          // not-yet-validated transition. Abort that transition and reset to
	          // prev transition.
	          currentTransition.aborted = true;
	          this._currentTransition = this._prevTransition;
	          return;
	        } else {
	          // going to a totally different path. abort ongoing transition.
	          currentTransition.aborted = true;
	        }
	      }

	      // construct new route and transition context
	      var route = new Route(path, this);
	      var transition = new RouteTransition(this, route, currentRoute);

	      // current transition is updated right now.
	      // however, current route will only be updated after the transition has
	      // been validated.
	      this._prevTransition = currentTransition;
	      this._currentTransition = transition;

	      if (!this.app) {
	        (function () {
	          // initial render
	          var router = _this3;
	          _this3.app = new _this3._appConstructor({
	            el: _this3._appContainer,
	            created: function created() {
	              this.$router = router;
	            },
	            _meta: {
	              $route: route
	            }
	          });
	        })();
	      }

	      // check global before hook
	      var beforeHooks = this._beforeEachHooks;
	      var startTransition = function startTransition() {
	        transition.start(function () {
	          _this3._postTransition(route, state, anchor);
	        });
	      };

	      if (beforeHooks.length) {
	        transition.runQueue(beforeHooks, function (hook, _, next) {
	          if (transition === _this3._currentTransition) {
	            transition.callHook(hook, null, next, {
	              expectBoolean: true
	            });
	          }
	        }, startTransition);
	      } else {
	        startTransition();
	      }

	      if (!this._rendered && this._startCb) {
	        this._startCb.call(null);
	      }

	      // HACK:
	      // set rendered to true after the transition start, so
	      // that components that are acitvated synchronously know
	      // whether it is the initial render.
	      this._rendered = true;
	    };

	    /**
	     * Set current to the new transition.
	     * This is called by the transition object when the
	     * validation of a route has succeeded.
	     *
	     * @param {Transition} transition
	     */

	    Router.prototype._onTransitionValidated = function _onTransitionValidated(transition) {
	      // set current route
	      var route = this._currentRoute = transition.to;
	      // update route context for all children
	      if (this.app.$route !== route) {
	        this.app.$route = route;
	        this._children.forEach(function (child) {
	          child.$route = route;
	        });
	      }
	      // call global after hook
	      if (this._afterEachHooks.length) {
	        this._afterEachHooks.forEach(function (hook) {
	          return hook.call(null, {
	            to: transition.to,
	            from: transition.from
	          });
	        });
	      }
	      this._currentTransition.done = true;
	    };

	    /**
	     * Handle stuff after the transition.
	     *
	     * @param {Route} route
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */

	    Router.prototype._postTransition = function _postTransition(route, state, anchor) {
	      // handle scroll positions
	      // saved scroll positions take priority
	      // then we check if the path has an anchor
	      var pos = state && state.pos;
	      if (pos && this._saveScrollPosition) {
	        Vue.nextTick(function () {
	          window.scrollTo(pos.x, pos.y);
	        });
	      } else if (anchor) {
	        Vue.nextTick(function () {
	          var el = document.getElementById(anchor.slice(1));
	          if (el) {
	            window.scrollTo(window.scrollX, el.offsetTop);
	          }
	        });
	      }
	    };

	    return Router;
	  })();

	  function guardComponent(path, handler) {
	    var comp = handler.component;
	    if (Vue.util.isPlainObject(comp)) {
	      comp = handler.component = Vue.extend(comp);
	    }
	    /* istanbul ignore if */
	    if (typeof comp !== 'function') {
	      handler.component = null;
	      warn$1('invalid component for route "' + path + '".');
	    }
	  }

	  /* Installation */

	  Router.installed = false;

	  /**
	   * Installation interface.
	   * Install the necessary directives.
	   */

	  Router.install = function (externalVue) {
	    /* istanbul ignore if */
	    if (Router.installed) {
	      warn$1('already installed.');
	      return;
	    }
	    Vue = externalVue;
	    applyOverride(Vue);
	    View(Vue);
	    Link(Vue);
	    exports$1.Vue = Vue;
	    Router.installed = true;
	  };

	  // auto install
	  /* istanbul ignore if */
	  if (typeof window !== 'undefined' && window.Vue) {
	    window.Vue.use(Router);
	  }

	  return Router;

	}));

/***/ },
/* 390 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(391)
	__vue_script__ = __webpack_require__(393)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\PCbizhi\\PCbizhi.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(396)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./PCbizhi.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 391 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 392 */,
/* 393 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _store = __webpack_require__(394);

	var _store2 = _interopRequireDefault(_store);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    data: function data() {
	        return {
	            menus: [{
	                text: '电脑壁纸管理',
	                path: '/PCbizhi/app'
	            }]
	        };
	    },

	    store: _store2.default
	};
	// </script>
	// <template>
	//     <div class="aside">
	//         <!-- 使用指令 v-link 进行导航。 -->
	//         <d-nav-menu>
	//             <d-nav-menu-item v-for="menu in menus" :text="menu.text" :path="menu.path" :expanded="$index === 0">
	//             </d-nav-menu-item>
	//         </d-nav-menu>
	//     </div>
	//     <!-- 路由外链 -->
	//     <div class="main">
	//         <router-view ></router-view>
	//     </div>
	// </template>
	// <style>
	//     .main {
	//         position: relative;
	//         margin-left: 150px;
	//         padding-top: 20px;
	//         height: 1000px;
	//         box-sizing: border-box;
	//         overflow: auto;
	//     }
	//
	//     .aside {
	//         position: absolute;
	//         padding-top: 20px;
	//         width: 150px;
	//         z-index: 1;
	//     }
	//
	//     .aside ul {
	//         margin: 0;
	//         padding: 0;
	//         width: 100%;
	//         list-style: none;
	//         background-color: transparent;
	//         font-size: 12px;
	//     }
	//
	//     .aside ul li {
	//         display: block;
	//         height: 50px;
	//         background-color: #FFF;
	//         text-align: center;
	//         line-height: 50px;
	//     }
	//
	//     .aside ul li a {
	//         text-decoration: none;
	//         color: #000;
	//     }
	// </style>
	//
	// <script>

/***/ },
/* 394 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	var _vuex = __webpack_require__(395);

	var _vuex2 = _interopRequireDefault(_vuex);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by Administrator on 2016/9/21 0021.
	 */
	_vue2.default.use(_vuex2.default);

	var state = {
	    ZhuanJi: '',
	    colornm: '',
	    PPTnm: '',
	    isEdit: Boolean()
	};

	var mutations = {

	    //编辑专辑名称
	    EDITZHUANJI: function EDITZHUANJI(state, name, status) {
	        state.ZhuanJi = name;
	        state.isEdit = status;
	    },


	    //编辑颜色
	    EDITCOLOR: function EDITCOLOR(state, color, status) {
	        state.colornm = color;
	        state.isEdit = status;
	    },


	    //编辑幻灯片
	    EDITPPT: function EDITPPT(state, PPT, status) {
	        state.PPTnm = PPT;
	        state.isEdit = status;
	    }
	};

	exports.default = new _vuex2.default.Store({
	    state: state,
	    mutations: mutations
	});

/***/ },
/* 395 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Vuex v1.0.0-rc.2
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  (global.Vuex = factory());
	}(this, function () { 'use strict';

	  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	    return typeof obj;
	  } : function (obj) {
	    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
	  };

	  var classCallCheck = function (instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  };

	  var createClass = function () {
	    function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	        var descriptor = props[i];
	        descriptor.enumerable = descriptor.enumerable || false;
	        descriptor.configurable = true;
	        if ("value" in descriptor) descriptor.writable = true;
	        Object.defineProperty(target, descriptor.key, descriptor);
	      }
	    }

	    return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);
	      if (staticProps) defineProperties(Constructor, staticProps);
	      return Constructor;
	    };
	  }();

	  var toConsumableArray = function (arr) {
	    if (Array.isArray(arr)) {
	      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

	      return arr2;
	    } else {
	      return Array.from(arr);
	    }
	  };

	  /**
	   * Merge an array of objects into one.
	   *
	   * @param {Array<Object>} arr
	   * @return {Object}
	   */

	  function mergeObjects(arr) {
	    return arr.reduce(function (prev, obj) {
	      Object.keys(obj).forEach(function (key) {
	        var existing = prev[key];
	        if (existing) {
	          // allow multiple mutation objects to contain duplicate
	          // handlers for the same mutation type
	          if (Array.isArray(existing)) {
	            prev[key] = existing.concat(obj[key]);
	          } else {
	            prev[key] = [existing].concat(obj[key]);
	          }
	        } else {
	          prev[key] = obj[key];
	        }
	      });
	      return prev;
	    }, {});
	  }

	  /**
	   * Check whether the given value is Object or not
	   *
	   * @param {*} obj
	   * @return {Boolean}
	   */

	  function isObject(obj) {
	    return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
	  }

	  /**
	   * Get state sub tree by given keys.
	   *
	   * @param {Object} state
	   * @param {Array<String>} nestedKeys
	   * @return {Object}
	   */
	  function getNestedState(state, nestedKeys) {
	    return nestedKeys.reduce(function (state, key) {
	      return state[key];
	    }, state);
	  }

	  /**
	   * Hacks to get access to Vue internals.
	   * Maybe we should expose these...
	   */

	  var Watcher = void 0;
	  function getWatcher(vm) {
	    if (!Watcher) {
	      var noop = function noop() {};
	      var unwatch = vm.$watch(noop, noop);
	      Watcher = vm._watchers[0].constructor;
	      unwatch();
	    }
	    return Watcher;
	  }

	  var Dep = void 0;
	  function getDep(vm) {
	    if (!Dep) {
	      Dep = vm._data.__ob__.dep.constructor;
	    }
	    return Dep;
	  }

	  var hook = typeof window !== 'undefined' && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

	  function devtoolPlugin(store) {
	    if (!hook) return;

	    hook.emit('vuex:init', store);

	    hook.on('vuex:travel-to-state', function (targetState) {
	      store.replaceState(targetState);
	    });

	    store.subscribe(function (mutation, state) {
	      hook.emit('vuex:mutation', mutation, state);
	    });
	  }

	  function override (Vue) {
	    var version = Number(Vue.version.split('.')[0]);

	    if (version >= 2) {
	      var usesInit = Vue.config._lifecycleHooks.indexOf('init') > -1;
	      Vue.mixin(usesInit ? { init: vuexInit } : { beforeCreate: vuexInit });
	    } else {
	      (function () {
	        // override init and inject vuex init procedure
	        // for 1.x backwards compatibility.
	        var _init = Vue.prototype._init;
	        Vue.prototype._init = function () {
	          var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	          options.init = options.init ? [vuexInit].concat(options.init) : vuexInit;
	          _init.call(this, options);
	        };
	      })();
	    }

	    /**
	     * Vuex init hook, injected into each instances init hooks list.
	     */

	    function vuexInit() {
	      var options = this.$options;
	      var store = options.store;
	      var vuex = options.vuex;
	      // store injection

	      if (store) {
	        this.$store = store;
	      } else if (options.parent && options.parent.$store) {
	        this.$store = options.parent.$store;
	      }
	      // vuex option handling
	      if (vuex) {
	        if (!this.$store) {
	          console.warn('[vuex] store not injected. make sure to ' + 'provide the store option in your root component.');
	        }
	        var state = vuex.state;
	        var actions = vuex.actions;
	        var getters = vuex.getters;
	        // handle deprecated state option

	        if (state && !getters) {
	          console.warn('[vuex] vuex.state option will been deprecated in 1.0. ' + 'Use vuex.getters instead.');
	          getters = state;
	        }
	        // getters
	        if (getters) {
	          options.computed = options.computed || {};
	          for (var key in getters) {
	            defineVuexGetter(this, key, getters[key]);
	          }
	        }
	        // actions
	        if (actions) {
	          options.methods = options.methods || {};
	          for (var _key in actions) {
	            options.methods[_key] = makeBoundAction(this.$store, actions[_key], _key);
	          }
	        }
	      }
	    }

	    /**
	     * Setter for all getter properties.
	     */

	    function setter() {
	      throw new Error('vuex getter properties are read-only.');
	    }

	    /**
	     * Define a Vuex getter on an instance.
	     *
	     * @param {Vue} vm
	     * @param {String} key
	     * @param {Function} getter
	     */

	    function defineVuexGetter(vm, key, getter) {
	      if (typeof getter !== 'function') {
	        console.warn('[vuex] Getter bound to key \'vuex.getters.' + key + '\' is not a function.');
	      } else {
	        Object.defineProperty(vm, key, {
	          enumerable: true,
	          configurable: true,
	          get: makeComputedGetter(vm.$store, getter),
	          set: setter
	        });
	      }
	    }

	    /**
	     * Make a computed getter, using the same caching mechanism of computed
	     * properties. In addition, it is cached on the raw getter function using
	     * the store's unique cache id. This makes the same getter shared
	     * across all components use the same underlying watcher, and makes
	     * the getter evaluated only once during every flush.
	     *
	     * @param {Store} store
	     * @param {Function} getter
	     */

	    function makeComputedGetter(store, getter) {
	      var id = store._getterCacheId;

	      // cached
	      if (getter[id]) {
	        return getter[id];
	      }
	      var vm = store._vm;
	      var Watcher = getWatcher(vm);
	      var Dep = getDep(vm);
	      var watcher = new Watcher(vm, function (vm) {
	        return getter(vm.state);
	      }, null, { lazy: true });
	      var computedGetter = function computedGetter() {
	        if (watcher.dirty) {
	          watcher.evaluate();
	        }
	        if (Dep.target) {
	          watcher.depend();
	        }
	        return watcher.value;
	      };
	      getter[id] = computedGetter;
	      return computedGetter;
	    }

	    /**
	     * Make a bound-to-store version of a raw action function.
	     *
	     * @param {Store} store
	     * @param {Function} action
	     * @param {String} key
	     */

	    function makeBoundAction(store, action, key) {
	      if (typeof action !== 'function') {
	        console.warn('[vuex] Action bound to key \'vuex.actions.' + key + '\' is not a function.');
	      }
	      return function vuexBoundAction() {
	        for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
	          args[_key2] = arguments[_key2];
	        }

	        return action.call.apply(action, [this, store].concat(args));
	      };
	    }

	    // option merging
	    var merge = Vue.config.optionMergeStrategies.computed;
	    Vue.config.optionMergeStrategies.vuex = function (toVal, fromVal) {
	      if (!toVal) return fromVal;
	      if (!fromVal) return toVal;
	      return {
	        getters: merge(toVal.getters, fromVal.getters),
	        state: merge(toVal.state, fromVal.state),
	        actions: merge(toVal.actions, fromVal.actions)
	      };
	    };
	  }

	  var Vue = void 0;
	  var uid = 0;

	  var Store = function () {

	    /**
	     * @param {Object} options
	     *        - {Object} state
	     *        - {Object} actions
	     *        - {Object} mutations
	     *        - {Array} plugins
	     *        - {Boolean} strict
	     */

	    function Store() {
	      var _this = this;

	      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	      var _ref$state = _ref.state;
	      var state = _ref$state === undefined ? {} : _ref$state;
	      var _ref$mutations = _ref.mutations;
	      var mutations = _ref$mutations === undefined ? {} : _ref$mutations;
	      var _ref$modules = _ref.modules;
	      var modules = _ref$modules === undefined ? {} : _ref$modules;
	      var _ref$plugins = _ref.plugins;
	      var plugins = _ref$plugins === undefined ? [] : _ref$plugins;
	      var _ref$strict = _ref.strict;
	      var strict = _ref$strict === undefined ? false : _ref$strict;
	      classCallCheck(this, Store);

	      this._getterCacheId = 'vuex_store_' + uid++;
	      this._dispatching = false;
	      this._rootMutations = this._mutations = mutations;
	      this._modules = modules;
	      this._subscribers = [];
	      // bind dispatch to self
	      var dispatch = this.dispatch;
	      this.dispatch = function () {
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }

	        dispatch.apply(_this, args);
	      };
	      // use a Vue instance to store the state tree
	      // suppress warnings just in case the user has added
	      // some funky global mixins
	      if (!Vue) {
	        throw new Error('[vuex] must call Vue.use(Vuex) before creating a store instance.');
	      }
	      var silent = Vue.config.silent;
	      Vue.config.silent = true;
	      this._vm = new Vue({
	        data: {
	          state: state
	        }
	      });
	      Vue.config.silent = silent;
	      this._setupModuleState(state, modules);
	      this._setupModuleMutations(modules);
	      // add extra warnings in strict mode
	      if (strict) {
	        this._setupMutationCheck();
	      }
	      // apply plugins
	      devtoolPlugin(this);
	      plugins.forEach(function (plugin) {
	        return plugin(_this);
	      });
	    }

	    /**
	     * Getter for the entire state tree.
	     * Read only.
	     *
	     * @return {Object}
	     */

	    createClass(Store, [{
	      key: 'replaceState',


	      /**
	       * Replace root state.
	       *
	       * @param {Object} state
	       */

	      value: function replaceState(state) {
	        this._dispatching = true;
	        this._vm.state = state;
	        this._dispatching = false;
	      }

	      /**
	       * Dispatch an action.
	       *
	       * @param {String} type
	       */

	    }, {
	      key: 'dispatch',
	      value: function dispatch(type) {
	        var _this2 = this;

	        for (var _len2 = arguments.length, payload = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	          payload[_key2 - 1] = arguments[_key2];
	        }

	        var silent = false;
	        var isObjectStyleDispatch = false;
	        // compatibility for object actions, e.g. FSA
	        if ((typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object' && type.type && arguments.length === 1) {
	          isObjectStyleDispatch = true;
	          payload = type;
	          if (type.silent) silent = true;
	          type = type.type;
	        }
	        var handler = this._mutations[type];
	        var state = this.state;
	        if (handler) {
	          this._dispatching = true;
	          // apply the mutation
	          if (Array.isArray(handler)) {
	            handler.forEach(function (h) {
	              isObjectStyleDispatch ? h(state, payload) : h.apply(undefined, [state].concat(toConsumableArray(payload)));
	            });
	          } else {
	            isObjectStyleDispatch ? handler(state, payload) : handler.apply(undefined, [state].concat(toConsumableArray(payload)));
	          }
	          this._dispatching = false;
	          if (!silent) {
	            (function () {
	              var mutation = isObjectStyleDispatch ? payload : { type: type, payload: payload };
	              _this2._subscribers.forEach(function (sub) {
	                return sub(mutation, state);
	              });
	            })();
	          }
	        } else {
	          console.warn('[vuex] Unknown mutation: ' + type);
	        }
	      }

	      /**
	       * Watch state changes on the store.
	       * Same API as Vue's $watch, except when watching a function,
	       * the function gets the state as the first argument.
	       *
	       * @param {Function} fn
	       * @param {Function} cb
	       * @param {Object} [options]
	       */

	    }, {
	      key: 'watch',
	      value: function watch(fn, cb, options) {
	        var _this3 = this;

	        if (typeof fn !== 'function') {
	          console.error('Vuex store.watch only accepts function.');
	          return;
	        }
	        return this._vm.$watch(function () {
	          return fn(_this3.state);
	        }, cb, options);
	      }

	      /**
	       * Subscribe to state changes. Fires after every mutation.
	       */

	    }, {
	      key: 'subscribe',
	      value: function subscribe(fn) {
	        var subs = this._subscribers;
	        if (subs.indexOf(fn) < 0) {
	          subs.push(fn);
	        }
	        return function () {
	          var i = subs.indexOf(fn);
	          if (i > -1) {
	            subs.splice(i, 1);
	          }
	        };
	      }

	      /**
	       * Hot update mutations & modules.
	       *
	       * @param {Object} options
	       *        - {Object} [mutations]
	       *        - {Object} [modules]
	       */

	    }, {
	      key: 'hotUpdate',
	      value: function hotUpdate() {
	        var _ref2 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        var mutations = _ref2.mutations;
	        var modules = _ref2.modules;

	        this._rootMutations = this._mutations = mutations || this._rootMutations;
	        this._setupModuleMutations(modules || this._modules);
	      }

	      /**
	       * Attach sub state tree of each module to the root tree.
	       *
	       * @param {Object} state
	       * @param {Object} modules
	       */

	    }, {
	      key: '_setupModuleState',
	      value: function _setupModuleState(state, modules) {
	        var _this4 = this;

	        if (!isObject(modules)) return;

	        Object.keys(modules).forEach(function (key) {
	          var module = modules[key];

	          // set this module's state
	          Vue.set(state, key, module.state || {});

	          // retrieve nested modules
	          _this4._setupModuleState(state[key], module.modules);
	        });
	      }

	      /**
	       * Bind mutations for each module to its sub tree and
	       * merge them all into one final mutations map.
	       *
	       * @param {Object} updatedModules
	       */

	    }, {
	      key: '_setupModuleMutations',
	      value: function _setupModuleMutations(updatedModules) {
	        var modules = this._modules;
	        Object.keys(updatedModules).forEach(function (key) {
	          modules[key] = updatedModules[key];
	        });
	        var updatedMutations = this._createModuleMutations(modules, []);
	        this._mutations = mergeObjects([this._rootMutations].concat(toConsumableArray(updatedMutations)));
	      }

	      /**
	       * Helper method for _setupModuleMutations.
	       * The method retrieve nested sub modules and
	       * bind each mutations to its sub tree recursively.
	       *
	       * @param {Object} modules
	       * @param {Array<String>} nestedKeys
	       * @return {Array<Object>}
	       */

	    }, {
	      key: '_createModuleMutations',
	      value: function _createModuleMutations(modules, nestedKeys) {
	        var _this5 = this;

	        if (!isObject(modules)) return [];

	        return Object.keys(modules).map(function (key) {
	          var module = modules[key];
	          var newNestedKeys = nestedKeys.concat(key);

	          // retrieve nested modules
	          var nestedMutations = _this5._createModuleMutations(module.modules, newNestedKeys);

	          if (!module || !module.mutations) {
	            return mergeObjects(nestedMutations);
	          }

	          // bind mutations to sub state tree
	          var mutations = {};
	          Object.keys(module.mutations).forEach(function (name) {
	            var original = module.mutations[name];
	            mutations[name] = function (state) {
	              for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
	                args[_key3 - 1] = arguments[_key3];
	              }

	              original.apply(undefined, [getNestedState(state, newNestedKeys)].concat(args));
	            };
	          });

	          // merge mutations of this module and nested modules
	          return mergeObjects([mutations].concat(toConsumableArray(nestedMutations)));
	        });
	      }

	      /**
	       * Setup mutation check: if the vuex instance's state is mutated
	       * outside of a mutation handler, we throw en error. This effectively
	       * enforces all mutations to the state to be trackable and hot-reloadble.
	       * However, this comes at a run time cost since we are doing a deep
	       * watch on the entire state tree, so it is only enalbed with the
	       * strict option is set to true.
	       */

	    }, {
	      key: '_setupMutationCheck',
	      value: function _setupMutationCheck() {
	        var _this6 = this;

	        var Watcher = getWatcher(this._vm);
	        /* eslint-disable no-new */
	        new Watcher(this._vm, 'state', function () {
	          if (!_this6._dispatching) {
	            throw new Error('[vuex] Do not mutate vuex store state outside mutation handlers.');
	          }
	        }, { deep: true, sync: true });
	        /* eslint-enable no-new */
	      }
	    }, {
	      key: 'state',
	      get: function get() {
	        return this._vm.state;
	      },
	      set: function set(v) {
	        throw new Error('[vuex] Use store.replaceState() to explicit replace store state.');
	      }
	    }]);
	    return Store;
	  }();

	  function install(_Vue) {
	    if (Vue) {
	      console.warn('[vuex] already installed. Vue.use(Vuex) should be called only once.');
	      return;
	    }
	    Vue = _Vue;
	    override(Vue);
	  }

	  // auto install in dist mode
	  if (typeof window !== 'undefined' && window.Vue) {
	    install(window.Vue);
	  }

	  var index = {
	    Store: Store,
	    install: install
	  };

	  return index;

	}));

/***/ },
/* 396 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"aside\">\n    <!-- 使用指令 v-link 进行导航。 -->\n    <d-nav-menu>\n        <d-nav-menu-item v-for=\"menu in menus\" :text=\"menu.text\" :path=\"menu.path\" :expanded=\"$index === 0\">\n        </d-nav-menu-item>\n    </d-nav-menu>\n</div>\n<!-- 路由外链 -->\n<div class=\"main\">\n    <router-view ></router-view>\n</div>\n";

/***/ },
/* 397 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(398)
	__vue_script__ = __webpack_require__(400)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\MOBILEbizhi\\MOBILEbizhi.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(401)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./MOBILEbizhi.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 398 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 399 */,
/* 400 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _store = __webpack_require__(394);

	var _store2 = _interopRequireDefault(_store);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    data: function data() {
	        return {
	            menus: [{
	                text: '手机壁纸管理',
	                path: '/MOBILEbizhi/ZHUANJI'
	            }]
	        };
	    },

	    store: _store2.default
	};
	// </script>
	// <template>
	//     <div class="aside">
	//         <!-- 使用指令 v-link 进行导航。 -->
	//         <d-nav-menu>
	//             <d-nav-menu-item v-for="menu in menus" :text="menu.text" :path="menu.path" :expanded="$index === 0">
	//             </d-nav-menu-item>
	//         </d-nav-menu>
	//     </div>
	//     <!-- 路由外链 -->
	//     <div class="main">
	//         <router-view ></router-view>
	//     </div>
	// </template>
	// <style>
	//     .main {
	//         position: relative;
	//         margin-left: 150px;
	//         padding-top: 20px;
	//         height: 1000px;
	//         box-sizing: border-box;
	//         overflow: auto;
	//     }
	//
	//     .aside {
	//         position: absolute;
	//         padding-top: 20px;
	//         width: 150px;
	//         z-index: 1;
	//     }
	//
	//     .aside ul {
	//         margin: 0;
	//         padding: 0;
	//         width: 100%;
	//         list-style: none;
	//         background-color: transparent;
	//         font-size: 12px;
	//     }
	//
	//     .aside ul li {
	//         display: block;
	//         height: 50px;
	//         background-color: #FFF;
	//         text-align: center;
	//         line-height: 50px;
	//     }
	//
	//     .aside ul li a {
	//         text-decoration: none;
	//         color: #000;
	//     }
	// </style>
	//
	// <script>

/***/ },
/* 401 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"aside\">\n    <!-- 使用指令 v-link 进行导航。 -->\n    <d-nav-menu>\n        <d-nav-menu-item v-for=\"menu in menus\" :text=\"menu.text\" :path=\"menu.path\" :expanded=\"$index === 0\">\n        </d-nav-menu-item>\n    </d-nav-menu>\n</div>\n<!-- 路由外链 -->\n<div class=\"main\">\n    <router-view ></router-view>\n</div>\n";

/***/ },
/* 402 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(403)
	__vue_script__ = __webpack_require__(405)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\CommonSetting\\CommonSetting.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(406)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./CommonSetting.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 403 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 404 */,
/* 405 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _store = __webpack_require__(394);

	var _store2 = _interopRequireDefault(_store);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    data: function data() {
	        return {
	            menus: [{
	                text: '壁纸分类',
	                path: '/CommonSetting/bizhiFenlei'
	            }, {
	                text: '壁纸分辨率',
	                path: '/CommonSetting/bizhiFenbianlv'
	            }, {
	                text: '壁纸色系',
	                path: '/CommonSetting/bizhiSex'
	            }, {
	                text: '幻灯片管理',
	                path: '/CommonSetting/PPTguanli'
	            }]
	        };
	    },

	    store: _store2.default
	};
	// </script>
	// <template>
	//     <div class="aside">
	//         <!-- 使用指令 v-link 进行导航。 -->
	//         <d-nav-menu>
	//             <d-nav-menu-item v-for="menu in menus" :text="menu.text" :path="menu.path" :expanded="$index === 0">
	//             </d-nav-menu-item>
	//         </d-nav-menu>
	//     </div>
	//     <!-- 路由外链 -->
	//     <div class="main">
	//         <router-view ></router-view>
	//     </div>
	// </template>
	// <style>
	//     .main {
	//         position: relative;
	//         margin-left: 150px;
	//         padding-top: 20px;
	//         height: 1000px;
	//         box-sizing: border-box;
	//         overflow: auto;
	//     }
	//
	//     .aside {
	//         position: absolute;
	//         padding-top: 20px;
	//         width: 150px;
	//         z-index: 1;
	//     }
	//
	//     .aside ul {
	//         margin: 0;
	//         padding: 0;
	//         width: 100%;
	//         list-style: none;
	//         background-color: transparent;
	//         font-size: 12px;
	//     }
	//
	//     .aside ul li {
	//         display: block;
	//         height: 50px;
	//         background-color: #FFF;
	//         text-align: center;
	//         line-height: 50px;
	//     }
	//
	//     .aside ul li a {
	//         text-decoration: none;
	//         color: #000;
	//     }
	// </style>
	//
	// <script>

/***/ },
/* 406 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"aside\">\n    <!-- 使用指令 v-link 进行导航。 -->\n    <d-nav-menu>\n        <d-nav-menu-item v-for=\"menu in menus\" :text=\"menu.text\" :path=\"menu.path\" :expanded=\"$index === 0\">\n        </d-nav-menu-item>\n    </d-nav-menu>\n</div>\n<!-- 路由外链 -->\n<div class=\"main\">\n    <router-view ></router-view>\n</div>\n";

/***/ }
/******/ ]);