const fs = require('fs');
fs.watch('../fs', (event, filename) => {
	console.info(`event: ${event}`);
	console.log(`filename: ${filename}`);
})
