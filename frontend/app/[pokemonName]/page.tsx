import { PokemonImage } from "@/components/pokemon-image";
import { getPokemon } from "@/lib/pokemonApi";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// pokemonName

// pokemonName = "pikachu" -> show detail pikachu page

export default async function PokemonPage({params}: { params: { pokemonName: string}}) {
    //object destructuring
    const { pokemonName } = params;

    //pikachu
    // get the api data for pikachu
    const pokemonObject = await getPokemon(pokemonName);
    console.log(pokemonObject);
    return(
        <>
            <Card className="mt-6 lg:w-full max-w-5xl">
            <CardHeader>
                <CardTitle>
                #{pokemonObject.order}
                {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
                </CardTitle>
                <CardTitle>
                <Badge variant="destructive">
                    Type: {pokemonObject.types[0].type.name}
                </Badge>{" "}
                </CardTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {/* Kolom Kiri */}
                <div>
                    <div
                    className="m-4"
                    style={{ position: "relative", width: "250px", height: "250px" }}
                    >
                    <PokemonImage
                        image={pokemonObject.sprites.other["dream_world"].front_default}
                        name={pokemonName}
                    />
                    </div>
                </div>

                {/* Kolom Kanan */}
                <div>
                    {/* Container di Kolom Kanan */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {/* Isi Kolom 1 */}
                    <div>
                        <h2>Official Art</h2>
                        <div
                        className="m-4"
                        style={{ position: "relative", width: "100px", height: "100px" }}
                        >
                        <PokemonImage
                            image={
                            pokemonObject.sprites.other["official-artwork"].front_shiny
                            }
                            name={pokemonName}
                        />
                        </div>
                    </div>

                    {/* Isi Kolom 2 */}
                    <div>
                        <h2>Shiny</h2>
                        <div
                        className="m-4"
                        style={{ position: "relative", width: "100px", height: "100px" }}
                        >
                        <PokemonImage
                            image={pokemonObject.sprites.other["home"].front_shiny}
                            name={pokemonName}
                        />
                        </div>
                    </div>
                    <div>
                        <h2>Abilities</h2>
                        <div className="flex">
                        {pokemonObject.abilities.map((statObject: any) => {
                            const abilityName = statObject.ability.name;
                            return (
                            <Badge className="mt-2 mr-3" variant="secondary">
                                {abilityName}
                            </Badge>
                            );
                        })}
                        </div>
                    </div>
                    <div>
                        <h2>Information</h2>
                        <div className="flex">
                        <Badge className="mt-2 mr-3" variant="secondary">
                            W: {pokemonObject.weight} Kg
                        </Badge>
                        <Badge className="mt-2 mr-3" variant="secondary">
                            H: {pokemonObject.height} Cm
                        </Badge>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <CardDescription>
                Pokémon come in all shapes and sizes - there are over 809 different
                species! So where do these cute little creatures come from? Lots of
                places! Some live in the ocean. Others live in the mountains or forests.
                Lots of them live in grassy plains or even deserts.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {/* Isi Kolom 1 */}
                <div>
                    <div className="flex-col">
                    {pokemonObject.stats.map((statObject: any) => {
                        const statName = statObject.stat.name;
                        const statValue = statObject.base_stat;
                        return (
                        <div
                            className="flex items-stretch"
                            style={{ width: "auto" }}
                            key={statName}
                        >
                            <h3 className="p-3 w-1/2">{statName}</h3>
                            <h3 className="p-3 w-1/4">{statValue}</h3>

                            <Progress className="m-auto" value={statValue} />
                        </div>
                        );
                    })}
                    </div>
                </div>
                {/* Isi Kolom 2 */}
                <div className="mr-2">
                    <div>
                        <h2 className="mb-4">Sample Dub 1</h2>
                        <audio className=""controls>
                            <source src={pokemonObject.cries.latest} type="audio/ogg" />
                            Your browser does not support the audio element.
                        </audio>

                        <h2 className="mb-4">Sample Dub 2</h2>
                        <audio controls>
                            <source src={pokemonObject.cries.legacy} type="audio/ogg" />
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                    <div>
                    <Card className="mt-2">
                        <CardTitle>
                            <Badge variant="outline">
                                Poke Review
                            </Badge>{" "}
                        </CardTitle>
                        <Textarea placeholder="Type your message here." />
                        </Card>
                    </div>
                </div>
                </div>
            </CardContent>
            </Card>
        </>
    )
}