#!/bin/sh
target="/app"

cd /app

#if find "$target" -mindepth 1 -print -quit | grep -q .; then
#    meteor
#else
#    git clone https://github.com/coder-forge/website.git .
    meteor run
#fi
