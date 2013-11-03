#!/bin/bash

GRUNT_CMD="compile"
BIN_DIR="bin"
LOCAL_BRANCH="master"
REMOTE_BRANCH="gh-pages"

bash -c "grunt ${GRUNT_CMD}"
git add -f "${BIN_DIR}/."
git commit -m "deploy bin"
git checkout ${REMOTE_BRANCH}
git merge ${LOCAL_BRANCH}

bash -c "rm -rf !(${BIN_DIR}|.gitignore|node_modules)"

mv ${BIN_DIR}/* ./ 

rmdir ${BIN_DIR}

git add .

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

git commit -m "deploy"

git push origin ${REMOTE_BRANCH}

git checkout ${LOCAL_BRANCH}
git rm -r -f "${BIN_DIR}/."
git commit -m "end deploy bin"