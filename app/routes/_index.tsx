import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import PokeHero from "~/components/PokeHero";
import PokeListAll from "~/components/PokeListAll";

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
    <div className="min-h-[100svh] random bg-pokemon-dark-blue" style={backgroundGradient}>
        <PokeHero />
        <PokeListAll/>
    </div>
  );
}
