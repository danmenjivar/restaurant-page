/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_restaurant_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/restaurant.jpg */ "./src/images/restaurant.jpg");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto&family=Sonsie+One&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_restaurant_jpg__WEBPACK_IMPORTED_MODULE_3__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  /* colors */\n  --primary-blue-light: #497dde;\n  --primary-blue-dark: #214991;\n  --complimentary-red: #de725f;\n  --complimentary-green-light: #aade33;\n  --complimentary-green-dark: #729129;\n}\n\n.navbar {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 10vh;\n  width: 100%;\n  background-color: var(--primary-blue-light);\n  z-index: 1;\n}\n\n.left {\n  padding-left: 2rem;\n  margin-right: auto;\n}\n\n.logo {\n  font-size: 3rem;\n  font-family: \"Sonsie One\", cursive;\n  color: white;\n  user-select: none;\n}\n\n.nav-list {\n  justify-content: space-between;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\n.nav-elem {\n  font-size: 1.25rem;\n  padding: 0px 1rem;\n  font-family: \"Roboto\", sans-serif;\n  color: white;\n  text-transform: capitalize;\n}\n\n.nav-elem:hover {\n  cursor: pointer;\n  color: var(--primary-blue-dark);\n}\n\n.home-img {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 90vh;\n  width: 100%;\n  position: absolute;\n  left: 0;\n  top: 10vh;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center center fixed\n    rgba(26, 24, 24, 0.3);\n  background-blend-mode: multiply;\n  background-size: cover;\n}\n\n.home-headline {\n  font-size: 6rem;\n  color: white;\n}\n\n.home-text {\n  color: white;\n}\n\n.background-color {\n  position: absolute;\n  left: 0;\n  width: 100vw;\n  height: 100%;\n  margin: 0px;\n  background-color: white;\n}\n\n.foreground-menu {\n  font-family: \"Roboto\", sans-serif;\n  color: white;\n  font-size: 1rem;\n  border-radius: 2em;\n  margin: 25% auto;\n  padding: 10px;\n  padding: 5px 5%;\n  width: 70%;\n  text-align: center;\n  background-color: var(--primary-blue-light);\n}\n\n.menu-item {\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  grid-template-rows: repeat(2, 1fr);\n}\n\n.menu-name {\n  grid-row-start: 1;\n  grid-column: 2 / span 1;\n}\n\n.menu-price {\n  grid-row-start: 1;\n  grid-column: 3 / span 1;\n}\n\n.menu-pic {\n  align-self: center;\n  width: 100px;\n  grid-column: 1 / 2;\n  grid-row: 1 / 3;\n}\n\n.menu-blurb {\n  margin-left: 2rem;\n  text-align: justify;\n  grid-row-start: 2;\n  grid-column: 2 / span 2;\n}\n\n.foreground-contact {\n  font-family: \"Roboto\", sans-serif;\n  color: white;\n  font-size: 1rem;\n  border-radius: 2em;\n  margin: 25% auto;\n  padding: 10px;\n  padding: 5px 5%;\n  width: 70%;\n  text-align: center;\n  background-color: var(--primary-blue-light);\n}\n\n.contact-info {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-content: center;\n}\n\n.contact-container {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.map {\n  flex-shrink: 5;\n  width: 50%;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,WAAW;EACX,6BAA6B;EAC7B,4BAA4B;EAC5B,4BAA4B;EAC5B,oCAAoC;EACpC,mCAAmC;AACrC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,yBAAyB;EACzB,eAAe;EACf,MAAM;EACN,OAAO;EACP,YAAY;EACZ,WAAW;EACX,2CAA2C;EAC3C,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,kCAAkC;EAClC,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,8BAA8B;EAC9B,qBAAqB;EACrB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,iCAAiC;EACjC,YAAY;EACZ,0BAA0B;AAC5B;;AAEA;EACE,eAAe;EACf,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,OAAO;EACP,SAAS;EACT;yBACuB;EACvB,+BAA+B;EAC/B,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,OAAO;EACP,YAAY;EACZ,YAAY;EACZ,WAAW;EACX,uBAAuB;AACzB;;AAEA;EACE,iCAAiC;EACjC,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,gBAAgB;EAChB,aAAa;EACb,eAAe;EACf,UAAU;EACV,kBAAkB;EAClB,2CAA2C;AAC7C;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,kCAAkC;AACpC;;AAEA;EACE,iBAAiB;EACjB,uBAAuB;AACzB;;AAEA;EACE,iBAAiB;EACjB,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,iBAAiB;EACjB,uBAAuB;AACzB;;AAEA;EACE,iCAAiC;EACjC,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,gBAAgB;EAChB,aAAa;EACb,eAAe;EACf,UAAU;EACV,kBAAkB;EAClB,2CAA2C;AAC7C;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,UAAU;AACZ","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto&family=Sonsie+One&display=swap\");\n\n:root {\n  /* colors */\n  --primary-blue-light: #497dde;\n  --primary-blue-dark: #214991;\n  --complimentary-red: #de725f;\n  --complimentary-green-light: #aade33;\n  --complimentary-green-dark: #729129;\n}\n\n.navbar {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 10vh;\n  width: 100%;\n  background-color: var(--primary-blue-light);\n  z-index: 1;\n}\n\n.left {\n  padding-left: 2rem;\n  margin-right: auto;\n}\n\n.logo {\n  font-size: 3rem;\n  font-family: \"Sonsie One\", cursive;\n  color: white;\n  user-select: none;\n}\n\n.nav-list {\n  justify-content: space-between;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\n.nav-elem {\n  font-size: 1.25rem;\n  padding: 0px 1rem;\n  font-family: \"Roboto\", sans-serif;\n  color: white;\n  text-transform: capitalize;\n}\n\n.nav-elem:hover {\n  cursor: pointer;\n  color: var(--primary-blue-dark);\n}\n\n.home-img {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 90vh;\n  width: 100%;\n  position: absolute;\n  left: 0;\n  top: 10vh;\n  background: url(\"./images/restaurant.jpg\") no-repeat center center fixed\n    rgba(26, 24, 24, 0.3);\n  background-blend-mode: multiply;\n  background-size: cover;\n}\n\n.home-headline {\n  font-size: 6rem;\n  color: white;\n}\n\n.home-text {\n  color: white;\n}\n\n.background-color {\n  position: absolute;\n  left: 0;\n  width: 100vw;\n  height: 100%;\n  margin: 0px;\n  background-color: white;\n}\n\n.foreground-menu {\n  font-family: \"Roboto\", sans-serif;\n  color: white;\n  font-size: 1rem;\n  border-radius: 2em;\n  margin: 25% auto;\n  padding: 10px;\n  padding: 5px 5%;\n  width: 70%;\n  text-align: center;\n  background-color: var(--primary-blue-light);\n}\n\n.menu-item {\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  grid-template-rows: repeat(2, 1fr);\n}\n\n.menu-name {\n  grid-row-start: 1;\n  grid-column: 2 / span 1;\n}\n\n.menu-price {\n  grid-row-start: 1;\n  grid-column: 3 / span 1;\n}\n\n.menu-pic {\n  align-self: center;\n  width: 100px;\n  grid-column: 1 / 2;\n  grid-row: 1 / 3;\n}\n\n.menu-blurb {\n  margin-left: 2rem;\n  text-align: justify;\n  grid-row-start: 2;\n  grid-column: 2 / span 2;\n}\n\n.foreground-contact {\n  font-family: \"Roboto\", sans-serif;\n  color: white;\n  font-size: 1rem;\n  border-radius: 2em;\n  margin: 25% auto;\n  padding: 10px;\n  padding: 5px 5%;\n  width: 70%;\n  text-align: center;\n  background-color: var(--primary-blue-light);\n}\n\n.contact-info {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-content: center;\n}\n\n.contact-container {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.map {\n  flex-shrink: 5;\n  width: 50%;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadContact)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const updateContactInfo = (parentDiv) => {
  const address = "1631 E Capitol Expy, San Jose, CA 95121";
  const mThHours = [8, 8];
  const fSunHours = [8, 11];
  const phone = "(222)-888-5555";

  const addressDiv = document.createElement("div");
  addressDiv.innerHTML = `<span class="material-icons">place
  </span>${address}`;
  parentDiv.appendChild(addressDiv);

  const hoursDiv = document.createElement("div");
  hoursDiv.innerHTML = `<span class="material-icons">schedule
  </span>Mon-Thurs: ${mThHours[0]}am-${mThHours[1]}pm, Fri-Sun: ${fSunHours[0]}am-${fSunHours[1]}pm`;
  parentDiv.appendChild(hoursDiv);

  const phoneDiv = document.createElement("div");
  phoneDiv.innerHTML = `<span class="material-icons">phone</span>${phone}`;
  parentDiv.appendChild(phoneDiv);

  const map = document.createElement("div");
  map.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d85375.93354761209!2d-121.9360996977834!3d37.3235148590912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x72ad1dd786b14f33!2sThe%20Boiling%20Crab!5e0!3m2!1sen!2sus!4v1623951880304!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
  parentDiv.appendChild(map);
};

/**
 * contact module exports loadContact() function
 * which creates a div element adds appropriate
 * content and styles to that element and then appends it to the DOM
 */
function loadContact() {
  const parentContainer = document.querySelector("#content");
  const contactContainer = document.createElement("div");
  contactContainer.classList.add("background-color");

  const contactSubContainer = document.createElement("div");
  contactSubContainer.classList.add("foreground-contact");

  const contactTitle = document.createElement("h2");
  contactTitle.innerText = "Contact Us";
  contactTitle.classList.add("logo");
  contactSubContainer.appendChild(contactTitle);

  const contactInfoContainer = document.createElement("div");
  updateContactInfo(contactInfoContainer);

  contactInfoContainer.classList.add("contact-info");
  contactSubContainer.appendChild(contactInfoContainer);

  contactContainer.appendChild(contactSubContainer);
  parentContainer.appendChild(contactContainer);
}


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHome)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _images_restaurant_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/restaurant.jpg */ "./src/images/restaurant.jpg");



/**
 * home module exports loadHome() function
 * which creates a div element adds appropriate
 * content and styles to that element and then appends it to the DOM
 */
function loadHome() {
  const parentContainer = document.querySelector("#content");
  const homeContainer = document.createElement("div");
  homeContainer.classList.add("home-img");

  const headline = document.createElement("h2");
  headline.textContent = "Family Owned";
  headline.classList.add("home-headline");
  homeContainer.appendChild(headline);

  const copy = document.createElement("h3");
  copy.textContent = "Est. 1998";
  copy.classList.add("home-text");
  homeContainer.appendChild(copy);

  parentContainer.appendChild(homeContainer);
}

function addStylings(elemID, className) {
  const elem = document.querySelector(elemID);
  elem.classList.add(className);
}


/***/ }),

/***/ "./src/images/fish-and-chips.jpg":
/*!***************************************!*\
  !*** ./src/images/fish-and-chips.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "40d8589b1f9a1b143d85.jpg";

/***/ }),

/***/ "./src/images/grilled-salmon.jpg":
/*!***************************************!*\
  !*** ./src/images/grilled-salmon.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "302eb585a74e69e3d099.jpg";

/***/ }),

/***/ "./src/images/mussels.jpg":
/*!********************************!*\
  !*** ./src/images/mussels.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f262deef0cfc19886503.jpg";

/***/ }),

/***/ "./src/images/octopus.jpg":
/*!********************************!*\
  !*** ./src/images/octopus.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "42fb2cf3a86937e31c59.jpg";

/***/ }),

/***/ "./src/images/restaurant.jpg":
/*!***********************************!*\
  !*** ./src/images/restaurant.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "06625bde454ae510047b.jpg";

/***/ }),

/***/ "./src/images/shrimp.png":
/*!*******************************!*\
  !*** ./src/images/shrimp.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "736140d53132dcd87d13.png";

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMenu)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _images_fish_and_chips_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/fish-and-chips.jpg */ "./src/images/fish-and-chips.jpg");
/* harmony import */ var _images_grilled_salmon_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/grilled-salmon.jpg */ "./src/images/grilled-salmon.jpg");
/* harmony import */ var _images_shrimp_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/shrimp.png */ "./src/images/shrimp.png");
/* harmony import */ var _images_octopus_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/octopus.jpg */ "./src/images/octopus.jpg");
/* harmony import */ var _images_mussels_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/mussels.jpg */ "./src/images/mussels.jpg");







/**
 * contact module exports loadMenu() function
 * which creates a div element adds appropriate
 * content and styles to that element and then appends it to the DOM
 */

let picCredits = [
  "<a href='https://www.freepik.com/photos/background'>Background photo created by dashu83 - www.freepik.com</a>",
  "",
];

let menu = [
  {
    item: "Fish & Chips",
    price: 4.99,
    pic: _images_fish_and_chips_jpg__WEBPACK_IMPORTED_MODULE_1__,
    blurb: "Made to order, freshly caught fish",
  },
  {
    item: "Grilled Salmon",
    price: 18.99,
    pic: _images_grilled_salmon_jpg__WEBPACK_IMPORTED_MODULE_2__,
    blurb: "The best in class, served from farm to table.",
  },
  {
    item: "Octopus",
    price: 16.99,
    pic: _images_octopus_jpg__WEBPACK_IMPORTED_MODULE_4__,
    blurb: "Available only in season.",
  },
  {
    item: "Shrimp Platter",
    price: 9.99,
    pic: _images_shrimp_png__WEBPACK_IMPORTED_MODULE_3__,
    blurb: "Can't go wrong with Bubba Shrimp.",
  },
  {
    item: "Mussels",
    price: 11.99,
    pic: _images_mussels_jpg__WEBPACK_IMPORTED_MODULE_5__,
    blurb: "Freshly caught, only available in season.",
  },
];

function loadMenu() {
  const parentContainer = document.querySelector("#content");
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("background-color");

  const menuSubContainer = document.createElement("div");
  menuSubContainer.classList.add("foreground-menu");

  const h1 = document.createElement("h1");
  h1.textContent = "Menu";
  h1.classList.add("logo");
  menuSubContainer.appendChild(h1);

  menu.forEach((dish) => {
    const dishContainer = document.createElement("div");
    dishContainer.classList.add("menu-item");

    const dishName = document.createElement("h3");
    dishName.textContent = dish.item;
    dishName.classList.add("menu-name");

    const dishPrice = document.createElement("p");
    dishPrice.textContent = `$${dish.price}`;
    dishPrice.classList.add("menu-price");

    if (dish.pic !== "TODO") {
      const dishPic = new Image();
      dishPic.src = dish.pic;
      dishPic.classList.add("menu-pic");
      dishContainer.appendChild(dishPic);
    }
    const dishBlurb = document.createElement("p");
    dishBlurb.textContent = dish.blurb;
    dishBlurb.classList.add("menu-blurb");

    dishContainer.appendChild(dishName);
    dishContainer.appendChild(dishPrice);
    dishContainer.appendChild(dishBlurb);

    menuSubContainer.appendChild(dishContainer);
  });

  menuContainer.appendChild(menuSubContainer);

  parentContainer.appendChild(menuContainer);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");





function createNavElement(navBar, name) {
  const navElemLink = document.createElement("a");
  navElemLink.classList.add("nav-elem");
  navElemLink.dataset.nav = name;

  // Add event listeners for switching
  navElemLink.addEventListener("click", () => {
    unloadPage();
    switch (navElemLink.dataset.nav) {
      case "home":
        (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.default)();
        break;
      case "menu":
        (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.default)();
        break;
      case "contact":
        (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__.default)();
        break;
      default:
        console.error("ERROR: trying to load page that does not exist.");
        break;
    }
  });

  const navElemLinkText = document.createTextNode(name);
  navElemLink.appendChild(navElemLinkText);
  navBar.appendChild(navElemLink);
}

const navBar = () => {
  const mainContainer = document.querySelector("#content");
  const navBar = document.createElement("nav");

  const logo = document.createElement("div");
  logo.textContent = "Aviato";
  logo.classList.add("logo");
  logo.classList.add("left");
  navBar.append(logo);

  const navElems = ["home", "menu", "contact"];
  navElems.forEach((elem) => {
    createNavElement(navBar, elem);
  });

  navBar.classList.add("navbar");
  mainContainer.appendChild(navBar);
};

const unloadPage = () => {
  let page = document.querySelector("#content");
  page.removeChild(page.lastChild);
};

navBar();
(0,_home_js__WEBPACK_IMPORTED_MODULE_1__.default)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQzdCO0FBQ087QUFDNUI7QUFDcEUsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRixzSUFBc0k7QUFDdEkseUNBQXlDLHNGQUErQixDQUFDLG1EQUE2QjtBQUN0RztBQUNBLGlEQUFpRCxrREFBa0QsaUNBQWlDLGlDQUFpQyx5Q0FBeUMsd0NBQXdDLEdBQUcsYUFBYSxrQkFBa0Isd0JBQXdCLDhCQUE4QixvQkFBb0IsV0FBVyxZQUFZLGlCQUFpQixnQkFBZ0IsZ0RBQWdELGVBQWUsR0FBRyxXQUFXLHVCQUF1Qix1QkFBdUIsR0FBRyxXQUFXLG9CQUFvQix5Q0FBeUMsaUJBQWlCLHNCQUFzQixHQUFHLGVBQWUsbUNBQW1DLDBCQUEwQixjQUFjLGVBQWUsR0FBRyxlQUFlLHVCQUF1QixzQkFBc0Isd0NBQXdDLGlCQUFpQiwrQkFBK0IsR0FBRyxxQkFBcUIsb0JBQW9CLG9DQUFvQyxHQUFHLGVBQWUsa0JBQWtCLDJCQUEyQix3QkFBd0IsNEJBQTRCLGlCQUFpQixnQkFBZ0IsdUJBQXVCLFlBQVksY0FBYyx5SEFBeUgsb0NBQW9DLDJCQUEyQixHQUFHLG9CQUFvQixvQkFBb0IsaUJBQWlCLEdBQUcsZ0JBQWdCLGlCQUFpQixHQUFHLHVCQUF1Qix1QkFBdUIsWUFBWSxpQkFBaUIsaUJBQWlCLGdCQUFnQiw0QkFBNEIsR0FBRyxzQkFBc0Isd0NBQXdDLGlCQUFpQixvQkFBb0IsdUJBQXVCLHFCQUFxQixrQkFBa0Isb0JBQW9CLGVBQWUsdUJBQXVCLGdEQUFnRCxHQUFHLGdCQUFnQixrQkFBa0IsdUNBQXVDLHVDQUF1QyxH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QUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7Ozs7Ozs7VUNoR0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQzs7Ozs7Ozs7Ozs7Ozs7O0FDZnFCO0FBQ1k7QUFDQTtBQUNNOztBQUV2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpREFBUTtBQUNoQjtBQUNBO0FBQ0EsUUFBUSxpREFBUTtBQUNoQjtBQUNBO0FBQ0EsUUFBUSxvREFBVztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlEQUFRIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi9pbWFnZXMvcmVzdGF1cmFudC5qcGdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZmYW1pbHk9U29uc2llK09uZSZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLyogY29sb3JzICovXFxuICAtLXByaW1hcnktYmx1ZS1saWdodDogIzQ5N2RkZTtcXG4gIC0tcHJpbWFyeS1ibHVlLWRhcms6ICMyMTQ5OTE7XFxuICAtLWNvbXBsaW1lbnRhcnktcmVkOiAjZGU3MjVmO1xcbiAgLS1jb21wbGltZW50YXJ5LWdyZWVuLWxpZ2h0OiAjYWFkZTMzO1xcbiAgLS1jb21wbGltZW50YXJ5LWdyZWVuLWRhcms6ICM3MjkxMjk7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGhlaWdodDogMTB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1ibHVlLWxpZ2h0KTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5sZWZ0IHtcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLmxvZ28ge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTb25zaWUgT25lXFxcIiwgY3Vyc2l2ZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ubmF2LWxpc3Qge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLm5hdi1lbGVtIHtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIHBhZGRpbmc6IDBweCAxcmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcblxcbi5uYXYtZWxlbTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1ibHVlLWRhcmspO1xcbn1cXG5cXG4uaG9tZS1pbWcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDkwdmg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDEwdmg7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkXFxuICAgIHJnYmEoMjYsIDI0LCAyNCwgMC4zKTtcXG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogbXVsdGlwbHk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4uaG9tZS1oZWFkbGluZSB7XFxuICBmb250LXNpemU6IDZyZW07XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5ob21lLXRleHQge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYmFja2dyb3VuZC1jb2xvciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmZvcmVncm91bmQtbWVudSB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAyZW07XFxuICBtYXJnaW46IDI1JSBhdXRvO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHBhZGRpbmc6IDVweCA1JTtcXG4gIHdpZHRoOiA3MCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJsdWUtbGlnaHQpO1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXG59XFxuXFxuLm1lbnUtbmFtZSB7XFxuICBncmlkLXJvdy1zdGFydDogMTtcXG4gIGdyaWQtY29sdW1uOiAyIC8gc3BhbiAxO1xcbn1cXG5cXG4ubWVudS1wcmljZSB7XFxuICBncmlkLXJvdy1zdGFydDogMTtcXG4gIGdyaWQtY29sdW1uOiAzIC8gc3BhbiAxO1xcbn1cXG5cXG4ubWVudS1waWMge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZ3JpZC1yb3c6IDEgLyAzO1xcbn1cXG5cXG4ubWVudS1ibHVyYiB7XFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICBncmlkLXJvdy1zdGFydDogMjtcXG4gIGdyaWQtY29sdW1uOiAyIC8gc3BhbiAyO1xcbn1cXG5cXG4uZm9yZWdyb3VuZC1jb250YWN0IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDJlbTtcXG4gIG1hcmdpbjogMjUlIGF1dG87XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgcGFkZGluZzogNXB4IDUlO1xcbiAgd2lkdGg6IDcwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktYmx1ZS1saWdodCk7XFxufVxcblxcbi5jb250YWN0LWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jb250YWN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4ubWFwIHtcXG4gIGZsZXgtc2hyaW5rOiA1O1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1QixvQ0FBb0M7RUFDcEMsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsWUFBWTtFQUNaLFdBQVc7RUFDWCwyQ0FBMkM7RUFDM0MsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixxQkFBcUI7RUFDckIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsaUNBQWlDO0VBQ2pDLFlBQVk7RUFDWiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxTQUFTO0VBQ1Q7eUJBQ3VCO0VBQ3ZCLCtCQUErQjtFQUMvQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7RUFDWCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixlQUFlO0VBQ2YsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGVBQWU7RUFDZixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFVBQVU7QUFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZmFtaWx5PVNvbnNpZStPbmUmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuOnJvb3Qge1xcbiAgLyogY29sb3JzICovXFxuICAtLXByaW1hcnktYmx1ZS1saWdodDogIzQ5N2RkZTtcXG4gIC0tcHJpbWFyeS1ibHVlLWRhcms6ICMyMTQ5OTE7XFxuICAtLWNvbXBsaW1lbnRhcnktcmVkOiAjZGU3MjVmO1xcbiAgLS1jb21wbGltZW50YXJ5LWdyZWVuLWxpZ2h0OiAjYWFkZTMzO1xcbiAgLS1jb21wbGltZW50YXJ5LWdyZWVuLWRhcms6ICM3MjkxMjk7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGhlaWdodDogMTB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1ibHVlLWxpZ2h0KTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5sZWZ0IHtcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLmxvZ28ge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTb25zaWUgT25lXFxcIiwgY3Vyc2l2ZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ubmF2LWxpc3Qge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLm5hdi1lbGVtIHtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIHBhZGRpbmc6IDBweCAxcmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcblxcbi5uYXYtZWxlbTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1ibHVlLWRhcmspO1xcbn1cXG5cXG4uaG9tZS1pbWcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDkwdmg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDEwdmg7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vaW1hZ2VzL3Jlc3RhdXJhbnQuanBnXFxcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWRcXG4gICAgcmdiYSgyNiwgMjQsIDI0LCAwLjMpO1xcbiAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBtdWx0aXBseTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5ob21lLWhlYWRsaW5lIHtcXG4gIGZvbnQtc2l6ZTogNnJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmhvbWUtdGV4dCB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5iYWNrZ3JvdW5kLWNvbG9yIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZm9yZWdyb3VuZC1tZW51IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDJlbTtcXG4gIG1hcmdpbjogMjUlIGF1dG87XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgcGFkZGluZzogNXB4IDUlO1xcbiAgd2lkdGg6IDcwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktYmx1ZS1saWdodCk7XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbn1cXG5cXG4ubWVudS1uYW1lIHtcXG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgZ3JpZC1jb2x1bW46IDIgLyBzcGFuIDE7XFxufVxcblxcbi5tZW51LXByaWNlIHtcXG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgZ3JpZC1jb2x1bW46IDMgLyBzcGFuIDE7XFxufVxcblxcbi5tZW51LXBpYyB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwcHg7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogMSAvIDM7XFxufVxcblxcbi5tZW51LWJsdXJiIHtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG4gIGdyaWQtcm93LXN0YXJ0OiAyO1xcbiAgZ3JpZC1jb2x1bW46IDIgLyBzcGFuIDI7XFxufVxcblxcbi5mb3JlZ3JvdW5kLWNvbnRhY3Qge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMmVtO1xcbiAgbWFyZ2luOiAyNSUgYXV0bztcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBwYWRkaW5nOiA1cHggNSU7XFxuICB3aWR0aDogNzAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1ibHVlLWxpZ2h0KTtcXG59XFxuXFxuLmNvbnRhY3QtaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhY3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5tYXAge1xcbiAgZmxleC1zaHJpbms6IDU7XFxuICB3aWR0aDogNTAlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IHVwZGF0ZUNvbnRhY3RJbmZvID0gKHBhcmVudERpdikgPT4ge1xuICBjb25zdCBhZGRyZXNzID0gXCIxNjMxIEUgQ2FwaXRvbCBFeHB5LCBTYW4gSm9zZSwgQ0EgOTUxMjFcIjtcbiAgY29uc3QgbVRoSG91cnMgPSBbOCwgOF07XG4gIGNvbnN0IGZTdW5Ib3VycyA9IFs4LCAxMV07XG4gIGNvbnN0IHBob25lID0gXCIoMjIyKS04ODgtNTU1NVwiO1xuXG4gIGNvbnN0IGFkZHJlc3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhZGRyZXNzRGl2LmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+cGxhY2VcbiAgPC9zcGFuPiR7YWRkcmVzc31gO1xuICBwYXJlbnREaXYuYXBwZW5kQ2hpbGQoYWRkcmVzc0Rpdik7XG5cbiAgY29uc3QgaG91cnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBob3Vyc0Rpdi5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPnNjaGVkdWxlXG4gIDwvc3Bhbj5Nb24tVGh1cnM6ICR7bVRoSG91cnNbMF19YW0tJHttVGhIb3Vyc1sxXX1wbSwgRnJpLVN1bjogJHtmU3VuSG91cnNbMF19YW0tJHtmU3VuSG91cnNbMV19cG1gO1xuICBwYXJlbnREaXYuYXBwZW5kQ2hpbGQoaG91cnNEaXYpO1xuXG4gIGNvbnN0IHBob25lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGhvbmVEaXYuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5waG9uZTwvc3Bhbj4ke3Bob25lfWA7XG4gIHBhcmVudERpdi5hcHBlbmRDaGlsZChwaG9uZURpdik7XG5cbiAgY29uc3QgbWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFwLmlubmVySFRNTCA9IGA8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDg1Mzc1LjkzMzU0NzYxMjA5ITJkLTEyMS45MzYwOTk2OTc3ODM0ITNkMzcuMzIzNTE0ODU5MDkxMiEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4MCUzQTB4NzJhZDFkZDc4NmIxNGYzMyEyc1RoZSUyMEJvaWxpbmclMjBDcmFiITVlMCEzbTIhMXNlbiEyc3VzITR2MTYyMzk1MTg4MDMwNCE1bTIhMXNlbiEyc3VzXCIgd2lkdGg9XCI2MDBcIiBoZWlnaHQ9XCI0NTBcIiBzdHlsZT1cImJvcmRlcjowO1wiIGFsbG93ZnVsbHNjcmVlbj1cIlwiIGxvYWRpbmc9XCJsYXp5XCI+PC9pZnJhbWU+YDtcbiAgcGFyZW50RGl2LmFwcGVuZENoaWxkKG1hcCk7XG59O1xuXG4vKipcbiAqIGNvbnRhY3QgbW9kdWxlIGV4cG9ydHMgbG9hZENvbnRhY3QoKSBmdW5jdGlvblxuICogd2hpY2ggY3JlYXRlcyBhIGRpdiBlbGVtZW50IGFkZHMgYXBwcm9wcmlhdGVcbiAqIGNvbnRlbnQgYW5kIHN0eWxlcyB0byB0aGF0IGVsZW1lbnQgYW5kIHRoZW4gYXBwZW5kcyBpdCB0byB0aGUgRE9NXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRDb250YWN0KCkge1xuICBjb25zdCBwYXJlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gIGNvbnN0IGNvbnRhY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJiYWNrZ3JvdW5kLWNvbG9yXCIpO1xuXG4gIGNvbnN0IGNvbnRhY3RTdWJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWN0U3ViQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb3JlZ3JvdW5kLWNvbnRhY3RcIik7XG5cbiAgY29uc3QgY29udGFjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBjb250YWN0VGl0bGUuaW5uZXJUZXh0ID0gXCJDb250YWN0IFVzXCI7XG4gIGNvbnRhY3RUaXRsZS5jbGFzc0xpc3QuYWRkKFwibG9nb1wiKTtcbiAgY29udGFjdFN1YkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0VGl0bGUpO1xuXG4gIGNvbnN0IGNvbnRhY3RJbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdXBkYXRlQ29udGFjdEluZm8oY29udGFjdEluZm9Db250YWluZXIpO1xuXG4gIGNvbnRhY3RJbmZvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWluZm9cIik7XG4gIGNvbnRhY3RTdWJDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdEluZm9Db250YWluZXIpO1xuXG4gIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdFN1YkNvbnRhaW5lcik7XG4gIHBhcmVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0Q29udGFpbmVyKTtcbn1cbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgaGVyb0ltZyBmcm9tIFwiLi9pbWFnZXMvcmVzdGF1cmFudC5qcGdcIjtcblxuLyoqXG4gKiBob21lIG1vZHVsZSBleHBvcnRzIGxvYWRIb21lKCkgZnVuY3Rpb25cbiAqIHdoaWNoIGNyZWF0ZXMgYSBkaXYgZWxlbWVudCBhZGRzIGFwcHJvcHJpYXRlXG4gKiBjb250ZW50IGFuZCBzdHlsZXMgdG8gdGhhdCBlbGVtZW50IGFuZCB0aGVuIGFwcGVuZHMgaXQgdG8gdGhlIERPTVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgY29uc3QgcGFyZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICBjb25zdCBob21lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaG9tZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaG9tZS1pbWdcIik7XG5cbiAgY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGhlYWRsaW5lLnRleHRDb250ZW50ID0gXCJGYW1pbHkgT3duZWRcIjtcbiAgaGVhZGxpbmUuY2xhc3NMaXN0LmFkZChcImhvbWUtaGVhZGxpbmVcIik7XG4gIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xuXG4gIGNvbnN0IGNvcHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGNvcHkudGV4dENvbnRlbnQgPSBcIkVzdC4gMTk5OFwiO1xuICBjb3B5LmNsYXNzTGlzdC5hZGQoXCJob21lLXRleHRcIik7XG4gIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoY29weSk7XG5cbiAgcGFyZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVDb250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsaW5ncyhlbGVtSUQsIGNsYXNzTmFtZSkge1xuICBjb25zdCBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtSUQpO1xuICBlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbn1cbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgRmlzaENoaXBzIGZyb20gXCIuL2ltYWdlcy9maXNoLWFuZC1jaGlwcy5qcGdcIjtcbmltcG9ydCBTYWxtb24gZnJvbSBcIi4vaW1hZ2VzL2dyaWxsZWQtc2FsbW9uLmpwZ1wiO1xuaW1wb3J0IFNocmltcCBmcm9tIFwiLi9pbWFnZXMvc2hyaW1wLnBuZ1wiO1xuaW1wb3J0IE9jdG9wdXMgZnJvbSBcIi4vaW1hZ2VzL29jdG9wdXMuanBnXCI7XG5pbXBvcnQgTXVzc2VscyBmcm9tIFwiLi9pbWFnZXMvbXVzc2Vscy5qcGdcIjtcblxuLyoqXG4gKiBjb250YWN0IG1vZHVsZSBleHBvcnRzIGxvYWRNZW51KCkgZnVuY3Rpb25cbiAqIHdoaWNoIGNyZWF0ZXMgYSBkaXYgZWxlbWVudCBhZGRzIGFwcHJvcHJpYXRlXG4gKiBjb250ZW50IGFuZCBzdHlsZXMgdG8gdGhhdCBlbGVtZW50IGFuZCB0aGVuIGFwcGVuZHMgaXQgdG8gdGhlIERPTVxuICovXG5cbmxldCBwaWNDcmVkaXRzID0gW1xuICBcIjxhIGhyZWY9J2h0dHBzOi8vd3d3LmZyZWVwaWsuY29tL3Bob3Rvcy9iYWNrZ3JvdW5kJz5CYWNrZ3JvdW5kIHBob3RvIGNyZWF0ZWQgYnkgZGFzaHU4MyAtIHd3dy5mcmVlcGlrLmNvbTwvYT5cIixcbiAgXCJcIixcbl07XG5cbmxldCBtZW51ID0gW1xuICB7XG4gICAgaXRlbTogXCJGaXNoICYgQ2hpcHNcIixcbiAgICBwcmljZTogNC45OSxcbiAgICBwaWM6IEZpc2hDaGlwcyxcbiAgICBibHVyYjogXCJNYWRlIHRvIG9yZGVyLCBmcmVzaGx5IGNhdWdodCBmaXNoXCIsXG4gIH0sXG4gIHtcbiAgICBpdGVtOiBcIkdyaWxsZWQgU2FsbW9uXCIsXG4gICAgcHJpY2U6IDE4Ljk5LFxuICAgIHBpYzogU2FsbW9uLFxuICAgIGJsdXJiOiBcIlRoZSBiZXN0IGluIGNsYXNzLCBzZXJ2ZWQgZnJvbSBmYXJtIHRvIHRhYmxlLlwiLFxuICB9LFxuICB7XG4gICAgaXRlbTogXCJPY3RvcHVzXCIsXG4gICAgcHJpY2U6IDE2Ljk5LFxuICAgIHBpYzogT2N0b3B1cyxcbiAgICBibHVyYjogXCJBdmFpbGFibGUgb25seSBpbiBzZWFzb24uXCIsXG4gIH0sXG4gIHtcbiAgICBpdGVtOiBcIlNocmltcCBQbGF0dGVyXCIsXG4gICAgcHJpY2U6IDkuOTksXG4gICAgcGljOiBTaHJpbXAsXG4gICAgYmx1cmI6IFwiQ2FuJ3QgZ28gd3Jvbmcgd2l0aCBCdWJiYSBTaHJpbXAuXCIsXG4gIH0sXG4gIHtcbiAgICBpdGVtOiBcIk11c3NlbHNcIixcbiAgICBwcmljZTogMTEuOTksXG4gICAgcGljOiBNdXNzZWxzLFxuICAgIGJsdXJiOiBcIkZyZXNobHkgY2F1Z2h0LCBvbmx5IGF2YWlsYWJsZSBpbiBzZWFzb24uXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgY29uc3QgcGFyZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYmFja2dyb3VuZC1jb2xvclwiKTtcblxuICBjb25zdCBtZW51U3ViQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudVN1YkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9yZWdyb3VuZC1tZW51XCIpO1xuXG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoMS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICBoMS5jbGFzc0xpc3QuYWRkKFwibG9nb1wiKTtcbiAgbWVudVN1YkNvbnRhaW5lci5hcHBlbmRDaGlsZChoMSk7XG5cbiAgbWVudS5mb3JFYWNoKChkaXNoKSA9PiB7XG4gICAgY29uc3QgZGlzaENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGlzaENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xuXG4gICAgY29uc3QgZGlzaE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgZGlzaE5hbWUudGV4dENvbnRlbnQgPSBkaXNoLml0ZW07XG4gICAgZGlzaE5hbWUuY2xhc3NMaXN0LmFkZChcIm1lbnUtbmFtZVwiKTtcblxuICAgIGNvbnN0IGRpc2hQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRpc2hQcmljZS50ZXh0Q29udGVudCA9IGAkJHtkaXNoLnByaWNlfWA7XG4gICAgZGlzaFByaWNlLmNsYXNzTGlzdC5hZGQoXCJtZW51LXByaWNlXCIpO1xuXG4gICAgaWYgKGRpc2gucGljICE9PSBcIlRPRE9cIikge1xuICAgICAgY29uc3QgZGlzaFBpYyA9IG5ldyBJbWFnZSgpO1xuICAgICAgZGlzaFBpYy5zcmMgPSBkaXNoLnBpYztcbiAgICAgIGRpc2hQaWMuY2xhc3NMaXN0LmFkZChcIm1lbnUtcGljXCIpO1xuICAgICAgZGlzaENvbnRhaW5lci5hcHBlbmRDaGlsZChkaXNoUGljKTtcbiAgICB9XG4gICAgY29uc3QgZGlzaEJsdXJiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZGlzaEJsdXJiLnRleHRDb250ZW50ID0gZGlzaC5ibHVyYjtcbiAgICBkaXNoQmx1cmIuY2xhc3NMaXN0LmFkZChcIm1lbnUtYmx1cmJcIik7XG5cbiAgICBkaXNoQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpc2hOYW1lKTtcbiAgICBkaXNoQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpc2hQcmljZSk7XG4gICAgZGlzaENvbnRhaW5lci5hcHBlbmRDaGlsZChkaXNoQmx1cmIpO1xuXG4gICAgbWVudVN1YkNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXNoQ29udGFpbmVyKTtcbiAgfSk7XG5cbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51U3ViQ29udGFpbmVyKTtcblxuICBwYXJlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgbG9hZEhvbWUgZnJvbSBcIi4vaG9tZS5qc1wiO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gXCIuL21lbnUuanNcIjtcbmltcG9ydCBsb2FkQ29udGFjdCBmcm9tIFwiLi9jb250YWN0LmpzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdkVsZW1lbnQobmF2QmFyLCBuYW1lKSB7XG4gIGNvbnN0IG5hdkVsZW1MaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIG5hdkVsZW1MaW5rLmNsYXNzTGlzdC5hZGQoXCJuYXYtZWxlbVwiKTtcbiAgbmF2RWxlbUxpbmsuZGF0YXNldC5uYXYgPSBuYW1lO1xuXG4gIC8vIEFkZCBldmVudCBsaXN0ZW5lcnMgZm9yIHN3aXRjaGluZ1xuICBuYXZFbGVtTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHVubG9hZFBhZ2UoKTtcbiAgICBzd2l0Y2ggKG5hdkVsZW1MaW5rLmRhdGFzZXQubmF2KSB7XG4gICAgICBjYXNlIFwiaG9tZVwiOlxuICAgICAgICBsb2FkSG9tZSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJtZW51XCI6XG4gICAgICAgIGxvYWRNZW51KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImNvbnRhY3RcIjpcbiAgICAgICAgbG9hZENvbnRhY3QoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRVJST1I6IHRyeWluZyB0byBsb2FkIHBhZ2UgdGhhdCBkb2VzIG5vdCBleGlzdC5cIik7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgbmF2RWxlbUxpbmtUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobmFtZSk7XG4gIG5hdkVsZW1MaW5rLmFwcGVuZENoaWxkKG5hdkVsZW1MaW5rVGV4dCk7XG4gIG5hdkJhci5hcHBlbmRDaGlsZChuYXZFbGVtTGluayk7XG59XG5cbmNvbnN0IG5hdkJhciA9ICgpID0+IHtcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcblxuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbG9nby50ZXh0Q29udGVudCA9IFwiQXZpYXRvXCI7XG4gIGxvZ28uY2xhc3NMaXN0LmFkZChcImxvZ29cIik7XG4gIGxvZ28uY2xhc3NMaXN0LmFkZChcImxlZnRcIik7XG4gIG5hdkJhci5hcHBlbmQobG9nbyk7XG5cbiAgY29uc3QgbmF2RWxlbXMgPSBbXCJob21lXCIsIFwibWVudVwiLCBcImNvbnRhY3RcIl07XG4gIG5hdkVsZW1zLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICBjcmVhdGVOYXZFbGVtZW50KG5hdkJhciwgZWxlbSk7XG4gIH0pO1xuXG4gIG5hdkJhci5jbGFzc0xpc3QuYWRkKFwibmF2YmFyXCIpO1xuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hdkJhcik7XG59O1xuXG5jb25zdCB1bmxvYWRQYWdlID0gKCkgPT4ge1xuICBsZXQgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgcGFnZS5yZW1vdmVDaGlsZChwYWdlLmxhc3RDaGlsZCk7XG59O1xuXG5uYXZCYXIoKTtcbmxvYWRIb21lKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9