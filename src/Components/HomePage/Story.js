import { Avatar } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
function Story({ image, channelSrc, title }) {
    return (
        <StoryWrapper>
            <Avatar src={channelSrc} />
        </StoryWrapper>
    )
}

export default Story

const StoryWrapper = styled.div`
`