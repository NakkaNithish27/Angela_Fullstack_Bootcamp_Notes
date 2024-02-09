var superheroes = require('superheroes');
var supervillains=require('supervillains');

// destination.txt will be created or overwritten by default.
var mySuperHeroName=superheroes.random()
var mySuperVillainName=supervillains.random();
console.log(mySuperHeroName);
console.log(mySuperVillainName);
