const path = require('path');
let pathStr = path.join('..','node', 'path', '..');
console.info(pathStr);
let normalizePath = path.normalize(pathStr);
console.info(normalizePath);

