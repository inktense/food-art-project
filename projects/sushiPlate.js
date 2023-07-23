import { addMarginToCanvas } from "../utils/canvasSettings";
import { width } from "../constants";

const borderLength = width / 60;

let borderLength2;
let cellOffset;
let sushiConstant;
let outerSushiRadius;
let xyOffset;
let cellExtraSpace;
let borderPercent;
let veggieSushiConstant;
let avoSalmonSushiCellW;
let avoSalmonSushiCellH;
let avoSalmonSushiA;

if (width === 3000) {
  cellOffset = 0.7;
  sushiConstant = 1.45;
  outerSushiRadius = 60;
  borderLength2 = borderLength + width / 12;
  xyOffset = 30;
  cellExtraSpace = 60;
  borderPercent = 0.9;
  veggieSushiConstant = 1.45;
  avoSalmonSushiCellW = 1.40;
  avoSalmonSushiCellH = 1.45;
  avoSalmonSushiA = 1.5;
} 
else if (width === 4000) {
  cellOffset = 0.75;
  sushiConstant = 1.45;
  outerSushiRadius = 60;
  borderLength2 = borderLength + width / 14;
  xyOffset = 29;
  cellExtraSpace = 56;
  borderPercent = 0.9;
  veggieSushiConstant = 1.37;
  avoSalmonSushiCellW = 1.30;
  avoSalmonSushiCellH = 1.37;
  avoSalmonSushiA = 1.4;
}

const makiSushiSalmon = (x, y, cellW, cellH) => {
  fill("#D9594C");
  noStroke();
  rect(
    x + borderLength2 / 2,
    y + borderLength2 / 2,
    cellW * cellOffset - borderLength2,
    cellH * cellOffset - borderLength2,
    outerSushiRadius
  );
};

const makiSushiTuna = (x, y, cellW, cellH) => {
  fill("#a4133c");
  noStroke();
  rect(
    x + borderLength2 / 2,
    y + borderLength2 / 2,
    cellW * cellOffset - borderLength2,
    cellH * cellOffset - borderLength2,
    outerSushiRadius
  );
};

const makiSushiVeggie = (x, y, cellW, cellH) => {
  fill("#6a994e");
  noStroke();
  rect(
    x + borderLength2 / 2,
    y + borderLength2 / 2,
    cellW * cellOffset - borderLength2,
    cellH * cellOffset - borderLength2,
    outerSushiRadius
  );
};

const makiSushiSurimi = (x, y, cellW, cellH) => {
  fill("#a4133c");
  noStroke();
  rect(
    x + borderLength2 / 2,
    y + borderLength2 / 2,
    cellW * cellOffset - borderLength2,
    cellH * cellOffset - borderLength2,
    outerSushiRadius
  );

  fill("white");
  noStroke();
  rect(
    x + borderLength2 / 2 + xyOffset,
    y + borderLength2 / 2 + xyOffset,
    cellW * cellOffset - borderLength2 - cellExtraSpace,
    cellH * cellOffset - borderLength2 - cellExtraSpace,
    outerSushiRadius
  );
};

const makiSushiShrimp = (x, y, cellW, cellH) => {
  fill("#F5CEBF");
  noStroke();
  rect(
    x + borderLength2 / 2,
    y + borderLength2 / 2,
    cellW * cellOffset - borderLength2,
    cellH * cellOffset - borderLength2,
    outerSushiRadius
  );
};

const avoSalmonSushi = (x, y, cellW, cellH) => {
  const a = cellW * cellOffset - borderLength2 * avoSalmonSushiA;

  fill("#D9594C");
  noStroke();
  rect(
    x + borderLength2 / 2,
    y + borderLength2 / 2,
    a,
    cellH * cellOffset - borderLength2,
    outerSushiRadius
  );

  fill("#588157");
  noStroke();
  rect(
    x + borderLength2 / 2 + a / borderPercent,
    y + borderLength2 / 2,
    cellW * cellOffset - borderLength2 * avoSalmonSushiCellW,
    cellH * cellOffset - borderLength2 * avoSalmonSushiCellH,
    outerSushiRadius
  );

  fill("#E9D985");
  noStroke();
  rect(
    x + borderLength2 / 2 + a / borderPercent,
    y + borderLength2 / 2 + a / 0.8,
    cellW * cellOffset - borderLength2 * avoSalmonSushiCellW,
    cellH * cellOffset - borderLength2 * avoSalmonSushiCellH,
    outerSushiRadius
  );
};

const veggieSushi = (x, y, cellW, cellH) => {
  const a = cellW * cellOffset - borderLength2 * veggieSushiConstant;

  fill("#E9D985");
  noStroke();
  rect(
    x + borderLength2 / 2,
    y + borderLength2 / 2,
    a,
    cellH * cellOffset - borderLength2 * veggieSushiConstant,
    100
  );

  fill("#588157");
  noStroke();
  rect(
    x + borderLength2 / 2,
    y + borderLength2 / 2 + a / borderPercent,
    a,
    cellH * cellOffset - borderLength2 * veggieSushiConstant,
    100
  );

  fill("#6a994e");
  noStroke();
  rect(
    x + borderLength2 / 2 + a / borderPercent,
    y + borderLength2 / 2,
    cellW * cellOffset - borderLength2 * veggieSushiConstant,
    cellH * cellOffset - borderLength2 * veggieSushiConstant,
    100
  );

  fill("#E9D985");
  noStroke();
  rect(
    x + borderLength2 / 2 + a / borderPercent,
    y + borderLength2 / 2 + a / borderPercent,
    cellW * cellOffset - borderLength2 * veggieSushiConstant,
    cellH * cellOffset - borderLength2 * veggieSushiConstant,
    100
  );
};

const veggieAndMeatSushi = (x, y, cellW, cellH) => {
  const a = cellW * cellOffset - borderLength2 * veggieSushiConstant;

  fill("#D9594C");
  noStroke();
  rect(
    x + borderLength2 / 2,
    y + borderLength2 / 2,
    a,
    cellH * cellOffset - borderLength2 * veggieSushiConstant,
    100
  );

  fill("#6a994e");
  noStroke();
  rect(
    x + borderLength2 / 2,
    y + borderLength2 / 2 + a / borderPercent,
    a,
    cellH * cellOffset - borderLength2 * veggieSushiConstant,
    100
  );

  fill("#588157");
  noStroke();
  rect(
    x + borderLength2 / 2 + a / borderPercent,
    y + borderLength2 / 2,
    cellW * cellOffset - borderLength2 * veggieSushiConstant,
    cellH * cellOffset - borderLength2 * veggieSushiConstant,
    100
  );

  fill("#D9594C");
  noStroke();
  rect(
    x + borderLength2 / 2 + a / borderPercent,
    y + borderLength2 / 2 + a / borderPercent,
    cellW * cellOffset - borderLength2 * veggieSushiConstant,
    cellH * cellOffset - borderLength2 * veggieSushiConstant,
    100
  );
};

const dragonRollSushi = (x, y, cellW, cellH) => {
  const rollLength = cellW * cellOffset - borderLength2;
  const dragonColor = "#a4133c";
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
    cellH * cellOffset - borderLength2,
    outerSushiRadius
  );

  // Draw avocado topping
  fill(avocadoColor);
  noStroke();
  rect(
    x + borderLength2 / 2 + xyOffset,
    y + borderLength2 / 2 + xyOffset,
    rollLength - cellExtraSpace,
    cellH * cellOffset - borderLength2 - cellExtraSpace,
    outerSushiRadius
  );

  // Draw shrimp filling
  fill(shrimpColor);
  noStroke();
  rect(
    x + borderLength2 / 2 + xyOffset,
    y + borderLength2 / 2 + xyOffset,
    rollLength - cellExtraSpace,
    (cellH * cellOffset - borderLength2 - cellExtraSpace) / 2,
    80
  );

  // Draw rice base
  fill(riceColor);
  noStroke();
  rect(
    x + borderLength2 / 2 + xyOffset,
    y + borderLength2 / 2 + (cellH * cellOffset - borderLength2 - cellExtraSpace) / 2 + xyOffset,
    rollLength - cellExtraSpace,
    (cellH * cellOffset - borderLength2 - cellExtraSpace) / 2,
    80
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

    const x = margX + offsetW + cellW * 0.15;
    const y = margY + offsetH + cellH * 0.15;

    fill("#252525");
    noStroke();
    rect(x, y, cellW * cellOffset, cellH * cellOffset, 80);

    fill("white");
    noStroke();
    rect(
      x + borderLength / 2,
      y + borderLength / 2,
      cellW * cellOffset - borderLength,
      cellH * cellOffset - borderLength,
      outerSushiRadius
    );

    switch (i) {
      case 0:
        makiSushiSalmon(x, y, cellW, cellH);
        break;
      case 1:
        dragonRollSushi(x, y, cellW, cellH);
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
        avoSalmonSushi(x, y, cellW, cellH);
        break;
    }


  }
};
