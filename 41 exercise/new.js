"use strict";
// 41.	Magicians: Make a array of magician’s names. Pass the array to a //function called show_magicians(), which prints the name of each magician in the array.
let magician = ["Ruddara", "Dada ji ", "Shakal", "Zoga"];
function show_magicians(magician) {
    magician.forEach(Element => {
        console.log(Element);
    });
}
show_magicians(magician);
