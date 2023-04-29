var arco , flecha,  planodeFundo, bVermelho, bRosa, bVerde ,bAzul ,grupoFlecha, cena,estado;

var imagemArco, imagemFlecha, imagem_balaoVerde, imagem_balaoVermelho, imagem_balaoRosa ,imagem_balaoAzul, imagemdeFundo;

var placar =0;
var vida =5;
function preload(){
  
  imagemdeFundo = loadImage("background0.png");
  
  imagemFlecha = loadImage("arrow0.png");
  imagemArco = loadImage("bow0.png");
  imagem_balaoVermelho = loadImage("red_balloon0.png");
  imagem_balaoVerde = loadImage("green_balloon0.png");
  imagem_balaoRosa = loadImage("pink_balloon0.png");
  imagem_balaoAzul = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);

  estado = "yes"

}

function draw() {
 background(imagemdeFundo);


if(estado=="yes"){
fill("red")
text("Presione 'E' Para Continuar",120,200)
if(keyDown("E")){
jenga()
estado="serve"
}
}
if(estado =="serve"){

fill("red")
text("vida: ",vida,15,20);

var selecionar_balao = Math.round(random(1,4));

if(grupoFlecha.collide(bVermelho)){
bVermelho.destroyEach()
grupoFlecha.destroyEach()
}
if(grupoFlecha.collide(bVerde)){
bVerde.destroyEach()
grupoFlecha.destroyEach()
}
if(grupoFlecha.isTouching(bRosa)){
bRosa.destroyEach()
grupoFlecha.destroyEach()
}
if(grupoFlecha.isTouching(bAzul)){
bAzul.destroyEach()
grupoFlecha.destroyEach()
}

if(selecionar_balao==1){
if(frameCount % 130 == 0){

balaoVermelho()
}
}

if(selecionar_balao==2){
if(frameCount % 170 == 0){

balaoVerde()
}
}

if(selecionar_balao==3){
if(frameCount % 210 == 0){

balaoRosa()
}
if(selecionar_balao==4){
if(frameCount % 260 == 0){

balaoAzul()
}
}

if(keyDown("space")){
if(frameCount % 20 == 0){
criarFlechas()
}
}
if(keyDown("w")){
arco.y +=-7
}
if(keyDown("s")){
arco.y +=7
}

if(bVermelho.x>399){
bVermelho.destroyEach()
vida-=1;
}
if(bAzul.x>399){
bAzul.destroyEach()
vida-=1;
}
if(bVerde.x>399){
bVerde.destroyEach()
vida-=1;
}
if(bRosa.x>399){
bRosa.destroyEach()
vida-=1;
}
}
drawSprites()
}
}

function jenga(){

cena = createSprite(0,0,400,400);
  cena.addImage(imagemdeFundo);
  cena.scale = 2.5
  
  
  arco = createSprite(380,220,20,50);
  arco.addImage(imagemArco); 
  arco.scale = 1;

  vida =5;

   placar = 0  
  
  bVermelho= new Group();
  bVerde= new Group();
  bAzul= new Group();
  bRosa= new Group();
  grupoFlecha= new Group();

  
}

function balaoVermelho() {
  var vermelho = createSprite(0,Math.round(random(20, 370)), 10, 10);
  vermelho.addImage(imagem_balaoVermelho);
  vermelho.velocityX = 3;
  vermelho.lifetime = 150;
  vermelho.scale = 0.1;
  bVermelho.add(vermelho);
}

function balaoAzul() {
  var azul = createSprite(0,Math.round(random(20, 370)), 10, 10);
  azul.addImage(imagem_balaoAzul);
  azul.velocityX = Math.round(random(1,6));
  azul.lifetime = 150;
  azul.scale = 0.1;
  bAzul.add(azul);
}

function balaoVerde() {
  var verde = createSprite(0,Math.round(random(20, 370)), 10, 10);
  verde.addImage(imagem_balaoVerde);
  verde.velocityX =  Math.round(random(1,6));
  verde.lifetime = 150;
  verde.scale = 0.1;
  bVerde.add(verde);
}

function balaoRosa() {
  var rosa = createSprite(0,Math.round(random(20, 370)), 10, 10);
  rosa.addImage(imagem_balaoRosa);
  rosa.velocityX =  Math.round(random(1,6));
  rosa.lifetime = 150;
  rosa.scale = 1
  bRosa.add(rosa);
}


// criando flechas para o arco
 function criarFlechas() {
  var flecha= createSprite(100, 100, 60, 10);
   flecha.debug = false
   flecha.setCollider('circle',-50,0,20)
  flecha.addImage(imagemFlecha);
  flecha.x = 360;
  flecha.y=arco.y;
  flecha.velocityX = -4;
  flecha.lifetime = 100;
  flecha.scale = 0.3;
  grupoFlecha.add(flecha);
   
 }