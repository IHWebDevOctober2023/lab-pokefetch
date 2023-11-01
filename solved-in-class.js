fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((response) => response.json())
    .then((data) => {
        console.log(data.results);
        const pokemonArray = data.results;
        const pokemonList = document.querySelector("#poke-list");
        pokemonArray.forEach((p) => {

            fetch(p.url)
                .then((response) => {
                    return response.json()
                })
                .then((pokemonData) => {
                    const imageURL = pokemonData.sprites.other.dream_world.front_default;
                    pokemonList.innerHTML += `
                    <li id=${p.name}>
                     <h2>${p.name}</h2>
                     <img class="poke-image" src=${imageURL}>
                    </li>`;
                })
                .catch((error)=> console.log(error))
                
        });
    })
    .catch((error) => console.log(error));
