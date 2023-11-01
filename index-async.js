const fetchPokemon = async (url, name) => {
    try {
        const { sprites } = await (await fetch(url)).json(); // destructuring the sprites object from the response
        // the await inside the await fetch() is waiting for the response to be converted to JSON 🤯´
        document.querySelector(`#${name}`).innerHTML += `<img class="poke-image" src="${sprites.other["official-artwork"].front_default}">`;
    } catch (error) {
        console.log(error);
    }
};

const fetchPokemonList = async () => {
    try {
        const { results } = await (await fetch("https://pokeapi.co/api/v2/pokemon/")).json();
        const pokemonList = document.querySelector("#poke-list");
        results.forEach(({ name, url }) => { // destructuring each object in the array
            pokemonList.innerHTML += `<li id=${name}><h2>${name}</h2></li>`;
            fetchPokemon(url, name);
        });
    } catch (error) {
        console.log(error);
    }
};

fetchPokemonList();