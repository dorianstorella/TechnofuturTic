

const chercher = function chercher(n) {
    let name 
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
                 name = tabPoke[i].name 
                
                //return name
            } 
            
            i++
        } 
          console.log(name);
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)

        .then(response => response.json())

        .then((pokemon) => {
            console.log(pokemon);
            //console.log(pokemon.stats[0]);
            base_stat = pokemon.stats[0].base_stat
            effort = pokemon.stats[0].effort
                console.log("stat de base: " +base_stat+" et effort : "+ effort);
            type = pokemon.types[0].type.name
                console.log("il est de type : " + type);
            taille = pokemon.height
                console.log("il est de " + taille + " de hauteur"  );
            pouvoir ="son premier pouvoir est : "+ pokemon.abilities[0].ability.name+" ||| son deuxieme pouvoir est : "+pokemon.abilities[1].ability.name
            console.log(pouvoir);
           
        })
    }) 
   content = document.getElementsByTagName("p").innerText
   console.log(content);
   
}

const afficher = function afficher() {
    chercher()
}
afficher()
const typique = function typique() {

}
