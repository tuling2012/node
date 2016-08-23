const fs = require('fs');
fs.stat('b.txt', (err, stat) => {
	if(err) throw err;
	console.info(stat);
});