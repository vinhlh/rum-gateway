# RUM Gateway

Receive raw statsd metrics via a HTTP endpoint, and forward them to ![statsd](https://github.com/etsy/statsd) and ![statsd_exporter](https://github.com/prometheus/statsd_exporter).

## Features

- Able to integrate to both Graphite and Prometheus stacks.
- Label metrics via User-Agent, and custom Headers like X-App-Version, X-Is-Canary, etc.

## HTTP Metrics

```
rum.shop.live.id.zrs.youmightlike.opened:0|ms
rum.shop.live.id.zrs.youmightlike.headersReceived:520|ms
rum.shop.live.id.zrs.youmightlike.loading:529|ms
rum.shop.live.id.zrs.youmightlike.done:587|ms
rum.shop.live.id.resources.api_dynamic.duration:285|ms
rum.shop.live.id.resources.api_dynamic.startTime:578|ms
rum.shop.live.id.resources.api_static.duration:32|ms
rum.shop.live.id.resources.api_static.startTime:581|ms
rum.shop.live.id.resources.st_dynamicyield_com.duration:335|ms
rum.shop.live.id.resources.st_dynamicyield_com.startTime:1088|ms
rum.shop.live.id.resources.dy_col_min_js.duration:69|ms
rum.shop.live.id.resources.dy_col_min_js.startTime:2016|ms
rum.shop.live.id.segment.requestStart:267|ms
rum.shop.live.id.segment.responseStart:502|ms
rum.shop.live.id.segment.responseEnd:525|ms
rum.shop.live.id.segment.domContentLoadedEventEnd:2408|ms
rum.shop.live.id.segment.loadEventEnd:5185|ms
```
