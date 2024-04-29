import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import PokeHero from "~/components/PokeHero";

export const meta: MetaFunction = () => {
  return [
    { title: "Pokedex" },
    { name: "description", content: "Welcome to my Pokedex web application! This project was created with Remix, a React Javascript framework." },
  ];
};




export default function Index() {

  return (
    <div className="min-h-[100svh] bg-pokemon-dark-blue">
        <PokeHero />
        <div className="mt-20 flex justify-center">
          <Link to="/home">
            <button className="text-2xl text-white text-center mb-5 md:mb-10 bg-pokemon-blue px-5 py-3 rounded hover:bg-white hover:text-black duration-300 box-shadow">Enter</button>
          </Link>
        </div>
    </div>
  );
}
