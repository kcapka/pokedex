import type {
    LoaderFunctionArgs,
    LoaderFunction,
  } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

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
    const loaderData = useLoaderData();

    console.log(loaderData);

    return (
        <div className="min-h-[100svh] bg-pokemon-gray default-px default-py">
            <section className="max-w-[800px] mx-auto">
              <div className="flex justify-between items-center">
                <img src="/images/pokemon-logo.png" className="w-[300px]" alt="Pokemon logo" />
                <p>test</p>
              </div>
            </section>
        </div>
    )
}