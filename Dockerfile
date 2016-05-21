# as per https://github.com/meteorhacks/meteord
FROM debian:wheezy
MAINTAINER MeteorHacks Pvt Ltd.

ENV METEORD_DIR /opt/meteord
COPY scripts $METEORD_DIR
COPY app /app
VOLUME ["/app"]

#RUN bash $METEORD_DIR/init.sh
RUN bash $METEORD_DIR/lib/install_base.sh
RUN bash $METEORD_DIR/lib/install_node.sh
RUN bash $METEORD_DIR/lib/install_meteor.sh
RUN bash $METEORD_DIR/lib/cleanup.sh

RUN bash scripts/install_website.sh

EXPOSE 3000
#ENTRYPOINT bash $METEORD_DIR/run_app.sh
ENTRYPOINT bash $METEORD_DIR/start.sh
