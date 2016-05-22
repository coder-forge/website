#!/bin/bash
set -e

apt-get install -y build-essential
(curl -sL https://deb.nodesource.com/setup_6.x | sh)
apt-get install -y nodejs
