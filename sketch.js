navigator.geolocation.getCurrentPosition(getposition);// on récupère la position gps de l'utilisateur 

let myMap; // on déclare une variable pour notre carte
const mappa = new Mappa('Leaflet'); // on fait appel à la librairie js Leaflet

// variables pour récupérer la position gps de l'utilisateur
var position;
let userLat = 48.856979908267135;
let userLon = 2.3518125544948916
;


let mousePos;

// coordonnées de Paris
let paris_lat = 48.856979908267135;
let paris_lng = 2.3518125544948916;

// coordonnées de notre 1e zone = Chine
let zone1_lat =  48.823143819322794; // latitude
let zone1_lng =  2.36663575925015; //longitude



// coordonnées de notre 2e zone = Inde
let zone2_lat =  48.8707377648027; // latitude
let zone2_lng =  2.37202746255655; //longitude



// coordonnées de notre 3e zone = Liban 
let zone3_lat =  48.85248422058222; // latitude
let zone3_lng =  2.3777823682589103; //longitude


// coordonnées de notre 3e zone = Turquie 
let zone4_lat =  48.87720503360277; // latitude
let zone4_lng =  2.3560521472245455; //longitude


// coordonnées de notre 3e zone = Cote d'ivoire 
let zone5_lat =  48.8890878854371; // latitude
let zone5_lng =   2.358653780207556; //longitude

// coordonnées de notre 3e zone = Grece
let zone6_lat =  48.8797027895067; // latitude
let zone6_lng =    2.3345015995021092; //longitude


// coordonnées de notre 3e zone = italie
let zone7_lat =48.830944322684104; // latitude
let zone7_lng =2.344403842710781; //longitude

// coordonnées de notre 3e zone = Japon 
let zone8_lat = 48.86473248869008; // latitude
let zone8_lng =   2.33368451545971; //longitude


// coordonnées de notre 3e zone = barsile
let zone9_lat = 48.88490045410787; // latitude
let zone9_lng =   2.3043666991535403; //longitude



let initial_lat = 48.856979908267135;// latitude de départ
let initial_lng = 2.3518125544948916;// longitude de départ

// variables pour notre avatar
let avatarLat;
let avatarLng;
let avatarPos;
let avatarPosX;
let avatarPosY;

// Calcul des distances
let distance_paris_avatar;
let distance_source1_avatar;
let distance_zone1_avatar;
let distance_zone2_avatar;
let distance_zone3_avatar;
let distance_zone4_avatar;
let distance_zone5_avatar;
let distance_zone6_avatar;
let distance_zone7_avatar;
let distance_zone8_avatar;
let distance_zone9_avatar;

//audio
let sound1;
let volume_sound1;

let sound2;
let volume_sound2;

let sound3;
let volume_sound3;

let sound4;
let volume_sound4;

let sound5;
let volume_sound5;

let sound6;
let volume_sound6;

let sound7;
let volume_sound7;

let sound8;
let volume_sound8;

let sound9;
let volume_sound9;

// nos image
 let zone1_img; 
 let zone2_img;
 let zone3_img; 
 let zone4_img;
 let zone5_img;
 let zone6_img;
 let zone7_img;
 let zone8_img;
 let zone9_img;

//variable pour le déplacement réaliste de l'avatar
//position initiales de l'avatar
let avatar_easing_lat = initial_lat;
let avatar_easing_lng = initial_lng;
let avatar_target_lat = initial_lat;
let avatar_target_lng = initial_lng;
let easing = 0.05;  //vitesse  du déplassement entre 0 et 1
 

let avatar_img;  


// variables qui vont nous permettre de dessiner les zones
let diametreSource1_lat = 47.199044159443524; 
let diametreSource1_lng = -1.561260223388672; 



function preload() {
sound1 = loadSound('assets/son_chine.mp3');
sound2 = loadSound('assets/son_inde.mp3');
sound3 = loadSound('assets/son_liban.mp3');
sound4 = loadSound('assets/son_turquie.mp3');
sound5 = loadSound('assets/son_afrique.mp3');
sound6 = loadSound('assets/son_grece.mp3');
sound7 = loadSound('assets/son_italie.mp3');
sound8 = loadSound('assets/son_japon.mp3');
sound9 = loadSound('assets/son_bresil.mp3');  
zone1_img = loadImage('assets/chine.png');
zone2_img = loadImage('assets/inde.png');
zone4_img = loadImage('assets/turquie.png');
avatar_img = loadImage('assets/toureffel.png');
zone5_img = loadImage('assets/coteivoire.png');
zone3_img = loadImage('assets/liban.png');
zone6_img = loadImage('assets/grece.png');
zone7_img = loadImage('assets/italie.png');
zone8_img = loadImage('assets/japon.png');
zone9_img = loadImage('assets/bresil.png');
  
}

// c'est ici que on va indiquer la position de d
// Lets put all our map options in a single object
// lat and lng are the starting point for the map.
const options = {
  lat: initial_lat,
  lng: initial_lng,
  zoom: 13,// zoom de départ
  style: "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
}

function setup(){
  canvas = createCanvas(windowWidht,windowHeight); 

  // Create a tile map with the options declared
  myMap = mappa.tileMap(options); 
  myMap.overlay(canvas);
  textAlign(CENTER);
  imageMode(CENTER);
  
} // fin de la fonction setup


function getposition(position) {
  userLat = position.coords.latitude
  userLon = position.coords.longitude
}

function draw(){
    
   // Clear the previous canvas on every frame
  clear();
  
  mousePos = myMap.fromPointToLatLng(mouseX,mouseY);// on convertit la position de la souris en coordonnées gps      
  let paris = myMap.latLngToPixel(47.2040006, -1.5630606); // on convertit la position gps en position XY
  let userPos = myMap.latLngToPixel(userLat, userLon); // idem
  let zone1Pos =   myMap.latLngToPixel(zone1_lat, zone1_lng); // on convertit la position pps vers. une positions XY
   let zone2Pos =   myMap.latLngToPixel(zone2_lat, zone2_lng); // on convertit la position pps vers. une positions XY
let zone3Pos =   myMap.latLngToPixel(zone3_lat, zone3_lng); // on convertit la position pps vers. une positions XY
let zone4Pos =   myMap.latLngToPixel(zone4_lat, zone4_lng); // on convertit la position pps vers. une positions XY
let zone5Pos =   myMap.latLngToPixel(zone5_lat, zone5_lng); // on convertit la position pps vers. une positions XY
let zone6Pos =   myMap.latLngToPixel(zone6_lat, zone6_lng); // on convertit la position pps vers. une positions XY
let zone7Pos =   myMap.latLngToPixel(zone7_lat, zone7_lng); // on convertit la position pps vers. une positions XY
let zone8Pos =   myMap.latLngToPixel(zone8_lat, zone8_lng); // on convertit la position pps vers. une positions XY
let zone9Pos =   myMap.latLngToPixel(zone9_lat, zone9_lng); // on convertit la position pps vers. une positions XY
  
  if(mouseIsPressed){
    avatarPos = myMap.latLngToPixel(mousePos.lat, mousePos.lng); // on récupère la position en pixels de la position gps de l'avatar
    avatarPosX = avatarPos.x;  // on met à jour avatarPosX
    avatarPosY = avatarPos.y; // on met à jour avatarPosY
    avatarLat = mousePos.lat; // on met à jour avatarLat
    avatarLng = mousePos.lng; // on met à jour avatarLng  
    print("mousePos.lat = " + mousePos.lat);    
    print("mousePos.lng = " + mousePos.lng);
    avatar_target_lat = mousePos.lat;
    avatar_target_lng = mousePos.lng

    distance_paris_avatar = abs(paris_lat-avatarLat)+abs(paris_lng-avatarLng);
    print("distance_paris_avatar = " + distance_paris_avatar); 
    
  }// fin de moussePressed
  
  //on calcule en permanence le dépalacement réaliste de l'avatar 
  let dx = avatar_target_lat - avatar_easing_lat;
  avatar_easing_lat += dx * easing;
  
   let dy = avatar_target_lng - avatar_easing_lng;
  avatar_easing_lng += dy * easing;
  
  let avatarEasing = myMap.latLngToPixel(avatar_easing_lat, avatar_easing_lng);
  // fin du calcule 
  
  
  
  
  /*
  if(abs(edna_lat-mousePos.lat)<0.005 && abs(edna_lng-mousePos.lng)<0.005){
    print("l'utilisateur est entré dans la zone de l'EDNA")
  }
  */

  /////////////////////////////
  // EDNA /////////////////////
  /////////////////////////////

  // abs permet de calculer une valeur qui sera toujours positive pour obtenir la distance entre le centre de la zone 1 et la souris 
  if(distance_paris_avatar<0.005){
    print("l'avatar est entré dans la zone de l'paris")
  }
  // si on sort de la zone
  if(distance_paris_avatar>0.005){
    print("l'avatar est sorti de la zone de l'paris")
  }
  
  
  /////////////////////////////
  // ZONE 1 ///////////////////
  /////////////////////////////
  
//calcul de la distance entre l'avatar réaiste (easing) et le centre  des zones
  distance_zone1_avatar = abs(zone1_lat-avatar_easing_lat) + abs(zone1_lng-avatar_easing_lng);

if(distance_zone1_avatar<0.0055705805429455 && !sound1.isPlaying()){
    print("l'avatar est entré dans la zone de l'zone1")
    sound1.play();
     
  //print("l'avatar est entré dans la zone de zone1"
  }
 if(distance_zone1_avatar>0.00525705805429455 && sound1.isPlaying()){
    print("l'avatar est sorti de la zone de l'zone1")
    sound1.stop();
  }
  
   if(distance_zone1_avatar<0.005){
    let volumeSound1 = map(distance_zone1_avatar,0,0.00525705805429455,1,0);
    sound1.amp(volumeSound1);
  }

  /////////////////////////////
  // ZONE 2 ///////////////////
  /////////////////////////////
   distance_zone2_avatar = abs(zone2_lat-avatar_easing_lat) + abs(zone2_lng-avatar_easing_lng);

if(distance_zone2_avatar<0.0055705805429455 && !sound2.isPlaying()){
    print("l'avatar est entré dans la zone de l'zone2")
    sound2.play();
  }
 if(distance_zone2_avatar>0.00525705805429455 && sound2.isPlaying()){
    print("l'avatar est sorti de la zone de l'zone2")
    sound2.stop();
  }
  
   if(distance_zone2_avatar<0.005){
    let volumeSound2 = map(distance_zone2_avatar,0,0.00525705805429455,1,0);
    sound2.amp(volumeSound2);
  }
  
  
  /////////////////////////////
  // ZONE 3 ///////////////////
  /////////////////////////////
  
   distance_zone3_avatar = abs(zone3_lat-avatar_easing_lat) + abs(zone3_lng-avatar_easing_lng);

if(distance_zone3_avatar<0.0055705805429455 && !sound3.isPlaying()){
    print("l'avatar est entré dans la zone de l'zone3")
    sound3.play();
  }
 if(distance_zone3_avatar>0.00525705805429455 && sound3.isPlaying()){
    print("l'avatar est sorti de la zone de l'zone3")
    sound3.stop();
  }
  
   if(distance_zone3_avatar<0.005){
    let volumeSound3 = map(distance_zone3_avatar,0,0.00525705805429455,1,0);
    sound3.amp(volumeSound3);
  }
  

   /////////////////////////////
  // ZONE 4 ///////////////////
  /////////////////////////////
  
   distance_zone4_avatar = abs(zone4_lat-avatar_easing_lat) + abs(zone4_lng-avatar_easing_lng);

if(distance_zone4_avatar<0.0055705805429455 && !sound4.isPlaying()){
    print("l'avatar est entré dans la zone de l'zone4")
    sound4.play();
  }
 if(distance_zone4_avatar>0.00525705805429455 && sound4.isPlaying()){
    print("l'avatar est sorti de la zone de l'zone4")
    sound4.stop();
  }
  
   if(distance_zone4_avatar<0.005){
    let volumeSound4 = map(distance_zone4_avatar,0,0.00525705805429455,1,0);
    sound4.amp(volumeSound4);
  }
  
   /////////////////////////////
  // ZONE 5 ///////////////////
  /////////////////////////////
  
    distance_zone5_avatar = abs(zone5_lat-avatar_easing_lat) + abs(zone5_lng-avatar_easing_lng);

if(distance_zone5_avatar<0.00525705805429455  && !sound5.isPlaying()){
    print("l'avatar est entré dans la zone de l'zone5")
    sound5.play();
  }
 if(distance_zone5_avatar>0.00525705805429455 && sound5.isPlaying()){
    print("l'avatar est sorti de la zone de l'zone5")
    sound5.stop();
  }
  
   if(distance_zone5_avatar<0.005){
    let volumeSound5 = map(distance_zone5_avatar,0,0.00525705805429455,1,0);
    sound5.amp(volumeSound5);
  }
   /////////////////////////////
  // ZONE 5 ///////////////////
  /////////////////////////////
  
      distance_zone6_avatar = abs(zone6_lat-avatar_easing_lat) + abs(zone6_lng-avatar_easing_lng);

if(distance_zone6_avatar<0.00525705805429455  && !sound6.isPlaying()){
    print("l'avatar est entré dans la zone de l'zone6")
    sound6.play();
  }
 if(distance_zone6_avatar>0.00525705805429455 && sound6.isPlaying()){
    print("l'avatar est sorti de la zone de l'zone6")
    sound6.stop();
  }
  
   if(distance_zone6_avatar<0.005){
    let volumeSound6 = map(distance_zone6_avatar,0,0.00525705805429455,1,0);
    sound6.amp(volumeSound6);
  }
  
   /////////////////////////////
  // ZONE 7 ///////////////////
  /////////////////////////////
  
      distance_zone7_avatar = abs(zone7_lat-avatar_easing_lat) + abs(zone7_lng-avatar_easing_lng);

if(distance_zone7_avatar<0.00525705805429455  && !sound7.isPlaying()){
    print("l'avatar est entré dans la zone de l'zone7")
    sound7.play();
  }
 if(distance_zone7_avatar>0.00525705805429455 && sound7.isPlaying()){
    print("l'avatar est sorti de la zone de l'zone7")
    sound7.stop();
  }
  
   if(distance_zone7_avatar<0.005){
    let volumeSound7 = map(distance_zone7_avatar,0,0.00525705805429455,1,0);
    sound7.amp(volumeSound7);
  }
  
  /////////////////////////////
  // ZONE 8 ///////////////////
  /////////////////////////////
  
        distance_zone8_avatar = abs(zone8_lat-avatar_easing_lat) + abs(zone8_lng-avatar_easing_lng);

if(distance_zone8_avatar<0.00525705805429455 && !sound8.isPlaying()){
    print("l'avatar est entré dans la zone de l'zone8")
    sound8.play();
  }
  
 if(distance_zone8_avatar>0.00525705805429455 && sound8.isPlaying()){
    print("l'avatar est sorti de la zone de l'zone8")
    sound8.stop();
  }
  
   if(distance_zone8_avatar<0.005){
    let volumeSound8 = map(distance_zone8_avatar,0,0.00525705805429455,1,0);
    sound8.amp(volumeSound8);
  }
  
  
    /////////////////////////////
  // ZONE 9///////////////////
  /////////////////////////////
  
     distance_zone9_avatar = abs(zone9_lat-avatar_easing_lat) + abs(zone9_lng-avatar_easing_lng);

if(distance_zone9_avatar<0.00525705805429455  && !sound9.isPlaying()){
    print("l'avatar est entré dans la zone de l'zone9")
    sound9.play();
  //print("l'avatar est entré dans la zone de zone1"
  }
 if(distance_zone9_avatar>0.00525705805429455&& sound9.isPlaying()){
    print("l'avatar est sorti de la zone de l'zone9")
    sound9.stop();
  }
  
   if(distance_zone9_avatar<0.005){
    let volumeSound9 = map(distance_zone9_avatar,0,0.00525705805429455,1,0);
    sound9.amp(volumeSound9);
  }
  
  
  // calcule du diamétre des zones
  let  entree_zone = myMap.latLngToPixel(48.82901755447848,2.372531890869141);
  //print("entree_zone.x = " + entree_zone.x);
  let rayon_zone1 = dist(entree_zone.x,entree_zone.y,zone1Pos.x,zone1Pos.y);
  let rayon_zone2 = dist(entree_zone.x,entree_zone.y,zone1Pos.x,zone1Pos.y);
  let rayon_zone3 = dist(entree_zone.x,entree_zone.y,zone1Pos.x,zone1Pos.y);
  let rayon_zone4 = dist(entree_zone.x,entree_zone.y,zone1Pos.x,zone1Pos.y);
  let rayon_zone5 = dist(entree_zone.x,entree_zone.y,zone1Pos.x,zone1Pos.y);
  let rayon_zone6 = dist(entree_zone.x,entree_zone.y,zone1Pos.x,zone1Pos.y);
  let rayon_zone7 = dist(entree_zone.x,entree_zone.y,zone1Pos.x,zone1Pos.y);
  let rayon_zone8 = dist(entree_zone.x,entree_zone.y,zone1Pos.x,zone1Pos.y);
  let rayon_zone9 = dist(entree_zone.x,entree_zone.y,zone1Pos.x,zone1Pos.y);
  
  
  
  
  fill("red");
  text("paris",paris.x, paris.y); // on dessine le centre de la zone 1
  
    image(avatar_img,avatarEasing.x,avatarEasing.y,rayon_zone1,rayon_zone1); // on dessine l'avatar

  
  fill(255,0,0,150);
  image( zone1_img,zone1Pos.x,zone1Pos.y,rayon_zone1*2,rayon_zone1*2);
  fill(0);
  text("Chine",zone1Pos.x,zone1Pos.y);
  
  fill(255,0,0,150);
  image( zone2_img,zone2Pos.x,zone2Pos.y,rayon_zone2*2,rayon_zone2*2);
  fill(0);
  text("Inde",zone2Pos.x,zone2Pos.y);
  
  fill(255,0,0,150);
  image( zone3_img,zone3Pos.x,zone3Pos.y,rayon_zone3*2,rayon_zone3*2);
  fill(0);
  text("Liban",zone3Pos.x,zone3Pos.y);
 
  fill(255,0,0,0);
  image( zone4_img,zone4Pos.x,zone4Pos.y,rayon_zone4*2,rayon_zone4*2);
  fill(0);
  text("Turquie",zone4Pos.x,zone4Pos.y);
  
  fill(255,0,0,150);
  image( zone5_img,zone5Pos.x,zone5Pos.y,rayon_zone5*2,rayon_zone5*2);
  fill(0);
  text("Cote d'Ivoire",zone5Pos.x,zone5Pos.y);
  
  fill(255,0,0,150);
  image( zone6_img,zone6Pos.x,zone6Pos.y,rayon_zone6*2,rayon_zone6*2);
  fill(0);
  text("Grèce",zone6Pos.x,zone6Pos.y);
  
  fill(255,0,0,150);
  image( zone7_img,zone7Pos.x,zone7Pos.y,rayon_zone7*2,rayon_zone7*2);
  fill(0);
  text("Italie",zone7Pos.x,zone7Pos.y);
  
  fill(255,0,0,150);
  image( zone8_img,zone8Pos.x,zone8Pos.y,rayon_zone8*2,rayon_zone8*2);
  fill(0);
  text("Japon",zone8Pos.x,zone8Pos.y);
  
  fill(255,0,0,150);
  image( zone9_img,zone9Pos.x,zone9Pos.y,rayon_zone9*2,rayon_zone9*2);
  fill(0);
  text("Brésil",zone9Pos.x,zone9Pos.y);
  

} // fin de la fonction draw

function keyPressed(){
  
  if(key == 'i'){
    print("distance lat paris-souris = " + abs(edna_lat-mousePos.lat)); 
    print("distance lng paris-souris = " + abs(edna_lng-mousePos.lng));
  }
  
}






