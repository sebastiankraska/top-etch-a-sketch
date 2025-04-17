console.log("Hello world");
// for (let i = 0; i < 256; i++) {
//     const sketch_pixel = document.createElement("div");
//     sketch_pixel.textContent = "X";
//     sketch_pixel.className = "pixel";
//     sketch_area.appendChild(sketch_pixel);  

// create pixel grid
function createPixelGrid(input_size) {

    // deleting old pixels
    const allPixels = document.querySelectorAll(".pixel");
    // allPixels.remove(); // THIS DOES NOT WORK!
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
        sketch_pixel.textContent = "X";
        sketch_pixel.className = "pixel";
        sketch_pixel.style.width = pixel_size + "px"; // TODO: is concatenating a "px" ugly?
        sketch_area.appendChild(sketch_pixel);
    }
    button.addEventListener('click', (event) => {
        const inputValue = input.value;
        createPixelGrid(inputValue);
    })
};

// create initial pixel grid
createPixelGrid(20); 