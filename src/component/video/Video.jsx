import React ,{useEffect} from 'react'
import './video.scss'
import {AiFillEye, AiOutlineColumnHeight} from 'react-icons/ai'
import request from '../../api_key'
import { useSelector } from 'react-redux'




const Video=( {video} )=> {


console.log("video page==>",video)

// const videoId=video[0].id
// console.log(videoId)

// var data =JSON.parse(sessionStorage.getItem("videoData"))
// console.log("===>data",data)
// console.log(data.id)

// var channelId,channelTitle,title,publishedAt,thumbnails = null;

// const video = video
//     const {
//     id,
//     snippet: {
//        channelId,
//        channelTitle,
//        title,
//        publishedAt,
//        thumbnails: { medium },
//     }

//  } =video





//  useEffect(() => {
//      const get_video_details= async ()=>{
//         const {
//             data: { items },
//          } = await request('/videos', {
//              params:{
//                  part:'contentDetails,statistics',
//                  id:id
                 
//              }
//          })
//          console.log("items",items)
//      }
//      get_video_details()
    
//  }, [id])





    return (
       <div className="video">
           <div className="video_top">
               {/* <img src={medium.url} alt=""/> */}
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVTuVENe1Qw0U_l8osYKFzudhzc2f1kVMKLg&usqp=CAU" alt=""/>
               <span>5:50</span>
           </div>
           <div className="video_title">
               Create app in 10 minutes 
           </div>
           <div className="video_detail">
               <span>
                   <AiFillEye />10B views •

               </span>
               <span> 1 year ago</span>
           </div>
           <div className="video_channel">
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVTuVENe1Qw0U_l8osYKFzudhzc2f1kVMKLg&usqp=CAU" alt=""/>
               <p>JawwadAKhter</p>
           </div>
       </div>
    )
}

export default Video


































