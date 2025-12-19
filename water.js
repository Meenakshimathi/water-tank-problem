console.log("script.js loaded");

function calculateWater(height) {
  const n = height.length;
  const leftMax = Array(n).fill(0);
  const rightMax = Array(n).fill(0);
  const water = Array(n).fill(0);

  leftMax[0] = height[0];
  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }

  rightMax[n - 1] = height[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }

  for (let i = 0; i < n; i++) {
    water[i] = Math.max(
      0,
      Math.min(leftMax[i], rightMax[i]) - height[i]
    );
  }

  return water;
}

function drawTank(height) {
  const svg = document.getElementById("tankSvg");
  svg.innerHTML = "";

  const water = calculateWater(height);
  const unit = 30;
  const maxHeight = Math.max(...height.map((h, i) => h + water[i]));

  // resize svg
  svg.setAttribute("width", height.length * unit);
  svg.setAttribute("height", maxHeight * unit);

  for (let col = 0; col < height.length; col++) {
    for (let level = 0; level < maxHeight; level++) {

      const rect = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
      );

      rect.setAttribute("x", col * unit);
      rect.setAttribute("y", (maxHeight - level - 1) * unit);
      rect.setAttribute("width", unit);
      rect.setAttribute("height", unit);
      rect.setAttribute("stroke", "black");
      rect.setAttribute("fill", "white");

      if (level < height[col]) {
        rect.setAttribute("fill", "yellow");
      } else if (level < height[col] + water[col]) {
        rect.setAttribute("fill", "#00b0f0");
      }

      svg.appendChild(rect);
    }
  }

  const totalWater = water.reduce((a, b) => a + b, 0);
  document.getElementById("result").innerText =
    `Output: ${totalWater} Units`;
}

// button
document.getElementById("runBtn").addEventListener("click", () => {
  const input = document.getElementById("input").value;
  const height = input.split(",").map(Number);
  drawTank(height);
});

// auto run
drawTank([0,4,0,0,0,6,0,6,4,0]);
