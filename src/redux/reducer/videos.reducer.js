import { HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS } from "../actionType"





export const videosReducer=(state={
    videos:[],
    loading:false,
    nextPageToken:null
},action)=>{


    const {type,payload}=action


    switch (type) {

        case HOME_VIDEOS_REQUEST:
            return{
              ...state,
              loading:true,

                
            }
        
        case HOME_VIDEOS_SUCCESS:
            return{

                ...state,
                videos : payload.videos,
                loading:false,
                nextPageToken:payload.nextPageToken

            }
        
        case HOME_VIDEOS_FAIL:
            return{
                ...state,
                error:payload,
                loading:false

            }


            default:
                 return state
        
    }

}