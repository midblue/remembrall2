import { initializeApp } from 'firebase/app'
const keys = require('~/keys')
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  setDoc,
} from 'firebase/firestore'

const firebaseApp = initializeApp({
  apiKey: keys.ak,
  authDomain: keys.ad,
  projectId: keys.pid,
  storageBucket: keys.sb,
})
const db = getFirestore(firebaseApp)

const userCollectionName = 'users'
const setCollectionName = 'sets'

export function newUser(username) {
  return new Promise(async (resolve) => {
    const docRef = doc(db, `${userCollectionName}/${username}`)
    await setDoc(docRef, {})
    resolve('create new user success!')
  })
}

export function setSet(username, newSet) {
  return new Promise(async (resolve) => {
    console.log('adding set', newSet)
    const docRef = doc(
      db,
      `${userCollectionName}/${username}/${setCollectionName}/${newSet.id}`
    )
    await setDoc(docRef, newSet)
    resolve('set set success!')
  })
}

export function updateSet(username, newSet) {
  return new Promise(async (resolve) => {
    const docRef = doc(
      db,
      `${userCollectionName}/${username}/${setCollectionName}/${newSet.id}`
    )
    await updateDoc(docRef, newSet)
    resolve('update set success!')
  })
}

export function getSet(username, setId) {
  return new Promise(async (resolve) => {
    const docRef = doc(
      db,
      `${userCollectionName}/${username}/${setCollectionName}/${setId}`
    )
    const doc = await getDoc(docRef)
    console.log('got set', doc)
    resolve(doc)
  })
}

export function getAllSets(username) {
  return new Promise(async (resolve) => {
    const colRef = collection(
      db,
      `${userCollectionName}/${username}/${setCollectionName}`
    )
    const sets = await getDocs(colRef)
    console.log(
      'got sets',
      sets.docs.map((doc) => doc.data())
    )
    resolve(sets)
  })
}

export function deleteSet(username, setId) {
  return new Promise(async (resolve) => {
    const docRef = doc(
      db,
      `${userCollectionName}/${username}/${setCollectionName}/${setId}`
    )
    await deleteDoc(docRef)
    resolve('delete set successful')
  })
}

// TODO migrate back lol
// function migrateCardsToDoc(username, setId) {
//   db.collection(userCollectionName)
//     .doc(username)
//     .collection(setCollectionName)
//     .doc(`${setId}`)
//     .collection('cards')
//     .get()
//     .then(cards => {
//       db.collection(userCollectionName)
//         .doc(username)
//         .collection(setCollectionName)
//         .doc(`${setId}`)
//         .update({
//           cards: cards.docs.map(card => card.data()),
//         })
//     })
// }

// migrateCardsToDoc('mariko', 1539060033892)

// function deleteCollection (username, setId, collectionName) {
// 	db.collection(userCollectionName)
// 		.doc(username)
// 		.collection(setCollectionName)
// 		.doc(`${setId}`)
// 		.collection('cards')
// 		.get()
// 		.then(cards => {
// 			cards.docs.forEach(card => card.delete())
// 		})
// }

// export function setCard (username, setId, newCard) {
// 	return new Promise(resolve =>
// 		db.collection(userCollectionName)
// 			.doc(username)
// 			.collection(setCollectionName)
// 			.doc(`${setId}`)
// 			.collection(cardCollectionName)
// 			.doc(`${newCard.id}`)
// 			.set(newCard)
// 			.then(() => resolve('set card success!'))
// 			.catch(e => resolve(e))
// 	)
// }

// export function updateCard (username, setId, newCard) {
// 	return new Promise(resolve =>
// 		db.collection(userCollectionName)
// 			.doc(username)
// 			.collection(setCollectionName)
// 			.doc(`${setId}`)
// 			.collection(cardCollectionName)
// 			.doc(`${newCard.id}`)
// 			.update(newCard)
// 			.then(() => resolve('update card success!'))
// 			.catch(e => resolve(e))
// 	)
// }

// export function getCards (username, setId) {
// 	return new Promise(resolve =>
// 		db.collection(userCollectionName)
// 			.doc(username)
// 			.collection(setCollectionName)
// 			.doc(`${setId}`)
// 			.collection(cardCollectionName)
// 			.get()
// 			.then(cards => resolve(cards || []))
// 			.catch(e => resolve([]))
// 	)
// }

// export function deleteCard (username, setId, cardId) {
// 	return new Promise(resolve =>
// 		db.collection(userCollectionName)
// 			.doc(username)
// 			.collection(setCollectionName)
// 			.doc(`${setId}`)
// 			.collection(cardCollectionName)
// 			.doc(`${cardId}`)
// 			.delete()
// 			.then(card => resolve('delete card successful'))
// 			.catch(e => resolve(e))
// 	)
// }
