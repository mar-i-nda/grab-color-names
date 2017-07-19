# grab-color-names

[![travis build](https://img.shields.io/travis/marinda-s/grab-color-names.svg?style=flat-square)](https://travis-ci.org/marinda-s/grab-color-names)
[![npm](https://img.shields.io/npm/dm/grab-color-names.svg?style=flat-square)](https://www.npmjs.com/package/grab-color-names)

Get an array of 1500+ color names. Alternatively get a single random color, or specify the amount of random colors to return.

![alt tag](https://images.unsplash.com/photo-1442436575481-b94af86bd2cd?fit=crop&fm=jpg&h=275&ixlib=rb-0.3.5&q=80&w=400)

## Usage
-----

### commonjs modules -

    var getColors = require('grab-color-names');

    // Get all colors : array of 1500+ colors
		var colorArray = getColors.all;

		var oneRandomColor = getColors.randomColor();    // [ 'C4F4EB', 'Mint Tulip' ]

		var fiveRandomColors = getColors.randomColor(5); // array of 5 random colors

### ES2015 modules -

	import {allColors, randomColor} from 'grab-color-names';

	var colorArray = allColors,            // array of 1500+ colors
		oneRandomColor = randomColor(),    // [ 'C4F4EB', 'Mint Tulip' ]
		fiveRandomColors = randomColor(5); // array of 5 random colors

## API

<ul>
<li>.all</li>
<li>.randomColor()</li>
<li>.randomColor(x)</li>
</ul>


Installation
------------

    npm install grab-color-names

License
-------
MIT

Attributions
-------
Color list compiled by Chirag Mehta http://chir.ag/projects/name-that-color/

The color names in this list were found via [Wikipedia](https://en.wikipedia.org/wiki/Lists_of_colors), [Crayola](https://en.wikipedia.org/wiki/List_of_Crayola_crayon_colors), and [Color-Name Dictionaries](http://people.csail.mit.edu/jaffer/Color/Dictionaries.html) like Resene.
