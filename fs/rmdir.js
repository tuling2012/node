const fs = require('fs');
fs.rmdir('temp', (err)=>{
	if(err) throw err;
	console.info('delete dir');
})