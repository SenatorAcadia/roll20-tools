# roll20-tools
This web page is designed to handle image files for use in the Roll20 virtual tabletop platform. The main features of this application are:

A drag-and-drop area to load an image file onto the canvas.
Display the original dimensions of the image.
Calculate and display the number of squares needed for Roll20 based on the image's dimensions (assuming each square is 70 pixels).
Calculate and display the half-size dimensions.
Resize the canvas and draw the image to fit within the maximum allowed size (1000 pixels).
Display a warning message if a dropped file is not an image.
Here's a brief summary of how the code works:

The HTML file sets up the structure of the page, including the drag-and-drop area, canvas, and various div elements to display the calculated values.
The CSS file contains styles for the page, including styles for the drag-and-drop area and its appearance when a file is dragged over it, as well as styles for the various displayed values and warning messages.
The JavaScript file provides the functionality, including handling the dropped file, checking if it's an image, reading the image data, calculating the necessary values, resizing the canvas, and drawing the image onto it.
When a user drags and drops an image file onto the specified area, the application performs the following actions:

Displays the original dimensions of the image.
Calculates and displays the number of squares needed for Roll20.
Calculates and displays the half-size dimensions.
Resizes the canvas to fit the image within the maximum allowed size and draws the image on it.
If the dropped file is not an image, a warning message is displayed.
