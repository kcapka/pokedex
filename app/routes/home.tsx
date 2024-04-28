import { useEffect, useState } from "react";
import PokemonCard from "~/components/PokemonCard";
import { motion } from "framer-motion";
import Pagination from "~/atoms/pagination";
import { Link } from "@remix-run/react";

export default function PokeListAll() {
  const [pokemon, setPokemon] = useState([]);
  const [cardOpen, setCardOpen] = useState(false);
  const [selectedId, setSelectedId] = useState();
  const [nameSearch, setNameSearch] = useState("");
  const [noResults, setNoResults] = useState(false);
  //selected page is in increments of 100. 0 is page 1, 100 is page 2, etc.
  const [selectedPage, setSelectedPage] = useState(0);
  //showAll is only used to trigger listing of all pokemon. Value has no meaning.
  const [showAll, setShowAll] = useState(true);

  //Default which searches all pokemon if no search is typed
  useEffect(() => {
    setNoResults(false);
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${selectedPage}&limit=100`
        );
        const data = await response.json();
        let newPokemonData: any = [];
        data.results.forEach((pokeman: any) => {
          const urlBreakdown = pokeman.url.split("/");
          const extractedId = urlBreakdown[6];
          const newPokemon = {
            name: pokeman.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${extractedId}.png`,
            url: pokeman.url,
            id: extractedId,
          };
          newPokemonData.push(newPokemon);
        });
        setPokemon(newPokemonData);
      } catch (error) {
        console.log("Uh oh, something went wrong!");
      }
    };
    fetchData();
  }, [selectedPage, showAll]);

  //Below handles search request
  function handleNameSearch() {
    if (nameSearch) {
      setNoResults(false);
      const searchData = nameSearch.toLowerCase();
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${searchData}`
          );
          const data = await response.json();
          let newPokemonData: any = [];
          const newPokemon = {
            name: data.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`,
            url: data.url,
            id: data.id,
          };
          newPokemonData.push(newPokemon);
          setPokemon(newPokemonData);
        } catch (error) {
          setPokemon([]);
          setNoResults(true);
        }
      };
      fetchData();
    } else {
      alert("Please enter a Pokemon to search!");
    }
  }

  //Opens card for selected pokemon
  function handleSelectedPokemon(id: any) {
    setCardOpen(true);
    setSelectedId(id);
  }

  function handleShowAll() {
    //triggers useEffect to fetch all pokemon again
    setShowAll(!showAll);
    setSelectedPage(0);
  }

  return (
    <div className="flex flex-col items-center pixel-font default-py default-px bg-pokemon-dark-blue min-h-[100svh]">
      <img src="/images/logo/logo.png" alt="Pokedex logo" className="mb-20" />
      <div className="flex flex-col items-center">
      <Link to="#pagination">
          <p
            className="text-2xl text-white text-center mb-5 md:mb-10 bg-pokemon-blue px-5 py-3 rounded cursor-pointer hover:bg-white hover:text-black duration-300 box-shadow"
            onClick={handleShowAll}
          >
            Show All Pokemon
          </p>
        </Link>
        <h2 className="text-white mb-5 md:mb-10 text-3xl md:text-5xl text-center">
          Search Pokemon by name or ID
        </h2>
        <div className="flex gap-5 items-center">
          <input
            type="text"
            value={nameSearch}
            onChange={(e) => {
              setNameSearch(e.target.value);
            }}
            className="px-5 py-3 rounded text-xl outline-none"
          />
          <button
            onClick={handleNameSearch}
            className="text-white text-2xl bg-pokemon-blue px-5 py-3 rounded box-shadow hover:bg-white hover:text-black duration-300"
          >
            Search
          </button>
        </div>
      </div>
      {pokemon.length > 1 && (
        <Pagination
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      )}
      {pokemon && (
        <div
          className={`${
            pokemon.length == 1
              ? "flex justify-center"
              : "grid grid-cols-2 md:grid-cols-3 justify-items-center gap-10"
          } max-w-[800px] mx-auto mt-10 md:mt-20`}
        >
          {pokemon.map(({ name, url, image, id, sprites }, index) => (
            <motion.div
              className="cursor-pointer bg-pokemon-blue flex flex-col items-center justify-center p-3 md:p-5 w-[150px] md:w-[200px] h-[150px] md:h-[200px] rounded shadow-2xl border border-pokemon-yellow"
              key={id}
              onClick={() => handleSelectedPokemon(id)}
              initial={{ opacity: 0 }}
              transition={{ opacity: { duration: 1 } }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
            >
              <img
                src={image}
                alt={`${name} image`}
                className="w-[75px] md:w-[100px]"
              />
              <p className="text-xl capitalize">{name}</p>
              <p className="text-xl">#{id}</p>
            </motion.div>
          ))}
        </div>
      )}
      {pokemon.length > 1 && (
        <Pagination
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      )}
      {noResults && (
        <div>
          <p className="text-center text-2xl text-white">Oh no! No results match your search. Try again!</p>
        </div>
      )}
      {cardOpen && (
        <PokemonCard
          cardOpen={cardOpen}
          setCardOpen={setCardOpen}
          id={selectedId}
        />
      )}
    </div>
  );
}
