import Link from "next/link"
import Image from "next/image"
// pikachu, -> localhost:3000/pikachu
interface pokemonCardProps{
    name :string
}

// <pokemonCard name="pikachu"

export function PokemonCard({ name } : pokemonCardProps) {
    return(
      <Link href={name} key={name + "Card"}>
      <div className="group rounded-lg border-yellow-400 border-2 px-5 py-4 m-3 transition-all hover:bg-yellow-100/30 hover:border-transparent">
        <div className="flex items-center justify-center mb-3">
          <Image
            src="/pokeball.svg"
            alt="Pokeball Icon"
            width={40}
            height={40}
            priority
          />
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 text-center">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </h2>
      </div>
    </Link>
    ) 
}



