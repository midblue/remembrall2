exports.ids = [6];
exports.modules = {

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(147);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("7fabddae", content, true, context)
};

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardEditor_vue_vue_type_style_index_0_id_03273262_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(144);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardEditor_vue_vue_type_style_index_0_id_03273262_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardEditor_vue_vue_type_style_index_0_id_03273262_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardEditor_vue_vue_type_style_index_0_id_03273262_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardEditor_vue_vue_type_style_index_0_id_03273262_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".cardeditor[data-v-03273262]{margin:50px auto;opacity:.3;transition:all .5s}.cardeditor.focus[data-v-03273262]{opacity:1}.cardeditor>*[data-v-03273262]{display:block}.cardeditor textarea[data-v-03273262]{font-size:1rem;height:100px;width:100%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CardEditor.vue?vue&type=template&id=03273262&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "cardeditor",
    class: {
      focus: _vm.isFocused
    }
  }, [_vm._ssrNode("<h4 data-v-03273262>Edit Card</h4> <textarea placeholder=\"front\" data-v-03273262>" + _vm._ssrEscape(_vm._s(_vm.newFront)) + "</textarea> <textarea placeholder=\"back\" data-v-03273262>" + _vm._ssrEscape(_vm._s(_vm.newBack)) + "</textarea> <button data-v-03273262>Done</button>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CardEditor.vue?vue&type=template&id=03273262&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CardEditor.vue?vue&type=script&lang=js&
/* harmony default export */ var CardEditorvue_type_script_lang_js_ = ({
  props: {
    front: {},
    back: {},
    id: {}
  },
  data() {
    return {
      newFront: '',
      newBack: '',
      metaDown: false
    };
  },
  computed: {
    isFocused() {
      return this.$store.state.appState === 'editCard';
    },
    cardToEdit() {
      return this.$store.state.editingCard;
    }
  },
  mounted() {
    window.addEventListener('keydown', this.keyDown);
    window.addEventListener('keyup', this.keyUp);
    if (!this.cardToEdit) return;
    this.newFront = this.cardToEdit.front;
    this.newBack = this.cardToEdit.back;
    this.$refs.front.focus();
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.keyDown);
    window.removeEventListener('keyup', this.keyUp);
    this.$store.commit('cardToEditId');
    this.$store.commit('setAppState', 'study');
  },
  watch: {
    id() {
      this.newFront = this.cardToEdit.front;
      this.newBack = this.cardToEdit.back;
      this.$refs.front.focus();
    }
  },
  methods: {
    commitEdit() {
      const front = this.newFront.replace(/^[\s\n]*/g, '').replace(/[\s\n]*$/g, '');
      const back = this.newBack.replace(/^[\s\n]*/g, '').replace(/[\s\n]*$/g, '');
      this.$store.commit('updateCard', {
        id: this.id,
        front,
        back
      });
      this.$store.commit('cardToEditId');
      this.$store.commit('setAppState', 'study');
    },
    focus(e) {
      this.$store.commit('setAppState', 'editCard');
    },
    blur(e) {
      this.$store.commit('cardToEditId');
      this.$store.commit('setAppState', 'study');
    },
    keyDown(event) {
      if (!this.isFocused) return;
      if (event.key === 'Meta') this.metaDown = true;
      if (event.key === 'Enter' && this.metaDown) this.commitEdit();
    },
    keyUp(event) {
      if (!this.isFocused) return;
      if (event.key === 'Meta') this.metaDown = false;
    }
  }
});
// CONCATENATED MODULE: ./components/CardEditor.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CardEditorvue_type_script_lang_js_ = (CardEditorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/CardEditor.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(146)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CardEditorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "03273262",
  "3fcdf951"
  
)

/* harmony default export */ var CardEditor = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=card-editor.js.map