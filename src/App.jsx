import React ,{useState,useEffect} from 'react'
import {Container} from 'react-bootstrap'
import './App.css';
import Header from './component/Header/Header'
import Sidebar from './component/sidebar/Sidebar'
import Video from './component/video/Video'
import Catageriesbar from './component/catogeriesbar/Catageriesbar'
import HomeScreen from './Screen/HomeScreen/HomeScreen'
import './app.scss'
import LoginScreen from './Screen/LoginScreen/LoginScreen'
import {BrowserRouter as Router,Redirect,Route,Switch, useHistory} from 'react-router-dom'
import { useSelector } from 'react-redux';





const Layout=({children})=>{
  
const[sidebar , toggleSideBar]=useState(false)


const handleToggleSideBar=()=>toggleSideBar(value=>!value)
  return(
       <>
    <Header handleToggleSideBar={handleToggleSideBar} />
    <div className="app_container ">

    <Sidebar sidebar={sidebar} handleToggleSideBar={handleToggleSideBar} />

    <Container fluid className="app_main ">
      
      {/* <HomeScreen /> */}
      {children}
    
    </Container>
  </div>
    </>

  )
}

function App() {

const {accessToken , loading} =useSelector(state=> state.auth);
const history = useHistory()

useEffect(()=>{
  if(!accessToken && !loading){
    history.push('/auth')
  }

},[accessToken,loading,history])

  return (





  <Switch>
    
  <Route path="/" exact>
    <Layout>
      <HomeScreen />
    </Layout>
  </Route>
  <Route path="/auth">
    <LoginScreen />
  
  </Route>
  <Route path="/search">
    <Layout>

    <h1>Search ME</h1>
    </Layout>
  
  </Route>
  <Route>
    <Redirect to="/" />                 
  </Route>
  </Switch>

  );
}

export default App;
