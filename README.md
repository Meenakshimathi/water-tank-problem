# water-tank-problem
A frontend visualization of the Trapped Rain Water (Water Tank) problem, implemented using Vanilla JavaScript, HTML, CSS, and SVG. The application computes the total trapped water between blocks and visually represents both block heights and trapped water.
Water Tank Problem – SVG Visualization (Vanilla JS)
A frontend visualization of the Trapped Rain Water (Water Tank) problem, implemented using Vanilla JavaScript, HTML, CSS, and SVG.
The application computes the total trapped water between blocks and visually represents both block heights and trapped water.

Problem Statement
Given an array of non-negative integers representing block heights, compute how much water can be trapped between the blocks after raining.

Example:
Input:  [0,4,0,0,0,6,0,6,4,0]
Output: 18 units

Algorithm Used
The solution uses the Prefix Maximum technique:
Compute maximum height to the left of each index
Compute maximum height to the right of each index
Trapped water at index i:

min(leftMax[i], rightMax[i]) - height[i]

Complexity
Time Complexity: O(n)
Space Complexity: O(n)

Visualization Logic
Gray blocks represent building heights
Blue blocks represent trapped water
Rendered dynamically using SVG rectangles
Scales automatically based on input size
Project Structure
water-tank-problem/
│
├── index.html        # Complete application (HTML + CSS + JS)
├── README.md         # Project documentation
└── screenshots/      # (Optional) Output images
How to Run the Project
Option 1: Using VS Code (Recommended)

Open project folder in VS Code

Install Live Server extension

Right-click index.html → Open with Live Server

Option 2: Direct Browser Run

Double-click index.html

Open with any modern browser (Chrome, Edge, Firefox)


