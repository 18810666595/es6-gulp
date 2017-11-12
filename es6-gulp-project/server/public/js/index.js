/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

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


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	{
	  // Set 数据类型
	  var list = new Set();
	  list.add(5);
	  list.add(7);
	  //size方法获取 list 的元素个数, 类似数组的length
	  console.log('size', list.size); // 2
	}

	{
	  var _arr = [1, 2, 3, 4, 5];
	  var _list = new Set(_arr);
	  console.log('size', _list.size); // 5
	}

	{
	  // Set 数据是独一无二的，意味不重复
	  var _list2 = new Set();
	  _list2.add(1);
	  _list2.add(2);
	  _list2.add(1);
	  console.log('list', _list2);

	  // Set 可以用来做数组去重
	  var _arr2 = [1, 2, 3, 1, 2];
	  var list2 = new Set(_arr2);
	  console.log('unique', list2); // {1, 2, 3}
	}

	{
	  // Set 的API，has,delete
	  var _arr3 = ['add', 'delete', 'clear', 'has'];
	  var _list3 = new Set(_arr3);

	  console.log('has', _list3.has('add')); //true,    list里面有'add'元素
	  console.log('delete', _list3.delete('add'), _list3);
	  //true, ["delete", "clear", "has"],    delete成功返回true,
	}

	{
	  // Set遍历元素
	  var _arr4 = ['add', 'delete', 'clear', 'has'];
	  var _list4 = new Set(_arr4);
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;

	  try {
	    for (var _iterator = _list4.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var key = _step.value;

	      console.log('keys', key);
	    } //'add', 'delete', 'clear', 'has'
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }

	  var _iteratorNormalCompletion2 = true;
	  var _didIteratorError2 = false;
	  var _iteratorError2 = undefined;

	  try {
	    for (var _iterator2 = _list4.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	      var value = _step2.value;

	      console.log('values', value);
	    } //'add', 'delete', 'clear', 'has'
	  } catch (err) {
	    _didIteratorError2 = true;
	    _iteratorError2 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion2 && _iterator2.return) {
	        _iterator2.return();
	      }
	    } finally {
	      if (_didIteratorError2) {
	        throw _iteratorError2;
	      }
	    }
	  }

	  var _iteratorNormalCompletion3 = true;
	  var _didIteratorError3 = false;
	  var _iteratorError3 = undefined;

	  try {
	    for (var _iterator3 = _list4[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	      var _value = _step3.value;
	      //默认返回的是value
	      console.log('values', _value);
	    } //'add', 'delete', 'clear', 'has'
	  } catch (err) {
	    _didIteratorError3 = true;
	    _iteratorError3 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion3 && _iterator3.return) {
	        _iterator3.return();
	      }
	    } finally {
	      if (_didIteratorError3) {
	        throw _iteratorError3;
	      }
	    }
	  }

	  var _iteratorNormalCompletion4 = true;
	  var _didIteratorError4 = false;
	  var _iteratorError4 = undefined;

	  try {
	    for (var _iterator4 = _list4.entries()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	      var _step4$value = _slicedToArray(_step4.value, 2),
	          _key = _step4$value[0],
	          _value2 = _step4$value[1];

	      console.log('entries', { key: _key, value: _value2 });
	    }
	    // {key: "add", value: "add"}
	    // {key: "add", value: "add"}
	    // {key: "clear", value: "clear"}
	    // {key: "has", value: "has"}
	  } catch (err) {
	    _didIteratorError4 = true;
	    _iteratorError4 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion4 && _iterator4.return) {
	        _iterator4.return();
	      }
	    } finally {
	      if (_didIteratorError4) {
	        throw _iteratorError4;
	      }
	    }
	  }

	  _list4.forEach(function (item) {
	    return console.log(item);
	  });
	  // 'add', 'delete', 'clear', 'has'
	}

	{
	  // 使用set 做数组去重
	  var arr = [1, 2, 5, 3, 3, 3, 1, 10, 10];
	  var arrSet = new Set(arr);
	  console.log(new (Function.prototype.bind.apply(Array, [null].concat(_toConsumableArray(arrSet))))()); // [1, 2, 5, 3, 10]
	  console.log([].concat(_toConsumableArray(arrSet))); // [1, 2, 5, 3, 10]
	  console.log(Array.from(arrSet)); // [1, 2, 5, 3, 10]
	  console.log([].concat(_toConsumableArray(new Set(arr)))); // [1, 2, 5, 3, 10]
	}

	{
	  // WeakSet 数据类型
	  /**
	   * WeakSet 和 Set 的区别：
	   * 1.支持的元素类型不一样：weakSet 的元素只能是引用类型
	   * 2.weakSet 中的对象是弱引用，存的是地址，不会检测改地址的内容是否被垃圾回收掉了
	   * 3.weakSet 没有 clear,size,不能遍历
	   */
	  var weakList = new WeakSet();
	  var arg = {};
	  weakList.add(arg); //weakSet中的元素只能是引用类型
	  weakList.add(function () {});
	  weakList.add([]);
	  console.log(weakList); // [Object, function, Array]
	}

	{
	  // Map 数据类型, key 可以是任何数据类型
	  // Map 的第一种定义方式
	  var map = new Map();
	  var _arr5 = [1, 2, 3];
	  map.set(_arr5, 456);
	  console.log('map', map); // key 为 [1,2,3], value 为 456
	  console.log('map.get', map.get(_arr5)); //456
	}

	{
	  // Map 的第二种定义方式
	  // Map 的 api 有['set', 'size', 'delete', 'clear', 'has']
	  var _map = new Map([['a', 123], ['b', 456]]);
	  console.log('map args', _map); //{"a" => 123, "b" => 456}
	  console.log('size', _map.size); // 2
	  console.log('delete', _map.delete('a'), _map);
	  // true ,delete成功返回true，  {"b" => 456}
	  console.log('has', _map.has('b')); // true
	  console.log('clear', _map.clear(), _map);
	  // undefined, clear成功返回undefined, {}
	}

	{
	  // WeakMap 数据类型
	  /**
	   * WeakMap 和 Map 的区别：
	   * 1.支持的元素类型不一样: WeakMap 中的key只能是引用类型
	   * 2.weakSet 中的key是弱引用，存的是地址，不会检测改地址的内容是否被垃圾回收掉了
	   * 3.weakSet 没有 clear,size,不能遍历
	   */
	  var weakMap = new WeakMap();
	  var obj = {};
	  weakMap.set(obj, 123);
	  console.log('WeakMap.get', weakMap.get(obj)); // 123
	}

/***/ })
/******/ ]);