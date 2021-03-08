import React from 'react'
import styled from 'styled-components'
import SendPost from './PostFeed.js'
import Post from './PostCard.js'

function Feed() {
    return (
        <div>
            <FeedWrapper>
                {/* Trending Memes */}
                
                {/* Message Sender */}
                <SendPost/>
                  {/* Message Sender */}
                <Post profilePic = "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" image ="https://www.testbytes.net/wp-content/uploads/2019/06/Untitled-53-300x300.png" username = "Swasthik" timestamp = "2020-90-231" message ="test msg" liked="true" likes = "5"/>
                <Post profilePic = "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" image ="https://www.testbytes.net/wp-content/uploads/2019/06/Untitled-53-300x300.png" username = "Swasthik" timestamp = "2020-90-231" message ="test msg" likes = "5"/>
            </FeedWrapper>
        </div>
    )
}

export default Feed

const FeedWrapper = styled.div`
width : 80%;
max-width: 888px;
margin: 0 auto;
margin-top : 15px;
`