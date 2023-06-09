<template>
  <div
    class="userandsetpicker"
    :class="{
      fullscreen: !currentUser || isLoading,
      vertical: !currentUser,
    }"
  >
    <input
      ref="uploader"
      type="file"
      style="display: none"
      accept=".json"
      @change="uploaded"
    />
    <template v-if="!currentUser && !isLoading">
      <h1><b>Enter your username.</b></h1>
      <div>
        <input
          ref="usernameInput"
          v-model="inputUsername"
          class="username"
          autocorrect="off"
          autocapitalize="off"
          placeholder="username"
        />
      </div>
      <div>
        <button class="loginbutton" @click="logInAs">Go</button>
      </div>
    </template>
    <template v-else-if="isLoading">
      <div class="sub">Loading...</div>
    </template>
    <template v-else>
      <div v-if="!isMobile" class="buttonlist fullheight inlineblock">
        <button
          v-for="set in setList"
          :key="set.id"
          :class="{
            active: currentSetId === set.id && appState !== 'user',
            // duecards: dueReviews[set.id] > 0,
          }"
          @click="switchSet(set.id)"
        >
          {{ set.name }}
          <span
            v-if="
              (!isMobile &&
                dueReviews[set.id] > 0 &&
                currentSetId !== set.id) ||
              appState === 'user'
            "
            class="sub"
          >
            ({{ dueReviews[set.id] }})
          </span>
        </button>
        <button @click="$refs.uploader.click()">Upload Set</button>
        <button @click="$store.commit('addSet')">Add Set</button>
      </div>
      <div v-else ref="mainButton" class="buttonlist fullheight">
        <button
          v-if="appState === 'user'"
          class="mainbutton"
          @click="$store.commit('setAppState', 'study')"
        >
          ← Back to Studying
        </button>
        <button
          v-else-if="!setList.find((s) => s.id === currentSetId)"
          @click="$store.commit('addSet')"
        >
          + Add Set
        </button>
        <button
          v-else
          :key="currentSetId"
          class="mainbutton"
          :class="{ open: setPickerOpen }"
          style="position: relative"
          @click="setPickerOpen = !setPickerOpen"
        >
          {{ setList.find((s) => s.id === currentSetId).name }} ▾
          <div v-if="setPickerOpen" class="secondarypanel">
            <button
              v-for="set in setListWithoutCurrentSet"
              :key="set.id"
              :class="{
                duecards: dueReviews[set.id] > 0,
              }"
              @click="switchSet(set.id)"
            >
              {{ set.name }}
            </button>
            <button @click="$refs.uploader.click()">Upload Set</button>
            <button @click="$store.commit('addSet')">+ Add Set</button>
          </div>
        </button>
      </div>

      <div class="flex-ai">
        <div class="buttonlist fullheight inlineblock">
          <button
            :class="{ active: appState === 'user' }"
            @click="$store.commit('setAppState', 'user')"
          >
            {{ currentUser }}</button
          ><button v-if="!isMobile" @click="logOut">Log out</button>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
const { get } = require('~/assets/storage')
const { getNumberDueInSet } = require('~/assets/commonFunctions')

export default {
  components: {},
  props: {},
  data() {
    return {
      isLoading: false,
      inputUsername: '',
      dueReviews: {},
      setPickerOpen: false,
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.currentUser
    },
    appState() {
      return this.$store.state.appState
    },
    setList() {
      return this.$store.state.setList || []
    },
    setListWithoutCurrentSet() {
      return this.setList.filter((s) => s.id !== this.currentSetId)
    },
    currentSetId() {
      return this.$store.state.currentSetId
    },
    currentCards() {
      return this.$store.state.setList?.find(
        (s) => s.id === this.$store.state.currentSetId
      )
        ? this.$store.state.setList?.find(
            (s) => s.id === this.$store.state.currentSetId
          ).cards
        : []
    },
    isMobile() {
      return this.$store.state.isMobile
    },
    appState() {
      return this.$store.state.appState
    },
  },
  watch: {
    currentUser(newUser) {
      this.isLoading = false
      const savedSetId = get('currentSetId')
      if (savedSetId && savedSetId !== '') {
        this.$store.commit('setCurrentSetId', savedSetId)
      }
      if (!newUser) this.$nextTick(this.focusInput)
    },
    setList() {
      this.isLoading = false
      this.updateDueReviews()
    },
    currentCards() {
      this.updateDueReviews()
    },
    currentSetId() {
      this.isLoading = false
      this.updateDueReviews()
    },
    setPickerOpen(opening) {
      if (opening) window.addEventListener('click', this.checkClickToClose)
      else window.removeEventListener('click', this.checkClickToClose)
    },
  },
  mounted() {
    window.addEventListener('keydown', this.keyDown)
    this.updateDueReviews()
    window.setInterval(this.updateDueReviews, 10 * 60 * 1000)
    const savedUsername = get('currentUser')
    if (savedUsername && savedUsername !== '') {
      this.$store.dispatch('logInAs', savedUsername)
      this.isLoading = true
    } else {
      this.$nextTick(this.focusInput)
    }
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.keyDown)
  },
  methods: {
    logInAs() {
      if (this.inputUserName === '') return
      this.isLoading = true
      this.$store.dispatch('logInAs', this.inputUsername)
    },
    logOut() {
      this.$store.commit('logOut')
    },
    keyDown(event) {
      if (this.currentUser) return this.updateDueReviews()
      if (event.key === 'Enter') this.logInAs()
    },
    focusInput() {
      this.$refs.usernameInput.focus()
    },
    switchSet(id) {
      this.$store.commit('setCurrentSetId', id)
    },
    updateDueReviews() {
      this.dueReviews = {}
      for (const setIndex in this.setList) {
        if (!this.setList?.[setIndex]) continue
        if (
          new Date(this.setList[setIndex].lastUpdated).getDate() !==
          new Date().getDate()
        ) {
          this.$store.commit('resetSetDay', setIndex)
        }
        this.dueReviews[this.setList[setIndex].id] = getNumberDueInSet(
          this.setList[setIndex]
        )
      }
    },
    checkClickToClose(e) {
      if (
        !(e.composedPath ? e.composedPath() : e.path).includes(
          this.$refs.mainButton
        )
      )
        this.setPickerOpen = false
    },
    uploaded(e) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onload = (readEvent) => {
        const uploadedSet = JSON.parse(readEvent.target.result)
        this.$store.commit('uploadSet', uploadedSet)
      }
      reader.readAsText(file)
    },
  },
}
</script>

<style lang="scss" scoped>
.userandsetpicker {
  padding: 0 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: #333;
  height: 43px;
  padding-top: 3px;
  // transition: 0.5s;
  position: relative;
  z-index: 12;
  // box-shadow: inset 0 -30px 30px -30px rgba(black, 0.1);

  @media (max-width: 768px) {
    height: 40px;
    padding: 0 20px;
    // box-shadow: none;
  }

  &.fullscreen {
    height: 100vh;
    position: fixed;
    justify-content: center;
    background: #eee;
  }

  &.vertical {
    flex-direction: column;

    & > * {
      margin-bottom: 20px;
    }
  }
}

.username {
  border-radius: 7px;
  border: 1px solid #eee;
  font-size: 1.2rem;
  font-family: 'Avenir Neue', 'Avenir', 'Helvetica', sans-serif;
  padding: 10px 10px;
}
.loginbutton {
  border-radius: 7px;
  font-size: 1.2rem;
  font-family: 'Avenir Neue', 'Avenir', 'Helvetica', sans-serif;
  padding: 20px 50px;
}

button:not(.active).duecards {
  background: #fd8;
}

.inlineblock {
  display: inline-block;
}

.flex-ai {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.buttonlist {
  overflow: visible;

  &.fullheight {
    border-radius: 0;
    border: none;
    height: 100%;

    button {
      background: rgba(white, 0);
      box-shadow: none;
      border: none;
      transition: background 0.2s;
      color: white;

      @media (min-width: 769px) {
        padding: 0 15px 2px 15px;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
      }

      &:hover {
        background: rgba(#09c, 0.3);
      }

      &.active {
        background: white;
        color: black;
      }

      @media (max-width: 768px) {
        background: rgba(white, 0.2);
        margin-right: 3px;
      }
    }

    & > * {
      height: 100%;
      border-radius: 0;
    }
  }
}

button.mainbutton {
  position: relative;
  z-index: 100;
  min-width: 25vw;
  box-shadow: 0 0 1000px 1000px rgba(black, 0);
  transition: box-shadow 0.3s;
}

button.open {
  border-bottom-right-radius: 0px !important;
  border-bottom-left-radius: 0px !important;
  box-shadow: 0 0 1000px 1000px rgba(black, 0.3);
  background: white !important;
  color: black !important;
}

.secondarypanel {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;

  button {
    width: 100%;
    border-radius: 0;
    border: 0;
    border-top: 1px solid #eee;
    background: #ddd !important;
    color: black !important;
    // box-shadow: 0 0 0 1px #eee;

    &:first-of-type {
      border-radius: 0;
    }

    &:last-of-type {
      border-radius: 0;
      border-bottom-right-radius: 10px;
      border-bottom-left-radius: 10px;
    }
  }
}
</style>
