/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n    --primary-dark: #333;\\n    --secondary-dark: #444;\\n    --primary-light: #eee;\\n    --secondary-light: #ddd;\\n}\\n\\n*,\\n*::before,\\n*::after {\\n    margin: 0;\\n    padding: 0;\\n    box-sizing: border-box;\\n}\\n\\nhtml, \\nbody {\\n    height: 100%;\\n    overflow: hidden;\\n}\\n\\nbody {\\n    font-family: 'Roboto', sans-serif;\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\nbutton {\\n    cursor: pointer;\\n}\\n\\n/* header */\\nheader {\\n    background-color: var(--primary-dark);\\n    color: var(--primary-light);\\n    height: 60px;\\n    font-size: 2.5em;\\n    font-weight: 600;\\n    display: flex;\\n    justify-content: start;\\n    align-items: center;\\n    padding-left: 100px;\\n}\\n\\n/* Main */\\nmain {\\n    display: flex;\\n    flex: 1;\\n}\\n\\n/* Nav bar */\\nnav {\\n    flex: 1 1 0;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-around;\\n    align-items: center;\\n    background-color: var(--secondary-light);\\n    border-right: 1px solid black;\\n}\\n\\n.todo-container, \\n.project-container {\\n    flex: 1;\\n    width: 100%;\\n    color: var(--primary-dark);\\n    padding: 10px;\\n    display: flex;\\n    flex-direction: column;\\n    gap: 5px;\\n}\\n\\nhr {\\n    border: 2px solid black;\\n    width: 100%;\\n}\\n\\n.container-header {\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n}\\n\\n.container-header p {\\n    font-size: 1.5em;\\n    font-weight: 800;\\n}\\n\\n.round-button {\\n    border-radius: 50%;\\n    height: 20px;\\n    width: 20px;\\n    font-size: 1.3em;\\n    font-weight: 600;\\n    border: 2px solid var(--primary-dark);\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.list-display {\\n    overflow: auto;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: start;\\n    align-items: flex-start;\\n    flex: 1 1 0;\\n    gap: 1px;\\n}\\n\\n.item {\\n    width: 100%;\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    border: none;\\n    color: inherit;\\n    font-family: inherit;\\n    font-size: inherit;\\n    outline: none;\\n    background-color: var(--secondary-light);\\n    padding: 5px 10px 5px 10px;\\n    border-radius: 5px;\\n    white-space: normal;\\n    text-align: left;\\n}\\n\\n.hide {\\n    visibility: hidden;\\n    font-weight: 900;\\n}\\n\\n.item:hover {\\n    background-color: #ccc;;\\n}\\n\\n.item:hover .hide {\\n    visibility: visible;\\n}\\n\\n/* Content */\\n.content {\\n    flex: 5 1 0;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    background-color: var(--primary-light);\\n    padding: 30px;\\n}\\n\\n/* Form popup */\\n.form-popup {\\n    display: none;\\n    z-index: 1;\\n    position: fixed;\\n    background-color: white;\\n    width: 100%;\\n    width: calc(100% - 250px);\\n    height: calc(100% - 90px);\\n    padding: 10px 10px 25px 10px;\\n}\\n\\n.form-container {\\n    width: 100%;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: start;\\n    align-items: flex-start;\\n    gap: 30px;\\n}\\n\\n.form-title-control,\\n#form-title {\\n    height: 30px;\\n    width: 100%;\\n}\\n\\n.form-description-control,\\n#form-description {\\n    height: 100%;\\n    width: 100%;\\n}\\n\\n#form-title,\\n#form-description {\\n    padding: 5px;\\n    font-size: 1.2em;\\n}\\n\\n.form-misc-control {\\n    width: 100%;\\n    display: flex;\\n    justify-content: space-around;\\n    align-items: flex-end;\\n    height: 100px;\\n    margin-top: 20px;\\n}\\n\\n#priority,\\n#date {\\n    line-height: 20px;\\n}\\n\\n/* Content display */\\n.content-display {\\n    flex: 1 1 0;\\n    height: 100%;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: start;\\n    align-items: flex-start;\\n    text-align: left;\\n}\\n\\n.title {\\n    font-size: 2em;\\n    font-weight: 900;\\n    overflow: auto;\\n    white-space: normal;\\n    text-align: left;\\n    width: 100%;\\n    margin-bottom: 20px;\\n    height: 40px;\\n}\\n\\n.content-display p {\\n    font-size: 0.9em;\\n}\\n\\n.description-display {\\n    margin-top: 5px;\\n    margin-bottom: 20px;\\n    border: 1px solid black;\\n    font-size: 1.3em;\\n    flex: 1 1 0;\\n    width: 100%;\\n    padding: 5px;\\n    overflow: auto;\\n    white-space: normal;\\n}\\n\\n.misc-display {\\n    width: 100%;\\n    display: flex;\\n    justify-content: space-around;\\n    align-items: center;\\n    font-size: 1.2em;\\n    font-weight: 600;\\n}\\n\\n.content-button {\\n    width: 100%;\\n    display: flex;\\n    justify-content: space-around;\\n    align-items: center;\\n    margin-top: 20px;\\n    min-height: 50px;\\n}\\n\\n.edit,\\n.delete {\\n    padding: 10px 100px 10px 100px;\\n    font-size: 1.2em;\\n}\\n\\n.edit:hover {\\n    border: 3px solid green;\\n}\\n\\n.delete:hover {\\n    border: 3px solid red;\\n}\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/buttons.js":
/*!************************!*\
  !*** ./src/buttons.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addButton\": () => (/* binding */ addButton),\n/* harmony export */   \"formDeleteButton\": () => (/* binding */ formDeleteButton),\n/* harmony export */   \"removeButton\": () => (/* binding */ removeButton),\n/* harmony export */   \"saveButton\": () => (/* binding */ saveButton),\n/* harmony export */   \"displayDeleteButton\": () => (/* binding */ displayDeleteButton)\n/* harmony export */ });\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item */ \"./src/item.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display */ \"./src/display.js\");\n\n\n\n\nconst form = document.querySelector('.form-popup');\nconst formContainer = document.querySelector('.form-container');\n\nfunction addButton() {\n    const buttons = document.querySelectorAll('.round-button');\n\n    buttons.forEach((button) => {\n        button.addEventListener('click', () => {\n            form.style.display = 'flex';\n        });\n    });\n}\n\nfunction formDeleteButton() {\n    const button = document.querySelector('#form-delete');\n\n    button.addEventListener('click', () => {\n        formContainer.reset();\n        form.style.display = 'none';\n    });\n}\n\nfunction removeButton(index) {\n    const { todoList } = _item__WEBPACK_IMPORTED_MODULE_0__.List;\n\n    todoList.splice(index, 1);\n    (0,_todo__WEBPACK_IMPORTED_MODULE_1__.displayTodoList)();\n}\n\nfunction saveButton() {\n    const button = document.querySelector('#save');\n\n    button.addEventListener('click', () => {\n        (0,_todo__WEBPACK_IMPORTED_MODULE_1__.addItemTodo)();\n        (0,_todo__WEBPACK_IMPORTED_MODULE_1__.displayTodoList)();\n        form.style.display = 'none';\n        formContainer.reset();\n    });\n}\n\nfunction displayDeleteButton() {\n    const { todoList, currentIndex } = _item__WEBPACK_IMPORTED_MODULE_0__.List;\n    const button = document.querySelector('#display-delete');\n\n    button.addEventListener('click', () => {\n        todoList.splice(currentIndex[0], 1);\n        (0,_display__WEBPACK_IMPORTED_MODULE_2__.removeDisplay)();\n        (0,_todo__WEBPACK_IMPORTED_MODULE_1__.displayTodoList)();\n        currentIndex[0] = '';\n    });\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/buttons.js?");

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayItem\": () => (/* binding */ displayItem),\n/* harmony export */   \"removeDisplay\": () => (/* binding */ removeDisplay)\n/* harmony export */ });\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item */ \"./src/item.js\");\n\n\nconst title = document.querySelector('.title');\nconst description = document.querySelector('.description-display');\nconst priority = document.querySelector('.priority');\nconst date = document.querySelector('.due-date');\n\nfunction displayItem(index) {\n    const { todoList } = _item__WEBPACK_IMPORTED_MODULE_0__.List;\n\n    title.textContent = todoList[index].title;\n    description.textContent = todoList[index].description;\n    priority.textContent = todoList[index].priority;\n    date.textContent = todoList[index].date;\n}\n\nfunction removeDisplay() {\n    title.textContent = '';\n    description.textContent = '';\n    priority.textContent = '';\n    date.textContent = '';\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/display.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _buttons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons.js */ \"./src/buttons.js\");\n\n\n\nconst d = new Date();\nconst year = d.getFullYear();\nconst month = d.getMonth() + 1;\nconst day = d.getDate();\nconst today = `${year}/${month}/${day}`;\nconsole.log(today);\n\n_buttons_js__WEBPACK_IMPORTED_MODULE_1__.addButton();\n_buttons_js__WEBPACK_IMPORTED_MODULE_1__.formDeleteButton();\n_buttons_js__WEBPACK_IMPORTED_MODULE_1__.saveButton();\n_buttons_js__WEBPACK_IMPORTED_MODULE_1__.displayDeleteButton();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/item.js":
/*!*********************!*\
  !*** ./src/item.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"List\": () => (/* binding */ List),\n/* harmony export */   \"Item\": () => (/* binding */ Item)\n/* harmony export */ });\n// Arrays to store data\nconst List = (() => {\n    const todoList = [];\n    const projectList = [];\n    const currentIndex = [];\n    return { todoList, projectList, currentIndex };\n})();\n\n// Factory function to create an item\nconst Item = ((title, description, priority, date) => {\n    return { title, description, priority, date }\n});\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/item.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addItemTodo\": () => (/* binding */ addItemTodo),\n/* harmony export */   \"displayTodoList\": () => (/* binding */ displayTodoList)\n/* harmony export */ });\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item */ \"./src/item.js\");\n/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons */ \"./src/buttons.js\");\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display */ \"./src/display.js\");\n\n\n\n\nfunction addItemTodo() {\n    const { todoList } = _item__WEBPACK_IMPORTED_MODULE_0__.List;\n\n    const title = document.querySelector('#form-title').value;\n    const description = document.querySelector('#form-description').value;\n    const priority = document.querySelector('#priority').value;\n    const date = document.querySelector('#date').value;\n\n    const item = (0,_item__WEBPACK_IMPORTED_MODULE_0__.Item)(title, description, priority, date);\n    todoList.push(item);\n}\n\nfunction displayTodoList() {\n    const { todoList, currentIndex } = _item__WEBPACK_IMPORTED_MODULE_0__.List;\n    const list = document.querySelector('#todo-list');\n    while (list.hasChildNodes()) {\n        list.removeChild(list.lastChild);\n    };\n    for (let i = 0; i < todoList.length; i++) {\n        const button = document.createElement('button');\n        button.classList.add('item');\n        button.type = 'button';\n        button.textContent = todoList[i].title;\n        button.dataset.index = i;\n        button.addEventListener('click', (e) => {\n            (0,_display__WEBPACK_IMPORTED_MODULE_2__.displayItem)(e.target.dataset.index);\n            currentIndex[0] = e.target.dataset.index;\n        });\n        list.appendChild(button);\n\n        const div = document.createElement('div');\n        div.classList.add('hide');\n        div.textContent = 'X';\n        div.dataset.index = i;\n        div.addEventListener('click', (e) => {\n            (0,_buttons__WEBPACK_IMPORTED_MODULE_1__.removeButton)(e.target.dataset.index);\n            (0,_display__WEBPACK_IMPORTED_MODULE_2__.removeDisplay)();\n        });\n        button.appendChild(div);\n    };\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/todo.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;