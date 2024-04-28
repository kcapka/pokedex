import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import useWindowSize from '~/utilities/useWindowSize';

export default function PokeHero() {
    const [contentHeight, setContentHeight] = useState('min-h-[100svh]');

    const {width} = useWindowSize();
    const isMobile = width < 640;

    useEffect(() => {
        setTimeout(() => {setContentHeight('min-h-[250px] md:min-h-[400px]')}, 2500);
    }, []);

    return (
        <section className={`bg-pokemon-red ${contentHeight} flex flex-col justify-center items-center duration-300 overflow-x-hidden`}>
            <div className='relative'>
            <motion.img src="/images/logo/logo.png" alt="Pokedex Logo" className='w-[200px] md:w-[500px]'
            initial={{opacity: 0, scale: 0}}
            animate={{opacity: 1, scale: 1}}
            transition={{opacity: {duration: 1.5, delay: 0.3}, scale: {duration: 1, type: 'string'}
            }} />
            <motion.img src="/images/logo/pokeball.png" alt="Pokeball" className='w-[40px] md:w-[75px] absolute left-0 top-[50%] '
            initial={{x: -400, rotate: 0, opacity: 0}}
            animate={{x: isMobile ? -40 : -100, rotate: 360, opacity: 1}}
            transition={{duration: 1, type: 'spring', delay: 1}} />
            <motion.img src="/images/logo/pokeball.png" alt="Pokeball" className='w-[40px] md:w-[75px] absolute right-0 top-[50%]'
            initial={{x: 400, rotate: 0, opacity: 0}}
            animate={{x: isMobile ? 40 : 100, rotate: -360, opacity: 1}}
            transition={{duration: 1, type: 'spring', delay: 1.5}} />
            </div>
        </section>
    )
}