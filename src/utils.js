const parseUserAgent = require('ua-parser-js')

const NOT_AVAILABLE = 'N/A'

const parseMetricsFromText = text =>
  text.split('\n').map(metric => {
    const [name, values] = metric.split(':')
    const [value, type] = values.split('|')
    return { name, value, type }
  })

const initCollectors = (collectorConfigs, globalTags) =>
  Object.values(collectorConfigs)
    .filter(collector => collector.enabled)
    .map(({ makeSendMetrics, host, port }) =>
      makeSendMetrics({ host, port, globalTags })
    )

const parseGlobalTagsFromRequest = request => {
  const userAgent = parseUserAgent(request.get('User-Agent'))
  const { browser, device, os } = userAgent

  const appVersion = request.get('X-App-Version')
  const isCanary = request.get('X-Is-Canary')

  return {
    browser: browser.name,
    browser_version: browser.version,
    os: os.name,
    os_version: os.version,
    app_version: appVersion || NOT_AVAILABLE,
    canary: isCanary || NOT_AVAILABLE
  }
}

module.exports = {
  initCollectors,
  parseMetricsFromText,
  parseGlobalTagsFromRequest
}
