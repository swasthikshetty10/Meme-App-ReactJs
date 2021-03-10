
import './App.css';
import Header from './Components/Header.js'

import Sign_Up from './Components/SignUp.js'
import Feed from './Components/Feed.js'
import SendPost from './Components/SendPost'
import UserPage from './Components/UserPage'
import Chat from './Components/Chat'
import Login from './Components/Login.js'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'
import { useStateValue } from './Contexts/StateProvider'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



function App() {
  const MainPage = () => {
    return(
     <Router>

    {/* Header Components*/ }
    <Header/>
    {/* SideBar Components */ }
    <Body>
   
    {/* Feed Components */ }
    <Switch>
      <Route path = "/sendposts" component = {SendPost}/>
      <Route path = "/chats" component = {Chat}/>
      <Route path = "/user" component = {UserPage}/>
      <Route path = "/" exact component = {Feed}/>
    </Switch>
    </Body>
    </Router>

    )
  }
  const SignUp = () => {
    return(
     <>
     <Container className = "d-flex align-items-center justify-content-center " style = {{ minHeight : "100vh"}}>
       <div className = "w-100" style = {{ maxWidth : "400px"}}>
       <Sign_Up/></div>
     </Container>
    </>

    )
  }

  const [{user} , dispatch]   = useStateValue();
  return (
    <>
    
    {!user ? <Login/> : <MainPage/>}
    </>
  );
}

export default App;

const Body = styled.div`
width : 80%;
max-width: 600px;
margin: 0 auto;
margin-top : 15px;
@media only screen and (max-device-width: 600px){
        
    width : 90%;
}
`
const MainPage = styled.div`

`