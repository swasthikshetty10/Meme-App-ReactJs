import db from '../../firebaseConfig'
import { useState, useEffect } from 'react';
import { useStateValue } from '../../Contexts/StateProvider'


function UserPosts() {
    const [{ user }, dispatch] = useStateValue();
    const [posts, SetPost] = useState([]);
    const Posts = ({ posts, user }) => {


        // let post_ = post.data.profilePic === user.photoURL && (
        //     <div className="h-full bg-gray-200 flex flex-col justify-content-center">
        //         <img className="p-2 rounded-md " src={post.data.image} />
        //     </div>)
        let user_posts = posts.filter((post) => post.data.profilePic === user.photoURL)
        return user_posts.length > 0 ? <div className="grid items-center grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"> {user_posts.map((post) => (<div className="h-full bg-gray-200 flex flex-col justify-center">
            <img className="p-2 rounded-md " src={post.data.image} />
        </div>))} </div> : <p className="h2 text-red-500 text-center p-2">Hey you haven't posted anything at.. </p>

    }
    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
            SetPost(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        ))
    }, [])
    return (
        <div className="p-4 bg-white rounded-xl shadow-xl">
            <div className="items-center p-3">
                <p class="text-center text-3xl"> Your Posts </p>
            </div>

            <Posts posts={posts} user={user} />



        </div>
    )
}

export default UserPosts
