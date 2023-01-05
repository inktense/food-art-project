import canvasSketch from "canvas-sketch";

import { generateCitrusPlate } from "./projects/citrusPlate.js"

const settings = {
    dimensions: [1200, 1200],
  };
  
  const sketch = () => {
    return ({ context, width, height }) => {
      context.fillStyle = "white";
      context.fillRect(0, 0, width, height);
  
      generateCitrusPlate(context, width, height);
    };
  };
  
  canvasSketch(sketch, settings);