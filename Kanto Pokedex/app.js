const container = document.querySelector('.pokedex-container')
const pokedexAmount = 150

const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#f7e1e9',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
}

const typeColors = {
    fire: '#d13737',
    grass: '#4cd137',
    electric: '#fbc531',
    water: '#00a8ff',
    ground: '#e58e26',
    rock: '#4b4b4b',
    fairy: '#f8a5c2',
    poison: '#be2edd',
    bug: '#ff793f',
    dragon: '#2f353e',
    psychic: '#f8a5c2',
    flying: '#2f3542',
    fighting: '#ff6348',
    normal: '#84817a'
}

const mainTypes = Object.keys(colors)

const fetchPokemonsAPI = async () => {
    for (let pokedexID = 1; pokedexID <= pokedexAmount; ++pokedexID)
        await getPokemon(pokedexID)
}

const getPokemon = async (pokeID) => {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokeID}`
    let pokemon = await (await fetch(url)).json()
    createPokedex(pokemon)
}

const createPokedex = (pokemon) => {
    let pokedexContainer = document.createElement('div')
    pokedexContainer.classList.add('pokemon')

    let pokeName = pokemon.name
    let pokeID = pokemon.id.toString().padStart(3, '0')
    let pokeTypes = pokemon.types.map(type => type.type.name)
    let pokeType = mainTypes.find(type => pokeTypes.indexOf(type) > -1)
    let color = colors[pokeType]
    let backgroundColor = typeColors[pokeType]

    pokedexContainer.style.backgroundColor = color

    pokedexContainer.innerHTML =
        `<div class="pokemon__img">
                <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png">
            </div>
            <div class="pokemon__info">
                <span class="pokemon__info-id">#${pokeID}</span>
                <h3 class="pokemon__info-name">${pokeName}</h3>
                <div class="pokemon__info-type" style="background-color: ${backgroundColor}">
                    Type: <span>${pokeType}</span>
                </div>
            </div>
            `

    container.append(pokedexContainer)
}

fetchPokemonsAPI()