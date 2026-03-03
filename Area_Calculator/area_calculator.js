//.....Area Calculator (Multiple Shapes)
// Formulas:
// Rectangle = l × w
// Square = side²
// Circle = π × r²
// Triangle = (base × height) / 2

// To show the fields based on selected shape
document.getElementById("shape").addEventListener("change", function () {
let shape = this.value;

// To hide all the shapes at first
document.getElementById("rectangle").style.display = "none";
document.getElementById("square").style.display = "none";
document.getElementById("circle").style.display = "none";
document.getElementById("triangle").style.display = "none";

// Show the selected shape inputs
if (shape === "rectangle") {
    document.getElementById("rectangle").style.display = "block";
}
else if (shape === "square") {
    document.getElementById("square").style.display = "block";
}
else if (shape === "circle") {
    document.getElementById("circle").style.display = "block";
}
else if (shape === "triangle") {
    document.getElementById("triangle").style.display = "block";
}

document.getElementById("result").textContent = ""; //to reset the result to empty at the beginning.
    });

// Calculate area using simple if‑else
function calculateArea() {
    let shape = document.getElementById("shape").value;
    let area = 0;

      if (shape === "rectangle") {
        let l = parseFloat(document.getElementById("rLength").value);
        let w = parseFloat(document.getElementById("rWidth").value);
        area = l * w;
      }
      else if (shape === "square") {
        let s = parseFloat(document.getElementById("sqSide").value);
        area = s * s;
      }
      else if (shape === "circle") {
        let r = parseFloat(document.getElementById("cRadius").value);
        area = Math.PI * r * r;
      }
      else if (shape === "triangle") {
        let b = parseFloat(document.getElementById("triBase").value);
        let h = parseFloat(document.getElementById("triHeight").value);
        area = (b * h) / 2;
      }
      else {
        alert("Please select a shape.");
        return;
      }

      document.getElementById("result").textContent = "Area = " + area + "units";
    }

    // Reset all fields
    function resetAll() {
      document.getElementById("shape").value = ""; 
      document.getElementById("result").textContent = "";

      // Hide and clear all input boxes
      let ids = ["rectangle", "square", "circle", "triangle"];
      ids.forEach(id => {
        document.getElementById(id).style.display = "none";
        let inputs = document.querySelectorAll("#" + id + " input");
        inputs.forEach(i => i.value = "");
      });
    }
 