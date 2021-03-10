import React from 'react'
import styled from 'styled-components'
import SendPost from './PostFeed.js'
import Post from './PostCard.js'
import  db from '../firebaseConfig' 
import {useState , useEffect} from 'react';
import { useStateValue } from '../Contexts/StateProvider'
function Feed() {

    const [posts , SetPost] = useState([]);
    useEffect(() => {
        db.collection('posts').orderBy('timestamp' , 'desc').onSnapshot(snapshot => (
            SetPost(snapshot.docs.map(doc => ({id : doc.id ,data :  doc.data()})))
        ))
        
    }, [])

    return (
        <div>
            <FeedWrapper>
                {/* Trending Memes */}
                
                {/* Message Sender */}
                <SendPost/>
                  {/* Message Sender */}
                  {posts.map((post)=>(
                     <Post 
                     key= {post.id}
                     profilePic = {post.data.profilePic} 
                     image = {post.data.image}
                     username = {post.data.username}
                     timestamp = {post.data.timestamp} 
                     message ={post.data.message}
                     liked={post.data.liked}
                     likes = {post.data.likes}  />
                  ))}
               
            </FeedWrapper>
        </div>
    )
}

export default Feed

const FeedWrapper = styled.div`



`