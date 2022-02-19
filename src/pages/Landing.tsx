import React from "react";


const Landing = () => {

    
   
  
  return (

  
    <div className="   font-Prompt bg-white -mt-20 dark:bg-black transition-all duration-500  ease-in-out">

        <main className="flex flex-col w-full h-full pt-32 duration-500 ease-in-out">
            <div className="flex flex-row ">
                <div className="pl-[5%] w-[70%] flex flex-col">
                    <span className=" text-black dark:text-white font-bold text-7xl duration-500 ease-in-out">A Decentralized  </span>
                    <span className=" pt-5 font-bold text-7xl text-transparent bg-gradient-to-r from-pinky ti bg-pinku via-cynku bg-clip-text decoration-transparent">Future</span>
                    <span className=" pt-5 w-[50%] text-black dark:text-white duration-500 ease-in-out">The Key is a trusted ecosystem that includes apps and services for a decentralized future. </span>
                    <button className='mt-5 text-lg font-bold text-white w-40 h-10 bg-gradient-to-r from-pinku via-pinky to-cynku rounded-3xl'> Explore </button>
                </div>
                <img src="https://cdn.discordapp.com/attachments/941091409509896283/944717611101466624/Rings.svg" className=" -ml-4 w-[19%] duration-500 ease-in-out"/>
{/*                 <img src="https://cdn.discordapp.com/attachments/941091409509896283/944719797311127602/Group_1.svg" className=" block dark:hidden w-[18%] duration-500 ease-in-out"/>
 */}            </div>
            <span className="mt-5 text-white font-extrabold dark:text-black w-full pl-[5%] text-7xl bg-gradient-to-r from-pinky ti bg-pinku via-cynku bg-clip-text decoration-transparent duration-500 ease-in-out">Join The Ecosystem</span>
        </main>
    </div>
  );
}


export default Landing;