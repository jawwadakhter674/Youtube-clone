
import React ,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useHistory} from 'react-router-dom'
import { login } from '../../redux/action/auth-action';
import './LoginScreen.scss'
import youtube from './youtube.png'


function LoginScreen() {
     const dispatch =useDispatch();
     const accessToken =useSelector(state=>state.auth.accessToken);
     const history = useHistory();
     const handleCheck=()=>{
         
           login(dispatch)
            
     }

 useEffect(()=>{
if(accessToken){
    history.push('/')
}
 },[accessToken,history])





    return (
        <div className="login">
            <div className="login_container">
                <img src={youtube} alt="" />
                <button onClick={handleCheck}>LoginScreen</button>

                <p>Some Data about Login </p>
            </div>
        </div>
    )
}

export default LoginScreen
