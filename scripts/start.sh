#!/bin/bash
set -e

echo "STARTING coder-forge/website..."
export LC_ALL=C.UTF-8
cd /coder-forge/app
ls -la /coder-forge
ls -la /
npm install
meteor run
