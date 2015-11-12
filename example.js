var getColors = require('grab-color-names'),
    colorArray = getColors.all,             // array of 1500+ colors
    oneRandomColor = getColors.randomColor(),    // [ 'C4F4EB', 'Mint Tulip' ]
    fiveRandomColors = getColors.randomColor(5); // array of 5 random colors

    console.log(fiveRandomColors);
