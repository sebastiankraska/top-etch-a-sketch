console.log("Hello world");
// for (let i = 0; i < 256; i++) {
//     const sketch_pixel = document.createElement("div");
//     sketch_pixel.textContent = "X";
//     sketch_pixel.className = "pixel";
//     sketch_area.appendChild(sketch_pixel);  

// create pixel grid
function createPixelGrid(input_size) {
    const sketch_area = document.querySelector("#sketch");
    const output_size = input_size ** 2;
    console.log(output_size);
    const pixel_size = 960 / input_size;
    for (let i = 0; i < output_size; i++) {
        const sketch_pixel = document.createElement("div");
        sketch_pixel.textContent = "X";
        sketch_pixel.className = "pixel";
        sketch_pixel.style.width = pixel_size + "px"; // TODO: is concatenating a "px" ugly?
        sketch_area.appendChild(sketch_pixel);  
        // TODOs:
        // Add event listener to input/button
    }
};

// create initial pixel grid
createPixelGrid(30); 