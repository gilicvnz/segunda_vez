var valor = document.getElementById("pecinco").offsetWidth;

window.addEventListener("resize", function () {
    valor = document.getElementById("pecinco").offsetWidth;
});

function setup() {
    createCanvas(valor, valor, WEBGL).parent("#pecinco");
    select("#nombre").html("marti U・ᴥ・U");
    select("#aprendizaje").html("a programar y explorar nuevas formas de expresión visual para proyectos digitales");
    noStroke();
}
function draw() {
    background(230, 230, 250);
    orbitControl();
    pointLight(255, 255, 255, valor / 3, valor / 2, 50);
    specularMaterial(255);
    shininess(50);
    metalness(1);
    fill(139, 7, 139);
    ellipsoid(30);
}

function windowResized() {
    resizeCanvas(valor, valor);
}
