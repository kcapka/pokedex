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
        <div>
            little butt
        </div>
    )
}