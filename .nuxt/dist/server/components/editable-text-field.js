exports.ids = [10];
exports.modules = {

/***/ 56:
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

/***/ 76:
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

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableTextField_vue_vue_type_style_index_0_id_37251bf7_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableTextField_vue_vue_type_style_index_0_id_37251bf7_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableTextField_vue_vue_type_style_index_0_id_37251bf7_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableTextField_vue_vue_type_style_index_0_id_37251bf7_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableTextField_vue_vue_type_style_index_0_id_37251bf7_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".editabletext{cursor:pointer}.editabletext.placeholder{color:rgba(0,0,0,.2)}.editabletext.editabletextediting{cursor:text}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=editable-text-field.js.map