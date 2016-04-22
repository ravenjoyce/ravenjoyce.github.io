var estrella1, estrella2, estrella3;
var fondo;
var titulo;
var cuadrado;
var imagenFondo;
var numPantalla = 1;
var x, y, a, b, c, d, j, i;

var s;
var GRAVITY;
var VELOCITY;
var pisoImg, backImg, mountImg, sqrImg;
var gameover = false;

function preload() {
  estrella1 = loadAnimation("assets/estrella1.png", "assets/estrella5.png");
  estrella2 = loadAnimation("assets/estrella1.png", "assets/estrella5.png");
  estrella3 = loadAnimation("assets/estrella1.png", "assets/estrella5.png");
  cuadrado = loadAnimation("assets/cuadrado1.png", "assets/cuadrado2.png");

  fondo = loadImage("assets/fondo.png");
  titulo = loadImage("assets/titulo.png");
  imagenFondo = loadImage("assets/niveles3.png");
}


function setup() {

  createCanvas(windowWidth, windowHeight);

  pantalla = new Inicio();
  comoJugar = new corriendoJuego();
  instrucciones = new Instrucciones1();
  GRAVITY = 0.3;
  VELOCITY = 0;





  s2 = createSprite(0.17 * width, 0.64 * height, 0.06 * width, 0.76 * height);
  //  s2.addImage(pisoImg);
  s2.debug = true;

  s7 = createSprite(0, 0.24 * height, 0.07 * width, 0.92 * height);
  //  s2.addImage(pisoImg);
  s7.debug = true;


  s8 = createSprite(0.36 * width, 0.17 * height, 0.05 * width, 0.92 * height);
  //  s2.addImage(pisoImg);
  s8.debug = true;

  s4 = createSprite(0.36 * width, 0.99 * height, 0.04 * width, 0.3 * height);
  //  s4.addImage(pisoImg);
  s4.debug = true;
  s3 = createSprite(0.0 * width, 0.95 * height, 0.25 * width, 0.1 * height);
  //  s3.addImage(mountImg);
  s3.debug = true;

  s5 = createSprite(0.82 * width, 0.9 * height, 0.66 * width, 0.6 * height);
  // s5.addImage(mountImg);
  s5.debug = true;

  s6 = createSprite(0.08 * width, 0.99 * height, 0.28 * width, 0.2 * height);
  // s6.addImage(pisoImg);
  s6.debug = true;

  s9 = createSprite(0.75 * width, 0.4 * height, 0.05 * width, 0.4 * height);
  // s6.addImage(pisoImg);
  s9.debug = true;

  s = createSprite(0.05 * width, 0.5 * height, 50, 50);
  s.addAnimation("floating", "assets/cuadrado1.png", "assets/cuadrado2.png");
  //  s.addAnimation("moving", "assets/oscar1.png", "assets/oscar8.png");
  // s.addAnimation("jump", "assets/jump1.png", "assets/jump13.png");
  // s.addAnimation("triangle", "assets/oscar_tr1.png", "assets/oscar_tr3.png");
  // s.addAnimation("sqr", "assets/oscar_sqr1.png");

  s.setCollider("circle", 0, 0, 50);
  s.debug = true;



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

    VELOCITY += GRAVITY;

    s.position.y += VELOCITY;

    if (s.collide(s2) || s.collide(s3) || s.collide(s4) || s.collide(s5) || s.collide(s6) || s.collide(s7) || s.collide(s8) || s.collide(s9)) {
      VELOCITY = 0;
      GRAVITY = 0;
    } else {
      GRAVITY = 0.3;
    }

    trg = false;
    cir = false;
    cuad = false;

    if (keyWentDown('UP') && trg === false) {
      s.changeAnimation("triangle");
      VELOCITY = -15;
      GRAVITY = 0.3;
      trg = true;
    }
    if (keyWentDown('c') || keyWentDown('C') && cir === false) {

      s.mirrorX(-1);
      s.velocity.x = 4;
      VELOCITY = -15;
      GRAVITY = 0.3;
    }
    if (keyWentUp('c') || keyWentUp('C')) {
      //    s.changeAnimation("floating");
      s.velocity.x = 0;
    }
    if (s.position.y > windowHeight) {
      s.position.y = 0.5 * height;
      s.position.x = 0.1 * width;
    }
    //if (gameover === true && keyWentDown == ('x') || keyWentDown == ('X')) {

    // gameover = false
    //}
    drawSprites();
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
 //   image(imagenFondo, width / 2, height / 2, width, height / 2);
    //   text("Como Jugar", width / 2, height / 2);
    noStroke();
    fill(150, 200, 20);


    rect(a, b, 200, 50);
    fill(150, 200, 20)
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
    imageMode(CENTER);
  //  image(imagenFondo, width / 2, height / 2, width, height / 2);
    noStroke();
    fill(150, 200, 20);
    rect(j, i, 50, 50);

    fill(255);
    textSize(20);
    text("X", j - 10, i + 10);


  }
}


function keyPressed() {
  if (keyCode == LEFT_ARROW && cir === false) {
    s.changeAnimation("moving");
    s.mirrorX(-1);
    s.velocity.x = -2;
  } else if (keyCode == RIGHT_ARROW) {
    s.changeAnimation("moving");
    s.mirrorX(1);
    s.velocity.x = 2;
  } else {
    s.changeAnimation("floating");
    s.velocity.x = 0;
  }
}

function keyReleased() {
  if (keyCode == LEFT_ARROW || keyCode == RIGHT_ARROW) {
    s.changeAnimation("floating");
    s.velocity.x = 0;
  }
}