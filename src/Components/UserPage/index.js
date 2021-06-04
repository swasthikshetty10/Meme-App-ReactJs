import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@material-ui/core'
import { useStateValue } from '../../Contexts/StateProvider'
function UserPage() {
    const [{ user }, dispatch] = useStateValue();
    console.log(user)
    return (
        <Card>
            <Headder>
                <div className="Avatar">
                    <img src={user.photoURL} />
                </div>
                <div className="userdata">
                    <h3>{user.displayName}</h3>
                    <h2>{user.email}</h2>
                </div>

            </Headder>
        </Card>
    )
}

export default UserPage

const Card = styled.div`
background-color : white;
border-radius : 10px;

`
const Headder = styled.div`
 display : flex;
 align-items : center;
 justify-content : center;
.Avatar{
    padding : 10px;
    img {
    border-radius : 50%;
    } 
    
}
`

