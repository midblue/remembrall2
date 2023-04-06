// npx -p node-firestore-import-export firestore-export -a /Users/jasper/Desktop/remembrall-522f0-6dea9a89b034.json -b ./backup.json

import fs from 'fs'
import path from 'path'

const fullBackup = JSON.parse(
  fs.readFileSync(path.join(__dirname, '..', 'backup.json'), 'utf8')
)
const collections = fullBackup.__collections__
const users = collections.users

const newData: { [userId: string]: UserData } = {}
for (let username of Object.keys(users)) {
  const userId = username
  const rawSets = users[username]?.__collections__?.sets || {}
  if (!Object.keys(rawSets).length) continue
  newData[userId] = {
    username,
    sets: Object.keys(rawSets).map((id) => {
      const setData = rawSets[id]
      return {
        id,
        name: setData.name,
        settings: setData.settings,
        lastUpdated: setData.lastUpdated || 0,
        newToday: setData.newToday || 0,
        reviewsToday: setData.reviewsToday || 0,
        cards: setData.cards.map((rawCard: any) => ({
          id: rawCard.id,
          front: rawCard.front,
          back: rawCard.back,
          examples: rawCard.examples,
          imageURL: rawCard.imageURL,
          // responses: {
          ok: rawCard.ok || 0,
          again: rawCard.again || 0,
          // },
          nextReview: rawCard.nextReview || 0,
          lastStudied: rawCard.lastStudied || 0,
          lastEdited: rawCard.lastEdited || 0,
          totalReviews: rawCard.totalReviews || 0,
          timeMod: rawCard.timeMod || 0,
        })),
      }
    }),
  }
}

for (let userId of Object.keys(newData)) {
  const userData = newData[userId]
  fs.writeFileSync(
    path.join(__dirname, 'data', userId + '.json'),
    JSON.stringify(userData)
  )
}
