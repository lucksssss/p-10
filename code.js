var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var estado = "inicio" ;

var pontuacao = 0 ;

var bola = createSprite(200,270,15,15);
bola.shapeColor = "black";

var caixa1 = createSprite(25,50+25, 50, 50);
caixa1.shapeColor = "red";

var caixa2 = createSprite(50+25,50+25, 50, 50);
caixa2.shapeColor = "blue";

var caixa3 = createSprite(50*2+25,50+25, 50, 50);
caixa3.shapeColor = "red";

var caixa4 = createSprite(50*3+25,50+25, 50, 50);
caixa4.shapeColor = "blue";

var caixa5 = createSprite(50*4+25,50+25, 50, 50);
caixa5.shapeColor = "red";

var caixa6 = createSprite(50*5+25,50+25, 50, 50);
caixa6.shapeColor = "blue";

var caixa7 = createSprite(50*6+25,50+25, 50, 50);
caixa7.shapeColor = "red";

var caixa8 = createSprite(50*7+25,50+25, 50, 50);
caixa8.shapeColor = "blue";


var caixa9 = createSprite(25,50*2+25, 50, 50);
caixa9.shapeColor = "blue";

var caixa10 = createSprite(50+25,50*2+25, 50, 50);
caixa10.shapeColor = "red";

var caixa11 = createSprite(50*2+25,50*2+25, 50, 50);
caixa11.shapeColor = "blue";

var caixa12 = createSprite(50*3+25,50*2+25, 50, 50);
caixa12.shapeColor = "red";

var caixa13 = createSprite(50*4+25,50*2+25, 50, 50);
caixa13.shapeColor = "blue";

var caixa14 = createSprite(50*5+25,50*2+25, 50, 50);
caixa14.shapeColor = "red";

var caixa15 = createSprite(50*6+25,50*2+25, 50, 50);
caixa15.shapeColor = "blue";

var caixa16 = createSprite(50*7+25,50*2+25, 50, 50);
caixa16.shapeColor = "red";

var raquete = createSprite(200,360,80,15);
raquete.shapeColor = "black";

createEdgeSprites();


function draw() {
  background("white");
  if (estado==="ganhar"){
    textAlign(CENTER, TOP);
    textSize(12);
    fill("black");
    text("você ganhou você não fez mais do que sua obrigação", 200, 200);
    bola.velocityX = 0;   
    bola.velocityY = 0; 
  }
  if (estado==="perder"){
    textSize(30);
    textAlign(CENTER, TOP);
    fill("black");
    text("voce perdeu, voce é ruim", 200, 200);
  }
     if (bola.bounceOff(raquete)){
    playSound("assets/category_digital/hop.mp3");
  }
  if (pontuacao===16){
  estado = "ganhar";
  }
  if (bola.y>400){
    estado = "perder";
  }
  if (estado==="inicio"){
    bola.velocityX = 0;
    bola.velocityY = 0;
    textAlign(CENTER, TOP);
    textSize(25);
    fill("black");
    text("aperte espaco para iniciar", 200, 200);
    
 }
  textAlign(CENTER, TOP);
  textSize(30);
  fill("black");
  text("pontuação: "+pontuacao, 200, 15);
  if (keyDown("space")){
    bola.velocityX = 5;
    bola.velocityY = 5;
    estado = "jogando";
  }
  drawSprites();
  raquete.x = World.mouseX;
  bola.bounceOff(raquete);
  bola.bounceOff(topEdge);
  bola.bounceOff(leftEdge);
  bola.bounceOff(rightEdge);
  if (bola.bounceOff(caixa1)){
    caixa1.destroy();
    pontuacao = pontuacao+1;
  }
  if (bola.bounceOff(caixa2)){
    caixa2.destroy();
    pontuacao = pontuacao+1;
  }
  if (bola.bounceOff(caixa3)){
    caixa3.destroy();
    pontuacao = pontuacao+1;
  }
  if (bola.bounceOff(caixa4)){
    caixa4.destroy();
    pontuacao = pontuacao+1;
  }
  if (bola.bounceOff(caixa5)){
    caixa5.destroy();
    pontuacao = pontuacao+1;
  }
  if (bola.bounceOff(caixa6)){
    caixa6.destroy();
    pontuacao = pontuacao+1;
  }
  if (bola.bounceOff(caixa7)){
    caixa7.destroy();
    pontuacao = pontuacao+1;
  }
  if (bola.bounceOff(caixa8)){
    caixa8.destroy();
    pontuacao = pontuacao+1;
  }
  if (bola.bounceOff(caixa9)){
    caixa9.destroy();
    pontuacao = pontuacao+1;
  }
  if (bola.bounceOff(caixa10)){
    caixa10.destroy();
    pontuacao = pontuacao+1;
  }
  if (bola.bounceOff(caixa11)){
    caixa11.destroy();
    pontuacao = pontuacao+1;
  }
  if (bola.bounceOff(caixa12)){
    caixa12.destroy();
    pontuacao = pontuacao+1;
  }
  if (bola.bounceOff(caixa13)){
    caixa13.destroy();
    pontuacao = pontuacao+1;
  }
  if (bola.bounceOff(caixa14)){
    caixa14.destroy();
    pontuacao = pontuacao+1;
  }
  if (bola.bounceOff(caixa15)){
    caixa15.destroy();
    pontuacao = pontuacao+1;
  }
  if (bola.bounceOff(caixa16)){
    caixa16.destroy();
    pontuacao = pontuacao+1;
  }

}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
