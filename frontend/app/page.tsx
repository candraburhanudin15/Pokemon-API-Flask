import { PokemonGrid } from "@/components/pokemon-grid";
import Image from "next/image";
import { getPokemonList } from "@/lib/pokemonApi";

export default async function Home() {
  //load in data
  const pokemonList = await getPokemonList();
  
  // Text input : filter the pokemon cards under it:
  // Text input -> "use client" we need access to useState to handle the input
  //when text is inputted -> filter throught out current pokemon data
  // ('use client') pokemonGrid -> (Text input, show all card pokemon)

  //we are going to get data for the 151 pokemon from a server components
  //pass the data to pokemongrid

  //1. create pokemongrid
  //2. load data api
  //3. pass in data to pokemonGrid, show all the pokemon from api call.
  return (
      <PokemonGrid pokemonList={pokemonList}/>

  )
}
