export const App = () => import('../../components/App.vue' /* webpackChunkName: "components/app" */).then(c => wrapFunctional(c.default || c))
export const AutoSpeaker = () => import('../../components/AutoSpeaker.vue' /* webpackChunkName: "components/auto-speaker" */).then(c => wrapFunctional(c.default || c))
export const Browser = () => import('../../components/Browser.vue' /* webpackChunkName: "components/browser" */).then(c => wrapFunctional(c.default || c))
export const Card = () => import('../../components/Card.vue' /* webpackChunkName: "components/card" */).then(c => wrapFunctional(c.default || c))
export const CardCreator = () => import('../../components/CardCreator.vue' /* webpackChunkName: "components/card-creator" */).then(c => wrapFunctional(c.default || c))
export const CardEditor = () => import('../../components/CardEditor.vue' /* webpackChunkName: "components/card-editor" */).then(c => wrapFunctional(c.default || c))
export const CardInline = () => import('../../components/CardInline.vue' /* webpackChunkName: "components/card-inline" */).then(c => wrapFunctional(c.default || c))
export const CardTools = () => import('../../components/CardTools.vue' /* webpackChunkName: "components/card-tools" */).then(c => wrapFunctional(c.default || c))
export const Dropdown = () => import('../../components/Dropdown.vue' /* webpackChunkName: "components/dropdown" */).then(c => wrapFunctional(c.default || c))
export const EditableTextField = () => import('../../components/EditableTextField.vue' /* webpackChunkName: "components/editable-text-field" */).then(c => wrapFunctional(c.default || c))
export const EditableTextFieldMarkdown = () => import('../../components/EditableTextFieldMarkdown.vue' /* webpackChunkName: "components/editable-text-field-markdown" */).then(c => wrapFunctional(c.default || c))
export const FloatingText = () => import('../../components/FloatingText.vue' /* webpackChunkName: "components/floating-text" */).then(c => wrapFunctional(c.default || c))
export const ImageLoader = () => import('../../components/ImageLoader.vue' /* webpackChunkName: "components/image-loader" */).then(c => wrapFunctional(c.default || c))
export const RefreshHandler = () => import('../../components/RefreshHandler.vue' /* webpackChunkName: "components/refresh-handler" */).then(c => wrapFunctional(c.default || c))
export const RemainingCardIndicator = () => import('../../components/RemainingCardIndicator.vue' /* webpackChunkName: "components/remaining-card-indicator" */).then(c => wrapFunctional(c.default || c))
export const ReviewGraph = () => import('../../components/ReviewGraph.vue' /* webpackChunkName: "components/review-graph" */).then(c => wrapFunctional(c.default || c))
export const SetBrowser = () => import('../../components/SetBrowser.vue' /* webpackChunkName: "components/set-browser" */).then(c => wrapFunctional(c.default || c))
export const SetSettings = () => import('../../components/SetSettings.vue' /* webpackChunkName: "components/set-settings" */).then(c => wrapFunctional(c.default || c))
export const SetStats = () => import('../../components/SetStats.vue' /* webpackChunkName: "components/set-stats" */).then(c => wrapFunctional(c.default || c))
export const SetView = () => import('../../components/SetView.vue' /* webpackChunkName: "components/set-view" */).then(c => wrapFunctional(c.default || c))
export const SingleCardStudy = () => import('../../components/SingleCardStudy.vue' /* webpackChunkName: "components/single-card-study" */).then(c => wrapFunctional(c.default || c))
export const StudyExtras = () => import('../../components/StudyExtras.vue' /* webpackChunkName: "components/study-extras" */).then(c => wrapFunctional(c.default || c))
export const StudyExtrasJA = () => import('../../components/StudyExtrasJA.vue' /* webpackChunkName: "components/study-extras-j-a" */).then(c => wrapFunctional(c.default || c))
export const StudyFrame = () => import('../../components/StudyFrame.vue' /* webpackChunkName: "components/study-frame" */).then(c => wrapFunctional(c.default || c))
export const Toggle = () => import('../../components/Toggle.vue' /* webpackChunkName: "components/toggle" */).then(c => wrapFunctional(c.default || c))
export const UserAndSetPicker = () => import('../../components/UserAndSetPicker.vue' /* webpackChunkName: "components/user-and-set-picker" */).then(c => wrapFunctional(c.default || c))
export const UserView = () => import('../../components/UserView.vue' /* webpackChunkName: "components/user-view" */).then(c => wrapFunctional(c.default || c))

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
