import { useState, useEffect } from "react"


export default function PokemonCard({id, cardOpen, setCardOpen}:any) {
    const [pokemon, setPokemon] = useState<any>();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${id}/`
          );
          const data = await response.json();
          setPokemon(data);
          setLoading(false);
        };
        fetchData();
      }, []);

      const sprite = pokemon?.sprites?.other["official-artwork"]?.front_default;

      const backgroundImage = {
        backgroundImage: 'url(/images/card-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }

      const pokemonHeight = `${pokemon?.height / 10}m`;
      const pokemonWeight = `${pokemon?.weight / 10}kg`;

      console.log(pokemon)

    return(
        <section className="fixed top-0 left-0 w-[100svw] h-[100svh] bg-[rgba(255,255,255,0.5)] text-black z-20">
          {loading && (
            <p className="text-5xl fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">LOADING...</p>
          )}
          {!loading && (
          <div className=" min-h-[600px] min-w-[400px] fixed top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] rounded-xl px-10 py-3 shadow-lg overflow-y-scroll hidden-scrollbar border-[15px] border-pokemon-yellow" style={backgroundImage}>
            <h2 className="capitalize text-xl">{pokemon?.name}</h2>
            <div className="bg-black border-[5px] border-pokemon-dark-yellow mb-1">
              <img src={sprite} className="w-[200px] mx-auto" />
            </div>
            <p className="mx-auto mb-5 text-center">{`NO. ${id} ${pokemon?.types[0].type?.name} Pokemon HT: ${pokemonHeight} WT: ${pokemonWeight}`}</p>
            <h3 className="text-xl font-bold mb-3">Cry</h3>
            {pokemon?.cries && (
              <audio controls className="mb-5 mx-auto">
                <source src={pokemon.cries?.latest} type="audio/ogg" />
              </audio>
            )}
            <div>
              <h3 className="font-bold text-xl mb-3">Types</h3>
              <div className="flex gap-1 justify-center">
                {pokemon?.types.map((item:any, index:any) => (
                  <div key={index}>
                    <img src={`/images/${item.type.name}.png`} className="w-20" alt={`${item.type.name} type logo`} />
                  </div>
                ))}
              </div>
            </div>
            <img onClick={()=>setCardOpen(false)} className="absolute top-2 right-2 cursor-pointer w-5" src="/icons/x-solid.svg" alt="Exit" />
          </div>
          )}
        </section>
    )
}