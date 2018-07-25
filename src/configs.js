const makeSendMetricsToStatsd = require('./collectors/statsd')
const makeSendMetricsToStatsdExporter = require('./collectors/statsd_exporter')

const configs = {
  collectors: {
    statsd: {
      enabled: true,
      host: '127.0.0.1',
      port: 9125,
      makeSendMetrics: makeSendMetricsToStatsd
    },
    statsdExporter: {
      enabled: true,
      host: '127.0.0.1',
      port: 9125,
      makeSendMetrics: makeSendMetricsToStatsdExporter
    }
  }
}

module.exports = configs
