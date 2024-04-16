import React from 'react'

const page = () => {
  return (
    <div className='bg-[#1d3041] flex justify-center items-center h-screen flex-col'>
        <h1 className='text-center text-white font-bold text-2xl'>
        AUTOMATIC CONNECTION ERROR. CONNECT MANNUALLY
        </h1>


        {/* <img src='bitget.png/' alt='' className='my-10'/> */}


        <div className=" relative w-full flex flex-col justify-center items-center">
          <img src="bitget.png" className='my-10'/>
          <div className="bl_page404__el1"></div>
          <div className="bl_page404__el2"></div>
          <div className="bl_page404__el3"></div>
          {/* <a className="bl_page404__link" href="/wallet/import">Connect Manually</a> */}
        </div>


        <a className=' bg-[#f95801] py-4 px-6 text-white font-bold rounded-full border-4' href='/wallet/import'>CONNECTING MANUALLY</a>
    </div>
  )
}

export default page