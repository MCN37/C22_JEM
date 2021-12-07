//Los siguientes objetos son parte  de la biblioteca Matters:
  //1.Engine se utiliza para crear el motor físico.
const Engine = Matter.Engine;  
  // 2.World se usa para crear el mundo físico y agregarle objetos.

  //3.Bodies se utilizan para crear los objetos físicos que habitan el mundo


var engine, world;
var ground, ball;

function setup() {

  var Canvas = createCanvas(400,400);

 //4. creación del motor fisico, lo que hace que se cree un mundo nuevo
 

  var ground_options ={
    isStatic: true
  }


  // creamos el suelo y lo agregamos al mundo
  

  // Propiedades fisicas de la pelota para rebote



// creamos una pelota(ellipse) y la agregamos a mundo


 console.log(ground)
}

function draw() {
  background(0);  

  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  //Cambiamos el ellipseMode a RADIUS.
  ellipseMode();
  //dibujamos la ellipse
 
 
  drawSprites();
}