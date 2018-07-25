const StatsD = require('node-statsd')

const { TYPE_COUNTER, TYPE_TIMING } = require('../utils')

const makeSendMetrics = configs => metrics => {
  const { host, port } = configs
  const client = new StatsD(host, port)

  metrics.forEach(metric => {
    const { name, type, value } = metric
    switch (type) {
      case TYPE_COUNTER:
        client.increment(name, value)
        break
      case TYPE_TIMING:
        client.timing(name, value)
        break
    }
  })
}

module.exports = makeSendMetrics
