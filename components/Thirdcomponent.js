import React from 'react'

const Thirdcomponent=() => {
    return(
      <>
      <div className="flex flex-wrap xl:w-full 2xl:w-4/5 mx-auto justify-around text-white mt-10">
            <div className="flex flex-col items-center justify-center space-y-3">
              <h2 className="text-lg">Contact</h2>
              <img className="w-[150px] h-[150px] object-cover rounded-full " src="https://i.makeagif.com/media/7-27-2021/KnbmDj.gif" alt="Levi Gif" />
              <p className="w-3/4 text-center">Support Lorem ipsum dolor sit amet consectetur adipisicing elit. At, repellendus? the creators</p>
              <button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Request Funding</button>
            </div>
            <div className="flex flex-col items-center justify-center space-y-3">
              <h2 className="text-lg">Email</h2>
              <img className="w-[150px] h-[150px] object-cover rounded-full " src="https://www.icegif.com/wp-content/uploads/2022/03/icegif-1.gif" alt="ShinbouGIF" />
               <p className="w-3/4 text-center">Support the creator Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, enim. s</p>
              <button className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Request Funding</button>
            </div>
            <div className="flex flex-col items-center justify-center space-y-3">
              <h2 className="text-lg">Tech Stack used</h2>
              <img className="w-[150px] h-[150px] object-cover rounded-full " src="https://64.media.tumblr.com/bfcad1f06c1ca677b0f62cd8c0a2f317/tumblr_ouspdhN3Sd1vjcm8po1_540.gif" alt="AyanoKoji GIF" />
               <p className="w-3/4 text-center">Support the creators Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, enim. </p>
              <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Request Funding</button>
            </div>
      </div>
      </>
    )
  }

export default Thirdcomponent