exports.ids = [20,2,3,4,5,7,8,9,10,11,12,13,15,16,17,18,19,21,22,23,24,25];
exports.modules = Array(45).concat([
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CardTools.vue?vue&type=template&id=148d4cc4&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.id ? _c('div', {
    staticClass: "cardtools",
    on: {
      "mouseover": function ($event) {
        !_vm.isMobile ? _vm.open = true : false;
      },
      "click": _vm.toggle,
      "mouseleave": function ($event) {
        !_vm.isMobile ? _vm.open = false : false;
      }
    }
  }, [_vm._ssrNode("<div" + _vm._ssrClass("icon", {
    open: _vm.open
  }) + " data-v-148d4cc4><svg width=\"50px\" height=\"50px\" viewBox=\"0 0 50 50\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" data-v-148d4cc4><g fill=\"#000000\" fill-rule=\"evenodd\" data-v-148d4cc4><path d=\"M25,33.76 C26.5600078,33.76 28.0199932,33.360004 29.38,32.56 C30.7400068,31.759996 31.819996,30.6900067 32.62,29.35 C33.420004,28.0099933 33.82,26.5600078 33.82,25 C33.82,23.4399922 33.420004,21.9800068 32.62,20.62 C31.819996,19.2599932 30.7400068,18.180004 29.38,17.38 C28.0199932,16.579996 26.5600078,16.18 25,16.18 C23.4399922,16.18 21.9900067,16.579996 20.65,17.38 C19.3099933,18.180004 18.240004,19.2599932 17.44,20.62 C16.639996,21.9800068 16.24,23.4399922 16.24,25 C16.24,26.5600078 16.639996,28.0099933 17.44,29.35 C18.240004,30.6900067 19.3099933,31.759996 20.65,32.56 C21.9900067,33.360004 23.4399922,33.76 25,33.76 Z M43.66,27.46 L48.88,31.54 C49.1200012,31.740001 49.2599998,31.9999984 49.3,32.32 C49.3400002,32.6400016 49.2800008,32.9399986 49.12,33.22 L44.08,41.86 C43.9199992,42.1400014 43.7100013,42.3199996 43.45,42.4 C43.1899987,42.4800004 42.9000016,42.4600006 42.58,42.34 L36.4,39.88 C34.799992,41.0400058 33.3800062,41.8599976 32.14,42.34 L31.24,48.88 C31.1599996,49.2000016 31.0100011,49.459999 30.79,49.66 C30.5699989,49.860001 30.3200014,49.96 30.04,49.96 L19.96,49.96 C19.6799986,49.96 19.4300011,49.860001 19.21,49.66 C18.9899989,49.459999 18.8600002,49.2000016 18.82,48.88 L17.86,42.34 C16.1799916,41.6599966 14.7800056,40.8400048 13.66,39.88 L7.42,42.34 C6.7799968,42.6200014 6.2800018,42.460003 5.92,41.86 L0.88,33.22 C0.7199992,32.9399986 0.6599998,32.6400016 0.7,32.32 C0.7400002,31.9999984 0.8799988,31.740001 1.12,31.54 L6.4,27.46 C6.3199996,26.8999972 6.28,26.0800054 6.28,25 C6.28,23.9199946 6.3199996,23.1000028 6.4,22.54 L1.12,18.46 C0.8799988,18.259999 0.7400002,18.0000016 0.7,17.68 C0.6599998,17.3599984 0.7199992,17.0600014 0.88,16.78 L5.92,8.14 C6.2800018,7.539997 6.7799968,7.3799986 7.42,7.66 L13.66,10.12 C15.1000072,9.0399946 16.4999932,8.2200028 17.86,7.66 L18.82,1.12 C18.8600002,0.7999984 18.9899989,0.540001 19.21,0.34 C19.4300011,0.139999 19.6799986,0.04 19.96,0.04 L30.04,0.04 C30.3200014,0.04 30.5699989,0.139999 30.79,0.34 C31.0100011,0.540001 31.1599996,0.7999984 31.24,1.12 L32.14,7.66 C33.7000078,8.260003 35.1199936,9.0799948 36.4,10.12 L42.58,7.66 C42.9000016,7.5399994 43.1899987,7.5199996 43.45,7.6 C43.7100013,7.6800004 43.9199992,7.8599986 44.08,8.14 L49.12,16.78 C49.2800008,17.0600014 49.3400002,17.3599984 49.3,17.68 C49.2599998,18.0000016 49.1200012,18.259999 48.88,18.46 L43.66,22.54 C43.7400004,23.1000028 43.78,23.9199946 43.78,25 C43.78,26.0800054 43.7400004,26.8999972 43.66,27.46 Z\" data-v-148d4cc4></path></g></svg> <div" + _vm._ssrClass("panel", {
    open: _vm.open,
    left: _vm.left
  }) + " data-v-148d4cc4><div class=\"stats sub\" data-v-148d4cc4>" + (_vm.totalReviews > 0 ? "<div data-v-148d4cc4>" + _vm._ssrEscape("\n            " + _vm._s(_vm.totalReviews) + " review" + _vm._s(_vm.totalReviews === 1 ? '' : 's') + "\n          ") + "</div> <div data-v-148d4cc4>" + _vm._ssrEscape(_vm._s(parseInt(_vm.ok / _vm.totalReviews * 100)) + "% success") + "</div>" : "<div data-v-148d4cc4>This card is new.</div>") + "</div> <div class=\"button\" data-v-148d4cc4>Swap Front/Back</div> " + (_vm.imageURL ? "<div class=\"button\" data-v-148d4cc4>\n        Remove Image\n      </div>" : "<div class=\"button\" data-v-148d4cc4>Set Image</div> <div class=\"button\" data-v-148d4cc4>Auto-Set Image</div>") + " " + (_vm.nextReview > Date.now() ? "<div class=\"button\" data-v-148d4cc4>\n        Review Now\n      </div>" : "<!---->") + " " + (_vm.$store.state.setList.length > 1 ? "<div class=\"button movetobutton\" data-v-148d4cc4>\n        Move to Set...\n        " + (_vm.moveToSetOpen ? "<div" + _vm._ssrClass("secondarypanel", {
    mobile: _vm.isMobile
  }) + " data-v-148d4cc4>" + _vm._ssrList(_vm.$store.state.setList.filter(s => `${s.id}` !== `${_vm.realSetId}`), function (set) {
    return "<div class=\"button\" data-v-148d4cc4>" + _vm._ssrEscape("\n            " + _vm._s(set.name) + "\n          ") + "</div>";
  }) + "</div>" : "<!---->") + "</div>" : "<!---->") + " <div class=\"button\" data-v-148d4cc4>" + _vm._ssrEscape("\n        " + _vm._s(_vm.suspended ? 'Unsuspend' : 'Suspend') + "\n      ") + "</div> <div class=\"button\" data-v-148d4cc4>Delete</div></div></div>")]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CardTools.vue?vue&type=template&id=148d4cc4&scoped=true&

// EXTERNAL MODULE: ./assets/commonFunctions.js
var commonFunctions = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CardTools.vue?vue&type=script&lang=js&

/* harmony default export */ var CardToolsvue_type_script_lang_js_ = ({
  props: {
    id: {
      required: true
    },
    setId: {
      required: true
    },
    totalReviews: {
      default: 0
    },
    ok: {
      default: 0
    },
    front: {},
    back: {},
    nextReview: {},
    suspended: {},
    left: {
      default: false
    },
    imageURL: {}
  },
  data() {
    return {
      open: false,
      moveToSetOpen: false,
      realSetId: this.setId
    };
  },
  computed: {
    isMobile() {
      return this.$store.state.isMobile;
    },
    settings() {
      var _this$$store$state$se;
      return (_this$$store$state$se = this.$store.state.setList) === null || _this$$store$state$se === void 0 ? void 0 : _this$$store$state$se.find(s => s.id === this.$store.state.currentSetId).settings;
    }
  },
  watch: {
    id() {
      this.open = false;
    }
  },
  mounted() {},
  methods: {
    msToString: commonFunctions["msToString"],
    toggle(e) {
      const path = e.path || e.composedPath && e.composedPath();
      if (this.$store.state.isMobile && !path.includes(this.$refs.movetobutton)) this.open = !this.open;
      if (this.open) window.addEventListener('click', this.checkClickToClose);
    },
    swapSides() {
      this.$store.commit('updateCard', {
        id: this.id,
        front: this.back,
        back: this.front
      });
      this.open = false;
    },
    moveToSet(toId) {
      this.$store.commit('moveCard', {
        id: this.id,
        from: this.realSetId,
        to: toId
      });
      this.open = false;
      this.realSetId = toId;
    },
    reviewNow() {
      this.$store.commit('updateCard', {
        id: this.id,
        nextReview: 1
      });
      this.open = false;
    },
    suspendCard() {
      this.$store.commit('updateCard', {
        id: this.id,
        suspended: !this.suspended
      });
      this.open = false;
    },
    deleteCard() {
      this.$store.commit('deleteCard', this.id);
      this.$emit('done');
      this.showBack = false;
      this.$nextTick(() => {
        try {
          this.$refs.deleteButton.blur();
        } catch (e) {}
      });
      this.open = false;
    },
    checkClickToClose(e) {
      const path = e.path || e.composedPath && e.composedPath();
      if (!path.includes(this.$el)) {
        this.open = false;
        window.removeEventListener('click', this.checkClickToClose);
      }
    },
    addImageURL() {
      const link = window.prompt('Enter an image url!');
      if (!link) return;
      this.$emit('setImageURL', link);
    },
    autoAddImageURL() {
      this.$emit('setImageURL', 'loading');
      Object(commonFunctions["getRandomImage"])(this.front || this.back).then(image => {
        if (image) this.$emit('setImageURL', image);
      });
    },
    removeImageURL() {
      this.$emit('setImageURL', '');
    }
  }
});
// CONCATENATED MODULE: ./components/CardTools.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CardToolsvue_type_script_lang_js_ = (CardToolsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/CardTools.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(63)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CardToolsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "148d4cc4",
  "fc3c6cb2"
  
)

/* harmony default export */ var CardTools = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AutoSpeaker.vue?vue&type=template&id=01e7e9b1&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div");
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/AutoSpeaker.vue?vue&type=template&id=01e7e9b1&

// EXTERNAL MODULE: ./assets/commonFunctions.js
var commonFunctions = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AutoSpeaker.vue?vue&type=script&lang=js&

/* harmony default export */ var AutoSpeakervue_type_script_lang_js_ = ({
  props: {
    text: {
      default: ''
    },
    language: {
      required: true
    }
  },
  data() {
    return {
      speaker: null
    };
  },
  computed: {
    settings() {
      var _this$$store$state$se;
      return (_this$$store$state$se = this.$store.state.setList) === null || _this$$store$state$se === void 0 ? void 0 : _this$$store$state$se.find(s => s.id === this.$store.state.currentSetId).settings;
    }
  },
  watch: {
    language(newLang) {
      this.spawnSpeaker();
    },
    text(newText) {
      if (newText) this.speakWord();
    }
  },
  methods: {
    spawnSpeaker() {
      if (!window.speechSynthesis) return;
      this.speaker = new SpeechSynthesisUtterance();
      this.speaker.lang = this.language;
      this.speaker.volume = 0.4;
      this.speaker.rate = this.settings.speechSpeed || 0.8;
      const possibleVoices = window.speechSynthesis.getVoices().filter(v => v.lang.split('-')[0].toLowerCase() === this.language);
      const preferredSpeakers = {
        es: ['Google ', 'Paulina', 'Mónica'],
        en: ['Google ', 'Samantha', 'Karen', 'Daniel'],
        any: ['Google ']
      };
      const possibleSpeakerNames = [...(preferredSpeakers[this.language] || []), ...(preferredSpeakers.any || [])];
      for (let sn of possibleSpeakerNames) {
        const voice = possibleVoices.find(v => v.name.startsWith(sn));
        if (voice) {
          this.speaker.voice = voice;
          break;
        }
      }
      if (!this.speaker.voice) {
        this.speaker.voice = possibleVoices[0];
        // random
        this.speaker.voice = possibleVoices[Math.floor(Math.random() * possibleVoices.length)];
      }
      // console.log(this.speaker.voice.name)
    },

    speakWord() {
      this.spawnSpeaker();
      if (!this.speaker) return;
      this.speaker.text = this.text;
      window.speechSynthesis.speak(this.speaker);
    }
  }
});
// CONCATENATED MODULE: ./components/AutoSpeaker.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AutoSpeakervue_type_script_lang_js_ = (AutoSpeakervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/AutoSpeaker.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AutoSpeakervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "ef923668"
  
)

/* harmony default export */ var AutoSpeaker = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 47 */
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
/* 48 */
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
/* 49 */
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
/* 50 */
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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(64);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("7b23e2ae", content, true, context)
};

/***/ }),
/* 52 */
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
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Card.vue?vue&type=template&id=73c0c912&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card roundframe",
    class: {
      new: !_vm.totalReviews,
      mini: _vm.mini,
      suspended: _vm.suspended
    }
  }, [_c('CardTools', {
    staticClass: "topleft",
    attrs: {
      "id": _vm.id,
      "totalReviews": _vm.totalReviews,
      "ok": _vm.ok,
      "front": _vm.front,
      "back": _vm.back,
      "nextReview": _vm.nextReview,
      "setId": _vm.set,
      "suspended": _vm.suspended,
      "imageURL": _vm.imageURL
    },
    on: {
      "setImageURL": _vm.setImageURL
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"front\" data-v-73c0c912>", "</div>", [_c('EditableTextFieldMarkdown', {
    staticClass: "textfield",
    class: {
      newcard: _vm.isNewCard
    },
    attrs: {
      "text": _vm.reverse ? _vm.back : _vm.front
    },
    on: {
      "startEdit": _vm.startEdit,
      "endEdit": function ($event) {
        return _vm.saveEditedCard(_vm.reverse ? 'back' : 'front', ...arguments);
      },
      "setImageURL": _vm.setImageURL
    }
  }), _vm._ssrNode(" " + (_vm.examples ? "<div class=\"examplefield\" data-v-73c0c912>" + _vm._ssrList(_vm.examples, function (e) {
    return "<div data-v-73c0c912>" + _vm._ssrEscape("\n        " + _vm._s(e.split('@')[0]) + "\n      ") + "</div>";
  }) + "</div>" : "<!---->") + " "), _vm.imageURL && !_vm.reverse ? _c('ImageLoader', {
    attrs: {
      "url": _vm.imageURL
    },
    on: {
      "failed": function ($event) {
        return _vm.setImageURL(null);
      }
    }
  }) : _vm._e(), _vm._ssrNode(" "), _vm.reverse && _vm.settings.languageTools && _vm.forStudy ? _c('StudyExtras', {
    attrs: {
      "text": _vm.back,
      "secondaryText": _vm.front
    }
  }) : _vm._e()], 2), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrClass("back", {
    pointer: _vm.showBack === false && _vm.forStudy
  }) + " data-v-73c0c912>", "</div>", [_vm._ssrNode("<div" + _vm._ssrClass(null, {
    hideanswer: !_vm.showBack && _vm.forStudy
  }) + " data-v-73c0c912>", "</div>", [_c('EditableTextFieldMarkdown', {
    staticClass: "textfield",
    class: {
      newcard: _vm.isNewCard
    },
    attrs: {
      "text": _vm.reverse ? _vm.front : _vm.back
    },
    on: {
      "startEdit": _vm.startEdit,
      "endEdit": function ($event) {
        return _vm.saveEditedCard(_vm.reverse ? 'front' : 'back', ...arguments);
      },
      "setImageURL": _vm.setImageURL
    }
  }), _vm._ssrNode(" " + (_vm.examples ? "<div class=\"examplefield\" data-v-73c0c912>" + _vm._ssrList(_vm.examples, function (e) {
    return "<div data-v-73c0c912>" + _vm._ssrEscape("\n          " + _vm._s(e.split('@')[1]) + "\n        ") + "</div>";
  }) + "</div>" : "<!---->") + " "), _vm.imageURL && _vm.reverse ? _c('ImageLoader', {
    attrs: {
      "url": _vm.imageURL
    }
  }) : _vm._e(), _vm._ssrNode(" "), !_vm.reverse && _vm.settings.languageTools && _vm.forStudy ? _c('StudyExtras', {
    attrs: {
      "text": _vm.back,
      "secondaryText": _vm.front,
      "shown": _vm.showBack
    }
  }) : _vm._e()], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Card.vue?vue&type=template&id=73c0c912&scoped=true&

// EXTERNAL MODULE: ./components/EditableTextFieldMarkdown.vue + 4 modules
var EditableTextFieldMarkdown = __webpack_require__(47);

// EXTERNAL MODULE: ./components/CardTools.vue + 4 modules
var CardTools = __webpack_require__(45);

// EXTERNAL MODULE: ./components/StudyExtras.vue + 4 modules
var StudyExtras = __webpack_require__(57);

// EXTERNAL MODULE: ./components/ImageLoader.vue + 4 modules
var ImageLoader = __webpack_require__(48);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Card.vue?vue&type=script&lang=js&




/* harmony default export */ var Cardvue_type_script_lang_js_ = ({
  props: {
    reverse: {
      default: false
    },
    front: {},
    back: {},
    id: {
      required: true
    },
    set: {
      required: true
    },
    timeMod: {
      default: 0
    },
    nextReview: {
      default: 0
    },
    totalReviews: {
      default: 0
    },
    created: {
      default: () => new Date().getTime()
    },
    ok: {
      default: 0
    },
    again: {
      default: 0
    },
    suspended: {
      default: false
    },
    imageURL: {},
    examples: {},
    forStudy: {
      default: true
    },
    showBack: {
      default: false
    },
    mini: {
      default: false
    }
  },
  components: {
    EditableTextFieldMarkdown: EditableTextFieldMarkdown["default"],
    CardTools: CardTools["default"],
    StudyExtras: StudyExtras["default"],
    ImageLoader: ImageLoader["default"]
  },
  computed: {
    settings() {
      var _this$$store$state$se;
      return (_this$$store$state$se = this.$store.state.setList) === null || _this$$store$state$se === void 0 ? void 0 : _this$$store$state$se.find(s => s.id === this.$store.state.currentSetId).settings;
    },
    isEditingText() {
      return this.$store.state.isEditingText;
    },
    isNewCard() {
      return !this.totalReviews || this.totalReviews === 0;
    }
  },
  mounted() {
    window.addEventListener('keydown', this.keyDown);
    window.addEventListener('keyup', this.keyUp);
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.keyDown);
    window.removeEventListener('keyup', this.keyUp);
  },
  methods: {
    startEdit() {
      if (this.$store.state.appState === 'study') this.$store.commit('setAppState', 'editCard');
      this.$store.commit('setIsEditingText', true);
    },
    saveEditedCard(side, newValue) {
      if (this.$store.state.appState === 'editCard') this.$store.commit('setAppState', 'study');
      this.$store.commit('setIsEditingText', false);
      if (this[side] === newValue) return;
      this.$store.commit('updateCard', {
        id: this.id,
        [side]: newValue
      });
    },
    setImageURL(url) {
      this.$store.commit('updateCard', {
        id: this.id,
        imageURL: url
      });
    }
  }
});
// CONCATENATED MODULE: ./components/Card.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Cardvue_type_script_lang_js_ = (Cardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Card.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(79)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Cardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "73c0c912",
  "3a12ab44"
  
)

/* harmony default export */ var Card = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CardTools: __webpack_require__(45).default,EditableTextFieldMarkdown: __webpack_require__(47).default,ImageLoader: __webpack_require__(48).default,StudyExtras: __webpack_require__(57).default})


/***/ }),
/* 54 */
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
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(72);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("72faea6f", content, true, context)
};

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/EditableTextField.vue?vue&type=template&id=37251bf7&
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
      "innerHTML": _vm._s(_vm.displayText)
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

// CONCATENATED MODULE: ./components/EditableTextField.vue?vue&type=template&id=37251bf7&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/EditableTextField.vue?vue&type=script&lang=js&
/* harmony default export */ var EditableTextFieldvue_type_script_lang_js_ = ({
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
  computed: {},
  watch: {
    text(newText) {
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
      if (finalText.length > 0) this.$emit('endEdit', finalText);else this.resetTextTo(this.text);
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
      const sanitizedText = text.replace(/<div>/g, '\n').replace(/<br\s?\/?>/g, '\n').replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/^[\s\n\t]*/g, '');
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
// CONCATENATED MODULE: ./components/EditableTextField.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_EditableTextFieldvue_type_script_lang_js_ = (EditableTextFieldvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/EditableTextField.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(92)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_EditableTextFieldvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "0b11dfc5"
  
)

/* harmony default export */ var EditableTextField = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/StudyExtras.vue?vue&type=template&id=2c57b58b&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.text ? _c('div', {
    staticClass: "extras"
  }, [_vm.settings.languageTools ? _c('AutoSpeaker', {
    attrs: {
      "text": _vm.textToSpeak,
      "language": _vm.settings.languageTools
    }
  }) : _vm._e(), _vm._ssrNode(" "), _vm.settings.languageTools === 'ja' ? _c('StudyExtrasJA', {
    attrs: {
      "text": _vm.text,
      "secondary-text": _vm.secondaryText
    }
  }) : _vm._e(), _vm._ssrNode(" <a class=\"fakelink sub\" data-v-2c57b58b>Speak it</a><span data-v-2c57b58b> ・ </span> <a target=\"_blank\"" + _vm._ssrAttr("href", _vm.pronunciationLink) + " class=\"sub\" data-v-2c57b58b>Native</a><span data-v-2c57b58b> ・ </span> <a target=\"_blank\"" + _vm._ssrAttr("href", _vm.translationLink) + " class=\"sub\" data-v-2c57b58b>Translation</a> " + (_vm.definitionLink ? "<span data-v-2c57b58b> ・ </span> <a target=\"_blank\"" + _vm._ssrAttr("href", _vm.definitionLink) + " class=\"sub\" data-v-2c57b58b>Definition</a>" : "<!---->"))], 2) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/StudyExtras.vue?vue&type=template&id=2c57b58b&scoped=true&

// EXTERNAL MODULE: ./components/AutoSpeaker.vue + 4 modules
var AutoSpeaker = __webpack_require__(46);

// EXTERNAL MODULE: ./components/StudyExtrasJA.vue + 4 modules
var StudyExtrasJA = __webpack_require__(54);

// EXTERNAL MODULE: ./assets/commonFunctions.js
var commonFunctions = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/StudyExtras.vue?vue&type=script&lang=js&



/* harmony default export */ var StudyExtrasvue_type_script_lang_js_ = ({
  components: {
    AutoSpeaker: AutoSpeaker["default"],
    StudyExtrasJA: StudyExtrasJA["default"]
  },
  props: {
    text: {
      default: ''
    },
    secondaryText: {
      default: ''
    },
    autoSpeak: {
      default: false
    },
    shown: {
      default: false
    }
  },
  data() {
    return {
      textToSpeak: ''
    };
  },
  computed: {
    settings() {
      var _this$$store$state$se;
      return (_this$$store$state$se = this.$store.state.setList) === null || _this$$store$state$se === void 0 ? void 0 : _this$$store$state$se.find(s => s.id === this.$store.state.currentSetId).settings;
    },
    searchString() {
      return this.text.replace(/\n.*/g, '');
    },
    searchWord() {
      return Object(commonFunctions["getKeyWord"])(this.searchString);
    },
    pronunciationLink() {
      return `https://forvo.com/word/${this.searchWord}/#${this.settings.languageTools}`;
    },
    translationLink() {
      return `https://translate.google.com/#${this.settings.languageTools}/en/${this.searchString}`;
    },
    definitionLink() {
      if (this.settings.languageTools === 'es') return `https://www.spanishdict.com/translate/${this.searchString}`;
    }
  },
  watch: {
    shown(willShow) {
      if (willShow && this.settings.autoSpeak) this.speakWord();
    }
  },
  mounted() {},
  methods: {
    speakWord() {
      this.textToSpeak = this.searchString;
      setTimeout(() => this.textToSpeak = '', 300);
    }
  }
});
// CONCATENATED MODULE: ./components/StudyExtras.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_StudyExtrasvue_type_script_lang_js_ = (StudyExtrasvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/StudyExtras.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(71)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_StudyExtrasvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2c57b58b",
  "74d625f0"
  
)

/* harmony default export */ var StudyExtras = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {AutoSpeaker: __webpack_require__(46).default,StudyExtrasJA: __webpack_require__(54).default})


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(80);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("4ce1644b", content, true, context)
};

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableTextFieldMarkdown_vue_vue_type_style_index_0_id_5061fd58_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableTextFieldMarkdown_vue_vue_type_style_index_0_id_5061fd58_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableTextFieldMarkdown_vue_vue_type_style_index_0_id_5061fd58_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableTextFieldMarkdown_vue_vue_type_style_index_0_id_5061fd58_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableTextFieldMarkdown_vue_vue_type_style_index_0_id_5061fd58_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 60 */
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
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageLoader_vue_vue_type_style_index_0_id_2f1aa15a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageLoader_vue_vue_type_style_index_0_id_2f1aa15a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageLoader_vue_vue_type_style_index_0_id_2f1aa15a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageLoader_vue_vue_type_style_index_0_id_2f1aa15a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageLoader_vue_vue_type_style_index_0_id_2f1aa15a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 62 */
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
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardTools_vue_vue_type_style_index_0_id_148d4cc4_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardTools_vue_vue_type_style_index_0_id_148d4cc4_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardTools_vue_vue_type_style_index_0_id_148d4cc4_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardTools_vue_vue_type_style_index_0_id_148d4cc4_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardTools_vue_vue_type_style_index_0_id_148d4cc4_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".button[data-v-148d4cc4]{background:#eee;border-top:1px solid #ddd;cursor:pointer;padding:12px 5px;position:relative;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:150px}.button[data-v-148d4cc4]:hover{background:#ddd}.button[data-v-148d4cc4]:first-of-type{border-top-right-radius:10px}.button[data-v-148d4cc4]:last-of-type{border-bottom-left-radius:10px;border-bottom-right-radius:10px}.button[data-v-148d4cc4]:first-of-type:last-of-type{border-bottom-left-radius:0}.button[data-v-148d4cc4]:first-child{border-top:none}.cardtools .icon[data-v-148d4cc4]{align-items:center;border-radius:10px;cursor:pointer;display:flex;height:30px;justify-content:center;position:relative;width:30px;z-index:2}.cardtools .icon svg[data-v-148d4cc4]{height:50%;opacity:.1;width:50%;z-index:2}.cardtools .icon.open[data-v-148d4cc4]{background:#eee;border-bottom-left-radius:0;border-bottom-right-radius:0;z-index:3}.cardtools .panel[data-v-148d4cc4]{background:#eee;border-radius:10px;border-top-left-radius:0;color:#000;left:0;position:absolute;top:100%;width:150px}.cardtools .panel[data-v-148d4cc4]:not(.open){display:none}.cardtools .panel.left[data-v-148d4cc4]{border-radius:10px;border-top-right-radius:0;left:auto;right:0}.cardtools .panel .stats[data-v-148d4cc4]{padding:10px 20px}.secondarypanel[data-v-148d4cc4]{left:100%;position:absolute;top:0}.secondarypanel.mobile[data-v-148d4cc4]{color:#555;font-size:.85em;left:-5px;position:relative;top:12px}.secondarypanel.mobile .button[data-v-148d4cc4]{border-radius:0}.secondarypanel.mobile .button[data-v-148d4cc4]:before{color:#555;content:\"→\"}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StudyExtrasJA_vue_vue_type_style_index_0_id_40411f44_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StudyExtrasJA_vue_vue_type_style_index_0_id_40411f44_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StudyExtrasJA_vue_vue_type_style_index_0_id_40411f44_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StudyExtrasJA_vue_vue_type_style_index_0_id_40411f44_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StudyExtrasJA_vue_vue_type_style_index_0_id_40411f44_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".examplespopup[data-v-40411f44]{background:#f8f8f8;left:0;padding:20px;pointer-events:none;position:absolute;top:0;width:100%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 67 */
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
/* 68 */
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
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(86);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("5cd87f29", content, true, context)
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(88);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("d16080f8", content, true, context)
};

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StudyExtras_vue_vue_type_style_index_0_id_2c57b58b_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StudyExtras_vue_vue_type_style_index_0_id_2c57b58b_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StudyExtras_vue_vue_type_style_index_0_id_2c57b58b_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StudyExtras_vue_vue_type_style_index_0_id_2c57b58b_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StudyExtras_vue_vue_type_style_index_0_id_2c57b58b_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".extras[data-v-2c57b58b]{padding-bottom:20px}.fakelink[data-v-2c57b58b]{cursor:pointer;-webkit-text-decoration:underline;text-decoration:underline}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Browser.vue?vue&type=template&id=017f8176&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "browser"
  }, [_vm._ssrNode("<div class=\"tools\" data-v-017f8176>", "</div>", [_vm._ssrNode("<input placeholder=\"Type to filter...\"" + _vm._ssrAttr("value", _vm.searchTerm) + " class=\"searchbar\" data-v-017f8176> "), _vm._ssrNode("<div class=\"buttonlist\" data-v-017f8176>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.sortBy,
      expression: "sortBy"
    }],
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.sortBy = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "newest"
    }
  }, [_vm._v(_vm._s(_vm.isMobile ? '' : 'Sort by ') + "Newest")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "oldest"
    }
  }, [_vm._v(_vm._s(_vm.isMobile ? '' : 'Sort by ') + "Oldest")]), _vm._v(" "), _vm.allPresentSets.length > 1 ? _c('option', {
    attrs: {
      "value": "sets"
    }
  }, [_vm._v("\n          " + _vm._s(_vm.isMobile ? 'By ' : 'Sort by ') + "Set\n        ")]) : _vm._e()]), _vm._ssrNode(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.typeFilter,
      expression: "typeFilter"
    }],
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.typeFilter = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "all"
    }
  }, [_vm._v("All Cards")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "new"
    }
  }, [_vm._v("New")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "notnew"
    }
  }, [_vm._v("Not New")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "mastered"
    }
  }, [_vm._v("Mastered")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "trouble"
    }
  }, [_vm._v("Trouble")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "suspended"
    }
  }, [_vm._v("Suspended")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "notsuspended"
    }
  }, [_vm._v("Not Suspended")])]), _vm._ssrNode(" "), _vm.allPresentSets.length > 1 ? _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.setFilter,
      expression: "setFilter"
    }],
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.setFilter = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "all"
    }
  }, [_vm._v("All Sets")]), _vm._v(" "), _vm._l(_vm.allPresentSets, function (set) {
    return _c('option', {
      key: set.id,
      domProps: {
        "value": set.id
      }
    }, [_vm._v("\n          " + _vm._s(set.name) + "\n        ")]);
  })], 2) : _vm._e()], 2), _vm._ssrNode(" "), _vm.selectedCards.length ? [_vm._ssrNode("<div class=\"buttonlist withoverflow\" data-v-017f8176>", "</div>", [_vm._ssrNode("<button data-v-017f8176>" + _vm._ssrEscape("\n          Deselect" + _vm._s(_vm.isMobile ? '' : ' All') + "\n        ") + "</button> "), _c('Dropdown', {
    attrs: {
      "label": `Move ${!_vm.isMobile ? _vm.selectedCards.length : ''} Card${_vm.selectedCards.length === 1 ? '' : 's'}`
    }
  }, _vm._l(_vm.$store.state.setList, function (set) {
    return _c('div', {
      key: set.id,
      staticClass: "button",
      on: {
        "key": set.id,
        "click": function ($event) {
          return _vm.moveAll(set.id);
        }
      }
    }, [_vm._v("\n            " + _vm._s(set.name) + "\n          ")]);
  }), 0), _vm._ssrNode(" <button data-v-017f8176>\n          Un/Suspend" + (!_vm.isMobile ? "<span data-v-017f8176>" + _vm._ssrEscape("\n            " + _vm._s(_vm.selectedCards.length) + " Card" + _vm._s(_vm.selectedCards.length === 1 ? '' : 's')) + "</span>" : "<!---->") + "</button> <button data-v-017f8176>\n          Delete" + (!_vm.isMobile ? "<span data-v-017f8176>" + _vm._ssrEscape("\n            " + _vm._s(_vm.selectedCards.length) + " Card" + _vm._s(_vm.selectedCards.length === 1 ? '' : 's')) + "</span>" : "<!---->") + "</button>")], 2)] : _vm._e()], 2), _vm._ssrNode(" "), _vm.filteredCards.length ? [_vm._l(_vm.clampedCards, function (card) {
    return _vm.inline ? _c('CardInline', _vm._b({
      key: card.id,
      attrs: {
        "forceDeselect": _vm.forceDeselect,
        "showSet": _vm.allPresentSets.length > 1
      },
      on: {
        "select": _vm.select,
        "deselect": _vm.deselect
      }
    }, 'CardInline', card, false)) : _vm._e();
  }), _vm._ssrNode(" "), !_vm.inline ? _vm._ssrNode("<div class=\"twoupcardlist\" data-v-017f8176>", "</div>", _vm._l(_vm.clampedCards, function (card) {
    return _c('Card', _vm._b({
      key: card.id,
      staticClass: "card",
      attrs: {
        "forStudy": false,
        "mini": true
      }
    }, 'Card', card, false));
  }), 1) : _vm._e()] : _vm._ssrNode("<div data-v-017f8176>", "</div>", [_vm._ssrNode("<br data-v-017f8176> "), _c('center', [_vm._v("No cards to show here!")])], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Browser.vue?vue&type=template&id=017f8176&scoped=true&

// EXTERNAL MODULE: ./components/CardInline.vue + 4 modules
var CardInline = __webpack_require__(74);

// EXTERNAL MODULE: ./components/Card.vue + 4 modules
var Card = __webpack_require__(53);

// EXTERNAL MODULE: ./components/Dropdown.vue + 4 modules
var Dropdown = __webpack_require__(75);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Browser.vue?vue&type=script&lang=js&



function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
/* harmony default export */ var Browservue_type_script_lang_js_ = ({
  props: {
    cards: {
      default: []
    },
    inline: {
      default: false
    }
  },
  components: {
    CardInline: CardInline["default"],
    Card: Card["default"],
    Dropdown: Dropdown["default"]
  },
  data() {
    return {
      shownCount: this.inline ? 40 : 20,
      typeFilter: 'all',
      setFilter: 'all',
      sortBy: 'newest',
      searchTerm: '',
      selectedCards: [],
      filteredCards: [],
      forceDeselect: false
    };
  },
  computed: {
    isMobile() {
      return this.$store.state.isMobile;
    },
    allPresentSets() {
      return Object.keys(this.$store.state.setList).filter(setId => this.cards.find(card => card.set === parseInt(setId))).map(setId => ({
        id: parseInt(setId),
        name: this.$store.state.setList[setId].name
      }));
    },
    sortedCards() {
      return this.cards.sort((a, b) => this.sortBy === 'oldest' ? (a.created || a.id) - (b.created || b.id) : this.sortBy === 'sets' ? b.set - a.set : (b.created || b.id) - (a.created || a.id));
    },
    clampedCards() {
      return this.filteredCards.slice(0, this.shownCount);
    }
  },
  watch: {
    searchTerm() {
      this.debouncedUpdateFilteredCards();
    },
    typeFilter() {
      this.debouncedUpdateFilteredCards();
    },
    cards() {
      this.debouncedUpdateFilteredCards();
    }
  },
  mounted() {
    if (this.$refs.searchbar) this.$nextTick(() => this.$refs.searchbar.focus());
    window.addEventListener('scroll', this.scroll);
    this.updateFilteredCards();
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scroll);
  },
  methods: {
    debouncedUpdateFilteredCards: debounce(function () {
      this.updateFilteredCards();
    }, 400),
    updateFilteredCards() {
      this.filteredCards = this.sortedCards.filter(card => this.setFilter === 'all' || this.setFilter === card.set).filter(card => {
        var _card$front, _card$back;
        return !this.searchTerm || ((_card$front = card.front) === null || _card$front === void 0 ? void 0 : _card$front.toLowerCase().indexOf(this.searchTerm.toLowerCase())) !== -1 || ((_card$back = card.back) === null || _card$back === void 0 ? void 0 : _card$back.toLowerCase().indexOf(this.searchTerm.toLowerCase())) !== -1;
      }).filter(card => {
        if (this.typeFilter === 'all' || this.typeFilter === 'new' && (!card.totalReviews || card.totalReviews === 0) || this.typeFilter === 'notnew' && card.totalReviews && card.totalReviews > 0 || this.typeFilter === 'mastered' && card.ok && card.ok > 5 && card.ok / (card.again ? card.again : 0) > 4 || this.typeFilter === 'trouble' && card.again && card.again > 3 && card.again / (card.ok ? card.ok : 0) >= 0.5 || this.typeFilter === 'suspended' && card.suspended || this.typeFilter === 'notsuspended' && !card.suspended) return true;
        return false;
      });
    },
    showMore() {
      if (this.shownCount < this.cards.length) this.shownCount += 20;
    },
    scroll() {
      const scrollPos = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) - window.innerHeight;
      if (scrollPos - window.pageYOffset < 500) this.showMore();
    },
    select(cardId) {
      const foundCard = this.cards.find(card => card.id === cardId);
      if (!foundCard) return console.log('Unable to find card to check by the id', cardId);
      this.selectedCards.push(foundCard);
    },
    deselect(cardId) {
      const preLength = this.selectedCards.length;
      this.selectedCards = this.selectedCards.filter(card => card.id !== cardId);
      if (this.selectedCards.length !== preLength - 1) console.log('Unable to find card', cardId, 'to deselect.');
    },
    deselectAll() {
      this.selectedCards = [];
      this.forceDeselect = false;
      this.$nextTick(() => this.forceDeselect = true);
    },
    moveAll(toSet) {
      this.selectedCards.forEach(card => {
        this.$store.commit('moveCard', {
          id: card.id,
          from: card.set,
          to: toSet
        });
      });
    },
    suspendAll() {
      const alreadySuspended = this.selectedCards[0].suspended;
      this.selectedCards.forEach(card => {
        this.$store.commit('updateCard', {
          id: card.id,
          suspended: !alreadySuspended
        });
      });
    },
    deleteAll() {
      if (!confirm(`Are you sure you want to delete ${this.selectedCards.length} card${this.selectedCards.length === 1 ? '' : 's'}?`)) return;
      this.selectedCards.forEach(card => {
        this.$store.commit('deleteCard', card.id);
      });
      this.selectedCards = [];
    }
  }
});
// CONCATENATED MODULE: ./components/Browser.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Browservue_type_script_lang_js_ = (Browservue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Browser.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(101)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Browservue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "017f8176",
  "779162b8"
  
)

/* harmony default export */ var Browser = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Dropdown: __webpack_require__(75).default,CardInline: __webpack_require__(74).default,Card: __webpack_require__(53).default})


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CardInline.vue?vue&type=template&id=92593026&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card",
    class: {
      newcard: !_vm.totalReviews,
      selected: _vm.selected,
      suspended: _vm.suspended,
      noset: !_vm.showSet
    },
    on: {
      "click": _vm.click
    }
  }, [_vm._ssrNode("<input type=\"checkbox\"" + _vm._ssrAttr("checked", Array.isArray(_vm.selected) ? _vm._i(_vm.selected, null) > -1 : _vm.selected) + " data-v-92593026> <div class=\"cardtext\" data-v-92593026>" + _vm._ssrEscape(_vm._s(_vm.shownFront)) + "</div> <div class=\"cardtext\" data-v-92593026>" + _vm._ssrEscape(_vm._s(_vm.shownBack)) + "</div> " + (_vm.showSet ? "<div class=\"sub center\" data-v-92593026>" + _vm._ssrEscape("\n    " + _vm._s(_vm.$store.state.setList[_vm.set].name) + "\n  ") + "</div>" : "<!---->") + " "), _vm._ssrNode("<div style=\"position: relative;\" data-v-92593026>", "</div>", [_c('CardTools', {
    attrs: {
      "id": _vm.id,
      "setId": _vm.set,
      "totalReviews": _vm.totalReviews,
      "ok": _vm.ok,
      "front": _vm.front,
      "back": _vm.back,
      "nextReview": _vm.nextReview,
      "suspended": _vm.suspended,
      "imageURL": _vm.imageURL,
      "left": true
    },
    on: {
      "setImageURL": _vm.setImageURL
    }
  })], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CardInline.vue?vue&type=template&id=92593026&scoped=true&

// EXTERNAL MODULE: ./components/CardTools.vue + 4 modules
var CardTools = __webpack_require__(45);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CardInline.vue?vue&type=script&lang=js&

/* harmony default export */ var CardInlinevue_type_script_lang_js_ = ({
  props: {
    front: {},
    back: {},
    id: {
      required: true
    },
    set: {
      required: true
    },
    timeMod: {
      default: 0
    },
    nextReview: {
      default: 0
    },
    totalReviews: {
      default: 0
    },
    created: {
      default: () => new Date().getTime()
    },
    ok: {
      default: 0
    },
    again: {
      default: 0
    },
    suspended: {
      default: false
    },
    imageURL: {},
    forceDeselect: {
      default: false
    },
    showSet: {
      default: false
    }
  },
  components: {
    CardTools: CardTools["default"]
  },
  data() {
    return {
      selected: false,
      shownFront: '',
      shownBack: ''
    };
  },
  computed: {
    isNewCard() {
      return !this.totalReviews || this.totalReviews === 0;
    }
  },
  watch: {
    front() {
      this.updateText();
    },
    back() {
      this.updateText();
    },
    selected(isSelected) {
      if (isSelected) this.$emit('select', this.id);else this.$emit('deselect', this.id);
    },
    forceDeselect(mustDeselect) {
      if (mustDeselect) this.selected = false;
    }
  },
  mounted() {
    this.updateText();
  },
  methods: {
    click(e) {
      let isTools = false;
      e.path.forEach(element => {
        if (element.classList && element.classList.contains('cardtools')) isTools = true;
      });
      if (isTools) return;
      this.selected = !this.selected;
    },
    updateText() {
      const ta = document.createElement('textarea');
      ta.innerHTML = this.front;
      this.shownFront = ta.value;
      ta.innerHTML = this.back;
      this.shownBack = ta.value;
    },
    setImageURL(url) {
      this.$store.commit('updateCard', {
        id: this.id,
        imageURL: url
      });
    }
  }
});
// CONCATENATED MODULE: ./components/CardInline.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CardInlinevue_type_script_lang_js_ = (CardInlinevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/CardInline.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(85)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CardInlinevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "92593026",
  "6a19f706"
  
)

/* harmony default export */ var CardInline = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CardTools: __webpack_require__(45).default})


/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Dropdown.vue?vue&type=template&id=6bdc0a30&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('button', {
    on: {
      "mouseover": function ($event) {
        _vm.isMobile ? false : _vm.paneOpen = true;
      },
      "click": function ($event) {
        _vm.isMobile ? _vm.paneOpen = !_vm.paneOpen : false;
      },
      "mouseleave": function ($event) {
        _vm.isMobile ? false : _vm.paneOpen = false;
      }
    }
  }, [_vm._ssrNode(_vm._ssrEscape("\n  " + _vm._s(_vm.label) + "\n  ")), _vm.paneOpen ? _vm._ssrNode("<div class=\"secondarypanel\" data-v-6bdc0a30>", "</div>", [_vm._t("default")], 2) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Dropdown.vue?vue&type=template&id=6bdc0a30&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Dropdown.vue?vue&type=script&lang=js&
/* harmony default export */ var Dropdownvue_type_script_lang_js_ = ({
  props: {
    label: {
      required: true
    }
  },
  components: {},
  data() {
    return {
      paneOpen: false
    };
  },
  computed: {
    isMobile() {
      return this.$store.state.isMobile;
    }
  },
  mounted() {},
  beforeDestroy() {},
  methods: {}
});
// CONCATENATED MODULE: ./components/Dropdown.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Dropdownvue_type_script_lang_js_ = (Dropdownvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Dropdown.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(87)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Dropdownvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6bdc0a30",
  "6a1e4476"
  
)

/* harmony default export */ var Dropdown = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(93);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("08509a0a", content, true, context)
};

/***/ }),
/* 77 */
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
/* 78 */
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
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_73c0c912_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_73c0c912_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_73c0c912_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_73c0c912_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_73c0c912_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".card[data-v-73c0c912]{overflow:visible;overflow:initial;position:relative;text-align:center}.topleft[data-v-73c0c912]{left:0;position:absolute;top:0}.back[data-v-73c0c912],.front[data-v-73c0c912]{background:#f8f8f8;overflow:hidden;position:relative;transition:.2s}.front[data-v-73c0c912]{border-top-left-radius:10px;border-top-right-radius:10px}.back[data-v-73c0c912]{border-bottom-left-radius:10px;border-bottom-right-radius:10px}.examplefield[data-v-73c0c912]{background:#f8f8f8;color:rgba(0,0,0,.6);font-size:.8rem;line-height:1.2;padding:0 2em 1em;text-align:center}.textfield[data-v-73c0c912]{font-size:1.5rem;padding:45px 30px;transition:padding .5s}@media(max-width:768px){.textfield[data-v-73c0c912]{font-size:1.4rem;padding:35px 25px}}.textfield.editabletextediting[data-v-73c0c912]{background:rgba(0,0,0,.05)}.textfield[data-v-73c0c912]:hover:not(.editabletextediting){background:rgba(0,0,0,.05);position:relative}.textfield[data-v-73c0c912]:hover:not(.editabletextediting):after{content:\"CLICK TO EDIT\";font-size:.7rem;font-weight:600;opacity:.2;position:absolute;right:10px;top:10px}.newcard[data-v-73c0c912]{color:#09c}.back[data-v-73c0c912]{border-top:1px solid rgba(0,0,0,.15);transition:.2s}.back.pointer[data-v-73c0c912]{cursor:pointer}.back .hideanswer[data-v-73c0c912]{filter:blur(7px);opacity:.15;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.card.mini .textfield[data-v-73c0c912]{font-size:1rem;line-height:1.2;padding:20px 30px}.card.mini .back .textfield[data-v-73c0c912]{padding:20px 15px}.card.mini img[data-v-73c0c912]{margin-top:-10px;max-height:100px;max-width:80%}.card.suspended[data-v-73c0c912]{position:relative}.card.suspended .textfield[data-v-73c0c912]{background:#f5f5f5;color:#bbb}.card.suspended[data-v-73c0c912]:after{color:#888;content:\"SUSPENDED\";font-size:1.7rem;font-weight:600;left:50%;opacity:1;pointer-events:none;position:absolute;top:50%;transform:translate(-50%,-50%);-webkit-user-select:none;-moz-user-select:none;user-select:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(102);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("f88d0a62", content, true, context)
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(105);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("a9b84848", content, true, context)
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(107);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("20463f52", content, true, context)
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(109);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("4096916e", content, true, context)
};

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardInline_vue_vue_type_style_index_0_id_92593026_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardInline_vue_vue_type_style_index_0_id_92593026_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardInline_vue_vue_type_style_index_0_id_92593026_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardInline_vue_vue_type_style_index_0_id_92593026_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardInline_vue_vue_type_style_index_0_id_92593026_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "input[type=checkbox][data-v-92593026]{height:100%;margin:0;width:100%}.card[data-v-92593026]{grid-gap:10px;cursor:pointer;display:grid;grid-template-columns:20px 30% 1fr 15% 30px;line-height:1.3;overflow:visible;overflow:initial;position:relative;text-align:left}.card.noset[data-v-92593026]{grid-template-columns:20px 40% 1fr 30px}.card[data-v-92593026]:nth-child(2n){background:#fbfbfb}.card.selected[data-v-92593026]{background:#eee}.card>*[data-v-92593026]{align-items:center;display:flex;height:100%;padding:12px 0}.newcard[data-v-92593026]{color:#09c}.center[data-v-92593026]{text-align:center}.card.suspended .cardtext[data-v-92593026]{color:#bbb}.card.suspended[data-v-92593026]:after{color:#888;content:\"SUSPENDED\";font-size:1.4rem;font-weight:600;left:50%;opacity:1;pointer-events:none;position:absolute;top:50%;transform:translate(-50%,-50%);-webkit-user-select:none;-moz-user-select:none;user-select:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_style_index_0_id_6bdc0a30_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_style_index_0_id_6bdc0a30_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_style_index_0_id_6bdc0a30_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_style_index_0_id_6bdc0a30_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_style_index_0_id_6bdc0a30_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "button[data-v-6bdc0a30]{border-radius:0!important}.secondarypanel[data-v-6bdc0a30]{background:#f5f5f5;left:0;position:absolute;top:100%;width:100%}.secondarypanel>div[data-v-6bdc0a30]{overflow:hidden;padding:10px 15px;text-align:center;width:100%}.secondarypanel>div[data-v-6bdc0a30]:hover{background:#eee}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Toggle.vue?vue&type=template&id=96c47868&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "toggle",
    class: {
      on: _vm.on
    },
    on: {
      "click": _vm.toggle
    }
  }, [_vm._ssrNode("<div class=\"icon\" data-v-96c47868></div> " + (_vm.label ? "<div class=\"label\" data-v-96c47868>" + _vm._ssrEscape(_vm._s(_vm.label)) + "</div>" : "<!---->"))]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Toggle.vue?vue&type=template&id=96c47868&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Toggle.vue?vue&type=script&lang=js&
/* harmony default export */ var Togglevue_type_script_lang_js_ = ({
  props: {
    setTo: {
      required: false,
      type: Boolean,
      default: false
    },
    label: {
      required: false,
      type: String
    }
  },
  components: {},
  data() {
    return {
      on: this.setTo
    };
  },
  computed: {},
  watch: {
    setTo(newOnValue) {
      if (this.on !== newOnValue) this.toggle();
    }
  },
  methods: {
    toggle() {
      this.on = !this.on;
      this.$emit('toggled', this.on);
    }
  }
});
// CONCATENATED MODULE: ./components/Toggle.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Togglevue_type_script_lang_js_ = (Togglevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Toggle.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(104)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Togglevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "96c47868",
  "35139af0"
  
)

/* harmony default export */ var Toggle = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SingleCardStudy.vue?vue&type=template&id=26c7bafa&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.settings.languageTools ? _c('AutoSpeaker', {
    attrs: {
      "text": _vm.textToSpeak,
      "language": _vm.spokenLanguage
    }
  }) : _vm._e(), _vm._ssrNode(" "), _c('Card', {
    ref: "card",
    staticClass: "card",
    attrs: {
      "id": _vm.id,
      "front": _vm.front,
      "back": _vm.back,
      "reverse": _vm.reverse,
      "time-mod": _vm.timeMod,
      "next-review": _vm.nextReview,
      "total-reviews": _vm.totalReviews,
      "created": _vm.created,
      "ok": _vm.ok,
      "again": _vm.again,
      "for-study": true,
      "show-back": _vm.showBack,
      "set": _vm.set,
      "image-u-r-l": _vm.imageURL,
      "examples": _vm.examples
    },
    on: {
      "showBack": _vm.showBackAction
    }
  }), _vm._ssrNode(" <div class=\"buttonlist primary\" data-v-26c7bafa>" + (!_vm.showBack ? "<button class=\"showback\" data-v-26c7bafa>\n      Show Back\n      <div data-v-26c7bafa><kbd class=\"keyicon\" data-v-26c7bafa>Space</kbd></div></button>" : (_vm.timeBonuses.again !== undefined ? "<button data-v-26c7bafa>\n        Wrong\n        <span class=\"sub\" data-v-26c7bafa><span class=\"fade\" data-v-26c7bafa>" + _vm._ssrEscape(_vm._s(_vm.msToString(0, true))) + "</span></span> <div data-v-26c7bafa><kbd class=\"keyicon\" data-v-26c7bafa>1</kbd></div></button>" : "<!---->") + " " + (_vm.timeBonuses.hard ? "<button data-v-26c7bafa>\n        Hard\n        <span class=\"sub\" data-v-26c7bafa><span class=\"fade\" data-v-26c7bafa>" + _vm._ssrEscape("~" + _vm._s(_vm.msToString(_vm.timeBonuses.hard, true))) + "</span></span> <div data-v-26c7bafa><kbd class=\"keyicon\" data-v-26c7bafa>2</kbd></div></button>" : "<!---->") + " " + (_vm.timeBonuses.ok ? "<button data-v-26c7bafa>\n        Right\n        <span class=\"sub\" data-v-26c7bafa><span class=\"fade\" data-v-26c7bafa>" + _vm._ssrEscape("~" + _vm._s(_vm.msToString(_vm.timeBonuses.ok, true))) + "</span></span> <div data-v-26c7bafa><kbd class=\"keyicon\" data-v-26c7bafa>3</kbd> " + (!_vm.isMobile ? "<span data-v-26c7bafa>/</span>" : "<!---->") + " <kbd class=\"keyicon\" data-v-26c7bafa>Space</kbd></div></button>" : "<!---->")) + "</div> <br data-v-26c7bafa> <div class=\"centertext\" data-v-26c7bafa><button style=\"padding-right: 15%; padding-left: 15%\" data-v-26c7bafa>\n      Postpone\n      <div data-v-26c7bafa><span class=\"keyicon\" data-v-26c7bafa>P</span></div></button></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/SingleCardStudy.vue?vue&type=template&id=26c7bafa&scoped=true&

// EXTERNAL MODULE: ./components/Card.vue + 4 modules
var Card = __webpack_require__(53);

// EXTERNAL MODULE: ./components/AutoSpeaker.vue + 4 modules
var AutoSpeaker = __webpack_require__(46);

// EXTERNAL MODULE: ./assets/commonFunctions.js
var commonFunctions = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SingleCardStudy.vue?vue&type=script&lang=js&



const minimumTimeMod = 30 * 60 * 1000; // 30m
const difficultyModifiers = {
  ok: 4,
  hard: 1,
  again: 0.1
};
const timeIgnoreCutoff = [300, 30 * 1000]; // .3s / 30s

/* harmony default export */ var SingleCardStudyvue_type_script_lang_js_ = ({
  components: {
    Card: Card["default"],
    AutoSpeaker: AutoSpeaker["default"]
  },
  props: {
    reverse: {},
    front: {},
    back: {},
    id: {},
    set: {},
    timeMod: {
      default: 0
    },
    nextReview: {
      default: 0
    },
    totalReviews: {
      default: 0
    },
    imageURL: {},
    examples: {},
    created: {
      default: () => new Date().getTime()
    },
    ok: {
      default: 0
    },
    again: {
      default: 0
    }
  },
  data() {
    return {
      msToString: commonFunctions["msToString"],
      showBack: false,
      startedCardTime: new Date(),
      revealedBackTime: new Date(),
      averageTime: 7000,
      reviewsSoFar: 0,
      metaDown: false,
      textToSpeak: '',
      isFirefox: navigator.userAgent.toLowerCase().includes('firefox')
    };
  },
  computed: {
    settings() {
      var _this$$store$state$se;
      return (_this$$store$state$se = this.$store.state.setList) === null || _this$$store$state$se === void 0 ? void 0 : _this$$store$state$se.find(s => s.id === this.$store.state.currentSetId).settings;
    },
    isStudying() {
      return this.$store.state.appState === 'study';
    },
    isEditing() {
      return this.$store.state.appState === 'editCard';
    },
    isMobile() {
      return this.$store.state.isMobile;
    },
    isEditingText() {
      return this.$store.state.isEditingText;
    },
    isNewCard() {
      return !this.totalReviews || this.totalReviews === 0;
    },
    spokenLanguage() {
      return this.settings.autoSpeak ? this.isStudying && this.showBack ? this.settings.languageTools : 'en' : this.settings.languageTools;
    },
    timeBonuses() {
      const bonuses = {
        ok: this.getTimeBonus('ok'),
        hard: this.getTimeBonus('hard'),
        again: this.getTimeBonus('again')
      };
      return bonuses;
    }
  },
  watch: {
    id() {
      this.startedCardTime = new Date();
      this.showBack = false;
      if (this.settings.autoSpeakFront) {
        this.textToSpeak = (this.reverse ? this.back : this.front).replace(/\n.*/g, '');
      }
      const topOfCardVisible = this.$el.getBoundingClientRect().top + window.scrollY - 10;
      if (topOfCardVisible > window.scrollY + 100) return;
      window.scrollTo(0, topOfCardVisible);
    }
  },
  mounted() {
    window.addEventListener('keydown', this.keyDown);
    window.addEventListener('keyup', this.keyUp);
    if (this.settings.autoSpeakFront) {
      this.textToSpeak = (this.reverse ? this.back : this.front).replace(/\n.*/g, '');
    }
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.keyDown);
    window.removeEventListener('keyup', this.keyUp);
  },
  methods: {
    showBackAction() {
      this.showBack = true;
      this.revealedBackTime = new Date();
      const cardRect = this.$refs.card.$el.getBoundingClientRect();
      const bottomOfCardVisible = cardRect.top + window.scrollY + cardRect.height - window.innerHeight + (this.isMobile ? 70 : 120);
      if (bottomOfCardVisible <= 0 || bottomOfCardVisible < window.scrollY) return;
      window.scrollTo(0, bottomOfCardVisible);
    },
    answer(difficulty) {
      if (this.imageURL === 'loading') this.$store.commit('updateCard', {
        id: this.id,
        imageURL: null
      });
      this.showBack = false;
      this.reviewsSoFar++;
      const cardTime = this.revealedBackTime - this.startedCardTime;

      // ignore too fast or too slow times
      const ignoreTime = cardTime < timeIgnoreCutoff[0] || cardTime > timeIgnoreCutoff[1];

      // update running average time
      if (!ignoreTime) this.averageTime = this.averageTime * ((this.reviewsSoFar - 1) / this.reviewsSoFar) + cardTime * (1 / this.reviewsSoFar);

      // * calc time modifiers, all in 0-1 range
      // * 0 being bad, 1 being good
      const bonuses = {};

      // depending on time taken, adds time
      bonuses.answerTime = ignoreTime ? 0 : 1 - (cardTime - timeIgnoreCutoff[0]) / timeIgnoreCutoff[1];

      // if card is older, adds more time
      const maturityThreshold = 30;
      bonuses.maturity = this.totalReviews > maturityThreshold ? 1 : this.totalReviews / maturityThreshold;

      // if card is usually succeeded on, adds more time
      const successRatio = (this.ok || 0) * 0.2 / (this.again || 1);
      bonuses.successRatio = successRatio > 1 ? 1 : successRatio;

      // depending on the length of the answer vs the length of the prompt, adds time
      let collectiveLength = this.front.length +
      // .replace(/\n.*/g, '')
      this.back.length - 5;
      if (collectiveLength < 0) collectiveLength = 0;
      const lengthThreshold = 40;
      bonuses.length = collectiveLength > lengthThreshold ? 1 : collectiveLength / lengthThreshold;
      const bonusMultipliers = {
        answerTime: 0.4,
        maturity: 0.25,
        successRatio: 0.25,
        length: 0.1
      }; // adds up to 1

      console.log('base time mod:', Object(commonFunctions["msToString"])(this.timeBonuses[difficulty]));
      let bonusMultiplier = 0;
      for (const bonus in bonuses) {
        console.log(bonus + ' bonus:', (bonuses[bonus] * 100).toFixed(0) + '% (+' + (bonuses[bonus] * bonusMultipliers[bonus] * 100).toFixed(0) + '% adjusted)');
        bonusMultiplier += bonuses[bonus] * bonusMultipliers[bonus];
      }
      console.log('final bonus multiplier:', bonusMultiplier);
      let newTimeMod = this.timeBonuses[difficulty] / 2 + this.timeBonuses[difficulty] * bonusMultiplier; // final mod can be from .5 to 1.5 of the base bonus

      newTimeMod = Math.floor(newTimeMod);
      console.log('pre-overlong-scaled time mod:', Object(commonFunctions["msToString"])(newTimeMod));

      // if timeMod is very long, doesn't let it go to like 10y so easily
      newTimeMod = Math.floor(
      // newTimeMod > 1000 * 60 * 60 * 24 * 365 // a year
      newTimeMod * (newTimeMod * -1 / 3000000000000 + 1) // huge number puts the cap at about 10 years, scaling linearly down
      // : newTimeMod
      );

      if (newTimeMod < -1000) newTimeMod = 3000000000000; // it passsed the cap
      if (newTimeMod < 1) newTimeMod = 1;

      // don't go below the minimum time mod
      if (difficulty !== 'again' && newTimeMod < minimumTimeMod) newTimeMod = minimumTimeMod;

      // check for once-per-day setting
      const oncePerDayTimeMod = 10 * 60 * 60 * 1000; /* 10h */
      if (this.settings.oncePerDay && newTimeMod < oncePerDayTimeMod) newTimeMod = oncePerDayTimeMod;
      console.log('old time mod:', Object(commonFunctions["msToString"])(this.timeMod));
      console.log('new time mod:', Object(commonFunctions["msToString"])(newTimeMod));
      console.log('');

      // calc interval until next review
      const newNextReview = new Date(Date.now() + newTimeMod).getTime();
      const newTotalReviews = this.totalReviews + 1;
      const newAgain = this.again + (difficulty === 'again' ? 1 : 0);
      const newOk = newTotalReviews - newAgain;

      // update card with new metadata
      this.$store.commit('studyCard', {
        id: this.id,
        lastStudied: Date.now(),
        timeMod: newTimeMod,
        nextReview: newNextReview,
        totalReviews: newTotalReviews,
        ok: newOk,
        again: newAgain
      });

      // request new card from StudyFrame
      this.$emit('done', newTimeMod);
    },
    getTimeBonus(difficulty) {
      let newTimeMod = (!this.timeMod || isNaN(this.timeMod) ? 0 : this.timeMod) * difficultyModifiers[difficulty] * (this.settings.reviewIntervalMultiplier || 1);
      if (difficulty === 'again') newTimeMod = 0;

      // * "overdue" cards reduce repeat time, multiplies from .2 to 1
      const overdueMultiplier = 1 - Math.min(0.8, (Date.now() - (this.nextReview || Date.now())) / (1000 * 60 * 60 * 24 * 30));
      if (difficulty === 'again') console.log('overdue multiplier:', overdueMultiplier.toFixed(2));
      newTimeMod *= overdueMultiplier;
      if (difficulty !== 'again' && newTimeMod < minimumTimeMod) newTimeMod = minimumTimeMod;
      return newTimeMod;
    },
    keyDown(event) {
      if (event.key === 'Control') this.metaDown = true;
      if (event.key === 'Meta') this.metaDown = true;else if (event.key === 'i' && this.metaDown) {
        this.$store.commit('updateCard', {
          id: this.id,
          imageURL: 'loading'
        });
        Object(commonFunctions["getRandomImage"])(this.front || this.back).then(image => {
          if (image) this.$store.commit('updateCard', {
            id: this.id,
            imageURL: image
          });
        });
      }
      if (!this.isStudying || this.isEditingText) return;
      if (event.key === '1' && this.showBack) this.answer('again');
      if (event.key === '2' && this.showBack) this.answer('hard');else if (event.key === ' ' || event.key === 'Enter') {
        event.preventDefault();
        event.stopPropagation();
        !this.showBack ? this.showBackAction() : this.answer('ok');
      } else if (event.key === '3' && this.showBack) this.answer('ok');else if (event.key === 'p') this.$emit('postpone');
    },
    keyUp(event) {
      if (event.key === 'Control') this.metaDown = false;
      if (event.key === 'Meta') this.metaDown = false;
    }
  }
});
// CONCATENATED MODULE: ./components/SingleCardStudy.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SingleCardStudyvue_type_script_lang_js_ = (SingleCardStudyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/SingleCardStudy.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(106)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SingleCardStudyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "26c7bafa",
  "0900cc2d"
  
)

/* harmony default export */ var SingleCardStudy = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {AutoSpeaker: __webpack_require__(46).default,Card: __webpack_require__(53).default})


/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/RemainingCardIndicator.vue?vue&type=template&id=805d34fa&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "remainingcards"
  }, [_vm._ssrNode(_vm._ssrList(_vm.adjustedStartedWith - _vm.toStudy.length > 0 ? _vm.adjustedStartedWith - _vm.toStudy.length : 0, function (key) {
    return "<div class=\"card\" data-v-805d34fa></div>";
  }) + " " + _vm._ssrList(_vm.toStudy, function (card, key) {
    return "<div" + _vm._ssrClass("card", {
      review: card.totalReviews,
      new: !card.totalReviews,
      current: key === 0
    }) + " data-v-805d34fa></div>";
  }))]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/RemainingCardIndicator.vue?vue&type=template&id=805d34fa&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/RemainingCardIndicator.vue?vue&type=script&lang=js&
/* harmony default export */ var RemainingCardIndicatorvue_type_script_lang_js_ = ({
  props: {
    toStudy: {},
    startedWith: {}
  },
  components: {},
  data() {
    return {
      adjustedStartedWith: this.toStudy.length
    };
  },
  computed: {},
  watch: {
    toStudy(newToStudy) {
      if (newToStudy.length >= this.startedWith) this.adjustedStartedWith = newToStudy.length;
    },
    startedWith(newStartedWith) {
      if (newStartedWith >= this.toStudy.length) this.adjustedStartedWith = newStartedWith;
    }
  },
  mounted() {},
  beforeDestroy() {},
  methods: {}
});
// CONCATENATED MODULE: ./components/RemainingCardIndicator.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_RemainingCardIndicatorvue_type_script_lang_js_ = (RemainingCardIndicatorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/RemainingCardIndicator.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(108)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_RemainingCardIndicatorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "805d34fa",
  "6d40533d"
  
)

/* harmony default export */ var RemainingCardIndicator = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableTextField_vue_vue_type_style_index_0_id_37251bf7_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableTextField_vue_vue_type_style_index_0_id_37251bf7_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableTextField_vue_vue_type_style_index_0_id_37251bf7_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableTextField_vue_vue_type_style_index_0_id_37251bf7_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableTextField_vue_vue_type_style_index_0_id_37251bf7_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".editabletext{cursor:pointer}.editabletext.placeholder{color:rgba(0,0,0,.2)}.editabletext.editabletextediting{cursor:text}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(120);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("47ac36ad", content, true, context)
};

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewGraph_vue_vue_type_style_index_0_id_451472b2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewGraph_vue_vue_type_style_index_0_id_451472b2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewGraph_vue_vue_type_style_index_0_id_451472b2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewGraph_vue_vue_type_style_index_0_id_451472b2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewGraph_vue_vue_type_style_index_0_id_451472b2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".reviewgraph[data-v-451472b2]{margin-bottom:30px;width:100%}.reviewgraph .bars[data-v-451472b2]{align-items:flex-end;display:flex;height:70px;justify-content:stretch}.reviewgraph .bars .fill[data-v-451472b2]{background:#ddd;border-top-left-radius:5px;border-top-right-radius:5px;flex:1;height:0;margin:0 3px;position:relative;transition:all 1s}.reviewgraph .count[data-v-451472b2]{font-size:.8em;left:50%;opacity:.3;position:absolute;top:0;transform:translateX(-50%) translateY(-93%)}.reviewgraph .labels[data-v-451472b2]{display:flex;justify-content:stretch;margin-top:2px;text-align:center}.reviewgraph .labels>*[data-v-451472b2]{flex:1}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatingText_vue_vue_type_style_index_0_id_d16cf874_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatingText_vue_vue_type_style_index_0_id_d16cf874_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatingText_vue_vue_type_style_index_0_id_d16cf874_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatingText_vue_vue_type_style_index_0_id_d16cf874_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatingText_vue_vue_type_style_index_0_id_d16cf874_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 98 */
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
/* 99 */
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

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(124);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("d0d0d392", content, true, context)
};

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Browser_vue_vue_type_style_index_0_id_017f8176_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Browser_vue_vue_type_style_index_0_id_017f8176_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Browser_vue_vue_type_style_index_0_id_017f8176_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Browser_vue_vue_type_style_index_0_id_017f8176_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Browser_vue_vue_type_style_index_0_id_017f8176_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".browser[data-v-017f8176]{width:100%}.tools[data-v-017f8176]{background:#fff;padding:10px 0 1px;position:sticky;top:0;z-index:9}.buttonlist[data-v-017f8176],.searchbar[data-v-017f8176]{margin-bottom:10px}.searchbar[data-v-017f8176]{border:1px solid #eee;border-radius:7px;font-family:\"Avenir Neue\",\"Avenir\",\"Helvetica\",sans-serif;font-size:1.2rem;padding:10px;width:100%}.twoupcardlist[data-v-017f8176]{grid-gap:10px 4%;display:grid;grid-template-columns:48% 48%;text-align:center}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(126);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("544d4bc3", content, true, context)
};

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Toggle_vue_vue_type_style_index_0_id_96c47868_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Toggle_vue_vue_type_style_index_0_id_96c47868_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Toggle_vue_vue_type_style_index_0_id_96c47868_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Toggle_vue_vue_type_style_index_0_id_96c47868_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Toggle_vue_vue_type_style_index_0_id_96c47868_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".toggle[data-v-96c47868]{grid-gap:10px;cursor:pointer;display:grid;grid-template-columns:60px 1fr}.toggle .icon[data-v-96c47868]{border:1px solid #bbb;border-radius:.85rem;height:1.7rem;position:relative;transition:.3s;width:3.7rem;z-index:1}.toggle .icon[data-v-96c47868]:before{content:\"OFF\";font-size:.65rem;font-weight:800;left:55%;opacity:.5;position:absolute;top:24%;transition:.3s;z-index:1}.toggle .icon[data-v-96c47868]:after{background:#bbb;border-radius:.7rem;content:\"\";height:1.4rem;left:5%;position:absolute;top:6%;transition:.3s;width:1.4rem;z-index:2}.toggle.on .icon[data-v-96c47868]{background:#4c4;border:1px solid transparent}.toggle.on .icon[data-v-96c47868]:before{color:#fff;content:\"ON\";left:15%;opacity:1}.toggle.on .icon[data-v-96c47868]:after{background:#fff;left:58%}.toggle .label[data-v-96c47868]{font-weight:600;margin-top:.1rem;-webkit-user-select:none;-moz-user-select:none;user-select:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleCardStudy_vue_vue_type_style_index_0_id_26c7bafa_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleCardStudy_vue_vue_type_style_index_0_id_26c7bafa_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleCardStudy_vue_vue_type_style_index_0_id_26c7bafa_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleCardStudy_vue_vue_type_style_index_0_id_26c7bafa_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleCardStudy_vue_vue_type_style_index_0_id_26c7bafa_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".card[data-v-26c7bafa]{margin-bottom:20px}.showback[data-v-26c7bafa]{width:100%}@media(max-width:768px){.buttonlist.primary[data-v-26c7bafa]{border-bottom:none;border-radius:0;bottom:0;left:0;position:relative;position:fixed;width:100%;z-index:1000}.buttonlist.primary button[data-v-26c7bafa]{background:#eee;border-radius:0}.buttonlist.primary button[data-v-26c7bafa]:hover{background:#ddd}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RemainingCardIndicator_vue_vue_type_style_index_0_id_805d34fa_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RemainingCardIndicator_vue_vue_type_style_index_0_id_805d34fa_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RemainingCardIndicator_vue_vue_type_style_index_0_id_805d34fa_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RemainingCardIndicator_vue_vue_type_style_index_0_id_805d34fa_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RemainingCardIndicator_vue_vue_type_style_index_0_id_805d34fa_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".remainingcards[data-v-805d34fa]{align-items:center;display:flex;height:10px;justify-content:center;margin:10px 0 20px;position:relative;width:100%}.remainingcards .card[data-v-805d34fa]{background:#ddd;flex-grow:0;flex-shrink:1;height:4px;opacity:.5;transform:scaleX(1);width:4px}.remainingcards .card.review[data-v-805d34fa]{background:#bbb}.remainingcards .card.review.current[data-v-805d34fa]{opacity:1}.remainingcards .card.new[data-v-805d34fa]{background:#bbb}.remainingcards .card.new.current[data-v-805d34fa]{opacity:1}.remainingcards .card.current[data-v-805d34fa]{animation-duration:0s;border-radius:5px;flex-shrink:0;height:10px;width:10px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 110 */
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
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SetSettings.vue?vue&type=template&id=519f3284&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "settings"
  }, [_vm._ssrNode("<div class=\"settingslist\" data-v-519f3284>", "</div>", [!_vm.settings.autoAddNew ? _vm._ssrNode("<p data-v-519f3284>", "</p>", [_c('EditableTextField', {
    staticClass: "visibletextfield marright",
    attrs: {
      "text": `${_vm.settings.maxNewPerDay === 0 ? 0 : _vm.settings.maxNewPerDay || 10}`,
      "lineBreaksAllowed": false
    },
    on: {
      "endEdit": _vm.updateMaxNewPerDay
    }
  }), _vm._ssrNode(" <b data-v-519f3284>New cards per day</b>")], 2) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<p data-v-519f3284>", "</p>", [_c('EditableTextField', {
    staticClass: "visibletextfield marright",
    attrs: {
      "text": `${_vm.settings.maxReviewsPerDay === 0 ? 0 : _vm.settings.maxReviewsPerDay || 0}`,
      "lineBreaksAllowed": false
    },
    on: {
      "endEdit": _vm.updateMaxReviewsPerDay
    }
  }), _vm._ssrNode(" <b style=\"position: relative\" data-v-519f3284>Max reviews per day <span class=\"below sub\" data-v-519f3284>(0 for no limit)</span></b>")], 2), _vm._ssrNode(" "), _c('Toggle', {
    key: "rev",
    attrs: {
      "setTo": _vm.settings.studyReverse,
      "label": "Study cards back-to-front"
    },
    on: {
      "toggled": function ($event) {
        _vm.updateSettings({
          studyReverse: !(_vm.settings.studyReverse ? true : false)
        });
      }
    }
  }), _vm._ssrNode(" "), _c('Toggle', {
    key: "mix",
    attrs: {
      "setTo": _vm.settings.shuffleCards,
      "label": "Shuffle cards (new & reviews)"
    },
    on: {
      "toggled": function ($event) {
        _vm.updateSettings({
          shuffleCards: !(_vm.settings.shuffleCards ? true : false)
        });
      }
    }
  }), _vm._ssrNode(" "), _c('Toggle', {
    key: "once",
    attrs: {
      "setTo": _vm.settings.oncePerDay,
      "label": "Only see cards once per day"
    },
    on: {
      "toggled": function ($event) {
        _vm.updateSettings({
          oncePerDay: !(_vm.settings.oncePerDay ? true : false)
        });
      }
    }
  }), _vm._ssrNode(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedLanguageTools,
      expression: "selectedLanguageTools"
    }],
    staticClass: "marright",
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.selectedLanguageTools = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, _vm._l(_vm.languages, function (language, key) {
    return _c('option', {
      key: key,
      domProps: {
        "value": key
      }
    }, [_vm._v("\n        " + _vm._s(language) + "\n      ")]);
  }), 0), _vm._ssrNode(" <b data-v-519f3284>Language Tools</b> "), _vm.selectedLanguageTools && _vm.selectedLanguageTools !== 'none' ? _c('Toggle', {
    key: "autospeak",
    attrs: {
      "setTo": _vm.settings.autoSpeak,
      "label": "Auto-speak card backs"
    },
    on: {
      "toggled": function ($event) {
        _vm.updateSettings({
          autoSpeak: !(_vm.settings.autoSpeak ? true : false)
        });
      }
    }
  }) : _vm._e(), _vm._ssrNode(" "), _vm.selectedLanguageTools && _vm.selectedLanguageTools !== 'none' ? _c('Toggle', {
    key: "autospeakfront",
    attrs: {
      "setTo": _vm.settings.autoSpeakFront,
      "label": "Auto-speak card fronts"
    },
    on: {
      "toggled": function ($event) {
        _vm.updateSettings({
          autoSpeakFront: !(_vm.settings.autoSpeakFront ? true : false)
        });
      }
    }
  }) : _vm._e(), _vm._ssrNode(" " + (_vm.selectedLanguageTools && _vm.selectedLanguageTools !== 'none' ? "<div data-v-519f3284><input type=\"range\" min=\"1\" max=\"10\"" + _vm._ssrAttr("value", _vm.displaySpeechSpeed) + " class=\"slider\" data-v-519f3284> <b data-v-519f3284>" + _vm._ssrEscape("Speech Speed: " + _vm._s(Math.round(_vm.displaySpeechSpeed))) + "</b></div>" : "<!---->") + " <div data-v-519f3284><input type=\"range\" min=\"1\" max=\"4\" step=\".1\"" + _vm._ssrAttr("value", _vm.reviewIntervalMultiplier) + " class=\"slider\" data-v-519f3284> <b data-v-519f3284>" + _vm._ssrEscape("Review Interval Multiplier:\n        " + _vm._s(Math.round(_vm.reviewIntervalMultiplier * 10) / 10)) + "</b></div> <div data-v-519f3284>Click your set's name (above) to edit it.</div> <button data-v-519f3284>Mark all cards as new</button> <button data-v-519f3284>Download Set</button> <button data-v-519f3284>Delete Set</button> <br data-v-519f3284><br data-v-519f3284><br data-v-519f3284> <div class=\"sub textcenter fakelink\" data-v-519f3284>\n      Download Set from Local Storage\n    </div>")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/SetSettings.vue?vue&type=template&id=519f3284&scoped=true&

// EXTERNAL MODULE: ./components/EditableTextField.vue + 4 modules
var EditableTextField = __webpack_require__(56);

// EXTERNAL MODULE: ./components/Toggle.vue + 4 modules
var Toggle = __webpack_require__(89);

// EXTERNAL MODULE: ./assets/storage.js
var storage = __webpack_require__(17);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SetSettings.vue?vue&type=script&lang=js&



/* harmony default export */ var SetSettingsvue_type_script_lang_js_ = ({
  props: {},
  components: {
    EditableTextField: EditableTextField["default"],
    Toggle: Toggle["default"]
  },
  data() {
    return {
      selectedLanguageTools: null,
      displaySpeechSpeed: 4,
      reviewIntervalMultiplier: 1,
      speechSpeedUpdateTimer: null,
      reviewInterviewMultiplierUpdateTimer: null,
      languages: {
        none: 'None',
        ar: 'Arabic',
        zh: 'Chinese',
        da: 'Danish',
        en: 'English',
        fr: 'French',
        de: 'German',
        it: 'Italian',
        ja: 'Japanese',
        ko: 'Korean',
        es: 'Spanish'
      }
    };
  },
  computed: {
    currentSet() {
      var _this$$store$state$se;
      return (_this$$store$state$se = this.$store.state.setList) === null || _this$$store$state$se === void 0 ? void 0 : _this$$store$state$se.find(s => s.id === this.$store.state.currentSetId);
    },
    settings() {
      var _this$$store$state$se2;
      return ((_this$$store$state$se2 = this.$store.state.setList) === null || _this$$store$state$se2 === void 0 ? void 0 : _this$$store$state$se2.find(s => s.id === this.$store.state.currentSetId).settings) || {};
    }
  },
  mounted() {
    this.selectedLanguageTools = this.settings.languageTools || 'none';
    this.displaySpeechSpeed = (this.settings.speechSpeed - 0.5) * 9 + 1 || 4; // .5 - 1.5 -> 1 - 10
    this.reviewIntervalMultiplier = this.settings.reviewIntervalMultiplier || 1;
  },
  beforeDestroy() {},
  watch: {
    selectedLanguageTools(newSelection) {
      let newTools = newSelection === 'none' ? null : newSelection;
      this.updateSettings({
        languageTools: newTools
      });
    },
    displaySpeechSpeed() {
      clearTimeout(this.speechSpeedUpdateTimer);
      this.speechSpeedUpdateTimer = setTimeout(() => this.updateSettings({
        speechSpeed: (this.displaySpeechSpeed - 1) / 9 + 0.5
      }), 1000);
    },
    reviewIntervalMultiplier() {
      clearTimeout(this.reviewInterviewMultiplierUpdateTimer);
      this.reviewInterviewMultiplierUpdateTimer = setTimeout(() => this.updateSettings({
        reviewIntervalMultiplier: this.reviewIntervalMultiplier
      }), 1000);
    }
  },
  methods: {
    deleteSet() {
      if (confirm(`Do you really want to delete the set "${this.currentSet.name}" with ${this.currentSet.cards ? this.currentSet.cards.length : 0} cards?`)) {
        this.$store.commit('deleteSet', this.currentSet.id);
        this.$store.commit('setAppState', 'study');
      }
    },
    updateSettings(settings) {
      this.$store.commit('updateSetSettings', {
        ...settings
      });
    },
    updateMaxNewPerDay(newValue) {
      const parsedValue = parseInt(newValue) === 0 ? 0 : parseInt(newValue) || 10;
      this.$store.commit('updateSetSettings', {
        maxNewPerDay: parsedValue
      });
    },
    updateMaxReviewsPerDay(newValue) {
      const parsedValue = parseInt(newValue) === 0 ? 0 : parseInt(newValue) || 0;
      this.$store.commit('updateSetSettings', {
        maxReviewsPerDay: parsedValue
      });
    },
    downloadSet() {
      downloadObjectAsJson(this.currentSet, this.currentSet.name + ' ' + new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString());
    },
    downloadSetFromLocalStorage() {
      downloadObjectAsJson(Object(storage["get"])(`${this.currentSet.id}`), this.currentSet.name + ' ' + new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString());
    },
    markAllAsNew() {}
  }
});
function downloadObjectAsJson(exportObj, exportName) {
  var dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(exportObj));
  var downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute('href', dataStr);
  downloadAnchorNode.setAttribute('download', exportName + '.json');
  document.body.appendChild(downloadAnchorNode); // required for firefox
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}
// CONCATENATED MODULE: ./components/SetSettings.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SetSettingsvue_type_script_lang_js_ = (SetSettingsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/SetSettings.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(119)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SetSettingsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "519f3284",
  "826b34be"
  
)

/* harmony default export */ var SetSettings = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {EditableTextField: __webpack_require__(56).default,Toggle: __webpack_require__(89).default})


/***/ }),
/* 112 */
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
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/StudyFrame.vue?vue&type=template&id=48088ed7&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "studyframe",
    class: {
      focus: _vm.appState === 'study' || _vm.appState === 'editCard'
    }
  }, [_vm._ssrNode((_vm.settings.studyReverse ? "<div class=\"sub\" data-v-48088ed7>\n    Studying cards back-to-front.\n    <u style=\"cursor: pointer\" data-v-48088ed7>\n      Back to normal\n    </u></div>" : "<!---->") + " "), _c('FloatingText', {
    attrs: {
      "text": _vm.displayTimeMod,
      "color": _vm.displayTimeMod ? _vm.displayTimeMod === 'Again!' ? '#fa4' : '#0c6' : 'green',
      "offset": "-120"
    }
  }), _vm._ssrNode(" "), !_vm.doneForDay ? [_vm._ssrNode("<div class=\"sub centertext padt-small\" data-v-48088ed7>" + (_vm.newCards.length > 0 ? "<span data-v-48088ed7><b data-v-48088ed7>" + _vm._ssrEscape(_vm._s(_vm.newCards.length)) + "</b>" + _vm._ssrEscape(" new card" + _vm._s(_vm.newCards.length === 1 ? '' : 's') + "\n        ") + (_vm.dueCards.length > 0 ? "<span data-v-48088ed7>and</span>" : "<!---->") + "</span>" : "<!---->") + " " + (_vm.dueCards.length > 0 ? "<span data-v-48088ed7><b data-v-48088ed7>" + _vm._ssrEscape(_vm._s(_vm.dueCards.length)) + "</b>" + _vm._ssrEscape(" review" + _vm._s(_vm.dueCards.length === 1 ? '' : 's') + "\n      ") + "</span>" : "<!---->") + "\n      left.\n    </div> "), _c('RemainingCardIndicator', {
    attrs: {
      "to-study": _vm.allStudyableCards,
      "started-with": _vm.startedWith
    }
  }), _vm._ssrNode(" "), _c('SingleCardStudy', _vm._b({
    attrs: {
      "reverse": _vm.settings.studyReverse
    },
    on: {
      "done": _vm.finishedCurrentCard,
      "postpone": _vm.postponeCurrentCard
    }
  }, 'SingleCardStudy', _vm.cardToStudy, false))] : _vm.doneForDay && _vm.reviewsAreLeftOver ? [_vm._ssrNode("<div class=\"padtb centertext\" data-v-48088ed7>", "</div>", [_vm._ssrNode("<h3 data-v-48088ed7>Done for now!</h3> <div data-v-48088ed7>" + _vm._ssrEscape("\n        There " + _vm._s(_vm.reviewsLeftOver === 1 ? 'is' : 'are') + "\n        ") + "<b data-v-48088ed7>" + _vm._ssrEscape(_vm._s(_vm.reviewsLeftOver)) + "</b>" + _vm._ssrEscape(" more card" + _vm._s(_vm.reviewsLeftOver === 1 ? '' : 's') + "\n        due to be reviewed. If you want to study more cards today, change the\n        setting below.\n      ") + "</div> "), _vm._ssrNode("<p class=\"singlesetting\" data-v-48088ed7>", "</p>", [_c('EditableTextField', {
    staticClass: "visibletextfield",
    attrs: {
      "text": `${_vm.settings.maxReviewsPerDay}`,
      "line-breaks-allowed": false
    },
    on: {
      "endEdit": _vm.updateMaxReviewsPerDay
    }
  }), _vm._ssrNode("   <b data-v-48088ed7>Max reviews per day (0 for no limit)</b>")], 2), _vm._ssrNode(" <br data-v-48088ed7> <br data-v-48088ed7> " + (_vm.nextReviewIn ? "<p data-v-48088ed7>Otherwise, come back tomorrow to study more.</p>" : "<!---->"))], 2)] : _vm.doneForDay && _vm.newCardsAreLeftOver ? [_vm._ssrNode("<div class=\"padtb centertext\" data-v-48088ed7>", "</div>", [_vm._ssrNode("<h3 data-v-48088ed7>Done for now!</h3> <div data-v-48088ed7>" + _vm._ssrEscape("\n        There " + _vm._s(_vm.newCardsLeftOver === 1 ? 'is' : 'are') + "\n        ") + "<b data-v-48088ed7>" + _vm._ssrEscape(_vm._s(_vm.newCardsLeftOver)) + "</b>" + _vm._ssrEscape(" new card" + _vm._s(_vm.newCardsLeftOver === 1 ? '' : 's') + "\n        remaining to be learned. If you want to study more new cards, change\n        the setting below.\n      ") + "</div> "), _vm._ssrNode("<p class=\"singlesetting\" data-v-48088ed7>", "</p>", [_c('EditableTextField', {
    staticClass: "visibletextfield",
    attrs: {
      "text": `${_vm.settings.maxNewPerDay}`,
      "line-breaks-allowed": false
    },
    on: {
      "endEdit": _vm.updateMaxNewPerDay
    }
  }), _vm._ssrNode("   <b data-v-48088ed7>New cards per day</b>")], 2), _vm._ssrNode(" <br data-v-48088ed7> <br data-v-48088ed7> " + (_vm.nextReviewIn ? "<p data-v-48088ed7>" + _vm._ssrEscape("\n        Otherwise, your next review is in " + _vm._s(_vm.nextReviewIn) + ".\n      ") + "</p>" : "<!---->"))], 2)] : _vm.cards.length === 0 ? _vm._ssrNode("<div class=\"padtb centertext\" data-v-48088ed7><h3 data-v-48088ed7>No cards yet!</h3> <button data-v-48088ed7>\n        + Add Cards\n      </button></div>") : _vm._ssrNode("<div class=\"padtb centertext\" data-v-48088ed7><h3 data-v-48088ed7>Done for now!</h3> " + (_vm.nextReviewIn ? "<div data-v-48088ed7>" + _vm._ssrEscape("\n        Your next review is in " + _vm._s(_vm.nextReviewIn) + ".\n      ") + "</div>" : "<!---->") + "</div>"), _vm._ssrNode(" "), _vm.doneForDay && _vm.cards.length > 0 ? [_c('ReviewGraph', {
    attrs: {
      "cards": _vm.updatedCards,
      "slots": 7,
      "max-time": 7 * 24 * 60 * 60 * 1000,
      "title": "Upcoming reviews:"
    }
  })] : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/StudyFrame.vue?vue&type=template&id=48088ed7&scoped=true&

// EXTERNAL MODULE: ./components/SingleCardStudy.vue + 4 modules
var SingleCardStudy = __webpack_require__(90);

// EXTERNAL MODULE: ./components/EditableTextField.vue + 4 modules
var EditableTextField = __webpack_require__(56);

// EXTERNAL MODULE: ./components/RemainingCardIndicator.vue + 4 modules
var RemainingCardIndicator = __webpack_require__(91);

// EXTERNAL MODULE: ./components/ReviewGraph.vue + 4 modules
var ReviewGraph = __webpack_require__(67);

// EXTERNAL MODULE: ./components/FloatingText.vue + 4 modules
var FloatingText = __webpack_require__(68);

// EXTERNAL MODULE: ./assets/commonFunctions.js
var commonFunctions = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/StudyFrame.vue?vue&type=script&lang=js&






const debug = false;
/* harmony default export */ var StudyFramevue_type_script_lang_js_ = ({
  components: {
    SingleCardStudy: SingleCardStudy["default"],
    ReviewGraph: ReviewGraph["default"],
    FloatingText: FloatingText["default"],
    EditableTextField: EditableTextField["default"],
    RemainingCardIndicator: RemainingCardIndicator["default"]
  },
  props: {
    cards: {}
  },
  data() {
    return {
      refreshCardsTimer: null,
      startedWith: 0,
      displayTimeMod: null,
      updatedCards: [],
      cardsToStudy: []
    };
  },
  computed: {
    appState() {
      return this.$store.state.appState;
    },
    currentSetId() {
      return this.$store.state.currentSetId;
    },
    settings() {
      var _this$$store$state$se;
      return ((_this$$store$state$se = this.$store.state.setList) === null || _this$$store$state$se === void 0 ? void 0 : _this$$store$state$se.find(s => s.id === this.$store.state.currentSetId).settings) || {};
    },
    newToday() {
      var _this$$store$state$se2;
      return (_this$$store$state$se2 = this.$store.state.setList) === null || _this$$store$state$se2 === void 0 ? void 0 : _this$$store$state$se2.find(s => s.id === this.$store.state.currentSetId).newToday;
    },
    reviewsToday() {
      var _this$$store$state$se3;
      return (_this$$store$state$se3 = this.$store.state.setList) === null || _this$$store$state$se3 === void 0 ? void 0 : _this$$store$state$se3.find(s => s.id === this.$store.state.currentSetId).reviewsToday;
    },
    doneForDay() {
      return this.doneReviewing && this.doneWithNewCards;
    },
    newCards() {
      const possibleAdditionalNewCardsToday = (this.settings.maxNewPerDay || 0) - (this.newToday || 0);
      return this.updatedCards.filter(card => !card.totalReviews && (!card.nextReview || card.nextReview < Date.now())).sort((a, b) =>
      // this.settings.shuffleCards
      // ? Math.random() - 0.5:
      a.id > b.id ? 1 : -1).slice(0, possibleAdditionalNewCardsToday > 0 ? possibleAdditionalNewCardsToday : 0);
    },
    doneWithNewCards() {
      return this.newToday >= this.settings.maxNewPerDay || this.newCards.length === 0;
    },
    newCardsAreLeftOver() {
      const newCardsCount = this.updatedCards.filter(card => card.totalReviews === 0 || !card.totalReviews).length;
      return newCardsCount > 0 && newCardsCount + this.newToday > this.settings.maxNewPerDay;
    },
    newCardsLeftOver() {
      if (!this.newCardsAreLeftOver) return 0;
      return this.updatedCards.filter(card => card.totalReviews === 0 || !card.totalReviews).length;
    },
    dueCards() {
      const possibleAdditionalDueCardsToday = !this.settings.maxReviewsPerDay ? 99999 : this.settings.maxReviewsPerDay - (this.reviewsToday || 0);
      const now = Date.now();
      return this.updatedCards.filter(card => card.totalReviews && card.totalReviews > 0 && card.nextReview < now).sort((a, b) => a.nextReview > b.nextReview ? 1 : -1).slice(0, possibleAdditionalDueCardsToday > 0 ? possibleAdditionalDueCardsToday : 0);
    },
    doneReviewing() {
      return this.dueCards.length === 0 || this.settings.maxReviewsPerDay && this.reviewsToday >= this.settings.maxReviewsPerDay;
    },
    reviewsAreLeftOver() {
      return this.doneReviewing && this.dueCards.length;
    },
    reviewsLeftOver() {
      return this.dueCards.length;
    },
    allStudyableCards() {
      const cards = this.doneWithNewCards ? [...this.dueCards] : [...this.newCards, ...this.dueCards];
      return cards;
    },
    cardToStudy() {
      return this.cardsToStudy[0];
    },
    nextReviewIn() {
      if (this.settings.maxReviewsPerDay && this.reviewsToday >= this.settings.maxReviewsPerDay) return 'a day';
      const reviewableCards = this.doneForDay ? this.updatedCards.filter(card => card.totalReviews && card.totalReviews > 0) : this.updatedCards;
      const nextReview = reviewableCards.reduce((selected, card) => {
        const cardNext = card.nextReview;
        return cardNext < selected ? cardNext : selected;
      }, 9999999999999999999);
      return Object(commonFunctions["msToString"])(nextReview - Date.now());
    }
  },
  watch: {
    currentSetId() {
      this.toReview = [];
      this.$nextTick(() => {
        this.refreshCards();
        this.startedWith = this.dueCards.length + this.newCards.length;
      });
    },
    cards() {
      this.$nextTick(this.refreshCards);
    },
    doneForDay(isDone) {
      if (isDone) {
        window.scrollTo(0, 0);
        this.$nextTick(this.refreshCards);
        this.startedWith = 0;
      }
    },
    allStudyableCards(newStudyable) {
      const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
      const shuffleArrayLeaveFirstAndLast = arr => [...arr.slice(0, 1), ...shuffleArray(arr.slice(1, arr.length - 2)), ...arr.slice(arr.length - 2)];
      const newCardsToAdd = newStudyable.filter(toStudy => !this.cardsToStudy.find(existingCard => existingCard.id === toStudy.id));
      const hasUpdatedElsewhere = !!this.cardsToStudy.find(existingCard => !newStudyable.find(toStudy => existingCard.id === toStudy.id));
      if (hasUpdatedElsewhere) return this.cardsToStudy = this.settings.shuffleCards ? shuffleArray(newStudyable) : newStudyable;
      if (newCardsToAdd.length === 0) return;
      const newCardsToStudy = [...this.cardsToStudy, ...(this.settings.shuffleCards ? shuffleArray(newCardsToAdd) : newCardsToAdd)];
      this.cardsToStudy = this.settings.shuffleCards ? shuffleArrayLeaveFirstAndLast(newCardsToStudy) : newCardsToStudy.sort((a, b) => a.nextReview - b.nextReview);
    }
  },
  mounted() {
    if (this.settings.maxNewPerDay === undefined || this.settings.maxNewPerDay === null) this.$store.commit('updateSetSettings', {
      maxNewPerDay: 10
    });
    if (this.settings.studyReverse === undefined || this.settings.studyReverse === null) this.$store.commit('updateSetSettings', {
      studyReverse: false
    });
    this.refreshCardsTimer = setInterval(this.refreshCards, 10000);
    this.refreshCards();
    this.startedWith = this.dueCards.length + this.newCards.length;
  },
  beforeDestroy() {
    clearInterval(this.refreshCardsTimer);
  },
  methods: {
    finishedCurrentCard(timeMod) {
      this.cardsToStudy.shift();
      if (timeMod === undefined) return;
      const text = timeMod > 1 ? '+' + Object(commonFunctions["msToString"])(timeMod) : 'Again!';
      this.displayTimeMod = null;
      this.$nextTick(() => this.displayTimeMod = text);
      this.preloadNextImage();
    },
    postponeCurrentCard() {
      const card = this.cardsToStudy.shift();
      const timeToPostpone = 1 * 60 * 60 * 1000; // 1 hr
      this.$store.commit('updateCard', {
        id: card.id,
        nextReview: new Date(Date.now() + timeToPostpone).getTime()
      });
      this.displayTimeMod = null;
      this.$nextTick(() => this.displayTimeMod = 'Postponed for ' + Object(commonFunctions["msToString"])(timeToPostpone));
      this.preloadNextImage();
    },
    preloadNextImage() {
      const nextCard = this.cardsToStudy[1];
      if (!nextCard || !nextCard.imageURL) return;
      const preload = new Image();
      preload.src = nextCard.imageURL;
      console.log('preloaded', nextCard.imageURL);
    },
    refreshCards() {
      this.updatedCards = [...this.cards.filter(card => !card.suspended)];
    },
    updateMaxNewPerDay(newValue) {
      const parsedValue = parseInt(newValue) || 10;
      this.$store.commit('updateSetSettings', {
        maxNewPerDay: parsedValue
      });
    },
    updateMaxReviewsPerDay(newValue) {
      const parsedValue = parseInt(newValue) || 0;
      this.$store.commit('updateSetSettings', {
        maxReviewsPerDay: parsedValue
      });
    }
  }
});
// CONCATENATED MODULE: ./components/StudyFrame.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_StudyFramevue_type_script_lang_js_ = (StudyFramevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/StudyFrame.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(123)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_StudyFramevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "48088ed7",
  "1d124258"
  
)

/* harmony default export */ var StudyFrame = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {FloatingText: __webpack_require__(68).default,RemainingCardIndicator: __webpack_require__(91).default,SingleCardStudy: __webpack_require__(90).default,EditableTextField: __webpack_require__(56).default,ReviewGraph: __webpack_require__(67).default})


/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SetBrowser.vue?vue&type=template&id=dc3e8f92&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "cardbrowser"
  }, [_c('Browser', {
    attrs: {
      "cards": _vm.setCards
    }
  }), _vm._ssrNode(" <button class=\"add\" data-v-dc3e8f92><div data-v-dc3e8f92>Add Card</div></button>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/SetBrowser.vue?vue&type=template&id=dc3e8f92&scoped=true&

// EXTERNAL MODULE: ./components/Browser.vue + 4 modules
var Browser = __webpack_require__(73);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SetBrowser.vue?vue&type=script&lang=js&

/* harmony default export */ var SetBrowservue_type_script_lang_js_ = ({
  components: {
    Browser: Browser["default"]
  },
  computed: {
    setCards() {
      var _this$$store$state$se;
      return (_this$$store$state$se = this.$store.state.setList) === null || _this$$store$state$se === void 0 ? void 0 : _this$$store$state$se.find(s => s.id === this.$store.state.currentSetId).cards;
    }
  }
});
// CONCATENATED MODULE: ./components/SetBrowser.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SetBrowservue_type_script_lang_js_ = (SetBrowservue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/SetBrowser.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(125)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SetBrowservue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "dc3e8f92",
  "18eda49a"
  
)

/* harmony default export */ var SetBrowser = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Browser: __webpack_require__(73).default})


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(131);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("ee5172ca", content, true, context)
};

/***/ }),
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SetSettings_vue_vue_type_style_index_0_id_519f3284_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SetSettings_vue_vue_type_style_index_0_id_519f3284_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SetSettings_vue_vue_type_style_index_0_id_519f3284_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SetSettings_vue_vue_type_style_index_0_id_519f3284_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SetSettings_vue_vue_type_style_index_0_id_519f3284_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".settingslist[data-v-519f3284]{margin:20px auto 0;max-width:400px}.settingslist>*[data-v-519f3284]{margin-bottom:40px}p[data-v-519f3284]{margin-bottom:10px}p>*[data-v-519f3284]{display:inline-block;min-width:55px}.below[data-v-519f3284]{left:0;position:absolute;top:100%}button[data-v-519f3284]{width:100%}.marright[data-v-519f3284]{margin-right:10px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardCreator_vue_vue_type_style_index_0_id_c5a5d126_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardCreator_vue_vue_type_style_index_0_id_c5a5d126_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardCreator_vue_vue_type_style_index_0_id_c5a5d126_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardCreator_vue_vue_type_style_index_0_id_c5a5d126_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardCreator_vue_vue_type_style_index_0_id_c5a5d126_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 122 */
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
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StudyFrame_vue_vue_type_style_index_0_id_48088ed7_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(100);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StudyFrame_vue_vue_type_style_index_0_id_48088ed7_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StudyFrame_vue_vue_type_style_index_0_id_48088ed7_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StudyFrame_vue_vue_type_style_index_0_id_48088ed7_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StudyFrame_vue_vue_type_style_index_0_id_48088ed7_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".studyframe[data-v-48088ed7]{opacity:.3;position:relative;transition:all .5s}.studyframe.focus[data-v-48088ed7]{opacity:1}.padt-small[data-v-48088ed7],.padtb-small[data-v-48088ed7]{padding-top:15px}.padtb-small[data-v-48088ed7]{padding-bottom:15px}.padtb[data-v-48088ed7]{padding:100px 0}.progressbar[data-v-48088ed7]{height:0;position:relative;width:100%}.progressbar div[data-v-48088ed7]{background:#ccc;height:5px;transition:.5s}.singlesetting[data-v-48088ed7]{background:#eee;border-radius:5px;display:inline-block;padding:15px 20px}.singlesetting>*[data-v-48088ed7]{display:inline-block;min-width:50px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SetBrowser_vue_vue_type_style_index_0_id_dc3e8f92_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(103);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SetBrowser_vue_vue_type_style_index_0_id_dc3e8f92_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SetBrowser_vue_vue_type_style_index_0_id_dc3e8f92_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SetBrowser_vue_vue_type_style_index_0_id_dc3e8f92_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SetBrowser_vue_vue_type_style_index_0_id_dc3e8f92_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".cardbrowser[data-v-dc3e8f92]{font-size:1rem;margin:0 auto 200px;position:relative;transition:all .5s}.add[data-v-dc3e8f92]{margin-top:40px;width:100%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SetView.vue?vue&type=template&id=474613a4&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "setview"
  }, [_vm._ssrNode("<h1 data-v-474613a4>", "</h1>", [_c('EditableTextField', {
    attrs: {
      "text": _vm.name,
      "placeholder": "Enter set name",
      "lineBreaksAllowed": false
    },
    on: {
      "startEdit": _vm.startEditName,
      "endEdit": _vm.saveEditedName
    }
  }), _vm._ssrNode(" " + (_vm.cards ? "<div class=\"sub\" data-v-474613a4>" + _vm._ssrEscape("\n      (" + _vm._s(_vm.cards.length) + " card" + _vm._s(_vm.cards.length === 1 ? '' : 's') + ")\n    ") + "</div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"buttonlist\" data-v-474613a4><button" + _vm._ssrClass(null, {
    active: _vm.appState === 'study' || _vm.appState === 'editCard'
  }) + " data-v-474613a4><div data-v-474613a4>Study</div> <kbd class=\"keyicon\" data-v-474613a4>s</kbd></button> <button" + _vm._ssrClass(null, {
    active: _vm.appState === 'addCard'
  }) + " data-v-474613a4><div data-v-474613a4>Add</div> <kbd class=\"keyicon\" data-v-474613a4>a</kbd></button> <button" + _vm._ssrClass(null, {
    active: _vm.appState === 'setBrowse'
  }) + " data-v-474613a4><div data-v-474613a4>Browse</div> <kbd class=\"keyicon\" data-v-474613a4>b</kbd></button> <button" + _vm._ssrClass(null, {
    active: _vm.appState === 'setStats'
  }) + " data-v-474613a4><div data-v-474613a4>Stats</div> <kbd class=\"keyicon\" data-v-474613a4>t</kbd></button> <button" + _vm._ssrClass(null, {
    active: _vm.appState === 'setSettings'
  }) + " data-v-474613a4><div data-v-474613a4>Settings</div> <kbd class=\"keyicon\" data-v-474613a4>e</kbd></button></div> <br data-v-474613a4> "), _vm._ssrNode("<div class=\"setelements\" data-v-474613a4>", "</div>", [_vm.appState === 'addCard' || !_vm.cards && _vm.appState === 'study' ? _c('CardCreator', {
    key: "add"
  }) : _vm.appState === 'setBrowse' ? _c('SetBrowser', {
    key: "browse"
  }) : _vm.appState === 'setSettings' ? _c('SetSettings', {
    key: "settings"
  }) : _vm.appState === 'setStats' ? _c('SetStats', {
    key: "stats"
  }) : _c('StudyFrame', {
    key: "study",
    attrs: {
      "cards": _vm.cards
    }
  })], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/SetView.vue?vue&type=template&id=474613a4&scoped=true&

// EXTERNAL MODULE: ./components/EditableTextField.vue + 4 modules
var EditableTextField = __webpack_require__(56);

// EXTERNAL MODULE: ./components/SetSettings.vue + 4 modules
var SetSettings = __webpack_require__(111);

// EXTERNAL MODULE: ./components/SetStats.vue + 4 modules
var SetStats = __webpack_require__(112);

// EXTERNAL MODULE: ./components/CardCreator.vue + 5 modules
var CardCreator = __webpack_require__(110);

// EXTERNAL MODULE: ./components/StudyFrame.vue + 4 modules
var StudyFrame = __webpack_require__(113);

// EXTERNAL MODULE: ./components/SetBrowser.vue + 4 modules
var SetBrowser = __webpack_require__(114);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SetView.vue?vue&type=script&lang=js&






/* harmony default export */ var SetViewvue_type_script_lang_js_ = ({
  props: {
    id: {},
    name: {},
    cards: {},
    lastStudied: {
      default: () => new Date()
    },
    newToday: {
      default: 0
    },
    reviewsToday: {
      default: 0
    }
  },
  components: {
    EditableTextField: EditableTextField["default"],
    SetSettings: SetSettings["default"],
    SetStats: SetStats["default"],
    CardCreator: CardCreator["default"],
    StudyFrame: StudyFrame["default"],
    SetBrowser: SetBrowser["default"]
  },
  data() {
    return {
      newCardsToday: 0,
      reviewCardsToday: 0
    };
  },
  computed: {
    appState() {
      return this.$store.state.appState;
    },
    isEditingText() {
      return this.$store.state.isEditingText;
    },
    setList() {
      return this.$store.state.setList;
    }
  },
  mounted() {
    window.addEventListener('keyup', this.keyUp);
  },
  beforeDestroy() {
    window.removeEventListener('keyup', this.keyUp);
  },
  methods: {
    startEditName() {
      this.$store.commit('setIsEditingText', true);
    },
    saveEditedName(newName) {
      this.$store.commit('updateSetName', newName);
      this.$store.commit('setIsEditingText', false);
    },
    keyUp(event) {
      if (this.isEditingText) return;
      if (event.key === 's') this.$store.commit('setAppState', 'study');
      if (event.key === 'a') this.$store.commit('setAppState', 'addCard');
      if (event.key === 'b') this.$store.commit('setAppState', 'setBrowse');
      if (event.key === 't') this.$store.commit('setAppState', 'setStats');
      if (event.key === 'e') this.$store.commit('setAppState', 'setSettings');
      if (event.key === 'ArrowRight') this.$store.dispatch('goToNextSet');
      if (event.key === 'ArrowLeft') this.$store.dispatch('goToPreviousSet');
    }
  }
});
// CONCATENATED MODULE: ./components/SetView.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SetViewvue_type_script_lang_js_ = (SetViewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/SetView.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(130)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SetViewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "474613a4",
  "9f7813ba"
  
)

/* harmony default export */ var SetView = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {EditableTextField: __webpack_require__(56).default,CardCreator: __webpack_require__(110).default,SetBrowser: __webpack_require__(114).default,SetSettings: __webpack_require__(111).default,SetStats: __webpack_require__(112).default,StudyFrame: __webpack_require__(113).default})


/***/ }),
/* 128 */,
/* 129 */,
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SetView_vue_vue_type_style_index_0_id_474613a4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(115);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SetView_vue_vue_type_style_index_0_id_474613a4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SetView_vue_vue_type_style_index_0_id_474613a4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SetView_vue_vue_type_style_index_0_id_474613a4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SetView_vue_vue_type_style_index_0_id_474613a4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "h1[data-v-474613a4]{height:2rem;margin-bottom:.75rem;margin-top:0}h1 div[data-v-474613a4]{display:inline-block}.padright[data-v-474613a4]{padding-right:10px}.setelements>*[data-v-474613a4],.setelements>*>*[data-v-474613a4]{width:100%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })
]);;
//# sourceMappingURL=set-view.js.map