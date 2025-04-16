console.log("Hello world");
const sketch_area = document.querySelector("#sketch");
for (let i = 0; i < 256; i++) {
    const sketch_pixel = document.createElement("div");
    sketch_pixel.textContent = "X";
    sketch_pixel.className = "pixel";
    sketch_area.appendChild(sketch_pixel);    
}