
export const addMarginToCanvas = (width, height) => {
    // Creating a working space in the canvas.
    const gridW = width * 0.8;
    const gridH = height * 0.8;
    // Calculating the margin of Y and X sides.
    const margX = (width - gridW) * 0.5;
    const margY = (height - gridH) * 0.5;
  
    return { gridW, gridH, margX, margY };
  };