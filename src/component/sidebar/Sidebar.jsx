import React from 'react'
import { Nav } from 'react-bootstrap'
import './sidebar.scss'
import {MdSubscriptions,MdExitToApp,MdThumbUp,MdHistory,MdLibraryBooks,MdHome,MdSentimentDissatisfied} from 'react-icons/md'
// import { log_out } from '../../redux/actionType'
import {logout} from '../../redux/action/auth-action'
import {useDispatch} from 'react-redux'
function Sidebar({sidebar , handleToggleSideBar}) {


const dispatch = useDispatch()
    const logOutHandler=()=>{
        logout(dispatch)

    }
  
    return (
        <Nav className={sidebar ? "sidebar open" : "sidebar"} onClick={()=>handleToggleSideBar(false)}>
           <li>
               <MdHome size={23} />
               <span>Home</span>
           </li>
           <li>
               <MdSubscriptions size={23} />
               <span>Subscription</span>
           </li>
           <li>
               <MdThumbUp size={23} />
               <span>LikedVideos</span>
           </li>
           <li>
               <MdHistory size={23} />
               <span>History</span>
           </li>
           <li>
               <MdLibraryBooks size={23} />
               <span>Library</span>
           </li>
           <li>
               <MdSentimentDissatisfied size={23} />
               <span>I Don't Know</span>
           </li>
           <hr />
           <li>
               <MdExitToApp onClick={logOutHandler} size={23} />
               <span >LogOut</span>
           </li>
           <hr />
            
        </Nav>
    )
}

export default Sidebar
