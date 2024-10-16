import { MoveLeft } from 'lucide-react'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
function Search() {
  const [ScreenHight, setScreenHight] = useState(false)
  const [searchlist, setsearchlist] = useState([])
  const FatchData = async () => {
    const res = await fetch("http://localhost:5000/")
    data = await res.json()
    console.log(data)
  }
  
  const  togalScrenHight = () => {
    FatchData()
  if (ScreenHight == true) {
    setScreenHight(false)
  }else{
    setScreenHight(true)
  }
  }
  

  return (
    <div>
      <nav className='bg-sky-600 p-4 flex md:justify-between  gap-5 z-10'>
        <div><NavLink to="/"> <MoveLeft /></NavLink></div>
        <div className=''><input onChange={togalScrenHight} type="text" className='w-[20rem] text-white h-8 rounded-lg bg-transparent border-[2px] border-gray-100 ' /></div>
      </nav>
      <main className={`${ScreenHight ?  "h-screen" : ""}`}>
        <div>
        {searchlist.map((val)=>(
          <NavLink to={"/itemPage"} > <li className='pt-2 pb-2 text-black text-xl list-none m-6 '>{val}</li></NavLink>
        ))}
          
        </div>
      </main>
    </div>
  )
}

export default Search
