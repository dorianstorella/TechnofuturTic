/*
const annee = prompt("donne moi une annee")

if (isNaN(annee)==true) { 
alert("ce n est pas un nombre")
} else {
   console.log("ok")
}

if ((annee % 4) == 0 && (annee % 100) != 0)  {
    alert("année bixetile")
} else if ((annee % 400) == 0)  {
    alert("anée bixetile")
} else {
    alert("ce n'est pas une annee bixetile")
}



let char = prompt("donne moi une chaine de caractere")

if (!isNaN(char)) {
    alert ("ceci est un nombre")
} else if (char == char.toLowerCase){
        console.log(char)
} else {
    console.log(char + "hey")
}*/


/*const input = prompt("donne moi une chaine de caractere")
const numberInput = parseInt(input)

if(isNaN(numberInput)){
    const firstLetter = input.charAt(0).toUpperCase()
    const reste = input.slice(1).toLowerCase()

    console.log(firstLetter.concat(reste))
} else {
    console.log("couzs n'avez pas inserer votre nom")
}*/

// const functionA = function(str){
    
//     newstr = str.toUpperCase();
   
    
//     //return newstr;
// }
// functionA("dorian");
//  console.log(newstr);
//document.getElementById("demo").innerHTML = functionA("Dorian");


// const myfunction = function( nbrA, nbrB) {
     
//     let values = []
//     nbrA = nbrA*nbrA
//     values.push(nbrA)
    
//     nbrB = nbrB*nbrB
//     values.push(nbrB)
   
//     return  values 
// }

// document.getElementById("demo").innerHTML = myfunction(5,6);
// //myfunction(5,6)

// const some = function(...n){
//     let result=0
//     for (nombre of n){
//         result += nombre
//     }
//     return result
// }
// console.log(some(1, 2 ,3));

//     EX 3

// const type = function(value) {
//    return typeof(value)
// }

// console.log(type(3));
// console.log(type("dorian"));
// console.log(type(true));


// //     EX 4
// myarr=["dorian", 3, "doodod", 4, "6", true, 6, 7]

// const reverseArr = function(arr) {
//     return arr.reverse()
// }
// console.log(reverseArr(myarr));


// // Ex 4 bis
// const reverseArrBis = function(arr){
//     arr.reduceRight(
//         (accumulator, currentValue) => accumulator.concat(currentValue)
//       )
// }
// console.log(reverseArrBis(myarr));





// let i = 0 
// while (i <= nbrParticipant) {
    //     const nom = prompt(`quel est son nom  ${i+1}?`)
    //     nomParticipant.push(nom)
    //     i++
    //}
    
    
    // let fini = false
    // while (!fini) {
        //     const nom = prompt(`quel est son nom ?`)
        //     nomParticipant.push(nom)
        
        //     if (nomParticipant.length >= nbrParticipant) {
            
            //         fini = true
            //     }
            
            // }
            
//let nbrParticipant = prompt("combient y a t'il de paticipants ?")
//console.log(nbrParticipant);

// const nomParticipant = new Array();

// for (let i = 0; i < nbrParticipant; i++) {
//     const nom = prompt(`quel est son nom  ${i+1}?`);
//     //console.log(nom);
//     nomParticipant.push(nom);
    
// }

//let li = document.createElement('li')

//li.innerHTML = "hello"
//document.getElementsByName(ul).appendChild(li)

//document.getElementById('demo').innerText = nomParticipant
//console.log(nomParticipant);

// let ul = document.createElement('ul')
// document.body.appendChild(ul); 
// ul.id = "my-ul"

// let li = document.createElement('li')
// document.getElementById("my-ul").appendChild(li); 

// const cerise = prompt("combien veux tu de cerise")     //1
// const pomme = prompt("combien veux tu de pomme")      //0.5 
// const poire = prompt("combien veux tu de poire")      //0.75

// let prixCerise = cerise * 1
// let prixPomme = pomme * 0.5
// let prixPoire = poire * 0.75

// let prixTotal = prixCerise + prixPoire + prixPomme

// let ul = document.createElement("ul")
// document.body.appendChild(ul)
// ul.id = "my-ul"

// list = document.createElement("li")
// ul.appendChild(list).innerHTML = prixTotal

// prix = document.getElementById("demo").innerText = `
// le prix des cerise est de ${prixCerise}
// le prix des poire est de ${prixPoire}  
// le prix des pomme est de ${prixPomme}
// le prix total est de ${prixTotal}`

