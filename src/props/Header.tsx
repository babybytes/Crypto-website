import React,{ useContext } from 'react';

import { ColorMode, ThemeContext } from '../modules/ThemeProvider';


const Header = () => {
    const { colorMode, setColorMode } = useContext(ThemeContext);
    console.log(colorMode)
  

    return(
    <div className=" bg-transparent w-full overflow-hidden font-Prompt py-5 duration-500  z-50 "> 
        <div className='flex justify-between'>
            <div className='mt-1 ml-10 flex'>
                <img src="https://cdn.discordapp.com/attachments/941091409509896283/944703462732611604/Component_2.svg" alt="" className='-mt-3' />
                <span className=' text-lg text-black dark:text-white duration-500 ease-in-out font-bold'> Key</span>
            </div>
            <div className='flex gap-4 mt-2'>
                <a href="/" className=' text-black dark:text-white duration-500 ease-in-out'>Home</a>
                <a href="/" className=' text-black dark:text-white duration-500 ease-in-out'>Blog</a>
                <a href="/" className=' text-black dark:text-white duration-500 ease-in-out'>Community</a>
                <a href="/" className=' text-black dark:text-white duration-500 ease-in-out'>Ecosystem</a>
            </div>
            <button className='mr-10 text-lg font-bold text-white w-40 h-10 bg-gradient-to-r from-pinku via-pinky to-cynku rounded-3xl' onClick={() => {
                setColorMode(colorMode === ColorMode.dark ? ColorMode.light : ColorMode.dark)
                }}>{colorMode === ColorMode.dark ? '' : ''}

                Explore
                
            </button>
        </div>
    </div>
  );
}
  
export default Header;