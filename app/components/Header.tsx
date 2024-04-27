import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from '@remix-run/react';


export default function Header() {

    return (
        <section>
            {/* Desktop Menu */}
            <motion.section className='fixed top-0 left-0 bg-pokemon-red w-full h-20 z-20 shadow-xl flex items-center justify-between default-px'
            initial={{y: -100}}
            animate={{y: 0}}
            transition={{delay: 3}}>
                <img src="/images/logo/pokedex-icon.png" className='w-14' />
                <div className='h-full flex items-center gap-5 pixel-font'>
                    <Link to="/">
                        <button className='h-full text-white text-2xl hover:text-pokemon-yellow duration-200'>All Pokemon</button>
                    </Link>
                    <Link to="/search">
                        <button className='h-full text-white text-2xl hover:text-pokemon-yellow duration-200'>Search Pokemon</button>
                    </Link>
                </div>
            </motion.section>
        </section>
    )
}