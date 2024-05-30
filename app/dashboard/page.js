"use client"
import React, { useEffect, useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { UpdateProfile, fetchUser } from '@/actions/useractions';
// import { fetchUser,UpdateProfile } from '@/useractions/actions';
const Dashboard = () => {
    const { data: session, update } = useSession();
    const [form, setform] = useState({});
    console.log(session);
    const router = useRouter();


    useEffect(() => {
        if (!session) {
            router.push('/login');
        }
        else {
            getData()
        }
    }, [router, session])

    const getData = async () => {
        let u = await fetchUser(session.user.name);
        setform(u);
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        update();
        let a = await UpdateProfile(e, session.user.name);
        alert("Profile Updated");
    }



    // useEffect(() => {
        // if (!session) {
        //     router.push('/login');
        // }
        // else {
        //     getData()
        // }
    // }, [router, session])
    // const getData = async () => {
        //   let u = await fetchUser(session.user.name);
        //   setform(u);
    // })

    // const handleChange = (e) => {
    //     setform({ ...form, [e.target.name]: e.target.value });
    //     console.log(form);
    // };

    // const handleSubmit = async (e) => {
    //     update();
    //     console.log(e);
    //     let a = await UpdateProfile(e, session.user.name);
    //     alert("Profile updated");
    // };

    return (
        <>
            <div>
                <div className='text-center text-2xl my-6'>Welcome to the Dashboard</div>
                <div className="max-w-lg mx-auto">
                    <form className="bg-slate-900 shadow-md shadow-slate-500 rounded-lg px-6 py-5 mb-2" action={handleSubmit}>
                        <div className="mb-2">
                            <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input name='name' onChange={handleChange} value={form.name ? form.name : ""} className="bg-slate-800 shadow appearance-none rounded w-full py-2 px-3 text-white text-sm leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" />
                        </div>
                        <div className="mb-2">
                            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input name='email' onChange={handleChange} value={form.email ? form.email : ""} className="bg-slate-800 shadow appearance-none rounded w-full py-2 px-3 text-white text-sm leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                        </div>
                        <div className="mb-2">
                            <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
                                Username
                            </label>
                            <input name='username' value={form.username ? form.username : ''} onChange={handleChange} className="bg-slate-800 shadow appearance-none rounded w-full py-2 px-3 text-white text-sm leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                        </div>
                        <div className="flex gap-2">
                            <div className="mb-2">
                                <label className="block text-white text-sm font-bold mb-2" htmlFor="profilepic">
                                    Profile Picture
                                </label>
                                <input name='profilepic' onChange={handleChange} value={form.profilepic ? form.profilepic : ""} placeholder='https://image.jpg' className="bg-slate-800 text-white shadow appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="profilepic" type="text" />
                            </div>
                            <div className="mb-2">
                                <label className="block text-white text-sm font-bold mb-2" htmlFor="cover-picture">
                                    Cover Picture
                                </label>
                                <input name='coverpic' onChange={handleChange} value={form.coverpic ? form.coverpic : ""} placeholder='https://image.jpg' className="text-white bg-slate-800 shadow appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="coverpic" type="text" />
                            </div>
                        </div>

                        <button name='submit' onSubmit={handleSubmit} type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Save
                        </button>
                    </form>
                </div>

            </div>
        </>
    )
}

export default Dashboard