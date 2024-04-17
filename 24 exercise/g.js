"use strict";
let name1 = "Noor";
let name2 = "NoorAlam";
let name3 = " Syed NoorAlam";
if (name1 == name3) {
    console.log('names are equal');
}
else {
    console.log('names are not equal');
}
if (name1 != name2) {
    console.log('names are equal');
}
else {
    console.log('names are not equal');
}
;
let age1 = 18;
let age2 = 22;
if (age1 == 18) {
    console.log('You are eligibit for vote');
}
;
if (age1 != 22) {
    console.log('You are eligibit for vote to Landhi');
}
;
if (age1 <= age2) {
    console.log('Younger');
}
;
if (age2 >= age1) {
    console.log('Elder');
}
;
if (age1 == 18 && age2 == 22) {
    console.log('person is eligibit for votr');
}
;
if (age1 == 18 || age2 != 22) {
    console.log('person is not eligibit for votr');
}
;
let season = ['Summar', 'Winter', 'Autum', 'Spring'];
if (season.includes("Winter")) {
    console.log("Winter is your season list");
}
;
if (!season.includes("Cool")) {
    console.log("Cool is not your season list");
}
;
