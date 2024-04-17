"use strict";
let personname = 'ashir king';
let lowercase = personname.toLowerCase();
let upercase = personname.toUpperCase();
let titlecase = personname.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).
    toLowerCase()).join(' ');
console.log(lowercase);
console.log(upercase);
console.log(titlecase);
