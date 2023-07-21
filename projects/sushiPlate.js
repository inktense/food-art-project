import { addMarginToCanvas } from "../utils/canvasSettings";
import { random } from "canvas-sketch-util";

const makiSushiSalmon = (x, y, cellW, cellH) => {
  const borderLength2 = 90;
  fill("#D9594C");
  noStroke();
  rect(
    x + borderLength2 / 2,
    y + borderLength2 / 2,
    cellW * 0.5 - borderLength2,
    cellH * 0.5 - borderLength2,
    20
  );
};

const makiSushiTuna = (x, y, cellW, cellH) => {
  const borderLength2 = 90;
  fill("#a4133c");
  noStroke();
  rect(
    x + borderLength2 / 2,
    y + borderLength2 / 2,
    cellW * 0.5 - borderLength2,
    cellH * 0.5 - borderLength2,
    20
  );
};

const makiSushiVeggie = (x, y, cellW, cellH) => {
  const borderLength2 = 90;
  fill("#6a994e");
  noStroke();
  rect(
    x + borderLength2 / 2,
    y + borderLength2 / 2,
    cellW * 0.5 - borderLength2,
    cellH * 0.5 - borderLength2,
    20
  );
};

const makiSushiSurimi = (x, y, cellW, cellH) => {
  const borderLength2 = 90;
  fill("#a4133c");
  noStroke();
  rect(
    x + borderLength2 / 2,
    y + borderLength2 / 2,
    cellW * 0.5 - borderLength2,
    cellH * 0.5 - borderLength2,
    20
  );

  fill("white");
  noStroke();
  rect(
    x + borderLength2 / 2 + 10,
    y + borderLength2 / 2 + 10,
    cellW * 0.5 - borderLength2 - 20,
    cellH * 0.5 - borderLength2 - 20,
    15
  );
};

const avoSalmonSushi = (x, y, cellW, cellH) => {
  const borderLength2 = 90;
  const a = cellW * 0.5 - borderLength2 * 1.5;

  fill("#D9594C");
  noStroke();
  rect(
    x + borderLength2 / 2,
    y + borderLength2 / 2,
    a,
    cellH * 0.5 - borderLength2,
    20
  );

  fill("#588157");
  noStroke();
  rect(
    x + borderLength2 / 2 + a / 0.9,
    y + borderLength2 / 2,
    cellW * 0.5 - borderLength2 * 1.25,
    cellH * 0.5 - borderLength2 * 1.4,
    15
  );

  fill("#E9D985");
  noStroke();
  rect(
    x + borderLength2 / 2 + a / 0.9,
    y + borderLength2 / 2 + a / 0.7,
    cellW * 0.5 - borderLength2 * 1.25,
    cellH * 0.5 - borderLength2 * 1.4,
    15
  );
};

const veggieSushi = (x, y, cellW, cellH) => {
  const borderLength2 = 90;
  const a = cellW * 0.5 - borderLength2 * 1.4;

  fill("#E9D985");
  noStroke();
  rect(
    x + borderLength2 / 2,
    y + borderLength2 / 2,
    a,
    cellH * 0.5 - borderLength2 * 1.4,
    20
  );

  fill("#588157");
  noStroke();
  rect(
    x + borderLength2 / 2,
    y + borderLength2 / 2 + a / 0.9,
    a,
    cellH * 0.5 - borderLength2 * 1.4,
    20
  );

  fill("#6a994e");
  noStroke();
  rect(
    x + borderLength2 / 2 + a / 0.9,
    y + borderLength2 / 2,
    cellW * 0.5 - borderLength2 * 1.4,
    cellH * 0.5 - borderLength2 * 1.4,
    20
  );

  fill("#E9D985");
  noStroke();
  rect(
    x + borderLength2 / 2 + a / 0.9,
    y + borderLength2 / 2 + a / 0.9,
    cellW * 0.5 - borderLength2 * 1.4,
    cellH * 0.5 - borderLength2 * 1.4,
    20
  );
};

const veggieAndMeatSushi = (x, y, cellW, cellH) => {
  const borderLength2 = 90;
  const a = cellW * 0.5 - borderLength2 * 1.4;

  fill("#D9594C");
  noStroke();
  rect(
    x + borderLength2 / 2,
    y + borderLength2 / 2,
    a,
    cellH * 0.5 - borderLength2 * 1.4,
    20
  );

  fill("#6a994e");
  noStroke();
  rect(
    x + borderLength2 / 2,
    y + borderLength2 / 2 + a / 0.9,
    a,
    cellH * 0.5 - borderLength2 * 1.4,
    20
  );

  fill("#588157");
  noStroke();
  rect(
    x + borderLength2 / 2 + a / 0.9,
    y + borderLength2 / 2,
    cellW * 0.5 - borderLength2 * 1.4,
    cellH * 0.5 - borderLength2 * 1.4,
    20
  );

  fill("#D9594C");
  noStroke();
  rect(
    x + borderLength2 / 2 + a / 0.9,
    y + borderLength2 / 2 + a / 0.9,
    cellW * 0.5 - borderLength2 * 1.4,
    cellH * 0.5 - borderLength2 * 1.4,
    20
  );
};

const makiSushiShrimp = (x, y, cellW, cellH) => {
  const borderLength2 = 90;
  fill("#F5CEBF");
  noStroke();
  rect(
    x + borderLength2 / 2,
    y + borderLength2 / 2,
    cellW * 0.5 - borderLength2,
    cellH * 0.5 - borderLength2,
    20
  );
};

const dragonRollSushi = (x, y, cellW, cellH) => {
  const borderLength2 = 90;
  const rollLength = cellW * 0.5 - borderLength2;
  const dragonColor = "#0D47A1";
  const avocadoColor = "#6a994e";
  const shrimpColor = "#D9594C";
  const riceColor = "#E9D985";
  
  // Draw dragon roll
  fill(dragonColor);
  noStroke();
  rect(
    x + borderLength2 / 2,
    y + borderLength2 / 2,
    rollLength,
    cellH * 0.5 - borderLength2,
    20
  );

  // Draw avocado topping
  fill(avocadoColor);
  noStroke();
  rect(
    x + borderLength2 / 2 + 10,
    y + borderLength2 / 2 + 10,
    rollLength - 20,
    cellH * 0.5 - borderLength2 - 20,
    15
  );

  // Draw shrimp filling
  fill(shrimpColor);
  noStroke();
  rect(
    x + borderLength2 / 2 + 10,
    y + borderLength2 / 2 + 10,
    rollLength - 20,
    (cellH * 0.5 - borderLength2 - 20) / 2,
    15
  );

  // Draw rice base
  fill(riceColor);
  noStroke();
  rect(
    x + borderLength2 / 2 + 10,
    y + borderLength2 / 2 + (cellH * 0.5 - borderLength2 - 20) / 2 + 10,
    rollLength - 20,
    (cellH * 0.5 - borderLength2 - 20) / 2,
    15
  );
};

export const generateSushiPlate = (context, width, height) => {
  const { gridW, gridH, margX, margY } = addMarginToCanvas(width, height);
  const cols = 3;
  const rows = 3;
  const cellW = gridW / cols;
  const cellH = gridH / rows;

  const numCells = cols * rows;

  fill("#417B5A");
  noStroke();
  rect(margX, margY, width - margX * 2, height - margY * 2);

  for (let i = 0; i < numCells; i++) {
    // i % 4 = 0, 1, 2, 3
    const col = i % cols;

    // Math.floor(i / 4) = 0, 0, 0, 0, 1, 1, 1, 1;
    const row = Math.floor(i / cols);

    const offsetW = cellW * col;
    const offsetH = cellH * row;

    const x = margX + offsetW + cellW * 0.25;
    const y = margY + offsetH + cellH * 0.25;

    fill("#252525");
    noStroke();
    rect(x, y, cellW * 0.5, cellH * 0.5, 30);

    const borderLength = 20;
    fill("white");
    noStroke();
    rect(
      x + borderLength / 2,
      y + borderLength / 2,
      cellW * 0.50 - borderLength,
      cellH * 0.50 - borderLength,
      20
    );

    switch (i) {
      case 0:
        makiSushiSalmon(x, y, cellW, cellH);
        break;
      case 1:
        avoSalmonSushi(x, y, cellW, cellH);
        break;
      case 2:
        veggieSushi(x, y, cellW, cellH);
        break;
      case 3:
        makiSushiSurimi(x, y, cellW, cellH);
        break;
      case 4:
        makiSushiShrimp(x, y, cellW, cellH);
        break;
      case 5:
        makiSushiTuna(x, y, cellW, cellH);
        break;
      case 6:
        veggieAndMeatSushi(x, y, cellW, cellH);
        break;
      case 7:
        makiSushiVeggie(x, y, cellW, cellH);
        break;
      case 8:
        dragonRollSushi(x, y, cellW, cellH);
        break;
    }


  }
};
