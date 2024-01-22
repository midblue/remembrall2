export { default as App } from '../../components/App.vue'
export { default as AutoSpeaker } from '../../components/AutoSpeaker.vue'
export { default as Browser } from '../../components/Browser.vue'
export { default as Card } from '../../components/Card.vue'
export { default as CardCreator } from '../../components/CardCreator.vue'
export { default as CardEditor } from '../../components/CardEditor.vue'
export { default as CardInline } from '../../components/CardInline.vue'
export { default as CardTools } from '../../components/CardTools.vue'
export { default as Dropdown } from '../../components/Dropdown.vue'
export { default as EditableTextField } from '../../components/EditableTextField.vue'
export { default as EditableTextFieldMarkdown } from '../../components/EditableTextFieldMarkdown.vue'
export { default as FloatingText } from '../../components/FloatingText.vue'
export { default as ImageLoader } from '../../components/ImageLoader.vue'
export { default as RefreshHandler } from '../../components/RefreshHandler.vue'
export { default as RemainingCardIndicator } from '../../components/RemainingCardIndicator.vue'
export { default as ReviewGraph } from '../../components/ReviewGraph.vue'
export { default as SetBrowser } from '../../components/SetBrowser.vue'
export { default as SetSettings } from '../../components/SetSettings.vue'
export { default as SetStats } from '../../components/SetStats.vue'
export { default as SetView } from '../../components/SetView.vue'
export { default as SingleCardStudy } from '../../components/SingleCardStudy.vue'
export { default as StudyExtras } from '../../components/StudyExtras.vue'
export { default as StudyExtrasJA } from '../../components/StudyExtrasJA.vue'
export { default as StudyFrame } from '../../components/StudyFrame.vue'
export { default as Toggle } from '../../components/Toggle.vue'
export { default as UserAndSetPicker } from '../../components/UserAndSetPicker.vue'
export { default as UserView } from '../../components/UserView.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
