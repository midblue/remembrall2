exports.ids = [13];
exports.modules = {

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ImageLoader.vue?vue&type=template&id=2f1aa15a&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return !_vm.hide ? _c('div', {
    key: _vm.url
  }, [_vm._ssrNode(!_vm.loaded ? "<svg width=\"105\" height=\"105\" viewBox=\"0 0 105 105\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"#333\" data-v-2f1aa15a><circle cx=\"12.5\" cy=\"12.5\" r=\"12.5\" data-v-2f1aa15a><animate attributeName=\"fill-opacity\" begin=\"0s\" dur=\"1s\" values=\"1;.2;1\" calcMode=\"linear\" repeatCount=\"indefinite\" data-v-2f1aa15a></animate></circle> <circle cx=\"12.5\" cy=\"52.5\" r=\"12.5\" fill-opacity=\"0.5\" data-v-2f1aa15a><animate attributeName=\"fill-opacity\" begin=\"100ms\" dur=\"1s\" values=\"1;.2;1\" calcMode=\"linear\" repeatCount=\"indefinite\" data-v-2f1aa15a></animate></circle> <circle cx=\"52.5\" cy=\"12.5\" r=\"12.5\" data-v-2f1aa15a><animate attributeName=\"fill-opacity\" begin=\"300ms\" dur=\"1s\" values=\"1;.2;1\" calcMode=\"linear\" repeatCount=\"indefinite\" data-v-2f1aa15a></animate></circle> <circle cx=\"52.5\" cy=\"52.5\" r=\"12.5\" data-v-2f1aa15a><animate attributeName=\"fill-opacity\" begin=\"600ms\" dur=\"1s\" values=\"1;.2;1\" calcMode=\"linear\" repeatCount=\"indefinite\" data-v-2f1aa15a></animate></circle> <circle cx=\"92.5\" cy=\"12.5\" r=\"12.5\" data-v-2f1aa15a><animate attributeName=\"fill-opacity\" begin=\"800ms\" dur=\"1s\" values=\"1;.2;1\" calcMode=\"linear\" repeatCount=\"indefinite\" data-v-2f1aa15a></animate></circle> <circle cx=\"92.5\" cy=\"52.5\" r=\"12.5\" data-v-2f1aa15a><animate attributeName=\"fill-opacity\" begin=\"400ms\" dur=\"1s\" values=\"1;.2;1\" calcMode=\"linear\" repeatCount=\"indefinite\" data-v-2f1aa15a></animate></circle> <circle cx=\"12.5\" cy=\"92.5\" r=\"12.5\" data-v-2f1aa15a><animate attributeName=\"fill-opacity\" begin=\"700ms\" dur=\"1s\" values=\"1;.2;1\" calcMode=\"linear\" repeatCount=\"indefinite\" data-v-2f1aa15a></animate></circle> <circle cx=\"52.5\" cy=\"92.5\" r=\"12.5\" data-v-2f1aa15a><animate attributeName=\"fill-opacity\" begin=\"500ms\" dur=\"1s\" values=\"1;.2;1\" calcMode=\"linear\" repeatCount=\"indefinite\" data-v-2f1aa15a></animate></circle> <circle cx=\"92.5\" cy=\"92.5\" r=\"12.5\" data-v-2f1aa15a><animate attributeName=\"fill-opacity\" begin=\"200ms\" dur=\"1s\" values=\"1;.2;1\" calcMode=\"linear\" repeatCount=\"indefinite\" data-v-2f1aa15a></animate></circle></svg>" : "<img" + _vm._ssrAttr("src", _vm.url) + " data-v-2f1aa15a>")]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ImageLoader.vue?vue&type=template&id=2f1aa15a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ImageLoader.vue?vue&type=script&lang=js&
/* harmony default export */ var ImageLoadervue_type_script_lang_js_ = ({
  props: {
    url: {
      required: true
    }
  },
  data() {
    return {
      loaded: false,
      hide: false
    };
  },
  watch: {
    url(newURL) {
      this.loaded = false;
      this.loadImg(newURL);
    }
  },
  mounted() {
    this.loadImg(this.url);
  },
  methods: {
    loadImg(url) {
      this.hide = false;
      const img = new Image();
      img.onload = () => {
        this.loaded = true;
      };
      img.onerror = () => {
        if (url === 'loading') return;
        console.log('Failed to load card image:', url);
        this.hide = true;
        this.$emit('failed');
      };
      if (url !== 'loading') {
        img.src = url;
      }
    }
  }
});
// CONCATENATED MODULE: ./components/ImageLoader.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ImageLoadervue_type_script_lang_js_ = (ImageLoadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/ImageLoader.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(61)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ImageLoadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2f1aa15a",
  "6602b86c"
  
)

/* harmony default export */ var ImageLoader = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(62);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("432cb003", content, true, context)
};

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageLoader_vue_vue_type_style_index_0_id_2f1aa15a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageLoader_vue_vue_type_style_index_0_id_2f1aa15a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageLoader_vue_vue_type_style_index_0_id_2f1aa15a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageLoader_vue_vue_type_style_index_0_id_2f1aa15a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageLoader_vue_vue_type_style_index_0_id_2f1aa15a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "svg[data-v-2f1aa15a]{opacity:.3;width:30px!important}img[data-v-2f1aa15a]{margin:0 auto;max-height:250px;max-width:90%;padding-bottom:10px;transition:all .5s}@media(max-width:768px){img[data-v-2f1aa15a]{max-height:200px;padding-bottom:5px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=image-loader.js.map