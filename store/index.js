import Vuex from 'vuex'
import Vue from 'vue'
const storage = require('~/assets/storage')
const { getNumberDueInSet } = require('~/assets/commonFunctions')

Vue.use(Vuex)

const apiUrl =
  process.env === 'production'
    ? 'https://p.jasperstephenson.com/remembrall/api'
    : `/remembrall/api`
function handleAxiosError(err) {
  console.log('Axios error:', err)
}

export default () => {
  return new Vuex.Store({
    state: {
      currentUser: null,
      setList: [],
      currentSetId: null,
      appState: 'study',
      isMobile: false,
      isEditingText: false,
    },
    mutations: {
      // global vars
      setUsername(state, newUsername) {
        state.currentUser = newUsername
        storage.set('currentUser', newUsername)
      },
      setSetList(state, newSetList) {
        state.setList = newSetList
      },
      setCurrentSetId(state, newSetId) {
        if (!state.setList.find((s) => s.id === newSetId))
          newSetId = state.setList[0]?.id
        state.currentSetId = newSetId
        if (state.appState === 'user') state.appState = 'study'
        storage.set('currentSetId', newSetId)
      },
      logOut(state) {
        storage.remove('currentUser')
        storage.remove('currentSetId')
        state.currentUser = null
        state.setList = []
        state.currentSetId = null
      },
      setAppWidth(state, newWidth) {
        state.isMobile = parseInt(newWidth) <= 768
      },
      setIsEditingText(state, isEditing) {
        state.isEditingText = isEditing
      },

      // app state
      setAppState(state, newState) {
        state.appState = newState || 'study'
      },

      // sets
      updateSetName(state, newName) {
        Vue.set(
          state.setList.find((s) => s.id === state.currentSetId),
          'name',
          newName
        )
        // update set last updated
        Vue.set(
          state.setList.find((s) => s.id === state.currentSetId),
          'lastUpdated',
          Date.now()
        )

        this.$axios
          .post(`${apiUrl}/set/update/${state.currentUser}`, {
            id: state.currentSetId,
            name: state.setList.find((s) => s.id === state.currentSetId).name,
            lastUpdated: state.setList.find((s) => s.id === state.currentSetId)
              .lastUpdated,
          })
          .catch(handleAxiosError)
      },
      updateSetSettings(state, newSettings) {
        for (const param in newSettings) {
          if (!state.setList.find((s) => s.id === state.currentSetId).settings)
            state.setList.find((s) => s.id === state.currentSetId).settings = {}
          Vue.set(
            state.setList.find((s) => s.id === state.currentSetId).settings,
            param,
            newSettings[param]
          )
        }
        // update set last updated
        Vue.set(
          state.setList.find((s) => s.id === state.currentSetId),
          'lastUpdated',
          Date.now()
        )

        this.$axios
          .post(`${apiUrl}/set/update/${state.currentUser}`, {
            id: state.currentSetId,
            settings: state.setList.find((s) => s.id === state.currentSetId)
              .settings,
            lastUpdated: state.setList.find((s) => s.id === state.currentSetId)
              .lastUpdated,
          })
          .catch(handleAxiosError)
      },
      addSet(state) {
        const newSet = blankSet()
        state.setList.push(newSet)
        state.currentSetId = newSet.id
        storage.set('currentSetId', newSet.id)
        state.appState = 'addCard'

        this.$axios
          .post(`${apiUrl}/set/set/${state.currentUser}`, newSet)
          .catch(handleAxiosError)
      },
      uploadSet(state, uploadedSet) {
        const newSet = blankSet()
        for (const prop in uploadedSet)
          if (prop !== 'id') newSet[prop] = uploadedSet[prop]
        state.setList[newSet.id] = newSet
        state.currentSetId = newSet.id
        storage.set('currentSetId', newSet.id)

        this.$axios
          .post(`${apiUrl}/set/set/${state.currentUser}`, newSet)
          .catch(handleAxiosError)
      },
      deleteSet(state, setId) {
        console.log('deleting set', setId)
        const newSetList = state.setList.filter((s) => s.id !== setId)
        state.setList = newSetList
        state.currentSetId = state.setList[0]?.id

        this.$axios
          .get(`${apiUrl}/set/delete/${state.currentUser}/${setId}`)
          .catch(handleAxiosError)
      },

      // set-level daily review numbers
      resetSetDay(state, setIndex) {
        if (!state.setList[setIndex]) return
        Vue.set(state.setList[setIndex], 'newToday', 0)
        Vue.set(state.setList[setIndex], 'reviewsToday', 0)
        Vue.set(state.setList[setIndex], 'lastUpdated', Date.now())

        this.$axios
          .post(`${apiUrl}/set/update/${state.currentUser}`, {
            id: state.setList[setIndex].id,
            newToday: 0,
            reviewsToday: 0,
            lastUpdated: state.setList[setIndex].lastUpdated,
          })
          .catch(handleAxiosError)
      },

      // cards
      addCard(state, card) {
        const newCards =
          state.setList.find((s) => s.id === state.currentSetId).cards || []
        newCards.push({
          ...card,
          id: Date.now(),
        })
        Vue.set(
          state.setList.find((s) => s.id === state.currentSetId),
          'cards',
          newCards
        )
        // update set last updated
        Vue.set(
          state.setList.find((s) => s.id === state.currentSetId),
          'lastUpdated',
          Date.now()
        )

        this.$axios
          .post(
            `${apiUrl}/card/update/${state.currentUser}/${state.currentSetId}`,
            card
          )
          .catch(handleAxiosError)
      },
      updateCard(state, card) {
        let setWithCard
        for (const set in state.setList)
          if (
            state.setList[set].cards &&
            state.setList[set].cards.find(
              (currentSetCard) => currentSetCard.id === card.id
            )
          ) {
            setWithCard = set
            break
          }
        if (!setWithCard)
          return console.log('No card found by the id', card.id, 'in any deck.')
        const foundCardIndex = state.setList[setWithCard].cards.findIndex(
          (c) => c.id === card.id
        )
        if (foundCardIndex !== undefined)
          for (const param in card)
            Vue.set(
              state.setList[setWithCard].cards[foundCardIndex],
              param,
              card[param]
            )
        // update set last updated
        Vue.set(state.setList[setWithCard], 'lastUpdated', Date.now())
        // update db

        this.$axios
          .post(
            `${apiUrl}/card/update/${state.currentUser}/${state.setList[setWithCard].id}`,
            card
          )
          .catch(handleAxiosError)
      },
      studyCard(state, card) {
        const foundCardIndex = state.setList
          .find((s) => s.id === state.currentSetId)
          .cards.findIndex((c) => c.id === card.id)
        // update card data
        if (foundCardIndex !== undefined) {
          const existingCard = state.setList.find(
            (s) => s.id === state.currentSetId
          ).cards[foundCardIndex]
          for (const param in card) {
            Vue.set(existingCard, param, card[param])
          }
          // * firestore DOES NOT like getting undefined as a value
          for (let key in existingCard)
            if (existingCard[key] === undefined) delete existingCard[key]
        }
        // update newToday, reviewsToday
        if (
          new Date(
            state.setList.find((s) => s.id === state.currentSetId).lastUpdated
          ).getDate() !== new Date().getDate()
        ) {
          // new day
          Vue.set(
            state.setList.find((s) => s.id === state.currentSetId),
            'newToday',
            0
          )
          Vue.set(
            state.setList.find((s) => s.id === state.currentSetId),
            'reviewsToday',
            0
          )
        }
        if (card.totalReviews <= 1)
          Vue.set(
            state.setList.find((s) => s.id === state.currentSetId),
            'newToday',
            state.setList.find((s) => s.id === state.currentSetId).newToday
              ? state.setList.find((s) => s.id === state.currentSetId)
                  .newToday + 1
              : 1
          )
        else
          Vue.set(
            state.setList.find((s) => s.id === state.currentSetId),
            'reviewsToday',
            state.setList.find((s) => s.id === state.currentSetId).reviewsToday
              ? state.setList.find((s) => s.id === state.currentSetId)
                  .reviewsToday + 1
              : 1
          )
        // update set last updated
        Vue.set(
          state.setList.find((s) => s.id === state.currentSetId),
          'lastUpdated',
          Date.now()
        )
        // update Db

        this.$axios
          .post(
            `${apiUrl}/card/update/${state.currentUser}/${state.currentSetId}`,
            card
          )
          .catch(handleAxiosError)
        // update set data
        this.$axios
          .post(`${apiUrl}/set/update/${state.currentUser}`, {
            id: state.currentSetId,
            newToday: state.setList.find((s) => s.id === state.currentSetId)
              .newToday,
            reviewsToday: state.setList.find((s) => s.id === state.currentSetId)
              .reviewsToday,
          })
          .catch(handleAxiosError)
      },
      deleteCard(state, id) {
        let setWithCard
        for (const setIndex in state.setList) // index
          if (
            state.setList[setIndex].cards &&
            state.setList[setIndex].cards.find((card) => card.id === id)
          ) {
            setWithCard = state.setList[setIndex]
            break
          }
        if (!setWithCard)
          return console.log('No card found by the id', id, 'in any deck.')
        const newCards = setWithCard.cards.filter(
          (card) => `${card.id}` !== `${id}`
        )
        Vue.set(setWithCard, 'cards', newCards)
        // update set last updated
        Vue.set(setWithCard, 'lastUpdated', Date.now())

        // update db
        this.$axios
          .get(
            `${apiUrl}/card/delete/${state.currentUser}/${setWithCard.id}/${id}`
          )
          .catch(handleAxiosError)
      },
      moveCard(state, { id, from, to }) {
        if (from == to) return console.log('Same set!')
        const fromSet = state.setList.find((set) => set.id === from)
        if (!fromSet) return console.log('No set found (from) by the id', from)
        const toSet = state.setList.find((set) => set.id === to)
        if (!toSet) return console.log('No set found (to) by the id', to)
        const cardToMove = fromSet.cards.find((card) => card.id === id)
        if (!cardToMove) return
        // update set property
        cardToMove.set = to
        // add to destination deck
        const newDestCards = toSet.cards
        newDestCards.push(cardToMove)
        Vue.set(toSet, 'cards', newDestCards)
        // update set last updated
        Vue.set(toSet, 'lastUpdated', Date.now())

        this.$axios
          .post(`${apiUrl}/set/update/${state.currentUser}`, {
            id: toSet.id,
            cards: toSet.cards,
            lastUpdated: toSet.lastUpdated,
          })
          .catch(handleAxiosError)
        // delete from source deck
        const newSourceCards = fromSet.cards.filter((card) => card.id !== id)
        Vue.set(fromSet, 'cards', newSourceCards)
        // update set last updated
        Vue.set(fromSet, 'lastUpdated', Date.now())
        // update db

        this.$axios
          .get(
            `${apiUrl}/card/move/${state.currentUser}/${fromSet.id}/${toSet.id}/${id}`
          )
          .catch(handleAxiosError)
      },
    },
    actions: {
      logInAs({ commit, state }, username) {
        this.$axios
          .get(`${apiUrl}/user/${username}`)
          .then(async (res) => {
            if (!res.data) {
              // new user
              res = await this.$axios.get(`${apiUrl}/user/create/${username}`)
            }
            const user = res.data

            // falsely empty state (disconnect)
            if (!user && username === state.currentUser) {
              console.log('dc')
            }

            // get all sets from response
            const setsFromDb = user.sets || []

            // finish up
            commit('setUsername', username)
            commit('setSetList', setsFromDb)
            commit(
              'setCurrentSetId',
              setsFromDb.find((s) => s.id === storage.get('currentSetId'))
                ? storage.get('currentSetId')
                : Object.keys(setsFromDb)[0]
            )
          })
          .catch(handleAxiosError)
      },
      goToNextSet({ commit, state }, thatHasDueCards = false) {
        let allIds = Object.keys(state.setList)
        if (thatHasDueCards)
          allIds = allIds.filter(
            (id) => getNumberDueInSet(state.setList[id]) > 0
          )
        if (allIds.length === 0) return
        const nextSetId =
          allIds[(allIds.indexOf(state.currentSetId) + 1) % allIds.length]
        commit('setCurrentSetId', nextSetId)
      },
      goToPreviousSet({ commit, state }, thatHasDueCards = false) {
        let allIds = Object.keys(state.setList)
        if (thatHasDueCards)
          allIds = allIds.filter(
            (id) => getNumberDueInSet(state.setList[id]) > 0
          )
        if (allIds.length === 0) return
        const previousSetId =
          allIds[
            (allIds.indexOf(state.currentSetId) - 1 + allIds.length) %
              allIds.length
          ]
        commit('setCurrentSetId', previousSetId)
      },
    },
  })
}

function newSetObject() {
  const newSet = blankSet()
  return {
    [newSet.id]: newSet,
  }
}

function blankSet() {
  const id = Date.now()
  return {
    id,
    name: 'New set',
    settings: {
      maxNewPerDay: 10,
      maxReviewsPerDay: 50,
      languageTools: 'none',
      studyReverse: false,
    },
    lastUpdated: Date.now(),
    newToday: 0,
    reviewsToday: 0,
    cards: [],
  }
}

// function sanitizeCards(cards) {
//   return cards.map(card => ({
//     id: card.id,
//     again: card.again,
//     ok: card.ok,
//     totalReviews: card.totalReviews,
//     front: card.front,
//     back: card.back,
//     timeMod: card.timeMod,
//     nextReview: card.nextReview,
//   }))
// }
// const sanitizedCards = sanitizeCards(state.setList.find(s => s.id === state.currentSetId).cards)
// Vue.set(state.setList.find(s => s.id === state.currentSetId), 'cards', sanitizedCards)
