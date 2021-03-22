
import React from 'react'
import { Avatar } from '@material-ui/core'
import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import {useState , useRef } from 'react';
import { useStateValue } from '../Contexts/StateProvider'
import  db from '../firebaseConfig' 
import firebase from 'firebase'
import { Done } from '@material-ui/icons';
function SendPost() {
    const openFile = useRef(null)
    const onButtonClick = () => {
        // `current` points to the mounted file input element
       openFile.current.click();
      };
      const randmeme = () =>{
        fetch("https://epaxai.azurewebsites.net/getmeme/")
        .then(response => response.json())
        .then(
          data => 
          console.log(data)
        //   db.collection('posts').add({
        //     profilePic : user.photoURL,
        //     image : "https://www.tenouk.com/Module10_files/preprocessordirective014.png",
        //     username : "ProgrammerBot",
        //     timestamp : firebase.firestore.FieldValue.serverTimestamp(),
        //     message : data.title,
        //     liked : false,
        //     likes : 0,
        //    })
        )
    
      }
    const [input , setInput] = useState("");
    const [url , setUrl] = useState("");
    const [img , setImg] = useState("");
    const [{user} , dispatch] = useStateValue();
    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection('posts').add({
         profilePic : user.photoURL,
         image : url,
         username : user.displayName,
         timestamp : firebase.firestore.FieldValue.serverTimestamp(),
         message : input,
         liked : false,
         likes : 0,
        })
        console.log(Done)
        setInput("");
        setUrl("");
     }

    return (
        <Feed>
            <form>
            <Top>
                <div ClassName = "Userdata" style = {{ display : "flex", padding: "10px"  }}>
                <Avatar ClassNames="Avatar" src={user.photoURL} />
                <h2>{user.displayName}</h2>
                </div>

                <div style = {{  padding: "10px"  }}>
                <input 
                onChange={(e)=> setInput(e.target.value)}
                className="MsgSender" type="text" placeholder = {`Ready for meme? ${ user.displayName}`}/>
                </div>


                <div style = {{ marginInline : "10px" }}>
                <input 
                value = {url}
                onChange={(e)=> setUrl(e.target.value)}
                ClassName = "UrlSender"type="text" placeholder = "Image Url"/>
                </div>


                <button  className="HiddenBtn" onClick={handleSubmit} type = "submit">
                    Hidden btn
                </button>
                
            </Top>
           
            <Bottom>
                <input type='file' value ={img} id='file' ref={openFile} style={{display: 'none'}}/>
                <div onClick = {onButtonClick}>
                <PhotoLibraryIcon style={{ color : "red"}}/>
                Photo
                </div>
                <div>
                <button className= "btn" onClick={handleSubmit} type = "submit">
                <div>  <SendIcon/><h3>Submit</h3> </div>
                </button>
                </div>
            </Bottom>
            </form>
            <button onClick = {randmeme}>FFF</button>
        </Feed>
    )
}

export default SendPost

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
flex-direction : column;

  .Avatar{
    z-index: -1;
  }
    .MsgSender{
       
    }
    .UrlSender{
        
    }
    input {
        
        align-items: center;
        height : 40px;
        
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