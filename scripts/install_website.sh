#!/bin/bash
set -e

git clone https://github.com/coder-forge/website.git /coder-forge
cd /coder-forge/app
meteor npm install
