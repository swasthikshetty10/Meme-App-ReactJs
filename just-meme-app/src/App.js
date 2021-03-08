
import './App.css';
import Header from './Components/Header.js'

import Login from './Components/Login.js'
import Feed from './Components/Feed.js'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'

function App() {
  const login = false;
  const MainPage = () => {
    return(
     <>

    {/* Header Components*/ }
    <Header/>
    {/* SideBar Components */ }
    <Body>
   
    {/* Feed Components */ }
    <Feed/>
    </Body>
    </>

    )
  }
  const SignUp = () => {
    return(
     <>
     <Container className = "d-flex align-items-center justify-content-center " style = {{ minHeight : "100vh"}}>
       <div className = "w-100" style = {{ maxWidth : "400px"}}>
       <Login/></div>
     </Container>
    </>

    )
  }
  return (
    <>
    
    {login ? <SignUp/> : <MainPage/>}
    </>
  );
}

export default App;

const Body = styled.div`

`
const MainPage = styled.div`

`