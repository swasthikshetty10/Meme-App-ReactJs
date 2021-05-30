import { Avatar } from '@material-ui/core'
import styled from 'styled-components'
import React from 'react'
//  you can also unstruct the Channel liks { Name }
function SidebarRow({ name, src }) {

    return (
        <Sidebarrow>
            <Avatar src={src} />
            <h4>{name}</h4>
        </Sidebarrow>

    )
}

export default SidebarRow

const Sidebarrow = styled.div`
display : flex;
padding : 10px ;
align-items : center;
cursor : pointer;
h4{
    margin-left : 10px;
    font-weight: 600;
}
:hover{
    background-color :  rgb(240, 240, 240);
    border-radius: 10px
}

`