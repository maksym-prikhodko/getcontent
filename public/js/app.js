 (function(modules) { 
 	var installedModules = {};
 	function __webpack_require__(moduleId) {
 		if(installedModules[moduleId]) {
 			return installedModules[moduleId].exports;
 		}
 		var module = installedModules[moduleId] = {
 			i: moduleId,
 			l: false,
 			exports: {}
 		};
 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
 		module.l = true;
 		return module.exports;
 	}
 	__webpack_require__.m = modules;
 	__webpack_require__.c = installedModules;
 	__webpack_require__.d = function(exports, name, getter) {
 		if(!__webpack_require__.o(exports, name)) {
 			Object.defineProperty(exports, name, {
 				configurable: false,
 				enumerable: true,
 				get: getter
 			});
 		}
 	};
 	__webpack_require__.n = function(module) {
 		var getter = module && module.__esModule ?
 			function getDefault() { return module['default']; } :
 			function getModuleExports() { return module; };
 		__webpack_require__.d(getter, 'a', getter);
 		return getter;
 	};
 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
 	__webpack_require__.p = "/";
 	return __webpack_require__(__webpack_require__.s = 5);
 })
 ([
 (function(module, exports) {
eval("\n\n
 }),
 (function(module, exports) {
eval("var g;\r\n\r\n
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
eval("(function(global, setImmediate) {\n\n\n\n\nvar emptyObject = Object.freeze({});\n\n
 }),
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
eval("\n\n\n\n __webpack_require__.d(__webpack_exports__, \"b\", function() { return mapGetters; });\n\n\n\nvar applyMixin = function (Vue) {\n  var version = Number(Vue.version.split('.')[0]);\n\n  if (version >= 2) {\n    Vue.mixin({ beforeCreate: vuexInit });\n  } else {\n    
 }),
 (function(module, exports, __webpack_require__) {
eval("(function(global, module) {var __WEBPACK_AMD_DEFINE_RESULT__;\n;(function() {\n\n  \n  var undefined;\n\n  \n  var VERSION = '4.17.10';\n\n  \n  var LARGE_ARRAY_SIZE = 200;\n\n  \n  var CORE_ERROR_TEXT = 'Unsupported core-js use. Try https:
 }),
 (function(module, exports, __webpack_require__) {
__webpack_require__(6);
module.exports = __webpack_require__(39);
 }),
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);\n var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);\n var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(10);\n var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__(11);\n var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(31);\n var __WEBPACK_IMPORTED_MODULE_4_vue_snack__ = __webpack_require__(90);\n var __WEBPACK_IMPORTED_MODULE_4_vue_snack___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vue_snack__);\n var __WEBPACK_IMPORTED_MODULE_5__components_MainNav__ = __webpack_require__(36);\n var __WEBPACK_IMPORTED_MODULE_5__components_MainNav___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_MainNav__);\n\n\n\n\n\n\n\n\n\n__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router__[\"a\" ]);\nvar router = new __WEBPACK_IMPORTED_MODULE_1_vue_router__[\"a\" ]({ routes: __WEBPACK_IMPORTED_MODULE_2__routes__[\"a\" ] });\n\n__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_4_vue_snack___default.a, {\n  position: \"top\"\n});\n\n__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component(\"main-nav\", __WEBPACK_IMPORTED_MODULE_5__components_MainNav___default.a);\n\nnew __WEBPACK_IMPORTED_MODULE_0_vue___default.a({\n  router: router,\n  store: __WEBPACK_IMPORTED_MODULE_3__store__[\"a\" ],\n  template: \"\\n    <div class=\\\"fixed flex h-screen w-screen overflow-hidden select-none\\\">\\n        <main-nav></main-nav>\\n        <div class=\\\"relative w-full bg-grey-light\\\">\\n            <transition name=\\\"screen\\\">\\n                <router-view></router-view>\\n            </transition>\\n        </div>\\n    </div>\",\n  el: \"#getcontent\"\n});
 }),
 (function(module, exports, __webpack_require__) {
eval("(function(global) {var scope = (typeof global !== \"undefined\" && global) ||\n            (typeof self !== \"undefined\" && self) ||\n            window;\nvar apply = Function.prototype.apply;\n\n
 }),
 (function(module, exports, __webpack_require__) {
eval("(function(global, process) {(function (global, undefined) {\n    \"use strict\";\n\n    if (global.setImmediate) {\n        return;\n    }\n\n    var nextHandle = 1; 
 }),
 (function(module, exports) {
eval("
 }),
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
eval("\n\n\nfunction assert (condition, message) {\n  if (!condition) {\n    throw new Error((\"[vue-router] \" + message))\n  }\n}\n\nfunction warn (condition, message) {\n  if (\"development\" !== 'production' && !condition) {\n    typeof console !== 'undefined' && console.warn((\"[vue-router] \" + message));\n  }\n}\n\nfunction isError (err) {\n  return Object.prototype.toString.call(err).indexOf('Error') > -1\n}\n\nvar View = {\n  name: 'router-view',\n  functional: true,\n  props: {\n    name: {\n      type: String,\n      default: 'default'\n    }\n  },\n  render: function render (_, ref) {\n    var props = ref.props;\n    var children = ref.children;\n    var parent = ref.parent;\n    var data = ref.data;\n\n    data.routerView = true;\n\n    
 }),
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
eval(" var __WEBPACK_IMPORTED_MODULE_0__components_DocumentBrowser__ = __webpack_require__(12);\n var __WEBPACK_IMPORTED_MODULE_0__components_DocumentBrowser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_DocumentBrowser__);\n var __WEBPACK_IMPORTED_MODULE_1__components_DocumentBuilder__ = __webpack_require__(18);\n var __WEBPACK_IMPORTED_MODULE_1__components_DocumentBuilder___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_DocumentBuilder__);\n var __WEBPACK_IMPORTED_MODULE_2__components_Settings__ = __webpack_require__(28);\n var __WEBPACK_IMPORTED_MODULE_2__components_Settings___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Settings__);\n\n\n\n\n __webpack_exports__[\"a\"] = ([{ path: \"/\", redirect: \"/documents\" }, { path: \"/documents\", component: __WEBPACK_IMPORTED_MODULE_0__components_DocumentBrowser___default.a }, { path: \"/documents/new\", component: __WEBPACK_IMPORTED_MODULE_1__components_DocumentBuilder___default.a }, {\n  path: \"/documents/:uuid\",\n  component: __WEBPACK_IMPORTED_MODULE_1__components_DocumentBuilder___default.a,\n  props: true\n}, { path: \"/settings\", component: __WEBPACK_IMPORTED_MODULE_2__components_Settings___default.a }]);
 }),
 (function(module, exports, __webpack_require__) {
eval("var disposed = false\nvar normalizeComponent = __webpack_require__(0)\n\nvar __vue_script__ = __webpack_require__(13)\n\nvar __vue_template__ = __webpack_require__(17)\n\nvar __vue_template_functional__ = false\n\nvar __vue_styles__ = null\n\nvar __vue_scopeId__ = null\n\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __vue_script__,\n  __vue_template__,\n  __vue_template_functional__,\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"src/frontend/js/components/DocumentBrowser.vue\"\n\n\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-96a5af54\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-96a5af54\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\nmodule.exports = Component.exports\n
 }),
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(3);\n var __WEBPACK_IMPORTED_MODULE_1__DocumentIcon__ = __webpack_require__(14);\n var __WEBPACK_IMPORTED_MODULE_1__DocumentIcon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__DocumentIcon__);\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n
 }),
 (function(module, exports, __webpack_require__) {
eval("var disposed = false\nvar normalizeComponent = __webpack_require__(0)\n\nvar __vue_script__ = __webpack_require__(15)\n\nvar __vue_template__ = __webpack_require__(16)\n\nvar __vue_template_functional__ = false\n\nvar __vue_styles__ = null\n\nvar __vue_scopeId__ = null\n\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __vue_script__,\n  __vue_template__,\n  __vue_template_functional__,\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"src/frontend/js/components/DocumentIcon.vue\"\n\n\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-5a2a63bb\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-5a2a63bb\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\nmodule.exports = Component.exports\n
 }),
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n
 }),
 (function(module, exports, __webpack_require__) {
eval("var render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"group\" }, [\n    _c(\"span\", { staticClass: \"document mb-3\" }, [\n      _vm.document.status === \"draft\"\n        ? _c(\n            \"span\",\n            {\n              staticClass:\n                \"absolute pin-t bg-orange px-2 mt-2 rounded-full leading-normal text-white\"\n            },\n            [_vm._v(\"Draft\")]\n          )\n        : _vm._e(),\n      _vm._v(\" \"),\n      _c(\n        \"span\",\n        {\n          staticClass:\n            \"text-grey group-hover:text-blue flex-grow flex items-center\"\n        },\n        [\n          _vm.document.uuid\n            ? _c(\n                \"svg\",\n                {\n                  staticClass: \"h-12 fill-current\",\n                  attrs: {\n                    xmlns: \"http:
 }),
 (function(module, exports, __webpack_require__) {
eval("var render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"default-screen\" }, [\n    _c(\"p\", { staticClass: \"text-2xl mb-8 text-grey-darkest\" }, [\n      _vm._v(\"Documents\")\n    ]),\n    _vm._v(\" \"),\n    _c(\n      \"section\",\n      { staticClass: \"flex\" },\n      [\n        _c(\n          \"router-link\",\n          {\n            staticClass:\n              \"block mx-2 no-underline text-center text-grey-darker text-xs\",\n            attrs: { to: \"/documents/new\" }\n          },\n          [\n            _c(\"document-icon\", {\n              attrs: { document: { name: \"New Document\" } }\n            })\n          ],\n          1\n        ),\n        _vm._v(\" \"),\n        _vm._l(_vm.documents, function(document) {\n          return _c(\n            \"router-link\",\n            {\n              key: document.uuid,\n              staticClass:\n                \"block mx-2 no-underline text-center text-grey-darker text-xs\",\n              attrs: { to: \"/documents/\" + document.uuid }\n            },\n            [_c(\"document-icon\", { attrs: { document: document } })],\n            1\n          )\n        })\n      ],\n      2\n    )\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\nmodule.exports = { render: render, staticRenderFns: staticRenderFns }\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n    require(\"vue-hot-reload-api\")      .rerender(\"data-v-96a5af54\", module.exports)\n  }\n}
 }),
 (function(module, exports, __webpack_require__) {
eval("var disposed = false\nvar normalizeComponent = __webpack_require__(0)\n\nvar __vue_script__ = __webpack_require__(19)\n\nvar __vue_template__ = __webpack_require__(27)\n\nvar __vue_template_functional__ = false\n\nvar __vue_styles__ = null\n\nvar __vue_scopeId__ = null\n\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __vue_script__,\n  __vue_template__,\n  __vue_template_functional__,\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"src/frontend/js/components/DocumentBuilder.vue\"\n\n\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-f077096e\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-f077096e\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\nmodule.exports = Component.exports\n
 }),
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(4);\n var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);\n var __WEBPACK_IMPORTED_MODULE_1__fields_UnknownFieldComponent__ = __webpack_require__(21);\n var __WEBPACK_IMPORTED_MODULE_1__fields_UnknownFieldComponent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__fields_UnknownFieldComponent__);\n var __WEBPACK_IMPORTED_MODULE_2__fields_HtmlFieldComponent__ = __webpack_require__(24);\n var __WEBPACK_IMPORTED_MODULE_2__fields_HtmlFieldComponent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__fields_HtmlFieldComponent__);\n
 }),
 (function(module, exports) {
eval("module.exports = function(module) {\r\n\tif(!module.webpackPolyfill) {\r\n\t\tmodule.deprecate = function() {};\r\n\t\tmodule.paths = [];\r\n\t\t
 }),
 (function(module, exports, __webpack_require__) {
eval("var disposed = false\nvar normalizeComponent = __webpack_require__(0)\n\nvar __vue_script__ = __webpack_require__(22)\n\nvar __vue_template__ = __webpack_require__(23)\n\nvar __vue_template_functional__ = false\n\nvar __vue_styles__ = null\n\nvar __vue_scopeId__ = null\n\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __vue_script__,\n  __vue_template__,\n  __vue_template_functional__,\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"src/frontend/js/components/fields/UnknownFieldComponent.vue\"\n\n\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-f62ede04\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-f62ede04\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\nmodule.exports = Component.exports\n
 }),
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n
 }),
 (function(module, exports, __webpack_require__) {
eval("var render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"p-4 my-2 border-l-4 border-yellow bg-yellow-lightest\" },\n    [\n      _c(\n        \"p\",\n        { staticClass: \"uppercase text-xs tracking-wide text-yellow-darker\" },\n        [\n          _vm._v(\"\\n        Unknown Field\\n        \"),\n          _c(\"strong\", [_vm._v(_vm._s(_vm.field.type))])\n        ]\n      ),\n      _vm._v(\" \"),\n      _vm._l(_vm.field.model, function(value, key) {\n        return _c(\"label\", { staticClass: \"flex items-center p-2\" }, [\n          _c(\"strong\", { staticClass: \"w-1/5 text-right mr-4\" }, [\n            _vm._v(_vm._s(key))\n          ]),\n          _vm._v(\" \"),\n          _c(\"input\", {\n            directives: [\n              {\n                name: \"model\",\n                rawName: \"v-model\",\n                value: _vm.field.model[key],\n                expression: \"field.model[key]\"\n              }\n            ],\n            staticClass: \"flex-grow p-2 bg-yellow-lighter\",\n            attrs: { type: \"text\" },\n            domProps: { value: _vm.field.model[key] },\n            on: {\n              input: function($event) {\n                if ($event.target.composing) {\n                  return\n                }\n                _vm.$set(_vm.field.model, key, $event.target.value)\n              }\n            }\n          })\n        ])\n      })\n    ],\n    2\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\nmodule.exports = { render: render, staticRenderFns: staticRenderFns }\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n    require(\"vue-hot-reload-api\")      .rerender(\"data-v-f62ede04\", module.exports)\n  }\n}
 }),
 (function(module, exports, __webpack_require__) {
eval("var disposed = false\nvar normalizeComponent = __webpack_require__(0)\n\nvar __vue_script__ = __webpack_require__(25)\n\nvar __vue_template__ = __webpack_require__(26)\n\nvar __vue_template_functional__ = false\n\nvar __vue_styles__ = null\n\nvar __vue_scopeId__ = null\n\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __vue_script__,\n  __vue_template__,\n  __vue_template_functional__,\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"src/frontend/js/components/fields/HtmlFieldComponent.vue\"\n\n\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-2f5289e6\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-2f5289e6\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\nmodule.exports = Component.exports\n
 }),
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n var __WEBPACK_IMPORTED_MODULE_0_vue_quill_editor__ = __webpack_require__(44);\n var __WEBPACK_IMPORTED_MODULE_0_vue_quill_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_quill_editor__);\n
 }),
 (function(module, exports, __webpack_require__) {
eval("var render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"section\",\n    { staticClass: \"bg-white rounded p-3\" },\n    [\n      _c(\"quill-editor\", {\n        staticClass: \"select-text\",\n        attrs: { options: _vm.editorOption },\n        model: {\n          value: _vm.field.model,\n          callback: function($$v) {\n            _vm.$set(_vm.field, \"model\", $$v)\n          },\n          expression: \"field.model\"\n        }\n      })\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\nmodule.exports = { render: render, staticRenderFns: staticRenderFns }\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n    require(\"vue-hot-reload-api\")      .rerender(\"data-v-2f5289e6\", module.exports)\n  }\n}
 }),
 (function(module, exports, __webpack_require__) {
eval("var render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _vm.document\n    ? _c(\"div\", { staticClass: \"default-screen p-0\" }, [\n        _c(\n          \"nav\",\n          { staticClass: \"flex border-b items-center justify-between p-4\" },\n          [\n            _c(\"input\", {\n              directives: [\n                {\n                  name: \"model\",\n                  rawName: \"v-model\",\n                  value: _vm.document.name,\n                  expression: \"document.name\"\n                }\n              ],\n              staticClass:\n                \"text-2xl appearance-none bg-transparent leading-normal outline-none flex-grow\",\n              attrs: { placeholder: \"New Document\" },\n              domProps: { value: _vm.document.name },\n              on: {\n                input: function($event) {\n                  if ($event.target.composing) {\n                    return\n                  }\n                  _vm.$set(_vm.document, \"name\", $event.target.value)\n                }\n              }\n            }),\n            _vm._v(\" \"),\n            _c(\"section\", { staticClass: \"text-sm leading-none\" }, [\n              _c(\n                \"button\",\n                {\n                  staticClass:\n                    \"text-grey-dark hover:text-grey-darker no-underline mr-4\",\n                  on: { click: _vm.close }\n                },\n                [_vm._v(\"Close\\n      \")]\n              ),\n              _vm._v(\" \"),\n              _c(\n                \"button\",\n                {\n                  staticClass:\n                    \"bg-green hover:bg-green-dark text-white py-2 px-4 rounded-full no-underline font-bold\",\n                  on: { click: _vm.save }\n                },\n                [_vm._v(\"Save\\n      \")]\n              )\n            ])\n          ]\n        ),\n        _vm._v(\" \"),\n        _c(\n          \"article\",\n          { staticClass: \"p-6 max-w-xl mx-auto\" },\n          [\n            _vm._l(_vm.document.content.fields, function(field) {\n              return _c(\n                \"section\",\n                [\n                  _c(_vm.getFieldComponentName(field.type), {\n                    tag: \"component\",\n                    attrs: { field: field }\n                  })\n                ],\n                1\n              )\n            }),\n            _vm._v(\" \"),\n            _c(\"footer\", { staticClass: \"mt-6\" }, [\n              _c(\"button\", { staticClass: \"text-blue\" }, [\n                _c(\n                  \"svg\",\n                  {\n                    staticClass: \"h-10 fill-current\",\n                    attrs: {\n                      xmlns: \"http:
 }),
 (function(module, exports, __webpack_require__) {
eval("var disposed = false\nvar normalizeComponent = __webpack_require__(0)\n\nvar __vue_script__ = __webpack_require__(29)\n\nvar __vue_template__ = __webpack_require__(30)\n\nvar __vue_template_functional__ = false\n\nvar __vue_styles__ = null\n\nvar __vue_scopeId__ = null\n\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __vue_script__,\n  __vue_template__,\n  __vue_template_functional__,\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"src/frontend/js/components/Settings.vue\"\n\n\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-b1b638ac\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-b1b638ac\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\nmodule.exports = Component.exports\n
 }),
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n
 }),
 (function(module, exports, __webpack_require__) {
eval("var render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _vm._m(0)\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"default-screen\" }, [\n      _c(\"p\", { staticClass: \"text-2xl mb-8 text-grey-darkest\" }, [\n        _vm._v(\"Settings\")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\nmodule.exports = { render: render, staticRenderFns: staticRenderFns }\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n    require(\"vue-hot-reload-api\")      .rerender(\"data-v-b1b638ac\", module.exports)\n  }\n}
 }),
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
eval(" var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);\n var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);\n var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(3);\n var __WEBPACK_IMPORTED_MODULE_2__modules_Documents__ = __webpack_require__(32);\n\n\n\n\n\n__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__[\"a\" ]);\n\n __webpack_exports__[\"a\"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__[\"a\" ].Store({\n    modules: {\n        Documents: __WEBPACK_IMPORTED_MODULE_2__modules_Documents__[\"a\" ]\n    }\n}));
 }),
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
eval(" var __WEBPACK_IMPORTED_MODULE_0_uuid_v4__ = __webpack_require__(33);\n var __WEBPACK_IMPORTED_MODULE_0_uuid_v4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_uuid_v4__);\n var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(4);\n var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);\n var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(59);\n\n\n\n\n __webpack_exports__[\"a\"] = ({\n  namespaced: true,\n\n  state: {\n    all: [],\n    blankDocument: {\n      name: null,\n      group_id: null,\n      content: {\n        fields: [{ type: \"html\", model: \"\" }]\n      },\n      status: \"draft\",\n      template: null\n    }\n  },\n\n  getters: {\n    all: function all(state) {\n      return state.all;\n    },\n\n    blankDocument: function blankDocument(state) {\n      return function () {\n        return Object(__WEBPACK_IMPORTED_MODULE_1_lodash__[\"cloneDeep\"])(state.blankDocument);\n      };\n    },\n\n    byUuid: function byUuid(state) {\n      return function (uuid) {\n        return state.all.find(function (document) {\n          return document.uuid === uuid;\n        });\n      };\n    }\n  },\n\n  mutations: {\n    setAll: function setAll(state, documents) {\n      state.all = documents;\n    },\n    addDocument: function addDocument(state, document) {\n      state.all.push(document);\n    },\n    updateDocument: function updateDocument(state, _ref) {\n      var uuid = _ref.uuid,\n          document = _ref.document;\n\n      var documentIndex = state.all.findIndex(function (document) {\n        return document.uuid === uuid;\n      });\n\n      state.all[documentIndex] = document;\n    },\n    removeDocument: function removeDocument(state, uuid) {\n      state.all = Object(__WEBPACK_IMPORTED_MODULE_1_lodash__[\"remove\"])(state.all, function (document) {\n        return document.uuid === uuid;\n      });\n    }\n  },\n\n  actions: {\n    loadDocuments: function loadDocuments(_ref2) {\n      var commit = _ref2.commit;\n\n      return new Promise(function (resolve, reject) {\n        __WEBPACK_IMPORTED_MODULE_2__api__[\"a\" ].get(\"documents\").then(function (payload) {\n          resolve();\n          return commit(\"setAll\", payload.data.data);\n        }, reject);\n      });\n    },\n    saveDocument: function saveDocument(_ref3, document) {\n      var commit = _ref3.commit;\n\n      return new Promise(function (resolve, reject) {\n        if (document.id) {\n          return __WEBPACK_IMPORTED_MODULE_2__api__[\"a\" ].put(\"documents/\" + document.id, document).then(function (payload) {\n            resolve();\n            commit(\"updateDocument\", {\n              uuid: document.uuid,\n              document: payload.data.data\n            });\n          }, reject);\n        }\n\n        document.uuid = __WEBPACK_IMPORTED_MODULE_0_uuid_v4___default()();\n        return __WEBPACK_IMPORTED_MODULE_2__api__[\"a\" ].post(\"documents\", document).then(function (payload) {\n          resolve();\n          commit(\"addDocument\", payload.data.data);\n        }, reject);\n      });\n    },\n    deleteDocument: function deleteDocument(_ref4, document) {\n      var commit = _ref4.commit;\n\n      return new Promise(function (resolve, reject) {\n        return __WEBPACK_IMPORTED_MODULE_2__api__[\"a\" ].delete(\"documents/\" + document.id, document).then(function (payload) {\n          resolve();\n          commit(\"removeDocument\", { uuid: document.uuid });\n        }, reject);\n      });\n    }\n  }\n});
 }),
 (function(module, exports, __webpack_require__) {
eval("var rng = __webpack_require__(34);\nvar bytesToUuid = __webpack_require__(35);\n\nfunction v4(options, buf, offset) {\n  var i = buf && offset || 0;\n\n  if (typeof(options) == 'string') {\n    buf = options === 'binary' ? new Array(16) : null;\n    options = null;\n  }\n  options = options || {};\n\n  var rnds = options.random || (options.rng || rng)();\n\n  
 }),
 (function(module, exports) {
eval("
 }),
 (function(module, exports) {
eval("\nvar byteToHex = [];\nfor (var i = 0; i < 256; ++i) {\n  byteToHex[i] = (i + 0x100).toString(16).substr(1);\n}\n\nfunction bytesToUuid(buf, offset) {\n  var i = offset || 0;\n  var bth = byteToHex;\n  
 }),
 (function(module, exports, __webpack_require__) {
eval("var disposed = false\nvar normalizeComponent = __webpack_require__(0)\n\nvar __vue_script__ = __webpack_require__(37)\n\nvar __vue_template__ = __webpack_require__(38)\n\nvar __vue_template_functional__ = false\n\nvar __vue_styles__ = null\n\nvar __vue_scopeId__ = null\n\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __vue_script__,\n  __vue_template__,\n  __vue_template_functional__,\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"src/frontend/js/components/MainNav.vue\"\n\n\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-ab79ac1a\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-ab79ac1a\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\nmodule.exports = Component.exports\n
 }),
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n
 }),
 (function(module, exports, __webpack_require__) {
eval("var render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"nav\",\n    { staticClass: \"bg-grey-lighter w-24 p-4 text-xs text-center\" },\n    [\n      _c(\n        \"router-link\",\n        {\n          staticClass: \"main-nav-link\",\n          attrs: { to: \"/documents\", \"active-class\": \"text-black\" }\n        },\n        [\n          _c(\n            \"svg\",\n            {\n              staticClass: \"fill-current h-12\",\n              attrs: {\n                xmlns: \"http:
 }),
 (function(module, exports) {
eval("
 }),
,
,
,
,
 (function(module, exports, __webpack_require__) {
eval("!function(t,e){ true?module.exports=e(__webpack_require__(45)):\"function\"==typeof define&&define.amd?define([\"quill\"],e):\"object\"==typeof exports?exports.VueQuillEditor=e(require(\"quill\")):t.VueQuillEditor=e(t.Quill)}(this,function(t){return function(t){function e(i){if(n[i])return n[i].exports;var l=n[i]={i:i,l:!1,exports:{}};return t[i].call(l.exports,l,l.exports,e),l.l=!0,l.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,\"a\",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p=\"/\",e(e.s=2)}([function(e,n){e.exports=t},function(t,e,n){\"use strict\";Object.defineProperty(e,\"__esModule\",{value:!0});var i=n(4),l=n.n(i),o=n(6),r=n(5),u=r(l.a,o.a,!1,null,null,null);e.default=u.exports},function(t,e,n){\"use strict\";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,\"__esModule\",{value:!0}),e.install=e.quillEditor=e.Quill=void 0;var l=n(0),o=i(l),r=n(1),u=i(r),s=window.Quill||o.default,a=function(t,e){e&&(u.default.props.globalOptions.default=function(){return e}),t.component(u.default.name,u.default)},c={Quill:s,quillEditor:u.default,install:a};e.default=c,e.Quill=s,e.quillEditor=u.default,e.install=a},function(t,e,n){\"use strict\";Object.defineProperty(e,\"__esModule\",{value:!0}),e.default={theme:\"snow\",boundary:document.body,modules:{toolbar:[[\"bold\",\"italic\",\"underline\",\"strike\"],[\"blockquote\",\"code-block\"],[{header:1},{header:2}],[{list:\"ordered\"},{list:\"bullet\"}],[{script:\"sub\"},{script:\"super\"}],[{indent:\"-1\"},{indent:\"+1\"}],[{direction:\"rtl\"}],[{size:[\"small\",!1,\"large\",\"huge\"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],[\"clean\"],[\"link\",\"image\",\"video\"]]},placeholder:\"Insert text here ...\",readOnly:!1}},function(t,e,n){\"use strict\";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,\"__esModule\",{value:!0});var l=n(0),o=i(l),r=n(3),u=i(r),s=window.Quill||o.default;\"function\"!=typeof Object.assign&&Object.defineProperty(Object,\"assign\",{value:function(t,e){if(null==t)throw new TypeError(\"Cannot convert undefined or null to object\");for(var n=Object(t),i=1;i<arguments.length;i++){var l=arguments[i];if(null!=l)for(var o in l)Object.prototype.hasOwnProperty.call(l,o)&&(n[o]=l[o])}return n},writable:!0,configurable:!0}),e.default={name:\"quill-editor\",data:function(){return{_options:{},_content:\"\",defaultOptions:u.default}},props:{content:String,value:String,disabled:{type:Boolean,default:!1},options:{type:Object,required:!1,default:function(){return{}}},globalOptions:{type:Object,required:!1,default:function(){return{}}}},mounted:function(){this.initialize()},beforeDestroy:function(){this.quill=null,delete this.quill},methods:{initialize:function(){var t=this;this.$el&&(this._options=Object.assign({},this.defaultOptions,this.globalOptions,this.options),this.quill=new s(this.$refs.editor,this._options),this.quill.enable(!1),(this.value||this.content)&&this.quill.pasteHTML(this.value||this.content),this.disabled||this.quill.enable(!0),this.quill.on(\"selection-change\",function(e){e?t.$emit(\"focus\",t.quill):t.$emit(\"blur\",t.quill)}),this.quill.on(\"text-change\",function(e,n,i){var l=t.$refs.editor.children[0].innerHTML,o=t.quill,r=t.quill.getText();\"<p><br></p>\"===l&&(l=\"\"),t._content=l,t.$emit(\"input\",t._content),t.$emit(\"change\",{html:l,text:r,quill:o})}),this.$emit(\"ready\",this.quill))}},watch:{content:function(t,e){this.quill&&(t&&t!==this._content?(this._content=t,this.quill.pasteHTML(t)):t||this.quill.setText(\"\"))},value:function(t,e){this.quill&&(t&&t!==this._content?(this._content=t,this.quill.pasteHTML(t)):t||this.quill.setText(\"\"))},disabled:function(t,e){this.quill&&this.quill.enable(!t)}}}},function(t,e){t.exports=function(t,e,n,i,l,o){var r,u=t=t||{},s=typeof t.default;\"object\"!==s&&\"function\"!==s||(r=t,u=t.default);var a=\"function\"==typeof u?u.options:u;e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns,a._compiled=!0),n&&(a.functional=!0),l&&(a._scopeId=l);var c;if(o?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||\"undefined\"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},a._ssrRegister=c):i&&(c=i),c){var d=a.functional,f=d?a.render:a.beforeCreate;d?(a._injectStyles=c,a.render=function(t,e){return c.call(e),f(t,e)}):a.beforeCreate=f?[].concat(f,c):[c]}return{esModule:r,exports:u,options:a}}},function(t,e,n){\"use strict\";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(\"div\",{staticClass:\"quill-editor\"},[t._t(\"toolbar\"),t._v(\" \"),n(\"div\",{ref:\"editor\"})],2)},l=[],o={render:i,staticRenderFns:l};e.a=o}])});
 }),
 (function(module, exports, __webpack_require__) {
eval("(function(Buffer) {\n(function webpackUniversalModuleDefinition(root, factory) {\n\tif(true)\n\t\tmodule.exports = factory();\n\telse if(typeof define === 'function' && define.amd)\n\t\tdefine([], factory);\n\telse if(typeof exports === 'object')\n\t\texports[\"Quill\"] = factory();\n\telse\n\t\troot[\"Quill\"] = factory();\n})(typeof self !== 'undefined' ? self : this, function() {\nreturn  (function(modules) { 
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
eval("(function(global) {\n\n\n\n\nvar base64 = __webpack_require__(47)\nvar ieee754 = __webpack_require__(48)\nvar isArray = __webpack_require__(49)\n\nexports.Buffer = Buffer\nexports.SlowBuffer = SlowBuffer\nexports.INSPECT_MAX_BYTES = 50\n\n\nBuffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined\n  ? global.TYPED_ARRAY_SUPPORT\n  : typedArraySupport()\n\n\nexports.kMaxLength = kMaxLength()\n\nfunction typedArraySupport () {\n  try {\n    var arr = new Uint8Array(1)\n    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}\n    return arr.foo() === 42 && 
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
eval("\n\nexports.byteLength = byteLength\nexports.toByteArray = toByteArray\nexports.fromByteArray = fromByteArray\n\nvar lookup = []\nvar revLookup = []\nvar Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array\n\nvar code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'\nfor (var i = 0, len = code.length; i < len; ++i) {\n  lookup[i] = code[i]\n  revLookup[code.charCodeAt(i)] = i\n}\n\n
 }),
 (function(module, exports) {
eval("exports.read = function (buffer, offset, isLE, mLen, nBytes) {\n  var e, m\n  var eLen = (nBytes * 8) - mLen - 1\n  var eMax = (1 << eLen) - 1\n  var eBias = eMax >> 1\n  var nBits = -7\n  var i = isLE ? (nBytes - 1) : 0\n  var d = isLE ? -1 : 1\n  var s = buffer[offset + i]\n\n  i += d\n\n  e = s & ((1 << (-nBits)) - 1)\n  s >>= (-nBits)\n  nBits += eLen\n  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}\n\n  m = e & ((1 << (-nBits)) - 1)\n  e >>= (-nBits)\n  nBits += mLen\n  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}\n\n  if (e === 0) {\n    e = 1 - eBias\n  } else if (e === eMax) {\n    return m ? NaN : ((s ? -1 : 1) * Infinity)\n  } else {\n    m = m + Math.pow(2, mLen)\n    e = e - eBias\n  }\n  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)\n}\n\nexports.write = function (buffer, value, offset, isLE, mLen, nBytes) {\n  var e, m, c\n  var eLen = (nBytes * 8) - mLen - 1\n  var eMax = (1 << eLen) - 1\n  var eBias = eMax >> 1\n  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)\n  var i = isLE ? 0 : (nBytes - 1)\n  var d = isLE ? 1 : -1\n  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0\n\n  value = Math.abs(value)\n\n  if (isNaN(value) || value === Infinity) {\n    m = isNaN(value) ? 1 : 0\n    e = eMax\n  } else {\n    e = Math.floor(Math.log(value) / Math.LN2)\n    if (value * (c = Math.pow(2, -e)) < 1) {\n      e--\n      c *= 2\n    }\n    if (e + eBias >= 1) {\n      value += rt / c\n    } else {\n      value += rt * Math.pow(2, 1 - eBias)\n    }\n    if (value * c >= 2) {\n      e++\n      c /= 2\n    }\n\n    if (e + eBias >= eMax) {\n      m = 0\n      e = eMax\n    } else if (e + eBias >= 1) {\n      m = ((value * c) - 1) * Math.pow(2, mLen)\n      e = e + eBias\n    } else {\n      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)\n      e = 0\n    }\n  }\n\n  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}\n\n  e = (e << mLen) | m\n  eLen += mLen\n  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}\n\n  buffer[offset + i - d] |= s * 128\n}\n
 }),
 (function(module, exports) {
eval("var toString = {}.toString;\n\nmodule.exports = Array.isArray || function (arr) {\n  return toString.call(arr) == '[object Array]';\n};\n
 }),
,
,
 (function(module, exports, __webpack_require__) {
"use strict";
eval("\n\nvar bind = __webpack_require__(54);\nvar isBuffer = __webpack_require__(62);\n\n\n\n
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
eval("(function(process) {\n\nvar utils = __webpack_require__(52);\nvar normalizeHeaderName = __webpack_require__(64);\n\nvar DEFAULT_CONTENT_TYPE = {\n  'Content-Type': 'application/x-www-form-urlencoded'\n};\n\nfunction setContentTypeIfUnset(headers, value) {\n  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {\n    headers['Content-Type'] = value;\n  }\n}\n\nfunction getDefaultAdapter() {\n  var adapter;\n  if (typeof XMLHttpRequest !== 'undefined') {\n    
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
eval("\n\nmodule.exports = function bind(fn, thisArg) {\n  return function wrap() {\n    var args = new Array(arguments.length);\n    for (var i = 0; i < args.length; i++) {\n      args[i] = arguments[i];\n    }\n    return fn.apply(thisArg, args);\n  };\n};\n
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
eval("\n\nvar utils = __webpack_require__(52);\nvar settle = __webpack_require__(65);\nvar buildURL = __webpack_require__(67);\nvar parseHeaders = __webpack_require__(68);\nvar isURLSameOrigin = __webpack_require__(69);\nvar createError = __webpack_require__(56);\nvar btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(70);\n\nmodule.exports = function xhrAdapter(config) {\n  return new Promise(function dispatchXhrRequest(resolve, reject) {\n    var requestData = config.data;\n    var requestHeaders = config.headers;\n\n    if (utils.isFormData(requestData)) {\n      delete requestHeaders['Content-Type']; 
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
eval("\n\nvar enhanceError = __webpack_require__(66);\n\n\nmodule.exports = function createError(message, config, code, request, response) {\n  var error = new Error(message);\n  return enhanceError(error, config, code, request, response);\n};\n
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
eval("\n\nmodule.exports = function isCancel(value) {\n  return !!(value && value.__CANCEL__);\n};\n
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
eval("\n\n\nfunction Cancel(message) {\n  this.message = message;\n}\n\nCancel.prototype.toString = function toString() {\n  return 'Cancel' + (this.message ? ': ' + this.message : '');\n};\n\nCancel.prototype.__CANCEL__ = true;\n\nmodule.exports = Cancel;\n
 }),
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
eval(" var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(60);\n var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n\n\nvar api = __WEBPACK_IMPORTED_MODULE_0_axios___default.a.create();\napi.defaults.baseURL = '/api/';\n\nvar token = window.config.api_token;\n\nif (token) {\n  api.defaults.headers.common[\"Authorization\"] = \"Bearer \" + token;\n}\n\n __webpack_exports__[\"a\"] = (api);
 }),
 (function(module, exports, __webpack_require__) {
eval("module.exports = __webpack_require__(61);
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
eval("\n\nvar utils = __webpack_require__(52);\nvar bind = __webpack_require__(54);\nvar Axios = __webpack_require__(63);\nvar defaults = __webpack_require__(53);\n\n\nfunction createInstance(defaultConfig) {\n  var context = new Axios(defaultConfig);\n  var instance = bind(Axios.prototype.request, context);\n\n  
 }),
 (function(module, exports) {
eval("\n\n
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
eval("\n\nvar defaults = __webpack_require__(53);\nvar utils = __webpack_require__(52);\nvar InterceptorManager = __webpack_require__(72);\nvar dispatchRequest = __webpack_require__(73);\n\n\nfunction Axios(instanceConfig) {\n  this.defaults = instanceConfig;\n  this.interceptors = {\n    request: new InterceptorManager(),\n    response: new InterceptorManager()\n  };\n}\n\n\nAxios.prototype.request = function request(config) {\n  \n  
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
eval("\n\nvar utils = __webpack_require__(52);\n\nmodule.exports = function normalizeHeaderName(headers, normalizedName) {\n  utils.forEach(headers, function processHeader(value, name) {\n    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {\n      headers[normalizedName] = value;\n      delete headers[name];\n    }\n  });\n};\n
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
eval("\n\nvar createError = __webpack_require__(56);\n\n\nmodule.exports = function settle(resolve, reject, response) {\n  var validateStatus = response.config.validateStatus;\n  
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
eval("\n\n\nmodule.exports = function enhanceError(error, config, code, request, response) {\n  error.config = config;\n  if (code) {\n    error.code = code;\n  }\n  error.request = request;\n  error.response = response;\n  return error;\n};\n
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
eval("\n\nvar utils = __webpack_require__(52);\n\nfunction encode(val) {\n  return encodeURIComponent(val).\n    replace(/%40/gi, '@').\n    replace(/%3A/gi, ':').\n    replace(/%24/g, '$').\n    replace(/%2C/gi, ',').\n    replace(/%20/g, '+').\n    replace(/%5B/gi, '[').\n    replace(/%5D/gi, ']');\n}\n\n\nmodule.exports = function buildURL(url, params, paramsSerializer) {\n  \n  if (!params) {\n    return url;\n  }\n\n  var serializedParams;\n  if (paramsSerializer) {\n    serializedParams = paramsSerializer(params);\n  } else if (utils.isURLSearchParams(params)) {\n    serializedParams = params.toString();\n  } else {\n    var parts = [];\n\n    utils.forEach(params, function serialize(val, key) {\n      if (val === null || typeof val === 'undefined') {\n        return;\n      }\n\n      if (utils.isArray(val)) {\n        key = key + '[]';\n      } else {\n        val = [val];\n      }\n\n      utils.forEach(val, function parseValue(v) {\n        if (utils.isDate(v)) {\n          v = v.toISOString();\n        } else if (utils.isObject(v)) {\n          v = JSON.stringify(v);\n        }\n        parts.push(encode(key) + '=' + encode(v));\n      });\n    });\n\n    serializedParams = parts.join('&');\n  }\n\n  if (serializedParams) {\n    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;\n  }\n\n  return url;\n};\n
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
eval("\n\nvar utils = __webpack_require__(52);\n\n
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
eval("\n\nvar utils = __webpack_require__(52);\n\nmodule.exports = (\n  utils.isStandardBrowserEnv() ?\n\n  
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
eval("\n\n
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
eval("\n\nvar utils = __webpack_require__(52);\n\nmodule.exports = (\n  utils.isStandardBrowserEnv() ?\n\n  
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
eval("\n\nvar utils = __webpack_require__(52);\n\nfunction InterceptorManager() {\n  this.handlers = [];\n}\n\n\nInterceptorManager.prototype.use = function use(fulfilled, rejected) {\n  this.handlers.push({\n    fulfilled: fulfilled,\n    rejected: rejected\n  });\n  return this.handlers.length - 1;\n};\n\n\nInterceptorManager.prototype.eject = function eject(id) {\n  if (this.handlers[id]) {\n    this.handlers[id] = null;\n  }\n};\n\n\nInterceptorManager.prototype.forEach = function forEach(fn) {\n  utils.forEach(this.handlers, function forEachHandler(h) {\n    if (h !== null) {\n      fn(h);\n    }\n  });\n};\n\nmodule.exports = InterceptorManager;\n
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
eval("\n\nvar utils = __webpack_require__(52);\nvar transformData = __webpack_require__(74);\nvar isCancel = __webpack_require__(57);\nvar defaults = __webpack_require__(53);\nvar isAbsoluteURL = __webpack_require__(75);\nvar combineURLs = __webpack_require__(76);\n\n\nfunction throwIfCancellationRequested(config) {\n  if (config.cancelToken) {\n    config.cancelToken.throwIfRequested();\n  }\n}\n\n\nmodule.exports = function dispatchRequest(config) {\n  throwIfCancellationRequested(config);\n\n  
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
eval("\n\nvar utils = __webpack_require__(52);\n\n\nmodule.exports = function transformData(data, headers, fns) {\n  \n  utils.forEach(fns, function transform(fn) {\n    data = fn(data, headers);\n  });\n\n  return data;\n};\n
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
eval("\n\n\nmodule.exports = function isAbsoluteURL(url) {\n  
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
eval("\n\n\nmodule.exports = function combineURLs(baseURL, relativeURL) {\n  return relativeURL\n    ? baseURL.replace(/\\/+$/, '') + '/' + relativeURL.replace(/^\\/+/, '')\n    : baseURL;\n};\n
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
eval("\n\nvar Cancel = __webpack_require__(58);\n\n\nfunction CancelToken(executor) {\n  if (typeof executor !== 'function') {\n    throw new TypeError('executor must be a function.');\n  }\n\n  var resolvePromise;\n  this.promise = new Promise(function promiseExecutor(resolve) {\n    resolvePromise = resolve;\n  });\n\n  var token = this;\n  executor(function cancel(message) {\n    if (token.reason) {\n      
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
eval("\n\n\nmodule.exports = function spread(callback) {\n  return function wrap(arr) {\n    return callback.apply(null, arr);\n  };\n};\n
 }),
,
,
,
,
,
,
,
,
,
,
,
 (function(module, exports, __webpack_require__) {
eval("(function(global) {!function(t,n){ true?module.exports=n():\"function\"==typeof define&&define.amd?define(n):t.VueSnackPlugin=n()}(this,function(){\"use strict\";var t={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e(\"transition\",{attrs:{name:\"snack\"}},[t.active?e(\"div\",{staticClass:\"snackbar\",class:t.config.position,style:t.styles},[e(\"div\",{staticClass:\"snackbar__text\"},[t._v(t._s(t.text))]),t._v(\" \"),t.button?[e(\"div\",{staticClass:\"snackbar__action\",on:{click:function(n){return n.preventDefault(),t.action(n)}}},[t._v(t._s(t.button))])]:t._e(),t._v(\" \"),t.config.close?[e(\"div\",{staticClass:\"times\",on:{click:function(n){t.$emit(\"close\")}}},[e(\"svg\",{attrs:{xmlns:\"http:
 })
 ]);
