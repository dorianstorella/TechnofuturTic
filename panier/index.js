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



const magasin = document.getElementsByClassName("magasin")
let lengthMagasin = magasin.length
let total = document.getElementById("prix_tot").value //+ 1 - 1

for( i=0; i < lengthMagasin ; i++) {
            
    const prix = [magasin[i].childNodes[3]]
        
    const AjoutCart = document.getElementsByTagName("button")[i].addEventListener("click",() => {
       let content =  prix[0]
       content = total+=parseInt(content.textContent)

       totalprix = document.getElementById("prix_tot")
       totalprix.setAttribute("value", content)
    })  
}





