import React, { useState, useEffect } from 'react'
import TweetBox from './TweetBox'
import Post from './Post'
import './Feed.css'
import myavatar from './myavatar.JPG'
import db from './firebase'

const Feed = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => doc.data()))
        })
    }, [])

    return (
        <div className="feed">
            {/*Header*/}
                <div className="feed-header">
                    <h2>Home</h2>
                </div>

            {/*TweetBox*/}
            <TweetBox />    

            {posts.map(post => (
                <Post 
                    displayName={post.displayName} 
                    username={post.username} 
                    verified={post.true} 
                    text={post.text} 
                    image={post.image}
                    avatar={post.avatar}
                />
            ))}
        </div>
    )
}

export default Feed
