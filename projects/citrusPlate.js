import { addMarginToCanvas } from "../utils/canvasSettings";
import { random } from "canvas-sketch-util";

import { citrusColors } from "../colors/citrusColors.js";

export const generateCitrusPlate = (context, width, height) => {
  const { gridW, gridH, margX, margY } = addMarginToCanvas(width, height);
  const cols = 3;
  const rows = 3;
  const cellW = gridW / cols;
  const cellH = gridH / rows;

  const numCells = cols * rows;

  context.fillStyle = "#F3E1DD";
  context.fillRect(margX, margY, width - margX * 2, height - margY * 2);

  for (let i = 0; i < numCells; i++) {
    // i % 4 = 0, 1, 2, 3
    const col = i % cols;

    // Math.floor(i / 4) = 0, 0, 0, 0, 1, 1, 1, 1;
    const row = Math.floor(i / cols);

    const offsetW = cellW * col;
    const offsetH = cellH * row;

    let pallete;

    if (i === 0 || i === 4) {
      pallete = citrusColors[1];
    } else 
    if (i === 1 || i === 3) {
      pallete = citrusColors[2];
    } else
    if (i === 2 || i === 6 || i === 8) {
      pallete = citrusColors[0];
    } else 
    if (i === 5 || i === 7) {
      pallete = citrusColors[3];
    }


    //const pallete = random.pick(citrusColors);

    // Create the citrus outer skin
    context.beginPath();
    context.arc(
      margX + offsetW + cellW / 2,
      margY + offsetH + cellH / 2,
      cellW * 0.45,
      0,
      2 * Math.PI,
      false
    );
    context.fillStyle = pallete.skin;
    context.fill();

    // Create the citrus inner color
    context.beginPath();
    context.arc(
      margX + offsetW + cellW / 2,
      margY + offsetH + cellH / 2,
      cellW * 0.43,
      0,
      2 * Math.PI,
      false
    );
    context.fillStyle = pallete.inner;
    context.fill();

    // Create the citrus flesh color
    context.beginPath();
    context.arc(
      margX + offsetW + cellW / 2,
      margY + offsetH + cellH / 2,
      cellW * 0.37,
      0,
      2 * Math.PI,
      false
    );
    context.fillStyle = pallete.slice;
    context.fill();

    // Create the citrus flesh slices
    for (let j = 0; j < 12; j++) {
      // Change j to 8 and multiply by 90 to create a 8 slice citrus
      const k = j * 60;
      context.beginPath();
      context.strokeStyle = pallete.inner;
      var y =
        Math.sin((k * Math.PI) / 360) * 400 + (margY + offsetH + cellH / 2);
      var x =
        Math.cos((k * Math.PI) / 360) * 400 + (margX + offsetW + cellW / 2);
      context.moveTo(margX + offsetW + cellW / 2, margY + offsetH + cellH / 2);
      context.lineTo(x, y);
      context.lineWidth = 9;
      context.stroke();
    }

    //Create the citrus inner skin center
    context.beginPath();
    context.arc(
      margX + offsetW + cellW / 2,
      margY + offsetH + cellH / 2,
      cellW * 0.07,
      0,
      2 * Math.PI,
      false
    );
    context.fillStyle = pallete.inner;
    context.fill();
  }
};
