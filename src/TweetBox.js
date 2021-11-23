import React from 'react'
import './TweetBox.css'
import myavatar from './myavatar.JPG'
import { Avatar, Button } from '@mui/material'

const  TweetBox = () => {
    return (
        <div className="tweetbox">
            <form>
                <div className="tweetbox-input">
                    <Avatar 
                        src={myavatar}>
                    </Avatar>
                    <input 
                        placeholder="What's happening?" 
                        type="text">   
                    </input>
                </div>
                <input className="tweetbox-imageinput"
                    placeholder="Optional: Enter image URL" 
                    type="text">
                </input>
                <Button className="tweetbox-tweetbutton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
