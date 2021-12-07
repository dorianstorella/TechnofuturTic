// const chaise = document.getElementById("chaise")
// const prixChaise = document.getElementById("prixChaise")

// const table = document.getElementById("table")
// const prixTable = document.getElementById("prixTable")

// const meuble = document.getElementById("meuble")
// const prixMeuble = document.getElementById("prixMeuble")

// let total = document.getElementById("prix_tot").value + 1 - 1

// const addPrixTable = document.getElementById("addTable").addEventListener("click", () => {
//     total = (total + parseInt(prixTable.innerHTML))
//     totalprix = document.getElementById("prix_tot")
    
//     totalprix.setAttribute("value", total)
// })
// const addPrixChaise = document.getElementById("addChaise").addEventListener("click", () => {
//     total = (total + parseInt(prixChaise.innerHTML))
//     totalprix = document.getElementById("prix_tot")
    
//     totalprix.setAttribute("value", total)
// })
// const addPrixMeuble = document.getElementById("addMeuble").addEventListener("click", () => {
//     total = (total + parseInt(prixMeuble.innerHTML))
//     totalprix = document.getElementById("prix_tot")
    
//     totalprix.setAttribute("value", total)
// })
fetch("https://pokeapi.co/api/v2/pokemon/26")

    .then(response => response.json())

    .then((pokemon) => {

        console.log(pokemon.stats[0].stat.name)

    })


const magasin = document.getElementById("magasin")
   // console.log(magasin.childNodes);
let lengthMagasin = (magasin.childNodes).length 
    //console.log(lengthMagasin); 
let total = document.getElementById("prix_tot").value + 1 - 1
//console.log(total);
foo = -1
for( let i=1; i < lengthMagasin ; i++) {
    if (i % 2 ==! 0){  
        foo++
        const prix =  (magasin.childNodes[i].childNodes[3])        

        const AjoutCart = document.getElementsByTagName("button")[foo].addEventListener("click",() => {
            let content =  prix
                // console.log(content);
            content = total+=parseInt(prix.textContent)
                // console.log(prix.textContent);
                // console.log(content);
            totalprix = document.getElementById("prix_tot")
            totalprix.setAttribute("value", content)
        })  
    } 
}







