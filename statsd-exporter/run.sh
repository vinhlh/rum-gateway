#!/bin/bash

docker run -p 9102:9102 -p 9125:9125 -p 9125:9125/udp \
    -v $PWD/statsd_mapping.yml:/tmp/statsd_mapping.conf \
    prom/statsd-exporter -statsd.mapping-config=/tmp/statsd_mapping.conf
