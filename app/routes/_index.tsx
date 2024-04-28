import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import PokeHero from "~/components/PokeHero";
import PokeListAll from "~/components/PokeListAll";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Pokedex" },
    { name: "description", content: "Welcome to my Pokedex web application! This project was created with Remix, a React Javascript framework." },
  ];
};

const backgroundGradient = {
  backgroundImage: "linnear-gradient(to bottom, rgba(188,38,26), rgba(235,51,35))",
}



export default function Index() {

  return (
    <div className="min-h-[100svh] bg-pokemon-dark-blue" style={backgroundGradient}>
        <PokeHero />
        <div className="mt-20 flex justify-center">
          <Link to="/home">
            <button className="pixel-font text-white text-5xl text-center hover:text-pokemon-yellow duration-300">Enter</button>
          </Link>
        </div>
    </div>
  );
}
