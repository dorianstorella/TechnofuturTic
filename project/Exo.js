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
}


const input = prompt("donne moi une chaine de caractere")
const numberInput = parseInt(input)

if(isNaN(numberInput)){
    const firstLetter = input.charAt(0).toUpperCase()
    const reste = input.slice(1).toLowerCase()

    console.log(firstLetter.concat(reste))
} else {
    console.log("couzs n'avez pas inserer votre nom")
}


switch (true) {
    case a ==="bonjour":
        console.log("hello")
        break
    case false:
        console.log("hey")
        break
    default:
        console.log("bouh")
        break
}*/



//let nbrParticipant = prompt("combient y a t'il de paticipant ?")
//console.log(nbrParticipant);

//const nomParticipant = new Array();
/*
for (let i = 0; i < nbrParticipant; i++) {
    const nom = prompt(`quel est son nom  ${i+1}?`);
    //console.log(nom);
    nomParticipant.push(nom);
}


let i = 0 
while (i< nbrParticipant) {
    const nom = prompt(`quel est son nom  ${i+1}?`)
    nomParticipant.push(nom)
    i++
}


let fini = false
while (!fini) {
    const nom = prompt(`quel est son nom ?`)
    nomParticipant.push(nom)

    if (nomParticipant.length >= nbrParticipant) {
        fini = true
    }

}
console.log(nomParticipant);*/

// const alpha = Math.floor(Math.random()*(20))
// console.log(alpha);


// let ajouteA = "A"
// let ecritA = ""
// let i = 0

// while (i < alpha){
//     ecritA = ecritA.concat(ajouteA)
//     console.log(ecritA)
//     i++
// }


/*const beta = Math.floor(Math.random()*(21-18)+18)
console.log(beta)*/

// const alpha = Math.floor(Math.random()*(20))
// console.log(alpha)

// let i = false


// while (i === false) {
//     reponseNbr = prompt("quel est ton chiffre ?")
//     if (reponseNbr < alpha) {
//         console.log("votre nombre est trop petit")
//     } 
//     else if (reponseNbr > alpha) {
//         console.log("votre nombre est trop grand")
//     } 
//     else {
//         i = true
//         console.log("BRAVO")
//     }
// }
 

// const date = new Date();
// console.log(date)

// const dateWeek = new Date('November 13, 2021');
// let day = date.getDay()
// let dayWeek = dateWeek.getDay()
// console.log(day);

// const question = new Date(prompt("donne une date"))
// let quest = question.getDay()
// console.log(question);

//     switch (date) {
//         case 1:
//             console.log("lundi")
//             break
//         case 2:
//             console.log("mardi")
//             break
//         case 3:
//             console.log("mercredi")
//             break
//         case 4:
//             console.log("jeudi")
//             break
//         case 5:
//             console.log("vendredi")
//             break
//         default :
//         console.log("week-end !");
//             break
//     }



// const bonjour = function(message, ...i){
//    for (element of i){
//        console.log(element)
//    }
// }
// console.log(bonjour("bonjour","aurevoir",4,5))

//funstion inverse chaine de caractere

// function reverseString(str) {
   
//     let newString = "";
 

//     for (let i = str.length - 1; i >= 0; i--) { 
//         newString += str[i]; // newString = newString + str[i];

//     }
   
//     return newString;
// }
//console.log(reverseString('hello')); 

// const palindrome = function(str) {
    
//     if (str === reverseString(str)){
//         return true
//     }else {
//         return false;
//     }
// }



// const word = ['semames', 'dorian', 'marcel', 
//                 'shahs', 'serres', 'non','oui', "ioui"]

// const testing =function(word){
//     word.forEach(element =>console.log(palindrome(element)))
// }


// testing(word)




// function reverse(str) {
    //    newstring = str.split('').reverse().join('')
    //    return newstring
    // }
    // console.log(reverse("hello"));

// function reverse(str) {
//      i = 1
//      let news = ""
//      let comp = str.length

//          while (i < comp) {
            
            
//             news = news + str.slice(comp-1)
            
//             return news
        
//         }
    
// }
// console.log(reverse("hello"));

// const clockHtml = document.getElementById("time")

// function displayTime () {
//     const date = new Date()

//     clockHtml.innerText =  date.toLocaleTimeString() 
    
    
// }
// setInterval(displayTime,200)

// const clock = document.getElementById("ti")

// function display () {
//     const date = new Date()

//     clock.innerText =  date.toLocaleTimeString() 
    
   
// }
// setTimeout(display,200)

const btnPlus = document.getElementById("btnPlus")
const btnMoin = document.getElementById("btnMoin")

const inputMoin = document.getElementById("inputMoin")
const inputPlus = document.getElementById("inputPlus")
const nbr = document.getElementById("nbr")

btnMoin.addEventListener("click" , () => {
    nbr.innerText = parseInt(nbr.innerText) - parseInt(inputMoin.value)
})

btnPlus.addEventListener("click" , () => {
    nbr.innerText= parseInt(nbr.innerText) + parseInt(inputPlus.value)
})


