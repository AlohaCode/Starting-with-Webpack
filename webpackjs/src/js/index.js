let dogs = require('./dogs.js');
let $ = require('jquery');

require('../css/styles.css');

$.each(dogs, function(key, value) {
    $('body').append('<h2>' + dogs[key].name + '</h2>');
});

console.log(dogs);