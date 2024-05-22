// Include packages needed for this application
const inquirer = require("inquirer");
const {generateSvg} = require('./lib/shapes');

// Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "text",
    message: "What is the text you would like displayed on your logo? (No more than 3 characters)",
    validate: function(value) {
        if (value.length > 3) {
            return "Please enter 3 or less characters.";
        } else {
            return true;
        }
    }
},
  {
    type: "input",
    name: "textColor",
    message: "What color would you like the text to be? (Please enter a color keyword or a hex code)",
    validate: function(value) {
        // Check if the value is a valid color keyword
        const colorKeywords = ["black", "silver", "gray", "white", "maroon", "red", "purple", "fuchsia", "green", "lime", "olive", "yellow", "navy", "blue", "teal", "aqua"];
        if (colorKeywords.includes(value.toLowerCase())) {
            return true;
        }

        // Check if the value is a valid hex code
        const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
        if (hexRegex.test(value)) {
            return true;
        }
        return "Please enter a valid color keyword or a hex code.";
    }  
},
  {
    type: "list",
    name: "shape",
    message: "What lshape would you like your logo to be?",
    choices: ['circle', 'triangle','square'],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "What color would you like the shape to be? (Please enter a color keyword or a hex code)",
    validate: function(value) {
        // Check if the value is a valid color keyword
        const colorKeywords = ["black", "silver", "gray", "white", "maroon", "red", "purple", "fuchsia", "green", "lime", "olive", "yellow", "navy", "blue", "teal", "aqua"];
        if (colorKeywords.includes(value.toLowerCase())) {
            return true;
        }

        // Check if the value is a valid hex code
        const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
        if (hexRegex.test(value)) {
            return true;
        }
        return "Please enter a valid color keyword or a hex code.";
    }  
  },]


  // Initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
      generateSvg(answers);
    });
  }
  
  // Function call to initialize app
  init();