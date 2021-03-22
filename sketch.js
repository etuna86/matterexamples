// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Body = Matter.Body,
    World = Matter.World,
    Bodies = Matter.Bodies;

// create an engine
var engine = Engine.create();
engine.world.gravity.y = 0;
// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine
});

// create two boxes and a ground
var ball = Bodies.circle(60, 50, 40,{ isStatic: false });
//var ball2 = Bodies.circle(100, 100, 40,{ isStatic: false });
//var ball = Bodies.circle(400, 50, 40,{ isStatic: false });

var racket = Bodies.rectangle(10, 100, 10, 80,{ isStatic: true });
//var racket = Bodies.rectangle(400, 510, 80, 10,{ isStatic: true });

/*
var sling=Matter.Constraint.create({
    pointA:{x:200,y:200},
    bodyB:ball2,
    stiffness:0.5,
});  */

var top = Bodies.rectangle(0, 0, 810, 60, { isStatic: true });
var left = Bodies.rectangle(0, 0, 810, 60, { isStatic: true });
var bottom = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });
var right = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });






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
        Body.rotate( racket, Math.PI/2);
        setTimeout(function(){
        Body.rotate( racket, -( Math.PI/2));
        },100)
        
    }
    
});


// add all of the bodies to the world
World.add(engine.world, [ball, racket, top,left,bottom,right]);

// run the engine
Engine.run(engine);

Render.run(render);