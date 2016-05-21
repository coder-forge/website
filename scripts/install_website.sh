#!/bin/bash
set -e

mkdir /coder-forge
git clone https://github.com/coder-forge/website.git /coder-forge
cd /coder-forge/app
npm install
