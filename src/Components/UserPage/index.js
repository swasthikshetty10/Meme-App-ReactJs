import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@material-ui/core'
import { useStateValue } from '../../Contexts/StateProvider'
import UserPost from "./UserPost"
function UserPage() {
    const [{ user }, dispatch] = useStateValue();
    console.log(user)
    return (
        <>
            <Card className="bg-white rounded-xl shadow-md my-2">
                <Headder className=" flex  justify-center gap-2 md:gap-10">
                    <div className="Avatar my-4 ">
                        <img src={user.photoURL} />
                    </div>
                    <div className="userdata">
                        <div className="text-2xl flex gap-2 items-center"><p>{user.displayName}</p><button className="px-2 py-1 text-sm  bg-blue-500 outline-0 font-bold text-white rounded rounded-md">Follow</button></div>
                        <h2 className="text-gray-700">{user.email}</h2>
                        <div className="flex justify-start gap-2 md:gap-5"><p><span class="font-semibold" >0</span> followers </p> <p><span class="font-semibold" >0</span> Posts</p></div>
                    </div>

                </Headder>
                <div className="flex justify-center">


                </div>

            </Card>
            <UserPost />
        </>
    )
}

export default UserPage

const Card = styled.div`


`
const Headder = styled.div`
 align-items : center;

.Avatar{
   
    img {
    border-radius : 50%;
    } 
    
}
`

