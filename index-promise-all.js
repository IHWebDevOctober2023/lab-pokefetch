const fetchPokemon = async (url, name) => {
    try {
        const { sprites } = await (await fetch(url)).json();
        document.querySelector(`#${name}`).innerHTML += `<img class="poke-image" src="${sprites.other.home.front_default}">`;
    } catch (error) {
        console.log(error);
    }
};

const fetchPokemonList = async () => {
    try {
        const { results } = await (await fetch("https://pokeapi.co/api/v2/pokemon/")).json();
        const pokemonList = document.querySelector("#poke-list");

        // First, create all list items
        results.forEach(({ name }) => {
            pokemonList.innerHTML += `<li id=${name}><h2>${name}</h2></li>`;
        });

        // Then, fetch all the pokemon images simultaneously and wait for them to complete
        await Promise.all(
            results.map(({ name, url }) => fetchPokemon(url, name))
        );

    } catch (error) {
        console.log(error);
    }
};

fetchPokemonList();
