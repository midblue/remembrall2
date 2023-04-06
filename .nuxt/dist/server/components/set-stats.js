exports.ids = [19,16];
exports.modules = {

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SetStats.vue?vue&type=template&id=6e864de6&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "stats"
  }, [_vm._ssrNode("<p data-v-6e864de6>\n    Cards: <b data-v-6e864de6>" + _vm._ssrEscape(_vm._s(_vm.currentSet.cards.length)) + "</b></p> <p data-v-6e864de6>\n    Mastered Cards: <b data-v-6e864de6>" + _vm._ssrEscape(_vm._s(_vm.masteredCards)) + "</b> <span class=\"sub\" data-v-6e864de6>" + _vm._ssrEscape("(" + _vm._s(Math.round(_vm.masteredCards / _vm.currentSet.cards.length * 100)) + "%)") + "</span></p> <p data-v-6e864de6>\n    New Cards: <b data-v-6e864de6>" + _vm._ssrEscape(_vm._s(_vm.newCards)) + "</b></p> <p data-v-6e864de6>\n    Deck Created:\n    <b data-v-6e864de6>" + _vm._ssrEscape(_vm._s(new Date(parseInt(_vm.currentSet.id)).toLocaleDateString())) + "</b></p> <p data-v-6e864de6>\n    Total Reviews: <b data-v-6e864de6>" + _vm._ssrEscape(_vm._s(_vm.totalReviews)) + "</b></p> <p data-v-6e864de6>\n    Success Rate:\n    <b data-v-6e864de6>" + _vm._ssrEscape(_vm._s(_vm.oks && _vm.agains ? Math.round(_vm.oks / (_vm.agains + _vm.oks) * 10000) / 100 : 0) + "%") + "</b> " + (_vm.oks && _vm.agains ? "<span class=\"sub\" data-v-6e864de6>" + _vm._ssrEscape("(" + _vm._s(_vm.oks) + " oks / " + _vm._s(_vm.agains) + " agains)") + "</span>" : "<!---->") + "</p> "), _c('ReviewGraph', {
    attrs: {
      "cards": _vm.currentSet.cards
    }
  })], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/SetStats.vue?vue&type=template&id=6e864de6&scoped=true&

// EXTERNAL MODULE: ./components/ReviewGraph.vue + 4 modules
var ReviewGraph = __webpack_require__(67);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SetStats.vue?vue&type=script&lang=js&

/* harmony default export */ var SetStatsvue_type_script_lang_js_ = ({
  props: {
    id: {}
  },
  components: {
    ReviewGraph: ReviewGraph["default"]
  },
  data() {
    return {};
  },
  computed: {
    currentSet() {
      var _this$$store$state$se;
      return (_this$$store$state$se = this.$store.state.setList) === null || _this$$store$state$se === void 0 ? void 0 : _this$$store$state$se.find(s => s.id === this.$store.state.currentSetId);
    },
    totalReviews() {
      return this.oks + this.agains;
    },
    newCards() {
      return this.currentSet.cards.reduce((total, card) => total + (card.suspended ? 0 : !card.totalReviews || card.totalReviews === 0 ? 1 : 0), 0);
    },
    oks() {
      return this.currentSet.cards.reduce((total, card) => total + (card.ok ? card.ok : 0), 0);
    },
    agains() {
      return this.currentSet.cards.reduce((total, card) => total + (card.again ? card.again : 0), 0);
    },
    masteredCards() {
      return this.currentSet.cards.reduce((total, card) => total + (card.ok ? card.ok > 5 && card.ok / (card.again ? card.again : 0) > 4 ? 1 : 0 : 0), 0);
    }
  },
  mounted() {},
  beforeDestroy() {},
  watch: {},
  methods: {}
});
// CONCATENATED MODULE: ./components/SetStats.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SetStatsvue_type_script_lang_js_ = (SetStatsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/SetStats.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SetStatsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6e864de6",
  "3d0e9911"
  
)

/* harmony default export */ var SetStats = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ReviewGraph: __webpack_require__(67).default})


/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ReviewGraph.vue?vue&type=template&id=451472b2&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "reviewgraph"
  }, [_vm._ssrNode((_vm.reviewGraph.graphPoints ? "<h4 data-v-451472b2>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</h4>" : "<!---->") + " <div class=\"bars\" data-v-451472b2>" + _vm._ssrList(_vm.reviewGraph.graphPoints, function (bar, key) {
    return "<div class=\"fill\"" + _vm._ssrStyle(null, {
      height: _vm.firstFrame ? 0 : bar / _vm.reviewGraph.maxValue * 100 + '%'
    }, null) + " data-v-451472b2><div class=\"count\" data-v-451472b2>" + _vm._ssrEscape(_vm._s(bar)) + "</div></div>";
  }) + "</div> <div class=\"labels\" data-v-451472b2>" + _vm._ssrList(_vm.reviewGraph.labels, function (label, key) {
    return "<span class=\"sub\" data-v-451472b2>" + _vm._ssrEscape(_vm._s(label) + "\n    ") + "</span>";
  }) + "</div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ReviewGraph.vue?vue&type=template&id=451472b2&scoped=true&

// EXTERNAL MODULE: ./assets/commonFunctions.js
var commonFunctions = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ReviewGraph.vue?vue&type=script&lang=js&

/* harmony default export */ var ReviewGraphvue_type_script_lang_js_ = ({
  components: {},
  props: {
    cards: {},
    slots: {
      default: 10
    },
    maxTime: {
      default: null
    },
    title: {
      default: 'All upcoming reviews:'
    }
  },
  data() {
    return {
      updateGraphTimer: null,
      reviewGraph: {},
      firstFrame: true
    };
  },
  watch: {
    cards() {
      this.updateGraph();
    }
  },
  mounted() {
    this.updateGraphTimer = setInterval(this.updateGraph, 30000);
    this.updateGraph();
    setTimeout(() => this.firstFrame = false, 100);
  },
  beforeDestroy() {
    clearInterval(this.updateGraphTimer);
  },
  methods: {
    updateGraph() {
      if (!this.cards || this.cards.length === 0) return;
      const now = Date.now();
      const reviewTimes = this.cards.map(card => parseInt(card.nextReview) - now);
      const greatestTime = this.maxTime ? this.maxTime : Math.max(...reviewTimes);
      const graphPoints = [];
      const labels = [];
      for (let x = 0; x < this.slots; x++) {
        graphPoints[x] = 0;
        labels[this.slots - 1 - x] = Object(commonFunctions["msToString"])(greatestTime - greatestTime / this.slots * (x + 0.5));
      }
      for (const time of reviewTimes) {
        const bucket = Math.floor(time / greatestTime * (this.slots - 1));
        if (bucket >= this.slots) continue;
        if (!graphPoints[bucket]) graphPoints[bucket] = 1;else graphPoints[bucket]++;
      }
      const maxValue = Math.max(...graphPoints);
      this.reviewGraph = {
        graphPoints,
        labels,
        maxValue
      };
    }
  }
});
// CONCATENATED MODULE: ./components/ReviewGraph.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ReviewGraphvue_type_script_lang_js_ = (ReviewGraphvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/ReviewGraph.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(95)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ReviewGraphvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "451472b2",
  "83ef895c"
  
)

/* harmony default export */ var ReviewGraph = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(96);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("01951138", content, true, context)
};

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewGraph_vue_vue_type_style_index_0_id_451472b2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewGraph_vue_vue_type_style_index_0_id_451472b2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewGraph_vue_vue_type_style_index_0_id_451472b2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewGraph_vue_vue_type_style_index_0_id_451472b2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewGraph_vue_vue_type_style_index_0_id_451472b2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".reviewgraph[data-v-451472b2]{margin-bottom:30px;width:100%}.reviewgraph .bars[data-v-451472b2]{align-items:flex-end;display:flex;height:70px;justify-content:stretch}.reviewgraph .bars .fill[data-v-451472b2]{background:#ddd;border-top-left-radius:5px;border-top-right-radius:5px;flex:1;height:0;margin:0 3px;position:relative;transition:all 1s}.reviewgraph .count[data-v-451472b2]{font-size:.8em;left:50%;opacity:.3;position:absolute;top:0;transform:translateX(-50%) translateY(-93%)}.reviewgraph .labels[data-v-451472b2]{display:flex;justify-content:stretch;margin-top:2px;text-align:center}.reviewgraph .labels>*[data-v-451472b2]{flex:1}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=set-stats.js.map