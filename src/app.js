const express = require('express')
const bodyParser = require('body-parser')

const {
  parseMetricsFromText,
  parseGlobalTagsFromRequest,
  initCollectors
} = require('./utils')
const configs = require('./configs')

const APP_NAME = 'RUM Gateway v1.0.0'

const { collectors: collectorConfigs } = configs

const app = express()
app.use(bodyParser.text())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

app.get('/', (req, res) => res.json({ appName: APP_NAME }))

app.get('/healthcheck', (req, res) =>
  res.json({ appName: APP_NAME, status: 'ok' })
)

app.post('/v1/raw', (req, res) => {
  res.status(204).send()


  const metrics = parseMetricsFromText(req.body)
  const tags = parseGlobalTagsFromRequest(req)
  const collectors = initCollectors(collectorConfigs, tags)

  collectors.forEach(sendMetrics => sendMetrics(metrics))
})

app.listen(3000, () => console.log('App listening on port 3000!'))
