const fetchPokemon = () => {
    
    const pokeNameInput = document.getElementById("pokeName");
    let pokeNameOut = document.getElementById("name");
    let pokeTypesOut = document.getElementById("type");
    let pokeMoveOut = document.getElementById("move");

    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./noencontrado.jpg")
        }
        else {
            console.log(res);
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);

            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);

            pokeNameOut.innerHTML = "Pokemon: " + data.species.name;
            pokeTypesOut.innerHTML = "Type: " + data.types[0].type.name;
            document.getElementById("hp").innerHTML = 'hp ' + data.stats[0].base_stat;
            document.getElementById("attack").innerHTML = "attack " + data.stats[1].base_stat;
            document.getElementById("defense").innerHTML = "defense " + data.stats[2].base_stat;
            document.getElementById("special-attack").innerHTML = "special-attack " + data.stats[3].base_stat;
            document.getElementById("special-defense").innerHTML = "special-defense " + data.stats[4].base_stat;
            document.getElementById("speed").innerHTML = "speed " + data.stats[5].base_stat;
            
            for(i = 0; i <= data.moves.length ; i++)
            {

                document.getElementById("move").innerHTML += data.moves[i].move.name + "<br>";
         }
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}