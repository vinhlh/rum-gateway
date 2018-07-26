const StatsD = require('node-statsd')

const { TYPE_COUNTER, TYPE_TIMING } = require('../constants')

const makeSendMetrics = configs => metrics => {
  const { host, port, globalTags } = configs
  const client = new StatsD(host, port, '', '', false, false, false, [])

  metrics.forEach(metric => {
    const { name, type, value } = metric

    switch (type) {
      case TYPE_COUNTER:
        client.increment(name, value)
        break
      case TYPE_TIMING:
        client.timing(name, parseInt(value, 10) / 1000)
        break
    }
  })
}

module.exports = makeSendMetrics
