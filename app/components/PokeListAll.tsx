import { useEffect, useState } from "react"
import PokemonCard from "./PokemonCard";
import { motion } from "framer-motion";
import Pagination from "~/atoms/pagination";


export default function PokeListAll() {
    const [pokemon, setPokemon] = useState([]);
    const [cardOpen, setCardOpen] = useState(false);
    const [selectedId, setSelectedId] = useState();
    //selected page is in increments of 100. 0 is page 1, 100 is page 2, etc.
    const [selectedPage, setSelectedPage] = useState(0)

    //Default which searches all pokemon if no search is typed
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(
              `https://pokeapi.co/api/v2/pokemon?offset=${selectedPage}&limit=100`
            );
            const data = await response.json();
            let newPokemonData:any = [];
            data.results.forEach((pokeman:any) => {
              const urlBreakdown = pokeman.url.split("/");
              const extractedId = urlBreakdown[6];
              const newPokemon = {
                name: pokeman.name,
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${extractedId}.png`,
                url: pokeman.url,
                id: extractedId,
              }
              newPokemonData.push(newPokemon);
            })
            setPokemon(newPokemonData);
          }
          catch(error) {
            console.log("Uh oh, something went wrong!");
          }
        };
        fetchData();
    }, [selectedPage]);

      //Opens card for selected pokemon
      function handleSelectedPokemon(id:any) {
        setCardOpen(true);
        setSelectedId(id);
      }

    return (
        <div className="flex flex-col items-center pixel-font default-py default-px">
            <Pagination selectedPage = {selectedPage} setSelectedPage = {setSelectedPage} />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10 max-w-[800px] mx-auto justify-items-center">
                {pokemon.map(({name, url, image, id, sprites}, index) => (
                    <motion.div className="cursor-pointer bg-pokemon-blue flex flex-col items-center justify-center p-3 md:p-5 w-[150px] md:w-[200px] h-[150px] md:h-[200px] rounded shadow-2xl border border-pokemon-yellow" key={id} onClick={() => handleSelectedPokemon(id)}
                    initial={{opacity: 0}}
                    transition={{opacity: {duration: 1}}}
                    animate={{opacity: 1}}
                    whileHover={{scale: 1.1}}>
                      <img src={image} alt={`${name} image`} className="w-[75px] md:w-[100px]" />
                      <p className="text-xl capitalize">{name}</p>
                      <p className="text-xl">#{id}</p>
                    </motion.div>
                ))}
            </div>
            {cardOpen && (
              <PokemonCard cardOpen={cardOpen} setCardOpen={setCardOpen} id={selectedId}  />
            )}
        </div>
    )
}