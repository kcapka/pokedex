import type {
    LoaderFunctionArgs,
    LoaderFunction,
  } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Link } from "@remix-run/react";

  export const loader: LoaderFunction = async ({
    request,
    params,
  }: LoaderFunctionArgs) => {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${params.name}/`
        )
        const data = await response.json();
        return {data}
  }

export default function PokemonDetailPage() {
    const loaderData:any = useLoaderData();
    const pokemon = loaderData.data;
    const officialArtwork = pokemon.sprites.other["official-artwork"].front_default;

    console.log(pokemon)

    return (
        <div className="min-h-[100svh] bg-pokemon-blue default-px default-py pixel-font">
            <section className="max-w-[800px] mx-auto">
              <div className="flex justify-between items-center mb-10 md:mb-20">
                <Link to="/home">
                  <img src="/images/pokemon-logo.png" className="w-[100px] md:w-[300px] cursor-pointer" alt="Pokemon logo" />
                </Link>
                <p className="text-2xl md:text-4xl text-pokemon-dark-blue">Pokemon details</p>
              </div>

              <div className="flex md:justify-between flex-col md:flex-row gap-5 md:gap-10">
                <div className="flex flex-col items-center bg-white border-[5px] rounded border-pokemon-dark-blue p-5 md:flex-[1.5] shadow-xl">
                  <h1 className="text-center text-white rounded py-1 px-5 capitalize text-3xl md:text-5xl bg-pokemon-dark-blue mb-5">{pokemon.name}</h1>
                  <img src={officialArtwork} alt = {`${pokemon.name} image`} className="max-w-[200px] md:max-w-[300px]" />
                </div>
                <div className="flex flex-col items-center bg-white border-[5px] rounded border-pokemon-dark-blue py-5 px-5 flex-1 shadow-xl">
                  <h1 className="text-center text-white rounded py-1 px-5 capitalize text-3xl md:text-5xl bg-pokemon-dark-blue mb-5">Stats</h1>
                  <ul className="w-full text-xl md:text-2xl text-pokemon-dark-blue">
                    {pokemon.stats && pokemon.stats.map((stat:any, index:any) => (
                      <li key={index} className="flex justify-between w-full">
                        <p>Base {stat.stat.name}:</p>
                        <p>{stat.base_stat}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>



            </section>
        </div>
    )
}