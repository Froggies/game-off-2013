#!/bin/bash

GRUNT_CMD="compile"
BIN_DIR="bin"
LOCAL_BRANCH="master"
REMOTE_BRANCH="gh-pages"

echo "Welcome to the deployement system, if you want to continu press [ENTER], else ctrl+c to quit:"
read next

git status

echo "Are you ok with you git status ? o/ctrl+c :"
read next

bash -c "grunt ${GRUNT_CMD}"

echo "Grunt compile was done, add -f bindir ? o/ctrl+c :"
read next

git add -f "${BIN_DIR}/."

git status

echo "Are you ok with git status and then commit ? o/ctrl+c :"
read next

git commit -m "deploy bin"
git branch -D ${REMOTE_BRANCH}
git checkout -b ${REMOTE_BRANCH}
git status
git branch

echo "You are on gh-pages branch who are merged, It's OK for you ? o/ctrl+c :"
read next

rm -rf app/*
rmdir app
rm -rf build/*
rmdir build
rm -rf config/*
rmdir config
rm -rf screenshots/*
rmdir screenshots
rm -rf script/*
rmdir script
rm -rf test/*
rmdir test
rm -rf test-coverage/*
rmdir test-coverage

rm .bowerrc
rm .editorconfig
rm Gruntfile.js
rm README.md
rm bower.json
rm karma.conf.js
rm package.json

rm -rf assets/*
rmdir assets
rm game-off-2013-0.1.0.css
rm game-off-2013-0.1.0.js
rm index.html

mv ${BIN_DIR}/* ./ 

rmdir ${BIN_DIR}

ls -al

echo "We have deleted all dirs, it's good ? o/ctrl+c :"
read next

git rm -r -f bin/.
git rm -r app/.
git rm -r screenshots
git rm -r test/.
git rm bower.json 
git rm config/gruntConfig.js
git rm karma.conf.js 
git rm package.json
git rm .bowerrc
git rm .editorconfig
git rm Gruntfile.js
git rm README.md
git rm script/deploy.sh

git add .

git status
git branch

echo "We have prepared commit, it's ok ? o/ctrl+c :"
read next

git commit -m "deploy"

echo "We push on origin ? o/ctrl+c :"
read next

git push origin ${REMOTE_BRANCH}

git checkout ${LOCAL_BRANCH}
git rm -r -f "${BIN_DIR}/."
git commit -m "end deploy bin"

git branch
git status

echo "Normally all is ok :D ? o/ctrl+c :"
read next

echo "OOOOOOOOOOOOOOO yes \o/"