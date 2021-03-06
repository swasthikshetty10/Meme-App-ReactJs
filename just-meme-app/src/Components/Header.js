import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar , IconButton } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Header() {
    return (
        <Wrapper>
            <HeaderLeft>
                <div className="logo">
                    <img src = "https://cdn150.picsart.com/upscale-241747540029212.png"></img>
                </div>
               
                <Input>
                <SearchIcon/>
                <input className="Input" type = "text"/>
                </Input>
                
                

            </HeaderLeft>
            <HeaderCenter>
                <div className = 'header_option'>
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
            <HeaderRight>
                <HeaderInfo>
                    <Avatar/>
                    <h4>Swasthik</h4>
                </HeaderInfo>
                <IconButton>
                    <ExpandMoreIcon/>
                </IconButton>
            </HeaderRight>
        </Wrapper>
    )
}

export default Header

/* CSS */

const Wrapper = styled.div`
    display: flex;
    padding : 15px 20px;
    justify-content : space-between;
    position :sticky;
    background-color : white;
    z-index : 100;
    top : 0;
    box-shadow: 0px 5px 8px -9px rgba(0,0,0,0.75);


`
const HeaderLeft = styled.div`
display : flex;
justify-content : space-evenly;
`
const HeaderCenter = styled.div`
display : flex;
justify-content : center;

header_option>.MuiSvgIcon-root {
    color: gray
  }
  
header_option:hover>.MuiSvgIcon-root {
    color: rgb(129, 89, 240);
  }
  
header_option {
    display: flex;
    align-items: center;
    padding: 0 30px;
    cursor: pointer;
  }
  
header_option:hover {
    background-color: rgb(233, 233, 233);
    border-radius: 20px;
  }


`
const HeaderRight = styled.div`
display : flex;
`
const HeaderInfo = styled.div`
display : flex;
h4{
    margin-left : 10px;
}
`
const Input = styled.div`
    display: flex;
    align-items: center;
    margin-left : 10px;
    padding : 10px;
    background-color: rgb(233, 233, 233);
    border-radius : 999px;
    input {
        background-color: transparent;
        outline-width: 0;
        border: none;
    }
`