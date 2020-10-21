const Inquirer = require('inquirer');
const Colors = require('colors');

const defaultOptions = {
	barCompleteChar: '\u2588',
	barIncompleteChar: '\u2591',
	barsize: 40,
	format: 'Coupon check progress |' + Colors.cyan('{bar}') + '| {percentage}% | {value}/{total}',
}


const BottomBar = function (options = {}) {
	options = {
		...defaultOptions,
		...options,
	}

	const bottomBar = new Inquirer.ui.BottomBar();

	return {
		update: function (value, total, custom) {
			const completeLength = Math.min(options.barsize, Math.max(0, parseInt(value * options.barsize / total)));
			const incompleteLength = options.barsize - completeLength;

			const values = {
				...custom,
				bar: options.barCompleteChar.repeat(completeLength) + options.barIncompleteChar.repeat(incompleteLength),
				percentage: Math.max(0, Math.min(100, value * 100 / total)).toFixed(1),
				value,
				total,
			}

			const barString = Object.keys(values).reduce((acc, key) => {
				return acc.replace('{' + key + '}', values[key]);
			}, options.format);

			bottomBar.updateBottomBar(barString);
		},
		clear: function () {
			bottomBar.updateBottomBar('');
		},
		log: function (...args) {
			bottomBar.log.write(...args);
		},
		destroy: function () {
			bottomBar.close();
		},
	}
}

module.exports = BottomBar;
