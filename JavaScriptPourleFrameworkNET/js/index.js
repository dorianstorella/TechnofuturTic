 

const chercher = function chercher(n) {
    
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=898")
    .then(response => response.json())

    .then((pokemon) => {
        
        let rech = document.getElementsByClassName("recherchePokemonNom")
        rech = rech[0].value
            //console.log(rech)

        tabPoke = pokemon.results
           // console.log(tabPoke.length);
        i=0 
        while (i < tabPoke.length){
            if (rech == tabPoke[i].name) {
            //      console.log(tabPoke[i].name)
                let name = tabPoke[i].name 
                console.log(name)
                return name
            }
            i++
            
        } 
    })  
        
}
chercher(n)
const afficher = function afficher() {
    
    
}
afficher()
const typique = function typique() {

}
