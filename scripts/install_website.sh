#!/bin/bash
set -e

echo "*****************************************"
echo "**              Coder Forge            **"
echo "*****************************************"

apt-get install git -y
mkdir /coder-forge
git clone https://github.com/coder-forge/website.git /coder-forge

cd /coder-forge/app
meteor npm install
