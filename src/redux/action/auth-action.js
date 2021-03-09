import firebase from 'firebase';
import Auth from '../../firebase';
import { load_profile, login_failed, login_request, login_success, log_out } from '../actionType';



export const login = (dispatch) => {



    dispatch({
        type: login_request
    })
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl')
    // const response =auth.signInWithPopup(provider)





    Auth
        .signInWithPopup(provider)
        .then((result) => {

            var credential = result.credential;

            console.log(credential)
            var token = credential.accessToken;
            console.log(token)

            var user = result.user;
            console.log(user)

            // console.log(user.displayName)

            const profile = {
                name: user.displayName,
                photoURL: user.photoURL
            }
            console.log(profile);


            sessionStorage.setItem("yt-accessToken",token)
            sessionStorage.setItem("yt-user",JSON.stringify(profile))

            dispatch({
                type: login_success,
                payload: token,
            })
            dispatch({
                type: load_profile,
                payload: profile
            })

        }).catch((error) => {
            console.log(error.message)
            //    console.log(error.message);
            dispatch({
                type: login_failed,
                payload: error.message
            })


        });




}




export const logout=(dispatch)=>{

Auth.signOut()
dispatch({
    type:log_out

})

sessionStorage.removeItem("yt-accessToken")
sessionStorage.removeItem("yt-user")

}







