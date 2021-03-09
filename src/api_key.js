import axios from 'axios'

// console.log(process.env.YT_API_KEY)
const request = axios.create({

    baseURL:"https://youtube.googleapis.com/youtube/v3/",
    params:{
        key:"AIzaSyBe0NqUfEGfRN1uC3d7dYpQXqMABFuNzwc"
    },
})

// console.log("==>",request)

export default request;