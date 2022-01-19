var student, studentImg

function preload(){
 studentImg = loadImage("Assets/student1.png");
 backgroundImg = loadImage("Assets/Background.png"); 
 englishBookImg = loadImage("Assets/englishbook.png");
 mathBookImg = loadImage("Assets/Mathbook.png")
 historyBookImg = loadImage("Assets/historybook.png")
 geographyBookImg = loadImage("Assets/geographyBook.png")
 scienceBookImg = loadImage("Assets/ScienceBook.png")
 startButtonImg = loadImage("Assets/startButton.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  //bg = createSprite(300,200,windowWidth,windowHeight);
  //bg.addImage(backgroundImg)
  //bg.scale = 1

  student = createSprite(750,370, 50, 50);
  student.addImage(studentImg);
  student.scale = 0.9

  englishBook = createSprite(100,0,20,20)
  englishBook.addImage(englishBookImg)
  englishBook.scale = 0.3

  mathBook = createSprite(300,0,20,20)
  mathBook.addImage(mathBookImg)
  mathBook.scale = 0.3

  historyBook = createSprite(500,0,20,20)
  historyBook.addImage(historyBookImg)
  historyBook.scale = 0.3

 geographyBook = createSprite(700,0,20,20)
 geographyBook.addImage(geographyBookImg)
 geographyBook.scale = 0.3

  scienceBook = createSprite(600,0,20,20)
  scienceBook.addImage(scienceBookImg)
  scienceBook.scale = 0.3

  startButton = createSprite(800, 700,200,100);
  startButton.addImage(startButtonImg);
  startButton.scale = 0.2

  student.visible = false;
  englishBook.visible = true;
 mathBook.visible = false;
 historyBook.visible = false;
 geographyBook.visible = false;
  scienceBook.visible = false;



 



  
}

function draw() {
  background(backgroundImg);
  //background("black")
  student.x = mouseX

  drawSprites();
}

function spawn(Books){
  
}