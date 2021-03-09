import {login_request, load_profile, login_failed, login_success, log_out, HOME_VIDEOS_SUCCESS } from '../actionType'



const initialState = {
    accessToken:sessionStorage.getItem("yt-accessToken")?sessionStorage.getItem("yt-accessToken"):null,
    user:sessionStorage.getItem("yt-user")?JSON.parse(sessionStorage.getItem("yt-user")):null,
    loading:false
}




export const authReducer =(prevState =initialState,action)=>{
    const {type,payload}=action;
    switch (type) {
        case login_request:
            return {
                ...prevState,
                loading:true
            }
        case login_success:
            return {
                ...prevState,
                accessToken:payload,
                loading:false
            }
        case login_failed:
            return {
                ...prevState,
                accessToken:null,
                loading:false,
                error:payload
            }
        case load_profile:
            return {
                ...prevState,
                
                user:payload
            }
           case log_out:
           return{
               ...prevState,
               accessToken:null,
               user:null

           }
          
        default:
        return prevState
    }

}