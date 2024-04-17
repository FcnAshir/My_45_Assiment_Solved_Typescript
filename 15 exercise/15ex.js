"use strict";
let invitation = ['Ashir', 'Ahtesham', 'Hamza', 'Shajahan'];
for (let i = 0; i < invitation.length; i++) {
    console.log('Dear Mr.' + invitation[i] + ',\n\nIt is our to pleasure to invite you in our party.\n\nThank you!\n\n');
}
let absent = 'Ashir';
let newinvitation = 'Covalent bond';
invitation[0] = newinvitation;
for (let i = 0; i < invitation.length; i++) {
    console.log('Dear Mr.' + invitation[i] + ',\n\nIt is our to pleasure to invite you in our party.\n\nThank you!\n\n');
}
console.log(`Mr.${absent}is not coming to the party.`);
