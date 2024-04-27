import { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";
import { motion } from "framer-motion";
import StaticPokeHero from "~/components/StaticPokeHero";

export default function PokeListSearch() {
  const [pokemon, setPokemon] = useState([]);
  const [cardOpen, setCardOpen] = useState(false);
  const [selectedId, setSelectedId] = useState();
  const [nameSearch, setNameSearch] = useState("");

  //handles pokemon search

  function handleNameSearch() {
    if (nameSearch) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${nameSearch}`
          );
          const data = await response.json();
          let newPokemonData = [];
          const newPokemon = {
            name: data.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`,
            url: data.url,
            id: data.id,
          };
          newPokemonData.push(newPokemon);
          setPokemon(newPokemonData);
        } catch (error) {
          alert("Your search did not yield any results!");
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

  return (
    <div className="flex flex-col items-center bg-pokemon-dark-blue min-h-[100svh] pixel-font pt-[100px]">
      <div className="flex flex-col items-center">
        <h2 className="text-white mt-10 mb-10 text-5xl text-center">
          Search Pokemon by name or ID
        </h2>
        <div className="flex gap-5">
          <input
            type="text"
            value={nameSearch}
            onChange={(e) => {
              setNameSearch(e.target.value);
            }}
            className="px-5 py-3 rounded-[40px] text-xl"
          />
          <button
            onClick={handleNameSearch}
            className="text-white text-2xl bg-pokemon-blue px-5 py-3 rounded-[40px]"
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex justify-center gap-10 max-w-[800px] mx-auto justify-items-center py-20 px-10">
        {pokemon.map(({ name, url, image, id }, index) => (
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
