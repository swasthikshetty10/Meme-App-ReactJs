import db from '../../firebaseConfig'
import { useState, useEffect } from 'react';
import { useStateValue } from '../../Contexts/StateProvider'


function UserPosts() {
    const [{ user }, dispatch] = useStateValue();
    const [posts, SetPost] = useState([]);
    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
            SetPost(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        ))
    }, [])
    return (
        <div className="p-4 bg-white rounded-xl shadow-xl">
            <div className="">
                <h1 class="h1"> Your Posts </h1>
            </div>

            <div className="grid items-center grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {posts.map((post) => (

                    post.data.id === user.id && (
                        <div className="h-full bg-gray-200 items-center">
                            <img className="p-2 rounded-md " src={post.data.image} />
                        </div>)


                ))}
            </div>


        </div>
    )
}

export default UserPosts
