FROM node

RUN apt-get update -y
RUN apt-get upgrade -y
RUN apt-get install -y curl bzip2 build-essential git

# Set the locale
RUN apt-get update -qq && apt-get install -y locales -qq && locale-gen en_US.UTF-8 en_us && dpkg-reconfigure locales && dpkg-reconfigure locales && locale-gen C.UTF-8 && /usr/sbin/update-locale LANG=C.UTF-8
ENV LANG C.UTF-8
ENV LANGUAGE C.UTF-8
ENV LC_ALL C.UTF-8

COPY scripts /scripts
RUN bash /scripts/install_meteor.sh
RUN bash /scripts/install_website.sh


EXPOSE 3000
ENTRYPOINT bash /scripts/start.sh
