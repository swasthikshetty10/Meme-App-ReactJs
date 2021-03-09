import React from 'react'
import { Avatar } from '@material-ui/core'
import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import {useState} from 'react';
import { useStateValue } from '../Contexts/StateProvider'

function PostFeed() {
    const handleSubmit = (e) => {
       e.preventDefault();
       setInput("");
       setUrl("");
    }
    const [input , setInput] = useState("");
    const [url , setUrl] = useState("");
    const [{user} , dispatch] = useStateValue();

    //db
    // setInput("");
    // setUrl("");
    return (
        <Feed>
            <form>
            <Top>
                
                <Avatar ClassNames="Avatar" src={user.photoURL} />

                <input 
                value = {input}
                onChange={(e)=> setInput(e.target.value)}
                className="MsgSender" type="text" placeholder = "Ready for meme? Just post one"/>
                <input 
                value = {url}
                onChange={(e)=> setUrl(e.target.value)}
                ClassName = "UrlSender"type="text" placeholder = "Image Url"/>
                <button  className="HiddenBtn" onClick={handleSubmit} type = "submit">
                    Hidden btn
                </button>
                
            </Top>
           
            <Bottom>
                <div>
                <PhotoLibraryIcon style={{ color : "red"}}/>
                <h3>Photo</h3>
                </div>
                <div>
                <button className= "btn" onClick={handleSubmit} type = "submit">
                <div>  <SendIcon/><h3>Submit</h3> </div>
                </button>
                </div>
            </Bottom>
            </form>
        </Feed>
    )
}

export default PostFeed

const Feed = styled.div`

display : flex;
margin-top: 30px
color: rgb(231, 231, 231);
flex-direction: column;
background-color: white;
border-radius: 15px;
box-shadow: 0px 5px 7px -7px rgb(0, 0, 0, 0.75);
width : 100%;

`


const Top = styled.div`

display : flex;
border-bottom: 1px solid rgb(250, 250, 250);
padding : 15px;
padding-bottom : 0px;

  .Avatar{
    z-index: -1;
  }
    .MsgSender{
        width : 250%;
    }
    .UrlSender{
        
    }
    input {
        flex : auto;
        align-items: center;
    margin-left : 10px;
    max-height 40px;
    padding : 5px 20px;
    
    border-radius : 999px;
    background-color: rgb(233, 233, 233);
        width : 100%;
        min-width : 2cm;
        outline-width: 0;
        border: none;
        resize: vertical;
    }
    .HiddenBtn {
        display : none;
    }
`
const Bottom= styled.div`
display: flex;
justify-content : space-evenly;
padding: 20px;
align-items: center;
color : gray;

margin : 5px;
h3{
    color : gray;
    font-size: medium;
    margin-left : 10px;
}
div{
    border-radius: 20px;
    display : flex;
    height : 50px;
    width : 150px;
    justify-content : center;
    align-items : center;
    :hover {
        background-color: #eff2f5;
    }
    cursor : pointer;
}

.btn{
    outline-width: 0;
    border: none;
    resize: vertical;
    background-color: transparent;
}
`