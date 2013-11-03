#!/bin/bash

GRUNT_CMD="compile"
BIN_DIR="bin"
LOCAL_BRANCH="master"
REMOTE_BRANCH="gh-pages"

echo "Welcome to the deployement system, if you want to continu press [ENTER]:"
read next

git status

echo "Are you ok with you git status ? o/n :"
read next

if (next == "n"); then
  echo "by by"
  return
fi

bash -c "grunt ${GRUNT_CMD}"

echo "Grunt compile was done, add -f bindir ? o/n :"
read next

if (next == "n"); then
  echo "by by"
  return
fi

git add -f "${BIN_DIR}/."

git status

echo "Are you ok with git status and then commit ? o/n :"
read next

if (next == "n"); then
  echo "by by"
  return
fi

git commit -m "deploy bin"
git checkout ${REMOTE_BRANCH}
git merge ${LOCAL_BRANCH}

echo "You are on gh-pages branch who are merged, It's OK for you ? o/n :"
read next

if (next == "n"); then
  echo "by by"
  return
fi

bash -c "rm -rf !(${BIN_DIR}|.gitignore|node_modules)"

mv ${BIN_DIR}/* ./ 

rmdir ${BIN_DIR}

ls -al

echo "We have deleted all dirs, it's good ? o/n :"
read next

if (next == "n"); then
  echo "by by"
  return
fi

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

echo "We have prepared commit, it's ok ? o/n :"
read next

if (next == "n"); then
  echo "by by"
  return
fi

git commit -m "deploy"

echo "We push on origin ? o/n :"
read next

if (next == "n"); then
  echo "by by"
  return
fi

git push origin ${REMOTE_BRANCH}

git checkout ${LOCAL_BRANCH}
git rm -r -f "${BIN_DIR}/."
git commit -m "end deploy bin"