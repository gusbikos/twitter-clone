import React, { useState, useEffect } from 'react'
import FlipMove from 'react-flip-move'
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

            <TweetBox />    
            <FlipMove>
                {posts.map(post => (
                    <Post 
                        key={post.text}
                        displayName={post.displayName} 
                        username={post.username} 
                        verified={post.true} 
                        text={post.text} 
                        image={post.image}
                        avatar={post.avatar}
                    />
                ))}
            </FlipMove>
        </div>
    )
}

export default Feed
