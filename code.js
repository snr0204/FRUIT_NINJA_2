var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["76bf470b-616a-4df4-8fb4-9d00069e57a0","92c768d4-9535-4707-a326-a3858792301f","079bbdcb-c7b0-4319-8b50-95e65c031020","f53f9343-31d6-4539-bc3d-ac6f3005879f","7f894736-d3e5-4f2d-8370-ef6d31f9debf","bd8755dc-b977-406a-80ce-26793c629d35","5965eb81-22c7-45ab-ad5f-beb727adc361","4f1d5564-bbe1-459b-9f97-9ec84951e03b"],"propsByKey":{"76bf470b-616a-4df4-8fb4-9d00069e57a0":{"name":"fruit2","sourceUrl":null,"frameSize":{"x":382,"y":307},"frameCount":4,"looping":true,"frameDelay":12,"version":"fCojeV0ONpUh97Vs7ZabmJryyeGfXiE0","loadedFromSource":true,"saved":true,"sourceSize":{"x":764,"y":614},"rootRelativePath":"assets/76bf470b-616a-4df4-8fb4-9d00069e57a0.png"},"92c768d4-9535-4707-a326-a3858792301f":{"name":"fruit3","sourceUrl":null,"frameSize":{"x":206,"y":300},"frameCount":4,"looping":true,"frameDelay":5,"version":"SvpomJnhLzZx9i_2EyikhdGXw4um2ufr","loadedFromSource":true,"saved":true,"sourceSize":{"x":412,"y":600},"rootRelativePath":"assets/92c768d4-9535-4707-a326-a3858792301f.png"},"079bbdcb-c7b0-4319-8b50-95e65c031020":{"name":"fruit1","sourceUrl":null,"frameSize":{"x":272,"y":300},"frameCount":4,"looping":true,"frameDelay":4,"version":"CkWcrxqFGDluUK9wks2.zGDdBE4kj5Ne","loadedFromSource":true,"saved":true,"sourceSize":{"x":544,"y":600},"rootRelativePath":"assets/079bbdcb-c7b0-4319-8b50-95e65c031020.png"},"f53f9343-31d6-4539-bc3d-ac6f3005879f":{"name":"fruit4","sourceUrl":null,"frameSize":{"x":300,"y":296},"frameCount":4,"looping":true,"frameDelay":12,"version":"LMXsA7iO6OJHu0MoN1xfYQ7jfv6VAIPs","loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":592},"rootRelativePath":"assets/f53f9343-31d6-4539-bc3d-ac6f3005879f.png"},"7f894736-d3e5-4f2d-8370-ef6d31f9debf":{"name":"textGameOver_1","sourceUrl":"assets/api/v1/animation-library/gamelab/jlwUdmDfQ.Fl8uZni7e_c3sVaNJCXBYL/category_gameplay/textGameOver.png","frameSize":{"x":412,"y":78},"frameCount":1,"looping":true,"frameDelay":2,"version":"jlwUdmDfQ.Fl8uZni7e_c3sVaNJCXBYL","loadedFromSource":true,"saved":true,"sourceSize":{"x":412,"y":78},"rootRelativePath":"assets/api/v1/animation-library/gamelab/jlwUdmDfQ.Fl8uZni7e_c3sVaNJCXBYL/category_gameplay/textGameOver.png"},"bd8755dc-b977-406a-80ce-26793c629d35":{"name":"bomb","sourceUrl":null,"frameSize":{"x":128,"y":128},"frameCount":3,"looping":true,"frameDelay":12,"version":"0lHztj0r9Ncwm1vPqwKxCJGrxy.4cxq5","loadedFromSource":true,"saved":true,"sourceSize":{"x":256,"y":256},"rootRelativePath":"assets/bd8755dc-b977-406a-80ce-26793c629d35.png"},"5965eb81-22c7-45ab-ad5f-beb727adc361":{"name":"cave_1","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"34oj0hH1T53a2k_PSDle3L3yQGlPNMwQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/5965eb81-22c7-45ab-ad5f-beb727adc361.png"},"4f1d5564-bbe1-459b-9f97-9ec84951e03b":{"name":"sword_silver_1","sourceUrl":null,"frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":12,"version":"WUlPlHM6myCERrpapgIaZw35yh9M5ns0","loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/4f1d5564-bbe1-459b-9f97-9ec84951e03b.png"}}};
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

var background = createSprite(200,200,200,200);
var score = 0;
var aScore = 0;
var speed = 0;
var knife = createSprite(200,200,5,5);
var xvalue = -10;
var randNum = 0;
var bombGroup = createGroup();
var fruitPosition = 250;
var bombPosition = 250;
var gameState = "Play";
var fruitGroup = createGroup();
knife.setAnimation("sword_silver_1");
knife.setCollider("circle",10,-15,40);
textSize(18);
textFont("Georgia");
textStyle(BOLD);

function draw() {
  
 background.setAnimation("cave_1");
  knife.x = World.mouseX;
  knife.y = World.mouseY;
  fruitPosition = round(random(25,300));
  
  if(gameState === "Play"){
    
      spawnFruit();
      spawnBomb();
    
  }
  
  if(fruitGroup.isTouching(knife)){
    
      fruitGroup.destroyEach();
      playSound("assets/category_whoosh/heavy_blade_whoosh_3.mp3");
      score = score+1;
      aScore = 0;
      
  }
  
   if(bombGroup.isTouching(knife) && (gameState === "Play")){
     
      playSound("assets/n .mp3", false);
      var game  = createSprite(200,200,200,200);
      game.setAnimation("textGameOver_1");
      gameState = "END";
      
  }
  
  drawSprites();
  
  text("Score :"+ score,50,50);

}

function spawnFruit(){
  
  if(World.frameCount % 60 === 0) {
    
      if(aScore === 0){
        
        if((score%4 === 0)&& !(score === 0)){
          
          aScore = 1;
          speed = speed + 0.3;
          
        }
        else{
          
          speed = speed + 0;
          
        }
      }
    randNum = round(random(1,2));
    fruitPosition = round(random(10,250));
    
    if(randNum === 1){
      
      xvalue = 410;
      
    }
    else{
      
      xvalue = -10;
      
    }

    var fruit = createSprite(xvalue,fruitPosition,10,10);
    
    if(randNum === 1){
      
      fruit.velocityX = -5-speed;
      
    }
    
    else{
      
      fruit.velocityX = 5+speed;
   
    }
    
    var rand = randomNumber(1,4);
    fruit.setAnimation("fruit" + rand);
    
    fruit.scale = 0.2;
    fruit.lifetime = 70;
    fruitGroup.add(fruit);
  }
  
}



function spawnBomb(){

  if(World.frameCount % 160 === 0) {
     if(aScore === 0){
        if((score% 10 === 0)&& !(score === 0)){
          aScore = 1;
          speed = speed + 0.3;
          console.log(score);
          console.log(speed);
        }
       
        else{
          speed = speed + 0;
        }
      }
    
    randNum = round(random(1));
    if(randNum === 1){
      xvalue = 410;
    }
     else{
    xvalue = -10;
      
    }
    
    var bomb = createSprite(xvalue,bombPosition,10,10);
    bomb.setCollider("circle",10,-15,40);
    bombPosition = round(random(10,250));
    if(randNum === 1){

      bomb.velocityX = -5 - speed;

    }
  
  else {
    bomb.velocityX = 5 + speed;
  }
 
    bomb.setAnimation("bomb");
    bomb.scale = 0.7;
    bomb.lifetime = 70;
    bombGroup.add(bomb);
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
