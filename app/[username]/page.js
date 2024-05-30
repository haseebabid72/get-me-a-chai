"use client"
import { useEffect, useState } from 'react';
import { fetchUser } from '@/actions/useractions';
const Username = ({ params }) => {
  const [CurrentUser, setCurrentUser] = useState({});
  const setAmount = (e) => {
    let get_amount = document.getElementById('setAmountValue');
    get_amount.value = e.target.innerText;
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const userData = await fetchUser(params.username);
        setCurrentUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    getData();

  }, [params.username])



  return (
    <div>
      <div className="cover relative w-full">
        <img className='w-full h-[35vh] object-cover object-center' src={CurrentUser.profilepic} alt="" />
        <div className='userImage absolute left-1/2'>
          <img id='displayimage' className='w-[150px] h-[150px] rounded-full border-4 -translate-x-1/2 object-cover -translate-y-1/2 object-center' src={CurrentUser.coverpic} alt="" />
        </div>
        <div className="ProfileInfo mt-[100px] flex flex-col justify-center items-center gap-2">
          <h1 className='text-3xl text-center'>{CurrentUser.name}</h1>
          <h1 className='text-xl'>@{params.username}</h1>
          <h2 className='text-2xl text-gray-300'>Support me for Exclusive Content</h2>
          <p className='flex gap-2 text-gray-400'><span>10,595 members</span><span>83 posts</span><span>$15,580/release</span></p>
        </div>
      </div>
      <div className="payment mt-5 flex gap-3 w-3/4 mx-auto justify-around">
        <div className="supporters rounded-lg p-5 bg-slate-900 w-full h-80 overflow-auto">
          <h2 className="text-2xl text-center my-3">Supporters</h2>
          <ul className='text-slate-200'>
            <li className='p-2 bg-slate-800 m-2 hover:bg-slate-700 hover:cursor-pointer rounded-md'>Shubham made a payment of $50 with a message of.</li>
            <li className='p-2 bg-slate-800 m-2 hover:bg-slate-700 hover:cursor-pointer rounded-md'>Bilal made a payment of $40 with a message of.</li>
            <li className='p-2 bg-slate-800 m-2 hover:bg-slate-700 hover:cursor-pointer rounded-md'>Soniay made a payment of $10 with a message of.</li>
            <li className='p-2 bg-slate-800 m-2 hover:bg-slate-700 hover:cursor-pointer rounded-md'>Ali made a payment of $5 with a message of.</li>
          </ul>
        </div>
        <div className="supporters rounded-lg p-5 bg-slate-900 w-full h-80 overflow-auto">
          <h2 className="text-2xl text-center my-3">Make a Payment</h2>
          <div className="flex">
            <input type="text" id="setAmountValue" placeholder='Enter an amount' className='w-4/5 text-white bg-slate-800 p-2 rounded-lg' />
            <button className='w-1/5 bg-blue-600 hover:bg-blue-800 rounded-lg mx-2'>Pay</button>
          </div>
          <div className="flex gap-2 my-1">
            <input type="text" required className='bg-slate-800 px-2 py-1 rounded-md my-1 w-2/5' placeholder='Name' id='name' />
            <input type="text" required className='bg-slate-800 px-2 py-1 rounded-md w-3/5 mx-2 my-1' placeholder='Enter your Message' id='user_message' />
          </div>
          <h2 className="my-2 text-xl">Or choose from Option below ($)</h2>
          <div className="flex gap-4 my-2">
            <span onClick={(e) => { setAmount(e) }} className='bg-slate-800 hover:cursor-pointer px-4 py-1 rounded-md transition-all hover:bg-slate-600'>5</span>
            <span onClick={(e) => { setAmount(e) }} className='bg-slate-800 hover:cursor-pointer px-4 py-1 rounded-md transition-all hover:bg-slate-600'>10</span>
            <span onClick={(e) => { setAmount(e) }} className='bg-slate-800 hover:cursor-pointer px-4 py-1 rounded-md transition-all hover:bg-slate-600'>30</span>
            <span onClick={(e) => { setAmount(e) }} className='bg-slate-800 hover:cursor-pointer px-4 py-1 rounded-md transition-all hover:bg-slate-600'>50</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Username
