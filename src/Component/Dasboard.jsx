import React, { useEffect, useState } from 'react'
import Navbar from './Nav'

function Dasboard() {
    const [UserData, setUserData] = useState({ first_name: "", last_name: "", phone: "", email: "", Address: "", password: ""})

    const HandleChange = (e) => {
        // console.log(e.target.value)
        setUserData({ ...UserData, [e.target.name]: e.target.value })
    }

    const SubmitData = async (e) => {
        const response = await fetch('http://localhost:5000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(UserData),
        });
        if (response.ok) {
            const result = await response.json();
            console.log('Item added:', result);
        } else {
            console.error('Failed to add item');
        }

    }

    return (
        <>
            <div className='invisible'> <Navbar val={UserData.email} /></div>

            <div className='border-[1px] border-gray-500  w-[90%] rounded-md  ml-5 p-2 mt-4'>

                <form>
                    <div className="grid gap-6 mb-6 md:grid-cols-2 ">
                        <div>
                            <label form="first_name" className="block mb-2 text-sm font-medium text-gray-600">First name</label>
                            <input value={UserData.first_name} onChange={HandleChange} name='first_name' type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                        </div>
                        <div>
                            <label form="last_name" className="block mb-2 text-sm font-medium dark:text-gray-600">Last name</label>
                            <input value={UserData.last_name} onChange={HandleChange} name='last_name' type="text" id="last_name" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
                        </div>

                        <div>
                            <label form="phone" className="block mb-2 text-sm font-medium  dark:text-gray-600">Phone number</label>
                            <input value={UserData.phone} onChange={HandleChange} name='phone' type="tel" id="phone" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                        </div>

                    </div>
                    <div className="mb-6">
                        <label form="email" className="block mb-2 text-sm font-medium  dark:text-gray-600">Email address</label>
                        <input value={UserData.email} onChange={HandleChange} name='email' type="email" id="email" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
                    </div>
                    <div className="mb-6">
                        <label form="addres" className="block mb-2 text-sm font-medium  dark:text-gray-600">Address & Location</label>
                        <input value={UserData.Address} onChange={HandleChange} name='Address' type="text" id="Address" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
                    </div>
                    <div className="mb-6">
                        <label form="password" className="block mb-2 text-sm font-medium  dark:text-gray-600">Password</label>
                        <input value={UserData.password} onChange={HandleChange} name='password' type="password" id="password" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                    </div>

                    <div className="flex items-start mb-6">        <div className="flex items-center h-5">
                        <input onChange={HandleChange} name='' id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300  dark:border-gray-600 dark:focus:ring-blue-600 " required />
                    </div>
                        <label form="remember" className="ms-2 text-sm font-medium  dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
                    </div>
                    <button onClick={SubmitData} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>

            </div>
        </>
    )
}

export default Dasboard
