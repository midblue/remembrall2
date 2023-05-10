exports.ids = [3,2,4,7,8,9,11,13,22,23];
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
/* 56 */,
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
/* 67 */,
/* 68 */,
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
/* 76 */,
/* 77 */,
/* 78 */,
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
/* 82 */,
/* 83 */,
/* 84 */,
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
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
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


/***/ })
]);;
//# sourceMappingURL=browser.js.map