import * as db from './db/db'

import bodyParser from 'body-parser'
import express from 'express'

const app = express()

app.use(bodyParser.json())

app.get('/test', (req, res) => {
  res.send('Hello World!')
})

app.get('/user/:username', async (req, res) => {
  const userData = await db.userByUsername(req.params.username)
  console.log('user', req.params.username, userData?.sets.length)
  res.json(userData)
})

app.get('/user/create/:username', async (req, res) => {
  console.log('create', req.params.username)
  res.json(await db.addUser(req.params.username))
})

app.post('/set/update/:username', async (req, res) => {
  console.log('update set', req.params.username, req.body.id)
  res.json(await db.addOrUpdateSet(req.params.username, req.body))
})

app.post('/card/update/:username/:setId', async (req, res) => {
  console.log('update card', req.params.username, req.params.setId, req.body.id)
  res.json(
    await db.addOrUpdateCard(req.params.username, req.params.setId, req.body)
  )
})

app.get('/card/delete/:username/:setId/:cardId', async (req, res) => {
  console.log(
    'delete card',
    req.params.username,
    req.params.setId,
    req.params.cardId
  )
  res.json(
    await db.deleteCard(
      req.params.username,
      req.params.setId,
      req.params.cardId
    )
  )
})

app.get(
  '/card/move/:username/:fromSetId/:toSetId/:cardId',
  async (req, res) => {
    console.log(
      'move card',
      req.params.username,
      req.params.fromSetId,
      req.params.toSetId,
      req.params.cardId
    )
    res.json(
      await db.moveCard(
        req.params.username,
        req.params.fromSetId,
        req.params.toSetId,
        req.params.cardId
      )
    )
  }
)

app.post('/set/set/:username', async (req, res) => {
  console.log('set set', req.params.username, req.body.id)
  res.json(await db.setSet(req.params.username, req.body))
})

app.get('/set/delete/:username/:setId', async (req, res) => {
  console.log('delete set', req.params.username, req.params.setId)
  res.json(await db.deleteSet(req.params.username, req.params.setId))
})

module.exports = app
