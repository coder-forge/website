FROM node

MAINTAINER Daithi Coombes <webeire@gmail.com>

RUN apt-get update && \
  apt-get -y upgrade

RUN apt-get -y install git

RUN curl https://install.meteor.com/ | sh

# Set the locale
RUN apt-get update -qq && apt-get install -y locales -qq && locale-gen en_US.UTF-8 en_us && dpkg-reconfigure locales && dpkg-reconfigure locales && locale-gen C.UTF-8 && /usr/sbin/update-locale LANG=C.UTF-8
ENV LANG C.UTF-8
ENV LANGUAGE C.UTF-8
ENV LC_ALL C.UTF-8

RUN mkdir /scripts
COPY scripts/start.sh /scripts
RUN chmod +x /scripts/start.sh

RUN mkdir /app
VOLUME ["/app"]

RUN git clone https://coder-forge.github.com/website /app

WORKDIR /app

###
#
# 1. Volume of a default app
# 2. Run meteor as cmd

CMD ["/scripts/start.sh"]
