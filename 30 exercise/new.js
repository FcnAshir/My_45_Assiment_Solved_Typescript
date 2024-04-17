"use strict";
let users = ["Muddasir", "Ahtesham", "Admin", "Covalent", "Noman"];
for (let user of users) {
    if (user === 'Admin') {
        console.log("Hello Admin,would you like see a status report");
    }
    else {
        console.log(`Hello ${user},thank you for longing in again`);
    }
}
