exports.ids = [26];
exports.modules = {

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(135);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("5b06a2bc", content, true, context)
};

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/UserAndSetPicker.vue?vue&type=template&id=6c9389a0&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "userandsetpicker",
    class: {
      fullscreen: !_vm.currentUser || _vm.isLoading,
      vertical: !_vm.currentUser
    }
  }, [_vm._ssrNode("<input type=\"file\" accept=\".json\" style=\"display: none\" data-v-6c9389a0> " + (!_vm.currentUser && !_vm.isLoading ? "<h1 data-v-6c9389a0><b data-v-6c9389a0>Enter your username.</b></h1> <div data-v-6c9389a0><input autocorrect=\"off\" autocapitalize=\"off\" placeholder=\"username\"" + _vm._ssrAttr("value", _vm.inputUsername) + " class=\"username\" data-v-6c9389a0></div> <div data-v-6c9389a0><button class=\"loginbutton\" data-v-6c9389a0>Go</button></div>" : _vm.isLoading ? "<div class=\"sub\" data-v-6c9389a0>Loading...</div>" : (!_vm.isMobile ? "<div class=\"buttonlist fullheight inlineblock\" data-v-6c9389a0>" + _vm._ssrList(_vm.setList, function (set) {
    return "<button" + _vm._ssrClass(null, {
      active: _vm.currentSetId === set.id && _vm.appState !== 'user'
      // duecards: dueReviews[set.id] > 0,
    }) + " data-v-6c9389a0>" + _vm._ssrEscape("\n        " + _vm._s(set.name) + "\n        ") + (!_vm.isMobile && _vm.dueReviews[set.id] > 0 && _vm.currentSetId !== set.id || _vm.appState === 'user' ? "<span class=\"sub\" data-v-6c9389a0>" + _vm._ssrEscape("\n          (" + _vm._s(_vm.dueReviews[set.id]) + ")\n        ") + "</span>" : "<!---->") + "</button>";
  }) + " <button data-v-6c9389a0>Upload Set</button> <button data-v-6c9389a0>Add Set</button></div>" : "<div class=\"buttonlist fullheight\" data-v-6c9389a0>" + (_vm.appState === 'user' ? "<button class=\"mainbutton\" data-v-6c9389a0>\n        ← Back to Studying\n      </button>" : !_vm.setList[_vm.currentSetId] ? "<button data-v-6c9389a0>\n        + Add Set\n      </button>" : "<button" + _vm._ssrClass("mainbutton", {
    open: _vm.setPickerOpen
  }) + " style=\"position: relative\" data-v-6c9389a0>" + _vm._ssrEscape("\n        " + _vm._s(_vm.setList[_vm.currentSetId].name) + " ▾\n        ") + (_vm.setPickerOpen ? "<div class=\"secondarypanel\" data-v-6c9389a0>" + _vm._ssrList(_vm.setListWithoutCurrentSet, function (set) {
    return "<button" + _vm._ssrClass(null, {
      duecards: _vm.dueReviews[set.id] > 0
    }) + " data-v-6c9389a0>" + _vm._ssrEscape("\n            " + _vm._s(set.name) + "\n          ") + "</button>";
  }) + " <button data-v-6c9389a0>Upload Set</button> <button data-v-6c9389a0>+ Add Set</button></div>" : "<!---->") + "</button>") + "</div>") + " <div class=\"flex-ai\" data-v-6c9389a0><div class=\"buttonlist fullheight inlineblock\" data-v-6c9389a0><button" + _vm._ssrClass(null, {
    active: _vm.appState === 'user'
  }) + " data-v-6c9389a0>" + _vm._ssrEscape("\n          " + _vm._s(_vm.currentUser)) + "</button>" + (!_vm.isMobile ? "<button data-v-6c9389a0>Log out</button>" : "<!---->") + "</div></div>"))]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/UserAndSetPicker.vue?vue&type=template&id=6c9389a0&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/UserAndSetPicker.vue?vue&type=script&lang=js&
const {
  get
} = __webpack_require__(17);
const {
  getNumberDueInSet
} = __webpack_require__(15);
/* harmony default export */ var UserAndSetPickervue_type_script_lang_js_ = ({
  components: {},
  props: {},
  data() {
    return {
      isLoading: false,
      inputUsername: '',
      dueReviews: {},
      setPickerOpen: false
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.currentUser;
    },
    appState() {
      return this.$store.state.appState;
    },
    setList() {
      return this.$store.state.setList || [];
    },
    setListWithoutCurrentSet() {
      return Object.values(this.setList).filter(s => s.id !== this.currentSetId);
    },
    currentSetId() {
      return this.$store.state.currentSetId;
    },
    currentCards() {
      var _this$$store$state$se, _this$$store$state$se2;
      return (_this$$store$state$se = this.$store.state.setList) !== null && _this$$store$state$se !== void 0 && _this$$store$state$se.find(s => s.id === this.$store.state.currentSetId) ? (_this$$store$state$se2 = this.$store.state.setList) === null || _this$$store$state$se2 === void 0 ? void 0 : _this$$store$state$se2.find(s => s.id === this.$store.state.currentSetId).cards : [];
    },
    isMobile() {
      return this.$store.state.isMobile;
    },
    appState() {
      return this.$store.state.appState;
    }
  },
  watch: {
    currentUser(newUser) {
      this.isLoading = false;
      const savedSetId = get('currentSetId');
      if (savedSetId && savedSetId !== '') {
        this.$store.commit('setCurrentSetId', savedSetId);
      }
      if (!newUser) this.$nextTick(this.focusInput);
    },
    setList() {
      this.isLoading = false;
      this.updateDueReviews();
    },
    currentCards() {
      this.updateDueReviews();
    },
    currentSetId() {
      this.isLoading = false;
      this.updateDueReviews();
    },
    setPickerOpen(opening) {
      if (opening) window.addEventListener('click', this.checkClickToClose);else window.removeEventListener('click', this.checkClickToClose);
    }
  },
  mounted() {
    window.addEventListener('keydown', this.keyDown);
    this.updateDueReviews();
    window.setInterval(this.updateDueReviews, 10 * 60 * 1000);
    const savedUsername = get('currentUser');
    if (savedUsername && savedUsername !== '') {
      this.$store.dispatch('logInAs', savedUsername);
      this.isLoading = true;
    } else {
      this.$nextTick(this.focusInput);
    }
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.keyDown);
  },
  methods: {
    logInAs() {
      if (this.inputUserName === '') return;
      this.isLoading = true;
      this.$store.dispatch('logInAs', this.inputUsername);
    },
    logOut() {
      this.$store.commit('logOut');
    },
    keyDown(event) {
      if (this.currentUser) return this.updateDueReviews();
      if (event.key === 'Enter') this.logInAs();
    },
    focusInput() {
      this.$refs.usernameInput.focus();
    },
    switchSet(id) {
      this.$store.commit('setCurrentSetId', id);
    },
    updateDueReviews() {
      this.dueReviews = {};
      for (const setIndex in this.setList) {
        var _this$setList;
        if (!((_this$setList = this.setList) !== null && _this$setList !== void 0 && _this$setList[setIndex])) continue;
        if (new Date(this.setList[setIndex].lastUpdated).getDate() !== new Date().getDate()) {
          this.$store.commit('resetSetDay', setIndex);
        }
        this.dueReviews[this.setList[setIndex].id] = getNumberDueInSet(this.setList[setIndex]);
      }
    },
    checkClickToClose(e) {
      if (!(e.composedPath ? e.composedPath() : e.path).includes(this.$refs.mainButton)) this.setPickerOpen = false;
    },
    uploaded(e) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = readEvent => {
        const uploadedSet = JSON.parse(readEvent.target.result);
        this.$store.commit('uploadSet', uploadedSet);
      };
      reader.readAsText(file);
    }
  }
});
// CONCATENATED MODULE: ./components/UserAndSetPicker.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_UserAndSetPickervue_type_script_lang_js_ = (UserAndSetPickervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/UserAndSetPicker.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(134)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_UserAndSetPickervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6c9389a0",
  "ed82a9d0"
  
)

/* harmony default export */ var UserAndSetPicker = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAndSetPicker_vue_vue_type_style_index_0_id_6c9389a0_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(117);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAndSetPicker_vue_vue_type_style_index_0_id_6c9389a0_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAndSetPicker_vue_vue_type_style_index_0_id_6c9389a0_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAndSetPicker_vue_vue_type_style_index_0_id_6c9389a0_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAndSetPicker_vue_vue_type_style_index_0_id_6c9389a0_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".userandsetpicker[data-v-6c9389a0]{align-items:center;background:#333;display:flex;height:43px;justify-content:space-between;padding:3px 50px 0;position:relative;width:100%;z-index:12}@media(max-width:768px){.userandsetpicker[data-v-6c9389a0]{height:40px;padding:0 20px}}.userandsetpicker.fullscreen[data-v-6c9389a0]{background:#eee;height:100vh;justify-content:center;position:fixed}.userandsetpicker.vertical[data-v-6c9389a0]{flex-direction:column}.userandsetpicker.vertical>*[data-v-6c9389a0]{margin-bottom:20px}.username[data-v-6c9389a0]{border:1px solid #eee;border-radius:7px;padding:10px}.loginbutton[data-v-6c9389a0],.username[data-v-6c9389a0]{font-family:\"Avenir Neue\",\"Avenir\",\"Helvetica\",sans-serif;font-size:1.2rem}.loginbutton[data-v-6c9389a0]{border-radius:7px;padding:20px 50px}button:not(.active).duecards[data-v-6c9389a0]{background:#fd8}.inlineblock[data-v-6c9389a0]{display:inline-block}.flex-ai[data-v-6c9389a0]{align-items:center;display:flex;height:100%;justify-content:center}.buttonlist[data-v-6c9389a0]{overflow:visible}.buttonlist.fullheight[data-v-6c9389a0]{border:none;border-radius:0;height:100%}.buttonlist.fullheight button[data-v-6c9389a0]{background:hsla(0,0%,100%,0);border:none;box-shadow:none;color:#fff;transition:background .2s}@media(min-width:769px){.buttonlist.fullheight button[data-v-6c9389a0]{border-top-left-radius:5px;border-top-right-radius:5px;padding:0 15px 2px}}.buttonlist.fullheight button[data-v-6c9389a0]:hover{background:rgba(0,153,204,.3)}.buttonlist.fullheight button.active[data-v-6c9389a0]{background:#fff;color:#000}@media(max-width:768px){.buttonlist.fullheight button[data-v-6c9389a0]{background:hsla(0,0%,100%,.2);margin-right:3px}}.buttonlist.fullheight>*[data-v-6c9389a0]{border-radius:0;height:100%}button.mainbutton[data-v-6c9389a0]{box-shadow:0 0 1000px 1000px transparent;min-width:25vw;position:relative;transition:box-shadow .3s;z-index:100}button.open[data-v-6c9389a0]{background:#fff!important;border-bottom-left-radius:0!important;border-bottom-right-radius:0!important;box-shadow:0 0 1000px 1000px rgba(0,0,0,.3);color:#000!important}.secondarypanel[data-v-6c9389a0]{left:0;position:absolute;top:100%;width:100%}.secondarypanel button[data-v-6c9389a0]{background:#ddd!important;border:0;border-radius:0;border-top:1px solid #eee;color:#000!important;width:100%}.secondarypanel button[data-v-6c9389a0]:first-of-type{border-radius:0}.secondarypanel button[data-v-6c9389a0]:last-of-type{border-radius:0;border-bottom-left-radius:10px;border-bottom-right-radius:10px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=user-and-set-picker.js.map