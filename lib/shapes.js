const fs = require("fs");

function generateSvg(answers) {
  const text = answers.text;
  const textColor = answers.textColor;
  const shape = answers.shape;
  const shapeColor = answers.shapeColor;

  let svgString = `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">`;

  // Add shape element
  let shapeElement;
  switch (shape) {
    case 'circle':
      shapeElement = `<circle cx="150" cy="150" r="100" fill="${shapeColor}" />`;
      break;
    case 'square':
      shapeElement = `<rect x="100" y="100" width="100" height="100" fill="${shapeColor}" />`;
      break;
    case 'triangle':
      shapeElement = `<polygon points="150,50 250,150 50,150" fill="${shapeColor}" />`;
      break;
  }

  svgString += shapeElement;

  // Add text element
  let textX, textY;
  switch (shape) {
    case 'circle':
      textX = 150;
      textY = 140;
      break;
    case 'square':
      textX = 137.5;
      textY = 135;
      break;
    case 'triangle':
      textX = 150;
      textY = 130;
      break;
  }

  svgString += `<text x="${textX}" y="${textY}" fill="${textColor}" text-anchor="middle" font-size="28">${text}</text>`;

  svgString += `</svg>`;

  fs.writeFileSync('logo.svg', svgString);
}

module.exports = {
  generateSvg
};