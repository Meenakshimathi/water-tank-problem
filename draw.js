console.log("script.js loaded");

function drawTank(height) {
  const svg = document.getElementById("tankSvg");
  svg.innerHTML = "";

  const water = calculateWater(height);
  const totalWater = water.reduce((a, b) => a + b, 0);

  const unit = 30;
  const maxHeight = Math.max(...height.map((h, i) => h + water[i]));

  // ✅ FIX: Resize SVG dynamically
  svg.setAttribute("width", height.length * unit);
  svg.setAttribute("height", maxHeight * unit);

  for (let col = 0; col < height.length; col++) {
    for (let level = 0; level < maxHeight; level++) {

      const x = col * unit;
      const y = (maxHeight - level - 1) * unit;
      document.createElementNS("http://www.w3.org/2000/svg", "rect");

            
  

      rect.setAttribute("x", x);
      rect.setAttribute("y", y);
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

  document.getElementById("result").innerText =
    `Output: ${totalWater} Units`;
}
