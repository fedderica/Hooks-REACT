import React, { useState, useEffect } from 'react'
import getUser from './helpers/getUser';

const initialUser = {
    name: "Luis",
    email: "correo@correo.com"
}

const initalPosts = [
    {id: 1, title: "Post 1"},
    {id: 1, title: "Post 2"},
]

const FetchCard = () => {
    const [user, setUser] = useState(initialUser);
    const [posts, setsPosts] = useState([initialPosts]);

    const updateUser = () => {
       getUser()
       .then((newUser) => {
         setUser(newUser);
       })
    }

     useEffect(() => {
        updateUser();
     }, []);

    return (
        <div>
            <button onClick={updateUser}> 
                Another User
            </button>

            <h1>{user.name}</h1>
            <h2>{user.email}</h2>

            <br/>

            <h2> Posts - user: {user.id} </h2>
            <ul>
                {posts.map(post => (
                    <li>{post.title}</li>
                ))}
                <li> Titulo </li>
                </ul>
                </div>
    )
}

/*Realizo una consulta a una API*/

export default FetchCard