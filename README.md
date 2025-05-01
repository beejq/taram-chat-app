# AGAWA-GOODS

# UPDATED Folder Structure & Data Usage
Product Data Location:

The product data is stored in:
src/data/productsData.json
Import this file whenever product data is needed.
Page Structure:

Each page has its own dedicated file inside the pages folder.
Example folder setup:
src/
├── pages/
│   ├── homepage
│   ├── productDetails
│   ├── search
├── data/
│   ├── productsData.json
Importing Product Data in a Page:

import products from <file location>;

Git Instructions for Collaboration
Cloning the Repository
Clone the repository:

# git clone https: 

https://github.com/Xies0111/AGAWA-GOODS.git

cd shopteneo

# Creating and Switching to Your Branch

Create a branch based on your name:
-git branch

Switch to your branch -git checkout

# Running the React Program once you are in the folder run these commands:

npm install
npm run dev

# Committing and Pushing Changes
Add and commit your changes 
-git add . 
-git commit -m ""

# Push your branch to the remote repository -git push origin

Inform the team in chat after pushing, so others know to fetch the latest updates.

# Fetching and Pulling Updates
Fetch the latest changes from the remote repository: 
-git fetch origin main

# Pull the latest updates 
-git pull origin main
