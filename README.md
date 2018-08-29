Just a Todo App which was blatantly ripped off from net-ninja youtube channel.


The site is currently deployed to https://harishasmi.github.io/mytodo/ if you want to have a look at it.

Some help regarding hosting.
npm install --save gh-pages


package.json
  ...
  "homepage":"https://harishasmi.github.io/mytodo",
  ...
  Inside Scripts Tag
  "predeploy":"npm run build",
  "deploy":"gh-pages -d build",
  ...

npm run deploy