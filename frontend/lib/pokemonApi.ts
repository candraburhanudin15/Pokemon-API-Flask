const POKEMON_API = "http://127.0.0.1:8000/pokemon/poke";
export async function getPokemonList() {
    try {
        const response = await fetch(POKEMON_API);
        if (!response.ok) {
            throw new Error('Failed to fetch Pokemon list');
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching Pokemon list:', error);
        return [];
    }
}

export async function getPokemon(name: string) {
    try {
        const response = await fetch(POKEMON_API + "/" + name);
        if (!response.ok) {
            throw new Error('Failed to fetch Pokemon data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching Pokemon data:', error);
        return null;
    }
}
