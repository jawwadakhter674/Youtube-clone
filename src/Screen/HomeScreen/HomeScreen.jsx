import React, { useEffect } from 'react'
import Catageriesbar from '../../component/catogeriesbar/Catageriesbar'
import './Home.scss'
import {Col, Container , Row} from 'react-bootstrap'
import Video from '../../component/video/Video'
import { useDispatch, useSelector } from 'react-redux'
import { getPopularVideo } from '../../redux/action/video.action'



function HomeScreen() {

const dispatch = useDispatch();
const videos =useSelector(state=>state.videosReducer.videos)




console.log("homeScreen ",videos)

// console.log("homeScreen video ===>",video.videos)

// console.log(videos)
// sessionStorage.setItem("videoData",videos)
// sessionStorage.setItem("videoData",JSON.stringify(videos))


useEffect(() => {
    
getPopularVideo(dispatch)


}, [])

    return (
        <Container>
            <Catageriesbar />
            <Row>
         {
            
             [videos].map(video=>(
                 <Col  lg={3} md={4}>
                 <Video video={video} key={video.id}  />
                 
                 </Col>
             ))
         }
            </Row>
        </Container>
    )
}





export default HomeScreen
