
import React from 'react'
import { Avatar } from '@material-ui/core'
import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import { useState, useRef } from 'react';
import { useStateValue } from '../Contexts/StateProvider'
import db from '../firebaseConfig'
import firebase from 'firebase'
import { Done } from '@material-ui/icons';
import img2url from '../Utility/ImageUpload'

function SendPost() {
    const openFile = useRef(null)
    const onButtonClick = () => {
        // `current` points to the mounted file input element
        openFile.current.click();
    };

    const [input, setInput] = useState("");
    const [url, setUrl] = useState("");
    const [img, setImg] = useState({ file: "", imagePreviewUrl: "" });
    const [{ user }, dispatch] = useStateValue();
    let reader = new FileReader();
    const onImageSubmit = (e) => {
        let reader = new FileReader();
        let file = e.target.files[0];
        console.log(file)
        reader.onloadend = () => {
            setImg({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
        img2url(img.imagePreviewUrl)
    }
    const onURLSubmit = (e) => {
        let url = e.target.value;
        setUrl(url)
        setImg({
            file: "",
            imagePreviewUrl: url
        });
    }
    const Image = ({ imagePreviewUrl }) => {

        if (imagePreviewUrl) {
            return (<img src={imagePreviewUrl} />);
        } else {
            return (<div className="previewText">Please select an Image for Preview</div>);
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (url) {

            db.collection('posts').add({
                profilePic: user.photoURL,
                image: url,
                username: user.displayName,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                message: input,
                liked: [],
                likes: 0,
            })
            console.log(Done)
            setInput("");
            setUrl("");
        }


    }

    return (
        <>
            <Feed>
                <form className="p-4 bg-white rounded-xl shadow-xl">
                    <Top>
                        <div className="items-center flex gap-2"  >
                            <div><Avatar ClassNames="Avatar" src={user.photoURL} /></div>
                            <h2>{user.displayName}</h2>
                        </div>
                        <div className="my-4 w-full">
                            <input
                                onChange={(e) => setInput(e.target.value)}
                                className="w-full p-3 bg-gray-100 rounded-xl outline-none" type="text" placeholder={`Ready for meme? ${user.displayName}`} />
                        </div>
                        <div className="">
                            <input

                                onChange={onURLSubmit}
                                className="w-full p-3 bg-gray-100 rounded-xl outline-none" type="text" placeholder="Image Url" />
                        </div>
                    </Top>
                    <div className="preview p-5">
                        <div className="my-3"><p> {input} </p></div>
                        <Image imagePreviewUrl={img.imagePreviewUrl} />
                    </div>
                    <Bottom>
                        <input type='file' id='file' onChange={onImageSubmit} ref={openFile} style={{ display: 'none' }} />
                        <div onClick={onButtonClick}>
                            <PhotoLibraryIcon style={{ color: "red" }} />
                        Photo
                </div>
                        <div>
                            <button className="btn" onClick={handleSubmit} type="submit">
                                <div>  <SendIcon /><h3>Submit</h3> </div>
                            </button>
                        </div>
                    </Bottom>
                </form>

            </Feed >
            <div className="mt-5">

            </div>
        </>
    )
}

export default SendPost

const Feed = styled.div`


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
`
const Bottom = styled.div`
display: flex;
justify-content : space-evenly;
padding-bottom: 10px;
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