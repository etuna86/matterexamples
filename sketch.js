// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Body = Matter.Body,
    World = Matter.World,
    Bodies = Matter.Bodies;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine
});

// create two boxes and a ground
var ball = Bodies.circle(100, 50, 40,{ isStatic: true });

var racket = Bodies.rectangle(10, 50, 10, 80,{ isStatic: true });

var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });






// run the renderer



document.addEventListener('keydown', (event) => {
if(event.keyCode==13){
    console.warn("ball", ball.position.x);

}



});


document.addEventListener('keydown', (event) => {
    if(event.key=="ArrowUp"){
        console.warn("racket", racket);
        console.warn("World", World);
        Body.translate( racket, {x:0, y:-10});
    }
    else if(event.key=="ArrowDown"){
        Body.translate( racket, {x:0, y:10});
        console.warn("racket", racket.position.y);
    }
    else if(event.key=="Enter"){
        Body.rotate( racket, Math.PI/6);
        setTimeout(function(){
            Body.rotate( racket, -( Math.PI/6));
        },100)
        
    }
    
});


// add all of the bodies to the world
World.add(engine.world, [ball, racket, ground]);

// run the engine
Engine.run(engine);

Render.run(render);