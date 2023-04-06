exports.ids = [23];
exports.modules = {

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(66);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("13cf4c1f", content, true, context)
};

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/StudyExtrasJA.vue?vue&type=template&id=40411f44&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.kanjiList ? _c('div', [_vm._ssrNode(_vm._ssrList(_vm.kanjiList, function (kanji) {
    return kanji.meaning ? "<div class=\"kanji sub\" data-v-40411f44>" + _vm._ssrEscape("\n    " + _vm._s(kanji.character) + " : " + _vm._s(kanji.message || kanji.meaning) + "\n  ") + "</div>" : "<!---->";
  }) + " " + (_vm.examplesToShow && _vm.examplesToShow.length > 0 ? "<div class=\"examplespopup\" data-v-40411f44>" + _vm._ssrList(_vm.examplesToShow, function (example, index) {
    return "<div class=\"sub\" data-v-40411f44>" + _vm._ssrEscape("\n      " + _vm._s(example.japanese) + ": " + _vm._s(example.meaning) + "\n    ") + "</div>";
  }) + "</div>" : "<!---->"))]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/StudyExtrasJA.vue?vue&type=template&id=40411f44&scoped=true&

// EXTERNAL MODULE: external "core-js/modules/esnext.set.add-all.js"
var esnext_set_add_all_js_ = __webpack_require__(29);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.delete-all.js"
var esnext_set_delete_all_js_ = __webpack_require__(30);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.difference.js"
var esnext_set_difference_js_ = __webpack_require__(31);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.every.js"
var esnext_set_every_js_ = __webpack_require__(32);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.filter.js"
var esnext_set_filter_js_ = __webpack_require__(33);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.find.js"
var esnext_set_find_js_ = __webpack_require__(34);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.intersection.js"
var esnext_set_intersection_js_ = __webpack_require__(35);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-disjoint-from.js"
var esnext_set_is_disjoint_from_js_ = __webpack_require__(36);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-subset-of.js"
var esnext_set_is_subset_of_js_ = __webpack_require__(37);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-superset-of.js"
var esnext_set_is_superset_of_js_ = __webpack_require__(38);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.join.js"
var esnext_set_join_js_ = __webpack_require__(39);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.map.js"
var esnext_set_map_js_ = __webpack_require__(40);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.reduce.js"
var esnext_set_reduce_js_ = __webpack_require__(41);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.some.js"
var esnext_set_some_js_ = __webpack_require__(42);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.symmetric-difference.js"
var esnext_set_symmetric_difference_js_ = __webpack_require__(43);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.union.js"
var esnext_set_union_js_ = __webpack_require__(44);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/StudyExtrasJA.vue?vue&type=script&lang=js&
















const keys = __webpack_require__(16);
// const jishoApi = require('unofficial-jisho-api')
// const jisho = new jishoApi()
/* harmony default export */ var StudyExtrasJAvue_type_script_lang_js_ = ({
  props: {
    text: {
      default: ''
    },
    secondaryText: {
      default: ''
    }
  },
  data() {
    return {
      kanjiList: [],
      examplesToShow: null
    };
  },
  computed: {
    settings() {
      var _this$$store$state$se;
      return (_this$$store$state$se = this.$store.state.setList) === null || _this$$store$state$se === void 0 ? void 0 : _this$$store$state$se.find(s => s.id === this.$store.state.currentSetId).settings;
    },
    searchString() {
      return this.text.replace(/\n.*/g, '');
    }
  },
  watch: {
    text() {
      this.getKanjiData();
    }
  },
  mounted() {
    this.getKanjiData();
  },
  methods: {
    getKanjiData() {
      const kanjiInText = Array.from(new Set(`${this.text.replace(/[^\u4e00-\u9faf]/g, '')}${this.secondaryText.replace(/[^\u4e00-\u9faf]/g, '')}`));
      this.kanjiList = kanjiInText.map(character => ({
        character: character,
        meaning: 'loading...'
      }));
      Array.from(kanjiInText).forEach((character, index) => {
        // const SEARCH_KANJI = '車'
        // const SEARCH_URI = jisho.getUriForKanjiSearch(SEARCH_KANJI)

        // fetch(SEARCH_URI)
        //   .then(res => res.json)
        //   .then(body => {
        //     const json = jisho.parseKanjiPageHtml(body, SEARCH_KANJI)
        //     console.log(`JLPT level: ${json.jlptLevel}`)
        //     console.log(`Stroke count: ${json.strokeCount}`)
        //     console.log(`Meaning: ${json.meaning}`)
        //   })

        // jisho.searchForKanji('語').then(result => {
        //   console.log('Found: ' + result.found)
        //   console.log('Taught in: ' + result.taughtIn)
        //   console.log('JLPT level: ' + result.jlptLevel)
        //   console.log(
        //     'Newspaper frequency rank: ' + result.newspaperFrequencyRank
        //   )
        //   console.log('Stroke count: ' + result.strokeCount)
        //   console.log('Meaning: ' + result.meaning)
        //   console.log('Kunyomi: ' + JSON.stringify(result.kunyomi))
        //   console.log(
        //     'Kunyomi example: ' + JSON.stringify(result.kunyomiExamples[0])
        //   )
        //   console.log('Onyomi: ' + JSON.stringify(result.onyomi))
        //   console.log(
        //     'Onyomi example: ' + JSON.stringify(result.onyomiExamples[0])
        //   )
        //   console.log('Radical: ' + JSON.stringify(result.radical))
        //   console.log('Parts: ' + JSON.stringify(result.parts))
        //   console.log('Stroke order diagram: ' + result.strokeOrderDiagramUri)
        //   console.log('Stroke order SVG: ' + result.strokeOrderSvgUri)
        //   console.log('Stroke order GIF: ' + result.strokeOrderGifUri)
        //   console.log('Jisho Uri: ' + result.uri)
        // })

        fetch(`https://kanjialive-api.p.rapidapi.com/api/public/kanji/${character}`, {
          headers: {
            'X-RapidAPI-Key': keys.rapidAPI
          }
        }).then(res => res.json()).then(kanjiInfo => {
          if (kanjiInfo.error || kanjiInfo.message) return this.$set(this.kanjiList, index, {
            character: character,
            message: kanjiInfo.error || kanjiInfo.message
          });
          this.$set(this.kanjiList, index, {
            character: kanjiInfo.kanji.character,
            meaning: kanjiInfo.kanji.meaning.english,
            examples: kanjiInfo.examples.slice(0, 3).map(example => ({
              japanese: example.japanese,
              meaning: example.meaning.english
            }))
          });
        });
      });
    }
  }
});
// CONCATENATED MODULE: ./components/StudyExtrasJA.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_StudyExtrasJAvue_type_script_lang_js_ = (StudyExtrasJAvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/StudyExtrasJA.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(65)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_StudyExtrasJAvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "40411f44",
  "3e6ab282"
  
)

/* harmony default export */ var StudyExtrasJA = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StudyExtrasJA_vue_vue_type_style_index_0_id_40411f44_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StudyExtrasJA_vue_vue_type_style_index_0_id_40411f44_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StudyExtrasJA_vue_vue_type_style_index_0_id_40411f44_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StudyExtrasJA_vue_vue_type_style_index_0_id_40411f44_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StudyExtrasJA_vue_vue_type_style_index_0_id_40411f44_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".examplespopup[data-v-40411f44]{background:#f8f8f8;left:0;padding:20px;pointer-events:none;position:absolute;top:0;width:100%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=study-extras-j-a.js.map