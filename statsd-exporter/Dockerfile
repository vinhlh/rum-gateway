FROM prom/statsd-exporter

COPY statsd_mapping.yml /tmp/

CMD ["-statsd.mapping-config=/tmp/statsd_mapping.yml"]

EXPOSE 9102 9125 9125/udp
