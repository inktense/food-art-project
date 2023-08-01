import canvasSketch from "canvas-sketch";

import { generateCitrusPlate } from "./projects/citrusPlate.js"
import { width, height } from "./constants";

const settings = {
    dimensions: [width, height],
  };
  
  const sketch = () => {
    return ({ context, width, height }) => {
      context.fillStyle = "#F3E1DD";
      context.fillRect(0, 0, width, height);
  
      generateCitrusPlate(context, width, height);
    };
  };
  
  canvasSketch(sketch, settings);