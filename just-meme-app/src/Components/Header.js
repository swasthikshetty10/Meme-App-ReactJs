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
                <input type = "text"/>
                <SearchIcon/>

            </HeaderLeft>
            <HeaderCenter>
                <HomeIcon fontSize="large"/>
                <AddCircleOutlineIcon  fontSize="large"/>
                <ChatBubbleIcon  fontSize="large"/>
                <SupervisedUserCircleIcon fontSize="large"/>
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
const Wrapper = styled.div`

`
const HeaderLeft = styled.div`

`
const HeaderCenter = styled.div`

`
const HeaderRight = styled.div`

`
const HeaderInfo = styled.div`

`
