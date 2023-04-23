const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 1.0: This function handles the file that is dropped onto the image-drop area
function dropHandler(e) {
  e.preventDefault();
  const file = e.dataTransfer.files[0];
  
  // 1.1: Check if the dropped file is an image
  if (file.type.match("image.*")) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const img = new Image();
      img.onload = function() {
        // 1.1.1: Display the original dimensions of the image
        const dimensionsDiv = document.getElementById("dimensions");
        dimensionsDiv.innerHTML = "<p>Original dimensions: " + img.width + " x " + img.height + "</p>";

        // 1.1.2: Calculate the number of squares needed for Roll20
        const squaresDiv = document.getElementById("squares");
        const numSquaresX = Math.ceil(img.width / 70);
        const numSquaresY = Math.ceil(img.height / 70);
        const numSquaresTotal = numSquaresX * numSquaresY;
        squaresDiv.innerHTML = "<p>Number of squares needed for Roll20: " + numSquaresX + " x " + numSquaresY + " = " + numSquaresTotal + "</p>";

        // 1.1.3: Calculate the Half Size dimensions
        const halfSizeDiv = document.getElementById("half-size");
        const halfSizeX = Math.ceil(numSquaresX / 2);
        const halfSizeY = Math.ceil(numSquaresY / 2);
        halfSizeDiv.innerHTML = "<p>Half Size: " + halfSizeX + " x " + halfSizeY + "</p>";

        // 1.1.4: Resize the canvas and draw the image
        const maxSize = 1000;
        const ratio = Math.min(1, img.width / maxSize, img.height / maxSize);
        canvas.width = img.width * ratio;
        canvas.height = img.height * ratio;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      };
      img.src = e.target.result;
    }
    reader.readAsDataURL(file);
  } else {
  // 1.2 If the dropped file is not an image, display a warning
    const warningDiv = document.getElementById("results");
    warningDiv.innerHTML = "<div class='warning'>Warning: The dropped file is not an image file.</div>";
  }
}
// 2.0: This function handles the dragover event
function dragOverHandler(e) {
  e.preventDefault();
  // 2.1: Add the "dragover" class to the drop area to show the thick inset line
  document.getElementById("image-drop").classList.add("dragover");
  // 2.2: Change the text of the paragraph inside the drop area to "Drop Now!"
  document.querySelector("#image-drop p").textContent = "Drop Now!";
  // 2.3: Change the border style of the image-drop area to "inset"
  document.getElementById("image-drop").style.borderStyle = "inset";
  }
  
// 3.0: This function handles the dragleave event
function dragLeaveHandler(e) {
  e.preventDefault();
  // 3.1: Remove the "dragover" class from the drop area to remove the thick inset line
  document.getElementById("image-drop").classList.remove("dragover");
  // 3.2: Change the text of the paragraph inside the drop area back to "Drag an image file here to load it onto the canvas."
  document.querySelector("#image-drop p").textContent = "Drag an image file here to load it onto the canvas.";
  // 3.3: Change the border style of the image-drop area back to "dotted"
  document.getElementById("image-drop").style.borderStyle = "dotted";
}
