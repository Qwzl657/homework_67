'use strict';

window.addEventListener('load', function () {

    const urlParams = new URLSearchParams(window.location.search);
    const pokemonName = urlParams.get('name');

    const detail = document.getElementById('pokemon-detail');

    if (!pokemonName) {
        detail.innerHTML = '<p>Покемон не выбран</p>';
        return;
    }

    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
        const data = JSON.parse(this.response);

        document.title = data.name;

        const title = document.createElement('h1');
        title.innerHTML = data.name;
        detail.append(title);

        const weight = document.createElement('p');
        weight.innerHTML = 'Вес: ' + data.weight;
        detail.append(weight);

        const abilitiesTitle = document.createElement('h2');
        abilitiesTitle.innerHTML = 'Способности:';
        detail.append(abilitiesTitle);

        for (let i = 0; i < data.abilities.length; i++) {
            const ability = document.createElement('p');
            ability.innerHTML = data.abilities[i].ability.name;
            detail.append(ability);
        }

        const typesTitle = document.createElement('h2');
        typesTitle.innerHTML = 'Типы:';
        detail.append(typesTitle);

        for (let i = 0; i < data.types.length; i++) {
            const type = document.createElement('p');
            type.innerHTML = data.types[i].type.name;
            detail.append(type);
        }
    };

    xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/' + pokemonName);
    xhr.send();

});