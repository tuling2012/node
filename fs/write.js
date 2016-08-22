const fs = require('fs');
fs.writeFile('test.txt', 'hello', (err)=>{
	if(err) throw err;
	console.info('success!');

})
