const POKEMON_API = "http://127.0.0.1:8000/pokemon/poke";
// get pokemon list ->get the first 151 pokemon
export  async function getPokemonList(){
    const response = await fetch(POKEMON_API);
    const data = await response.json();
    return data.results;
}

export async function getPokemon(name: string) {
    const response = await fetch(POKEMON_API + "/" + name);
    const data = await response.json()
    return data;
}
// getpokemon -> given a string "pikachu", get the information of pikachu