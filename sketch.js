var valor = document.getElementById("pecinco").offsetWidth;

            window.addEventListener("resize", function () {
                valor = document.getElementById("pecinco").offsetWidth;
            });

            function setup() {
                createCanvas(valor, valor, WEBGL).parent("#pecinco");
                select("#nombre").html("Angelina Caviedes");
                select("#aprendizaje").html("Me gustaria aprender más sobre herramientas computacionales, como illustrator, que me ayuden a potenciar mis proyectos");
            }
            noStroke();
            function draw() {
                background(255, 216, 223);
                orbitControl();
                pointLight (255, 255, 255, valor/3, valor/2, 50);
                specularMaterial(255);
                shininess(50);
                metalness(1);
                fill(70, 120, 255);
                sphere(valor/4, valor/4);
            }

            function windowResized() {
                resizeCanvas(valor, valor);
            }
     
