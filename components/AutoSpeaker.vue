<template></template>
<script>
import { getKeyWord } from '~/assets/commonFunctions.js'
export default {
  props: {
    text: {
      default: '',
    },
    language: {
      required: true,
    },
  },
  data() {
    return {
      speaker: null,
    }
  },
  computed: {
    settings() {
      return this.$store.state.setList[this.$store.state.currentSetId].settings
    },
  },
  watch: {
    language(newLang) {
      this.spawnSpeaker()
    },
    text(newText) {
      if (newText) this.speakWord()
    },
  },
  methods: {
    spawnSpeaker() {
      if (!window.speechSynthesis) return
      this.speaker = new SpeechSynthesisUtterance()
      this.speaker.lang = this.language
      this.speaker.volume = 0.4
      this.speaker.rate = this.settings.speechSpeed || 0.8
      const possibleVoices = window.speechSynthesis
        .getVoices()
        .filter((v) => v.lang.split('-')[0].toLowerCase() === this.language)

      if (this.language !== 'es')
        this.speaker.voice = possibleVoices.find((v) =>
          v.name.startsWith('Google ')
        )
      // console.log(possibleVoices, this.speaker.voice)
    },
    speakWord() {
      this.spawnSpeaker()
      if (!this.speaker) return
      this.speaker.text = this.text
      window.speechSynthesis.speak(this.speaker)
    },
  },
}
</script>
