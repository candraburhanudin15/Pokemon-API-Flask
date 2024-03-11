'use client';

import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { PokemonCard } from "./pokemon-card";

// <pokemonGrid pokemonList={data} />
interface PokemonGridProps {
    pokemonList :any
}

export function PokemonGrid({pokemonList}: PokemonGridProps) {
    const [ searchText, setsearchText  ] = useState("");
    //filter the text
    const searchFilter = (pokemonList: any) => {
        return pokemonList.filter(
            (pokemon: any) => pokemon.name.toLowerCase().includes(searchText.toLowerCase())
        )
    }

    //save the filltered array of object
    const filteredPokemonList = searchFilter(pokemonList)
    //show the filttered array to use

    return (
        <>
        <div className="lg:w-full max-w-5xl text-left mt-6">
            <div className="grid w-full max-w-sm items-start gap-1.5">
                <Label htmlFor="pokemonName">Pokemon Name</Label>
                <Input 
                    type="text" 
                    value={searchText}
                    autoComplete="off"
                    id="pokemonName"
                    placeholder="Charizard, Pikachu, etc."
                    onChange={(e) => setsearchText(e.target.value)}>

                    </Input>
            </div>
            <h3 className="text-3xl pt-12 pb-6 text-center">Pokemon Collection</h3>
        </div>

        <div className="mb-32 grid text-center lg:max-w-6xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
            {filteredPokemonList.map((pokemon: any ,index: number)=>{
                return(
                    <PokemonCard key={index} name={pokemon.name} />
                )
            })}
        </div>
        </>
    )
}