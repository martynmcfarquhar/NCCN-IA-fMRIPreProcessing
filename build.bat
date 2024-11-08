rd -r .\_build
jupyter-book build .\
git add -A
git commit -m 'updates'
git push
ghp-import -n -p -f _build/html