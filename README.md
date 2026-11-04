### How to get started with `starting template`: 
> NOTE: Change `<folder-name>` with your desired folder name without `<>`
```bash

# clone the starting template branch
git clone -b startingTemplate https://github.com/aliz-bhattarai-001/learning_react.git <folder-name>

# change directories
cd <folder-name>

# remove .git if you want to start fresh (Optional)
rm -rf .git
# now you've got a local copy of startingTemplate with no history intact

# install the dependencies
npm install 

# audit for warnings and vunreablities
npm audit

# if all good (0 vunreabilites) continue
# if not fix the relevant issue first (chagpt/gemini/google the error)

# afterwards (for any linting issues with the starting template)
npm run lint

# view while working
npm run dev 
# should give something like 
# -> Local: http://localhost:5173
# and so and so.

# ctrl + click on the link
# should open up a blank page on localhost
```
