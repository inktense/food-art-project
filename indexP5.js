import canvasSketch from "canvas-sketch";
import p5 from "p5";

import { generateSushiPlate } from "./projects/sushiPlate.js";
import { width, height } from "./constants";

new p5();

//const preload = (p5) => {
  // You can use p5.loadImage() here, etc...
//};

const settings = {
 p5: true,
  dimensions: [3000, 3000],
  // Pass the p5 instance, and preload function if necessary
 // context: "webgl",
  // Turn on a render loop
  //animate: false,
    // Enable MSAA
    attributes: {
        antialias: true,
      },
};

const sketch = (p5) => {
  // Return a renderer, which is like p5.js 'draw' function
  return ({ playhead, width, height }) => {
    background("#417B5A");

    generateSushiPlate(p5, width, height);
  };
};

canvasSketch(sketch, settings);
