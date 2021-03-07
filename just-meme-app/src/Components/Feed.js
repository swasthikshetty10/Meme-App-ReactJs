import React from 'react'
import styled from 'styled-components'
import SendPost from './PostFeed.js'

function Feed() {
    return (
        <div>
            <FeedWrapper>
                {/* Trending Memes */}
                <SendPost/>
                {/* Message Sender */}
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