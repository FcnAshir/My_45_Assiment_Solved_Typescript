"use strict";
function creatcar(manufacture, model, optional) {
    return Object.assign({ manufacture,
        model }, optional);
}
const mycar = creatcar("toyota", "Corolla", { color: "silver", year: "2024" });
console.log(mycar);
