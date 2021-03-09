import request from '../../api_key';
import { HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS } from '../actionType';

export const getPopularVideo= async(dispatch) =>{


try {
    
dispatch({
    type: HOME_VIDEOS_REQUEST,
})
const {data}=await request('/videos',{
    params:{
        part:"snippet,contentDetails,statistics",
        chart:"mostPopular",
        regionCode:"PK",
        maxResults:20,
        pageToken:'',
    }
})

console.log("video data from action of video",data)

dispatch({
    type:HOME_VIDEOS_SUCCESS,
    payload:{
        videos:data.items,
        nextPageToken:data.nextPageToken,
    },
})










} catch (error) {
    console.log(error.message)
    dispatch({
        type: HOME_VIDEOS_FAIL,
        payload:error.message
    })
    
}

}