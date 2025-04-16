console.log("Hello world");
const sketch_area = document.querySelector("#sketch");
for (let i = 0; i < 100; i++) {
    const sketch_pixel = document.createElement("div");
    sketch_pixel.textContent = "X";
    sketch_area.appendChild(sketch_pixel);    
}