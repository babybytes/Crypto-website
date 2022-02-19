import React from 'react';



const Footer = () => {

    const ToTop = () => {
        window['scrollTo']({top: 0, behavior: 'smooth'})
    }
   
    return(
      <div className=" bg-transparent w-full mt-[-10rem] overflow-hidden font-Prompt py-11 duration-500  z-50 "> 
        <div className='flex w-full justify-evenly'>
            <a href="" className=' dark:text-white xl:pr-[15rem] font-Prompt ease-in-out duration-500'>☻Made By Yajush Vyas</a>
            <div className="hidden xl:flex justify-evenly space-x-[5%] ">
                <div className='flex'>
                    <a href="https://www.linkedin.com/in/yajush-vyas-9465261b4/" className=' dark:text-white font-Prompt uppercase ease-in-out duration-500'>Linkedin</a>
                    <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.88001 3.19279L13.6512 3.73254C13.944 3.76567 14.2081 4.02987 14.2413 4.32265L14.781 9.09381C14.8141 9.38659 14.6037 9.59709 14.3109 9.56396C14.0181 9.53084 13.7539 9.26664 13.7208 8.97386L13.3258 5.48255L3.48999 15.3184L2.65546 14.4838L12.4913 4.64802L8.99995 4.25305C8.70717 4.21992 8.44297 3.95573 8.40985 3.66295C8.37673 3.37016 8.58723 3.15967 8.88001 3.19279Z" className='fill-black dark:fill-white ease-in-out duration-500'/>
                    </svg>
                </div>
                <a href="" className=' dark:text-white font-Prompt uppercase ease-in-out duration-500'>|</a> 
                <div className='flex'>
                    <a href="https://discord.gg/bVxCeh9WDA" className=' dark:text-white font-Prompt uppercase ease-in-out duration-500'>Discord</a>
                    <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.88001 3.19279L13.6512 3.73254C13.944 3.76567 14.2081 4.02987 14.2413 4.32265L14.781 9.09381C14.8141 9.38659 14.6037 9.59709 14.3109 9.56396C14.0181 9.53084 13.7539 9.26664 13.7208 8.97386L13.3258 5.48255L3.48999 15.3184L2.65546 14.4838L12.4913 4.64802L8.99995 4.25305C8.70717 4.21992 8.44297 3.95573 8.40985 3.66295C8.37673 3.37016 8.58723 3.15967 8.88001 3.19279Z" className='fill-black dark:fill-white ease-in-out duration-500'/>
                    </svg>
                </div>
                <a href="" className=' dark:text-white font-Prompt uppercase ease-in-out duration-500'>|</a> 
                <div className='flex'>
                    <a href="https://github.com/notsoocool" className=' dark:text-white font-Prompt uppercase ease-in-out duration-500'>GITHUB</a>
                    <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.88001 3.19279L13.6512 3.73254C13.944 3.76567 14.2081 4.02987 14.2413 4.32265L14.781 9.09381C14.8141 9.38659 14.6037 9.59709 14.3109 9.56396C14.0181 9.53084 13.7539 9.26664 13.7208 8.97386L13.3258 5.48255L3.48999 15.3184L2.65546 14.4838L12.4913 4.64802L8.99995 4.25305C8.70717 4.21992 8.44297 3.95573 8.40985 3.66295C8.37673 3.37016 8.58723 3.15967 8.88001 3.19279Z" className='fill-black dark:fill-white ease-in-out duration-500'/>
                    </svg>
                </div>
                <a href="" className=' dark:text-white font-Prompt uppercase ease-in-out duration-500'>|</a> 
                <div className='flex'>
                    <a href="https://www.instagram.com/__vyas.ji__/" className=' dark:text-white font-Prompt uppercase ease-in-out duration-500'>Instagram</a>
                    <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.88001 3.19279L13.6512 3.73254C13.944 3.76567 14.2081 4.02987 14.2413 4.32265L14.781 9.09381C14.8141 9.38659 14.6037 9.59709 14.3109 9.56396C14.0181 9.53084 13.7539 9.26664 13.7208 8.97386L13.3258 5.48255L3.48999 15.3184L2.65546 14.4838L12.4913 4.64802L8.99995 4.25305C8.70717 4.21992 8.44297 3.95573 8.40985 3.66295C8.37673 3.37016 8.58723 3.15967 8.88001 3.19279Z" className='fill-black dark:fill-white ease-in-out duration-500'/>
                    </svg>
                </div>
                <div>
                <button onClick={ToTop}>
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12.8528" cy="12" r="11.5" className='stroke-black dark:stroke-white ease-in-out duration-500'/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.15891 9.47757L12.6157 6.39201C12.8279 6.20266 13.1718 6.20266 13.3839 6.39201L16.8407 9.47757C17.0528 9.66691 17.0528 9.9739 16.8407 10.1632C16.6286 10.3526 16.2847 10.3526 16.0725 10.1632L13.543 7.90538L13.543 17.25L12.4566 17.25L12.4566 7.90538L9.92709 10.1632C9.71497 10.3526 9.37104 10.3526 9.15891 10.1632C8.94678 9.9739 8.94678 9.66691 9.15891 9.47757Z" className='fill-black dark:fill-white ease-in-out duration-500'/>
                    </svg>
                </button>
                </div>
            </div>
        </div>
      </div>
  );
}
  
export default Footer;