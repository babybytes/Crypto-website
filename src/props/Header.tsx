import React,{ useContext } from 'react';
import { motion } from "framer-motion";


import { ColorMode, ThemeContext } from '../modules/ThemeProvider';


const Header = () => {
    const { colorMode, setColorMode } = useContext(ThemeContext);
    console.log(colorMode)
    
    
    const svgV = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.5
            }
        }
    }

    const pathV = {
        hidden: {
            opacity: 0,
            pathLength: 0 
        },
        visible: {
            opacity: 1,
            pathLength: 1,
            transition: {
                duration: 2,
                ease: "easeInOut"
            }
        }
    }
    const pathV2 = {
        hidden: {
            opacity: 0,
            
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 2,
                duration: 1.5,
                ease: "easeInOut"
            }
        }
    }


    return(
    <div className="fixed bg-transparent w-full overflow-hidden font-Prompt py-5 duration-500  z-50 "> 
        <div className='flex justify-between'>
            <div className=' md:mt-1 md:ml-10 flex'>
                <img src="https://cdn.discordapp.com/attachments/941091409509896283/944703462732611604/Component_2.svg" alt="" className='-mt-3' />
                <span className=' text-lg text-black dark:text-white duration-500 ease-in-out font-bold'> Key</span>
            </div>
            <div className='flex gap-4 mt-2'>
                <a href="/" className=' text-xs md:text-base text-black dark:text-white duration-500 ease-in-out'>Home</a>
                <a href="/" className=' text-xs md:text-base text-black dark:text-white duration-500 ease-in-out'>Blog</a>
                <a href="/" className=' text-xs md:text-base text-black dark:text-white duration-500 ease-in-out'>Community</a>
                <a href="/" className=' text-xs md:text-base text-black dark:text-white duration-500 ease-in-out'>Ecosystem</a>
            </div>
            <button className='hidden md:block mr-10 text-lg font-bold text-white w-40 h-10 bg-gradient-to-r from-pinku via-pinky to-cynku rounded-3xl' onClick={() => {
                setColorMode(colorMode === ColorMode.dark ? ColorMode.light : ColorMode.dark)
                }}>{colorMode === ColorMode.dark ? '' : ''}

                Explore
                
            </button>
            <button className=' -mt-5 block md:hidden' onClick={() => {
                setColorMode(colorMode === ColorMode.dark ? ColorMode.light : ColorMode.dark)
                }}>{colorMode === ColorMode.dark ? '' : ''}
               <motion.svg width="20" height="20" viewBox="0 0 20 20" className='hidden dark:block fill-transparent w-10 duration-500 ease-in-out'
                variants={svgV}
                initial="hidden"
                animate="visible"
               >
                    <motion.circle cx="10" cy="10" r="9.5" transform="rotate(-180 10 10)" className=" stroke-white duration-500 ease-in-out" variants={pathV}/>
                    <motion.path fillRule="evenodd" clipRule="evenodd" d="M10 20L10 8.74228e-07C4.47715 3.91405e-07 1.35705e-06 4.47715 8.74228e-07 10C3.91405e-07 15.5228 4.47715 20 10 20Z" fill="white" variants={pathV2}/>
                </motion.svg>
                
                <motion.svg width="32" height="26" viewBox="0 0 32 26"  className='block dark:hidden fill-transparent w-10 duration-500 ease-in-out'
                    variants={svgV}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.circle cx="16" cy="13" r="9.5" className=' stroke-black duration-500 ease-in-out' variants={pathV}/>
                    <motion.path fillRule="evenodd" clipRule="evenodd" d="M16 3V23C21.5228 23 26 18.5228 26 13C26 7.47715 21.5228 3 16 3Z" className='fill-black' variants={pathV2}/>
                </motion.svg>
            </button>
        </div>
    </div>
  );
}
  
export default Header;