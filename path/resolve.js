const path = require('path');
let returnStr = path.resolve('foo/bar', '/tmp/file', '..');
console.info(returnStr);

