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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n    --primary-dark: #333;\\n    --secondary-dark: #444;\\n    --primary-light: #eee;\\n    --secondary-light: #ddd;\\n}\\n\\n*,\\n*::before,\\n*::after {\\n    margin: 0;\\n    padding: 0;\\n    box-sizing: border-box;\\n}\\n\\nhtml, \\nbody {\\n    height: 100%;\\n    overflow: hidden;\\n}\\n\\nbody {\\n    font-family: 'Roboto', sans-serif;\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\nbutton {\\n    cursor: pointer;\\n}\\n\\n/* header */\\nheader {\\n    background-color: var(--primary-dark);\\n    color: var(--primary-light);\\n    height: 60px;\\n    font-size: 2.5em;\\n    font-weight: 600;\\n    display: flex;\\n    justify-content: start;\\n    align-items: center;\\n    padding-left: 100px;\\n}\\n\\n/* Main */\\nmain {\\n    display: flex;\\n    flex: 1;\\n}\\n\\n/* Nav bar */\\nnav {\\n    flex: 1 1 0;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-around;\\n    align-items: center;\\n    background-color: var(--secondary-light);\\n    border-right: 1px solid black;\\n}\\n\\n.todo-container, \\n.project-container {\\n    flex: 1;\\n    width: 100%;\\n    color: var(--primary-dark);\\n    padding: 10px;\\n    display: flex;\\n    flex-direction: column;\\n    gap: 5px;\\n}\\n\\nhr {\\n    border: 2px solid black;\\n    width: 100%;\\n}\\n\\n.container-header {\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n}\\n\\n.container-header p {\\n    font-size: 1.5em;\\n    font-weight: 800;\\n}\\n\\n.round-button {\\n    border-radius: 50%;\\n    height: 20px;\\n    width: 20px;\\n    font-size: 1.3em;\\n    font-weight: 600;\\n    border: 2px solid var(--primary-dark);\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.list-display {\\n    overflow: auto;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: start;\\n    align-items: flex-start;\\n    flex: 1 1 0;\\n    gap: 1px;\\n}\\n\\n.item {\\n    width: 100%;\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    border: none;\\n    color: inherit;\\n    font-family: inherit;\\n    font-size: inherit;\\n    outline: none;\\n    background-color: var(--secondary-light);\\n    padding: 5px 10px 5px 10px;\\n    border-radius: 5px;\\n    white-space: normal;\\n    text-align: left;\\n}\\n\\n.hide {\\n    visibility: hidden;\\n    font-weight: 900;\\n}\\n\\n.item:hover {\\n    background-color: #ccc;;\\n}\\n\\n.item:hover .hide {\\n    visibility: visible;\\n}\\n\\n/* Content */\\n.content {\\n    flex: 5 1 0;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    background-color: var(--primary-light);\\n    padding: 30px;\\n}\\n\\n/* Form popup */\\n.form-popup {\\n    display: none;\\n    z-index: 1;\\n    position: fixed;\\n    background-color: white;\\n    width: 100%;\\n    width: calc(100% - 250px);\\n    height: calc(100% - 90px);\\n    padding: 10px 10px 25px 10px;\\n}\\n\\n.form-container {\\n    width: 100%;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: start;\\n    align-items: flex-start;\\n    gap: 30px;\\n}\\n\\n.form-title-control,\\n#form-title {\\n    height: 30px;\\n    width: 100%;\\n}\\n\\n.form-description-control,\\n#form-description {\\n    height: 100%;\\n    width: 100%;\\n}\\n\\n#form-title,\\n#form-description {\\n    padding: 5px;\\n    font-size: 1.2em;\\n}\\n\\n.form-misc-control {\\n    width: 100%;\\n    display: flex;\\n    justify-content: space-around;\\n    align-items: flex-end;\\n    height: 100px;\\n    margin-top: 20px;\\n}\\n\\n#priority,\\n#date {\\n    line-height: 20px;\\n}\\n\\n/* Content display */\\n.content-display {\\n    flex: 1 1 0;\\n    height: 100%;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: start;\\n    align-items: flex-start;\\n    text-align: left;\\n}\\n\\n.title {\\n    font-size: 2em;\\n    font-weight: 900;\\n    overflow: auto;\\n    white-space: normal;\\n    text-align: left;\\n    width: 100%;\\n    margin-bottom: 20px;\\n}\\n\\n.content-display p {\\n    font-size: 0.9em;\\n}\\n\\n.description-display {\\n    margin-top: 5px;\\n    margin-bottom: 20px;\\n    border: 1px solid black;\\n    font-size: 1.3em;\\n    flex: 1 1 0;\\n    width: 100%;\\n    padding: 5px;\\n    overflow: auto;\\n    white-space: normal;\\n}\\n\\n.misc-display {\\n    width: 100%;\\n    display: flex;\\n    justify-content: space-around;\\n    align-items: center;\\n    font-size: 1.2em;\\n    font-weight: 600;\\n}\\n\\n.content-button {\\n    width: 100%;\\n    display: flex;\\n    justify-content: space-around;\\n    align-items: center;\\n    margin-top: 20px;\\n    min-height: 50px;\\n}\\n\\n.edit,\\n.delete {\\n    padding: 10px 100px 10px 100px;\\n    font-size: 1.2em;\\n}\\n\\n.edit:hover {\\n    border: 3px solid green;\\n}\\n\\n.delete:hover {\\n    border: 3px solid red;\\n}\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ \"./src/form.js\");\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display */ \"./src/display.js\");\n\n\n\nfunction createContent() {\n    const content = document.createElement('div');\n    content.classList.add('content');\n\n    content.appendChild((0,_form__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n    content.appendChild((0,_display__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n\n    return content;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContent);\n\n//# sourceURL=webpack://todo-list/./src/content.js?");

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createDisplay() {\n    const contentDisplay = document.createElement('div');\n    contentDisplay.classList.add('content-display');\n\n    const title = document.createElement('div');\n    title.classList.add('title');\n    contentDisplay.appendChild(title);\n\n    const p = document.createElement('p');\n    p.textContent = 'Description:';\n    contentDisplay.appendChild(p);\n\n    const descriptionDisplay = document.createElement('div');\n    descriptionDisplay.classList.add('description-display');\n    contentDisplay.appendChild(descriptionDisplay);\n\n    const miscDisplay = document.createElement('div');\n    miscDisplay.classList.add('misc-display');\n    contentDisplay.appendChild(miscDisplay);\n\n    const div1 = document.createElement('div');\n    div1.textContent = 'Priority: ';\n    miscDisplay.appendChild(div1);\n\n    const priority = document.createElement('span');\n    priority.classList.add('priority');\n    div1.appendChild(priority);\n\n    const div2 = document.createElement('div');\n    div2.textContent = 'Due Date: ';\n    miscDisplay.appendChild(div2);\n\n    const dueDate = document.createElement('span');\n    dueDate.classList.add('due-date');\n    div1.appendChild(dueDate);\n\n    const contentButton = document.createElement('div');\n    contentButton.classList.add('content-button');\n    contentDisplay.appendChild(contentButton);\n\n    const edit = document.createElement('button');\n    edit.classList.add('edit');\n    edit.type = 'button';\n    edit.textContent = 'Edit';\n    contentButton.appendChild(edit);\n\n    const delete1 = document.createElement('button');\n    delete1.classList.add('delete');\n    delete1.type = 'button';\n    delete1.textContent = 'Delete';\n    contentButton.appendChild(delete1);\n\n    return contentDisplay;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createDisplay);\n\n//# sourceURL=webpack://todo-list/./src/display.js?");

/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createFormPopup() {\n    const formPopup = document.createElement('div');\n    formPopup.classList.add('form-popup');\n\n    // Form\n    const formContainer = document.createElement('form');\n    formContainer.classList.add('form-container');\n    formPopup.appendChild(formContainer);\n\n    // Title\n    const formTitleControl = document.createElement('div');\n    formTitleControl.classList.add('form-title-control');\n    formContainer.appendChild(formTitleControl);\n\n    const title = document.createElement('label');\n    title.htmlFor = 'form-title';\n    title.textContent = 'Title:'\n    formTitleControl.appendChild(title);\n\n    const br1 = document.createElement('br');\n    formTitleControl.appendChild(br1);\n\n    const formTitle = document.createElement('input');\n    formTitle.type = 'text';\n    formTitle.id = 'form-title'\n    formTitleControl.appendChild(formTitle);\n\n    // Description\n    const formDescriptionControl = document.createElement('div');\n    formDescriptionControl.classList.add('form-description-control');\n    formContainer.appendChild(formDescriptionControl);\n\n    const description = document.createElement('label');\n    description.htmlFor = 'form-description';\n    description.textContent = 'Description:'\n    formDescriptionControl.appendChild(description);\n\n    const br2 = document.createElement('br');\n    formDescriptionControl.appendChild(br2);\n\n    const formDescription = document.createElement('textarea');\n    formDescription.id = 'form-description'\n    formDescriptionControl.appendChild(formDescription);\n\n    // Misc\n    const formMiscControl = document.createElement('div');\n    formMiscControl.classList.add('form-misc-control');\n    formContainer.appendChild(formMiscControl);\n\n    const div1 = document.createElement('div');\n    formMiscControl.appendChild(div1);\n\n    const label1 = document.createElement('label');\n    label1.for = 'priority';\n    label1.textContent = 'Priority: ';\n    div1.appendChild(label1);\n\n    const priority = document.createElement('input');\n    priority.type = 'number';\n    priority.id = 'priority';\n    div1.appendChild(priority);\n\n    const div2 = document.createElement('div');\n    formMiscControl.appendChild(div2);\n\n    const label2 = document.createElement('label');\n    label2.for = 'date';\n    label2.textContent = 'Due Date: ';\n    div2.appendChild(label2);\n\n    const date = document.createElement('input');\n    date.type = 'date';\n    date.id = 'date';\n    div2.appendChild(date);\n\n    // Buttons\n    const contentButton = document.createElement('div');\n    contentButton.classList.add('content-button');\n    formContainer.appendChild(contentButton);\n\n    const edit = document.createElement('button');\n    edit.classList.add('edit');\n    edit.type = 'button';\n    edit.textContent = 'Save';\n    contentButton.appendChild(edit);\n\n    const delete1 = document.createElement('button');\n    delete1.classList.add('delete');\n    delete1.type = 'button';\n    delete1.textContent = 'Delete'\n    contentButton.appendChild(delete1);\n\n    return formPopup;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createFormPopup);\n\n\n//# sourceURL=webpack://todo-list/./src/form.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHeader() {\n    const header = document.createElement('header');\n\n    header.textContent = 'Todo List';\n\n    return header;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeader);\n\n//# sourceURL=webpack://todo-list/./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ \"./src/header.js\");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.js */ \"./src/main.js\");\n\n\n\n\ndocument.body.appendChild((0,_header_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\ndocument.body.appendChild((0,_main_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ \"./src/nav.js\");\n/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content */ \"./src/content.js\");\n\n\n\nfunction createMain() {\n    const main = document.createElement('main');\n\n    main.appendChild((0,_nav__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n    main.appendChild((0,_content__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n\n    return main;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMain);\n\n//# sourceURL=webpack://todo-list/./src/main.js?");

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createTodoNav() {\n    const todoContainer = document.createElement('div');\n    todoContainer.classList.add('todo-container');\n\n    const containerHeader = document.createElement('div');\n    containerHeader.classList.add('container-header');\n    todoContainer.appendChild(containerHeader);\n\n    const p = document.createElement('p');\n    p.textContent = 'Todo';\n    containerHeader.appendChild(p);\n\n    const roundButton = document.createElement('button');\n    roundButton.classList.add('round-button');\n    roundButton.type = 'button';\n    roundButton.textContent = '+';\n    containerHeader.appendChild(roundButton);\n\n    const listDisplay = document.createElement('div');\n    listDisplay.classList.add('list-display');\n    todoContainer.appendChild(listDisplay);\n\n    const item = document.createElement('button');\n    item.textContent = 'hi';\n    item.classList.add('item');\n    listDisplay.appendChild(item);\n\n    const hide = document.createElement('div');\n    hide.classList.add('hide');\n    hide.textContent = 'X';\n    listDisplay.appendChild(hide);\n\n    return todoContainer;\n}\n\nfunction createHr() {\n    const hr = document.createElement('hr');\n\n    return hr;\n}\n\nfunction createProjectNav() {\n    const projectContainer = document.createElement('div');\n    projectContainer.classList.add('project-container');\n\n    const containerHeader = document.createElement('div');\n    containerHeader.classList.add('container-header');\n    projectContainer.appendChild(containerHeader);\n\n    const p = document.createElement('p');\n    p.textContent = 'Project';\n    containerHeader.appendChild(p);\n\n    const roundButton = document.createElement('button');\n    roundButton.classList.add('round-button');\n    roundButton.type = 'button';\n    roundButton.textContent = '+';\n    containerHeader.appendChild(roundButton);\n\n    const listDisplay = document.createElement('div');\n    listDisplay.classList.add('list-display');\n    projectContainer.appendChild(listDisplay);\n\n    const item = document.createElement('button');\n    item.textContent = 'hi';\n    item.classList.add('item');\n    listDisplay.appendChild(item);\n\n    const hide = document.createElement('div');\n    hide.classList.add('hide');\n    hide.textContent = 'X';\n    listDisplay.appendChild(hide);\n\n    return projectContainer;\n}\n\nfunction createNav() {\n    const nav = document.createElement('nav');\n\n    nav.appendChild(createTodoNav());\n    nav.appendChild(createHr());\n    nav.appendChild(createProjectNav());\n\n    return nav;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNav);\n\n//# sourceURL=webpack://todo-list/./src/nav.js?");

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