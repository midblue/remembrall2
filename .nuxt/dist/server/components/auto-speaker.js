exports.ids = [2];
exports.modules = {

/***/ 46:
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

/***/ })

};;
//# sourceMappingURL=auto-speaker.js.map