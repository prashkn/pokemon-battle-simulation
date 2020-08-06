/*let bulbasaur = document.getElementById('bulbasaur');
let charmander = document.getElementById('charmander');
let squirtle = document.getElementById('squirtle');
let butterfree = document.getElementById('butterfree');
let beedrill = document.getElementById('beedrill');
let pidgeotto = document.getElementById('pidgeotto');
let pikachu = document.getElementById('pikachu');
let abra = document.getElementById('abra');
let mew = document.getElementById('mew');
let ponyta = document.getElementById('ponyta');
let mimikyu = document.getElementById('mimikyu');
let litwick = document.getElementById('litwick');
let pancham = document.getElementById('pancham');
let seadra = document.getElementById('seadra');
let cubone = document.getElementById('cubone');
let ditto = document.getElementById('ditto');
let vaporeon = document.getElementById('vaporeon');*/


/* TO DO LIST:
    -*/

let username = document.getElementById("username");
let userAttack1 = document.getElementById("userAttack1");
let userAttack2 = document.getElementById("userAttack2");
let userAttack3 = document.getElementById("userAttack3");
let userhealth = document.getElementById("userhealth");
let enemyname = document.getElementById("enemyName");
let enemytype = document.getElementById("enemytype");
let enemyspeed = document.getElementById("enemyspeed");
let enemystatus = document.getElementById("enemystatus");
let enemyhealth = document.getElementById("enemyhealth");
let currentEnemyHP;
let currentAllyHP;
let randomNumber;
let message = document.getElementById("message");

let currentPokemon = {
}
let randomPokemon = {
}

const ebulbasaur = {
    type: 'grass',
    name: 'Bulbasaur',
    attack1name: 'Vine Whip',
    attack1: 15,
    attack2name: 'Razor Leaf',
    attack2: 10,
    attack3name: 'Tackle',
    attack3: 8,
    health: 100,
    speed: 2,
    status: 'normal',
    frontsrc: "https://img.pokemondb.net/sprites/x-y/normal/bulbasaur.png",
    backsrc: "https://img.pokemondb.net/sprites/diamond-pearl/back-normal/bulbasaur.png"
}
const echarmander = {
    type: 'fire',
    name: 'Charmander',
    attack1: 9,
    attack1name: 'Ember',
    attack2: 5,
    attack2name: 'Scratch',
    attack3: 0,
    attack3name: 'Flamethrower',
    health: 90,
    speed: 3,
    status: 'normal',
    frontsrc: "https://img.pokemondb.net/sprites/x-y/normal/charmander.png",
    backsrc: "https://img.pokemondb.net/sprites/diamond-pearl/back-normal/charmander.png"
}
const esquirtle = {
    type: 'water',
    name: 'Squirtle',
    attack1: 10,
    attack1name: 'Bubble',
    attack2: 20,
    attack2name: 'Aqua Jet',
    attack3: 15,
    attack3name: 'Bubble Beam',
    health: 95,
    speed: 6,
    status: 'normal',
    frontsrc: "https://img.pokemondb.net/sprites/x-y/normal/squirtle.png",
    backsrc: "https://img.pokemondb.net/sprites/diamond-pearl/back-normal/squirtle.png"
}
const ebutterfree = {
    type: 'bug',
    name: 'Butterfree',
    attack1: 10,
    attack1name: 'Bug Bite',
    attack2: 5,
    attack2name: 'Tackle',
    attack3: 15,
    attack3name: 'Stun Spore',
    health: 80,
    speed: 7,
    status: 'normal',
    frontsrc: "https://img.pokemondb.net/sprites/x-y/normal/butterfree-f.png",
    backsrc: "https://img.pokemondb.net/sprites/diamond-pearl/back-normal/butterfree.png"
}
const ebeedrill = {
    type: 'poison',
    name: 'Beedrill',
    attack1: 10,
    attack1name: 'Peck',
    attack2: 16,
    attack2name: 'Poison Jab',
    attack3: 13,
    attack3name: 'Fury Attack',
    health: 85,
    speed: 6.8,
    status: 'normal',
    frontsrc: "https://img.pokemondb.net/sprites/black-white/normal/beedrill.png",
    backsrc: "https://img.pokemondb.net/sprites/diamond-pearl/back-normal/beedrill.png"
}
const epidgeotto = {
    type: 'flying',
    name: 'Pidgeotto',
    attack1: 15,
    attack1name: 'Whirlwind',
    attack2: 20,
    attack2name: 'Air Slash',
    attack3: 8,
    attack3name: 'Wing Attack',
    health: 75,
    speed: 7.2,
    status: 'normal',
    frontsrc: "https://img.pokemondb.net/sprites/black-white/normal/pidgeotto.png",
    backsrc: "https://img.pokemondb.net/sprites/diamond-pearl/back-normal/pidgeotto.png"
}
const epikachu = {
    type: 'eletric',
    name: 'Pikachu',
    attack1: 9,
    attack1name: 'Quick Attack',
    attack2: 13,
    attack2name: 'Thunder Shock',
    attack3: 20,
    attack3name: 'Thunder Wave',
    health: 90,
    speed: 5,
    status: 'normal',
    frontsrc: "https://img.pokemondb.net/sprites/x-y/normal/pikachu-m.png",
    backsrc: "https://img.pokemondb.net/sprites/diamond-pearl/back-normal/pikachu.png"
}
const eabra = {
    type: 'psychic',
    name: 'Abra',
    attack1: 15,
    attack1name: 'Mega Punch',
    attack2: 13,
    attack2name: 'Thunder Shock',
    attack3: 10,
    attack3name: 'Mega Kick',
    health: 80,
    speed: 7.3,
    status: 'normal',
    frontsrc: "https://img.pokemondb.net/sprites/x-y/normal/abra.png",
    backsrc: "https://img.pokemondb.net/sprites/diamond-pearl/back-normal/abra.png"
}
const emew = {
    type: 'psychic',
    name: 'Mew',
    attack1: 25,
    attack1name: 'Ancient Power',
    attack2: 11,
    attack2name: 'Fly',
    attack3: 14,
    attack3: 'Hyper Beam',
    health: 50,
    speed: 5,
    status: 'normal',
    frontsrc: "https://img.pokemondb.net/sprites/x-y/normal/mew.png",
    backsrc: "https://img.pokemondb.net/sprites/diamond-pearl/back-normal/mew.png"
}
const eponyta = {
    type: 'fire',
    name: 'Ponyta',
    attack1: 15,
    attack1name: 'Flame Charge',
    attack2: 10,
    attack2name: 'Fire Spin',
    attack3: 10,
    attack3name: 'Ember',
    health: 88,
    speed: 8,
    status: 'normal',
    frontsrc: "https://img.pokemondb.net/sprites/x-y/normal/ponyta.png",
    backsrc: "https://img.pokemondb.net/sprites/diamond-pearl/back-normal/ponyta.png"
}
const emimikyu = {
    type: 'psychic',
    name: 'Mimikyu',
    attack1: 15,
    attack1name: 'Astonish',
    attack2: 5,
    attack2name: 'Mimic',
    attack3: 20,
    attack3name: 'Shadow Claw',
    health: 70,
    speed: 6.8,
    status: 'normal',
    frontsrc: "https://img.pokemondb.net/sprites/bank/normal/mimikyu-disguised.png",
    backsrc: "https://img.pokemondb.net/sprites/home/normal/mimikyu.png"
}
const elitwick = {
    type: 'psychic',
    name: 'Litwick',
    attack1: 15,
    attack1name: 'Will O Wisp',
    attack2: 20,
    attack2name: 'Night Shade',
    attack3: 10,
    attack3name: 'Ember',
    health: 55,
    speed: 2,
    status: 'normal',
    frontsrc: "https://img.pokemondb.net/sprites/bank/normal/litwick.png",
    backsrc: "https://img.pokemondb.net/sprites/go/normal/litwick.png"
}
const epancham = {
    type: 'fighting',
    name: 'Pancham',
    attack1: 15,
    attack1name: 'Arm Thrust',
    attack2: 15,
    attack2name: 'Circle Throw',
    attack3: 8,
    attack3name: 'Slash',
    health: 100,
    speed: 3.3,
    status: 'normal',
    frontsrc: "https://img.pokemondb.net/sprites/x-y/normal/pancham.png",
    backsrc: "https://img.pokemondb.net/sprites/sun-moon/normal/pancham.png"
}
const eseadra = {
    type: 'water',
    name: 'Seadra',
    attack1: 9,
    attack1name: 'Water Gun',
    attack2: 18,
    attack2name: 'Dragon Pulse',
    attack3: 15,
    attack3name: 'Hydro Pump',
    health: 69,
    speed: 6.8,
    status: 'normal',
    frontsrc: "https://img.pokemondb.net/sprites/x-y/normal/seadra.png",
    backsrc: "https://img.pokemondb.net/sprites/diamond-pearl/back-normal/seadra.png"
}
const ecubone = {
    type: 'ground',
    name: 'Cubone',
    attack1: 13,
    attack1name: 'Mud Slap',
    attack2: 14,
    attack2name: 'False Swipe',
    attack3: 10,
    attack3name: 'Retaliate',
    health: 93,
    speed: 3.8,
    status: 'normal',
    frontsrc: "https://img.pokemondb.net/sprites/x-y/normal/cubone.png",
    backsrc: "https://img.pokemondb.net/sprites/diamond-pearl/back-normal/cubone.png"
}
const editto = {
    type: 'normal',
    name: 'Ditto',
    attack1: 0,
    attack1name: '???',
    attack2: 0,
    attack2name: '???',
    attack3: 0,
    attack3name: '???',
    health: 101,
    speed: 1,
    status: 'normal',
    frontsrc: "https://img.pokemondb.net/sprites/x-y/normal/ditto.png",
    backsrc: "https://img.pokemondb.net/sprites/diamond-pearl/back-normal/ditto.png"
}
const evaporeon = {
    type: 'water',
    name: 'Vaporeon',
    attack1: 10,
    attack1name: 'Tail Whip',
    attack2: 15,
    attack2name: 'Water Gun',
    attack3: 13,
    attack3name: 'Water Pulse',
    health: 88,
    speed: 9,
    status: 'normal',
    frontsrc: "https://img.pokemondb.net/sprites/x-y/normal/vaporeon.png",
    backsrc: "https://img.pokemondb.net/sprites/diamond-pearl/back-normal/vaporeon.png"
}

let pokemonArray = [ebulbasaur, echarmander, esquirtle, ebutterfree, ebeedrill, epidgeotto, epikachu, eabra, emew, eponyta, emimikyu, elitwick, epancham, eseadra, ecubone, editto, evaporeon];

function pickBulbasaur(){
    currentPokemon = ebulbasaur;
    setStats();
    assignEnemyPokemon();
}
function pickCharmander(){
    currentPokemon = echarmander;
    setStats();
    assignEnemyPokemon();
}
function pickSquirtle(){
    currentPokemon = esquirtle;
    setStats();
    assignEnemyPokemon();
}
function pickButterfree(){
    currentPokemon = ebutterfree;
    setStats();
    assignEnemyPokemon();
}
function pickBeedrill(){
    currentPokemon = ebeedrill;
    setStats();
    assignEnemyPokemon();
}
function pickPidgeotto(){
    currentPokemon = epidgeotto;
    setStats();
    assignEnemyPokemon();
}
function pickPikachu(){
    currentPokemon = epikachu;
    setStats();
    assignEnemyPokemon();
}
function pickAbra(){
    currentPokemon = eabra;
    setStats();
    assignEnemyPokemon();
}
function pickMew(){
    currentPokemon = emew;
    setStats();
    assignEnemyPokemon();
}
function pickPonyta(){
    currentPokemon = eponyta;
    setStats();
    assignEnemyPokemon();
}
function pickMimikyu(){
    currentPokemon = emimikyu;
    setStats();
    assignEnemyPokemon();
}
function pickLitwick(){
    currentPokemon = elitwick;
    setStats();
    assignEnemyPokemon();
}
function pickPancham(){
    currentPokemon = epancham;
    setStats();
    assignEnemyPokemon();
}
function pickSeadra(){
    currentPokemon = eseadra;
    setStats();
    assignEnemyPokemon();
}
function pickCubone(){
    currentPokemon = ecubone;
    setStats();
    assignEnemyPokemon();
}
function pickDitto(){
    currentPokemon = editto;
    setStats();
    assignEnemyPokemon();
}
function pickVaporeon(){
    currentPokemon = evaporeon;
    setStats();
    assignEnemyPokemon();
}

function assignEnemyPokemon(){  
    randomPokemon = pokemonArray[Math.floor(Math.random()*pokemonArray.length)];
    enemyname.innerHTML = randomPokemon.name;
    enemyhealth.innerHTML = 'Health: ' + randomPokemon.health;
    enemytype.innerHTML = randomPokemon.type.toUpperCase();
    enemystatus.innerHTML = randomPokemon.status.toUpperCase();
    enemyspeed.innerHTML = 'Speed: ' + randomPokemon.speed;
    document.getElementById('pokemon2').src = randomPokemon.frontsrc;
    alert('Your opponent picked ' + randomPokemon.name + '!');
}

function setStats(){
    document.getElementById('enemyContainer').style.display = "block";
    document.getElementById('userContainer').style.display = "block";
    username.innerHTML = currentPokemon.name;
    userhealth.innerHTML = 'Health: ' + currentPokemon.health;
    userAttack1.innerHTML = currentPokemon.attack1name + ': ' + currentPokemon.attack1;
    userAttack2.innerHTML = currentPokemon.attack2name + ': ' + currentPokemon.attack2;
    userAttack3.innerHTML = currentPokemon.attack3name + ': ' + currentPokemon.attack3;
    document.getElementById('pokemon1').src= currentPokemon.backsrc;
    alert('You picked ' + currentPokemon.name + '!');
}

function setStat(pokemonName){
    for (let o = 0; o < pokemonArray.length; o++){
        if (pokemonName == pokemonArray[o].name){
            currentPokemon = pokemonArray[o];
        }
    }
    readStats();
}

function readStats(){
    alert('Name: ' + currentPokemon.name + '\nType: ' + currentPokemon.type + '\n' + currentPokemon.attack1name + ': ' + currentPokemon.attack1 + '\n' + currentPokemon.attack2name + ': ' + currentPokemon.attack2 + '\n' + currentPokemon.attack3name + ': ' + currentPokemon.attack3 + '\nHealth: ' + currentPokemon.health + '\nSpeed: ' + currentPokemon.speed);
}

//something is definitely broken beyond this point

userAttack1.onclick = () => {
    if (currentPokemon.speed > randomPokemon.speed || currentPokemon.speed === randomPokemon.speed) {
        alert(currentPokemon.name + ' used ' + currentPokemon.attack1name + '! It did ' + currentPokemon.attack1 + ' damage!');
        message.innerHTML = currentPokemon.name + ' used ' + currentPokemon.attack1name + '! It did ' + currentPokemon.attack1 + ' damage!'; //msg
        randomPokemon.health = randomPokemon.health - currentPokemon.attack1; //update health
        enemyhealth.innerHTML = 'Health: ' + randomPokemon.health; //update ui
        ifDead();
        randomMove();
        ifDead();
    } else {
        randomMove();
        ifDead();
        alert(currentPokemon.name + ' used ' + currentPokemon.attack1name + '! It did ' + currentPokemon.attack1 + ' damage!');
        message.innerHTML = currentPokemon.name + ' used ' + currentPokemon.attack1name + '! It did ' + currentPokemon.attack1 + ' damage!'; //msg
        randomPokemon.health = randomPokemon.health - currentPokemon.attack1; //update health
        enemyhealth.innerHTML = 'Health: ' + randomPokemon.health; //update ui
        ifDead();
    }
}


function randomMove() {
    randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber) {
        case 1:
            currentPokemon.health = currentPokemon.health - randomPokemon.attack1;
            alert(randomPokemon.name + ' used ' + randomPokemon.attack1name + '! It did ' + randomPokemon.attack1 + ' damage!');
            message.innerHTML = randomPokemon.name + ' used ' + randomPokemon.attack1name + '! It did ' + randomPokemon.attack1 + ' damage!';
            userhealth.innerHTML = 'Health: ' + currentPokemon.health; break;
        case 2:
            currentPokemon.health = currentPokemon.health - randomPokemon.attack2;
            alert(randomPokemon.name + ' used ' + randomPokemon.attack2name + '! It did ' + randomPokemon.attack2 + ' damage!');
            message.innerHTML = randomPokemon.name + ' used ' + randomPokemon.attack2name + '! It did ' + randomPokemon.attack2 + ' damage!';
            userhealth.innerHTML = 'Health: ' + currentPokemon.health; break;
        case 3:
            currentPokemon.health = currentPokemon.health - randomPokemon.attack3;
            alert(randomPokemon.name + ' used ' + randomPokemon.attack3name + '! It did ' + randomPokemon.attack3 + ' damage!');
            message.innerHTML = randomPokemon.name + ' used ' + randomPokemon.attack3name + '! It did ' + randomPokemon.attack3 + ' damage!';
            userhealth.innerHTML = 'Health: ' + currentPokemon.health; break;
        default:
            alert('huh???? ' + randomPokemon.name + ' missed!');
    }
}

function ifDead(){
    if (currentPokemon.health <= 0) {
        alert(currentPokemon.name + ' has fainted! You lost!');
        message.innerHTML = currentPokemon.name + ' has fainted! You lost!';
        restart();
    } else if (randomPokemon.health <= 0) {
        alert(randomPokemon.name + ' has fainted! You won!!!');
        message.innerHTML = randomPokemon.name + ' has fainted! You won!!!';
        restart();
    }
}

function restart(){
    location.reload();
    return false;
}