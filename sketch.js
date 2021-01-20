var database;

var gameState = 0;
var score = 0;
var playerCount = 0;

var player1, player2;
var allPlayers, players;

var player, form, game;

var fruit, fruit2, fruit3, fruit4;

var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img, back_img, player_img;

var fruitGroup, fruit2Group, fruit3Group, fruit4Group;

var player1score = 0, player2score = 0;


function preload() {

  back_img = loadImage("images/jungle.jpg");

  player_img = loadImage("images/basket2.png");

  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");

}


function setup() {

  createCanvas(1000, 600);

  database = firebase.database();

  game = new Game();

  fruitGroup = new Group();
  fruit2Group = new Group();
  fruit4Group = new Group();
  fruit3Group = new Group();

  game.getState();

  game.start();

}


function draw() {

  background(back_img);

  if (playerCount === 2) {

    game.update(1);

  }

  if (gameState === 1) {

    clear();
    game.play();

  }

  if (gameState === 2) {

    game.end();

  }

}