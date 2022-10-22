const generateGradient = (numberOfItems) => {
  let Rainbow = require('rainbowvis.js');
  let myRainbow = new Rainbow();
  myRainbow.setNumberRange(1, numberOfItems);
  myRainbow.setSpectrum('#E5F61B', '#B3852E');
  let s = [];
  for (let i = 1; i <= numberOfItems; i++) {
    let hexColour = myRainbow.colourAt(i);
    s.push(`#${hexColour}`);
  }

  return s;
};

export default generateGradient;
