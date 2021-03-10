import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@material-ui/core'
import { useStateValue } from '../Contexts/StateProvider'
function UserPage() {
    const [{user} , dispatch] = useStateValue();
    console.log(user)
    return (
        <Card>
            <Avatar src = {user.photoURL} />
            <h2>Name : { user.displayName}</h2>
            <h2>Email : { user.email}</h2>
        </Card>
    )
}

export default UserPage

const Card = styled.div`
`

