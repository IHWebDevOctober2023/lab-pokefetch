console.log("JS file is working");

function fetchPokemon(url, name) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            const pokemon = data;
            const pokemonLi = document.querySelector(`#${name}`);
            pokemonLi.innerHTML += `<img class="poke-image" src="${pokemon.sprites.front_default}">`;
        })
        .catch((error) => console.log(error));
}

fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const pokemon = data.results;
        const pokemonList = document.querySelector("#poke-list");
        pokemon.forEach((p) => {
            pokemonList.innerHTML += `<li id=${p.name}><h2>${p.name}</h2></li>`;
            fetchPokemon(p.url, p.name);
        });
    })
    .catch((error) => console.log(error));
