

const chercherParNom = function chercher(n) {
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
                //console.log("stat de base: " +base_stat+" et effort : "+ effort);
            type = pokemon.types[0].type.name
                //console.log("il est de type : " + type);
            taille = pokemon.height
            /*

            */
            
            img = pokemon.sprites.front_default
            console.log(img);

                //console.log("il est de " + taille + " de hauteur"  );
           
  
            document.getElementById("p").innerHTML ="<img src="+img+">" +"<h3>"+name+"</h3><p>stat de base: " +base_stat+"</p> <p>effort : "+ effort + "</p><p>il est de type : " + type+"</p><p>il est de " + taille + " metre de hauteur </p><p> son premier pouvoir est : "+ pokemon.abilities[0].ability.name+" ||| son deuxieme pouvoir est : "+pokemon.abilities[1].ability.name+"</p>"
          

        })
    }) 
  
   
}

const afficher = function afficher() {
    
}
chercherParNom()
const typique = function typique() {

}
