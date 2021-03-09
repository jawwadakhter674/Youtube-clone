import React from 'react'
import './headerStyle.scss'
import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications, MdApps } from 'react-icons/md'
import youtube from './youtube.png'

const Header = ({handleToggleSideBar}) => {
    return (
        <>
            <div className="header border border-dark">
                <FaBars size={26} className="header_menu" onClick={()=>handleToggleSideBar()} />
                <img src={youtube} alt="" className="header_logo" />


                <form >
                    <input type="text" placeholder="Search...." />
                    <button type="submit">
                        <AiOutlineSearch size={22} />
                    </button>

                </form>
                <div className="header_icons">
                    <MdNotifications size={28} />
                    <MdApps size={28} />
                    <img
                    
                        src="https://image.flaticon.com/icons/png/512/147/147144.png"
                        alt="avatar" />
                </div>

            </div>
        </>
    )
}

export default Header
