#!/bin/sh

cp -a /opt/* /app
cd /app/app
meteor run
