import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'

import { FaTimes } from 'react-icons/fa'
import { FiChevronLeft } from 'react-icons/fi'
import { NavLinksContainer } from './LinksContainer'
import { MainLinksContainer } from './LinksContainer'
import { NavIcons } from './LinksContainer'

import { HiOutlineUserCircle, HiSearch } from 'react-icons/hi'
import { MdAccountBalanceWallet } from 'react-icons/md'
import { GoThreeBars } from 'react-icons/go'
import { social } from '../../data'
const Navbar = () => {
  const [showLink, setShowLink] = useState(false)
  const [showInput, setShowInput] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [fixedNavbar, setFixedNavbar] = useState(false)

const handleLinks = () => {
setShowLink(!showLink)
}

  const handleSearch = () => {
    setShowInput(!showInput)
  }

  const closeInput = () => {
    setShowInput(false)
    setInputValue('')
  }

  const clearInput = (e) => {
    setInputValue((e) => e.target.value = '')

  }

  const handleInput = (e) => {
    setInputValue(e)
  }

// window.addEventListener('click', () => {
//   setShowLink(false)
//   })

  return (

  <div>
      <nav >
      <div className= 'navbar_main' >

        {showInput ? <div className='input'>
          <span className='left' onClick={closeInput}><FiChevronLeft /></span>
          <input type="text" onChange={handleInput} placeholder='Search BivWeb' />
          <span >{inputValue === "" ? "" : <FaTimes onClick={clearInput} />}</span>
        </div> : ""}

        <div className="navbar_left">
          <div className="logo_icon"></div>
          <div className="logo">Biv<span>W</span>eb</div>
        </div>


        <div className="search">

          <div className="search_icon" onClick={handleSearch}>
            <HiSearch />
          </div>

          <div className='search_box '>
            <i className="main_search_icon" > <HiSearch /></i>
            <input type="text" placeholder='Search accounts, contacts, and wallets' onChange={handleInput} />
            <i className='clear_search_icon'> {inputValue ? <FaTimes onClick={clearInput} /> : ""}</i>
          </div>

        </div>



        <div className='nav_right'>
          <NavLinksContainer />
          <ul className="icons">
  <li className='user'> {<HiOutlineUserCircle/>}</li> 
   <li className='wallet'>{<MdAccountBalanceWallet/>}</li>
   <li className='bars'  onClick={handleLinks}>{showLink ? <FaTimes/> : <GoThreeBars/>}</li>
 </ul>
        </div>


      </div>
      {/* end of navbar main  */}
      {/*hidden  links  for small devices*/}
    
    </nav>

   <div className="navbar_mobile">
   {showLink && <MainLinksContainer/>}
   </div>
  </div>
    
  )
}

export default Navbar