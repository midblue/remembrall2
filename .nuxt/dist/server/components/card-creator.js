exports.ids = [5,11,12,13];
exports.modules = {

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CardCreator.vue?vue&type=template&id=c5a5d126&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "cardcreator",
    class: {
      loading: _vm.loadingAutocomplete
    }
  }, [_vm._ssrNode("<div class=\"cardframe\" data-v-c5a5d126>", "</div>", [_c('EditableTextFieldMarkdown', {
    ref: "front",
    staticClass: "textfield front",
    class: {
      duplicate: _vm.isDuplicate
    },
    attrs: {
      "focus": _vm.setFocus === 'front',
      "placeholder": "Hint"
    },
    on: {
      "startEdit": _vm.focus,
      "next": _vm.tab,
      "setImageURL": _vm.setImageURL
    },
    model: {
      value: _vm.front,
      callback: function ($$v) {
        _vm.front = $$v;
      },
      expression: "front"
    }
  }), _vm._ssrNode(" " + (_vm.examples ? "<div class=\"examplefield\" data-v-c5a5d126>" + _vm._ssrList(_vm.examples, function (e) {
    return "<div data-v-c5a5d126>" + _vm._ssrEscape("\n        " + _vm._s(e.split('@')[0]) + "\n      ") + "</div>";
  }) + "</div>" : "<!---->") + " "), _vm.imageURL ? _vm._ssrNode("<div class=\"imagecontainer\" data-v-c5a5d126>", "</div>", [_c('ImageLoader', {
    attrs: {
      "url": _vm.imageURL
    }
  })], 1) : _vm._e(), _vm._ssrNode(" "), _c('EditableTextFieldMarkdown', {
    ref: "back",
    staticClass: "textfield back",
    attrs: {
      "focus": _vm.setFocus === 'back',
      "placeholder": "Answer"
    },
    on: {
      "startEdit": _vm.focus,
      "prev": _vm.shiftTab,
      "setImageURL": _vm.setImageURL
    },
    model: {
      value: _vm.back,
      callback: function ($$v) {
        _vm.back = $$v;
      },
      expression: "back"
    }
  }), _vm._ssrNode(" " + (_vm.examples ? "<div class=\"examplefield\" data-v-c5a5d126>" + _vm._ssrList(_vm.examples, function (e) {
    return "<div data-v-c5a5d126>" + _vm._ssrEscape("\n        " + _vm._s(e.split('@')[1]) + "\n      ") + "</div>";
  }) + "</div>" : "<!---->"))], 2), _vm._ssrNode(" "), _c('FloatingText', {
    attrs: {
      "text": _vm.floatText,
      "offset": "-30"
    }
  }), _vm._ssrNode(" <div class=\"buttonlist\" data-v-c5a5d126><button data-v-c5a5d126><div data-v-c5a5d126>Add Card</div> <kbd class=\"keyicon\" data-v-c5a5d126>⌘-Enter</kbd></button></div> "), _vm.front || _vm.back ? _c('center', [['ja', 'es'].includes(_vm.languageTools) ? [_c('button', {
    on: {
      "click": _vm.autoComplete
    }
  }, [_c('div', [_vm._v("Auto-Complete Card")]), _vm._v(" "), _c('kbd', {
    staticClass: "keyicon"
  }, [_vm._v(_vm._s(_vm.isFirefox ? 'ctrl' : '⌘') + "-m")])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('br')] : _vm._e(), _vm._v(" "), _c('span', {
    staticClass: "sub"
  }, [_vm._v("Paste an image link to add your own image.")]), _vm._v(" "), _c('span', {
    staticClass: "sub"
  }, [_vm._v("Or,")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.autoSetImage
    }
  }, [_c('div', [_vm._v("Auto-Set Image")]), _vm._v(" "), _c('kbd', {
    staticClass: "keyicon"
  }, [_vm._v(_vm._s(_vm.isFirefox ? 'ctrl' : '⌘') + "-i")])]), _vm._v(" "), _c('br'), _vm._v(" "), _vm.imageURL ? _c('div', {
    staticClass: "sub",
    staticStyle: {
      "position": "relative",
      "top": "5px"
    }
  }, [_vm._v("\n      (click image to remove it)\n    ")]) : _vm._e(), _vm._v(" "), _c('br'), _vm._v(" "), _c('br')], 2) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CardCreator.vue?vue&type=template&id=c5a5d126&scoped=true&

// EXTERNAL MODULE: ./components/FloatingText.vue + 4 modules
var FloatingText = __webpack_require__(68);

// EXTERNAL MODULE: ./components/EditableTextFieldMarkdown.vue + 4 modules
var EditableTextFieldMarkdown = __webpack_require__(47);

// EXTERNAL MODULE: ./components/ImageLoader.vue + 4 modules
var ImageLoader = __webpack_require__(48);

// EXTERNAL MODULE: ./assets/commonFunctions.js
var commonFunctions = __webpack_require__(15);

// CONCATENATED MODULE: ./assets/autocomplete.js
const keys = __webpack_require__(16);
const autocomplete = ({
  language,
  textToBaseOn,
  basedOnFrontText,
  front: startFront,
  back: startBack
}) => {
  if (language === 'ja') {
    return new Promise(resolve => {
      const japaneseRegex = /[\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF\u3400-\u4DBF]/;
      const isJapanese = japaneseRegex.test(textToBaseOn);
      const kanjiRegex = /[\u4E00-\u9FAF\u3400-\u4DBF]/;
      const hasKanji = kanjiRegex.test(textToBaseOn);
      try {
        fetch(`https://us-central1-general-prototype-project.cloudfunctions.net/cors-proxy?url=https://jisho.org/api/v1/search/words?keyword=${textToBaseOn}`).then(res => res.json()).then(data => data.data[0]).then(entry => {
          if (!entry) {
            if (basedOnFrontText) resolve({
              front: '',
              back: `Couldn't find a definition for that!`
            });
            resolve({
              back: '',
              front: `Couldn't find a definition for that!`
            });
          }
          // console.log(entry)
          const isCommon = entry.is_common;
          let front = startFront;
          let back = startBack;
          let shouldAutoSetImage = false;
          const definition = entry.senses.slice(0, 2).reduce((acc, sense) => [...acc, ...sense.english_definitions.slice(0, 2)], []).join(', ');
          if (basedOnFrontText) {
            if (isJapanese) {
              if (hasKanji && entry.japanese[0].reading) back = entry.japanese[0].reading;else if (!hasKanji && entry.japanese[0].word) back = entry.japanese[0].word;
              back = back + '\n' + definition;
            } else if (!isJapanese) {
              front = definition;
              back = (entry.japanese[0].word ? entry.japanese[0].word + '\n' : '') + (entry.japanese[0].reading ? entry.japanese[0].reading : '');
              shouldAutoSetImage = true;
            }
          } else if (!basedOnFrontText) {
            if (isJapanese) {
              front = definition;
              back = (entry.japanese[0].word ? entry.japanese[0].word + '\n' : '') + (entry.japanese[0].reading ? entry.japanese[0].reading : '');
              shouldAutoSetImage = true;
            } else if (!isJapanese) {
              front = entry.japanese[0].word ? entry.japanese[0].word : entry.japanese[0].reading ? entry.japanese[0].reading : `Whoops, couldn't find that one.`;
              back = (entry.japanese[0].reading ? entry.japanese[0].reading + '\n' : '') + definition;
            }
          }
          back += isCommon ? '' : '\n_(uncommon word)_';
          resolve({
            front,
            back,
            shouldAutoSetImage
          });
        });
      } catch (e) {
        resolve({
          front: basedOnFrontText ? textToBaseOn : `Error in fetching data!`,
          back: !basedOnFrontText ? textToBaseOn : `Error in fetching data!`
        });
      }
    });
  } else if (language === 'es') {
    return new Promise(resolve => {
      try {
        fetch(
        // `https://od-api.oxforddictionaries.com/api/v2/translations/EN-US/ES/${textToBaseOn.toLowerCase()}`,
        `https://us-central1-general-prototype-project.cloudfunctions.net/cors-proxy?url=https://www.spanishdict.com/translate/${textToBaseOn}`
        // {
        //   headers: new Headers({
        //     app_id: keys.oxfordAppID,
        //     app_key: keys.oxfordApiKey,
        //   }),
        // }
        ).then(result => {
          // console.log(result.status)
          return result.text();
        }).then(entry => {
          var _exec;
          const regexResult = /<div id="headword-(en|es)" [^>]*><h1 [^<]*>([^<]*)<\/h1><\/div>.*<div .*quickdef1[^>]*><a href="\/translate[^>]*>([^<]*)/g.exec(entry);
          if (!regexResult) {
            if (basedOnFrontText) resolve({
              front: '',
              back: '' //`Couldn't find a definition for that!`,
            });

            resolve({
              back: '',
              front: '' //`Couldn't find a definition for that!`,
            });

            return;
          }
          const [full, primaryTextLanguage, word, definition] = regexResult;

          // console.log(primaryTextLanguage, word, definition)

          const image = (_exec = /<img.+? src="([^"]+dictionary-images[^"]+)"/g.exec(entry)) === null || _exec === void 0 ? void 0 : _exec[1];
          // console.log(image)

          let examples;
          let example =
          // /<span class="exampleFirstHalf[^\s]+ lang="([^"]+)">([^<]*)<\/span>.*?<span class="exampleSecondHalf[^\s]+ lang="([^"]+)">([^<]*)<\/span>/
          /<div class=".*?"><span class=".*?" lang="([^"]+)">([^<]*)<\/span><span class=".*?" lang="([^"]+)">([^<]*)<\/span><\/div>/g.exec(entry);
          if (example) {
            const [full, lang1, text1, lang2, text2] = example;
            if (!examples) examples = [];
            if (lang1 === 'en') examples.push(`${text1}@${text2}`);else examples.push(`${text2}@${text1}`);
          }
          const front = basedOnFrontText ? word : definition;
          const back = !basedOnFrontText ? word : definition;
          const shouldAutoSetImage = basedOnFrontText && primaryTextLanguage === 'en' || !basedOnFrontText && primaryTextLanguage === 'es';
          resolve({
            front,
            back,
            image,
            examples,
            shouldAutoSetImage
          });
        });
      } catch (e) {
        resolve({
          front: basedOnFrontText ? textToBaseOn : `Error in fetching data!`,
          back: !basedOnFrontText ? textToBaseOn : `Error in fetching data!`
        });
      }
    });
  }
  // else if (language === 'fr') {
  //   return new Promise((resolve) => {
  //     try {
  //       fetch(
  //         `https://us-central1-general-prototype-project.cloudfunctions.net/cors-proxy?url=https://www.wordreference.com/enfr/${textToBaseOn}`
  //       )
  //         .then((result) => {
  //           console.log(result.status)
  //           return result.text()
  //         })
  //         .then((entry) => {

  //           // const regexResult =
  //           //   /ToWrd">([^<]*)<\/h1><\/div>.*<div .*quickdef[^>]*><a href="\/translate[^>]*>([^<]*)/g.exec(
  //           //     entry
  //           //   )
  //           // if (!regexResult) {
  //           //   if (basedOnFrontText)
  //           //     resolve({
  //           //       front: '',
  //           //       back: `Couldn't find a definition for that!`,
  //           //     })
  //           //   resolve({
  //           //     back: '',
  //           //     front: `Couldn't find a definition for that!`,
  //           //   })
  //           //   return
  //           // }

  //           // const [full, primaryTextLanguage, word, definition] = regexResult

  //           // console.log( word, definition)
  //           // const front = basedOnFrontText ? word : definition
  //           // const back = !basedOnFrontText ? word : definition
  //           // const shouldAutoSetImage =
  //           //   (basedOnFrontText && primaryTextLanguage === 'en') ||
  //           //   (!basedOnFrontText && primaryTextLanguage === 'es')
  //           // resolve({
  //           //   front,
  //           //   back,
  //           //   shouldAutoSetImage,
  //           // })
  //         })
  //     } catch (e) {
  //       resolve({
  //         front: basedOnFrontText ? textToBaseOn : `Error in fetching data!`,
  //         back: !basedOnFrontText ? textToBaseOn : `Error in fetching data!`,
  //       })
  //     }
  //   })
  // }
  else {
    return new Promise(resolve => {
      resolve({
        front: basedOnFrontText ? textToBaseOn : `That language isn't supported yet!`,
        back: !basedOnFrontText ? textToBaseOn : `That language isn't supported yet!`
      });
    });
  }
};
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CardCreator.vue?vue&type=script&lang=js&





/* harmony default export */ var CardCreatorvue_type_script_lang_js_ = ({
  components: {
    FloatingText: FloatingText["default"],
    EditableTextFieldMarkdown: EditableTextFieldMarkdown["default"],
    ImageLoader: ImageLoader["default"]
  },
  props: {},
  data() {
    return {
      front: '',
      back: '',
      imageURL: '',
      examples: undefined,
      metaDown: false,
      floatText: '',
      isDuplicate: false,
      setFocus: 'front',
      isFirefox: navigator.userAgent.toLowerCase().includes('firefox'),
      loadingAutocomplete: false
    };
  },
  computed: {
    languageTools() {
      var _this$$store$state$se;
      return (_this$$store$state$se = this.$store.state.setList) === null || _this$$store$state$se === void 0 ? void 0 : _this$$store$state$se.find(s => s.id === this.$store.state.currentSetId).settings.languageTools;
    },
    cards() {
      var _this$$store$state$se2;
      return (_this$$store$state$se2 = this.$store.state.setList) === null || _this$$store$state$se2 === void 0 ? void 0 : _this$$store$state$se2.find(s => s.id === this.$store.state.currentSetId).cards;
    }
  },
  watch: {
    front(newFront) {
      if (newFront.length < 2) return this.isDuplicate = false;
      this.isDuplicate = this.cards.find(card => card.front.toLowerCase() === newFront.toLowerCase());
    }
  },
  mounted() {
    window.addEventListener('keydown', this.keyDown);
    window.addEventListener('keyup', this.keyUp);
    this.$store.commit('setAppState', 'addCard');
    window.addEventListener('focus', this.focus);
    window.addEventListener('blur', this.blur);
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.keyDown);
    window.removeEventListener('keyup', this.keyUp);
    this.$store.commit('setIsEditingText', false);
    window.removeEventListener('focus', this.focus);
    window.removeEventListener('blur', this.blur);
  },
  methods: {
    focus() {
      this.$refs.front.$el.blur();
      this.$refs.back.$el.blur();
      this.$store.commit('setIsEditingText', false);
      window.getSelection().removeAllRanges();
    },
    blur() {
      this.$refs.front.$el.blur();
      this.$refs.back.$el.blur();
      this.$store.commit('setIsEditingText', false);
      window.getSelection().removeAllRanges();
    },
    newCard() {
      if (!this.front && !this.imageURL || !this.back) return;
      const newCard = {
        id: Date.now(),
        front: this.front,
        back: this.back,
        nextReview: 0,
        set: parseInt(this.$store.state.currentSetId)
      };
      // * firestore DOES NOT like getting undefined as a value
      if (this.examples) newCard.examples = this.examples;
      if (this.imageURL) newCard.imageURL = this.imageURL;
      this.$store.commit('addCard', newCard);
      this.floatText = 'Card added.';
      setTimeout(() => this.floatText = '', 1500);
      this.$nextTick(() => {
        this.front = '';
        this.back = '';
        this.imageURL = '';
        this.examples = undefined;
        this.isDuplicate = false;
        this.setFocus = null;
        this.$nextTick(() => this.setFocus = 'front');
      });
    },
    keyDown(event) {
      if (event.key === 'Control') this.metaDown = true;
      if (event.key === 'Meta') this.metaDown = true;
      if (event.key === 'Enter' && this.metaDown) this.$nextTick(this.newCard);
      if (event.key === 'i' && this.metaDown) {
        event.preventDefault();
        event.stopPropagation();
        this.autoSetImage();
      }
      if (event.key === 'm' && this.metaDown) {
        event.preventDefault();
        event.stopPropagation();
        this.autoComplete();
      }
    },
    keyUp(event) {
      if (event.key === 'Control') this.metaDown = false;
      if (event.key === 'Meta') this.metaDown = false;
    },
    focus() {
      this.$store.commit('setIsEditingText', true);
    },
    tab(e) {
      e.preventDefault();
      this.setFocus = null;
      this.$nextTick(() => this.setFocus = 'back');
    },
    shiftTab(e) {
      e.preventDefault();
      this.setFocus = null;
      this.$nextTick(() => this.setFocus = 'front');
    },
    setImageURL(url) {
      this.imageURL = url;
    },
    autoSetImage() {
      Object(commonFunctions["getRandomImage"])(this.front || this.back).then(image => {
        if (image) this.imageURL = image;else this.floatText = 'No image found.';
      });
    },
    autoComplete() {
      this.loadingAutocomplete = true;
      const basedOnFrontText = !!this.front;
      const textToBaseOn = (basedOnFrontText ? this.front : this.back).split('\n')[0];
      if (!textToBaseOn) {
        this.loadingAutocomplete = false;
        return console.log('no basis text');
      }
      autocomplete({
        front: this.front,
        back: this.back,
        basedOnFrontText,
        textToBaseOn,
        language: this.languageTools
      }).then(newValues => {
        // console.log(newValues)
        this.front = newValues.front || this.front;
        this.back = newValues.back || this.back;
        this.imageURL = newValues.image || this.imageURL || '';
        this.examples = newValues.examples || this.examples || undefined;
        if (this.examples) this.examples = this.examples.map(e => decodeHtmlEntities(e));
        if (newValues.shouldAutoSetImage && !newValues.image) this.autoSetImage();
        this.loadingAutocomplete = false;
      });
    }
  }
});
const decodeHtmlEntities = function (str) {
  return str.replace(/&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, '&');
};
// CONCATENATED MODULE: ./components/CardCreator.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CardCreatorvue_type_script_lang_js_ = (CardCreatorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/CardCreator.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(121)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CardCreatorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "c5a5d126",
  "273bdb10"
  
)

/* harmony default export */ var CardCreator = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {EditableTextFieldMarkdown: __webpack_require__(47).default,ImageLoader: __webpack_require__(48).default,FloatingText: __webpack_require__(68).default})


/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardCreator_vue_vue_type_style_index_0_id_c5a5d126_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardCreator_vue_vue_type_style_index_0_id_c5a5d126_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardCreator_vue_vue_type_style_index_0_id_c5a5d126_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardCreator_vue_vue_type_style_index_0_id_c5a5d126_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardCreator_vue_vue_type_style_index_0_id_c5a5d126_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".cardcreator[data-v-c5a5d126]{margin:0 auto;opacity:1;position:relative;transition:all .5s}.cardcreator.loading[data-v-c5a5d126]{opacity:.3;pointer-events:none}.cardcreator>*[data-v-c5a5d126]{display:block}.cardcreator .cardframe[data-v-c5a5d126]{border-radius:10px;overflow:hidden;position:relative}.cardcreator .imagecontainer[data-v-c5a5d126]{background:#f8f8f8;text-align:center}.cardcreator .imagecontainer>*[data-v-c5a5d126]{margin:0 auto;max-height:250px;max-width:80%}.cardcreator .examplefield[data-v-c5a5d126]{background:#f8f8f8;color:rgba(0,0,0,.6);font-size:.8rem;line-height:1.2;padding:0 2em 1em;text-align:center}.cardcreator .textfield[data-v-c5a5d126]{background:#f8f8f8;font-size:1.5rem;outline:0;padding:50px 20px;text-align:center;transition:background .2s}.cardcreator .textfield.editabletextediting[data-v-c5a5d126]{background:rgba(0,0,0,.05)}.cardcreator .textfield[data-v-c5a5d126]:after{content:\"\";font-size:.5em;font-weight:600;opacity:0;position:absolute;right:-10px;top:10px;transition:all .4s}.cardcreator .textfield[data-v-c5a5d126]:hover:not(.editabletextediting){background:rgba(0,0,0,.05);position:relative}.cardcreator .textfield[data-v-c5a5d126]:hover:not(.editabletextediting):after{color:rgba(0,0,0,.2);content:\"Click to Edit\";opacity:1;right:10px}.cardcreator .textfield.duplicate[data-v-c5a5d126]:after{color:#f52!important;content:\"Duplicate card!\"!important;opacity:1;right:10px}.cardcreator .back[data-v-c5a5d126]{border-top:1px solid #ddd;transition:.2s}.cardcreator .buttonlist[data-v-c5a5d126]{display:flex;margin-bottom:20px;margin-top:20px;width:100%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/EditableTextFieldMarkdown.vue?vue&type=template&id=5061fd58&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "editabletext",
    class: {
      editabletextediting: _vm.isEditing,
      placeholder: _vm.isPlaceholder
    },
    attrs: {
      "contenteditable": _vm.isEditing,
      "tabindex": "0"
    },
    domProps: {
      "innerHTML": _vm._s(_vm.isEditing ? _vm.displayText : _vm.displayMarkdown)
    },
    on: {
      "focus": _vm.startEdit,
      "click": _vm.startEdit,
      "input": function ($event) {
        _vm.$emit('changeText', _vm.sanitize(_vm.$el.innerHTML));
      },
      "blur": _vm.commitEdit,
      "paste": _vm.paste
    }
  }, []);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/EditableTextFieldMarkdown.vue?vue&type=template&id=5061fd58&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/EditableTextFieldMarkdown.vue?vue&type=script&lang=js&
const markdownit = __webpack_require__(28)({
  breaks: true,
  html: true,
  typographer: true
});
/* harmony default export */ var EditableTextFieldMarkdownvue_type_script_lang_js_ = ({
  props: {
    text: {
      required: false,
      default: '',
      type: String
    },
    lineBreaksAllowed: {
      required: false,
      default: true,
      type: Boolean
    },
    acceptBlank: {
      required: false,
      default: false,
      type: Boolean
    },
    disableEdits: {
      required: false,
      default: false,
      type: Boolean
    },
    placeholder: {
      required: false,
      default: '',
      type: String
    },
    focus: {
      required: false,
      default: false,
      type: Boolean
    }
  },
  components: {},
  data() {
    return {
      displayText: this.text,
      isEditing: false,
      metaDown: false,
      shiftDown: false,
      isPlaceholder: this.text.length === 0
    };
  },
  model: {
    prop: 'text',
    event: 'changeText'
  },
  computed: {
    displayMarkdown() {
      let markdown = (this.displayText.length > 0 ? this.displayText : this.text).split('\n').map(string => {
        const output = markdownit.render(string);
        return output || '<br />';
      }).join('').replace(/(<br \/>)*$/, '');
      // .replace(/<br ?\/?>\n?/gim, '')
      // .replace(/<\/?p>/gm, '')
      // console.log(markdown, this.displayText)
      // markdown = markdown
      //   .replace(/\n/, '<br />')
      //   .replace(/><br \/></, '><')
      return markdown;
    }
  },
  watch: {
    text(newText) {
      this.isPlaceholder = newText.length === 0;
      if (!this.isEditing) {
        this.resetTextTo(newText);
      }
    },
    disableEdits(isDisabled) {
      this.isEditing = false;
      this.metaDown = false;
      this.shiftDown = false;
    },
    focus(shouldFocus) {
      if (shouldFocus) this.$nextTick(() => {
        this.startEdit();
      });
    }
  },
  mounted() {
    window.addEventListener('keydown', this.keyDown);
    window.addEventListener('keyup', this.keyUp);
    if (this.isPlaceholder) this.displayText = this.placeholder;
    if (this.focus) this.startEdit();
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.keyDown);
    window.removeEventListener('keyup', this.keyUp);
  },
  methods: {
    startEdit() {
      if (this.isEditing || this.disableEdits) return;
      this.isEditing = true;
      // console.log('start edit')
      if (this.isPlaceholder) this.displayText = '';
      this.isPlaceholder = false;
      this.metaDown = false;
      this.shiftDown = false;
      this.$nextTick(() => {
        this.$el.focus();
        this.$nextTick(this.selectText);
      });
      this.$emit('startEdit', this.displayText);
    },
    resetTextTo(newText) {
      this.displayText = '';
      this.$el.innerHTML = '';
      this.$nextTick(() => {
        this.displayText = newText;
        if (!newText && this.placeholder && !this.isEditing) {
          this.displayText = this.placeholder;
          this.isPlaceholder = true;
        }
      });
    },
    commitEdit() {
      if (window.getSelection) window.getSelection().removeAllRanges();else if (document.selection) document.selection.empty();
      this.isEditing = false;
      // console.log('commit edit')
      this.metaDown = false;
      this.shiftDown = false;
      const finalText = this.sanitize(this.$el.innerHTML);
      if (finalText.length > 0) {
        this.displayText = finalText;
        this.$emit('endEdit', finalText);
      } else this.resetTextTo(this.text);
    },
    keyDown(event) {
      if (!this.isEditing || this.disableEdits) return;
      if (event.key === 'Meta') this.metaDown = true;
      if (event.key === 'Shift') this.shiftDown = true;
      if (event.key === 'Enter' && !this.lineBreaksAllowed) this.commitEdit();
      if (event.key === 'Enter' && this.metaDown) this.commitEdit();
      if (event.key === 'Tab' && this.shiftDown) this.$emit('prev', event);
      if (event.key === 'Tab') this.$emit('next', event);
      if (event.key === 'Escape') {
        this.resetTextTo(this.text);
        this.$nextTick(this.commitEdit);
      }
    },
    keyUp(event) {
      if (!this.isEditing || this.disableEdits) return;
      if (event.key === 'Meta') this.metaDown = false;
      if (event.key === 'Shift') this.shiftDown = false;
    },
    selectText() {
      if (document.body.createTextRange) {
        const range = document.body.createTextRange();
        range.moveToElementText(this.$el);
        range.select();
      } else if (window.getSelection) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(this.$el);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    },
    sanitize(text) {
      const sanitizedText = text.replace(/<div>/g, '\n').replace(/\n<br ?\/?>/g, '\n').replace(/<br ?\/?>/g, '\n').replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/^[\s\n\t]*/g, '');
      // .replace(/[\s\n\t]*$/g, '')
      return sanitizedText;
    },
    paste(e) {
      e.stopPropagation();
      e.preventDefault();

      // get clipboard data
      const clipboardData = e.clipboardData || window.clipboardData;
      const pastedData = this.sanitize(clipboardData.getData('Text'));

      // check for image
      if (/.(jpe?g|png|gif|webm|bmp)$/gi.test(pastedData)) return this.$emit('setImageURL', pastedData);
      if (/^data:/gi.test(pastedData)) return alert(`that's image data, not a link! make sure you get an image url that ends in .jpg, .png, .gif, etc.`);
      const existingText = document.activeElement.innerText;
      const selected = getSelectedText(this.$el);
      const newText = existingText.substring(0, selected.start) + pastedData + existingText.substring(selected.end);
      this.displayText = newText;
      this.$emit('changeText', newText);
      this.$nextTick(this.moveCursorToEnd);
    },
    moveCursorToEnd() {
      let range, selection;
      if (document.createRange) {
        range = document.createRange();
        range.selectNodeContents(this.$el);
        range.collapse(false);
        selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
      } else if (document.selection) {
        range = document.body.createTextRange();
        range.moveToElementText(this.$el);
        range.collapse(false);
        range.select();
      }
    }
  }
});
function getSelectedText(el) {
  const getTextSelection = () => {
    const selection = window.getSelection();
    if (selection != null && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      return {
        start: getTextLength(el, range.startContainer, range.startOffset),
        end: getTextLength(el, range.endContainer, range.endOffset)
      };
    } else return null;
  };
  const getTextLength = function (parent, node, offset) {
    let textLength = 0;
    // console.log('1', node, node.nodeName)
    if (node.nodeName === '#text') textLength += offset;else for (let i = 0; i < offset; i++) textLength += getNodeTextLength(node.childNodes[i]);
    if (node !== parent) textLength += getTextLength(parent, node.parentNode, getNodeOffset(node));
    return textLength;
  };
  const getNodeTextLength = function (node) {
    let textLength = 0;
    // console.log('2', node, node.nodeName)
    if (node.nodeName === 'BR') textLength = 1;else if (node.nodeName === '#text') textLength = node.nodeValue.length;else if (node.childNodes !== null) for (let i = 0; i < node.childNodes.length; i++) textLength += getNodeTextLength(node.childNodes[i]);
    return textLength;
  };
  const getNodeOffset = function (node) {
    return node == null ? -1 : 1 + getNodeOffset(node.previousSibling);
  };
  return getTextSelection(document.activeElement);
}
// CONCATENATED MODULE: ./components/EditableTextFieldMarkdown.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_EditableTextFieldMarkdownvue_type_script_lang_js_ = (EditableTextFieldMarkdownvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/EditableTextFieldMarkdown.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(59)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_EditableTextFieldMarkdownvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6e2cb758"
  
)

/* harmony default export */ var EditableTextFieldMarkdown = __webpack_exports__["default"] = (component.exports);

/***/ }),

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

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(60);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("4dd496eb", content, true, context)
};

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

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableTextFieldMarkdown_vue_vue_type_style_index_0_id_5061fd58_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableTextFieldMarkdown_vue_vue_type_style_index_0_id_5061fd58_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableTextFieldMarkdown_vue_vue_type_style_index_0_id_5061fd58_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableTextFieldMarkdown_vue_vue_type_style_index_0_id_5061fd58_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableTextFieldMarkdown_vue_vue_type_style_index_0_id_5061fd58_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".editabletext.editabletextediting:empty:before{content:\"﻿\"}.editabletext{cursor:pointer;white-space:normal}.editabletext.placeholder{color:rgba(0,0,0,.2)}.editabletext.editabletextediting{cursor:text;white-space:pre-wrap}.editabletext div,.editabletext h1,.editabletext h2,.editabletext h3,.editabletext h4,.editabletext ol,.editabletext p,.editabletext ul{margin:0;padding:0}.editabletext ol,.editabletext ul{padding:0 10%;text-align:left}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


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


/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FloatingText.vue?vue&type=template&id=d16cf874&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.textToFloat ? _c('div', {
    staticClass: "floattext",
    style: {
      transform: `translateY(${_vm.offset}px)`,
      color: _vm.color
    }
  }, [_vm._ssrNode(_vm._ssrEscape("\n\t\t" + _vm._s(_vm.textToFloat) + "\n\t"))]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/FloatingText.vue?vue&type=template&id=d16cf874&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FloatingText.vue?vue&type=script&lang=js&
/* harmony default export */ var FloatingTextvue_type_script_lang_js_ = ({
  props: {
    text: {},
    offset: {
      default: 0
    },
    color: {
      default: 'green'
    }
  },
  data() {
    return {
      textToFloat: null
    };
  },
  watch: {
    text(newText) {
      this.textToFloat = null;
      this.$nextTick(() => this.textToFloat = this.text);
    }
  }
});
// CONCATENATED MODULE: ./components/FloatingText.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FloatingTextvue_type_script_lang_js_ = (FloatingTextvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/FloatingText.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(97)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FloatingTextvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "d16cf874",
  "044c6df2"
  
)

/* harmony default export */ var FloatingText = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(98);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("7ae8b474", content, true, context)
};

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatingText_vue_vue_type_style_index_0_id_d16cf874_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatingText_vue_vue_type_style_index_0_id_d16cf874_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatingText_vue_vue_type_style_index_0_id_d16cf874_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatingText_vue_vue_type_style_index_0_id_d16cf874_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatingText_vue_vue_type_style_index_0_id_d16cf874_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".floattext[data-v-d16cf874]{animation:pointsscroll-d16cf874 1.5s ease-out normal forwards;font-weight:600;left:0;pointer-events:none;position:absolute;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:100%;z-index:1000}@keyframes pointsscroll-d16cf874{0%{bottom:0;opacity:0}50%{opacity:1}to{bottom:100px;opacity:0}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(122);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("208ef948", content, true, context)
};

/***/ })

};;
//# sourceMappingURL=card-creator.js.map