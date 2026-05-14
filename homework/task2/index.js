'use strict';

window.addEventListener('load', function () {

    const pokemonList = document.getElementById('pokemon-list');

    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
        const data = JSON.parse(this.response);
        const pokemons = data.results;

        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];

            const link = document.createElement('a');
            link.href = 'pokemon.html?name=' + pokemon.name;
            link.innerHTML = pokemon.name;

            const div = document.createElement('div');
            div.append(link);

            pokemonList.append(div);
        }
    };

    xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon');
    xhr.send();

});