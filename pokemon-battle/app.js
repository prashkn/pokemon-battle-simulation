let bulbasaur = document.getElementById('bulbasaur');
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
let vaporeon = document.getElementById('vaporeon');

let firstType = document.getElementById("type1");
let firstName = document.getElementById("name1");
let firstStatus = document.getElementById("status1");
let firstHealth = document.getElementById("health1");
let secondType = document.getElementById("type2");
let secondName = document.getElementById("name2");
let secondStatus = document.getElementById("status2");
let secondHealth = document.getElementById("health2");

let currentPokemon = {
    
}

const ebulbasaur = {
    type: 'grass',
    name: 'Bulbasaur',
    attack1: 0,
    attack2: 0,
    attack3: 0,
    health: 100,
    speed: 2,
    status: 'normal',
    src: "https://img.pokemondb.net/sprites/home/normal/bulbasaur.png"
};
const echarmander = {
    type: 'fire',
    name: 'Charmander',
    attack1: 0,
    attack2: 0,
    attack3: 0,
    health: 90,
    speed: 3,
    status: 'normal',
    src: "https://img.pokemondb.net/sprites/home/normal/charmander.png"
}
const esquirtle = {
    type: 'water',
    name: 'Squirtle',
    attack1: 0,
    attack2: 0,
    attack3: 0,
    health: 95,
    speed: 6,
    status: 'normal',
    src: "https://img.pokemondb.net/sprites/home/normal/squirtle.png"
}
const ebutterfree = {
    type: 'bug',
    name: 'Butterfree',
    attack1: 0,
    attack2: 0,
    attack3: 0,
    health: 80,
    speed: 7,
    status: 'normal',
    src: "https://img.pokemondb.net/sprites/home/normal/butterfree-f.png"
}
const ebeedrill = {
    type: 'poison',
    name: 'Beedrill',
    attack1: 0,
    attack2: 0,
    attack3: 0,
    health: 85,
    speed: 6.8,
    status: 'normal',
    src: "https://img.pokemondb.net/sprites/home/normal/beedrill.png"
}
const epidgeotto = {
    type: 'flying',
    name: 'Pidgeotto',
    attack1: 0,
    attack2: 0,
    attack3: 0,
    health: 75,
    speed: 7.2,
    status: 'normal',
    src: "https://img.pokemondb.net/sprites/home/normal/pidgeotto.png"
}
const epikachu = {
    type: 'eletric',
    name: 'Pikachu',
    attack1: 0,
    attack2: 0,
    attack3: 0,
    health: 90,
    speed: 5,
    status: 'normal',
    src: "https://img.pokemondb.net/sprites/home/normal/pikachu.png"
}
const eabra = {
    type: 'psychic',
    name: 'Abra',
    attack1: 0,
    attack2: 0,
    attack3: 0,
    health: 80,
    speed: 7.3,
    status: 'normal',
    src: "https://img.pokemondb.net/sprites/home/normal/abra.png"
}
const emew = {
    type: 'psychic',
    name: 'Mew',
    attack1: 0,
    attack2: 0,
    attack3: 0,
    health: 50,
    speed: 5,
    status: 'normal',
    src: "https://img.pokemondb.net/sprites/home/normal/abra.png"
}
const eponyta = {
    type: 'fire',
    name: 'Ponyta',
    attack1: 0,
    attack2: 0,
    attack3: 0,
    health: 88,
    speed: 8,
    status: 'normal',
    src: "https://img.pokemondb.net/sprites/home/normal/abra.png"
}
const emimikyu = {
    type: 'psychic',
    name: 'Mimikyu',
    attack1: 0,
    attack2: 0,
    attack3: 0,
    health: 70,
    speed: 6.8,
    status: 'normal',
    src: "https://img.pokemondb.net/sprites/home/normal/abra.png"
}
const elitwick = {
    type: 'psychic',
    name: 'Abra',
    attack1: 0,
    attack2: 0,
    attack3: 0,
    health: 55,
    speed: 2,
    status: 'normal',
    src: "https://img.pokemondb.net/sprites/home/normal/abra.png"
}
const epancham = {
    type: 'fighting',
    name: 'Pancham',
    attack1: 0,
    attack2: 0,
    attack3: 0,
    health: 100,
    speed: 3.3,
    status: 'normal',
    src: "https://img.pokemondb.net/sprites/home/normal/abra.png"
}
const eseadra = {
    type: 'water',
    name: 'Seadra',
    attack1: 0,
    attack2: 0,
    attack3: 0,
    health: 69,
    speed: 6.8,
    status: 'normal',
    src: "https://img.pokemondb.net/sprites/home/normal/abra.png"
}
const ecubone = {
    type: 'ground',
    name: 'Cubone',
    attack1: 0,
    attack2: 0,
    attack3: 0,
    health: 93,
    speed: 3.8,
    status: 'normal',
    src: "https://img.pokemondb.net/sprites/home/normal/abra.png"
}
const editto = {
    type: 'normal',
    name: 'Ditto',
    attack1: 0,
    attack2: 0,
    attack3: 0,
    health: 101,
    speed: 1,
    status: 'normal',
    src: "https://img.pokemondb.net/sprites/home/normal/abra.png"
}
const evaporeon = {
    type: 'water',
    name: 'Vaporeon',
    attack1: 0,
    attack2: 0,
    attack3: 0,
    health: 88,
    speed: 9,
    status: 'normal',
    src: "https://img.pokemondb.net/sprites/home/normal/abra.png"
}

let pokemonArray = [ebulbasaur, echarmander, esquirtle, ebutterfree, ebeedrill, epidgeotto, epikachu, eabra, emew, eponyta, emimikyu, elitwick, epancham, eseadra, ecubone, editto, evaporeon];


function pickBulbasaur(){
    currentPokemon.name = ebulbasaur.name;
    currentPokemon.health = ebulbasaur.health;
    currentPokemon.type = ebulbasaur.type;
    document.getElementById('pokemon1').src= ebulbasaur.src;
    currentPokemon.status = "normal";
    setStats();
    assignEnemyPokemon();
    document.getElementsByClassName("battleStats").style.visibility = "visible";
}
function pickCharmander(){
    currentPokemon.name = echarmander.name;
    currentPokemon.health = echarmander.health;
    currentPokemon.type = echarmander.type;
    document.getElementById('pokemon1').src= echarmander.src;
    currentPokemon.status = "normal";
    setStats();
    assignEnemyPokemon();
    document.getElementsByClassName("battleStats").style.visibility = "visible";
}
function pickSquirtle(){
    currentPokemon.name = esquirtle.name;
    currentPokemon.health = esquirtle.health;
    currentPokemon.type = esquirtle.type;
    document.getElementById('pokemon1').src= esquirtle.src;
    currentPokemon.status = "normal";
    setStats();
    assignEnemyPokemon();
    document.getElementsByClassName("battleStats").style.visibility = "visible";
}
function pickButterfree(){
    currentPokemon.name = ebutterfree.name;
    currentPokemon.health = ebutterfree.health;
    currentPokemon.type = ebutterfree.type;
    document.getElementById('pokemon1').src= ebutterfree.src;
    currentPokemon.status = "normal";
    setStats();
    assignEnemyPokemon();
    document.getElementsByClassName("battleStats").style.visibility = "visible";
}
function pickBeedrill(){
    currentPokemon.name = ebeedrill.name;
    currentPokemon.health = ebeedrill.health;
    currentPokemon.type = ebeedrill.type;
    document.getElementById('pokemon1').src= ebeedrill.src;
    currentPokemon.status = "normal";
    setStats();
    assignEnemyPokemon();
    document.getElementsByClassName("battleStats").style.visibility = "visible";
}
function pickPidgeotto(){
    currentPokemon.name = epidgeotto.name;
    currentPokemon.health = epidgeotto.health;
    currentPokemon.type = epidgeotto.type;
    document.getElementById('pokemon1').src= epidgeotto.src;
    currentPokemon.status = "normal";
    setStats();
    assignEnemyPokemon();
    document.getElementsByClassName("battleStats").style.visibility = "visible";
}
function pickPikachu(){
    currentPokemon.name = epikachu.name;
    currentPokemon.health = epikachu.health;
    currentPokemon.type = epikachu.type;
    document.getElementById('pokemon1').src= epikachu.src;
    currentPokemon.status = "normal";
    setStats();
    assignEnemyPokemon();
    document.getElementsByClassName("battleStats").style.visibility = "visible";
}
function pickAbra(){
    currentPokemon.name = eabra.name;
    currentPokemon.health = eabra.health;
    currentPokemon.type = eabra.type;
    document.getElementById('pokemon1').src= eabra.src;
    currentPokemon.status = "normal";
    setStats();
    assignEnemyPokemon();
    document.getElementsByClassName("battleStats").style.visibility = "visible";
}
function pickMew(){
    currentPokemon.name = emew.name;
    currentPokemon.health = emew.health;
    currentPokemon.type = emew.type;
    document.getElementById('pokemon1').src= emew.src;
    currentPokemon.status = "normal";
    setStats();
    assignEnemyPokemon();
    document.getElementsByClassName("battleStats").style.visibility = "visible";
}
function pickPonyta(){
    currentPokemon.name = eponyta.name;
    currentPokemon.health = eponyta.health;
    currentPokemon.type = eponyta.type;
    document.getElementById('pokemon1').src= eponyta.src;
    currentPokemon.status = "normal";
    setStats();
    assignEnemyPokemon();
    document.getElementsByClassName("battleStats").style.visibility = "visible";
}
function pickMimikyu(){
    currentPokemon.name = emimikyu.name;
    currentPokemon.health = emimikyu.health;
    currentPokemon.type = emimikyu.type;
    document.getElementById('pokemon1').src= emimikyu.src;
    currentPokemon.status = "normal";
    setStats();
    assignEnemyPokemon();
    document.getElementsByClassName("battleStats").style.visibility = "visible";
}
function pickLitwick(){
    currentPokemon.name = elitwick.name;
    currentPokemon.health = elitwick.health;
    currentPokemon.type = elitwick.type;
    document.getElementById('pokemon1').src= elitwick.src;
    currentPokemon.status = "normal";
    setStats();
    assignEnemyPokemon();
    document.getElementsByClassName("battleStats").style.visibility = "visible";
}
function pickPancham(){
    currentPokemon.name = epancham.name;
    currentPokemon.health = epancham.health;
    currentPokemon.type = epancham.type;
    document.getElementById('pokemon1').src= epancham.src;
    currentPokemon.status = "normal";
    setStats();
    assignEnemyPokemon();
    document.getElementsByClassName("battleStats").style.visibility = "visible";
}
function pickSeadra(){
    currentPokemon.name = eseadra.name;
    currentPokemon.health = eseadra.health;
    currentPokemon.type = eseadra.type;
    document.getElementById('pokemon1').src= eseadra.src;
    currentPokemon.status = "normal";
    setStats();
    assignEnemyPokemon();
    document.getElementsByClassName("battleStats").style.visibility = "visible";
}
function pickCubone(){
    currentPokemon.name = ecubone.name;
    currentPokemon.health = ecubone.health;
    currentPokemon.type = ecubone.type;
    document.getElementById('pokemon1').src= ecubone.src;
    currentPokemon.status = "normal";
    setStats();
    assignEnemyPokemon();
    document.getElementsByClassName("battleStats").style.visibility = "visible";
}
function pickDitto(){
    currentPokemon.name = editto.name;
    currentPokemon.health = editto.health;
    currentPokemon.type = editto.type;
    document.getElementById('pokemon1').src= editto.src;
    currentPokemon.status = "normal";
    setStats();
    assignEnemyPokemon();
    document.getElementsByClassName("battleStats").style.visibility = "visible";
}
function pickVaporeon(){
    currentPokemon.name = evaporeon.name;
    currentPokemon.health = evaporeon.health;
    currentPokemon.type = evaporeon.type;
    document.getElementById('pokemon1').src= evaporeon.src;
    currentPokemon.status = "normal";
    setStats();
    assignEnemyPokemon();
    document.getElementsByClassName("battleStats").style.visibility = "visible";
}

function assignEnemyPokemon(){
    var randomPokemon = pokemonArray[Math.floor(Math.random()*pokemonArray.length)];
    secondName.innerHTML = randomPokemon.name;
    secondHealth.innerHTML = randomPokemon.health;
    secondType.innerHTML = randomPokemon.type.toUpperCase;
    secondStatus.innerHTML = randomPokemon.status.toUpperCase;
    document.getElementById('pokemon2').src = randomPokemon.src;
    alert('Your opponent picked ' + randomPokemon.name + '!');
}

function setStats(){
    firstName.innerHTML = currentPokemon.name;
    firstHealth.innerHTML = currentPokemon.health;
    firstType.innerHTML = currentPokemon.type.toUpperCase();
    firstStatus.innerHTML = currentPokemon.status.toUpperCase();
    alert('You picked ' + currentPokemon.name + '!');
}
