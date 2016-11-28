#!/bin/sh
rm .gitignore
cat <<EOF >>.gitignore
*~
*.sw[mnpcod]
*.log
*.tmp
*.tmp.*
log.txt
*.sublime-project
*.sublime-workspace
.vscode/
npm-debug.log*

.idea/
.sass-cache/
.tmp/
.versions/
coverage/
dist/
node_modules/
tmp/
temp/
hooks/
platforms/
plugins/
plugins/android.json
plugins/ios.json
$RECYCLE.BIN/

.DS_Store
Thumbs.db
UserInterfaceState.xcuserstate
EOF
git add .
git commit -m "deploy"
git subtree push --prefix www origin gh-pages
rm .gitignore
cat <<EOF >>.gitignore
*~
*.sw[mnpcod]
*.log
*.tmp
*.tmp.*
log.txt
*.sublime-project
*.sublime-workspace
.vscode/
npm-debug.log*

.idea/
.sass-cache/
.tmp/
.versions/
coverage/
dist/
node_modules/
tmp/
temp/
hooks/
platforms/
plugins/
plugins/android.json
plugins/ios.json
www/
$RECYCLE.BIN/

.DS_Store
Thumbs.db
UserInterfaceState.xcuserstate
EOF
git add .
git commit -m "restore"
git push origin master