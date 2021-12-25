<template>
  <div v-if="text" class="extras">
    <AutoSpeaker
      v-if="settings.languageTools"
      :text="textToSpeak"
      :language="settings.languageTools"
    />
    <StudyExtrasJA
      v-if="settings.languageTools === 'ja'"
      :text="text"
      :secondary-text="secondaryText"
    />
    <a class="fakelink sub" @click="speakWord">Speak it</a><span> ・ </span>
    <a target="_blank" :href="pronunciationLink" class="sub">Native</a
    ><span> ・ </span>
    <a target="_blank" :href="translationLink" class="sub">Translation</a>
  </div>
</template>

<script>
import AutoSpeaker from './AutoSpeaker'
import StudyExtrasJA from './StudyExtrasJA'
import { getKeyWord } from '~/assets/commonFunctions.js'
export default {
  components: { AutoSpeaker, StudyExtrasJA },
  props: {
    text: {
      default: '',
    },
    secondaryText: {
      default: '',
    },
    autoSpeak: {
      default: false,
    },
    shown: {
      default: false,
    },
  },
  data() {
    return {
      textToSpeak: '',
    }
  },
  computed: {
    settings() {
      return this.$store.state.setList[this.$store.state.currentSetId].settings
    },
    searchString() {
      return this.text.replace(/\n.*/g, '')
    },
    searchWord() {
      return getKeyWord(this.searchString)
    },
    pronunciationLink() {
      return `https://forvo.com/word/${this.searchWord}/#${this.settings.languageTools}`
    },
    translationLink() {
      return `https://translate.google.com/#${this.settings.languageTools}/en/${this.searchString}`
    },
  },
  watch: {
    shown(willShow) {
      if (willShow && this.settings.autoSpeak) this.speakWord()
    },
  },
  mounted() {},
  methods: {
    speakWord() {
      this.textToSpeak = this.searchString
      setTimeout(() => (this.textToSpeak = ''), 300)
    },
  },
}
</script>
<style scoped lang="scss">
.extras {
  padding-bottom: 20px;
}
.fakelink {
  text-decoration: underline;
  cursor: pointer;
}
</style>
