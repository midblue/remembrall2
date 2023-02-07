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

      const preferredSpeakers = {
        es: ['Google ', 'Paulina', 'Mónica'],
        en: ['Google ', 'Samantha'],
        any: ['Google '],
      }
      const possibleSpeakerNames = [
        ...(preferredSpeakers[this.language] || []),
        ...(preferredSpeakers.any || []),
      ]
      for (let sn of possibleSpeakerNames) {
        const voice = possibleVoices.find((v) => v.name.startsWith(sn))
        if (voice) {
          this.speaker.voice = voice
          break
        }
      }
      if (!this.speaker.voice) {
        this.speaker.voice = possibleVoices[0]
        // random
        this.speaker.voice =
          possibleVoices[Math.floor(Math.random() * possibleVoices.length)]
      }
      console.log(this.speaker.voice.name)
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
