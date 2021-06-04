import React from 'react'
import { Avatar } from '@material-ui/core'
import styled from 'styled-components'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import QuestionAnswerRoundedIcon from '@material-ui/icons/QuestionAnswerRounded';
import { useState, useEffect } from 'react'
// import { useStateValue } from '../Contexts/StateProvider'
import db from '../../firebaseConfig'
import { useStateValue } from '../../Contexts/StateProvider'
function PostCard({ id, profilePic, image, username, timestamp, message, liked, likes }) {

    const [{ user }, dispatch] = useStateValue();
    function removeItemOnce(arr, value) {
        var index = arr.indexOf(value);
        if (index > -1) {
            arr.splice(index);
        }
        return arr;
    }
    const addlike = () => {
        if (!liked.includes(`${user.uid}`)) {
            liked.push(`${user.uid}`)
            console.log(liked)
            db.collection('posts').doc(id).update({
                likes: likes += 1,
                liked: liked,

            })
            console.log(id);
        }
        else if (liked.includes(`${user.uid}`)) {
            liked.push(id)
            db.collection('posts').doc(id).update({
                likes: likes -= 1,
                liked: removeItemOnce(liked, user.uid)

            })
        }
    }

    const Liked = props => {
        let { isLiked } = props;

        if (isLiked) {
            return (
                <div onClick={addlike} className="LikeCmtIcon red">
                    <FavoriteIcon />
                </div>
            )
        }
        else if (!isLiked) {
            return (
                <div onClick={addlike} className="LikeCmtIcon">
                    <FavoriteBorderIcon />
                </div>
            )

        }
        return (
            <div onClick={addlike} className="LikeCmtIcon">
                <FavoriteBorderIcon />
            </div>
        )
    }
    return (
        <Card className={timestamp}>
            <Top>
                <Avatar src={profilePic} className="Avatar" />
                <PostInfo>

                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </PostInfo>
            </Top>

            <Image>
                <p>{message}</p>
                <img src={image} alt="" />
            </Image>

            <Bottom>
                <div className="LikeCmt ">
                    <Liked isLiked={liked.includes(`${user.uid}`)} />
                    <div className="LikeCmtIcon">
                        <QuestionAnswerRoundedIcon />
                    </div>

                </div>
                <div className="Title">
                    <h4>{likes} Likes</h4>

                </div>


            </Bottom>


        </Card>
    )
}



export default PostCard
const Card = styled.div`
margin: 0 auto;
margin-top : 15px;
flex-direction: column;
background-color: white;
border-radius: 15px;
z-index : -2;
box-shadow: 0px 5px 7px -7px rgb(0, 0, 0, 0.75);
width : 100%;
`

const Top = styled.div`
align-items : center;
display : flex;
padding : 8px;
border-bottom: solid rgb(222, 224, 224 , 0.75);
`

const PostInfo = styled.div`
margin-left: 10px;
display : flex;
flex-direction : column;
font-color : black;
h3{
    font-size : 18px;
}
p{
    font-weight : 450;
    font-size : 13px;
    color : gray;
}
`
const Bottom = styled.div`
display : flex;
flex-direction : column; 
padding : 10px;
  display : flex;
border-top: solid rgb(222, 224, 224 , 0.75);
 
 margin-top : 10px;
 .LikeCmt{
    
    display : flex;
    .LikeCmtIcon{
        color : rgb(56, 56, 56);
        margin-right : 15px;
        
    }
    .LikeCmtIcon:hover{
        color : rgb(222, 224, 224 , 0.75);
        cursor : pointer;
    }
    .red >  .MuiSvgIcon-root{
        color : rgb(252, 53, 53 );
    
    }
    
    .red{
    color : rgb(252, 53, 53 );
    }
 }
`

const Image = styled.div`
width : 100%;
margin-top : 10px;
p{
    padding : 10px;
}
img {
    width: 100%;
    height: auto;
    object-fit: cover;
}
`