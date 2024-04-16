import React from 'react'

const page = () => {
  return (
    <div className='flex-container'>


          <h1 className='text-[8em]'>
            <span className="fade-in" id="digit1">!</span>
            <span className="fade-in" id="digit2">!</span>
            <span className="fade-in" id="digit3">!</span>
          </h1>

        <h3 className=" font-bold">CONNECTION FAILED, TRY AGAIN</h3>

        <a href="/"><button type="button" name="button"
        className='border-2 p-1 mt-3 font-bold text-[1.1rem] '
        >Return To Home</button></a>
    </div>
  )
}

export default page