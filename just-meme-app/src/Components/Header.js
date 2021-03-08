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

function Header() {
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
                <HeaderInfo>
                    <Avatar src="" className="Avatar"/>
                    <h4>Swasthik</h4>
                </HeaderInfo>
                <IconButton>
                    <ExpandMoreIcon className="ExapandIcon"/>
                </IconButton>
            </HeaderRight>
            
        </NavWrapper>
        <Wrapper>

            

            <HeaderCenter>
            <div className="header_option" id="sidebar" > 
                <Sidebar/>
            </div>
                <div className = 'header_option' id = "homeicon">
                <HomeIcon fontSize="large"/>
                </div>
                <div className = 'header_option'>
                <AddCircleOutlineIcon  fontSize="large"/>
                </div>
                <div className = 'header_option'>
                <ChatBubbleIcon  fontSize="large"/>
                </div>
                <div className = 'header_option'>
                <SupervisedUserCircleIcon fontSize="large"/>
                </div>
                
            </HeaderCenter>
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
    z-index: 1000;
`
const Wrapper = styled.div`
    background-color : white;  
    padding : 15px 20px;
    box-shadow: 0px 5px 8px -9px rgba(0,0,0,0.75);
    
    

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
         
        height : 15%;

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
        min-width : 30px;
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
        max-height 35px;

    }
`
const HeaderCenter = styled.div`
    margin-top : 2px;
    display : flex;
    
    align-items : left;
    justify-content : center;
    #homeicon >  .MuiSvgIcon-root{
        color: rgb(129, 89, 240);  

    }
    #homeicon{
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
         
        
        max-height 30px;

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
    display : flex;
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