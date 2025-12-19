console.log("script.js loaded");

document.getElementById("runBtn").addEventListener("click", () => {
  const height = getInput();
  drawTank(height);
});

// Auto-run on load
drawTank(getInput());
