const fs = require('fs'),
  mustache = require('mustache'),
  view = require('./view.json');

const template = fs.readFileSync('template.mst', 'utf-8');

const html = mustache.render(template, view);

fs.writeFileSync('index.html', html);
console.log('written to index.html');
