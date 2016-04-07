var estrella1, estrella2, estrella3;
var fondo;
var titulo;
var cuadrado;
var imagenFondo;
var numPantalla = 1;
var x, y, a, b, c, d, j, i;

function preload() {
  estrella1 = loadAnimation("assets/estrella1.png", "assets/estrella5.png");
  estrella2 = loadAnimation("assets/estrella1.png", "assets/estrella5.png");
  estrella3 = loadAnimation("assets/estrella1.png", "assets/estrella5.png");
  cuadrado = loadAnimation("assets/cuadrado1.png", "assets/cuadrado2.png");
  
 
  fondo = loadImage("assets/fondo.png");
  titulo = loadImage("assets/titulo.png");
  imagenFondo = loadImage("assets/knyttu_03.jpg");
}


function setup() {

  createCanvas(windowWidth, windowHeight);
  pantalla = new Inicio();
  comoJugar = new corriendoJuego();
  instrucciones = new Instrucciones1();



}

function draw() {
  background(255);

  if (numPantalla == 1) {

    pantalla.InicioJuego();
    j = 0;
    i = 0;

  }
  if (mouseIsPressed == true && mouseX > x - 100 && mouseX < x + 100 && mouseY > y - 25 && mouseY < y + 25) {
    //  if (mouseX > width / 2) {
    numPantalla = 2;
  } else if (numPantalla == 2) {

    instrucciones.Instruc();
    x = 0;
    y = 0;
    c = 0;
    d = 0;
    j = 0;
    i = 0;

  }


  if (mouseIsPressed == true && mouseX > a - 100 && mouseX < a + 100 && mouseY > b - 25 && mouseY < b + 25) {

    numPantalla = 1;
  }

  if (mouseIsPressed == true && mouseX > c - 100 && mouseX < c + 100 && mouseY > d - 25 && mouseY < d + 25) {

    numPantalla = 3;

  } else if (numPantalla == 3) {

    comoJugar.Jugar();
    x = 0;
    y = 0;
    a = 0;
    b = 0;
    c = 0;
    d = 0;


  }
  if (mouseIsPressed == true && mouseX > j - 100 && mouseX < j + 100 && mouseY > i - 25 && mouseY < i + 25) {

    numPantalla = 1;

    comoJugar.Jugar();
    x = 0;
    y = 0;
    a = 0;
    b = 0;
    c = 0;
    d = 0;


  }
}


function Inicio() {

  this.InicioJuego = function() {

    x = width * 0.45;
    y = height * 0.95;

    c = width * 0.65;
    d = height * 0.95;

    rectMode(CENTER);
    animation(cuadrado, 0.8 * width, 0.6 * height);
    image(fondo, 0, 0, width, height);
    image(titulo, 0.14 * width, 0.17 * height, width / 2, height / 2);


    animation(estrella1, 0.1 * width, 0.5 * height);
    animation(estrella2, 0.38 * width, 0.8 * height);
    animation(estrella3, 0.9 * width, 0.8 * height);



    rect(c, d, 200, 50);
    rect(x, y, 200, 50);



    fill(0);
    textSize(20);
    text("JUGAR", c - 30, d + 10);

    fill(255);

    fill(0);


    textSize(20);
    fill(0);
    text("INSTRUCCIONES ", x - 75, y + 10);
    fill(255);

  }
}


function Instrucciones1() {



  this.Instruc = function() {

    a = width * 0.05;
    b = height * 0.9;

    rectMode(CENTER);
    background(33, 45, 86);
    image(imagenFondo, 0, 0, width, height);
 //   text("Como Jugar", width / 2, height / 2);
    noStroke();
    fill(150, 200, 20);


    rect(a, b, 200, 50);
    fill(150, 200, 20);
//    text("Como Jugar", width / 2, height / 2);
    fill(255);
    textSize(20);
    text("REGRESAR", a - 20, b - 3);
  }

}



function corriendoJuego() {

  this.Jugar = function() {

    j = width * 0.95;
    i = height * 0.05;

    rectMode(CENTER);
    background(33, 45, 86);
    image(imagenFondo, 0, 0, width, height);
    noStroke();
    fill(150, 200, 20);
    rect(j, i, 50, 50);

    fill(255);
    textSize(20);
    text("X", j - 10, i + 10);


  }
}