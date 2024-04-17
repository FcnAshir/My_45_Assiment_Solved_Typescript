"use strict";
let personame = "";
personame = prompt('what is your name?') || '';
if (personame !== null && personame !== '') {
    alert(`Hello ${personame},Would You like to leran some pyton today?`);
}
else {
    alert('you have to filled your name!')
}

