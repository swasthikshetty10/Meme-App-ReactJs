import React from 'react'
import styled from 'styled-components'


function Chat() {




    return (
        <ChatBody>
            <h2><span>Welcome </span><span>To</span><span>Chat</span> </h2>
            <iframe className="frame" src="https://letstalkapp.netlify.app/">

            </iframe>
        </ChatBody>
    )
}

export default Chat
const ChatBody = styled.div`
@import url("https://fonts.googleapis.com/css?family=Luckiest+Guy&display=swap");
text-align: center;
h2{
    padding : 10px;
    
}
h2 {
    margin: 0;
    font-size: 2.5em;
    color: #9450cc;
    text-shadow: 0 0.1em 20px rgba(0, 0, 0, 1), 0.05em -0.03em 0 rgba(0, 0, 0, 1),
      0.05em 0.005em 0 rgba(0, 0, 0, 1), 0em 0.08em 0 rgba(0, 0, 0, 1),
      0.05em 0.08em 0 rgba(0, 0, 0, 1), 0px -0.03em 0 rgba(0, 0, 0, 1),
      -0.03em -0.03em 0 rgba(0, 0, 0, 1), -0.03em 0.08em 0 rgba(0, 0, 0, 1), -0.03em 0 0 rgba(0, 0, 0, 1);
    span {
      transform: scale(0.9);
      display: inline-block;
      padding : 5px;
    }
    span:first-child {
      animation: bop 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards infinite
        alternate;
    }
    span:last-child {
      animation: bopB 1s 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards
        infinite alternate;
    }
    }
    @keyframes bop {
    0% {
      transform: scale(0.9);
    }
    50%,
    100% {
      transform: scale(1);
    }
    }
    @keyframes bopB {
    0% {
      transform: scale(0.9);
    }
    80%,
    100% {
      transform: scale(1) rotateZ(-3deg);
    }
    }
.frame {
    margin : 0;
    height : 80vh;
    width : 100%;

}
`