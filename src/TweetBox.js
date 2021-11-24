import React, { useState } from 'react'
import './TweetBox.css'
import myavatar from './myavatar.JPG'
import { Avatar, Button } from "@material-ui/core"
import db from './firebase'

const  TweetBox = () => {
    const [tweetMessage, setTweetMessage] = useState("")
    const [tweetImage, setTweetImage] = useState("")

    const sendTweet = (e) => {
        e.preventDefault()

        db.collection('posts').add({
            displayName: 'Gus Bikos',
            username: 'gusbikos',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://pbs.twimg.com/profile_images/1404925565547827206/yygO7vCp_400x400.jpg"
        })
        
        setTweetMessage("")
        setTweetImage("")
    }

    return (
        <div className="tweetbox">
            <form>
                <div className="tweetbox-input">
                    <Avatar 
                        src={myavatar}>
                    </Avatar>
                    <input
                        value={tweetMessage} 
                        onChange={e => setTweetMessage(e.target.value)}
                        placeholder="What's happening?" 
                        type="text">   
                    </input>
                </div>
                <input className="tweetbox-imageinput"
                    value={tweetImage}
                    onChange={e => setTweetImage(e.target.value)}
                    placeholder="Optional: Enter image URL" 
                    type="text">
                </input>
                <Button onClick={sendTweet} className="tweetbox-tweetbutton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
