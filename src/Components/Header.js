import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar , IconButton } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Sidebar from './Sidebar.js'
import { useStateValue } from '../Contexts/StateProvider'
import { Link } from "react-router-dom";
import {useState , useEffect} from 'react';

function Header() {
    const [{user} , dispatch] = useStateValue();
    const [page ,setPage] = useState(window.location.pathname)
    useEffect(( )=> {
        console.log(page)
        setPage(window.location.pathname)
        console.log(page)

    }, [window.location.pathname])
    return (
        <NavHead>
        <NavWrapper>
            <HeaderLeft>
            
                <div className="logo">
                    <img src = "https://i.ebayimg.com/images/g/dBMAAMXQaOVRjRim/s-l300.jpg"></img>
                </div>
               
                <Input>
                <SearchIcon/>
                <input className="Input" type = "text" placeholder="Search memes"/>
                </Input>
    


            </HeaderLeft>
            
            <HeaderRight>
              
                <IconButton>
                    <ExpandMoreIcon className="ExapandIcon"/>
                </IconButton>
            </HeaderRight>
            
        </NavWrapper>
        <Wrapper>

        <div className = "MobSticky">
            <HeaderCenter >
                
            <div className="header_option" id="sidebar" > 
                <Sidebar/>
            </div>
            <Link to = "/">

                <div className = 'header_option' onClick ={() =>setTimeout(function() {setPage(window.location.pathname)}, 1)} id = {page==="/" && "pageactive" }>
                <HomeIcon fontSize="large"/>
                </div>
            </Link>
            
            <Link to = "/sendposts">
                <div className = 'header_option' onClick ={() =>setTimeout(function() {setPage(window.location.pathname)}, 1)}  id = {page==="/sendposts" && "pageactive" }>
                <AddCircleOutlineIcon  fontSize="large"/>
                </div>
            </Link>

            <Link to = "/chats">
                <div className = 'header_option'  onClick ={() =>setTimeout(function() {setPage(window.location.pathname)}, 1)}   id = {page==="/chat" && "pageactive" }>
                <ChatBubbleIcon  fontSize="large"/>
                </div>
            </Link>

            <Link to= "/user">
                <div className = 'header_option'>
                {/* <SupervisedUserCircleIcon fontSize="large"/> */}
                {/* <HeaderInfo> */}
                    <Avatar src={user.photoURL} className="Avatar"/>
                {/* <h4>{user.displyName}</h4> */}
                {/* </HeaderInfo> */}
                </div>
            </Link>   


            </HeaderCenter>
        </div>

        </Wrapper>
        </NavHead>

    )
}

export default Header

/* CSS */
const NavHead = styled.div`
position: -webkit-sticky; /* Safari */
position: sticky;
top: 0;
display : flex;
width : 100%;
flex-direction : column;
    z-index: 1000;
    @media only screen and (max-device-width: 480px){
        
        position: sticky;

    }
    @media only screen and (min-device-width: 826px){
        flex-direction : row;
        justify-content : space-evenly;
        width : 100%;
       
    }
`
const Wrapper = styled.div`
    background-color : white;  
    padding : 15px 20px;
    box-shadow: 0px 5px 8px -9px rgba(0,0,0,0.75);
    @media only screen and (max-device-width: 480px){
        position: -webkit-sticky; /* Safari */
        position: sticky;
        top: 0;
        .MobSticky {
            
        }

    }
    @media only screen and (min-device-width: 826px){
        flex-direction : row;
        justify-content : space-evenly;
        width : 100%;
        
    }

`

const NavWrapper = styled.div`

    display : flex;
    padding : 15px 20px;
    justify-content : space-between;
    
    background-color : white;
    z-index : 100;
    top : 0;
    box-shadow: 0px 5px 8px -9px rgba(0,0,0,0.75);
    
    @media only screen and (max-device-width: 480px){
         
        height : 30px;

    }
    
    
`
const HeaderLeft = styled.div`
    display : flex;
    .Sidebar{
        padding: 10px
    }
    img {
        max-height: 40px;
        color: rgb(129, 89, 240);
       
      }
      @media only screen and (max-device-width: 480px){
         
        img {
            max-height: 35px;
            color: rgb(129, 89, 240);
           
          }
        max-height 35px;
        max-width: 200px;

    }
`

const Input = styled.div`
    display: flex;
    align-items: center;
    margin-left : 10px;
    max-height 40px;
    padding : 10px;
    background-color: rgb(233, 233, 233);
    border-radius : 999px;
    input {
        background-color: transparent;
        width : 100%;
        min-width : 100px;
        outline-width: 0;
        border: none;
        resize: vertical;
    }
    @media only screen and (max-device-width: 480px){
         
        input {
            background-color: transparent;
            width : 100%;
            
            outline-width: 0;
            border: none;
            resize: vertical;
        
        }
        height 20px;
        margin-top : -3px;
    }
`
const HeaderCenter = styled.div`
    margin-top : 2px;
    display : flex;
    
    align-items : left;
    justify-content : center;
    #pageactive >  .MuiSvgIcon-root{
        color: rgb(129, 89, 240);  

    }
    #pageactive{
        border-bottom : 4px solid rgb(129, 89, 240); 
    }
    .header_option homeicon > .MuiSvgIcon-root {
        color: rgb(129, 89, 240);  
    }
    .header_option>.MuiSvgIcon-root {
        color: gray;
      }

    .header_option:hover>.MuiSvgIcon-root {
        color: rgb(129, 89, 240);
      }

    .header_option {
        display: flex;
        align-items: center;
        padding: 0 20px;
        cursor: pointer;
      }

    .header_option:hover {
        background-color: rgb(233, 233, 233);
        border-radius: 20px;
      }
      @media only screen and (max-device-width: 480px){
        margin-top: 0px;
        max-height 30px;
        width : auto;
    
         
        
        
    }
    
`
const HeaderRight = styled.div`
    display : flex;
    align-items : center;
    @media only screen and (max-device-width: 480px){
        
        max-height 35px;
        > .MuiSvgIcon-root {
            color: rgb(129, 89, 240);  
        }

    }
`
const HeaderInfo = styled.div`
    align-items : center;
    h4{
        margin-left : 2px;
    }
    
    @media only screen and (max-device-width: 480px){
        
        max-height 30px;
        max-width 80px;
        .MuiSvgIcon-root {
            size : 20px;
        }
        .Avatar{
            max-height : 33px;
            width : 33px;
        }
    }
`