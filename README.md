# bottom-bar.js

CLI status bar.

## Table of Contents
1.  [Documentation](#documentation)
    1.  [Installation](#installation)
    2.  [Usage](#usage)
    3.  [Methods](#methods)
2.  [Known issues](#issues)
3.  [News](#news)
4.  [License](#license)

## Goal

**status-bar** (based on inquirer [![inquirer](https://badge.fury.io/js/inquirer.svg)](http://badge.fury.io/js/inquirer)) displays a status (progress) line below your output.

## [Documentation](#documentation)

<a name="documentation"></a>

### Installation

<a name="installation"></a>
##### npm:
```shell
npm install bottom-bar
```
##### yarn:
```shell
yarn add bottom-bar
```

### Usage
<a name="usage"></a>
```javascript
const BottomBar = require('bottom-bar');

const bottomBar = BottomBar();
for (let curr = 0; curr < 200; curr += 10)
{
    bottomBar.update(curr, max);
    // Sleep - Here is your part of code
    await new Promise(resolve => {setTimeout(resolve, 1000)});
}

bottomBar.destroy();
```

### Methods
<a name="methods"></a>
const bottomBar = **BottomBar(options)**;

Creates a new BottomBar instance
- **options** (Object)
- returns **BottomBar**

#### Options
- **barsize:** (Number) A length of progress bar. Defaults: 40
- **barCompleteChar:** (String) Character to use as "complete" indicator in the bar (default: "&#2588;")
- **barIncompleteChar:** (String) Character to use as "incomplete" indicator in the bar (default: "&#u2591;")
- **format:** (String) progress bar output format @see format section


#### Bar Formatting
The progressbar can be customized by using the following build-in placeholders. They can be combined in any order.

- {bar} - the progress bar, customizable by the options **barsize**, **barCompleteChar** and **barIncompleteChar**
- {percentage} - the current progress in percent (0-100)
- {total} - the end value
- {value} - the current value set by last update() call

Custom values can be passed by update call:
```javascript
const bottomBar = BottomBar({
    format: 'Progress |' + Colors.cyan('{bar}') + '| {percentage}% | {value}/{total} | {customValue}',
});
bottomBar.update(value, total, {
    customValue: 'test',
});
```

#### bottomBar.update(value, total, customValues)
Puts a progress bar to output

- value (Number) - current value
- total (Number) - max value
- customValues (Object) - additional parameters in format

#### bottomBar.clear()
Removes bottom bar from output

#### bottomBar.log()
Prints a log and keeps a progress bar

#### bottomBar.destroy()
Destroys an instance of bottomBar and associated streams




