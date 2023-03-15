import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { changeMode } from '../mode/homeSlice';

export const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const dispatch = useDispatch();

    const changeModeClick = (val) => {
        dispatch(changeMode(val))
    }

  return (
    <nav>
        <button onClick={()=>{setMenu(!menu)}} className='border border-black px-2 rounded-full m-5'>Mode Menu <i className="fa-solid fa-caret-down"></i></button>

        {menu && menu ? 
        <ul className='ml-8'>
            <li className='my-1' onClick={()=>{changeModeClick("light-mode")}}>Light Mode</li>
            <li className='my-1' onClick={()=>{changeModeClick("dark-mode")}}>Dark Mode</li>
            <li className='my-1' onClick={()=>{changeModeClick("red-mode")}}>Red Mode</li>
            <li className='my-1' onClick={()=>{changeModeClick("blue-mode")}}>Blue Mode</li>
        </ul> : null}
    </nav>
  )
}
