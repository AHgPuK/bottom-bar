const BottomBar = require('../index');
const Colors = require('colors');


// process.on('uncaughtException', function(err) {
// 	// handle the error safely
// 	console.error(err);
// 	// process.exit(err.code);
// });


Promise.resolve()
.then(async () => {

	const bottomBar = BottomBar({
		format: 'Coupon check progress |' + Colors.cyan('{bar}') + '| {percentage}% | {value}/{total} | {customValue}',
	});

	let lineIndex = 0;
	const max = 200;

	for (let curr = 0; curr < max; curr += 10)
	{
		bottomBar.log(`Line ${lineIndex++}`);
		bottomBar.update(curr, max, {
			customValue: 'test',
		});
		await new Promise(resolve => {setTimeout(resolve, 1000)});
	}

	bottomBar.clear();
	bottomBar.destroy();

})
.then(function () {
	// process.exit(0);
})
.catch(err => {
	console.log(err);
})



// pipe a Stream to the log zone
// outputStream.pipe(ui.log);


