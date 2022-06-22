import React, { useEffect, useRef } from 'react'
import { navLinks, mainLinks } from '../../data'
import { useState } from 'react'
import { HiOutlineUserCircle, HiSearch } from 'react-icons/hi'
import { MdAccountBalanceWallet } from 'react-icons/md'
import { GoThreeBars } from 'react-icons/go'
import { FaTimes } from 'react-icons/fa'
import './LinksContainer.css'
import { social } from '../../data'





export const NavLinksContainer = () => {
  const[showLink, setShowLink] = useState(false)

    const handleLinks = () => {
        setShowLink(!showLink)
            }
  
    return (
        <div className="navlinks_container">
            <ul className="links">
                {navLinks.map((link) => {
                    const {id, text, url} = link;

                 return   <li key={id}>{text}</li>
                })}
            </ul>

         
         </div>
    )
}

export const MainLinksContainer = () => {
  const[showLink, setShowLink] = useState(false)

    const linksContainerRef = useRef(null)
    const linksRef = useRef(null)

    // useEffect(() => {
    //     const linksHeight = linksRef.current.getBoundingClientRect().height;
    //     // console.log(linksHeight)
    //     if(showLink){
    //         linksContainerRef.current.style.height = `${linksHeight}px`
    //     }else{
    //         linksContainerRef.current.style.height = '0px'
    //     }
    // }, [showLink])
    return (
        <div className='main_links_container'  ref={linksContainerRef}>
        <ul className="main_links" ref={linksRef}>
        {mainLinks.map((link) => { 
            const {id, text, url, icon, icon2} = link;
            return <li key={id}>
                <span><i>{icon}</i>{text}</span> <i>{icon2}</i>
            </li>
        })}
</ul>

   <div className="connect_wallet">Connect wallet</div>
   <ul className="social_links">
    {social.map((link) => {
        const{id, icon} = link;
        return <li key={id}>{icon}</li>
    })}
   </ul>
</div>
)
}


