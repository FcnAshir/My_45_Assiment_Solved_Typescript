let personname = 'ashir king';


let lowercase:string = personname.toLowerCase();
let upercase:string = personname.toUpperCase();
let titlecase = personname.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).
toLowerCase()).join(' ');
console.log(lowercase);
console.log(upercase);
console.log(titlecase);