FROM ubuntu:16.04

RUN apt-get update -y
RUN apt-get install -y curl bzip2 build-essential nodejs npm git

COPY scripts /scripts
RUN bash /scripts/install_meteor.sh
RUN bash /scripts/install_website.sh

EXPOSE 3000
ENTRYPOINT bash /scripts/start.sh
