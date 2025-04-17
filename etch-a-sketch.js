console.log("Hello world");

// create pixel grid
function createPixelGrid(input_size) {

    // deleting old pixels
    const allPixels = document.querySelectorAll(".pixel");
    allPixels.forEach(pixel => pixel.remove()); // This does work :)

    // select area and calculate amount of total new pixels and size of each pixel
    const sketch_area = document.querySelector("#sketch");
    const output_size = input_size ** 2;
    const pixel_size = 960 / input_size; // container div is 960px wide
    
    // select input elements
    const input = document.querySelector("input");
    const button = document.querySelector("button");

    // debug:
    console.log(output_size);
    
    // Add pixels to container
    for (let i = 0; i < output_size; i++) {
        const sketch_pixel = document.createElement("div");
        sketch_pixel.className = "pixel";
        sketch_pixel.style.width = (pixel_size - 1) + "px"; // pixel_size - 1 because every pixel has 0.5px border left and right
        sketch_area.appendChild(sketch_pixel);
    }
    button.addEventListener('click', (event) => {
        const inputValue = input.value;
        createPixelGrid(inputValue);
        calculateColorSteps(inputValue);
        applyRainbowEffect(); // Apply the rainbow effect after creating the grid
    })
};

// calculate color "steps" based on grid size (e.g. enable full spectrum to be displayed, theoretically)
let colorStep = 0;
function calculateColorSteps(inputValue) {
    const output_size = inputValue ** 2;
    colorStep = 360 / output_size;
    console.log(colorStep);
};

// create initial pixel grid
createPixelGrid(20); 
calculateColorSteps(20);

// Global hue counter to track the current color in the spectrum
let hueCounter = 0;

function colorizePixel(pixel) {
    // Add an event listener for the hover effect
    pixel.addEventListener("mouseover", () => {
        // Check if the pixel already has a background color
        if (!pixel.style.backgroundColor) {
            // Use the current hue value from the global counter
            const hue = hueCounter % 360; // Ensure hue stays within 0-360
            // Set the pixel's background color using HSL
            pixel.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
        };
        // Optionally, set the initial opacity for a "lighting up" effect
        pixel.style.opacity = parseFloat(pixel.style.opacity || 0) + 0.3;
        // Increment the hue counter for the next pixel
        hueCounter += colorStep; // Adjust step size for smoother or faster transitions
    });
}

// Apply the rainbow effect to all pixels
function applyRainbowEffect() {
    const allPixels = document.querySelectorAll(".pixel");
    allPixels.forEach(pixel => colorizePixel(pixel));
}

// Apply the rainbow effect to the initial grid
applyRainbowEffect();


