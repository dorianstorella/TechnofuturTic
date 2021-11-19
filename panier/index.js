const chaise = document.getElementById("chaise")
const prixChaise = document.getElementById("prixChaise")

const table = document.getElementById("table")
const prixTable = document.getElementById("prixTable")

const meuble = document.getElementById("meuble")
const prixMeuble = document.getElementById("prixMeuble")

let total = document.getElementById("prix_tot").value + 1 - 1

const addPrixTable = document.getElementById("addTable").addEventListener("click", () => {
    total = (total + parseInt(prixTable.innerHTML))
    totalprix = document.getElementById("prix_tot")
    
    totalprix.setAttribute("value", total)
})
const addPrixChaise = document.getElementById("addChaise").addEventListener("click", () => {
    total = (total + parseInt(prixChaise.innerHTML))
    totalprix = document.getElementById("prix_tot")
    
    totalprix.setAttribute("value", total)
})
const addPrixMeuble = document.getElementById("addMeuble").addEventListener("click", () => {
    total = (total + parseInt(prixMeuble.innerHTML))
    totalprix = document.getElementById("prix_tot")
    
    totalprix.setAttribute("value", total)
})