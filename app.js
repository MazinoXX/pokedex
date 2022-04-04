
const pokeName = document.querySelector(".pokeName");
const pokeImag = document.querySelector(".pokePhoto");
const pokestats = document.querySelector(".statsPoke")



const buscar_pokemon = event => {
    event.preventDefault();
    const {value} = event.target.pokemon;
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
        .then(data => data.json())
        .then(response => renderPokemonData(response))
}
const renderPokemonData = data => {
    const sprite = data.sprites.front_default;
    const {ability,types,stats} = data;

    console.log(data);
    pokeName.textContent = data.name;
    pokeImag.setAttribute('src', sprite);
    
    renderPokemonStats(stats);
 
}
const renderPokemonStats = stats => {
    pokestats.innerHTML = '';
    stats.forEach(stat => {
        const statElement = document.createElement("div");
        const statElementName = document.createElement("div");
        const statElementAmount = document.createElement("div");
        statElementName.textContent = stat.stat.name;
        statElementAmount.textContent = stat.base_stat;
        statElement.appendChild(statElementName);
        statElement.appendChild(statElementAmount);
        pokestats.appendChild(statElement);
    });

}
