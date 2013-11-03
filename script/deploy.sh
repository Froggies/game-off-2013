#!/bin/bash

GRUNT_CMD = "compile"
BIN_DIR = "bin"
LOCAL_BRANCH = "master"
REMOTE_BRANCH = "gh-pages"

bash -c "grunt ${GRUNT_CMD}"
git add -f "${BIN_DIR}/."
git commit -m "deploy bin"
git checkout ${REMOTE_BRANCH}
git merge ${LOCAL_BRANCH}

rm -rf !(${BIN_DIR})

find ${BIN_DIR} -type f -print0 | xargs -0 mv -t ./ 

rmdir ${BIN_DIR}

git add .
git commit - "deploy"

#git push origin ${REMOTE_BRANCH}

git checkout ${LOCAL_BRANCH}
git rm -r -f "${BIN_DIR}/."
git commit -m "end deploy bin"