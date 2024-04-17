// 42.	Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
let magicians :string [] =["Rudara","Dada ji","Shakal","Zoga"];
function make_great(magiciansarry:string[]){
    for( let i=0; i< magiciansarry.length; i++)(
        magicians[i]= "the great" + magiciansarry[i]
    
    )
}
  function show_magicians( magicians:string[]){
    magicians.forEach(Element=>(
        console.log(Element)
    ))
  }
  make_great (magicians);
  make_great (magicians);