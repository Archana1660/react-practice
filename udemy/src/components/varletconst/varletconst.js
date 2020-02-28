import React from 'react';

const VariablesDiff = () => {
var x = 'number1';
var x = 'number2';
console.log(x);

let y = 'character1';
//can't be define let y = "character"
y = 'character2'; //assinging
console.log(y);

const z = 'character3';
console.log(z);

//block scoping

var fullName = 'Josh Hamedani';

function getName(){
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}
//console.log(firstName);
getName();

return(
    <p>hi</p>
)
}

export {VariablesDiff};