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
    - WORK ON POKEMON PAGE TO DISPLAY STATS. CALL THE PICKPOKEMON FUNCTION INSTEAD OF THE STATS FUNCTION AND THEN LIST OUT CURRENT POKEMON STATS.*/
let firstType = document.getElementById("type1");
let firstName = document.getElementById("name1");
let firstStatus = document.getElementById("status1");
let firstHealth = document.getElementById("health1");
let secondType = document.getElementById("type2");
let secondName = document.getElementById("name2");
let secondStatus = document.getElementById("status2");
let secondHealth = document.getElementById("health2");

let currentPokemon = {}

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
    var randomPokemon = pokemonArray[Math.floor(Math.random()*pokemonArray.length)];
    secondName.innerHTML = randomPokemon.name;
    secondHealth.innerHTML = randomPokemon.health;
    secondType.innerHTML = randomPokemon.type.toUpperCase();
    secondStatus.innerHTML = randomPokemon.status.toUpperCase();
    document.getElementById('pokemon2').src = randomPokemon.src;
    alert('Your opponent picked ' + randomPokemon.name + '!');
}

function setStats(){
    firstName.innerHTML = currentPokemon.name;
    firstHealth.innerHTML = currentPokemon.health;
    firstType.innerHTML = currentPokemon.type.toUpperCase();
    firstStatus.innerHTML = currentPokemon.status.toUpperCase();
    document.getElementById('pokemon1').src= currentPokemon.src;
    alert('You picked ' + currentPokemon.name + '!');
}

function myFunction(){
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}