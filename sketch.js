// variables created for the game
var gameState  ="start";
var pc, pc_img 
var bg1 , bs_img
var block1 , block2 , block3, block4
var block5 , block6 , block7, block8
var block9 , block10 , block11, block12
var block13 , block14 , block15, block16
var block17 , block18 , block19, block20
var block21 , block22, block23, block24
var mon1,mon2,mon3 , mon_img 
var brick_img
var enemy , enemy_grp
var caslte_img
var brick_img 
var rState = false
var arrow_img, bow_img
var score = 0
var escaped = 0
var won_img , end_img
var frame , frame_img, frame2 ,frame2_img
var bgm1,bgm2,bgm3

function preload(){
// images and bgms are downloaded here  

bg1 = loadImage ("BGI1.jpg")
mon_img = loadImage ("little monster.png")
mon2_img = loadImage (" monster.png")
pc_img = loadImage ("player.png")
caslte_img = loadImage ("castle.jpg")
bs_img = loadImage ("blackShield.png")
won_img = loadImage("won.jpg")
lost_img = loadImage("lost.png")
arrow_img = loadImage ("arrow_nbg.png")
bow_img = loadImage ("bow_nbg.png")
frame_img = loadImage ("frame.png")
frame2_img = loadImage ("frame2.png")
bgm1 = loadSound ("MSB.mp3")
bgm2 = loadSound ("kick.wav") 
bgm3 = loadSound ("fail.mp3")

}

function setup(){
// canvas for the game
createCanvas(windowWidth,windowHeight);

// the player      
    pc = createSprite (1300,650,60,60)
    pc.visible = false
    pc.addImage ("obstacle",pc_img)
    pc.scale = 0.1

// six monsters are created with riddles

 mon1 = createSprite (600,490,40,40)
 mon1.addImage ("obstacle",mon_img)
   
 mon2 = createSprite (630,143,40,40)
 mon2.addImage ("obstacle",mon_img)
   
 mon3 = createSprite (1300,243,40,40)
 mon3.addImage ("obstacle",mon_img)
 mon3.scale = 0.5
   
 mon4 = createSprite (1032,403,40,40)
 mon4.addImage ("obstacle",mon_img)
 mon4.scale = 0.3

 mon5 = createSprite (424,564,40,40)
 mon5.addImage ("obstacle",mon_img)
 mon5.scale = 0.5

 mon6 = createSprite (438,245,40,40)
 mon6.addImage ("obstacle",mon_img)
 mon6.scale = 0.3

// the blocks are created for the maze  
  block1 = createSprite (windowWidth/2-700,350,10,5000)
  block1.shapeColor = "white"
  block1.visible = false
    
  block2 = createSprite (windowWidth/2+700,350,10,5000)
  block2.shapeColor = "white"
  block2.visible = false

  block3 = createSprite (500,windowHeight/2+500,5000,300)
  block3.shapeColor = "white"
  block3.visible = false

  block4 = createSprite (1230,715,10,500)
  block4.shapeColor = "white"
  block4.visible = false

  block5 = createSprite (1370,315,10,800)
  block5.shapeColor = "white"
  block5.visible = false

  block6 = createSprite (1040,460,390,10)
  block6.shapeColor = "white"
  block6.visible = false

  block7 = createSprite (1040,360,390,10)
  block7.shapeColor = "white"
  block7.visible = false

  block8 = createSprite (1240,240,10,250)
  block8.shapeColor = "white"
  block8.visible = false

  block9 = createSprite (1000,-240,2000,500)
  block9.shapeColor = "white"
  block9.visible = false

  block10 = createSprite (990,120,500,10)
  block10.shapeColor = "white"
  block10.visible = false

  block11 = createSprite (745,310,10,610)
  block11.shapeColor = "white"
  block11.visible = false

  block12 = createSprite (850,540,10,160)
  block12.shapeColor = "white"
  block12.visible = false

  block13 = createSprite (1040,620,390,10)
  block13.shapeColor = "white"
  block13.visible = false

  block14 = createSprite (500,315,10,650)
  block14.shapeColor = "white"
  block14.visible = false

  block15 = createSprite (290,640,430,10)
  block15.shapeColor = "white"
  block15.visible = false

  block16 = createSprite (235,215,325,10)
  block16.shapeColor = "white"
  block16.visible = false

  block17 = createSprite (windowWidth/2-700,560,10,100)
  block17.shapeColor = "pink"
  block17.visible = false

  block18 = createSprite (220,500,300,10)
  block18.shapeColor = "white"
  block18.visible = false

  block19 = createSprite (390,60,10,300)
  block19.shapeColor = "white"
  block19.visible = false

  block20 = createSprite (280,400,200,10)
  block20.shapeColor = "white"
  block20.visible = false

  block21 = createSprite (185,350,10,100)
  block21.shapeColor = "white"
  block21.visible = false

  block22 = createSprite (335,300,315,10)
  block22.shapeColor = "white"
  block22.visible = false

  block23 = createSprite (450,70,50,50)
  block23.shapeColor = "blue"
  block23.visible = false
  block23.addImage("barrier",bs_img)
  block23.scale = 0.3

  block24 = createSprite (635,5,120,10)
  block24.shapeColor = "pink"
  block24.visible = false

  block25 = createSprite (670,599,150,10)
  block25.shapeColor = "white"
  block25.visible = false
    
  block26 = createSprite (570,364,150,10)
  block26.shapeColor = "white"
  block26.visible = false

// sprites are created for the second part of the game
  fightT = createSprite (width/2,height/2)
  fightT.addImage("castle",caslte_img)

  bow = createSprite (750,630)
  bow.addImage ("bows",bow_img)
  bow.scale = 0.4

  edges = createSprite (748,697,5000,10)
  edges.visible = false

  frame = createSprite (1280,100,100,100)
  frame.visible = false
  frame.addImage("frame",frame_img)
  frame.scale =0.75 
  frame2 = createSprite (1280,100,100,100)
  frame2.addImage("frame",frame2_img)
  frame2.scale =0.75 
  frame2.visible = false

// new group is created for maze blocks,arrows and monsters
  block_grp = new Group()
  arrow_grp = new Group ()
  enemy_grp = new Group()

}

function draw(){

if(gameState === "start"){
   background(bg1); 
   //title
    fill("white")
    textSize(90)
    text(" Magic Shop",500,200);

    //story;
    fill ("white")
    textSize(24);
    text("When you feel like disappearing and feel lonely, Magic shop is the place where you can feel happy. ",50,height/2)
    text(" You can open the door of the magic shop I will be here waiting for you. .",50,300)
    text(" But oh no, the magic shop has been invaded by the monsters and asks your help to get it back.",50,420)
    text("Please ENTER to start",width/2-180,height-200);

// Sprites of gameState maze and fight are kept invisble at start    
  mon1.visible = false
  mon2.visible = false
  mon3.visible = false
  mon4.visible = false
  mon5.visible = false
  mon6.visible = false
  bow.visible = false
  fightT.visible = false

// if enter is pressed the game state changes to maze          
if(keyCode === 13){
   gameState ="maze";
  }
    }

// game state is maze
if(gameState === "maze"){
  background("grey");
      
// camera for zooming  
 camera = new Camera (pc.x,pc.y,2)
      
pc.visible = true
fightT.visible = false

block1.visible = true
block2.visible = true 
block3.visible = true 
block4.visible = true 
block5.visible = true
block6.visible = true 
block7.visible = true 
block8.visible = true
block9.visible = true
block10.visible = true 
block11.visible = true 
block12.visible = true 
block13.visible = true
block14.visible = true 
block15.visible = true 
block16.visible = true
block17.visible = true
block18.visible = true
block19.visible = true
block20.visible = true
block21.visible = true
block22.visible = true
block23.visible = true
block24.visible = true
block25.visible = true
block26.visible = true
bow.visible = false
mon1.visible = true
mon2.visible = true
mon3.visible = true
mon4.visible = true
mon5.visible = true
mon6.visible = true

// code to move the player with arrows 
  if(keyDown (RIGHT_ARROW)){
     pc.x = pc.x+5
     }
    
  if(keyDown (LEFT_ARROW)){
     pc.x = pc.x-5
     }
    
  if(keyDown (UP_ARROW)){
     pc.y = pc.y-5
     }
    
  if(keyDown (DOWN_ARROW)){
     pc.y = pc.y+5
     }
    
// if the player is touching the shield then the gameState changes to fight 
     
  if(pc.isTouching (block23)){
     gameState = "fight"
     }

  if (pc.collide(mon1)){
      rState = riddle ()
     }
  
  if (pc.collide(mon2)){
      rState = riddle3 ()
     }

  if (pc.collide(mon3)){
     rState = riddle1 ()
    }

  if (pc.collide(mon4)){
      rState = riddle2 ()
      }

  if (pc.collide(mon5)){
      rState = riddle5 ()
    }

  if (pc.collide(mon6)){
      rState = riddle6 ()
    }

  if(pc.isTouching(block24)){
     pc. x =185
     pc.y =   570
    }
       
   block_grp.add (block1)
   block_grp.add (block2)
   block_grp.add (block3)
   block_grp.add (block4)
   block_grp.add (block5)
   block_grp.add (block6)
   block_grp.add (block7)
   block_grp.add (block8)
   block_grp.add (block9)
   block_grp.add (block10)
   block_grp.add (block11)
   block_grp.add (block12)
   block_grp.add (block13)
   block_grp.add (block14)
   block_grp.add (block15)
   block_grp.add (block16)
   block_grp.add (block17)
   block_grp.add (block18)
   block_grp.add (block19)
   block_grp.add (block20)
   block_grp.add (block21)
   block_grp.add (block22)
   block_grp.add (block23)
   block_grp.add (block24)
   block_grp.add (block25)
   block_grp.add (block26)
   
   pc.collide(block_grp)
       
}
//gameState is fight

    if(gameState === "fight"){
      textSize(50)
      stroke("50")
      fill("white") 
      text ("Monsters ="+score,130,90)
      textSize(50)
      stroke("50")
      fill("white")
      text ("People killed="+ escaped,135,142 )
      bats ()
   

      if (keyDown("space")){
        arrows ()
    }
     block_grp.visible = false
     bow.visible = true
   fightT.visible = true
   pc.destroy ()
   camera = new Camera (pc.x,pc.y)
   
   bow.x = World.mouseX

   if(arrow_grp.isTouching(enemy_grp)){
    enemy_grp.destroyEach()
    arrow_grp.destroyEach()
    score = score+1
}
if(enemy_grp.isTouching(edges)){
  escaped = escaped+1
  enemy_grp.destroyEach()

}


if(escaped === 5) {
  gameState = "end"

}

if(score === 5) {
  gameState = "win"

}


}

if(gameState === "end"){
  bgm3.play ()
  background(lost_img)
  fightT.visible = false
  bow.visible = false
  score = 0
  escaped = 0
  mon1.visible =false
  mon2.visible =false
  mon3.visible =false
  mon4.visible =false
  mon5.visible =false
  mon6.visible =false
  frame.visible = true
  block_grp.visible = false
}

if(gameState === "win"){
  bgm1.play ()
  background(won_img)
  fightT.visible = false
  bow.visible = false
  score = 0
  escaped = 0
  frame2.visible = true
  block_grp.visible = false
  
 
}
    
 drawSprites ()

 



}

function riddle (){
  swal({ title: "Riddle1", text: "What question can you never answer yes to? ?", type : "input", 
  inputPlaceholder : " Type your answer here", confirmButtonText: "Ok",
   closeOnConfirm: false },
    function(inputValue){ if(inputValue == "are you asleep yet?") swal("Correct", "Your way is cleared.", "success"); else {
      swal.showInputError("incorrect Answer!");

    } });
    mon1.destroy ()

    
}

function riddle1 (){
  swal({ title: "Riddle1", text: "I’m tall when I’m young, and I’m short when I’m old. What am I?", type : "input", 
  inputPlaceholder : " Type your answer here", confirmButtonText: "Ok",
   closeOnConfirm: false },
    function(inputValue){ if(inputValue == "candle") swal("Correct", "Your way is cleared.", "success"); else {
      swal.showInputError("incorrect Answer!");

    } });
    mon3.destroy ()

    
}


function riddle2 (){
  swal({ title: "Riddle1", text: "What has many keys but can’t open a single lock?", type : "input", 
  inputPlaceholder : " Type your answer here", confirmButtonText: "Ok",
   closeOnConfirm: false },
    function(inputValue){ if(inputValue == "piano") swal("Correct", "Your way is cleared.", "success"); else {
      swal.showInputError("incorrect Answer!");

    } });
    mon4.destroy ()

    
}

function riddle3 (){
  swal({ title: "Riddle1", text: "What goes up but never comes down ?", type : "input", 
  inputPlaceholder : " Type your answer here", confirmButtonText: "Ok",
   closeOnConfirm: false },
    function(inputValue){ if(inputValue == "age") swal("Correct", "Your way is cleared.", "success"); else {
      swal.showInputError("incorrect Answer!");

    } });
    mon2.destroy ()

    
}

function riddle5 (){
  swal({ title: "Riddle1", text: "Where does today come before yesterday?", type : "input", 
  inputPlaceholder : " Type your answer here", confirmButtonText: "Ok",
   closeOnConfirm: false },
    function(inputValue){ if(inputValue == "dictionary") swal("Correct", "Your way is cleared.", "success"); else {
      swal.showInputError("incorrect Answer!");

    } });
    mon5.destroy ()

    
}

function riddle6 (){
  swal({ title: "Riddle1", text: "What is the end of everything?", type : "input", 
  inputPlaceholder : " Type your answer here", confirmButtonText: "Ok",
   closeOnConfirm: false },
    function(inputValue){ if(inputValue == "g") swal("Correct", "Your way is cleared.", "success"); else {
      swal.showInputError("incorrect Answer!");

    } });
    mon6.destroy ()

    
}

function bats (){
if (frameCount %100 ===0){
  enemy = createSprite (Math.round(random(windowWidth/2-700,windowWidth/2+700)),20)
  enemy.addImage ("bats",mon2_img)
  enemy.scale = 0.3
 enemy.velocityY = 10
   enemy_grp.add(enemy)
    }
}

function arrows (){
  
  arrow = createSprite (50,470)
  arrow.addImage ("arrows",arrow_img)
  arrow.scale = 0.4
  arrow.velocityY = -10
  arrow.x = bow.x
 arrow_grp.add(arrow)
}
