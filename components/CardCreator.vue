<template>
  <div class="cardcreator" :class="{ loading: loadingAutocomplete }">
    <div class="cardframe">
      <EditableTextFieldMarkdown
        ref="front"
        v-model="front"
        class="textfield front"
        :class="{ duplicate: isDuplicate }"
        :focus="setFocus === 'front'"
        placeholder="Hint"
        @startEdit="focus"
        @next="tab"
        @setImageURL="setImageURL"
      />
      <div v-if="examples" class="examplefield" @click="examples = undefined">
        <div v-for="e in examples" :key="e.split('@')[0]">
          {{ e.split('@')[0] }}
        </div>
      </div>
      <div v-if="imageURL" class="imagecontainer" @click="imageURL = ''">
        <ImageLoader :url="imageURL" />
      </div>
      <EditableTextFieldMarkdown
        ref="back"
        v-model="back"
        class="textfield back"
        :focus="setFocus === 'back'"
        placeholder="Answer"
        @startEdit="focus"
        @prev="shiftTab"
        @setImageURL="setImageURL"
      />
      <div v-if="examples" class="examplefield">
        <div v-for="e in examples" :key="e.split('@')[1]">
          {{ e.split('@')[1] }}
        </div>
      </div>
    </div>

    <FloatingText :text="floatText" offset="-30" />
    <div class="buttonlist">
      <button @click="newCard">
        <div>Add Card</div>
        <kbd class="keyicon">⌘-Enter</kbd>
      </button>
    </div>

    <center v-if="front || back">
      <template v-if="['ja', 'es'].includes(languageTools)">
        <button @click="autoComplete">
          <div>Auto-Complete Card</div>
          <kbd class="keyicon">{{ isFirefox ? 'ctrl' : '⌘' }}-m</kbd>
        </button>
        <br />
        <br />
      </template>
      <span class="sub">Paste an image link to add your own image.</span>
      <span class="sub">Or,</span>
      <br />
      <button @click="autoSetImage">
        <div>Auto-Set Image</div>
        <kbd class="keyicon">{{ isFirefox ? 'ctrl' : '⌘' }}-i</kbd>
      </button>
      <br />
      <div v-if="imageURL" class="sub" style="position: relative; top: 5px">
        (click image to remove it)
      </div>
      <br />

      <br />
    </center>
  </div>
</template>

<script>
import FloatingText from './FloatingText'
import EditableTextFieldMarkdown from './EditableTextFieldMarkdown'
import ImageLoader from './ImageLoader'
import { getRandomImage } from '~/assets/commonFunctions'
import { autocomplete } from '~/assets/autocomplete'

export default {
  components: {
    FloatingText,
    EditableTextFieldMarkdown,
    ImageLoader,
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
      loadingAutocomplete: false,
    }
  },
  computed: {
    languageTools() {
      return this.$store.state.setList?.find(
        (s) => s.id === this.$store.state.currentSetId
      ).settings.languageTools
    },
    cards() {
      return this.$store.state.setList?.find(
        (s) => s.id === this.$store.state.currentSetId
      ).cards
    },
  },
  watch: {
    front(newFront) {
      if (newFront.length < 2) return (this.isDuplicate = false)
      this.isDuplicate = this.cards.find(
        (card) => card.front.toLowerCase() === newFront.toLowerCase()
      )
    },
  },
  mounted() {
    window.addEventListener('keydown', this.keyDown)
    window.addEventListener('keyup', this.keyUp)
    this.$store.commit('setAppState', 'addCard')
    window.addEventListener('focus', this.focus)
    window.addEventListener('blur', this.blur)
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.keyDown)
    window.removeEventListener('keyup', this.keyUp)
    this.$store.commit('setIsEditingText', false)
    window.removeEventListener('focus', this.focus)
    window.removeEventListener('blur', this.blur)
  },
  methods: {
    focus() {
      this.$refs.front.$el.blur()
      this.$refs.back.$el.blur()
      this.$store.commit('setIsEditingText', false)
      window.getSelection().removeAllRanges()
    },
    blur() {
      this.$refs.front.$el.blur()
      this.$refs.back.$el.blur()
      this.$store.commit('setIsEditingText', false)
      window.getSelection().removeAllRanges()
    },
    newCard() {
      if ((!this.front && !this.imageURL) || !this.back) return
      const newCard = {
        id: Date.now(),
        front: this.front,
        back: this.back,
        nextReview: 0,
        set: parseInt(this.$store.state.currentSetId),
      }
      // * firestore DOES NOT like getting undefined as a value
      if (this.examples) newCard.examples = this.examples
      if (this.imageURL) newCard.imageURL = this.imageURL

      this.$store.commit('addCard', newCard)
      this.floatText = 'Card added.'
      setTimeout(() => (this.floatText = ''), 1500)
      this.$nextTick(() => {
        this.front = ''
        this.back = ''
        this.imageURL = ''
        this.examples = undefined
        this.isDuplicate = false
        this.setFocus = null
        this.$nextTick(() => (this.setFocus = 'front'))
      })
    },
    keyDown(event) {
      if (event.key === 'Control') this.metaDown = true
      if (event.key === 'Meta') this.metaDown = true
      if (event.key === 'Enter' && this.metaDown) this.$nextTick(this.newCard)
      if (event.key === 'i' && this.metaDown) {
        event.preventDefault()
        event.stopPropagation()
        this.autoSetImage()
      }
      if (event.key === 'm' && this.metaDown) {
        event.preventDefault()
        event.stopPropagation()
        this.autoComplete()
      }
    },
    keyUp(event) {
      if (event.key === 'Control') this.metaDown = false
      if (event.key === 'Meta') this.metaDown = false
    },
    focus() {
      this.$store.commit('setIsEditingText', true)
    },
    tab(e) {
      e.preventDefault()
      this.setFocus = null
      this.$nextTick(() => (this.setFocus = 'back'))
    },
    shiftTab(e) {
      e.preventDefault()
      this.setFocus = null
      this.$nextTick(() => (this.setFocus = 'front'))
    },
    setImageURL(url) {
      this.imageURL = url
    },
    autoSetImage() {
      getRandomImage(this.front || this.back).then((image) => {
        if (image) this.imageURL = image
        else this.floatText = 'No image found.'
      })
    },
    autoComplete() {
      this.loadingAutocomplete = true
      const basedOnFrontText = !!this.front
      const textToBaseOn = (basedOnFrontText ? this.front : this.back).split(
        '\n'
      )[0]
      if (!textToBaseOn) {
        this.loadingAutocomplete = false
        return console.log('no basis text')
      }

      autocomplete({
        front: this.front,
        back: this.back,
        basedOnFrontText,
        textToBaseOn,
        language: this.languageTools,
      }).then((newValues) => {
        // console.log(newValues)
        this.front = newValues.front || this.front
        this.back = newValues.back || this.back
        this.imageURL = newValues.image || this.imageURL || ''
        this.examples = newValues.examples || this.examples || undefined
        if (this.examples)
          this.examples = this.examples.map((e) => decodeHtmlEntities(e))
        if (newValues.shouldAutoSetImage && !newValues.image)
          this.autoSetImage()
        this.loadingAutocomplete = false
      })
    },
  },
}

const decodeHtmlEntities = function (str) {
  return str
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
}
</script>

<style lang="scss" scoped>
.cardcreator {
  position: relative;
  margin: 0 auto;
  opacity: 1;
  transition: all 0.5s;

  &.loading {
    pointer-events: none;
    opacity: 0.3;
  }

  & > * {
    display: block;
  }

  .cardframe {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
  }

  .imagecontainer {
    background: #f8f8f8;
    text-align: center;

    & > * {
      margin: 0 auto;
      max-width: 80%;
      max-height: 250px;
    }
  }

  .examplefield {
    font-size: 0.8rem;
    color: rgba(black, 0.6);
    background: #f8f8f8;
    text-align: center;
    padding: 0em 2em 1em 2em;
    line-height: 1.2;
  }
  .textfield {
    background: #f8f8f8;
    padding: 50px 20px;
    font-size: 1.5rem;
    text-align: center;
    transition: background 0.2s;
    outline: 0;

    &.editabletextediting {
      background: rgba(0, 0, 0, 0.05);
    }

    &:after {
      position: absolute;
      top: 10px;
      right: -10px;
      opacity: 0;
      content: '';
      transition: all 0.4s;
      font-weight: 600;
      font-size: 0.5em;
    }

    &:hover:not(.editabletextediting) {
      position: relative;
      background: rgba(0, 0, 0, 0.05);

      &:after {
        right: 10px;
        content: 'Click to Edit';
        opacity: 1;
        color: rgba(black, 0.2);
      }
    }

    &.duplicate {
      &:after {
        right: 10px;
        content: 'Duplicate card!' !important;
        color: rgba(#f52, 1) !important;
        opacity: 1;
      }
    }
  }

  .back {
    border-top: 1px solid #ddd;
    transition: 0.2s;
  }

  .buttonlist {
    display: flex;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
  }
}
</style>
