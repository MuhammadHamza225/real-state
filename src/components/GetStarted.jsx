import React from 'react'


const GetStarted = () => {
  return (
    <section className='flex items-center justify-center'>
      <div className='w-full p-4 max-w-6xl '>
        <div className='flex flex-col items-center justify-center gap-6 bg-blue-500 border-[6px] border-blue-500 rounded-[10px] p-8 text-center'>
          <span className='text-white font-semibold text-2xl '>Get Started with Ghr</span>
          <span className='text-[0.9rem] text-[rgba(255,255,255,0.587)]'>subcribe now and connect with us
            <br />
            Find your esidence with us
          </span>
          <button className="bg-blue-400 text-white px-2 py-1 rounded border-2 border-white transition-all ease-in-out hover:shadow-md hover:scale-105 shadow-black"><a href="mailto:hamzarasheed201@gmail.com">Get Started</a></button>
        </div>
      </div>
    </section>
  )
}

export default GetStarted
