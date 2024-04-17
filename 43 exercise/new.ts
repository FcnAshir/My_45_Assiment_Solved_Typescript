// 43.	Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name
let magicians: string[] = ["Rudara ", "Dada ji", "Shakal", "Zoga"]
function copyarry(arr: string[]) {
    return [...arr]
}
function make_great(magicianarry: string[]) {
    for (let i = 0; i < magicianarry.length; i++) {
        magicianarry[i] = "the great "   +magicianarry[i]
    }

}
function show_magicians(magition: string[]) {
    magition.forEach(Element => (
        console.log(Element)
    ))
}
const copymagitionarry = copyarry(magicians)
make_great(copymagitionarry)
console.log("This is my original array")
show_magicians(magicians)
console.log("This is my  modified array")
show_magicians(copymagitionarry)