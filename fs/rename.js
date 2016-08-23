const fs = require('fs');
fs.rename('a.txt', 'b.txt', (err) => {
	if(err) throw err;
	console.info('rename complete');

})