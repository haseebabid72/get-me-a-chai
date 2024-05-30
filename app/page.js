import Thirdcomponent from "@/components/Thirdcomponent";


export default function Home() {
  return (
    <>
      <div className="text-white flex-col h-[40vh] items-center  flex justify-center">
        <div className="py-3 text-2xl flex items-center gap-2">Buy me a Coffee <span><img className="w-[4rem] rounded-full" src="https://gifdb.com/images/high/animated-steaming-coffee-459y2wllveo0hcub.gif" alt="" /></span></div>
        <div className="button">
          <h2>A cloud platform to support the creators you love.</h2>
          <div className="justify-center mt-3 flex gap-3">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Start now
              </span>
            </button>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Read More.
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* Section one */}
      <hr />
      <div>
        <div className="text-white flex  items-center mt-2 flex-col nothing space-y-7">
          <h2 className="text-2xl my-5 ">Your Fans can support you on Pateron</h2>
          <div><button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Start funding
            </span>
          </button></div>
        </div>
        <div className="mb-5 flex-wrap flex justify-around text-white">
          <div className="flex flex-col items-center justify-center space-y-3">
            <h2 className="text-lg">Fund yourself</h2>
            <img className="w-[150px] h-[150px] object-cover rounded-full " src="https://i.makeagif.com/media/7-27-2021/KnbmDj.gif" alt="Levi Gif" />
            <button className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Request Funding</button>
          </div>
          <div className="flex flex-col items-center justify-center space-y-3">
            <h2 className="text-lg">Fund yourself</h2>
            <img className="w-[150px] h-[150px] object-cover rounded-full " src="https://www.icegif.com/wp-content/uploads/2022/03/icegif-1.gif" alt="ShinbouGIF" />
            <button className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Request Funding</button>
          </div>
          <div className="flex flex-col items-center justify-center space-y-3">
            <h2 className="text-lg">Fund yourself</h2>
            <img className="w-[150px] h-[150px] object-cover rounded-full " src="https://64.media.tumblr.com/bfcad1f06c1ca677b0f62cd8c0a2f317/tumblr_ouspdhN3Sd1vjcm8po1_540.gif" alt="AyanoKoji GIF" />
            <button className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Request Funding</button>
          </div>
        </div>
        <Thirdcomponent />
      </div>
    </>

  );
}