set -e

echo "*****************************************"
echo "**              MeteorJS               **"
echo "*****************************************"

curl -sL https://install.meteor.com | sed s/--progress-bar/-sL/g | /bin/sh
