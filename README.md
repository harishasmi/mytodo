Just a Todo App which was blatantly ripped off from net-ninja youtube channel.


The site is currently deployed to https://harishasmi.github.io/mytodo/ if you want to have a look at it.

Some help regarding hosting. First install the package npm install --save gh-pages

Then in the package.json file add a new item called "homepage":"https://harishasmi.github.io/mytodo"

Inside Scripts Tag add the below items


  "predeploy":"npm run build",
  "deploy":"gh-pages -d build",



Then finally add "npm run deploy"