<template>
  <div>
    <AutoSpeaker
      v-if="settings.languageTools"
      :text="textToSpeak"
      :language="spokenLanguage"
    />
    <Card
      :id="id"
      ref="card"
      class="card"
      :front="front"
      :back="back"
      :reverse="reverse"
      :time-mod="timeMod"
      :next-review="nextReview"
      :total-reviews="totalReviews"
      :created="created"
      :ok="ok"
      :again="again"
      :for-study="true"
      :show-back="showBack"
      :set="set"
      :image-u-r-l="imageURL"
      :examples="examples"
      @showBack="showBackAction"
    />

    <div class="buttonlist primary">
      <button
        v-if="!showBack"
        key="showback"
        class="showback"
        @click="showBackAction"
      >
        Show Back
        <div>
          <kbd class="keyicon">Space</kbd>
        </div>
      </button>
      <template v-else>
        <button
          v-if="timeBonuses.again !== undefined"
          key="again"
          @click="answer('again')"
        >
          Wrong
          <span class="sub"
            ><span class="fade">{{ msToString(0, true) }}</span></span
          >
          <div>
            <kbd class="keyicon">1</kbd>
          </div>
        </button>
        <button v-if="timeBonuses.hard" key="hard" @click="answer('hard')">
          Hard
          <span class="sub"
            ><span class="fade"
              >~{{ msToString(timeBonuses.hard, true) }}</span
            ></span
          >
          <div>
            <kbd class="keyicon">2</kbd>
          </div>
        </button>
        <button v-if="timeBonuses.ok" key="ok" @click="answer('ok')">
          Right
          <span class="sub"
            ><span class="fade"
              >~{{ msToString(timeBonuses.ok, true) }}</span
            ></span
          >
          <div>
            <kbd class="keyicon">3</kbd>
            <span v-if="!isMobile">/</span>
            <kbd class="keyicon">Space</kbd>
          </div>
        </button>
      </template>
    </div>
    <br />
    <div class="centertext">
      <button
        style="padding-right: 15%; padding-left: 15%"
        @click="$emit('postpone')"
      >
        Postpone
        <div>
          <span class="keyicon">P</span>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
import Card from './Card'
import AutoSpeaker from './AutoSpeaker'
import { msToString, getRandomImage } from '~/assets/commonFunctions'

const minimumTimeMod = 30 * 60 * 1000 // 30m
const difficultyModifiers = {
  ok: 4,
  hard: 1,
  again: 0.1,
}
const timeIgnoreCutoff = [300, 30 * 1000] // .3s / 30s

export default {
  components: {
    Card,
    AutoSpeaker,
  },
  props: {
    reverse: {},
    front: {},
    back: {},
    id: {},
    set: {},
    timeMod: {
      default: 0,
    },
    nextReview: {
      default: 0,
    },
    totalReviews: {
      default: 0,
    },
    imageURL: {},
    examples: {},
    created: {
      default: () => new Date().getTime(),
    },
    ok: {
      default: 0,
    },
    again: {
      default: 0,
    },
  },
  data() {
    return {
      msToString,
      showBack: false,
      startedCardTime: new Date(),
      revealedBackTime: new Date(),
      averageTime: 7000,
      reviewsSoFar: 0,
      metaDown: false,
      textToSpeak: '',
      isFirefox: navigator.userAgent.toLowerCase().includes('firefox'),
    }
  },
  computed: {
    settings() {
      return this.$store.state.setList?.find(
        (s) => s.id === this.$store.state.currentSetId
      ).settings
    },
    isStudying() {
      return this.$store.state.appState === 'study'
    },
    isEditing() {
      return this.$store.state.appState === 'editCard'
    },
    isMobile() {
      return this.$store.state.isMobile
    },
    isEditingText() {
      return this.$store.state.isEditingText
    },
    isNewCard() {
      return !this.totalReviews || this.totalReviews === 0
    },
    spokenLanguage() {
      return this.settings.autoSpeak
        ? this.isStudying && this.showBack
          ? this.settings.languageTools
          : 'en'
        : this.settings.languageTools
    },
    timeBonuses() {
      const bonuses = {
        ok: this.getTimeBonus('ok'),
        hard: this.getTimeBonus('hard'),
        again: this.getTimeBonus('again'),
      }
      return bonuses
    },
  },
  watch: {
    id() {
      this.startedCardTime = new Date()
      this.showBack = false
      if (this.settings.autoSpeakFront) {
        this.textToSpeak = (this.reverse ? this.back : this.front).replace(
          /\n.*/g,
          ''
        )
      }
      const topOfCardVisible =
        this.$el.getBoundingClientRect().top + window.scrollY - 10
      if (topOfCardVisible > window.scrollY + 100) return
      window.scrollTo(0, topOfCardVisible)
    },
  },
  mounted() {
    window.addEventListener('keydown', this.keyDown)
    window.addEventListener('keyup', this.keyUp)
    if (this.settings.autoSpeakFront) {
      this.textToSpeak = (this.reverse ? this.back : this.front).replace(
        /\n.*/g,
        ''
      )
    }
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.keyDown)
    window.removeEventListener('keyup', this.keyUp)
  },
  methods: {
    showBackAction() {
      this.showBack = true
      this.revealedBackTime = new Date()
      const cardRect = this.$refs.card.$el.getBoundingClientRect()
      const bottomOfCardVisible =
        cardRect.top +
        window.scrollY +
        cardRect.height -
        window.innerHeight +
        (this.isMobile ? 70 : 120)
      if (bottomOfCardVisible <= 0 || bottomOfCardVisible < window.scrollY)
        return
      window.scrollTo(0, bottomOfCardVisible)
    },
    answer(difficulty) {
      if (this.imageURL === 'loading')
        this.$store.commit('updateCard', {
          id: this.id,
          imageURL: null,
        })

      this.showBack = false
      this.reviewsSoFar++

      const cardTime = this.revealedBackTime - this.startedCardTime

      // ignore too fast or too slow times
      const ignoreTime =
        cardTime < timeIgnoreCutoff[0] || cardTime > timeIgnoreCutoff[1]

      // update running average time
      if (!ignoreTime)
        this.averageTime =
          this.averageTime * ((this.reviewsSoFar - 1) / this.reviewsSoFar) +
          cardTime * (1 / this.reviewsSoFar)

      // * calc time modifiers, all in 0-1 range
      // * 0 being bad, 1 being good
      const bonuses = {}

      // depending on time taken, adds time
      bonuses.answerTime = ignoreTime
        ? 0
        : 1 - (cardTime - timeIgnoreCutoff[0]) / timeIgnoreCutoff[1]

      // if card is older, adds more time
      const maturityThreshold = 30
      bonuses.maturity =
        this.totalReviews > maturityThreshold
          ? 1
          : this.totalReviews / maturityThreshold

      // if card is usually succeeded on, adds more time
      const successRatio = ((this.ok || 0) * 0.2) / (this.again || 1)
      bonuses.successRatio = successRatio > 1 ? 1 : successRatio

      // depending on the length of the answer vs the length of the prompt, adds time
      let collectiveLength =
        this.front.length + // .replace(/\n.*/g, '')
        this.back.length -
        5
      if (collectiveLength < 0) collectiveLength = 0
      const lengthThreshold = 40
      bonuses.length =
        collectiveLength > lengthThreshold
          ? 1
          : collectiveLength / lengthThreshold

      const bonusMultipliers = {
        answerTime: 0.4,
        maturity: 0.25,
        successRatio: 0.25,
        length: 0.1,
      } // adds up to 1

      console.log('base time mod:', msToString(this.timeBonuses[difficulty]))

      let bonusMultiplier = 0
      for (const bonus in bonuses) {
        console.log(
          bonus + ' bonus:',
          (bonuses[bonus] * 100).toFixed(0) +
            '% (+' +
            (bonuses[bonus] * bonusMultipliers[bonus] * 100).toFixed(0) +
            '% adjusted)'
        )
        bonusMultiplier += bonuses[bonus] * bonusMultipliers[bonus]
      }

      console.log('final bonus multiplier:', bonusMultiplier)
      let newTimeMod =
        this.timeBonuses[difficulty] / 2 +
        this.timeBonuses[difficulty] * bonusMultiplier // final mod can be from .5 to 1.5 of the base bonus

      newTimeMod = Math.floor(newTimeMod)
      console.log('pre-overlong-scaled time mod:', msToString(newTimeMod))

      // if timeMod is very long, doesn't let it go to like 10y so easily
      newTimeMod = Math.floor(
        // newTimeMod > 1000 * 60 * 60 * 24 * 365 // a year
        newTimeMod * ((newTimeMod * -1) / 3000000000000 + 1) // huge number puts the cap at about 10 years, scaling linearly down
        // : newTimeMod
      )
      if (newTimeMod < -1000) newTimeMod = 3000000000000 // it passsed the cap
      if (newTimeMod < 1) newTimeMod = 1

      // don't go below the minimum time mod
      if (difficulty !== 'again' && newTimeMod < minimumTimeMod)
        newTimeMod = minimumTimeMod

      // check for once-per-day setting
      const oncePerDayTimeMod = 10 * 60 * 60 * 1000 /* 10h */
      if (this.settings.oncePerDay && newTimeMod < oncePerDayTimeMod)
        newTimeMod = oncePerDayTimeMod

      console.log('old time mod:', msToString(this.timeMod))
      console.log('new time mod:', msToString(newTimeMod))
      console.log('')

      // calc interval until next review
      const newNextReview = new Date(Date.now() + newTimeMod).getTime()

      const newTotalReviews = this.totalReviews + 1
      const newAgain = this.again + (difficulty === 'again' ? 1 : 0)
      const newOk = newTotalReviews - newAgain

      // update card with new metadata
      this.$store.commit('studyCard', {
        id: this.id,
        lastStudied: Date.now(),
        timeMod: newTimeMod,
        nextReview: newNextReview,
        totalReviews: newTotalReviews,
        ok: newOk,
        again: newAgain,
      })

      // request new card from StudyFrame
      this.$emit('done', newTimeMod)
    },
    getTimeBonus(difficulty) {
      let newTimeMod =
        (!this.timeMod || isNaN(this.timeMod) ? 0 : this.timeMod) *
        difficultyModifiers[difficulty] *
        (this.settings.reviewIntervalMultiplier || 1)
      if (difficulty === 'again') newTimeMod = 0

      // * "overdue" cards reduce repeat time, multiplies from .2 to 1
      const overdueMultiplier =
        1 -
        Math.min(
          0.8,
          (Date.now() - (this.nextReview || Date.now())) /
            (1000 * 60 * 60 * 24 * 30)
        )
      if (difficulty === 'again')
        console.log('overdue multiplier:', overdueMultiplier.toFixed(2))
      newTimeMod *= overdueMultiplier

      if (difficulty !== 'again' && newTimeMod < minimumTimeMod)
        newTimeMod = minimumTimeMod

      return newTimeMod
    },
    keyDown(event) {
      if (event.key === 'Control') this.metaDown = true
      if (event.key === 'Meta') this.metaDown = true
      else if (event.key === 'i' && this.metaDown) {
        this.$store.commit('updateCard', {
          id: this.id,
          imageURL: 'loading',
        })
        getRandomImage(this.front || this.back).then((image) => {
          if (image)
            this.$store.commit('updateCard', {
              id: this.id,
              imageURL: image,
            })
        })
      }

      if (!this.isStudying || this.isEditingText) return
      if (event.key === '1' && this.showBack) this.answer('again')
      if (event.key === '2' && this.showBack) this.answer('hard')
      else if (event.key === ' ' || event.key === 'Enter') {
        event.preventDefault()
        event.stopPropagation()
        !this.showBack ? this.showBackAction() : this.answer('ok')
      } else if (event.key === '3' && this.showBack) this.answer('ok')
      else if (event.key === 'p') this.$emit('postpone')
    },
    keyUp(event) {
      if (event.key === 'Control') this.metaDown = false
      if (event.key === 'Meta') this.metaDown = false
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  margin-bottom: 20px;
}
.showback {
  width: 100%;
}
.buttonlist.primary {
  @media (max-width: 768px) {
    position: relative;
    z-index: 1000;
    width: 100%;
    border-radius: 0;
    position: fixed;
    bottom: 0;
    left: 0;
    border-bottom: none;

    button {
      background: #eee;
      border-radius: 0;

      &:hover {
        background: #ddd;
      }
    }
  }
}
</style>
