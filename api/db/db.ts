import fs from 'fs'
import path from 'path'

const dbDirectoryPath = path.join(__dirname, 'data')
let busy = false

function awaitNotBusy() {
  return new Promise<void>((resolve) => {
    if (!busy) {
      resolve()
      busy = true
    } else {
      const interval = setInterval(() => {
        // console.log('waiting')
        if (!busy) {
          clearInterval(interval)
          // console.log('done waiting!')
          resolve()
          busy = true
        }
      }, 30)
    }
  })
}

const validUsername = (username: string) =>
  username.replace(/[^a-zA-Z0-9]/g, '')

async function saveUserData(userData: UserData) {
  const username = validUsername(userData.username)
  const filePath = path.join(dbDirectoryPath, username + '.json')
  // filter invalid sets
  userData.sets = userData.sets.filter((set) => set.id && set.name)
  await awaitNotBusy()
  await fs.promises.writeFile(filePath, JSON.stringify(userData))
  busy = false
}

export async function addUser(username: string): Promise<UserData | null> {
  if (!username) return null
  username = validUsername(username)

  const userData: UserData = {
    username,
    sets: [],
  }

  const filePath = path.join(dbDirectoryPath, validUsername + '.json')
  await awaitNotBusy()
  if (fs.existsSync(filePath)) {
    console.log('user already exists')
    busy = false
    return null
  }
  busy = false
  await saveUserData(userData)

  return userData
}

export async function userByUsername(
  username: string
): Promise<UserData | null> {
  username = validUsername(username)
  const filePath = path.join(dbDirectoryPath, username + '.json')

  await awaitNotBusy()
  try {
    const buffer = await fs.promises.readFile(filePath)
    busy = false
    return JSON.parse(buffer.toString()) as UserData
  } catch (e) {
    console.log('user not found')
    busy = false
    return null
  }
}

export async function addOrUpdateSet(username: string, set: SetData) {
  username = validUsername(username)
  let userData = await userByUsername(username)
  if (!userData) userData = await addUser(username)
  if (!userData) return

  const setInDb = userData.sets.find((s) => `${s.id}` === `${set.id}`) || null

  const cards = reconcileCardsBetweenVersions(
    set.cards,
    setInDb?.cards || [],
    set.id
  )
  const newSetData = {
    ...(setInDb || {}),
    ...set,
    cards,
  }

  if (setInDb) {
    userData.sets[userData.sets.indexOf(setInDb)] = newSetData
  } else {
    userData.sets.push(newSetData)
  }

  await saveUserData(userData)
}

export async function setSet(username: string, set: SetData) {
  username = validUsername(username)
  let userData = await userByUsername(username)
  if (!userData) userData = await addUser(username)
  if (!userData) return

  const setInDb = userData.sets.find((s) => `${s.id}` === `${set.id}`) || null

  if (setInDb) {
    userData.sets[userData.sets.indexOf(setInDb)] = set
  } else {
    userData.sets.push(set)
  }

  await saveUserData(userData)
}

export async function deleteSet(username: string, setId: string) {
  username = validUsername(username)
  const userData = await userByUsername(username)
  if (!userData) return
  const setInDb = userData.sets.find((s) => `${s.id}` === `${setId}`) || null

  if (setInDb) {
    userData.sets = userData.sets.filter((s) => `${s.id}` !== `${setId}`)
  } else {
    console.log(
      'set not found',
      setId,
      userData.sets.map((s) => s.id)
    )
    return
  }

  await saveUserData(userData)
}

export async function addOrUpdateCard(
  username: string,
  setId: string,
  cardData: CardData
): Promise<CardData | null> {
  username = validUsername(username)
  const userData = await userByUsername(username)
  if (!userData) return null
  const setInDb = userData.sets.find((s) => `${s.id}` === `${setId}`) || null
  if (!setInDb) return null

  const cardInDb =
    setInDb.cards.find((c) => `${c.id}` === `${cardData.id}`) || null

  const newCardData: CardData = {
    ...(cardInDb || {}),
    ...cardData,
    set: setId,
  }

  if (cardInDb) {
    console.log('updating card')
    setInDb.cards[setInDb.cards.indexOf(cardInDb)] = newCardData
  } else {
    console.log('adding card')
    newCardData.created = Date.now()
    setInDb.cards.push(newCardData)
  }
  setInDb.lastUpdated = Date.now()

  await saveUserData(userData)

  return newCardData
}

export async function deleteCard(
  username: string,
  setId: string,
  cardId: string
) {
  username = validUsername(username)
  const userData = await userByUsername(username)
  if (!userData) return null
  const setInDb = userData.sets.find((s) => `${s.id}` === `${setId}`) || null
  if (!setInDb) return null

  const cardInDb = setInDb.cards.find((c) => `${c.id}` === `${cardId}`) || null

  if (cardInDb) {
    setInDb.cards.splice(setInDb.cards.indexOf(cardInDb), 1)
  } else {
    console.log(
      'card not found',
      cardId,
      setInDb.cards.map((c) => c.id)
    )
    return
  }
  setInDb.lastUpdated = Date.now()

  await saveUserData(userData)
}

export async function moveCard(
  username: string,
  fromSetId: string,
  toSetId: string,
  cardId: string
) {
  username = validUsername(username)
  const userData = await userByUsername(username)
  if (!userData) return null
  const fromSetInDb =
    userData.sets.find((s) => `${s.id}` === `${fromSetId}`) || null
  if (!fromSetInDb) return null
  const toSetInDb =
    userData.sets.find((s) => `${s.id}` === `${toSetId}`) || null
  if (!toSetInDb) return null

  const cardInDb =
    fromSetInDb.cards.find((c) => `${c.id}` === `${cardId}`) || null

  if (cardInDb) {
    cardInDb.set = toSetId
    fromSetInDb.cards.splice(fromSetInDb.cards.indexOf(cardInDb), 1)
    toSetInDb.cards.push(cardInDb)
  } else {
    console.log(
      'card not found',
      cardId,
      fromSetId,
      toSetId,
      fromSetInDb.cards.map((c) => c.id)
    )
    return
  }

  fromSetInDb.lastUpdated = Date.now()
  toSetInDb.lastUpdated = Date.now()

  await saveUserData(userData)
}

function reconcileCardsBetweenVersions(
  cards1: CardData[] = [],
  cards2: CardData[] = [],
  setId?: string
): CardData[] {
  const newCards = [...cards1]
  for (let card of cards2) {
    const cardInDb = newCards.find((c) => `${c.id}` === `${card.id}`) || null
    if (cardInDb) {
      const newCard = reconcileTwoVersionsOfSameCard(cardInDb, card)
      newCards[newCards.indexOf(cardInDb)] = newCard
    } else {
      newCards.push(card)
    }
  }
  return newCards.map((c) => ({ ...c, set: setId || c.set }))
}

function reconcileTwoVersionsOfSameCard(
  card1: CardData,
  card2: CardData
): CardData {
  const newCard = { ...card1, ...card2 }
  // newCard.responses = {
  //   ...card1.responses,
  //   ...card2.responses,
  // }
  // // If card1 has a higher response count for a given response, use that
  // for (let responseKey of Object.keys(newCard.responses)) {
  //   if ((card1.responses[responseKey] || 0) > newCard.responses[responseKey])
  //     newCard.responses[responseKey] = card1.responses[responseKey]
  // }

  const card1WasStudiedMoreRecently =
    Math.max(card1.lastStudied) > Math.max(card2.lastStudied)
  if (card1WasStudiedMoreRecently) {
    for (let key of [
      'timeMod',
      'nextReview',
      'totalReviews',
      'lastStudied',
    ] as (keyof CardData)[]) {
      // @ts-ignore
      newCard[key] = card1[key]
    }
  }

  const card1WasEditedMoreRecently =
    Math.max(card1.lastEdited) > Math.max(card2.lastEdited)
  if (card1WasEditedMoreRecently) {
    for (let key of [
      'front',
      'back',
      'examples',
      'imageURL',
      'lastEdited',
    ] as (keyof CardData)[]) {
      // @ts-ignore
      newCard[key] = card1[key]
    }
  }

  const useIfHigher = ['ok', 'again'] as (keyof CardData)[]
  for (let key of useIfHigher) {
    if ((card1[key] || 0) > (newCard[key] || 0))
      // @ts-ignore
      newCard[key] = card1[key]
  }

  return newCard
}
