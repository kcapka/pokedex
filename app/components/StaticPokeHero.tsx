import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';


export default function StaticPokeHero() {

    return (
        <section className={`bg-pokemon-red min-h-[250px] md:min-h-[400px] flex flex-col justify-center items-center duration-300 overflow-x-hidden w-full`}>
            <div className='relative'>
            <img src="/images/logo/logo.png" alt="Pokedex Logo" className='w-[200px] md:w-[500px]'/>
            <img src="/images/logo/pokeball.png" alt="Pokeball" className='w-[40px] md:w-[75px] absolute left-0 top-[50%] translate-x-[-100%]'/>
            <img src="/images/logo/pokeball.png" alt="Pokeball" className='w-[40px] md:w-[75px] absolute right-0 top-[50%] translate-x-[100%]'/>
            </div>
        </section>
    )
}